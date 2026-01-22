/**
 * Akinator Game Plugin - React Implementation
 */

// Import styles for React components
import "../style.css";

import type { ToolPluginReact } from "gui-chat-protocol/react";
import type { AkinatorData, AkinatorJsonData, AkinatorArgs } from "../core/types";
import { pluginCore } from "../core/plugin";
import { View } from "./View";
import { Preview } from "./Preview";

// ============================================================================
// React Plugin (with components)
// ============================================================================

/**
 * Akinator game plugin instance with React components
 */
export const plugin: ToolPluginReact<AkinatorData, AkinatorJsonData, AkinatorArgs> = {
  ...pluginCore,
  ViewComponent: View,
  PreviewComponent: Preview,
};

// Akinator types
export type {
  AnswerType,
  QAEntry,
  GamePhase,
  Category,
  AkinatorState,
  AkinatorData,
  AkinatorJsonData,
  AkinatorArgs,
} from "../core/types";

// Core plugin utilities
export { pluginCore, executeAkinator } from "../core/plugin";
export { TOOL_NAME, TOOL_DEFINITION, SYSTEM_PROMPT } from "../core/definition";
export { SAMPLES } from "../core/samples";

// Export components for direct use
export { View, Preview };

// Default export for compatibility: { plugin }
export default { plugin };
