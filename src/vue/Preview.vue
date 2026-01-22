<template>
  <div class="p-3 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-md">
    <div v-if="gameData" class="flex flex-col gap-2 text-center">
      <!-- Icon -->
      <div class="text-3xl">🔮</div>

      <!-- Category -->
      <div class="text-sm font-semibold text-purple-800">
        {{ getCategoryName(gameData.state.category) }}
      </div>

      <!-- Status -->
      <div class="text-xs text-gray-600">
        <template v-if="gameData.state.phase === 'questioning'">
          質問 {{ gameData.state.questionCount }}/{{ gameData.state.maxQuestions }}
        </template>
        <template v-else-if="gameData.state.phase === 'guessing'">
          🤔 予想中...
        </template>
        <template v-else-if="gameData.state.phase === 'result'">
          <span v-if="gameData.state.isCorrect" class="text-green-600">🎉 正解!</span>
          <span v-else class="text-red-600">😅 残念</span>
        </template>
      </div>

      <!-- Score if available -->
      <div v-if="gameData.state.score !== undefined" class="text-xs font-bold text-yellow-600">
        {{ gameData.state.score }}点
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ToolResult } from "gui-chat-protocol";
import type { AkinatorData, Category } from "../core/types";

const props = defineProps<{
  result: ToolResult;
}>();

const gameData = computed(() => props.result.data as AkinatorData | null);

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
</script>
