/**
 * Akinator Game Plugin - React Implementation
 */
import "../style.css";
import type { ToolPluginReact } from "gui-chat-protocol/react";
import type { AkinatorData, AkinatorJsonData, AkinatorArgs } from "../core/types";
import { View } from "./View";
import { Preview } from "./Preview";
/**
 * Akinator game plugin instance with React components
 */
export declare const plugin: ToolPluginReact<AkinatorData, AkinatorJsonData, AkinatorArgs>;
export type { AnswerType, QAEntry, GamePhase, Category, AkinatorState, AkinatorData, AkinatorJsonData, AkinatorArgs, } from "../core/types";
export { pluginCore, executeAkinator } from "../core/plugin";
export { TOOL_NAME, TOOL_DEFINITION, SYSTEM_PROMPT } from "../core/definition";
export { SAMPLES } from "../core/samples";
export { View, Preview };
declare const _default: {
    plugin: ToolPluginReact<AkinatorData, AkinatorJsonData, AkinatorArgs, import("gui-chat-protocol/react").InputHandler, Record<string, unknown>>;
};
export default _default;
