/**
 * Akinator Game Plugin - Vue Implementation
 */

// Import styles for Vue components
import "../style.css";

import type { ToolPlugin } from "gui-chat-protocol/vue";
import type { AkinatorData, AkinatorJsonData, AkinatorArgs } from "../core/types";
import { pluginCore } from "../core/plugin";
import View from "./View.vue";
import Preview from "./Preview.vue";

// ============================================================================
// Vue Plugin (with components)
// ============================================================================

/**
 * Akinator game plugin instance with Vue components
 */
export const plugin: ToolPlugin<AkinatorData, AkinatorJsonData, AkinatorArgs> = {
  ...pluginCore,
  viewComponent: View,
  previewComponent: Preview,
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
