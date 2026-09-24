import { a as e, i as t, n, o as r, r as i, t as a } from "./plugin-D3cJFDwV.js";
/* empty css               */
import { useEffect as o, useState as s } from "react";
//#region \0rolldown/runtime.js
var c = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), l = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), u = /* @__PURE__ */ c(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), d = /* @__PURE__ */ c(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === k ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case v: return "Fragment";
				case b: return "Profiler";
				case y: return "StrictMode";
				case w: return "Suspense";
				case T: return "SuspenseList";
				case O: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case _: return "Portal";
				case S: return e.displayName || "Context";
				case x: return (e._context.displayName || "Context") + ".Consumer";
				case C:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case E: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case D:
					n = e._payload, e = e._init;
					try {
						return t(e(n));
					} catch {}
			}
			return null;
		}
		function n(e) {
			return "" + e;
		}
		function r(e) {
			try {
				n(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var r = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return r.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), n(e);
			}
		}
		function i(e) {
			if (e === v) return "<>";
			if (typeof e == "object" && e && e.$$typeof === D) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function a() {
			var e = A.A;
			return e === null ? null : e.getOwner();
		}
		function o() {
			return Error("react-stack-top-frame");
		}
		function s(e) {
			if (j.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function c(e, t) {
			function n() {
				P || (P = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function u() {
			var e = t(this.type);
			return F[e] || (F[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function d(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: g,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: u
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
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
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function f(e, n, i, o, l, u) {
			var f = n.children;
			if (f !== void 0) if (o) if (M(f)) {
				for (o = 0; o < f.length; o++) p(f[o]);
				Object.freeze && Object.freeze(f);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else p(f);
			if (j.call(n, "key")) {
				f = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				o = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", R[f + o] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", o, f, m, f), R[f + o] = !0);
			}
			if (f = null, i !== void 0 && (r(i), f = "" + i), s(n) && (r(n.key), f = "" + n.key), "key" in n) for (var h in i = {}, n) h !== "key" && (i[h] = n[h]);
			else i = n;
			return f && c(i, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), d(e, f, i, a(), l, u);
		}
		function p(e) {
			m(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === D && (e._payload.status === "fulfilled" ? m(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function m(e) {
			return typeof e == "object" && !!e && e.$$typeof === g;
		}
		var h = l("react"), g = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), S = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), A = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, M = Array.isArray, N = console.createTask ? console.createTask : function() {
			return null;
		};
		h = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var P, F = {}, I = h.react_stack_bottom_frame.bind(h, o)(), L = N(i(o)), R = {};
		e.Fragment = v, e.jsx = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !1, r ? Error("react-stack-top-frame") : I, r ? N(i(e)) : L);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !0, r ? Error("react-stack-top-frame") : I, r ? N(i(e)) : L);
		};
	})();
})), f = (/* @__PURE__ */ c(((e, t) => {
	t.exports = process.env.NODE_ENV === "production" ? u() : d();
})))(), p = [
	{
		value: "yes",
		label: "はい",
		className: "bg-green-500/80 hover:bg-green-500 text-white border-green-400"
	},
	{
		value: "no",
		label: "いいえ",
		className: "bg-red-500/80 hover:bg-red-500 text-white border-red-400"
	},
	{
		value: "probably_yes",
		label: "たぶんはい",
		className: "bg-green-700/80 hover:bg-green-700 text-white border-green-600"
	},
	{
		value: "probably_no",
		label: "たぶんいいえ",
		className: "bg-red-700/80 hover:bg-red-700 text-white border-red-600"
	},
	{
		value: "unknown",
		label: "わからない",
		className: "col-span-2 bg-gray-600/80 hover:bg-gray-600 text-white border-gray-500"
	}
];
function m(e) {
	return e ? {
		character: "キャラクター",
		person: "有名人",
		animal: "動物",
		object: "もの",
		place: "場所"
	}[e] || e : "";
}
function h(e) {
	return {
		yes: "はい",
		no: "いいえ",
		probably_yes: "たぶんはい",
		probably_no: "たぶんいいえ",
		unknown: "わからない"
	}[e] || e;
}
function g({ selectedResult: e, sendTextMessage: t }) {
	let [n, r] = s(null), [i, a] = s(!1), [c, l] = s("");
	if (o(() => {
		e?.toolName === "akinator_game" && e.data && (r(e.data), a(!1), l(""));
	}, [e]), !n) return null;
	let { state: u } = n, d = (e) => {
		t(h(e));
	}, g = (e) => {
		e ? t("正解！当たりです！") : c.trim() && t(`違います。正解は「${c.trim()}」でした。`);
	};
	return /* @__PURE__ */ (0, f.jsx)("div", {
		className: "size-full overflow-y-auto p-8 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900",
		children: /* @__PURE__ */ (0, f.jsxs)("div", {
			className: "max-w-2xl w-full mx-auto",
			children: [
				/* @__PURE__ */ (0, f.jsxs)("div", {
					className: "text-center mb-8",
					children: [
						/* @__PURE__ */ (0, f.jsx)("div", {
							className: "text-6xl mb-4",
							children: "🔮"
						}),
						/* @__PURE__ */ (0, f.jsx)("h2", {
							className: "text-white text-3xl font-bold",
							children: "アキネイター"
						}),
						u.category && /* @__PURE__ */ (0, f.jsxs)("p", {
							className: "text-purple-300 mt-2",
							children: ["カテゴリ: ", m(u.category)]
						})
					]
				}),
				u.phase === "questioning" && /* @__PURE__ */ (0, f.jsxs)("div", {
					className: "mb-6",
					children: [/* @__PURE__ */ (0, f.jsxs)("div", {
						className: "flex justify-between text-sm text-gray-400 mb-2",
						children: [/* @__PURE__ */ (0, f.jsx)("span", { children: "質問数" }), /* @__PURE__ */ (0, f.jsxs)("span", { children: [
							u.questionCount,
							" / ",
							u.maxQuestions
						] })]
					}), /* @__PURE__ */ (0, f.jsx)("div", {
						className: "h-2 bg-gray-700 rounded-full overflow-hidden",
						children: /* @__PURE__ */ (0, f.jsx)("div", {
							className: "h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300",
							style: { width: `${u.questionCount / u.maxQuestions * 100}%` }
						})
					})]
				}),
				/* @__PURE__ */ (0, f.jsx)("div", {
					className: "bg-white/10 backdrop-blur rounded-xl p-6 mb-6 border border-white/20",
					children: /* @__PURE__ */ (0, f.jsx)("p", {
						className: "text-white text-xl text-center whitespace-pre-line",
						children: u.message
					})
				}),
				u.phase === "questioning" && /* @__PURE__ */ (0, f.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, f.jsx)("p", {
						className: "text-center text-gray-400 text-sm mb-4",
						children: "AIの質問に答えてください"
					}), /* @__PURE__ */ (0, f.jsx)("div", {
						className: "grid grid-cols-2 gap-3",
						children: p.map((e) => /* @__PURE__ */ (0, f.jsx)("button", {
							onClick: () => d(e.value),
							className: `py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 border-2 ${e.className}`,
							children: e.label
						}, e.value))
					})]
				}),
				u.phase === "guessing" && u.guess && /* @__PURE__ */ (0, f.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, f.jsxs)("div", {
						className: "grid grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, f.jsx)("button", {
							onClick: () => g(!0),
							className: "py-4 px-6 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-lg transition-colors",
							children: "🎉 正解！"
						}), /* @__PURE__ */ (0, f.jsx)("button", {
							onClick: () => a(!0),
							className: "py-4 px-6 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold text-lg transition-colors",
							children: "😅 違う"
						})]
					}), i && /* @__PURE__ */ (0, f.jsxs)("div", {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, f.jsx)("input", {
							value: c,
							onChange: (e) => l(e.target.value),
							onKeyDown: (e) => e.key === "Enter" && g(!1),
							type: "text",
							placeholder: "正解を教えてください...",
							className: "w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
						}), /* @__PURE__ */ (0, f.jsx)("button", {
							onClick: () => g(!1),
							disabled: !c.trim(),
							className: "w-full mt-3 py-3 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-colors",
							children: "回答を送信"
						})]
					})]
				}),
				u.phase === "result" && /* @__PURE__ */ (0, f.jsxs)("div", {
					className: "text-center space-y-6",
					children: [
						/* @__PURE__ */ (0, f.jsx)("div", {
							className: "text-6xl",
							children: u.isCorrect ? "🎉" : "😅"
						}),
						u.score !== void 0 && /* @__PURE__ */ (0, f.jsxs)("div", {
							className: "text-3xl font-bold text-yellow-400",
							children: [
								"スコア: ",
								u.score,
								"点"
							]
						}),
						/* @__PURE__ */ (0, f.jsx)("button", {
							onClick: () => {
								t("もう一度遊びたい！");
							},
							className: "py-4 px-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-bold text-lg transition-all",
							children: "もう一度遊ぶ"
						})
					]
				}),
				u.qaHistory.length > 0 && /* @__PURE__ */ (0, f.jsxs)("div", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, f.jsx)("h3", {
						className: "text-white font-bold mb-3",
						children: "質問履歴"
					}), /* @__PURE__ */ (0, f.jsx)("div", {
						className: "space-y-2 max-h-60 overflow-y-auto",
						children: u.qaHistory.map((e, t) => /* @__PURE__ */ (0, f.jsxs)("div", {
							className: "bg-white/5 rounded-lg p-3 text-sm",
							children: [
								/* @__PURE__ */ (0, f.jsxs)("span", {
									className: "text-purple-300",
									children: [
										"Q",
										t + 1,
										":"
									]
								}),
								/* @__PURE__ */ (0, f.jsx)("span", {
									className: "text-white ml-2",
									children: e.question
								}),
								/* @__PURE__ */ (0, f.jsxs)("span", {
									className: "text-yellow-400 ml-2",
									children: ["→ ", h(e.answer)]
								})
							]
						}, t))
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/react/Preview.tsx
function _(e) {
	return e ? {
		character: "キャラクター",
		person: "有名人",
		animal: "動物",
		object: "もの",
		place: "場所"
	}[e] || e : "アキネイター";
}
function v({ result: e }) {
	let t = e.data;
	if (!t) return null;
	let { state: n } = t;
	return /* @__PURE__ */ (0, f.jsx)("div", {
		className: "p-3 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-md",
		children: /* @__PURE__ */ (0, f.jsxs)("div", {
			className: "flex flex-col gap-2 text-center",
			children: [
				/* @__PURE__ */ (0, f.jsx)("div", {
					className: "text-3xl",
					children: "🔮"
				}),
				/* @__PURE__ */ (0, f.jsx)("div", {
					className: "text-sm font-semibold text-purple-800",
					children: _(n.category)
				}),
				/* @__PURE__ */ (0, f.jsxs)("div", {
					className: "text-xs text-gray-600",
					children: [
						n.phase === "questioning" && /* @__PURE__ */ (0, f.jsxs)("span", { children: [
							"質問 ",
							n.questionCount,
							"/",
							n.maxQuestions
						] }),
						n.phase === "guessing" && /* @__PURE__ */ (0, f.jsx)("span", { children: "🤔 予想中..." }),
						n.phase === "result" && (n.isCorrect ? /* @__PURE__ */ (0, f.jsx)("span", {
							className: "text-green-600",
							children: "🎉 正解!"
						}) : /* @__PURE__ */ (0, f.jsx)("span", {
							className: "text-red-600",
							children: "😅 残念"
						}))
					]
				}),
				n.score !== void 0 && /* @__PURE__ */ (0, f.jsxs)("div", {
					className: "text-xs font-bold text-yellow-600",
					children: [n.score, "点"]
				})
			]
		})
	});
}
//#endregion
//#region src/react/index.ts
var y = {
	...n,
	ViewComponent: g,
	PreviewComponent: v
}, b = { plugin: y };
//#endregion
export { v as Preview, i as SAMPLES, t as SYSTEM_PROMPT, e as TOOL_DEFINITION, r as TOOL_NAME, g as View, b as default, a as executeAkinator, y as plugin, n as pluginCore };
