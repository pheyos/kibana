// @ts-nocheck
// Generated from src/antlr/esql_parser.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import esql_parserListener from "./esql_parserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import parser_config from './parser_config.js';

export default class esql_parser extends parser_config {
	public static readonly LINE_COMMENT = 1;
	public static readonly MULTILINE_COMMENT = 2;
	public static readonly WS = 3;
	public static readonly CHANGE_POINT = 4;
	public static readonly ENRICH = 5;
	public static readonly EXPLAIN = 6;
	public static readonly COMPLETION = 7;
	public static readonly DISSECT = 8;
	public static readonly EVAL = 9;
	public static readonly GROK = 10;
	public static readonly LIMIT = 11;
	public static readonly ROW = 12;
	public static readonly SAMPLE = 13;
	public static readonly SORT = 14;
	public static readonly STATS = 15;
	public static readonly WHERE = 16;
	public static readonly DEV_INLINESTATS = 17;
	public static readonly DEV_RERANK = 18;
	public static readonly FROM = 19;
	public static readonly DEV_TIME_SERIES = 20;
	public static readonly FORK = 21;
	public static readonly JOIN_LOOKUP = 22;
	public static readonly DEV_JOIN_FULL = 23;
	public static readonly DEV_JOIN_LEFT = 24;
	public static readonly DEV_JOIN_RIGHT = 25;
	public static readonly DEV_LOOKUP = 26;
	public static readonly MV_EXPAND = 27;
	public static readonly DROP = 28;
	public static readonly KEEP = 29;
	public static readonly DEV_INSIST = 30;
	public static readonly DEV_RRF = 31;
	public static readonly RENAME = 32;
	public static readonly SHOW = 33;
	public static readonly UNKNOWN_CMD = 34;
	public static readonly CHANGE_POINT_LINE_COMMENT = 35;
	public static readonly CHANGE_POINT_MULTILINE_COMMENT = 36;
	public static readonly CHANGE_POINT_WS = 37;
	public static readonly ENRICH_POLICY_NAME = 38;
	public static readonly ENRICH_LINE_COMMENT = 39;
	public static readonly ENRICH_MULTILINE_COMMENT = 40;
	public static readonly ENRICH_WS = 41;
	public static readonly ENRICH_FIELD_LINE_COMMENT = 42;
	public static readonly ENRICH_FIELD_MULTILINE_COMMENT = 43;
	public static readonly ENRICH_FIELD_WS = 44;
	public static readonly SETTING = 45;
	public static readonly SETTING_LINE_COMMENT = 46;
	public static readonly SETTTING_MULTILINE_COMMENT = 47;
	public static readonly SETTING_WS = 48;
	public static readonly EXPLAIN_WS = 49;
	public static readonly EXPLAIN_LINE_COMMENT = 50;
	public static readonly EXPLAIN_MULTILINE_COMMENT = 51;
	public static readonly PIPE = 52;
	public static readonly QUOTED_STRING = 53;
	public static readonly INTEGER_LITERAL = 54;
	public static readonly DECIMAL_LITERAL = 55;
	public static readonly AND = 56;
	public static readonly ASC = 57;
	public static readonly ASSIGN = 58;
	public static readonly BY = 59;
	public static readonly CAST_OP = 60;
	public static readonly COLON = 61;
	public static readonly COMMA = 62;
	public static readonly DESC = 63;
	public static readonly DOT = 64;
	public static readonly FALSE = 65;
	public static readonly FIRST = 66;
	public static readonly IN = 67;
	public static readonly IS = 68;
	public static readonly LAST = 69;
	public static readonly LIKE = 70;
	public static readonly NOT = 71;
	public static readonly NULL = 72;
	public static readonly NULLS = 73;
	public static readonly ON = 74;
	public static readonly OR = 75;
	public static readonly PARAM = 76;
	public static readonly RLIKE = 77;
	public static readonly TRUE = 78;
	public static readonly WITH = 79;
	public static readonly EQ = 80;
	public static readonly CIEQ = 81;
	public static readonly NEQ = 82;
	public static readonly LT = 83;
	public static readonly LTE = 84;
	public static readonly GT = 85;
	public static readonly GTE = 86;
	public static readonly PLUS = 87;
	public static readonly MINUS = 88;
	public static readonly ASTERISK = 89;
	public static readonly SLASH = 90;
	public static readonly PERCENT = 91;
	public static readonly LEFT_BRACES = 92;
	public static readonly RIGHT_BRACES = 93;
	public static readonly DOUBLE_PARAMS = 94;
	public static readonly NAMED_OR_POSITIONAL_PARAM = 95;
	public static readonly NAMED_OR_POSITIONAL_DOUBLE_PARAMS = 96;
	public static readonly OPENING_BRACKET = 97;
	public static readonly CLOSING_BRACKET = 98;
	public static readonly LP = 99;
	public static readonly RP = 100;
	public static readonly UNQUOTED_IDENTIFIER = 101;
	public static readonly QUOTED_IDENTIFIER = 102;
	public static readonly EXPR_LINE_COMMENT = 103;
	public static readonly EXPR_MULTILINE_COMMENT = 104;
	public static readonly EXPR_WS = 105;
	public static readonly METADATA = 106;
	public static readonly UNQUOTED_SOURCE = 107;
	public static readonly FROM_LINE_COMMENT = 108;
	public static readonly FROM_MULTILINE_COMMENT = 109;
	public static readonly FROM_WS = 110;
	public static readonly FORK_WS = 111;
	public static readonly FORK_LINE_COMMENT = 112;
	public static readonly FORK_MULTILINE_COMMENT = 113;
	public static readonly JOIN = 114;
	public static readonly USING = 115;
	public static readonly JOIN_LINE_COMMENT = 116;
	public static readonly JOIN_MULTILINE_COMMENT = 117;
	public static readonly JOIN_WS = 118;
	public static readonly LOOKUP_LINE_COMMENT = 119;
	public static readonly LOOKUP_MULTILINE_COMMENT = 120;
	public static readonly LOOKUP_WS = 121;
	public static readonly LOOKUP_FIELD_LINE_COMMENT = 122;
	public static readonly LOOKUP_FIELD_MULTILINE_COMMENT = 123;
	public static readonly LOOKUP_FIELD_WS = 124;
	public static readonly MVEXPAND_LINE_COMMENT = 125;
	public static readonly MVEXPAND_MULTILINE_COMMENT = 126;
	public static readonly MVEXPAND_WS = 127;
	public static readonly ID_PATTERN = 128;
	public static readonly PROJECT_LINE_COMMENT = 129;
	public static readonly PROJECT_MULTILINE_COMMENT = 130;
	public static readonly PROJECT_WS = 131;
	public static readonly AS = 132;
	public static readonly RENAME_LINE_COMMENT = 133;
	public static readonly RENAME_MULTILINE_COMMENT = 134;
	public static readonly RENAME_WS = 135;
	public static readonly INFO = 136;
	public static readonly SHOW_LINE_COMMENT = 137;
	public static readonly SHOW_MULTILINE_COMMENT = 138;
	public static readonly SHOW_WS = 139;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_singleStatement = 0;
	public static readonly RULE_query = 1;
	public static readonly RULE_sourceCommand = 2;
	public static readonly RULE_processingCommand = 3;
	public static readonly RULE_whereCommand = 4;
	public static readonly RULE_dataType = 5;
	public static readonly RULE_rowCommand = 6;
	public static readonly RULE_fields = 7;
	public static readonly RULE_field = 8;
	public static readonly RULE_rerankFields = 9;
	public static readonly RULE_rerankField = 10;
	public static readonly RULE_fromCommand = 11;
	public static readonly RULE_timeSeriesCommand = 12;
	public static readonly RULE_indexPatternAndMetadataFields = 13;
	public static readonly RULE_indexPattern = 14;
	public static readonly RULE_clusterString = 15;
	public static readonly RULE_selectorString = 16;
	public static readonly RULE_unquotedIndexString = 17;
	public static readonly RULE_indexString = 18;
	public static readonly RULE_metadata = 19;
	public static readonly RULE_evalCommand = 20;
	public static readonly RULE_statsCommand = 21;
	public static readonly RULE_aggFields = 22;
	public static readonly RULE_aggField = 23;
	public static readonly RULE_qualifiedName = 24;
	public static readonly RULE_qualifiedNamePattern = 25;
	public static readonly RULE_qualifiedNamePatterns = 26;
	public static readonly RULE_identifier = 27;
	public static readonly RULE_identifierPattern = 28;
	public static readonly RULE_parameter = 29;
	public static readonly RULE_doubleParameter = 30;
	public static readonly RULE_identifierOrParameter = 31;
	public static readonly RULE_limitCommand = 32;
	public static readonly RULE_sortCommand = 33;
	public static readonly RULE_orderExpression = 34;
	public static readonly RULE_keepCommand = 35;
	public static readonly RULE_dropCommand = 36;
	public static readonly RULE_renameCommand = 37;
	public static readonly RULE_renameClause = 38;
	public static readonly RULE_dissectCommand = 39;
	public static readonly RULE_grokCommand = 40;
	public static readonly RULE_mvExpandCommand = 41;
	public static readonly RULE_commandOptions = 42;
	public static readonly RULE_commandOption = 43;
	public static readonly RULE_explainCommand = 44;
	public static readonly RULE_subqueryExpression = 45;
	public static readonly RULE_showCommand = 46;
	public static readonly RULE_enrichCommand = 47;
	public static readonly RULE_enrichWithClause = 48;
	public static readonly RULE_sampleCommand = 49;
	public static readonly RULE_lookupCommand = 50;
	public static readonly RULE_inlinestatsCommand = 51;
	public static readonly RULE_changePointCommand = 52;
	public static readonly RULE_insistCommand = 53;
	public static readonly RULE_forkCommand = 54;
	public static readonly RULE_forkSubQueries = 55;
	public static readonly RULE_forkSubQuery = 56;
	public static readonly RULE_forkSubQueryCommand = 57;
	public static readonly RULE_forkSubQueryProcessingCommand = 58;
	public static readonly RULE_rrfCommand = 59;
	public static readonly RULE_rerankCommand = 60;
	public static readonly RULE_completionCommand = 61;
	public static readonly RULE_booleanExpression = 62;
	public static readonly RULE_regexBooleanExpression = 63;
	public static readonly RULE_matchBooleanExpression = 64;
	public static readonly RULE_valueExpression = 65;
	public static readonly RULE_operatorExpression = 66;
	public static readonly RULE_primaryExpression = 67;
	public static readonly RULE_functionExpression = 68;
	public static readonly RULE_functionName = 69;
	public static readonly RULE_mapExpression = 70;
	public static readonly RULE_entryExpression = 71;
	public static readonly RULE_constant = 72;
	public static readonly RULE_booleanValue = 73;
	public static readonly RULE_numericValue = 74;
	public static readonly RULE_decimalValue = 75;
	public static readonly RULE_integerValue = 76;
	public static readonly RULE_string = 77;
	public static readonly RULE_comparisonOperator = 78;
	public static readonly RULE_joinCommand = 79;
	public static readonly RULE_joinTarget = 80;
	public static readonly RULE_joinCondition = 81;
	public static readonly RULE_joinPredicate = 82;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            "'change_point'", 
                                                            "'enrich'", 
                                                            "'explain'", 
                                                            "'completion'", 
                                                            "'dissect'", 
                                                            "'eval'", "'grok'", 
                                                            "'limit'", "'row'", 
                                                            "'sample'", 
                                                            "'sort'", "'stats'", 
                                                            "'where'", null, 
                                                            null, "'from'", 
                                                            null, "'fork'", 
                                                            "'lookup'", 
                                                            null, null, 
                                                            null, null, 
                                                            "'mv_expand'", 
                                                            "'drop'", "'keep'", 
                                                            null, null, 
                                                            "'rename'", 
                                                            "'show'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'|'", 
                                                            null, null, 
                                                            null, "'and'", 
                                                            "'asc'", "'='", 
                                                            "'by'", "'::'", 
                                                            "':'", "','", 
                                                            "'desc'", "'.'", 
                                                            "'false'", "'first'", 
                                                            "'in'", "'is'", 
                                                            "'last'", "'like'", 
                                                            "'not'", "'null'", 
                                                            "'nulls'", "'on'", 
                                                            "'or'", "'?'", 
                                                            "'rlike'", "'true'", 
                                                            "'with'", "'=='", 
                                                            "'=~'", "'!='", 
                                                            "'<'", "'<='", 
                                                            "'>'", "'>='", 
                                                            "'+'", "'-'", 
                                                            "'*'", "'/'", 
                                                            "'%'", "'{'", 
                                                            "'}'", "'??'", 
                                                            null, null, 
                                                            null, "']'", 
                                                            null, "')'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'metadata'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'join'", 
                                                            "'USING'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'as'", 
                                                            null, null, 
                                                            null, "'info'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "LINE_COMMENT", 
                                                             "MULTILINE_COMMENT", 
                                                             "WS", "CHANGE_POINT", 
                                                             "ENRICH", "EXPLAIN", 
                                                             "COMPLETION", 
                                                             "DISSECT", 
                                                             "EVAL", "GROK", 
                                                             "LIMIT", "ROW", 
                                                             "SAMPLE", "SORT", 
                                                             "STATS", "WHERE", 
                                                             "DEV_INLINESTATS", 
                                                             "DEV_RERANK", 
                                                             "FROM", "DEV_TIME_SERIES", 
                                                             "FORK", "JOIN_LOOKUP", 
                                                             "DEV_JOIN_FULL", 
                                                             "DEV_JOIN_LEFT", 
                                                             "DEV_JOIN_RIGHT", 
                                                             "DEV_LOOKUP", 
                                                             "MV_EXPAND", 
                                                             "DROP", "KEEP", 
                                                             "DEV_INSIST", 
                                                             "DEV_RRF", 
                                                             "RENAME", "SHOW", 
                                                             "UNKNOWN_CMD", 
                                                             "CHANGE_POINT_LINE_COMMENT", 
                                                             "CHANGE_POINT_MULTILINE_COMMENT", 
                                                             "CHANGE_POINT_WS", 
                                                             "ENRICH_POLICY_NAME", 
                                                             "ENRICH_LINE_COMMENT", 
                                                             "ENRICH_MULTILINE_COMMENT", 
                                                             "ENRICH_WS", 
                                                             "ENRICH_FIELD_LINE_COMMENT", 
                                                             "ENRICH_FIELD_MULTILINE_COMMENT", 
                                                             "ENRICH_FIELD_WS", 
                                                             "SETTING", 
                                                             "SETTING_LINE_COMMENT", 
                                                             "SETTTING_MULTILINE_COMMENT", 
                                                             "SETTING_WS", 
                                                             "EXPLAIN_WS", 
                                                             "EXPLAIN_LINE_COMMENT", 
                                                             "EXPLAIN_MULTILINE_COMMENT", 
                                                             "PIPE", "QUOTED_STRING", 
                                                             "INTEGER_LITERAL", 
                                                             "DECIMAL_LITERAL", 
                                                             "AND", "ASC", 
                                                             "ASSIGN", "BY", 
                                                             "CAST_OP", 
                                                             "COLON", "COMMA", 
                                                             "DESC", "DOT", 
                                                             "FALSE", "FIRST", 
                                                             "IN", "IS", 
                                                             "LAST", "LIKE", 
                                                             "NOT", "NULL", 
                                                             "NULLS", "ON", 
                                                             "OR", "PARAM", 
                                                             "RLIKE", "TRUE", 
                                                             "WITH", "EQ", 
                                                             "CIEQ", "NEQ", 
                                                             "LT", "LTE", 
                                                             "GT", "GTE", 
                                                             "PLUS", "MINUS", 
                                                             "ASTERISK", 
                                                             "SLASH", "PERCENT", 
                                                             "LEFT_BRACES", 
                                                             "RIGHT_BRACES", 
                                                             "DOUBLE_PARAMS", 
                                                             "NAMED_OR_POSITIONAL_PARAM", 
                                                             "NAMED_OR_POSITIONAL_DOUBLE_PARAMS", 
                                                             "OPENING_BRACKET", 
                                                             "CLOSING_BRACKET", 
                                                             "LP", "RP", 
                                                             "UNQUOTED_IDENTIFIER", 
                                                             "QUOTED_IDENTIFIER", 
                                                             "EXPR_LINE_COMMENT", 
                                                             "EXPR_MULTILINE_COMMENT", 
                                                             "EXPR_WS", 
                                                             "METADATA", 
                                                             "UNQUOTED_SOURCE", 
                                                             "FROM_LINE_COMMENT", 
                                                             "FROM_MULTILINE_COMMENT", 
                                                             "FROM_WS", 
                                                             "FORK_WS", 
                                                             "FORK_LINE_COMMENT", 
                                                             "FORK_MULTILINE_COMMENT", 
                                                             "JOIN", "USING", 
                                                             "JOIN_LINE_COMMENT", 
                                                             "JOIN_MULTILINE_COMMENT", 
                                                             "JOIN_WS", 
                                                             "LOOKUP_LINE_COMMENT", 
                                                             "LOOKUP_MULTILINE_COMMENT", 
                                                             "LOOKUP_WS", 
                                                             "LOOKUP_FIELD_LINE_COMMENT", 
                                                             "LOOKUP_FIELD_MULTILINE_COMMENT", 
                                                             "LOOKUP_FIELD_WS", 
                                                             "MVEXPAND_LINE_COMMENT", 
                                                             "MVEXPAND_MULTILINE_COMMENT", 
                                                             "MVEXPAND_WS", 
                                                             "ID_PATTERN", 
                                                             "PROJECT_LINE_COMMENT", 
                                                             "PROJECT_MULTILINE_COMMENT", 
                                                             "PROJECT_WS", 
                                                             "AS", "RENAME_LINE_COMMENT", 
                                                             "RENAME_MULTILINE_COMMENT", 
                                                             "RENAME_WS", 
                                                             "INFO", "SHOW_LINE_COMMENT", 
                                                             "SHOW_MULTILINE_COMMENT", 
                                                             "SHOW_WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"singleStatement", "query", "sourceCommand", "processingCommand", "whereCommand", 
		"dataType", "rowCommand", "fields", "field", "rerankFields", "rerankField", 
		"fromCommand", "timeSeriesCommand", "indexPatternAndMetadataFields", "indexPattern", 
		"clusterString", "selectorString", "unquotedIndexString", "indexString", 
		"metadata", "evalCommand", "statsCommand", "aggFields", "aggField", "qualifiedName", 
		"qualifiedNamePattern", "qualifiedNamePatterns", "identifier", "identifierPattern", 
		"parameter", "doubleParameter", "identifierOrParameter", "limitCommand", 
		"sortCommand", "orderExpression", "keepCommand", "dropCommand", "renameCommand", 
		"renameClause", "dissectCommand", "grokCommand", "mvExpandCommand", "commandOptions", 
		"commandOption", "explainCommand", "subqueryExpression", "showCommand", 
		"enrichCommand", "enrichWithClause", "sampleCommand", "lookupCommand", 
		"inlinestatsCommand", "changePointCommand", "insistCommand", "forkCommand", 
		"forkSubQueries", "forkSubQuery", "forkSubQueryCommand", "forkSubQueryProcessingCommand", 
		"rrfCommand", "rerankCommand", "completionCommand", "booleanExpression", 
		"regexBooleanExpression", "matchBooleanExpression", "valueExpression", 
		"operatorExpression", "primaryExpression", "functionExpression", "functionName", 
		"mapExpression", "entryExpression", "constant", "booleanValue", "numericValue", 
		"decimalValue", "integerValue", "string", "comparisonOperator", "joinCommand", 
		"joinTarget", "joinCondition", "joinPredicate",
	];
	public get grammarFileName(): string { return "esql_parser.g4"; }
	public get literalNames(): (string | null)[] { return esql_parser.literalNames; }
	public get symbolicNames(): (string | null)[] { return esql_parser.symbolicNames; }
	public get ruleNames(): string[] { return esql_parser.ruleNames; }
	public get serializedATN(): number[] { return esql_parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, esql_parser._ATN, esql_parser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public singleStatement(): SingleStatementContext {
		let localctx: SingleStatementContext = new SingleStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, esql_parser.RULE_singleStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 166;
			this.query(0);
			this.state = 167;
			this.match(esql_parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public query(): QueryContext;
	public query(_p: number): QueryContext;
	// @RuleVersion(0)
	public query(_p?: number): QueryContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: QueryContext = new QueryContext(this, this._ctx, _parentState);
		let _prevctx: QueryContext = localctx;
		let _startState: number = 2;
		this.enterRecursionRule(localctx, 2, esql_parser.RULE_query, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new SingleCommandQueryContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 170;
			this.sourceCommand();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 177;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new CompositeQueryContext(this, new QueryContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, esql_parser.RULE_query);
					this.state = 172;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 173;
					this.match(esql_parser.PIPE);
					this.state = 174;
					this.processingCommand();
					}
					}
				}
				this.state = 179;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sourceCommand(): SourceCommandContext {
		let localctx: SourceCommandContext = new SourceCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, esql_parser.RULE_sourceCommand);
		try {
			this.state = 186;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 180;
				this.explainCommand();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 181;
				this.fromCommand();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 182;
				this.rowCommand();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 183;
				this.showCommand();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 184;
				if (!(this.isDevVersion())) {
					throw this.createFailedPredicateException("this.isDevVersion()");
				}
				this.state = 185;
				this.timeSeriesCommand();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public processingCommand(): ProcessingCommandContext {
		let localctx: ProcessingCommandContext = new ProcessingCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, esql_parser.RULE_processingCommand);
		try {
			this.state = 215;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 188;
				this.evalCommand();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 189;
				this.whereCommand();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 190;
				this.keepCommand();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 191;
				this.limitCommand();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 192;
				this.statsCommand();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 193;
				this.sortCommand();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 194;
				this.dropCommand();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 195;
				this.renameCommand();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 196;
				this.dissectCommand();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 197;
				this.grokCommand();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 198;
				this.enrichCommand();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 199;
				this.mvExpandCommand();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 200;
				this.joinCommand();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 201;
				this.changePointCommand();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 202;
				this.completionCommand();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 203;
				this.sampleCommand();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 204;
				this.forkCommand();
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 205;
				if (!(this.isDevVersion())) {
					throw this.createFailedPredicateException("this.isDevVersion()");
				}
				this.state = 206;
				this.inlinestatsCommand();
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 207;
				if (!(this.isDevVersion())) {
					throw this.createFailedPredicateException("this.isDevVersion()");
				}
				this.state = 208;
				this.lookupCommand();
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 209;
				if (!(this.isDevVersion())) {
					throw this.createFailedPredicateException("this.isDevVersion()");
				}
				this.state = 210;
				this.insistCommand();
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 21);
				{
				this.state = 211;
				if (!(this.isDevVersion())) {
					throw this.createFailedPredicateException("this.isDevVersion()");
				}
				this.state = 212;
				this.rerankCommand();
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 22);
				{
				this.state = 213;
				if (!(this.isDevVersion())) {
					throw this.createFailedPredicateException("this.isDevVersion()");
				}
				this.state = 214;
				this.rrfCommand();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public whereCommand(): WhereCommandContext {
		let localctx: WhereCommandContext = new WhereCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, esql_parser.RULE_whereCommand);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 217;
			this.match(esql_parser.WHERE);
			this.state = 218;
			this.booleanExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dataType(): DataTypeContext {
		let localctx: DataTypeContext = new DataTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, esql_parser.RULE_dataType);
		try {
			localctx = new ToDataTypeContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 220;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rowCommand(): RowCommandContext {
		let localctx: RowCommandContext = new RowCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, esql_parser.RULE_rowCommand);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 222;
			this.match(esql_parser.ROW);
			this.state = 223;
			this.fields();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fields(): FieldsContext {
		let localctx: FieldsContext = new FieldsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, esql_parser.RULE_fields);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 225;
			this.field();
			this.state = 230;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 226;
					this.match(esql_parser.COMMA);
					this.state = 227;
					this.field();
					}
					}
				}
				this.state = 232;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public field(): FieldContext {
		let localctx: FieldContext = new FieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, esql_parser.RULE_field);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 236;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 233;
				this.qualifiedName();
				this.state = 234;
				this.match(esql_parser.ASSIGN);
				}
				break;
			}
			this.state = 238;
			this.booleanExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rerankFields(): RerankFieldsContext {
		let localctx: RerankFieldsContext = new RerankFieldsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, esql_parser.RULE_rerankFields);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 240;
			this.rerankField();
			this.state = 245;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 241;
					this.match(esql_parser.COMMA);
					this.state = 242;
					this.rerankField();
					}
					}
				}
				this.state = 247;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rerankField(): RerankFieldContext {
		let localctx: RerankFieldContext = new RerankFieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, esql_parser.RULE_rerankField);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 248;
			this.qualifiedName();
			this.state = 251;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 249;
				this.match(esql_parser.ASSIGN);
				this.state = 250;
				this.booleanExpression(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fromCommand(): FromCommandContext {
		let localctx: FromCommandContext = new FromCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, esql_parser.RULE_fromCommand);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 253;
			this.match(esql_parser.FROM);
			this.state = 254;
			this.indexPatternAndMetadataFields();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public timeSeriesCommand(): TimeSeriesCommandContext {
		let localctx: TimeSeriesCommandContext = new TimeSeriesCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, esql_parser.RULE_timeSeriesCommand);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 256;
			this.match(esql_parser.DEV_TIME_SERIES);
			this.state = 257;
			this.indexPatternAndMetadataFields();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public indexPatternAndMetadataFields(): IndexPatternAndMetadataFieldsContext {
		let localctx: IndexPatternAndMetadataFieldsContext = new IndexPatternAndMetadataFieldsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, esql_parser.RULE_indexPatternAndMetadataFields);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 259;
			this.indexPattern();
			this.state = 264;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 260;
					this.match(esql_parser.COMMA);
					this.state = 261;
					this.indexPattern();
					}
					}
				}
				this.state = 266;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			}
			this.state = 268;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 267;
				this.metadata();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public indexPattern(): IndexPatternContext {
		let localctx: IndexPatternContext = new IndexPatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, esql_parser.RULE_indexPattern);
		try {
			this.state = 279;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 270;
				this.clusterString();
				this.state = 271;
				this.match(esql_parser.COLON);
				this.state = 272;
				this.unquotedIndexString();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 274;
				this.unquotedIndexString();
				this.state = 275;
				this.match(esql_parser.CAST_OP);
				this.state = 276;
				this.selectorString();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 278;
				this.indexString();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public clusterString(): ClusterStringContext {
		let localctx: ClusterStringContext = new ClusterStringContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, esql_parser.RULE_clusterString);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 281;
			this.match(esql_parser.UNQUOTED_SOURCE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public selectorString(): SelectorStringContext {
		let localctx: SelectorStringContext = new SelectorStringContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, esql_parser.RULE_selectorString);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 283;
			this.match(esql_parser.UNQUOTED_SOURCE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unquotedIndexString(): UnquotedIndexStringContext {
		let localctx: UnquotedIndexStringContext = new UnquotedIndexStringContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, esql_parser.RULE_unquotedIndexString);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 285;
			this.match(esql_parser.UNQUOTED_SOURCE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public indexString(): IndexStringContext {
		let localctx: IndexStringContext = new IndexStringContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, esql_parser.RULE_indexString);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 287;
			_la = this._input.LA(1);
			if(!(_la===53 || _la===107)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public metadata(): MetadataContext {
		let localctx: MetadataContext = new MetadataContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, esql_parser.RULE_metadata);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 289;
			this.match(esql_parser.METADATA);
			this.state = 290;
			this.match(esql_parser.UNQUOTED_SOURCE);
			this.state = 295;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 291;
					this.match(esql_parser.COMMA);
					this.state = 292;
					this.match(esql_parser.UNQUOTED_SOURCE);
					}
					}
				}
				this.state = 297;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public evalCommand(): EvalCommandContext {
		let localctx: EvalCommandContext = new EvalCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, esql_parser.RULE_evalCommand);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 298;
			this.match(esql_parser.EVAL);
			this.state = 299;
			this.fields();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statsCommand(): StatsCommandContext {
		let localctx: StatsCommandContext = new StatsCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, esql_parser.RULE_statsCommand);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 301;
			this.match(esql_parser.STATS);
			this.state = 303;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 302;
				localctx._stats = this.aggFields();
				}
				break;
			}
			this.state = 307;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 305;
				this.match(esql_parser.BY);
				this.state = 306;
				localctx._grouping = this.fields();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public aggFields(): AggFieldsContext {
		let localctx: AggFieldsContext = new AggFieldsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, esql_parser.RULE_aggFields);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 309;
			this.aggField();
			this.state = 314;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 310;
					this.match(esql_parser.COMMA);
					this.state = 311;
					this.aggField();
					}
					}
				}
				this.state = 316;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public aggField(): AggFieldContext {
		let localctx: AggFieldContext = new AggFieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, esql_parser.RULE_aggField);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 317;
			this.field();
			this.state = 320;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 318;
				this.match(esql_parser.WHERE);
				this.state = 319;
				this.booleanExpression(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let localctx: QualifiedNameContext = new QualifiedNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, esql_parser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 322;
			this.identifierOrParameter();
			this.state = 327;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 323;
					this.match(esql_parser.DOT);
					this.state = 324;
					this.identifierOrParameter();
					}
					}
				}
				this.state = 329;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public qualifiedNamePattern(): QualifiedNamePatternContext {
		let localctx: QualifiedNamePatternContext = new QualifiedNamePatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, esql_parser.RULE_qualifiedNamePattern);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 330;
			this.identifierPattern();
			this.state = 335;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 331;
					this.match(esql_parser.DOT);
					this.state = 332;
					this.identifierPattern();
					}
					}
				}
				this.state = 337;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public qualifiedNamePatterns(): QualifiedNamePatternsContext {
		let localctx: QualifiedNamePatternsContext = new QualifiedNamePatternsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, esql_parser.RULE_qualifiedNamePatterns);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 338;
			this.qualifiedNamePattern();
			this.state = 343;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 339;
					this.match(esql_parser.COMMA);
					this.state = 340;
					this.qualifiedNamePattern();
					}
					}
				}
				this.state = 345;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, esql_parser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 346;
			_la = this._input.LA(1);
			if(!(_la===101 || _la===102)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifierPattern(): IdentifierPatternContext {
		let localctx: IdentifierPatternContext = new IdentifierPatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, esql_parser.RULE_identifierPattern);
		try {
			this.state = 351;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 128:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 348;
				this.match(esql_parser.ID_PATTERN);
				}
				break;
			case 76:
			case 95:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 349;
				this.parameter();
				}
				break;
			case 94:
			case 96:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 350;
				this.doubleParameter();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let localctx: ParameterContext = new ParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, esql_parser.RULE_parameter);
		try {
			this.state = 355;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 76:
				localctx = new InputParamContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 353;
				this.match(esql_parser.PARAM);
				}
				break;
			case 95:
				localctx = new InputNamedOrPositionalParamContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 354;
				this.match(esql_parser.NAMED_OR_POSITIONAL_PARAM);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public doubleParameter(): DoubleParameterContext {
		let localctx: DoubleParameterContext = new DoubleParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, esql_parser.RULE_doubleParameter);
		try {
			this.state = 359;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 94:
				localctx = new InputDoubleParamsContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 357;
				this.match(esql_parser.DOUBLE_PARAMS);
				}
				break;
			case 96:
				localctx = new InputNamedOrPositionalDoubleParamsContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 358;
				this.match(esql_parser.NAMED_OR_POSITIONAL_DOUBLE_PARAMS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifierOrParameter(): IdentifierOrParameterContext {
		let localctx: IdentifierOrParameterContext = new IdentifierOrParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, esql_parser.RULE_identifierOrParameter);
		try {
			this.state = 364;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 101:
			case 102:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 361;
				this.identifier();
				}
				break;
			case 76:
			case 95:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 362;
				this.parameter();
				}
				break;
			case 94:
			case 96:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 363;
				this.doubleParameter();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public limitCommand(): LimitCommandContext {
		let localctx: LimitCommandContext = new LimitCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, esql_parser.RULE_limitCommand);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 366;
			this.match(esql_parser.LIMIT);
			this.state = 367;
			this.constant();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sortCommand(): SortCommandContext {
		let localctx: SortCommandContext = new SortCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, esql_parser.RULE_sortCommand);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 369;
			this.match(esql_parser.SORT);
			this.state = 370;
			this.orderExpression();
			this.state = 375;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 371;
					this.match(esql_parser.COMMA);
					this.state = 372;
					this.orderExpression();
					}
					}
				}
				this.state = 377;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public orderExpression(): OrderExpressionContext {
		let localctx: OrderExpressionContext = new OrderExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, esql_parser.RULE_orderExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 378;
			this.booleanExpression(0);
			this.state = 380;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 379;
				localctx._ordering = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===57 || _la===63)) {
				    localctx._ordering = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			}
			this.state = 384;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 382;
				this.match(esql_parser.NULLS);
				this.state = 383;
				localctx._nullOrdering = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===66 || _la===69)) {
				    localctx._nullOrdering = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public keepCommand(): KeepCommandContext {
		let localctx: KeepCommandContext = new KeepCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, esql_parser.RULE_keepCommand);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 386;
			this.match(esql_parser.KEEP);
			this.state = 387;
			this.qualifiedNamePatterns();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropCommand(): DropCommandContext {
		let localctx: DropCommandContext = new DropCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, esql_parser.RULE_dropCommand);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 389;
			this.match(esql_parser.DROP);
			this.state = 390;
			this.qualifiedNamePatterns();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public renameCommand(): RenameCommandContext {
		let localctx: RenameCommandContext = new RenameCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, esql_parser.RULE_renameCommand);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 392;
			this.match(esql_parser.RENAME);
			this.state = 393;
			this.renameClause();
			this.state = 398;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 394;
					this.match(esql_parser.COMMA);
					this.state = 395;
					this.renameClause();
					}
					}
				}
				this.state = 400;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public renameClause(): RenameClauseContext {
		let localctx: RenameClauseContext = new RenameClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, esql_parser.RULE_renameClause);
		try {
			this.state = 409;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 401;
				localctx._oldName = this.qualifiedNamePattern();
				this.state = 402;
				this.match(esql_parser.AS);
				this.state = 403;
				localctx._newName = this.qualifiedNamePattern();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 405;
				localctx._newName = this.qualifiedNamePattern();
				this.state = 406;
				this.match(esql_parser.ASSIGN);
				this.state = 407;
				localctx._oldName = this.qualifiedNamePattern();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dissectCommand(): DissectCommandContext {
		let localctx: DissectCommandContext = new DissectCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, esql_parser.RULE_dissectCommand);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 411;
			this.match(esql_parser.DISSECT);
			this.state = 412;
			this.primaryExpression(0);
			this.state = 413;
			this.string_();
			this.state = 415;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 414;
				this.commandOptions();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public grokCommand(): GrokCommandContext {
		let localctx: GrokCommandContext = new GrokCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, esql_parser.RULE_grokCommand);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 417;
			this.match(esql_parser.GROK);
			this.state = 418;
			this.primaryExpression(0);
			this.state = 419;
			this.string_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mvExpandCommand(): MvExpandCommandContext {
		let localctx: MvExpandCommandContext = new MvExpandCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, esql_parser.RULE_mvExpandCommand);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 421;
			this.match(esql_parser.MV_EXPAND);
			this.state = 422;
			this.qualifiedName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public commandOptions(): CommandOptionsContext {
		let localctx: CommandOptionsContext = new CommandOptionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, esql_parser.RULE_commandOptions);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 424;
			this.commandOption();
			this.state = 429;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 425;
					this.match(esql_parser.COMMA);
					this.state = 426;
					this.commandOption();
					}
					}
				}
				this.state = 431;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public commandOption(): CommandOptionContext {
		let localctx: CommandOptionContext = new CommandOptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, esql_parser.RULE_commandOption);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 432;
			this.identifier();
			this.state = 433;
			this.match(esql_parser.ASSIGN);
			this.state = 434;
			this.constant();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public explainCommand(): ExplainCommandContext {
		let localctx: ExplainCommandContext = new ExplainCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, esql_parser.RULE_explainCommand);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 436;
			this.match(esql_parser.EXPLAIN);
			this.state = 437;
			this.subqueryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public subqueryExpression(): SubqueryExpressionContext {
		let localctx: SubqueryExpressionContext = new SubqueryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, esql_parser.RULE_subqueryExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 439;
			this.match(esql_parser.OPENING_BRACKET);
			this.state = 440;
			this.query(0);
			this.state = 441;
			this.match(esql_parser.CLOSING_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public showCommand(): ShowCommandContext {
		let localctx: ShowCommandContext = new ShowCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, esql_parser.RULE_showCommand);
		try {
			localctx = new ShowInfoContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 443;
			this.match(esql_parser.SHOW);
			this.state = 444;
			this.match(esql_parser.INFO);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enrichCommand(): EnrichCommandContext {
		let localctx: EnrichCommandContext = new EnrichCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, esql_parser.RULE_enrichCommand);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 446;
			this.match(esql_parser.ENRICH);
			this.state = 447;
			localctx._policyName = this.match(esql_parser.ENRICH_POLICY_NAME);
			this.state = 450;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 448;
				this.match(esql_parser.ON);
				this.state = 449;
				localctx._matchField = this.qualifiedNamePattern();
				}
				break;
			}
			this.state = 461;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 452;
				this.match(esql_parser.WITH);
				this.state = 453;
				this.enrichWithClause();
				this.state = 458;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 454;
						this.match(esql_parser.COMMA);
						this.state = 455;
						this.enrichWithClause();
						}
						}
					}
					this.state = 460;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enrichWithClause(): EnrichWithClauseContext {
		let localctx: EnrichWithClauseContext = new EnrichWithClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, esql_parser.RULE_enrichWithClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 466;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 463;
				localctx._newName = this.qualifiedNamePattern();
				this.state = 464;
				this.match(esql_parser.ASSIGN);
				}
				break;
			}
			this.state = 468;
			localctx._enrichField = this.qualifiedNamePattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sampleCommand(): SampleCommandContext {
		let localctx: SampleCommandContext = new SampleCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, esql_parser.RULE_sampleCommand);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 470;
			this.match(esql_parser.SAMPLE);
			this.state = 471;
			localctx._probability = this.constant();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lookupCommand(): LookupCommandContext {
		let localctx: LookupCommandContext = new LookupCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, esql_parser.RULE_lookupCommand);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 473;
			this.match(esql_parser.DEV_LOOKUP);
			this.state = 474;
			localctx._tableName = this.indexPattern();
			this.state = 475;
			this.match(esql_parser.ON);
			this.state = 476;
			localctx._matchFields = this.qualifiedNamePatterns();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inlinestatsCommand(): InlinestatsCommandContext {
		let localctx: InlinestatsCommandContext = new InlinestatsCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, esql_parser.RULE_inlinestatsCommand);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 478;
			this.match(esql_parser.DEV_INLINESTATS);
			this.state = 479;
			localctx._stats = this.aggFields();
			this.state = 482;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 480;
				this.match(esql_parser.BY);
				this.state = 481;
				localctx._grouping = this.fields();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public changePointCommand(): ChangePointCommandContext {
		let localctx: ChangePointCommandContext = new ChangePointCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, esql_parser.RULE_changePointCommand);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 484;
			this.match(esql_parser.CHANGE_POINT);
			this.state = 485;
			localctx._value = this.qualifiedName();
			this.state = 488;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 486;
				this.match(esql_parser.ON);
				this.state = 487;
				localctx._key = this.qualifiedName();
				}
				break;
			}
			this.state = 495;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 490;
				this.match(esql_parser.AS);
				this.state = 491;
				localctx._targetType = this.qualifiedName();
				this.state = 492;
				this.match(esql_parser.COMMA);
				this.state = 493;
				localctx._targetPvalue = this.qualifiedName();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public insistCommand(): InsistCommandContext {
		let localctx: InsistCommandContext = new InsistCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, esql_parser.RULE_insistCommand);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 497;
			this.match(esql_parser.DEV_INSIST);
			this.state = 498;
			this.qualifiedNamePatterns();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forkCommand(): ForkCommandContext {
		let localctx: ForkCommandContext = new ForkCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, esql_parser.RULE_forkCommand);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 500;
			this.match(esql_parser.FORK);
			this.state = 501;
			this.forkSubQueries();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forkSubQueries(): ForkSubQueriesContext {
		let localctx: ForkSubQueriesContext = new ForkSubQueriesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, esql_parser.RULE_forkSubQueries);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 504;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 503;
					this.forkSubQuery();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 506;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 36, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forkSubQuery(): ForkSubQueryContext {
		let localctx: ForkSubQueryContext = new ForkSubQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, esql_parser.RULE_forkSubQuery);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 508;
			this.match(esql_parser.LP);
			this.state = 509;
			this.forkSubQueryCommand(0);
			this.state = 510;
			this.match(esql_parser.RP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public forkSubQueryCommand(): ForkSubQueryCommandContext;
	public forkSubQueryCommand(_p: number): ForkSubQueryCommandContext;
	// @RuleVersion(0)
	public forkSubQueryCommand(_p?: number): ForkSubQueryCommandContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ForkSubQueryCommandContext = new ForkSubQueryCommandContext(this, this._ctx, _parentState);
		let _prevctx: ForkSubQueryCommandContext = localctx;
		let _startState: number = 114;
		this.enterRecursionRule(localctx, 114, esql_parser.RULE_forkSubQueryCommand, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new SingleForkSubQueryCommandContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 513;
			this.forkSubQueryProcessingCommand();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 520;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new CompositeForkSubQueryContext(this, new ForkSubQueryCommandContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, esql_parser.RULE_forkSubQueryCommand);
					this.state = 515;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 516;
					this.match(esql_parser.PIPE);
					this.state = 517;
					this.forkSubQueryProcessingCommand();
					}
					}
				}
				this.state = 522;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forkSubQueryProcessingCommand(): ForkSubQueryProcessingCommandContext {
		let localctx: ForkSubQueryProcessingCommandContext = new ForkSubQueryProcessingCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, esql_parser.RULE_forkSubQueryProcessingCommand);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 523;
			this.processingCommand();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rrfCommand(): RrfCommandContext {
		let localctx: RrfCommandContext = new RrfCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, esql_parser.RULE_rrfCommand);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 525;
			this.match(esql_parser.DEV_RRF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rerankCommand(): RerankCommandContext {
		let localctx: RerankCommandContext = new RerankCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, esql_parser.RULE_rerankCommand);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 527;
			this.match(esql_parser.DEV_RERANK);
			this.state = 528;
			localctx._queryText = this.constant();
			this.state = 529;
			this.match(esql_parser.ON);
			this.state = 530;
			this.rerankFields();
			this.state = 533;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				this.state = 531;
				this.match(esql_parser.WITH);
				this.state = 532;
				localctx._inferenceId = this.identifierOrParameter();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public completionCommand(): CompletionCommandContext {
		let localctx: CompletionCommandContext = new CompletionCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, esql_parser.RULE_completionCommand);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 535;
			this.match(esql_parser.COMPLETION);
			this.state = 539;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 536;
				localctx._targetField = this.qualifiedName();
				this.state = 537;
				this.match(esql_parser.ASSIGN);
				}
				break;
			}
			this.state = 541;
			localctx._prompt = this.primaryExpression(0);
			this.state = 542;
			this.match(esql_parser.WITH);
			this.state = 543;
			localctx._inferenceId = this.identifierOrParameter();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public booleanExpression(): BooleanExpressionContext;
	public booleanExpression(_p: number): BooleanExpressionContext;
	// @RuleVersion(0)
	public booleanExpression(_p?: number): BooleanExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: BooleanExpressionContext = new BooleanExpressionContext(this, this._ctx, _parentState);
		let _prevctx: BooleanExpressionContext = localctx;
		let _startState: number = 124;
		this.enterRecursionRule(localctx, 124, esql_parser.RULE_booleanExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 574;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				localctx = new LogicalNotContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 546;
				this.match(esql_parser.NOT);
				this.state = 547;
				this.booleanExpression(8);
				}
				break;
			case 2:
				{
				localctx = new BooleanDefaultContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 548;
				this.valueExpression();
				}
				break;
			case 3:
				{
				localctx = new RegexExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 549;
				this.regexBooleanExpression();
				}
				break;
			case 4:
				{
				localctx = new LogicalInContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 550;
				this.valueExpression();
				this.state = 552;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===71) {
					{
					this.state = 551;
					this.match(esql_parser.NOT);
					}
				}

				this.state = 554;
				this.match(esql_parser.IN);
				this.state = 555;
				this.match(esql_parser.LP);
				this.state = 556;
				this.valueExpression();
				this.state = 561;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===62) {
					{
					{
					this.state = 557;
					this.match(esql_parser.COMMA);
					this.state = 558;
					this.valueExpression();
					}
					}
					this.state = 563;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 564;
				this.match(esql_parser.RP);
				}
				break;
			case 5:
				{
				localctx = new IsNullContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 566;
				this.valueExpression();
				this.state = 567;
				this.match(esql_parser.IS);
				this.state = 569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===71) {
					{
					this.state = 568;
					this.match(esql_parser.NOT);
					}
				}

				this.state = 571;
				this.match(esql_parser.NULL);
				}
				break;
			case 6:
				{
				localctx = new MatchExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 573;
				this.matchBooleanExpression();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 584;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 45, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 582;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 44, this._ctx) ) {
					case 1:
						{
						localctx = new LogicalBinaryContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, esql_parser.RULE_booleanExpression);
						this.state = 576;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 577;
						(localctx as LogicalBinaryContext)._operator = this.match(esql_parser.AND);
						this.state = 578;
						(localctx as LogicalBinaryContext)._right = this.booleanExpression(6);
						}
						break;
					case 2:
						{
						localctx = new LogicalBinaryContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, esql_parser.RULE_booleanExpression);
						this.state = 579;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 580;
						(localctx as LogicalBinaryContext)._operator = this.match(esql_parser.OR);
						this.state = 581;
						(localctx as LogicalBinaryContext)._right = this.booleanExpression(5);
						}
						break;
					}
					}
				}
				this.state = 586;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 45, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public regexBooleanExpression(): RegexBooleanExpressionContext {
		let localctx: RegexBooleanExpressionContext = new RegexBooleanExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, esql_parser.RULE_regexBooleanExpression);
		let _la: number;
		try {
			this.state = 617;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				localctx = new LikeExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 587;
				this.valueExpression();
				this.state = 589;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===71) {
					{
					this.state = 588;
					this.match(esql_parser.NOT);
					}
				}

				this.state = 591;
				this.match(esql_parser.LIKE);
				this.state = 592;
				this.string_();
				}
				break;
			case 2:
				localctx = new RlikeExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 594;
				this.valueExpression();
				this.state = 596;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===71) {
					{
					this.state = 595;
					this.match(esql_parser.NOT);
					}
				}

				this.state = 598;
				this.match(esql_parser.RLIKE);
				this.state = 599;
				this.string_();
				}
				break;
			case 3:
				localctx = new LikeListExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 601;
				this.valueExpression();
				this.state = 603;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===71) {
					{
					this.state = 602;
					this.match(esql_parser.NOT);
					}
				}

				this.state = 605;
				this.match(esql_parser.LIKE);
				this.state = 606;
				this.match(esql_parser.LP);
				this.state = 607;
				this.string_();
				this.state = 612;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===62) {
					{
					{
					this.state = 608;
					this.match(esql_parser.COMMA);
					this.state = 609;
					this.string_();
					}
					}
					this.state = 614;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 615;
				this.match(esql_parser.RP);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public matchBooleanExpression(): MatchBooleanExpressionContext {
		let localctx: MatchBooleanExpressionContext = new MatchBooleanExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, esql_parser.RULE_matchBooleanExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 619;
			localctx._fieldExp = this.qualifiedName();
			this.state = 622;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===60) {
				{
				this.state = 620;
				this.match(esql_parser.CAST_OP);
				this.state = 621;
				localctx._fieldType = this.dataType();
				}
			}

			this.state = 624;
			this.match(esql_parser.COLON);
			this.state = 625;
			localctx._matchQuery = this.constant();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public valueExpression(): ValueExpressionContext {
		let localctx: ValueExpressionContext = new ValueExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, esql_parser.RULE_valueExpression);
		try {
			this.state = 632;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				localctx = new ValueExpressionDefaultContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 627;
				this.operatorExpression(0);
				}
				break;
			case 2:
				localctx = new ComparisonContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 628;
				(localctx as ComparisonContext)._left = this.operatorExpression(0);
				this.state = 629;
				this.comparisonOperator();
				this.state = 630;
				(localctx as ComparisonContext)._right = this.operatorExpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public operatorExpression(): OperatorExpressionContext;
	public operatorExpression(_p: number): OperatorExpressionContext;
	// @RuleVersion(0)
	public operatorExpression(_p?: number): OperatorExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: OperatorExpressionContext = new OperatorExpressionContext(this, this._ctx, _parentState);
		let _prevctx: OperatorExpressionContext = localctx;
		let _startState: number = 132;
		this.enterRecursionRule(localctx, 132, esql_parser.RULE_operatorExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 638;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				localctx = new OperatorExpressionDefaultContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 635;
				this.primaryExpression(0);
				}
				break;
			case 2:
				{
				localctx = new ArithmeticUnaryContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 636;
				(localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===87 || _la===88)) {
				    (localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 637;
				this.operatorExpression(3);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 648;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 646;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 54, this._ctx) ) {
					case 1:
						{
						localctx = new ArithmeticBinaryContext(this, new OperatorExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, esql_parser.RULE_operatorExpression);
						this.state = 640;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 641;
						(localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 7) !== 0))) {
						    (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 642;
						(localctx as ArithmeticBinaryContext)._right = this.operatorExpression(3);
						}
						break;
					case 2:
						{
						localctx = new ArithmeticBinaryContext(this, new OperatorExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, esql_parser.RULE_operatorExpression);
						this.state = 643;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 644;
						(localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===87 || _la===88)) {
						    (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 645;
						(localctx as ArithmeticBinaryContext)._right = this.operatorExpression(2);
						}
						break;
					}
					}
				}
				this.state = 650;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public primaryExpression(): PrimaryExpressionContext;
	public primaryExpression(_p: number): PrimaryExpressionContext;
	// @RuleVersion(0)
	public primaryExpression(_p?: number): PrimaryExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this, this._ctx, _parentState);
		let _prevctx: PrimaryExpressionContext = localctx;
		let _startState: number = 134;
		this.enterRecursionRule(localctx, 134, esql_parser.RULE_primaryExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 659;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				localctx = new ConstantDefaultContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 652;
				this.constant();
				}
				break;
			case 2:
				{
				localctx = new DereferenceContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 653;
				this.qualifiedName();
				}
				break;
			case 3:
				{
				localctx = new FunctionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 654;
				this.functionExpression();
				}
				break;
			case 4:
				{
				localctx = new ParenthesizedExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 655;
				this.match(esql_parser.LP);
				this.state = 656;
				this.booleanExpression(0);
				this.state = 657;
				this.match(esql_parser.RP);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 666;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 57, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new InlineCastContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, esql_parser.RULE_primaryExpression);
					this.state = 661;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 662;
					this.match(esql_parser.CAST_OP);
					this.state = 663;
					this.dataType();
					}
					}
				}
				this.state = 668;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 57, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionExpression(): FunctionExpressionContext {
		let localctx: FunctionExpressionContext = new FunctionExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, esql_parser.RULE_functionExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 669;
			this.functionName();
			this.state = 670;
			this.match(esql_parser.LP);
			this.state = 684;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 89:
				{
				this.state = 671;
				this.match(esql_parser.ASTERISK);
				}
				break;
			case 53:
			case 54:
			case 55:
			case 65:
			case 71:
			case 72:
			case 76:
			case 78:
			case 87:
			case 88:
			case 94:
			case 95:
			case 96:
			case 97:
			case 99:
			case 101:
			case 102:
				{
				{
				this.state = 672;
				this.booleanExpression(0);
				this.state = 677;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 58, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 673;
						this.match(esql_parser.COMMA);
						this.state = 674;
						this.booleanExpression(0);
						}
						}
					}
					this.state = 679;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 58, this._ctx);
				}
				this.state = 682;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===62) {
					{
					this.state = 680;
					this.match(esql_parser.COMMA);
					this.state = 681;
					this.mapExpression();
					}
				}

				}
				}
				break;
			case 100:
				break;
			default:
				break;
			}
			this.state = 686;
			this.match(esql_parser.RP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionName(): FunctionNameContext {
		let localctx: FunctionNameContext = new FunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, esql_parser.RULE_functionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 688;
			this.identifierOrParameter();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mapExpression(): MapExpressionContext {
		let localctx: MapExpressionContext = new MapExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, esql_parser.RULE_mapExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 690;
			this.match(esql_parser.LEFT_BRACES);
			this.state = 691;
			this.entryExpression();
			this.state = 696;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===62) {
				{
				{
				this.state = 692;
				this.match(esql_parser.COMMA);
				this.state = 693;
				this.entryExpression();
				}
				}
				this.state = 698;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 699;
			this.match(esql_parser.RIGHT_BRACES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public entryExpression(): EntryExpressionContext {
		let localctx: EntryExpressionContext = new EntryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, esql_parser.RULE_entryExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 701;
			localctx._key = this.string_();
			this.state = 702;
			this.match(esql_parser.COLON);
			this.state = 703;
			localctx._value = this.constant();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let localctx: ConstantContext = new ConstantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, esql_parser.RULE_constant);
		let _la: number;
		try {
			this.state = 747;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				localctx = new NullLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 705;
				this.match(esql_parser.NULL);
				}
				break;
			case 2:
				localctx = new QualifiedIntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 706;
				this.integerValue();
				this.state = 707;
				this.match(esql_parser.UNQUOTED_IDENTIFIER);
				}
				break;
			case 3:
				localctx = new DecimalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 709;
				this.decimalValue();
				}
				break;
			case 4:
				localctx = new IntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 710;
				this.integerValue();
				}
				break;
			case 5:
				localctx = new BooleanLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 711;
				this.booleanValue();
				}
				break;
			case 6:
				localctx = new InputParameterContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 712;
				this.parameter();
				}
				break;
			case 7:
				localctx = new StringLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 713;
				this.string_();
				}
				break;
			case 8:
				localctx = new NumericArrayLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 714;
				this.match(esql_parser.OPENING_BRACKET);
				this.state = 715;
				this.numericValue();
				this.state = 720;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===62) {
					{
					{
					this.state = 716;
					this.match(esql_parser.COMMA);
					this.state = 717;
					this.numericValue();
					}
					}
					this.state = 722;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 723;
				this.match(esql_parser.CLOSING_BRACKET);
				}
				break;
			case 9:
				localctx = new BooleanArrayLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 725;
				this.match(esql_parser.OPENING_BRACKET);
				this.state = 726;
				this.booleanValue();
				this.state = 731;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===62) {
					{
					{
					this.state = 727;
					this.match(esql_parser.COMMA);
					this.state = 728;
					this.booleanValue();
					}
					}
					this.state = 733;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 734;
				this.match(esql_parser.CLOSING_BRACKET);
				}
				break;
			case 10:
				localctx = new StringArrayLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 736;
				this.match(esql_parser.OPENING_BRACKET);
				this.state = 737;
				this.string_();
				this.state = 742;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===62) {
					{
					{
					this.state = 738;
					this.match(esql_parser.COMMA);
					this.state = 739;
					this.string_();
					}
					}
					this.state = 744;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 745;
				this.match(esql_parser.CLOSING_BRACKET);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public booleanValue(): BooleanValueContext {
		let localctx: BooleanValueContext = new BooleanValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, esql_parser.RULE_booleanValue);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 749;
			_la = this._input.LA(1);
			if(!(_la===65 || _la===78)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public numericValue(): NumericValueContext {
		let localctx: NumericValueContext = new NumericValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, esql_parser.RULE_numericValue);
		try {
			this.state = 753;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 751;
				this.decimalValue();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 752;
				this.integerValue();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public decimalValue(): DecimalValueContext {
		let localctx: DecimalValueContext = new DecimalValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, esql_parser.RULE_decimalValue);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 756;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===87 || _la===88) {
				{
				this.state = 755;
				_la = this._input.LA(1);
				if(!(_la===87 || _la===88)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 758;
			this.match(esql_parser.DECIMAL_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public integerValue(): IntegerValueContext {
		let localctx: IntegerValueContext = new IntegerValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, esql_parser.RULE_integerValue);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 761;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===87 || _la===88) {
				{
				this.state = 760;
				_la = this._input.LA(1);
				if(!(_la===87 || _la===88)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 763;
			this.match(esql_parser.INTEGER_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public string_(): StringContext {
		let localctx: StringContext = new StringContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, esql_parser.RULE_string);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 765;
			this.match(esql_parser.QUOTED_STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comparisonOperator(): ComparisonOperatorContext {
		let localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, esql_parser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 767;
			_la = this._input.LA(1);
			if(!(((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 125) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public joinCommand(): JoinCommandContext {
		let localctx: JoinCommandContext = new JoinCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, esql_parser.RULE_joinCommand);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 769;
			localctx._type_ = this._input.LT(1);
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 54525952) !== 0))) {
			    localctx._type_ = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 770;
			this.match(esql_parser.JOIN);
			this.state = 771;
			this.joinTarget();
			this.state = 772;
			this.joinCondition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public joinTarget(): JoinTargetContext {
		let localctx: JoinTargetContext = new JoinTargetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, esql_parser.RULE_joinTarget);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 774;
			localctx._index = this.indexPattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public joinCondition(): JoinConditionContext {
		let localctx: JoinConditionContext = new JoinConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, esql_parser.RULE_joinCondition);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 776;
			this.match(esql_parser.ON);
			this.state = 777;
			this.joinPredicate();
			this.state = 782;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 69, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 778;
					this.match(esql_parser.COMMA);
					this.state = 779;
					this.joinPredicate();
					}
					}
				}
				this.state = 784;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 69, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public joinPredicate(): JoinPredicateContext {
		let localctx: JoinPredicateContext = new JoinPredicateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, esql_parser.RULE_joinPredicate);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 785;
			this.valueExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.query_sempred(localctx as QueryContext, predIndex);
		case 2:
			return this.sourceCommand_sempred(localctx as SourceCommandContext, predIndex);
		case 3:
			return this.processingCommand_sempred(localctx as ProcessingCommandContext, predIndex);
		case 57:
			return this.forkSubQueryCommand_sempred(localctx as ForkSubQueryCommandContext, predIndex);
		case 62:
			return this.booleanExpression_sempred(localctx as BooleanExpressionContext, predIndex);
		case 66:
			return this.operatorExpression_sempred(localctx as OperatorExpressionContext, predIndex);
		case 67:
			return this.primaryExpression_sempred(localctx as PrimaryExpressionContext, predIndex);
		}
		return true;
	}
	private query_sempred(localctx: QueryContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private sourceCommand_sempred(localctx: SourceCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.isDevVersion();
		}
		return true;
	}
	private processingCommand_sempred(localctx: ProcessingCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.isDevVersion();
		case 3:
			return this.isDevVersion();
		case 4:
			return this.isDevVersion();
		case 5:
			return this.isDevVersion();
		case 6:
			return this.isDevVersion();
		}
		return true;
	}
	private forkSubQueryCommand_sempred(localctx: ForkSubQueryCommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private booleanExpression_sempred(localctx: BooleanExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 5);
		case 9:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}
	private operatorExpression_sempred(localctx: OperatorExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return this.precpred(this._ctx, 2);
		case 11:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private primaryExpression_sempred(localctx: PrimaryExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 12:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,139,788,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,5,1,176,8,1,10,1,12,1,179,9,1,
	1,2,1,2,1,2,1,2,1,2,1,2,3,2,187,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
	3,3,216,8,3,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,5,7,229,8,7,10,
	7,12,7,232,9,7,1,8,1,8,1,8,3,8,237,8,8,1,8,1,8,1,9,1,9,1,9,5,9,244,8,9,
	10,9,12,9,247,9,9,1,10,1,10,1,10,3,10,252,8,10,1,11,1,11,1,11,1,12,1,12,
	1,12,1,13,1,13,1,13,5,13,263,8,13,10,13,12,13,266,9,13,1,13,3,13,269,8,
	13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,280,8,14,1,15,1,15,
	1,16,1,16,1,17,1,17,1,18,1,18,1,19,1,19,1,19,1,19,5,19,294,8,19,10,19,12,
	19,297,9,19,1,20,1,20,1,20,1,21,1,21,3,21,304,8,21,1,21,1,21,3,21,308,8,
	21,1,22,1,22,1,22,5,22,313,8,22,10,22,12,22,316,9,22,1,23,1,23,1,23,3,23,
	321,8,23,1,24,1,24,1,24,5,24,326,8,24,10,24,12,24,329,9,24,1,25,1,25,1,
	25,5,25,334,8,25,10,25,12,25,337,9,25,1,26,1,26,1,26,5,26,342,8,26,10,26,
	12,26,345,9,26,1,27,1,27,1,28,1,28,1,28,3,28,352,8,28,1,29,1,29,3,29,356,
	8,29,1,30,1,30,3,30,360,8,30,1,31,1,31,1,31,3,31,365,8,31,1,32,1,32,1,32,
	1,33,1,33,1,33,1,33,5,33,374,8,33,10,33,12,33,377,9,33,1,34,1,34,3,34,381,
	8,34,1,34,1,34,3,34,385,8,34,1,35,1,35,1,35,1,36,1,36,1,36,1,37,1,37,1,
	37,1,37,5,37,397,8,37,10,37,12,37,400,9,37,1,38,1,38,1,38,1,38,1,38,1,38,
	1,38,1,38,3,38,410,8,38,1,39,1,39,1,39,1,39,3,39,416,8,39,1,40,1,40,1,40,
	1,40,1,41,1,41,1,41,1,42,1,42,1,42,5,42,428,8,42,10,42,12,42,431,9,42,1,
	43,1,43,1,43,1,43,1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,46,1,46,1,46,1,47,
	1,47,1,47,1,47,3,47,451,8,47,1,47,1,47,1,47,1,47,5,47,457,8,47,10,47,12,
	47,460,9,47,3,47,462,8,47,1,48,1,48,1,48,3,48,467,8,48,1,48,1,48,1,49,1,
	49,1,49,1,50,1,50,1,50,1,50,1,50,1,51,1,51,1,51,1,51,3,51,483,8,51,1,52,
	1,52,1,52,1,52,3,52,489,8,52,1,52,1,52,1,52,1,52,1,52,3,52,496,8,52,1,53,
	1,53,1,53,1,54,1,54,1,54,1,55,4,55,505,8,55,11,55,12,55,506,1,56,1,56,1,
	56,1,56,1,57,1,57,1,57,1,57,1,57,1,57,5,57,519,8,57,10,57,12,57,522,9,57,
	1,58,1,58,1,59,1,59,1,60,1,60,1,60,1,60,1,60,1,60,3,60,534,8,60,1,61,1,
	61,1,61,1,61,3,61,540,8,61,1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,1,62,
	1,62,1,62,3,62,553,8,62,1,62,1,62,1,62,1,62,1,62,5,62,560,8,62,10,62,12,
	62,563,9,62,1,62,1,62,1,62,1,62,1,62,3,62,570,8,62,1,62,1,62,1,62,3,62,
	575,8,62,1,62,1,62,1,62,1,62,1,62,1,62,5,62,583,8,62,10,62,12,62,586,9,
	62,1,63,1,63,3,63,590,8,63,1,63,1,63,1,63,1,63,1,63,3,63,597,8,63,1,63,
	1,63,1,63,1,63,1,63,3,63,604,8,63,1,63,1,63,1,63,1,63,1,63,5,63,611,8,63,
	10,63,12,63,614,9,63,1,63,1,63,3,63,618,8,63,1,64,1,64,1,64,3,64,623,8,
	64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,1,65,3,65,633,8,65,1,66,1,66,1,66,
	1,66,3,66,639,8,66,1,66,1,66,1,66,1,66,1,66,1,66,5,66,647,8,66,10,66,12,
	66,650,9,66,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,3,67,660,8,67,1,67,
	1,67,1,67,5,67,665,8,67,10,67,12,67,668,9,67,1,68,1,68,1,68,1,68,1,68,1,
	68,5,68,676,8,68,10,68,12,68,679,9,68,1,68,1,68,3,68,683,8,68,3,68,685,
	8,68,1,68,1,68,1,69,1,69,1,70,1,70,1,70,1,70,5,70,695,8,70,10,70,12,70,
	698,9,70,1,70,1,70,1,71,1,71,1,71,1,71,1,72,1,72,1,72,1,72,1,72,1,72,1,
	72,1,72,1,72,1,72,1,72,1,72,1,72,5,72,719,8,72,10,72,12,72,722,9,72,1,72,
	1,72,1,72,1,72,1,72,1,72,5,72,730,8,72,10,72,12,72,733,9,72,1,72,1,72,1,
	72,1,72,1,72,1,72,5,72,741,8,72,10,72,12,72,744,9,72,1,72,1,72,3,72,748,
	8,72,1,73,1,73,1,74,1,74,3,74,754,8,74,1,75,3,75,757,8,75,1,75,1,75,1,76,
	3,76,762,8,76,1,76,1,76,1,77,1,77,1,78,1,78,1,79,1,79,1,79,1,79,1,79,1,
	80,1,80,1,81,1,81,1,81,1,81,5,81,781,8,81,10,81,12,81,784,9,81,1,82,1,82,
	1,82,0,5,2,114,124,132,134,83,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
	32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,
	80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,
	122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,
	158,160,162,164,0,9,2,0,53,53,107,107,1,0,101,102,2,0,57,57,63,63,2,0,66,
	66,69,69,1,0,87,88,1,0,89,91,2,0,65,65,78,78,2,0,80,80,82,86,2,0,22,22,
	24,25,816,0,166,1,0,0,0,2,169,1,0,0,0,4,186,1,0,0,0,6,215,1,0,0,0,8,217,
	1,0,0,0,10,220,1,0,0,0,12,222,1,0,0,0,14,225,1,0,0,0,16,236,1,0,0,0,18,
	240,1,0,0,0,20,248,1,0,0,0,22,253,1,0,0,0,24,256,1,0,0,0,26,259,1,0,0,0,
	28,279,1,0,0,0,30,281,1,0,0,0,32,283,1,0,0,0,34,285,1,0,0,0,36,287,1,0,
	0,0,38,289,1,0,0,0,40,298,1,0,0,0,42,301,1,0,0,0,44,309,1,0,0,0,46,317,
	1,0,0,0,48,322,1,0,0,0,50,330,1,0,0,0,52,338,1,0,0,0,54,346,1,0,0,0,56,
	351,1,0,0,0,58,355,1,0,0,0,60,359,1,0,0,0,62,364,1,0,0,0,64,366,1,0,0,0,
	66,369,1,0,0,0,68,378,1,0,0,0,70,386,1,0,0,0,72,389,1,0,0,0,74,392,1,0,
	0,0,76,409,1,0,0,0,78,411,1,0,0,0,80,417,1,0,0,0,82,421,1,0,0,0,84,424,
	1,0,0,0,86,432,1,0,0,0,88,436,1,0,0,0,90,439,1,0,0,0,92,443,1,0,0,0,94,
	446,1,0,0,0,96,466,1,0,0,0,98,470,1,0,0,0,100,473,1,0,0,0,102,478,1,0,0,
	0,104,484,1,0,0,0,106,497,1,0,0,0,108,500,1,0,0,0,110,504,1,0,0,0,112,508,
	1,0,0,0,114,512,1,0,0,0,116,523,1,0,0,0,118,525,1,0,0,0,120,527,1,0,0,0,
	122,535,1,0,0,0,124,574,1,0,0,0,126,617,1,0,0,0,128,619,1,0,0,0,130,632,
	1,0,0,0,132,638,1,0,0,0,134,659,1,0,0,0,136,669,1,0,0,0,138,688,1,0,0,0,
	140,690,1,0,0,0,142,701,1,0,0,0,144,747,1,0,0,0,146,749,1,0,0,0,148,753,
	1,0,0,0,150,756,1,0,0,0,152,761,1,0,0,0,154,765,1,0,0,0,156,767,1,0,0,0,
	158,769,1,0,0,0,160,774,1,0,0,0,162,776,1,0,0,0,164,785,1,0,0,0,166,167,
	3,2,1,0,167,168,5,0,0,1,168,1,1,0,0,0,169,170,6,1,-1,0,170,171,3,4,2,0,
	171,177,1,0,0,0,172,173,10,1,0,0,173,174,5,52,0,0,174,176,3,6,3,0,175,172,
	1,0,0,0,176,179,1,0,0,0,177,175,1,0,0,0,177,178,1,0,0,0,178,3,1,0,0,0,179,
	177,1,0,0,0,180,187,3,88,44,0,181,187,3,22,11,0,182,187,3,12,6,0,183,187,
	3,92,46,0,184,185,4,2,1,0,185,187,3,24,12,0,186,180,1,0,0,0,186,181,1,0,
	0,0,186,182,1,0,0,0,186,183,1,0,0,0,186,184,1,0,0,0,187,5,1,0,0,0,188,216,
	3,40,20,0,189,216,3,8,4,0,190,216,3,70,35,0,191,216,3,64,32,0,192,216,3,
	42,21,0,193,216,3,66,33,0,194,216,3,72,36,0,195,216,3,74,37,0,196,216,3,
	78,39,0,197,216,3,80,40,0,198,216,3,94,47,0,199,216,3,82,41,0,200,216,3,
	158,79,0,201,216,3,104,52,0,202,216,3,122,61,0,203,216,3,98,49,0,204,216,
	3,108,54,0,205,206,4,3,2,0,206,216,3,102,51,0,207,208,4,3,3,0,208,216,3,
	100,50,0,209,210,4,3,4,0,210,216,3,106,53,0,211,212,4,3,5,0,212,216,3,120,
	60,0,213,214,4,3,6,0,214,216,3,118,59,0,215,188,1,0,0,0,215,189,1,0,0,0,
	215,190,1,0,0,0,215,191,1,0,0,0,215,192,1,0,0,0,215,193,1,0,0,0,215,194,
	1,0,0,0,215,195,1,0,0,0,215,196,1,0,0,0,215,197,1,0,0,0,215,198,1,0,0,0,
	215,199,1,0,0,0,215,200,1,0,0,0,215,201,1,0,0,0,215,202,1,0,0,0,215,203,
	1,0,0,0,215,204,1,0,0,0,215,205,1,0,0,0,215,207,1,0,0,0,215,209,1,0,0,0,
	215,211,1,0,0,0,215,213,1,0,0,0,216,7,1,0,0,0,217,218,5,16,0,0,218,219,
	3,124,62,0,219,9,1,0,0,0,220,221,3,54,27,0,221,11,1,0,0,0,222,223,5,12,
	0,0,223,224,3,14,7,0,224,13,1,0,0,0,225,230,3,16,8,0,226,227,5,62,0,0,227,
	229,3,16,8,0,228,226,1,0,0,0,229,232,1,0,0,0,230,228,1,0,0,0,230,231,1,
	0,0,0,231,15,1,0,0,0,232,230,1,0,0,0,233,234,3,48,24,0,234,235,5,58,0,0,
	235,237,1,0,0,0,236,233,1,0,0,0,236,237,1,0,0,0,237,238,1,0,0,0,238,239,
	3,124,62,0,239,17,1,0,0,0,240,245,3,20,10,0,241,242,5,62,0,0,242,244,3,
	20,10,0,243,241,1,0,0,0,244,247,1,0,0,0,245,243,1,0,0,0,245,246,1,0,0,0,
	246,19,1,0,0,0,247,245,1,0,0,0,248,251,3,48,24,0,249,250,5,58,0,0,250,252,
	3,124,62,0,251,249,1,0,0,0,251,252,1,0,0,0,252,21,1,0,0,0,253,254,5,19,
	0,0,254,255,3,26,13,0,255,23,1,0,0,0,256,257,5,20,0,0,257,258,3,26,13,0,
	258,25,1,0,0,0,259,264,3,28,14,0,260,261,5,62,0,0,261,263,3,28,14,0,262,
	260,1,0,0,0,263,266,1,0,0,0,264,262,1,0,0,0,264,265,1,0,0,0,265,268,1,0,
	0,0,266,264,1,0,0,0,267,269,3,38,19,0,268,267,1,0,0,0,268,269,1,0,0,0,269,
	27,1,0,0,0,270,271,3,30,15,0,271,272,5,61,0,0,272,273,3,34,17,0,273,280,
	1,0,0,0,274,275,3,34,17,0,275,276,5,60,0,0,276,277,3,32,16,0,277,280,1,
	0,0,0,278,280,3,36,18,0,279,270,1,0,0,0,279,274,1,0,0,0,279,278,1,0,0,0,
	280,29,1,0,0,0,281,282,5,107,0,0,282,31,1,0,0,0,283,284,5,107,0,0,284,33,
	1,0,0,0,285,286,5,107,0,0,286,35,1,0,0,0,287,288,7,0,0,0,288,37,1,0,0,0,
	289,290,5,106,0,0,290,295,5,107,0,0,291,292,5,62,0,0,292,294,5,107,0,0,
	293,291,1,0,0,0,294,297,1,0,0,0,295,293,1,0,0,0,295,296,1,0,0,0,296,39,
	1,0,0,0,297,295,1,0,0,0,298,299,5,9,0,0,299,300,3,14,7,0,300,41,1,0,0,0,
	301,303,5,15,0,0,302,304,3,44,22,0,303,302,1,0,0,0,303,304,1,0,0,0,304,
	307,1,0,0,0,305,306,5,59,0,0,306,308,3,14,7,0,307,305,1,0,0,0,307,308,1,
	0,0,0,308,43,1,0,0,0,309,314,3,46,23,0,310,311,5,62,0,0,311,313,3,46,23,
	0,312,310,1,0,0,0,313,316,1,0,0,0,314,312,1,0,0,0,314,315,1,0,0,0,315,45,
	1,0,0,0,316,314,1,0,0,0,317,320,3,16,8,0,318,319,5,16,0,0,319,321,3,124,
	62,0,320,318,1,0,0,0,320,321,1,0,0,0,321,47,1,0,0,0,322,327,3,62,31,0,323,
	324,5,64,0,0,324,326,3,62,31,0,325,323,1,0,0,0,326,329,1,0,0,0,327,325,
	1,0,0,0,327,328,1,0,0,0,328,49,1,0,0,0,329,327,1,0,0,0,330,335,3,56,28,
	0,331,332,5,64,0,0,332,334,3,56,28,0,333,331,1,0,0,0,334,337,1,0,0,0,335,
	333,1,0,0,0,335,336,1,0,0,0,336,51,1,0,0,0,337,335,1,0,0,0,338,343,3,50,
	25,0,339,340,5,62,0,0,340,342,3,50,25,0,341,339,1,0,0,0,342,345,1,0,0,0,
	343,341,1,0,0,0,343,344,1,0,0,0,344,53,1,0,0,0,345,343,1,0,0,0,346,347,
	7,1,0,0,347,55,1,0,0,0,348,352,5,128,0,0,349,352,3,58,29,0,350,352,3,60,
	30,0,351,348,1,0,0,0,351,349,1,0,0,0,351,350,1,0,0,0,352,57,1,0,0,0,353,
	356,5,76,0,0,354,356,5,95,0,0,355,353,1,0,0,0,355,354,1,0,0,0,356,59,1,
	0,0,0,357,360,5,94,0,0,358,360,5,96,0,0,359,357,1,0,0,0,359,358,1,0,0,0,
	360,61,1,0,0,0,361,365,3,54,27,0,362,365,3,58,29,0,363,365,3,60,30,0,364,
	361,1,0,0,0,364,362,1,0,0,0,364,363,1,0,0,0,365,63,1,0,0,0,366,367,5,11,
	0,0,367,368,3,144,72,0,368,65,1,0,0,0,369,370,5,14,0,0,370,375,3,68,34,
	0,371,372,5,62,0,0,372,374,3,68,34,0,373,371,1,0,0,0,374,377,1,0,0,0,375,
	373,1,0,0,0,375,376,1,0,0,0,376,67,1,0,0,0,377,375,1,0,0,0,378,380,3,124,
	62,0,379,381,7,2,0,0,380,379,1,0,0,0,380,381,1,0,0,0,381,384,1,0,0,0,382,
	383,5,73,0,0,383,385,7,3,0,0,384,382,1,0,0,0,384,385,1,0,0,0,385,69,1,0,
	0,0,386,387,5,29,0,0,387,388,3,52,26,0,388,71,1,0,0,0,389,390,5,28,0,0,
	390,391,3,52,26,0,391,73,1,0,0,0,392,393,5,32,0,0,393,398,3,76,38,0,394,
	395,5,62,0,0,395,397,3,76,38,0,396,394,1,0,0,0,397,400,1,0,0,0,398,396,
	1,0,0,0,398,399,1,0,0,0,399,75,1,0,0,0,400,398,1,0,0,0,401,402,3,50,25,
	0,402,403,5,132,0,0,403,404,3,50,25,0,404,410,1,0,0,0,405,406,3,50,25,0,
	406,407,5,58,0,0,407,408,3,50,25,0,408,410,1,0,0,0,409,401,1,0,0,0,409,
	405,1,0,0,0,410,77,1,0,0,0,411,412,5,8,0,0,412,413,3,134,67,0,413,415,3,
	154,77,0,414,416,3,84,42,0,415,414,1,0,0,0,415,416,1,0,0,0,416,79,1,0,0,
	0,417,418,5,10,0,0,418,419,3,134,67,0,419,420,3,154,77,0,420,81,1,0,0,0,
	421,422,5,27,0,0,422,423,3,48,24,0,423,83,1,0,0,0,424,429,3,86,43,0,425,
	426,5,62,0,0,426,428,3,86,43,0,427,425,1,0,0,0,428,431,1,0,0,0,429,427,
	1,0,0,0,429,430,1,0,0,0,430,85,1,0,0,0,431,429,1,0,0,0,432,433,3,54,27,
	0,433,434,5,58,0,0,434,435,3,144,72,0,435,87,1,0,0,0,436,437,5,6,0,0,437,
	438,3,90,45,0,438,89,1,0,0,0,439,440,5,97,0,0,440,441,3,2,1,0,441,442,5,
	98,0,0,442,91,1,0,0,0,443,444,5,33,0,0,444,445,5,136,0,0,445,93,1,0,0,0,
	446,447,5,5,0,0,447,450,5,38,0,0,448,449,5,74,0,0,449,451,3,50,25,0,450,
	448,1,0,0,0,450,451,1,0,0,0,451,461,1,0,0,0,452,453,5,79,0,0,453,458,3,
	96,48,0,454,455,5,62,0,0,455,457,3,96,48,0,456,454,1,0,0,0,457,460,1,0,
	0,0,458,456,1,0,0,0,458,459,1,0,0,0,459,462,1,0,0,0,460,458,1,0,0,0,461,
	452,1,0,0,0,461,462,1,0,0,0,462,95,1,0,0,0,463,464,3,50,25,0,464,465,5,
	58,0,0,465,467,1,0,0,0,466,463,1,0,0,0,466,467,1,0,0,0,467,468,1,0,0,0,
	468,469,3,50,25,0,469,97,1,0,0,0,470,471,5,13,0,0,471,472,3,144,72,0,472,
	99,1,0,0,0,473,474,5,26,0,0,474,475,3,28,14,0,475,476,5,74,0,0,476,477,
	3,52,26,0,477,101,1,0,0,0,478,479,5,17,0,0,479,482,3,44,22,0,480,481,5,
	59,0,0,481,483,3,14,7,0,482,480,1,0,0,0,482,483,1,0,0,0,483,103,1,0,0,0,
	484,485,5,4,0,0,485,488,3,48,24,0,486,487,5,74,0,0,487,489,3,48,24,0,488,
	486,1,0,0,0,488,489,1,0,0,0,489,495,1,0,0,0,490,491,5,132,0,0,491,492,3,
	48,24,0,492,493,5,62,0,0,493,494,3,48,24,0,494,496,1,0,0,0,495,490,1,0,
	0,0,495,496,1,0,0,0,496,105,1,0,0,0,497,498,5,30,0,0,498,499,3,52,26,0,
	499,107,1,0,0,0,500,501,5,21,0,0,501,502,3,110,55,0,502,109,1,0,0,0,503,
	505,3,112,56,0,504,503,1,0,0,0,505,506,1,0,0,0,506,504,1,0,0,0,506,507,
	1,0,0,0,507,111,1,0,0,0,508,509,5,99,0,0,509,510,3,114,57,0,510,511,5,100,
	0,0,511,113,1,0,0,0,512,513,6,57,-1,0,513,514,3,116,58,0,514,520,1,0,0,
	0,515,516,10,1,0,0,516,517,5,52,0,0,517,519,3,116,58,0,518,515,1,0,0,0,
	519,522,1,0,0,0,520,518,1,0,0,0,520,521,1,0,0,0,521,115,1,0,0,0,522,520,
	1,0,0,0,523,524,3,6,3,0,524,117,1,0,0,0,525,526,5,31,0,0,526,119,1,0,0,
	0,527,528,5,18,0,0,528,529,3,144,72,0,529,530,5,74,0,0,530,533,3,18,9,0,
	531,532,5,79,0,0,532,534,3,62,31,0,533,531,1,0,0,0,533,534,1,0,0,0,534,
	121,1,0,0,0,535,539,5,7,0,0,536,537,3,48,24,0,537,538,5,58,0,0,538,540,
	1,0,0,0,539,536,1,0,0,0,539,540,1,0,0,0,540,541,1,0,0,0,541,542,3,134,67,
	0,542,543,5,79,0,0,543,544,3,62,31,0,544,123,1,0,0,0,545,546,6,62,-1,0,
	546,547,5,71,0,0,547,575,3,124,62,8,548,575,3,130,65,0,549,575,3,126,63,
	0,550,552,3,130,65,0,551,553,5,71,0,0,552,551,1,0,0,0,552,553,1,0,0,0,553,
	554,1,0,0,0,554,555,5,67,0,0,555,556,5,99,0,0,556,561,3,130,65,0,557,558,
	5,62,0,0,558,560,3,130,65,0,559,557,1,0,0,0,560,563,1,0,0,0,561,559,1,0,
	0,0,561,562,1,0,0,0,562,564,1,0,0,0,563,561,1,0,0,0,564,565,5,100,0,0,565,
	575,1,0,0,0,566,567,3,130,65,0,567,569,5,68,0,0,568,570,5,71,0,0,569,568,
	1,0,0,0,569,570,1,0,0,0,570,571,1,0,0,0,571,572,5,72,0,0,572,575,1,0,0,
	0,573,575,3,128,64,0,574,545,1,0,0,0,574,548,1,0,0,0,574,549,1,0,0,0,574,
	550,1,0,0,0,574,566,1,0,0,0,574,573,1,0,0,0,575,584,1,0,0,0,576,577,10,
	5,0,0,577,578,5,56,0,0,578,583,3,124,62,6,579,580,10,4,0,0,580,581,5,75,
	0,0,581,583,3,124,62,5,582,576,1,0,0,0,582,579,1,0,0,0,583,586,1,0,0,0,
	584,582,1,0,0,0,584,585,1,0,0,0,585,125,1,0,0,0,586,584,1,0,0,0,587,589,
	3,130,65,0,588,590,5,71,0,0,589,588,1,0,0,0,589,590,1,0,0,0,590,591,1,0,
	0,0,591,592,5,70,0,0,592,593,3,154,77,0,593,618,1,0,0,0,594,596,3,130,65,
	0,595,597,5,71,0,0,596,595,1,0,0,0,596,597,1,0,0,0,597,598,1,0,0,0,598,
	599,5,77,0,0,599,600,3,154,77,0,600,618,1,0,0,0,601,603,3,130,65,0,602,
	604,5,71,0,0,603,602,1,0,0,0,603,604,1,0,0,0,604,605,1,0,0,0,605,606,5,
	70,0,0,606,607,5,99,0,0,607,612,3,154,77,0,608,609,5,62,0,0,609,611,3,154,
	77,0,610,608,1,0,0,0,611,614,1,0,0,0,612,610,1,0,0,0,612,613,1,0,0,0,613,
	615,1,0,0,0,614,612,1,0,0,0,615,616,5,100,0,0,616,618,1,0,0,0,617,587,1,
	0,0,0,617,594,1,0,0,0,617,601,1,0,0,0,618,127,1,0,0,0,619,622,3,48,24,0,
	620,621,5,60,0,0,621,623,3,10,5,0,622,620,1,0,0,0,622,623,1,0,0,0,623,624,
	1,0,0,0,624,625,5,61,0,0,625,626,3,144,72,0,626,129,1,0,0,0,627,633,3,132,
	66,0,628,629,3,132,66,0,629,630,3,156,78,0,630,631,3,132,66,0,631,633,1,
	0,0,0,632,627,1,0,0,0,632,628,1,0,0,0,633,131,1,0,0,0,634,635,6,66,-1,0,
	635,639,3,134,67,0,636,637,7,4,0,0,637,639,3,132,66,3,638,634,1,0,0,0,638,
	636,1,0,0,0,639,648,1,0,0,0,640,641,10,2,0,0,641,642,7,5,0,0,642,647,3,
	132,66,3,643,644,10,1,0,0,644,645,7,4,0,0,645,647,3,132,66,2,646,640,1,
	0,0,0,646,643,1,0,0,0,647,650,1,0,0,0,648,646,1,0,0,0,648,649,1,0,0,0,649,
	133,1,0,0,0,650,648,1,0,0,0,651,652,6,67,-1,0,652,660,3,144,72,0,653,660,
	3,48,24,0,654,660,3,136,68,0,655,656,5,99,0,0,656,657,3,124,62,0,657,658,
	5,100,0,0,658,660,1,0,0,0,659,651,1,0,0,0,659,653,1,0,0,0,659,654,1,0,0,
	0,659,655,1,0,0,0,660,666,1,0,0,0,661,662,10,1,0,0,662,663,5,60,0,0,663,
	665,3,10,5,0,664,661,1,0,0,0,665,668,1,0,0,0,666,664,1,0,0,0,666,667,1,
	0,0,0,667,135,1,0,0,0,668,666,1,0,0,0,669,670,3,138,69,0,670,684,5,99,0,
	0,671,685,5,89,0,0,672,677,3,124,62,0,673,674,5,62,0,0,674,676,3,124,62,
	0,675,673,1,0,0,0,676,679,1,0,0,0,677,675,1,0,0,0,677,678,1,0,0,0,678,682,
	1,0,0,0,679,677,1,0,0,0,680,681,5,62,0,0,681,683,3,140,70,0,682,680,1,0,
	0,0,682,683,1,0,0,0,683,685,1,0,0,0,684,671,1,0,0,0,684,672,1,0,0,0,684,
	685,1,0,0,0,685,686,1,0,0,0,686,687,5,100,0,0,687,137,1,0,0,0,688,689,3,
	62,31,0,689,139,1,0,0,0,690,691,5,92,0,0,691,696,3,142,71,0,692,693,5,62,
	0,0,693,695,3,142,71,0,694,692,1,0,0,0,695,698,1,0,0,0,696,694,1,0,0,0,
	696,697,1,0,0,0,697,699,1,0,0,0,698,696,1,0,0,0,699,700,5,93,0,0,700,141,
	1,0,0,0,701,702,3,154,77,0,702,703,5,61,0,0,703,704,3,144,72,0,704,143,
	1,0,0,0,705,748,5,72,0,0,706,707,3,152,76,0,707,708,5,101,0,0,708,748,1,
	0,0,0,709,748,3,150,75,0,710,748,3,152,76,0,711,748,3,146,73,0,712,748,
	3,58,29,0,713,748,3,154,77,0,714,715,5,97,0,0,715,720,3,148,74,0,716,717,
	5,62,0,0,717,719,3,148,74,0,718,716,1,0,0,0,719,722,1,0,0,0,720,718,1,0,
	0,0,720,721,1,0,0,0,721,723,1,0,0,0,722,720,1,0,0,0,723,724,5,98,0,0,724,
	748,1,0,0,0,725,726,5,97,0,0,726,731,3,146,73,0,727,728,5,62,0,0,728,730,
	3,146,73,0,729,727,1,0,0,0,730,733,1,0,0,0,731,729,1,0,0,0,731,732,1,0,
	0,0,732,734,1,0,0,0,733,731,1,0,0,0,734,735,5,98,0,0,735,748,1,0,0,0,736,
	737,5,97,0,0,737,742,3,154,77,0,738,739,5,62,0,0,739,741,3,154,77,0,740,
	738,1,0,0,0,741,744,1,0,0,0,742,740,1,0,0,0,742,743,1,0,0,0,743,745,1,0,
	0,0,744,742,1,0,0,0,745,746,5,98,0,0,746,748,1,0,0,0,747,705,1,0,0,0,747,
	706,1,0,0,0,747,709,1,0,0,0,747,710,1,0,0,0,747,711,1,0,0,0,747,712,1,0,
	0,0,747,713,1,0,0,0,747,714,1,0,0,0,747,725,1,0,0,0,747,736,1,0,0,0,748,
	145,1,0,0,0,749,750,7,6,0,0,750,147,1,0,0,0,751,754,3,150,75,0,752,754,
	3,152,76,0,753,751,1,0,0,0,753,752,1,0,0,0,754,149,1,0,0,0,755,757,7,4,
	0,0,756,755,1,0,0,0,756,757,1,0,0,0,757,758,1,0,0,0,758,759,5,55,0,0,759,
	151,1,0,0,0,760,762,7,4,0,0,761,760,1,0,0,0,761,762,1,0,0,0,762,763,1,0,
	0,0,763,764,5,54,0,0,764,153,1,0,0,0,765,766,5,53,0,0,766,155,1,0,0,0,767,
	768,7,7,0,0,768,157,1,0,0,0,769,770,7,8,0,0,770,771,5,114,0,0,771,772,3,
	160,80,0,772,773,3,162,81,0,773,159,1,0,0,0,774,775,3,28,14,0,775,161,1,
	0,0,0,776,777,5,74,0,0,777,782,3,164,82,0,778,779,5,62,0,0,779,781,3,164,
	82,0,780,778,1,0,0,0,781,784,1,0,0,0,782,780,1,0,0,0,782,783,1,0,0,0,783,
	163,1,0,0,0,784,782,1,0,0,0,785,786,3,130,65,0,786,165,1,0,0,0,70,177,186,
	215,230,236,245,251,264,268,279,295,303,307,314,320,327,335,343,351,355,
	359,364,375,380,384,398,409,415,429,450,458,461,466,482,488,495,506,520,
	533,539,552,561,569,574,582,584,589,596,603,612,617,622,632,638,646,648,
	659,666,677,682,684,696,720,731,742,747,753,756,761,782];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!esql_parser.__ATN) {
			esql_parser.__ATN = new ATNDeserializer().deserialize(esql_parser._serializedATN);
		}

		return esql_parser.__ATN;
	}


	static DecisionsToDFA = esql_parser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class SingleStatementContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(esql_parser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_singleStatement;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterSingleStatement) {
	 		listener.enterSingleStatement(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitSingleStatement) {
	 		listener.exitSingleStatement(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_query;
	}
	public override copyFrom(ctx: QueryContext): void {
		super.copyFrom(ctx);
	}
}
export class CompositeQueryContext extends QueryContext {
	constructor(parser: esql_parser, ctx: QueryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public PIPE(): TerminalNode {
		return this.getToken(esql_parser.PIPE, 0);
	}
	public processingCommand(): ProcessingCommandContext {
		return this.getTypedRuleContext(ProcessingCommandContext, 0) as ProcessingCommandContext;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterCompositeQuery) {
	 		listener.enterCompositeQuery(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitCompositeQuery) {
	 		listener.exitCompositeQuery(this);
		}
	}
}
export class SingleCommandQueryContext extends QueryContext {
	constructor(parser: esql_parser, ctx: QueryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public sourceCommand(): SourceCommandContext {
		return this.getTypedRuleContext(SourceCommandContext, 0) as SourceCommandContext;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterSingleCommandQuery) {
	 		listener.enterSingleCommandQuery(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitSingleCommandQuery) {
	 		listener.exitSingleCommandQuery(this);
		}
	}
}


export class SourceCommandContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public explainCommand(): ExplainCommandContext {
		return this.getTypedRuleContext(ExplainCommandContext, 0) as ExplainCommandContext;
	}
	public fromCommand(): FromCommandContext {
		return this.getTypedRuleContext(FromCommandContext, 0) as FromCommandContext;
	}
	public rowCommand(): RowCommandContext {
		return this.getTypedRuleContext(RowCommandContext, 0) as RowCommandContext;
	}
	public showCommand(): ShowCommandContext {
		return this.getTypedRuleContext(ShowCommandContext, 0) as ShowCommandContext;
	}
	public timeSeriesCommand(): TimeSeriesCommandContext {
		return this.getTypedRuleContext(TimeSeriesCommandContext, 0) as TimeSeriesCommandContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_sourceCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterSourceCommand) {
	 		listener.enterSourceCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitSourceCommand) {
	 		listener.exitSourceCommand(this);
		}
	}
}


export class ProcessingCommandContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public evalCommand(): EvalCommandContext {
		return this.getTypedRuleContext(EvalCommandContext, 0) as EvalCommandContext;
	}
	public whereCommand(): WhereCommandContext {
		return this.getTypedRuleContext(WhereCommandContext, 0) as WhereCommandContext;
	}
	public keepCommand(): KeepCommandContext {
		return this.getTypedRuleContext(KeepCommandContext, 0) as KeepCommandContext;
	}
	public limitCommand(): LimitCommandContext {
		return this.getTypedRuleContext(LimitCommandContext, 0) as LimitCommandContext;
	}
	public statsCommand(): StatsCommandContext {
		return this.getTypedRuleContext(StatsCommandContext, 0) as StatsCommandContext;
	}
	public sortCommand(): SortCommandContext {
		return this.getTypedRuleContext(SortCommandContext, 0) as SortCommandContext;
	}
	public dropCommand(): DropCommandContext {
		return this.getTypedRuleContext(DropCommandContext, 0) as DropCommandContext;
	}
	public renameCommand(): RenameCommandContext {
		return this.getTypedRuleContext(RenameCommandContext, 0) as RenameCommandContext;
	}
	public dissectCommand(): DissectCommandContext {
		return this.getTypedRuleContext(DissectCommandContext, 0) as DissectCommandContext;
	}
	public grokCommand(): GrokCommandContext {
		return this.getTypedRuleContext(GrokCommandContext, 0) as GrokCommandContext;
	}
	public enrichCommand(): EnrichCommandContext {
		return this.getTypedRuleContext(EnrichCommandContext, 0) as EnrichCommandContext;
	}
	public mvExpandCommand(): MvExpandCommandContext {
		return this.getTypedRuleContext(MvExpandCommandContext, 0) as MvExpandCommandContext;
	}
	public joinCommand(): JoinCommandContext {
		return this.getTypedRuleContext(JoinCommandContext, 0) as JoinCommandContext;
	}
	public changePointCommand(): ChangePointCommandContext {
		return this.getTypedRuleContext(ChangePointCommandContext, 0) as ChangePointCommandContext;
	}
	public completionCommand(): CompletionCommandContext {
		return this.getTypedRuleContext(CompletionCommandContext, 0) as CompletionCommandContext;
	}
	public sampleCommand(): SampleCommandContext {
		return this.getTypedRuleContext(SampleCommandContext, 0) as SampleCommandContext;
	}
	public forkCommand(): ForkCommandContext {
		return this.getTypedRuleContext(ForkCommandContext, 0) as ForkCommandContext;
	}
	public inlinestatsCommand(): InlinestatsCommandContext {
		return this.getTypedRuleContext(InlinestatsCommandContext, 0) as InlinestatsCommandContext;
	}
	public lookupCommand(): LookupCommandContext {
		return this.getTypedRuleContext(LookupCommandContext, 0) as LookupCommandContext;
	}
	public insistCommand(): InsistCommandContext {
		return this.getTypedRuleContext(InsistCommandContext, 0) as InsistCommandContext;
	}
	public rerankCommand(): RerankCommandContext {
		return this.getTypedRuleContext(RerankCommandContext, 0) as RerankCommandContext;
	}
	public rrfCommand(): RrfCommandContext {
		return this.getTypedRuleContext(RrfCommandContext, 0) as RrfCommandContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_processingCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterProcessingCommand) {
	 		listener.enterProcessingCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitProcessingCommand) {
	 		listener.exitProcessingCommand(this);
		}
	}
}


export class WhereCommandContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHERE(): TerminalNode {
		return this.getToken(esql_parser.WHERE, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_whereCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterWhereCommand) {
	 		listener.enterWhereCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitWhereCommand) {
	 		listener.exitWhereCommand(this);
		}
	}
}


export class DataTypeContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_dataType;
	}
	public override copyFrom(ctx: DataTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class ToDataTypeContext extends DataTypeContext {
	constructor(parser: esql_parser, ctx: DataTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterToDataType) {
	 		listener.enterToDataType(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitToDataType) {
	 		listener.exitToDataType(this);
		}
	}
}


export class RowCommandContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ROW(): TerminalNode {
		return this.getToken(esql_parser.ROW, 0);
	}
	public fields(): FieldsContext {
		return this.getTypedRuleContext(FieldsContext, 0) as FieldsContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_rowCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterRowCommand) {
	 		listener.enterRowCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitRowCommand) {
	 		listener.exitRowCommand(this);
		}
	}
}


