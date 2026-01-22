/**
 * Akinator Game Plugin Core (Framework-agnostic)
 */
import type { ToolPluginCore, ToolContext, ToolResult } from "gui-chat-protocol";
import type { AkinatorData, AkinatorJsonData, AkinatorArgs } from "./types";
export declare const executeAkinator: (context: ToolContext, args: AkinatorArgs) => Promise<ToolResult<AkinatorData, AkinatorJsonData>>;
export declare const pluginCore: ToolPluginCore<AkinatorData, AkinatorJsonData, AkinatorArgs>;
