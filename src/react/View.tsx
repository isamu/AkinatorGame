/**
 * Akinator Game View Component (React)
 */

import { useState, useEffect } from "react";
import type { ViewComponentProps } from "gui-chat-protocol";
import type { AkinatorData, AkinatorJsonData, AnswerType, Category } from "../core/types";
import { TOOL_NAME } from "../core/definition";

type ViewProps = ViewComponentProps<AkinatorData, AkinatorJsonData>;

const answerOptions: { value: AnswerType; label: string; className: string }[] = [
  { value: "yes", label: "はい", className: "bg-green-500/80 hover:bg-green-500 text-white border-green-400" },
  { value: "no", label: "いいえ", className: "bg-red-500/80 hover:bg-red-500 text-white border-red-400" },
  { value: "probably_yes", label: "たぶんはい", className: "bg-green-700/80 hover:bg-green-700 text-white border-green-600" },
  { value: "probably_no", label: "たぶんいいえ", className: "bg-red-700/80 hover:bg-red-700 text-white border-red-600" },
  { value: "unknown", label: "わからない", className: "col-span-2 bg-gray-600/80 hover:bg-gray-600 text-white border-gray-500" },
];

function getCategoryName(category?: Category): string {
  if (!category) return "";
  const names: Record<Category, string> = {
    character: "キャラクター",
    person: "有名人",
    animal: "動物",
    object: "もの",
    place: "場所",
  };
  return names[category] || category;
}

function getAnswerLabel(answer: AnswerType): string {
  const labels: Record<AnswerType, string> = {
    yes: "はい",
    no: "いいえ",
    probably_yes: "たぶんはい",
    probably_no: "たぶんいいえ",
    unknown: "わからない",
  };
  return labels[answer] || answer;
}

export function View({ selectedResult, sendTextMessage }: ViewProps) {
  const [gameData, setGameData] = useState<AkinatorData | null>(null);
  const [showRevealInput, setShowRevealInput] = useState(false);
  const [actualAnswer, setActualAnswer] = useState("");

  useEffect(() => {
    if (selectedResult?.toolName === TOOL_NAME && selectedResult.data) {
      setGameData(selectedResult.data as AkinatorData);
      setShowRevealInput(false);
      setActualAnswer("");
    }
  }, [selectedResult]);

  if (!gameData) return null;

  const { state } = gameData;

  const sendAnswer = (answer: AnswerType) => {
    sendTextMessage(getAnswerLabel(answer));
  };

  const confirmGuess = (wasCorrect: boolean) => {
    if (wasCorrect) {
      sendTextMessage("正解！当たりです！");
    } else if (actualAnswer.trim()) {
      sendTextMessage(`違います。正解は「${actualAnswer.trim()}」でした。`);
    }
  };

  const startNewGame = () => {
    sendTextMessage("もう一度遊びたい！");
  };

  return (
    <div className="size-full overflow-y-auto p-8 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <div className="max-w-2xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🔮</div>
          <h2 className="text-white text-3xl font-bold">アキネイター</h2>
          {state.category && (
            <p className="text-purple-300 mt-2">
              カテゴリ: {getCategoryName(state.category)}
            </p>
          )}
        </div>

        {/* Progress */}
        {state.phase === "questioning" && (
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>質問数</span>
              <span>{state.questionCount} / {state.maxQuestions}</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
                style={{ width: `${(state.questionCount / state.maxQuestions) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Message Box */}
        <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6 border border-white/20">
          <p className="text-white text-xl text-center whitespace-pre-line">
            {state.message}
          </p>
        </div>

        {/* Answer Buttons (during questioning phase) */}
        {state.phase === "questioning" && (
          <div className="space-y-4">
            <p className="text-center text-gray-400 text-sm mb-4">AIの質問に答えてください</p>
            <div className="grid grid-cols-2 gap-3">
              {answerOptions.map((answer) => (
                <button
                  key={answer.value}
                  onClick={() => sendAnswer(answer.value)}
                  className={`py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 border-2 ${answer.className}`}
                >
                  {answer.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Guess Confirmation (during guessing phase) */}
        {state.phase === "guessing" && state.guess && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => confirmGuess(true)}
                className="py-4 px-6 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-lg transition-colors"
              >
                🎉 正解！
              </button>
              <button
                onClick={() => setShowRevealInput(true)}
                className="py-4 px-6 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold text-lg transition-colors"
              >
                😅 違う
              </button>
            </div>

            {/* Input for actual answer if wrong */}
            {showRevealInput && (
              <div className="mt-4">
                <input
                  value={actualAnswer}
                  onChange={(e) => setActualAnswer(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && confirmGuess(false)}
                  type="text"
                  placeholder="正解を教えてください..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                />
                <button
                  onClick={() => confirmGuess(false)}
                  disabled={!actualAnswer.trim()}
                  className="w-full mt-3 py-3 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-colors"
                >
                  回答を送信
                </button>
              </div>
            )}
          </div>
        )}

        {/* Result Phase */}
        {state.phase === "result" && (
          <div className="text-center space-y-6">
            <div className="text-6xl">{state.isCorrect ? "🎉" : "😅"}</div>

            {state.score !== undefined && (
              <div className="text-3xl font-bold text-yellow-400">
                スコア: {state.score}点
              </div>
            )}

            <button
              onClick={startNewGame}
              className="py-4 px-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-bold text-lg transition-all"
            >
              もう一度遊ぶ
            </button>
          </div>
        )}

        {/* Q&A History */}
        {state.qaHistory.length > 0 && (
          <div className="mt-8">
            <h3 className="text-white font-bold mb-3">質問履歴</h3>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {state.qaHistory.map((qa, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-3 text-sm">
                  <span className="text-purple-300">Q{index + 1}:</span>
                  <span className="text-white ml-2">{qa.question}</span>
                  <span className="text-yellow-400 ml-2">→ {getAnswerLabel(qa.answer)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