export class FieldsContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public field_list(): FieldContext[] {
		return this.getTypedRuleContexts(FieldContext) as FieldContext[];
	}
	public field(i: number): FieldContext {
		return this.getTypedRuleContext(FieldContext, i) as FieldContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(esql_parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(esql_parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_fields;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterFields) {
	 		listener.enterFields(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitFields) {
	 		listener.exitFields(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(esql_parser.ASSIGN, 0);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_field;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterField) {
	 		listener.enterField(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitField) {
	 		listener.exitField(this);
		}
	}
}


export class RerankFieldsContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public rerankField_list(): RerankFieldContext[] {
		return this.getTypedRuleContexts(RerankFieldContext) as RerankFieldContext[];
	}
	public rerankField(i: number): RerankFieldContext {
		return this.getTypedRuleContext(RerankFieldContext, i) as RerankFieldContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(esql_parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(esql_parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_rerankFields;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterRerankFields) {
	 		listener.enterRerankFields(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitRerankFields) {
	 		listener.exitRerankFields(this);
		}
	}
}


export class RerankFieldContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(esql_parser.ASSIGN, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_rerankField;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterRerankField) {
	 		listener.enterRerankField(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitRerankField) {
	 		listener.exitRerankField(this);
		}
	}
}


export class FromCommandContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FROM(): TerminalNode {
		return this.getToken(esql_parser.FROM, 0);
	}
	public indexPatternAndMetadataFields(): IndexPatternAndMetadataFieldsContext {
		return this.getTypedRuleContext(IndexPatternAndMetadataFieldsContext, 0) as IndexPatternAndMetadataFieldsContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_fromCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterFromCommand) {
	 		listener.enterFromCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitFromCommand) {
	 		listener.exitFromCommand(this);
		}
	}
}


export class TimeSeriesCommandContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEV_TIME_SERIES(): TerminalNode {
		return this.getToken(esql_parser.DEV_TIME_SERIES, 0);
	}
	public indexPatternAndMetadataFields(): IndexPatternAndMetadataFieldsContext {
		return this.getTypedRuleContext(IndexPatternAndMetadataFieldsContext, 0) as IndexPatternAndMetadataFieldsContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_timeSeriesCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterTimeSeriesCommand) {
	 		listener.enterTimeSeriesCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitTimeSeriesCommand) {
	 		listener.exitTimeSeriesCommand(this);
		}
	}
}


export class IndexPatternAndMetadataFieldsContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public indexPattern_list(): IndexPatternContext[] {
		return this.getTypedRuleContexts(IndexPatternContext) as IndexPatternContext[];
	}
	public indexPattern(i: number): IndexPatternContext {
		return this.getTypedRuleContext(IndexPatternContext, i) as IndexPatternContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(esql_parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(esql_parser.COMMA, i);
	}
	public metadata(): MetadataContext {
		return this.getTypedRuleContext(MetadataContext, 0) as MetadataContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_indexPatternAndMetadataFields;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterIndexPatternAndMetadataFields) {
	 		listener.enterIndexPatternAndMetadataFields(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitIndexPatternAndMetadataFields) {
	 		listener.exitIndexPatternAndMetadataFields(this);
		}
	}
}


export class IndexPatternContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public clusterString(): ClusterStringContext {
		return this.getTypedRuleContext(ClusterStringContext, 0) as ClusterStringContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(esql_parser.COLON, 0);
	}
	public unquotedIndexString(): UnquotedIndexStringContext {
		return this.getTypedRuleContext(UnquotedIndexStringContext, 0) as UnquotedIndexStringContext;
	}
	public CAST_OP(): TerminalNode {
		return this.getToken(esql_parser.CAST_OP, 0);
	}
	public selectorString(): SelectorStringContext {
		return this.getTypedRuleContext(SelectorStringContext, 0) as SelectorStringContext;
	}
	public indexString(): IndexStringContext {
		return this.getTypedRuleContext(IndexStringContext, 0) as IndexStringContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_indexPattern;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterIndexPattern) {
	 		listener.enterIndexPattern(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitIndexPattern) {
	 		listener.exitIndexPattern(this);
		}
	}
}


