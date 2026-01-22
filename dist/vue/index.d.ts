/**
 * Akinator Game Plugin - Vue Implementation
 */
import "../style.css";
import type { ToolPlugin } from "gui-chat-protocol/vue";
import type { AkinatorData, AkinatorJsonData, AkinatorArgs } from "../core/types";
import View from "./View.vue";
import Preview from "./Preview.vue";
/**
 * Akinator game plugin instance with Vue components
 */
export declare const plugin: ToolPlugin<AkinatorData, AkinatorJsonData, AkinatorArgs>;
export type { AnswerType, QAEntry, GamePhase, Category, AkinatorState, AkinatorData, AkinatorJsonData, AkinatorArgs, } from "../core/types";
export { pluginCore, executeAkinator } from "../core/plugin";
export { TOOL_NAME, TOOL_DEFINITION, SYSTEM_PROMPT } from "../core/definition";
export { SAMPLES } from "../core/samples";
export { View, Preview };
declare const _default: {
    plugin: ToolPlugin<AkinatorData, AkinatorJsonData, AkinatorArgs, import("gui-chat-protocol/vue").InputHandler, Record<string, unknown>>;
};
export default _default;
