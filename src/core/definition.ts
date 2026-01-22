/**
 * Akinator Game Tool Definition
 */

import type { ToolDefinition } from "gui-chat-protocol";

export const TOOL_NAME = "akinator_game";

export const TOOL_DEFINITION: ToolDefinition = {
  type: "function",
  name: TOOL_NAME,
  description:
    "Play an Akinator-style guessing game. You ask yes/no questions to guess what the user is thinking of (a character, person, animal, object, or place). Try to guess in as few questions as possible!",
  parameters: {
    type: "object",
    properties: {
      action: {
        type: "string",
        enum: ["start", "answer", "guess", "reveal"],
        description:
          "Game action: 'start' to begin a new game, 'answer' to record user's answer to your question, 'guess' to make a guess, 'reveal' when user reveals the answer",
      },
      category: {
        type: "string",
        enum: ["character", "person", "animal", "object", "place"],
        description: "Category of thing to guess (required for 'start')",
      },
      answer: {
        type: "string",
        enum: ["yes", "no", "probably_yes", "probably_no", "unknown"],
        description: "User's answer to your question (for 'answer' action)",
      },
      guess: {
        type: "string",
        description: "Your guess of what the user is thinking (for 'guess' action)",
      },
      wasCorrect: {
        type: "boolean",
        description: "Whether your guess was correct (for 'reveal' action)",
      },
      actualAnswer: {
        type: "string",
        description: "The actual answer if your guess was wrong (for 'reveal' action)",
      },
    },
    required: ["action"],
  },
};

export const SYSTEM_PROMPT = `You are playing an Akinator-style guessing game. Your goal is to guess what the user is thinking of by asking strategic yes/no questions.

Game Rules:
1. The user thinks of something in a category (character, person, animal, object, or place)
2. You ask yes/no questions to narrow down possibilities
3. The user answers: はい (yes), いいえ (no), たぶんはい (probably yes), たぶんいいえ (probably no), or わからない (unknown)
4. Try to guess correctly in as few questions as possible (20 questions max)
5. When confident, make a guess using the 'guess' action

Strategy Tips:
- Start with broad questions to narrow categories (Is it real? Is it alive? Is it from Japan?)
- Use binary search style questioning to eliminate half the possibilities
- Pay attention to all previous answers
- Make educated guesses based on accumulated information

When asking questions, call the tool with action='answer' and include your question in the message.
When ready to guess, call the tool with action='guess' and your guess.

Remember: The fewer questions you ask, the higher the score!`;