export class ClusterStringContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNQUOTED_SOURCE(): TerminalNode {
		return this.getToken(esql_parser.UNQUOTED_SOURCE, 0);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_clusterString;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterClusterString) {
	 		listener.enterClusterString(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitClusterString) {
	 		listener.exitClusterString(this);
		}
	}
}


export class SelectorStringContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNQUOTED_SOURCE(): TerminalNode {
		return this.getToken(esql_parser.UNQUOTED_SOURCE, 0);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_selectorString;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterSelectorString) {
	 		listener.enterSelectorString(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitSelectorString) {
	 		listener.exitSelectorString(this);
		}
	}
}


export class UnquotedIndexStringContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNQUOTED_SOURCE(): TerminalNode {
		return this.getToken(esql_parser.UNQUOTED_SOURCE, 0);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_unquotedIndexString;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterUnquotedIndexString) {
	 		listener.enterUnquotedIndexString(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitUnquotedIndexString) {
	 		listener.exitUnquotedIndexString(this);
		}
	}
}


export class IndexStringContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNQUOTED_SOURCE(): TerminalNode {
		return this.getToken(esql_parser.UNQUOTED_SOURCE, 0);
	}
	public QUOTED_STRING(): TerminalNode {
		return this.getToken(esql_parser.QUOTED_STRING, 0);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_indexString;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterIndexString) {
	 		listener.enterIndexString(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitIndexString) {
	 		listener.exitIndexString(this);
		}
	}
}


