/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import { CoreSetup, CoreStart, Plugin } from '@kbn/core/public';
import { ExpressionsStart, ExpressionsSetup } from '@kbn/expressions-plugin/public';
import { debugRendererFactory, errorRendererFactory } from './expression_renderers';

interface SetupDeps {
  expressions: ExpressionsSetup;
}

interface StartDeps {
  expression: ExpressionsStart;
}

export type ExpressionErrorPluginSetup = void;
export type ExpressionErrorPluginStart = void;

export class ExpressionErrorPlugin
  implements Plugin<ExpressionErrorPluginSetup, ExpressionErrorPluginStart, SetupDeps, StartDeps>
{
  public setup(core: CoreSetup, { expressions }: SetupDeps): ExpressionErrorPluginSetup {
    core.getStartServices().then(([start]) => {
      expressions.registerRenderer(errorRendererFactory(start));
      expressions.registerRenderer(debugRendererFactory(start));
    });
  }

  public start(core: CoreStart): ExpressionErrorPluginStart {}

  public stop() {}
}
