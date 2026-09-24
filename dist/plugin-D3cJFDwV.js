//#region src/core/definition.ts
var e = "akinator_game", t = {
	type: "function",
	name: e,
	description: "Play an Akinator-style guessing game. You ask yes/no questions to guess what the user is thinking of (a character, person, animal, object, or place). Try to guess in as few questions as possible!",
	parameters: {
		type: "object",
		properties: {
			action: {
				type: "string",
				enum: [
					"start",
					"answer",
					"guess",
					"reveal"
				],
				description: "Game action: 'start' to begin a new game, 'answer' to record user's answer to your question, 'guess' to make a guess, 'reveal' when user reveals the answer"
			},
			category: {
				type: "string",
				enum: [
					"character",
					"person",
					"animal",
					"object",
					"place"
				],
				description: "Category of thing to guess (required for 'start')"
			},
			answer: {
				type: "string",
				enum: [
					"yes",
					"no",
					"probably_yes",
					"probably_no",
					"unknown"
				],
				description: "User's answer to your question (for 'answer' action)"
			},
			guess: {
				type: "string",
				description: "Your guess of what the user is thinking (for 'guess' action)"
			},
			wasCorrect: {
				type: "boolean",
				description: "Whether your guess was correct (for 'reveal' action)"
			},
			actualAnswer: {
				type: "string",
				description: "The actual answer if your guess was wrong (for 'reveal' action)"
			}
		},
		required: ["action"]
	}
}, n = "You are playing an Akinator-style guessing game. Your goal is to guess what the user is thinking of by asking strategic yes/no questions.\n\nGame Rules:\n1. The user thinks of something in a category (character, person, animal, object, or place)\n2. You ask yes/no questions to narrow down possibilities\n3. The user answers: はい (yes), いいえ (no), たぶんはい (probably yes), たぶんいいえ (probably no), or わからない (unknown)\n4. Try to guess correctly in as few questions as possible (20 questions max)\n5. When confident, make a guess using the 'guess' action\n\nStrategy Tips:\n- Start with broad questions to narrow categories (Is it real? Is it alive? Is it from Japan?)\n- Use binary search style questioning to eliminate half the possibilities\n- Pay attention to all previous answers\n- Make educated guesses based on accumulated information\n\nWhen asking questions, call the tool with action='answer' and include your question in the message.\nWhen ready to guess, call the tool with action='guess' and your guess.\n\nRemember: The fewer questions you ask, the higher the score!", r = [
	{
		name: "キャラクター",
		args: {
			action: "start",
			category: "character"
		}
	},
	{
		name: "有名人",
		args: {
			action: "start",
			category: "person"
		}
	},
	{
		name: "動物",
		args: {
			action: "start",
			category: "animal"
		}
	},
	{
		name: "もの",
		args: {
			action: "start",
			category: "object"
		}
	},
	{
		name: "場所",
		args: {
			action: "start",
			category: "place"
		}
	}
], i = (e) => {
	switch (e) {
		case "character": return "キャラクター";
		case "person": return "有名人";
		case "animal": return "動物";
		case "object": return "もの";
		case "place": return "場所";
	}
}, a = (e) => ({
	phase: "questioning",
	category: e,
	questionCount: 0,
	maxQuestions: 20,
	qaHistory: [],
	message: `🔮 ${i(e)}を当てます！何か1つ思い浮かべてください。準備ができたら教えてね！`
}), o = (e, t) => t ? e <= 5 ? 100 : e <= 10 ? 80 : e <= 15 ? 60 : e <= 20 ? 40 : 20 : 0, s = async (e, n) => {
	let { action: r, category: s, answer: c, guess: l, wasCorrect: u, actualAnswer: d } = n, f = (e?.currentResult)?.data?.state;
	try {
		let e, n, p;
		switch (r) {
			case "start":
				if (!s) throw Error("Category is required to start the game");
				e = a(s), n = `Game started! Category: ${i(s)}. Ask your first yes/no question to start narrowing down. Use broad questions first (e.g., "Is it a real person?" or "Is it from Japan?").

When the user responds, call the tool with action='answer' and map their response:
- "はい" → answer="yes"
- "いいえ" → answer="no"
- "たぶんはい" → answer="probably_yes"
- "たぶんいいえ" → answer="probably_no"
- "わからない" → answer="unknown"`, p = ["Ask a yes/no question, then call with action='answer' when user responds"];
				break;
			case "answer": {
				if (!f) throw Error("No active game. Start a new game first.");
				if (!c) throw Error("Answer is required");
				e = {
					...f,
					questionCount: f.questionCount + 1,
					qaHistory: f.currentQuestion ? [...f.qaHistory, {
						question: f.currentQuestion,
						answer: c
					}] : f.qaHistory,
					currentQuestion: void 0
				};
				let t = {
					yes: "はい",
					no: "いいえ",
					probably_yes: "たぶんはい",
					probably_no: "たぶんいいえ",
					unknown: "わからない"
				}[c];
				e.message = `📝 回答: ${t} (質問 ${e.questionCount}/${e.maxQuestions})`, e.questionCount >= e.maxQuestions ? (e.phase = "guessing", n = `You've reached the maximum ${e.maxQuestions} questions! Based on all the answers, make your best guess now using action='guess'.`, p = ["guess"]) : (n = `Answer recorded: ${c}. Question history:\n${e.qaHistory.map((e, t) => `Q${t + 1}: ${e.question} → ${e.answer}`).join("\n")}\n\nAnalyze all answers and either:\n1. Ask another strategic question (then call action='answer' when user responds with はい/いいえ/たぶんはい/たぶんいいえ/わからない → yes/no/probably_yes/probably_no/unknown)\n2. If confident, make a guess with action='guess'`, p = ["Ask another question", "guess"]);
				break;
			}
			case "guess":
				if (!f) throw Error("No active game. Start a new game first.");
				if (!l) throw Error("Guess is required");
				e = {
					...f,
					phase: "guessing",
					guess: l,
					message: `🎯 私の予想は... 「${l}」です！\n\n当たっていますか？`
				}, n = `You guessed "${l}". Wait for the user to confirm if it's correct. When they respond, call action='reveal' with wasCorrect=true/false. If wrong, include actualAnswer with what they were thinking of.`, p = ["reveal (with wasCorrect and optionally actualAnswer)"];
				break;
			case "reveal": {
				if (!f) throw Error("No active game. Start a new game first.");
				if (u === void 0) throw Error("wasCorrect is required");
				let t = o(f.questionCount, u);
				e = {
					...f,
					phase: "result",
					isCorrect: u,
					score: t,
					message: u ? `🎉 正解！ ${f.questionCount}問で当てました！\n⭐ スコア: ${t}点` : `😅 残念！正解は「${d || "???"}」でした。\n次は頑張ります！`
				}, n = u ? `Congratulations! You guessed correctly in ${f.questionCount} questions! Score: ${t}. Celebrate with the user and offer to play again.` : `Your guess was wrong. The answer was "${d}". Acknowledge this gracefully and offer to play again.`, p = ["start (to play again)"];
				break;
			}
			default: throw Error(`Unknown action: ${r}`);
		}
		return {
			toolName: t.name,
			data: {
				state: e,
				message: e.message
			},
			jsonData: {
				state: e,
				availableActions: p,
				instructions: n
			},
			message: e.message,
			instructions: n,
			updating: r !== "start",
			instructionsRequired: !0
		};
	} catch (e) {
		return console.error("Akinator game error", e), {
			toolName: t.name,
			message: `エラー: ${e instanceof Error ? e.message : "Unknown error"}`,
			instructions: "An error occurred. Ask the user if they want to start a new game."
		};
	}
}, c = {
	toolDefinition: t,
	execute: s,
	generatingMessage: "🔮 考え中...",
	isEnabled: () => !0,
	samples: r,
	systemPrompt: n
};
//#endregion
export { t as a, n as i, c as n, e as o, r, s as t };
