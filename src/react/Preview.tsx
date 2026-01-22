/**
 * Akinator Game Preview Component (React)
 */

import type { PreviewComponentProps } from "gui-chat-protocol";
import type { AkinatorData, AkinatorJsonData, Category } from "../core/types";

type PreviewProps = PreviewComponentProps<AkinatorData, AkinatorJsonData>;

function getCategoryName(category?: Category): string {
  if (!category) return "アキネイター";
  const names: Record<Category, string> = {
    character: "キャラクター",
    person: "有名人",
    animal: "動物",
    object: "もの",
    place: "場所",
  };
  return names[category] || category;
}

export function Preview({ result }: PreviewProps) {
  const gameData = result.data as AkinatorData | null;

  if (!gameData) {
    return null;
  }

  const { state } = gameData;

  return (
    <div className="p-3 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-md">
      <div className="flex flex-col gap-2 text-center">
        {/* Icon */}
        <div className="text-3xl">🔮</div>

        {/* Category */}
        <div className="text-sm font-semibold text-purple-800">
          {getCategoryName(state.category)}
        </div>

        {/* Status */}
        <div className="text-xs text-gray-600">
          {state.phase === "questioning" && (
            <span>質問 {state.questionCount}/{state.maxQuestions}</span>
          )}
          {state.phase === "guessing" && <span>🤔 予想中...</span>}
          {state.phase === "result" && (
            state.isCorrect
              ? <span className="text-green-600">🎉 正解!</span>
              : <span className="text-red-600">😅 残念</span>
          )}
        </div>

        {/* Score if available */}
        {state.score !== undefined && (
          <div className="text-xs font-bold text-yellow-600">
            {state.score}点
          </div>
        )}
      </div>
    </div>
  );
}

export default Preview;
