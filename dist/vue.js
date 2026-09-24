import { a as e, i as t, n, o as r, r as i, t as a } from "./plugin-D3cJFDwV.js";
/* empty css               */
import { Fragment as o, computed as s, createCommentVNode as c, createElementBlock as l, createElementVNode as u, createTextVNode as d, defineComponent as f, normalizeClass as p, normalizeStyle as m, openBlock as h, ref as g, renderList as _, toDisplayString as v, vModelText as y, watch as ee, withDirectives as te, withKeys as b } from "vue";
//#region src/vue/View.vue?vue&type=script&setup=true&lang.ts
var x = { class: "size-full overflow-y-auto p-8 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900" }, S = {
	key: 0,
	class: "max-w-2xl w-full mx-auto"
}, C = { class: "text-center mb-8" }, w = {
	key: 0,
	class: "text-purple-300 mt-2"
}, T = {
	key: 0,
	class: "mb-6"
}, E = { class: "flex justify-between text-sm text-gray-400 mb-2" }, D = { class: "h-2 bg-gray-700 rounded-full overflow-hidden" }, O = { class: "bg-white/10 backdrop-blur rounded-xl p-6 mb-6 border border-white/20" }, k = { class: "text-white text-xl text-center whitespace-pre-line" }, A = {
	key: 1,
	class: "space-y-4"
}, j = { class: "grid grid-cols-2 gap-3" }, M = ["onClick"], N = {
	key: 2,
	class: "space-y-4"
}, P = { class: "grid grid-cols-2 gap-4" }, F = {
	key: 0,
	class: "mt-4"
}, ne = ["disabled"], I = {
	key: 3,
	class: "text-center space-y-6"
}, L = {
	key: 0,
	class: "text-6xl"
}, R = {
	key: 1,
	class: "text-6xl"
}, z = {
	key: 2,
	class: "text-3xl font-bold text-yellow-400"
}, B = {
	key: 4,
	class: "mt-8"
}, V = { class: "space-y-2 max-h-60 overflow-y-auto" }, H = { class: "text-purple-300" }, U = { class: "text-white ml-2" }, W = { class: "text-yellow-400 ml-2" }, G = /* @__PURE__ */ f({
	__name: "View",
	props: {
		selectedResult: {},
		sendTextMessage: { type: Function }
	},
	setup(e) {
		let t = e, n = g(null), r = g(!1), i = g(""), a = [
			{
				value: "yes",
				label: "はい",
				class: "bg-green-500/80 hover:bg-green-500 text-white border-green-400"
			},
			{
				value: "no",
				label: "いいえ",
				class: "bg-red-500/80 hover:bg-red-500 text-white border-red-400"
			},
			{
				value: "probably_yes",
				label: "たぶんはい",
				class: "bg-green-700/80 hover:bg-green-700 text-white border-green-600"
			},
			{
				value: "probably_no",
				label: "たぶんいいえ",
				class: "bg-red-700/80 hover:bg-red-700 text-white border-red-600"
			},
			{
				value: "unknown",
				label: "わからない",
				class: "col-span-2 bg-gray-600/80 hover:bg-gray-600 text-white border-gray-500"
			}
		];
		ee(() => t.selectedResult, (e) => {
			e?.toolName === "akinator_game" && e.data && (n.value = e.data, r.value = !1, i.value = "");
		}, { immediate: !0 });
		function s(e) {
			return {
				character: "キャラクター",
				person: "有名人",
				animal: "動物",
				object: "もの",
				place: "場所"
			}[e] || e;
		}
		function d(e) {
			return {
				yes: "はい",
				no: "いいえ",
				probably_yes: "たぶんはい",
				probably_no: "たぶんいいえ",
				unknown: "わからない"
			}[e] || e;
		}
		function f(e) {
			t.sendTextMessage(d(e));
		}
		function G(e) {
			e ? t.sendTextMessage("正解！当たりです！") : i.value.trim() && t.sendTextMessage(`違います。正解は「${i.value.trim()}」でした。`);
		}
		function K() {
			t.sendTextMessage("もう一度遊びたい！");
		}
		return (e, t) => (h(), l("div", x, [n.value ? (h(), l("div", S, [
			u("div", C, [
				t[5] ||= u("div", { class: "text-6xl mb-4" }, "🔮", -1),
				t[6] ||= u("h2", { class: "text-white text-3xl font-bold" }, "アキネイター", -1),
				n.value.state.category ? (h(), l("p", w, " カテゴリ: " + v(s(n.value.state.category)), 1)) : c("", !0)
			]),
			n.value.state.phase === "questioning" ? (h(), l("div", T, [u("div", E, [t[7] ||= u("span", null, "質問数", -1), u("span", null, v(n.value.state.questionCount) + " / " + v(n.value.state.maxQuestions), 1)]), u("div", D, [u("div", {
				class: "h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300",
				style: m({ width: `${n.value.state.questionCount / n.value.state.maxQuestions * 100}%` })
			}, null, 4)])])) : c("", !0),
			u("div", O, [u("p", k, v(n.value.state.message), 1)]),
			n.value.state.phase === "questioning" ? (h(), l("div", A, [t[8] ||= u("p", { class: "text-center text-gray-400 text-sm mb-4" }, "AIの質問に答えてください", -1), u("div", j, [(h(), l(o, null, _(a, (e) => u("button", {
				key: e.value,
				onClick: (t) => f(e.value),
				class: p(["py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 border-2", e.class])
			}, v(e.label), 11, M)), 64))])])) : c("", !0),
			n.value.state.phase === "guessing" && n.value.state.guess ? (h(), l("div", N, [u("div", P, [u("button", {
				onClick: t[0] ||= (e) => G(!0),
				class: "py-4 px-6 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-lg transition-colors"
			}, " 🎉 正解！ "), u("button", {
				onClick: t[1] ||= (e) => r.value = !0,
				class: "py-4 px-6 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold text-lg transition-colors"
			}, " 😅 違う ")]), r.value ? (h(), l("div", F, [te(u("input", {
				"onUpdate:modelValue": t[2] ||= (e) => i.value = e,
				onKeydown: t[3] ||= b((e) => G(!1), ["enter"]),
				type: "text",
				placeholder: "正解を教えてください...",
				class: "w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
			}, null, 544), [[y, i.value]]), u("button", {
				onClick: t[4] ||= (e) => G(!1),
				disabled: !i.value.trim(),
				class: "w-full mt-3 py-3 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-colors"
			}, " 回答を送信 ", 8, ne)])) : c("", !0)])) : c("", !0),
			n.value.state.phase === "result" ? (h(), l("div", I, [
				n.value.state.isCorrect ? (h(), l("div", L, "🎉")) : (h(), l("div", R, "😅")),
				n.value.state.score === void 0 ? c("", !0) : (h(), l("div", z, " スコア: " + v(n.value.state.score) + "点 ", 1)),
				u("button", {
					onClick: K,
					class: "py-4 px-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-bold text-lg transition-all"
				}, " もう一度遊ぶ ")
			])) : c("", !0),
			n.value.state.qaHistory.length > 0 ? (h(), l("div", B, [t[9] ||= u("h3", { class: "text-white font-bold mb-3" }, "質問履歴", -1), u("div", V, [(h(!0), l(o, null, _(n.value.state.qaHistory, (e, t) => (h(), l("div", {
				key: t,
				class: "bg-white/5 rounded-lg p-3 text-sm"
			}, [
				u("span", H, "Q" + v(t + 1) + ":", 1),
				u("span", U, v(e.question), 1),
				u("span", W, "→ " + v(d(e.answer)), 1)
			]))), 128))])])) : c("", !0)
		])) : c("", !0)]));
	}
}), K = { class: "p-3 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-md" }, q = {
	key: 0,
	class: "flex flex-col gap-2 text-center"
}, J = { class: "text-sm font-semibold text-purple-800" }, Y = { class: "text-xs text-gray-600" }, X = {
	key: 0,
	class: "text-green-600"
}, Z = {
	key: 1,
	class: "text-red-600"
}, re = {
	key: 0,
	class: "text-xs font-bold text-yellow-600"
}, Q = /* @__PURE__ */ f({
	__name: "Preview",
	props: { result: {} },
	setup(e) {
		let t = e, n = s(() => t.result.data);
		function r(e) {
			return e ? {
				character: "キャラクター",
				person: "有名人",
				animal: "動物",
				object: "もの",
				place: "場所"
			}[e] || e : "アキネイター";
		}
		return (e, t) => (h(), l("div", K, [n.value ? (h(), l("div", q, [
			t[0] ||= u("div", { class: "text-3xl" }, "🔮", -1),
			u("div", J, v(r(n.value.state.category)), 1),
			u("div", Y, [n.value.state.phase === "questioning" ? (h(), l(o, { key: 0 }, [d(" 質問 " + v(n.value.state.questionCount) + "/" + v(n.value.state.maxQuestions), 1)], 64)) : n.value.state.phase === "guessing" ? (h(), l(o, { key: 1 }, [d(" 🤔 予想中... ")], 64)) : n.value.state.phase === "result" ? (h(), l(o, { key: 2 }, [n.value.state.isCorrect ? (h(), l("span", X, "🎉 正解!")) : (h(), l("span", Z, "😅 残念"))], 64)) : c("", !0)]),
			n.value.state.score === void 0 ? c("", !0) : (h(), l("div", re, v(n.value.state.score) + "点 ", 1))
		])) : c("", !0)]));
	}
}), $ = {
	...n,
	viewComponent: G,
	previewComponent: Q
}, ie = { plugin: $ };
//#endregion
export { Q as Preview, i as SAMPLES, t as SYSTEM_PROMPT, e as TOOL_DEFINITION, r as TOOL_NAME, G as View, ie as default, a as executeAkinator, $ as plugin, n as pluginCore };
