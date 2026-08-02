/**
 * Akinator Game Plugin Core (Framework-agnostic)
 */

import type { ToolPluginCore, ToolContext, ToolResult } from "gui-chat-protocol";
import type { AkinatorState, AkinatorData, AkinatorJsonData, AkinatorArgs, Category } from "./types";
import { TOOL_DEFINITION, SYSTEM_PROMPT } from "./definition";
import { SAMPLES } from "./samples";

// ============================================================================
// Game Logic
// ============================================================================

const getCategoryName = (category: Category): string => {
  switch (category) {
    case "character": return "キャラクター";
    case "person": return "有名人";
    case "animal": return "動物";
    case "object": return "もの";
    case "place": return "場所";
  }
};

const createInitialState = (category: Category): AkinatorState => ({
  phase: "questioning",
  category,
  questionCount: 0,
  maxQuestions: 20,
  qaHistory: [],
  message: `🔮 ${getCategoryName(category)}を当てます！何か1つ思い浮かべてください。準備ができたら教えてね！`,
});

const calculateScore = (questionCount: number, wasCorrect: boolean): number => {
  if (!wasCorrect) return 0;
  if (questionCount <= 5) return 100;
  if (questionCount <= 10) return 80;
  if (questionCount <= 15) return 60;
  if (questionCount <= 20) return 40;
  return 20;
};

// ============================================================================
// Execute Function
// ============================================================================

// context is nullable on purpose: hosts that run the plugin without client-side
// state (MulmoClaude's server bridge) pass an empty or missing context, and
// reading through it unguarded threw a TypeError instead of returning a result.
export const executeAkinator = async (
  context: ToolContext | null | undefined,
  args: AkinatorArgs,
): Promise<ToolResult<AkinatorData, AkinatorJsonData>> => {
  const { action, category, answer, guess, wasCorrect, actualAnswer } = args;

  // Get current state from context if available
  const currentResult = context?.currentResult as ToolResult<AkinatorData, AkinatorJsonData> | null;
  const prevState = currentResult?.data?.state;

  try {
    let state: AkinatorState;
    let instructions: string;
    let availableActions: string[];

    switch (action) {
      case "start": {
        if (!category) {
          throw new Error("Category is required to start the game");
        }
        state = createInitialState(category);
        instructions = `Game started! Category: ${getCategoryName(category)}. Ask your first yes/no question to start narrowing down. Use broad questions first (e.g., "Is it a real person?" or "Is it from Japan?").

When the user responds, call the tool with action='answer' and map their response:
- "はい" → answer="yes"
- "いいえ" → answer="no"
- "たぶんはい" → answer="probably_yes"
- "たぶんいいえ" → answer="probably_no"
- "わからない" → answer="unknown"`;
        availableActions = ["Ask a yes/no question, then call with action='answer' when user responds"];
        break;
      }

      case "answer": {
        if (!prevState) {
          throw new Error("No active game. Start a new game first.");
        }
        if (!answer) {
          throw new Error("Answer is required");
        }

        state = {
          ...prevState,
          questionCount: prevState.questionCount + 1,
          qaHistory: prevState.currentQuestion
            ? [...prevState.qaHistory, { question: prevState.currentQuestion, answer }]
            : prevState.qaHistory,
          currentQuestion: undefined,
        };

        const answerText = {
          yes: "はい",
          no: "いいえ",
          probably_yes: "たぶんはい",
          probably_no: "たぶんいいえ",
          unknown: "わからない",
        }[answer];

        state.message = `📝 回答: ${answerText} (質問 ${state.questionCount}/${state.maxQuestions})`;

        if (state.questionCount >= state.maxQuestions) {
          state.phase = "guessing";
          instructions = `You've reached the maximum ${state.maxQuestions} questions! Based on all the answers, make your best guess now using action='guess'.`;
          availableActions = ["guess"];
        } else {
          const historyText = state.qaHistory
            .map((qa, i) => `Q${i + 1}: ${qa.question} → ${qa.answer}`)
            .join("\n");
          instructions = `Answer recorded: ${answer}. Question history:\n${historyText}\n\nAnalyze all answers and either:\n1. Ask another strategic question (then call action='answer' when user responds with はい/いいえ/たぶんはい/たぶんいいえ/わからない → yes/no/probably_yes/probably_no/unknown)\n2. If confident, make a guess with action='guess'`;
          availableActions = ["Ask another question", "guess"];
        }
        break;
      }

      case "guess": {
        if (!prevState) {
          throw new Error("No active game. Start a new game first.");
        }
        if (!guess) {
          throw new Error("Guess is required");
        }

        state = {
          ...prevState,
          phase: "guessing",
          guess,
          message: `🎯 私の予想は... 「${guess}」です！\n\n当たっていますか？`,
        };

        instructions = `You guessed "${guess}". Wait for the user to confirm if it's correct. When they respond, call action='reveal' with wasCorrect=true/false. If wrong, include actualAnswer with what they were thinking of.`;
        availableActions = ["reveal (with wasCorrect and optionally actualAnswer)"];
        break;
      }

      case "reveal": {
        if (!prevState) {
          throw new Error("No active game. Start a new game first.");
        }
        if (wasCorrect === undefined) {
          throw new Error("wasCorrect is required");
        }

        const score = calculateScore(prevState.questionCount, wasCorrect);

        state = {
          ...prevState,
          phase: "result",
          isCorrect: wasCorrect,
          score,
          message: wasCorrect
            ? `🎉 正解！ ${prevState.questionCount}問で当てました！\n⭐ スコア: ${score}点`
            : `😅 残念！正解は「${actualAnswer || "???"}」でした。\n次は頑張ります！`,
        };

        instructions = wasCorrect
          ? `Congratulations! You guessed correctly in ${prevState.questionCount} questions! Score: ${score}. Celebrate with the user and offer to play again.`
          : `Your guess was wrong. The answer was "${actualAnswer}". Acknowledge this gracefully and offer to play again.`;
        availableActions = ["start (to play again)"];
        break;
      }

      default:
        throw new Error(`Unknown action: ${action}`);
    }

    return {
      toolName: TOOL_DEFINITION.name,
      data: { state, message: state.message },
      jsonData: { state, availableActions, instructions },
      message: state.message,
      instructions,
      updating: action !== "start",
      instructionsRequired: true,
    };
  } catch (error) {
    console.error("Akinator game error", error);
    return {
      toolName: TOOL_DEFINITION.name,
      message: `エラー: ${error instanceof Error ? error.message : "Unknown error"}`,
      instructions: "An error occurred. Ask the user if they want to start a new game.",
    };
  }
};

// ============================================================================
// Core Plugin (without UI components)
// ============================================================================

export const pluginCore: ToolPluginCore<AkinatorData, AkinatorJsonData, AkinatorArgs> = {
  toolDefinition: TOOL_DEFINITION,
  execute: executeAkinator,
  generatingMessage: "🔮 考え中...",
  isEnabled: () => true,
  samples: SAMPLES,
  systemPrompt: SYSTEM_PROMPT,
};