export class MetadataContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public METADATA(): TerminalNode {
		return this.getToken(esql_parser.METADATA, 0);
	}
	public UNQUOTED_SOURCE_list(): TerminalNode[] {
	    	return this.getTokens(esql_parser.UNQUOTED_SOURCE);
	}
	public UNQUOTED_SOURCE(i: number): TerminalNode {
		return this.getToken(esql_parser.UNQUOTED_SOURCE, i);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(esql_parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(esql_parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_metadata;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterMetadata) {
	 		listener.enterMetadata(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitMetadata) {
	 		listener.exitMetadata(this);
		}
	}
}


export class EvalCommandContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EVAL(): TerminalNode {
		return this.getToken(esql_parser.EVAL, 0);
	}
	public fields(): FieldsContext {
		return this.getTypedRuleContext(FieldsContext, 0) as FieldsContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_evalCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterEvalCommand) {
	 		listener.enterEvalCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitEvalCommand) {
	 		listener.exitEvalCommand(this);
		}
	}
}


export class StatsCommandContext extends ParserRuleContext {
	public _stats!: AggFieldsContext;
	public _grouping!: FieldsContext;
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STATS(): TerminalNode {
		return this.getToken(esql_parser.STATS, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(esql_parser.BY, 0);
	}
	public aggFields(): AggFieldsContext {
		return this.getTypedRuleContext(AggFieldsContext, 0) as AggFieldsContext;
	}
	public fields(): FieldsContext {
		return this.getTypedRuleContext(FieldsContext, 0) as FieldsContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_statsCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterStatsCommand) {
	 		listener.enterStatsCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitStatsCommand) {
	 		listener.exitStatsCommand(this);
		}
	}
}


