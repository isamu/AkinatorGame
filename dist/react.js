/* empty css               */
import { TOOL_NAME as te, pluginCore as ae } from "./core.js";
import { SAMPLES as je, SYSTEM_PROMPT as _e, TOOL_DEFINITION as we, executeAkinator as Ee } from "./core.js";
import ne, { useState as S, useEffect as se } from "react";
var w = { exports: {} }, g = {};
var F;
function oe() {
  if (F) return g;
  F = 1;
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), u = /* @__PURE__ */ Symbol.for("react.fragment");
  function i(p, d, f) {
    var m = null;
    if (f !== void 0 && (m = "" + f), d.key !== void 0 && (m = "" + d.key), "key" in d) {
      f = {};
      for (var x in d)
        x !== "key" && (f[x] = d[x]);
    } else f = d;
    return d = f.ref, {
      $$typeof: a,
      type: p,
      key: m,
      ref: d !== void 0 ? d : null,
      props: f
    };
  }
  return g.Fragment = u, g.jsx = i, g.jsxs = i, g;
}
var N = {};
var L;
function le() {
  return L || (L = 1, process.env.NODE_ENV !== "production" && (function() {
    function a(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case y:
          return "Fragment";
        case G:
          return "Profiler";
        case V:
          return "StrictMode";
        case X:
          return "Suspense";
        case H:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case U:
            return "Portal";
          case J:
            return e.displayName || "Context";
          case z:
            return (e._context.displayName || "Context") + ".Consumer";
          case Q:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case B:
            return t = e.displayName || null, t !== null ? t : a(e.type) || "Memo";
          case R:
            t = e._payload, e = e._init;
            try {
              return a(e(t));
            } catch {
            }
        }
      return null;
    }
    function u(e) {
      return "" + e;
    }
    function i(e) {
      try {
        u(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var n = t.error, o = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          o
        ), u(e);
      }
    }
    function p(e) {
      if (e === y) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === R)
        return "<...>";
      try {
        var t = a(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function d() {
      var e = T.A;
      return e === null ? null : e.getOwner();
    }
    function f() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (C.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function x(e, t) {
      function n() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    function s() {
      var e = a(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function E(e, t, n, o, _, A) {
      var l = n.ref;
      return e = {
        $$typeof: P,
        type: e,
        key: t,
        props: n,
        _owner: o
      }, (l !== void 0 ? l : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: s
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: _
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function h(e, t, n, o, _, A) {
      var l = t.children;
      if (l !== void 0)
        if (o)
          if (ee(l)) {
            for (o = 0; o < l.length; o++)
              j(l[o]);
            Object.freeze && Object.freeze(l);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else j(l);
      if (C.call(t, "key")) {
        l = a(e);
        var v = Object.keys(t).filter(function(re) {
          return re !== "key";
        });
        o = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", q[l + o] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          l,
          v,
          l
        ), q[l + o] = !0);
      }
      if (l = null, n !== void 0 && (i(n), l = "" + n), m(t) && (i(t.key), l = "" + t.key), "key" in t) {
        n = {};
        for (var O in t)
          O !== "key" && (n[O] = t[O]);
      } else n = t;
      return l && x(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), E(
        e,
        l,
        n,
        d(),
        _,
        A
      );
    }
    function j(e) {
      c(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === R && (e._payload.status === "fulfilled" ? c(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function c(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    var b = ne, P = /* @__PURE__ */ Symbol.for("react.transitional.element"), U = /* @__PURE__ */ Symbol.for("react.portal"), y = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), G = /* @__PURE__ */ Symbol.for("react.profiler"), z = /* @__PURE__ */ Symbol.for("react.consumer"), J = /* @__PURE__ */ Symbol.for("react.context"), Q = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), H = /* @__PURE__ */ Symbol.for("react.suspense_list"), B = /* @__PURE__ */ Symbol.for("react.memo"), R = /* @__PURE__ */ Symbol.for("react.lazy"), Z = /* @__PURE__ */ Symbol.for("react.activity"), K = /* @__PURE__ */ Symbol.for("react.client.reference"), T = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, ee = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var I, Y = {}, $ = b.react_stack_bottom_frame.bind(
      b,
      f
    )(), D = k(p(f)), q = {};
    N.Fragment = y, N.jsx = function(e, t, n) {
      var o = 1e4 > T.recentlyCreatedOwnerStacks++;
      return h(
        e,
        t,
        n,
        !1,
        o ? Error("react-stack-top-frame") : $,
        o ? k(p(e)) : D
      );
    }, N.jsxs = function(e, t, n) {
      var o = 1e4 > T.recentlyCreatedOwnerStacks++;
      return h(
        e,
        t,
        n,
        !0,
        o ? Error("react-stack-top-frame") : $,
        o ? k(p(e)) : D
      );
    };
  })()), N;
}
var M;
function ie() {
  return M || (M = 1, process.env.NODE_ENV === "production" ? w.exports = oe() : w.exports = le()), w.exports;
}
var r = ie();
const ce = [
  { value: "yes", label: "はい", className: "bg-green-500/80 hover:bg-green-500 text-white border-green-400" },
  { value: "no", label: "いいえ", className: "bg-red-500/80 hover:bg-red-500 text-white border-red-400" },
  { value: "probably_yes", label: "たぶんはい", className: "bg-green-700/80 hover:bg-green-700 text-white border-green-600" },
  { value: "probably_no", label: "たぶんいいえ", className: "bg-red-700/80 hover:bg-red-700 text-white border-red-600" },
  { value: "unknown", label: "わからない", className: "col-span-2 bg-gray-600/80 hover:bg-gray-600 text-white border-gray-500" }
];
function ue(a) {
  return a ? {
    character: "キャラクター",
    person: "有名人",
    animal: "動物",
    object: "もの",
    place: "場所"
  }[a] || a : "";
}
function W(a) {
  return {
    yes: "はい",
    no: "いいえ",
    probably_yes: "たぶんはい",
    probably_no: "たぶんいいえ",
    unknown: "わからない"
  }[a] || a;
}
function de({ selectedResult: a, sendTextMessage: u }) {
  const [i, p] = S(null), [d, f] = S(!1), [m, x] = S("");
  if (se(() => {
    a?.toolName === te && a.data && (p(a.data), f(!1), x(""));
  }, [a]), !i) return null;
  const { state: s } = i, E = (c) => {
    u(W(c));
  }, h = (c) => {
    c ? u("正解！当たりです！") : m.trim() && u(`違います。正解は「${m.trim()}」でした。`);
  }, j = () => {
    u("もう一度遊びたい！");
  };
  return /* @__PURE__ */ r.jsx("div", { className: "size-full overflow-y-auto p-8 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900", children: /* @__PURE__ */ r.jsxs("div", { className: "max-w-2xl w-full mx-auto", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ r.jsx("div", { className: "text-6xl mb-4", children: "🔮" }),
      /* @__PURE__ */ r.jsx("h2", { className: "text-white text-3xl font-bold", children: "アキネイター" }),
      s.category && /* @__PURE__ */ r.jsxs("p", { className: "text-purple-300 mt-2", children: [
        "カテゴリ: ",
        ue(s.category)
      ] })
    ] }),
    s.phase === "questioning" && /* @__PURE__ */ r.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between text-sm text-gray-400 mb-2", children: [
        /* @__PURE__ */ r.jsx("span", { children: "質問数" }),
        /* @__PURE__ */ r.jsxs("span", { children: [
          s.questionCount,
          " / ",
          s.maxQuestions
        ] })
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "h-2 bg-gray-700 rounded-full overflow-hidden", children: /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300",
          style: { width: `${s.questionCount / s.maxQuestions * 100}%` }
        }
      ) })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "bg-white/10 backdrop-blur rounded-xl p-6 mb-6 border border-white/20", children: /* @__PURE__ */ r.jsx("p", { className: "text-white text-xl text-center whitespace-pre-line", children: s.message }) }),
    s.phase === "questioning" && /* @__PURE__ */ r.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ r.jsx("p", { className: "text-center text-gray-400 text-sm mb-4", children: "AIの質問に答えてください" }),
      /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-2 gap-3", children: ce.map((c) => /* @__PURE__ */ r.jsx(
        "button",
        {
          onClick: () => E(c.value),
          className: `py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 border-2 ${c.className}`,
          children: c.label
        },
        c.value
      )) })
    ] }),
    s.phase === "guessing" && s.guess && /* @__PURE__ */ r.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: () => h(!0),
            className: "py-4 px-6 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-lg transition-colors",
            children: "🎉 正解！"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: () => f(!0),
            className: "py-4 px-6 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold text-lg transition-colors",
            children: "😅 違う"
          }
        )
      ] }),
      d && /* @__PURE__ */ r.jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ r.jsx(
          "input",
          {
            value: m,
            onChange: (c) => x(c.target.value),
            onKeyDown: (c) => c.key === "Enter" && h(!1),
            type: "text",
            placeholder: "正解を教えてください...",
            className: "w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: () => h(!1),
            disabled: !m.trim(),
            className: "w-full mt-3 py-3 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-colors",
            children: "回答を送信"
          }
        )
      ] })
    ] }),
    s.phase === "result" && /* @__PURE__ */ r.jsxs("div", { className: "text-center space-y-6", children: [
      /* @__PURE__ */ r.jsx("div", { className: "text-6xl", children: s.isCorrect ? "🎉" : "😅" }),
      s.score !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "text-3xl font-bold text-yellow-400", children: [
        "スコア: ",
        s.score,
        "点"
      ] }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          onClick: j,
          className: "py-4 px-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-bold text-lg transition-all",
          children: "もう一度遊ぶ"
        }
      )
    ] }),
    s.qaHistory.length > 0 && /* @__PURE__ */ r.jsxs("div", { className: "mt-8", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "text-white font-bold mb-3", children: "質問履歴" }),
      /* @__PURE__ */ r.jsx("div", { className: "space-y-2 max-h-60 overflow-y-auto", children: s.qaHistory.map((c, b) => /* @__PURE__ */ r.jsxs("div", { className: "bg-white/5 rounded-lg p-3 text-sm", children: [
        /* @__PURE__ */ r.jsxs("span", { className: "text-purple-300", children: [
          "Q",
          b + 1,
          ":"
        ] }),
        /* @__PURE__ */ r.jsx("span", { className: "text-white ml-2", children: c.question }),
        /* @__PURE__ */ r.jsxs("span", { className: "text-yellow-400 ml-2", children: [
          "→ ",
          W(c.answer)
        ] })
      ] }, b)) })
    ] })
  ] }) });
}
function fe(a) {
  return a ? {
    character: "キャラクター",
    person: "有名人",
    animal: "動物",
    object: "もの",
    place: "場所"
  }[a] || a : "アキネイター";
}
function me({ result: a }) {
  const u = a.data;
  if (!u)
    return null;
  const { state: i } = u;
  return /* @__PURE__ */ r.jsx("div", { className: "p-3 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-md", children: /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col gap-2 text-center", children: [
    /* @__PURE__ */ r.jsx("div", { className: "text-3xl", children: "🔮" }),
    /* @__PURE__ */ r.jsx("div", { className: "text-sm font-semibold text-purple-800", children: fe(i.category) }),
    /* @__PURE__ */ r.jsxs("div", { className: "text-xs text-gray-600", children: [
      i.phase === "questioning" && /* @__PURE__ */ r.jsxs("span", { children: [
        "質問 ",
        i.questionCount,
        "/",
        i.maxQuestions
      ] }),
      i.phase === "guessing" && /* @__PURE__ */ r.jsx("span", { children: "🤔 予想中..." }),
      i.phase === "result" && (i.isCorrect ? /* @__PURE__ */ r.jsx("span", { className: "text-green-600", children: "🎉 正解!" }) : /* @__PURE__ */ r.jsx("span", { className: "text-red-600", children: "😅 残念" }))
    ] }),
    i.score !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "text-xs font-bold text-yellow-600", children: [
      i.score,
      "点"
    ] })
  ] }) });
}
const xe = {
  ...ae,
  ViewComponent: de,
  PreviewComponent: me
}, ve = { plugin: xe };
export {
  me as Preview,
  je as SAMPLES,
  _e as SYSTEM_PROMPT,
  we as TOOL_DEFINITION,
  te as TOOL_NAME,
  de as View,
  ve as default,
  Ee as executeAkinator,
  xe as plugin,
  ae as pluginCore
};
