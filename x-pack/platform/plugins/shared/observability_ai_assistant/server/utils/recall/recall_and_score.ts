/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { Logger } from '@kbn/logging';
import { AnalyticsServiceStart } from '@kbn/core/server';
import { scoreSuggestions } from './score_suggestions';
import type { Message } from '../../../common';
import type { ObservabilityAIAssistantClient } from '../../service/client';
import type { FunctionCallChatFunction } from '../../service/types';
import { RecallRanking, recallRankingEventType } from '../../analytics/recall_ranking';
import { RecalledEntry } from '../../service/knowledge_base_service';

export type RecalledSuggestion = Pick<RecalledEntry, 'id' | 'text' | 'esScore'>;

export async function recallAndScore({
  recall,
  chat,
  analytics,
  userPrompt,
  userMessageFunctionName,
  context,
  messages,
  logger,
  signal,
}: {
  recall: ObservabilityAIAssistantClient['recall'];
  chat: FunctionCallChatFunction;
  analytics: AnalyticsServiceStart;
  userPrompt: string;
  userMessageFunctionName?: string;
  context: string;
  messages: Message[];
  logger: Logger;
  signal: AbortSignal;
}): Promise<{
  relevantDocuments?: RecalledSuggestion[];
  llmScores?: Array<{ id: string; llmScore: number }>;
  suggestions: RecalledSuggestion[];
}> {
  const queries = [
    { text: userPrompt, boost: 3 },
    { text: context, boost: 1 },
  ].filter((query) => query.text.trim());

  const suggestions: RecalledSuggestion[] = (await recall({ queries })).map(
    ({ id, text, esScore }) => ({ id, text, esScore })
  );

  if (!suggestions.length) {
    logger.debug('No suggestions found during recall');
    return {
      relevantDocuments: [],
      llmScores: [],
      suggestions: [],
    };
  }

  logger.debug(`Found ${suggestions.length} suggestions during recall`);

  try {
    const { llmScores, relevantDocuments } = await scoreSuggestions({
      suggestions,
      logger,
      messages,
      userPrompt,
      userMessageFunctionName,
      context,
      signal,
      chat,
    });

    logger.debug(
      `Found ${relevantDocuments.length} relevant documents out of ${suggestions.length} suggestions`
    );

    analytics.reportEvent<RecallRanking>(recallRankingEventType, {
      scoredDocuments: suggestions.map((suggestion) => {
        const llmScore = llmScores.find((score) => score.id === suggestion.id);
        return {
          esScore: suggestion.esScore ?? -1,
          llmScore: llmScore ? llmScore.llmScore : -1,
        };
      }),
    });

    return { llmScores, relevantDocuments, suggestions };
  } catch (error) {
    logger.error(`Error scoring documents: ${error.message}`, { error });
    return {
      suggestions: suggestions.slice(0, 5),
    };
  }
}