export class AggFieldsContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public aggField_list(): AggFieldContext[] {
		return this.getTypedRuleContexts(AggFieldContext) as AggFieldContext[];
	}
	public aggField(i: number): AggFieldContext {
		return this.getTypedRuleContext(AggFieldContext, i) as AggFieldContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(esql_parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(esql_parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_aggFields;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterAggFields) {
	 		listener.enterAggFields(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitAggFields) {
	 		listener.exitAggFields(this);
		}
	}
}


export class AggFieldContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public field(): FieldContext {
		return this.getTypedRuleContext(FieldContext, 0) as FieldContext;
	}
	public WHERE(): TerminalNode {
		return this.getToken(esql_parser.WHERE, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_aggField;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterAggField) {
	 		listener.enterAggField(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitAggField) {
	 		listener.exitAggField(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifierOrParameter_list(): IdentifierOrParameterContext[] {
		return this.getTypedRuleContexts(IdentifierOrParameterContext) as IdentifierOrParameterContext[];
	}
	public identifierOrParameter(i: number): IdentifierOrParameterContext {
		return this.getTypedRuleContext(IdentifierOrParameterContext, i) as IdentifierOrParameterContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(esql_parser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(esql_parser.DOT, i);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_qualifiedName;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterQualifiedName) {
	 		listener.enterQualifiedName(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitQualifiedName) {
	 		listener.exitQualifiedName(this);
		}
	}
}


export class QualifiedNamePatternContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifierPattern_list(): IdentifierPatternContext[] {
		return this.getTypedRuleContexts(IdentifierPatternContext) as IdentifierPatternContext[];
	}
	public identifierPattern(i: number): IdentifierPatternContext {
		return this.getTypedRuleContext(IdentifierPatternContext, i) as IdentifierPatternContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(esql_parser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(esql_parser.DOT, i);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_qualifiedNamePattern;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterQualifiedNamePattern) {
	 		listener.enterQualifiedNamePattern(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitQualifiedNamePattern) {
	 		listener.exitQualifiedNamePattern(this);
		}
	}
}


export class QualifiedNamePatternsContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public qualifiedNamePattern_list(): QualifiedNamePatternContext[] {
		return this.getTypedRuleContexts(QualifiedNamePatternContext) as QualifiedNamePatternContext[];
	}
	public qualifiedNamePattern(i: number): QualifiedNamePatternContext {
		return this.getTypedRuleContext(QualifiedNamePatternContext, i) as QualifiedNamePatternContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(esql_parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(esql_parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_qualifiedNamePatterns;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterQualifiedNamePatterns) {
	 		listener.enterQualifiedNamePatterns(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitQualifiedNamePatterns) {
	 		listener.exitQualifiedNamePatterns(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNQUOTED_IDENTIFIER(): TerminalNode {
		return this.getToken(esql_parser.UNQUOTED_IDENTIFIER, 0);
	}
	public QUOTED_IDENTIFIER(): TerminalNode {
		return this.getToken(esql_parser.QUOTED_IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_identifier;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterIdentifier) {
	 		listener.enterIdentifier(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitIdentifier) {
	 		listener.exitIdentifier(this);
		}
	}
}


export class IdentifierPatternContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID_PATTERN(): TerminalNode {
		return this.getToken(esql_parser.ID_PATTERN, 0);
	}
	public parameter(): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, 0) as ParameterContext;
	}
	public doubleParameter(): DoubleParameterContext {
		return this.getTypedRuleContext(DoubleParameterContext, 0) as DoubleParameterContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_identifierPattern;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterIdentifierPattern) {
	 		listener.enterIdentifierPattern(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitIdentifierPattern) {
	 		listener.exitIdentifierPattern(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_parameter;
	}
	public override copyFrom(ctx: ParameterContext): void {
		super.copyFrom(ctx);
	}
}
export class InputNamedOrPositionalParamContext extends ParameterContext {
	constructor(parser: esql_parser, ctx: ParameterContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NAMED_OR_POSITIONAL_PARAM(): TerminalNode {
		return this.getToken(esql_parser.NAMED_OR_POSITIONAL_PARAM, 0);
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterInputNamedOrPositionalParam) {
	 		listener.enterInputNamedOrPositionalParam(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitInputNamedOrPositionalParam) {
	 		listener.exitInputNamedOrPositionalParam(this);
		}
	}
}
export class InputParamContext extends ParameterContext {
	constructor(parser: esql_parser, ctx: ParameterContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PARAM(): TerminalNode {
		return this.getToken(esql_parser.PARAM, 0);
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterInputParam) {
	 		listener.enterInputParam(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitInputParam) {
	 		listener.exitInputParam(this);
		}
	}
}


export class DoubleParameterContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_doubleParameter;
	}
	public override copyFrom(ctx: DoubleParameterContext): void {
		super.copyFrom(ctx);
	}
}
export class InputDoubleParamsContext extends DoubleParameterContext {
	constructor(parser: esql_parser, ctx: DoubleParameterContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOUBLE_PARAMS(): TerminalNode {
		return this.getToken(esql_parser.DOUBLE_PARAMS, 0);
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterInputDoubleParams) {
	 		listener.enterInputDoubleParams(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitInputDoubleParams) {
	 		listener.exitInputDoubleParams(this);
		}
	}
}
export class InputNamedOrPositionalDoubleParamsContext extends DoubleParameterContext {
	constructor(parser: esql_parser, ctx: DoubleParameterContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NAMED_OR_POSITIONAL_DOUBLE_PARAMS(): TerminalNode {
		return this.getToken(esql_parser.NAMED_OR_POSITIONAL_DOUBLE_PARAMS, 0);
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterInputNamedOrPositionalDoubleParams) {
	 		listener.enterInputNamedOrPositionalDoubleParams(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitInputNamedOrPositionalDoubleParams) {
	 		listener.exitInputNamedOrPositionalDoubleParams(this);
		}
	}
}


export class IdentifierOrParameterContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public parameter(): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, 0) as ParameterContext;
	}
	public doubleParameter(): DoubleParameterContext {
		return this.getTypedRuleContext(DoubleParameterContext, 0) as DoubleParameterContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_identifierOrParameter;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterIdentifierOrParameter) {
	 		listener.enterIdentifierOrParameter(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitIdentifierOrParameter) {
	 		listener.exitIdentifierOrParameter(this);
		}
	}
}


export class LimitCommandContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LIMIT(): TerminalNode {
		return this.getToken(esql_parser.LIMIT, 0);
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_limitCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterLimitCommand) {
	 		listener.enterLimitCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitLimitCommand) {
	 		listener.exitLimitCommand(this);
		}
	}
}


export class SortCommandContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SORT(): TerminalNode {
		return this.getToken(esql_parser.SORT, 0);
	}
	public orderExpression_list(): OrderExpressionContext[] {
		return this.getTypedRuleContexts(OrderExpressionContext) as OrderExpressionContext[];
	}
	public orderExpression(i: number): OrderExpressionContext {
		return this.getTypedRuleContext(OrderExpressionContext, i) as OrderExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(esql_parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(esql_parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_sortCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterSortCommand) {
	 		listener.enterSortCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitSortCommand) {
	 		listener.exitSortCommand(this);
		}
	}
}


export class OrderExpressionContext extends ParserRuleContext {
	public _ordering!: Token;
	public _nullOrdering!: Token;
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public NULLS(): TerminalNode {
		return this.getToken(esql_parser.NULLS, 0);
	}
	public ASC(): TerminalNode {
		return this.getToken(esql_parser.ASC, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(esql_parser.DESC, 0);
	}
	public FIRST(): TerminalNode {
		return this.getToken(esql_parser.FIRST, 0);
	}
	public LAST(): TerminalNode {
		return this.getToken(esql_parser.LAST, 0);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_orderExpression;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterOrderExpression) {
	 		listener.enterOrderExpression(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitOrderExpression) {
	 		listener.exitOrderExpression(this);
		}
	}
}


export class KeepCommandContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KEEP(): TerminalNode {
		return this.getToken(esql_parser.KEEP, 0);
	}
	public qualifiedNamePatterns(): QualifiedNamePatternsContext {
		return this.getTypedRuleContext(QualifiedNamePatternsContext, 0) as QualifiedNamePatternsContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_keepCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterKeepCommand) {
	 		listener.enterKeepCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitKeepCommand) {
	 		listener.exitKeepCommand(this);
		}
	}
}


export class DropCommandContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(esql_parser.DROP, 0);
	}
	public qualifiedNamePatterns(): QualifiedNamePatternsContext {
		return this.getTypedRuleContext(QualifiedNamePatternsContext, 0) as QualifiedNamePatternsContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_dropCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterDropCommand) {
	 		listener.enterDropCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitDropCommand) {
	 		listener.exitDropCommand(this);
		}
	}
}


export class RenameCommandContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RENAME(): TerminalNode {
		return this.getToken(esql_parser.RENAME, 0);
	}
	public renameClause_list(): RenameClauseContext[] {
		return this.getTypedRuleContexts(RenameClauseContext) as RenameClauseContext[];
	}
	public renameClause(i: number): RenameClauseContext {
		return this.getTypedRuleContext(RenameClauseContext, i) as RenameClauseContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(esql_parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(esql_parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_renameCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterRenameCommand) {
	 		listener.enterRenameCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitRenameCommand) {
	 		listener.exitRenameCommand(this);
		}
	}
}


export class RenameClauseContext extends ParserRuleContext {
	public _oldName!: QualifiedNamePatternContext;
	public _newName!: QualifiedNamePatternContext;
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AS(): TerminalNode {
		return this.getToken(esql_parser.AS, 0);
	}
	public qualifiedNamePattern_list(): QualifiedNamePatternContext[] {
		return this.getTypedRuleContexts(QualifiedNamePatternContext) as QualifiedNamePatternContext[];
	}
	public qualifiedNamePattern(i: number): QualifiedNamePatternContext {
		return this.getTypedRuleContext(QualifiedNamePatternContext, i) as QualifiedNamePatternContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(esql_parser.ASSIGN, 0);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_renameClause;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterRenameClause) {
	 		listener.enterRenameClause(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitRenameClause) {
	 		listener.exitRenameClause(this);
		}
	}
}


export class DissectCommandContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DISSECT(): TerminalNode {
		return this.getToken(esql_parser.DISSECT, 0);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public commandOptions(): CommandOptionsContext {
		return this.getTypedRuleContext(CommandOptionsContext, 0) as CommandOptionsContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_dissectCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterDissectCommand) {
	 		listener.enterDissectCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitDissectCommand) {
	 		listener.exitDissectCommand(this);
		}
	}
}


export class GrokCommandContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public GROK(): TerminalNode {
		return this.getToken(esql_parser.GROK, 0);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_grokCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterGrokCommand) {
	 		listener.enterGrokCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitGrokCommand) {
	 		listener.exitGrokCommand(this);
		}
	}
}


