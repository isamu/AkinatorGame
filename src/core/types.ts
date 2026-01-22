/**
 * Akinator Game Types
 * AI asks questions to guess what you're thinking
 */

// Answer types for user responses
export type AnswerType = "yes" | "no" | "probably_yes" | "probably_no" | "unknown";

// Question and answer history entry
export interface QAEntry {
  question: string;
  answer: AnswerType;
}

// Game phase
export type GamePhase = "intro" | "questioning" | "guessing" | "result";

// Category of thing being guessed
export type Category = "character" | "person" | "animal" | "object" | "place";

// Game state
export interface AkinatorState {
  phase: GamePhase;
  category?: Category;
  questionCount: number;
  maxQuestions: number;
  currentQuestion?: string;
  qaHistory: QAEntry[];
  guess?: string;
  guessConfidence?: number;
  isCorrect?: boolean;
  score?: number;
  message: string;
}

// Plugin data (returned to chat)
export interface AkinatorData {
  state: AkinatorState;
  message: string;
}

// JSON data for LLM
export interface AkinatorJsonData {
  state: AkinatorState;
  availableActions: string[];
  instructions: string;
}

// Plugin args
export interface AkinatorArgs {
  action: "start" | "answer" | "guess" | "reveal";
  category?: Category;
  answer?: AnswerType;
  guess?: string;
  wasCorrect?: boolean;
  actualAnswer?: string;
}
