<template>
  <div class="size-full overflow-y-auto p-8 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
    <div v-if="gameData" class="max-w-2xl w-full mx-auto">
      <!-- Header -->
      <div class="text-center mb-8">
        <div class="text-6xl mb-4">🔮</div>
        <h2 class="text-white text-3xl font-bold">アキネイター</h2>
        <p v-if="gameData.state.category" class="text-purple-300 mt-2">
          カテゴリ: {{ getCategoryName(gameData.state.category) }}
        </p>
      </div>

      <!-- Progress -->
      <div v-if="gameData.state.phase === 'questioning'" class="mb-6">
        <div class="flex justify-between text-sm text-gray-400 mb-2">
          <span>質問数</span>
          <span>{{ gameData.state.questionCount }} / {{ gameData.state.maxQuestions }}</span>
        </div>
        <div class="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            class="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
            :style="{ width: `${(gameData.state.questionCount / gameData.state.maxQuestions) * 100}%` }"
          />
        </div>
      </div>

      <!-- Message Box -->
      <div class="bg-white/10 backdrop-blur rounded-xl p-6 mb-6 border border-white/20">
        <p class="text-white text-xl text-center whitespace-pre-line">
          {{ gameData.state.message }}
        </p>
      </div>

      <!-- Answer Buttons (during questioning phase) -->
      <div v-if="gameData.state.phase === 'questioning'" class="space-y-4">
        <p class="text-center text-gray-400 text-sm mb-4">AIの質問に答えてください</p>
        <div class="grid grid-cols-2 gap-3">
          <button
            v-for="answer in answerOptions"
            :key="answer.value"
            @click="sendAnswer(answer.value)"
            class="py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 border-2"
            :class="answer.class"
          >
            {{ answer.label }}
          </button>
        </div>
      </div>

      <!-- Guess Confirmation (during guessing phase) -->
      <div v-if="gameData.state.phase === 'guessing' && gameData.state.guess" class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <button
            @click="confirmGuess(true)"
            class="py-4 px-6 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-lg transition-colors"
          >
            🎉 正解！
          </button>
          <button
            @click="showRevealInput = true"
            class="py-4 px-6 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold text-lg transition-colors"
          >
            😅 違う
          </button>
        </div>

        <!-- Input for actual answer if wrong -->
        <div v-if="showRevealInput" class="mt-4">
          <input
            v-model="actualAnswer"
            @keydown.enter="confirmGuess(false)"
            type="text"
            placeholder="正解を教えてください..."
            class="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
          />
          <button
            @click="confirmGuess(false)"
            :disabled="!actualAnswer.trim()"
            class="w-full mt-3 py-3 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-colors"
          >
            回答を送信
          </button>
        </div>
      </div>

      <!-- Result Phase -->
      <div v-if="gameData.state.phase === 'result'" class="text-center space-y-6">
        <div v-if="gameData.state.isCorrect" class="text-6xl">🎉</div>
        <div v-else class="text-6xl">😅</div>

        <div v-if="gameData.state.score !== undefined" class="text-3xl font-bold text-yellow-400">
          スコア: {{ gameData.state.score }}点
        </div>

        <button
          @click="startNewGame"
          class="py-4 px-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-bold text-lg transition-all"
        >
          もう一度遊ぶ
        </button>
      </div>

      <!-- Q&A History -->
      <div v-if="gameData.state.qaHistory.length > 0" class="mt-8">
        <h3 class="text-white font-bold mb-3">質問履歴</h3>
        <div class="space-y-2 max-h-60 overflow-y-auto">
          <div
            v-for="(qa, index) in gameData.state.qaHistory"
            :key="index"
            class="bg-white/5 rounded-lg p-3 text-sm"
          >
            <span class="text-purple-300">Q{{ index + 1 }}:</span>
            <span class="text-white ml-2">{{ qa.question }}</span>
            <span class="text-yellow-400 ml-2">→ {{ getAnswerLabel(qa.answer) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import type { ToolResult } from "gui-chat-protocol";
import type { AkinatorData, AnswerType, Category } from "../core/types";
import { TOOL_NAME } from "../core/definition";

const props = defineProps<{
  selectedResult: ToolResult;
  sendTextMessage: (text?: string) => void;
}>();

const gameData = ref<AkinatorData | null>(null);
const showRevealInput = ref(false);
const actualAnswer = ref("");

const answerOptions = [
  { value: "yes", label: "はい", class: "bg-green-500/80 hover:bg-green-500 text-white border-green-400" },
  { value: "no", label: "いいえ", class: "bg-red-500/80 hover:bg-red-500 text-white border-red-400" },
  { value: "probably_yes", label: "たぶんはい", class: "bg-green-700/80 hover:bg-green-700 text-white border-green-600" },
  { value: "probably_no", label: "たぶんいいえ", class: "bg-red-700/80 hover:bg-red-700 text-white border-red-600" },
  { value: "unknown", label: "わからない", class: "col-span-2 bg-gray-600/80 hover:bg-gray-600 text-white border-gray-500" },
];

watch(
  () => props.selectedResult,
  (newResult) => {
    if (newResult?.toolName === TOOL_NAME && newResult.data) {
      gameData.value = newResult.data as AkinatorData;
      showRevealInput.value = false;
      actualAnswer.value = "";
    }
  },
  { immediate: true },
);

function getCategoryName(category: Category): string {
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

function sendAnswer(answer: string) {
  props.sendTextMessage(getAnswerLabel(answer as AnswerType));
}

function confirmGuess(wasCorrect: boolean) {
  if (wasCorrect) {
    props.sendTextMessage("正解！当たりです！");
  } else if (actualAnswer.value.trim()) {
    props.sendTextMessage(`違います。正解は「${actualAnswer.value.trim()}」でした。`);
  }
}

function startNewGame() {
  props.sendTextMessage("もう一度遊びたい！");
}
</script>