export class MvExpandCommandContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MV_EXPAND(): TerminalNode {
		return this.getToken(esql_parser.MV_EXPAND, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_mvExpandCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterMvExpandCommand) {
	 		listener.enterMvExpandCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitMvExpandCommand) {
	 		listener.exitMvExpandCommand(this);
		}
	}
}


export class CommandOptionsContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public commandOption_list(): CommandOptionContext[] {
		return this.getTypedRuleContexts(CommandOptionContext) as CommandOptionContext[];
	}
	public commandOption(i: number): CommandOptionContext {
		return this.getTypedRuleContext(CommandOptionContext, i) as CommandOptionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(esql_parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(esql_parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_commandOptions;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterCommandOptions) {
	 		listener.enterCommandOptions(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitCommandOptions) {
	 		listener.exitCommandOptions(this);
		}
	}
}


export class CommandOptionContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(esql_parser.ASSIGN, 0);
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_commandOption;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterCommandOption) {
	 		listener.enterCommandOption(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitCommandOption) {
	 		listener.exitCommandOption(this);
		}
	}
}


export class ExplainCommandContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXPLAIN(): TerminalNode {
		return this.getToken(esql_parser.EXPLAIN, 0);
	}
	public subqueryExpression(): SubqueryExpressionContext {
		return this.getTypedRuleContext(SubqueryExpressionContext, 0) as SubqueryExpressionContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_explainCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterExplainCommand) {
	 		listener.enterExplainCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitExplainCommand) {
	 		listener.exitExplainCommand(this);
		}
	}
}


export class SubqueryExpressionContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPENING_BRACKET(): TerminalNode {
		return this.getToken(esql_parser.OPENING_BRACKET, 0);
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public CLOSING_BRACKET(): TerminalNode {
		return this.getToken(esql_parser.CLOSING_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_subqueryExpression;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterSubqueryExpression) {
	 		listener.enterSubqueryExpression(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitSubqueryExpression) {
	 		listener.exitSubqueryExpression(this);
		}
	}
}


export class ShowCommandContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_showCommand;
	}
	public override copyFrom(ctx: ShowCommandContext): void {
		super.copyFrom(ctx);
	}
}
export class ShowInfoContext extends ShowCommandContext {
	constructor(parser: esql_parser, ctx: ShowCommandContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHOW(): TerminalNode {
		return this.getToken(esql_parser.SHOW, 0);
	}
	public INFO(): TerminalNode {
		return this.getToken(esql_parser.INFO, 0);
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterShowInfo) {
	 		listener.enterShowInfo(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitShowInfo) {
	 		listener.exitShowInfo(this);
		}
	}
}


export class EnrichCommandContext extends ParserRuleContext {
	public _policyName!: Token;
	public _matchField!: QualifiedNamePatternContext;
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ENRICH(): TerminalNode {
		return this.getToken(esql_parser.ENRICH, 0);
	}
	public ENRICH_POLICY_NAME(): TerminalNode {
		return this.getToken(esql_parser.ENRICH_POLICY_NAME, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(esql_parser.ON, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(esql_parser.WITH, 0);
	}
	public enrichWithClause_list(): EnrichWithClauseContext[] {
		return this.getTypedRuleContexts(EnrichWithClauseContext) as EnrichWithClauseContext[];
	}
	public enrichWithClause(i: number): EnrichWithClauseContext {
		return this.getTypedRuleContext(EnrichWithClauseContext, i) as EnrichWithClauseContext;
	}
	public qualifiedNamePattern(): QualifiedNamePatternContext {
		return this.getTypedRuleContext(QualifiedNamePatternContext, 0) as QualifiedNamePatternContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(esql_parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(esql_parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_enrichCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterEnrichCommand) {
	 		listener.enterEnrichCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitEnrichCommand) {
	 		listener.exitEnrichCommand(this);
		}
	}
}


export class EnrichWithClauseContext extends ParserRuleContext {
	public _newName!: QualifiedNamePatternContext;
	public _enrichField!: QualifiedNamePatternContext;
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public qualifiedNamePattern_list(): QualifiedNamePatternContext[] {
		return this.getTypedRuleContexts(QualifiedNamePatternContext) as QualifiedNamePatternContext[];
	}
	public qualifiedNamePattern(i: number): QualifiedNamePatternContext {
		return this.getTypedRuleContext(QualifiedNamePatternContext, i) as QualifiedNamePatternContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(esql_parser.ASSIGN, 0);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_enrichWithClause;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterEnrichWithClause) {
	 		listener.enterEnrichWithClause(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitEnrichWithClause) {
	 		listener.exitEnrichWithClause(this);
		}
	}
}


export class SampleCommandContext extends ParserRuleContext {
	public _probability!: ConstantContext;
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SAMPLE(): TerminalNode {
		return this.getToken(esql_parser.SAMPLE, 0);
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_sampleCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterSampleCommand) {
	 		listener.enterSampleCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitSampleCommand) {
	 		listener.exitSampleCommand(this);
		}
	}
}


export class LookupCommandContext extends ParserRuleContext {
	public _tableName!: IndexPatternContext;
	public _matchFields!: QualifiedNamePatternsContext;
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEV_LOOKUP(): TerminalNode {
		return this.getToken(esql_parser.DEV_LOOKUP, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(esql_parser.ON, 0);
	}
	public indexPattern(): IndexPatternContext {
		return this.getTypedRuleContext(IndexPatternContext, 0) as IndexPatternContext;
	}
	public qualifiedNamePatterns(): QualifiedNamePatternsContext {
		return this.getTypedRuleContext(QualifiedNamePatternsContext, 0) as QualifiedNamePatternsContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_lookupCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterLookupCommand) {
	 		listener.enterLookupCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitLookupCommand) {
	 		listener.exitLookupCommand(this);
		}
	}
}


export class InlinestatsCommandContext extends ParserRuleContext {
	public _stats!: AggFieldsContext;
	public _grouping!: FieldsContext;
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEV_INLINESTATS(): TerminalNode {
		return this.getToken(esql_parser.DEV_INLINESTATS, 0);
	}
	public aggFields(): AggFieldsContext {
		return this.getTypedRuleContext(AggFieldsContext, 0) as AggFieldsContext;
	}
	public BY(): TerminalNode {
		return this.getToken(esql_parser.BY, 0);
	}
	public fields(): FieldsContext {
		return this.getTypedRuleContext(FieldsContext, 0) as FieldsContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_inlinestatsCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterInlinestatsCommand) {
	 		listener.enterInlinestatsCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitInlinestatsCommand) {
	 		listener.exitInlinestatsCommand(this);
		}
	}
}


export class ChangePointCommandContext extends ParserRuleContext {
	public _value!: QualifiedNameContext;
	public _key!: QualifiedNameContext;
	public _targetType!: QualifiedNameContext;
	public _targetPvalue!: QualifiedNameContext;
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHANGE_POINT(): TerminalNode {
		return this.getToken(esql_parser.CHANGE_POINT, 0);
	}
	public qualifiedName_list(): QualifiedNameContext[] {
		return this.getTypedRuleContexts(QualifiedNameContext) as QualifiedNameContext[];
	}
	public qualifiedName(i: number): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, i) as QualifiedNameContext;
	}
	public ON(): TerminalNode {
		return this.getToken(esql_parser.ON, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(esql_parser.AS, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(esql_parser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_changePointCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterChangePointCommand) {
	 		listener.enterChangePointCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitChangePointCommand) {
	 		listener.exitChangePointCommand(this);
		}
	}
}


export class InsistCommandContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEV_INSIST(): TerminalNode {
		return this.getToken(esql_parser.DEV_INSIST, 0);
	}
	public qualifiedNamePatterns(): QualifiedNamePatternsContext {
		return this.getTypedRuleContext(QualifiedNamePatternsContext, 0) as QualifiedNamePatternsContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_insistCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterInsistCommand) {
	 		listener.enterInsistCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitInsistCommand) {
	 		listener.exitInsistCommand(this);
		}
	}
}


export class ForkCommandContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FORK(): TerminalNode {
		return this.getToken(esql_parser.FORK, 0);
	}
	public forkSubQueries(): ForkSubQueriesContext {
		return this.getTypedRuleContext(ForkSubQueriesContext, 0) as ForkSubQueriesContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_forkCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterForkCommand) {
	 		listener.enterForkCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitForkCommand) {
	 		listener.exitForkCommand(this);
		}
	}
}


export class ForkSubQueriesContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public forkSubQuery_list(): ForkSubQueryContext[] {
		return this.getTypedRuleContexts(ForkSubQueryContext) as ForkSubQueryContext[];
	}
	public forkSubQuery(i: number): ForkSubQueryContext {
		return this.getTypedRuleContext(ForkSubQueryContext, i) as ForkSubQueryContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_forkSubQueries;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterForkSubQueries) {
	 		listener.enterForkSubQueries(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitForkSubQueries) {
	 		listener.exitForkSubQueries(this);
		}
	}
}


export class ForkSubQueryContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LP(): TerminalNode {
		return this.getToken(esql_parser.LP, 0);
	}
	public forkSubQueryCommand(): ForkSubQueryCommandContext {
		return this.getTypedRuleContext(ForkSubQueryCommandContext, 0) as ForkSubQueryCommandContext;
	}
	public RP(): TerminalNode {
		return this.getToken(esql_parser.RP, 0);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_forkSubQuery;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterForkSubQuery) {
	 		listener.enterForkSubQuery(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitForkSubQuery) {
	 		listener.exitForkSubQuery(this);
		}
	}
}


export class ForkSubQueryCommandContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_forkSubQueryCommand;
	}
	public override copyFrom(ctx: ForkSubQueryCommandContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleForkSubQueryCommandContext extends ForkSubQueryCommandContext {
	constructor(parser: esql_parser, ctx: ForkSubQueryCommandContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public forkSubQueryProcessingCommand(): ForkSubQueryProcessingCommandContext {
		return this.getTypedRuleContext(ForkSubQueryProcessingCommandContext, 0) as ForkSubQueryProcessingCommandContext;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterSingleForkSubQueryCommand) {
	 		listener.enterSingleForkSubQueryCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitSingleForkSubQueryCommand) {
	 		listener.exitSingleForkSubQueryCommand(this);
		}
	}
}
export class CompositeForkSubQueryContext extends ForkSubQueryCommandContext {
	constructor(parser: esql_parser, ctx: ForkSubQueryCommandContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public forkSubQueryCommand(): ForkSubQueryCommandContext {
		return this.getTypedRuleContext(ForkSubQueryCommandContext, 0) as ForkSubQueryCommandContext;
	}
	public PIPE(): TerminalNode {
		return this.getToken(esql_parser.PIPE, 0);
	}
	public forkSubQueryProcessingCommand(): ForkSubQueryProcessingCommandContext {
		return this.getTypedRuleContext(ForkSubQueryProcessingCommandContext, 0) as ForkSubQueryProcessingCommandContext;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterCompositeForkSubQuery) {
	 		listener.enterCompositeForkSubQuery(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitCompositeForkSubQuery) {
	 		listener.exitCompositeForkSubQuery(this);
		}
	}
}


export class ForkSubQueryProcessingCommandContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public processingCommand(): ProcessingCommandContext {
		return this.getTypedRuleContext(ProcessingCommandContext, 0) as ProcessingCommandContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_forkSubQueryProcessingCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterForkSubQueryProcessingCommand) {
	 		listener.enterForkSubQueryProcessingCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitForkSubQueryProcessingCommand) {
	 		listener.exitForkSubQueryProcessingCommand(this);
		}
	}
}


export class RrfCommandContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEV_RRF(): TerminalNode {
		return this.getToken(esql_parser.DEV_RRF, 0);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_rrfCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterRrfCommand) {
	 		listener.enterRrfCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitRrfCommand) {
	 		listener.exitRrfCommand(this);
		}
	}
}


export class RerankCommandContext extends ParserRuleContext {
	public _queryText!: ConstantContext;
	public _inferenceId!: IdentifierOrParameterContext;
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEV_RERANK(): TerminalNode {
		return this.getToken(esql_parser.DEV_RERANK, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(esql_parser.ON, 0);
	}
	public rerankFields(): RerankFieldsContext {
		return this.getTypedRuleContext(RerankFieldsContext, 0) as RerankFieldsContext;
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(esql_parser.WITH, 0);
	}
	public identifierOrParameter(): IdentifierOrParameterContext {
		return this.getTypedRuleContext(IdentifierOrParameterContext, 0) as IdentifierOrParameterContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_rerankCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterRerankCommand) {
	 		listener.enterRerankCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitRerankCommand) {
	 		listener.exitRerankCommand(this);
		}
	}
}


