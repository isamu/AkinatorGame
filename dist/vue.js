/* empty css               */
import { TOOL_NAME as $, pluginCore as T } from "./core.js";
import { SAMPLES as fe, SYSTEM_PROMPT as we, TOOL_DEFINITION as ke, executeAkinator as Ce } from "./core.js";
import { defineComponent as f, ref as m, watch as M, createElementBlock as s, openBlock as o, createCommentVNode as i, createElementVNode as t, toDisplayString as r, normalizeStyle as N, Fragment as v, renderList as y, normalizeClass as q, withDirectives as A, withKeys as O, vModelText as E, computed as S, createTextVNode as _ } from "vue";
const V = { class: "size-full overflow-y-auto p-8 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900" }, D = {
  key: 0,
  class: "max-w-2xl w-full mx-auto"
}, I = { class: "text-center mb-8" }, L = {
  key: 0,
  class: "text-purple-300 mt-2"
}, P = {
  key: 0,
  class: "mb-6"
}, Q = { class: "flex justify-between text-sm text-gray-400 mb-2" }, j = { class: "h-2 bg-gray-700 rounded-full overflow-hidden" }, z = { class: "bg-white/10 backdrop-blur rounded-xl p-6 mb-6 border border-white/20" }, F = { class: "text-white text-xl text-center whitespace-pre-line" }, B = {
  key: 1,
  class: "space-y-4"
}, G = { class: "grid grid-cols-2 gap-3" }, H = ["onClick"], K = {
  key: 2,
  class: "space-y-4"
}, R = { class: "grid grid-cols-2 gap-4" }, U = {
  key: 0,
  class: "mt-4"
}, Y = ["disabled"], J = {
  key: 3,
  class: "text-center space-y-6"
}, W = {
  key: 0,
  class: "text-6xl"
}, X = {
  key: 1,
  class: "text-6xl"
}, Z = {
  key: 2,
  class: "text-3xl font-bold text-yellow-400"
}, ee = {
  key: 4,
  class: "mt-8"
}, te = { class: "space-y-2 max-h-60 overflow-y-auto" }, se = { class: "text-purple-300" }, oe = { class: "text-white ml-2" }, le = { class: "text-yellow-400 ml-2" }, ae = /* @__PURE__ */ f({
  __name: "View",
  props: {
    selectedResult: {},
    sendTextMessage: { type: Function }
  },
  setup(x) {
    const d = x, e = m(null), c = m(!1), u = m(""), p = [
      { value: "yes", label: "はい", class: "bg-green-500/80 hover:bg-green-500 text-white border-green-400" },
      { value: "no", label: "いいえ", class: "bg-red-500/80 hover:bg-red-500 text-white border-red-400" },
      { value: "probably_yes", label: "たぶんはい", class: "bg-green-700/80 hover:bg-green-700 text-white border-green-600" },
      { value: "probably_no", label: "たぶんいいえ", class: "bg-red-700/80 hover:bg-red-700 text-white border-red-600" },
      { value: "unknown", label: "わからない", class: "col-span-2 bg-gray-600/80 hover:bg-gray-600 text-white border-gray-500" }
    ];
    M(
      () => d.selectedResult,
      (a) => {
        a?.toolName === $ && a.data && (e.value = a.data, c.value = !1, u.value = "");
      },
      { immediate: !0 }
    );
    function w(a) {
      return {
        character: "キャラクター",
        person: "有名人",
        animal: "動物",
        object: "もの",
        place: "場所"
      }[a] || a;
    }
    function h(a) {
      return {
        yes: "はい",
        no: "いいえ",
        probably_yes: "たぶんはい",
        probably_no: "たぶんいいえ",
        unknown: "わからない"
      }[a] || a;
    }
    function k(a) {
      d.sendTextMessage(h(a));
    }
    function b(a) {
      a ? d.sendTextMessage("正解！当たりです！") : u.value.trim() && d.sendTextMessage(`違います。正解は「${u.value.trim()}」でした。`);
    }
    function C() {
      d.sendTextMessage("もう一度遊びたい！");
    }
    return (a, l) => (o(), s("div", V, [
      e.value ? (o(), s("div", D, [
        t("div", I, [
          l[5] || (l[5] = t("div", { class: "text-6xl mb-4" }, "🔮", -1)),
          l[6] || (l[6] = t("h2", { class: "text-white text-3xl font-bold" }, "アキネイター", -1)),
          e.value.state.category ? (o(), s("p", L, " カテゴリ: " + r(w(e.value.state.category)), 1)) : i("", !0)
        ]),
        e.value.state.phase === "questioning" ? (o(), s("div", P, [
          t("div", Q, [
            l[7] || (l[7] = t("span", null, "質問数", -1)),
            t("span", null, r(e.value.state.questionCount) + " / " + r(e.value.state.maxQuestions), 1)
          ]),
          t("div", j, [
            t("div", {
              class: "h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300",
              style: N({ width: `${e.value.state.questionCount / e.value.state.maxQuestions * 100}%` })
            }, null, 4)
          ])
        ])) : i("", !0),
        t("div", z, [
          t("p", F, r(e.value.state.message), 1)
        ]),
        e.value.state.phase === "questioning" ? (o(), s("div", B, [
          l[8] || (l[8] = t("p", { class: "text-center text-gray-400 text-sm mb-4" }, "AIの質問に答えてください", -1)),
          t("div", G, [
            (o(), s(v, null, y(p, (n) => t("button", {
              key: n.value,
              onClick: (g) => k(n.value),
              class: q(["py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 border-2", n.class])
            }, r(n.label), 11, H)), 64))
          ])
        ])) : i("", !0),
        e.value.state.phase === "guessing" && e.value.state.guess ? (o(), s("div", K, [
          t("div", R, [
            t("button", {
              onClick: l[0] || (l[0] = (n) => b(!0)),
              class: "py-4 px-6 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-lg transition-colors"
            }, " 🎉 正解！ "),
            t("button", {
              onClick: l[1] || (l[1] = (n) => c.value = !0),
              class: "py-4 px-6 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold text-lg transition-colors"
            }, " 😅 違う ")
          ]),
          c.value ? (o(), s("div", U, [
            A(t("input", {
              "onUpdate:modelValue": l[2] || (l[2] = (n) => u.value = n),
              onKeydown: l[3] || (l[3] = O((n) => b(!1), ["enter"])),
              type: "text",
              placeholder: "正解を教えてください...",
              class: "w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
            }, null, 544), [
              [E, u.value]
            ]),
            t("button", {
              onClick: l[4] || (l[4] = (n) => b(!1)),
              disabled: !u.value.trim(),
              class: "w-full mt-3 py-3 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-colors"
            }, " 回答を送信 ", 8, Y)
          ])) : i("", !0)
        ])) : i("", !0),
        e.value.state.phase === "result" ? (o(), s("div", J, [
          e.value.state.isCorrect ? (o(), s("div", W, "🎉")) : (o(), s("div", X, "😅")),
          e.value.state.score !== void 0 ? (o(), s("div", Z, " スコア: " + r(e.value.state.score) + "点 ", 1)) : i("", !0),
          t("button", {
            onClick: C,
            class: "py-4 px-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-bold text-lg transition-all"
          }, " もう一度遊ぶ ")
        ])) : i("", !0),
        e.value.state.qaHistory.length > 0 ? (o(), s("div", ee, [
          l[9] || (l[9] = t("h3", { class: "text-white font-bold mb-3" }, "質問履歴", -1)),
          t("div", te, [
            (o(!0), s(v, null, y(e.value.state.qaHistory, (n, g) => (o(), s("div", {
              key: g,
              class: "bg-white/5 rounded-lg p-3 text-sm"
            }, [
              t("span", se, "Q" + r(g + 1) + ":", 1),
              t("span", oe, r(n.question), 1),
              t("span", le, "→ " + r(h(n.answer)), 1)
            ]))), 128))
          ])
        ])) : i("", !0)
      ])) : i("", !0)
    ]));
  }
}), ne = { class: "p-3 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-md" }, re = {
  key: 0,
  class: "flex flex-col gap-2 text-center"
}, ie = { class: "text-sm font-semibold text-purple-800" }, ue = { class: "text-xs text-gray-600" }, de = {
  key: 0,
  class: "text-green-600"
}, ce = {
  key: 1,
  class: "text-red-600"
}, pe = {
  key: 0,
  class: "text-xs font-bold text-yellow-600"
}, ve = /* @__PURE__ */ f({
  __name: "Preview",
  props: {
    result: {}
  },
  setup(x) {
    const d = x, e = S(() => d.result.data);
    function c(u) {
      return u ? {
        character: "キャラクター",
        person: "有名人",
        animal: "動物",
        object: "もの",
        place: "場所"
      }[u] || u : "アキネイター";
    }
    return (u, p) => (o(), s("div", ne, [
      e.value ? (o(), s("div", re, [
        p[0] || (p[0] = t("div", { class: "text-3xl" }, "🔮", -1)),
        t("div", ie, r(c(e.value.state.category)), 1),
        t("div", ue, [
          e.value.state.phase === "questioning" ? (o(), s(v, { key: 0 }, [
            _(" 質問 " + r(e.value.state.questionCount) + "/" + r(e.value.state.maxQuestions), 1)
          ], 64)) : e.value.state.phase === "guessing" ? (o(), s(v, { key: 1 }, [
            _(" 🤔 予想中... ")
          ], 64)) : e.value.state.phase === "result" ? (o(), s(v, { key: 2 }, [
            e.value.state.isCorrect ? (o(), s("span", de, "🎉 正解!")) : (o(), s("span", ce, "😅 残念"))
          ], 64)) : i("", !0)
        ]),
        e.value.state.score !== void 0 ? (o(), s("div", pe, r(e.value.state.score) + "点 ", 1)) : i("", !0)
      ])) : i("", !0)
    ]));
  }
}), xe = {
  ...T,
  viewComponent: ae,
  previewComponent: ve
}, he = { plugin: xe };
export {
  ve as Preview,
  fe as SAMPLES,
  we as SYSTEM_PROMPT,
  ke as TOOL_DEFINITION,
  $ as TOOL_NAME,
  ae as View,
  he as default,
  Ce as executeAkinator,
  xe as plugin,
  T as pluginCore
};
