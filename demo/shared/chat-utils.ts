/**
 * Shared chat utilities for Vue and React demos
 */
import OpenAI from "openai";
import type { ToolDefinition, ToolContext, ToolResult } from "gui-chat-protocol";
import type { ChatMessage, MockResponse } from "./chat-types";

/**
 * Load API key from environment variable (Vite)
 */
export const loadApiKey = (): string => {
  return import.meta.env?.VITE_OPENAI_API_KEY || "";
};

/**
 * Default mock responses for development without API key
 */
export const DEFAULT_MOCK_RESPONSES: Record<string, MockResponse> = {
  character: {
    toolCall: {
      name: "akinator_game",
      args: {
        action: "start",
        category: "character",
      },
    },
  },
  person: {
    toolCall: {
      name: "akinator_game",
      args: {
        action: "start",
        category: "person",
      },
    },
  },
  animal: {
    toolCall: {
      name: "akinator_game",
      args: {
        action: "start",
        category: "animal",
      },
    },
  },
  object: {
    toolCall: {
      name: "akinator_game",
      args: {
        action: "start",
        category: "object",
      },
    },
  },
  place: {
    toolCall: {
      name: "akinator_game",
      args: {
        action: "start",
        category: "place",
      },
    },
  },
  hello: {
    content: "こんにちは！アキネイターで遊びましょう！\n\n🔮 カテゴリを選んでください:\n- キャラクター\n- 有名人\n- 動物\n- もの\n- 場所",
  },
  default: {
    content: "どのカテゴリで遊びますか？「キャラクター」「有名人」「動物」「もの」「場所」から選んでね！",
  },
};

/**
 * Find matching mock response based on user message
 */
export const findMockResponse = (
  userMessage: string,
  mockResponses: Record<string, MockResponse> = DEFAULT_MOCK_RESPONSES
): MockResponse => {
  const lowerMessage = userMessage.toLowerCase();

  // Category keywords
  if (lowerMessage.includes("キャラクター") || lowerMessage.includes("character")) {
    return mockResponses.character || DEFAULT_MOCK_RESPONSES.character;
  }
  if (lowerMessage.includes("有名人") || lowerMessage.includes("person") || lowerMessage.includes("芸能人")) {
    return mockResponses.person || DEFAULT_MOCK_RESPONSES.person;
  }
  if (lowerMessage.includes("動物") || lowerMessage.includes("animal")) {
    return mockResponses.animal || DEFAULT_MOCK_RESPONSES.animal;
  }
  if (lowerMessage.includes("もの") || lowerMessage.includes("object") || lowerMessage.includes("物")) {
    return mockResponses.object || DEFAULT_MOCK_RESPONSES.object;
  }
  if (lowerMessage.includes("場所") || lowerMessage.includes("place")) {
    return mockResponses.place || DEFAULT_MOCK_RESPONSES.place;
  }
  if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("こんにちは")) {
    return mockResponses.hello || DEFAULT_MOCK_RESPONSES.hello;
  }

  return mockResponses.default || DEFAULT_MOCK_RESPONSES.default;
};

/**
 * Create OpenAI client
 */
export const createOpenAIClient = (apiKey: string): OpenAI => {
  return new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true,
  });
};

/**
 * Build system prompt including plugin's system prompt
 */
export const buildSystemPrompt = (basePrompt?: string, pluginPrompt?: string): string => {
  const base = basePrompt || "You are a helpful assistant.";
  const plugin = pluginPrompt || "";
  return `${base}\n\n${plugin}`.trim();
};

/**
 * Convert ChatMessage array to OpenAI API format
 */
export const convertToApiMessages = (
  messages: ChatMessage[],
  systemPrompt: string
): OpenAI.Chat.ChatCompletionMessageParam[] => {
  return [
    { role: "system", content: systemPrompt },
    ...messages.map((m) => {
      if (m.role === "tool") {
        return {
          role: "tool" as const,
          content: m.content,
          tool_call_id: m.toolCallId!,
        };
      }
      if (m.role === "assistant" && m.toolCalls) {
        return {
          role: "assistant" as const,
          content: m.content || null,
          tool_calls: m.toolCalls.map((tc) => ({
            id: tc.id,
            type: "function" as const,
            function: {
              name: tc.name,
              arguments: tc.arguments,
            },
          })),
        };
      }
      return {
        role: m.role as "user" | "assistant",
        content: m.content,
      };
    }),
  ];
};

/**
 * Build tools array for OpenAI API
 */
export const buildToolsParam = (
  toolDefinition: ToolDefinition
): OpenAI.Chat.ChatCompletionTool[] => {
  return [
    {
      type: "function",
      function: {
        name: toolDefinition.name,
        description: toolDefinition.description,
        parameters: toolDefinition.parameters,
      },
    },
  ];
};

/**
 * Execute plugin and return result
 */
export const executePluginWithContext = async (
  execute: (context: ToolContext, args: unknown) => Promise<ToolResult>,
  args: unknown,
  currentResult: ToolResult | null
): Promise<ToolResult> => {
  const context: ToolContext = {
    currentResult,
  };
  return await execute(context, args);
};

/**
 * Call OpenAI Chat API
 */
export const callOpenAI = async (
  client: OpenAI,
  model: string,
  messages: OpenAI.Chat.ChatCompletionMessageParam[],
  tools: OpenAI.Chat.ChatCompletionTool[]
): Promise<OpenAI.Chat.ChatCompletion> => {
  return await client.chat.completions.create({
    model,
    messages,
    tools,
    tool_choice: "auto",
  });
};