export class CompletionCommandContext extends ParserRuleContext {
	public _targetField!: QualifiedNameContext;
	public _prompt!: PrimaryExpressionContext;
	public _inferenceId!: IdentifierOrParameterContext;
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMPLETION(): TerminalNode {
		return this.getToken(esql_parser.COMPLETION, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(esql_parser.WITH, 0);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public identifierOrParameter(): IdentifierOrParameterContext {
		return this.getTypedRuleContext(IdentifierOrParameterContext, 0) as IdentifierOrParameterContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(esql_parser.ASSIGN, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_completionCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterCompletionCommand) {
	 		listener.enterCompletionCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitCompletionCommand) {
	 		listener.exitCompletionCommand(this);
		}
	}
}


export class BooleanExpressionContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_booleanExpression;
	}
	public override copyFrom(ctx: BooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class MatchExpressionContext extends BooleanExpressionContext {
	constructor(parser: esql_parser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public matchBooleanExpression(): MatchBooleanExpressionContext {
		return this.getTypedRuleContext(MatchBooleanExpressionContext, 0) as MatchBooleanExpressionContext;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterMatchExpression) {
	 		listener.enterMatchExpression(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitMatchExpression) {
	 		listener.exitMatchExpression(this);
		}
	}
}
export class LogicalNotContext extends BooleanExpressionContext {
	constructor(parser: esql_parser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NOT(): TerminalNode {
		return this.getToken(esql_parser.NOT, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterLogicalNot) {
	 		listener.enterLogicalNot(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitLogicalNot) {
	 		listener.exitLogicalNot(this);
		}
	}
}
export class BooleanDefaultContext extends BooleanExpressionContext {
	constructor(parser: esql_parser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterBooleanDefault) {
	 		listener.enterBooleanDefault(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitBooleanDefault) {
	 		listener.exitBooleanDefault(this);
		}
	}
}
export class IsNullContext extends BooleanExpressionContext {
	constructor(parser: esql_parser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public IS(): TerminalNode {
		return this.getToken(esql_parser.IS, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(esql_parser.NULL, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(esql_parser.NOT, 0);
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterIsNull) {
	 		listener.enterIsNull(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitIsNull) {
	 		listener.exitIsNull(this);
		}
	}
}
export class RegexExpressionContext extends BooleanExpressionContext {
	constructor(parser: esql_parser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public regexBooleanExpression(): RegexBooleanExpressionContext {
		return this.getTypedRuleContext(RegexBooleanExpressionContext, 0) as RegexBooleanExpressionContext;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterRegexExpression) {
	 		listener.enterRegexExpression(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitRegexExpression) {
	 		listener.exitRegexExpression(this);
		}
	}
}
export class LogicalInContext extends BooleanExpressionContext {
	constructor(parser: esql_parser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public IN(): TerminalNode {
		return this.getToken(esql_parser.IN, 0);
	}
	public LP(): TerminalNode {
		return this.getToken(esql_parser.LP, 0);
	}
	public RP(): TerminalNode {
		return this.getToken(esql_parser.RP, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(esql_parser.NOT, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(esql_parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(esql_parser.COMMA, i);
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterLogicalIn) {
	 		listener.enterLogicalIn(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitLogicalIn) {
	 		listener.exitLogicalIn(this);
		}
	}
}
export class LogicalBinaryContext extends BooleanExpressionContext {
	public _left!: BooleanExpressionContext;
	public _operator!: Token;
	public _right!: BooleanExpressionContext;
	constructor(parser: esql_parser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public booleanExpression_list(): BooleanExpressionContext[] {
		return this.getTypedRuleContexts(BooleanExpressionContext) as BooleanExpressionContext[];
	}
	public booleanExpression(i: number): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, i) as BooleanExpressionContext;
	}
	public AND(): TerminalNode {
		return this.getToken(esql_parser.AND, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(esql_parser.OR, 0);
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterLogicalBinary) {
	 		listener.enterLogicalBinary(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitLogicalBinary) {
	 		listener.exitLogicalBinary(this);
		}
	}
}


export class RegexBooleanExpressionContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_regexBooleanExpression;
	}
	public override copyFrom(ctx: RegexBooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class LikeExpressionContext extends RegexBooleanExpressionContext {
	constructor(parser: esql_parser, ctx: RegexBooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public LIKE(): TerminalNode {
		return this.getToken(esql_parser.LIKE, 0);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(esql_parser.NOT, 0);
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterLikeExpression) {
	 		listener.enterLikeExpression(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitLikeExpression) {
	 		listener.exitLikeExpression(this);
		}
	}
}
export class LikeListExpressionContext extends RegexBooleanExpressionContext {
	constructor(parser: esql_parser, ctx: RegexBooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public LIKE(): TerminalNode {
		return this.getToken(esql_parser.LIKE, 0);
	}
	public LP(): TerminalNode {
		return this.getToken(esql_parser.LP, 0);
	}
	public string__list(): StringContext[] {
		return this.getTypedRuleContexts(StringContext) as StringContext[];
	}
	public string_(i: number): StringContext {
		return this.getTypedRuleContext(StringContext, i) as StringContext;
	}
	public RP(): TerminalNode {
		return this.getToken(esql_parser.RP, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(esql_parser.NOT, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(esql_parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(esql_parser.COMMA, i);
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterLikeListExpression) {
	 		listener.enterLikeListExpression(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitLikeListExpression) {
	 		listener.exitLikeListExpression(this);
		}
	}
}
export class RlikeExpressionContext extends RegexBooleanExpressionContext {
	constructor(parser: esql_parser, ctx: RegexBooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public RLIKE(): TerminalNode {
		return this.getToken(esql_parser.RLIKE, 0);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(esql_parser.NOT, 0);
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterRlikeExpression) {
	 		listener.enterRlikeExpression(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitRlikeExpression) {
	 		listener.exitRlikeExpression(this);
		}
	}
}


export class MatchBooleanExpressionContext extends ParserRuleContext {
	public _fieldExp!: QualifiedNameContext;
	public _fieldType!: DataTypeContext;
	public _matchQuery!: ConstantContext;
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(esql_parser.COLON, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
	public CAST_OP(): TerminalNode {
		return this.getToken(esql_parser.CAST_OP, 0);
	}
	public dataType(): DataTypeContext {
		return this.getTypedRuleContext(DataTypeContext, 0) as DataTypeContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_matchBooleanExpression;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterMatchBooleanExpression) {
	 		listener.enterMatchBooleanExpression(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitMatchBooleanExpression) {
	 		listener.exitMatchBooleanExpression(this);
		}
	}
}


export class ValueExpressionContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_valueExpression;
	}
	public override copyFrom(ctx: ValueExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ValueExpressionDefaultContext extends ValueExpressionContext {
	constructor(parser: esql_parser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public operatorExpression(): OperatorExpressionContext {
		return this.getTypedRuleContext(OperatorExpressionContext, 0) as OperatorExpressionContext;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterValueExpressionDefault) {
	 		listener.enterValueExpressionDefault(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitValueExpressionDefault) {
	 		listener.exitValueExpressionDefault(this);
		}
	}
}
export class ComparisonContext extends ValueExpressionContext {
	public _left!: OperatorExpressionContext;
	public _right!: OperatorExpressionContext;
	constructor(parser: esql_parser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getTypedRuleContext(ComparisonOperatorContext, 0) as ComparisonOperatorContext;
	}
	public operatorExpression_list(): OperatorExpressionContext[] {
		return this.getTypedRuleContexts(OperatorExpressionContext) as OperatorExpressionContext[];
	}
	public operatorExpression(i: number): OperatorExpressionContext {
		return this.getTypedRuleContext(OperatorExpressionContext, i) as OperatorExpressionContext;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterComparison) {
	 		listener.enterComparison(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitComparison) {
	 		listener.exitComparison(this);
		}
	}
}


export class OperatorExpressionContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_operatorExpression;
	}
	public override copyFrom(ctx: OperatorExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class OperatorExpressionDefaultContext extends OperatorExpressionContext {
	constructor(parser: esql_parser, ctx: OperatorExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterOperatorExpressionDefault) {
	 		listener.enterOperatorExpressionDefault(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitOperatorExpressionDefault) {
	 		listener.exitOperatorExpressionDefault(this);
		}
	}
}
export class ArithmeticBinaryContext extends OperatorExpressionContext {
	public _left!: OperatorExpressionContext;
	public _operator!: Token;
	public _right!: OperatorExpressionContext;
	constructor(parser: esql_parser, ctx: OperatorExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public operatorExpression_list(): OperatorExpressionContext[] {
		return this.getTypedRuleContexts(OperatorExpressionContext) as OperatorExpressionContext[];
	}
	public operatorExpression(i: number): OperatorExpressionContext {
		return this.getTypedRuleContext(OperatorExpressionContext, i) as OperatorExpressionContext;
	}
	public ASTERISK(): TerminalNode {
		return this.getToken(esql_parser.ASTERISK, 0);
	}
	public SLASH(): TerminalNode {
		return this.getToken(esql_parser.SLASH, 0);
	}
	public PERCENT(): TerminalNode {
		return this.getToken(esql_parser.PERCENT, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(esql_parser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(esql_parser.MINUS, 0);
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterArithmeticBinary) {
	 		listener.enterArithmeticBinary(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitArithmeticBinary) {
	 		listener.exitArithmeticBinary(this);
		}
	}
}
export class ArithmeticUnaryContext extends OperatorExpressionContext {
	public _operator!: Token;
	constructor(parser: esql_parser, ctx: OperatorExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public operatorExpression(): OperatorExpressionContext {
		return this.getTypedRuleContext(OperatorExpressionContext, 0) as OperatorExpressionContext;
	}
	public MINUS(): TerminalNode {
		return this.getToken(esql_parser.MINUS, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(esql_parser.PLUS, 0);
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterArithmeticUnary) {
	 		listener.enterArithmeticUnary(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitArithmeticUnary) {
	 		listener.exitArithmeticUnary(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_primaryExpression;
	}
	public override copyFrom(ctx: PrimaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class DereferenceContext extends PrimaryExpressionContext {
	constructor(parser: esql_parser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterDereference) {
	 		listener.enterDereference(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitDereference) {
	 		listener.exitDereference(this);
		}
	}
}
export class InlineCastContext extends PrimaryExpressionContext {
	constructor(parser: esql_parser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public CAST_OP(): TerminalNode {
		return this.getToken(esql_parser.CAST_OP, 0);
	}
	public dataType(): DataTypeContext {
		return this.getTypedRuleContext(DataTypeContext, 0) as DataTypeContext;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterInlineCast) {
	 		listener.enterInlineCast(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitInlineCast) {
	 		listener.exitInlineCast(this);
		}
	}
}
export class ConstantDefaultContext extends PrimaryExpressionContext {
	constructor(parser: esql_parser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterConstantDefault) {
	 		listener.enterConstantDefault(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitConstantDefault) {
	 		listener.exitConstantDefault(this);
		}
	}
}
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
	constructor(parser: esql_parser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LP(): TerminalNode {
		return this.getToken(esql_parser.LP, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public RP(): TerminalNode {
		return this.getToken(esql_parser.RP, 0);
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterParenthesizedExpression) {
	 		listener.enterParenthesizedExpression(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitParenthesizedExpression) {
	 		listener.exitParenthesizedExpression(this);
		}
	}
}
export class FunctionContext extends PrimaryExpressionContext {
	constructor(parser: esql_parser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public functionExpression(): FunctionExpressionContext {
		return this.getTypedRuleContext(FunctionExpressionContext, 0) as FunctionExpressionContext;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterFunction) {
	 		listener.enterFunction(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitFunction) {
	 		listener.exitFunction(this);
		}
	}
}


export class FunctionExpressionContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public functionName(): FunctionNameContext {
		return this.getTypedRuleContext(FunctionNameContext, 0) as FunctionNameContext;
	}
	public LP(): TerminalNode {
		return this.getToken(esql_parser.LP, 0);
	}
	public RP(): TerminalNode {
		return this.getToken(esql_parser.RP, 0);
	}
	public ASTERISK(): TerminalNode {
		return this.getToken(esql_parser.ASTERISK, 0);
	}
	public booleanExpression_list(): BooleanExpressionContext[] {
		return this.getTypedRuleContexts(BooleanExpressionContext) as BooleanExpressionContext[];
	}
	public booleanExpression(i: number): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, i) as BooleanExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(esql_parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(esql_parser.COMMA, i);
	}
	public mapExpression(): MapExpressionContext {
		return this.getTypedRuleContext(MapExpressionContext, 0) as MapExpressionContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_functionExpression;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterFunctionExpression) {
	 		listener.enterFunctionExpression(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitFunctionExpression) {
	 		listener.exitFunctionExpression(this);
		}
	}
}


export class FunctionNameContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifierOrParameter(): IdentifierOrParameterContext {
		return this.getTypedRuleContext(IdentifierOrParameterContext, 0) as IdentifierOrParameterContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_functionName;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterFunctionName) {
	 		listener.enterFunctionName(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitFunctionName) {
	 		listener.exitFunctionName(this);
		}
	}
}


export class MapExpressionContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LEFT_BRACES(): TerminalNode {
		return this.getToken(esql_parser.LEFT_BRACES, 0);
	}
	public entryExpression_list(): EntryExpressionContext[] {
		return this.getTypedRuleContexts(EntryExpressionContext) as EntryExpressionContext[];
	}
	public entryExpression(i: number): EntryExpressionContext {
		return this.getTypedRuleContext(EntryExpressionContext, i) as EntryExpressionContext;
	}
	public RIGHT_BRACES(): TerminalNode {
		return this.getToken(esql_parser.RIGHT_BRACES, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(esql_parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(esql_parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_mapExpression;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterMapExpression) {
	 		listener.enterMapExpression(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitMapExpression) {
	 		listener.exitMapExpression(this);
		}
	}
}


export class EntryExpressionContext extends ParserRuleContext {
	public _key!: StringContext;
	public _value!: ConstantContext;
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(esql_parser.COLON, 0);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_entryExpression;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterEntryExpression) {
	 		listener.enterEntryExpression(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitEntryExpression) {
	 		listener.exitEntryExpression(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_constant;
	}
	public override copyFrom(ctx: ConstantContext): void {
		super.copyFrom(ctx);
	}
}
export class BooleanArrayLiteralContext extends ConstantContext {
	constructor(parser: esql_parser, ctx: ConstantContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OPENING_BRACKET(): TerminalNode {
		return this.getToken(esql_parser.OPENING_BRACKET, 0);
	}
	public booleanValue_list(): BooleanValueContext[] {
		return this.getTypedRuleContexts(BooleanValueContext) as BooleanValueContext[];
	}
	public booleanValue(i: number): BooleanValueContext {
		return this.getTypedRuleContext(BooleanValueContext, i) as BooleanValueContext;
	}
	public CLOSING_BRACKET(): TerminalNode {
		return this.getToken(esql_parser.CLOSING_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(esql_parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(esql_parser.COMMA, i);
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterBooleanArrayLiteral) {
	 		listener.enterBooleanArrayLiteral(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitBooleanArrayLiteral) {
	 		listener.exitBooleanArrayLiteral(this);
		}
	}
}
export class DecimalLiteralContext extends ConstantContext {
	constructor(parser: esql_parser, ctx: ConstantContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public decimalValue(): DecimalValueContext {
		return this.getTypedRuleContext(DecimalValueContext, 0) as DecimalValueContext;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterDecimalLiteral) {
	 		listener.enterDecimalLiteral(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitDecimalLiteral) {
	 		listener.exitDecimalLiteral(this);
		}
	}
}
export class NullLiteralContext extends ConstantContext {
	constructor(parser: esql_parser, ctx: ConstantContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NULL(): TerminalNode {
		return this.getToken(esql_parser.NULL, 0);
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterNullLiteral) {
	 		listener.enterNullLiteral(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitNullLiteral) {
	 		listener.exitNullLiteral(this);
		}
	}
}
export class QualifiedIntegerLiteralContext extends ConstantContext {
	constructor(parser: esql_parser, ctx: ConstantContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public integerValue(): IntegerValueContext {
		return this.getTypedRuleContext(IntegerValueContext, 0) as IntegerValueContext;
	}
	public UNQUOTED_IDENTIFIER(): TerminalNode {
		return this.getToken(esql_parser.UNQUOTED_IDENTIFIER, 0);
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterQualifiedIntegerLiteral) {
	 		listener.enterQualifiedIntegerLiteral(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitQualifiedIntegerLiteral) {
	 		listener.exitQualifiedIntegerLiteral(this);
		}
	}
}
export class StringArrayLiteralContext extends ConstantContext {
	constructor(parser: esql_parser, ctx: ConstantContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OPENING_BRACKET(): TerminalNode {
		return this.getToken(esql_parser.OPENING_BRACKET, 0);
	}
	public string__list(): StringContext[] {
		return this.getTypedRuleContexts(StringContext) as StringContext[];
	}
	public string_(i: number): StringContext {
		return this.getTypedRuleContext(StringContext, i) as StringContext;
	}
	public CLOSING_BRACKET(): TerminalNode {
		return this.getToken(esql_parser.CLOSING_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(esql_parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(esql_parser.COMMA, i);
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterStringArrayLiteral) {
	 		listener.enterStringArrayLiteral(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitStringArrayLiteral) {
	 		listener.exitStringArrayLiteral(this);
		}
	}
}
export class InputParameterContext extends ConstantContext {
	constructor(parser: esql_parser, ctx: ConstantContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public parameter(): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, 0) as ParameterContext;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterInputParameter) {
	 		listener.enterInputParameter(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitInputParameter) {
	 		listener.exitInputParameter(this);
		}
	}
}
export class StringLiteralContext extends ConstantContext {
	constructor(parser: esql_parser, ctx: ConstantContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterStringLiteral) {
	 		listener.enterStringLiteral(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitStringLiteral) {
	 		listener.exitStringLiteral(this);
		}
	}
}
export class NumericArrayLiteralContext extends ConstantContext {
	constructor(parser: esql_parser, ctx: ConstantContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OPENING_BRACKET(): TerminalNode {
		return this.getToken(esql_parser.OPENING_BRACKET, 0);
	}
	public numericValue_list(): NumericValueContext[] {
		return this.getTypedRuleContexts(NumericValueContext) as NumericValueContext[];
	}
	public numericValue(i: number): NumericValueContext {
		return this.getTypedRuleContext(NumericValueContext, i) as NumericValueContext;
	}
	public CLOSING_BRACKET(): TerminalNode {
		return this.getToken(esql_parser.CLOSING_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(esql_parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(esql_parser.COMMA, i);
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterNumericArrayLiteral) {
	 		listener.enterNumericArrayLiteral(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitNumericArrayLiteral) {
	 		listener.exitNumericArrayLiteral(this);
		}
	}
}
export class IntegerLiteralContext extends ConstantContext {
	constructor(parser: esql_parser, ctx: ConstantContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public integerValue(): IntegerValueContext {
		return this.getTypedRuleContext(IntegerValueContext, 0) as IntegerValueContext;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterIntegerLiteral) {
	 		listener.enterIntegerLiteral(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitIntegerLiteral) {
	 		listener.exitIntegerLiteral(this);
		}
	}
}
export class BooleanLiteralContext extends ConstantContext {
	constructor(parser: esql_parser, ctx: ConstantContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public booleanValue(): BooleanValueContext {
		return this.getTypedRuleContext(BooleanValueContext, 0) as BooleanValueContext;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterBooleanLiteral) {
	 		listener.enterBooleanLiteral(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitBooleanLiteral) {
	 		listener.exitBooleanLiteral(this);
		}
	}
}


export class BooleanValueContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRUE(): TerminalNode {
		return this.getToken(esql_parser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(esql_parser.FALSE, 0);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_booleanValue;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterBooleanValue) {
	 		listener.enterBooleanValue(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitBooleanValue) {
	 		listener.exitBooleanValue(this);
		}
	}
}


export class NumericValueContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public decimalValue(): DecimalValueContext {
		return this.getTypedRuleContext(DecimalValueContext, 0) as DecimalValueContext;
	}
	public integerValue(): IntegerValueContext {
		return this.getTypedRuleContext(IntegerValueContext, 0) as IntegerValueContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_numericValue;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterNumericValue) {
	 		listener.enterNumericValue(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitNumericValue) {
	 		listener.exitNumericValue(this);
		}
	}
}


export class DecimalValueContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DECIMAL_LITERAL(): TerminalNode {
		return this.getToken(esql_parser.DECIMAL_LITERAL, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(esql_parser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(esql_parser.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_decimalValue;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterDecimalValue) {
	 		listener.enterDecimalValue(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitDecimalValue) {
	 		listener.exitDecimalValue(this);
		}
	}
}


export class IntegerValueContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTEGER_LITERAL(): TerminalNode {
		return this.getToken(esql_parser.INTEGER_LITERAL, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(esql_parser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(esql_parser.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_integerValue;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterIntegerValue) {
	 		listener.enterIntegerValue(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitIntegerValue) {
	 		listener.exitIntegerValue(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public QUOTED_STRING(): TerminalNode {
		return this.getToken(esql_parser.QUOTED_STRING, 0);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_string;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterString) {
	 		listener.enterString(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitString) {
	 		listener.exitString(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQ(): TerminalNode {
		return this.getToken(esql_parser.EQ, 0);
	}
	public NEQ(): TerminalNode {
		return this.getToken(esql_parser.NEQ, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(esql_parser.LT, 0);
	}
	public LTE(): TerminalNode {
		return this.getToken(esql_parser.LTE, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(esql_parser.GT, 0);
	}
	public GTE(): TerminalNode {
		return this.getToken(esql_parser.GTE, 0);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_comparisonOperator;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterComparisonOperator) {
	 		listener.enterComparisonOperator(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitComparisonOperator) {
	 		listener.exitComparisonOperator(this);
		}
	}
}


export class JoinCommandContext extends ParserRuleContext {
	public _type_!: Token;
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public JOIN(): TerminalNode {
		return this.getToken(esql_parser.JOIN, 0);
	}
	public joinTarget(): JoinTargetContext {
		return this.getTypedRuleContext(JoinTargetContext, 0) as JoinTargetContext;
	}
	public joinCondition(): JoinConditionContext {
		return this.getTypedRuleContext(JoinConditionContext, 0) as JoinConditionContext;
	}
	public JOIN_LOOKUP(): TerminalNode {
		return this.getToken(esql_parser.JOIN_LOOKUP, 0);
	}
	public DEV_JOIN_LEFT(): TerminalNode {
		return this.getToken(esql_parser.DEV_JOIN_LEFT, 0);
	}
	public DEV_JOIN_RIGHT(): TerminalNode {
		return this.getToken(esql_parser.DEV_JOIN_RIGHT, 0);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_joinCommand;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterJoinCommand) {
	 		listener.enterJoinCommand(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitJoinCommand) {
	 		listener.exitJoinCommand(this);
		}
	}
}


export class JoinTargetContext extends ParserRuleContext {
	public _index!: IndexPatternContext;
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public indexPattern(): IndexPatternContext {
		return this.getTypedRuleContext(IndexPatternContext, 0) as IndexPatternContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_joinTarget;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterJoinTarget) {
	 		listener.enterJoinTarget(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitJoinTarget) {
	 		listener.exitJoinTarget(this);
		}
	}
}


export class JoinConditionContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ON(): TerminalNode {
		return this.getToken(esql_parser.ON, 0);
	}
	public joinPredicate_list(): JoinPredicateContext[] {
		return this.getTypedRuleContexts(JoinPredicateContext) as JoinPredicateContext[];
	}
	public joinPredicate(i: number): JoinPredicateContext {
		return this.getTypedRuleContext(JoinPredicateContext, i) as JoinPredicateContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(esql_parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(esql_parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_joinCondition;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterJoinCondition) {
	 		listener.enterJoinCondition(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitJoinCondition) {
	 		listener.exitJoinCondition(this);
		}
	}
}


export class JoinPredicateContext extends ParserRuleContext {
	constructor(parser?: esql_parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
    public get ruleIndex(): number {
    	return esql_parser.RULE_joinPredicate;
	}
	public enterRule(listener: esql_parserListener): void {
	    if(listener.enterJoinPredicate) {
	 		listener.enterJoinPredicate(this);
		}
	}
	public exitRule(listener: esql_parserListener): void {
	    if(listener.exitJoinPredicate) {
	 		listener.exitJoinPredicate(this);
		}
	}
}
