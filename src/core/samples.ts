/**
 * Akinator Game Sample Data
 */

import type { ToolSample } from "gui-chat-protocol";

export const SAMPLES: ToolSample[] = [
  {
    name: "キャラクター",
    args: {
      action: "start",
      category: "character",
    },
  },
  {
    name: "有名人",
    args: {
      action: "start",
      category: "person",
    },
  },
  {
    name: "動物",
    args: {
      action: "start",
      category: "animal",
    },
  },
  {
    name: "もの",
    args: {
      action: "start",
      category: "object",
    },
  },
  {
    name: "場所",
    args: {
      action: "start",
      category: "place",
    },
  },
];
