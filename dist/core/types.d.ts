/**
 * Akinator Game Types
 * AI asks questions to guess what you're thinking
 */
export type AnswerType = "yes" | "no" | "probably_yes" | "probably_no" | "unknown";
export interface QAEntry {
    question: string;
    answer: AnswerType;
}
export type GamePhase = "intro" | "questioning" | "guessing" | "result";
export type Category = "character" | "person" | "animal" | "object" | "place";
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
export interface AkinatorData {
    state: AkinatorState;
    message: string;
}
export interface AkinatorJsonData {
    state: AkinatorState;
    availableActions: string[];
    instructions: string;
}
export interface AkinatorArgs {
    action: "start" | "answer" | "guess" | "reveal";
    category?: Category;
    answer?: AnswerType;
    guess?: string;
    wasCorrect?: boolean;
    actualAnswer?: string;
}
