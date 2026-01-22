/**
 * Akinator Game Plugin Core Exports
 *
 * Framework-agnostic types and plugin logic.
 */
export type { AnswerType, QAEntry, GamePhase, Category, AkinatorState, AkinatorData, AkinatorJsonData, AkinatorArgs, } from "./types";
export { pluginCore, executeAkinator } from "./plugin";
export { TOOL_NAME, TOOL_DEFINITION, SYSTEM_PROMPT } from "./definition";
export { SAMPLES } from "./samples";
