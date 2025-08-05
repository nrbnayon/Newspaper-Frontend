const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/HomePage-CePwZU5R.js",
      "assets/index-BYleTeBh.js",
      "assets/Profile-Dhf47ywt.js",
      "assets/upload-CBUrxJuR.js",
      "assets/Advertise-Cwr9bcYJ.js",
      "assets/NewAdvertise-COFAgEyS.js",
    ])
) => i.map((i) => d[i]);
function s1(a, s) {
  for (var l = 0; l < s.length; l++) {
    const i = s[l];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const o in i)
        if (o !== "default" && !(o in a)) {
          const f = Object.getOwnPropertyDescriptor(i, o);
          f &&
            Object.defineProperty(
              a,
              o,
              f.get ? f : { enumerable: !0, get: () => i[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(a, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o);
  new MutationObserver((o) => {
    for (const f of o)
      if (f.type === "childList")
        for (const h of f.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && i(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(o) {
    const f = {};
    return (
      o.integrity && (f.integrity = o.integrity),
      o.referrerPolicy && (f.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (f.credentials = "omit")
        : (f.credentials = "same-origin"),
      f
    );
  }
  function i(o) {
    if (o.ep) return;
    o.ep = !0;
    const f = l(o);
    fetch(o.href, f);
  }
})();
function ar(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var of = { exports: {} },
  il = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sy;
function r1() {
  if (Sy) return il;
  Sy = 1;
  var a = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.fragment");
  function l(i, o, f) {
    var h = null;
    if (
      (f !== void 0 && (h = "" + f),
      o.key !== void 0 && (h = "" + o.key),
      "key" in o)
    ) {
      f = {};
      for (var m in o) m !== "key" && (f[m] = o[m]);
    } else f = o;
    return (
      (o = f.ref),
      { $$typeof: a, type: i, key: h, ref: o !== void 0 ? o : null, props: f }
    );
  }
  return (il.Fragment = s), (il.jsx = l), (il.jsxs = l), il;
}
var wy;
function l1() {
  return wy || ((wy = 1), (of.exports = r1())), of.exports;
}
var c = l1(),
  cf = { exports: {} },
  Ne = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ny;
function i1() {
  if (Ny) return Ne;
  Ny = 1;
  var a = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.portal"),
    l = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    S = Symbol.iterator;
  function w(E) {
    return E === null || typeof E != "object"
      ? null
      : ((E = (S && E[S]) || E["@@iterator"]),
        typeof E == "function" ? E : null);
  }
  var O = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    N = Object.assign,
    R = {};
  function C(E, J, ue) {
    (this.props = E),
      (this.context = J),
      (this.refs = R),
      (this.updater = ue || O);
  }
  (C.prototype.isReactComponent = {}),
    (C.prototype.setState = function (E, J) {
      if (typeof E != "object" && typeof E != "function" && E != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, E, J, "setState");
    }),
    (C.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, "forceUpdate");
    });
  function U() {}
  U.prototype = C.prototype;
  function M(E, J, ue) {
    (this.props = E),
      (this.context = J),
      (this.refs = R),
      (this.updater = ue || O);
  }
  var V = (M.prototype = new U());
  (V.constructor = M), N(V, C.prototype), (V.isPureReactComponent = !0);
  var H = Array.isArray,
    Y = { H: null, A: null, T: null, S: null, V: null },
    _ = Object.prototype.hasOwnProperty;
  function K(E, J, ue, W, de, _e) {
    return (
      (ue = _e.ref),
      {
        $$typeof: a,
        type: E,
        key: J,
        ref: ue !== void 0 ? ue : null,
        props: _e,
      }
    );
  }
  function ee(E, J) {
    return K(E.type, J, void 0, void 0, void 0, E.props);
  }
  function ne(E) {
    return typeof E == "object" && E !== null && E.$$typeof === a;
  }
  function ye(E) {
    var J = { "=": "=0", ":": "=2" };
    return (
      "$" +
      E.replace(/[=:]/g, function (ue) {
        return J[ue];
      })
    );
  }
  var Me = /\/+/g;
  function fe(E, J) {
    return typeof E == "object" && E !== null && E.key != null
      ? ye("" + E.key)
      : J.toString(36);
  }
  function se() {}
  function me(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (
          (typeof E.status == "string"
            ? E.then(se, se)
            : ((E.status = "pending"),
              E.then(
                function (J) {
                  E.status === "pending" &&
                    ((E.status = "fulfilled"), (E.value = J));
                },
                function (J) {
                  E.status === "pending" &&
                    ((E.status = "rejected"), (E.reason = J));
                }
              )),
          E.status)
        ) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function Q(E, J, ue, W, de) {
    var _e = typeof E;
    (_e === "undefined" || _e === "boolean") && (E = null);
    var be = !1;
    if (E === null) be = !0;
    else
      switch (_e) {
        case "bigint":
        case "string":
        case "number":
          be = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case a:
            case s:
              be = !0;
              break;
            case v:
              return (be = E._init), Q(be(E._payload), J, ue, W, de);
          }
      }
    if (be)
      return (
        (de = de(E)),
        (be = W === "" ? "." + fe(E, 0) : W),
        H(de)
          ? ((ue = ""),
            be != null && (ue = be.replace(Me, "$&/") + "/"),
            Q(de, J, ue, "", function ($t) {
              return $t;
            }))
          : de != null &&
            (ne(de) &&
              (de = ee(
                de,
                ue +
                  (de.key == null || (E && E.key === de.key)
                    ? ""
                    : ("" + de.key).replace(Me, "$&/") + "/") +
                  be
              )),
            J.push(de)),
        1
      );
    be = 0;
    var gt = W === "" ? "." : W + ":";
    if (H(E))
      for (var Ge = 0; Ge < E.length; Ge++)
        (W = E[Ge]), (_e = gt + fe(W, Ge)), (be += Q(W, J, ue, _e, de));
    else if (((Ge = w(E)), typeof Ge == "function"))
      for (E = Ge.call(E), Ge = 0; !(W = E.next()).done; )
        (W = W.value), (_e = gt + fe(W, Ge++)), (be += Q(W, J, ue, _e, de));
    else if (_e === "object") {
      if (typeof E.then == "function") return Q(me(E), J, ue, W, de);
      throw (
        ((J = String(E)),
        Error(
          "Objects are not valid as a React child (found: " +
            (J === "[object Object]"
              ? "object with keys {" + Object.keys(E).join(", ") + "}"
              : J) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return be;
  }
  function L(E, J, ue) {
    if (E == null) return E;
    var W = [],
      de = 0;
    return (
      Q(E, W, "", "", function (_e) {
        return J.call(ue, _e, de++);
      }),
      W
    );
  }
  function I(E) {
    if (E._status === -1) {
      var J = E._result;
      (J = J()),
        J.then(
          function (ue) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 1), (E._result = ue));
          },
          function (ue) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 2), (E._result = ue));
          }
        ),
        E._status === -1 && ((E._status = 0), (E._result = J));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var re =
    typeof reportError == "function"
      ? reportError
      : function (E) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var J = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof E == "object" &&
                E !== null &&
                typeof E.message == "string"
                  ? String(E.message)
                  : String(E),
              error: E,
            });
            if (!window.dispatchEvent(J)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", E);
            return;
          }
          console.error(E);
        };
  function je() {}
  return (
    (Ne.Children = {
      map: L,
      forEach: function (E, J, ue) {
        L(
          E,
          function () {
            J.apply(this, arguments);
          },
          ue
        );
      },
      count: function (E) {
        var J = 0;
        return (
          L(E, function () {
            J++;
          }),
          J
        );
      },
      toArray: function (E) {
        return (
          L(E, function (J) {
            return J;
          }) || []
        );
      },
      only: function (E) {
        if (!ne(E))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return E;
      },
    }),
    (Ne.Component = C),
    (Ne.Fragment = l),
    (Ne.Profiler = o),
    (Ne.PureComponent = M),
    (Ne.StrictMode = i),
    (Ne.Suspense = y),
    (Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y),
    (Ne.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (E) {
        return Y.H.useMemoCache(E);
      },
    }),
    (Ne.cache = function (E) {
      return function () {
        return E.apply(null, arguments);
      };
    }),
    (Ne.cloneElement = function (E, J, ue) {
      if (E == null)
        throw Error(
          "The argument must be a React element, but you passed " + E + "."
        );
      var W = N({}, E.props),
        de = E.key,
        _e = void 0;
      if (J != null)
        for (be in (J.ref !== void 0 && (_e = void 0),
        J.key !== void 0 && (de = "" + J.key),
        J))
          !_.call(J, be) ||
            be === "key" ||
            be === "__self" ||
            be === "__source" ||
            (be === "ref" && J.ref === void 0) ||
            (W[be] = J[be]);
      var be = arguments.length - 2;
      if (be === 1) W.children = ue;
      else if (1 < be) {
        for (var gt = Array(be), Ge = 0; Ge < be; Ge++)
          gt[Ge] = arguments[Ge + 2];
        W.children = gt;
      }
      return K(E.type, de, void 0, void 0, _e, W);
    }),
    (Ne.createContext = function (E) {
      return (
        (E = {
          $$typeof: h,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (E.Provider = E),
        (E.Consumer = { $$typeof: f, _context: E }),
        E
      );
    }),
    (Ne.createElement = function (E, J, ue) {
      var W,
        de = {},
        _e = null;
      if (J != null)
        for (W in (J.key !== void 0 && (_e = "" + J.key), J))
          _.call(J, W) &&
            W !== "key" &&
            W !== "__self" &&
            W !== "__source" &&
            (de[W] = J[W]);
      var be = arguments.length - 2;
      if (be === 1) de.children = ue;
      else if (1 < be) {
        for (var gt = Array(be), Ge = 0; Ge < be; Ge++)
          gt[Ge] = arguments[Ge + 2];
        de.children = gt;
      }
      if (E && E.defaultProps)
        for (W in ((be = E.defaultProps), be))
          de[W] === void 0 && (de[W] = be[W]);
      return K(E, _e, void 0, void 0, null, de);
    }),
    (Ne.createRef = function () {
      return { current: null };
    }),
    (Ne.forwardRef = function (E) {
      return { $$typeof: m, render: E };
    }),
    (Ne.isValidElement = ne),
    (Ne.lazy = function (E) {
      return { $$typeof: v, _payload: { _status: -1, _result: E }, _init: I };
    }),
    (Ne.memo = function (E, J) {
      return { $$typeof: p, type: E, compare: J === void 0 ? null : J };
    }),
    (Ne.startTransition = function (E) {
      var J = Y.T,
        ue = {};
      Y.T = ue;
      try {
        var W = E(),
          de = Y.S;
        de !== null && de(ue, W),
          typeof W == "object" &&
            W !== null &&
            typeof W.then == "function" &&
            W.then(je, re);
      } catch (_e) {
        re(_e);
      } finally {
        Y.T = J;
      }
    }),
    (Ne.unstable_useCacheRefresh = function () {
      return Y.H.useCacheRefresh();
    }),
    (Ne.use = function (E) {
      return Y.H.use(E);
    }),
    (Ne.useActionState = function (E, J, ue) {
      return Y.H.useActionState(E, J, ue);
    }),
    (Ne.useCallback = function (E, J) {
      return Y.H.useCallback(E, J);
    }),
    (Ne.useContext = function (E) {
      return Y.H.useContext(E);
    }),
    (Ne.useDebugValue = function () {}),
    (Ne.useDeferredValue = function (E, J) {
      return Y.H.useDeferredValue(E, J);
    }),
    (Ne.useEffect = function (E, J, ue) {
      var W = Y.H;
      if (typeof ue == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return W.useEffect(E, J);
    }),
    (Ne.useId = function () {
      return Y.H.useId();
    }),
    (Ne.useImperativeHandle = function (E, J, ue) {
      return Y.H.useImperativeHandle(E, J, ue);
    }),
    (Ne.useInsertionEffect = function (E, J) {
      return Y.H.useInsertionEffect(E, J);
    }),
    (Ne.useLayoutEffect = function (E, J) {
      return Y.H.useLayoutEffect(E, J);
    }),
    (Ne.useMemo = function (E, J) {
      return Y.H.useMemo(E, J);
    }),
    (Ne.useOptimistic = function (E, J) {
      return Y.H.useOptimistic(E, J);
    }),
    (Ne.useReducer = function (E, J, ue) {
      return Y.H.useReducer(E, J, ue);
    }),
    (Ne.useRef = function (E) {
      return Y.H.useRef(E);
    }),
    (Ne.useState = function (E) {
      return Y.H.useState(E);
    }),
    (Ne.useSyncExternalStore = function (E, J, ue) {
      return Y.H.useSyncExternalStore(E, J, ue);
    }),
    (Ne.useTransition = function () {
      return Y.H.useTransition();
    }),
    (Ne.version = "19.1.0"),
    Ne
  );
}
var jy;
function nd() {
  return jy || ((jy = 1), (cf.exports = i1())), cf.exports;
}
var b = nd();
const Ce = ar(b),
  u1 = s1({ __proto__: null, default: Ce }, [b]);
var ff = { exports: {} },
  ul = {},
  df = { exports: {} },
  hf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ey;
function o1() {
  return (
    Ey ||
      ((Ey = 1),
      (function (a) {
        function s(L, I) {
          var re = L.length;
          L.push(I);
          e: for (; 0 < re; ) {
            var je = (re - 1) >>> 1,
              E = L[je];
            if (0 < o(E, I)) (L[je] = I), (L[re] = E), (re = je);
            else break e;
          }
        }
        function l(L) {
          return L.length === 0 ? null : L[0];
        }
        function i(L) {
          if (L.length === 0) return null;
          var I = L[0],
            re = L.pop();
          if (re !== I) {
            L[0] = re;
            e: for (var je = 0, E = L.length, J = E >>> 1; je < J; ) {
              var ue = 2 * (je + 1) - 1,
                W = L[ue],
                de = ue + 1,
                _e = L[de];
              if (0 > o(W, re))
                de < E && 0 > o(_e, W)
                  ? ((L[je] = _e), (L[de] = re), (je = de))
                  : ((L[je] = W), (L[ue] = re), (je = ue));
              else if (de < E && 0 > o(_e, re))
                (L[je] = _e), (L[de] = re), (je = de);
              else break e;
            }
          }
          return I;
        }
        function o(L, I) {
          var re = L.sortIndex - I.sortIndex;
          return re !== 0 ? re : L.id - I.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var f = performance;
          a.unstable_now = function () {
            return f.now();
          };
        } else {
          var h = Date,
            m = h.now();
          a.unstable_now = function () {
            return h.now() - m;
          };
        }
        var y = [],
          p = [],
          v = 1,
          S = null,
          w = 3,
          O = !1,
          N = !1,
          R = !1,
          C = !1,
          U = typeof setTimeout == "function" ? setTimeout : null,
          M = typeof clearTimeout == "function" ? clearTimeout : null,
          V = typeof setImmediate < "u" ? setImmediate : null;
        function H(L) {
          for (var I = l(p); I !== null; ) {
            if (I.callback === null) i(p);
            else if (I.startTime <= L)
              i(p), (I.sortIndex = I.expirationTime), s(y, I);
            else break;
            I = l(p);
          }
        }
        function Y(L) {
          if (((R = !1), H(L), !N))
            if (l(y) !== null) (N = !0), _ || ((_ = !0), fe());
            else {
              var I = l(p);
              I !== null && Q(Y, I.startTime - L);
            }
        }
        var _ = !1,
          K = -1,
          ee = 5,
          ne = -1;
        function ye() {
          return C ? !0 : !(a.unstable_now() - ne < ee);
        }
        function Me() {
          if (((C = !1), _)) {
            var L = a.unstable_now();
            ne = L;
            var I = !0;
            try {
              e: {
                (N = !1), R && ((R = !1), M(K), (K = -1)), (O = !0);
                var re = w;
                try {
                  t: {
                    for (
                      H(L), S = l(y);
                      S !== null && !(S.expirationTime > L && ye());

                    ) {
                      var je = S.callback;
                      if (typeof je == "function") {
                        (S.callback = null), (w = S.priorityLevel);
                        var E = je(S.expirationTime <= L);
                        if (((L = a.unstable_now()), typeof E == "function")) {
                          (S.callback = E), H(L), (I = !0);
                          break t;
                        }
                        S === l(y) && i(y), H(L);
                      } else i(y);
                      S = l(y);
                    }
                    if (S !== null) I = !0;
                    else {
                      var J = l(p);
                      J !== null && Q(Y, J.startTime - L), (I = !1);
                    }
                  }
                  break e;
                } finally {
                  (S = null), (w = re), (O = !1);
                }
                I = void 0;
              }
            } finally {
              I ? fe() : (_ = !1);
            }
          }
        }
        var fe;
        if (typeof V == "function")
          fe = function () {
            V(Me);
          };
        else if (typeof MessageChannel < "u") {
          var se = new MessageChannel(),
            me = se.port2;
          (se.port1.onmessage = Me),
            (fe = function () {
              me.postMessage(null);
            });
        } else
          fe = function () {
            U(Me, 0);
          };
        function Q(L, I) {
          K = U(function () {
            L(a.unstable_now());
          }, I);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (L) {
            L.callback = null;
          }),
          (a.unstable_forceFrameRate = function (L) {
            0 > L || 125 < L
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (ee = 0 < L ? Math.floor(1e3 / L) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (a.unstable_next = function (L) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var I = 3;
                break;
              default:
                I = w;
            }
            var re = w;
            w = I;
            try {
              return L();
            } finally {
              w = re;
            }
          }),
          (a.unstable_requestPaint = function () {
            C = !0;
          }),
          (a.unstable_runWithPriority = function (L, I) {
            switch (L) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                L = 3;
            }
            var re = w;
            w = L;
            try {
              return I();
            } finally {
              w = re;
            }
          }),
          (a.unstable_scheduleCallback = function (L, I, re) {
            var je = a.unstable_now();
            switch (
              (typeof re == "object" && re !== null
                ? ((re = re.delay),
                  (re = typeof re == "number" && 0 < re ? je + re : je))
                : (re = je),
              L)
            ) {
              case 1:
                var E = -1;
                break;
              case 2:
                E = 250;
                break;
              case 5:
                E = 1073741823;
                break;
              case 4:
                E = 1e4;
                break;
              default:
                E = 5e3;
            }
            return (
              (E = re + E),
              (L = {
                id: v++,
                callback: I,
                priorityLevel: L,
                startTime: re,
                expirationTime: E,
                sortIndex: -1,
              }),
              re > je
                ? ((L.sortIndex = re),
                  s(p, L),
                  l(y) === null &&
                    L === l(p) &&
                    (R ? (M(K), (K = -1)) : (R = !0), Q(Y, re - je)))
                : ((L.sortIndex = E),
                  s(y, L),
                  N || O || ((N = !0), _ || ((_ = !0), fe()))),
              L
            );
          }),
          (a.unstable_shouldYield = ye),
          (a.unstable_wrapCallback = function (L) {
            var I = w;
            return function () {
              var re = w;
              w = I;
              try {
                return L.apply(this, arguments);
              } finally {
                w = re;
              }
            };
          });
      })(hf)),
    hf
  );
}
var Ay;
function c1() {
  return Ay || ((Ay = 1), (df.exports = o1())), df.exports;
}
var mf = { exports: {} },
  Et = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ty;
function f1() {
  if (Ty) return Et;
  Ty = 1;
  var a = nd();
  function s(y) {
    var p = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        p += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function l() {}
  var i = {
      d: {
        f: l,
        r: function () {
          throw Error(s(522));
        },
        D: l,
        C: l,
        L: l,
        m: l,
        X: l,
        S: l,
        M: l,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for("react.portal");
  function f(y, p, v) {
    var S =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: S == null ? null : "" + S,
      children: y,
      containerInfo: p,
      implementation: v,
    };
  }
  var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(y, p) {
    if (y === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (Et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (Et.createPortal = function (y, p) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(s(299));
      return f(y, p, null, v);
    }),
    (Et.flushSync = function (y) {
      var p = h.T,
        v = i.p;
      try {
        if (((h.T = null), (i.p = 2), y)) return y();
      } finally {
        (h.T = p), (i.p = v), i.d.f();
      }
    }),
    (Et.preconnect = function (y, p) {
      typeof y == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        i.d.C(y, p));
    }),
    (Et.prefetchDNS = function (y) {
      typeof y == "string" && i.d.D(y);
    }),
    (Et.preinit = function (y, p) {
      if (typeof y == "string" && p && typeof p.as == "string") {
        var v = p.as,
          S = m(v, p.crossOrigin),
          w = typeof p.integrity == "string" ? p.integrity : void 0,
          O = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        v === "style"
          ? i.d.S(y, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: S,
              integrity: w,
              fetchPriority: O,
            })
          : v === "script" &&
            i.d.X(y, {
              crossOrigin: S,
              integrity: w,
              fetchPriority: O,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (Et.preinitModule = function (y, p) {
      if (typeof y == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var v = m(p.as, p.crossOrigin);
            i.d.M(y, {
              crossOrigin: v,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && i.d.M(y);
    }),
    (Et.preload = function (y, p) {
      if (
        typeof y == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var v = p.as,
          S = m(v, p.crossOrigin);
        i.d.L(y, v, {
          crossOrigin: S,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (Et.preloadModule = function (y, p) {
      if (typeof y == "string")
        if (p) {
          var v = m(p.as, p.crossOrigin);
          i.d.m(y, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: v,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else i.d.m(y);
    }),
    (Et.requestFormReset = function (y) {
      i.d.r(y);
    }),
    (Et.unstable_batchedUpdates = function (y, p) {
      return y(p);
    }),
    (Et.useFormState = function (y, p, v) {
      return h.H.useFormState(y, p, v);
    }),
    (Et.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (Et.version = "19.1.0"),
    Et
  );
}
var Cy;
function $g() {
  if (Cy) return mf.exports;
  Cy = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (s) {
        console.error(s);
      }
  }
  return a(), (mf.exports = f1()), mf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oy;
function d1() {
  if (Oy) return ul;
  Oy = 1;
  var a = c1(),
    s = nd(),
    l = $g();
  function i(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function f(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function h(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (f(e) !== e) throw Error(i(188));
  }
  function y(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = f(e)), t === null)) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var u = n.return;
      if (u === null) break;
      var d = u.alternate;
      if (d === null) {
        if (((r = u.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (u.child === d.child) {
        for (d = u.child; d; ) {
          if (d === n) return m(u), e;
          if (d === r) return m(u), t;
          d = d.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== r.return) (n = u), (r = d);
      else {
        for (var g = !1, x = u.child; x; ) {
          if (x === n) {
            (g = !0), (n = u), (r = d);
            break;
          }
          if (x === r) {
            (g = !0), (r = u), (n = d);
            break;
          }
          x = x.sibling;
        }
        if (!g) {
          for (x = d.child; x; ) {
            if (x === n) {
              (g = !0), (n = d), (r = u);
              break;
            }
            if (x === r) {
              (g = !0), (r = d), (n = u);
              break;
            }
            x = x.sibling;
          }
          if (!g) throw Error(i(189));
        }
      }
      if (n.alternate !== r) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? e : t;
  }
  function p(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = p(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var v = Object.assign,
    S = Symbol.for("react.element"),
    w = Symbol.for("react.transitional.element"),
    O = Symbol.for("react.portal"),
    N = Symbol.for("react.fragment"),
    R = Symbol.for("react.strict_mode"),
    C = Symbol.for("react.profiler"),
    U = Symbol.for("react.provider"),
    M = Symbol.for("react.consumer"),
    V = Symbol.for("react.context"),
    H = Symbol.for("react.forward_ref"),
    Y = Symbol.for("react.suspense"),
    _ = Symbol.for("react.suspense_list"),
    K = Symbol.for("react.memo"),
    ee = Symbol.for("react.lazy"),
    ne = Symbol.for("react.activity"),
    ye = Symbol.for("react.memo_cache_sentinel"),
    Me = Symbol.iterator;
  function fe(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Me && e[Me]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var se = Symbol.for("react.client.reference");
  function me(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === se ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case N:
        return "Fragment";
      case C:
        return "Profiler";
      case R:
        return "StrictMode";
      case Y:
        return "Suspense";
      case _:
        return "SuspenseList";
      case ne:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case O:
          return "Portal";
        case V:
          return (e.displayName || "Context") + ".Provider";
        case M:
          return (e._context.displayName || "Context") + ".Consumer";
        case H:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case K:
          return (
            (t = e.displayName || null), t !== null ? t : me(e.type) || "Memo"
          );
        case ee:
          (t = e._payload), (e = e._init);
          try {
            return me(e(t));
          } catch {}
      }
    return null;
  }
  var Q = Array.isArray,
    L = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    I = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    re = { pending: !1, data: null, method: null, action: null },
    je = [],
    E = -1;
  function J(e) {
    return { current: e };
  }
  function ue(e) {
    0 > E || ((e.current = je[E]), (je[E] = null), E--);
  }
  function W(e, t) {
    E++, (je[E] = e.current), (e.current = t);
  }
  var de = J(null),
    _e = J(null),
    be = J(null),
    gt = J(null);
  function Ge(e, t) {
    switch ((W(be, t), W(_e, e), W(de, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Kp(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          (t = Kp(t)), (e = Zp(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    ue(de), W(de, e);
  }
  function $t() {
    ue(de), ue(_e), ue(be);
  }
  function ls(e) {
    e.memoizedState !== null && W(gt, e);
    var t = de.current,
      n = Zp(t, e.type);
    t !== n && (W(_e, e), W(de, n));
  }
  function is(e) {
    _e.current === e && (ue(de), ue(_e)),
      gt.current === e && (ue(gt), (al._currentValue = re));
  }
  var us = Object.prototype.hasOwnProperty,
    cr = a.unstable_scheduleCallback,
    os = a.unstable_cancelCallback,
    kl = a.unstable_shouldYield,
    $u = a.unstable_requestPaint,
    Kt = a.unstable_now,
    _d = a.unstable_getCurrentPriorityLevel,
    fr = a.unstable_ImmediatePriority,
    A = a.unstable_UserBlockingPriority,
    q = a.unstable_NormalPriority,
    X = a.unstable_LowPriority,
    ie = a.unstable_IdlePriority,
    ae = a.log,
    te = a.unstable_setDisableYieldValue,
    ce = null,
    Se = null;
  function De(e) {
    if (
      (typeof ae == "function" && te(e),
      Se && typeof Se.setStrictMode == "function")
    )
      try {
        Se.setStrictMode(ce, e);
      } catch {}
  }
  var $e = Math.clz32 ? Math.clz32 : Ku,
    cs = Math.log,
    va = Math.LN2;
  function Ku(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((cs(e) / va) | 0)) | 0;
  }
  var Ia = 256,
    Wa = 4194304;
  function Ca(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function On(e, t, n) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var u = 0,
      d = e.suspendedLanes,
      g = e.pingedLanes;
    e = e.warmLanes;
    var x = r & 134217727;
    return (
      x !== 0
        ? ((r = x & ~d),
          r !== 0
            ? (u = Ca(r))
            : ((g &= x),
              g !== 0
                ? (u = Ca(g))
                : n || ((n = x & ~e), n !== 0 && (u = Ca(n)))))
        : ((x = r & ~d),
          x !== 0
            ? (u = Ca(x))
            : g !== 0
            ? (u = Ca(g))
            : n || ((n = r & ~e), n !== 0 && (u = Ca(n)))),
      u === 0
        ? 0
        : t !== 0 &&
          t !== u &&
          (t & d) === 0 &&
          ((d = u & -u),
          (n = t & -t),
          d >= n || (d === 32 && (n & 4194048) !== 0))
        ? t
        : u
    );
  }
  function Rn(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Ll(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Dd() {
    var e = Ia;
    return (Ia <<= 1), (Ia & 4194048) === 0 && (Ia = 256), e;
  }
  function Md() {
    var e = Wa;
    return (Wa <<= 1), (Wa & 62914560) === 0 && (Wa = 4194304), e;
  }
  function Zu(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function dr(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Qv(e, t, n, r, u, d) {
    var g = e.pendingLanes;
    (e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0);
    var x = e.entanglements,
      j = e.expirationTimes,
      k = e.hiddenUpdates;
    for (n = g & ~n; 0 < n; ) {
      var G = 31 - $e(n),
        Z = 1 << G;
      (x[G] = 0), (j[G] = -1);
      var B = k[G];
      if (B !== null)
        for (k[G] = null, G = 0; G < B.length; G++) {
          var P = B[G];
          P !== null && (P.lane &= -536870913);
        }
      n &= ~Z;
    }
    r !== 0 && Ud(e, r, 0),
      d !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(g & ~t));
  }
  function Ud(e, t, n) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var r = 31 - $e(t);
    (e.entangledLanes |= t),
      (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 4194090));
  }
  function zd(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - $e(n),
        u = 1 << r;
      (u & t) | (e[r] & t) && (e[r] |= t), (n &= ~u);
    }
  }
  function Ju(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Iu(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function kd() {
    var e = I.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : py(e.type));
  }
  function Xv(e, t) {
    var n = I.p;
    try {
      return (I.p = e), t();
    } finally {
      I.p = n;
    }
  }
  var en = Math.random().toString(36).slice(2),
    Nt = "__reactFiber$" + en,
    Mt = "__reactProps$" + en,
    fs = "__reactContainer$" + en,
    Wu = "__reactEvents$" + en,
    $v = "__reactListeners$" + en,
    Kv = "__reactHandles$" + en,
    Ld = "__reactResources$" + en,
    hr = "__reactMarker$" + en;
  function eo(e) {
    delete e[Nt], delete e[Mt], delete e[Wu], delete e[$v], delete e[Kv];
  }
  function ds(e) {
    var t = e[Nt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[fs] || n[Nt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = ey(e); e !== null; ) {
            if ((n = e[Nt])) return n;
            e = ey(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function hs(e) {
    if ((e = e[Nt] || e[fs])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function mr(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(i(33));
  }
  function ms(e) {
    var t = e[Ld];
    return (
      t ||
        (t = e[Ld] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function ht(e) {
    e[hr] = !0;
  }
  var Hd = new Set(),
    qd = {};
  function _n(e, t) {
    ps(e, t), ps(e + "Capture", t);
  }
  function ps(e, t) {
    for (qd[e] = t, e = 0; e < t.length; e++) Hd.add(t[e]);
  }
  var Zv = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Bd = {},
    Vd = {};
  function Jv(e) {
    return us.call(Vd, e)
      ? !0
      : us.call(Bd, e)
      ? !1
      : Zv.test(e)
      ? (Vd[e] = !0)
      : ((Bd[e] = !0), !1);
  }
  function Hl(e, t, n) {
    if (Jv(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var r = t.toLowerCase().slice(0, 5);
            if (r !== "data-" && r !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function ql(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function Oa(e, t, n, r) {
    if (r === null) e.removeAttribute(n);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + r);
    }
  }
  var to, Pd;
  function ys(e) {
    if (to === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        (to = (t && t[1]) || ""),
          (Pd =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      to +
      e +
      Pd
    );
  }
  var ao = !1;
  function no(e, t) {
    if (!e || ao) return "";
    ao = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var Z = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(Z.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Z, []);
                } catch (P) {
                  var B = P;
                }
                Reflect.construct(e, [], Z);
              } else {
                try {
                  Z.call();
                } catch (P) {
                  B = P;
                }
                e.call(Z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (P) {
                B = P;
              }
              (Z = e()) &&
                typeof Z.catch == "function" &&
                Z.catch(function () {});
            }
          } catch (P) {
            if (P && B && typeof P.stack == "string") return [P.stack, B.stack];
          }
          return [null, null];
        },
      };
      r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        r.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var d = r.DetermineComponentFrameRoot(),
        g = d[0],
        x = d[1];
      if (g && x) {
        var j = g.split(`
`),
          k = x.split(`
`);
        for (
          u = r = 0;
          r < j.length && !j[r].includes("DetermineComponentFrameRoot");

        )
          r++;
        for (; u < k.length && !k[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (r === j.length || u === k.length)
          for (
            r = j.length - 1, u = k.length - 1;
            1 <= r && 0 <= u && j[r] !== k[u];

          )
            u--;
        for (; 1 <= r && 0 <= u; r--, u--)
          if (j[r] !== k[u]) {
            if (r !== 1 || u !== 1)
              do
                if ((r--, u--, 0 > u || j[r] !== k[u])) {
                  var G =
                    `
` + j[r].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      G.includes("<anonymous>") &&
                      (G = G.replace("<anonymous>", e.displayName)),
                    G
                  );
                }
              while (1 <= r && 0 <= u);
            break;
          }
      }
    } finally {
      (ao = !1), (Error.prepareStackTrace = n);
    }
    return (n = e ? e.displayName || e.name : "") ? ys(n) : "";
  }
  function Iv(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ys(e.type);
      case 16:
        return ys("Lazy");
      case 13:
        return ys("Suspense");
      case 19:
        return ys("SuspenseList");
      case 0:
      case 15:
        return no(e.type, !1);
      case 11:
        return no(e.type.render, !1);
      case 1:
        return no(e.type, !0);
      case 31:
        return ys("Activity");
      default:
        return "";
    }
  }
  function Yd(e) {
    try {
      var t = "";
      do (t += Iv(e)), (e = e.return);
      while (e);
      return t;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function Zt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Fd(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Wv(e) {
    var t = Fd(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var u = n.get,
        d = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (g) {
            (r = "" + g), d.call(this, g);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (g) {
            r = "" + g;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Bl(e) {
    e._valueTracker || (e._valueTracker = Wv(e));
  }
  function Gd(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = Fd(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Vl(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var ex = /[\n"\\]/g;
  function Jt(e) {
    return e.replace(ex, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function so(e, t, n, r, u, d, g, x) {
    (e.name = ""),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (e.type = g)
        : e.removeAttribute("type"),
      t != null
        ? g === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Zt(t))
          : e.value !== "" + Zt(t) && (e.value = "" + Zt(t))
        : (g !== "submit" && g !== "reset") || e.removeAttribute("value"),
      t != null
        ? ro(e, g, Zt(t))
        : n != null
        ? ro(e, g, Zt(n))
        : r != null && e.removeAttribute("value"),
      u == null && d != null && (e.defaultChecked = !!d),
      u != null &&
        (e.checked = u && typeof u != "function" && typeof u != "symbol"),
      x != null &&
      typeof x != "function" &&
      typeof x != "symbol" &&
      typeof x != "boolean"
        ? (e.name = "" + Zt(x))
        : e.removeAttribute("name");
  }
  function Qd(e, t, n, r, u, d, g, x) {
    if (
      (d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (e.type = d),
      t != null || n != null)
    ) {
      if (!((d !== "submit" && d !== "reset") || t != null)) return;
      (n = n != null ? "" + Zt(n) : ""),
        (t = t != null ? "" + Zt(t) : n),
        x || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (r = r ?? u),
      (r = typeof r != "function" && typeof r != "symbol" && !!r),
      (e.checked = x ? e.checked : !!r),
      (e.defaultChecked = !!r),
      g != null &&
        typeof g != "function" &&
        typeof g != "symbol" &&
        typeof g != "boolean" &&
        (e.name = g);
  }
  function ro(e, t, n) {
    (t === "number" && Vl(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }
  function gs(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < n.length; u++) t["$" + n[u]] = !0;
      for (n = 0; n < e.length; n++)
        (u = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== u && (e[n].selected = u),
          u && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Zt(n), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === n) {
          (e[u].selected = !0), r && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Xd(e, t, n) {
    if (
      t != null &&
      ((t = "" + Zt(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Zt(n) : "";
  }
  function $d(e, t, n, r) {
    if (t == null) {
      if (r != null) {
        if (n != null) throw Error(i(92));
        if (Q(r)) {
          if (1 < r.length) throw Error(i(93));
          r = r[0];
        }
        n = r;
      }
      n == null && (n = ""), (t = n);
    }
    (n = Zt(t)),
      (e.defaultValue = n),
      (r = e.textContent),
      r === n && r !== "" && r !== null && (e.value = r);
  }
  function vs(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var tx = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Kd(e, t, n) {
    var r = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? r
        ? e.setProperty(t, "")
        : t === "float"
        ? (e.cssFloat = "")
        : (e[t] = "")
      : r
      ? e.setProperty(t, n)
      : typeof n != "number" || n === 0 || tx.has(t)
      ? t === "float"
        ? (e.cssFloat = n)
        : (e[t] = ("" + n).trim())
      : (e[t] = n + "px");
  }
  function Zd(e, t, n) {
    if (t != null && typeof t != "object") throw Error(i(62));
    if (((e = e.style), n != null)) {
      for (var r in n)
        !n.hasOwnProperty(r) ||
          (t != null && t.hasOwnProperty(r)) ||
          (r.indexOf("--") === 0
            ? e.setProperty(r, "")
            : r === "float"
            ? (e.cssFloat = "")
            : (e[r] = ""));
      for (var u in t)
        (r = t[u]), t.hasOwnProperty(u) && n[u] !== r && Kd(e, u, r);
    } else for (var d in t) t.hasOwnProperty(d) && Kd(e, d, t[d]);
  }
  function lo(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ax = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    nx =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Pl(e) {
    return nx.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var io = null;
  function uo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var xs = null,
    bs = null;
  function Jd(e) {
    var t = hs(e);
    if (t && (e = t.stateNode)) {
      var n = e[Mt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (so(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (t = n.name),
            n.type === "radio" && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Jt("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var u = r[Mt] || null;
                if (!u) throw Error(i(90));
                so(
                  r,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              (r = n[t]), r.form === e.form && Gd(r);
          }
          break e;
        case "textarea":
          Xd(e, n.value, n.defaultValue);
          break e;
        case "select":
          (t = n.value), t != null && gs(e, !!n.multiple, t, !1);
      }
    }
  }
  var oo = !1;
  function Id(e, t, n) {
    if (oo) return e(t, n);
    oo = !0;
    try {
      var r = e(t);
      return r;
    } finally {
      if (
        ((oo = !1),
        (xs !== null || bs !== null) &&
          (Ti(), xs && ((t = xs), (e = bs), (bs = xs = null), Jd(t), e)))
      )
        for (t = 0; t < e.length; t++) Jd(e[t]);
    }
  }
  function pr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = n[Mt] || null;
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(i(231, t, typeof n));
    return n;
  }
  var Ra = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    co = !1;
  if (Ra)
    try {
      var yr = {};
      Object.defineProperty(yr, "passive", {
        get: function () {
          co = !0;
        },
      }),
        window.addEventListener("test", yr, yr),
        window.removeEventListener("test", yr, yr);
    } catch {
      co = !1;
    }
  var tn = null,
    fo = null,
    Yl = null;
  function Wd() {
    if (Yl) return Yl;
    var e,
      t = fo,
      n = t.length,
      r,
      u = "value" in tn ? tn.value : tn.textContent,
      d = u.length;
    for (e = 0; e < n && t[e] === u[e]; e++);
    var g = n - e;
    for (r = 1; r <= g && t[n - r] === u[d - r]; r++);
    return (Yl = u.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Fl(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Gl() {
    return !0;
  }
  function eh() {
    return !1;
  }
  function Ut(e) {
    function t(n, r, u, d, g) {
      (this._reactName = n),
        (this._targetInst = u),
        (this.type = r),
        (this.nativeEvent = d),
        (this.target = g),
        (this.currentTarget = null);
      for (var x in e)
        e.hasOwnProperty(x) && ((n = e[x]), (this[x] = n ? n(d) : d[x]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? Gl
          : eh),
        (this.isPropagationStopped = eh),
        this
      );
    }
    return (
      v(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Gl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Gl));
        },
        persist: function () {},
        isPersistent: Gl,
      }),
      t
    );
  }
  var Dn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ql = Ut(Dn),
    gr = v({}, Dn, { view: 0, detail: 0 }),
    sx = Ut(gr),
    ho,
    mo,
    vr,
    Xl = v({}, gr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: yo,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== vr &&
              (vr && e.type === "mousemove"
                ? ((ho = e.screenX - vr.screenX), (mo = e.screenY - vr.screenY))
                : (mo = ho = 0),
              (vr = e)),
            ho);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : mo;
      },
    }),
    th = Ut(Xl),
    rx = v({}, Xl, { dataTransfer: 0 }),
    lx = Ut(rx),
    ix = v({}, gr, { relatedTarget: 0 }),
    po = Ut(ix),
    ux = v({}, Dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ox = Ut(ux),
    cx = v({}, Dn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    fx = Ut(cx),
    dx = v({}, Dn, { data: 0 }),
    ah = Ut(dx),
    hx = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    mx = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    px = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function yx(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = px[e])
      ? !!t[e]
      : !1;
  }
  function yo() {
    return yx;
  }
  var gx = v({}, gr, {
      key: function (e) {
        if (e.key) {
          var t = hx[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Fl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? mx[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: yo,
      charCode: function (e) {
        return e.type === "keypress" ? Fl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Fl(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    vx = Ut(gx),
    xx = v({}, Xl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    nh = Ut(xx),
    bx = v({}, gr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: yo,
    }),
    Sx = Ut(bx),
    wx = v({}, Dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Nx = Ut(wx),
    jx = v({}, Xl, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Ex = Ut(jx),
    Ax = v({}, Dn, { newState: 0, oldState: 0 }),
    Tx = Ut(Ax),
    Cx = [9, 13, 27, 32],
    go = Ra && "CompositionEvent" in window,
    xr = null;
  Ra && "documentMode" in document && (xr = document.documentMode);
  var Ox = Ra && "TextEvent" in window && !xr,
    sh = Ra && (!go || (xr && 8 < xr && 11 >= xr)),
    rh = " ",
    lh = !1;
  function ih(e, t) {
    switch (e) {
      case "keyup":
        return Cx.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function uh(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ss = !1;
  function Rx(e, t) {
    switch (e) {
      case "compositionend":
        return uh(t);
      case "keypress":
        return t.which !== 32 ? null : ((lh = !0), rh);
      case "textInput":
        return (e = t.data), e === rh && lh ? null : e;
      default:
        return null;
    }
  }
  function _x(e, t) {
    if (Ss)
      return e === "compositionend" || (!go && ih(e, t))
        ? ((e = Wd()), (Yl = fo = tn = null), (Ss = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return sh && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Dx = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function oh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Dx[e.type] : t === "textarea";
  }
  function ch(e, t, n, r) {
    xs ? (bs ? bs.push(r) : (bs = [r])) : (xs = r),
      (t = Mi(t, "onChange")),
      0 < t.length &&
        ((n = new Ql("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var br = null,
    Sr = null;
  function Mx(e) {
    Fp(e, 0);
  }
  function $l(e) {
    var t = mr(e);
    if (Gd(t)) return e;
  }
  function fh(e, t) {
    if (e === "change") return t;
  }
  var dh = !1;
  if (Ra) {
    var vo;
    if (Ra) {
      var xo = "oninput" in document;
      if (!xo) {
        var hh = document.createElement("div");
        hh.setAttribute("oninput", "return;"),
          (xo = typeof hh.oninput == "function");
      }
      vo = xo;
    } else vo = !1;
    dh = vo && (!document.documentMode || 9 < document.documentMode);
  }
  function mh() {
    br && (br.detachEvent("onpropertychange", ph), (Sr = br = null));
  }
  function ph(e) {
    if (e.propertyName === "value" && $l(Sr)) {
      var t = [];
      ch(t, Sr, e, uo(e)), Id(Mx, t);
    }
  }
  function Ux(e, t, n) {
    e === "focusin"
      ? (mh(), (br = t), (Sr = n), br.attachEvent("onpropertychange", ph))
      : e === "focusout" && mh();
  }
  function zx(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return $l(Sr);
  }
  function kx(e, t) {
    if (e === "click") return $l(t);
  }
  function Lx(e, t) {
    if (e === "input" || e === "change") return $l(t);
  }
  function Hx(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Bt = typeof Object.is == "function" ? Object.is : Hx;
  function wr(e, t) {
    if (Bt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var u = n[r];
      if (!us.call(t, u) || !Bt(e[u], t[u])) return !1;
    }
    return !0;
  }
  function yh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function gh(e, t) {
    var n = yh(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = yh(n);
    }
  }
  function vh(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? vh(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function xh(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Vl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Vl(e.document);
    }
    return t;
  }
  function bo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var qx = Ra && "documentMode" in document && 11 >= document.documentMode,
    ws = null,
    So = null,
    Nr = null,
    wo = !1;
  function bh(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    wo ||
      ws == null ||
      ws !== Vl(r) ||
      ((r = ws),
      "selectionStart" in r && bo(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Nr && wr(Nr, r)) ||
        ((Nr = r),
        (r = Mi(So, "onSelect")),
        0 < r.length &&
          ((t = new Ql("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = ws))));
  }
  function Mn(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Ns = {
      animationend: Mn("Animation", "AnimationEnd"),
      animationiteration: Mn("Animation", "AnimationIteration"),
      animationstart: Mn("Animation", "AnimationStart"),
      transitionrun: Mn("Transition", "TransitionRun"),
      transitionstart: Mn("Transition", "TransitionStart"),
      transitioncancel: Mn("Transition", "TransitionCancel"),
      transitionend: Mn("Transition", "TransitionEnd"),
    },
    No = {},
    Sh = {};
  Ra &&
    ((Sh = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ns.animationend.animation,
      delete Ns.animationiteration.animation,
      delete Ns.animationstart.animation),
    "TransitionEvent" in window || delete Ns.transitionend.transition);
  function Un(e) {
    if (No[e]) return No[e];
    if (!Ns[e]) return e;
    var t = Ns[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Sh) return (No[e] = t[n]);
    return e;
  }
  var wh = Un("animationend"),
    Nh = Un("animationiteration"),
    jh = Un("animationstart"),
    Bx = Un("transitionrun"),
    Vx = Un("transitionstart"),
    Px = Un("transitioncancel"),
    Eh = Un("transitionend"),
    Ah = new Map(),
    jo =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  jo.push("scrollEnd");
  function ca(e, t) {
    Ah.set(e, t), _n(t, [e]);
  }
  var Th = new WeakMap();
  function It(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Th.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: Yd(t) }), Th.set(e, t), t);
    }
    return { value: e, source: t, stack: Yd(t) };
  }
  var Wt = [],
    js = 0,
    Eo = 0;
  function Kl() {
    for (var e = js, t = (Eo = js = 0); t < e; ) {
      var n = Wt[t];
      Wt[t++] = null;
      var r = Wt[t];
      Wt[t++] = null;
      var u = Wt[t];
      Wt[t++] = null;
      var d = Wt[t];
      if (((Wt[t++] = null), r !== null && u !== null)) {
        var g = r.pending;
        g === null ? (u.next = u) : ((u.next = g.next), (g.next = u)),
          (r.pending = u);
      }
      d !== 0 && Ch(n, u, d);
    }
  }
  function Zl(e, t, n, r) {
    (Wt[js++] = e),
      (Wt[js++] = t),
      (Wt[js++] = n),
      (Wt[js++] = r),
      (Eo |= r),
      (e.lanes |= r),
      (e = e.alternate),
      e !== null && (e.lanes |= r);
  }
  function Ao(e, t, n, r) {
    return Zl(e, t, n, r), Jl(e);
  }
  function Es(e, t) {
    return Zl(e, null, null, t), Jl(e);
  }
  function Ch(e, t, n) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n);
    for (var u = !1, d = e.return; d !== null; )
      (d.childLanes |= n),
        (r = d.alternate),
        r !== null && (r.childLanes |= n),
        d.tag === 22 &&
          ((e = d.stateNode), e === null || e._visibility & 1 || (u = !0)),
        (e = d),
        (d = d.return);
    return e.tag === 3
      ? ((d = e.stateNode),
        u &&
          t !== null &&
          ((u = 31 - $e(n)),
          (e = d.hiddenUpdates),
          (r = e[u]),
          r === null ? (e[u] = [t]) : r.push(t),
          (t.lane = n | 536870912)),
        d)
      : null;
  }
  function Jl(e) {
    if (50 < $r) throw (($r = 0), (Dc = null), Error(i(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var As = {};
  function Yx(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Vt(e, t, n, r) {
    return new Yx(e, t, n, r);
  }
  function To(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function _a(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Vt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 65011712),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function Oh(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Il(e, t, n, r, u, d) {
    var g = 0;
    if (((r = e), typeof e == "function")) To(e) && (g = 1);
    else if (typeof e == "string")
      g = Gb(e, n, de.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case ne:
          return (e = Vt(31, n, t, u)), (e.elementType = ne), (e.lanes = d), e;
        case N:
          return zn(n.children, u, d, t);
        case R:
          (g = 8), (u |= 24);
          break;
        case C:
          return (
            (e = Vt(12, n, t, u | 2)), (e.elementType = C), (e.lanes = d), e
          );
        case Y:
          return (e = Vt(13, n, t, u)), (e.elementType = Y), (e.lanes = d), e;
        case _:
          return (e = Vt(19, n, t, u)), (e.elementType = _), (e.lanes = d), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case U:
              case V:
                g = 10;
                break e;
              case M:
                g = 9;
                break e;
              case H:
                g = 11;
                break e;
              case K:
                g = 14;
                break e;
              case ee:
                (g = 16), (r = null);
                break e;
            }
          (g = 29),
            (n = Error(i(130, e === null ? "null" : typeof e, ""))),
            (r = null);
      }
    return (
      (t = Vt(g, n, t, u)), (t.elementType = e), (t.type = r), (t.lanes = d), t
    );
  }
  function zn(e, t, n, r) {
    return (e = Vt(7, e, r, t)), (e.lanes = n), e;
  }
  function Co(e, t, n) {
    return (e = Vt(6, e, null, t)), (e.lanes = n), e;
  }
  function Oo(e, t, n) {
    return (
      (t = Vt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Ts = [],
    Cs = 0,
    Wl = null,
    ei = 0,
    ea = [],
    ta = 0,
    kn = null,
    Da = 1,
    Ma = "";
  function Ln(e, t) {
    (Ts[Cs++] = ei), (Ts[Cs++] = Wl), (Wl = e), (ei = t);
  }
  function Rh(e, t, n) {
    (ea[ta++] = Da), (ea[ta++] = Ma), (ea[ta++] = kn), (kn = e);
    var r = Da;
    e = Ma;
    var u = 32 - $e(r) - 1;
    (r &= ~(1 << u)), (n += 1);
    var d = 32 - $e(t) + u;
    if (30 < d) {
      var g = u - (u % 5);
      (d = (r & ((1 << g) - 1)).toString(32)),
        (r >>= g),
        (u -= g),
        (Da = (1 << (32 - $e(t) + u)) | (n << u) | r),
        (Ma = d + e);
    } else (Da = (1 << d) | (n << u) | r), (Ma = e);
  }
  function Ro(e) {
    e.return !== null && (Ln(e, 1), Rh(e, 1, 0));
  }
  function _o(e) {
    for (; e === Wl; )
      (Wl = Ts[--Cs]), (Ts[Cs] = null), (ei = Ts[--Cs]), (Ts[Cs] = null);
    for (; e === kn; )
      (kn = ea[--ta]),
        (ea[ta] = null),
        (Ma = ea[--ta]),
        (ea[ta] = null),
        (Da = ea[--ta]),
        (ea[ta] = null);
  }
  var Ot = null,
    We = null,
    ke = !1,
    Hn = null,
    xa = !1,
    Do = Error(i(519));
  function qn(e) {
    var t = Error(i(418, ""));
    throw (Ar(It(t, e)), Do);
  }
  function _h(e) {
    var t = e.stateNode,
      n = e.type,
      r = e.memoizedProps;
    switch (((t[Nt] = e), (t[Mt] = r), n)) {
      case "dialog":
        Re("cancel", t), Re("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Re("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Zr.length; n++) Re(Zr[n], t);
        break;
      case "source":
        Re("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Re("error", t), Re("load", t);
        break;
      case "details":
        Re("toggle", t);
        break;
      case "input":
        Re("invalid", t),
          Qd(
            t,
            r.value,
            r.defaultValue,
            r.checked,
            r.defaultChecked,
            r.type,
            r.name,
            !0
          ),
          Bl(t);
        break;
      case "select":
        Re("invalid", t);
        break;
      case "textarea":
        Re("invalid", t), $d(t, r.value, r.defaultValue, r.children), Bl(t);
    }
    (n = r.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      t.textContent === "" + n ||
      r.suppressHydrationWarning === !0 ||
      $p(t.textContent, n)
        ? (r.popover != null && (Re("beforetoggle", t), Re("toggle", t)),
          r.onScroll != null && Re("scroll", t),
          r.onScrollEnd != null && Re("scrollend", t),
          r.onClick != null && (t.onclick = Ui),
          (t = !0))
        : (t = !1),
      t || qn(e);
  }
  function Dh(e) {
    for (Ot = e.return; Ot; )
      switch (Ot.tag) {
        case 5:
        case 13:
          xa = !1;
          return;
        case 27:
        case 3:
          xa = !0;
          return;
        default:
          Ot = Ot.return;
      }
  }
  function jr(e) {
    if (e !== Ot) return !1;
    if (!ke) return Dh(e), (ke = !0), !1;
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || $c(e.type, e.memoizedProps))),
        (n = !n)),
      n && We && qn(e),
      Dh(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((n = e.data), n === "/$")) {
              if (t === 0) {
                We = da(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          e = e.nextSibling;
        }
        We = null;
      }
    } else
      t === 27
        ? ((t = We), vn(e.type) ? ((e = Ic), (Ic = null), (We = e)) : (We = t))
        : (We = Ot ? da(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Er() {
    (We = Ot = null), (ke = !1);
  }
  function Mh() {
    var e = Hn;
    return (
      e !== null &&
        (Lt === null ? (Lt = e) : Lt.push.apply(Lt, e), (Hn = null)),
      e
    );
  }
  function Ar(e) {
    Hn === null ? (Hn = [e]) : Hn.push(e);
  }
  var Mo = J(null),
    Bn = null,
    Ua = null;
  function an(e, t, n) {
    W(Mo, t._currentValue), (t._currentValue = n);
  }
  function za(e) {
    (e._currentValue = Mo.current), ue(Mo);
  }
  function Uo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function zo(e, t, n, r) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var d = u.dependencies;
      if (d !== null) {
        var g = u.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var x = d;
          d = u;
          for (var j = 0; j < t.length; j++)
            if (x.context === t[j]) {
              (d.lanes |= n),
                (x = d.alternate),
                x !== null && (x.lanes |= n),
                Uo(d.return, n, e),
                r || (g = null);
              break e;
            }
          d = x.next;
        }
      } else if (u.tag === 18) {
        if (((g = u.return), g === null)) throw Error(i(341));
        (g.lanes |= n),
          (d = g.alternate),
          d !== null && (d.lanes |= n),
          Uo(g, n, e),
          (g = null);
      } else g = u.child;
      if (g !== null) g.return = u;
      else
        for (g = u; g !== null; ) {
          if (g === e) {
            g = null;
            break;
          }
          if (((u = g.sibling), u !== null)) {
            (u.return = g.return), (g = u);
            break;
          }
          g = g.return;
        }
      u = g;
    }
  }
  function Tr(e, t, n, r) {
    e = null;
    for (var u = t, d = !1; u !== null; ) {
      if (!d) {
        if ((u.flags & 524288) !== 0) d = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var g = u.alternate;
        if (g === null) throw Error(i(387));
        if (((g = g.memoizedProps), g !== null)) {
          var x = u.type;
          Bt(u.pendingProps.value, g.value) ||
            (e !== null ? e.push(x) : (e = [x]));
        }
      } else if (u === gt.current) {
        if (((g = u.alternate), g === null)) throw Error(i(387));
        g.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (e !== null ? e.push(al) : (e = [al]));
      }
      u = u.return;
    }
    e !== null && zo(t, e, n, r), (t.flags |= 262144);
  }
  function ti(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Bt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Vn(e) {
    (Bn = e),
      (Ua = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function jt(e) {
    return Uh(Bn, e);
  }
  function ai(e, t) {
    return Bn === null && Vn(e), Uh(e, t);
  }
  function Uh(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), Ua === null)) {
      if (e === null) throw Error(i(308));
      (Ua = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else Ua = Ua.next = t;
    return n;
  }
  var Fx =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, r) {
                  e.push(r);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                });
            };
          },
    Gx = a.unstable_scheduleCallback,
    Qx = a.unstable_NormalPriority,
    ot = {
      $$typeof: V,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ko() {
    return { controller: new Fx(), data: new Map(), refCount: 0 };
  }
  function Cr(e) {
    e.refCount--,
      e.refCount === 0 &&
        Gx(Qx, function () {
          e.controller.abort();
        });
  }
  var Or = null,
    Lo = 0,
    Os = 0,
    Rs = null;
  function Xx(e, t) {
    if (Or === null) {
      var n = (Or = []);
      (Lo = 0),
        (Os = qc()),
        (Rs = {
          status: "pending",
          value: void 0,
          then: function (r) {
            n.push(r);
          },
        });
    }
    return Lo++, t.then(zh, zh), t;
  }
  function zh() {
    if (--Lo === 0 && Or !== null) {
      Rs !== null && (Rs.status = "fulfilled");
      var e = Or;
      (Or = null), (Os = 0), (Rs = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function $x(e, t) {
    var n = [],
      r = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          n.push(u);
        },
      };
    return (
      e.then(
        function () {
          (r.status = "fulfilled"), (r.value = t);
          for (var u = 0; u < n.length; u++) (0, n[u])(t);
        },
        function (u) {
          for (r.status = "rejected", r.reason = u, u = 0; u < n.length; u++)
            (0, n[u])(void 0);
        }
      ),
      r
    );
  }
  var kh = L.S;
  L.S = function (e, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      Xx(e, t),
      kh !== null && kh(e, t);
  };
  var Pn = J(null);
  function Ho() {
    var e = Pn.current;
    return e !== null ? e : Ke.pooledCache;
  }
  function ni(e, t) {
    t === null ? W(Pn, Pn.current) : W(Pn, t.pool);
  }
  function Lh() {
    var e = Ho();
    return e === null ? null : { parent: ot._currentValue, pool: e };
  }
  var Rr = Error(i(460)),
    Hh = Error(i(474)),
    si = Error(i(542)),
    qo = { then: function () {} };
  function qh(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function ri() {}
  function Bh(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(ri, ri), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Ph(e), e);
      default:
        if (typeof t.status == "string") t.then(ri, ri);
        else {
          if (((e = Ke), e !== null && 100 < e.shellSuspendCounter))
            throw Error(i(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (r) {
                if (t.status === "pending") {
                  var u = t;
                  (u.status = "fulfilled"), (u.value = r);
                }
              },
              function (r) {
                if (t.status === "pending") {
                  var u = t;
                  (u.status = "rejected"), (u.reason = r);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Ph(e), e);
        }
        throw ((_r = t), Rr);
    }
  }
  var _r = null;
  function Vh() {
    if (_r === null) throw Error(i(459));
    var e = _r;
    return (_r = null), e;
  }
  function Ph(e) {
    if (e === Rr || e === si) throw Error(i(483));
  }
  var nn = !1;
  function Bo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Vo(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function sn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function rn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (Be & 2) !== 0)) {
      var u = r.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (r.pending = t),
        (t = Jl(e)),
        Ch(e, null, n),
        t
      );
    }
    return Zl(e, r, t, n), Jl(e);
  }
  function Dr(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), zd(e, n);
    }
  }
  function Po(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var u = null,
        d = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var g = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          d === null ? (u = d = g) : (d = d.next = g), (n = n.next);
        } while (n !== null);
        d === null ? (u = d = t) : (d = d.next = t);
      } else u = d = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: d,
        shared: r.shared,
        callbacks: r.callbacks,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  var Yo = !1;
  function Mr() {
    if (Yo) {
      var e = Rs;
      if (e !== null) throw e;
    }
  }
  function Ur(e, t, n, r) {
    Yo = !1;
    var u = e.updateQueue;
    nn = !1;
    var d = u.firstBaseUpdate,
      g = u.lastBaseUpdate,
      x = u.shared.pending;
    if (x !== null) {
      u.shared.pending = null;
      var j = x,
        k = j.next;
      (j.next = null), g === null ? (d = k) : (g.next = k), (g = j);
      var G = e.alternate;
      G !== null &&
        ((G = G.updateQueue),
        (x = G.lastBaseUpdate),
        x !== g &&
          (x === null ? (G.firstBaseUpdate = k) : (x.next = k),
          (G.lastBaseUpdate = j)));
    }
    if (d !== null) {
      var Z = u.baseState;
      (g = 0), (G = k = j = null), (x = d);
      do {
        var B = x.lane & -536870913,
          P = B !== x.lane;
        if (P ? (Ue & B) === B : (r & B) === B) {
          B !== 0 && B === Os && (Yo = !0),
            G !== null &&
              (G = G.next =
                {
                  lane: 0,
                  tag: x.tag,
                  payload: x.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var xe = e,
              ge = x;
            B = t;
            var Fe = n;
            switch (ge.tag) {
              case 1:
                if (((xe = ge.payload), typeof xe == "function")) {
                  Z = xe.call(Fe, Z, B);
                  break e;
                }
                Z = xe;
                break e;
              case 3:
                xe.flags = (xe.flags & -65537) | 128;
              case 0:
                if (
                  ((xe = ge.payload),
                  (B = typeof xe == "function" ? xe.call(Fe, Z, B) : xe),
                  B == null)
                )
                  break e;
                Z = v({}, Z, B);
                break e;
              case 2:
                nn = !0;
            }
          }
          (B = x.callback),
            B !== null &&
              ((e.flags |= 64),
              P && (e.flags |= 8192),
              (P = u.callbacks),
              P === null ? (u.callbacks = [B]) : P.push(B));
        } else
          (P = {
            lane: B,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null,
          }),
            G === null ? ((k = G = P), (j = Z)) : (G = G.next = P),
            (g |= B);
        if (((x = x.next), x === null)) {
          if (((x = u.shared.pending), x === null)) break;
          (P = x),
            (x = P.next),
            (P.next = null),
            (u.lastBaseUpdate = P),
            (u.shared.pending = null);
        }
      } while (!0);
      G === null && (j = Z),
        (u.baseState = j),
        (u.firstBaseUpdate = k),
        (u.lastBaseUpdate = G),
        d === null && (u.shared.lanes = 0),
        (mn |= g),
        (e.lanes = g),
        (e.memoizedState = Z);
    }
  }
  function Yh(e, t) {
    if (typeof e != "function") throw Error(i(191, e));
    e.call(t);
  }
  function Fh(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) Yh(n[e], t);
  }
  var _s = J(null),
    li = J(0);
  function Gh(e, t) {
    (e = Pa), W(li, e), W(_s, t), (Pa = e | t.baseLanes);
  }
  function Fo() {
    W(li, Pa), W(_s, _s.current);
  }
  function Go() {
    (Pa = li.current), ue(_s), ue(li);
  }
  var ln = 0,
    Ee = null,
    Pe = null,
    it = null,
    ii = !1,
    Ds = !1,
    Yn = !1,
    ui = 0,
    zr = 0,
    Ms = null,
    Kx = 0;
  function nt() {
    throw Error(i(321));
  }
  function Qo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Bt(e[n], t[n])) return !1;
    return !0;
  }
  function Xo(e, t, n, r, u, d) {
    return (
      (ln = d),
      (Ee = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (L.H = e === null || e.memoizedState === null ? Cm : Om),
      (Yn = !1),
      (d = n(r, u)),
      (Yn = !1),
      Ds && (d = Xh(t, n, r, u)),
      Qh(e),
      d
    );
  }
  function Qh(e) {
    L.H = mi;
    var t = Pe !== null && Pe.next !== null;
    if (((ln = 0), (it = Pe = Ee = null), (ii = !1), (zr = 0), (Ms = null), t))
      throw Error(i(300));
    e === null ||
      mt ||
      ((e = e.dependencies), e !== null && ti(e) && (mt = !0));
  }
  function Xh(e, t, n, r) {
    Ee = e;
    var u = 0;
    do {
      if ((Ds && (Ms = null), (zr = 0), (Ds = !1), 25 <= u))
        throw Error(i(301));
      if (((u += 1), (it = Pe = null), e.updateQueue != null)) {
        var d = e.updateQueue;
        (d.lastEffect = null),
          (d.events = null),
          (d.stores = null),
          d.memoCache != null && (d.memoCache.index = 0);
      }
      (L.H = ab), (d = t(n, r));
    } while (Ds);
    return d;
  }
  function Zx() {
    var e = L.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? kr(t) : t),
      (e = e.useState()[0]),
      (Pe !== null ? Pe.memoizedState : null) !== e && (Ee.flags |= 1024),
      t
    );
  }
  function $o() {
    var e = ui !== 0;
    return (ui = 0), e;
  }
  function Ko(e, t, n) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
  }
  function Zo(e) {
    if (ii) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      ii = !1;
    }
    (ln = 0), (it = Pe = Ee = null), (Ds = !1), (zr = ui = 0), (Ms = null);
  }
  function zt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return it === null ? (Ee.memoizedState = it = e) : (it = it.next = e), it;
  }
  function ut() {
    if (Pe === null) {
      var e = Ee.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Pe.next;
    var t = it === null ? Ee.memoizedState : it.next;
    if (t !== null) (it = t), (Pe = e);
    else {
      if (e === null)
        throw Ee.alternate === null ? Error(i(467)) : Error(i(310));
      (Pe = e),
        (e = {
          memoizedState: Pe.memoizedState,
          baseState: Pe.baseState,
          baseQueue: Pe.baseQueue,
          queue: Pe.queue,
          next: null,
        }),
        it === null ? (Ee.memoizedState = it = e) : (it = it.next = e);
    }
    return it;
  }
  function Jo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function kr(e) {
    var t = zr;
    return (
      (zr += 1),
      Ms === null && (Ms = []),
      (e = Bh(Ms, e, t)),
      (t = Ee),
      (it === null ? t.memoizedState : it.next) === null &&
        ((t = t.alternate),
        (L.H = t === null || t.memoizedState === null ? Cm : Om)),
      e
    );
  }
  function oi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return kr(e);
      if (e.$$typeof === V) return jt(e);
    }
    throw Error(i(438, String(e)));
  }
  function Io(e) {
    var t = null,
      n = Ee.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var r = Ee.alternate;
      r !== null &&
        ((r = r.updateQueue),
        r !== null &&
          ((r = r.memoCache),
          r != null &&
            (t = {
              data: r.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = Jo()), (Ee.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ye;
    return t.index++, n;
  }
  function ka(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ci(e) {
    var t = ut();
    return Wo(t, Pe, e);
  }
  function Wo(e, t, n) {
    var r = e.queue;
    if (r === null) throw Error(i(311));
    r.lastRenderedReducer = n;
    var u = e.baseQueue,
      d = r.pending;
    if (d !== null) {
      if (u !== null) {
        var g = u.next;
        (u.next = d.next), (d.next = g);
      }
      (t.baseQueue = u = d), (r.pending = null);
    }
    if (((d = e.baseState), u === null)) e.memoizedState = d;
    else {
      t = u.next;
      var x = (g = null),
        j = null,
        k = t,
        G = !1;
      do {
        var Z = k.lane & -536870913;
        if (Z !== k.lane ? (Ue & Z) === Z : (ln & Z) === Z) {
          var B = k.revertLane;
          if (B === 0)
            j !== null &&
              (j = j.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: k.action,
                  hasEagerState: k.hasEagerState,
                  eagerState: k.eagerState,
                  next: null,
                }),
              Z === Os && (G = !0);
          else if ((ln & B) === B) {
            (k = k.next), B === Os && (G = !0);
            continue;
          } else
            (Z = {
              lane: 0,
              revertLane: k.revertLane,
              action: k.action,
              hasEagerState: k.hasEagerState,
              eagerState: k.eagerState,
              next: null,
            }),
              j === null ? ((x = j = Z), (g = d)) : (j = j.next = Z),
              (Ee.lanes |= B),
              (mn |= B);
          (Z = k.action),
            Yn && n(d, Z),
            (d = k.hasEagerState ? k.eagerState : n(d, Z));
        } else
          (B = {
            lane: Z,
            revertLane: k.revertLane,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null,
          }),
            j === null ? ((x = j = B), (g = d)) : (j = j.next = B),
            (Ee.lanes |= Z),
            (mn |= Z);
        k = k.next;
      } while (k !== null && k !== t);
      if (
        (j === null ? (g = d) : (j.next = x),
        !Bt(d, e.memoizedState) && ((mt = !0), G && ((n = Rs), n !== null)))
      )
        throw n;
      (e.memoizedState = d),
        (e.baseState = g),
        (e.baseQueue = j),
        (r.lastRenderedState = d);
    }
    return u === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
  }
  function ec(e) {
    var t = ut(),
      n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      u = n.pending,
      d = t.memoizedState;
    if (u !== null) {
      n.pending = null;
      var g = (u = u.next);
      do (d = e(d, g.action)), (g = g.next);
      while (g !== u);
      Bt(d, t.memoizedState) || (mt = !0),
        (t.memoizedState = d),
        t.baseQueue === null && (t.baseState = d),
        (n.lastRenderedState = d);
    }
    return [d, r];
  }
  function $h(e, t, n) {
    var r = Ee,
      u = ut(),
      d = ke;
    if (d) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else n = t();
    var g = !Bt((Pe || u).memoizedState, n);
    g && ((u.memoizedState = n), (mt = !0)), (u = u.queue);
    var x = Jh.bind(null, r, u, e);
    if (
      (Lr(2048, 8, x, [e]),
      u.getSnapshot !== t || g || (it !== null && it.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        Us(9, fi(), Zh.bind(null, r, u, n, t), null),
        Ke === null)
      )
        throw Error(i(349));
      d || (ln & 124) !== 0 || Kh(r, t, n);
    }
    return n;
  }
  function Kh(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ee.updateQueue),
      t === null
        ? ((t = Jo()), (Ee.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Zh(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Ih(t) && Wh(e);
  }
  function Jh(e, t, n) {
    return n(function () {
      Ih(t) && Wh(e);
    });
  }
  function Ih(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Bt(e, n);
    } catch {
      return !0;
    }
  }
  function Wh(e) {
    var t = Es(e, 2);
    t !== null && Qt(t, e, 2);
  }
  function tc(e) {
    var t = zt();
    if (typeof e == "function") {
      var n = e;
      if (((e = n()), Yn)) {
        De(!0);
        try {
          n();
        } finally {
          De(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ka,
        lastRenderedState: e,
      }),
      t
    );
  }
  function em(e, t, n, r) {
    return (e.baseState = n), Wo(e, Pe, typeof r == "function" ? r : ka);
  }
  function Jx(e, t, n, r, u) {
    if (hi(e)) throw Error(i(485));
    if (((e = t.action), e !== null)) {
      var d = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (g) {
          d.listeners.push(g);
        },
      };
      L.T !== null ? n(!0) : (d.isTransition = !1),
        r(d),
        (n = t.pending),
        n === null
          ? ((d.next = t.pending = d), tm(t, d))
          : ((d.next = n.next), (t.pending = n.next = d));
    }
  }
  function tm(e, t) {
    var n = t.action,
      r = t.payload,
      u = e.state;
    if (t.isTransition) {
      var d = L.T,
        g = {};
      L.T = g;
      try {
        var x = n(u, r),
          j = L.S;
        j !== null && j(g, x), am(e, t, x);
      } catch (k) {
        ac(e, t, k);
      } finally {
        L.T = d;
      }
    } else
      try {
        (d = n(u, r)), am(e, t, d);
      } catch (k) {
        ac(e, t, k);
      }
  }
  function am(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (r) {
            nm(e, t, r);
          },
          function (r) {
            return ac(e, t, r);
          }
        )
      : nm(e, t, n);
  }
  function nm(e, t, n) {
    (t.status = "fulfilled"),
      (t.value = n),
      sm(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), tm(e, n)));
  }
  function ac(e, t, n) {
    var r = e.pending;
    if (((e.pending = null), r !== null)) {
      r = r.next;
      do (t.status = "rejected"), (t.reason = n), sm(t), (t = t.next);
      while (t !== r);
    }
    e.action = null;
  }
  function sm(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function rm(e, t) {
    return t;
  }
  function lm(e, t) {
    if (ke) {
      var n = Ke.formState;
      if (n !== null) {
        e: {
          var r = Ee;
          if (ke) {
            if (We) {
              t: {
                for (var u = We, d = xa; u.nodeType !== 8; ) {
                  if (!d) {
                    u = null;
                    break t;
                  }
                  if (((u = da(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                (d = u.data), (u = d === "F!" || d === "F" ? u : null);
              }
              if (u) {
                (We = da(u.nextSibling)), (r = u.data === "F!");
                break e;
              }
            }
            qn(r);
          }
          r = !1;
        }
        r && (t = n[0]);
      }
    }
    return (
      (n = zt()),
      (n.memoizedState = n.baseState = t),
      (r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: rm,
        lastRenderedState: t,
      }),
      (n.queue = r),
      (n = Em.bind(null, Ee, r)),
      (r.dispatch = n),
      (r = tc(!1)),
      (d = ic.bind(null, Ee, !1, r.queue)),
      (r = zt()),
      (u = { state: t, dispatch: null, action: e, pending: null }),
      (r.queue = u),
      (n = Jx.bind(null, Ee, u, d, n)),
      (u.dispatch = n),
      (r.memoizedState = e),
      [t, n, !1]
    );
  }
  function im(e) {
    var t = ut();
    return um(t, Pe, e);
  }
  function um(e, t, n) {
    if (
      ((t = Wo(e, t, rm)[0]),
      (e = ci(ka)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var r = kr(t);
      } catch (g) {
        throw g === Rr ? si : g;
      }
    else r = t;
    t = ut();
    var u = t.queue,
      d = u.dispatch;
    return (
      n !== t.memoizedState &&
        ((Ee.flags |= 2048), Us(9, fi(), Ix.bind(null, u, n), null)),
      [r, d, e]
    );
  }
  function Ix(e, t) {
    e.action = t;
  }
  function om(e) {
    var t = ut(),
      n = Pe;
    if (n !== null) return um(t, n, e);
    ut(), (t = t.memoizedState), (n = ut());
    var r = n.queue.dispatch;
    return (n.memoizedState = e), [t, r, !1];
  }
  function Us(e, t, n, r) {
    return (
      (e = { tag: e, create: n, deps: r, inst: t, next: null }),
      (t = Ee.updateQueue),
      t === null && ((t = Jo()), (Ee.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
      e
    );
  }
  function fi() {
    return { destroy: void 0, resource: void 0 };
  }
  function cm() {
    return ut().memoizedState;
  }
  function di(e, t, n, r) {
    var u = zt();
    (r = r === void 0 ? null : r),
      (Ee.flags |= e),
      (u.memoizedState = Us(1 | t, fi(), n, r));
  }
  function Lr(e, t, n, r) {
    var u = ut();
    r = r === void 0 ? null : r;
    var d = u.memoizedState.inst;
    Pe !== null && r !== null && Qo(r, Pe.memoizedState.deps)
      ? (u.memoizedState = Us(t, d, n, r))
      : ((Ee.flags |= e), (u.memoizedState = Us(1 | t, d, n, r)));
  }
  function fm(e, t) {
    di(8390656, 8, e, t);
  }
  function dm(e, t) {
    Lr(2048, 8, e, t);
  }
  function hm(e, t) {
    return Lr(4, 2, e, t);
  }
  function mm(e, t) {
    return Lr(4, 4, e, t);
  }
  function pm(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function () {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function ym(e, t, n) {
    (n = n != null ? n.concat([e]) : null), Lr(4, 4, pm.bind(null, t, e), n);
  }
  function nc() {}
  function gm(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return t !== null && Qo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function vm(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    if (t !== null && Qo(t, r[1])) return r[0];
    if (((r = e()), Yn)) {
      De(!0);
      try {
        e();
      } finally {
        De(!1);
      }
    }
    return (n.memoizedState = [r, t]), r;
  }
  function sc(e, t, n) {
    return n === void 0 || (ln & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = Sp()), (Ee.lanes |= e), (mn |= e), n);
  }
  function xm(e, t, n, r) {
    return Bt(n, t)
      ? n
      : _s.current !== null
      ? ((e = sc(e, n, r)), Bt(e, t) || (mt = !0), e)
      : (ln & 42) === 0
      ? ((mt = !0), (e.memoizedState = n))
      : ((e = Sp()), (Ee.lanes |= e), (mn |= e), t);
  }
  function bm(e, t, n, r, u) {
    var d = I.p;
    I.p = d !== 0 && 8 > d ? d : 8;
    var g = L.T,
      x = {};
    (L.T = x), ic(e, !1, t, n);
    try {
      var j = u(),
        k = L.S;
      if (
        (k !== null && k(x, j),
        j !== null && typeof j == "object" && typeof j.then == "function")
      ) {
        var G = $x(j, r);
        Hr(e, t, G, Gt(e));
      } else Hr(e, t, r, Gt(e));
    } catch (Z) {
      Hr(e, t, { then: function () {}, status: "rejected", reason: Z }, Gt());
    } finally {
      (I.p = d), (L.T = g);
    }
  }
  function Wx() {}
  function rc(e, t, n, r) {
    if (e.tag !== 5) throw Error(i(476));
    var u = Sm(e).queue;
    bm(
      e,
      u,
      t,
      re,
      n === null
        ? Wx
        : function () {
            return wm(e), n(r);
          }
    );
  }
  function Sm(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: re,
      baseState: re,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ka,
        lastRenderedState: re,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ka,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function wm(e) {
    var t = Sm(e).next.queue;
    Hr(e, t, {}, Gt());
  }
  function lc() {
    return jt(al);
  }
  function Nm() {
    return ut().memoizedState;
  }
  function jm() {
    return ut().memoizedState;
  }
  function eb(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Gt();
          e = sn(n);
          var r = rn(t, e, n);
          r !== null && (Qt(r, t, n), Dr(r, t, n)),
            (t = { cache: ko() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function tb(e, t, n) {
    var r = Gt();
    (n = {
      lane: r,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      hi(e)
        ? Am(t, n)
        : ((n = Ao(e, t, n, r)), n !== null && (Qt(n, e, r), Tm(n, t, r)));
  }
  function Em(e, t, n) {
    var r = Gt();
    Hr(e, t, n, r);
  }
  function Hr(e, t, n, r) {
    var u = {
      lane: r,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (hi(e)) Am(t, u);
    else {
      var d = e.alternate;
      if (
        e.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = t.lastRenderedReducer), d !== null)
      )
        try {
          var g = t.lastRenderedState,
            x = d(g, n);
          if (((u.hasEagerState = !0), (u.eagerState = x), Bt(x, g)))
            return Zl(e, t, u, 0), Ke === null && Kl(), !1;
        } catch {
        } finally {
        }
      if (((n = Ao(e, t, u, r)), n !== null))
        return Qt(n, e, r), Tm(n, t, r), !0;
    }
    return !1;
  }
  function ic(e, t, n, r) {
    if (
      ((r = {
        lane: 2,
        revertLane: qc(),
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      hi(e))
    ) {
      if (t) throw Error(i(479));
    } else (t = Ao(e, n, r, 2)), t !== null && Qt(t, e, 2);
  }
  function hi(e) {
    var t = e.alternate;
    return e === Ee || (t !== null && t === Ee);
  }
  function Am(e, t) {
    Ds = ii = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Tm(e, t, n) {
    if ((n & 4194048) !== 0) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), zd(e, n);
    }
  }
  var mi = {
      readContext: jt,
      use: oi,
      useCallback: nt,
      useContext: nt,
      useEffect: nt,
      useImperativeHandle: nt,
      useLayoutEffect: nt,
      useInsertionEffect: nt,
      useMemo: nt,
      useReducer: nt,
      useRef: nt,
      useState: nt,
      useDebugValue: nt,
      useDeferredValue: nt,
      useTransition: nt,
      useSyncExternalStore: nt,
      useId: nt,
      useHostTransitionStatus: nt,
      useFormState: nt,
      useActionState: nt,
      useOptimistic: nt,
      useMemoCache: nt,
      useCacheRefresh: nt,
    },
    Cm = {
      readContext: jt,
      use: oi,
      useCallback: function (e, t) {
        return (zt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: jt,
      useEffect: fm,
      useImperativeHandle: function (e, t, n) {
        (n = n != null ? n.concat([e]) : null),
          di(4194308, 4, pm.bind(null, t, e), n);
      },
      useLayoutEffect: function (e, t) {
        return di(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        di(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = zt();
        t = t === void 0 ? null : t;
        var r = e();
        if (Yn) {
          De(!0);
          try {
            e();
          } finally {
            De(!1);
          }
        }
        return (n.memoizedState = [r, t]), r;
      },
      useReducer: function (e, t, n) {
        var r = zt();
        if (n !== void 0) {
          var u = n(t);
          if (Yn) {
            De(!0);
            try {
              n(t);
            } finally {
              De(!1);
            }
          }
        } else u = t;
        return (
          (r.memoizedState = r.baseState = u),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: u,
          }),
          (r.queue = e),
          (e = e.dispatch = tb.bind(null, Ee, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = zt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = tc(e);
        var t = e.queue,
          n = Em.bind(null, Ee, t);
        return (t.dispatch = n), [e.memoizedState, n];
      },
      useDebugValue: nc,
      useDeferredValue: function (e, t) {
        var n = zt();
        return sc(n, e, t);
      },
      useTransition: function () {
        var e = tc(!1);
        return (
          (e = bm.bind(null, Ee, e.queue, !0, !1)),
          (zt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var r = Ee,
          u = zt();
        if (ke) {
          if (n === void 0) throw Error(i(407));
          n = n();
        } else {
          if (((n = t()), Ke === null)) throw Error(i(349));
          (Ue & 124) !== 0 || Kh(r, t, n);
        }
        u.memoizedState = n;
        var d = { value: n, getSnapshot: t };
        return (
          (u.queue = d),
          fm(Jh.bind(null, r, d, e), [e]),
          (r.flags |= 2048),
          Us(9, fi(), Zh.bind(null, r, d, n, t), null),
          n
        );
      },
      useId: function () {
        var e = zt(),
          t = Ke.identifierPrefix;
        if (ke) {
          var n = Ma,
            r = Da;
          (n = (r & ~(1 << (32 - $e(r) - 1))).toString(32) + n),
            (t = "«" + t + "R" + n),
            (n = ui++),
            0 < n && (t += "H" + n.toString(32)),
            (t += "»");
        } else (n = Kx++), (t = "«" + t + "r" + n.toString(32) + "»");
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: lc,
      useFormState: lm,
      useActionState: lm,
      useOptimistic: function (e) {
        var t = zt();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = n),
          (t = ic.bind(null, Ee, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Io,
      useCacheRefresh: function () {
        return (zt().memoizedState = eb.bind(null, Ee));
      },
    },
    Om = {
      readContext: jt,
      use: oi,
      useCallback: gm,
      useContext: jt,
      useEffect: dm,
      useImperativeHandle: ym,
      useInsertionEffect: hm,
      useLayoutEffect: mm,
      useMemo: vm,
      useReducer: ci,
      useRef: cm,
      useState: function () {
        return ci(ka);
      },
      useDebugValue: nc,
      useDeferredValue: function (e, t) {
        var n = ut();
        return xm(n, Pe.memoizedState, e, t);
      },
      useTransition: function () {
        var e = ci(ka)[0],
          t = ut().memoizedState;
        return [typeof e == "boolean" ? e : kr(e), t];
      },
      useSyncExternalStore: $h,
      useId: Nm,
      useHostTransitionStatus: lc,
      useFormState: im,
      useActionState: im,
      useOptimistic: function (e, t) {
        var n = ut();
        return em(n, Pe, e, t);
      },
      useMemoCache: Io,
      useCacheRefresh: jm,
    },
    ab = {
      readContext: jt,
      use: oi,
      useCallback: gm,
      useContext: jt,
      useEffect: dm,
      useImperativeHandle: ym,
      useInsertionEffect: hm,
      useLayoutEffect: mm,
      useMemo: vm,
      useReducer: ec,
      useRef: cm,
      useState: function () {
        return ec(ka);
      },
      useDebugValue: nc,
      useDeferredValue: function (e, t) {
        var n = ut();
        return Pe === null ? sc(n, e, t) : xm(n, Pe.memoizedState, e, t);
      },
      useTransition: function () {
        var e = ec(ka)[0],
          t = ut().memoizedState;
        return [typeof e == "boolean" ? e : kr(e), t];
      },
      useSyncExternalStore: $h,
      useId: Nm,
      useHostTransitionStatus: lc,
      useFormState: om,
      useActionState: om,
      useOptimistic: function (e, t) {
        var n = ut();
        return Pe !== null
          ? em(n, Pe, e, t)
          : ((n.baseState = e), [e, n.queue.dispatch]);
      },
      useMemoCache: Io,
      useCacheRefresh: jm,
    },
    zs = null,
    qr = 0;
  function pi(e) {
    var t = qr;
    return (qr += 1), zs === null && (zs = []), Bh(zs, e, t);
  }
  function Br(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function yi(e, t) {
    throw t.$$typeof === S
      ? Error(i(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          i(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function Rm(e) {
    var t = e._init;
    return t(e._payload);
  }
  function _m(e) {
    function t(D, T) {
      if (e) {
        var z = D.deletions;
        z === null ? ((D.deletions = [T]), (D.flags |= 16)) : z.push(T);
      }
    }
    function n(D, T) {
      if (!e) return null;
      for (; T !== null; ) t(D, T), (T = T.sibling);
      return null;
    }
    function r(D) {
      for (var T = new Map(); D !== null; )
        D.key !== null ? T.set(D.key, D) : T.set(D.index, D), (D = D.sibling);
      return T;
    }
    function u(D, T) {
      return (D = _a(D, T)), (D.index = 0), (D.sibling = null), D;
    }
    function d(D, T, z) {
      return (
        (D.index = z),
        e
          ? ((z = D.alternate),
            z !== null
              ? ((z = z.index), z < T ? ((D.flags |= 67108866), T) : z)
              : ((D.flags |= 67108866), T))
          : ((D.flags |= 1048576), T)
      );
    }
    function g(D) {
      return e && D.alternate === null && (D.flags |= 67108866), D;
    }
    function x(D, T, z, $) {
      return T === null || T.tag !== 6
        ? ((T = Co(z, D.mode, $)), (T.return = D), T)
        : ((T = u(T, z)), (T.return = D), T);
    }
    function j(D, T, z, $) {
      var oe = z.type;
      return oe === N
        ? G(D, T, z.props.children, $, z.key)
        : T !== null &&
          (T.elementType === oe ||
            (typeof oe == "object" &&
              oe !== null &&
              oe.$$typeof === ee &&
              Rm(oe) === T.type))
        ? ((T = u(T, z.props)), Br(T, z), (T.return = D), T)
        : ((T = Il(z.type, z.key, z.props, null, D.mode, $)),
          Br(T, z),
          (T.return = D),
          T);
    }
    function k(D, T, z, $) {
      return T === null ||
        T.tag !== 4 ||
        T.stateNode.containerInfo !== z.containerInfo ||
        T.stateNode.implementation !== z.implementation
        ? ((T = Oo(z, D.mode, $)), (T.return = D), T)
        : ((T = u(T, z.children || [])), (T.return = D), T);
    }
    function G(D, T, z, $, oe) {
      return T === null || T.tag !== 7
        ? ((T = zn(z, D.mode, $, oe)), (T.return = D), T)
        : ((T = u(T, z)), (T.return = D), T);
    }
    function Z(D, T, z) {
      if (
        (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
      )
        return (T = Co("" + T, D.mode, z)), (T.return = D), T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case w:
            return (
              (z = Il(T.type, T.key, T.props, null, D.mode, z)),
              Br(z, T),
              (z.return = D),
              z
            );
          case O:
            return (T = Oo(T, D.mode, z)), (T.return = D), T;
          case ee:
            var $ = T._init;
            return (T = $(T._payload)), Z(D, T, z);
        }
        if (Q(T) || fe(T))
          return (T = zn(T, D.mode, z, null)), (T.return = D), T;
        if (typeof T.then == "function") return Z(D, pi(T), z);
        if (T.$$typeof === V) return Z(D, ai(D, T), z);
        yi(D, T);
      }
      return null;
    }
    function B(D, T, z, $) {
      var oe = T !== null ? T.key : null;
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return oe !== null ? null : x(D, T, "" + z, $);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case w:
            return z.key === oe ? j(D, T, z, $) : null;
          case O:
            return z.key === oe ? k(D, T, z, $) : null;
          case ee:
            return (oe = z._init), (z = oe(z._payload)), B(D, T, z, $);
        }
        if (Q(z) || fe(z)) return oe !== null ? null : G(D, T, z, $, null);
        if (typeof z.then == "function") return B(D, T, pi(z), $);
        if (z.$$typeof === V) return B(D, T, ai(D, z), $);
        yi(D, z);
      }
      return null;
    }
    function P(D, T, z, $, oe) {
      if (
        (typeof $ == "string" && $ !== "") ||
        typeof $ == "number" ||
        typeof $ == "bigint"
      )
        return (D = D.get(z) || null), x(T, D, "" + $, oe);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case w:
            return (
              (D = D.get($.key === null ? z : $.key) || null), j(T, D, $, oe)
            );
          case O:
            return (
              (D = D.get($.key === null ? z : $.key) || null), k(T, D, $, oe)
            );
          case ee:
            var Ae = $._init;
            return ($ = Ae($._payload)), P(D, T, z, $, oe);
        }
        if (Q($) || fe($)) return (D = D.get(z) || null), G(T, D, $, oe, null);
        if (typeof $.then == "function") return P(D, T, z, pi($), oe);
        if ($.$$typeof === V) return P(D, T, z, ai(T, $), oe);
        yi(T, $);
      }
      return null;
    }
    function xe(D, T, z, $) {
      for (
        var oe = null, Ae = null, he = T, ve = (T = 0), yt = null;
        he !== null && ve < z.length;
        ve++
      ) {
        he.index > ve ? ((yt = he), (he = null)) : (yt = he.sibling);
        var ze = B(D, he, z[ve], $);
        if (ze === null) {
          he === null && (he = yt);
          break;
        }
        e && he && ze.alternate === null && t(D, he),
          (T = d(ze, T, ve)),
          Ae === null ? (oe = ze) : (Ae.sibling = ze),
          (Ae = ze),
          (he = yt);
      }
      if (ve === z.length) return n(D, he), ke && Ln(D, ve), oe;
      if (he === null) {
        for (; ve < z.length; ve++)
          (he = Z(D, z[ve], $)),
            he !== null &&
              ((T = d(he, T, ve)),
              Ae === null ? (oe = he) : (Ae.sibling = he),
              (Ae = he));
        return ke && Ln(D, ve), oe;
      }
      for (he = r(he); ve < z.length; ve++)
        (yt = P(he, D, ve, z[ve], $)),
          yt !== null &&
            (e &&
              yt.alternate !== null &&
              he.delete(yt.key === null ? ve : yt.key),
            (T = d(yt, T, ve)),
            Ae === null ? (oe = yt) : (Ae.sibling = yt),
            (Ae = yt));
      return (
        e &&
          he.forEach(function (Nn) {
            return t(D, Nn);
          }),
        ke && Ln(D, ve),
        oe
      );
    }
    function ge(D, T, z, $) {
      if (z == null) throw Error(i(151));
      for (
        var oe = null,
          Ae = null,
          he = T,
          ve = (T = 0),
          yt = null,
          ze = z.next();
        he !== null && !ze.done;
        ve++, ze = z.next()
      ) {
        he.index > ve ? ((yt = he), (he = null)) : (yt = he.sibling);
        var Nn = B(D, he, ze.value, $);
        if (Nn === null) {
          he === null && (he = yt);
          break;
        }
        e && he && Nn.alternate === null && t(D, he),
          (T = d(Nn, T, ve)),
          Ae === null ? (oe = Nn) : (Ae.sibling = Nn),
          (Ae = Nn),
          (he = yt);
      }
      if (ze.done) return n(D, he), ke && Ln(D, ve), oe;
      if (he === null) {
        for (; !ze.done; ve++, ze = z.next())
          (ze = Z(D, ze.value, $)),
            ze !== null &&
              ((T = d(ze, T, ve)),
              Ae === null ? (oe = ze) : (Ae.sibling = ze),
              (Ae = ze));
        return ke && Ln(D, ve), oe;
      }
      for (he = r(he); !ze.done; ve++, ze = z.next())
        (ze = P(he, D, ve, ze.value, $)),
          ze !== null &&
            (e &&
              ze.alternate !== null &&
              he.delete(ze.key === null ? ve : ze.key),
            (T = d(ze, T, ve)),
            Ae === null ? (oe = ze) : (Ae.sibling = ze),
            (Ae = ze));
      return (
        e &&
          he.forEach(function (n1) {
            return t(D, n1);
          }),
        ke && Ln(D, ve),
        oe
      );
    }
    function Fe(D, T, z, $) {
      if (
        (typeof z == "object" &&
          z !== null &&
          z.type === N &&
          z.key === null &&
          (z = z.props.children),
        typeof z == "object" && z !== null)
      ) {
        switch (z.$$typeof) {
          case w:
            e: {
              for (var oe = z.key; T !== null; ) {
                if (T.key === oe) {
                  if (((oe = z.type), oe === N)) {
                    if (T.tag === 7) {
                      n(D, T.sibling),
                        ($ = u(T, z.props.children)),
                        ($.return = D),
                        (D = $);
                      break e;
                    }
                  } else if (
                    T.elementType === oe ||
                    (typeof oe == "object" &&
                      oe !== null &&
                      oe.$$typeof === ee &&
                      Rm(oe) === T.type)
                  ) {
                    n(D, T.sibling),
                      ($ = u(T, z.props)),
                      Br($, z),
                      ($.return = D),
                      (D = $);
                    break e;
                  }
                  n(D, T);
                  break;
                } else t(D, T);
                T = T.sibling;
              }
              z.type === N
                ? (($ = zn(z.props.children, D.mode, $, z.key)),
                  ($.return = D),
                  (D = $))
                : (($ = Il(z.type, z.key, z.props, null, D.mode, $)),
                  Br($, z),
                  ($.return = D),
                  (D = $));
            }
            return g(D);
          case O:
            e: {
              for (oe = z.key; T !== null; ) {
                if (T.key === oe)
                  if (
                    T.tag === 4 &&
                    T.stateNode.containerInfo === z.containerInfo &&
                    T.stateNode.implementation === z.implementation
                  ) {
                    n(D, T.sibling),
                      ($ = u(T, z.children || [])),
                      ($.return = D),
                      (D = $);
                    break e;
                  } else {
                    n(D, T);
                    break;
                  }
                else t(D, T);
                T = T.sibling;
              }
              ($ = Oo(z, D.mode, $)), ($.return = D), (D = $);
            }
            return g(D);
          case ee:
            return (oe = z._init), (z = oe(z._payload)), Fe(D, T, z, $);
        }
        if (Q(z)) return xe(D, T, z, $);
        if (fe(z)) {
          if (((oe = fe(z)), typeof oe != "function")) throw Error(i(150));
          return (z = oe.call(z)), ge(D, T, z, $);
        }
        if (typeof z.then == "function") return Fe(D, T, pi(z), $);
        if (z.$$typeof === V) return Fe(D, T, ai(D, z), $);
        yi(D, z);
      }
      return (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
        ? ((z = "" + z),
          T !== null && T.tag === 6
            ? (n(D, T.sibling), ($ = u(T, z)), ($.return = D), (D = $))
            : (n(D, T), ($ = Co(z, D.mode, $)), ($.return = D), (D = $)),
          g(D))
        : n(D, T);
    }
    return function (D, T, z, $) {
      try {
        qr = 0;
        var oe = Fe(D, T, z, $);
        return (zs = null), oe;
      } catch (he) {
        if (he === Rr || he === si) throw he;
        var Ae = Vt(29, he, null, D.mode);
        return (Ae.lanes = $), (Ae.return = D), Ae;
      } finally {
      }
    };
  }
  var ks = _m(!0),
    Dm = _m(!1),
    aa = J(null),
    ba = null;
  function un(e) {
    var t = e.alternate;
    W(ct, ct.current & 1),
      W(aa, e),
      ba === null &&
        (t === null || _s.current !== null || t.memoizedState !== null) &&
        (ba = e);
  }
  function Mm(e) {
    if (e.tag === 22) {
      if ((W(ct, ct.current), W(aa, e), ba === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (ba = e);
      }
    } else on();
  }
  function on() {
    W(ct, ct.current), W(aa, aa.current);
  }
  function La(e) {
    ue(aa), ba === e && (ba = null), ue(ct);
  }
  var ct = J(0);
  function gi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || Jc(n))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function uc(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : v({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var oc = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Gt(),
        u = sn(r);
      (u.payload = t),
        n != null && (u.callback = n),
        (t = rn(e, u, r)),
        t !== null && (Qt(t, e, r), Dr(t, e, r));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Gt(),
        u = sn(r);
      (u.tag = 1),
        (u.payload = t),
        n != null && (u.callback = n),
        (t = rn(e, u, r)),
        t !== null && (Qt(t, e, r), Dr(t, e, r));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Gt(),
        r = sn(n);
      (r.tag = 2),
        t != null && (r.callback = t),
        (t = rn(e, r, n)),
        t !== null && (Qt(t, e, n), Dr(t, e, n));
    },
  };
  function Um(e, t, n, r, u, d, g) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, d, g)
        : t.prototype && t.prototype.isPureReactComponent
        ? !wr(n, r) || !wr(u, d)
        : !0
    );
  }
  function zm(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && oc.enqueueReplaceState(t, t.state, null);
  }
  function Fn(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var r in t) r !== "ref" && (n[r] = t[r]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = v({}, n));
      for (var u in e) n[u] === void 0 && (n[u] = e[u]);
    }
    return n;
  }
  var vi =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function km(e) {
    vi(e);
  }
  function Lm(e) {
    console.error(e);
  }
  function Hm(e) {
    vi(e);
  }
  function xi(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function qm(e, t, n) {
    try {
      var r = e.onCaughtError;
      r(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function cc(e, t, n) {
    return (
      (n = sn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        xi(e, t);
      }),
      n
    );
  }
  function Bm(e) {
    return (e = sn(e)), (e.tag = 3), e;
  }
  function Vm(e, t, n, r) {
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var d = r.value;
      (e.payload = function () {
        return u(d);
      }),
        (e.callback = function () {
          qm(t, n, r);
        });
    }
    var g = n.stateNode;
    g !== null &&
      typeof g.componentDidCatch == "function" &&
      (e.callback = function () {
        qm(t, n, r),
          typeof u != "function" &&
            (pn === null ? (pn = new Set([this])) : pn.add(this));
        var x = r.stack;
        this.componentDidCatch(r.value, {
          componentStack: x !== null ? x : "",
        });
      });
  }
  function nb(e, t, n, r, u) {
    if (
      ((n.flags |= 32768),
      r !== null && typeof r == "object" && typeof r.then == "function")
    ) {
      if (
        ((t = n.alternate),
        t !== null && Tr(t, n, u, !0),
        (n = aa.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              ba === null ? Uc() : n.alternate === null && et === 0 && (et = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = u),
              r === qo
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                  kc(e, r, u)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              r === qo
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([r]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                  kc(e, r, u)),
              !1
            );
        }
        throw Error(i(435, n.tag));
      }
      return kc(e, r, u), Uc(), !1;
    }
    if (ke)
      return (
        (t = aa.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            r !== Do && ((e = Error(i(422), { cause: r })), Ar(It(e, n))))
          : (r !== Do && ((t = Error(i(423), { cause: r })), Ar(It(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (u &= -u),
            (e.lanes |= u),
            (r = It(r, n)),
            (u = cc(e.stateNode, r, u)),
            Po(e, u),
            et !== 4 && (et = 2)),
        !1
      );
    var d = Error(i(520), { cause: r });
    if (
      ((d = It(d, n)),
      Xr === null ? (Xr = [d]) : Xr.push(d),
      et !== 4 && (et = 2),
      t === null)
    )
      return !0;
    (r = It(r, n)), (n = t);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = u & -u),
            (n.lanes |= e),
            (e = cc(n.stateNode, r, e)),
            Po(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (d = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (d !== null &&
                  typeof d.componentDidCatch == "function" &&
                  (pn === null || !pn.has(d)))))
          )
            return (
              (n.flags |= 65536),
              (u &= -u),
              (n.lanes |= u),
              (u = Bm(u)),
              Vm(u, e, n, r),
              Po(n, u),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Pm = Error(i(461)),
    mt = !1;
  function vt(e, t, n, r) {
    t.child = e === null ? Dm(t, null, n, r) : ks(t, e.child, n, r);
  }
  function Ym(e, t, n, r, u) {
    n = n.render;
    var d = t.ref;
    if ("ref" in r) {
      var g = {};
      for (var x in r) x !== "ref" && (g[x] = r[x]);
    } else g = r;
    return (
      Vn(t),
      (r = Xo(e, t, n, g, d, u)),
      (x = $o()),
      e !== null && !mt
        ? (Ko(e, t, u), Ha(e, t, u))
        : (ke && x && Ro(t), (t.flags |= 1), vt(e, t, r, u), t.child)
    );
  }
  function Fm(e, t, n, r, u) {
    if (e === null) {
      var d = n.type;
      return typeof d == "function" &&
        !To(d) &&
        d.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = d), Gm(e, t, d, r, u))
        : ((e = Il(n.type, null, r, t, t.mode, u)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((d = e.child), !vc(e, u))) {
      var g = d.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : wr), n(g, r) && e.ref === t.ref)
      )
        return Ha(e, t, u);
    }
    return (
      (t.flags |= 1),
      (e = _a(d, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Gm(e, t, n, r, u) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (wr(d, r) && e.ref === t.ref)
        if (((mt = !1), (t.pendingProps = r = d), vc(e, u)))
          (e.flags & 131072) !== 0 && (mt = !0);
        else return (t.lanes = e.lanes), Ha(e, t, u);
    }
    return fc(e, t, n, r, u);
  }
  function Qm(e, t, n) {
    var r = t.pendingProps,
      u = r.children,
      d = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((r = d !== null ? d.baseLanes | n : n), e !== null)) {
          for (u = t.child = e.child, d = 0; u !== null; )
            (d = d | u.lanes | u.childLanes), (u = u.sibling);
          t.childLanes = d & ~r;
        } else (t.childLanes = 0), (t.child = null);
        return Xm(e, t, r, n);
      }
      if ((n & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && ni(t, d !== null ? d.cachePool : null),
          d !== null ? Gh(t, d) : Fo(),
          Mm(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          Xm(e, t, d !== null ? d.baseLanes | n : n, n)
        );
    } else
      d !== null
        ? (ni(t, d.cachePool), Gh(t, d), on(), (t.memoizedState = null))
        : (e !== null && ni(t, null), Fo(), on());
    return vt(e, t, u, n), t.child;
  }
  function Xm(e, t, n, r) {
    var u = Ho();
    return (
      (u = u === null ? null : { parent: ot._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: n, cachePool: u }),
      e !== null && ni(t, null),
      Fo(),
      Mm(t),
      e !== null && Tr(e, t, r, !0),
      null
    );
  }
  function bi(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(i(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function fc(e, t, n, r, u) {
    return (
      Vn(t),
      (n = Xo(e, t, n, r, void 0, u)),
      (r = $o()),
      e !== null && !mt
        ? (Ko(e, t, u), Ha(e, t, u))
        : (ke && r && Ro(t), (t.flags |= 1), vt(e, t, n, u), t.child)
    );
  }
  function $m(e, t, n, r, u, d) {
    return (
      Vn(t),
      (t.updateQueue = null),
      (n = Xh(t, r, n, u)),
      Qh(e),
      (r = $o()),
      e !== null && !mt
        ? (Ko(e, t, d), Ha(e, t, d))
        : (ke && r && Ro(t), (t.flags |= 1), vt(e, t, n, d), t.child)
    );
  }
  function Km(e, t, n, r, u) {
    if ((Vn(t), t.stateNode === null)) {
      var d = As,
        g = n.contextType;
      typeof g == "object" && g !== null && (d = jt(g)),
        (d = new n(r, d)),
        (t.memoizedState =
          d.state !== null && d.state !== void 0 ? d.state : null),
        (d.updater = oc),
        (t.stateNode = d),
        (d._reactInternals = t),
        (d = t.stateNode),
        (d.props = r),
        (d.state = t.memoizedState),
        (d.refs = {}),
        Bo(t),
        (g = n.contextType),
        (d.context = typeof g == "object" && g !== null ? jt(g) : As),
        (d.state = t.memoizedState),
        (g = n.getDerivedStateFromProps),
        typeof g == "function" && (uc(t, n, g, r), (d.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function" ||
          (typeof d.UNSAFE_componentWillMount != "function" &&
            typeof d.componentWillMount != "function") ||
          ((g = d.state),
          typeof d.componentWillMount == "function" && d.componentWillMount(),
          typeof d.UNSAFE_componentWillMount == "function" &&
            d.UNSAFE_componentWillMount(),
          g !== d.state && oc.enqueueReplaceState(d, d.state, null),
          Ur(t, r, d, u),
          Mr(),
          (d.state = t.memoizedState)),
        typeof d.componentDidMount == "function" && (t.flags |= 4194308),
        (r = !0);
    } else if (e === null) {
      d = t.stateNode;
      var x = t.memoizedProps,
        j = Fn(n, x);
      d.props = j;
      var k = d.context,
        G = n.contextType;
      (g = As), typeof G == "object" && G !== null && (g = jt(G));
      var Z = n.getDerivedStateFromProps;
      (G =
        typeof Z == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function"),
        (x = t.pendingProps !== x),
        G ||
          (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
            typeof d.componentWillReceiveProps != "function") ||
          ((x || k !== g) && zm(t, d, r, g)),
        (nn = !1);
      var B = t.memoizedState;
      (d.state = B),
        Ur(t, r, d, u),
        Mr(),
        (k = t.memoizedState),
        x || B !== k || nn
          ? (typeof Z == "function" && (uc(t, n, Z, r), (k = t.memoizedState)),
            (j = nn || Um(t, n, j, r, B, k, g))
              ? (G ||
                  (typeof d.UNSAFE_componentWillMount != "function" &&
                    typeof d.componentWillMount != "function") ||
                  (typeof d.componentWillMount == "function" &&
                    d.componentWillMount(),
                  typeof d.UNSAFE_componentWillMount == "function" &&
                    d.UNSAFE_componentWillMount()),
                typeof d.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof d.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = k)),
            (d.props = r),
            (d.state = k),
            (d.context = g),
            (r = j))
          : (typeof d.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (d = t.stateNode),
        Vo(e, t),
        (g = t.memoizedProps),
        (G = Fn(n, g)),
        (d.props = G),
        (Z = t.pendingProps),
        (B = d.context),
        (k = n.contextType),
        (j = As),
        typeof k == "object" && k !== null && (j = jt(k)),
        (x = n.getDerivedStateFromProps),
        (k =
          typeof x == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function") ||
          (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
            typeof d.componentWillReceiveProps != "function") ||
          ((g !== Z || B !== j) && zm(t, d, r, j)),
        (nn = !1),
        (B = t.memoizedState),
        (d.state = B),
        Ur(t, r, d, u),
        Mr();
      var P = t.memoizedState;
      g !== Z ||
      B !== P ||
      nn ||
      (e !== null && e.dependencies !== null && ti(e.dependencies))
        ? (typeof x == "function" && (uc(t, n, x, r), (P = t.memoizedState)),
          (G =
            nn ||
            Um(t, n, G, r, B, P, j) ||
            (e !== null && e.dependencies !== null && ti(e.dependencies)))
            ? (k ||
                (typeof d.UNSAFE_componentWillUpdate != "function" &&
                  typeof d.componentWillUpdate != "function") ||
                (typeof d.componentWillUpdate == "function" &&
                  d.componentWillUpdate(r, P, j),
                typeof d.UNSAFE_componentWillUpdate == "function" &&
                  d.UNSAFE_componentWillUpdate(r, P, j)),
              typeof d.componentDidUpdate == "function" && (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof d.componentDidUpdate != "function" ||
                (g === e.memoizedProps && B === e.memoizedState) ||
                (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate != "function" ||
                (g === e.memoizedProps && B === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = P)),
          (d.props = r),
          (d.state = P),
          (d.context = j),
          (r = G))
        : (typeof d.componentDidUpdate != "function" ||
            (g === e.memoizedProps && B === e.memoizedState) ||
            (t.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != "function" ||
            (g === e.memoizedProps && B === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return (
      (d = r),
      bi(e, t),
      (r = (t.flags & 128) !== 0),
      d || r
        ? ((d = t.stateNode),
          (n =
            r && typeof n.getDerivedStateFromError != "function"
              ? null
              : d.render()),
          (t.flags |= 1),
          e !== null && r
            ? ((t.child = ks(t, e.child, null, u)),
              (t.child = ks(t, null, n, u)))
            : vt(e, t, n, u),
          (t.memoizedState = d.state),
          (e = t.child))
        : (e = Ha(e, t, u)),
      e
    );
  }
  function Zm(e, t, n, r) {
    return Er(), (t.flags |= 256), vt(e, t, n, r), t.child;
  }
  var dc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function hc(e) {
    return { baseLanes: e, cachePool: Lh() };
  }
  function mc(e, t, n) {
    return (e = e !== null ? e.childLanes & ~n : 0), t && (e |= na), e;
  }
  function Jm(e, t, n) {
    var r = t.pendingProps,
      u = !1,
      d = (t.flags & 128) !== 0,
      g;
    if (
      ((g = d) ||
        (g =
          e !== null && e.memoizedState === null ? !1 : (ct.current & 2) !== 0),
      g && ((u = !0), (t.flags &= -129)),
      (g = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (ke) {
        if ((u ? un(t) : on(), ke)) {
          var x = We,
            j;
          if ((j = x)) {
            e: {
              for (j = x, x = xa; j.nodeType !== 8; ) {
                if (!x) {
                  x = null;
                  break e;
                }
                if (((j = da(j.nextSibling)), j === null)) {
                  x = null;
                  break e;
                }
              }
              x = j;
            }
            x !== null
              ? ((t.memoizedState = {
                  dehydrated: x,
                  treeContext: kn !== null ? { id: Da, overflow: Ma } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (j = Vt(18, null, null, 0)),
                (j.stateNode = x),
                (j.return = t),
                (t.child = j),
                (Ot = t),
                (We = null),
                (j = !0))
              : (j = !1);
          }
          j || qn(t);
        }
        if (
          ((x = t.memoizedState),
          x !== null && ((x = x.dehydrated), x !== null))
        )
          return Jc(x) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        La(t);
      }
      return (
        (x = r.children),
        (r = r.fallback),
        u
          ? (on(),
            (u = t.mode),
            (x = Si({ mode: "hidden", children: x }, u)),
            (r = zn(r, u, n, null)),
            (x.return = t),
            (r.return = t),
            (x.sibling = r),
            (t.child = x),
            (u = t.child),
            (u.memoizedState = hc(n)),
            (u.childLanes = mc(e, g, n)),
            (t.memoizedState = dc),
            r)
          : (un(t), pc(t, x))
      );
    }
    if (
      ((j = e.memoizedState), j !== null && ((x = j.dehydrated), x !== null))
    ) {
      if (d)
        t.flags & 256
          ? (un(t), (t.flags &= -257), (t = yc(e, t, n)))
          : t.memoizedState !== null
          ? (on(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (on(),
            (u = r.fallback),
            (x = t.mode),
            (r = Si({ mode: "visible", children: r.children }, x)),
            (u = zn(u, x, n, null)),
            (u.flags |= 2),
            (r.return = t),
            (u.return = t),
            (r.sibling = u),
            (t.child = r),
            ks(t, e.child, null, n),
            (r = t.child),
            (r.memoizedState = hc(n)),
            (r.childLanes = mc(e, g, n)),
            (t.memoizedState = dc),
            (t = u));
      else if ((un(t), Jc(x))) {
        if (((g = x.nextSibling && x.nextSibling.dataset), g)) var k = g.dgst;
        (g = k),
          (r = Error(i(419))),
          (r.stack = ""),
          (r.digest = g),
          Ar({ value: r, source: null, stack: null }),
          (t = yc(e, t, n));
      } else if (
        (mt || Tr(e, t, n, !1), (g = (n & e.childLanes) !== 0), mt || g)
      ) {
        if (
          ((g = Ke),
          g !== null &&
            ((r = n & -n),
            (r = (r & 42) !== 0 ? 1 : Ju(r)),
            (r = (r & (g.suspendedLanes | n)) !== 0 ? 0 : r),
            r !== 0 && r !== j.retryLane))
        )
          throw ((j.retryLane = r), Es(e, r), Qt(g, e, r), Pm);
        x.data === "$?" || Uc(), (t = yc(e, t, n));
      } else
        x.data === "$?"
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = j.treeContext),
            (We = da(x.nextSibling)),
            (Ot = t),
            (ke = !0),
            (Hn = null),
            (xa = !1),
            e !== null &&
              ((ea[ta++] = Da),
              (ea[ta++] = Ma),
              (ea[ta++] = kn),
              (Da = e.id),
              (Ma = e.overflow),
              (kn = t)),
            (t = pc(t, r.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (on(),
        (u = r.fallback),
        (x = t.mode),
        (j = e.child),
        (k = j.sibling),
        (r = _a(j, { mode: "hidden", children: r.children })),
        (r.subtreeFlags = j.subtreeFlags & 65011712),
        k !== null ? (u = _a(k, u)) : ((u = zn(u, x, n, null)), (u.flags |= 2)),
        (u.return = t),
        (r.return = t),
        (r.sibling = u),
        (t.child = r),
        (r = u),
        (u = t.child),
        (x = e.child.memoizedState),
        x === null
          ? (x = hc(n))
          : ((j = x.cachePool),
            j !== null
              ? ((k = ot._currentValue),
                (j = j.parent !== k ? { parent: k, pool: k } : j))
              : (j = Lh()),
            (x = { baseLanes: x.baseLanes | n, cachePool: j })),
        (u.memoizedState = x),
        (u.childLanes = mc(e, g, n)),
        (t.memoizedState = dc),
        r)
      : (un(t),
        (n = e.child),
        (e = n.sibling),
        (n = _a(n, { mode: "visible", children: r.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((g = t.deletions),
          g === null ? ((t.deletions = [e]), (t.flags |= 16)) : g.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function pc(e, t) {
    return (
      (t = Si({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Si(e, t) {
    return (
      (e = Vt(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function yc(e, t, n) {
    return (
      ks(t, e.child, null, n),
      (e = pc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Im(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Uo(e.return, t, n);
  }
  function gc(e, t, n, r, u) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: u,
        })
      : ((d.isBackwards = t),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = r),
        (d.tail = n),
        (d.tailMode = u));
  }
  function Wm(e, t, n) {
    var r = t.pendingProps,
      u = r.revealOrder,
      d = r.tail;
    if ((vt(e, t, r.children, n), (r = ct.current), (r & 2) !== 0))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Im(e, n, t);
          else if (e.tag === 19) Im(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    switch ((W(ct, r), u)) {
      case "forwards":
        for (n = t.child, u = null; n !== null; )
          (e = n.alternate),
            e !== null && gi(e) === null && (u = n),
            (n = n.sibling);
        (n = u),
          n === null
            ? ((u = t.child), (t.child = null))
            : ((u = n.sibling), (n.sibling = null)),
          gc(t, !1, u, n, d);
        break;
      case "backwards":
        for (n = null, u = t.child, t.child = null; u !== null; ) {
          if (((e = u.alternate), e !== null && gi(e) === null)) {
            t.child = u;
            break;
          }
          (e = u.sibling), (u.sibling = n), (n = u), (u = e);
        }
        gc(t, !0, n, null, d);
        break;
      case "together":
        gc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ha(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (mn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Tr(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (
        e = t.child, n = _a(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = _a(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function vc(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && ti(e)));
  }
  function sb(e, t, n) {
    switch (t.tag) {
      case 3:
        Ge(t, t.stateNode.containerInfo),
          an(t, ot, e.memoizedState.cache),
          Er();
        break;
      case 27:
      case 5:
        ls(t);
        break;
      case 4:
        Ge(t, t.stateNode.containerInfo);
        break;
      case 10:
        an(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var r = t.memoizedState;
        if (r !== null)
          return r.dehydrated !== null
            ? (un(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
            ? Jm(e, t, n)
            : (un(t), (e = Ha(e, t, n)), e !== null ? e.sibling : null);
        un(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (
          ((r = (n & t.childLanes) !== 0),
          r || (Tr(e, t, n, !1), (r = (n & t.childLanes) !== 0)),
          u)
        ) {
          if (r) return Wm(e, t, n);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          W(ct, ct.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Qm(e, t, n);
      case 24:
        an(t, ot, e.memoizedState.cache);
    }
    return Ha(e, t, n);
  }
  function ep(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) mt = !0;
      else {
        if (!vc(e, n) && (t.flags & 128) === 0) return (mt = !1), sb(e, t, n);
        mt = (e.flags & 131072) !== 0;
      }
    else (mt = !1), ke && (t.flags & 1048576) !== 0 && Rh(t, ei, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var r = t.elementType,
            u = r._init;
          if (((r = u(r._payload)), (t.type = r), typeof r == "function"))
            To(r)
              ? ((e = Fn(r, e)), (t.tag = 1), (t = Km(null, t, r, e, n)))
              : ((t.tag = 0), (t = fc(null, t, r, e, n)));
          else {
            if (r != null) {
              if (((u = r.$$typeof), u === H)) {
                (t.tag = 11), (t = Ym(null, t, r, e, n));
                break e;
              } else if (u === K) {
                (t.tag = 14), (t = Fm(null, t, r, e, n));
                break e;
              }
            }
            throw ((t = me(r) || r), Error(i(306, t, "")));
          }
        }
        return t;
      case 0:
        return fc(e, t, t.type, t.pendingProps, n);
      case 1:
        return (r = t.type), (u = Fn(r, t.pendingProps)), Km(e, t, r, u, n);
      case 3:
        e: {
          if ((Ge(t, t.stateNode.containerInfo), e === null))
            throw Error(i(387));
          r = t.pendingProps;
          var d = t.memoizedState;
          (u = d.element), Vo(e, t), Ur(t, r, null, n);
          var g = t.memoizedState;
          if (
            ((r = g.cache),
            an(t, ot, r),
            r !== d.cache && zo(t, [ot], n, !0),
            Mr(),
            (r = g.element),
            d.isDehydrated)
          )
            if (
              ((d = { element: r, isDehydrated: !1, cache: g.cache }),
              (t.updateQueue.baseState = d),
              (t.memoizedState = d),
              t.flags & 256)
            ) {
              t = Zm(e, t, r, n);
              break e;
            } else if (r !== u) {
              (u = It(Error(i(424)), t)), Ar(u), (t = Zm(e, t, r, n));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                We = da(e.firstChild),
                  Ot = t,
                  ke = !0,
                  Hn = null,
                  xa = !0,
                  n = Dm(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            }
          else {
            if ((Er(), r === u)) {
              t = Ha(e, t, n);
              break e;
            }
            vt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          bi(e, t),
          e === null
            ? (n = sy(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : ke ||
                ((n = t.type),
                (e = t.pendingProps),
                (r = zi(be.current).createElement(n)),
                (r[Nt] = t),
                (r[Mt] = e),
                bt(r, n, e),
                ht(r),
                (t.stateNode = r))
            : (t.memoizedState = sy(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          ls(t),
          e === null &&
            ke &&
            ((r = t.stateNode = ty(t.type, t.pendingProps, be.current)),
            (Ot = t),
            (xa = !0),
            (u = We),
            vn(t.type) ? ((Ic = u), (We = da(r.firstChild))) : (We = u)),
          vt(e, t, t.pendingProps.children, n),
          bi(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            ke &&
            ((u = r = We) &&
              ((r = Db(r, t.type, t.pendingProps, xa)),
              r !== null
                ? ((t.stateNode = r),
                  (Ot = t),
                  (We = da(r.firstChild)),
                  (xa = !1),
                  (u = !0))
                : (u = !1)),
            u || qn(t)),
          ls(t),
          (u = t.type),
          (d = t.pendingProps),
          (g = e !== null ? e.memoizedProps : null),
          (r = d.children),
          $c(u, d) ? (r = null) : g !== null && $c(u, g) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = Xo(e, t, Zx, null, null, n)), (al._currentValue = u)),
          bi(e, t),
          vt(e, t, r, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            ke &&
            ((e = n = We) &&
              ((n = Mb(n, t.pendingProps, xa)),
              n !== null
                ? ((t.stateNode = n), (Ot = t), (We = null), (e = !0))
                : (e = !1)),
            e || qn(t)),
          null
        );
      case 13:
        return Jm(e, t, n);
      case 4:
        return (
          Ge(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = ks(t, null, r, n)) : vt(e, t, r, n),
          t.child
        );
      case 11:
        return Ym(e, t, t.type, t.pendingProps, n);
      case 7:
        return vt(e, t, t.pendingProps, n), t.child;
      case 8:
        return vt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return vt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        return (
          (r = t.pendingProps),
          an(t, t.type, r.value),
          vt(e, t, r.children, n),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (r = t.pendingProps.children),
          Vn(t),
          (u = jt(u)),
          (r = r(u)),
          (t.flags |= 1),
          vt(e, t, r, n),
          t.child
        );
      case 14:
        return Fm(e, t, t.type, t.pendingProps, n);
      case 15:
        return Gm(e, t, t.type, t.pendingProps, n);
      case 19:
        return Wm(e, t, n);
      case 31:
        return (
          (r = t.pendingProps),
          (n = t.mode),
          (r = { mode: r.mode, children: r.children }),
          e === null
            ? ((n = Si(r, n)),
              (n.ref = t.ref),
              (t.child = n),
              (n.return = t),
              (t = n))
            : ((n = _a(e.child, r)),
              (n.ref = t.ref),
              (t.child = n),
              (n.return = t),
              (t = n)),
          t
        );
      case 22:
        return Qm(e, t, n);
      case 24:
        return (
          Vn(t),
          (r = jt(ot)),
          e === null
            ? ((u = Ho()),
              u === null &&
                ((u = Ke),
                (d = ko()),
                (u.pooledCache = d),
                d.refCount++,
                d !== null && (u.pooledCacheLanes |= n),
                (u = d)),
              (t.memoizedState = { parent: r, cache: u }),
              Bo(t),
              an(t, ot, u))
            : ((e.lanes & n) !== 0 && (Vo(e, t), Ur(t, null, null, n), Mr()),
              (u = e.memoizedState),
              (d = t.memoizedState),
              u.parent !== r
                ? ((u = { parent: r, cache: r }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  an(t, ot, r))
                : ((r = d.cache),
                  an(t, ot, r),
                  r !== u.cache && zo(t, [ot], n, !0))),
          vt(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(i(156, t.tag));
  }
  function qa(e) {
    e.flags |= 4;
  }
  function tp(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !oy(t))) {
      if (
        ((t = aa.current),
        t !== null &&
          ((Ue & 4194048) === Ue
            ? ba !== null
            : ((Ue & 62914560) !== Ue && (Ue & 536870912) === 0) || t !== ba))
      )
        throw ((_r = qo), Hh);
      e.flags |= 8192;
    }
  }
  function wi(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Md() : 536870912), (e.lanes |= t), (Bs |= t));
  }
  function Vr(e, t) {
    if (!ke)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ie(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var u = e.child; u !== null; )
        (n |= u.lanes | u.childLanes),
          (r |= u.subtreeFlags & 65011712),
          (r |= u.flags & 65011712),
          (u.return = e),
          (u = u.sibling);
    else
      for (u = e.child; u !== null; )
        (n |= u.lanes | u.childLanes),
          (r |= u.subtreeFlags),
          (r |= u.flags),
          (u.return = e),
          (u = u.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function rb(e, t, n) {
    var r = t.pendingProps;
    switch ((_o(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ie(t), null;
      case 1:
        return Ie(t), null;
      case 3:
        return (
          (n = t.stateNode),
          (r = null),
          e !== null && (r = e.memoizedState.cache),
          t.memoizedState.cache !== r && (t.flags |= 2048),
          za(ot),
          $t(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (jr(t)
              ? qa(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Mh())),
          Ie(t),
          null
        );
      case 26:
        return (
          (n = t.memoizedState),
          e === null
            ? (qa(t),
              n !== null ? (Ie(t), tp(t, n)) : (Ie(t), (t.flags &= -16777217)))
            : n
            ? n !== e.memoizedState
              ? (qa(t), Ie(t), tp(t, n))
              : (Ie(t), (t.flags &= -16777217))
            : (e.memoizedProps !== r && qa(t), Ie(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        is(t), (n = be.current);
        var u = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== r && qa(t);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(i(166));
            return Ie(t), null;
          }
          (e = de.current),
            jr(t) ? _h(t) : ((e = ty(u, r, n)), (t.stateNode = e), qa(t));
        }
        return Ie(t), null;
      case 5:
        if ((is(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== r && qa(t);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(i(166));
            return Ie(t), null;
          }
          if (((e = de.current), jr(t))) _h(t);
          else {
            switch (((u = zi(be.current)), e)) {
              case 1:
                e = u.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                e = u.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    e = u.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    e = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (e = u.createElement("div")),
                      (e.innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof r.is == "string"
                        ? u.createElement("select", { is: r.is })
                        : u.createElement("select")),
                      r.multiple
                        ? (e.multiple = !0)
                        : r.size && (e.size = r.size);
                    break;
                  default:
                    e =
                      typeof r.is == "string"
                        ? u.createElement(n, { is: r.is })
                        : u.createElement(n);
                }
            }
            (e[Nt] = t), (e[Mt] = r);
            e: for (u = t.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) e.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === t) break e;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === t) break e;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            t.stateNode = e;
            e: switch ((bt(e, n, r), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!r.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && qa(t);
          }
        }
        return Ie(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== r && qa(t);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
          if (((e = be.current), jr(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (r = null),
              (u = Ot),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  r = u.memoizedProps;
              }
            (e[Nt] = t),
              (e = !!(
                e.nodeValue === n ||
                (r !== null && r.suppressHydrationWarning === !0) ||
                $p(e.nodeValue, n)
              )),
              e || qn(t);
          } else (e = zi(e).createTextNode(r)), (e[Nt] = t), (t.stateNode = e);
        }
        return Ie(t), null;
      case 13:
        if (
          ((r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((u = jr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(i(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(i(317));
              u[Nt] = t;
            } else
              Er(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Ie(t), (u = !1);
          } else
            (u = Mh()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return t.flags & 256 ? (La(t), t) : (La(t), null);
        }
        if ((La(t), (t.flags & 128) !== 0)) return (t.lanes = n), t;
        if (
          ((n = r !== null), (e = e !== null && e.memoizedState !== null), n)
        ) {
          (r = t.child),
            (u = null),
            r.alternate !== null &&
              r.alternate.memoizedState !== null &&
              r.alternate.memoizedState.cachePool !== null &&
              (u = r.alternate.memoizedState.cachePool.pool);
          var d = null;
          r.memoizedState !== null &&
            r.memoizedState.cachePool !== null &&
            (d = r.memoizedState.cachePool.pool),
            d !== u && (r.flags |= 2048);
        }
        return (
          n !== e && n && (t.child.flags |= 8192),
          wi(t, t.updateQueue),
          Ie(t),
          null
        );
      case 4:
        return $t(), e === null && Yc(t.stateNode.containerInfo), Ie(t), null;
      case 10:
        return za(t.type), Ie(t), null;
      case 19:
        if ((ue(ct), (u = t.memoizedState), u === null)) return Ie(t), null;
        if (((r = (t.flags & 128) !== 0), (d = u.rendering), d === null))
          if (r) Vr(u, !1);
          else {
            if (et !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((d = gi(e)), d !== null)) {
                  for (
                    t.flags |= 128,
                      Vr(u, !1),
                      e = d.updateQueue,
                      t.updateQueue = e,
                      wi(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;

                  )
                    Oh(n, e), (n = n.sibling);
                  return W(ct, (ct.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            u.tail !== null &&
              Kt() > Ei &&
              ((t.flags |= 128), (r = !0), Vr(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = gi(d)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                wi(t, e),
                Vr(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !d.alternate &&
                  !ke)
              )
                return Ie(t), null;
            } else
              2 * Kt() - u.renderingStartTime > Ei &&
                n !== 536870912 &&
                ((t.flags |= 128), (r = !0), Vr(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((d.sibling = t.child), (t.child = d))
            : ((e = u.last),
              e !== null ? (e.sibling = d) : (t.child = d),
              (u.last = d));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = Kt()),
            (t.sibling = null),
            (e = ct.current),
            W(ct, r ? (e & 1) | 2 : e & 1),
            t)
          : (Ie(t), null);
      case 22:
      case 23:
        return (
          La(t),
          Go(),
          (r = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== r && (t.flags |= 8192)
            : r && (t.flags |= 8192),
          r
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ie(t),
          (n = t.updateQueue),
          n !== null && wi(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (r = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (r = t.memoizedState.cachePool.pool),
          r !== n && (t.flags |= 2048),
          e !== null && ue(Pn),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          za(ot),
          Ie(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function lb(e, t) {
    switch ((_o(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          za(ot),
          $t(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return is(t), null;
      case 13:
        if (
          (La(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(i(340));
          Er();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ue(ct), null;
      case 4:
        return $t(), null;
      case 10:
        return za(t.type), null;
      case 22:
      case 23:
        return (
          La(t),
          Go(),
          e !== null && ue(Pn),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return za(ot), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ap(e, t) {
    switch ((_o(t), t.tag)) {
      case 3:
        za(ot), $t();
        break;
      case 26:
      case 27:
      case 5:
        is(t);
        break;
      case 4:
        $t();
        break;
      case 13:
        La(t);
        break;
      case 19:
        ue(ct);
        break;
      case 10:
        za(t.type);
        break;
      case 22:
      case 23:
        La(t), Go(), e !== null && ue(Pn);
        break;
      case 24:
        za(ot);
    }
  }
  function Pr(e, t) {
    try {
      var n = t.updateQueue,
        r = n !== null ? n.lastEffect : null;
      if (r !== null) {
        var u = r.next;
        n = u;
        do {
          if ((n.tag & e) === e) {
            r = void 0;
            var d = n.create,
              g = n.inst;
            (r = d()), (g.destroy = r);
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (x) {
      Qe(t, t.return, x);
    }
  }
  function cn(e, t, n) {
    try {
      var r = t.updateQueue,
        u = r !== null ? r.lastEffect : null;
      if (u !== null) {
        var d = u.next;
        r = d;
        do {
          if ((r.tag & e) === e) {
            var g = r.inst,
              x = g.destroy;
            if (x !== void 0) {
              (g.destroy = void 0), (u = t);
              var j = n,
                k = x;
              try {
                k();
              } catch (G) {
                Qe(u, j, G);
              }
            }
          }
          r = r.next;
        } while (r !== d);
      }
    } catch (G) {
      Qe(t, t.return, G);
    }
  }
  function np(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Fh(t, n);
      } catch (r) {
        Qe(e, e.return, r);
      }
    }
  }
  function sp(e, t, n) {
    (n.props = Fn(e.type, e.memoizedProps)), (n.state = e.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (r) {
      Qe(e, t, r);
    }
  }
  function Yr(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var r = e.stateNode;
            break;
          case 30:
            r = e.stateNode;
            break;
          default:
            r = e.stateNode;
        }
        typeof n == "function" ? (e.refCleanup = n(r)) : (n.current = r);
      }
    } catch (u) {
      Qe(e, t, u);
    }
  }
  function Sa(e, t) {
    var n = e.ref,
      r = e.refCleanup;
    if (n !== null)
      if (typeof r == "function")
        try {
          r();
        } catch (u) {
          Qe(e, t, u);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (u) {
          Qe(e, t, u);
        }
      else n.current = null;
  }
  function rp(e) {
    var t = e.type,
      n = e.memoizedProps,
      r = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && r.focus();
          break e;
        case "img":
          n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
      }
    } catch (u) {
      Qe(e, e.return, u);
    }
  }
  function xc(e, t, n) {
    try {
      var r = e.stateNode;
      Tb(r, e.type, n, t), (r[Mt] = t);
    } catch (u) {
      Qe(e, e.return, u);
    }
  }
  function lp(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && vn(e.type)) ||
      e.tag === 4
    );
  }
  function bc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || lp(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && vn(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Sc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
              ? n.ownerDocument.body
              : n
            ).insertBefore(e, t)
          : ((t =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n),
            t.appendChild(e),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Ui));
    else if (
      r !== 4 &&
      (r === 27 && vn(e.type) && ((n = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Sc(e, t, n), e = e.sibling; e !== null; )
        Sc(e, t, n), (e = e.sibling);
  }
  function Ni(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (
      r !== 4 &&
      (r === 27 && vn(e.type) && (n = e.stateNode), (e = e.child), e !== null)
    )
      for (Ni(e, t, n), e = e.sibling; e !== null; )
        Ni(e, t, n), (e = e.sibling);
  }
  function ip(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var r = e.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      bt(t, r, n), (t[Nt] = e), (t[Mt] = n);
    } catch (d) {
      Qe(e, e.return, d);
    }
  }
  var Ba = !1,
    st = !1,
    wc = !1,
    up = typeof WeakSet == "function" ? WeakSet : Set,
    pt = null;
  function ib(e, t) {
    if (((e = e.containerInfo), (Qc = Vi), (e = xh(e)), bo(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var u = r.anchorOffset,
              d = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, d.nodeType;
            } catch {
              n = null;
              break e;
            }
            var g = 0,
              x = -1,
              j = -1,
              k = 0,
              G = 0,
              Z = e,
              B = null;
            t: for (;;) {
              for (
                var P;
                Z !== n || (u !== 0 && Z.nodeType !== 3) || (x = g + u),
                  Z !== d || (r !== 0 && Z.nodeType !== 3) || (j = g + r),
                  Z.nodeType === 3 && (g += Z.nodeValue.length),
                  (P = Z.firstChild) !== null;

              )
                (B = Z), (Z = P);
              for (;;) {
                if (Z === e) break t;
                if (
                  (B === n && ++k === u && (x = g),
                  B === d && ++G === r && (j = g),
                  (P = Z.nextSibling) !== null)
                )
                  break;
                (Z = B), (B = Z.parentNode);
              }
              Z = P;
            }
            n = x === -1 || j === -1 ? null : { start: x, end: j };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Xc = { focusedElem: e, selectionRange: n }, Vi = !1, pt = t;
      pt !== null;

    )
      if (
        ((t = pt), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
      )
        (e.return = t), (pt = e);
      else
        for (; pt !== null; ) {
          switch (((t = pt), (d = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && d !== null) {
                (e = void 0),
                  (n = t),
                  (u = d.memoizedProps),
                  (d = d.memoizedState),
                  (r = n.stateNode);
                try {
                  var xe = Fn(n.type, u, n.elementType === n.type);
                  (e = r.getSnapshotBeforeUpdate(xe, d)),
                    (r.__reactInternalSnapshotBeforeUpdate = e);
                } catch (ge) {
                  Qe(n, n.return, ge);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  Zc(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Zc(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(i(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (pt = e);
            break;
          }
          pt = t.return;
        }
  }
  function op(e, t, n) {
    var r = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        fn(e, n), r & 4 && Pr(5, n);
        break;
      case 1:
        if ((fn(e, n), r & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (g) {
              Qe(n, n.return, g);
            }
          else {
            var u = Fn(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(u, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (g) {
              Qe(n, n.return, g);
            }
          }
        r & 64 && np(n), r & 512 && Yr(n, n.return);
        break;
      case 3:
        if ((fn(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            Fh(e, t);
          } catch (g) {
            Qe(n, n.return, g);
          }
        }
        break;
      case 27:
        t === null && r & 4 && ip(n);
      case 26:
      case 5:
        fn(e, n), t === null && r & 4 && rp(n), r & 512 && Yr(n, n.return);
        break;
      case 12:
        fn(e, n);
        break;
      case 13:
        fn(e, n),
          r & 4 && dp(e, n),
          r & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = yb.bind(null, n)), Ub(e, n))));
        break;
      case 22:
        if (((r = n.memoizedState !== null || Ba), !r)) {
          (t = (t !== null && t.memoizedState !== null) || st), (u = Ba);
          var d = st;
          (Ba = r),
            (st = t) && !d ? dn(e, n, (n.subtreeFlags & 8772) !== 0) : fn(e, n),
            (Ba = u),
            (st = d);
        }
        break;
      case 30:
        break;
      default:
        fn(e, n);
    }
  }
  function cp(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), cp(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && eo(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Ze = null,
    kt = !1;
  function Va(e, t, n) {
    for (n = n.child; n !== null; ) fp(e, t, n), (n = n.sibling);
  }
  function fp(e, t, n) {
    if (Se && typeof Se.onCommitFiberUnmount == "function")
      try {
        Se.onCommitFiberUnmount(ce, n);
      } catch {}
    switch (n.tag) {
      case 26:
        st || Sa(n, t),
          Va(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        st || Sa(n, t);
        var r = Ze,
          u = kt;
        vn(n.type) && ((Ze = n.stateNode), (kt = !1)),
          Va(e, t, n),
          Ir(n.stateNode),
          (Ze = r),
          (kt = u);
        break;
      case 5:
        st || Sa(n, t);
      case 6:
        if (
          ((r = Ze),
          (u = kt),
          (Ze = null),
          Va(e, t, n),
          (Ze = r),
          (kt = u),
          Ze !== null)
        )
          if (kt)
            try {
              (Ze.nodeType === 9
                ? Ze.body
                : Ze.nodeName === "HTML"
                ? Ze.ownerDocument.body
                : Ze
              ).removeChild(n.stateNode);
            } catch (d) {
              Qe(n, t, d);
            }
          else
            try {
              Ze.removeChild(n.stateNode);
            } catch (d) {
              Qe(n, t, d);
            }
        break;
      case 18:
        Ze !== null &&
          (kt
            ? ((e = Ze),
              Wp(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e,
                n.stateNode
              ),
              ll(e))
            : Wp(Ze, n.stateNode));
        break;
      case 4:
        (r = Ze),
          (u = kt),
          (Ze = n.stateNode.containerInfo),
          (kt = !0),
          Va(e, t, n),
          (Ze = r),
          (kt = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        st || cn(2, n, t), st || cn(4, n, t), Va(e, t, n);
        break;
      case 1:
        st ||
          (Sa(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function" && sp(n, t, r)),
          Va(e, t, n);
        break;
      case 21:
        Va(e, t, n);
        break;
      case 22:
        (st = (r = st) || n.memoizedState !== null), Va(e, t, n), (st = r);
        break;
      default:
        Va(e, t, n);
    }
  }
  function dp(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        ll(e);
      } catch (n) {
        Qe(t, t.return, n);
      }
  }
  function ub(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new up()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new up()),
          t
        );
      default:
        throw Error(i(435, e.tag));
    }
  }
  function Nc(e, t) {
    var n = ub(e);
    t.forEach(function (r) {
      var u = gb.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(u, u));
    });
  }
  function Pt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var u = n[r],
          d = e,
          g = t,
          x = g;
        e: for (; x !== null; ) {
          switch (x.tag) {
            case 27:
              if (vn(x.type)) {
                (Ze = x.stateNode), (kt = !1);
                break e;
              }
              break;
            case 5:
              (Ze = x.stateNode), (kt = !1);
              break e;
            case 3:
            case 4:
              (Ze = x.stateNode.containerInfo), (kt = !0);
              break e;
          }
          x = x.return;
        }
        if (Ze === null) throw Error(i(160));
        fp(d, g, u),
          (Ze = null),
          (kt = !1),
          (d = u.alternate),
          d !== null && (d.return = null),
          (u.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) hp(t, e), (t = t.sibling);
  }
  var fa = null;
  function hp(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Pt(t, e),
          Yt(e),
          r & 4 && (cn(3, e, e.return), Pr(3, e), cn(5, e, e.return));
        break;
      case 1:
        Pt(t, e),
          Yt(e),
          r & 512 && (st || n === null || Sa(n, n.return)),
          r & 64 &&
            Ba &&
            ((e = e.updateQueue),
            e !== null &&
              ((r = e.callbacks),
              r !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? r : n.concat(r)))));
        break;
      case 26:
        var u = fa;
        if (
          (Pt(t, e),
          Yt(e),
          r & 512 && (st || n === null || Sa(n, n.return)),
          r & 4)
        ) {
          var d = n !== null ? n.memoizedState : null;
          if (((r = e.memoizedState), n === null))
            if (r === null)
              if (e.stateNode === null) {
                e: {
                  (r = e.type),
                    (n = e.memoizedProps),
                    (u = u.ownerDocument || u);
                  t: switch (r) {
                    case "title":
                      (d = u.getElementsByTagName("title")[0]),
                        (!d ||
                          d[hr] ||
                          d[Nt] ||
                          d.namespaceURI === "http://www.w3.org/2000/svg" ||
                          d.hasAttribute("itemprop")) &&
                          ((d = u.createElement(r)),
                          u.head.insertBefore(
                            d,
                            u.querySelector("head > title")
                          )),
                        bt(d, r, n),
                        (d[Nt] = e),
                        ht(d),
                        (r = d);
                      break e;
                    case "link":
                      var g = iy("link", "href", u).get(r + (n.href || ""));
                      if (g) {
                        for (var x = 0; x < g.length; x++)
                          if (
                            ((d = g[x]),
                            d.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              d.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              d.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              d.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            g.splice(x, 1);
                            break t;
                          }
                      }
                      (d = u.createElement(r)),
                        bt(d, r, n),
                        u.head.appendChild(d);
                      break;
                    case "meta":
                      if (
                        (g = iy("meta", "content", u).get(
                          r + (n.content || "")
                        ))
                      ) {
                        for (x = 0; x < g.length; x++)
                          if (
                            ((d = g[x]),
                            d.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              d.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              d.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              d.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              d.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            g.splice(x, 1);
                            break t;
                          }
                      }
                      (d = u.createElement(r)),
                        bt(d, r, n),
                        u.head.appendChild(d);
                      break;
                    default:
                      throw Error(i(468, r));
                  }
                  (d[Nt] = e), ht(d), (r = d);
                }
                e.stateNode = r;
              } else uy(u, e.type, e.stateNode);
            else e.stateNode = ly(u, r, e.memoizedProps);
          else
            d !== r
              ? (d === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : d.count--,
                r === null
                  ? uy(u, e.type, e.stateNode)
                  : ly(u, r, e.memoizedProps))
              : r === null &&
                e.stateNode !== null &&
                xc(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        Pt(t, e),
          Yt(e),
          r & 512 && (st || n === null || Sa(n, n.return)),
          n !== null && r & 4 && xc(e, e.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (
          (Pt(t, e),
          Yt(e),
          r & 512 && (st || n === null || Sa(n, n.return)),
          e.flags & 32)
        ) {
          u = e.stateNode;
          try {
            vs(u, "");
          } catch (P) {
            Qe(e, e.return, P);
          }
        }
        r & 4 &&
          e.stateNode != null &&
          ((u = e.memoizedProps), xc(e, u, n !== null ? n.memoizedProps : u)),
          r & 1024 && (wc = !0);
        break;
      case 6:
        if ((Pt(t, e), Yt(e), r & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          (r = e.memoizedProps), (n = e.stateNode);
          try {
            n.nodeValue = r;
          } catch (P) {
            Qe(e, e.return, P);
          }
        }
        break;
      case 3:
        if (
          ((Hi = null),
          (u = fa),
          (fa = ki(t.containerInfo)),
          Pt(t, e),
          (fa = u),
          Yt(e),
          r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ll(t.containerInfo);
          } catch (P) {
            Qe(e, e.return, P);
          }
        wc && ((wc = !1), mp(e));
        break;
      case 4:
        (r = fa),
          (fa = ki(e.stateNode.containerInfo)),
          Pt(t, e),
          Yt(e),
          (fa = r);
        break;
      case 12:
        Pt(t, e), Yt(e);
        break;
      case 13:
        Pt(t, e),
          Yt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (Oc = Kt()),
          r & 4 &&
            ((r = e.updateQueue),
            r !== null && ((e.updateQueue = null), Nc(e, r)));
        break;
      case 22:
        u = e.memoizedState !== null;
        var j = n !== null && n.memoizedState !== null,
          k = Ba,
          G = st;
        if (
          ((Ba = k || u),
          (st = G || j),
          Pt(t, e),
          (st = G),
          (Ba = k),
          Yt(e),
          r & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (n === null || j || Ba || st || Gn(e)),
              n = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                j = n = t;
                try {
                  if (((d = j.stateNode), u))
                    (g = d.style),
                      typeof g.setProperty == "function"
                        ? g.setProperty("display", "none", "important")
                        : (g.display = "none");
                  else {
                    x = j.stateNode;
                    var Z = j.memoizedProps.style,
                      B =
                        Z != null && Z.hasOwnProperty("display")
                          ? Z.display
                          : null;
                    x.style.display =
                      B == null || typeof B == "boolean" ? "" : ("" + B).trim();
                  }
                } catch (P) {
                  Qe(j, j.return, P);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                j = t;
                try {
                  j.stateNode.nodeValue = u ? "" : j.memoizedProps;
                } catch (P) {
                  Qe(j, j.return, P);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), (t = t.return);
            }
            n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        r & 4 &&
          ((r = e.updateQueue),
          r !== null &&
            ((n = r.retryQueue),
            n !== null && ((r.retryQueue = null), Nc(e, n))));
        break;
      case 19:
        Pt(t, e),
          Yt(e),
          r & 4 &&
            ((r = e.updateQueue),
            r !== null && ((e.updateQueue = null), Nc(e, r)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Pt(t, e), Yt(e);
    }
  }
  function Yt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, r = e.return; r !== null; ) {
          if (lp(r)) {
            n = r;
            break;
          }
          r = r.return;
        }
        if (n == null) throw Error(i(160));
        switch (n.tag) {
          case 27:
            var u = n.stateNode,
              d = bc(e);
            Ni(e, d, u);
            break;
          case 5:
            var g = n.stateNode;
            n.flags & 32 && (vs(g, ""), (n.flags &= -33));
            var x = bc(e);
            Ni(e, x, g);
            break;
          case 3:
          case 4:
            var j = n.stateNode.containerInfo,
              k = bc(e);
            Sc(e, k, j);
            break;
          default:
            throw Error(i(161));
        }
      } catch (G) {
        Qe(e, e.return, G);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function mp(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        mp(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function fn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) op(e, t.alternate, t), (t = t.sibling);
  }
  function Gn(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          cn(4, t, t.return), Gn(t);
          break;
        case 1:
          Sa(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && sp(t, t.return, n),
            Gn(t);
          break;
        case 27:
          Ir(t.stateNode);
        case 26:
        case 5:
          Sa(t, t.return), Gn(t);
          break;
        case 22:
          t.memoizedState === null && Gn(t);
          break;
        case 30:
          Gn(t);
          break;
        default:
          Gn(t);
      }
      e = e.sibling;
    }
  }
  function dn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var r = t.alternate,
        u = e,
        d = t,
        g = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          dn(u, d, n), Pr(4, d);
          break;
        case 1:
          if (
            (dn(u, d, n),
            (r = d),
            (u = r.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (k) {
              Qe(r, r.return, k);
            }
          if (((r = d), (u = r.updateQueue), u !== null)) {
            var x = r.stateNode;
            try {
              var j = u.shared.hiddenCallbacks;
              if (j !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < j.length; u++)
                  Yh(j[u], x);
            } catch (k) {
              Qe(r, r.return, k);
            }
          }
          n && g & 64 && np(d), Yr(d, d.return);
          break;
        case 27:
          ip(d);
        case 26:
        case 5:
          dn(u, d, n), n && r === null && g & 4 && rp(d), Yr(d, d.return);
          break;
        case 12:
          dn(u, d, n);
          break;
        case 13:
          dn(u, d, n), n && g & 4 && dp(u, d);
          break;
        case 22:
          d.memoizedState === null && dn(u, d, n), Yr(d, d.return);
          break;
        case 30:
          break;
        default:
          dn(u, d, n);
      }
      t = t.sibling;
    }
  }
  function jc(e, t) {
    var n = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && Cr(n));
  }
  function Ec(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Cr(e));
  }
  function wa(e, t, n, r) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) pp(e, t, n, r), (t = t.sibling);
  }
  function pp(e, t, n, r) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        wa(e, t, n, r), u & 2048 && Pr(9, t);
        break;
      case 1:
        wa(e, t, n, r);
        break;
      case 3:
        wa(e, t, n, r),
          u & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Cr(e)));
        break;
      case 12:
        if (u & 2048) {
          wa(e, t, n, r), (e = t.stateNode);
          try {
            var d = t.memoizedProps,
              g = d.id,
              x = d.onPostCommit;
            typeof x == "function" &&
              x(
                g,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (j) {
            Qe(t, t.return, j);
          }
        } else wa(e, t, n, r);
        break;
      case 13:
        wa(e, t, n, r);
        break;
      case 23:
        break;
      case 22:
        (d = t.stateNode),
          (g = t.alternate),
          t.memoizedState !== null
            ? d._visibility & 2
              ? wa(e, t, n, r)
              : Fr(e, t)
            : d._visibility & 2
            ? wa(e, t, n, r)
            : ((d._visibility |= 2),
              Ls(e, t, n, r, (t.subtreeFlags & 10256) !== 0)),
          u & 2048 && jc(g, t);
        break;
      case 24:
        wa(e, t, n, r), u & 2048 && Ec(t.alternate, t);
        break;
      default:
        wa(e, t, n, r);
    }
  }
  function Ls(e, t, n, r, u) {
    for (u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var d = e,
        g = t,
        x = n,
        j = r,
        k = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          Ls(d, g, x, j, u), Pr(8, g);
          break;
        case 23:
          break;
        case 22:
          var G = g.stateNode;
          g.memoizedState !== null
            ? G._visibility & 2
              ? Ls(d, g, x, j, u)
              : Fr(d, g)
            : ((G._visibility |= 2), Ls(d, g, x, j, u)),
            u && k & 2048 && jc(g.alternate, g);
          break;
        case 24:
          Ls(d, g, x, j, u), u && k & 2048 && Ec(g.alternate, g);
          break;
        default:
          Ls(d, g, x, j, u);
      }
      t = t.sibling;
    }
  }
  function Fr(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          r = t,
          u = r.flags;
        switch (r.tag) {
          case 22:
            Fr(n, r), u & 2048 && jc(r.alternate, r);
            break;
          case 24:
            Fr(n, r), u & 2048 && Ec(r.alternate, r);
            break;
          default:
            Fr(n, r);
        }
        t = t.sibling;
      }
  }
  var Gr = 8192;
  function Hs(e) {
    if (e.subtreeFlags & Gr)
      for (e = e.child; e !== null; ) yp(e), (e = e.sibling);
  }
  function yp(e) {
    switch (e.tag) {
      case 26:
        Hs(e),
          e.flags & Gr &&
            e.memoizedState !== null &&
            Xb(fa, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Hs(e);
        break;
      case 3:
      case 4:
        var t = fa;
        (fa = ki(e.stateNode.containerInfo)), Hs(e), (fa = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = Gr), (Gr = 16777216), Hs(e), (Gr = t))
            : Hs(e));
        break;
      default:
        Hs(e);
    }
  }
  function gp(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function Qr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (pt = r), xp(r, e);
        }
      gp(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) vp(e), (e = e.sibling);
  }
  function vp(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Qr(e), e.flags & 2048 && cn(9, e, e.return);
        break;
      case 3:
        Qr(e);
        break;
      case 12:
        Qr(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), ji(e))
          : Qr(e);
        break;
      default:
        Qr(e);
    }
  }
  function ji(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (pt = r), xp(r, e);
        }
      gp(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          cn(8, t, t.return), ji(t);
          break;
        case 22:
          (n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), ji(t));
          break;
        default:
          ji(t);
      }
      e = e.sibling;
    }
  }
  function xp(e, t) {
    for (; pt !== null; ) {
      var n = pt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          cn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var r = n.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          Cr(n.memoizedState.cache);
      }
      if (((r = n.child), r !== null)) (r.return = n), (pt = r);
      else
        e: for (n = e; pt !== null; ) {
          r = pt;
          var u = r.sibling,
            d = r.return;
          if ((cp(r), r === n)) {
            pt = null;
            break e;
          }
          if (u !== null) {
            (u.return = d), (pt = u);
            break e;
          }
          pt = d;
        }
    }
  }
  var ob = {
      getCacheForType: function (e) {
        var t = jt(ot),
          n = t.data.get(e);
        return n === void 0 && ((n = e()), t.data.set(e, n)), n;
      },
    },
    cb = typeof WeakMap == "function" ? WeakMap : Map,
    Be = 0,
    Ke = null,
    Oe = null,
    Ue = 0,
    Ve = 0,
    Ft = null,
    hn = !1,
    qs = !1,
    Ac = !1,
    Pa = 0,
    et = 0,
    mn = 0,
    Qn = 0,
    Tc = 0,
    na = 0,
    Bs = 0,
    Xr = null,
    Lt = null,
    Cc = !1,
    Oc = 0,
    Ei = 1 / 0,
    Ai = null,
    pn = null,
    xt = 0,
    yn = null,
    Vs = null,
    Ps = 0,
    Rc = 0,
    _c = null,
    bp = null,
    $r = 0,
    Dc = null;
  function Gt() {
    if ((Be & 2) !== 0 && Ue !== 0) return Ue & -Ue;
    if (L.T !== null) {
      var e = Os;
      return e !== 0 ? e : qc();
    }
    return kd();
  }
  function Sp() {
    na === 0 && (na = (Ue & 536870912) === 0 || ke ? Dd() : 536870912);
    var e = aa.current;
    return e !== null && (e.flags |= 32), na;
  }
  function Qt(e, t, n) {
    ((e === Ke && (Ve === 2 || Ve === 9)) || e.cancelPendingCommit !== null) &&
      (Ys(e, 0), gn(e, Ue, na, !1)),
      dr(e, n),
      ((Be & 2) === 0 || e !== Ke) &&
        (e === Ke &&
          ((Be & 2) === 0 && (Qn |= n), et === 4 && gn(e, Ue, na, !1)),
        Na(e));
  }
  function wp(e, t, n) {
    if ((Be & 6) !== 0) throw Error(i(327));
    var r = (!n && (t & 124) === 0 && (t & e.expiredLanes) === 0) || Rn(e, t),
      u = r ? hb(e, t) : zc(e, t, !0),
      d = r;
    do {
      if (u === 0) {
        qs && !r && gn(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), d && !fb(n))) {
          (u = zc(e, t, !1)), (d = !1);
          continue;
        }
        if (u === 2) {
          if (((d = t), e.errorRecoveryDisabledLanes & d)) var g = 0;
          else
            (g = e.pendingLanes & -536870913),
              (g = g !== 0 ? g : g & 536870912 ? 536870912 : 0);
          if (g !== 0) {
            t = g;
            e: {
              var x = e;
              u = Xr;
              var j = x.current.memoizedState.isDehydrated;
              if ((j && (Ys(x, g).flags |= 256), (g = zc(x, g, !1)), g !== 2)) {
                if (Ac && !j) {
                  (x.errorRecoveryDisabledLanes |= d), (Qn |= d), (u = 4);
                  break e;
                }
                (d = Lt),
                  (Lt = u),
                  d !== null && (Lt === null ? (Lt = d) : Lt.push.apply(Lt, d));
              }
              u = g;
            }
            if (((d = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          Ys(e, 0), gn(e, t, 0, !0);
          break;
        }
        e: {
          switch (((r = e), (d = u), d)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              gn(r, t, na, !hn);
              break e;
            case 2:
              Lt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && ((u = Oc + 300 - Kt()), 10 < u)) {
            if ((gn(r, t, na, !hn), On(r, 0, !0) !== 0)) break e;
            r.timeoutHandle = Jp(
              Np.bind(null, r, n, Lt, Ai, Cc, t, na, Qn, Bs, hn, d, 2, -0, 0),
              u
            );
            break e;
          }
          Np(r, n, Lt, Ai, Cc, t, na, Qn, Bs, hn, d, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Na(e);
  }
  function Np(e, t, n, r, u, d, g, x, j, k, G, Z, B, P) {
    if (
      ((e.timeoutHandle = -1),
      (Z = t.subtreeFlags),
      (Z & 8192 || (Z & 16785408) === 16785408) &&
        ((tl = { stylesheets: null, count: 0, unsuspend: Qb }),
        yp(t),
        (Z = $b()),
        Z !== null))
    ) {
      (e.cancelPendingCommit = Z(
        Rp.bind(null, e, t, d, n, r, u, g, x, j, G, 1, B, P)
      )),
        gn(e, d, g, !k);
      return;
    }
    Rp(e, t, d, n, r, u, g, x, j);
  }
  function fb(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var r = 0; r < n.length; r++) {
          var u = n[r],
            d = u.getSnapshot;
          u = u.value;
          try {
            if (!Bt(d(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function gn(e, t, n, r) {
    (t &= ~Tc),
      (t &= ~Qn),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      r && (e.warmLanes |= t),
      (r = e.expirationTimes);
    for (var u = t; 0 < u; ) {
      var d = 31 - $e(u),
        g = 1 << d;
      (r[d] = -1), (u &= ~g);
    }
    n !== 0 && Ud(e, n, t);
  }
  function Ti() {
    return (Be & 6) === 0 ? (Kr(0), !1) : !0;
  }
  function Mc() {
    if (Oe !== null) {
      if (Ve === 0) var e = Oe.return;
      else (e = Oe), (Ua = Bn = null), Zo(e), (zs = null), (qr = 0), (e = Oe);
      for (; e !== null; ) ap(e.alternate, e), (e = e.return);
      Oe = null;
    }
  }
  function Ys(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && ((e.timeoutHandle = -1), Ob(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      Mc(),
      (Ke = e),
      (Oe = n = _a(e.current, null)),
      (Ue = t),
      (Ve = 0),
      (Ft = null),
      (hn = !1),
      (qs = Rn(e, t)),
      (Ac = !1),
      (Bs = na = Tc = Qn = mn = et = 0),
      (Lt = Xr = null),
      (Cc = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var r = e.entangledLanes;
    if (r !== 0)
      for (e = e.entanglements, r &= t; 0 < r; ) {
        var u = 31 - $e(r),
          d = 1 << u;
        (t |= e[u]), (r &= ~d);
      }
    return (Pa = t), Kl(), n;
  }
  function jp(e, t) {
    (Ee = null),
      (L.H = mi),
      t === Rr || t === si
        ? ((t = Vh()), (Ve = 3))
        : t === Hh
        ? ((t = Vh()), (Ve = 4))
        : (Ve =
            t === Pm
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (Ft = t),
      Oe === null && ((et = 1), xi(e, It(t, e.current)));
  }
  function Ep() {
    var e = L.H;
    return (L.H = mi), e === null ? mi : e;
  }
  function Ap() {
    var e = L.A;
    return (L.A = ob), e;
  }
  function Uc() {
    (et = 4),
      hn || ((Ue & 4194048) !== Ue && aa.current !== null) || (qs = !0),
      ((mn & 134217727) === 0 && (Qn & 134217727) === 0) ||
        Ke === null ||
        gn(Ke, Ue, na, !1);
  }
  function zc(e, t, n) {
    var r = Be;
    Be |= 2;
    var u = Ep(),
      d = Ap();
    (Ke !== e || Ue !== t) && ((Ai = null), Ys(e, t)), (t = !1);
    var g = et;
    e: do
      try {
        if (Ve !== 0 && Oe !== null) {
          var x = Oe,
            j = Ft;
          switch (Ve) {
            case 8:
              Mc(), (g = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              aa.current === null && (t = !0);
              var k = Ve;
              if (((Ve = 0), (Ft = null), Fs(e, x, j, k), n && qs)) {
                g = 0;
                break e;
              }
              break;
            default:
              (k = Ve), (Ve = 0), (Ft = null), Fs(e, x, j, k);
          }
        }
        db(), (g = et);
        break;
      } catch (G) {
        jp(e, G);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Ua = Bn = null),
      (Be = r),
      (L.H = u),
      (L.A = d),
      Oe === null && ((Ke = null), (Ue = 0), Kl()),
      g
    );
  }
  function db() {
    for (; Oe !== null; ) Tp(Oe);
  }
  function hb(e, t) {
    var n = Be;
    Be |= 2;
    var r = Ep(),
      u = Ap();
    Ke !== e || Ue !== t
      ? ((Ai = null), (Ei = Kt() + 500), Ys(e, t))
      : (qs = Rn(e, t));
    e: do
      try {
        if (Ve !== 0 && Oe !== null) {
          t = Oe;
          var d = Ft;
          t: switch (Ve) {
            case 1:
              (Ve = 0), (Ft = null), Fs(e, t, d, 1);
              break;
            case 2:
            case 9:
              if (qh(d)) {
                (Ve = 0), (Ft = null), Cp(t);
                break;
              }
              (t = function () {
                (Ve !== 2 && Ve !== 9) || Ke !== e || (Ve = 7), Na(e);
              }),
                d.then(t, t);
              break e;
            case 3:
              Ve = 7;
              break e;
            case 4:
              Ve = 5;
              break e;
            case 7:
              qh(d)
                ? ((Ve = 0), (Ft = null), Cp(t))
                : ((Ve = 0), (Ft = null), Fs(e, t, d, 7));
              break;
            case 5:
              var g = null;
              switch (Oe.tag) {
                case 26:
                  g = Oe.memoizedState;
                case 5:
                case 27:
                  var x = Oe;
                  if (!g || oy(g)) {
                    (Ve = 0), (Ft = null);
                    var j = x.sibling;
                    if (j !== null) Oe = j;
                    else {
                      var k = x.return;
                      k !== null ? ((Oe = k), Ci(k)) : (Oe = null);
                    }
                    break t;
                  }
              }
              (Ve = 0), (Ft = null), Fs(e, t, d, 5);
              break;
            case 6:
              (Ve = 0), (Ft = null), Fs(e, t, d, 6);
              break;
            case 8:
              Mc(), (et = 6);
              break e;
            default:
              throw Error(i(462));
          }
        }
        mb();
        break;
      } catch (G) {
        jp(e, G);
      }
    while (!0);
    return (
      (Ua = Bn = null),
      (L.H = r),
      (L.A = u),
      (Be = n),
      Oe !== null ? 0 : ((Ke = null), (Ue = 0), Kl(), et)
    );
  }
  function mb() {
    for (; Oe !== null && !kl(); ) Tp(Oe);
  }
  function Tp(e) {
    var t = ep(e.alternate, e, Pa);
    (e.memoizedProps = e.pendingProps), t === null ? Ci(e) : (Oe = t);
  }
  function Cp(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = $m(n, t, t.pendingProps, t.type, void 0, Ue);
        break;
      case 11:
        t = $m(n, t, t.pendingProps, t.type.render, t.ref, Ue);
        break;
      case 5:
        Zo(t);
      default:
        ap(n, t), (t = Oe = Oh(t, Pa)), (t = ep(n, t, Pa));
    }
    (e.memoizedProps = e.pendingProps), t === null ? Ci(e) : (Oe = t);
  }
  function Fs(e, t, n, r) {
    (Ua = Bn = null), Zo(t), (zs = null), (qr = 0);
    var u = t.return;
    try {
      if (nb(e, u, t, n, Ue)) {
        (et = 1), xi(e, It(n, e.current)), (Oe = null);
        return;
      }
    } catch (d) {
      if (u !== null) throw ((Oe = u), d);
      (et = 1), xi(e, It(n, e.current)), (Oe = null);
      return;
    }
    t.flags & 32768
      ? (ke || r === 1
          ? (e = !0)
          : qs || (Ue & 536870912) !== 0
          ? (e = !1)
          : ((hn = e = !0),
            (r === 2 || r === 9 || r === 3 || r === 6) &&
              ((r = aa.current),
              r !== null && r.tag === 13 && (r.flags |= 16384))),
        Op(t, e))
      : Ci(t);
  }
  function Ci(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Op(t, hn);
        return;
      }
      e = t.return;
      var n = rb(t.alternate, t, Pa);
      if (n !== null) {
        Oe = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Oe = t;
        return;
      }
      Oe = t = e;
    } while (t !== null);
    et === 0 && (et = 5);
  }
  function Op(e, t) {
    do {
      var n = lb(e.alternate, e);
      if (n !== null) {
        (n.flags &= 32767), (Oe = n);
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Oe = e;
        return;
      }
      Oe = e = n;
    } while (e !== null);
    (et = 6), (Oe = null);
  }
  function Rp(e, t, n, r, u, d, g, x, j) {
    e.cancelPendingCommit = null;
    do Oi();
    while (xt !== 0);
    if ((Be & 6) !== 0) throw Error(i(327));
    if (t !== null) {
      if (t === e.current) throw Error(i(177));
      if (
        ((d = t.lanes | t.childLanes),
        (d |= Eo),
        Qv(e, n, d, g, x, j),
        e === Ke && ((Oe = Ke = null), (Ue = 0)),
        (Vs = t),
        (yn = e),
        (Ps = n),
        (Rc = d),
        (_c = u),
        (bp = r),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            vb(q, function () {
              return zp(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (r = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || r)
      ) {
        (r = L.T), (L.T = null), (u = I.p), (I.p = 2), (g = Be), (Be |= 4);
        try {
          ib(e, t, n);
        } finally {
          (Be = g), (I.p = u), (L.T = r);
        }
      }
      (xt = 1), _p(), Dp(), Mp();
    }
  }
  function _p() {
    if (xt === 1) {
      xt = 0;
      var e = yn,
        t = Vs,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        (n = L.T), (L.T = null);
        var r = I.p;
        I.p = 2;
        var u = Be;
        Be |= 4;
        try {
          hp(t, e);
          var d = Xc,
            g = xh(e.containerInfo),
            x = d.focusedElem,
            j = d.selectionRange;
          if (
            g !== x &&
            x &&
            x.ownerDocument &&
            vh(x.ownerDocument.documentElement, x)
          ) {
            if (j !== null && bo(x)) {
              var k = j.start,
                G = j.end;
              if ((G === void 0 && (G = k), "selectionStart" in x))
                (x.selectionStart = k),
                  (x.selectionEnd = Math.min(G, x.value.length));
              else {
                var Z = x.ownerDocument || document,
                  B = (Z && Z.defaultView) || window;
                if (B.getSelection) {
                  var P = B.getSelection(),
                    xe = x.textContent.length,
                    ge = Math.min(j.start, xe),
                    Fe = j.end === void 0 ? ge : Math.min(j.end, xe);
                  !P.extend && ge > Fe && ((g = Fe), (Fe = ge), (ge = g));
                  var D = gh(x, ge),
                    T = gh(x, Fe);
                  if (
                    D &&
                    T &&
                    (P.rangeCount !== 1 ||
                      P.anchorNode !== D.node ||
                      P.anchorOffset !== D.offset ||
                      P.focusNode !== T.node ||
                      P.focusOffset !== T.offset)
                  ) {
                    var z = Z.createRange();
                    z.setStart(D.node, D.offset),
                      P.removeAllRanges(),
                      ge > Fe
                        ? (P.addRange(z), P.extend(T.node, T.offset))
                        : (z.setEnd(T.node, T.offset), P.addRange(z));
                  }
                }
              }
            }
            for (Z = [], P = x; (P = P.parentNode); )
              P.nodeType === 1 &&
                Z.push({ element: P, left: P.scrollLeft, top: P.scrollTop });
            for (
              typeof x.focus == "function" && x.focus(), x = 0;
              x < Z.length;
              x++
            ) {
              var $ = Z[x];
              ($.element.scrollLeft = $.left), ($.element.scrollTop = $.top);
            }
          }
          (Vi = !!Qc), (Xc = Qc = null);
        } finally {
          (Be = u), (I.p = r), (L.T = n);
        }
      }
      (e.current = t), (xt = 2);
    }
  }
  function Dp() {
    if (xt === 2) {
      xt = 0;
      var e = yn,
        t = Vs,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        (n = L.T), (L.T = null);
        var r = I.p;
        I.p = 2;
        var u = Be;
        Be |= 4;
        try {
          op(e, t.alternate, t);
        } finally {
          (Be = u), (I.p = r), (L.T = n);
        }
      }
      xt = 3;
    }
  }
  function Mp() {
    if (xt === 4 || xt === 3) {
      (xt = 0), $u();
      var e = yn,
        t = Vs,
        n = Ps,
        r = bp;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (xt = 5)
        : ((xt = 0), (Vs = yn = null), Up(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (
        (u === 0 && (pn = null),
        Iu(n),
        (t = t.stateNode),
        Se && typeof Se.onCommitFiberRoot == "function")
      )
        try {
          Se.onCommitFiberRoot(ce, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (r !== null) {
        (t = L.T), (u = I.p), (I.p = 2), (L.T = null);
        try {
          for (var d = e.onRecoverableError, g = 0; g < r.length; g++) {
            var x = r[g];
            d(x.value, { componentStack: x.stack });
          }
        } finally {
          (L.T = t), (I.p = u);
        }
      }
      (Ps & 3) !== 0 && Oi(),
        Na(e),
        (u = e.pendingLanes),
        (n & 4194090) !== 0 && (u & 42) !== 0
          ? e === Dc
            ? $r++
            : (($r = 0), (Dc = e))
          : ($r = 0),
        Kr(0);
    }
  }
  function Up(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Cr(t)));
  }
  function Oi(e) {
    return _p(), Dp(), Mp(), zp();
  }
  function zp() {
    if (xt !== 5) return !1;
    var e = yn,
      t = Rc;
    Rc = 0;
    var n = Iu(Ps),
      r = L.T,
      u = I.p;
    try {
      (I.p = 32 > n ? 32 : n), (L.T = null), (n = _c), (_c = null);
      var d = yn,
        g = Ps;
      if (((xt = 0), (Vs = yn = null), (Ps = 0), (Be & 6) !== 0))
        throw Error(i(331));
      var x = Be;
      if (
        ((Be |= 4),
        vp(d.current),
        pp(d, d.current, g, n),
        (Be = x),
        Kr(0, !1),
        Se && typeof Se.onPostCommitFiberRoot == "function")
      )
        try {
          Se.onPostCommitFiberRoot(ce, d);
        } catch {}
      return !0;
    } finally {
      (I.p = u), (L.T = r), Up(e, t);
    }
  }
  function kp(e, t, n) {
    (t = It(n, t)),
      (t = cc(e.stateNode, t, 2)),
      (e = rn(e, t, 2)),
      e !== null && (dr(e, 2), Na(e));
  }
  function Qe(e, t, n) {
    if (e.tag === 3) kp(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          kp(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (pn === null || !pn.has(r)))
          ) {
            (e = It(n, e)),
              (n = Bm(2)),
              (r = rn(t, n, 2)),
              r !== null && (Vm(n, r, t, e), dr(r, 2), Na(r));
            break;
          }
        }
        t = t.return;
      }
  }
  function kc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new cb();
      var u = new Set();
      r.set(t, u);
    } else (u = r.get(t)), u === void 0 && ((u = new Set()), r.set(t, u));
    u.has(n) ||
      ((Ac = !0), u.add(n), (e = pb.bind(null, e, t, n)), t.then(e, e));
  }
  function pb(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      Ke === e &&
        (Ue & n) === n &&
        (et === 4 || (et === 3 && (Ue & 62914560) === Ue && 300 > Kt() - Oc)
          ? (Be & 2) === 0 && Ys(e, 0)
          : (Tc |= n),
        Bs === Ue && (Bs = 0)),
      Na(e);
  }
  function Lp(e, t) {
    t === 0 && (t = Md()), (e = Es(e, t)), e !== null && (dr(e, t), Na(e));
  }
  function yb(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Lp(e, n);
  }
  function gb(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          u = e.memoizedState;
        u !== null && (n = u.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      case 22:
        r = e.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    r !== null && r.delete(t), Lp(e, n);
  }
  function vb(e, t) {
    return cr(e, t);
  }
  var Ri = null,
    Gs = null,
    Lc = !1,
    _i = !1,
    Hc = !1,
    Xn = 0;
  function Na(e) {
    e !== Gs &&
      e.next === null &&
      (Gs === null ? (Ri = Gs = e) : (Gs = Gs.next = e)),
      (_i = !0),
      Lc || ((Lc = !0), bb());
  }
  function Kr(e, t) {
    if (!Hc && _i) {
      Hc = !0;
      do
        for (var n = !1, r = Ri; r !== null; ) {
          if (e !== 0) {
            var u = r.pendingLanes;
            if (u === 0) var d = 0;
            else {
              var g = r.suspendedLanes,
                x = r.pingedLanes;
              (d = (1 << (31 - $e(42 | e) + 1)) - 1),
                (d &= u & ~(g & ~x)),
                (d = d & 201326741 ? (d & 201326741) | 1 : d ? d | 2 : 0);
            }
            d !== 0 && ((n = !0), Vp(r, d));
          } else
            (d = Ue),
              (d = On(
                r,
                r === Ke ? d : 0,
                r.cancelPendingCommit !== null || r.timeoutHandle !== -1
              )),
              (d & 3) === 0 || Rn(r, d) || ((n = !0), Vp(r, d));
          r = r.next;
        }
      while (n);
      Hc = !1;
    }
  }
  function xb() {
    Hp();
  }
  function Hp() {
    _i = Lc = !1;
    var e = 0;
    Xn !== 0 && (Cb() && (e = Xn), (Xn = 0));
    for (var t = Kt(), n = null, r = Ri; r !== null; ) {
      var u = r.next,
        d = qp(r, t);
      d === 0
        ? ((r.next = null),
          n === null ? (Ri = u) : (n.next = u),
          u === null && (Gs = n))
        : ((n = r), (e !== 0 || (d & 3) !== 0) && (_i = !0)),
        (r = u);
    }
    Kr(e);
  }
  function qp(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        u = e.expirationTimes,
        d = e.pendingLanes & -62914561;
      0 < d;

    ) {
      var g = 31 - $e(d),
        x = 1 << g,
        j = u[g];
      j === -1
        ? ((x & n) === 0 || (x & r) !== 0) && (u[g] = Ll(x, t))
        : j <= t && (e.expiredLanes |= x),
        (d &= ~x);
    }
    if (
      ((t = Ke),
      (n = Ue),
      (n = On(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (r = e.callbackNode),
      n === 0 ||
        (e === t && (Ve === 2 || Ve === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        r !== null && r !== null && os(r),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || Rn(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((r !== null && os(r), Iu(n))) {
        case 2:
        case 8:
          n = A;
          break;
        case 32:
          n = q;
          break;
        case 268435456:
          n = ie;
          break;
        default:
          n = q;
      }
      return (
        (r = Bp.bind(null, e)),
        (n = cr(n, r)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      r !== null && r !== null && os(r),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Bp(e, t) {
    if (xt !== 0 && xt !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var n = e.callbackNode;
    if (Oi() && e.callbackNode !== n) return null;
    var r = Ue;
    return (
      (r = On(
        e,
        e === Ke ? r : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      r === 0
        ? null
        : (wp(e, r, t),
          qp(e, Kt()),
          e.callbackNode != null && e.callbackNode === n
            ? Bp.bind(null, e)
            : null)
    );
  }
  function Vp(e, t) {
    if (Oi()) return null;
    wp(e, t, !0);
  }
  function bb() {
    Rb(function () {
      (Be & 6) !== 0 ? cr(fr, xb) : Hp();
    });
  }
  function qc() {
    return Xn === 0 && (Xn = Dd()), Xn;
  }
  function Pp(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : Pl("" + e);
  }
  function Yp(e, t) {
    var n = t.ownerDocument.createElement("input");
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute("form", e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function Sb(e, t, n, r, u) {
    if (t === "submit" && n && n.stateNode === u) {
      var d = Pp((u[Mt] || null).action),
        g = r.submitter;
      g &&
        ((t = (t = g[Mt] || null)
          ? Pp(t.formAction)
          : g.getAttribute("formAction")),
        t !== null && ((d = t), (g = null)));
      var x = new Ql("action", "action", null, r, u);
      e.push({
        event: x,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (r.defaultPrevented) {
                if (Xn !== 0) {
                  var j = g ? Yp(u, g) : new FormData(u);
                  rc(
                    n,
                    { pending: !0, data: j, method: u.method, action: d },
                    null,
                    j
                  );
                }
              } else
                typeof d == "function" &&
                  (x.preventDefault(),
                  (j = g ? Yp(u, g) : new FormData(u)),
                  rc(
                    n,
                    { pending: !0, data: j, method: u.method, action: d },
                    d,
                    j
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Bc = 0; Bc < jo.length; Bc++) {
    var Vc = jo[Bc],
      wb = Vc.toLowerCase(),
      Nb = Vc[0].toUpperCase() + Vc.slice(1);
    ca(wb, "on" + Nb);
  }
  ca(wh, "onAnimationEnd"),
    ca(Nh, "onAnimationIteration"),
    ca(jh, "onAnimationStart"),
    ca("dblclick", "onDoubleClick"),
    ca("focusin", "onFocus"),
    ca("focusout", "onBlur"),
    ca(Bx, "onTransitionRun"),
    ca(Vx, "onTransitionStart"),
    ca(Px, "onTransitionCancel"),
    ca(Eh, "onTransitionEnd"),
    ps("onMouseEnter", ["mouseout", "mouseover"]),
    ps("onMouseLeave", ["mouseout", "mouseover"]),
    ps("onPointerEnter", ["pointerout", "pointerover"]),
    ps("onPointerLeave", ["pointerout", "pointerover"]),
    _n(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    _n(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    _n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    _n(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    _n(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    _n(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Zr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    jb = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Zr)
    );
  function Fp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        u = r.event;
      r = r.listeners;
      e: {
        var d = void 0;
        if (t)
          for (var g = r.length - 1; 0 <= g; g--) {
            var x = r[g],
              j = x.instance,
              k = x.currentTarget;
            if (((x = x.listener), j !== d && u.isPropagationStopped()))
              break e;
            (d = x), (u.currentTarget = k);
            try {
              d(u);
            } catch (G) {
              vi(G);
            }
            (u.currentTarget = null), (d = j);
          }
        else
          for (g = 0; g < r.length; g++) {
            if (
              ((x = r[g]),
              (j = x.instance),
              (k = x.currentTarget),
              (x = x.listener),
              j !== d && u.isPropagationStopped())
            )
              break e;
            (d = x), (u.currentTarget = k);
            try {
              d(u);
            } catch (G) {
              vi(G);
            }
            (u.currentTarget = null), (d = j);
          }
      }
    }
  }
  function Re(e, t) {
    var n = t[Wu];
    n === void 0 && (n = t[Wu] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Gp(t, e, 2, !1), n.add(r));
  }
  function Pc(e, t, n) {
    var r = 0;
    t && (r |= 4), Gp(n, e, r, t);
  }
  var Di = "_reactListening" + Math.random().toString(36).slice(2);
  function Yc(e) {
    if (!e[Di]) {
      (e[Di] = !0),
        Hd.forEach(function (n) {
          n !== "selectionchange" && (jb.has(n) || Pc(n, !1, e), Pc(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Di] || ((t[Di] = !0), Pc("selectionchange", !1, t));
    }
  }
  function Gp(e, t, n, r) {
    switch (py(t)) {
      case 2:
        var u = Jb;
        break;
      case 8:
        u = Ib;
        break;
      default:
        u = nf;
    }
    (n = u.bind(null, t, n, e)),
      (u = void 0),
      !co ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      r
        ? u !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: u })
          : e.addEventListener(t, n, !0)
        : u !== void 0
        ? e.addEventListener(t, n, { passive: u })
        : e.addEventListener(t, n, !1);
  }
  function Fc(e, t, n, r, u) {
    var d = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var g = r.tag;
        if (g === 3 || g === 4) {
          var x = r.stateNode.containerInfo;
          if (x === u) break;
          if (g === 4)
            for (g = r.return; g !== null; ) {
              var j = g.tag;
              if ((j === 3 || j === 4) && g.stateNode.containerInfo === u)
                return;
              g = g.return;
            }
          for (; x !== null; ) {
            if (((g = ds(x)), g === null)) return;
            if (((j = g.tag), j === 5 || j === 6 || j === 26 || j === 27)) {
              r = d = g;
              continue e;
            }
            x = x.parentNode;
          }
        }
        r = r.return;
      }
    Id(function () {
      var k = d,
        G = uo(n),
        Z = [];
      e: {
        var B = Ah.get(e);
        if (B !== void 0) {
          var P = Ql,
            xe = e;
          switch (e) {
            case "keypress":
              if (Fl(n) === 0) break e;
            case "keydown":
            case "keyup":
              P = vx;
              break;
            case "focusin":
              (xe = "focus"), (P = po);
              break;
            case "focusout":
              (xe = "blur"), (P = po);
              break;
            case "beforeblur":
            case "afterblur":
              P = po;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              P = th;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              P = lx;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              P = Sx;
              break;
            case wh:
            case Nh:
            case jh:
              P = ox;
              break;
            case Eh:
              P = Nx;
              break;
            case "scroll":
            case "scrollend":
              P = sx;
              break;
            case "wheel":
              P = Ex;
              break;
            case "copy":
            case "cut":
            case "paste":
              P = fx;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              P = nh;
              break;
            case "toggle":
            case "beforetoggle":
              P = Tx;
          }
          var ge = (t & 4) !== 0,
            Fe = !ge && (e === "scroll" || e === "scrollend"),
            D = ge ? (B !== null ? B + "Capture" : null) : B;
          ge = [];
          for (var T = k, z; T !== null; ) {
            var $ = T;
            if (
              ((z = $.stateNode),
              ($ = $.tag),
              ($ !== 5 && $ !== 26 && $ !== 27) ||
                z === null ||
                D === null ||
                (($ = pr(T, D)), $ != null && ge.push(Jr(T, $, z))),
              Fe)
            )
              break;
            T = T.return;
          }
          0 < ge.length &&
            ((B = new P(B, xe, null, n, G)),
            Z.push({ event: B, listeners: ge }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((B = e === "mouseover" || e === "pointerover"),
            (P = e === "mouseout" || e === "pointerout"),
            B &&
              n !== io &&
              (xe = n.relatedTarget || n.fromElement) &&
              (ds(xe) || xe[fs]))
          )
            break e;
          if (
            (P || B) &&
            ((B =
              G.window === G
                ? G
                : (B = G.ownerDocument)
                ? B.defaultView || B.parentWindow
                : window),
            P
              ? ((xe = n.relatedTarget || n.toElement),
                (P = k),
                (xe = xe ? ds(xe) : null),
                xe !== null &&
                  ((Fe = f(xe)),
                  (ge = xe.tag),
                  xe !== Fe || (ge !== 5 && ge !== 27 && ge !== 6)) &&
                  (xe = null))
              : ((P = null), (xe = k)),
            P !== xe)
          ) {
            if (
              ((ge = th),
              ($ = "onMouseLeave"),
              (D = "onMouseEnter"),
              (T = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ge = nh),
                ($ = "onPointerLeave"),
                (D = "onPointerEnter"),
                (T = "pointer")),
              (Fe = P == null ? B : mr(P)),
              (z = xe == null ? B : mr(xe)),
              (B = new ge($, T + "leave", P, n, G)),
              (B.target = Fe),
              (B.relatedTarget = z),
              ($ = null),
              ds(G) === k &&
                ((ge = new ge(D, T + "enter", xe, n, G)),
                (ge.target = z),
                (ge.relatedTarget = Fe),
                ($ = ge)),
              (Fe = $),
              P && xe)
            )
              t: {
                for (ge = P, D = xe, T = 0, z = ge; z; z = Qs(z)) T++;
                for (z = 0, $ = D; $; $ = Qs($)) z++;
                for (; 0 < T - z; ) (ge = Qs(ge)), T--;
                for (; 0 < z - T; ) (D = Qs(D)), z--;
                for (; T--; ) {
                  if (ge === D || (D !== null && ge === D.alternate)) break t;
                  (ge = Qs(ge)), (D = Qs(D));
                }
                ge = null;
              }
            else ge = null;
            P !== null && Qp(Z, B, P, ge, !1),
              xe !== null && Fe !== null && Qp(Z, Fe, xe, ge, !0);
          }
        }
        e: {
          if (
            ((B = k ? mr(k) : window),
            (P = B.nodeName && B.nodeName.toLowerCase()),
            P === "select" || (P === "input" && B.type === "file"))
          )
            var oe = fh;
          else if (oh(B))
            if (dh) oe = Lx;
            else {
              oe = zx;
              var Ae = Ux;
            }
          else
            (P = B.nodeName),
              !P ||
              P.toLowerCase() !== "input" ||
              (B.type !== "checkbox" && B.type !== "radio")
                ? k && lo(k.elementType) && (oe = fh)
                : (oe = kx);
          if (oe && (oe = oe(e, k))) {
            ch(Z, oe, n, G);
            break e;
          }
          Ae && Ae(e, B, k),
            e === "focusout" &&
              k &&
              B.type === "number" &&
              k.memoizedProps.value != null &&
              ro(B, "number", B.value);
        }
        switch (((Ae = k ? mr(k) : window), e)) {
          case "focusin":
            (oh(Ae) || Ae.contentEditable === "true") &&
              ((ws = Ae), (So = k), (Nr = null));
            break;
          case "focusout":
            Nr = So = ws = null;
            break;
          case "mousedown":
            wo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (wo = !1), bh(Z, n, G);
            break;
          case "selectionchange":
            if (qx) break;
          case "keydown":
          case "keyup":
            bh(Z, n, G);
        }
        var he;
        if (go)
          e: {
            switch (e) {
              case "compositionstart":
                var ve = "onCompositionStart";
                break e;
              case "compositionend":
                ve = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ve = "onCompositionUpdate";
                break e;
            }
            ve = void 0;
          }
        else
          Ss
            ? ih(e, n) && (ve = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (ve = "onCompositionStart");
        ve &&
          (sh &&
            n.locale !== "ko" &&
            (Ss || ve !== "onCompositionStart"
              ? ve === "onCompositionEnd" && Ss && (he = Wd())
              : ((tn = G),
                (fo = "value" in tn ? tn.value : tn.textContent),
                (Ss = !0))),
          (Ae = Mi(k, ve)),
          0 < Ae.length &&
            ((ve = new ah(ve, e, null, n, G)),
            Z.push({ event: ve, listeners: Ae }),
            he
              ? (ve.data = he)
              : ((he = uh(n)), he !== null && (ve.data = he)))),
          (he = Ox ? Rx(e, n) : _x(e, n)) &&
            ((ve = Mi(k, "onBeforeInput")),
            0 < ve.length &&
              ((Ae = new ah("onBeforeInput", "beforeinput", null, n, G)),
              Z.push({ event: Ae, listeners: ve }),
              (Ae.data = he))),
          Sb(Z, e, k, n, G);
      }
      Fp(Z, t);
    });
  }
  function Jr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Mi(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var u = e,
        d = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          d === null ||
          ((u = pr(e, n)),
          u != null && r.unshift(Jr(e, u, d)),
          (u = pr(e, t)),
          u != null && r.push(Jr(e, u, d))),
        e.tag === 3)
      )
        return r;
      e = e.return;
    }
    return [];
  }
  function Qs(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Qp(e, t, n, r, u) {
    for (var d = t._reactName, g = []; n !== null && n !== r; ) {
      var x = n,
        j = x.alternate,
        k = x.stateNode;
      if (((x = x.tag), j !== null && j === r)) break;
      (x !== 5 && x !== 26 && x !== 27) ||
        k === null ||
        ((j = k),
        u
          ? ((k = pr(n, d)), k != null && g.unshift(Jr(n, k, j)))
          : u || ((k = pr(n, d)), k != null && g.push(Jr(n, k, j)))),
        (n = n.return);
    }
    g.length !== 0 && e.push({ event: t, listeners: g });
  }
  var Eb = /\r\n?/g,
    Ab = /\u0000|\uFFFD/g;
  function Xp(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Eb,
        `
`
      )
      .replace(Ab, "");
  }
  function $p(e, t) {
    return (t = Xp(t)), Xp(e) === t;
  }
  function Ui() {}
  function Ye(e, t, n, r, u, d) {
    switch (n) {
      case "children":
        typeof r == "string"
          ? t === "body" || (t === "textarea" && r === "") || vs(e, r)
          : (typeof r == "number" || typeof r == "bigint") &&
            t !== "body" &&
            vs(e, "" + r);
        break;
      case "className":
        ql(e, "class", r);
        break;
      case "tabIndex":
        ql(e, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ql(e, n, r);
        break;
      case "style":
        Zd(e, r, d);
        break;
      case "data":
        if (t !== "object") {
          ql(e, "data", r);
          break;
        }
      case "src":
      case "href":
        if (r === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (
          r == null ||
          typeof r == "function" ||
          typeof r == "symbol" ||
          typeof r == "boolean"
        ) {
          e.removeAttribute(n);
          break;
        }
        (r = Pl("" + r)), e.setAttribute(n, r);
        break;
      case "action":
      case "formAction":
        if (typeof r == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof d == "function" &&
            (n === "formAction"
              ? (t !== "input" && Ye(e, t, "name", u.name, u, null),
                Ye(e, t, "formEncType", u.formEncType, u, null),
                Ye(e, t, "formMethod", u.formMethod, u, null),
                Ye(e, t, "formTarget", u.formTarget, u, null))
              : (Ye(e, t, "encType", u.encType, u, null),
                Ye(e, t, "method", u.method, u, null),
                Ye(e, t, "target", u.target, u, null)));
        if (r == null || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(n);
          break;
        }
        (r = Pl("" + r)), e.setAttribute(n, r);
        break;
      case "onClick":
        r != null && (e.onclick = Ui);
        break;
      case "onScroll":
        r != null && Re("scroll", e);
        break;
      case "onScrollEnd":
        r != null && Re("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
          if (((n = r.__html), n != null)) {
            if (u.children != null) throw Error(i(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "muted":
        e.muted = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          r == null ||
          typeof r == "function" ||
          typeof r == "boolean" ||
          typeof r == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (n = Pl("" + r)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        r != null && typeof r != "function" && typeof r != "symbol"
          ? e.setAttribute(n, "" + r)
          : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        r && typeof r != "function" && typeof r != "symbol"
          ? e.setAttribute(n, "")
          : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        r === !0
          ? e.setAttribute(n, "")
          : r !== !1 &&
            r != null &&
            typeof r != "function" &&
            typeof r != "symbol"
          ? e.setAttribute(n, r)
          : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        !isNaN(r) &&
        1 <= r
          ? e.setAttribute(n, r)
          : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r)
          ? e.removeAttribute(n)
          : e.setAttribute(n, r);
        break;
      case "popover":
        Re("beforetoggle", e), Re("toggle", e), Hl(e, "popover", r);
        break;
      case "xlinkActuate":
        Oa(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
        break;
      case "xlinkArcrole":
        Oa(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
        break;
      case "xlinkRole":
        Oa(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
        break;
      case "xlinkShow":
        Oa(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
        break;
      case "xlinkTitle":
        Oa(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
        break;
      case "xlinkType":
        Oa(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
        break;
      case "xmlBase":
        Oa(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
        break;
      case "xmlLang":
        Oa(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
        break;
      case "xmlSpace":
        Oa(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
        break;
      case "is":
        Hl(e, "is", r);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = ax.get(n) || n), Hl(e, n, r));
    }
  }
  function Gc(e, t, n, r, u, d) {
    switch (n) {
      case "style":
        Zd(e, r, d);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
          if (((n = r.__html), n != null)) {
            if (u.children != null) throw Error(i(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof r == "string"
          ? vs(e, r)
          : (typeof r == "number" || typeof r == "bigint") && vs(e, "" + r);
        break;
      case "onScroll":
        r != null && Re("scroll", e);
        break;
      case "onScrollEnd":
        r != null && Re("scrollend", e);
        break;
      case "onClick":
        r != null && (e.onclick = Ui);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!qd.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((u = n.endsWith("Capture")),
              (t = n.slice(2, u ? n.length - 7 : void 0)),
              (d = e[Mt] || null),
              (d = d != null ? d[n] : null),
              typeof d == "function" && e.removeEventListener(t, d, u),
              typeof r == "function")
            ) {
              typeof d != "function" &&
                d !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, r, u);
              break e;
            }
            n in e
              ? (e[n] = r)
              : r === !0
              ? e.setAttribute(n, "")
              : Hl(e, n, r);
          }
    }
  }
  function bt(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Re("error", e), Re("load", e);
        var r = !1,
          u = !1,
          d;
        for (d in n)
          if (n.hasOwnProperty(d)) {
            var g = n[d];
            if (g != null)
              switch (d) {
                case "src":
                  r = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, t));
                default:
                  Ye(e, t, d, g, n, null);
              }
          }
        u && Ye(e, t, "srcSet", n.srcSet, n, null),
          r && Ye(e, t, "src", n.src, n, null);
        return;
      case "input":
        Re("invalid", e);
        var x = (d = g = u = null),
          j = null,
          k = null;
        for (r in n)
          if (n.hasOwnProperty(r)) {
            var G = n[r];
            if (G != null)
              switch (r) {
                case "name":
                  u = G;
                  break;
                case "type":
                  g = G;
                  break;
                case "checked":
                  j = G;
                  break;
                case "defaultChecked":
                  k = G;
                  break;
                case "value":
                  d = G;
                  break;
                case "defaultValue":
                  x = G;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (G != null) throw Error(i(137, t));
                  break;
                default:
                  Ye(e, t, r, G, n, null);
              }
          }
        Qd(e, d, x, j, k, g, u, !1), Bl(e);
        return;
      case "select":
        Re("invalid", e), (r = g = d = null);
        for (u in n)
          if (n.hasOwnProperty(u) && ((x = n[u]), x != null))
            switch (u) {
              case "value":
                d = x;
                break;
              case "defaultValue":
                g = x;
                break;
              case "multiple":
                r = x;
              default:
                Ye(e, t, u, x, n, null);
            }
        (t = d),
          (n = g),
          (e.multiple = !!r),
          t != null ? gs(e, !!r, t, !1) : n != null && gs(e, !!r, n, !0);
        return;
      case "textarea":
        Re("invalid", e), (d = u = r = null);
        for (g in n)
          if (n.hasOwnProperty(g) && ((x = n[g]), x != null))
            switch (g) {
              case "value":
                r = x;
                break;
              case "defaultValue":
                u = x;
                break;
              case "children":
                d = x;
                break;
              case "dangerouslySetInnerHTML":
                if (x != null) throw Error(i(91));
                break;
              default:
                Ye(e, t, g, x, n, null);
            }
        $d(e, r, u, d), Bl(e);
        return;
      case "option":
        for (j in n)
          if (n.hasOwnProperty(j) && ((r = n[j]), r != null))
            switch (j) {
              case "selected":
                e.selected =
                  r && typeof r != "function" && typeof r != "symbol";
                break;
              default:
                Ye(e, t, j, r, n, null);
            }
        return;
      case "dialog":
        Re("beforetoggle", e), Re("toggle", e), Re("cancel", e), Re("close", e);
        break;
      case "iframe":
      case "object":
        Re("load", e);
        break;
      case "video":
      case "audio":
        for (r = 0; r < Zr.length; r++) Re(Zr[r], e);
        break;
      case "image":
        Re("error", e), Re("load", e);
        break;
      case "details":
        Re("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Re("error", e), Re("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (k in n)
          if (n.hasOwnProperty(k) && ((r = n[k]), r != null))
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, t));
              default:
                Ye(e, t, k, r, n, null);
            }
        return;
      default:
        if (lo(t)) {
          for (G in n)
            n.hasOwnProperty(G) &&
              ((r = n[G]), r !== void 0 && Gc(e, t, G, r, n, void 0));
          return;
        }
    }
    for (x in n)
      n.hasOwnProperty(x) && ((r = n[x]), r != null && Ye(e, t, x, r, n, null));
  }
  function Tb(e, t, n, r) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          d = null,
          g = null,
          x = null,
          j = null,
          k = null,
          G = null;
        for (P in n) {
          var Z = n[P];
          if (n.hasOwnProperty(P) && Z != null)
            switch (P) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                j = Z;
              default:
                r.hasOwnProperty(P) || Ye(e, t, P, null, r, Z);
            }
        }
        for (var B in r) {
          var P = r[B];
          if (((Z = n[B]), r.hasOwnProperty(B) && (P != null || Z != null)))
            switch (B) {
              case "type":
                d = P;
                break;
              case "name":
                u = P;
                break;
              case "checked":
                k = P;
                break;
              case "defaultChecked":
                G = P;
                break;
              case "value":
                g = P;
                break;
              case "defaultValue":
                x = P;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (P != null) throw Error(i(137, t));
                break;
              default:
                P !== Z && Ye(e, t, B, P, r, Z);
            }
        }
        so(e, g, x, j, k, G, d, u);
        return;
      case "select":
        P = g = x = B = null;
        for (d in n)
          if (((j = n[d]), n.hasOwnProperty(d) && j != null))
            switch (d) {
              case "value":
                break;
              case "multiple":
                P = j;
              default:
                r.hasOwnProperty(d) || Ye(e, t, d, null, r, j);
            }
        for (u in r)
          if (
            ((d = r[u]),
            (j = n[u]),
            r.hasOwnProperty(u) && (d != null || j != null))
          )
            switch (u) {
              case "value":
                B = d;
                break;
              case "defaultValue":
                x = d;
                break;
              case "multiple":
                g = d;
              default:
                d !== j && Ye(e, t, u, d, r, j);
            }
        (t = x),
          (n = g),
          (r = P),
          B != null
            ? gs(e, !!n, B, !1)
            : !!r != !!n &&
              (t != null ? gs(e, !!n, t, !0) : gs(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        P = B = null;
        for (x in n)
          if (
            ((u = n[x]),
            n.hasOwnProperty(x) && u != null && !r.hasOwnProperty(x))
          )
            switch (x) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ye(e, t, x, null, r, u);
            }
        for (g in r)
          if (
            ((u = r[g]),
            (d = n[g]),
            r.hasOwnProperty(g) && (u != null || d != null))
          )
            switch (g) {
              case "value":
                B = u;
                break;
              case "defaultValue":
                P = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(i(91));
                break;
              default:
                u !== d && Ye(e, t, g, u, r, d);
            }
        Xd(e, B, P);
        return;
      case "option":
        for (var xe in n)
          if (
            ((B = n[xe]),
            n.hasOwnProperty(xe) && B != null && !r.hasOwnProperty(xe))
          )
            switch (xe) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ye(e, t, xe, null, r, B);
            }
        for (j in r)
          if (
            ((B = r[j]),
            (P = n[j]),
            r.hasOwnProperty(j) && B !== P && (B != null || P != null))
          )
            switch (j) {
              case "selected":
                e.selected =
                  B && typeof B != "function" && typeof B != "symbol";
                break;
              default:
                Ye(e, t, j, B, r, P);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ge in n)
          (B = n[ge]),
            n.hasOwnProperty(ge) &&
              B != null &&
              !r.hasOwnProperty(ge) &&
              Ye(e, t, ge, null, r, B);
        for (k in r)
          if (
            ((B = r[k]),
            (P = n[k]),
            r.hasOwnProperty(k) && B !== P && (B != null || P != null))
          )
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (B != null) throw Error(i(137, t));
                break;
              default:
                Ye(e, t, k, B, r, P);
            }
        return;
      default:
        if (lo(t)) {
          for (var Fe in n)
            (B = n[Fe]),
              n.hasOwnProperty(Fe) &&
                B !== void 0 &&
                !r.hasOwnProperty(Fe) &&
                Gc(e, t, Fe, void 0, r, B);
          for (G in r)
            (B = r[G]),
              (P = n[G]),
              !r.hasOwnProperty(G) ||
                B === P ||
                (B === void 0 && P === void 0) ||
                Gc(e, t, G, B, r, P);
          return;
        }
    }
    for (var D in n)
      (B = n[D]),
        n.hasOwnProperty(D) &&
          B != null &&
          !r.hasOwnProperty(D) &&
          Ye(e, t, D, null, r, B);
    for (Z in r)
      (B = r[Z]),
        (P = n[Z]),
        !r.hasOwnProperty(Z) ||
          B === P ||
          (B == null && P == null) ||
          Ye(e, t, Z, B, r, P);
  }
  var Qc = null,
    Xc = null;
  function zi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Kp(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Zp(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function $c(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Kc = null;
  function Cb() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Kc
        ? !1
        : ((Kc = e), !0)
      : ((Kc = null), !1);
  }
  var Jp = typeof setTimeout == "function" ? setTimeout : void 0,
    Ob = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ip = typeof Promise == "function" ? Promise : void 0,
    Rb =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ip < "u"
        ? function (e) {
            return Ip.resolve(null).then(e).catch(_b);
          }
        : Jp;
  function _b(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function vn(e) {
    return e === "head";
  }
  function Wp(e, t) {
    var n = t,
      r = 0,
      u = 0;
    do {
      var d = n.nextSibling;
      if ((e.removeChild(n), d && d.nodeType === 8))
        if (((n = d.data), n === "/$")) {
          if (0 < r && 8 > r) {
            n = r;
            var g = e.ownerDocument;
            if ((n & 1 && Ir(g.documentElement), n & 2 && Ir(g.body), n & 4))
              for (n = g.head, Ir(n), g = n.firstChild; g; ) {
                var x = g.nextSibling,
                  j = g.nodeName;
                g[hr] ||
                  j === "SCRIPT" ||
                  j === "STYLE" ||
                  (j === "LINK" && g.rel.toLowerCase() === "stylesheet") ||
                  n.removeChild(g),
                  (g = x);
              }
          }
          if (u === 0) {
            e.removeChild(d), ll(t);
            return;
          }
          u--;
        } else
          n === "$" || n === "$?" || n === "$!"
            ? u++
            : (r = n.charCodeAt(0) - 48);
      else r = 0;
      n = d;
    } while (n);
    ll(t);
  }
  function Zc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Zc(n), eo(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function Db(e, t, n, r) {
    for (; e.nodeType === 1; ) {
      var u = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (r) {
        if (!e[hr])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((d = e.getAttribute("rel")),
                d === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                d !== u.rel ||
                e.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                e.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                e.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((d = e.getAttribute("src")),
                (d !== (u.src == null ? null : u.src) ||
                  e.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  e.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  d &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var d = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === d) return e;
      } else return e;
      if (((e = da(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Mb(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = da(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Jc(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function Ub(e, t) {
    var n = e.ownerDocument;
    if (e.data !== "$?" || n.readyState === "complete") t();
    else {
      var r = function () {
        t(), n.removeEventListener("DOMContentLoaded", r);
      };
      n.addEventListener("DOMContentLoaded", r), (e._reactRetry = r);
    }
  }
  function da(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var Ic = null;
  function ey(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function ty(e, t, n) {
    switch (((t = zi(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(i(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(i(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(i(454));
        return e;
      default:
        throw Error(i(451));
    }
  }
  function Ir(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    eo(e);
  }
  var sa = new Map(),
    ay = new Set();
  function ki(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument;
  }
  var Ya = I.d;
  I.d = { f: zb, r: kb, D: Lb, C: Hb, L: qb, m: Bb, X: Pb, S: Vb, M: Yb };
  function zb() {
    var e = Ya.f(),
      t = Ti();
    return e || t;
  }
  function kb(e) {
    var t = hs(e);
    t !== null && t.tag === 5 && t.type === "form" ? wm(t) : Ya.r(e);
  }
  var Xs = typeof document > "u" ? null : document;
  function ny(e, t, n) {
    var r = Xs;
    if (r && typeof t == "string" && t) {
      var u = Jt(t);
      (u = 'link[rel="' + e + '"][href="' + u + '"]'),
        typeof n == "string" && (u += '[crossorigin="' + n + '"]'),
        ay.has(u) ||
          (ay.add(u),
          (e = { rel: e, crossOrigin: n, href: t }),
          r.querySelector(u) === null &&
            ((t = r.createElement("link")),
            bt(t, "link", e),
            ht(t),
            r.head.appendChild(t)));
    }
  }
  function Lb(e) {
    Ya.D(e), ny("dns-prefetch", e, null);
  }
  function Hb(e, t) {
    Ya.C(e, t), ny("preconnect", e, t);
  }
  function qb(e, t, n) {
    Ya.L(e, t, n);
    var r = Xs;
    if (r && e && t) {
      var u = 'link[rel="preload"][as="' + Jt(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((u += '[imagesrcset="' + Jt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (u += '[imagesizes="' + Jt(n.imageSizes) + '"]'))
        : (u += '[href="' + Jt(e) + '"]');
      var d = u;
      switch (t) {
        case "style":
          d = $s(e);
          break;
        case "script":
          d = Ks(e);
      }
      sa.has(d) ||
        ((e = v(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n
        )),
        sa.set(d, e),
        r.querySelector(u) !== null ||
          (t === "style" && r.querySelector(Wr(d))) ||
          (t === "script" && r.querySelector(el(d))) ||
          ((t = r.createElement("link")),
          bt(t, "link", e),
          ht(t),
          r.head.appendChild(t)));
    }
  }
  function Bb(e, t) {
    Ya.m(e, t);
    var n = Xs;
    if (n && e) {
      var r = t && typeof t.as == "string" ? t.as : "script",
        u =
          'link[rel="modulepreload"][as="' + Jt(r) + '"][href="' + Jt(e) + '"]',
        d = u;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = Ks(e);
      }
      if (
        !sa.has(d) &&
        ((e = v({ rel: "modulepreload", href: e }, t)),
        sa.set(d, e),
        n.querySelector(u) === null)
      ) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(el(d))) return;
        }
        (r = n.createElement("link")),
          bt(r, "link", e),
          ht(r),
          n.head.appendChild(r);
      }
    }
  }
  function Vb(e, t, n) {
    Ya.S(e, t, n);
    var r = Xs;
    if (r && e) {
      var u = ms(r).hoistableStyles,
        d = $s(e);
      t = t || "default";
      var g = u.get(d);
      if (!g) {
        var x = { loading: 0, preload: null };
        if ((g = r.querySelector(Wr(d)))) x.loading = 5;
        else {
          (e = v({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = sa.get(d)) && Wc(e, n);
          var j = (g = r.createElement("link"));
          ht(j),
            bt(j, "link", e),
            (j._p = new Promise(function (k, G) {
              (j.onload = k), (j.onerror = G);
            })),
            j.addEventListener("load", function () {
              x.loading |= 1;
            }),
            j.addEventListener("error", function () {
              x.loading |= 2;
            }),
            (x.loading |= 4),
            Li(g, t, r);
        }
        (g = { type: "stylesheet", instance: g, count: 1, state: x }),
          u.set(d, g);
      }
    }
  }
  function Pb(e, t) {
    Ya.X(e, t);
    var n = Xs;
    if (n && e) {
      var r = ms(n).hoistableScripts,
        u = Ks(e),
        d = r.get(u);
      d ||
        ((d = n.querySelector(el(u))),
        d ||
          ((e = v({ src: e, async: !0 }, t)),
          (t = sa.get(u)) && ef(e, t),
          (d = n.createElement("script")),
          ht(d),
          bt(d, "link", e),
          n.head.appendChild(d)),
        (d = { type: "script", instance: d, count: 1, state: null }),
        r.set(u, d));
    }
  }
  function Yb(e, t) {
    Ya.M(e, t);
    var n = Xs;
    if (n && e) {
      var r = ms(n).hoistableScripts,
        u = Ks(e),
        d = r.get(u);
      d ||
        ((d = n.querySelector(el(u))),
        d ||
          ((e = v({ src: e, async: !0, type: "module" }, t)),
          (t = sa.get(u)) && ef(e, t),
          (d = n.createElement("script")),
          ht(d),
          bt(d, "link", e),
          n.head.appendChild(d)),
        (d = { type: "script", instance: d, count: 1, state: null }),
        r.set(u, d));
    }
  }
  function sy(e, t, n, r) {
    var u = (u = be.current) ? ki(u) : null;
    if (!u) throw Error(i(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((t = $s(n.href)),
            (n = ms(u).hoistableStyles),
            (r = n.get(t)),
            r ||
              ((r = { type: "style", instance: null, count: 0, state: null }),
              n.set(t, r)),
            r)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          e = $s(n.href);
          var d = ms(u).hoistableStyles,
            g = d.get(e);
          if (
            (g ||
              ((u = u.ownerDocument || u),
              (g = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              d.set(e, g),
              (d = u.querySelector(Wr(e))) &&
                !d._p &&
                ((g.instance = d), (g.state.loading = 5)),
              sa.has(e) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                sa.set(e, n),
                d || Fb(u, e, n, g.state))),
            t && r === null)
          )
            throw Error(i(528, ""));
          return g;
        }
        if (t && r !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return (
          (t = n.async),
          (n = n.src),
          typeof n == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Ks(n)),
              (n = ms(u).hoistableScripts),
              (r = n.get(t)),
              r ||
                ((r = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, r)),
              r)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, e));
    }
  }
  function $s(e) {
    return 'href="' + Jt(e) + '"';
  }
  function Wr(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function ry(e) {
    return v({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Fb(e, t, n, r) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (r.loading = 1)
      : ((t = e.createElement("link")),
        (r.preload = t),
        t.addEventListener("load", function () {
          return (r.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (r.loading |= 2);
        }),
        bt(t, "link", n),
        ht(t),
        e.head.appendChild(t));
  }
  function Ks(e) {
    return '[src="' + Jt(e) + '"]';
  }
  function el(e) {
    return "script[async]" + e;
  }
  function ly(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var r = e.querySelector('style[data-href~="' + Jt(n.href) + '"]');
          if (r) return (t.instance = r), ht(r), r;
          var u = v({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (r = (e.ownerDocument || e).createElement("style")),
            ht(r),
            bt(r, "style", u),
            Li(r, n.precedence, e),
            (t.instance = r)
          );
        case "stylesheet":
          u = $s(n.href);
          var d = e.querySelector(Wr(u));
          if (d) return (t.state.loading |= 4), (t.instance = d), ht(d), d;
          (r = ry(n)),
            (u = sa.get(u)) && Wc(r, u),
            (d = (e.ownerDocument || e).createElement("link")),
            ht(d);
          var g = d;
          return (
            (g._p = new Promise(function (x, j) {
              (g.onload = x), (g.onerror = j);
            })),
            bt(d, "link", r),
            (t.state.loading |= 4),
            Li(d, n.precedence, e),
            (t.instance = d)
          );
        case "script":
          return (
            (d = Ks(n.src)),
            (u = e.querySelector(el(d)))
              ? ((t.instance = u), ht(u), u)
              : ((r = n),
                (u = sa.get(d)) && ((r = v({}, n)), ef(r, u)),
                (e = e.ownerDocument || e),
                (u = e.createElement("script")),
                ht(u),
                bt(u, "link", r),
                e.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(i(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((r = t.instance), (t.state.loading |= 4), Li(r, n.precedence, e));
    return t.instance;
  }
  function Li(e, t, n) {
    for (
      var r = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = r.length ? r[r.length - 1] : null,
        d = u,
        g = 0;
      g < r.length;
      g++
    ) {
      var x = r[g];
      if (x.dataset.precedence === t) d = x;
      else if (d !== u) break;
    }
    d
      ? d.parentNode.insertBefore(e, d.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function Wc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function ef(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var Hi = null;
  function iy(e, t, n) {
    if (Hi === null) {
      var r = new Map(),
        u = (Hi = new Map());
      u.set(n, r);
    } else (u = Hi), (r = u.get(n)), r || ((r = new Map()), u.set(n, r));
    if (r.has(e)) return r;
    for (
      r.set(e, null), n = n.getElementsByTagName(e), u = 0;
      u < n.length;
      u++
    ) {
      var d = n[u];
      if (
        !(
          d[hr] ||
          d[Nt] ||
          (e === "link" && d.getAttribute("rel") === "stylesheet")
        ) &&
        d.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var g = d.getAttribute(t) || "";
        g = e + g;
        var x = r.get(g);
        x ? x.push(d) : r.set(g, [d]);
      }
    }
    return r;
  }
  function uy(e, t, n) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null
      );
  }
  function Gb(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled), typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function oy(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var tl = null;
  function Qb() {}
  function Xb(e, t, n) {
    if (tl === null) throw Error(i(475));
    var r = tl;
    if (
      t.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var u = $s(n.href),
          d = e.querySelector(Wr(u));
        if (d) {
          (e = d._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (r.count++, (r = qi.bind(r)), e.then(r, r)),
            (t.state.loading |= 4),
            (t.instance = d),
            ht(d);
          return;
        }
        (d = e.ownerDocument || e),
          (n = ry(n)),
          (u = sa.get(u)) && Wc(n, u),
          (d = d.createElement("link")),
          ht(d);
        var g = d;
        (g._p = new Promise(function (x, j) {
          (g.onload = x), (g.onerror = j);
        })),
          bt(d, "link", n),
          (t.instance = d);
      }
      r.stylesheets === null && (r.stylesheets = new Map()),
        r.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (r.count++,
          (t = qi.bind(r)),
          e.addEventListener("load", t),
          e.addEventListener("error", t));
    }
  }
  function $b() {
    if (tl === null) throw Error(i(475));
    var e = tl;
    return (
      e.stylesheets && e.count === 0 && tf(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var n = setTimeout(function () {
              if ((e.stylesheets && tf(e, e.stylesheets), e.unsuspend)) {
                var r = e.unsuspend;
                (e.unsuspend = null), r();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function qi() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) tf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Bi = null;
  function tf(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Bi = new Map()),
        t.forEach(Kb, e),
        (Bi = null),
        qi.call(e));
  }
  function Kb(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Bi.get(e);
      if (n) var r = n.get(null);
      else {
        (n = new Map()), Bi.set(e, n);
        for (
          var u = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            d = 0;
          d < u.length;
          d++
        ) {
          var g = u[d];
          (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") &&
            (n.set(g.dataset.precedence, g), (r = g));
        }
        r && n.set(null, r);
      }
      (u = t.instance),
        (g = u.getAttribute("data-precedence")),
        (d = n.get(g) || r),
        d === r && n.set(null, u),
        n.set(g, u),
        this.count++,
        (r = qi.bind(this)),
        u.addEventListener("load", r),
        u.addEventListener("error", r),
        d
          ? d.parentNode.insertBefore(u, d.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(u, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var al = {
    $$typeof: V,
    Provider: null,
    Consumer: null,
    _currentValue: re,
    _currentValue2: re,
    _threadCount: 0,
  };
  function Zb(e, t, n, r, u, d, g, x) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Zu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Zu(0)),
      (this.hiddenUpdates = Zu(null)),
      (this.identifierPrefix = r),
      (this.onUncaughtError = u),
      (this.onCaughtError = d),
      (this.onRecoverableError = g),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = x),
      (this.incompleteTransitions = new Map());
  }
  function cy(e, t, n, r, u, d, g, x, j, k, G, Z) {
    return (
      (e = new Zb(e, t, n, g, x, j, k, Z)),
      (t = 1),
      d === !0 && (t |= 24),
      (d = Vt(3, null, null, t)),
      (e.current = d),
      (d.stateNode = e),
      (t = ko()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (d.memoizedState = { element: r, isDehydrated: n, cache: t }),
      Bo(d),
      e
    );
  }
  function fy(e) {
    return e ? ((e = As), e) : As;
  }
  function dy(e, t, n, r, u, d) {
    (u = fy(u)),
      r.context === null ? (r.context = u) : (r.pendingContext = u),
      (r = sn(t)),
      (r.payload = { element: n }),
      (d = d === void 0 ? null : d),
      d !== null && (r.callback = d),
      (n = rn(e, r, t)),
      n !== null && (Qt(n, e, t), Dr(n, e, t));
  }
  function hy(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function af(e, t) {
    hy(e, t), (e = e.alternate) && hy(e, t);
  }
  function my(e) {
    if (e.tag === 13) {
      var t = Es(e, 67108864);
      t !== null && Qt(t, e, 67108864), af(e, 67108864);
    }
  }
  var Vi = !0;
  function Jb(e, t, n, r) {
    var u = L.T;
    L.T = null;
    var d = I.p;
    try {
      (I.p = 2), nf(e, t, n, r);
    } finally {
      (I.p = d), (L.T = u);
    }
  }
  function Ib(e, t, n, r) {
    var u = L.T;
    L.T = null;
    var d = I.p;
    try {
      (I.p = 8), nf(e, t, n, r);
    } finally {
      (I.p = d), (L.T = u);
    }
  }
  function nf(e, t, n, r) {
    if (Vi) {
      var u = sf(r);
      if (u === null) Fc(e, t, r, Pi, n), yy(e, r);
      else if (e1(u, e, t, n, r)) r.stopPropagation();
      else if ((yy(e, r), t & 4 && -1 < Wb.indexOf(e))) {
        for (; u !== null; ) {
          var d = hs(u);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (((d = d.stateNode), d.current.memoizedState.isDehydrated)) {
                  var g = Ca(d.pendingLanes);
                  if (g !== 0) {
                    var x = d;
                    for (x.pendingLanes |= 2, x.entangledLanes |= 2; g; ) {
                      var j = 1 << (31 - $e(g));
                      (x.entanglements[1] |= j), (g &= ~j);
                    }
                    Na(d), (Be & 6) === 0 && ((Ei = Kt() + 500), Kr(0));
                  }
                }
                break;
              case 13:
                (x = Es(d, 2)), x !== null && Qt(x, d, 2), Ti(), af(d, 2);
            }
          if (((d = sf(r)), d === null && Fc(e, t, r, Pi, n), d === u)) break;
          u = d;
        }
        u !== null && r.stopPropagation();
      } else Fc(e, t, r, null, n);
    }
  }
  function sf(e) {
    return (e = uo(e)), rf(e);
  }
  var Pi = null;
  function rf(e) {
    if (((Pi = null), (e = ds(e)), e !== null)) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = h(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (Pi = e), null;
  }
  function py(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (_d()) {
          case fr:
            return 2;
          case A:
            return 8;
          case q:
          case X:
            return 32;
          case ie:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var lf = !1,
    xn = null,
    bn = null,
    Sn = null,
    nl = new Map(),
    sl = new Map(),
    wn = [],
    Wb =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function yy(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        xn = null;
        break;
      case "dragenter":
      case "dragleave":
        bn = null;
        break;
      case "mouseover":
      case "mouseout":
        Sn = null;
        break;
      case "pointerover":
      case "pointerout":
        nl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        sl.delete(t.pointerId);
    }
  }
  function rl(e, t, n, r, u, d) {
    return e === null || e.nativeEvent !== d
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: d,
          targetContainers: [u],
        }),
        t !== null && ((t = hs(t)), t !== null && my(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function e1(e, t, n, r, u) {
    switch (t) {
      case "focusin":
        return (xn = rl(xn, e, t, n, r, u)), !0;
      case "dragenter":
        return (bn = rl(bn, e, t, n, r, u)), !0;
      case "mouseover":
        return (Sn = rl(Sn, e, t, n, r, u)), !0;
      case "pointerover":
        var d = u.pointerId;
        return nl.set(d, rl(nl.get(d) || null, e, t, n, r, u)), !0;
      case "gotpointercapture":
        return (
          (d = u.pointerId), sl.set(d, rl(sl.get(d) || null, e, t, n, r, u)), !0
        );
    }
    return !1;
  }
  function gy(e) {
    var t = ds(e.target);
    if (t !== null) {
      var n = f(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = h(n)), t !== null)) {
            (e.blockedOn = t),
              Xv(e.priority, function () {
                if (n.tag === 13) {
                  var r = Gt();
                  r = Ju(r);
                  var u = Es(n, r);
                  u !== null && Qt(u, n, r), af(n, r);
                }
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Yi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = sf(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (io = r), n.target.dispatchEvent(r), (io = null);
      } else return (t = hs(n)), t !== null && my(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function vy(e, t, n) {
    Yi(e) && n.delete(t);
  }
  function t1() {
    (lf = !1),
      xn !== null && Yi(xn) && (xn = null),
      bn !== null && Yi(bn) && (bn = null),
      Sn !== null && Yi(Sn) && (Sn = null),
      nl.forEach(vy),
      sl.forEach(vy);
  }
  function Fi(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      lf ||
        ((lf = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, t1)));
  }
  var Gi = null;
  function xy(e) {
    Gi !== e &&
      ((Gi = e),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Gi === e && (Gi = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            r = e[t + 1],
            u = e[t + 2];
          if (typeof r != "function") {
            if (rf(r || n) === null) continue;
            break;
          }
          var d = hs(n);
          d !== null &&
            (e.splice(t, 3),
            (t -= 3),
            rc(d, { pending: !0, data: u, method: n.method, action: r }, r, u));
        }
      }));
  }
  function ll(e) {
    function t(j) {
      return Fi(j, e);
    }
    xn !== null && Fi(xn, e),
      bn !== null && Fi(bn, e),
      Sn !== null && Fi(Sn, e),
      nl.forEach(t),
      sl.forEach(t);
    for (var n = 0; n < wn.length; n++) {
      var r = wn[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < wn.length && ((n = wn[0]), n.blockedOn === null); )
      gy(n), n.blockedOn === null && wn.shift();
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (r = 0; r < n.length; r += 3) {
        var u = n[r],
          d = n[r + 1],
          g = u[Mt] || null;
        if (typeof d == "function") g || xy(n);
        else if (g) {
          var x = null;
          if (d && d.hasAttribute("formAction")) {
            if (((u = d), (g = d[Mt] || null))) x = g.formAction;
            else if (rf(u) !== null) continue;
          } else x = g.action;
          typeof x == "function" ? (n[r + 1] = x) : (n.splice(r, 3), (r -= 3)),
            xy(n);
        }
      }
  }
  function uf(e) {
    this._internalRoot = e;
  }
  (Qi.prototype.render = uf.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      var n = t.current,
        r = Gt();
      dy(n, r, e, t, null, null);
    }),
    (Qi.prototype.unmount = uf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          dy(e.current, 2, null, e, null, null), Ti(), (t[fs] = null);
        }
      });
  function Qi(e) {
    this._internalRoot = e;
  }
  Qi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = kd();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < wn.length && t !== 0 && t < wn[n].priority; n++);
      wn.splice(n, 0, e), n === 0 && gy(e);
    }
  };
  var by = s.version;
  if (by !== "19.1.0") throw Error(i(527, by, "19.1.0"));
  I.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(i(188))
        : ((e = Object.keys(e).join(",")), Error(i(268, e)));
    return (
      (e = y(t)),
      (e = e !== null ? p(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var a1 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: L,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xi.isDisabled && Xi.supportsFiber)
      try {
        (ce = Xi.inject(a1)), (Se = Xi);
      } catch {}
  }
  return (
    (ul.createRoot = function (e, t) {
      if (!o(e)) throw Error(i(299));
      var n = !1,
        r = "",
        u = km,
        d = Lm,
        g = Hm,
        x = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (d = t.onCaughtError),
          t.onRecoverableError !== void 0 && (g = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (x = t.unstable_transitionCallbacks)),
        (t = cy(e, 1, !1, null, null, n, r, u, d, g, x, null)),
        (e[fs] = t.current),
        Yc(e),
        new uf(t)
      );
    }),
    (ul.hydrateRoot = function (e, t, n) {
      if (!o(e)) throw Error(i(299));
      var r = !1,
        u = "",
        d = km,
        g = Lm,
        x = Hm,
        j = null,
        k = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (r = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (d = n.onUncaughtError),
          n.onCaughtError !== void 0 && (g = n.onCaughtError),
          n.onRecoverableError !== void 0 && (x = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (j = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (k = n.formState)),
        (t = cy(e, 1, !0, t, n ?? null, r, u, d, g, x, j, k)),
        (t.context = fy(null)),
        (n = t.current),
        (r = Gt()),
        (r = Ju(r)),
        (u = sn(r)),
        (u.callback = null),
        rn(n, u, r),
        (n = r),
        (t.current.lanes = n),
        dr(t, n),
        Na(t),
        (e[fs] = t.current),
        Yc(e),
        new Qi(t)
      );
    }),
    (ul.version = "19.1.0"),
    ul
  );
}
var Ry;
function h1() {
  if (Ry) return ff.exports;
  Ry = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (s) {
        console.error(s);
      }
  }
  return a(), (ff.exports = d1()), ff.exports;
}
var m1 = h1();
const p1 = ar(m1);
var pf, _y;
function y1() {
  if (_y) return pf;
  _y = 1;
  var a = typeof Element < "u",
    s = typeof Map == "function",
    l = typeof Set == "function",
    i = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function o(f, h) {
    if (f === h) return !0;
    if (f && h && typeof f == "object" && typeof h == "object") {
      if (f.constructor !== h.constructor) return !1;
      var m, y, p;
      if (Array.isArray(f)) {
        if (((m = f.length), m != h.length)) return !1;
        for (y = m; y-- !== 0; ) if (!o(f[y], h[y])) return !1;
        return !0;
      }
      var v;
      if (s && f instanceof Map && h instanceof Map) {
        if (f.size !== h.size) return !1;
        for (v = f.entries(); !(y = v.next()).done; )
          if (!h.has(y.value[0])) return !1;
        for (v = f.entries(); !(y = v.next()).done; )
          if (!o(y.value[1], h.get(y.value[0]))) return !1;
        return !0;
      }
      if (l && f instanceof Set && h instanceof Set) {
        if (f.size !== h.size) return !1;
        for (v = f.entries(); !(y = v.next()).done; )
          if (!h.has(y.value[0])) return !1;
        return !0;
      }
      if (i && ArrayBuffer.isView(f) && ArrayBuffer.isView(h)) {
        if (((m = f.length), m != h.length)) return !1;
        for (y = m; y-- !== 0; ) if (f[y] !== h[y]) return !1;
        return !0;
      }
      if (f.constructor === RegExp)
        return f.source === h.source && f.flags === h.flags;
      if (
        f.valueOf !== Object.prototype.valueOf &&
        typeof f.valueOf == "function" &&
        typeof h.valueOf == "function"
      )
        return f.valueOf() === h.valueOf();
      if (
        f.toString !== Object.prototype.toString &&
        typeof f.toString == "function" &&
        typeof h.toString == "function"
      )
        return f.toString() === h.toString();
      if (((p = Object.keys(f)), (m = p.length), m !== Object.keys(h).length))
        return !1;
      for (y = m; y-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(h, p[y])) return !1;
      if (a && f instanceof Element) return !1;
      for (y = m; y-- !== 0; )
        if (
          !(
            (p[y] === "_owner" || p[y] === "__v" || p[y] === "__o") &&
            f.$$typeof
          ) &&
          !o(f[p[y]], h[p[y]])
        )
          return !1;
      return !0;
    }
    return f !== f && h !== h;
  }
  return (
    (pf = function (h, m) {
      try {
        return o(h, m);
      } catch (y) {
        if ((y.message || "").match(/stack|recursion/i))
          return (
            console.warn("react-fast-compare cannot handle circular refs"), !1
          );
        throw y;
      }
    }),
    pf
  );
}
var g1 = y1();
const v1 = ar(g1);
var yf, Dy;
function x1() {
  if (Dy) return yf;
  Dy = 1;
  var a = function (s, l, i, o, f, h, m, y) {
    if (!s) {
      var p;
      if (l === void 0)
        p = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      else {
        var v = [i, o, f, h, m, y],
          S = 0;
        (p = new Error(
          l.replace(/%s/g, function () {
            return v[S++];
          })
        )),
          (p.name = "Invariant Violation");
      }
      throw ((p.framesToPop = 1), p);
    }
  };
  return (yf = a), yf;
}
var b1 = x1();
const My = ar(b1);
var gf, Uy;
function S1() {
  return (
    Uy ||
      ((Uy = 1),
      (gf = function (s, l, i, o) {
        var f = i ? i.call(o, s, l) : void 0;
        if (f !== void 0) return !!f;
        if (s === l) return !0;
        if (typeof s != "object" || !s || typeof l != "object" || !l) return !1;
        var h = Object.keys(s),
          m = Object.keys(l);
        if (h.length !== m.length) return !1;
        for (
          var y = Object.prototype.hasOwnProperty.bind(l), p = 0;
          p < h.length;
          p++
        ) {
          var v = h[p];
          if (!y(v)) return !1;
          var S = s[v],
            w = l[v];
          if (
            ((f = i ? i.call(o, S, w, v) : void 0),
            f === !1 || (f === void 0 && S !== w))
          )
            return !1;
        }
        return !0;
      })),
    gf
  );
}
var w1 = S1();
const N1 = ar(w1);
var Kg = ((a) => (
    (a.BASE = "base"),
    (a.BODY = "body"),
    (a.HEAD = "head"),
    (a.HTML = "html"),
    (a.LINK = "link"),
    (a.META = "meta"),
    (a.NOSCRIPT = "noscript"),
    (a.SCRIPT = "script"),
    (a.STYLE = "style"),
    (a.TITLE = "title"),
    (a.FRAGMENT = "Symbol(react.fragment)"),
    a
  ))(Kg || {}),
  vf = {
    link: { rel: ["amphtml", "canonical", "alternate"] },
    script: { type: ["application/ld+json"] },
    meta: {
      charset: "",
      name: ["generator", "robots", "description"],
      property: [
        "og:type",
        "og:title",
        "og:url",
        "og:image",
        "og:image:alt",
        "og:description",
        "twitter:url",
        "twitter:title",
        "twitter:description",
        "twitter:image",
        "twitter:image:alt",
        "twitter:card",
        "twitter:site",
      ],
    },
  },
  zy = Object.values(Kg),
  sd = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  j1 = Object.entries(sd).reduce((a, [s, l]) => ((a[l] = s), a), {}),
  pa = "data-rh",
  Ws = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
    PRIORITIZE_SEO_TAGS: "prioritizeSeoTags",
  },
  er = (a, s) => {
    for (let l = a.length - 1; l >= 0; l -= 1) {
      const i = a[l];
      if (Object.prototype.hasOwnProperty.call(i, s)) return i[s];
    }
    return null;
  },
  E1 = (a) => {
    let s = er(a, "title");
    const l = er(a, Ws.TITLE_TEMPLATE);
    if ((Array.isArray(s) && (s = s.join("")), l && s))
      return l.replace(/%s/g, () => s);
    const i = er(a, Ws.DEFAULT_TITLE);
    return s || i || void 0;
  },
  A1 = (a) => er(a, Ws.ON_CHANGE_CLIENT_STATE) || (() => {}),
  xf = (a, s) =>
    s
      .filter((l) => typeof l[a] < "u")
      .map((l) => l[a])
      .reduce((l, i) => ({ ...l, ...i }), {}),
  T1 = (a, s) =>
    s
      .filter((l) => typeof l.base < "u")
      .map((l) => l.base)
      .reverse()
      .reduce((l, i) => {
        if (!l.length) {
          const o = Object.keys(i);
          for (let f = 0; f < o.length; f += 1) {
            const m = o[f].toLowerCase();
            if (a.indexOf(m) !== -1 && i[m]) return l.concat(i);
          }
        }
        return l;
      }, []),
  C1 = (a) => console && typeof console.warn == "function" && console.warn(a),
  ol = (a, s, l) => {
    const i = {};
    return l
      .filter((o) =>
        Array.isArray(o[a])
          ? !0
          : (typeof o[a] < "u" &&
              C1(
                `Helmet: ${a} should be of type "Array". Instead found type "${typeof o[
                  a
                ]}"`
              ),
            !1)
      )
      .map((o) => o[a])
      .reverse()
      .reduce((o, f) => {
        const h = {};
        f.filter((y) => {
          let p;
          const v = Object.keys(y);
          for (let w = 0; w < v.length; w += 1) {
            const O = v[w],
              N = O.toLowerCase();
            s.indexOf(N) !== -1 &&
              !(p === "rel" && y[p].toLowerCase() === "canonical") &&
              !(N === "rel" && y[N].toLowerCase() === "stylesheet") &&
              (p = N),
              s.indexOf(O) !== -1 &&
                (O === "innerHTML" || O === "cssText" || O === "itemprop") &&
                (p = O);
          }
          if (!p || !y[p]) return !1;
          const S = y[p].toLowerCase();
          return (
            i[p] || (i[p] = {}),
            h[p] || (h[p] = {}),
            i[p][S] ? !1 : ((h[p][S] = !0), !0)
          );
        })
          .reverse()
          .forEach((y) => o.push(y));
        const m = Object.keys(h);
        for (let y = 0; y < m.length; y += 1) {
          const p = m[y],
            v = { ...i[p], ...h[p] };
          i[p] = v;
        }
        return o;
      }, [])
      .reverse();
  },
  O1 = (a, s) => {
    if (Array.isArray(a) && a.length) {
      for (let l = 0; l < a.length; l += 1) if (a[l][s]) return !0;
    }
    return !1;
  },
  R1 = (a) => ({
    baseTag: T1(["href"], a),
    bodyAttributes: xf("bodyAttributes", a),
    defer: er(a, Ws.DEFER),
    encode: er(a, Ws.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: xf("htmlAttributes", a),
    linkTags: ol("link", ["rel", "href"], a),
    metaTags: ol(
      "meta",
      ["name", "charset", "http-equiv", "property", "itemprop"],
      a
    ),
    noscriptTags: ol("noscript", ["innerHTML"], a),
    onChangeClientState: A1(a),
    scriptTags: ol("script", ["src", "innerHTML"], a),
    styleTags: ol("style", ["cssText"], a),
    title: E1(a),
    titleAttributes: xf("titleAttributes", a),
    prioritizeSeoTags: O1(a, Ws.PRIORITIZE_SEO_TAGS),
  }),
  Zg = (a) => (Array.isArray(a) ? a.join("") : a),
  _1 = (a, s) => {
    const l = Object.keys(a);
    for (let i = 0; i < l.length; i += 1)
      if (s[l[i]] && s[l[i]].includes(a[l[i]])) return !0;
    return !1;
  },
  bf = (a, s) =>
    Array.isArray(a)
      ? a.reduce(
          (l, i) => (_1(i, s) ? l.priority.push(i) : l.default.push(i), l),
          { priority: [], default: [] }
        )
      : { default: a, priority: [] },
  ky = (a, s) => ({ ...a, [s]: void 0 }),
  D1 = ["noscript", "script", "style"],
  Uf = (a, s = !0) =>
    s === !1
      ? String(a)
      : String(a)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;"),
  Jg = (a) =>
    Object.keys(a).reduce((s, l) => {
      const i = typeof a[l] < "u" ? `${l}="${a[l]}"` : `${l}`;
      return s ? `${s} ${i}` : i;
    }, ""),
  M1 = (a, s, l, i) => {
    const o = Jg(l),
      f = Zg(s);
    return o
      ? `<${a} ${pa}="true" ${o}>${Uf(f, i)}</${a}>`
      : `<${a} ${pa}="true">${Uf(f, i)}</${a}>`;
  },
  U1 = (a, s, l = !0) =>
    s.reduce((i, o) => {
      const f = o,
        h = Object.keys(f)
          .filter((p) => !(p === "innerHTML" || p === "cssText"))
          .reduce((p, v) => {
            const S = typeof f[v] > "u" ? v : `${v}="${Uf(f[v], l)}"`;
            return p ? `${p} ${S}` : S;
          }, ""),
        m = f.innerHTML || f.cssText || "",
        y = D1.indexOf(a) === -1;
      return `${i}<${a} ${pa}="true" ${h}${y ? "/>" : `>${m}</${a}>`}`;
    }, ""),
  Ig = (a, s = {}) =>
    Object.keys(a).reduce((l, i) => {
      const o = sd[i];
      return (l[o || i] = a[i]), l;
    }, s),
  z1 = (a, s, l) => {
    const i = { key: s, [pa]: !0 },
      o = Ig(l, i);
    return [Ce.createElement("title", o, s)];
  },
  tu = (a, s) =>
    s.map((l, i) => {
      const o = { key: i, [pa]: !0 };
      return (
        Object.keys(l).forEach((f) => {
          const m = sd[f] || f;
          if (m === "innerHTML" || m === "cssText") {
            const y = l.innerHTML || l.cssText;
            o.dangerouslySetInnerHTML = { __html: y };
          } else o[m] = l[f];
        }),
        Ce.createElement(a, o)
      );
    }),
  la = (a, s, l = !0) => {
    switch (a) {
      case "title":
        return {
          toComponent: () => z1(a, s.title, s.titleAttributes),
          toString: () => M1(a, s.title, s.titleAttributes, l),
        };
      case "bodyAttributes":
      case "htmlAttributes":
        return { toComponent: () => Ig(s), toString: () => Jg(s) };
      default:
        return { toComponent: () => tu(a, s), toString: () => U1(a, s, l) };
    }
  },
  k1 = ({ metaTags: a, linkTags: s, scriptTags: l, encode: i }) => {
    const o = bf(a, vf.meta),
      f = bf(s, vf.link),
      h = bf(l, vf.script);
    return {
      priorityMethods: {
        toComponent: () => [
          ...tu("meta", o.priority),
          ...tu("link", f.priority),
          ...tu("script", h.priority),
        ],
        toString: () =>
          `${la("meta", o.priority, i)} ${la("link", f.priority, i)} ${la(
            "script",
            h.priority,
            i
          )}`,
      },
      metaTags: o.default,
      linkTags: f.default,
      scriptTags: h.default,
    };
  },
  L1 = (a) => {
    const {
      baseTag: s,
      bodyAttributes: l,
      encode: i = !0,
      htmlAttributes: o,
      noscriptTags: f,
      styleTags: h,
      title: m = "",
      titleAttributes: y,
      prioritizeSeoTags: p,
    } = a;
    let { linkTags: v, metaTags: S, scriptTags: w } = a,
      O = { toComponent: () => {}, toString: () => "" };
    return (
      p &&
        ({
          priorityMethods: O,
          linkTags: v,
          metaTags: S,
          scriptTags: w,
        } = k1(a)),
      {
        priority: O,
        base: la("base", s, i),
        bodyAttributes: la("bodyAttributes", l, i),
        htmlAttributes: la("htmlAttributes", o, i),
        link: la("link", v, i),
        meta: la("meta", S, i),
        noscript: la("noscript", f, i),
        script: la("script", w, i),
        style: la("style", h, i),
        title: la("title", { title: m, titleAttributes: y }, i),
      }
    );
  },
  zf = L1,
  $i = [],
  Wg = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  kf = class {
    instances = [];
    canUseDOM = Wg;
    context;
    value = {
      setHelmet: (a) => {
        this.context.helmet = a;
      },
      helmetInstances: {
        get: () => (this.canUseDOM ? $i : this.instances),
        add: (a) => {
          (this.canUseDOM ? $i : this.instances).push(a);
        },
        remove: (a) => {
          const s = (this.canUseDOM ? $i : this.instances).indexOf(a);
          (this.canUseDOM ? $i : this.instances).splice(s, 1);
        },
      },
    };
    constructor(a, s) {
      (this.context = a),
        (this.canUseDOM = s || !1),
        s ||
          (a.helmet = zf({
            baseTag: [],
            bodyAttributes: {},
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: "",
            titleAttributes: {},
          }));
    }
  },
  H1 = {},
  e0 = Ce.createContext(H1),
  t0 = class a0 extends b.Component {
    static canUseDOM = Wg;
    helmetData;
    constructor(s) {
      super(s),
        (this.helmetData = new kf(this.props.context || {}, a0.canUseDOM));
    }
    render() {
      return Ce.createElement(
        e0.Provider,
        { value: this.helmetData.value },
        this.props.children
      );
    }
  },
  Zs = (a, s) => {
    const l = document.head || document.querySelector("head"),
      i = l.querySelectorAll(`${a}[${pa}]`),
      o = [].slice.call(i),
      f = [];
    let h;
    return (
      s &&
        s.length &&
        s.forEach((m) => {
          const y = document.createElement(a);
          for (const p in m)
            if (Object.prototype.hasOwnProperty.call(m, p))
              if (p === "innerHTML") y.innerHTML = m.innerHTML;
              else if (p === "cssText")
                y.styleSheet
                  ? (y.styleSheet.cssText = m.cssText)
                  : y.appendChild(document.createTextNode(m.cssText));
              else {
                const v = p,
                  S = typeof m[v] > "u" ? "" : m[v];
                y.setAttribute(p, S);
              }
          y.setAttribute(pa, "true"),
            o.some((p, v) => ((h = v), y.isEqualNode(p)))
              ? o.splice(h, 1)
              : f.push(y);
        }),
      o.forEach((m) => m.parentNode?.removeChild(m)),
      f.forEach((m) => l.appendChild(m)),
      { oldTags: o, newTags: f }
    );
  },
  Lf = (a, s) => {
    const l = document.getElementsByTagName(a)[0];
    if (!l) return;
    const i = l.getAttribute(pa),
      o = i ? i.split(",") : [],
      f = [...o],
      h = Object.keys(s);
    for (const m of h) {
      const y = s[m] || "";
      l.getAttribute(m) !== y && l.setAttribute(m, y),
        o.indexOf(m) === -1 && o.push(m);
      const p = f.indexOf(m);
      p !== -1 && f.splice(p, 1);
    }
    for (let m = f.length - 1; m >= 0; m -= 1) l.removeAttribute(f[m]);
    o.length === f.length
      ? l.removeAttribute(pa)
      : l.getAttribute(pa) !== h.join(",") && l.setAttribute(pa, h.join(","));
  },
  q1 = (a, s) => {
    typeof a < "u" && document.title !== a && (document.title = Zg(a)),
      Lf("title", s);
  },
  Ly = (a, s) => {
    const {
      baseTag: l,
      bodyAttributes: i,
      htmlAttributes: o,
      linkTags: f,
      metaTags: h,
      noscriptTags: m,
      onChangeClientState: y,
      scriptTags: p,
      styleTags: v,
      title: S,
      titleAttributes: w,
    } = a;
    Lf("body", i), Lf("html", o), q1(S, w);
    const O = {
        baseTag: Zs("base", l),
        linkTags: Zs("link", f),
        metaTags: Zs("meta", h),
        noscriptTags: Zs("noscript", m),
        scriptTags: Zs("script", p),
        styleTags: Zs("style", v),
      },
      N = {},
      R = {};
    Object.keys(O).forEach((C) => {
      const { newTags: U, oldTags: M } = O[C];
      U.length && (N[C] = U), M.length && (R[C] = O[C].oldTags);
    }),
      s && s(),
      y(a, N, R);
  },
  cl = null,
  B1 = (a) => {
    cl && cancelAnimationFrame(cl),
      a.defer
        ? (cl = requestAnimationFrame(() => {
            Ly(a, () => {
              cl = null;
            });
          }))
        : (Ly(a), (cl = null));
  },
  V1 = B1,
  Hy = class extends b.Component {
    rendered = !1;
    shouldComponentUpdate(a) {
      return !N1(a, this.props);
    }
    componentDidUpdate() {
      this.emitChange();
    }
    componentWillUnmount() {
      const { helmetInstances: a } = this.props.context;
      a.remove(this), this.emitChange();
    }
    emitChange() {
      const { helmetInstances: a, setHelmet: s } = this.props.context;
      let l = null;
      const i = R1(
        a.get().map((o) => {
          const f = { ...o.props };
          return delete f.context, f;
        })
      );
      t0.canUseDOM ? V1(i) : zf && (l = zf(i)), s(l);
    }
    init() {
      if (this.rendered) return;
      this.rendered = !0;
      const { helmetInstances: a } = this.props.context;
      a.add(this), this.emitChange();
    }
    render() {
      return this.init(), null;
    }
  },
  P1 = class extends b.Component {
    static defaultProps = {
      defer: !0,
      encodeSpecialCharacters: !0,
      prioritizeSeoTags: !1,
    };
    shouldComponentUpdate(a) {
      return !v1(ky(this.props, "helmetData"), ky(a, "helmetData"));
    }
    mapNestedChildrenToProps(a, s) {
      if (!s) return null;
      switch (a.type) {
        case "script":
        case "noscript":
          return { innerHTML: s };
        case "style":
          return { cssText: s };
        default:
          throw new Error(
            `<${a.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
          );
      }
    }
    flattenArrayTypeChildren(a, s, l, i) {
      return {
        ...s,
        [a.type]: [
          ...(s[a.type] || []),
          { ...l, ...this.mapNestedChildrenToProps(a, i) },
        ],
      };
    }
    mapObjectTypeChildren(a, s, l, i) {
      switch (a.type) {
        case "title":
          return { ...s, [a.type]: i, titleAttributes: { ...l } };
        case "body":
          return { ...s, bodyAttributes: { ...l } };
        case "html":
          return { ...s, htmlAttributes: { ...l } };
        default:
          return { ...s, [a.type]: { ...l } };
      }
    }
    mapArrayTypeChildrenToProps(a, s) {
      let l = { ...s };
      return (
        Object.keys(a).forEach((i) => {
          l = { ...l, [i]: a[i] };
        }),
        l
      );
    }
    warnOnInvalidChildren(a, s) {
      return (
        My(
          zy.some((l) => a.type === l),
          typeof a.type == "function"
            ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information."
            : `Only elements types ${zy.join(
                ", "
              )} are allowed. Helmet does not support rendering <${
                a.type
              }> elements. Refer to our API for more information.`
        ),
        My(
          !s ||
            typeof s == "string" ||
            (Array.isArray(s) && !s.some((l) => typeof l != "string")),
          `Helmet expects a string as a child of <${a.type}>. Did you forget to wrap your children in braces? ( <${a.type}>{\`\`}</${a.type}> ) Refer to our API for more information.`
        ),
        !0
      );
    }
    mapChildrenToProps(a, s) {
      let l = {};
      return (
        Ce.Children.forEach(a, (i) => {
          if (!i || !i.props) return;
          const { children: o, ...f } = i.props,
            h = Object.keys(f).reduce(
              (y, p) => ((y[j1[p] || p] = f[p]), y),
              {}
            );
          let { type: m } = i;
          switch (
            (typeof m == "symbol"
              ? (m = m.toString())
              : this.warnOnInvalidChildren(i, o),
            m)
          ) {
            case "Symbol(react.fragment)":
              s = this.mapChildrenToProps(o, s);
              break;
            case "link":
            case "meta":
            case "noscript":
            case "script":
            case "style":
              l = this.flattenArrayTypeChildren(i, l, h, o);
              break;
            default:
              s = this.mapObjectTypeChildren(i, s, h, o);
              break;
          }
        }),
        this.mapArrayTypeChildrenToProps(l, s)
      );
    }
    render() {
      const { children: a, ...s } = this.props;
      let l = { ...s },
        { helmetData: i } = s;
      if ((a && (l = this.mapChildrenToProps(a, l)), i && !(i instanceof kf))) {
        const o = i;
        (i = new kf(o.context, !0)), delete l.helmetData;
      }
      return i
        ? Ce.createElement(Hy, { ...l, context: i.value })
        : Ce.createElement(e0.Consumer, null, (o) =>
            Ce.createElement(Hy, { ...l, context: o })
          );
    }
  },
  fl = {},
  qy;
function Y1() {
  if (qy) return fl;
  (qy = 1),
    Object.defineProperty(fl, "__esModule", { value: !0 }),
    (fl.parse = h),
    (fl.serialize = p);
  const a = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    s = /^[\u0021-\u003A\u003C-\u007E]*$/,
    l =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    i = /^[\u0020-\u003A\u003D-\u007E]*$/,
    o = Object.prototype.toString,
    f = (() => {
      const w = function () {};
      return (w.prototype = Object.create(null)), w;
    })();
  function h(w, O) {
    const N = new f(),
      R = w.length;
    if (R < 2) return N;
    const C = O?.decode || v;
    let U = 0;
    do {
      const M = w.indexOf("=", U);
      if (M === -1) break;
      const V = w.indexOf(";", U),
        H = V === -1 ? R : V;
      if (M > H) {
        U = w.lastIndexOf(";", M - 1) + 1;
        continue;
      }
      const Y = m(w, U, M),
        _ = y(w, M, Y),
        K = w.slice(Y, _);
      if (N[K] === void 0) {
        let ee = m(w, M + 1, H),
          ne = y(w, H, ee);
        const ye = C(w.slice(ee, ne));
        N[K] = ye;
      }
      U = H + 1;
    } while (U < R);
    return N;
  }
  function m(w, O, N) {
    do {
      const R = w.charCodeAt(O);
      if (R !== 32 && R !== 9) return O;
    } while (++O < N);
    return N;
  }
  function y(w, O, N) {
    for (; O > N; ) {
      const R = w.charCodeAt(--O);
      if (R !== 32 && R !== 9) return O + 1;
    }
    return N;
  }
  function p(w, O, N) {
    const R = N?.encode || encodeURIComponent;
    if (!a.test(w)) throw new TypeError(`argument name is invalid: ${w}`);
    const C = R(O);
    if (!s.test(C)) throw new TypeError(`argument val is invalid: ${O}`);
    let U = w + "=" + C;
    if (!N) return U;
    if (N.maxAge !== void 0) {
      if (!Number.isInteger(N.maxAge))
        throw new TypeError(`option maxAge is invalid: ${N.maxAge}`);
      U += "; Max-Age=" + N.maxAge;
    }
    if (N.domain) {
      if (!l.test(N.domain))
        throw new TypeError(`option domain is invalid: ${N.domain}`);
      U += "; Domain=" + N.domain;
    }
    if (N.path) {
      if (!i.test(N.path))
        throw new TypeError(`option path is invalid: ${N.path}`);
      U += "; Path=" + N.path;
    }
    if (N.expires) {
      if (!S(N.expires) || !Number.isFinite(N.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${N.expires}`);
      U += "; Expires=" + N.expires.toUTCString();
    }
    if (
      (N.httpOnly && (U += "; HttpOnly"),
      N.secure && (U += "; Secure"),
      N.partitioned && (U += "; Partitioned"),
      N.priority)
    )
      switch (
        typeof N.priority == "string" ? N.priority.toLowerCase() : void 0
      ) {
        case "low":
          U += "; Priority=Low";
          break;
        case "medium":
          U += "; Priority=Medium";
          break;
        case "high":
          U += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${N.priority}`);
      }
    if (N.sameSite)
      switch (
        typeof N.sameSite == "string" ? N.sameSite.toLowerCase() : N.sameSite
      ) {
        case !0:
        case "strict":
          U += "; SameSite=Strict";
          break;
        case "lax":
          U += "; SameSite=Lax";
          break;
        case "none":
          U += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${N.sameSite}`);
      }
    return U;
  }
  function v(w) {
    if (w.indexOf("%") === -1) return w;
    try {
      return decodeURIComponent(w);
    } catch {
      return w;
    }
  }
  function S(w) {
    return o.call(w) === "[object Date]";
  }
  return fl;
}
Y1();
var By = "popstate";
function F1(a = {}) {
  function s(i, o) {
    let { pathname: f, search: h, hash: m } = i.location;
    return Hf(
      "",
      { pathname: f, search: h, hash: m },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function l(i, o) {
    return typeof o == "string" ? o : jl(o);
  }
  return Q1(s, l, null, a);
}
function Je(a, s) {
  if (a === !1 || a === null || typeof a > "u") throw new Error(s);
}
function ua(a, s) {
  if (!a) {
    typeof console < "u" && console.warn(s);
    try {
      throw new Error(s);
    } catch {}
  }
}
function G1() {
  return Math.random().toString(36).substring(2, 10);
}
function Vy(a, s) {
  return { usr: a.state, key: a.key, idx: s };
}
function Hf(a, s, l = null, i) {
  return {
    pathname: typeof a == "string" ? a : a.pathname,
    search: "",
    hash: "",
    ...(typeof s == "string" ? nr(s) : s),
    state: l,
    key: (s && s.key) || i || G1(),
  };
}
function jl({ pathname: a = "/", search: s = "", hash: l = "" }) {
  return (
    s && s !== "?" && (a += s.charAt(0) === "?" ? s : "?" + s),
    l && l !== "#" && (a += l.charAt(0) === "#" ? l : "#" + l),
    a
  );
}
function nr(a) {
  let s = {};
  if (a) {
    let l = a.indexOf("#");
    l >= 0 && ((s.hash = a.substring(l)), (a = a.substring(0, l)));
    let i = a.indexOf("?");
    i >= 0 && ((s.search = a.substring(i)), (a = a.substring(0, i))),
      a && (s.pathname = a);
  }
  return s;
}
function Q1(a, s, l, i = {}) {
  let { window: o = document.defaultView, v5Compat: f = !1 } = i,
    h = o.history,
    m = "POP",
    y = null,
    p = v();
  p == null && ((p = 0), h.replaceState({ ...h.state, idx: p }, ""));
  function v() {
    return (h.state || { idx: null }).idx;
  }
  function S() {
    m = "POP";
    let C = v(),
      U = C == null ? null : C - p;
    (p = C), y && y({ action: m, location: R.location, delta: U });
  }
  function w(C, U) {
    m = "PUSH";
    let M = Hf(R.location, C, U);
    p = v() + 1;
    let V = Vy(M, p),
      H = R.createHref(M);
    try {
      h.pushState(V, "", H);
    } catch (Y) {
      if (Y instanceof DOMException && Y.name === "DataCloneError") throw Y;
      o.location.assign(H);
    }
    f && y && y({ action: m, location: R.location, delta: 1 });
  }
  function O(C, U) {
    m = "REPLACE";
    let M = Hf(R.location, C, U);
    p = v();
    let V = Vy(M, p),
      H = R.createHref(M);
    h.replaceState(V, "", H),
      f && y && y({ action: m, location: R.location, delta: 0 });
  }
  function N(C) {
    return X1(C);
  }
  let R = {
    get action() {
      return m;
    },
    get location() {
      return a(o, h);
    },
    listen(C) {
      if (y) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(By, S),
        (y = C),
        () => {
          o.removeEventListener(By, S), (y = null);
        }
      );
    },
    createHref(C) {
      return s(o, C);
    },
    createURL: N,
    encodeLocation(C) {
      let U = N(C);
      return { pathname: U.pathname, search: U.search, hash: U.hash };
    },
    push: w,
    replace: O,
    go(C) {
      return h.go(C);
    },
  };
  return R;
}
function X1(a, s = !1) {
  let l = "http://localhost";
  typeof window < "u" &&
    (l =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Je(l, "No window.location.(origin|href) available to create URL");
  let i = typeof a == "string" ? a : jl(a);
  return (
    (i = i.replace(/ $/, "%20")),
    !s && i.startsWith("//") && (i = l + i),
    new URL(i, l)
  );
}
function n0(a, s, l = "/") {
  return $1(a, s, l, !1);
}
function $1(a, s, l, i) {
  let o = typeof s == "string" ? nr(s) : s,
    f = Za(o.pathname || "/", l);
  if (f == null) return null;
  let h = s0(a);
  K1(h);
  let m = null;
  for (let y = 0; m == null && y < h.length; ++y) {
    let p = lS(f);
    m = sS(h[y], p, i);
  }
  return m;
}
function s0(a, s = [], l = [], i = "") {
  let o = (f, h, m) => {
    let y = {
      relativePath: m === void 0 ? f.path || "" : m,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: h,
      route: f,
    };
    y.relativePath.startsWith("/") &&
      (Je(
        y.relativePath.startsWith(i),
        `Absolute route path "${y.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (y.relativePath = y.relativePath.slice(i.length)));
    let p = Ka([i, y.relativePath]),
      v = l.concat(y);
    f.children &&
      f.children.length > 0 &&
      (Je(
        f.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${p}".`
      ),
      s0(f.children, s, v, p)),
      !(f.path == null && !f.index) &&
        s.push({ path: p, score: aS(p, f.index), routesMeta: v });
  };
  return (
    a.forEach((f, h) => {
      if (f.path === "" || !f.path?.includes("?")) o(f, h);
      else for (let m of r0(f.path)) o(f, h, m);
    }),
    s
  );
}
function r0(a) {
  let s = a.split("/");
  if (s.length === 0) return [];
  let [l, ...i] = s,
    o = l.endsWith("?"),
    f = l.replace(/\?$/, "");
  if (i.length === 0) return o ? [f, ""] : [f];
  let h = r0(i.join("/")),
    m = [];
  return (
    m.push(...h.map((y) => (y === "" ? f : [f, y].join("/")))),
    o && m.push(...h),
    m.map((y) => (a.startsWith("/") && y === "" ? "/" : y))
  );
}
function K1(a) {
  a.sort((s, l) =>
    s.score !== l.score
      ? l.score - s.score
      : nS(
          s.routesMeta.map((i) => i.childrenIndex),
          l.routesMeta.map((i) => i.childrenIndex)
        )
  );
}
var Z1 = /^:[\w-]+$/,
  J1 = 3,
  I1 = 2,
  W1 = 1,
  eS = 10,
  tS = -2,
  Py = (a) => a === "*";
function aS(a, s) {
  let l = a.split("/"),
    i = l.length;
  return (
    l.some(Py) && (i += tS),
    s && (i += I1),
    l
      .filter((o) => !Py(o))
      .reduce((o, f) => o + (Z1.test(f) ? J1 : f === "" ? W1 : eS), i)
  );
}
function nS(a, s) {
  return a.length === s.length && a.slice(0, -1).every((i, o) => i === s[o])
    ? a[a.length - 1] - s[s.length - 1]
    : 0;
}
function sS(a, s, l = !1) {
  let { routesMeta: i } = a,
    o = {},
    f = "/",
    h = [];
  for (let m = 0; m < i.length; ++m) {
    let y = i[m],
      p = m === i.length - 1,
      v = f === "/" ? s : s.slice(f.length) || "/",
      S = pu(
        { path: y.relativePath, caseSensitive: y.caseSensitive, end: p },
        v
      ),
      w = y.route;
    if (
      (!S &&
        p &&
        l &&
        !i[i.length - 1].route.index &&
        (S = pu(
          { path: y.relativePath, caseSensitive: y.caseSensitive, end: !1 },
          v
        )),
      !S)
    )
      return null;
    Object.assign(o, S.params),
      h.push({
        params: o,
        pathname: Ka([f, S.pathname]),
        pathnameBase: cS(Ka([f, S.pathnameBase])),
        route: w,
      }),
      S.pathnameBase !== "/" && (f = Ka([f, S.pathnameBase]));
  }
  return h;
}
function pu(a, s) {
  typeof a == "string" && (a = { path: a, caseSensitive: !1, end: !0 });
  let [l, i] = rS(a.path, a.caseSensitive, a.end),
    o = s.match(l);
  if (!o) return null;
  let f = o[0],
    h = f.replace(/(.)\/+$/, "$1"),
    m = o.slice(1);
  return {
    params: i.reduce((p, { paramName: v, isOptional: S }, w) => {
      if (v === "*") {
        let N = m[w] || "";
        h = f.slice(0, f.length - N.length).replace(/(.)\/+$/, "$1");
      }
      const O = m[w];
      return (
        S && !O ? (p[v] = void 0) : (p[v] = (O || "").replace(/%2F/g, "/")), p
      );
    }, {}),
    pathname: f,
    pathnameBase: h,
    pattern: a,
  };
}
function rS(a, s = !1, l = !0) {
  ua(
    a === "*" || !a.endsWith("*") || a.endsWith("/*"),
    `Route path "${a}" will be treated as if it were "${a.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let i = [],
    o =
      "^" +
      a
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (h, m, y) => (
            i.push({ paramName: m, isOptional: y != null }),
            y ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    a.endsWith("*")
      ? (i.push({ paramName: "*" }),
        (o += a === "*" || a === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : l
      ? (o += "\\/*$")
      : a !== "" && a !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, s ? void 0 : "i"), i]
  );
}
function lS(a) {
  try {
    return a
      .split("/")
      .map((s) => decodeURIComponent(s).replace(/\//g, "%2F"))
      .join("/");
  } catch (s) {
    return (
      ua(
        !1,
        `The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`
      ),
      a
    );
  }
}
function Za(a, s) {
  if (s === "/") return a;
  if (!a.toLowerCase().startsWith(s.toLowerCase())) return null;
  let l = s.endsWith("/") ? s.length - 1 : s.length,
    i = a.charAt(l);
  return i && i !== "/" ? null : a.slice(l) || "/";
}
function iS(a, s = "/") {
  let {
    pathname: l,
    search: i = "",
    hash: o = "",
  } = typeof a == "string" ? nr(a) : a;
  return {
    pathname: l ? (l.startsWith("/") ? l : uS(l, s)) : s,
    search: fS(i),
    hash: dS(o),
  };
}
function uS(a, s) {
  let l = s.replace(/\/+$/, "").split("/");
  return (
    a.split("/").forEach((o) => {
      o === ".." ? l.length > 1 && l.pop() : o !== "." && l.push(o);
    }),
    l.length > 1 ? l.join("/") : "/"
  );
}
function Sf(a, s, l, i) {
  return `Cannot include a '${a}' character in a manually specified \`to.${s}\` field [${JSON.stringify(
    i
  )}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function oS(a) {
  return a.filter(
    (s, l) => l === 0 || (s.route.path && s.route.path.length > 0)
  );
}
function rd(a) {
  let s = oS(a);
  return s.map((l, i) => (i === s.length - 1 ? l.pathname : l.pathnameBase));
}
function ld(a, s, l, i = !1) {
  let o;
  typeof a == "string"
    ? (o = nr(a))
    : ((o = { ...a }),
      Je(
        !o.pathname || !o.pathname.includes("?"),
        Sf("?", "pathname", "search", o)
      ),
      Je(
        !o.pathname || !o.pathname.includes("#"),
        Sf("#", "pathname", "hash", o)
      ),
      Je(!o.search || !o.search.includes("#"), Sf("#", "search", "hash", o)));
  let f = a === "" || o.pathname === "",
    h = f ? "/" : o.pathname,
    m;
  if (h == null) m = l;
  else {
    let S = s.length - 1;
    if (!i && h.startsWith("..")) {
      let w = h.split("/");
      for (; w[0] === ".."; ) w.shift(), (S -= 1);
      o.pathname = w.join("/");
    }
    m = S >= 0 ? s[S] : "/";
  }
  let y = iS(o, m),
    p = h && h !== "/" && h.endsWith("/"),
    v = (f || h === ".") && l.endsWith("/");
  return !y.pathname.endsWith("/") && (p || v) && (y.pathname += "/"), y;
}
var Ka = (a) => a.join("/").replace(/\/\/+/g, "/"),
  cS = (a) => a.replace(/\/+$/, "").replace(/^\/*/, "/"),
  fS = (a) => (!a || a === "?" ? "" : a.startsWith("?") ? a : "?" + a),
  dS = (a) => (!a || a === "#" ? "" : a.startsWith("#") ? a : "#" + a);
function hS(a) {
  return (
    a != null &&
    typeof a.status == "number" &&
    typeof a.statusText == "string" &&
    typeof a.internal == "boolean" &&
    "data" in a
  );
}
var l0 = ["POST", "PUT", "PATCH", "DELETE"];
new Set(l0);
var mS = ["GET", ...l0];
new Set(mS);
var sr = b.createContext(null);
sr.displayName = "DataRouter";
var _u = b.createContext(null);
_u.displayName = "DataRouterState";
var i0 = b.createContext({ isTransitioning: !1 });
i0.displayName = "ViewTransition";
var pS = b.createContext(new Map());
pS.displayName = "Fetchers";
var yS = b.createContext(null);
yS.displayName = "Await";
var ya = b.createContext(null);
ya.displayName = "Navigation";
var Cl = b.createContext(null);
Cl.displayName = "Location";
var oa = b.createContext({ outlet: null, matches: [], isDataRoute: !1 });
oa.displayName = "Route";
var id = b.createContext(null);
id.displayName = "RouteError";
function gS(a, { relative: s } = {}) {
  Je(
    rr(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: l, navigator: i } = b.useContext(ya),
    { hash: o, pathname: f, search: h } = Ol(a, { relative: s }),
    m = f;
  return (
    l !== "/" && (m = f === "/" ? l : Ka([l, f])),
    i.createHref({ pathname: m, search: h, hash: o })
  );
}
function rr() {
  return b.useContext(Cl) != null;
}
function Ct() {
  return (
    Je(
      rr(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    b.useContext(Cl).location
  );
}
var u0 =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function o0(a) {
  b.useContext(ya).static || b.useLayoutEffect(a);
}
function ns() {
  let { isDataRoute: a } = b.useContext(oa);
  return a ? MS() : vS();
}
function vS() {
  Je(
    rr(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let a = b.useContext(sr),
    { basename: s, navigator: l } = b.useContext(ya),
    { matches: i } = b.useContext(oa),
    { pathname: o } = Ct(),
    f = JSON.stringify(rd(i)),
    h = b.useRef(!1);
  return (
    o0(() => {
      h.current = !0;
    }),
    b.useCallback(
      (y, p = {}) => {
        if ((ua(h.current, u0), !h.current)) return;
        if (typeof y == "number") {
          l.go(y);
          return;
        }
        let v = ld(y, JSON.parse(f), o, p.relative === "path");
        a == null &&
          s !== "/" &&
          (v.pathname = v.pathname === "/" ? s : Ka([s, v.pathname])),
          (p.replace ? l.replace : l.push)(v, p.state, p);
      },
      [s, l, f, o, a]
    )
  );
}
var xS = b.createContext(null);
function bS(a) {
  let s = b.useContext(oa).outlet;
  return s && b.createElement(xS.Provider, { value: a }, s);
}
function SS() {
  let { matches: a } = b.useContext(oa),
    s = a[a.length - 1];
  return s ? s.params : {};
}
function Ol(a, { relative: s } = {}) {
  let { matches: l } = b.useContext(oa),
    { pathname: i } = Ct(),
    o = JSON.stringify(rd(l));
  return b.useMemo(() => ld(a, JSON.parse(o), i, s === "path"), [a, o, i, s]);
}
function wS(a, s) {
  return c0(a, s);
}
function c0(a, s, l, i) {
  Je(
    rr(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: o, static: f } = b.useContext(ya),
    { matches: h } = b.useContext(oa),
    m = h[h.length - 1],
    y = m ? m.params : {},
    p = m ? m.pathname : "/",
    v = m ? m.pathnameBase : "/",
    S = m && m.route;
  {
    let M = (S && S.path) || "";
    f0(
      p,
      !S || M.endsWith("*") || M.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${
        M === "/" ? "*" : `${M}/*`
      }">.`
    );
  }
  let w = Ct(),
    O;
  if (s) {
    let M = typeof s == "string" ? nr(s) : s;
    Je(
      v === "/" || M.pathname?.startsWith(v),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${M.pathname}" was given in the \`location\` prop.`
    ),
      (O = M);
  } else O = w;
  let N = O.pathname || "/",
    R = N;
  if (v !== "/") {
    let M = v.replace(/^\//, "").split("/");
    R = "/" + N.replace(/^\//, "").split("/").slice(M.length).join("/");
  }
  let C =
    !f && l && l.matches && l.matches.length > 0
      ? l.matches
      : n0(a, { pathname: R });
  ua(
    S || C != null,
    `No routes matched location "${O.pathname}${O.search}${O.hash}" `
  ),
    ua(
      C == null ||
        C[C.length - 1].route.element !== void 0 ||
        C[C.length - 1].route.Component !== void 0 ||
        C[C.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${O.pathname}${O.search}${O.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let U = TS(
    C &&
      C.map((M) =>
        Object.assign({}, M, {
          params: Object.assign({}, y, M.params),
          pathname: Ka([
            v,
            o.encodeLocation
              ? o.encodeLocation(M.pathname).pathname
              : M.pathname,
          ]),
          pathnameBase:
            M.pathnameBase === "/"
              ? v
              : Ka([
                  v,
                  o.encodeLocation
                    ? o.encodeLocation(M.pathnameBase).pathname
                    : M.pathnameBase,
                ]),
        })
      ),
    h,
    l,
    i
  );
  return s && U
    ? b.createElement(
        Cl.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...O,
            },
            navigationType: "POP",
          },
        },
        U
      )
    : U;
}
function NS() {
  let a = DS(),
    s = hS(a)
      ? `${a.status} ${a.statusText}`
      : a instanceof Error
      ? a.message
      : JSON.stringify(a),
    l = a instanceof Error ? a.stack : null,
    i = "rgba(200,200,200, 0.5)",
    o = { padding: "0.5rem", backgroundColor: i },
    f = { padding: "2px 4px", backgroundColor: i },
    h = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", a),
    (h = b.createElement(
      b.Fragment,
      null,
      b.createElement("p", null, "💿 Hey developer 👋"),
      b.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        b.createElement("code", { style: f }, "ErrorBoundary"),
        " or",
        " ",
        b.createElement("code", { style: f }, "errorElement"),
        " prop on your route."
      )
    )),
    b.createElement(
      b.Fragment,
      null,
      b.createElement("h2", null, "Unexpected Application Error!"),
      b.createElement("h3", { style: { fontStyle: "italic" } }, s),
      l ? b.createElement("pre", { style: o }, l) : null,
      h
    )
  );
}
var jS = b.createElement(NS, null),
  ES = class extends b.Component {
    constructor(a) {
      super(a),
        (this.state = {
          location: a.location,
          revalidation: a.revalidation,
          error: a.error,
        });
    }
    static getDerivedStateFromError(a) {
      return { error: a };
    }
    static getDerivedStateFromProps(a, s) {
      return s.location !== a.location ||
        (s.revalidation !== "idle" && a.revalidation === "idle")
        ? { error: a.error, location: a.location, revalidation: a.revalidation }
        : {
            error: a.error !== void 0 ? a.error : s.error,
            location: s.location,
            revalidation: a.revalidation || s.revalidation,
          };
    }
    componentDidCatch(a, s) {
      console.error(
        "React Router caught the following error during render",
        a,
        s
      );
    }
    render() {
      return this.state.error !== void 0
        ? b.createElement(
            oa.Provider,
            { value: this.props.routeContext },
            b.createElement(id.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function AS({ routeContext: a, match: s, children: l }) {
  let i = b.useContext(sr);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (s.route.errorElement || s.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = s.route.id),
    b.createElement(oa.Provider, { value: a }, l)
  );
}
function TS(a, s = [], l = null, i = null) {
  if (a == null) {
    if (!l) return null;
    if (l.errors) a = l.matches;
    else if (s.length === 0 && !l.initialized && l.matches.length > 0)
      a = l.matches;
    else return null;
  }
  let o = a,
    f = l?.errors;
  if (f != null) {
    let y = o.findIndex((p) => p.route.id && f?.[p.route.id] !== void 0);
    Je(
      y >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        f
      ).join(",")}`
    ),
      (o = o.slice(0, Math.min(o.length, y + 1)));
  }
  let h = !1,
    m = -1;
  if (l)
    for (let y = 0; y < o.length; y++) {
      let p = o[y];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (m = y),
        p.route.id)
      ) {
        let { loaderData: v, errors: S } = l,
          w =
            p.route.loader &&
            !v.hasOwnProperty(p.route.id) &&
            (!S || S[p.route.id] === void 0);
        if (p.route.lazy || w) {
          (h = !0), m >= 0 ? (o = o.slice(0, m + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((y, p, v) => {
    let S,
      w = !1,
      O = null,
      N = null;
    l &&
      ((S = f && p.route.id ? f[p.route.id] : void 0),
      (O = p.route.errorElement || jS),
      h &&
        (m < 0 && v === 0
          ? (f0(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (w = !0),
            (N = null))
          : m === v &&
            ((w = !0), (N = p.route.hydrateFallbackElement || null))));
    let R = s.concat(o.slice(0, v + 1)),
      C = () => {
        let U;
        return (
          S
            ? (U = O)
            : w
            ? (U = N)
            : p.route.Component
            ? (U = b.createElement(p.route.Component, null))
            : p.route.element
            ? (U = p.route.element)
            : (U = y),
          b.createElement(AS, {
            match: p,
            routeContext: { outlet: y, matches: R, isDataRoute: l != null },
            children: U,
          })
        );
      };
    return l && (p.route.ErrorBoundary || p.route.errorElement || v === 0)
      ? b.createElement(ES, {
          location: l.location,
          revalidation: l.revalidation,
          component: O,
          error: S,
          children: C(),
          routeContext: { outlet: null, matches: R, isDataRoute: !0 },
        })
      : C();
  }, null);
}
function ud(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function CS(a) {
  let s = b.useContext(sr);
  return Je(s, ud(a)), s;
}
function OS(a) {
  let s = b.useContext(_u);
  return Je(s, ud(a)), s;
}
function RS(a) {
  let s = b.useContext(oa);
  return Je(s, ud(a)), s;
}
function od(a) {
  let s = RS(a),
    l = s.matches[s.matches.length - 1];
  return (
    Je(
      l.route.id,
      `${a} can only be used on routes that contain a unique "id"`
    ),
    l.route.id
  );
}
function _S() {
  return od("useRouteId");
}
function DS() {
  let a = b.useContext(id),
    s = OS("useRouteError"),
    l = od("useRouteError");
  return a !== void 0 ? a : s.errors?.[l];
}
function MS() {
  let { router: a } = CS("useNavigate"),
    s = od("useNavigate"),
    l = b.useRef(!1);
  return (
    o0(() => {
      l.current = !0;
    }),
    b.useCallback(
      async (o, f = {}) => {
        ua(l.current, u0),
          l.current &&
            (typeof o == "number"
              ? a.navigate(o)
              : await a.navigate(o, { fromRouteId: s, ...f }));
      },
      [a, s]
    )
  );
}
var Yy = {};
function f0(a, s, l) {
  !s && !Yy[a] && ((Yy[a] = !0), ua(!1, l));
}
b.memo(US);
function US({ routes: a, future: s, state: l }) {
  return c0(a, void 0, l, s);
}
function yu({ to: a, replace: s, state: l, relative: i }) {
  Je(
    rr(),
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: o } = b.useContext(ya);
  ua(
    !o,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: f } = b.useContext(oa),
    { pathname: h } = Ct(),
    m = ns(),
    y = ld(a, rd(f), h, i === "path"),
    p = JSON.stringify(y);
  return (
    b.useEffect(() => {
      m(JSON.parse(p), { replace: s, state: l, relative: i });
    }, [m, p, i, s, l]),
    null
  );
}
function lr(a) {
  return bS(a.context);
}
function ft(a) {
  Je(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function zS({
  basename: a = "/",
  children: s = null,
  location: l,
  navigationType: i = "POP",
  navigator: o,
  static: f = !1,
}) {
  Je(
    !rr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let h = a.replace(/^\/*/, "/"),
    m = b.useMemo(
      () => ({ basename: h, navigator: o, static: f, future: {} }),
      [h, o, f]
    );
  typeof l == "string" && (l = nr(l));
  let {
      pathname: y = "/",
      search: p = "",
      hash: v = "",
      state: S = null,
      key: w = "default",
    } = l,
    O = b.useMemo(() => {
      let N = Za(y, h);
      return N == null
        ? null
        : {
            location: { pathname: N, search: p, hash: v, state: S, key: w },
            navigationType: i,
          };
    }, [h, y, p, v, S, w, i]);
  return (
    ua(
      O != null,
      `<Router basename="${h}"> is not able to match the URL "${y}${p}${v}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    O == null
      ? null
      : b.createElement(
          ya.Provider,
          { value: m },
          b.createElement(Cl.Provider, { children: s, value: O })
        )
  );
}
function kS({ children: a, location: s }) {
  return wS(qf(a), s);
}
function qf(a, s = []) {
  let l = [];
  return (
    b.Children.forEach(a, (i, o) => {
      if (!b.isValidElement(i)) return;
      let f = [...s, o];
      if (i.type === b.Fragment) {
        l.push.apply(l, qf(i.props.children, f));
        return;
      }
      Je(
        i.type === ft,
        `[${
          typeof i.type == "string" ? i.type : i.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Je(
          !i.props.index || !i.props.children,
          "An index route cannot have child routes."
        );
      let h = {
        id: i.props.id || f.join("-"),
        caseSensitive: i.props.caseSensitive,
        element: i.props.element,
        Component: i.props.Component,
        index: i.props.index,
        path: i.props.path,
        loader: i.props.loader,
        action: i.props.action,
        hydrateFallbackElement: i.props.hydrateFallbackElement,
        HydrateFallback: i.props.HydrateFallback,
        errorElement: i.props.errorElement,
        ErrorBoundary: i.props.ErrorBoundary,
        hasErrorBoundary:
          i.props.hasErrorBoundary === !0 ||
          i.props.ErrorBoundary != null ||
          i.props.errorElement != null,
        shouldRevalidate: i.props.shouldRevalidate,
        handle: i.props.handle,
        lazy: i.props.lazy,
      };
      i.props.children && (h.children = qf(i.props.children, f)), l.push(h);
    }),
    l
  );
}
var au = "get",
  nu = "application/x-www-form-urlencoded";
function Du(a) {
  return a != null && typeof a.tagName == "string";
}
function LS(a) {
  return Du(a) && a.tagName.toLowerCase() === "button";
}
function HS(a) {
  return Du(a) && a.tagName.toLowerCase() === "form";
}
function qS(a) {
  return Du(a) && a.tagName.toLowerCase() === "input";
}
function BS(a) {
  return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
}
function VS(a, s) {
  return a.button === 0 && (!s || s === "_self") && !BS(a);
}
function Bf(a = "") {
  return new URLSearchParams(
    typeof a == "string" || Array.isArray(a) || a instanceof URLSearchParams
      ? a
      : Object.keys(a).reduce((s, l) => {
          let i = a[l];
          return s.concat(Array.isArray(i) ? i.map((o) => [l, o]) : [[l, i]]);
        }, [])
  );
}
function PS(a, s) {
  let l = Bf(a);
  return (
    s &&
      s.forEach((i, o) => {
        l.has(o) ||
          s.getAll(o).forEach((f) => {
            l.append(o, f);
          });
      }),
    l
  );
}
var Ki = null;
function YS() {
  if (Ki === null)
    try {
      new FormData(document.createElement("form"), 0), (Ki = !1);
    } catch {
      Ki = !0;
    }
  return Ki;
}
var FS = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function wf(a) {
  return a != null && !FS.has(a)
    ? (ua(
        !1,
        `"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${nu}"`
      ),
      null)
    : a;
}
function GS(a, s) {
  let l, i, o, f, h;
  if (HS(a)) {
    let m = a.getAttribute("action");
    (i = m ? Za(m, s) : null),
      (l = a.getAttribute("method") || au),
      (o = wf(a.getAttribute("enctype")) || nu),
      (f = new FormData(a));
  } else if (LS(a) || (qS(a) && (a.type === "submit" || a.type === "image"))) {
    let m = a.form;
    if (m == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let y = a.getAttribute("formaction") || m.getAttribute("action");
    if (
      ((i = y ? Za(y, s) : null),
      (l = a.getAttribute("formmethod") || m.getAttribute("method") || au),
      (o =
        wf(a.getAttribute("formenctype")) ||
        wf(m.getAttribute("enctype")) ||
        nu),
      (f = new FormData(m, a)),
      !YS())
    ) {
      let { name: p, type: v, value: S } = a;
      if (v === "image") {
        let w = p ? `${p}.` : "";
        f.append(`${w}x`, "0"), f.append(`${w}y`, "0");
      } else p && f.append(p, S);
    }
  } else {
    if (Du(a))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (l = au), (i = null), (o = nu), (h = a);
  }
  return (
    f && o === "text/plain" && ((h = f), (f = void 0)),
    { action: i, method: l.toLowerCase(), encType: o, formData: f, body: h }
  );
}
function cd(a, s) {
  if (a === !1 || a === null || typeof a > "u") throw new Error(s);
}
async function QS(a, s) {
  if (a.id in s) return s[a.id];
  try {
    let l = await import(a.module);
    return (s[a.id] = l), l;
  } catch (l) {
    return (
      console.error(
        `Error loading route module \`${a.module}\`, reloading page...`
      ),
      console.error(l),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function XS(a) {
  return a == null
    ? !1
    : a.href == null
    ? a.rel === "preload" &&
      typeof a.imageSrcSet == "string" &&
      typeof a.imageSizes == "string"
    : typeof a.rel == "string" && typeof a.href == "string";
}
async function $S(a, s, l) {
  let i = await Promise.all(
    a.map(async (o) => {
      let f = s.routes[o.route.id];
      if (f) {
        let h = await QS(f, l);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return IS(
    i
      .flat(1)
      .filter(XS)
      .filter((o) => o.rel === "stylesheet" || o.rel === "preload")
      .map((o) =>
        o.rel === "stylesheet"
          ? { ...o, rel: "prefetch", as: "style" }
          : { ...o, rel: "prefetch" }
      )
  );
}
function Fy(a, s, l, i, o, f) {
  let h = (y, p) => (l[p] ? y.route.id !== l[p].route.id : !0),
    m = (y, p) =>
      l[p].pathname !== y.pathname ||
      (l[p].route.path?.endsWith("*") && l[p].params["*"] !== y.params["*"]);
  return f === "assets"
    ? s.filter((y, p) => h(y, p) || m(y, p))
    : f === "data"
    ? s.filter((y, p) => {
        let v = i.routes[y.route.id];
        if (!v || !v.hasLoader) return !1;
        if (h(y, p) || m(y, p)) return !0;
        if (y.route.shouldRevalidate) {
          let S = y.route.shouldRevalidate({
            currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
            currentParams: l[0]?.params || {},
            nextUrl: new URL(a, window.origin),
            nextParams: y.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof S == "boolean") return S;
        }
        return !0;
      })
    : [];
}
function KS(a, s, { includeHydrateFallback: l } = {}) {
  return ZS(
    a
      .map((i) => {
        let o = s.routes[i.route.id];
        if (!o) return [];
        let f = [o.module];
        return (
          o.clientActionModule && (f = f.concat(o.clientActionModule)),
          o.clientLoaderModule && (f = f.concat(o.clientLoaderModule)),
          l &&
            o.hydrateFallbackModule &&
            (f = f.concat(o.hydrateFallbackModule)),
          o.imports && (f = f.concat(o.imports)),
          f
        );
      })
      .flat(1)
  );
}
function ZS(a) {
  return [...new Set(a)];
}
function JS(a) {
  let s = {},
    l = Object.keys(a).sort();
  for (let i of l) s[i] = a[i];
  return s;
}
function IS(a, s) {
  let l = new Set();
  return (
    new Set(s),
    a.reduce((i, o) => {
      let f = JSON.stringify(JS(o));
      return l.has(f) || (l.add(f), i.push({ key: f, link: o })), i;
    }, [])
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var WS = new Set([100, 101, 204, 205]);
function ew(a, s) {
  let l =
    typeof a == "string"
      ? new URL(
          a,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : a;
  return (
    l.pathname === "/"
      ? (l.pathname = "_root.data")
      : s && Za(l.pathname, s) === "/"
      ? (l.pathname = `${s.replace(/\/$/, "")}/_root.data`)
      : (l.pathname = `${l.pathname.replace(/\/$/, "")}.data`),
    l
  );
}
function d0() {
  let a = b.useContext(sr);
  return (
    cd(
      a,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    a
  );
}
function tw() {
  let a = b.useContext(_u);
  return (
    cd(
      a,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    a
  );
}
var fd = b.createContext(void 0);
fd.displayName = "FrameworkContext";
function h0() {
  let a = b.useContext(fd);
  return (
    cd(a, "You must render this element inside a <HydratedRouter> element"), a
  );
}
function aw(a, s) {
  let l = b.useContext(fd),
    [i, o] = b.useState(!1),
    [f, h] = b.useState(!1),
    {
      onFocus: m,
      onBlur: y,
      onMouseEnter: p,
      onMouseLeave: v,
      onTouchStart: S,
    } = s,
    w = b.useRef(null);
  b.useEffect(() => {
    if ((a === "render" && h(!0), a === "viewport")) {
      let R = (U) => {
          U.forEach((M) => {
            h(M.isIntersecting);
          });
        },
        C = new IntersectionObserver(R, { threshold: 0.5 });
      return (
        w.current && C.observe(w.current),
        () => {
          C.disconnect();
        }
      );
    }
  }, [a]),
    b.useEffect(() => {
      if (i) {
        let R = setTimeout(() => {
          h(!0);
        }, 100);
        return () => {
          clearTimeout(R);
        };
      }
    }, [i]);
  let O = () => {
      o(!0);
    },
    N = () => {
      o(!1), h(!1);
    };
  return l
    ? a !== "intent"
      ? [f, w, {}]
      : [
          f,
          w,
          {
            onFocus: dl(m, O),
            onBlur: dl(y, N),
            onMouseEnter: dl(p, O),
            onMouseLeave: dl(v, N),
            onTouchStart: dl(S, O),
          },
        ]
    : [!1, w, {}];
}
function dl(a, s) {
  return (l) => {
    a && a(l), l.defaultPrevented || s(l);
  };
}
function nw({ page: a, ...s }) {
  let { router: l } = d0(),
    i = b.useMemo(() => n0(l.routes, a, l.basename), [l.routes, a, l.basename]);
  return i ? b.createElement(rw, { page: a, matches: i, ...s }) : null;
}
function sw(a) {
  let { manifest: s, routeModules: l } = h0(),
    [i, o] = b.useState([]);
  return (
    b.useEffect(() => {
      let f = !1;
      return (
        $S(a, s, l).then((h) => {
          f || o(h);
        }),
        () => {
          f = !0;
        }
      );
    }, [a, s, l]),
    i
  );
}
function rw({ page: a, matches: s, ...l }) {
  let i = Ct(),
    { manifest: o, routeModules: f } = h0(),
    { basename: h } = d0(),
    { loaderData: m, matches: y } = tw(),
    p = b.useMemo(() => Fy(a, s, y, o, i, "data"), [a, s, y, o, i]),
    v = b.useMemo(() => Fy(a, s, y, o, i, "assets"), [a, s, y, o, i]),
    S = b.useMemo(() => {
      if (a === i.pathname + i.search + i.hash) return [];
      let N = new Set(),
        R = !1;
      if (
        (s.forEach((U) => {
          let M = o.routes[U.route.id];
          !M ||
            !M.hasLoader ||
            ((!p.some((V) => V.route.id === U.route.id) &&
              U.route.id in m &&
              f[U.route.id]?.shouldRevalidate) ||
            M.hasClientLoader
              ? (R = !0)
              : N.add(U.route.id));
        }),
        N.size === 0)
      )
        return [];
      let C = ew(a, h);
      return (
        R &&
          N.size > 0 &&
          C.searchParams.set(
            "_routes",
            s
              .filter((U) => N.has(U.route.id))
              .map((U) => U.route.id)
              .join(",")
          ),
        [C.pathname + C.search]
      );
    }, [h, m, i, o, p, s, a, f]),
    w = b.useMemo(() => KS(v, o), [v, o]),
    O = sw(v);
  return b.createElement(
    b.Fragment,
    null,
    S.map((N) =>
      b.createElement("link", {
        key: N,
        rel: "prefetch",
        as: "fetch",
        href: N,
        ...l,
      })
    ),
    w.map((N) =>
      b.createElement("link", { key: N, rel: "modulepreload", href: N, ...l })
    ),
    O.map(({ key: N, link: R }) => b.createElement("link", { key: N, ...R }))
  );
}
function lw(...a) {
  return (s) => {
    a.forEach((l) => {
      typeof l == "function" ? l(s) : l != null && (l.current = s);
    });
  };
}
var m0 =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  m0 && (window.__reactRouterVersion = "7.6.0");
} catch {}
function iw({ basename: a, children: s, window: l }) {
  let i = b.useRef();
  i.current == null && (i.current = F1({ window: l, v5Compat: !0 }));
  let o = i.current,
    [f, h] = b.useState({ action: o.action, location: o.location }),
    m = b.useCallback(
      (y) => {
        b.startTransition(() => h(y));
      },
      [h]
    );
  return (
    b.useLayoutEffect(() => o.listen(m), [o, m]),
    b.createElement(zS, {
      basename: a,
      children: s,
      location: f.location,
      navigationType: f.action,
      navigator: o,
    })
  );
}
var p0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ra = b.forwardRef(function (
    {
      onClick: s,
      discover: l = "render",
      prefetch: i = "none",
      relative: o,
      reloadDocument: f,
      replace: h,
      state: m,
      target: y,
      to: p,
      preventScrollReset: v,
      viewTransition: S,
      ...w
    },
    O
  ) {
    let { basename: N } = b.useContext(ya),
      R = typeof p == "string" && p0.test(p),
      C,
      U = !1;
    if (typeof p == "string" && R && ((C = p), m0))
      try {
        let ne = new URL(window.location.href),
          ye = p.startsWith("//") ? new URL(ne.protocol + p) : new URL(p),
          Me = Za(ye.pathname, N);
        ye.origin === ne.origin && Me != null
          ? (p = Me + ye.search + ye.hash)
          : (U = !0);
      } catch {
        ua(
          !1,
          `<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let M = gS(p, { relative: o }),
      [V, H, Y] = aw(i, w),
      _ = cw(p, {
        replace: h,
        state: m,
        target: y,
        preventScrollReset: v,
        relative: o,
        viewTransition: S,
      });
    function K(ne) {
      s && s(ne), ne.defaultPrevented || _(ne);
    }
    let ee = b.createElement("a", {
      ...w,
      ...Y,
      href: C || M,
      onClick: U || f ? s : K,
      ref: lw(O, H),
      target: y,
      "data-discover": !R && l === "render" ? "true" : void 0,
    });
    return V && !R
      ? b.createElement(b.Fragment, null, ee, b.createElement(nw, { page: M }))
      : ee;
  });
ra.displayName = "Link";
var su = b.forwardRef(function (
  {
    "aria-current": s = "page",
    caseSensitive: l = !1,
    className: i = "",
    end: o = !1,
    style: f,
    to: h,
    viewTransition: m,
    children: y,
    ...p
  },
  v
) {
  let S = Ol(h, { relative: p.relative }),
    w = Ct(),
    O = b.useContext(_u),
    { navigator: N, basename: R } = b.useContext(ya),
    C = O != null && yw(S) && m === !0,
    U = N.encodeLocation ? N.encodeLocation(S).pathname : S.pathname,
    M = w.pathname,
    V =
      O && O.navigation && O.navigation.location
        ? O.navigation.location.pathname
        : null;
  l ||
    ((M = M.toLowerCase()),
    (V = V ? V.toLowerCase() : null),
    (U = U.toLowerCase())),
    V && R && (V = Za(V, R) || V);
  const H = U !== "/" && U.endsWith("/") ? U.length - 1 : U.length;
  let Y = M === U || (!o && M.startsWith(U) && M.charAt(H) === "/"),
    _ =
      V != null &&
      (V === U || (!o && V.startsWith(U) && V.charAt(U.length) === "/")),
    K = { isActive: Y, isPending: _, isTransitioning: C },
    ee = Y ? s : void 0,
    ne;
  typeof i == "function"
    ? (ne = i(K))
    : (ne = [
        i,
        Y ? "active" : null,
        _ ? "pending" : null,
        C ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let ye = typeof f == "function" ? f(K) : f;
  return b.createElement(
    ra,
    {
      ...p,
      "aria-current": ee,
      className: ne,
      ref: v,
      style: ye,
      to: h,
      viewTransition: m,
    },
    typeof y == "function" ? y(K) : y
  );
});
su.displayName = "NavLink";
var uw = b.forwardRef(
  (
    {
      discover: a = "render",
      fetcherKey: s,
      navigate: l,
      reloadDocument: i,
      replace: o,
      state: f,
      method: h = au,
      action: m,
      onSubmit: y,
      relative: p,
      preventScrollReset: v,
      viewTransition: S,
      ...w
    },
    O
  ) => {
    let N = mw(),
      R = pw(m, { relative: p }),
      C = h.toLowerCase() === "get" ? "get" : "post",
      U = typeof m == "string" && p0.test(m),
      M = (V) => {
        if ((y && y(V), V.defaultPrevented)) return;
        V.preventDefault();
        let H = V.nativeEvent.submitter,
          Y = H?.getAttribute("formmethod") || h;
        N(H || V.currentTarget, {
          fetcherKey: s,
          method: Y,
          navigate: l,
          replace: o,
          state: f,
          relative: p,
          preventScrollReset: v,
          viewTransition: S,
        });
      };
    return b.createElement("form", {
      ref: O,
      method: C,
      action: R,
      onSubmit: i ? y : M,
      ...w,
      "data-discover": !U && a === "render" ? "true" : void 0,
    });
  }
);
uw.displayName = "Form";
function ow(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function y0(a) {
  let s = b.useContext(sr);
  return Je(s, ow(a)), s;
}
function cw(
  a,
  {
    target: s,
    replace: l,
    state: i,
    preventScrollReset: o,
    relative: f,
    viewTransition: h,
  } = {}
) {
  let m = ns(),
    y = Ct(),
    p = Ol(a, { relative: f });
  return b.useCallback(
    (v) => {
      if (VS(v, s)) {
        v.preventDefault();
        let S = l !== void 0 ? l : jl(y) === jl(p);
        m(a, {
          replace: S,
          state: i,
          preventScrollReset: o,
          relative: f,
          viewTransition: h,
        });
      }
    },
    [y, m, p, l, i, s, a, o, f, h]
  );
}
function fw(a) {
  ua(
    typeof URLSearchParams < "u",
    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params."
  );
  let s = b.useRef(Bf(a)),
    l = b.useRef(!1),
    i = Ct(),
    o = b.useMemo(() => PS(i.search, l.current ? null : s.current), [i.search]),
    f = ns(),
    h = b.useCallback(
      (m, y) => {
        const p = Bf(typeof m == "function" ? m(o) : m);
        (l.current = !0), f("?" + p, y);
      },
      [f, o]
    );
  return [o, h];
}
var dw = 0,
  hw = () => `__${String(++dw)}__`;
function mw() {
  let { router: a } = y0("useSubmit"),
    { basename: s } = b.useContext(ya),
    l = _S();
  return b.useCallback(
    async (i, o = {}) => {
      let { action: f, method: h, encType: m, formData: y, body: p } = GS(i, s);
      if (o.navigate === !1) {
        let v = o.fetcherKey || hw();
        await a.fetch(v, l, o.action || f, {
          preventScrollReset: o.preventScrollReset,
          formData: y,
          body: p,
          formMethod: o.method || h,
          formEncType: o.encType || m,
          flushSync: o.flushSync,
        });
      } else
        await a.navigate(o.action || f, {
          preventScrollReset: o.preventScrollReset,
          formData: y,
          body: p,
          formMethod: o.method || h,
          formEncType: o.encType || m,
          replace: o.replace,
          state: o.state,
          fromRouteId: l,
          flushSync: o.flushSync,
          viewTransition: o.viewTransition,
        });
    },
    [a, s, l]
  );
}
function pw(a, { relative: s } = {}) {
  let { basename: l } = b.useContext(ya),
    i = b.useContext(oa);
  Je(i, "useFormAction must be used inside a RouteContext");
  let [o] = i.matches.slice(-1),
    f = { ...Ol(a || ".", { relative: s }) },
    h = Ct();
  if (a == null) {
    f.search = h.search;
    let m = new URLSearchParams(f.search),
      y = m.getAll("index");
    if (y.some((v) => v === "")) {
      m.delete("index"),
        y.filter((S) => S).forEach((S) => m.append("index", S));
      let v = m.toString();
      f.search = v ? `?${v}` : "";
    }
  }
  return (
    (!a || a === ".") &&
      o.route.index &&
      (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
    l !== "/" && (f.pathname = f.pathname === "/" ? l : Ka([l, f.pathname])),
    jl(f)
  );
}
function yw(a, s = {}) {
  let l = b.useContext(i0);
  Je(
    l != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: i } = y0("useViewTransitionState"),
    o = Ol(a, { relative: s.relative });
  if (!l.isTransitioning) return !1;
  let f = Za(l.currentLocation.pathname, i) || l.currentLocation.pathname,
    h = Za(l.nextLocation.pathname, i) || l.nextLocation.pathname;
  return pu(o.pathname, h) != null || pu(o.pathname, f) != null;
}
[...WS];
var dd = $g();
const JA = ar(dd);
var Rl = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(a) {
      return (
        this.listeners.add(a),
        this.onSubscribe(),
        () => {
          this.listeners.delete(a), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Mu = typeof window > "u" || "Deno" in globalThis;
function ia() {}
function gw(a, s) {
  return typeof a == "function" ? a(s) : a;
}
function vw(a) {
  return typeof a == "number" && a >= 0 && a !== 1 / 0;
}
function xw(a, s) {
  return Math.max(a + (s || 0) - Date.now(), 0);
}
function Gy(a, s) {
  return typeof a == "function" ? a(s) : a;
}
function bw(a, s) {
  return typeof a == "function" ? a(s) : a;
}
function Qy(a, s) {
  const {
    type: l = "all",
    exact: i,
    fetchStatus: o,
    predicate: f,
    queryKey: h,
    stale: m,
  } = a;
  if (h) {
    if (i) {
      if (s.queryHash !== hd(h, s.options)) return !1;
    } else if (!El(s.queryKey, h)) return !1;
  }
  if (l !== "all") {
    const y = s.isActive();
    if ((l === "active" && !y) || (l === "inactive" && y)) return !1;
  }
  return !(
    (typeof m == "boolean" && s.isStale() !== m) ||
    (o && o !== s.state.fetchStatus) ||
    (f && !f(s))
  );
}
function Xy(a, s) {
  const { exact: l, status: i, predicate: o, mutationKey: f } = a;
  if (f) {
    if (!s.options.mutationKey) return !1;
    if (l) {
      if (ts(s.options.mutationKey) !== ts(f)) return !1;
    } else if (!El(s.options.mutationKey, f)) return !1;
  }
  return !((i && s.state.status !== i) || (o && !o(s)));
}
function hd(a, s) {
  return (s?.queryKeyHashFn || ts)(a);
}
function ts(a) {
  return JSON.stringify(a, (s, l) =>
    Vf(l)
      ? Object.keys(l)
          .sort()
          .reduce((i, o) => ((i[o] = l[o]), i), {})
      : l
  );
}
function El(a, s) {
  return a === s
    ? !0
    : typeof a != typeof s
    ? !1
    : a && s && typeof a == "object" && typeof s == "object"
    ? Object.keys(s).every((l) => El(a[l], s[l]))
    : !1;
}
function g0(a, s) {
  if (a === s) return a;
  const l = $y(a) && $y(s);
  if (l || (Vf(a) && Vf(s))) {
    const i = l ? a : Object.keys(a),
      o = i.length,
      f = l ? s : Object.keys(s),
      h = f.length,
      m = l ? [] : {};
    let y = 0;
    for (let p = 0; p < h; p++) {
      const v = l ? p : f[p];
      ((!l && i.includes(v)) || l) && a[v] === void 0 && s[v] === void 0
        ? ((m[v] = void 0), y++)
        : ((m[v] = g0(a[v], s[v])), m[v] === a[v] && a[v] !== void 0 && y++);
    }
    return o === h && y === o ? a : m;
  }
  return s;
}
function Sw(a, s) {
  if (!s || Object.keys(a).length !== Object.keys(s).length) return !1;
  for (const l in a) if (a[l] !== s[l]) return !1;
  return !0;
}
function $y(a) {
  return Array.isArray(a) && a.length === Object.keys(a).length;
}
function Vf(a) {
  if (!Ky(a)) return !1;
  const s = a.constructor;
  if (s === void 0) return !0;
  const l = s.prototype;
  return !(
    !Ky(l) ||
    !l.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(a) !== Object.prototype
  );
}
function Ky(a) {
  return Object.prototype.toString.call(a) === "[object Object]";
}
function ww(a) {
  return new Promise((s) => {
    setTimeout(s, a);
  });
}
function Nw(a, s, l) {
  return typeof l.structuralSharing == "function"
    ? l.structuralSharing(a, s)
    : l.structuralSharing !== !1
    ? g0(a, s)
    : s;
}
function jw(a, s, l = 0) {
  const i = [...a, s];
  return l && i.length > l ? i.slice(1) : i;
}
function Ew(a, s, l = 0) {
  const i = [s, ...a];
  return l && i.length > l ? i.slice(0, -1) : i;
}
var md = Symbol();
function v0(a, s) {
  return !a.queryFn && s?.initialPromise
    ? () => s.initialPromise
    : !a.queryFn || a.queryFn === md
    ? () => Promise.reject(new Error(`Missing queryFn: '${a.queryHash}'`))
    : a.queryFn;
}
function Aw(a, s) {
  return typeof a == "function" ? a(...s) : !!a;
}
var Tw = class extends Rl {
    #e;
    #t;
    #a;
    constructor() {
      super(),
        (this.#a = (a) => {
          if (!Mu && window.addEventListener) {
            const s = () => a();
            return (
              window.addEventListener("visibilitychange", s, !1),
              () => {
                window.removeEventListener("visibilitychange", s);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#a);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(a) {
      (this.#a = a),
        this.#t?.(),
        (this.#t = a((s) => {
          typeof s == "boolean" ? this.setFocused(s) : this.onFocus();
        }));
    }
    setFocused(a) {
      this.#e !== a && ((this.#e = a), this.onFocus());
    }
    onFocus() {
      const a = this.isFocused();
      this.listeners.forEach((s) => {
        s(a);
      });
    }
    isFocused() {
      return typeof this.#e == "boolean"
        ? this.#e
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  x0 = new Tw(),
  Cw = class extends Rl {
    #e = !0;
    #t;
    #a;
    constructor() {
      super(),
        (this.#a = (a) => {
          if (!Mu && window.addEventListener) {
            const s = () => a(!0),
              l = () => a(!1);
            return (
              window.addEventListener("online", s, !1),
              window.addEventListener("offline", l, !1),
              () => {
                window.removeEventListener("online", s),
                  window.removeEventListener("offline", l);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#a);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(a) {
      (this.#a = a), this.#t?.(), (this.#t = a(this.setOnline.bind(this)));
    }
    setOnline(a) {
      this.#e !== a &&
        ((this.#e = a),
        this.listeners.forEach((l) => {
          l(a);
        }));
    }
    isOnline() {
      return this.#e;
    }
  },
  gu = new Cw();
function Ow() {
  let a, s;
  const l = new Promise((o, f) => {
    (a = o), (s = f);
  });
  (l.status = "pending"), l.catch(() => {});
  function i(o) {
    Object.assign(l, o), delete l.resolve, delete l.reject;
  }
  return (
    (l.resolve = (o) => {
      i({ status: "fulfilled", value: o }), a(o);
    }),
    (l.reject = (o) => {
      i({ status: "rejected", reason: o }), s(o);
    }),
    l
  );
}
function Rw(a) {
  return Math.min(1e3 * 2 ** a, 3e4);
}
function b0(a) {
  return (a ?? "online") === "online" ? gu.isOnline() : !0;
}
var S0 = class extends Error {
  constructor(a) {
    super("CancelledError"),
      (this.revert = a?.revert),
      (this.silent = a?.silent);
  }
};
function Nf(a) {
  return a instanceof S0;
}
function w0(a) {
  let s = !1,
    l = 0,
    i = !1,
    o;
  const f = Ow(),
    h = (R) => {
      i || (w(new S0(R)), a.abort?.());
    },
    m = () => {
      s = !0;
    },
    y = () => {
      s = !1;
    },
    p = () =>
      x0.isFocused() &&
      (a.networkMode === "always" || gu.isOnline()) &&
      a.canRun(),
    v = () => b0(a.networkMode) && a.canRun(),
    S = (R) => {
      i || ((i = !0), a.onSuccess?.(R), o?.(), f.resolve(R));
    },
    w = (R) => {
      i || ((i = !0), a.onError?.(R), o?.(), f.reject(R));
    },
    O = () =>
      new Promise((R) => {
        (o = (C) => {
          (i || p()) && R(C);
        }),
          a.onPause?.();
      }).then(() => {
        (o = void 0), i || a.onContinue?.();
      }),
    N = () => {
      if (i) return;
      let R;
      const C = l === 0 ? a.initialPromise : void 0;
      try {
        R = C ?? a.fn();
      } catch (U) {
        R = Promise.reject(U);
      }
      Promise.resolve(R)
        .then(S)
        .catch((U) => {
          if (i) return;
          const M = a.retry ?? (Mu ? 0 : 3),
            V = a.retryDelay ?? Rw,
            H = typeof V == "function" ? V(l, U) : V,
            Y =
              M === !0 ||
              (typeof M == "number" && l < M) ||
              (typeof M == "function" && M(l, U));
          if (s || !Y) {
            w(U);
            return;
          }
          l++,
            a.onFail?.(l, U),
            ww(H)
              .then(() => (p() ? void 0 : O()))
              .then(() => {
                s ? w(U) : N();
              });
        });
    };
  return {
    promise: f,
    cancel: h,
    continue: () => (o?.(), f),
    cancelRetry: m,
    continueRetry: y,
    canStart: v,
    start: () => (v() ? N() : O().then(N), f),
  };
}
var _w = (a) => setTimeout(a, 0);
function Dw() {
  let a = [],
    s = 0,
    l = (m) => {
      m();
    },
    i = (m) => {
      m();
    },
    o = _w;
  const f = (m) => {
      s
        ? a.push(m)
        : o(() => {
            l(m);
          });
    },
    h = () => {
      const m = a;
      (a = []),
        m.length &&
          o(() => {
            i(() => {
              m.forEach((y) => {
                l(y);
              });
            });
          });
    };
  return {
    batch: (m) => {
      let y;
      s++;
      try {
        y = m();
      } finally {
        s--, s || h();
      }
      return y;
    },
    batchCalls:
      (m) =>
      (...y) => {
        f(() => {
          m(...y);
        });
      },
    schedule: f,
    setNotifyFunction: (m) => {
      l = m;
    },
    setBatchNotifyFunction: (m) => {
      i = m;
    },
    setScheduler: (m) => {
      o = m;
    },
  };
}
var wt = Dw(),
  N0 = class {
    #e;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      this.clearGcTimeout(),
        vw(this.gcTime) &&
          (this.#e = setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime));
    }
    updateGcTime(a) {
      this.gcTime = Math.max(
        this.gcTime || 0,
        a ?? (Mu ? 1 / 0 : 5 * 60 * 1e3)
      );
    }
    clearGcTimeout() {
      this.#e && (clearTimeout(this.#e), (this.#e = void 0));
    }
  },
  Mw = class extends N0 {
    #e;
    #t;
    #a;
    #n;
    #s;
    #l;
    #i;
    constructor(a) {
      super(),
        (this.#i = !1),
        (this.#l = a.defaultOptions),
        this.setOptions(a.options),
        (this.observers = []),
        (this.#n = a.client),
        (this.#a = this.#n.getQueryCache()),
        (this.queryKey = a.queryKey),
        (this.queryHash = a.queryHash),
        (this.#e = zw(this.options)),
        (this.state = a.state ?? this.#e),
        this.scheduleGc();
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#s?.promise;
    }
    setOptions(a) {
      (this.options = { ...this.#l, ...a }),
        this.updateGcTime(this.options.gcTime);
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === "idle" &&
        this.#a.remove(this);
    }
    setData(a, s) {
      const l = Nw(this.state.data, a, this.options);
      return (
        this.#r({
          data: l,
          type: "success",
          dataUpdatedAt: s?.updatedAt,
          manual: s?.manual,
        }),
        l
      );
    }
    setState(a, s) {
      this.#r({ type: "setState", state: a, setStateOptions: s });
    }
    cancel(a) {
      const s = this.#s?.promise;
      return this.#s?.cancel(a), s ? s.then(ia).catch(ia) : Promise.resolve();
    }
    destroy() {
      super.destroy(), this.cancel({ silent: !0 });
    }
    reset() {
      this.destroy(), this.setState(this.#e);
    }
    isActive() {
      return this.observers.some((a) => bw(a.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === md ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStale() {
      return this.state.isInvalidated
        ? !0
        : this.getObserversCount() > 0
        ? this.observers.some((a) => a.getCurrentResult().isStale)
        : this.state.data === void 0;
    }
    isStaleByTime(a = 0) {
      return (
        this.state.isInvalidated ||
        this.state.data === void 0 ||
        !xw(this.state.dataUpdatedAt, a)
      );
    }
    onFocus() {
      this.observers
        .find((s) => s.shouldFetchOnWindowFocus())
        ?.refetch({ cancelRefetch: !1 }),
        this.#s?.continue();
    }
    onOnline() {
      this.observers
        .find((s) => s.shouldFetchOnReconnect())
        ?.refetch({ cancelRefetch: !1 }),
        this.#s?.continue();
    }
    addObserver(a) {
      this.observers.includes(a) ||
        (this.observers.push(a),
        this.clearGcTimeout(),
        this.#a.notify({ type: "observerAdded", query: this, observer: a }));
    }
    removeObserver(a) {
      this.observers.includes(a) &&
        ((this.observers = this.observers.filter((s) => s !== a)),
        this.observers.length ||
          (this.#s &&
            (this.#i ? this.#s.cancel({ revert: !0 }) : this.#s.cancelRetry()),
          this.scheduleGc()),
        this.#a.notify({ type: "observerRemoved", query: this, observer: a }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || this.#r({ type: "invalidate" });
    }
    fetch(a, s) {
      if (this.state.fetchStatus !== "idle") {
        if (this.state.data !== void 0 && s?.cancelRefetch)
          this.cancel({ silent: !0 });
        else if (this.#s) return this.#s.continueRetry(), this.#s.promise;
      }
      if ((a && this.setOptions(a), !this.options.queryFn)) {
        const m = this.observers.find((y) => y.options.queryFn);
        m && this.setOptions(m.options);
      }
      const l = new AbortController(),
        i = (m) => {
          Object.defineProperty(m, "signal", {
            enumerable: !0,
            get: () => ((this.#i = !0), l.signal),
          });
        },
        o = () => {
          const m = v0(this.options, s),
            y = { client: this.#n, queryKey: this.queryKey, meta: this.meta };
          return (
            i(y),
            (this.#i = !1),
            this.options.persister ? this.options.persister(m, y, this) : m(y)
          );
        },
        f = {
          fetchOptions: s,
          options: this.options,
          queryKey: this.queryKey,
          client: this.#n,
          state: this.state,
          fetchFn: o,
        };
      i(f),
        this.options.behavior?.onFetch(f, this),
        (this.#t = this.state),
        (this.state.fetchStatus === "idle" ||
          this.state.fetchMeta !== f.fetchOptions?.meta) &&
          this.#r({ type: "fetch", meta: f.fetchOptions?.meta });
      const h = (m) => {
        (Nf(m) && m.silent) || this.#r({ type: "error", error: m }),
          Nf(m) ||
            (this.#a.config.onError?.(m, this),
            this.#a.config.onSettled?.(this.state.data, m, this)),
          this.scheduleGc();
      };
      return (
        (this.#s = w0({
          initialPromise: s?.initialPromise,
          fn: f.fetchFn,
          abort: l.abort.bind(l),
          onSuccess: (m) => {
            if (m === void 0) {
              h(new Error(`${this.queryHash} data is undefined`));
              return;
            }
            try {
              this.setData(m);
            } catch (y) {
              h(y);
              return;
            }
            this.#a.config.onSuccess?.(m, this),
              this.#a.config.onSettled?.(m, this.state.error, this),
              this.scheduleGc();
          },
          onError: h,
          onFail: (m, y) => {
            this.#r({ type: "failed", failureCount: m, error: y });
          },
          onPause: () => {
            this.#r({ type: "pause" });
          },
          onContinue: () => {
            this.#r({ type: "continue" });
          },
          retry: f.options.retry,
          retryDelay: f.options.retryDelay,
          networkMode: f.options.networkMode,
          canRun: () => !0,
        })),
        this.#s.start()
      );
    }
    #r(a) {
      const s = (l) => {
        switch (a.type) {
          case "failed":
            return {
              ...l,
              fetchFailureCount: a.failureCount,
              fetchFailureReason: a.error,
            };
          case "pause":
            return { ...l, fetchStatus: "paused" };
          case "continue":
            return { ...l, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...l,
              ...Uw(l.data, this.options),
              fetchMeta: a.meta ?? null,
            };
          case "success":
            return {
              ...l,
              data: a.data,
              dataUpdateCount: l.dataUpdateCount + 1,
              dataUpdatedAt: a.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!a.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const i = a.error;
            return Nf(i) && i.revert && this.#t
              ? { ...this.#t, fetchStatus: "idle" }
              : {
                  ...l,
                  error: i,
                  errorUpdateCount: l.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: l.fetchFailureCount + 1,
                  fetchFailureReason: i,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...l, isInvalidated: !0 };
          case "setState":
            return { ...l, ...a.state };
        }
      };
      (this.state = s(this.state)),
        wt.batch(() => {
          this.observers.forEach((l) => {
            l.onQueryUpdate();
          }),
            this.#a.notify({ query: this, type: "updated", action: a });
        });
    }
  };
function Uw(a, s) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: b0(s.networkMode) ? "fetching" : "paused",
    ...(a === void 0 && { error: null, status: "pending" }),
  };
}
function zw(a) {
  const s =
      typeof a.initialData == "function" ? a.initialData() : a.initialData,
    l = s !== void 0,
    i = l
      ? typeof a.initialDataUpdatedAt == "function"
        ? a.initialDataUpdatedAt()
        : a.initialDataUpdatedAt
      : 0;
  return {
    data: s,
    dataUpdateCount: 0,
    dataUpdatedAt: l ? i ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: l ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var kw = class extends Rl {
    constructor(a = {}) {
      super(), (this.config = a), (this.#e = new Map());
    }
    #e;
    build(a, s, l) {
      const i = s.queryKey,
        o = s.queryHash ?? hd(i, s);
      let f = this.get(o);
      return (
        f ||
          ((f = new Mw({
            client: a,
            queryKey: i,
            queryHash: o,
            options: a.defaultQueryOptions(s),
            state: l,
            defaultOptions: a.getQueryDefaults(i),
          })),
          this.add(f)),
        f
      );
    }
    add(a) {
      this.#e.has(a.queryHash) ||
        (this.#e.set(a.queryHash, a), this.notify({ type: "added", query: a }));
    }
    remove(a) {
      const s = this.#e.get(a.queryHash);
      s &&
        (a.destroy(),
        s === a && this.#e.delete(a.queryHash),
        this.notify({ type: "removed", query: a }));
    }
    clear() {
      wt.batch(() => {
        this.getAll().forEach((a) => {
          this.remove(a);
        });
      });
    }
    get(a) {
      return this.#e.get(a);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(a) {
      const s = { exact: !0, ...a };
      return this.getAll().find((l) => Qy(s, l));
    }
    findAll(a = {}) {
      const s = this.getAll();
      return Object.keys(a).length > 0 ? s.filter((l) => Qy(a, l)) : s;
    }
    notify(a) {
      wt.batch(() => {
        this.listeners.forEach((s) => {
          s(a);
        });
      });
    }
    onFocus() {
      wt.batch(() => {
        this.getAll().forEach((a) => {
          a.onFocus();
        });
      });
    }
    onOnline() {
      wt.batch(() => {
        this.getAll().forEach((a) => {
          a.onOnline();
        });
      });
    }
  },
  Lw = class extends N0 {
    #e;
    #t;
    #a;
    constructor(a) {
      super(),
        (this.mutationId = a.mutationId),
        (this.#t = a.mutationCache),
        (this.#e = []),
        (this.state = a.state || j0()),
        this.setOptions(a.options),
        this.scheduleGc();
    }
    setOptions(a) {
      (this.options = a), this.updateGcTime(this.options.gcTime);
    }
    get meta() {
      return this.options.meta;
    }
    addObserver(a) {
      this.#e.includes(a) ||
        (this.#e.push(a),
        this.clearGcTimeout(),
        this.#t.notify({ type: "observerAdded", mutation: this, observer: a }));
    }
    removeObserver(a) {
      (this.#e = this.#e.filter((s) => s !== a)),
        this.scheduleGc(),
        this.#t.notify({
          type: "observerRemoved",
          mutation: this,
          observer: a,
        });
    }
    optionalRemove() {
      this.#e.length ||
        (this.state.status === "pending"
          ? this.scheduleGc()
          : this.#t.remove(this));
    }
    continue() {
      return this.#a?.continue() ?? this.execute(this.state.variables);
    }
    async execute(a) {
      const s = () => {
        this.#n({ type: "continue" });
      };
      this.#a = w0({
        fn: () =>
          this.options.mutationFn
            ? this.options.mutationFn(a)
            : Promise.reject(new Error("No mutationFn found")),
        onFail: (o, f) => {
          this.#n({ type: "failed", failureCount: o, error: f });
        },
        onPause: () => {
          this.#n({ type: "pause" });
        },
        onContinue: s,
        retry: this.options.retry ?? 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode,
        canRun: () => this.#t.canRun(this),
      });
      const l = this.state.status === "pending",
        i = !this.#a.canStart();
      try {
        if (l) s();
        else {
          this.#n({ type: "pending", variables: a, isPaused: i }),
            await this.#t.config.onMutate?.(a, this);
          const f = await this.options.onMutate?.(a);
          f !== this.state.context &&
            this.#n({ type: "pending", context: f, variables: a, isPaused: i });
        }
        const o = await this.#a.start();
        return (
          await this.#t.config.onSuccess?.(o, a, this.state.context, this),
          await this.options.onSuccess?.(o, a, this.state.context),
          await this.#t.config.onSettled?.(
            o,
            null,
            this.state.variables,
            this.state.context,
            this
          ),
          await this.options.onSettled?.(o, null, a, this.state.context),
          this.#n({ type: "success", data: o }),
          o
        );
      } catch (o) {
        try {
          throw (
            (await this.#t.config.onError?.(o, a, this.state.context, this),
            await this.options.onError?.(o, a, this.state.context),
            await this.#t.config.onSettled?.(
              void 0,
              o,
              this.state.variables,
              this.state.context,
              this
            ),
            await this.options.onSettled?.(void 0, o, a, this.state.context),
            o)
          );
        } finally {
          this.#n({ type: "error", error: o });
        }
      } finally {
        this.#t.runNext(this);
      }
    }
    #n(a) {
      const s = (l) => {
        switch (a.type) {
          case "failed":
            return {
              ...l,
              failureCount: a.failureCount,
              failureReason: a.error,
            };
          case "pause":
            return { ...l, isPaused: !0 };
          case "continue":
            return { ...l, isPaused: !1 };
          case "pending":
            return {
              ...l,
              context: a.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: a.isPaused,
              status: "pending",
              variables: a.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...l,
              data: a.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...l,
              data: void 0,
              error: a.error,
              failureCount: l.failureCount + 1,
              failureReason: a.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = s(this.state)),
        wt.batch(() => {
          this.#e.forEach((l) => {
            l.onMutationUpdate(a);
          }),
            this.#t.notify({ mutation: this, type: "updated", action: a });
        });
    }
  };
function j0() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Hw = class extends Rl {
  constructor(a = {}) {
    super(),
      (this.config = a),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#a = 0);
  }
  #e;
  #t;
  #a;
  build(a, s, l) {
    const i = new Lw({
      mutationCache: this,
      mutationId: ++this.#a,
      options: a.defaultMutationOptions(s),
      state: l,
    });
    return this.add(i), i;
  }
  add(a) {
    this.#e.add(a);
    const s = Zi(a);
    if (typeof s == "string") {
      const l = this.#t.get(s);
      l ? l.push(a) : this.#t.set(s, [a]);
    }
    this.notify({ type: "added", mutation: a });
  }
  remove(a) {
    if (this.#e.delete(a)) {
      const s = Zi(a);
      if (typeof s == "string") {
        const l = this.#t.get(s);
        if (l)
          if (l.length > 1) {
            const i = l.indexOf(a);
            i !== -1 && l.splice(i, 1);
          } else l[0] === a && this.#t.delete(s);
      }
    }
    this.notify({ type: "removed", mutation: a });
  }
  canRun(a) {
    const s = Zi(a);
    if (typeof s == "string") {
      const i = this.#t.get(s)?.find((o) => o.state.status === "pending");
      return !i || i === a;
    } else return !0;
  }
  runNext(a) {
    const s = Zi(a);
    return typeof s == "string"
      ? this.#t
          .get(s)
          ?.find((i) => i !== a && i.state.isPaused)
          ?.continue() ?? Promise.resolve()
      : Promise.resolve();
  }
  clear() {
    wt.batch(() => {
      this.#e.forEach((a) => {
        this.notify({ type: "removed", mutation: a });
      }),
        this.#e.clear(),
        this.#t.clear();
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(a) {
    const s = { exact: !0, ...a };
    return this.getAll().find((l) => Xy(s, l));
  }
  findAll(a = {}) {
    return this.getAll().filter((s) => Xy(a, s));
  }
  notify(a) {
    wt.batch(() => {
      this.listeners.forEach((s) => {
        s(a);
      });
    });
  }
  resumePausedMutations() {
    const a = this.getAll().filter((s) => s.state.isPaused);
    return wt.batch(() => Promise.all(a.map((s) => s.continue().catch(ia))));
  }
};
function Zi(a) {
  return a.options.scope?.id;
}
function Zy(a) {
  return {
    onFetch: (s, l) => {
      const i = s.options,
        o = s.fetchOptions?.meta?.fetchMore?.direction,
        f = s.state.data?.pages || [],
        h = s.state.data?.pageParams || [];
      let m = { pages: [], pageParams: [] },
        y = 0;
      const p = async () => {
        let v = !1;
        const S = (N) => {
            Object.defineProperty(N, "signal", {
              enumerable: !0,
              get: () => (
                s.signal.aborted
                  ? (v = !0)
                  : s.signal.addEventListener("abort", () => {
                      v = !0;
                    }),
                s.signal
              ),
            });
          },
          w = v0(s.options, s.fetchOptions),
          O = async (N, R, C) => {
            if (v) return Promise.reject();
            if (R == null && N.pages.length) return Promise.resolve(N);
            const U = {
              client: s.client,
              queryKey: s.queryKey,
              pageParam: R,
              direction: C ? "backward" : "forward",
              meta: s.options.meta,
            };
            S(U);
            const M = await w(U),
              { maxPages: V } = s.options,
              H = C ? Ew : jw;
            return {
              pages: H(N.pages, M, V),
              pageParams: H(N.pageParams, R, V),
            };
          };
        if (o && f.length) {
          const N = o === "backward",
            R = N ? qw : Jy,
            C = { pages: f, pageParams: h },
            U = R(i, C);
          m = await O(C, U, N);
        } else {
          const N = a ?? f.length;
          do {
            const R = y === 0 ? h[0] ?? i.initialPageParam : Jy(i, m);
            if (y > 0 && R == null) break;
            (m = await O(m, R)), y++;
          } while (y < N);
        }
        return m;
      };
      s.options.persister
        ? (s.fetchFn = () =>
            s.options.persister?.(
              p,
              {
                client: s.client,
                queryKey: s.queryKey,
                meta: s.options.meta,
                signal: s.signal,
              },
              l
            ))
        : (s.fetchFn = p);
    },
  };
}
function Jy(a, { pages: s, pageParams: l }) {
  const i = s.length - 1;
  return s.length > 0 ? a.getNextPageParam(s[i], s, l[i], l) : void 0;
}
function qw(a, { pages: s, pageParams: l }) {
  return s.length > 0 ? a.getPreviousPageParam?.(s[0], s, l[0], l) : void 0;
}
var Bw = class {
    #e;
    #t;
    #a;
    #n;
    #s;
    #l;
    #i;
    #r;
    constructor(a = {}) {
      (this.#e = a.queryCache || new kw()),
        (this.#t = a.mutationCache || new Hw()),
        (this.#a = a.defaultOptions || {}),
        (this.#n = new Map()),
        (this.#s = new Map()),
        (this.#l = 0);
    }
    mount() {
      this.#l++,
        this.#l === 1 &&
          ((this.#i = x0.subscribe(async (a) => {
            a && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#r = gu.subscribe(async (a) => {
            a && (await this.resumePausedMutations(), this.#e.onOnline());
          })));
    }
    unmount() {
      this.#l--,
        this.#l === 0 &&
          (this.#i?.(), (this.#i = void 0), this.#r?.(), (this.#r = void 0));
    }
    isFetching(a) {
      return this.#e.findAll({ ...a, fetchStatus: "fetching" }).length;
    }
    isMutating(a) {
      return this.#t.findAll({ ...a, status: "pending" }).length;
    }
    getQueryData(a) {
      const s = this.defaultQueryOptions({ queryKey: a });
      return this.#e.get(s.queryHash)?.state.data;
    }
    ensureQueryData(a) {
      const s = this.defaultQueryOptions(a),
        l = this.#e.build(this, s),
        i = l.state.data;
      return i === void 0
        ? this.fetchQuery(a)
        : (a.revalidateIfStale &&
            l.isStaleByTime(Gy(s.staleTime, l)) &&
            this.prefetchQuery(s),
          Promise.resolve(i));
    }
    getQueriesData(a) {
      return this.#e.findAll(a).map(({ queryKey: s, state: l }) => {
        const i = l.data;
        return [s, i];
      });
    }
    setQueryData(a, s, l) {
      const i = this.defaultQueryOptions({ queryKey: a }),
        f = this.#e.get(i.queryHash)?.state.data,
        h = gw(s, f);
      if (h !== void 0)
        return this.#e.build(this, i).setData(h, { ...l, manual: !0 });
    }
    setQueriesData(a, s, l) {
      return wt.batch(() =>
        this.#e
          .findAll(a)
          .map(({ queryKey: i }) => [i, this.setQueryData(i, s, l)])
      );
    }
    getQueryState(a) {
      const s = this.defaultQueryOptions({ queryKey: a });
      return this.#e.get(s.queryHash)?.state;
    }
    removeQueries(a) {
      const s = this.#e;
      wt.batch(() => {
        s.findAll(a).forEach((l) => {
          s.remove(l);
        });
      });
    }
    resetQueries(a, s) {
      const l = this.#e;
      return wt.batch(
        () => (
          l.findAll(a).forEach((i) => {
            i.reset();
          }),
          this.refetchQueries({ type: "active", ...a }, s)
        )
      );
    }
    cancelQueries(a, s = {}) {
      const l = { revert: !0, ...s },
        i = wt.batch(() => this.#e.findAll(a).map((o) => o.cancel(l)));
      return Promise.all(i).then(ia).catch(ia);
    }
    invalidateQueries(a, s = {}) {
      return wt.batch(
        () => (
          this.#e.findAll(a).forEach((l) => {
            l.invalidate();
          }),
          a?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries(
                { ...a, type: a?.refetchType ?? a?.type ?? "active" },
                s
              )
        )
      );
    }
    refetchQueries(a, s = {}) {
      const l = { ...s, cancelRefetch: s.cancelRefetch ?? !0 },
        i = wt.batch(() =>
          this.#e
            .findAll(a)
            .filter((o) => !o.isDisabled())
            .map((o) => {
              let f = o.fetch(void 0, l);
              return (
                l.throwOnError || (f = f.catch(ia)),
                o.state.fetchStatus === "paused" ? Promise.resolve() : f
              );
            })
        );
      return Promise.all(i).then(ia);
    }
    fetchQuery(a) {
      const s = this.defaultQueryOptions(a);
      s.retry === void 0 && (s.retry = !1);
      const l = this.#e.build(this, s);
      return l.isStaleByTime(Gy(s.staleTime, l))
        ? l.fetch(s)
        : Promise.resolve(l.state.data);
    }
    prefetchQuery(a) {
      return this.fetchQuery(a).then(ia).catch(ia);
    }
    fetchInfiniteQuery(a) {
      return (a.behavior = Zy(a.pages)), this.fetchQuery(a);
    }
    prefetchInfiniteQuery(a) {
      return this.fetchInfiniteQuery(a).then(ia).catch(ia);
    }
    ensureInfiniteQueryData(a) {
      return (a.behavior = Zy(a.pages)), this.ensureQueryData(a);
    }
    resumePausedMutations() {
      return gu.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#a;
    }
    setDefaultOptions(a) {
      this.#a = a;
    }
    setQueryDefaults(a, s) {
      this.#n.set(ts(a), { queryKey: a, defaultOptions: s });
    }
    getQueryDefaults(a) {
      const s = [...this.#n.values()],
        l = {};
      return (
        s.forEach((i) => {
          El(a, i.queryKey) && Object.assign(l, i.defaultOptions);
        }),
        l
      );
    }
    setMutationDefaults(a, s) {
      this.#s.set(ts(a), { mutationKey: a, defaultOptions: s });
    }
    getMutationDefaults(a) {
      const s = [...this.#s.values()],
        l = {};
      return (
        s.forEach((i) => {
          El(a, i.mutationKey) && Object.assign(l, i.defaultOptions);
        }),
        l
      );
    }
    defaultQueryOptions(a) {
      if (a._defaulted) return a;
      const s = {
        ...this.#a.queries,
        ...this.getQueryDefaults(a.queryKey),
        ...a,
        _defaulted: !0,
      };
      return (
        s.queryHash || (s.queryHash = hd(s.queryKey, s)),
        s.refetchOnReconnect === void 0 &&
          (s.refetchOnReconnect = s.networkMode !== "always"),
        s.throwOnError === void 0 && (s.throwOnError = !!s.suspense),
        !s.networkMode && s.persister && (s.networkMode = "offlineFirst"),
        s.queryFn === md && (s.enabled = !1),
        s
      );
    }
    defaultMutationOptions(a) {
      return a?._defaulted
        ? a
        : {
            ...this.#a.mutations,
            ...(a?.mutationKey && this.getMutationDefaults(a.mutationKey)),
            ...a,
            _defaulted: !0,
          };
    }
    clear() {
      this.#e.clear(), this.#t.clear();
    }
  },
  Vw = class extends Rl {
    #e;
    #t = void 0;
    #a;
    #n;
    constructor(s, l) {
      super(), (this.#e = s), this.setOptions(l), this.bindMethods(), this.#s();
    }
    bindMethods() {
      (this.mutate = this.mutate.bind(this)),
        (this.reset = this.reset.bind(this));
    }
    setOptions(s) {
      const l = this.options;
      (this.options = this.#e.defaultMutationOptions(s)),
        Sw(this.options, l) ||
          this.#e
            .getMutationCache()
            .notify({
              type: "observerOptionsUpdated",
              mutation: this.#a,
              observer: this,
            }),
        l?.mutationKey &&
        this.options.mutationKey &&
        ts(l.mutationKey) !== ts(this.options.mutationKey)
          ? this.reset()
          : this.#a?.state.status === "pending" &&
            this.#a.setOptions(this.options);
    }
    onUnsubscribe() {
      this.hasListeners() || this.#a?.removeObserver(this);
    }
    onMutationUpdate(s) {
      this.#s(), this.#l(s);
    }
    getCurrentResult() {
      return this.#t;
    }
    reset() {
      this.#a?.removeObserver(this), (this.#a = void 0), this.#s(), this.#l();
    }
    mutate(s, l) {
      return (
        (this.#n = l),
        this.#a?.removeObserver(this),
        (this.#a = this.#e.getMutationCache().build(this.#e, this.options)),
        this.#a.addObserver(this),
        this.#a.execute(s)
      );
    }
    #s() {
      const s = this.#a?.state ?? j0();
      this.#t = {
        ...s,
        isPending: s.status === "pending",
        isSuccess: s.status === "success",
        isError: s.status === "error",
        isIdle: s.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      };
    }
    #l(s) {
      wt.batch(() => {
        if (this.#n && this.hasListeners()) {
          const l = this.#t.variables,
            i = this.#t.context;
          s?.type === "success"
            ? (this.#n.onSuccess?.(s.data, l, i),
              this.#n.onSettled?.(s.data, null, l, i))
            : s?.type === "error" &&
              (this.#n.onError?.(s.error, l, i),
              this.#n.onSettled?.(void 0, s.error, l, i));
        }
        this.listeners.forEach((l) => {
          l(this.#t);
        });
      });
    }
  },
  E0 = b.createContext(void 0),
  Pw = (a) => {
    const s = b.useContext(E0);
    if (!s)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return s;
  },
  Yw = ({ client: a, children: s }) => (
    b.useEffect(
      () => (
        a.mount(),
        () => {
          a.unmount();
        }
      ),
      [a]
    ),
    c.jsx(E0.Provider, { value: a, children: s })
  );
function vu(a, s) {
  const l = Pw(),
    [i] = b.useState(() => new Vw(l, a));
  b.useEffect(() => {
    i.setOptions(a);
  }, [i, a]);
  const o = b.useSyncExternalStore(
      b.useCallback((h) => i.subscribe(wt.batchCalls(h)), [i]),
      () => i.getCurrentResult(),
      () => i.getCurrentResult()
    ),
    f = b.useCallback(
      (h, m) => {
        i.mutate(h, m).catch(ia);
      },
      [i]
    );
  if (o.error && Aw(i.options.throwOnError, [o.error])) throw o.error;
  return { ...o, mutate: f, mutateAsync: o.mutate };
}
let Fw = { data: "" },
  Gw = (a) =>
    typeof window == "object"
      ? (
          (a ? a.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (a || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" }
          )
        ).firstChild
      : a || Fw,
  Qw = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  Xw = /\/\*[^]*?\*\/|  +/g,
  Iy = /\n+/g,
  jn = (a, s) => {
    let l = "",
      i = "",
      o = "";
    for (let f in a) {
      let h = a[f];
      f[0] == "@"
        ? f[1] == "i"
          ? (l = f + " " + h + ";")
          : (i +=
              f[1] == "f"
                ? jn(h, f)
                : f + "{" + jn(h, f[1] == "k" ? "" : s) + "}")
        : typeof h == "object"
        ? (i += jn(
            h,
            s
              ? s.replace(/([^,])+/g, (m) =>
                  f.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (y) =>
                    /&/.test(y) ? y.replace(/&/g, m) : m ? m + " " + y : y
                  )
                )
              : f
          ))
        : h != null &&
          ((f = /^--/.test(f) ? f : f.replace(/[A-Z]/g, "-$&").toLowerCase()),
          (o += jn.p ? jn.p(f, h) : f + ":" + h + ";"));
    }
    return l + (s && o ? s + "{" + o + "}" : o) + i;
  },
  Fa = {},
  A0 = (a) => {
    if (typeof a == "object") {
      let s = "";
      for (let l in a) s += l + A0(a[l]);
      return s;
    }
    return a;
  },
  $w = (a, s, l, i, o) => {
    let f = A0(a),
      h =
        Fa[f] ||
        (Fa[f] = ((y) => {
          let p = 0,
            v = 11;
          for (; p < y.length; ) v = (101 * v + y.charCodeAt(p++)) >>> 0;
          return "go" + v;
        })(f));
    if (!Fa[h]) {
      let y =
        f !== a
          ? a
          : ((p) => {
              let v,
                S,
                w = [{}];
              for (; (v = Qw.exec(p.replace(Xw, ""))); )
                v[4]
                  ? w.shift()
                  : v[3]
                  ? ((S = v[3].replace(Iy, " ").trim()),
                    w.unshift((w[0][S] = w[0][S] || {})))
                  : (w[0][v[1]] = v[2].replace(Iy, " ").trim());
              return w[0];
            })(a);
      Fa[h] = jn(o ? { ["@keyframes " + h]: y } : y, l ? "" : "." + h);
    }
    let m = l && Fa.g ? Fa.g : null;
    return (
      l && (Fa.g = Fa[h]),
      ((y, p, v, S) => {
        S
          ? (p.data = p.data.replace(S, y))
          : p.data.indexOf(y) === -1 && (p.data = v ? y + p.data : p.data + y);
      })(Fa[h], s, i, m),
      h
    );
  },
  Kw = (a, s, l) =>
    a.reduce((i, o, f) => {
      let h = s[f];
      if (h && h.call) {
        let m = h(l),
          y = (m && m.props && m.props.className) || (/^go/.test(m) && m);
        h = y
          ? "." + y
          : m && typeof m == "object"
          ? m.props
            ? ""
            : jn(m, "")
          : m === !1
          ? ""
          : m;
      }
      return i + o + (h ?? "");
    }, "");
function Uu(a) {
  let s = this || {},
    l = a.call ? a(s.p) : a;
  return $w(
    l.unshift
      ? l.raw
        ? Kw(l, [].slice.call(arguments, 1), s.p)
        : l.reduce((i, o) => Object.assign(i, o && o.call ? o(s.p) : o), {})
      : l,
    Gw(s.target),
    s.g,
    s.o,
    s.k
  );
}
let T0, Pf, Yf;
Uu.bind({ g: 1 });
let Ja = Uu.bind({ k: 1 });
function Zw(a, s, l, i) {
  (jn.p = s), (T0 = a), (Pf = l), (Yf = i);
}
function Cn(a, s) {
  let l = this || {};
  return function () {
    let i = arguments;
    function o(f, h) {
      let m = Object.assign({}, f),
        y = m.className || o.className;
      (l.p = Object.assign({ theme: Pf && Pf() }, m)),
        (l.o = / *go\d+/.test(y)),
        (m.className = Uu.apply(l, i) + (y ? " " + y : ""));
      let p = a;
      return (
        a[0] && ((p = m.as || a), delete m.as), Yf && p[0] && Yf(m), T0(p, m)
      );
    }
    return o;
  };
}
var Jw = (a) => typeof a == "function",
  xu = (a, s) => (Jw(a) ? a(s) : a),
  Iw = (() => {
    let a = 0;
    return () => (++a).toString();
  })(),
  C0 = (() => {
    let a;
    return () => {
      if (a === void 0 && typeof window < "u") {
        let s = matchMedia("(prefers-reduced-motion: reduce)");
        a = !s || s.matches;
      }
      return a;
    };
  })(),
  Ww = 20,
  O0 = (a, s) => {
    switch (s.type) {
      case 0:
        return { ...a, toasts: [s.toast, ...a.toasts].slice(0, Ww) };
      case 1:
        return {
          ...a,
          toasts: a.toasts.map((f) =>
            f.id === s.toast.id ? { ...f, ...s.toast } : f
          ),
        };
      case 2:
        let { toast: l } = s;
        return O0(a, {
          type: a.toasts.find((f) => f.id === l.id) ? 1 : 0,
          toast: l,
        });
      case 3:
        let { toastId: i } = s;
        return {
          ...a,
          toasts: a.toasts.map((f) =>
            f.id === i || i === void 0
              ? { ...f, dismissed: !0, visible: !1 }
              : f
          ),
        };
      case 4:
        return s.toastId === void 0
          ? { ...a, toasts: [] }
          : { ...a, toasts: a.toasts.filter((f) => f.id !== s.toastId) };
      case 5:
        return { ...a, pausedAt: s.time };
      case 6:
        let o = s.time - (a.pausedAt || 0);
        return {
          ...a,
          pausedAt: void 0,
          toasts: a.toasts.map((f) => ({
            ...f,
            pauseDuration: f.pauseDuration + o,
          })),
        };
    }
  },
  ru = [],
  $n = { toasts: [], pausedAt: void 0 },
  ss = (a) => {
    ($n = O0($n, a)),
      ru.forEach((s) => {
        s($n);
      });
  },
  e2 = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  t2 = (a = {}) => {
    let [s, l] = b.useState($n),
      i = b.useRef($n);
    b.useEffect(
      () => (
        i.current !== $n && l($n),
        ru.push(l),
        () => {
          let f = ru.indexOf(l);
          f > -1 && ru.splice(f, 1);
        }
      ),
      []
    );
    let o = s.toasts.map((f) => {
      var h, m, y;
      return {
        ...a,
        ...a[f.type],
        ...f,
        removeDelay:
          f.removeDelay ||
          ((h = a[f.type]) == null ? void 0 : h.removeDelay) ||
          a?.removeDelay,
        duration:
          f.duration ||
          ((m = a[f.type]) == null ? void 0 : m.duration) ||
          a?.duration ||
          e2[f.type],
        style: {
          ...a.style,
          ...((y = a[f.type]) == null ? void 0 : y.style),
          ...f.style,
        },
      };
    });
    return { ...s, toasts: o };
  },
  a2 = (a, s = "blank", l) => ({
    createdAt: Date.now(),
    visible: !0,
    dismissed: !1,
    type: s,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: a,
    pauseDuration: 0,
    ...l,
    id: l?.id || Iw(),
  }),
  _l = (a) => (s, l) => {
    let i = a2(s, a, l);
    return ss({ type: 2, toast: i }), i.id;
  },
  Dt = (a, s) => _l("blank")(a, s);
Dt.error = _l("error");
Dt.success = _l("success");
Dt.loading = _l("loading");
Dt.custom = _l("custom");
Dt.dismiss = (a) => {
  ss({ type: 3, toastId: a });
};
Dt.remove = (a) => ss({ type: 4, toastId: a });
Dt.promise = (a, s, l) => {
  let i = Dt.loading(s.loading, { ...l, ...l?.loading });
  return (
    typeof a == "function" && (a = a()),
    a
      .then((o) => {
        let f = s.success ? xu(s.success, o) : void 0;
        return (
          f ? Dt.success(f, { id: i, ...l, ...l?.success }) : Dt.dismiss(i), o
        );
      })
      .catch((o) => {
        let f = s.error ? xu(s.error, o) : void 0;
        f ? Dt.error(f, { id: i, ...l, ...l?.error }) : Dt.dismiss(i);
      }),
    a
  );
};
var n2 = (a, s) => {
    ss({ type: 1, toast: { id: a, height: s } });
  },
  s2 = () => {
    ss({ type: 5, time: Date.now() });
  },
  vl = new Map(),
  r2 = 1e3,
  l2 = (a, s = r2) => {
    if (vl.has(a)) return;
    let l = setTimeout(() => {
      vl.delete(a), ss({ type: 4, toastId: a });
    }, s);
    vl.set(a, l);
  },
  i2 = (a) => {
    let { toasts: s, pausedAt: l } = t2(a);
    b.useEffect(() => {
      if (l) return;
      let f = Date.now(),
        h = s.map((m) => {
          if (m.duration === 1 / 0) return;
          let y = (m.duration || 0) + m.pauseDuration - (f - m.createdAt);
          if (y < 0) {
            m.visible && Dt.dismiss(m.id);
            return;
          }
          return setTimeout(() => Dt.dismiss(m.id), y);
        });
      return () => {
        h.forEach((m) => m && clearTimeout(m));
      };
    }, [s, l]);
    let i = b.useCallback(() => {
        l && ss({ type: 6, time: Date.now() });
      }, [l]),
      o = b.useCallback(
        (f, h) => {
          let {
              reverseOrder: m = !1,
              gutter: y = 8,
              defaultPosition: p,
            } = h || {},
            v = s.filter(
              (O) => (O.position || p) === (f.position || p) && O.height
            ),
            S = v.findIndex((O) => O.id === f.id),
            w = v.filter((O, N) => N < S && O.visible).length;
          return v
            .filter((O) => O.visible)
            .slice(...(m ? [w + 1] : [0, w]))
            .reduce((O, N) => O + (N.height || 0) + y, 0);
        },
        [s]
      );
    return (
      b.useEffect(() => {
        s.forEach((f) => {
          if (f.dismissed) l2(f.id, f.removeDelay);
          else {
            let h = vl.get(f.id);
            h && (clearTimeout(h), vl.delete(f.id));
          }
        });
      }, [s]),
      {
        toasts: s,
        handlers: {
          updateHeight: n2,
          startPause: s2,
          endPause: i,
          calculateOffset: o,
        },
      }
    );
  },
  u2 = Ja`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  o2 = Ja`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  c2 = Ja`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  f2 = Cn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(a) => a.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${u2} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${o2} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(a) => a.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${c2} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  d2 = Ja`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  h2 = Cn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(a) => a.secondary || "#e0e0e0"};
  border-right-color: ${(a) => a.primary || "#616161"};
  animation: ${d2} 1s linear infinite;
`,
  m2 = Ja`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  p2 = Ja`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  y2 = Cn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(a) => a.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${m2} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${p2} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(a) => a.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  g2 = Cn("div")`
  position: absolute;
`,
  v2 = Cn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  x2 = Ja`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  b2 = Cn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${x2} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  S2 = ({ toast: a }) => {
    let { icon: s, type: l, iconTheme: i } = a;
    return s !== void 0
      ? typeof s == "string"
        ? b.createElement(b2, null, s)
        : s
      : l === "blank"
      ? null
      : b.createElement(
          v2,
          null,
          b.createElement(h2, { ...i }),
          l !== "loading" &&
            b.createElement(
              g2,
              null,
              l === "error"
                ? b.createElement(f2, { ...i })
                : b.createElement(y2, { ...i })
            )
        );
  },
  w2 = (a) => `
0% {transform: translate3d(0,${a * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  N2 = (a) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${a * -150}%,-1px) scale(.6); opacity:0;}
`,
  j2 = "0%{opacity:0;} 100%{opacity:1;}",
  E2 = "0%{opacity:1;} 100%{opacity:0;}",
  A2 = Cn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  T2 = Cn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  C2 = (a, s) => {
    let l = a.includes("top") ? 1 : -1,
      [i, o] = C0() ? [j2, E2] : [w2(l), N2(l)];
    return {
      animation: s
        ? `${Ja(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${Ja(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  O2 = b.memo(({ toast: a, position: s, style: l, children: i }) => {
    let o = a.height
        ? C2(a.position || s || "top-center", a.visible)
        : { opacity: 0 },
      f = b.createElement(S2, { toast: a }),
      h = b.createElement(T2, { ...a.ariaProps }, xu(a.message, a));
    return b.createElement(
      A2,
      { className: a.className, style: { ...o, ...l, ...a.style } },
      typeof i == "function"
        ? i({ icon: f, message: h })
        : b.createElement(b.Fragment, null, f, h)
    );
  });
Zw(b.createElement);
var R2 = ({
    id: a,
    className: s,
    style: l,
    onHeightUpdate: i,
    children: o,
  }) => {
    let f = b.useCallback(
      (h) => {
        if (h) {
          let m = () => {
            let y = h.getBoundingClientRect().height;
            i(a, y);
          };
          m(),
            new MutationObserver(m).observe(h, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [a, i]
    );
    return b.createElement("div", { ref: f, className: s, style: l }, o);
  },
  _2 = (a, s) => {
    let l = a.includes("top"),
      i = l ? { top: 0 } : { bottom: 0 },
      o = a.includes("center")
        ? { justifyContent: "center" }
        : a.includes("right")
        ? { justifyContent: "flex-end" }
        : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: C0() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${s * (l ? 1 : -1)}px)`,
      ...i,
      ...o,
    };
  },
  D2 = Uu`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  Ji = 16,
  M2 = ({
    reverseOrder: a,
    position: s = "top-center",
    toastOptions: l,
    gutter: i,
    children: o,
    containerStyle: f,
    containerClassName: h,
  }) => {
    let { toasts: m, handlers: y } = i2(l);
    return b.createElement(
      "div",
      {
        id: "_rht_toaster",
        style: {
          position: "fixed",
          zIndex: 9999,
          top: Ji,
          left: Ji,
          right: Ji,
          bottom: Ji,
          pointerEvents: "none",
          ...f,
        },
        className: h,
        onMouseEnter: y.startPause,
        onMouseLeave: y.endPause,
      },
      m.map((p) => {
        let v = p.position || s,
          S = y.calculateOffset(p, {
            reverseOrder: a,
            gutter: i,
            defaultPosition: s,
          }),
          w = _2(v, S);
        return b.createElement(
          R2,
          {
            id: p.id,
            key: p.id,
            onHeightUpdate: y.updateHeight,
            className: p.visible ? D2 : "",
            style: w,
          },
          p.type === "custom"
            ? xu(p.message, p)
            : o
            ? o(p)
            : b.createElement(O2, { toast: p, position: v })
        );
      })
    );
  },
  Te = Dt;
function R0(a, s) {
  return function () {
    return a.apply(s, arguments);
  };
}
const { toString: U2 } = Object.prototype,
  { getPrototypeOf: pd } = Object,
  { iterator: zu, toStringTag: _0 } = Symbol,
  ku = ((a) => (s) => {
    const l = U2.call(s);
    return a[l] || (a[l] = l.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ga = (a) => ((a = a.toLowerCase()), (s) => ku(s) === a),
  Lu = (a) => (s) => typeof s === a,
  { isArray: ir } = Array,
  Al = Lu("undefined");
function z2(a) {
  return (
    a !== null &&
    !Al(a) &&
    a.constructor !== null &&
    !Al(a.constructor) &&
    Ht(a.constructor.isBuffer) &&
    a.constructor.isBuffer(a)
  );
}
const D0 = ga("ArrayBuffer");
function k2(a) {
  let s;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (s = ArrayBuffer.isView(a))
      : (s = a && a.buffer && D0(a.buffer)),
    s
  );
}
const L2 = Lu("string"),
  Ht = Lu("function"),
  M0 = Lu("number"),
  Hu = (a) => a !== null && typeof a == "object",
  H2 = (a) => a === !0 || a === !1,
  lu = (a) => {
    if (ku(a) !== "object") return !1;
    const s = pd(a);
    return (
      (s === null ||
        s === Object.prototype ||
        Object.getPrototypeOf(s) === null) &&
      !(_0 in a) &&
      !(zu in a)
    );
  },
  q2 = ga("Date"),
  B2 = ga("File"),
  V2 = ga("Blob"),
  P2 = ga("FileList"),
  Y2 = (a) => Hu(a) && Ht(a.pipe),
  F2 = (a) => {
    let s;
    return (
      a &&
      ((typeof FormData == "function" && a instanceof FormData) ||
        (Ht(a.append) &&
          ((s = ku(a)) === "formdata" ||
            (s === "object" &&
              Ht(a.toString) &&
              a.toString() === "[object FormData]"))))
    );
  },
  G2 = ga("URLSearchParams"),
  [Q2, X2, $2, K2] = ["ReadableStream", "Request", "Response", "Headers"].map(
    ga
  ),
  Z2 = (a) =>
    a.trim ? a.trim() : a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Dl(a, s, { allOwnKeys: l = !1 } = {}) {
  if (a === null || typeof a > "u") return;
  let i, o;
  if ((typeof a != "object" && (a = [a]), ir(a)))
    for (i = 0, o = a.length; i < o; i++) s.call(null, a[i], i, a);
  else {
    const f = l ? Object.getOwnPropertyNames(a) : Object.keys(a),
      h = f.length;
    let m;
    for (i = 0; i < h; i++) (m = f[i]), s.call(null, a[m], m, a);
  }
}
function U0(a, s) {
  s = s.toLowerCase();
  const l = Object.keys(a);
  let i = l.length,
    o;
  for (; i-- > 0; ) if (((o = l[i]), s === o.toLowerCase())) return o;
  return null;
}
const Kn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  z0 = (a) => !Al(a) && a !== Kn;
function Ff() {
  const { caseless: a } = (z0(this) && this) || {},
    s = {},
    l = (i, o) => {
      const f = (a && U0(s, o)) || o;
      lu(s[f]) && lu(i)
        ? (s[f] = Ff(s[f], i))
        : lu(i)
        ? (s[f] = Ff({}, i))
        : ir(i)
        ? (s[f] = i.slice())
        : (s[f] = i);
    };
  for (let i = 0, o = arguments.length; i < o; i++)
    arguments[i] && Dl(arguments[i], l);
  return s;
}
const J2 = (a, s, l, { allOwnKeys: i } = {}) => (
    Dl(
      s,
      (o, f) => {
        l && Ht(o) ? (a[f] = R0(o, l)) : (a[f] = o);
      },
      { allOwnKeys: i }
    ),
    a
  ),
  I2 = (a) => (a.charCodeAt(0) === 65279 && (a = a.slice(1)), a),
  W2 = (a, s, l, i) => {
    (a.prototype = Object.create(s.prototype, i)),
      (a.prototype.constructor = a),
      Object.defineProperty(a, "super", { value: s.prototype }),
      l && Object.assign(a.prototype, l);
  },
  eN = (a, s, l, i) => {
    let o, f, h;
    const m = {};
    if (((s = s || {}), a == null)) return s;
    do {
      for (o = Object.getOwnPropertyNames(a), f = o.length; f-- > 0; )
        (h = o[f]), (!i || i(h, a, s)) && !m[h] && ((s[h] = a[h]), (m[h] = !0));
      a = l !== !1 && pd(a);
    } while (a && (!l || l(a, s)) && a !== Object.prototype);
    return s;
  },
  tN = (a, s, l) => {
    (a = String(a)),
      (l === void 0 || l > a.length) && (l = a.length),
      (l -= s.length);
    const i = a.indexOf(s, l);
    return i !== -1 && i === l;
  },
  aN = (a) => {
    if (!a) return null;
    if (ir(a)) return a;
    let s = a.length;
    if (!M0(s)) return null;
    const l = new Array(s);
    for (; s-- > 0; ) l[s] = a[s];
    return l;
  },
  nN = (
    (a) => (s) =>
      a && s instanceof a
  )(typeof Uint8Array < "u" && pd(Uint8Array)),
  sN = (a, s) => {
    const i = (a && a[zu]).call(a);
    let o;
    for (; (o = i.next()) && !o.done; ) {
      const f = o.value;
      s.call(a, f[0], f[1]);
    }
  },
  rN = (a, s) => {
    let l;
    const i = [];
    for (; (l = a.exec(s)) !== null; ) i.push(l);
    return i;
  },
  lN = ga("HTMLFormElement"),
  iN = (a) =>
    a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (l, i, o) {
      return i.toUpperCase() + o;
    }),
  Wy = (
    ({ hasOwnProperty: a }) =>
    (s, l) =>
      a.call(s, l)
  )(Object.prototype),
  uN = ga("RegExp"),
  k0 = (a, s) => {
    const l = Object.getOwnPropertyDescriptors(a),
      i = {};
    Dl(l, (o, f) => {
      let h;
      (h = s(o, f, a)) !== !1 && (i[f] = h || o);
    }),
      Object.defineProperties(a, i);
  },
  oN = (a) => {
    k0(a, (s, l) => {
      if (Ht(a) && ["arguments", "caller", "callee"].indexOf(l) !== -1)
        return !1;
      const i = a[l];
      if (Ht(i)) {
        if (((s.enumerable = !1), "writable" in s)) {
          s.writable = !1;
          return;
        }
        s.set ||
          (s.set = () => {
            throw Error("Can not rewrite read-only method '" + l + "'");
          });
      }
    });
  },
  cN = (a, s) => {
    const l = {},
      i = (o) => {
        o.forEach((f) => {
          l[f] = !0;
        });
      };
    return ir(a) ? i(a) : i(String(a).split(s)), l;
  },
  fN = () => {},
  dN = (a, s) => (a != null && Number.isFinite((a = +a)) ? a : s);
function hN(a) {
  return !!(a && Ht(a.append) && a[_0] === "FormData" && a[zu]);
}
const mN = (a) => {
    const s = new Array(10),
      l = (i, o) => {
        if (Hu(i)) {
          if (s.indexOf(i) >= 0) return;
          if (!("toJSON" in i)) {
            s[o] = i;
            const f = ir(i) ? [] : {};
            return (
              Dl(i, (h, m) => {
                const y = l(h, o + 1);
                !Al(y) && (f[m] = y);
              }),
              (s[o] = void 0),
              f
            );
          }
        }
        return i;
      };
    return l(a, 0);
  },
  pN = ga("AsyncFunction"),
  yN = (a) => a && (Hu(a) || Ht(a)) && Ht(a.then) && Ht(a.catch),
  L0 = ((a, s) =>
    a
      ? setImmediate
      : s
      ? ((l, i) => (
          Kn.addEventListener(
            "message",
            ({ source: o, data: f }) => {
              o === Kn && f === l && i.length && i.shift()();
            },
            !1
          ),
          (o) => {
            i.push(o), Kn.postMessage(l, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (l) => setTimeout(l))(
    typeof setImmediate == "function",
    Ht(Kn.postMessage)
  ),
  gN =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Kn)
      : (typeof process < "u" && process.nextTick) || L0,
  vN = (a) => a != null && Ht(a[zu]),
  F = {
    isArray: ir,
    isArrayBuffer: D0,
    isBuffer: z2,
    isFormData: F2,
    isArrayBufferView: k2,
    isString: L2,
    isNumber: M0,
    isBoolean: H2,
    isObject: Hu,
    isPlainObject: lu,
    isReadableStream: Q2,
    isRequest: X2,
    isResponse: $2,
    isHeaders: K2,
    isUndefined: Al,
    isDate: q2,
    isFile: B2,
    isBlob: V2,
    isRegExp: uN,
    isFunction: Ht,
    isStream: Y2,
    isURLSearchParams: G2,
    isTypedArray: nN,
    isFileList: P2,
    forEach: Dl,
    merge: Ff,
    extend: J2,
    trim: Z2,
    stripBOM: I2,
    inherits: W2,
    toFlatObject: eN,
    kindOf: ku,
    kindOfTest: ga,
    endsWith: tN,
    toArray: aN,
    forEachEntry: sN,
    matchAll: rN,
    isHTMLForm: lN,
    hasOwnProperty: Wy,
    hasOwnProp: Wy,
    reduceDescriptors: k0,
    freezeMethods: oN,
    toObjectSet: cN,
    toCamelCase: iN,
    noop: fN,
    toFiniteNumber: dN,
    findKey: U0,
    global: Kn,
    isContextDefined: z0,
    isSpecCompliantForm: hN,
    toJSONObject: mN,
    isAsyncFn: pN,
    isThenable: yN,
    setImmediate: L0,
    asap: gN,
    isIterable: vN,
  };
function we(a, s, l, i, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = a),
    (this.name = "AxiosError"),
    s && (this.code = s),
    l && (this.config = l),
    i && (this.request = i),
    o && ((this.response = o), (this.status = o.status ? o.status : null));
}
F.inherits(we, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: F.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const H0 = we.prototype,
  q0 = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((a) => {
  q0[a] = { value: a };
});
Object.defineProperties(we, q0);
Object.defineProperty(H0, "isAxiosError", { value: !0 });
we.from = (a, s, l, i, o, f) => {
  const h = Object.create(H0);
  return (
    F.toFlatObject(
      a,
      h,
      function (y) {
        return y !== Error.prototype;
      },
      (m) => m !== "isAxiosError"
    ),
    we.call(h, a.message, s, l, i, o),
    (h.cause = a),
    (h.name = a.name),
    f && Object.assign(h, f),
    h
  );
};
const xN = null;
function Gf(a) {
  return F.isPlainObject(a) || F.isArray(a);
}
function B0(a) {
  return F.endsWith(a, "[]") ? a.slice(0, -2) : a;
}
function eg(a, s, l) {
  return a
    ? a
        .concat(s)
        .map(function (o, f) {
          return (o = B0(o)), !l && f ? "[" + o + "]" : o;
        })
        .join(l ? "." : "")
    : s;
}
function bN(a) {
  return F.isArray(a) && !a.some(Gf);
}
const SN = F.toFlatObject(F, {}, null, function (s) {
  return /^is[A-Z]/.test(s);
});
function qu(a, s, l) {
  if (!F.isObject(a)) throw new TypeError("target must be an object");
  (s = s || new FormData()),
    (l = F.toFlatObject(
      l,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (R, C) {
        return !F.isUndefined(C[R]);
      }
    ));
  const i = l.metaTokens,
    o = l.visitor || v,
    f = l.dots,
    h = l.indexes,
    y = (l.Blob || (typeof Blob < "u" && Blob)) && F.isSpecCompliantForm(s);
  if (!F.isFunction(o)) throw new TypeError("visitor must be a function");
  function p(N) {
    if (N === null) return "";
    if (F.isDate(N)) return N.toISOString();
    if (F.isBoolean(N)) return N.toString();
    if (!y && F.isBlob(N))
      throw new we("Blob is not supported. Use a Buffer instead.");
    return F.isArrayBuffer(N) || F.isTypedArray(N)
      ? y && typeof Blob == "function"
        ? new Blob([N])
        : Buffer.from(N)
      : N;
  }
  function v(N, R, C) {
    let U = N;
    if (N && !C && typeof N == "object") {
      if (F.endsWith(R, "{}"))
        (R = i ? R : R.slice(0, -2)), (N = JSON.stringify(N));
      else if (
        (F.isArray(N) && bN(N)) ||
        ((F.isFileList(N) || F.endsWith(R, "[]")) && (U = F.toArray(N)))
      )
        return (
          (R = B0(R)),
          U.forEach(function (V, H) {
            !(F.isUndefined(V) || V === null) &&
              s.append(
                h === !0 ? eg([R], H, f) : h === null ? R : R + "[]",
                p(V)
              );
          }),
          !1
        );
    }
    return Gf(N) ? !0 : (s.append(eg(C, R, f), p(N)), !1);
  }
  const S = [],
    w = Object.assign(SN, {
      defaultVisitor: v,
      convertValue: p,
      isVisitable: Gf,
    });
  function O(N, R) {
    if (!F.isUndefined(N)) {
      if (S.indexOf(N) !== -1)
        throw Error("Circular reference detected in " + R.join("."));
      S.push(N),
        F.forEach(N, function (U, M) {
          (!(F.isUndefined(U) || U === null) &&
            o.call(s, U, F.isString(M) ? M.trim() : M, R, w)) === !0 &&
            O(U, R ? R.concat(M) : [M]);
        }),
        S.pop();
    }
  }
  if (!F.isObject(a)) throw new TypeError("data must be an object");
  return O(a), s;
}
function tg(a) {
  const s = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g, function (i) {
    return s[i];
  });
}
function yd(a, s) {
  (this._pairs = []), a && qu(a, this, s);
}
const V0 = yd.prototype;
V0.append = function (s, l) {
  this._pairs.push([s, l]);
};
V0.toString = function (s) {
  const l = s
    ? function (i) {
        return s.call(this, i, tg);
      }
    : tg;
  return this._pairs
    .map(function (o) {
      return l(o[0]) + "=" + l(o[1]);
    }, "")
    .join("&");
};
function wN(a) {
  return encodeURIComponent(a)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function P0(a, s, l) {
  if (!s) return a;
  const i = (l && l.encode) || wN;
  F.isFunction(l) && (l = { serialize: l });
  const o = l && l.serialize;
  let f;
  if (
    (o
      ? (f = o(s, l))
      : (f = F.isURLSearchParams(s) ? s.toString() : new yd(s, l).toString(i)),
    f)
  ) {
    const h = a.indexOf("#");
    h !== -1 && (a = a.slice(0, h)),
      (a += (a.indexOf("?") === -1 ? "?" : "&") + f);
  }
  return a;
}
class ag {
  constructor() {
    this.handlers = [];
  }
  use(s, l, i) {
    return (
      this.handlers.push({
        fulfilled: s,
        rejected: l,
        synchronous: i ? i.synchronous : !1,
        runWhen: i ? i.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(s) {
    this.handlers[s] && (this.handlers[s] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(s) {
    F.forEach(this.handlers, function (i) {
      i !== null && s(i);
    });
  }
}
const Y0 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  NN = typeof URLSearchParams < "u" ? URLSearchParams : yd,
  jN = typeof FormData < "u" ? FormData : null,
  EN = typeof Blob < "u" ? Blob : null,
  AN = {
    isBrowser: !0,
    classes: { URLSearchParams: NN, FormData: jN, Blob: EN },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  gd = typeof window < "u" && typeof document < "u",
  Qf = (typeof navigator == "object" && navigator) || void 0,
  TN =
    gd &&
    (!Qf || ["ReactNative", "NativeScript", "NS"].indexOf(Qf.product) < 0),
  CN =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  ON = (gd && window.location.href) || "http://localhost",
  RN = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: gd,
        hasStandardBrowserEnv: TN,
        hasStandardBrowserWebWorkerEnv: CN,
        navigator: Qf,
        origin: ON,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Tt = { ...RN, ...AN };
function _N(a, s) {
  return qu(
    a,
    new Tt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (l, i, o, f) {
          return Tt.isNode && F.isBuffer(l)
            ? (this.append(i, l.toString("base64")), !1)
            : f.defaultVisitor.apply(this, arguments);
        },
      },
      s
    )
  );
}
function DN(a) {
  return F.matchAll(/\w+|\[(\w*)]/g, a).map((s) =>
    s[0] === "[]" ? "" : s[1] || s[0]
  );
}
function MN(a) {
  const s = {},
    l = Object.keys(a);
  let i;
  const o = l.length;
  let f;
  for (i = 0; i < o; i++) (f = l[i]), (s[f] = a[f]);
  return s;
}
function F0(a) {
  function s(l, i, o, f) {
    let h = l[f++];
    if (h === "__proto__") return !0;
    const m = Number.isFinite(+h),
      y = f >= l.length;
    return (
      (h = !h && F.isArray(o) ? o.length : h),
      y
        ? (F.hasOwnProp(o, h) ? (o[h] = [o[h], i]) : (o[h] = i), !m)
        : ((!o[h] || !F.isObject(o[h])) && (o[h] = []),
          s(l, i, o[h], f) && F.isArray(o[h]) && (o[h] = MN(o[h])),
          !m)
    );
  }
  if (F.isFormData(a) && F.isFunction(a.entries)) {
    const l = {};
    return (
      F.forEachEntry(a, (i, o) => {
        s(DN(i), o, l, 0);
      }),
      l
    );
  }
  return null;
}
function UN(a, s, l) {
  if (F.isString(a))
    try {
      return (s || JSON.parse)(a), F.trim(a);
    } catch (i) {
      if (i.name !== "SyntaxError") throw i;
    }
  return (l || JSON.stringify)(a);
}
const Ml = {
  transitional: Y0,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (s, l) {
      const i = l.getContentType() || "",
        o = i.indexOf("application/json") > -1,
        f = F.isObject(s);
      if ((f && F.isHTMLForm(s) && (s = new FormData(s)), F.isFormData(s)))
        return o ? JSON.stringify(F0(s)) : s;
      if (
        F.isArrayBuffer(s) ||
        F.isBuffer(s) ||
        F.isStream(s) ||
        F.isFile(s) ||
        F.isBlob(s) ||
        F.isReadableStream(s)
      )
        return s;
      if (F.isArrayBufferView(s)) return s.buffer;
      if (F.isURLSearchParams(s))
        return (
          l.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          s.toString()
        );
      let m;
      if (f) {
        if (i.indexOf("application/x-www-form-urlencoded") > -1)
          return _N(s, this.formSerializer).toString();
        if ((m = F.isFileList(s)) || i.indexOf("multipart/form-data") > -1) {
          const y = this.env && this.env.FormData;
          return qu(
            m ? { "files[]": s } : s,
            y && new y(),
            this.formSerializer
          );
        }
      }
      return f || o ? (l.setContentType("application/json", !1), UN(s)) : s;
    },
  ],
  transformResponse: [
    function (s) {
      const l = this.transitional || Ml.transitional,
        i = l && l.forcedJSONParsing,
        o = this.responseType === "json";
      if (F.isResponse(s) || F.isReadableStream(s)) return s;
      if (s && F.isString(s) && ((i && !this.responseType) || o)) {
        const h = !(l && l.silentJSONParsing) && o;
        try {
          return JSON.parse(s);
        } catch (m) {
          if (h)
            throw m.name === "SyntaxError"
              ? we.from(m, we.ERR_BAD_RESPONSE, this, null, this.response)
              : m;
        }
      }
      return s;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Tt.classes.FormData, Blob: Tt.classes.Blob },
  validateStatus: function (s) {
    return s >= 200 && s < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
F.forEach(["delete", "get", "head", "post", "put", "patch"], (a) => {
  Ml.headers[a] = {};
});
const zN = F.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  kN = (a) => {
    const s = {};
    let l, i, o;
    return (
      a &&
        a
          .split(
            `
`
          )
          .forEach(function (h) {
            (o = h.indexOf(":")),
              (l = h.substring(0, o).trim().toLowerCase()),
              (i = h.substring(o + 1).trim()),
              !(!l || (s[l] && zN[l])) &&
                (l === "set-cookie"
                  ? s[l]
                    ? s[l].push(i)
                    : (s[l] = [i])
                  : (s[l] = s[l] ? s[l] + ", " + i : i));
          }),
      s
    );
  },
  ng = Symbol("internals");
function hl(a) {
  return a && String(a).trim().toLowerCase();
}
function iu(a) {
  return a === !1 || a == null ? a : F.isArray(a) ? a.map(iu) : String(a);
}
function LN(a) {
  const s = Object.create(null),
    l = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let i;
  for (; (i = l.exec(a)); ) s[i[1]] = i[2];
  return s;
}
const HN = (a) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());
function jf(a, s, l, i, o) {
  if (F.isFunction(i)) return i.call(this, s, l);
  if ((o && (s = l), !!F.isString(s))) {
    if (F.isString(i)) return s.indexOf(i) !== -1;
    if (F.isRegExp(i)) return i.test(s);
  }
}
function qN(a) {
  return a
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (s, l, i) => l.toUpperCase() + i);
}
function BN(a, s) {
  const l = F.toCamelCase(" " + s);
  ["get", "set", "has"].forEach((i) => {
    Object.defineProperty(a, i + l, {
      value: function (o, f, h) {
        return this[i].call(this, s, o, f, h);
      },
      configurable: !0,
    });
  });
}
let qt = class {
  constructor(s) {
    s && this.set(s);
  }
  set(s, l, i) {
    const o = this;
    function f(m, y, p) {
      const v = hl(y);
      if (!v) throw new Error("header name must be a non-empty string");
      const S = F.findKey(o, v);
      (!S || o[S] === void 0 || p === !0 || (p === void 0 && o[S] !== !1)) &&
        (o[S || y] = iu(m));
    }
    const h = (m, y) => F.forEach(m, (p, v) => f(p, v, y));
    if (F.isPlainObject(s) || s instanceof this.constructor) h(s, l);
    else if (F.isString(s) && (s = s.trim()) && !HN(s)) h(kN(s), l);
    else if (F.isObject(s) && F.isIterable(s)) {
      let m = {},
        y,
        p;
      for (const v of s) {
        if (!F.isArray(v))
          throw TypeError("Object iterator must return a key-value pair");
        m[(p = v[0])] = (y = m[p])
          ? F.isArray(y)
            ? [...y, v[1]]
            : [y, v[1]]
          : v[1];
      }
      h(m, l);
    } else s != null && f(l, s, i);
    return this;
  }
  get(s, l) {
    if (((s = hl(s)), s)) {
      const i = F.findKey(this, s);
      if (i) {
        const o = this[i];
        if (!l) return o;
        if (l === !0) return LN(o);
        if (F.isFunction(l)) return l.call(this, o, i);
        if (F.isRegExp(l)) return l.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(s, l) {
    if (((s = hl(s)), s)) {
      const i = F.findKey(this, s);
      return !!(i && this[i] !== void 0 && (!l || jf(this, this[i], i, l)));
    }
    return !1;
  }
  delete(s, l) {
    const i = this;
    let o = !1;
    function f(h) {
      if (((h = hl(h)), h)) {
        const m = F.findKey(i, h);
        m && (!l || jf(i, i[m], m, l)) && (delete i[m], (o = !0));
      }
    }
    return F.isArray(s) ? s.forEach(f) : f(s), o;
  }
  clear(s) {
    const l = Object.keys(this);
    let i = l.length,
      o = !1;
    for (; i--; ) {
      const f = l[i];
      (!s || jf(this, this[f], f, s, !0)) && (delete this[f], (o = !0));
    }
    return o;
  }
  normalize(s) {
    const l = this,
      i = {};
    return (
      F.forEach(this, (o, f) => {
        const h = F.findKey(i, f);
        if (h) {
          (l[h] = iu(o)), delete l[f];
          return;
        }
        const m = s ? qN(f) : String(f).trim();
        m !== f && delete l[f], (l[m] = iu(o)), (i[m] = !0);
      }),
      this
    );
  }
  concat(...s) {
    return this.constructor.concat(this, ...s);
  }
  toJSON(s) {
    const l = Object.create(null);
    return (
      F.forEach(this, (i, o) => {
        i != null && i !== !1 && (l[o] = s && F.isArray(i) ? i.join(", ") : i);
      }),
      l
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([s, l]) => s + ": " + l).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(s) {
    return s instanceof this ? s : new this(s);
  }
  static concat(s, ...l) {
    const i = new this(s);
    return l.forEach((o) => i.set(o)), i;
  }
  static accessor(s) {
    const i = (this[ng] = this[ng] = { accessors: {} }).accessors,
      o = this.prototype;
    function f(h) {
      const m = hl(h);
      i[m] || (BN(o, h), (i[m] = !0));
    }
    return F.isArray(s) ? s.forEach(f) : f(s), this;
  }
};
qt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
F.reduceDescriptors(qt.prototype, ({ value: a }, s) => {
  let l = s[0].toUpperCase() + s.slice(1);
  return {
    get: () => a,
    set(i) {
      this[l] = i;
    },
  };
});
F.freezeMethods(qt);
function Ef(a, s) {
  const l = this || Ml,
    i = s || l,
    o = qt.from(i.headers);
  let f = i.data;
  return (
    F.forEach(a, function (m) {
      f = m.call(l, f, o.normalize(), s ? s.status : void 0);
    }),
    o.normalize(),
    f
  );
}
function G0(a) {
  return !!(a && a.__CANCEL__);
}
function ur(a, s, l) {
  we.call(this, a ?? "canceled", we.ERR_CANCELED, s, l),
    (this.name = "CanceledError");
}
F.inherits(ur, we, { __CANCEL__: !0 });
function Q0(a, s, l) {
  const i = l.config.validateStatus;
  !l.status || !i || i(l.status)
    ? a(l)
    : s(
        new we(
          "Request failed with status code " + l.status,
          [we.ERR_BAD_REQUEST, we.ERR_BAD_RESPONSE][
            Math.floor(l.status / 100) - 4
          ],
          l.config,
          l.request,
          l
        )
      );
}
function VN(a) {
  const s = /^([-+\w]{1,25})(:?\/\/|:)/.exec(a);
  return (s && s[1]) || "";
}
function PN(a, s) {
  a = a || 10;
  const l = new Array(a),
    i = new Array(a);
  let o = 0,
    f = 0,
    h;
  return (
    (s = s !== void 0 ? s : 1e3),
    function (y) {
      const p = Date.now(),
        v = i[f];
      h || (h = p), (l[o] = y), (i[o] = p);
      let S = f,
        w = 0;
      for (; S !== o; ) (w += l[S++]), (S = S % a);
      if (((o = (o + 1) % a), o === f && (f = (f + 1) % a), p - h < s)) return;
      const O = v && p - v;
      return O ? Math.round((w * 1e3) / O) : void 0;
    }
  );
}
function YN(a, s) {
  let l = 0,
    i = 1e3 / s,
    o,
    f;
  const h = (p, v = Date.now()) => {
    (l = v), (o = null), f && (clearTimeout(f), (f = null)), a.apply(null, p);
  };
  return [
    (...p) => {
      const v = Date.now(),
        S = v - l;
      S >= i
        ? h(p, v)
        : ((o = p),
          f ||
            (f = setTimeout(() => {
              (f = null), h(o);
            }, i - S)));
    },
    () => o && h(o),
  ];
}
const bu = (a, s, l = 3) => {
    let i = 0;
    const o = PN(50, 250);
    return YN((f) => {
      const h = f.loaded,
        m = f.lengthComputable ? f.total : void 0,
        y = h - i,
        p = o(y),
        v = h <= m;
      i = h;
      const S = {
        loaded: h,
        total: m,
        progress: m ? h / m : void 0,
        bytes: y,
        rate: p || void 0,
        estimated: p && m && v ? (m - h) / p : void 0,
        event: f,
        lengthComputable: m != null,
        [s ? "download" : "upload"]: !0,
      };
      a(S);
    }, l);
  },
  sg = (a, s) => {
    const l = a != null;
    return [(i) => s[0]({ lengthComputable: l, total: a, loaded: i }), s[1]];
  },
  rg =
    (a) =>
    (...s) =>
      F.asap(() => a(...s)),
  FN = Tt.hasStandardBrowserEnv
    ? ((a, s) => (l) => (
        (l = new URL(l, Tt.origin)),
        a.protocol === l.protocol &&
          a.host === l.host &&
          (s || a.port === l.port)
      ))(
        new URL(Tt.origin),
        Tt.navigator && /(msie|trident)/i.test(Tt.navigator.userAgent)
      )
    : () => !0,
  GN = Tt.hasStandardBrowserEnv
    ? {
        write(a, s, l, i, o, f) {
          const h = [a + "=" + encodeURIComponent(s)];
          F.isNumber(l) && h.push("expires=" + new Date(l).toGMTString()),
            F.isString(i) && h.push("path=" + i),
            F.isString(o) && h.push("domain=" + o),
            f === !0 && h.push("secure"),
            (document.cookie = h.join("; "));
        },
        read(a) {
          const s = document.cookie.match(
            new RegExp("(^|;\\s*)(" + a + ")=([^;]*)")
          );
          return s ? decodeURIComponent(s[3]) : null;
        },
        remove(a) {
          this.write(a, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function QN(a) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(a);
}
function XN(a, s) {
  return s ? a.replace(/\/?\/$/, "") + "/" + s.replace(/^\/+/, "") : a;
}
function X0(a, s, l) {
  let i = !QN(s);
  return a && (i || l == !1) ? XN(a, s) : s;
}
const lg = (a) => (a instanceof qt ? { ...a } : a);
function as(a, s) {
  s = s || {};
  const l = {};
  function i(p, v, S, w) {
    return F.isPlainObject(p) && F.isPlainObject(v)
      ? F.merge.call({ caseless: w }, p, v)
      : F.isPlainObject(v)
      ? F.merge({}, v)
      : F.isArray(v)
      ? v.slice()
      : v;
  }
  function o(p, v, S, w) {
    if (F.isUndefined(v)) {
      if (!F.isUndefined(p)) return i(void 0, p, S, w);
    } else return i(p, v, S, w);
  }
  function f(p, v) {
    if (!F.isUndefined(v)) return i(void 0, v);
  }
  function h(p, v) {
    if (F.isUndefined(v)) {
      if (!F.isUndefined(p)) return i(void 0, p);
    } else return i(void 0, v);
  }
  function m(p, v, S) {
    if (S in s) return i(p, v);
    if (S in a) return i(void 0, p);
  }
  const y = {
    url: f,
    method: f,
    data: f,
    baseURL: h,
    transformRequest: h,
    transformResponse: h,
    paramsSerializer: h,
    timeout: h,
    timeoutMessage: h,
    withCredentials: h,
    withXSRFToken: h,
    adapter: h,
    responseType: h,
    xsrfCookieName: h,
    xsrfHeaderName: h,
    onUploadProgress: h,
    onDownloadProgress: h,
    decompress: h,
    maxContentLength: h,
    maxBodyLength: h,
    beforeRedirect: h,
    transport: h,
    httpAgent: h,
    httpsAgent: h,
    cancelToken: h,
    socketPath: h,
    responseEncoding: h,
    validateStatus: m,
    headers: (p, v, S) => o(lg(p), lg(v), S, !0),
  };
  return (
    F.forEach(Object.keys(Object.assign({}, a, s)), function (v) {
      const S = y[v] || o,
        w = S(a[v], s[v], v);
      (F.isUndefined(w) && S !== m) || (l[v] = w);
    }),
    l
  );
}
const $0 = (a) => {
    const s = as({}, a);
    let {
      data: l,
      withXSRFToken: i,
      xsrfHeaderName: o,
      xsrfCookieName: f,
      headers: h,
      auth: m,
    } = s;
    (s.headers = h = qt.from(h)),
      (s.url = P0(
        X0(s.baseURL, s.url, s.allowAbsoluteUrls),
        a.params,
        a.paramsSerializer
      )),
      m &&
        h.set(
          "Authorization",
          "Basic " +
            btoa(
              (m.username || "") +
                ":" +
                (m.password ? unescape(encodeURIComponent(m.password)) : "")
            )
        );
    let y;
    if (F.isFormData(l)) {
      if (Tt.hasStandardBrowserEnv || Tt.hasStandardBrowserWebWorkerEnv)
        h.setContentType(void 0);
      else if ((y = h.getContentType()) !== !1) {
        const [p, ...v] = y
          ? y
              .split(";")
              .map((S) => S.trim())
              .filter(Boolean)
          : [];
        h.setContentType([p || "multipart/form-data", ...v].join("; "));
      }
    }
    if (
      Tt.hasStandardBrowserEnv &&
      (i && F.isFunction(i) && (i = i(s)), i || (i !== !1 && FN(s.url)))
    ) {
      const p = o && f && GN.read(f);
      p && h.set(o, p);
    }
    return s;
  },
  $N = typeof XMLHttpRequest < "u",
  KN =
    $N &&
    function (a) {
      return new Promise(function (l, i) {
        const o = $0(a);
        let f = o.data;
        const h = qt.from(o.headers).normalize();
        let { responseType: m, onUploadProgress: y, onDownloadProgress: p } = o,
          v,
          S,
          w,
          O,
          N;
        function R() {
          O && O(),
            N && N(),
            o.cancelToken && o.cancelToken.unsubscribe(v),
            o.signal && o.signal.removeEventListener("abort", v);
        }
        let C = new XMLHttpRequest();
        C.open(o.method.toUpperCase(), o.url, !0), (C.timeout = o.timeout);
        function U() {
          if (!C) return;
          const V = qt.from(
              "getAllResponseHeaders" in C && C.getAllResponseHeaders()
            ),
            Y = {
              data:
                !m || m === "text" || m === "json"
                  ? C.responseText
                  : C.response,
              status: C.status,
              statusText: C.statusText,
              headers: V,
              config: a,
              request: C,
            };
          Q0(
            function (K) {
              l(K), R();
            },
            function (K) {
              i(K), R();
            },
            Y
          ),
            (C = null);
        }
        "onloadend" in C
          ? (C.onloadend = U)
          : (C.onreadystatechange = function () {
              !C ||
                C.readyState !== 4 ||
                (C.status === 0 &&
                  !(C.responseURL && C.responseURL.indexOf("file:") === 0)) ||
                setTimeout(U);
            }),
          (C.onabort = function () {
            C &&
              (i(new we("Request aborted", we.ECONNABORTED, a, C)), (C = null));
          }),
          (C.onerror = function () {
            i(new we("Network Error", we.ERR_NETWORK, a, C)), (C = null);
          }),
          (C.ontimeout = function () {
            let H = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const Y = o.transitional || Y0;
            o.timeoutErrorMessage && (H = o.timeoutErrorMessage),
              i(
                new we(
                  H,
                  Y.clarifyTimeoutError ? we.ETIMEDOUT : we.ECONNABORTED,
                  a,
                  C
                )
              ),
              (C = null);
          }),
          f === void 0 && h.setContentType(null),
          "setRequestHeader" in C &&
            F.forEach(h.toJSON(), function (H, Y) {
              C.setRequestHeader(Y, H);
            }),
          F.isUndefined(o.withCredentials) ||
            (C.withCredentials = !!o.withCredentials),
          m && m !== "json" && (C.responseType = o.responseType),
          p && (([w, N] = bu(p, !0)), C.addEventListener("progress", w)),
          y &&
            C.upload &&
            (([S, O] = bu(y)),
            C.upload.addEventListener("progress", S),
            C.upload.addEventListener("loadend", O)),
          (o.cancelToken || o.signal) &&
            ((v = (V) => {
              C &&
                (i(!V || V.type ? new ur(null, a, C) : V),
                C.abort(),
                (C = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(v),
            o.signal &&
              (o.signal.aborted ? v() : o.signal.addEventListener("abort", v)));
        const M = VN(o.url);
        if (M && Tt.protocols.indexOf(M) === -1) {
          i(new we("Unsupported protocol " + M + ":", we.ERR_BAD_REQUEST, a));
          return;
        }
        C.send(f || null);
      });
    },
  ZN = (a, s) => {
    const { length: l } = (a = a ? a.filter(Boolean) : []);
    if (s || l) {
      let i = new AbortController(),
        o;
      const f = function (p) {
        if (!o) {
          (o = !0), m();
          const v = p instanceof Error ? p : this.reason;
          i.abort(
            v instanceof we ? v : new ur(v instanceof Error ? v.message : v)
          );
        }
      };
      let h =
        s &&
        setTimeout(() => {
          (h = null), f(new we(`timeout ${s} of ms exceeded`, we.ETIMEDOUT));
        }, s);
      const m = () => {
        a &&
          (h && clearTimeout(h),
          (h = null),
          a.forEach((p) => {
            p.unsubscribe
              ? p.unsubscribe(f)
              : p.removeEventListener("abort", f);
          }),
          (a = null));
      };
      a.forEach((p) => p.addEventListener("abort", f));
      const { signal: y } = i;
      return (y.unsubscribe = () => F.asap(m)), y;
    }
  },
  JN = function* (a, s) {
    let l = a.byteLength;
    if (l < s) {
      yield a;
      return;
    }
    let i = 0,
      o;
    for (; i < l; ) (o = i + s), yield a.slice(i, o), (i = o);
  },
  IN = async function* (a, s) {
    for await (const l of WN(a)) yield* JN(l, s);
  },
  WN = async function* (a) {
    if (a[Symbol.asyncIterator]) {
      yield* a;
      return;
    }
    const s = a.getReader();
    try {
      for (;;) {
        const { done: l, value: i } = await s.read();
        if (l) break;
        yield i;
      }
    } finally {
      await s.cancel();
    }
  },
  ig = (a, s, l, i) => {
    const o = IN(a, s);
    let f = 0,
      h,
      m = (y) => {
        h || ((h = !0), i && i(y));
      };
    return new ReadableStream(
      {
        async pull(y) {
          try {
            const { done: p, value: v } = await o.next();
            if (p) {
              m(), y.close();
              return;
            }
            let S = v.byteLength;
            if (l) {
              let w = (f += S);
              l(w);
            }
            y.enqueue(new Uint8Array(v));
          } catch (p) {
            throw (m(p), p);
          }
        },
        cancel(y) {
          return m(y), o.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Bu =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  K0 = Bu && typeof ReadableStream == "function",
  ej =
    Bu &&
    (typeof TextEncoder == "function"
      ? (
          (a) => (s) =>
            a.encode(s)
        )(new TextEncoder())
      : async (a) => new Uint8Array(await new Response(a).arrayBuffer())),
  Z0 = (a, ...s) => {
    try {
      return !!a(...s);
    } catch {
      return !1;
    }
  },
  tj =
    K0 &&
    Z0(() => {
      let a = !1;
      const s = new Request(Tt.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (a = !0), "half";
        },
      }).headers.has("Content-Type");
      return a && !s;
    }),
  ug = 64 * 1024,
  Xf = K0 && Z0(() => F.isReadableStream(new Response("").body)),
  Su = { stream: Xf && ((a) => a.body) };
Bu &&
  ((a) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((s) => {
      !Su[s] &&
        (Su[s] = F.isFunction(a[s])
          ? (l) => l[s]()
          : (l, i) => {
              throw new we(
                `Response type '${s}' is not supported`,
                we.ERR_NOT_SUPPORT,
                i
              );
            });
    });
  })(new Response());
const aj = async (a) => {
    if (a == null) return 0;
    if (F.isBlob(a)) return a.size;
    if (F.isSpecCompliantForm(a))
      return (
        await new Request(Tt.origin, { method: "POST", body: a }).arrayBuffer()
      ).byteLength;
    if (F.isArrayBufferView(a) || F.isArrayBuffer(a)) return a.byteLength;
    if ((F.isURLSearchParams(a) && (a = a + ""), F.isString(a)))
      return (await ej(a)).byteLength;
  },
  nj = async (a, s) => {
    const l = F.toFiniteNumber(a.getContentLength());
    return l ?? aj(s);
  },
  sj =
    Bu &&
    (async (a) => {
      let {
        url: s,
        method: l,
        data: i,
        signal: o,
        cancelToken: f,
        timeout: h,
        onDownloadProgress: m,
        onUploadProgress: y,
        responseType: p,
        headers: v,
        withCredentials: S = "same-origin",
        fetchOptions: w,
      } = $0(a);
      p = p ? (p + "").toLowerCase() : "text";
      let O = ZN([o, f && f.toAbortSignal()], h),
        N;
      const R =
        O &&
        O.unsubscribe &&
        (() => {
          O.unsubscribe();
        });
      let C;
      try {
        if (
          y &&
          tj &&
          l !== "get" &&
          l !== "head" &&
          (C = await nj(v, i)) !== 0
        ) {
          let Y = new Request(s, { method: "POST", body: i, duplex: "half" }),
            _;
          if (
            (F.isFormData(i) &&
              (_ = Y.headers.get("content-type")) &&
              v.setContentType(_),
            Y.body)
          ) {
            const [K, ee] = sg(C, bu(rg(y)));
            i = ig(Y.body, ug, K, ee);
          }
        }
        F.isString(S) || (S = S ? "include" : "omit");
        const U = "credentials" in Request.prototype;
        N = new Request(s, {
          ...w,
          signal: O,
          method: l.toUpperCase(),
          headers: v.normalize().toJSON(),
          body: i,
          duplex: "half",
          credentials: U ? S : void 0,
        });
        let M = await fetch(N, w);
        const V = Xf && (p === "stream" || p === "response");
        if (Xf && (m || (V && R))) {
          const Y = {};
          ["status", "statusText", "headers"].forEach((ne) => {
            Y[ne] = M[ne];
          });
          const _ = F.toFiniteNumber(M.headers.get("content-length")),
            [K, ee] = (m && sg(_, bu(rg(m), !0))) || [];
          M = new Response(
            ig(M.body, ug, K, () => {
              ee && ee(), R && R();
            }),
            Y
          );
        }
        p = p || "text";
        let H = await Su[F.findKey(Su, p) || "text"](M, a);
        return (
          !V && R && R(),
          await new Promise((Y, _) => {
            Q0(Y, _, {
              data: H,
              headers: qt.from(M.headers),
              status: M.status,
              statusText: M.statusText,
              config: a,
              request: N,
            });
          })
        );
      } catch (U) {
        throw (
          (R && R(),
          U && U.name === "TypeError" && /Load failed|fetch/i.test(U.message)
            ? Object.assign(new we("Network Error", we.ERR_NETWORK, a, N), {
                cause: U.cause || U,
              })
            : we.from(U, U && U.code, a, N))
        );
      }
    }),
  $f = { http: xN, xhr: KN, fetch: sj };
F.forEach($f, (a, s) => {
  if (a) {
    try {
      Object.defineProperty(a, "name", { value: s });
    } catch {}
    Object.defineProperty(a, "adapterName", { value: s });
  }
});
const og = (a) => `- ${a}`,
  rj = (a) => F.isFunction(a) || a === null || a === !1,
  J0 = {
    getAdapter: (a) => {
      a = F.isArray(a) ? a : [a];
      const { length: s } = a;
      let l, i;
      const o = {};
      for (let f = 0; f < s; f++) {
        l = a[f];
        let h;
        if (
          ((i = l),
          !rj(l) && ((i = $f[(h = String(l)).toLowerCase()]), i === void 0))
        )
          throw new we(`Unknown adapter '${h}'`);
        if (i) break;
        o[h || "#" + f] = i;
      }
      if (!i) {
        const f = Object.entries(o).map(
          ([m, y]) =>
            `adapter ${m} ` +
            (y === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let h = s
          ? f.length > 1
            ? `since :
` +
              f.map(og).join(`
`)
            : " " + og(f[0])
          : "as no adapter specified";
        throw new we(
          "There is no suitable adapter to dispatch the request " + h,
          "ERR_NOT_SUPPORT"
        );
      }
      return i;
    },
    adapters: $f,
  };
function Af(a) {
  if (
    (a.cancelToken && a.cancelToken.throwIfRequested(),
    a.signal && a.signal.aborted)
  )
    throw new ur(null, a);
}
function cg(a) {
  return (
    Af(a),
    (a.headers = qt.from(a.headers)),
    (a.data = Ef.call(a, a.transformRequest)),
    ["post", "put", "patch"].indexOf(a.method) !== -1 &&
      a.headers.setContentType("application/x-www-form-urlencoded", !1),
    J0.getAdapter(a.adapter || Ml.adapter)(a).then(
      function (i) {
        return (
          Af(a),
          (i.data = Ef.call(a, a.transformResponse, i)),
          (i.headers = qt.from(i.headers)),
          i
        );
      },
      function (i) {
        return (
          G0(i) ||
            (Af(a),
            i &&
              i.response &&
              ((i.response.data = Ef.call(a, a.transformResponse, i.response)),
              (i.response.headers = qt.from(i.response.headers)))),
          Promise.reject(i)
        );
      }
    )
  );
}
const I0 = "1.10.0",
  Vu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (a, s) => {
    Vu[a] = function (i) {
      return typeof i === a || "a" + (s < 1 ? "n " : " ") + a;
    };
  }
);
const fg = {};
Vu.transitional = function (s, l, i) {
  function o(f, h) {
    return (
      "[Axios v" +
      I0 +
      "] Transitional option '" +
      f +
      "'" +
      h +
      (i ? ". " + i : "")
    );
  }
  return (f, h, m) => {
    if (s === !1)
      throw new we(
        o(h, " has been removed" + (l ? " in " + l : "")),
        we.ERR_DEPRECATED
      );
    return (
      l &&
        !fg[h] &&
        ((fg[h] = !0),
        console.warn(
          o(
            h,
            " has been deprecated since v" +
              l +
              " and will be removed in the near future"
          )
        )),
      s ? s(f, h, m) : !0
    );
  };
};
Vu.spelling = function (s) {
  return (l, i) => (console.warn(`${i} is likely a misspelling of ${s}`), !0);
};
function lj(a, s, l) {
  if (typeof a != "object")
    throw new we("options must be an object", we.ERR_BAD_OPTION_VALUE);
  const i = Object.keys(a);
  let o = i.length;
  for (; o-- > 0; ) {
    const f = i[o],
      h = s[f];
    if (h) {
      const m = a[f],
        y = m === void 0 || h(m, f, a);
      if (y !== !0)
        throw new we("option " + f + " must be " + y, we.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (l !== !0) throw new we("Unknown option " + f, we.ERR_BAD_OPTION);
  }
}
const uu = { assertOptions: lj, validators: Vu },
  ja = uu.validators;
let Wn = class {
  constructor(s) {
    (this.defaults = s || {}),
      (this.interceptors = { request: new ag(), response: new ag() });
  }
  async request(s, l) {
    try {
      return await this._request(s, l);
    } catch (i) {
      if (i instanceof Error) {
        let o = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(o)
          : (o = new Error());
        const f = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          i.stack
            ? f &&
              !String(i.stack).endsWith(f.replace(/^.+\n.+\n/, "")) &&
              (i.stack +=
                `
` + f)
            : (i.stack = f);
        } catch {}
      }
      throw i;
    }
  }
  _request(s, l) {
    typeof s == "string" ? ((l = l || {}), (l.url = s)) : (l = s || {}),
      (l = as(this.defaults, l));
    const { transitional: i, paramsSerializer: o, headers: f } = l;
    i !== void 0 &&
      uu.assertOptions(
        i,
        {
          silentJSONParsing: ja.transitional(ja.boolean),
          forcedJSONParsing: ja.transitional(ja.boolean),
          clarifyTimeoutError: ja.transitional(ja.boolean),
        },
        !1
      ),
      o != null &&
        (F.isFunction(o)
          ? (l.paramsSerializer = { serialize: o })
          : uu.assertOptions(
              o,
              { encode: ja.function, serialize: ja.function },
              !0
            )),
      l.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (l.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (l.allowAbsoluteUrls = !0)),
      uu.assertOptions(
        l,
        {
          baseUrl: ja.spelling("baseURL"),
          withXsrfToken: ja.spelling("withXSRFToken"),
        },
        !0
      ),
      (l.method = (l.method || this.defaults.method || "get").toLowerCase());
    let h = f && F.merge(f.common, f[l.method]);
    f &&
      F.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (N) => {
          delete f[N];
        }
      ),
      (l.headers = qt.concat(h, f));
    const m = [];
    let y = !0;
    this.interceptors.request.forEach(function (R) {
      (typeof R.runWhen == "function" && R.runWhen(l) === !1) ||
        ((y = y && R.synchronous), m.unshift(R.fulfilled, R.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function (R) {
      p.push(R.fulfilled, R.rejected);
    });
    let v,
      S = 0,
      w;
    if (!y) {
      const N = [cg.bind(this), void 0];
      for (
        N.unshift.apply(N, m),
          N.push.apply(N, p),
          w = N.length,
          v = Promise.resolve(l);
        S < w;

      )
        v = v.then(N[S++], N[S++]);
      return v;
    }
    w = m.length;
    let O = l;
    for (S = 0; S < w; ) {
      const N = m[S++],
        R = m[S++];
      try {
        O = N(O);
      } catch (C) {
        R.call(this, C);
        break;
      }
    }
    try {
      v = cg.call(this, O);
    } catch (N) {
      return Promise.reject(N);
    }
    for (S = 0, w = p.length; S < w; ) v = v.then(p[S++], p[S++]);
    return v;
  }
  getUri(s) {
    s = as(this.defaults, s);
    const l = X0(s.baseURL, s.url, s.allowAbsoluteUrls);
    return P0(l, s.params, s.paramsSerializer);
  }
};
F.forEach(["delete", "get", "head", "options"], function (s) {
  Wn.prototype[s] = function (l, i) {
    return this.request(
      as(i || {}, { method: s, url: l, data: (i || {}).data })
    );
  };
});
F.forEach(["post", "put", "patch"], function (s) {
  function l(i) {
    return function (f, h, m) {
      return this.request(
        as(m || {}, {
          method: s,
          headers: i ? { "Content-Type": "multipart/form-data" } : {},
          url: f,
          data: h,
        })
      );
    };
  }
  (Wn.prototype[s] = l()), (Wn.prototype[s + "Form"] = l(!0));
});
let ij = class W0 {
  constructor(s) {
    if (typeof s != "function")
      throw new TypeError("executor must be a function.");
    let l;
    this.promise = new Promise(function (f) {
      l = f;
    });
    const i = this;
    this.promise.then((o) => {
      if (!i._listeners) return;
      let f = i._listeners.length;
      for (; f-- > 0; ) i._listeners[f](o);
      i._listeners = null;
    }),
      (this.promise.then = (o) => {
        let f;
        const h = new Promise((m) => {
          i.subscribe(m), (f = m);
        }).then(o);
        return (
          (h.cancel = function () {
            i.unsubscribe(f);
          }),
          h
        );
      }),
      s(function (f, h, m) {
        i.reason || ((i.reason = new ur(f, h, m)), l(i.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(s) {
    if (this.reason) {
      s(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(s) : (this._listeners = [s]);
  }
  unsubscribe(s) {
    if (!this._listeners) return;
    const l = this._listeners.indexOf(s);
    l !== -1 && this._listeners.splice(l, 1);
  }
  toAbortSignal() {
    const s = new AbortController(),
      l = (i) => {
        s.abort(i);
      };
    return (
      this.subscribe(l),
      (s.signal.unsubscribe = () => this.unsubscribe(l)),
      s.signal
    );
  }
  static source() {
    let s;
    return {
      token: new W0(function (o) {
        s = o;
      }),
      cancel: s,
    };
  }
};
function uj(a) {
  return function (l) {
    return a.apply(null, l);
  };
}
function oj(a) {
  return F.isObject(a) && a.isAxiosError === !0;
}
const Kf = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Kf).forEach(([a, s]) => {
  Kf[s] = a;
});
function ev(a) {
  const s = new Wn(a),
    l = R0(Wn.prototype.request, s);
  return (
    F.extend(l, Wn.prototype, s, { allOwnKeys: !0 }),
    F.extend(l, s, null, { allOwnKeys: !0 }),
    (l.create = function (o) {
      return ev(as(a, o));
    }),
    l
  );
}
const tt = ev(Ml);
tt.Axios = Wn;
tt.CanceledError = ur;
tt.CancelToken = ij;
tt.isCancel = G0;
tt.VERSION = I0;
tt.toFormData = qu;
tt.AxiosError = we;
tt.Cancel = tt.CanceledError;
tt.all = function (s) {
  return Promise.all(s);
};
tt.spread = uj;
tt.isAxiosError = oj;
tt.mergeConfig = as;
tt.AxiosHeaders = qt;
tt.formToJSON = (a) => F0(F.isHTMLForm(a) ? new FormData(a) : a);
tt.getAdapter = J0.getAdapter;
tt.HttpStatusCode = Kf;
tt.default = tt;
const {
    Axios: tT,
    AxiosError: aT,
    CanceledError: nT,
    isCancel: sT,
    CancelToken: rT,
    VERSION: lT,
    all: iT,
    Cancel: uT,
    isAxiosError: oT,
    spread: cT,
    toFormData: fT,
    AxiosHeaders: dT,
    HttpStatusCode: hT,
    formToJSON: mT,
    getAdapter: pT,
    mergeConfig: yT,
  } = tt,
  tv = "https://api.alamocitypulse.com/api",
  Tf = {
    ACCESS_TOKEN: 30 * 24 * 60 * 60,
    REFRESH_TOKEN: 365 * 24 * 60 * 60,
    AUTH_STATE: 30 * 24 * 60 * 60,
  },
  at = tt.create({
    baseURL: tv,
    withCredentials: !0,
    headers: { "Content-Type": "application/json" },
  });
at.interceptors.request.use(
  (a) => {
    const s = tr("accessToken");
    return s && !vd(s) && (a.headers.Authorization = `Bearer ${s}`), a;
  },
  (a) => (console.error("API Request Error:", a), Promise.reject(a))
);
let Zf = !1,
  Jf = [];
const dg = (a, s = null) => {
  Jf.forEach((l) => {
    a ? l.reject(a) : l.resolve(s);
  }),
    (Jf = []);
};
at.interceptors.response.use(
  (a) => a,
  async (a) => {
    const s = a.config;
    if (
      (console.error("API Response Error:", a.response?.data?.error),
      a?.response?.status === 401)
    ) {
      const l = a.response?.data?.error || a?.response?.data?.message;
      if (
        l?.includes("You are not authorized") ||
        l?.includes("Invalid token") ||
        l?.includes("Token expired")
      ) {
        if (s.url?.includes("/auth/refresh-token"))
          return (
            console.error("Refresh token invalid, clearing auth state"),
            await wu(),
            Promise.reject(a)
          );
        if (s._retry) return await wu(), Promise.reject(a);
        if (Zf)
          try {
            const i = await new Promise((o, f) => {
              Jf.push({ resolve: o, reject: f });
            });
            return (s.headers.Authorization = `Bearer ${i}`), at(s);
          } catch (i) {
            return Promise.reject(i);
          }
        return cj(s);
      }
    }
    return Promise.reject(a);
  }
);
const cj = async (a) => {
    (a._retry = !0), (Zf = !0);
    const s = tr("refreshToken");
    if (!s)
      return (
        await wu(), Promise.reject(new Error("No refresh token available"))
      );
    try {
      const l = await tt.post(
          `${tv}/auth/refresh-token`,
          { refreshToken: s },
          {
            withCredentials: !0,
            headers: { "Content-Type": "application/json" },
          }
        ),
        { accessToken: i, refreshToken: o } = l.data.data;
      return (
        nv(i, o || s),
        (a.headers.Authorization = `Bearer ${i}`),
        dg(null, i),
        at(a)
      );
    } catch (l) {
      return (
        console.error("Token refresh failed:", l),
        dg(l, null),
        await wu(),
        Promise.reject(l)
      );
    } finally {
      Zf = !1;
    }
  },
  wu = async () => {
    xl(), typeof window < "u" && (window.location.href = "/login");
  },
  ou = (a, s, l = {}) => {
    const o = { ...{ path: "/", secure: !1, sameSite: "strict" }, ...l };
    let f = `${encodeURIComponent(a)}=${encodeURIComponent(s)}`;
    for (const h in o)
      o[h] !== !1 &&
        (h === "maxAge"
          ? (f += `; max-age=${o[h]}`)
          : h === "expires"
          ? (f += `; expires=${o[h].toUTCString()}`)
          : (f += `; ${h}=${o[h]}`));
    document.cookie = f;
  },
  tr = (a) => {
    const s = `${encodeURIComponent(a)}=`,
      l = document.cookie.split(";");
    for (let i = 0; i < l.length; i++) {
      let o = l[i].trim();
      if (o.indexOf(s) === 0) return decodeURIComponent(o.substring(s.length));
    }
    return null;
  },
  Cf = (a, s = {}) => {
    ou(a, "", { ...s, maxAge: -1, expires: new Date(0) });
  },
  av = (a) => {
    try {
      if (!a) return null;
      const s = a.split(".")[1];
      if (!s) return null;
      const l = s.replace(/-/g, "+").replace(/_/g, "/"),
        i = decodeURIComponent(
          atob(l)
            .split("")
            .map((o) => "%" + ("00" + o.charCodeAt(0).toString(16)).slice(-2))
            .join("")
        );
      return JSON.parse(i);
    } catch (s) {
      return console.error("JWT Parse Error:", s), null;
    }
  },
  vd = (a) => {
    const s = av(a);
    return !s || !s.exp ? !0 : s.exp * 1e3 < Date.now() + 3e4;
  },
  nv = (a, s) => {
    if (!a || !s) {
      console.error("Missing tokens when setting auth tokens");
      return;
    }
    ou("accessToken", a, {
      maxAge: Tf.ACCESS_TOKEN,
      secure: !1,
      sameSite: "strict",
      path: "/",
    }),
      ou("refreshToken", s, {
        maxAge: Tf.REFRESH_TOKEN,
        secure: !1,
        sameSite: "strict",
        path: "/",
      }),
      ou("isAuthenticated", "true", {
        maxAge: Tf.AUTH_STATE,
        secure: !1,
        sameSite: "strict",
        path: "/",
      });
  },
  xl = () => {
    const a = { path: "/" };
    Cf("accessToken", a), Cf("refreshToken", a), Cf("isAuthenticated", a);
  },
  hg = () => {
    const a = tr("accessToken"),
      s = tr("refreshToken");
    return tr("isAuthenticated") === "true" && a && s && !vd(a);
  },
  Of = () => {
    const a = tr("accessToken");
    if (!a || vd(a)) return null;
    const s = av(a);
    return s?.user || s;
  },
  fj = async ({ email: a }) => {
    try {
      return (await at.post("/auth/otp/create/", { email: a })).data;
    } catch (s) {
      throw (
        (console.error("Send OTP Error:", s),
        new Error(s.response?.data?.error || "Failed to send OTP"))
      );
    }
  },
  dj = async ({ email: a, otp: s, type: l }) => {
    try {
      return (await at.post("/auth/otp/verify/", { email: a, otp: s })).data;
    } catch (i) {
      throw (
        (console.error("Verify OTP Error:", i),
        new Error(i.response?.data?.error || "Invalid OTP"))
      );
    }
  },
  hj = async (a) => {
    try {
      return (await at.post("/auth/register/", a)).data;
    } catch (s) {
      throw (
        (console.error("Register User Error:", s),
        new Error(s.response?.data?.error || "Registration failed"))
      );
    }
  },
  sv = async ({ email: a, password: s }) => {
    try {
      const l = await at.post("/auth/login/", { email: a, password: s }),
        { access_token: i, refresh_token: o, profile: f } = l.data;
      return nv(i, o), { access_token: i, refresh_token: o, profile: f };
    } catch (l) {
      throw (
        (console.error("Login Error:", l),
        new Error(l.response?.data?.error || "Login failed"))
      );
    }
  },
  rv = async ({ email: a }) => {
    try {
      return (await at.post("/auth/password-reset/request/", { email: a }))
        .data;
    } catch (s) {
      throw (
        (console.error("Forgot Password OTP Error:", s),
        new Error(s.response?.data?.error || "Failed to send reset code"))
      );
    }
  },
  mj = async ({ email: a, otp: s, new_password: l }) => {
    try {
      return (
        await at.post("/auth/password-reset/confirm/", {
          email: a,
          otp: s,
          new_password: l,
        })
      ).data;
    } catch (i) {
      throw (
        (console.error("Reset Password Error:", i),
        new Error(i.response?.data?.error || "Password reset failed"))
      );
    }
  },
  pj = async ({ email: a, type: s }) => {
    try {
      let l = "/auth/otp/create/";
      return (
        s === "forgot-password" && (l = "/auth/password-reset/request/"),
        (await at.post(l, { email: a })).data
      );
    } catch (l) {
      throw (
        (console.error("Resend OTP Error:", l),
        new Error(l.response?.data?.error || "Failed to resend OTP"))
      );
    }
  },
  yj = () => {
    xl(), typeof window < "u" && (window.location.href = "/");
  },
  gT = async (a) => {
    try {
      return (
        await at.put("/auth/profile/", a, {
          headers: { "Content-Type": "multipart/form-data" },
        })
      ).data;
    } catch (s) {
      throw (
        (console.error("Update Profile Error:", s),
        new Error(s.response?.data?.error || "Failed to update profile"))
      );
    }
  },
  lv = b.createContext(),
  rs = () => {
    const a = b.useContext(lv);
    if (!a) throw new Error("useAuth must be used within an AuthProvider");
    return a;
  },
  gj = ({ children: a }) => {
    const [s, l] = b.useState(null),
      [i, o] = b.useState(null),
      [f, h] = b.useState(!0),
      [m, y] = b.useState(!1),
      p = async () => {
        try {
          const _ = (await at.get("/auth/profile/")).data,
            K = {
              id: _.user.id,
              email: _.user.email,
              role: _.user.role,
              firstName: _.user.user_profile.first_name,
              lastName: _.user.user_profile.last_name,
              profilePicture: _.user.user_profile.profile_picture,
              phoneNumber: _.user.user_profile.phone_number,
              joinedDate: _.user.user_profile.joined_date,
            },
            ee = {
              id: _.id,
              stripeSubscriptionId: _.stripe_subscription_id,
              status: _.status,
              price: _.price,
              durationDays: _.duration_days,
              startDate: _.start_date,
              endDate: _.end_date,
              isActive: _.is_active,
              autoRenew: _.auto_renew,
              createdAt: _.created_at,
              updatedAt: _.updated_at,
              plan: _.plan,
            };
          return l(K), o(ee), { user: K, profile: ee };
        } catch (Y) {
          throw (console.error("Failed to fetch profile:", Y), Y);
        }
      };
    b.useEffect(() => {
      (async () => {
        try {
          if (hg()) {
            const K = Of();
            if (K) {
              l(K), y(!0);
              try {
                await p();
              } catch {
                console.warn(
                  "Failed to fetch profile, but user is authenticated"
                );
              }
            } else l(null), o(null), y(!1), xl();
          } else l(null), o(null), y(!1);
        } catch (_) {
          console.error("Auth check error:", _), l(null), o(null), y(!1), xl();
        } finally {
          h(!1);
        }
      })();
    }, []);
    const v = async (Y) => {
        try {
          h(!0);
          const _ = await sv(Y),
            K = Of();
          if (K) {
            l(K), y(!0);
            try {
              await p();
            } catch {
              console.warn("Login successful but failed to fetch profile");
            }
          }
          return _;
        } catch (_) {
          throw (console.error("Login error:", _), _);
        } finally {
          h(!1);
        }
      },
      S = () => {
        try {
          yj(), l(null), o(null), y(!1);
        } catch (Y) {
          console.error("Logout error:", Y), l(null), o(null), y(!1), xl();
        }
      },
      w = (Y) => {
        l((_) => ({ ..._, ...Y }));
      },
      O = (Y) => {
        o((_) => ({ ..._, ...Y }));
      },
      N = async () => {
        if (!m) return null;
        try {
          return h(!0), await p();
        } catch (Y) {
          throw (console.error("Failed to refresh profile:", Y), Y);
        } finally {
          h(!1);
        }
      },
      R = (Y) => s?.role === Y,
      C = () => R("admin"),
      U = () => i?.isActive && i?.status === "premium",
      M = () => (i?.endDate ? new Date(i.endDate) < new Date() : !0),
      H = {
        user: s,
        profile: i,
        isLoggedIn: m,
        isLoading: f,
        login: v,
        logout: S,
        updateUser: w,
        updateProfile: O,
        refreshProfile: N,
        hasRole: R,
        isAdmin: C,
        hasActiveSubscription: U,
        isSubscriptionExpired: M,
        getSubscriptionStatus: () =>
          i ? (i.isActive ? (M() ? "expired" : i.status) : "inactive") : "none",
        checkAuth: () => hg(),
        getCurrentUser: () => Of(),
      };
    return c.jsx(lv.Provider, { value: H, children: a });
  },
  vj = "modulepreload",
  xj = function (a) {
    return "/" + a;
  },
  mg = {},
  es = function (s, l, i) {
    let o = Promise.resolve();
    if (l && l.length > 0) {
      let h = function (p) {
        return Promise.all(
          p.map((v) =>
            Promise.resolve(v).then(
              (S) => ({ status: "fulfilled", value: S }),
              (S) => ({ status: "rejected", reason: S })
            )
          )
        );
      };
      document.getElementsByTagName("link");
      const m = document.querySelector("meta[property=csp-nonce]"),
        y = m?.nonce || m?.getAttribute("nonce");
      o = h(
        l.map((p) => {
          if (((p = xj(p)), p in mg)) return;
          mg[p] = !0;
          const v = p.endsWith(".css"),
            S = v ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${p}"]${S}`)) return;
          const w = document.createElement("link");
          if (
            ((w.rel = v ? "stylesheet" : vj),
            v || (w.as = "script"),
            (w.crossOrigin = ""),
            (w.href = p),
            y && w.setAttribute("nonce", y),
            document.head.appendChild(w),
            v)
          )
            return new Promise((O, N) => {
              w.addEventListener("load", O),
                w.addEventListener("error", () =>
                  N(new Error(`Unable to preload CSS for ${p}`))
                );
            });
        })
      );
    }
    function f(h) {
      const m = new Event("vite:preloadError", { cancelable: !0 });
      if (((m.payload = h), window.dispatchEvent(m), !m.defaultPrevented))
        throw h;
    }
    return o.then((h) => {
      for (const m of h || []) m.status === "rejected" && f(m.reason);
      return s().catch(f);
    });
  },
  pe = ({ className: a = "", height: s = "h-4" }) =>
    c.jsx("div", { className: `bg-gray-200 rounded animate-pulse ${s} ${a}` }),
  or = ({ className: a = "" }) =>
    c.jsx("div", {
      className: `bg-gray-300 rounded animate-pulse ${a} flex items-center justify-center`,
      children: c.jsx("div", { className: "w-8 h-8 bg-gray-400 rounded" }),
    }),
  bj = () =>
    c.jsx("nav", {
      className: "fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b",
      children: c.jsx("div", {
        className: "w-full mx-auto px-4 sm:px-6 lg:px-8",
        children: c.jsxs("div", {
          className: "flex justify-between items-center h-16",
          children: [
            c.jsx(pe, { className: "w-32 h-8" }),
            c.jsx("div", {
              className: "hidden md:flex space-x-8",
              children: [1, 2, 3, 4, 5].map((a) =>
                c.jsx(pe, { className: "w-16 h-4" }, a)
              ),
            }),
            c.jsx(pe, { className: "w-8 h-8 rounded-full" }),
          ],
        }),
      }),
    }),
  pg = () =>
    c.jsxs("div", {
      className: "bg-white rounded-lg shadow-sm border overflow-hidden",
      children: [
        c.jsx(or, { className: "w-full h-64 sm:h-80" }),
        c.jsxs("div", {
          className: "p-6",
          children: [
            c.jsx(pe, { className: "w-20 h-3 mb-3" }),
            c.jsx(pe, { className: "w-full h-6 mb-2" }),
            c.jsx(pe, { className: "w-3/4 h-6 mb-4" }),
            c.jsx(pe, { className: "w-full h-4 mb-2" }),
            c.jsx(pe, { className: "w-5/6 h-4 mb-4" }),
            c.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                c.jsx(pe, { className: "w-24 h-4" }),
                c.jsxs("div", {
                  className: "flex space-x-4",
                  children: [
                    c.jsx(pe, { className: "w-12 h-8 rounded-full" }),
                    c.jsx(pe, { className: "w-12 h-8 rounded-full" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Sj = () =>
    c.jsx("div", {
      className:
        "bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border",
      children: c.jsxs("div", {
        className: "flex items-center justify-between",
        children: [
          c.jsxs("div", {
            className: "flex-1",
            children: [
              c.jsx(pe, { className: "w-32 h-4 mb-3" }),
              c.jsx(pe, { className: "w-full h-6 mb-2" }),
              c.jsx(pe, { className: "w-2/3 h-4 mb-4" }),
              c.jsxs("div", {
                className: "flex items-center space-x-4",
                children: [
                  c.jsx(pe, { className: "w-12 h-12 rounded-full" }),
                  c.jsx(pe, { className: "w-32 h-2 rounded-full" }),
                  c.jsx(pe, { className: "w-16 h-4" }),
                ],
              }),
            ],
          }),
          c.jsx(or, { className: "w-24 h-24 ml-6" }),
        ],
      }),
    }),
  Ii = () =>
    c.jsx("div", {
      className: "bg-white rounded-lg shadow-sm border overflow-hidden",
      children: c.jsxs("div", {
        className: "flex",
        children: [
          c.jsx(or, { className: "w-24 h-20 flex-shrink-0" }),
          c.jsxs("div", {
            className: "flex-1 p-4",
            children: [
              c.jsx(pe, { className: "w-16 h-3 mb-2" }),
              c.jsx(pe, { className: "w-full h-4 mb-1" }),
              c.jsx(pe, { className: "w-3/4 h-4 mb-3" }),
              c.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  c.jsx(pe, { className: "w-20 h-3" }),
                  c.jsxs("div", {
                    className: "flex space-x-2",
                    children: [
                      c.jsx(pe, { className: "w-8 h-6 rounded" }),
                      c.jsx(pe, { className: "w-8 h-6 rounded" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  wj = () =>
    c.jsxs("div", {
      className: "bg-white rounded-lg shadow-sm border p-6",
      children: [
        c.jsxs("div", {
          className: "flex items-center mb-6",
          children: [
            c.jsx("div", {
              className: "w-3 h-3 bg-red-400 rounded-full mr-3 animate-pulse",
            }),
            c.jsx(pe, { className: "w-32 h-6" }),
          ],
        }),
        c.jsx("div", {
          className: "space-y-4",
          children: [1, 2, 3, 4].map((a) =>
            c.jsxs(
              "div",
              {
                className:
                  "flex items-start space-x-4 pb-4 border-b border-gray-100 last:border-b-0",
                children: [
                  c.jsx(or, { className: "w-16 h-12 flex-shrink-0" }),
                  c.jsxs("div", {
                    className: "flex-1",
                    children: [
                      c.jsx(pe, { className: "w-full h-4 mb-2" }),
                      c.jsx(pe, { className: "w-2/3 h-3 mb-2" }),
                      c.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          c.jsx(pe, { className: "w-16 h-3" }),
                          c.jsx(pe, { className: "w-12 h-3" }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              a
            )
          ),
        }),
      ],
    }),
  Nj = () =>
    c.jsxs("div", {
      className: "bg-white rounded-lg shadow-sm border",
      children: [
        c.jsx("div", {
          className: "border-b",
          children: c.jsx("div", {
            className: "flex space-x-8 px-6 py-4",
            children: [1, 2, 3, 4].map((a) =>
              c.jsx(pe, { className: "w-20 h-4" }, a)
            ),
          }),
        }),
        c.jsx("div", {
          className: "p-6",
          children: c.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: [1, 2, 3, 4, 5, 6].map((a) =>
              c.jsxs(
                "div",
                {
                  className: "space-y-3",
                  children: [
                    c.jsx(or, { className: "w-full h-40" }),
                    c.jsx(pe, { className: "w-16 h-3" }),
                    c.jsx(pe, { className: "w-full h-4" }),
                    c.jsx(pe, { className: "w-3/4 h-4" }),
                    c.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        c.jsx(pe, { className: "w-20 h-3" }),
                        c.jsxs("div", {
                          className: "flex space-x-2",
                          children: [
                            c.jsx(pe, { className: "w-8 h-6 rounded" }),
                            c.jsx(pe, { className: "w-8 h-6 rounded" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                a
              )
            ),
          }),
        }),
      ],
    }),
  jj = () =>
    c.jsxs("div", {
      className: "bg-white rounded-lg shadow-sm border",
      children: [
        c.jsx("div", {
          className: "border-b",
          children: c.jsx("div", {
            className: "flex space-x-8 px-6 py-4",
            children: [1, 2, 3].map((a) =>
              c.jsx(pe, { className: "w-20 h-4" }, a)
            ),
          }),
        }),
        c.jsx("div", {
          className: "p-6",
          children: c.jsx("div", {
            className: "space-y-4",
            children: [1, 2, 3, 4, 5, 6, 7, 8].map((a) =>
              c.jsxs(
                "div",
                {
                  className:
                    "flex items-start space-x-4 pb-4 border-b border-gray-100 last:border-b-0",
                  children: [
                    c.jsx(or, { className: "w-20 h-16 flex-shrink-0" }),
                    c.jsxs("div", {
                      className: "flex-1",
                      children: [
                        c.jsx(pe, { className: "w-16 h-3 mb-2" }),
                        c.jsx(pe, { className: "w-full h-4 mb-1" }),
                        c.jsx(pe, { className: "w-4/5 h-4 mb-3" }),
                        c.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            c.jsx(pe, { className: "w-20 h-3" }),
                            c.jsxs("div", {
                              className: "flex space-x-2",
                              children: [
                                c.jsx(pe, { className: "w-8 h-6 rounded" }),
                                c.jsx(pe, { className: "w-8 h-6 rounded" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                a
              )
            ),
          }),
        }),
      ],
    }),
  Ej = () =>
    c.jsxs("aside", {
      className: "w-full xl:w-full",
      children: [
        c.jsx("div", {
          className:
            "xl:hidden w-full h-32 sm:h-40 bg-gray-300 rounded-lg flex items-center justify-center mb-6",
          children: c.jsx(pe, { className: "w-24 h-4" }),
        }),
        c.jsxs("div", {
          className: "xl:hidden w-full mb-6",
          children: [
            c.jsx(pe, { className: "w-32 h-5 mb-4" }),
            c.jsx("div", {
              className: "space-y-4",
              children: [1, 2, 3, 4, 5, 6, 7, 8].map((a) => c.jsx(Ii, {}, a)),
            }),
          ],
        }),
        c.jsx("div", {
          className:
            "xl:hidden w-full h-28 sm:h-36 bg-gray-300 rounded-lg flex items-center justify-center mb-6",
          children: c.jsx(pe, { className: "w-20 h-4" }),
        }),
        c.jsx("div", {
          className: "xl:hidden w-full mb-6",
          children: c.jsx("div", {
            className: "space-y-4",
            children: [1, 2, 3, 4, 5, 6, 7, 8].map((a) => c.jsx(Ii, {}, a)),
          }),
        }),
        c.jsx("div", {
          className:
            "xl:hidden w-full h-32 sm:h-40 bg-gray-300 rounded-lg flex items-center justify-center mb-5",
          children: c.jsx(pe, { className: "w-24 h-4" }),
        }),
        c.jsxs("div", {
          className:
            "xl:block bg-gray-200 rounded-lg p-4 sm:p-6 flex flex-col items-center",
          children: [
            c.jsx(pe, { className: "w-32 h-6 mb-4" }),
            c.jsx("div", {
              className:
                "w-full h-48 sm:h-64 bg-gray-300 rounded-lg flex items-center justify-center mb-6",
              children: c.jsx(pe, { className: "w-20 h-4" }),
            }),
            c.jsxs("div", {
              className: "w-full",
              children: [
                c.jsx(pe, { className: "w-28 h-5 mb-4" }),
                c.jsx("div", {
                  className: "space-y-4",
                  children: [1, 2, 3, 4, 5, 6, 7, 8].map((a) =>
                    c.jsx(Ii, {}, a)
                  ),
                }),
              ],
            }),
            c.jsx("div", {
              className:
                "w-full h-32 sm:h-40 bg-gray-300 rounded-lg flex items-center justify-center my-6",
              children: c.jsx(pe, { className: "w-20 h-4" }),
            }),
            c.jsx("div", {
              className: "w-full",
              children: c.jsx("div", {
                className: "space-y-4",
                children: [1, 2, 3, 4, 5, 6, 7, 8].map((a) => c.jsx(Ii, {}, a)),
              }),
            }),
            c.jsx("div", {
              className:
                "w-full h-32 sm:h-48 bg-gray-300 rounded-lg flex items-center justify-center mt-6",
              children: c.jsx(pe, { className: "w-24 h-4" }),
            }),
          ],
        }),
      ],
    }),
  Aj = () =>
    c.jsx("footer", {
      className: "bg-gray-900 text-white py-12",
      children: c.jsxs("div", {
        className: "w-full mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          c.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-4 gap-8",
            children: [1, 2, 3, 4].map((a) =>
              c.jsxs(
                "div",
                {
                  children: [
                    c.jsx(pe, { className: "w-24 h-5 mb-4 bg-gray-700" }),
                    c.jsx("div", {
                      className: "space-y-3",
                      children: [1, 2, 3, 4].map((s) =>
                        c.jsx(pe, { className: "w-full h-3 bg-gray-700" }, s)
                      ),
                    }),
                  ],
                },
                a
              )
            ),
          }),
          c.jsx("div", {
            className: "border-t border-gray-700 mt-8 pt-8 text-center",
            children: c.jsx(pe, { className: "w-64 h-4 mx-auto bg-gray-700" }),
          }),
        ],
      }),
    });
function Pu() {
  return c.jsxs("div", {
    className: "min-h-screen bg-gray-50",
    children: [
      c.jsx(bj, {}),
      c.jsx("main", {
        className: "w-full py-4 mt-12 sm:py-8",
        children: c.jsx("div", {
          className: "w-full mx-auto px-4 sm:px-6 lg:px-8",
          children: [1, 2].map((a) =>
            c.jsxs(
              "div",
              {
                className:
                  "grid grid-cols-1 xl:grid-cols-[3fr_1fr] gap-6 xl:gap-8 mb-12",
                children: [
                  c.jsxs("div", {
                    className: "w-full",
                    children: [
                      c.jsx("div", {
                        className: "mb-5",
                        children: c.jsx(pg, {}),
                      }),
                      c.jsx("div", {
                        className: "mb-5",
                        children: c.jsx(Sj, {}),
                      }),
                      c.jsx("div", {
                        className: "mb-5",
                        children: c.jsx(pg, {}),
                      }),
                      c.jsx("div", {
                        className: "mb-5",
                        children: c.jsx(wj, {}),
                      }),
                      c.jsx("div", {
                        className: "mb-5",
                        children: c.jsx(Nj, {}),
                      }),
                      c.jsx("div", {
                        className:
                          "w-full h-32 sm:h-40 bg-gray-300 rounded-lg hidden md:flex items-center justify-center mb-6",
                        children: c.jsx(pe, { className: "w-32 h-4" }),
                      }),
                      c.jsx("div", {
                        className: "mb-5",
                        children: c.jsx(jj, {}),
                      }),
                      c.jsx("div", {
                        className:
                          "w-full h-32 sm:h-40 bg-gray-300 rounded-lg hidden md:flex items-center justify-center mb-6",
                        children: c.jsx(pe, { className: "w-32 h-4" }),
                      }),
                    ],
                  }),
                  c.jsx(Ej, {}),
                ],
              },
              a
            )
          ),
        }),
      }),
      c.jsx(Aj, {}),
    ],
  });
}
const Tj = () => {
    const a = Ct(),
      { isLoggedIn: s, isLoading: l } = rs();
    if (l) return c.jsx(Pu, {});
    if (
      s &&
      ["/login", "/signup", "/signin", "/register"].includes(a.pathname)
    ) {
      const i = a.state?.from?.pathname || "/dashboard";
      return c.jsx(yu, { to: i, replace: !0 });
    }
    return c.jsx(lr, {});
  },
  Cj = () => {
    const { isLoading: a } = rs();
    return a ? c.jsx(Pu, {}) : c.jsx(lr, {});
  },
  Oj = () => {
    const a = Ct(),
      { isLoggedIn: s, isLoading: l } = rs();
    return l
      ? c.jsx(Pu, {})
      : s
      ? c.jsx(lr, {})
      : c.jsx(yu, { to: "/", state: { from: a }, replace: !0 });
  },
  Rj = () => {
    const a = Ct(),
      { isLoggedIn: s, isAdmin: l, isLoading: i, user: o } = rs();
    return i
      ? c.jsx(Pu, {})
      : s
      ? !l() && o?.role !== "admin"
        ? c.jsx(yu, { to: "/dashboard", replace: !0 })
        : c.jsx(lr, {})
      : c.jsx(yu, { to: "/", state: { from: a }, replace: !0 });
  },
  yg = () =>
    c.jsx("div", {
      className: "w-full mx-auto px-2 md:px-10",
      children: c.jsx(lr, {}),
    });
function gg(a, s) {
  if (typeof a == "function") return a(s);
  a != null && (a.current = s);
}
function iv(...a) {
  return (s) => {
    let l = !1;
    const i = a.map((o) => {
      const f = gg(o, s);
      return !l && typeof f == "function" && (l = !0), f;
    });
    if (l)
      return () => {
        for (let o = 0; o < i.length; o++) {
          const f = i[o];
          typeof f == "function" ? f() : gg(a[o], null);
        }
      };
  };
}
function xd(...a) {
  return b.useCallback(iv(...a), a);
}
function uv(a) {
  const s = _j(a),
    l = b.forwardRef((i, o) => {
      const { children: f, ...h } = i,
        m = b.Children.toArray(f),
        y = m.find(Mj);
      if (y) {
        const p = y.props.children,
          v = m.map((S) =>
            S === y
              ? b.Children.count(p) > 1
                ? b.Children.only(null)
                : b.isValidElement(p)
                ? p.props.children
                : null
              : S
          );
        return c.jsx(s, {
          ...h,
          ref: o,
          children: b.isValidElement(p) ? b.cloneElement(p, void 0, v) : null,
        });
      }
      return c.jsx(s, { ...h, ref: o, children: f });
    });
  return (l.displayName = `${a}.Slot`), l;
}
var ov = uv("Slot");
function _j(a) {
  const s = b.forwardRef((l, i) => {
    const { children: o, ...f } = l;
    if (b.isValidElement(o)) {
      const h = zj(o),
        m = Uj(f, o.props);
      return (
        o.type !== b.Fragment && (m.ref = i ? iv(i, h) : h),
        b.cloneElement(o, m)
      );
    }
    return b.Children.count(o) > 1 ? b.Children.only(null) : null;
  });
  return (s.displayName = `${a}.SlotClone`), s;
}
var Dj = Symbol("radix.slottable");
function Mj(a) {
  return (
    b.isValidElement(a) &&
    typeof a.type == "function" &&
    "__radixId" in a.type &&
    a.type.__radixId === Dj
  );
}
function Uj(a, s) {
  const l = { ...s };
  for (const i in s) {
    const o = a[i],
      f = s[i];
    /^on[A-Z]/.test(i)
      ? o && f
        ? (l[i] = (...m) => {
            const y = f(...m);
            return o(...m), y;
          })
        : o && (l[i] = o)
      : i === "style"
      ? (l[i] = { ...o, ...f })
      : i === "className" && (l[i] = [o, f].filter(Boolean).join(" "));
  }
  return { ...a, ...l };
}
function zj(a) {
  let s = Object.getOwnPropertyDescriptor(a.props, "ref")?.get,
    l = s && "isReactWarning" in s && s.isReactWarning;
  return l
    ? a.ref
    : ((s = Object.getOwnPropertyDescriptor(a, "ref")?.get),
      (l = s && "isReactWarning" in s && s.isReactWarning),
      l ? a.props.ref : a.props.ref || a.ref);
}
function cv(a) {
  var s,
    l,
    i = "";
  if (typeof a == "string" || typeof a == "number") i += a;
  else if (typeof a == "object")
    if (Array.isArray(a)) {
      var o = a.length;
      for (s = 0; s < o; s++)
        a[s] && (l = cv(a[s])) && (i && (i += " "), (i += l));
    } else for (l in a) a[l] && (i && (i += " "), (i += l));
  return i;
}
function kj() {
  for (var a, s, l = 0, i = "", o = arguments.length; l < o; l++)
    (a = arguments[l]) && (s = cv(a)) && (i && (i += " "), (i += s));
  return i;
}
const vg = (a) => (typeof a == "boolean" ? `${a}` : a === 0 ? "0" : a),
  xg = kj,
  bd = (a, s) => (l) => {
    var i;
    if (s?.variants == null) return xg(a, l?.class, l?.className);
    const { variants: o, defaultVariants: f } = s,
      h = Object.keys(o).map((p) => {
        const v = l?.[p],
          S = f?.[p];
        if (v === null) return null;
        const w = vg(v) || vg(S);
        return o[p][w];
      }),
      m =
        l &&
        Object.entries(l).reduce((p, v) => {
          let [S, w] = v;
          return w === void 0 || (p[S] = w), p;
        }, {}),
      y =
        s == null || (i = s.compoundVariants) === null || i === void 0
          ? void 0
          : i.reduce((p, v) => {
              let { class: S, className: w, ...O } = v;
              return Object.entries(O).every((N) => {
                let [R, C] = N;
                return Array.isArray(C)
                  ? C.includes({ ...f, ...m }[R])
                  : { ...f, ...m }[R] === C;
              })
                ? [...p, S, w]
                : p;
            }, []);
    return xg(a, h, y, l?.class, l?.className);
  };
function Le(...a) {
  return a.filter(Boolean).join(" ");
}
const bg = (a) => {
    if (!a) return "";
    const s = a.split(" ").filter((l) => l.length > 0);
    return s.length <= 10 || s.twentyPercentLength <= 90
      ? a
      : s.slice(0, 90).join(" ");
  },
  Lj = (a) =>
    a &&
    typeof a == "object" &&
    a.id &&
    a.title &&
    typeof a.title == "string" &&
    a.title.trim() !== "",
  vT = (a, s = 1) => {
    if (!a || a.length <= 1) return a;
    const l = a.slice(0, s),
      i = a.slice(s),
      o = Date.now() + Math.random() * 1e6,
      f = [...i];
    for (let h = f.length - 1; h > 0; h--) {
      const m = (o + h) * 0.12345,
        y = Math.floor((Math.sin(m) * 1e4 + Math.random()) % (h + 1));
      [f[h], f[y]] = [f[y], f[h]];
    }
    return [...l, ...f];
  };
function En(a) {
  if (!a) return "N/A";
  try {
    return new Date(a).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "Invalid Date";
  }
}
function Hj(a) {
  switch (a) {
    case "Approved":
    case "approved":
      return "default";
    case "Rejected":
    case "rejected":
      return "destructive";
    case "Pending":
    case "pending":
      return "secondary";
    default:
      return "outline";
  }
}
function qj(a) {
  switch (a) {
    case "Approved":
    case "approved":
      return "text-green-600 bg-green-50";
    case "Rejected":
    case "rejected":
      return "text-red-600 bg-red-50";
    case "Pending":
    case "pending":
      return "text-yellow-600 bg-yellow-50";
    default:
      return "text-gray-600 bg-gray-50";
  }
}
function cu(a) {
  return (
    {
      approved: "Approved",
      rejected: "Rejected",
      pending: "Pending",
      draft: "Pending",
    }[a] || a
  );
}
const fv = bd(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);
function He({ className: a, variant: s, size: l, asChild: i = !1, ...o }) {
  const f = i ? ov : "button";
  return c.jsx(f, {
    "data-slot": "button",
    className: Le(fv({ variant: s, size: l, className: a })),
    ...o,
  });
}
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bj = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Vj = (a) =>
    a.replace(/^([A-Z])|[\s-_]+(\w)/g, (s, l, i) =>
      i ? i.toUpperCase() : l.toLowerCase()
    ),
  Sg = (a) => {
    const s = Vj(a);
    return s.charAt(0).toUpperCase() + s.slice(1);
  },
  dv = (...a) =>
    a
      .filter((s, l, i) => !!s && s.trim() !== "" && i.indexOf(s) === l)
      .join(" ")
      .trim(),
  Pj = (a) => {
    for (const s in a)
      if (s.startsWith("aria-") || s === "role" || s === "title") return !0;
  };
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Yj = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fj = b.forwardRef(
  (
    {
      color: a = "currentColor",
      size: s = 24,
      strokeWidth: l = 2,
      absoluteStrokeWidth: i,
      className: o = "",
      children: f,
      iconNode: h,
      ...m
    },
    y
  ) =>
    b.createElement(
      "svg",
      {
        ref: y,
        ...Yj,
        width: s,
        height: s,
        stroke: a,
        strokeWidth: i ? (Number(l) * 24) / Number(s) : l,
        className: dv("lucide", o),
        ...(!f && !Pj(m) && { "aria-hidden": "true" }),
        ...m,
      },
      [
        ...h.map(([p, v]) => b.createElement(p, v)),
        ...(Array.isArray(f) ? f : [f]),
      ]
    )
);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qe = (a, s) => {
  const l = b.forwardRef(({ className: i, ...o }, f) =>
    b.createElement(Fj, {
      ref: f,
      iconNode: s,
      className: dv(`lucide-${Bj(Sg(a))}`, `lucide-${a}`, i),
      ...o,
    })
  );
  return (l.displayName = Sg(a)), l;
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gj = [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }],
  ],
  Zn = qe("arrow-left", Gj);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qj = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  Xj = qe("arrow-right", Qj);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $j = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
    ],
    ["path", { d: "M3 10h18", key: "8toen8" }],
  ],
  If = qe("calendar", $j);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kj = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  Zj = qe("check", Kj);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jj = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  Ij = qe("chevron-down", Jj);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wj = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
  hv = qe("chevron-left", Wj);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eE = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  mv = qe("chevron-right", eE);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tE = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  wg = qe("circle-alert", tE);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const aE = [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ],
  Sd = qe("circle-check-big", aE);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nE = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
    ["path", { d: "m9 9 6 6", key: "z0biqf" }],
  ],
  pv = qe("circle-x", nE);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sE = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
  ],
  yv = qe("clock", sE);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rE = [
    ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
    ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
    ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }],
  ],
  lE = qe("ellipsis", rE);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iE = [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp",
      },
    ],
  ],
  Ng = qe("external-link", iE);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uE = [
    [
      "path",
      {
        d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
        key: "ct8e1f",
      },
    ],
    ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
    [
      "path",
      {
        d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
        key: "13bj9a",
      },
    ],
    ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ],
  Wf = qe("eye-off", uE);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oE = [
    [
      "path",
      {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  ed = qe("eye", oE);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cE = [
    [
      "path",
      {
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
        key: "1rqfz7",
      },
    ],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }],
  ],
  fE = qe("file-text", cE);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dE = [
    ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
    ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
    ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
    ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }],
  ],
  jg = qe("hash", dE);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hE = [
    [
      "path",
      { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
    ],
    [
      "path",
      {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "1d0kgt",
      },
    ],
  ],
  Eg = qe("house", hE);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mE = [
    [
      "rect",
      {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2",
        key: "1m3agn",
      },
    ],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
  ],
  Rf = qe("image", mE);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pE = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  td = qe("loader-circle", pE);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yE = [
    ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
    ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }],
  ],
  Ag = qe("megaphone", yE);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gE = [
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 18h16", key: "19g7jn" }],
    ["path", { d: "M4 6h16", key: "1o0s65" }],
  ],
  vE = qe("menu", gE);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xE = [
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
    ],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
    ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }],
  ],
  bE = qe("panel-left-open", xE);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const SE = [
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
    ],
    ["path", { d: "M15 3v18", key: "14nvp0" }],
    ["path", { d: "m10 15-3-3 3-3", key: "1pgupc" }],
  ],
  wE = qe("panel-right-open", SE);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const NE = [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ],
  fu = qe("search", NE);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jE = [
    [
      "path",
      {
        d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
        key: "1m0v6g",
      },
    ],
    [
      "path",
      {
        d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
        key: "ohrbg2",
      },
    ],
  ],
  EE = qe("square-pen", jE);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const AE = [
    [
      "path",
      {
        d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
        key: "vktsd0",
      },
    ],
    [
      "circle",
      { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" },
    ],
  ],
  TE = qe("tag", AE);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const CE = [
    ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
    ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }],
  ],
  Wi = qe("user-round", CE);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const OE = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ],
  Nu = qe("user", OE);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const RE = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Yu = qe("x", RE);
function _E() {
  const a = ns();
  return c.jsxs(c.Fragment, {
    children: [
      c.jsxs(P1, {
        children: [
          c.jsx("title", {
            children: "Page Not Found - ALAMOCITYPULSE Newspaper",
          }),
          c.jsx("meta", {
            name: "description",
            content:
              "The page you're looking for couldn't be found. Return to ALAMOCITYPULSE homepage for the latest news.",
          }),
        ],
      }),
      c.jsx("div", {
        className:
          "min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-4",
        children: c.jsxs("div", {
          className: "max-w-2xl w-full text-center space-y-8",
          children: [
            c.jsxs("div", {
              className: "relative",
              children: [
                c.jsx("div", {
                  className:
                    "text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-500 animate-pulse",
                  children: "404",
                }),
                c.jsx("div", {
                  className:
                    "absolute inset-0 text-8xl md:text-9xl font-black text-red-100 -z-10 blur-sm",
                  children: "404",
                }),
              ],
            }),
            c.jsxs("div", {
              className: "space-y-4",
              children: [
                c.jsx("h1", {
                  className:
                    "text-3xl md:text-4xl font-bold text-gray-900 leading-tight",
                  children: "Story Not Found",
                }),
                c.jsxs("div", {
                  className:
                    "border-l-4 border-red-500 pl-4 text-left max-w-md mx-auto",
                  children: [
                    c.jsx("p", {
                      className: "text-lg text-gray-700 font-medium mb-2",
                      children: "BREAKING: Page Goes Missing",
                    }),
                    c.jsx("p", {
                      className: "text-gray-600 leading-relaxed",
                      children:
                        "Our newsroom has searched high and low, but the page you're looking for seems to have vanished without a trace. It might have been moved, deleted, or perhaps it never existed in our archives.",
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              className:
                "bg-white rounded-lg shadow-lg border border-gray-200 p-6 space-y-4",
              children: [
                c.jsxs("h2", {
                  className:
                    "text-xl font-semibold text-gray-900 flex items-center justify-center gap-2",
                  children: [
                    c.jsx(fu, { className: "h-5 w-5 text-red-500" }),
                    "What You Can Do",
                  ],
                }),
                c.jsxs("div", {
                  className: "grid md:grid-cols-2 gap-4 text-sm text-gray-600",
                  children: [
                    c.jsxs("div", {
                      className: "flex items-start gap-3",
                      children: [
                        c.jsx(yv, {
                          className:
                            "h-4 w-4 text-red-500 mt-0.5 flex-shrink-0",
                        }),
                        c.jsx("span", {
                          children: "Check if the URL is spelled correctly",
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className: "flex items-start gap-3",
                      children: [
                        c.jsx(Eg, {
                          className:
                            "h-4 w-4 text-red-500 mt-0.5 flex-shrink-0",
                        }),
                        c.jsx("span", {
                          children: "Visit our homepage for latest news",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              className:
                "flex flex-col sm:flex-row gap-4 justify-center items-center",
              children: [
                c.jsxs(He, {
                  onClick: () => a("/"),
                  className:
                    "bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center gap-2",
                  children: [
                    c.jsx(Eg, { className: "h-4 w-4" }),
                    "Return to Homepage",
                  ],
                }),
                c.jsxs(He, {
                  variant: "outline",
                  onClick: () => a(-1),
                  className:
                    "border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2",
                  children: [c.jsx(Zn, { className: "h-4 w-4" }), "Go Back"],
                }),
              ],
            }),
            c.jsxs("div", {
              className:
                "border-t border-gray-200 pt-6 text-gray-500 text-sm space-y-2",
              children: [
                c.jsx("p", {
                  className: "font-semibold text-red-600",
                  children: "ALAMOCITYPULSE",
                }),
                c.jsx("p", {
                  children:
                    "Your trusted source for local news and community stories",
                }),
                c.jsx("p", {
                  className: "text-xs",
                  children: "Error Code: 404 | Page Not Found",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function $a({ className: a, type: s, ...l }) {
  return c.jsx("input", {
    type: s,
    "data-slot": "input",
    className: Le(
      "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
      "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
      a
    ),
    ...l,
  });
}
var Ul = (a) => a.type === "checkbox",
  Jn = (a) => a instanceof Date,
  _t = (a) => a == null;
const gv = (a) => typeof a == "object";
var lt = (a) => !_t(a) && !Array.isArray(a) && gv(a) && !Jn(a),
  vv = (a) =>
    lt(a) && a.target ? (Ul(a.target) ? a.target.checked : a.target.value) : a,
  DE = (a) => a.substring(0, a.search(/\.\d+(\.|$)/)) || a,
  xv = (a, s) => a.has(DE(s)),
  ME = (a) => {
    const s = a.constructor && a.constructor.prototype;
    return lt(s) && s.hasOwnProperty("isPrototypeOf");
  },
  wd =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function St(a) {
  let s;
  const l = Array.isArray(a),
    i = typeof FileList < "u" ? a instanceof FileList : !1;
  if (a instanceof Date) s = new Date(a);
  else if (a instanceof Set) s = new Set(a);
  else if (!(wd && (a instanceof Blob || i)) && (l || lt(a)))
    if (((s = l ? [] : {}), !l && !ME(a))) s = a;
    else for (const o in a) a.hasOwnProperty(o) && (s[o] = St(a[o]));
  else return a;
  return s;
}
var Fu = (a) => (Array.isArray(a) ? a.filter(Boolean) : []),
  rt = (a) => a === void 0,
  le = (a, s, l) => {
    if (!s || !lt(a)) return l;
    const i = Fu(s.split(/[,[\].]+?/)).reduce((o, f) => (_t(o) ? o : o[f]), a);
    return rt(i) || i === a ? (rt(a[s]) ? l : a[s]) : i;
  },
  Xt = (a) => typeof a == "boolean",
  Nd = (a) => /^\w*$/.test(a),
  bv = (a) => Fu(a.replace(/["|']|\]/g, "").split(/\.|\[/)),
  Xe = (a, s, l) => {
    let i = -1;
    const o = Nd(s) ? [s] : bv(s),
      f = o.length,
      h = f - 1;
    for (; ++i < f; ) {
      const m = o[i];
      let y = l;
      if (i !== h) {
        const p = a[m];
        y = lt(p) || Array.isArray(p) ? p : isNaN(+o[i + 1]) ? {} : [];
      }
      if (m === "__proto__" || m === "constructor" || m === "prototype") return;
      (a[m] = y), (a = a[m]);
    }
  };
const ju = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  ha = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  Ga = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  UE = Ce.createContext(null),
  jd = () => Ce.useContext(UE);
var Sv = (a, s, l, i = !0) => {
  const o = { defaultValues: s._defaultValues };
  for (const f in a)
    Object.defineProperty(o, f, {
      get: () => {
        const h = f;
        return (
          s._proxyFormState[h] !== ha.all &&
            (s._proxyFormState[h] = !i || ha.all),
          l && (l[h] = !0),
          a[h]
        );
      },
    });
  return o;
};
const Ed = typeof window < "u" ? b.useLayoutEffect : b.useEffect;
function zE(a) {
  const s = jd(),
    { control: l = s.control, disabled: i, name: o, exact: f } = a || {},
    [h, m] = Ce.useState(l._formState),
    y = Ce.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    });
  return (
    Ed(
      () =>
        l._subscribe({
          name: o,
          formState: y.current,
          exact: f,
          callback: (p) => {
            !i && m({ ...l._formState, ...p });
          },
        }),
      [o, i, f]
    ),
    Ce.useEffect(() => {
      y.current.isValid && l._setValid(!0);
    }, [l]),
    Ce.useMemo(() => Sv(h, l, y.current, !1), [h, l])
  );
}
var Aa = (a) => typeof a == "string",
  wv = (a, s, l, i, o) =>
    Aa(a)
      ? (i && s.watch.add(a), le(l, a, o))
      : Array.isArray(a)
      ? a.map((f) => (i && s.watch.add(f), le(l, f)))
      : (i && (s.watchAll = !0), l);
function kE(a) {
  const s = jd(),
    {
      control: l = s.control,
      name: i,
      defaultValue: o,
      disabled: f,
      exact: h,
    } = a || {},
    m = Ce.useRef(o),
    [y, p] = Ce.useState(l._getWatch(i, m.current));
  return (
    Ed(
      () =>
        l._subscribe({
          name: i,
          formState: { values: !0 },
          exact: h,
          callback: (v) =>
            !f && p(wv(i, l._names, v.values || l._formValues, !1, m.current)),
        }),
      [i, l, f, h]
    ),
    Ce.useEffect(() => l._removeUnmounted()),
    y
  );
}
function LE(a) {
  const s = jd(),
    { name: l, disabled: i, control: o = s.control, shouldUnregister: f } = a,
    h = xv(o._names.array, l),
    m = kE({
      control: o,
      name: l,
      defaultValue: le(
        o._formValues,
        l,
        le(o._defaultValues, l, a.defaultValue)
      ),
      exact: !0,
    }),
    y = zE({ control: o, name: l, exact: !0 }),
    p = Ce.useRef(a),
    v = Ce.useRef(
      o.register(l, {
        ...a.rules,
        value: m,
        ...(Xt(a.disabled) ? { disabled: a.disabled } : {}),
      })
    ),
    S = Ce.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!le(y.errors, l) },
            isDirty: { enumerable: !0, get: () => !!le(y.dirtyFields, l) },
            isTouched: { enumerable: !0, get: () => !!le(y.touchedFields, l) },
            isValidating: {
              enumerable: !0,
              get: () => !!le(y.validatingFields, l),
            },
            error: { enumerable: !0, get: () => le(y.errors, l) },
          }
        ),
      [y, l]
    ),
    w = Ce.useCallback(
      (C) =>
        v.current.onChange({
          target: { value: vv(C), name: l },
          type: ju.CHANGE,
        }),
      [l]
    ),
    O = Ce.useCallback(
      () =>
        v.current.onBlur({
          target: { value: le(o._formValues, l), name: l },
          type: ju.BLUR,
        }),
      [l, o._formValues]
    ),
    N = Ce.useCallback(
      (C) => {
        const U = le(o._fields, l);
        U &&
          C &&
          (U._f.ref = {
            focus: () => C.focus(),
            select: () => C.select(),
            setCustomValidity: (M) => C.setCustomValidity(M),
            reportValidity: () => C.reportValidity(),
          });
      },
      [o._fields, l]
    ),
    R = Ce.useMemo(
      () => ({
        name: l,
        value: m,
        ...(Xt(i) || y.disabled ? { disabled: y.disabled || i } : {}),
        onChange: w,
        onBlur: O,
        ref: N,
      }),
      [l, i, y.disabled, w, O, N, m]
    );
  return (
    Ce.useEffect(() => {
      const C = o._options.shouldUnregister || f;
      o.register(l, {
        ...p.current.rules,
        ...(Xt(p.current.disabled) ? { disabled: p.current.disabled } : {}),
      });
      const U = (M, V) => {
        const H = le(o._fields, M);
        H && H._f && (H._f.mount = V);
      };
      if ((U(l, !0), C)) {
        const M = St(le(o._options.defaultValues, l));
        Xe(o._defaultValues, l, M),
          rt(le(o._formValues, l)) && Xe(o._formValues, l, M);
      }
      return (
        !h && o.register(l),
        () => {
          (h ? C && !o._state.action : C) ? o.unregister(l) : U(l, !1);
        }
      );
    }, [l, o, h, f]),
    Ce.useEffect(() => {
      o._setDisabledField({ disabled: i, name: l });
    }, [i, l, o]),
    Ce.useMemo(() => ({ field: R, formState: y, fieldState: S }), [R, y, S])
  );
}
const Tg = (a) => a.render(LE(a));
var HE = (a, s, l, i, o) =>
    s
      ? {
          ...l[a],
          types: { ...(l[a] && l[a].types ? l[a].types : {}), [i]: o || !0 },
        }
      : {},
  bl = (a) => (Array.isArray(a) ? a : [a]),
  Cg = () => {
    let a = [];
    return {
      get observers() {
        return a;
      },
      next: (o) => {
        for (const f of a) f.next && f.next(o);
      },
      subscribe: (o) => (
        a.push(o),
        {
          unsubscribe: () => {
            a = a.filter((f) => f !== o);
          },
        }
      ),
      unsubscribe: () => {
        a = [];
      },
    };
  },
  ad = (a) => _t(a) || !gv(a);
function An(a, s) {
  if (ad(a) || ad(s)) return a === s;
  if (Jn(a) && Jn(s)) return a.getTime() === s.getTime();
  const l = Object.keys(a),
    i = Object.keys(s);
  if (l.length !== i.length) return !1;
  for (const o of l) {
    const f = a[o];
    if (!i.includes(o)) return !1;
    if (o !== "ref") {
      const h = s[o];
      if (
        (Jn(f) && Jn(h)) ||
        (lt(f) && lt(h)) ||
        (Array.isArray(f) && Array.isArray(h))
          ? !An(f, h)
          : f !== h
      )
        return !1;
    }
  }
  return !0;
}
var Rt = (a) => lt(a) && !Object.keys(a).length,
  Ad = (a) => a.type === "file",
  ma = (a) => typeof a == "function",
  Eu = (a) => {
    if (!wd) return !1;
    const s = a ? a.ownerDocument : 0;
    return (
      a instanceof
      (s && s.defaultView ? s.defaultView.HTMLElement : HTMLElement)
    );
  },
  Nv = (a) => a.type === "select-multiple",
  Td = (a) => a.type === "radio",
  qE = (a) => Td(a) || Ul(a),
  _f = (a) => Eu(a) && a.isConnected;
function BE(a, s) {
  const l = s.slice(0, -1).length;
  let i = 0;
  for (; i < l; ) a = rt(a) ? i++ : a[s[i++]];
  return a;
}
function VE(a) {
  for (const s in a) if (a.hasOwnProperty(s) && !rt(a[s])) return !1;
  return !0;
}
function dt(a, s) {
  const l = Array.isArray(s) ? s : Nd(s) ? [s] : bv(s),
    i = l.length === 1 ? a : BE(a, l),
    o = l.length - 1,
    f = l[o];
  return (
    i && delete i[f],
    o !== 0 &&
      ((lt(i) && Rt(i)) || (Array.isArray(i) && VE(i))) &&
      dt(a, l.slice(0, -1)),
    a
  );
}
var jv = (a) => {
  for (const s in a) if (ma(a[s])) return !0;
  return !1;
};
function Au(a, s = {}) {
  const l = Array.isArray(a);
  if (lt(a) || l)
    for (const i in a)
      Array.isArray(a[i]) || (lt(a[i]) && !jv(a[i]))
        ? ((s[i] = Array.isArray(a[i]) ? [] : {}), Au(a[i], s[i]))
        : _t(a[i]) || (s[i] = !0);
  return s;
}
function Ev(a, s, l) {
  const i = Array.isArray(a);
  if (lt(a) || i)
    for (const o in a)
      Array.isArray(a[o]) || (lt(a[o]) && !jv(a[o]))
        ? rt(s) || ad(l[o])
          ? (l[o] = Array.isArray(a[o]) ? Au(a[o], []) : { ...Au(a[o]) })
          : Ev(a[o], _t(s) ? {} : s[o], l[o])
        : (l[o] = !An(a[o], s[o]));
  return l;
}
var ml = (a, s) => Ev(a, s, Au(s));
const Og = { value: !1, isValid: !1 },
  Rg = { value: !0, isValid: !0 };
var Av = (a) => {
    if (Array.isArray(a)) {
      if (a.length > 1) {
        const s = a
          .filter((l) => l && l.checked && !l.disabled)
          .map((l) => l.value);
        return { value: s, isValid: !!s.length };
      }
      return a[0].checked && !a[0].disabled
        ? a[0].attributes && !rt(a[0].attributes.value)
          ? rt(a[0].value) || a[0].value === ""
            ? Rg
            : { value: a[0].value, isValid: !0 }
          : Rg
        : Og;
    }
    return Og;
  },
  Tv = (a, { valueAsNumber: s, valueAsDate: l, setValueAs: i }) =>
    rt(a)
      ? a
      : s
      ? a === ""
        ? NaN
        : a && +a
      : l && Aa(a)
      ? new Date(a)
      : i
      ? i(a)
      : a;
const _g = { isValid: !1, value: null };
var Cv = (a) =>
  Array.isArray(a)
    ? a.reduce(
        (s, l) =>
          l && l.checked && !l.disabled ? { isValid: !0, value: l.value } : s,
        _g
      )
    : _g;
function Dg(a) {
  const s = a.ref;
  return Ad(s)
    ? s.files
    : Td(s)
    ? Cv(a.refs).value
    : Nv(s)
    ? [...s.selectedOptions].map(({ value: l }) => l)
    : Ul(s)
    ? Av(a.refs).value
    : Tv(rt(s.value) ? a.ref.value : s.value, a);
}
var PE = (a, s, l, i) => {
    const o = {};
    for (const f of a) {
      const h = le(s, f);
      h && Xe(o, f, h._f);
    }
    return {
      criteriaMode: l,
      names: [...a],
      fields: o,
      shouldUseNativeValidation: i,
    };
  },
  Tu = (a) => a instanceof RegExp,
  pl = (a) =>
    rt(a)
      ? a
      : Tu(a)
      ? a.source
      : lt(a)
      ? Tu(a.value)
        ? a.value.source
        : a.value
      : a,
  Mg = (a) => ({
    isOnSubmit: !a || a === ha.onSubmit,
    isOnBlur: a === ha.onBlur,
    isOnChange: a === ha.onChange,
    isOnAll: a === ha.all,
    isOnTouch: a === ha.onTouched,
  });
const Ug = "AsyncFunction";
var YE = (a) =>
    !!a &&
    !!a.validate &&
    !!(
      (ma(a.validate) && a.validate.constructor.name === Ug) ||
      (lt(a.validate) &&
        Object.values(a.validate).find((s) => s.constructor.name === Ug))
    ),
  FE = (a) =>
    a.mount &&
    (a.required ||
      a.min ||
      a.max ||
      a.maxLength ||
      a.minLength ||
      a.pattern ||
      a.validate),
  zg = (a, s, l) =>
    !l &&
    (s.watchAll ||
      s.watch.has(a) ||
      [...s.watch].some(
        (i) => a.startsWith(i) && /^\.\w+/.test(a.slice(i.length))
      ));
const Sl = (a, s, l, i) => {
  for (const o of l || Object.keys(a)) {
    const f = le(a, o);
    if (f) {
      const { _f: h, ...m } = f;
      if (h) {
        if (h.refs && h.refs[0] && s(h.refs[0], o) && !i) return !0;
        if (h.ref && s(h.ref, h.name) && !i) return !0;
        if (Sl(m, s)) break;
      } else if (lt(m) && Sl(m, s)) break;
    }
  }
};
function kg(a, s, l) {
  const i = le(a, l);
  if (i || Nd(l)) return { error: i, name: l };
  const o = l.split(".");
  for (; o.length; ) {
    const f = o.join("."),
      h = le(s, f),
      m = le(a, f);
    if (h && !Array.isArray(h) && l !== f) return { name: l };
    if (m && m.type) return { name: f, error: m };
    o.pop();
  }
  return { name: l };
}
var GE = (a, s, l, i) => {
    l(a);
    const { name: o, ...f } = a;
    return (
      Rt(f) ||
      Object.keys(f).length >= Object.keys(s).length ||
      Object.keys(f).find((h) => s[h] === (!i || ha.all))
    );
  },
  QE = (a, s, l) =>
    !a ||
    !s ||
    a === s ||
    bl(a).some((i) => i && (l ? i === s : i.startsWith(s) || s.startsWith(i))),
  XE = (a, s, l, i, o) =>
    o.isOnAll
      ? !1
      : !l && o.isOnTouch
      ? !(s || a)
      : (l ? i.isOnBlur : o.isOnBlur)
      ? !a
      : (l ? i.isOnChange : o.isOnChange)
      ? a
      : !0,
  $E = (a, s) => !Fu(le(a, s)).length && dt(a, s),
  KE = (a, s, l) => {
    const i = bl(le(a, l));
    return Xe(i, "root", s[l]), Xe(a, l, i), a;
  },
  du = (a) => Aa(a);
function Lg(a, s, l = "validate") {
  if (du(a) || (Array.isArray(a) && a.every(du)) || (Xt(a) && !a))
    return { type: l, message: du(a) ? a : "", ref: s };
}
var Js = (a) => (lt(a) && !Tu(a) ? a : { value: a, message: "" }),
  Hg = async (a, s, l, i, o, f) => {
    const {
        ref: h,
        refs: m,
        required: y,
        maxLength: p,
        minLength: v,
        min: S,
        max: w,
        pattern: O,
        validate: N,
        name: R,
        valueAsNumber: C,
        mount: U,
      } = a._f,
      M = le(l, R);
    if (!U || s.has(R)) return {};
    const V = m ? m[0] : h,
      H = (fe) => {
        o &&
          V.reportValidity &&
          (V.setCustomValidity(Xt(fe) ? "" : fe || ""), V.reportValidity());
      },
      Y = {},
      _ = Td(h),
      K = Ul(h),
      ee = _ || K,
      ne =
        ((C || Ad(h)) && rt(h.value) && rt(M)) ||
        (Eu(h) && h.value === "") ||
        M === "" ||
        (Array.isArray(M) && !M.length),
      ye = HE.bind(null, R, i, Y),
      Me = (fe, se, me, Q = Ga.maxLength, L = Ga.minLength) => {
        const I = fe ? se : me;
        Y[R] = { type: fe ? Q : L, message: I, ref: h, ...ye(fe ? Q : L, I) };
      };
    if (
      f
        ? !Array.isArray(M) || !M.length
        : y &&
          ((!ee && (ne || _t(M))) ||
            (Xt(M) && !M) ||
            (K && !Av(m).isValid) ||
            (_ && !Cv(m).isValid))
    ) {
      const { value: fe, message: se } = du(y)
        ? { value: !!y, message: y }
        : Js(y);
      if (
        fe &&
        ((Y[R] = {
          type: Ga.required,
          message: se,
          ref: V,
          ...ye(Ga.required, se),
        }),
        !i)
      )
        return H(se), Y;
    }
    if (!ne && (!_t(S) || !_t(w))) {
      let fe, se;
      const me = Js(w),
        Q = Js(S);
      if (!_t(M) && !isNaN(M)) {
        const L = h.valueAsNumber || (M && +M);
        _t(me.value) || (fe = L > me.value), _t(Q.value) || (se = L < Q.value);
      } else {
        const L = h.valueAsDate || new Date(M),
          I = (E) => new Date(new Date().toDateString() + " " + E),
          re = h.type == "time",
          je = h.type == "week";
        Aa(me.value) &&
          M &&
          (fe = re
            ? I(M) > I(me.value)
            : je
            ? M > me.value
            : L > new Date(me.value)),
          Aa(Q.value) &&
            M &&
            (se = re
              ? I(M) < I(Q.value)
              : je
              ? M < Q.value
              : L < new Date(Q.value));
      }
      if ((fe || se) && (Me(!!fe, me.message, Q.message, Ga.max, Ga.min), !i))
        return H(Y[R].message), Y;
    }
    if ((p || v) && !ne && (Aa(M) || (f && Array.isArray(M)))) {
      const fe = Js(p),
        se = Js(v),
        me = !_t(fe.value) && M.length > +fe.value,
        Q = !_t(se.value) && M.length < +se.value;
      if ((me || Q) && (Me(me, fe.message, se.message), !i))
        return H(Y[R].message), Y;
    }
    if (O && !ne && Aa(M)) {
      const { value: fe, message: se } = Js(O);
      if (
        Tu(fe) &&
        !M.match(fe) &&
        ((Y[R] = {
          type: Ga.pattern,
          message: se,
          ref: h,
          ...ye(Ga.pattern, se),
        }),
        !i)
      )
        return H(se), Y;
    }
    if (N) {
      if (ma(N)) {
        const fe = await N(M, l),
          se = Lg(fe, V);
        if (se && ((Y[R] = { ...se, ...ye(Ga.validate, se.message) }), !i))
          return H(se.message), Y;
      } else if (lt(N)) {
        let fe = {};
        for (const se in N) {
          if (!Rt(fe) && !i) break;
          const me = Lg(await N[se](M, l), V, se);
          me &&
            ((fe = { ...me, ...ye(se, me.message) }),
            H(me.message),
            i && (Y[R] = fe));
        }
        if (!Rt(fe) && ((Y[R] = { ref: V, ...fe }), !i)) return Y;
      }
    }
    return H(!0), Y;
  };
const ZE = {
  mode: ha.onSubmit,
  reValidateMode: ha.onChange,
  shouldFocusError: !0,
};
function JE(a = {}) {
  let s = { ...ZE, ...a },
    l = {
      submitCount: 0,
      isDirty: !1,
      isReady: !1,
      isLoading: ma(s.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: s.errors || {},
      disabled: s.disabled || !1,
    };
  const i = {};
  let o =
      lt(s.defaultValues) || lt(s.values)
        ? St(s.defaultValues || s.values) || {}
        : {},
    f = s.shouldUnregister ? {} : St(o),
    h = { action: !1, mount: !1, watch: !1 },
    m = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    y,
    p = 0;
  const v = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1,
  };
  let S = { ...v };
  const w = { array: Cg(), state: Cg() },
    O = s.criteriaMode === ha.all,
    N = (A) => (q) => {
      clearTimeout(p), (p = setTimeout(A, q));
    },
    R = async (A) => {
      if (!s.disabled && (v.isValid || S.isValid || A)) {
        const q = s.resolver ? Rt((await K()).errors) : await ne(i, !0);
        q !== l.isValid && w.state.next({ isValid: q });
      }
    },
    C = (A, q) => {
      !s.disabled &&
        (v.isValidating ||
          v.validatingFields ||
          S.isValidating ||
          S.validatingFields) &&
        ((A || Array.from(m.mount)).forEach((X) => {
          X && (q ? Xe(l.validatingFields, X, q) : dt(l.validatingFields, X));
        }),
        w.state.next({
          validatingFields: l.validatingFields,
          isValidating: !Rt(l.validatingFields),
        }));
    },
    U = (A, q = [], X, ie, ae = !0, te = !0) => {
      if (ie && X && !s.disabled) {
        if (((h.action = !0), te && Array.isArray(le(i, A)))) {
          const ce = X(le(i, A), ie.argA, ie.argB);
          ae && Xe(i, A, ce);
        }
        if (te && Array.isArray(le(l.errors, A))) {
          const ce = X(le(l.errors, A), ie.argA, ie.argB);
          ae && Xe(l.errors, A, ce), $E(l.errors, A);
        }
        if (
          (v.touchedFields || S.touchedFields) &&
          te &&
          Array.isArray(le(l.touchedFields, A))
        ) {
          const ce = X(le(l.touchedFields, A), ie.argA, ie.argB);
          ae && Xe(l.touchedFields, A, ce);
        }
        (v.dirtyFields || S.dirtyFields) && (l.dirtyFields = ml(o, f)),
          w.state.next({
            name: A,
            isDirty: Me(A, q),
            dirtyFields: l.dirtyFields,
            errors: l.errors,
            isValid: l.isValid,
          });
      } else Xe(f, A, q);
    },
    M = (A, q) => {
      Xe(l.errors, A, q), w.state.next({ errors: l.errors });
    },
    V = (A) => {
      (l.errors = A), w.state.next({ errors: l.errors, isValid: !1 });
    },
    H = (A, q, X, ie) => {
      const ae = le(i, A);
      if (ae) {
        const te = le(f, A, rt(X) ? le(o, A) : X);
        rt(te) || (ie && ie.defaultChecked) || q
          ? Xe(f, A, q ? te : Dg(ae._f))
          : me(A, te),
          h.mount && R();
      }
    },
    Y = (A, q, X, ie, ae) => {
      let te = !1,
        ce = !1;
      const Se = { name: A };
      if (!s.disabled) {
        if (!X || ie) {
          (v.isDirty || S.isDirty) &&
            ((ce = l.isDirty),
            (l.isDirty = Se.isDirty = Me()),
            (te = ce !== Se.isDirty));
          const De = An(le(o, A), q);
          (ce = !!le(l.dirtyFields, A)),
            De ? dt(l.dirtyFields, A) : Xe(l.dirtyFields, A, !0),
            (Se.dirtyFields = l.dirtyFields),
            (te = te || ((v.dirtyFields || S.dirtyFields) && ce !== !De));
        }
        if (X) {
          const De = le(l.touchedFields, A);
          De ||
            (Xe(l.touchedFields, A, X),
            (Se.touchedFields = l.touchedFields),
            (te = te || ((v.touchedFields || S.touchedFields) && De !== X)));
        }
        te && ae && w.state.next(Se);
      }
      return te ? Se : {};
    },
    _ = (A, q, X, ie) => {
      const ae = le(l.errors, A),
        te = (v.isValid || S.isValid) && Xt(q) && l.isValid !== q;
      if (
        (s.delayError && X
          ? ((y = N(() => M(A, X))), y(s.delayError))
          : (clearTimeout(p),
            (y = null),
            X ? Xe(l.errors, A, X) : dt(l.errors, A)),
        (X ? !An(ae, X) : ae) || !Rt(ie) || te)
      ) {
        const ce = {
          ...ie,
          ...(te && Xt(q) ? { isValid: q } : {}),
          errors: l.errors,
          name: A,
        };
        (l = { ...l, ...ce }), w.state.next(ce);
      }
    },
    K = async (A) => {
      C(A, !0);
      const q = await s.resolver(
        f,
        s.context,
        PE(A || m.mount, i, s.criteriaMode, s.shouldUseNativeValidation)
      );
      return C(A), q;
    },
    ee = async (A) => {
      const { errors: q } = await K(A);
      if (A)
        for (const X of A) {
          const ie = le(q, X);
          ie ? Xe(l.errors, X, ie) : dt(l.errors, X);
        }
      else l.errors = q;
      return q;
    },
    ne = async (A, q, X = { valid: !0 }) => {
      for (const ie in A) {
        const ae = A[ie];
        if (ae) {
          const { _f: te, ...ce } = ae;
          if (te) {
            const Se = m.array.has(te.name),
              De = ae._f && YE(ae._f);
            De && v.validatingFields && C([ie], !0);
            const $e = await Hg(
              ae,
              m.disabled,
              f,
              O,
              s.shouldUseNativeValidation && !q,
              Se
            );
            if (
              (De && v.validatingFields && C([ie]),
              $e[te.name] && ((X.valid = !1), q))
            )
              break;
            !q &&
              (le($e, te.name)
                ? Se
                  ? KE(l.errors, $e, te.name)
                  : Xe(l.errors, te.name, $e[te.name])
                : dt(l.errors, te.name));
          }
          !Rt(ce) && (await ne(ce, q, X));
        }
      }
      return X.valid;
    },
    ye = () => {
      for (const A of m.unMount) {
        const q = le(i, A);
        q &&
          (q._f.refs ? q._f.refs.every((X) => !_f(X)) : !_f(q._f.ref)) &&
          gt(A);
      }
      m.unMount = new Set();
    },
    Me = (A, q) => !s.disabled && (A && q && Xe(f, A, q), !An(E(), o)),
    fe = (A, q, X) =>
      wv(A, m, { ...(h.mount ? f : rt(q) ? o : Aa(A) ? { [A]: q } : q) }, X, q),
    se = (A) =>
      Fu(le(h.mount ? f : o, A, s.shouldUnregister ? le(o, A, []) : [])),
    me = (A, q, X = {}) => {
      const ie = le(i, A);
      let ae = q;
      if (ie) {
        const te = ie._f;
        te &&
          (!te.disabled && Xe(f, A, Tv(q, te)),
          (ae = Eu(te.ref) && _t(q) ? "" : q),
          Nv(te.ref)
            ? [...te.ref.options].forEach(
                (ce) => (ce.selected = ae.includes(ce.value))
              )
            : te.refs
            ? Ul(te.ref)
              ? te.refs.forEach((ce) => {
                  (!ce.defaultChecked || !ce.disabled) &&
                    (Array.isArray(ae)
                      ? (ce.checked = !!ae.find((Se) => Se === ce.value))
                      : (ce.checked = ae === ce.value || !!ae));
                })
              : te.refs.forEach((ce) => (ce.checked = ce.value === ae))
            : Ad(te.ref)
            ? (te.ref.value = "")
            : ((te.ref.value = ae),
              te.ref.type || w.state.next({ name: A, values: St(f) })));
      }
      (X.shouldDirty || X.shouldTouch) &&
        Y(A, ae, X.shouldTouch, X.shouldDirty, !0),
        X.shouldValidate && je(A);
    },
    Q = (A, q, X) => {
      for (const ie in q) {
        if (!q.hasOwnProperty(ie)) return;
        const ae = q[ie],
          te = `${A}.${ie}`,
          ce = le(i, te);
        (m.array.has(A) || lt(ae) || (ce && !ce._f)) && !Jn(ae)
          ? Q(te, ae, X)
          : me(te, ae, X);
      }
    },
    L = (A, q, X = {}) => {
      const ie = le(i, A),
        ae = m.array.has(A),
        te = St(q);
      Xe(f, A, te),
        ae
          ? (w.array.next({ name: A, values: St(f) }),
            (v.isDirty || v.dirtyFields || S.isDirty || S.dirtyFields) &&
              X.shouldDirty &&
              w.state.next({
                name: A,
                dirtyFields: ml(o, f),
                isDirty: Me(A, te),
              }))
          : ie && !ie._f && !_t(te)
          ? Q(A, te, X)
          : me(A, te, X),
        zg(A, m) && w.state.next({ ...l }),
        w.state.next({ name: h.mount ? A : void 0, values: St(f) });
    },
    I = async (A) => {
      h.mount = !0;
      const q = A.target;
      let X = q.name,
        ie = !0;
      const ae = le(i, X),
        te = (De) => {
          ie =
            Number.isNaN(De) ||
            (Jn(De) && isNaN(De.getTime())) ||
            An(De, le(f, X, De));
        },
        ce = Mg(s.mode),
        Se = Mg(s.reValidateMode);
      if (ae) {
        let De, $e;
        const cs = q.type ? Dg(ae._f) : vv(A),
          va = A.type === ju.BLUR || A.type === ju.FOCUS_OUT,
          Ku =
            (!FE(ae._f) && !s.resolver && !le(l.errors, X) && !ae._f.deps) ||
            XE(va, le(l.touchedFields, X), l.isSubmitted, Se, ce),
          Ia = zg(X, m, va);
        Xe(f, X, cs),
          va
            ? (ae._f.onBlur && ae._f.onBlur(A), y && y(0))
            : ae._f.onChange && ae._f.onChange(A);
        const Wa = Y(X, cs, va),
          Ca = !Rt(Wa) || Ia;
        if ((!va && w.state.next({ name: X, type: A.type, values: St(f) }), Ku))
          return (
            (v.isValid || S.isValid) &&
              (s.mode === "onBlur" ? va && R() : va || R()),
            Ca && w.state.next({ name: X, ...(Ia ? {} : Wa) })
          );
        if ((!va && Ia && w.state.next({ ...l }), s.resolver)) {
          const { errors: On } = await K([X]);
          if ((te(cs), ie)) {
            const Rn = kg(l.errors, i, X),
              Ll = kg(On, i, Rn.name || X);
            (De = Ll.error), (X = Ll.name), ($e = Rt(On));
          }
        } else
          C([X], !0),
            (De = (await Hg(ae, m.disabled, f, O, s.shouldUseNativeValidation))[
              X
            ]),
            C([X]),
            te(cs),
            ie &&
              (De
                ? ($e = !1)
                : (v.isValid || S.isValid) && ($e = await ne(i, !0)));
        ie && (ae._f.deps && je(ae._f.deps), _(X, $e, De, Wa));
      }
    },
    re = (A, q) => {
      if (le(l.errors, q) && A.focus) return A.focus(), 1;
    },
    je = async (A, q = {}) => {
      let X, ie;
      const ae = bl(A);
      if (s.resolver) {
        const te = await ee(rt(A) ? A : ae);
        (X = Rt(te)), (ie = A ? !ae.some((ce) => le(te, ce)) : X);
      } else
        A
          ? ((ie = (
              await Promise.all(
                ae.map(async (te) => {
                  const ce = le(i, te);
                  return await ne(ce && ce._f ? { [te]: ce } : ce);
                })
              )
            ).every(Boolean)),
            !(!ie && !l.isValid) && R())
          : (ie = X = await ne(i));
      return (
        w.state.next({
          ...(!Aa(A) || ((v.isValid || S.isValid) && X !== l.isValid)
            ? {}
            : { name: A }),
          ...(s.resolver || !A ? { isValid: X } : {}),
          errors: l.errors,
        }),
        q.shouldFocus && !ie && Sl(i, re, A ? ae : m.mount),
        ie
      );
    },
    E = (A) => {
      const q = { ...(h.mount ? f : o) };
      return rt(A) ? q : Aa(A) ? le(q, A) : A.map((X) => le(q, X));
    },
    J = (A, q) => ({
      invalid: !!le((q || l).errors, A),
      isDirty: !!le((q || l).dirtyFields, A),
      error: le((q || l).errors, A),
      isValidating: !!le(l.validatingFields, A),
      isTouched: !!le((q || l).touchedFields, A),
    }),
    ue = (A) => {
      A && bl(A).forEach((q) => dt(l.errors, q)),
        w.state.next({ errors: A ? l.errors : {} });
    },
    W = (A, q, X) => {
      const ie = (le(i, A, { _f: {} })._f || {}).ref,
        ae = le(l.errors, A) || {},
        { ref: te, message: ce, type: Se, ...De } = ae;
      Xe(l.errors, A, { ...De, ...q, ref: ie }),
        w.state.next({ name: A, errors: l.errors, isValid: !1 }),
        X && X.shouldFocus && ie && ie.focus && ie.focus();
    },
    de = (A, q) =>
      ma(A)
        ? w.state.subscribe({ next: (X) => A(fe(void 0, q), X) })
        : fe(A, q, !0),
    _e = (A) =>
      w.state.subscribe({
        next: (q) => {
          QE(A.name, q.name, A.exact) &&
            GE(q, A.formState || v, Kt, A.reRenderRoot) &&
            A.callback({ values: { ...f }, ...l, ...q });
        },
      }).unsubscribe,
    be = (A) => (
      (h.mount = !0), (S = { ...S, ...A.formState }), _e({ ...A, formState: S })
    ),
    gt = (A, q = {}) => {
      for (const X of A ? bl(A) : m.mount)
        m.mount.delete(X),
          m.array.delete(X),
          q.keepValue || (dt(i, X), dt(f, X)),
          !q.keepError && dt(l.errors, X),
          !q.keepDirty && dt(l.dirtyFields, X),
          !q.keepTouched && dt(l.touchedFields, X),
          !q.keepIsValidating && dt(l.validatingFields, X),
          !s.shouldUnregister && !q.keepDefaultValue && dt(o, X);
      w.state.next({ values: St(f) }),
        w.state.next({ ...l, ...(q.keepDirty ? { isDirty: Me() } : {}) }),
        !q.keepIsValid && R();
    },
    Ge = ({ disabled: A, name: q }) => {
      ((Xt(A) && h.mount) || A || m.disabled.has(q)) &&
        (A ? m.disabled.add(q) : m.disabled.delete(q));
    },
    $t = (A, q = {}) => {
      let X = le(i, A);
      const ie = Xt(q.disabled) || Xt(s.disabled);
      return (
        Xe(i, A, {
          ...(X || {}),
          _f: {
            ...(X && X._f ? X._f : { ref: { name: A } }),
            name: A,
            mount: !0,
            ...q,
          },
        }),
        m.mount.add(A),
        X
          ? Ge({ disabled: Xt(q.disabled) ? q.disabled : s.disabled, name: A })
          : H(A, !0, q.value),
        {
          ...(ie ? { disabled: q.disabled || s.disabled } : {}),
          ...(s.progressive
            ? {
                required: !!q.required,
                min: pl(q.min),
                max: pl(q.max),
                minLength: pl(q.minLength),
                maxLength: pl(q.maxLength),
                pattern: pl(q.pattern),
              }
            : {}),
          name: A,
          onChange: I,
          onBlur: I,
          ref: (ae) => {
            if (ae) {
              $t(A, q), (X = le(i, A));
              const te =
                  (rt(ae.value) &&
                    ae.querySelectorAll &&
                    ae.querySelectorAll("input,select,textarea")[0]) ||
                  ae,
                ce = qE(te),
                Se = X._f.refs || [];
              if (ce ? Se.find((De) => De === te) : te === X._f.ref) return;
              Xe(i, A, {
                _f: {
                  ...X._f,
                  ...(ce
                    ? {
                        refs: [
                          ...Se.filter(_f),
                          te,
                          ...(Array.isArray(le(o, A)) ? [{}] : []),
                        ],
                        ref: { type: te.type, name: A },
                      }
                    : { ref: te }),
                },
              }),
                H(A, !1, void 0, te);
            } else
              (X = le(i, A, {})),
                X._f && (X._f.mount = !1),
                (s.shouldUnregister || q.shouldUnregister) &&
                  !(xv(m.array, A) && h.action) &&
                  m.unMount.add(A);
          },
        }
      );
    },
    ls = () => s.shouldFocusError && Sl(i, re, m.mount),
    is = (A) => {
      Xt(A) &&
        (w.state.next({ disabled: A }),
        Sl(
          i,
          (q, X) => {
            const ie = le(i, X);
            ie &&
              ((q.disabled = ie._f.disabled || A),
              Array.isArray(ie._f.refs) &&
                ie._f.refs.forEach((ae) => {
                  ae.disabled = ie._f.disabled || A;
                }));
          },
          0,
          !1
        ));
    },
    us = (A, q) => async (X) => {
      let ie;
      X && (X.preventDefault && X.preventDefault(), X.persist && X.persist());
      let ae = St(f);
      if ((w.state.next({ isSubmitting: !0 }), s.resolver)) {
        const { errors: te, values: ce } = await K();
        (l.errors = te), (ae = ce);
      } else await ne(i);
      if (m.disabled.size) for (const te of m.disabled) Xe(ae, te, void 0);
      if ((dt(l.errors, "root"), Rt(l.errors))) {
        w.state.next({ errors: {} });
        try {
          await A(ae, X);
        } catch (te) {
          ie = te;
        }
      } else q && (await q({ ...l.errors }, X)), ls(), setTimeout(ls);
      if (
        (w.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Rt(l.errors) && !ie,
          submitCount: l.submitCount + 1,
          errors: l.errors,
        }),
        ie)
      )
        throw ie;
    },
    cr = (A, q = {}) => {
      le(i, A) &&
        (rt(q.defaultValue)
          ? L(A, St(le(o, A)))
          : (L(A, q.defaultValue), Xe(o, A, St(q.defaultValue))),
        q.keepTouched || dt(l.touchedFields, A),
        q.keepDirty ||
          (dt(l.dirtyFields, A),
          (l.isDirty = q.defaultValue ? Me(A, St(le(o, A))) : Me())),
        q.keepError || (dt(l.errors, A), v.isValid && R()),
        w.state.next({ ...l }));
    },
    os = (A, q = {}) => {
      const X = A ? St(A) : o,
        ie = St(X),
        ae = Rt(A),
        te = ae ? o : ie;
      if ((q.keepDefaultValues || (o = X), !q.keepValues)) {
        if (q.keepDirtyValues) {
          const ce = new Set([...m.mount, ...Object.keys(ml(o, f))]);
          for (const Se of Array.from(ce))
            le(l.dirtyFields, Se) ? Xe(te, Se, le(f, Se)) : L(Se, le(te, Se));
        } else {
          if (wd && rt(A))
            for (const ce of m.mount) {
              const Se = le(i, ce);
              if (Se && Se._f) {
                const De = Array.isArray(Se._f.refs)
                  ? Se._f.refs[0]
                  : Se._f.ref;
                if (Eu(De)) {
                  const $e = De.closest("form");
                  if ($e) {
                    $e.reset();
                    break;
                  }
                }
              }
            }
          for (const ce of m.mount) L(ce, le(te, ce));
        }
        (f = St(te)),
          w.array.next({ values: { ...te } }),
          w.state.next({ values: { ...te } });
      }
      (m = {
        mount: q.keepDirtyValues ? m.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (h.mount = !v.isValid || !!q.keepIsValid || !!q.keepDirtyValues),
        (h.watch = !!s.shouldUnregister),
        w.state.next({
          submitCount: q.keepSubmitCount ? l.submitCount : 0,
          isDirty: ae
            ? !1
            : q.keepDirty
            ? l.isDirty
            : !!(q.keepDefaultValues && !An(A, o)),
          isSubmitted: q.keepIsSubmitted ? l.isSubmitted : !1,
          dirtyFields: ae
            ? {}
            : q.keepDirtyValues
            ? q.keepDefaultValues && f
              ? ml(o, f)
              : l.dirtyFields
            : q.keepDefaultValues && A
            ? ml(o, A)
            : q.keepDirty
            ? l.dirtyFields
            : {},
          touchedFields: q.keepTouched ? l.touchedFields : {},
          errors: q.keepErrors ? l.errors : {},
          isSubmitSuccessful: q.keepIsSubmitSuccessful
            ? l.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    kl = (A, q) => os(ma(A) ? A(f) : A, q),
    $u = (A, q = {}) => {
      const X = le(i, A),
        ie = X && X._f;
      if (ie) {
        const ae = ie.refs ? ie.refs[0] : ie.ref;
        ae.focus &&
          (ae.focus(), q.shouldSelect && ma(ae.select) && ae.select());
      }
    },
    Kt = (A) => {
      l = { ...l, ...A };
    },
    fr = {
      control: {
        register: $t,
        unregister: gt,
        getFieldState: J,
        handleSubmit: us,
        setError: W,
        _subscribe: _e,
        _runSchema: K,
        _getWatch: fe,
        _getDirty: Me,
        _setValid: R,
        _setFieldArray: U,
        _setDisabledField: Ge,
        _setErrors: V,
        _getFieldArray: se,
        _reset: os,
        _resetDefaultValues: () =>
          ma(s.defaultValues) &&
          s.defaultValues().then((A) => {
            kl(A, s.resetOptions), w.state.next({ isLoading: !1 });
          }),
        _removeUnmounted: ye,
        _disableForm: is,
        _subjects: w,
        _proxyFormState: v,
        get _fields() {
          return i;
        },
        get _formValues() {
          return f;
        },
        get _state() {
          return h;
        },
        set _state(A) {
          h = A;
        },
        get _defaultValues() {
          return o;
        },
        get _names() {
          return m;
        },
        set _names(A) {
          m = A;
        },
        get _formState() {
          return l;
        },
        get _options() {
          return s;
        },
        set _options(A) {
          s = { ...s, ...A };
        },
      },
      subscribe: be,
      trigger: je,
      register: $t,
      handleSubmit: us,
      watch: de,
      setValue: L,
      getValues: E,
      reset: kl,
      resetField: cr,
      clearErrors: ue,
      unregister: gt,
      setError: W,
      setFocus: $u,
      getFieldState: J,
    };
  return { ...fr, formControl: fr };
}
function Ov(a = {}) {
  const s = Ce.useRef(void 0),
    l = Ce.useRef(void 0),
    [i, o] = Ce.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: ma(a.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: a.errors || {},
      disabled: a.disabled || !1,
      isReady: !1,
      defaultValues: ma(a.defaultValues) ? void 0 : a.defaultValues,
    });
  s.current ||
    ((s.current = { ...(a.formControl ? a.formControl : JE(a)), formState: i }),
    a.formControl &&
      a.defaultValues &&
      !ma(a.defaultValues) &&
      a.formControl.reset(a.defaultValues, a.resetOptions));
  const f = s.current.control;
  return (
    (f._options = a),
    Ed(() => {
      const h = f._subscribe({
        formState: f._proxyFormState,
        callback: () => o({ ...f._formState }),
        reRenderRoot: !0,
      });
      return o((m) => ({ ...m, isReady: !0 })), (f._formState.isReady = !0), h;
    }, [f]),
    Ce.useEffect(() => f._disableForm(a.disabled), [f, a.disabled]),
    Ce.useEffect(() => {
      a.mode && (f._options.mode = a.mode),
        a.reValidateMode && (f._options.reValidateMode = a.reValidateMode),
        a.errors && !Rt(a.errors) && f._setErrors(a.errors);
    }, [f, a.errors, a.mode, a.reValidateMode]),
    Ce.useEffect(() => {
      a.shouldUnregister && f._subjects.state.next({ values: f._getWatch() });
    }, [f, a.shouldUnregister]),
    Ce.useEffect(() => {
      if (f._proxyFormState.isDirty) {
        const h = f._getDirty();
        h !== i.isDirty && f._subjects.state.next({ isDirty: h });
      }
    }, [f, i.isDirty]),
    Ce.useEffect(() => {
      a.values && !An(a.values, l.current)
        ? (f._reset(a.values, f._options.resetOptions),
          (l.current = a.values),
          o((h) => ({ ...h })))
        : f._resetDefaultValues();
    }, [f, a.values]),
    Ce.useEffect(() => {
      f._state.mount || (f._setValid(), (f._state.mount = !0)),
        f._state.watch &&
          ((f._state.watch = !1), f._subjects.state.next({ ...f._formState })),
        f._removeUnmounted();
    }),
    (s.current.formState = Sv(i, f)),
    s.current
  );
}
function IE(a, s = []) {
  let l = [];
  function i(f, h) {
    const m = b.createContext(h),
      y = l.length;
    l = [...l, h];
    const p = (S) => {
      const { scope: w, children: O, ...N } = S,
        R = w?.[a]?.[y] || m,
        C = b.useMemo(() => N, Object.values(N));
      return c.jsx(R.Provider, { value: C, children: O });
    };
    p.displayName = f + "Provider";
    function v(S, w) {
      const O = w?.[a]?.[y] || m,
        N = b.useContext(O);
      if (N) return N;
      if (h !== void 0) return h;
      throw new Error(`\`${S}\` must be used within \`${f}\``);
    }
    return [p, v];
  }
  const o = () => {
    const f = l.map((h) => b.createContext(h));
    return function (m) {
      const y = m?.[a] || f;
      return b.useMemo(() => ({ [`__scope${a}`]: { ...m, [a]: y } }), [m, y]);
    };
  };
  return (o.scopeName = a), [i, WE(o, ...s)];
}
function WE(...a) {
  const s = a[0];
  if (a.length === 1) return s;
  const l = () => {
    const i = a.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (f) {
      const h = i.reduce((m, { useScope: y, scopeName: p }) => {
        const S = y(f)[`__scope${p}`];
        return { ...m, ...S };
      }, {});
      return b.useMemo(() => ({ [`__scope${s.scopeName}`]: h }), [h]);
    };
  };
  return (l.scopeName = s.scopeName), l;
}
function qg(a, s, { checkForDefaultPrevented: l = !0 } = {}) {
  return function (o) {
    if ((a?.(o), l === !1 || !o.defaultPrevented)) return s?.(o);
  };
}
var Cu = globalThis?.document ? b.useLayoutEffect : () => {},
  eA = u1[" useInsertionEffect ".trim().toString()] || Cu;
function tA({ prop: a, defaultProp: s, onChange: l = () => {}, caller: i }) {
  const [o, f, h] = aA({ defaultProp: s, onChange: l }),
    m = a !== void 0,
    y = m ? a : o;
  {
    const v = b.useRef(a !== void 0);
    b.useEffect(() => {
      const S = v.current;
      S !== m &&
        console.warn(
          `${i} is changing from ${S ? "controlled" : "uncontrolled"} to ${
            m ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (v.current = m);
    }, [m, i]);
  }
  const p = b.useCallback(
    (v) => {
      if (m) {
        const S = nA(v) ? v(a) : v;
        S !== a && h.current?.(S);
      } else f(v);
    },
    [m, a, f, h]
  );
  return [y, p];
}
function aA({ defaultProp: a, onChange: s }) {
  const [l, i] = b.useState(a),
    o = b.useRef(l),
    f = b.useRef(s);
  return (
    eA(() => {
      f.current = s;
    }, [s]),
    b.useEffect(() => {
      o.current !== l && (f.current?.(l), (o.current = l));
    }, [l, o]),
    [l, i, f]
  );
}
function nA(a) {
  return typeof a == "function";
}
function sA(a) {
  const s = b.useRef({ value: a, previous: a });
  return b.useMemo(
    () => (
      s.current.value !== a &&
        ((s.current.previous = s.current.value), (s.current.value = a)),
      s.current.previous
    ),
    [a]
  );
}
function rA(a) {
  const [s, l] = b.useState(void 0);
  return (
    Cu(() => {
      if (a) {
        l({ width: a.offsetWidth, height: a.offsetHeight });
        const i = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const f = o[0];
          let h, m;
          if ("borderBoxSize" in f) {
            const y = f.borderBoxSize,
              p = Array.isArray(y) ? y[0] : y;
            (h = p.inlineSize), (m = p.blockSize);
          } else (h = a.offsetWidth), (m = a.offsetHeight);
          l({ width: h, height: m });
        });
        return i.observe(a, { box: "border-box" }), () => i.unobserve(a);
      } else l(void 0);
    }, [a]),
    s
  );
}
function lA(a, s) {
  return b.useReducer((l, i) => s[l][i] ?? l, a);
}
var Rv = (a) => {
  const { present: s, children: l } = a,
    i = iA(s),
    o =
      typeof l == "function" ? l({ present: i.isPresent }) : b.Children.only(l),
    f = xd(i.ref, uA(o));
  return typeof l == "function" || i.isPresent
    ? b.cloneElement(o, { ref: f })
    : null;
};
Rv.displayName = "Presence";
function iA(a) {
  const [s, l] = b.useState(),
    i = b.useRef(null),
    o = b.useRef(a),
    f = b.useRef("none"),
    h = a ? "mounted" : "unmounted",
    [m, y] = lA(h, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    b.useEffect(() => {
      const p = eu(i.current);
      f.current = m === "mounted" ? p : "none";
    }, [m]),
    Cu(() => {
      const p = i.current,
        v = o.current;
      if (v !== a) {
        const w = f.current,
          O = eu(p);
        a
          ? y("MOUNT")
          : O === "none" || p?.display === "none"
          ? y("UNMOUNT")
          : y(v && w !== O ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = a);
      }
    }, [a, y]),
    Cu(() => {
      if (s) {
        let p;
        const v = s.ownerDocument.defaultView ?? window,
          S = (O) => {
            const R = eu(i.current).includes(O.animationName);
            if (O.target === s && R && (y("ANIMATION_END"), !o.current)) {
              const C = s.style.animationFillMode;
              (s.style.animationFillMode = "forwards"),
                (p = v.setTimeout(() => {
                  s.style.animationFillMode === "forwards" &&
                    (s.style.animationFillMode = C);
                }));
            }
          },
          w = (O) => {
            O.target === s && (f.current = eu(i.current));
          };
        return (
          s.addEventListener("animationstart", w),
          s.addEventListener("animationcancel", S),
          s.addEventListener("animationend", S),
          () => {
            v.clearTimeout(p),
              s.removeEventListener("animationstart", w),
              s.removeEventListener("animationcancel", S),
              s.removeEventListener("animationend", S);
          }
        );
      } else y("ANIMATION_END");
    }, [s, y]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(m),
      ref: b.useCallback((p) => {
        (i.current = p ? getComputedStyle(p) : null), l(p);
      }, []),
    }
  );
}
function eu(a) {
  return a?.animationName || "none";
}
function uA(a) {
  let s = Object.getOwnPropertyDescriptor(a.props, "ref")?.get,
    l = s && "isReactWarning" in s && s.isReactWarning;
  return l
    ? a.ref
    : ((s = Object.getOwnPropertyDescriptor(a, "ref")?.get),
      (l = s && "isReactWarning" in s && s.isReactWarning),
      l ? a.props.ref : a.props.ref || a.ref);
}
var oA = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  zl = oA.reduce((a, s) => {
    const l = uv(`Primitive.${s}`),
      i = b.forwardRef((o, f) => {
        const { asChild: h, ...m } = o,
          y = h ? l : s;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          c.jsx(y, { ...m, ref: f })
        );
      });
    return (i.displayName = `Primitive.${s}`), { ...a, [s]: i };
  }, {});
function xT(a, s) {
  a && dd.flushSync(() => a.dispatchEvent(s));
}
var Gu = "Checkbox",
  [cA, bT] = IE(Gu),
  [fA, Cd] = cA(Gu);
function dA(a) {
  const {
      __scopeCheckbox: s,
      checked: l,
      children: i,
      defaultChecked: o,
      disabled: f,
      form: h,
      name: m,
      onCheckedChange: y,
      required: p,
      value: v = "on",
      internal_do_not_use_render: S,
    } = a,
    [w, O] = tA({ prop: l, defaultProp: o ?? !1, onChange: y, caller: Gu }),
    [N, R] = b.useState(null),
    [C, U] = b.useState(null),
    M = b.useRef(!1),
    V = N ? !!h || !!N.closest("form") : !0,
    H = {
      checked: w,
      disabled: f,
      setChecked: O,
      control: N,
      setControl: R,
      name: m,
      form: h,
      value: v,
      hasConsumerStoppedPropagationRef: M,
      required: p,
      defaultChecked: Tn(o) ? !1 : o,
      isFormControl: V,
      bubbleInput: C,
      setBubbleInput: U,
    };
  return c.jsx(fA, { scope: s, ...H, children: hA(S) ? S(H) : i });
}
var _v = "CheckboxTrigger",
  Dv = b.forwardRef(
    ({ __scopeCheckbox: a, onKeyDown: s, onClick: l, ...i }, o) => {
      const {
          control: f,
          value: h,
          disabled: m,
          checked: y,
          required: p,
          setControl: v,
          setChecked: S,
          hasConsumerStoppedPropagationRef: w,
          isFormControl: O,
          bubbleInput: N,
        } = Cd(_v, a),
        R = xd(o, v),
        C = b.useRef(y);
      return (
        b.useEffect(() => {
          const U = f?.form;
          if (U) {
            const M = () => S(C.current);
            return (
              U.addEventListener("reset", M),
              () => U.removeEventListener("reset", M)
            );
          }
        }, [f, S]),
        c.jsx(zl.button, {
          type: "button",
          role: "checkbox",
          "aria-checked": Tn(y) ? "mixed" : y,
          "aria-required": p,
          "data-state": Hv(y),
          "data-disabled": m ? "" : void 0,
          disabled: m,
          value: h,
          ...i,
          ref: R,
          onKeyDown: qg(s, (U) => {
            U.key === "Enter" && U.preventDefault();
          }),
          onClick: qg(l, (U) => {
            S((M) => (Tn(M) ? !0 : !M)),
              N &&
                O &&
                ((w.current = U.isPropagationStopped()),
                w.current || U.stopPropagation());
          }),
        })
      );
    }
  );
Dv.displayName = _v;
var Mv = b.forwardRef((a, s) => {
  const {
    __scopeCheckbox: l,
    name: i,
    checked: o,
    defaultChecked: f,
    required: h,
    disabled: m,
    value: y,
    onCheckedChange: p,
    form: v,
    ...S
  } = a;
  return c.jsx(dA, {
    __scopeCheckbox: l,
    checked: o,
    defaultChecked: f,
    disabled: m,
    required: h,
    onCheckedChange: p,
    name: i,
    form: v,
    value: y,
    internal_do_not_use_render: ({ isFormControl: w }) =>
      c.jsxs(c.Fragment, {
        children: [
          c.jsx(Dv, { ...S, ref: s, __scopeCheckbox: l }),
          w && c.jsx(Lv, { __scopeCheckbox: l }),
        ],
      }),
  });
});
Mv.displayName = Gu;
var Uv = "CheckboxIndicator",
  zv = b.forwardRef((a, s) => {
    const { __scopeCheckbox: l, forceMount: i, ...o } = a,
      f = Cd(Uv, l);
    return c.jsx(Rv, {
      present: i || Tn(f.checked) || f.checked === !0,
      children: c.jsx(zl.span, {
        "data-state": Hv(f.checked),
        "data-disabled": f.disabled ? "" : void 0,
        ...o,
        ref: s,
        style: { pointerEvents: "none", ...a.style },
      }),
    });
  });
zv.displayName = Uv;
var kv = "CheckboxBubbleInput",
  Lv = b.forwardRef(({ __scopeCheckbox: a, ...s }, l) => {
    const {
        control: i,
        hasConsumerStoppedPropagationRef: o,
        checked: f,
        defaultChecked: h,
        required: m,
        disabled: y,
        name: p,
        value: v,
        form: S,
        bubbleInput: w,
        setBubbleInput: O,
      } = Cd(kv, a),
      N = xd(l, O),
      R = sA(f),
      C = rA(i);
    b.useEffect(() => {
      const M = w;
      if (!M) return;
      const V = window.HTMLInputElement.prototype,
        Y = Object.getOwnPropertyDescriptor(V, "checked").set,
        _ = !o.current;
      if (R !== f && Y) {
        const K = new Event("click", { bubbles: _ });
        (M.indeterminate = Tn(f)),
          Y.call(M, Tn(f) ? !1 : f),
          M.dispatchEvent(K);
      }
    }, [w, R, f, o]);
    const U = b.useRef(Tn(f) ? !1 : f);
    return c.jsx(zl.input, {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: h ?? U.current,
      required: m,
      disabled: y,
      name: p,
      value: v,
      form: S,
      ...s,
      tabIndex: -1,
      ref: N,
      style: {
        ...s.style,
        ...C,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0,
        transform: "translateX(-100%)",
      },
    });
  });
Lv.displayName = kv;
function hA(a) {
  return typeof a == "function";
}
function Tn(a) {
  return a === "indeterminate";
}
function Hv(a) {
  return Tn(a) ? "indeterminate" : a ? "checked" : "unchecked";
}
function Bg({ className: a, ...s }) {
  return c.jsx(Mv, {
    "data-slot": "checkbox",
    className: Le(
      "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
      a
    ),
    ...s,
    children: c.jsx(zv, {
      "data-slot": "checkbox-indicator",
      className:
        "flex items-center justify-center text-current transition-none",
      children: c.jsx(Zj, { className: "size-3.5" }),
    }),
  });
}
var mA = "Label",
  qv = b.forwardRef((a, s) =>
    c.jsx(zl.label, {
      ...a,
      ref: s,
      onMouseDown: (l) => {
        l.target.closest("button, input, select, textarea") ||
          (a.onMouseDown?.(l),
          !l.defaultPrevented && l.detail > 1 && l.preventDefault());
      },
    })
  );
qv.displayName = mA;
var pA = qv;
function Xa({ className: a, ...s }) {
  return c.jsx(pA, {
    "data-slot": "label",
    className: Le(
      "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      a
    ),
    ...s,
  });
}
function Qu({ isOpen: a, onClose: s, children: l, className: i = "" }) {
  return a
    ? dd.createPortal(
        c.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            c.jsx("div", {
              className: "absolute inset-0 bg-[#2626268A] backdrop-blur-[20px]",
              onClick: s,
            }),
            c.jsx("div", { className: `relative z-10 ${i}`, children: l }),
          ],
        }),
        document.body
      )
    : null;
}
function Xu({ children: a, onClose: s, className: l = "" }) {
  return c.jsxs("div", {
    className: `rounded-lg text-white max-w-md w-full mx-4 ${l}`,
    children: [
      c.jsx("button", {
        onClick: s,
        className:
          "absolute top-4 right-4 z-20 p-1  rounded-full hover:bg-gray-100",
        "aria-label": "Close modal",
        children: c.jsx(Yu, { size: 20, className: "text-red-500 " }),
      }),
      a,
    ],
  });
}
function yA({ isOpen: a, onClose: s, email: l, type: i, onVerified: o }) {
  const [f, h] = b.useState(["", "", "", "", "", ""]),
    [m, y] = b.useState(60),
    [p, v] = b.useState(!1),
    S = b.useRef([]);
  b.useEffect(() => {
    if (m > 0) {
      const _ = setTimeout(() => y(m - 1), 1e3);
      return () => clearTimeout(_);
    } else v(!0);
  }, [m]),
    b.useEffect(() => {
      a &&
        (h(["", "", "", "", "", ""]),
        y(60),
        v(!1),
        setTimeout(() => {
          S.current[0] && S.current[0].focus();
        }, 100));
    }, [a]);
  const w = vu({
      mutationFn: (_) => dj({ email: l, otp: _, type: i }),
      onSuccess: (_) => {
        Te.success("OTP verified successfully!"), o();
      },
      onError: (_) => {
        console.error("OTP Verification Error:", _),
          Te.error(_.message || "Invalid OTP. Please try again."),
          h(["", "", "", "", "", ""]),
          S.current[0] && S.current[0].focus();
      },
    }),
    O = vu({
      mutationFn: () => pj({ email: l, type: i }),
      onSuccess: () => {
        Te.success("OTP sent successfully!"),
          y(60),
          v(!1),
          h(["", "", "", "", "", ""]),
          S.current[0] && S.current[0].focus();
      },
      onError: (_) => {
        console.error("OTP Resend Error:", {
          action: "otp-resend-failed",
          email: l,
          type: i,
          error: _.message,
          timestamp: new Date().toISOString(),
        }),
          Te.error(_.message || "Failed to resend OTP. Please try again.");
      },
    }),
    N = (_, K) => {
      if (K.length > 1 || !/^\d*$/.test(K)) return;
      const ee = [...f];
      if (
        ((ee[_] = K),
        h(ee),
        K && _ < 5 && S.current[_ + 1]?.focus(),
        ee.every((ne) => ne !== "") && K)
      ) {
        const ne = ee.join("");
        w.mutate(ne);
      }
    },
    R = (_) => {
      _.preventDefault();
      const K = _.clipboardData.getData("text/plain");
      if (!/^\d{6}$/.test(K)) {
        Te.error("Please paste a valid 6-digit code");
        return;
      }
      const ee = K.split("");
      h(ee),
        setTimeout(() => {
          S.current[5] && S.current[5].focus();
        }, 0);
      const ne = K;
      w.mutate(ne);
    },
    C = (_, K) => {
      K.key === "Backspace" && !f[_] && _ > 0 && S.current[_ - 1]?.focus();
    },
    U = (_) => {
      _.preventDefault();
      const K = f.join("");
      K.length === 6 ? w.mutate(K) : Te.error("Please enter complete OTP");
    },
    M = () => {
      O.mutate();
    },
    V = (_) => {
      const K = Math.floor(_ / 120),
        ee = _ % 120;
      return `${K}:${ee.toString().padStart(2, "0")}`;
    },
    H = () => {
      switch (i) {
        case "signup":
          return "Verify Your Account";
        case "forgot-password":
          return "Verify Reset Code";
        default:
          return "Verify OTP";
      }
    },
    Y = () => {
      switch (i) {
        case "signup":
          return "We've sent a verification code to your email address. Please enter the code below to complete your registration.";
        case "forgot-password":
          return "We've sent a reset code to your email address. Please enter the code below to proceed with password reset.";
        default:
          return "Please enter the verification code sent to your email.";
      }
    };
  return c.jsx(Qu, {
    isOpen: a,
    onClose: s,
    children: c.jsx(Xu, {
      onClose: s,
      className: Le("max-w-md"),
      children: c.jsxs("div", {
        className: "p-8",
        children: [
          c.jsxs("div", {
            className: "text-center mb-6",
            children: [
              c.jsx("button", {
                onClick: s,
                className:
                  "absolute left-4 top-4 p-2 hover:bg-gray-100 hover:text-black rounded-full",
                children: c.jsx(Zn, { size: 20 }),
              }),
              c.jsx("h2", {
                className: "text-2xl font-bold mb-2",
                children: H(),
              }),
              c.jsx("p", { className: "text-gray-200 text-sm", children: Y() }),
              c.jsxs("p", {
                className: "text-sm text-gray-100 mt-2",
                children: [
                  "Code sent to: ",
                  c.jsx("span", { className: "font-medium", children: l }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            className: "bg-[#FCFCFF] rounded-lg p-6",
            children: [
              c.jsxs("form", {
                onSubmit: U,
                children: [
                  c.jsx("div", {
                    className: "flex justify-center gap-3 mb-6",
                    children: f.map((_, K) =>
                      c.jsx(
                        "input",
                        {
                          ref: (ee) => (S.current[K] = ee),
                          type: "text",
                          inputMode: "numeric",
                          maxLength: "1",
                          value: _,
                          onPaste: R,
                          onChange: (ee) => N(K, ee.target.value),
                          onKeyDown: (ee) => C(K, ee),
                          className:
                            "w-12 h-12 text-center text-lg font-semibold border-2 border-gray-300 rounded-lg focus:border-[#00254a] focus:outline-none bg-white",
                          disabled: w.isPending,
                        },
                        K
                      )
                    ),
                  }),
                  c.jsx(He, {
                    type: "submit",
                    className:
                      "w-full bg-[#00254a] text-white py-3 rounded font-medium mb-4 hover:bg-[#001a38]",
                    disabled: w.isPending || f.join("").length !== 6,
                    children: w.isPending ? "Verifying..." : "Verify OTP",
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "text-center",
                children: [
                  c.jsx("p", {
                    className: "text-sm text-gray-600 mb-2",
                    children: "Didn't receive the code?",
                  }),
                  p
                    ? c.jsx("button", {
                        onClick: M,
                        disabled: O.isPending,
                        className:
                          "text-[#00254a] font-medium underline hover:no-underline disabled:opacity-50",
                        children: O.isPending ? "Resending..." : "Resend OTP",
                      })
                    : c.jsxs("p", {
                        className: "text-sm text-gray-500",
                        children: ["Resend available in ", V(m)],
                      }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function gA({ isOpen: a, onClose: s, email: l, onPasswordChanged: i }) {
  const [o, f] = b.useState(!1),
    [h, m] = b.useState(!1),
    [y, p] = b.useState(["", "", "", "", "", ""]),
    [v, S] = b.useState(120),
    [w, O] = b.useState(!1),
    N = b.useRef([]),
    {
      register: R,
      handleSubmit: C,
      formState: { errors: U },
      watch: M,
      reset: V,
    } = Ov({ defaultValues: { newPassword: "", confirmPassword: "" } }),
    H = M("newPassword");
  b.useEffect(() => {
    if (v > 0) {
      const se = setTimeout(() => S(v - 1), 1e3);
      return () => clearTimeout(se);
    } else O(!0);
  }, [v]),
    b.useEffect(() => {
      a &&
        (p(["", "", "", "", "", ""]),
        S(120),
        O(!1),
        V(),
        setTimeout(() => {
          N.current[0] && N.current[0].focus();
        }, 100));
    }, [a, V]);
  const Y = vu({
      mutationFn: (se) =>
        mj({ email: l, otp: se.otp, new_password: se.confirmPassword }),
      onSuccess: () => {
        Te.success("Password reset successfully!"),
          V(),
          p(["", "", "", "", "", ""]),
          i();
      },
      onError: (se) => {
        console.error("Reset Password Error:", se),
          Te.error(se.message || "Failed to reset password. Please try again."),
          p(["", "", "", "", "", ""]),
          N.current[0] && N.current[0].focus();
      },
    }),
    _ = vu({
      mutationFn: () => rv({ email: l }),
      onSuccess: () => {
        Te.success("Reset code sent successfully!"),
          S(120),
          O(!1),
          p(["", "", "", "", "", ""]),
          N.current[0] && N.current[0].focus();
      },
      onError: (se) => {
        console.error("OTP Resend Error:", {
          action: "password-reset-otp-resend-failed",
          email: l,
          error: se.message,
          timestamp: new Date().toISOString(),
        }),
          Te.error(
            se.message || "Failed to resend reset code. Please try again."
          );
      },
    }),
    K = (se, me) => {
      if (me.length > 1 || !/^\d*$/.test(me)) return;
      const Q = [...y];
      (Q[se] = me), p(Q), me && se < 5 && N.current[se + 1]?.focus();
    },
    ee = (se, me) => {
      me.key === "Backspace" && !y[se] && se > 0 && N.current[se - 1]?.focus();
    },
    ne = (se) => {
      se.preventDefault();
      const me = se.clipboardData.getData("text/plain");
      if (!/^\d{6}$/.test(me)) {
        Te.error("Please paste a valid 6-digit code");
        return;
      }
      const Q = me.split("");
      p(Q),
        setTimeout(() => {
          N.current[5] && N.current[5].focus();
        }, 0);
    },
    ye = (se) => {
      const me = y.join("");
      if (me.length !== 6) {
        Te.error("Please enter complete verification code");
        return;
      }
      Y.mutate({ ...se, otp: me });
    },
    Me = () => {
      _.mutate();
    },
    fe = (se) => {
      const me = Math.floor(se / 60),
        Q = se % 60;
      return `${me}:${Q.toString().padStart(2, "0")}`;
    };
  return c.jsx(Qu, {
    isOpen: a,
    onClose: s,
    children: c.jsx(Xu, {
      onClose: s,
      className: Le("max-w-md"),
      children: c.jsxs("div", {
        className: "p-8",
        children: [
          c.jsxs("div", {
            className: "text-center mb-6",
            children: [
              c.jsx("button", {
                onClick: s,
                className:
                  "absolute left-4 top-4 p-2 hover:bg-gray-100 hover:text-black rounded-full",
                children: c.jsx(Zn, { size: 20 }),
              }),
              c.jsx("h2", {
                className: "text-2xl font-bold mb-2",
                children: "Reset Your Password",
              }),
              c.jsx("p", {
                className: "text-gray-200 text-sm",
                children:
                  "We've sent a reset code to your email address. Please enter the code below along with your new password.",
              }),
              c.jsxs("p", {
                className: "text-sm text-gray-100 mt-2",
                children: [
                  "Code sent to: ",
                  c.jsx("span", { className: "font-medium", children: l }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            className: "bg-[#FCFCFF] rounded-lg p-6",
            children: [
              c.jsxs("form", {
                onSubmit: C(ye),
                className: "space-y-6",
                children: [
                  c.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      c.jsx(Xa, {
                        className: "text-sm font-medium text-gray-700",
                        children: "Verification Code",
                      }),
                      c.jsx("div", {
                        className: "flex justify-center gap-3 mb-4",
                        children: y.map((se, me) =>
                          c.jsx(
                            "input",
                            {
                              ref: (Q) => (N.current[me] = Q),
                              type: "text",
                              inputMode: "numeric",
                              maxLength: "1",
                              value: se,
                              onChange: (Q) => K(me, Q.target.value),
                              onKeyDown: (Q) => ee(me, Q),
                              onPaste: ne,
                              className:
                                "w-12 h-12 text-center text-lg font-semibold border-2 border-gray-300 rounded-lg focus:border-[#00254a] focus:outline-none bg-white",
                              disabled: Y.isPending,
                            },
                            me
                          )
                        ),
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      c.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          c.jsx(Xa, {
                            htmlFor: "newPassword",
                            className: "text-sm font-medium text-gray-700",
                            children: "New Password",
                          }),
                          c.jsxs("div", {
                            className: "relative",
                            children: [
                              c.jsx($a, {
                                id: "newPassword",
                                type: o ? "text" : "password",
                                placeholder: "Enter your new password",
                                className: Le(
                                  "pr-12 h-12 border-2 border-gray-300 rounded-lg focus:border-[#00254a] focus:outline-none bg-white",
                                  U.newPassword &&
                                    "border-red-400 focus:border-red-500"
                                ),
                                ...R("newPassword", {
                                  required: "New password is required",
                                  minLength: {
                                    value: 8,
                                    message:
                                      "Password must be at least 8 characters",
                                  },
                                  pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                                    message:
                                      "Password must contain uppercase, lowercase, and number",
                                  },
                                }),
                              }),
                              c.jsx("button", {
                                type: "button",
                                onClick: () => f(!o),
                                className:
                                  "absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700 transition-colors",
                                "aria-label": o
                                  ? "Hide password"
                                  : "Show password",
                                children: o
                                  ? c.jsx(Wf, { size: 18 })
                                  : c.jsx(ed, { size: 18 }),
                              }),
                            ],
                          }),
                          U.newPassword &&
                            c.jsxs("p", {
                              className:
                                "text-red-500 text-xs flex items-center gap-1",
                              children: [
                                c.jsx("span", {
                                  className: "w-1 h-1 bg-red-500 rounded-full",
                                }),
                                U.newPassword.message,
                              ],
                            }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          c.jsx(Xa, {
                            htmlFor: "confirmPassword",
                            className: "text-sm font-medium text-gray-700",
                            children: "Confirm New Password",
                          }),
                          c.jsxs("div", {
                            className: "relative",
                            children: [
                              c.jsx($a, {
                                id: "confirmPassword",
                                type: h ? "text" : "password",
                                placeholder: "Confirm your new password",
                                className: Le(
                                  "pr-12 h-12 border-2 border-gray-300 rounded-lg focus:border-[#00254a] focus:outline-none bg-white",
                                  U.confirmPassword &&
                                    "border-red-400 focus:border-red-500"
                                ),
                                ...R("confirmPassword", {
                                  required: "Please confirm your password",
                                  validate: (se) =>
                                    se === H || "Passwords do not match",
                                }),
                              }),
                              c.jsx("button", {
                                type: "button",
                                onClick: () => m(!h),
                                className:
                                  "absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700 transition-colors",
                                "aria-label": h
                                  ? "Hide password"
                                  : "Show password",
                                children: h
                                  ? c.jsx(Wf, { size: 18 })
                                  : c.jsx(ed, { size: 18 }),
                              }),
                            ],
                          }),
                          U.confirmPassword &&
                            c.jsxs("p", {
                              className:
                                "text-red-500 text-xs flex items-center gap-1",
                              children: [
                                c.jsx("span", {
                                  className: "w-1 h-1 bg-red-500 rounded-full",
                                }),
                                U.confirmPassword.message,
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  c.jsx(He, {
                    type: "submit",
                    className:
                      "w-full bg-[#00254a] text-white py-3 rounded font-medium mb-4 hover:bg-[#001a38]",
                    disabled:
                      Y.isPending ||
                      y.join("").length !== 6 ||
                      Object.keys(U).length > 0,
                    children: Y.isPending
                      ? c.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            c.jsx("div", {
                              className:
                                "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin",
                            }),
                            "Resetting Password...",
                          ],
                        })
                      : "Reset Password",
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "text-center",
                children: [
                  c.jsx("p", {
                    className: "text-sm text-gray-600 mb-2",
                    children: "Didn't receive the code?",
                  }),
                  w
                    ? c.jsx("button", {
                        onClick: Me,
                        disabled: _.isPending,
                        className:
                          "text-[#00254a] font-medium underline hover:no-underline disabled:opacity-50",
                        children: _.isPending ? "Resending..." : "Resend Code",
                      })
                    : c.jsxs("p", {
                        className: "text-sm text-gray-500",
                        children: ["Resend available in ", fe(v)],
                      }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function wl({ className: a, ...s }) {
  return c.jsx("div", {
    "data-slot": "card",
    className: Le(
      "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
      a
    ),
    ...s,
  });
}
function hu({ className: a, ...s }) {
  return c.jsx("div", {
    "data-slot": "card-header",
    className: Le(
      "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
      a
    ),
    ...s,
  });
}
function mu({ className: a, ...s }) {
  return c.jsx("div", {
    "data-slot": "card-title",
    className: Le("leading-none font-semibold", a),
    ...s,
  });
}
function Nl({ className: a, ...s }) {
  return c.jsx("div", {
    "data-slot": "card-content",
    className: Le("px-6", a),
    ...s,
  });
}
const vA = ({ onClose: a }) => {
  const [s, l] = b.useState(!1),
    [i, o] = b.useState("signin");
  return c.jsxs(Qu, {
    isOpen: !0,
    onClose: a,
    children: [
      c.jsx(Xu, {
        onClose: a,
        className: "min-w-3xl  ",
        children: c.jsx("div", {
          className: "bg-[#f6f6fb] rounded-lg",
          children: c.jsx(wl, {
            className: "bg-transparent w-full border-none shadow-none",
            children: c.jsxs(Nl, {
              className: "flex flex-col items-center gap-8 py-12",
              children: [
                c.jsxs("div", {
                  className:
                    "relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center",
                  children: [
                    c.jsx("div", {
                      className: "absolute w-5/6 h-5/6 rotate-[15deg] blur-xl",
                      children: c.jsx("div", {
                        className:
                          "relative w-4/5 h-4/5 bg-[#00254a] rounded-full rotate-[-15deg] blur-xl opacity-40",
                      }),
                    }),
                    c.jsx("div", {
                      className:
                        "relative w-5/6 h-5/6 bg-white/40 rounded-full backdrop-blur-sm flex items-center justify-center",
                      children: c.jsx(Sd, {
                        className: "w-3/4 h-3/4 text-[#00254a]",
                      }),
                    }),
                  ],
                }),
                c.jsx("h1", {
                  className:
                    "text-3xl sm:text-4xl md:text-5xl font-bold text-[#00254a] text-center leading-tight",
                  children: "Congratulation",
                }),
                c.jsxs("div", {
                  className: "flex flex-col items-center gap-4 w-full",
                  children: [
                    c.jsx("p", {
                      className:
                        "text-[#8d8d8d] text-center text-sm leading-relaxed px-4",
                      children:
                        "Your details have been successfully recorded. The educational platform is currently being enhanced. Please give us a moment to ensure it provides accurate responses for our clients.",
                    }),
                    c.jsxs(He, {
                      onClick: a,
                      className:
                        "bg-[#00254a] hover:bg-[#001a38] text-white rounded-xl px-6 py-3 flex items-center gap-3 mt-4",
                      children: [
                        c.jsx("span", {
                          className: "font-medium",
                          children: "Next",
                        }),
                        c.jsx(Xj, { className: "w-6 h-6" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
      c.jsx(Od, { isOpen: s, onClose: () => l(!1), initialMode: i }),
    ],
  });
};
function Od({ isOpen: a, onClose: s, initialMode: l = "signup" }) {
  const [i, o] = b.useState(l === "signin"),
    [f, h] = b.useState(!1),
    [m, y] = b.useState(!1),
    [p, v] = b.useState(!1),
    [S, w] = b.useState(!1),
    [O, N] = b.useState(!1),
    [R, C] = b.useState(""),
    [U, M] = b.useState(""),
    [V, H] = b.useState(null),
    [Y, _] = b.useState(!1),
    K = Ov({
      mode: "onChange",
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        terms: !1,
        rememberMe: !1,
      },
    }),
    {
      control: ee,
      handleSubmit: ne,
      formState: { errors: ye, isValid: Me },
    } = K;
  b.useEffect(() => {
    o(l === "signin");
  }, [l]);
  const fe = async (W) => {
      _(!0);
      try {
        if (m)
          await rv({ email: W.email }),
            M(W.email),
            C("forgot-password"),
            Te.success("Reset code sent to your email!"),
            w(!0);
        else if (!i)
          await fj({ email: W.email }),
            M(W.email),
            H(W),
            C("signup"),
            v(!0),
            Te.success("Verification code sent to your email!");
        else {
          const de = await sv({ email: W.email, password: W.password });
          Te.success("Successfully signed in!"),
            s(),
            K.reset(),
            window.location.reload();
        }
      } catch (de) {
        console.error("Error in form submission:", de),
          Te.error(de.message || "Something went wrong. Please try again.");
      } finally {
        _(!1);
      }
    },
    se = (W) => {
      Te.error("Please fix the form errors before submitting.");
    },
    me = async () => {
      if ((v(!1), R === "signup"))
        try {
          _(!0);
          const W = {
            first_name: V.firstName,
            last_name: V.lastName,
            email: V.email,
            password: V.password,
            role: "user",
          };
          await hj(W), N(!0), H(null);
        } catch (W) {
          console.error("Registration error:", W),
            Te.error(W.message || "Registration failed. Please try again.");
        } finally {
          _(!1);
        }
      else R === "forgot-password" && w(!0);
    },
    Q = () => {
      w(!1), N(!0);
    },
    L = () => {
      o(!i), y(!1), K.reset();
    },
    I = () => {
      y(!0), K.reset();
    },
    re = () => {
      y(!1), K.reset();
    },
    je = () => {
      s(), K.reset(), h(!1), y(!1), v(!1), w(!1), N(!1), C(""), M(""), _(!1);
    },
    E = () => {
      N(!1), je();
    },
    J = () => {
      v(!1);
    },
    ue = () => {
      w(!1);
    };
  return c.jsxs(c.Fragment, {
    children: [
      c.jsx(Qu, {
        isOpen: a,
        onClose: je,
        children: c.jsx(Xu, {
          onClose: je,
          className: Le("max-w-xl"),
          children: c.jsxs("div", {
            className: "p-8",
            children: [
              c.jsxs("div", {
                className: "text-center mb-6",
                children: [
                  c.jsx("h2", {
                    className: "text-2xl font-bold",
                    children: "You have to Sign Up or Sign In",
                  }),
                  c.jsx("p", {
                    className: "mb-4 text-2xl font-bold",
                    children: "for view more News",
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "bg-[#FCFCFF] rounded-lg p-6 text-black",
                children: [
                  c.jsx("h3", {
                    className: "text-xl font-bold text-center mb-1",
                    children: m
                      ? "Forgot Password"
                      : i
                      ? "Sign In Account"
                      : "Sign Up Account",
                  }),
                  c.jsx("p", {
                    className: "text-center mb-6 text-sm text-gray-600",
                    children:
                      m &&
                      c.jsxs(c.Fragment, {
                        children: [
                          "Remember your password?",
                          " ",
                          c.jsx("button", {
                            type: "button",
                            onClick: re,
                            className:
                              "text-[#00254a] cursor-pointer font-medium underline",
                            children: "Back to Sign In",
                          }),
                        ],
                      }),
                  }),
                  c.jsxs("form", {
                    onSubmit: ne(fe, se),
                    children: [
                      !i &&
                        !m &&
                        c.jsxs("div", {
                          className: "grid grid-cols-2 gap-4 mb-4",
                          children: [
                            c.jsxs("div", {
                              className: "space-y-1",
                              children: [
                                c.jsx(Xa, {
                                  htmlFor: "firstName",
                                  className: "text-[#262626] text-sm",
                                  children: "First Name",
                                }),
                                c.jsxs("div", {
                                  className: "relative",
                                  children: [
                                    c.jsx($a, {
                                      id: "firstName",
                                      placeholder: "First name",
                                      className:
                                        "pr-10 border-[#c7c7c7] bg-white",
                                      ...K.register("firstName", {
                                        required:
                                          !i && !m
                                            ? "First name is required"
                                            : !1,
                                      }),
                                    }),
                                    c.jsx("div", {
                                      className:
                                        "absolute right-3 top-1/2 -translate-y-1/2 text-[#727272]",
                                      children: c.jsx(Nu, { size: 16 }),
                                    }),
                                  ],
                                }),
                                ye.firstName &&
                                  c.jsx("p", {
                                    className: "text-red-500 text-xs",
                                    children: ye.firstName.message,
                                  }),
                              ],
                            }),
                            c.jsxs("div", {
                              className: "space-y-1",
                              children: [
                                c.jsx(Xa, {
                                  htmlFor: "lastName",
                                  className: "text-[#262626] text-sm",
                                  children: "Last Name",
                                }),
                                c.jsxs("div", {
                                  className: "relative",
                                  children: [
                                    c.jsx($a, {
                                      id: "lastName",
                                      placeholder: "Last name",
                                      className:
                                        "pr-10 border-[#c7c7c7] bg-white",
                                      ...K.register("lastName", {
                                        required:
                                          !i && !m
                                            ? "Last name is required"
                                            : !1,
                                      }),
                                    }),
                                    c.jsx("div", {
                                      className:
                                        "absolute right-3 top-1/2 -translate-y-1/2 text-[#727272]",
                                      children: c.jsx(Nu, { size: 16 }),
                                    }),
                                  ],
                                }),
                                ye.lastName &&
                                  c.jsx("p", {
                                    className: "text-red-500 text-xs",
                                    children: ye.lastName.message,
                                  }),
                              ],
                            }),
                          ],
                        }),
                      c.jsxs("div", {
                        className: "space-y-1 mb-4",
                        children: [
                          c.jsx(Xa, {
                            htmlFor: "email",
                            className: "text-[#262626] text-sm",
                            children: "E-mail or Phone",
                          }),
                          c.jsx($a, {
                            id: "email",
                            placeholder: "Enter your mail or phone number",
                            className: "border-[#c7c7c7] bg-white",
                            ...K.register("email", {
                              required: "Email or phone is required",
                              pattern: {
                                value:
                                  /^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]{2,5})$|^[0-9]{10}$/,
                                message:
                                  "Please enter a valid email or phone number",
                              },
                            }),
                          }),
                          ye.email &&
                            c.jsx("p", {
                              className: "text-red-500 text-xs",
                              children: ye.email.message,
                            }),
                        ],
                      }),
                      !m &&
                        c.jsxs("div", {
                          className: "space-y-1 mb-4",
                          children: [
                            c.jsx("div", {
                              className: "flex justify-between items-center",
                              children: c.jsx(Xa, {
                                htmlFor: "password",
                                className: "text-[#262626] text-sm",
                                children: "Password",
                              }),
                            }),
                            c.jsxs("div", {
                              className: "relative",
                              children: [
                                c.jsx($a, {
                                  id: "password",
                                  type: f ? "text" : "password",
                                  placeholder: "Enter your Password",
                                  className: "pr-10 border-[#c7c7c7] bg-white",
                                  ...K.register("password", {
                                    required: "Password is required",
                                    minLength: {
                                      value: i ? 1 : 8,
                                      message: i
                                        ? "Password is required"
                                        : "Password must be at least 8 characters",
                                    },
                                  }),
                                }),
                                c.jsx("button", {
                                  type: "button",
                                  onClick: () => h(!f),
                                  className:
                                    "absolute right-3 top-1/2 -translate-y-1/2 text-[#727272]",
                                  "aria-label": f
                                    ? "Hide password"
                                    : "Show password",
                                  children: f
                                    ? c.jsx(Wf, { size: 16 })
                                    : c.jsx(ed, { size: 16 }),
                                }),
                              ],
                            }),
                            ye.password &&
                              c.jsx("p", {
                                className: "text-red-500 text-xs",
                                children: ye.password.message,
                              }),
                            i &&
                              c.jsxs("div", {
                                className:
                                  "flex justify-between items-center mt-4 mb-6",
                                children: [
                                  c.jsxs("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                      c.jsx(Tg, {
                                        control: ee,
                                        name: "rememberMe",
                                        render: ({ field: W }) =>
                                          c.jsx(Bg, {
                                            id: "rememberMe",
                                            checked: W.value,
                                            onCheckedChange: W.onChange,
                                            className:
                                              "h-4 w-4 border-2 border-gray-400 data-[state=checked]:bg-[#00254a] data-[state=checked]:border-[#00254a]",
                                          }),
                                      }),
                                      c.jsx(Xa, {
                                        htmlFor: "rememberMe",
                                        className:
                                          "text-sm text-gray-600 cursor-pointer",
                                        children: "Remember for 30 Days",
                                      }),
                                    ],
                                  }),
                                  c.jsx("button", {
                                    type: "button",
                                    onClick: I,
                                    className:
                                      "text-[#00254a] text-sm cursor-pointer font-medium underline hover:text-[#001a38]",
                                    children: "Forgot Password?",
                                  }),
                                ],
                              }),
                          ],
                        }),
                      !i &&
                        !m &&
                        c.jsxs("div", {
                          className: "mb-6",
                          children: [
                            c.jsxs("div", {
                              className: "flex items-center space-x-2",
                              children: [
                                c.jsx(Tg, {
                                  control: ee,
                                  name: "terms",
                                  rules: {
                                    required:
                                      "You must agree to the terms and conditions",
                                  },
                                  render: ({ field: W }) =>
                                    c.jsx(Bg, {
                                      id: "terms",
                                      checked: W.value,
                                      onCheckedChange: W.onChange,
                                      className:
                                        "h-4 w-4 border-2 border-gray-400 data-[state=checked]:bg-[#00254a] data-[state=checked]:border-[#00254a]",
                                    }),
                                }),
                                c.jsxs(Xa, {
                                  htmlFor: "terms",
                                  className:
                                    "text-sm text-[#262626] cursor-pointer leading-relaxed",
                                  children: [
                                    "I agree to the",
                                    " ",
                                    c.jsx("a", {
                                      href: "/terms",
                                      className:
                                        "text-[#00254a] underline hover:text-[#001a38]",
                                      children: "Terms & Condition",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            ye.terms &&
                              c.jsx("p", {
                                className: "text-red-500 text-xs mt-2",
                                children: ye.terms.message,
                              }),
                          ],
                        }),
                      c.jsx(He, {
                        type: "submit",
                        disabled: Y,
                        className:
                          "w-full cursor-pointer bg-[#00254a] text-white py-3 rounded font-medium mb-6 hover:bg-[#001a38] disabled:opacity-50 disabled:cursor-not-allowed",
                        children: Y
                          ? c.jsxs("span", {
                              className: "flex items-center gap-2",
                              children: [
                                c.jsx("div", {
                                  className:
                                    "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin",
                                }),
                                "Loading...",
                              ],
                            })
                          : c.jsx(c.Fragment, {
                              children: m ? "Reset" : i ? "Sign In" : "Sign Up",
                            }),
                      }),
                    ],
                  }),
                  !m &&
                    c.jsx(c.Fragment, {
                      children: c.jsx("div", {
                        className: "text-center",
                        children: c.jsxs("p", {
                          className: "text-[#5a5a5a] text-sm",
                          children: [
                            i
                              ? "Don't have an account? "
                              : "Already have an account? ",
                            c.jsx("button", {
                              type: "button",
                              onClick: L,
                              className:
                                "text-[#00254a] cursor-pointer font-medium underline",
                              children: i ? "Sign Up" : "Sign In",
                            }),
                          ],
                        }),
                      }),
                    }),
                ],
              }),
            ],
          }),
        }),
      }),
      c.jsx(yA, { isOpen: p, onClose: J, email: U, type: R, onVerified: me }),
      c.jsx(gA, { isOpen: S, onClose: ue, email: U, onPasswordChanged: Q }),
      O && c.jsx(vA, { onClose: E, type: R }),
    ],
  });
}
function Is({
  onScrollToAbout: a,
  onSearch: s,
  searchTerm: l,
  setSearchTerm: i,
}) {
  const [o, f] = b.useState(!1),
    [h, m] = b.useState("signup"),
    [y, p] = b.useState(""),
    [v, S] = b.useState(!1),
    [w, O] = b.useState(!1),
    [N, R] = b.useState(!0),
    [C, U] = b.useState(0),
    { isLoggedIn: M, user: V, logout: H, isAdmin: Y } = rs(),
    _ = Ct(),
    K = _.pathname.startsWith("/dashboard"),
    ee = _.pathname.startsWith("/pricing"),
    ne = (Q) => {
      M || (Q.preventDefault(), ye());
    };
  b.useEffect(() => {
    const Q = new Date(),
      L = { weekday: "long", year: "numeric", month: "long", day: "numeric" },
      I = Q.toLocaleDateString("en-US", L);
    p(I);
  }, []),
    b.useEffect(() => {
      const Q = () => {
        const re = window.scrollY;
        re === 0 ? R(!0) : re > C && re > 100 ? R(!1) : re < C && R(!0), U(re);
      };
      let L = null;
      const I = () => {
        L === null &&
          (L = setTimeout(() => {
            Q(), (L = null);
          }, 10));
      };
      return (
        window.addEventListener("scroll", I),
        () => {
          window.removeEventListener("scroll", I), L && clearTimeout(L);
        }
      );
    }, [C]),
    b.useEffect(() => {
      const Q = (L) => {
        L.target.closest(".profile-dropdown") || O(!1);
      };
      return (
        document.addEventListener("click", Q),
        () => document.removeEventListener("click", Q)
      );
    }, []);
  const ye = () => {
      m("signup"), f(!0);
    },
    Me = () => {
      m("signin"), f(!0);
    },
    fe = () => {
      H(), O(!1);
    },
    se = () => {
      S(!v);
    },
    me = (Q) => {
      Q.preventDefault(), a && a(), S(!1);
    };
  return c.jsxs(c.Fragment, {
    children: [
      c.jsxs("nav", {
        className: `
        fixed top-0 px-4 md:px-8 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm   
        transition-transform duration-300 ease-in-out
        ${N ? "translate-y-0" : "-translate-y-full"}
      `,
        children: [
          c.jsxs("div", {
            className: "mx-auto",
            children: [
              c.jsxs("div", {
                className:
                  "hidden lg:grid lg:grid-cols-3 items-center py-4 gap-8",
                children: [
                  c.jsxs("div", {
                    className: "flex items-center space-x-4",
                    children: [
                      c.jsx("img", {
                        src: "/logo.png",
                        alt: "Alamo City Pulse",
                        className: "h-10 w-auto object-contain",
                        onError: (Q) => {
                          (Q.target.style.display = "none"),
                            (Q.target.nextSibling.style.display = "block");
                        },
                      }),
                      c.jsx("div", {
                        className:
                          "hidden text-2xl font-bold text-gray-900 tracking-wide",
                        children: "ALAMOCITYPULSE",
                      }),
                      c.jsxs("div", {
                        className: "flex flex-col",
                        children: [
                          c.jsx("div", {
                            className: "text-sm font-medium text-foreground",
                            children: y,
                          }),
                          c.jsx("div", {
                            className: "text-xs text-gray-500",
                            children: "Today's Paper",
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsx("div", {
                    className: "flex justify-center",
                    children: c.jsxs("div", {
                      className: "relative w-full max-w-md",
                      children: [
                        c.jsx(fu, {
                          className:
                            "absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400",
                          size: 20,
                        }),
                        c.jsx($a, {
                          placeholder: "Search articles, topics...",
                          className:
                            "pl-12 pr-4 py-3 w-full border-gray-200 rounded-full bg-gray-50 focus:bg-white focus:border-[#00254A] transition-all duration-200 shadow-sm",
                          value: l,
                          onChange: (Q) => i(Q.target.value),
                          onKeyPress: (Q) => {
                            Q.key === "Enter" && s(l);
                          },
                        }),
                      ],
                    }),
                  }),
                  c.jsx("div", {
                    className: "flex items-center justify-end space-x-4",
                    children: M
                      ? c.jsx("div", {
                          className: "flex items-center space-x-3",
                          children: c.jsxs("div", {
                            className: "relative profile-dropdown",
                            children: [
                              c.jsxs("button", {
                                onClick: () => O(!w),
                                className:
                                  "flex items-center space-x-3 p-2 pr-4 bg-gradient-to-r from-[#00254A] to-[#003d6b] text-white rounded-full hover:shadow-lg transition-all duration-200",
                                children: [
                                  c.jsx("div", {
                                    className:
                                      "w-8 h-8 bg-white/20 rounded-full flex items-center justify-center",
                                    children: c.jsx(Wi, { size: 18 }),
                                  }),
                                  c.jsx("span", {
                                    className: "text-sm font-medium",
                                    children: V?.firstName || "Profile",
                                  }),
                                  c.jsx(Ij, {
                                    size: 16,
                                    className: `transition-transform ${
                                      w ? "rotate-180" : ""
                                    }`,
                                  }),
                                ],
                              }),
                              w &&
                                c.jsxs("div", {
                                  className:
                                    "absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50",
                                  children: [
                                    c.jsxs("div", {
                                      className:
                                        "px-4 py-3 border-b border-gray-100",
                                      children: [
                                        c.jsxs("p", {
                                          className:
                                            "text-sm font-medium text-gray-900",
                                          children: [
                                            V?.firstName,
                                            " ",
                                            V?.lastName,
                                          ],
                                        }),
                                        c.jsx("p", {
                                          className: "text-xs text-gray-500",
                                          children: V?.email,
                                        }),
                                      ],
                                    }),
                                    c.jsxs(ra, {
                                      to: "/dashboard/profile",
                                      className:
                                        "flex items-center px-4 py-2 text-sm text-foreground hover:bg-gray-50",
                                      onClick: () => O(!1),
                                      children: [
                                        c.jsx(Wi, {
                                          size: 16,
                                          className: "mr-3",
                                        }),
                                        "Profile Settings",
                                      ],
                                    }),
                                    M
                                      ? c.jsxs(ra, {
                                          to: "/dashboard/advertise",
                                          className:
                                            "flex items-center px-4 py-2 text-sm text-foreground hover:bg-gray-50",
                                          onClick: () => O(!1),
                                          children: [
                                            c.jsx(Ag, {
                                              size: 16,
                                              className: "mr-3",
                                            }),
                                            Y()
                                              ? "Manage Advertise"
                                              : "Make Advertise",
                                          ],
                                        })
                                      : c.jsxs("button", {
                                          onClick: () => {
                                            ne(), O(!1);
                                          },
                                          className:
                                            "flex items-center w-full px-4 py-2 text-sm text-foreground hover:bg-gray-50",
                                          children: [
                                            c.jsx(Ag, {
                                              size: 16,
                                              className: "mr-3",
                                            }),
                                            "Make Advertise",
                                          ],
                                        }),
                                    c.jsx("div", {
                                      className:
                                        "border-t border-gray-100 mt-2 pt-2",
                                      children: c.jsx("button", {
                                        onClick: fe,
                                        className:
                                          "flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50",
                                        children: "Sign Out",
                                      }),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        })
                      : c.jsxs("div", {
                          className: "flex items-center space-x-3",
                          children: [
                            c.jsx(He, {
                              onClick: Me,
                              className:
                                "px-6 py-2  text-foreground border border-[#00254A] hover:bg-[#00254A] hover:text-white transition-all duration-200 rounded-full font-medium",
                              children: "Sign In",
                            }),
                            c.jsx(He, {
                              onClick: ye,
                              className:
                                "px-6 py-2 bg-gradient-to-r from-[#00254A] to-[#003d6b] text-white hover:shadow-lg transition-all duration-200 rounded-full font-medium",
                              children: "Sign Up",
                            }),
                            c.jsx("div", {
                              className:
                                "ml-4 px-4 py-2 text-sm text-[#b32021] font-medium bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-full",
                              children: "🎉 SAVE 50% ON Premium",
                            }),
                          ],
                        }),
                  }),
                ],
              }),
              c.jsxs("div", {
                className:
                  "hidden md:flex lg:hidden items-center justify-between py-4",
                children: [
                  c.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [
                      c.jsx("img", {
                        src: "/logo.png",
                        alt: "Alamo City Pulse",
                        className: "h-8 w-auto object-contain",
                        onError: (Q) => {
                          (Q.target.style.display = "none"),
                            (Q.target.nextSibling.style.display = "block");
                        },
                      }),
                      c.jsx("div", {
                        className:
                          "hidden text-xl font-bold text-gray-900 tracking-wide",
                        children: "ALAMOCITYPULSE",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "flex items-center space-x-4",
                    children: [
                      c.jsxs("div", {
                        className: "relative",
                        children: [
                          c.jsx(fu, {
                            className:
                              "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",
                            size: 18,
                          }),
                          c.jsx($a, {
                            placeholder: "Search...",
                            className:
                              "pl-10 pr-4 py-2 w-64 border-gray-200 rounded-full bg-gray-50 focus:bg-white",
                            value: l,
                            onChange: (Q) => i(Q.target.value),
                            onKeyPress: (Q) => {
                              Q.key === "Enter" && s(l);
                            },
                          }),
                        ],
                      }),
                      M
                        ? c.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [
                              c.jsx(ra, {
                                to: "/dashboard/profile",
                                className:
                                  "p-2 bg-gradient-to-r from-[#00254A] to-[#003d6b] rounded-full text-white hover:shadow-lg transition-all",
                                children: c.jsx(Wi, { size: 20 }),
                              }),
                              c.jsx("button", {
                                onClick: fe,
                                className:
                                  "text-sm text-gray-600 hover:text-[#00254a] font-medium",
                                children: "Sign Out",
                              }),
                            ],
                          })
                        : c.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [
                              c.jsx(He, {
                                onClick: Me,
                                className:
                                  "px-4 py-2 text-[#00254A] border border-[#00254A] hover:bg-[#00254A] hover:text-white rounded-full text-sm",
                                children: "Sign In",
                              }),
                              c.jsx(He, {
                                onClick: ye,
                                className:
                                  "px-4 py-2 bg-gradient-to-r from-[#00254A] to-[#003d6b] text-white hover:shadow-lg rounded-full text-sm",
                                children: "Sign Up",
                              }),
                            ],
                          }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "flex md:hidden items-center justify-between py-3",
                children: [
                  c.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [
                      c.jsx("img", {
                        src: "/logo.png",
                        alt: "Alamo City Pulse",
                        className: "h-7 w-auto object-contain",
                        onError: (Q) => {
                          (Q.target.style.display = "none"),
                            (Q.target.nextSibling.style.display = "block");
                        },
                      }),
                      c.jsx("div", {
                        className:
                          "hidden text-lg font-bold text-gray-900 tracking-wide",
                        children: "ALAMOCITYPULSE",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [
                      M
                        ? c.jsx(ra, {
                            to: "/dashboard/profile",
                            className:
                              "p-2 bg-gradient-to-r from-[#00254A] to-[#003d6b] rounded-full text-foreground",
                            children: c.jsx(Wi, { size: 18 }),
                          })
                        : c.jsx(He, {
                            onClick: Me,
                            className:
                              "px-3 py-1.5  bg-gradient-to-r from-[#00254A] to-[#003d6b] text-foreground rounded-full text-xs font-medium",
                            children: "Sign In",
                          }),
                      c.jsx("button", {
                        onClick: se,
                        className:
                          "p-2 text-foreground hover:bg-gray-100 rounded-full transition-colors",
                        children: v
                          ? c.jsx(Yu, { size: 22 })
                          : c.jsx(vE, { size: 22 }),
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "md:hidden pb-4",
                children: [
                  c.jsxs("div", {
                    className: "relative",
                    children: [
                      c.jsx(fu, {
                        className:
                          "absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400",
                        size: 18,
                      }),
                      c.jsx($a, {
                        placeholder: "Search articles, topics...",
                        className:
                          "pl-12 pr-4 py-3 w-full border-gray-200 rounded-full bg-gray-50 focus:bg-white",
                        value: l,
                        onChange: (Q) => i(Q.target.value),
                        onKeyPress: (Q) => {
                          Q.key === "Enter" && s(l);
                        },
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "mt-3 text-center",
                    children: [
                      c.jsx("div", {
                        className: "text-sm font-medium text-foreground",
                        children: y,
                      }),
                      c.jsx("div", {
                        className: "text-xs text-gray-500",
                        children: "Today's Paper",
                      }),
                    ],
                  }),
                  !M &&
                    c.jsx("div", {
                      className:
                        "mt-3 px-4 py-2 text-sm text-[#b32021] font-medium bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-full text-center",
                      children: "🎉 SAVE 50% ON Premium Membership",
                    }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            className:
              "hidden md:flex items-center justify-center space-x-8 py-3 border-t border-gray-100 bg-white/80",
            children: [
              c.jsx(ra, {
                to: "/",
                className: `px-4 py-2 font-medium rounded-full transition-all ${
                  _.pathname === "/"
                    ? "bg-[#00254A] text-white"
                    : "text-foreground hover:text-[#00254a] hover:bg-gray-50"
                }`,
                children: "Home",
              }),
              !(K || ee) &&
                c.jsx("button", {
                  onClick: me,
                  className:
                    "px-4 py-2 text-foreground font-medium hover:text-[#00254a] hover:bg-gray-50 rounded-full transition-all",
                  children: "About Us",
                }),
              M
                ? c.jsx(ra, {
                    to: "/dashboard/advertise",
                    className: `px-4 py-2 font-medium rounded-full transition-all ${
                      _.pathname === "/dashboard/advertise"
                        ? "bg-[#00254A] text-white"
                        : "text-foreground hover:text-[#00254a] hover:bg-gray-50"
                    }`,
                    children: Y() ? "Manage Advertise" : "Make Advertise",
                  })
                : c.jsx("button", {
                    onClick: ne,
                    className:
                      "px-4 py-2 text-foreground font-medium hover:text-[#00254a] hover:bg-gray-50 rounded-full transition-all",
                    children: "Make Advertise",
                  }),
              c.jsx(ra, {
                to: "/pricing",
                className: `px-4 py-2 font-medium rounded-full transition-all ${
                  _.pathname === "/pricing"
                    ? "bg-[#00254A] text-white"
                    : "text-foreground hover:text-[#00254a] hover:bg-gray-50"
                }`,
                children: "Pricing",
              }),
            ],
          }),
          v &&
            c.jsx("div", {
              className:
                "md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md",
              children: c.jsxs("div", {
                className: "px-4 py-2 space-y-1",
                children: [
                  c.jsx(ra, {
                    to: "/",
                    className: `block px-4 py-3 font-medium rounded-xl transition-all ${
                      _.pathname === "/"
                        ? "bg-[#00254A] text-white"
                        : "text-foreground hover:text-[#00254a] hover:bg-gray-50"
                    }`,
                    onClick: () => S(!1),
                    children: "Home",
                  }),
                  !K &&
                    c.jsx("button", {
                      onClick: me,
                      className:
                        "block w-full text-left px-4 py-3 text-foreground font-medium hover:text-[#00254a] hover:bg-gray-50 rounded-xl transition-all",
                      children: "About Us",
                    }),
                  M
                    ? c.jsx(ra, {
                        to: "/dashboard/advertise",
                        className: `block px-4 py-3 font-medium rounded-xl transition-all ${
                          _.pathname === "/dashboard/advertise"
                            ? "bg-[#00254A] text-white"
                            : "text-foreground hover:text-[#00254a] hover:bg-gray-50"
                        }`,
                        onClick: () => S(!1),
                        children: Y() ? "Manage Advertise" : "Make Advertise",
                      })
                    : c.jsx("button", {
                        onClick: () => {
                          ne(), S(!1);
                        },
                        className:
                          "block w-full text-left px-4 py-3 text-foreground font-medium hover:text-[#00254a] hover:bg-gray-50 rounded-xl transition-all",
                        children: "Make Advertise",
                      }),
                  c.jsx(ra, {
                    to: "/pricing",
                    className: `block px-4 py-3 font-medium rounded-xl transition-all ${
                      _.pathname === "/pricing"
                        ? "bg-[#00254A] text-white"
                        : "text-foreground hover:text-[#00254a] hover:bg-gray-50"
                    }`,
                    onClick: () => S(!1),
                    children: "Pricing",
                  }),
                  M
                    ? c.jsx("div", {
                        className: "px-4 py-4 border-t border-gray-100 mt-4",
                        children: c.jsxs("div", {
                          className: "flex flex-col space-y-3",
                          children: [
                            c.jsxs("div", {
                              className: "text-center",
                              children: [
                                c.jsx("div", {
                                  className:
                                    "text-sm font-medium text-foreground",
                                  children: "Welcome back!",
                                }),
                                c.jsx("div", {
                                  className: "text-xs text-gray-500",
                                  children: V?.firstName || "User",
                                }),
                              ],
                            }),
                            c.jsx(He, {
                              onClick: () => {
                                fe(), S(!1);
                              },
                              className:
                                "w-full bg-gray-100 text-foreground hover:bg-gray-200 border border-gray-300 rounded-xl",
                              children: "Sign Out",
                            }),
                          ],
                        }),
                      })
                    : c.jsx("div", {
                        className: "px-4 py-4 border-t border-gray-100 mt-4",
                        children: c.jsxs("div", {
                          className: "flex flex-col space-y-3",
                          children: [
                            c.jsx(He, {
                              onClick: () => {
                                ye(), S(!1);
                              },
                              className:
                                "w-full bg-gradient-to-r from-[#00254A] to-[#003d6b] text-white hover:shadow-lg rounded-xl font-medium",
                              children: "Sign Up",
                            }),
                            c.jsx("div", {
                              className:
                                "px-4 py-2 text-sm text-[#b32021] font-medium bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl text-center",
                              children: "🎉 SAVE 50% ON Premium",
                            }),
                          ],
                        }),
                      }),
                ],
              }),
            }),
        ],
      }),
      c.jsx(Od, { isOpen: o, onClose: () => f(!1), initialMode: h }),
    ],
  });
}
const Ta = {
    GET_ALL: "/advertisements/get_all/",
    USERS_ALL_ADS: "/advertisements/user/get_all/",
    GET_SINGLE: (a) => `/advertisements/${a}/`,
    CREATE: "/advertisements/create/",
    UPDATE: (a) => `/advertisements/${a}/update/`,
    APPROVE: (a) => `/advertisements/${a}/approve/`,
    REJECT: (a) => `/advertisements/${a}/rejected/`,
    DELETE_BY_ID: (a) => `/advertisements/${a}/delete/`,
  },
  xA = async () => {
    try {
      const a = await at.get(Ta.GET_ALL),
        s =
          a.data
            ?.map((l, i) => ({
              ...l,
              id: l.id || `ad-${i}-${Date.now()}`,
              images: Array.isArray(l.images)
                ? l.images.filter((o) => o && o.image && o.image.trim() !== "")
                : [],
              imageUrls: Array.isArray(l.images)
                ? l.images
                    .filter((o) => o && o.image && o.image.trim() !== "")
                    .map((o) => Tl(o.image))
                : [],
              title: l.title || `Advertisement ${i + 1}`,
              description: l.description || "",
              category: l.category || "General",
              url: l.url || null,
              user: l.user || "Unknown",
              serial_number: l.serial_number || "",
              views: l.views || 0,
              status: l.status || "pending",
              created_at: l.created_at || new Date().toISOString(),
              is_active: l.status === "approved",
              has_images: Array.isArray(l.images) && l.images.length > 0,
            }))
            .filter((l) => l.status === "approved" && l.has_images) || [];
      return {
        success: !0,
        data: s,
        total: a.data?.length || 0,
        approved: s.length,
      };
    } catch (a) {
      return (
        console.error("Error fetching advertisements:", a),
        {
          success: !1,
          error: a.response?.data?.message || "Failed to fetch advertisements",
          data: [],
          total: 0,
          approved: 0,
        }
      );
    }
  },
  Tl = (a) => {
    if (!a) return null;
    if (a.startsWith("http://") || a.startsWith("https://")) return a;
    if (a.startsWith("/media")) {
      const s = "https://api.alamocitypulse.com/";
      return s ? `${s.replace(/\/$/, "")}${a}` : a;
    }
    return a.startsWith("/") ? a : `/${a}`;
  },
  Rd = async () => {
    try {
      return { success: !0, data: (await at.get(Ta.GET_ALL)).data };
    } catch (a) {
      return (
        console.error("Error fetching advertisements:", a),
        {
          success: !1,
          error: a.response?.data?.message || "Failed to fetch advertisements",
        }
      );
    }
  },
  bA = async () => {
    try {
      return { success: !0, data: (await at.get(Ta.USERS_ALL_ADS)).data };
    } catch (a) {
      return (
        console.error("Error fetching advertisements:", a),
        {
          success: !1,
          error: a.response?.data?.message || "Failed to fetch advertisements",
        }
      );
    }
  },
  Bv = async (a) => {
    try {
      return { success: !0, data: (await at.get(Ta.GET_SINGLE(a))).data };
    } catch (s) {
      return (
        console.error("Error fetching advertisement:", s),
        {
          success: !1,
          error: s.response?.data?.message || "Failed to fetch advertisement",
        }
      );
    }
  },
  Vv = async (a) => {
    try {
      return {
        success: !0,
        data: (
          await at.post(Ta.CREATE, a, {
            headers: { "Content-Type": "multipart/form-data" },
          })
        ).data,
      };
    } catch (s) {
      return (
        console.error("Error creating advertisement:", s),
        {
          success: !1,
          error: s.response?.data?.message || "Failed to create advertisement",
        }
      );
    }
  },
  Pv = async (a, s) => {
    try {
      return {
        success: !0,
        data: (
          await at.put(Ta.UPDATE(a), s, {
            headers: { "Content-Type": "multipart/form-data" },
          })
        ).data,
      };
    } catch (l) {
      return (
        console.error("Error updating advertisement:", l),
        {
          success: !1,
          error: l.response?.data?.message || "Failed to update advertisement",
        }
      );
    }
  },
  Yv = async (a, s) => {
    try {
      let l,
        i = {};
      return (
        s === "approve"
          ? ((l = Ta.APPROVE(a)), (i = { action: "approve" }))
          : s === "reject"
          ? ((l = Ta.REJECT(a)), (i = {}))
          : ((l = Ta.APPROVE(a)), (i = { action: s })),
        { success: !0, data: (await at.post(l, i)).data }
      );
    } catch (l) {
      return (
        console.error("Error approving/rejecting advertisement:", l),
        {
          success: !1,
          error:
            l.response?.data?.message ||
            "Failed to process advertisement approval",
        }
      );
    }
  },
  SA = async (a) => {
    try {
      return { success: !0, data: (await at.delete(Ta.DELETE_BY_ID(a))).data };
    } catch (s) {
      return (
        console.error("Error fetching advertisement:", s),
        {
          success: !1,
          error: s.response?.data?.message || "Failed to fetch advertisement",
        }
      );
    }
  },
  Df = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        adminManageAllAds: Rd,
        approveAdvertisement: Yv,
        createAdvertisement: Vv,
        deleteAdsById: SA,
        getAdvertisementById: Bv,
        getAllPublicAdvertisements: xA,
        getFullImageUrl: Tl,
        getLoginUserCreateAllAdvertisements: bA,
        updateAdvertisement: Pv,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Fv = b.createContext(),
  wA = ({ children: a }) => {
    const [s, l] = b.useState([]),
      [i, o] = b.useState(!1),
      [f, h] = b.useState(null),
      m = (V) =>
        Array.isArray(V)
          ? V.map((H) => {
              const Y = Array.isArray(H.images)
                  ? H.images.map((ee) => Tl(ee.image)).filter(Boolean)
                  : [],
                _ = cu(H.status || "draft"),
                K = bg(H.description || "No Description");
              return {
                id: H.id?.toString() || "N/A",
                serialNumber: H.serial_number || H.id?.toString() || "N/A",
                category: H.category || "Uncategorized",
                title: H.title || "No Title",
                description: H.description || "No Description",
                details: H.title
                  ? H.title.length > 20
                    ? H.title.substring(0, 20) + "..."
                    : H.title
                  : "No Details",
                truncatedDescription: K,
                imageCount: Y.length,
                imageDisplay:
                  Y.length > 0 ? `${Y.length} Image(s)` : "No Image",
                images: Y,
                rawImages: H.images || [],
                progress: _,
                url: H.url || "",
                user: H.user || "Unknown",
                views: H.views || 0,
                created_at: H.created_at,
                updated_at: H.updated_at,
                rawStatus: H.status || "draft",
                formattedCreatedAt: En(H.created_at),
                formattedUpdatedAt: En(H.updated_at),
              };
            })
          : (console.warn("Expected array but received:", typeof V), []),
      y = (V) =>
        ({ Approved: "approved", Rejected: "rejected", Pending: "pending" }[
          V
        ] || "pending"),
      p = b.useCallback(async () => {
        o(!0), h(null);
        try {
          const V = await Rd();
          if (V.success && V.data) {
            const H = m(V.data);
            l(H);
          } else {
            const H = V.error || "Failed to fetch advertisements";
            h(H), Te.error(H), l([]);
          }
        } catch (V) {
          console.error("Error fetching advertisements:", V);
          const H =
            "An unexpected error occurred while fetching advertisements";
          h(H), Te.error(H), l([]);
        } finally {
          o(!1);
        }
      }, []),
      v = b.useCallback(async (V) => {
        if (!V) return { success: !1, error: "Advertisement ID is required" };
        try {
          const H = await Bv(V);
          if (H.success && H.data) {
            const Y = Array.isArray(H.data.images)
                ? H.data.images.map((ne) => Tl(ne.image)).filter(Boolean)
                : [],
              _ = cu(H.data.status || "draft"),
              K = bg(H.data.description || "No Description");
            return {
              success: !0,
              data: {
                id: H.data.id?.toString() || "N/A",
                serialNumber:
                  H.data.serial_number || H.data.id?.toString() || "N/A",
                category: H.data.category || "Uncategorized",
                title: H.data.title || "No Title",
                description: H.data.description || "No Description",
                details: H.data.title || "No Details",
                truncatedDescription: K,
                imageCount: Y.length,
                imageDisplay:
                  Y.length > 0 ? `${Y.length} Image(s)` : "No Image",
                images: Y,
                rawImages: H.data.images || [],
                progress: _,
                url: H.data.url || "",
                user: H.data.user || "Unknown",
                views: H.data.views || 0,
                created_at: H.data.created_at,
                updated_at: H.data.updated_at,
                rawStatus: H.data.status || "draft",
                formattedCreatedAt: En(H.data.created_at),
                formattedUpdatedAt: En(H.data.updated_at),
              },
            };
          } else
            return {
              success: !1,
              error: H.error || "Failed to fetch advertisement",
            };
        } catch (H) {
          return (
            console.error("Error fetching advertisement:", H),
            { success: !1, error: "Failed to fetch advertisement" }
          );
        }
      }, []),
      S = b.useCallback(async (V, H) => {
        if (!V || !H)
          return (
            Te.error("Invalid advertisement ID or progress status"),
            { success: !1, error: "Invalid parameters" }
          );
        try {
          const _ = {
            Approved: "approve",
            Rejected: "reject",
            Pending: "pending",
          }[H];
          if (!_)
            return (
              Te.error("Invalid progress status"),
              { success: !1, error: "Invalid progress status" }
            );
          const K = await Yv(V, _);
          if (K.success) {
            l((ne) =>
              ne.map((ye) =>
                ye.id === V
                  ? {
                      ...ye,
                      progress: H,
                      rawStatus: y(H),
                      formattedUpdatedAt: En(new Date().toISOString()),
                    }
                  : ye
              )
            );
            const ee = _ === "approve" ? "approved" : "rejected";
            return (
              Te.success(`Advertisement ${ee} successfully!`), { success: !0 }
            );
          } else {
            const ee = K.error || `Failed to ${_} advertisement`;
            return Te.error(ee), { success: !1, error: ee };
          }
        } catch (Y) {
          return (
            console.error("Error updating progress:", Y),
            Te.error("An unexpected error occurred"),
            { success: !1, error: "An unexpected error occurred" }
          );
        }
      }, []),
      w = b.useCallback(
        async (V) => {
          if (!V)
            return (
              Te.error("Form data is required"),
              { success: !1, error: "Form data is required" }
            );
          try {
            const H = await Vv(V);
            if (H.success)
              return (
                await p(),
                Te.success("Advertisement created successfully!"),
                { success: !0, data: H.data }
              );
            {
              const Y = H.error || "Failed to create advertisement";
              return Te.error(Y), { success: !1, error: Y };
            }
          } catch (H) {
            return (
              console.error("Error creating advertisement:", H),
              Te.error("An unexpected error occurred"),
              { success: !1, error: "An unexpected error occurred" }
            );
          }
        },
        [p]
      ),
      O = b.useCallback(
        async (V, H) => {
          if (!V || !H)
            return (
              Te.error("Advertisement ID and form data are required"),
              { success: !1, error: "Invalid parameters" }
            );
          try {
            const Y = await Pv(V, H);
            if (Y.success)
              return (
                await p(),
                Te.success("Advertisement updated successfully!"),
                { success: !0, data: Y.data }
              );
            {
              const _ = Y.error || "Failed to update advertisement";
              return Te.error(_), { success: !1, error: _ };
            }
          } catch (Y) {
            return (
              console.error("Error updating advertisement:", Y),
              Te.error("An unexpected error occurred"),
              { success: !1, error: "An unexpected error occurred" }
            );
          }
        },
        [p]
      ),
      N = b.useCallback(
        (V) => (V ? s.filter((H) => H.progress === V) : s),
        [s]
      ),
      R = b.useCallback(
        () => ({
          total: s.length,
          pending: s.filter((V) => V.progress === "Pending").length,
          approved: s.filter((V) => V.progress === "Approved").length,
          rejected: s.filter((V) => V.progress === "Rejected").length,
        }),
        [s]
      ),
      C = b.useCallback(() => p(), [p]),
      U = b.useCallback((V) => Lj(V), []);
    b.useEffect(() => {
      p();
    }, [p]);
    const M = {
      advertiseData: s,
      loading: i,
      error: f,
      updateProgress: S,
      fetchAdvertisements: p,
      getAdvertisement: v,
      createNewAdvertisement: w,
      updateAdvertisementData: O,
      refreshAdvertisements: C,
      getAdvertisementsByStatus: N,
      getAdvertisementCounts: R,
      formatProgress: cu,
      getStatusFromProgress: y,
      validateAdvertisement: U,
    };
    return c.jsx(Fv.Provider, { value: M, children: a });
  },
  NA = () => {
    const [a, s] = b.useState(!1),
      [l, i] = b.useState(!1),
      o = Ct(),
      { logout: f, user: h, isAdmin: m } = rs();
    b.useEffect(() => {
      const O = () => {
        i(window.innerWidth < 1024), window.innerWidth >= 1024 && s(!1);
      };
      return (
        O(),
        window.addEventListener("resize", O),
        () => window.removeEventListener("resize", O)
      );
    }, []);
    const y = () => {
        s(!a);
      },
      p = () => {
        s(!1);
      },
      v = () => {
        f();
      },
      S = () =>
        (o.pathname.includes("/dashboard/advertise") ||
          o.pathname.includes("/dashboard/newadvertise")) &&
        !o.pathname.includes("/dashboard/advertiselist") &&
        !o.pathname.includes("/dashboard/advertiseinfo"),
      w = () =>
        o.pathname.includes("/dashboard/advertiselist") ||
        o.pathname.includes("/dashboard/advertiseinfo");
    return c.jsxs("div", {
      children: [
        c.jsx(Is, {}),
        c.jsxs("div", {
          className: " relative",
          children: [
            " ",
            l &&
              c.jsx("button", {
                onClick: y,
                className:
                  "fixed top-48 left-0 z-50 cursor-pointer bg-white border border-gray-300 shadow-lg text-gray-800 p-2 rounded-md lg:hidden hover:bg-gray-50 transition-colors",
                "aria-label": "Toggle Sidebar",
                children: a ? c.jsx(wE, { size: 24 }) : c.jsx(bE, { size: 24 }),
              }),
            c.jsxs("div", {
              className: "flex-row lg:flex gap-8",
              children: [
                l &&
                  a &&
                  c.jsx("div", {
                    className: "absolute inset-0 z-40",
                    onClick: p,
                  }),
                c.jsxs("div", {
                  className: `
              ${l ? "fixed" : "relative"} 
              ${l ? "w-64" : "w-1/6"} 
              flex flex-col justify-between bg-[#f2f2f2] h-screen p-6 z-40
              transition-transform duration-300 ease-in-out
              ${
                l
                  ? a
                    ? "transform translate-x-0"
                    : "transform -translate-x-full"
                  : "transform translate-x-0"
              }
              ${l ? "top-0 left-0 pt-10" : ""}
            `,
                  children: [
                    l &&
                      c.jsx("div", {
                        className: "flex justify-end",
                        children: c.jsx("button", {
                          onClick: p,
                          className:
                            "text-[#505050] hover:text-[#00254a] p-1 border cursor-pointer rounded-full",
                          "aria-label": "Close Sidebar",
                          children: c.jsx(Yu, { size: 28 }),
                        }),
                      }),
                    c.jsxs("div", {
                      className: "pt-0  lg:pt-44",
                      children: [
                        c.jsx("h2", {
                          className: "text-xl font-bold text-[#142335] mb-4",
                          children: "My Account",
                        }),
                        c.jsxs("ul", {
                          className: "space-y-2",
                          children: [
                            c.jsx("li", {
                              children: c.jsx(su, {
                                to: "/dashboard/profile",
                                className: ({ isActive: O }) =>
                                  `block py-3 px-4 font-medium transition-colors rounded-md ${
                                    O
                                      ? "bg-[#00254a] text-white"
                                      : "text-[#505050] hover:bg-[#e2e2e2]"
                                  }`,
                                onClick: l ? p : void 0,
                                children: "My Profile",
                              }),
                            }),
                            c.jsx("li", {
                              children: c.jsx(su, {
                                to: "/dashboard/advertise",
                                className: () =>
                                  `block py-3 px-4 font-medium transition-colors rounded-md ${
                                    S()
                                      ? "bg-[#00254a] text-white"
                                      : "text-[#505050] hover:bg-[#e2e2e2]"
                                  }`,
                                onClick: l ? p : void 0,
                                children: "Advertise",
                              }),
                            }),
                            (m() || h?.role === "admin") &&
                              c.jsx("li", {
                                children: c.jsx(su, {
                                  to: "/dashboard/advertiselist",
                                  className: () =>
                                    `block py-3 px-4 font-medium transition-colors rounded-md ${
                                      w()
                                        ? "bg-[#00254a] text-white"
                                        : "text-[#505050] hover:bg-[#e2e2e2]"
                                    }`,
                                  onClick: l ? p : void 0,
                                  children: "Advertise List",
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                    c.jsx("div", {
                      className: "bottom-1",
                      children: c.jsx("button", {
                        onClick: v,
                        className:
                          "w-30 py-2 text-white px-2 cursor-pointer bg-button-bg rounded-md",
                        children: "Log out",
                      }),
                    }),
                  ],
                }),
                c.jsx("div", {
                  className: `flex-1 pt-32 md:pt-40 lg:pt-44 ${
                    l ? "w-full mt-24" : ""
                  } transition-all duration-300`,
                  children: c.jsx(wA, { children: c.jsx(lr, {}) }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
function jA({ className: a, ...s }) {
  return c.jsx("div", {
    "data-slot": "table-container",
    className: "relative w-full overflow-x-auto",
    children: c.jsx("table", {
      "data-slot": "table",
      className: Le("w-full caption-bottom text-sm", a),
      ...s,
    }),
  });
}
function EA({ className: a, ...s }) {
  return c.jsx("thead", {
    "data-slot": "table-header",
    className: Le("[&_tr]:border-b", a),
    ...s,
  });
}
function AA({ className: a, ...s }) {
  return c.jsx("tbody", {
    "data-slot": "table-body",
    className: Le("[&_tr:last-child]:border-0", a),
    ...s,
  });
}
function Mf({ className: a, ...s }) {
  return c.jsx("tr", {
    "data-slot": "table-row",
    className: Le(
      "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
      a
    ),
    ...s,
  });
}
function Qa({ className: a, ...s }) {
  return c.jsx("th", {
    "data-slot": "table-head",
    className: Le(
      "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      a
    ),
    ...s,
  });
}
function Ea({ className: a, ...s }) {
  return c.jsx("td", {
    "data-slot": "table-cell",
    className: Le(
      "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      a
    ),
    ...s,
  });
}
const TA = bd(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  }
);
function Ou({ className: a, variant: s, asChild: l = !1, ...i }) {
  const o = l ? ov : "span";
  return c.jsx(o, {
    "data-slot": "badge",
    className: Le(TA({ variant: s }), a),
    ...i,
  });
}
function CA({ className: a, ...s }) {
  return c.jsx("nav", {
    role: "navigation",
    "aria-label": "pagination",
    "data-slot": "pagination",
    className: Le("mx-auto flex w-full justify-center", a),
    ...s,
  });
}
function OA({ className: a, ...s }) {
  return c.jsx("ul", {
    "data-slot": "pagination-content",
    className: Le("flex flex-row items-center gap-1", a),
    ...s,
  });
}
function yl({ ...a }) {
  return c.jsx("li", { "data-slot": "pagination-item", ...a });
}
function Ru({ className: a, isActive: s, size: l = "icon", ...i }) {
  return c.jsx("a", {
    "aria-current": s ? "page" : void 0,
    "data-slot": "pagination-link",
    "data-active": s,
    className: Le(fv({ variant: s ? "outline" : "ghost", size: l }), a),
    ...i,
  });
}
function RA({ className: a, ...s }) {
  return c.jsxs(Ru, {
    "aria-label": "Go to previous page",
    size: "default",
    className: Le("gap-1 px-2.5 sm:pl-2.5", a),
    ...s,
    children: [
      c.jsx(hv, {}),
      c.jsx("span", { className: "hidden sm:block", children: "Previous" }),
    ],
  });
}
function _A({ className: a, ...s }) {
  return c.jsxs(Ru, {
    "aria-label": "Go to next page",
    size: "default",
    className: Le("gap-1 px-2.5 sm:pr-2.5", a),
    ...s,
    children: [
      c.jsx("span", { className: "hidden sm:block", children: "Next" }),
      c.jsx(mv, {}),
    ],
  });
}
function DA({ className: a, ...s }) {
  return c.jsxs("span", {
    "aria-hidden": !0,
    "data-slot": "pagination-ellipsis",
    className: Le("flex size-9 items-center justify-center", a),
    ...s,
    children: [
      c.jsx(lE, { className: "size-4" }),
      c.jsx("span", { className: "sr-only", children: "More pages" }),
    ],
  });
}
function MA() {
  const [a, s] = b.useState([]),
    [l, i] = b.useState(!0),
    [o, f] = b.useState(null),
    [h, m] = b.useState(1),
    [y] = b.useState(12),
    p = ns();
  b.useEffect(() => {
    v();
  }, []);
  const v = async () => {
      i(!0), f(null);
      try {
        const _ = await Rd();
        if (_.success && _.data) {
          const K = _.data.map((ee) => {
            const ne = Array.isArray(ee.images)
              ? ee.images.map((ye) => Tl(ye.image)).filter(Boolean)
              : [];
            return {
              id: ee.id?.toString() || "N/A",
              serialNumber: ee.serial_number || ee.id?.toString() || "N/A",
              category: ee.category || "Uncategorized",
              title: ee.title || "No Title",
              description: ee.description || "No Description",
              imageCount: ne.length,
              imageDisplay:
                ne.length > 0 ? `${ne.length} Image(s)` : "No Image",
              images: ne,
              progress: cu(ee.status || "pending"),
              rawStatus: ee.status || "pending",
              url: ee.url || "",
              user: ee.user || "Unknown",
              views: ee.views || 0,
              created_at: ee.created_at,
              updated_at: ee.updated_at,
            };
          });
          s(K), m(1);
        } else {
          const K = _.error || "Failed to fetch advertisements";
          f(K), Te.error(K), s([]);
        }
      } catch (_) {
        console.error("Error fetching advertisements:", _);
        const K = "An unexpected error occurred";
        f(K), Te.error(K), s([]);
      } finally {
        i(!1);
      }
    },
    S = async (_) => {
      if (_.id) p(`/dashboard/advertiseinfo/${_.id}`);
      else {
        Te.error("Invalid advertisement ID");
        return;
      }
    },
    w = () => {
      v();
    },
    O = a.length,
    N = Math.ceil(O / y),
    R = (h - 1) * y,
    C = R + y,
    U = a.slice(R, C),
    M = (_) => {
      _ >= 1 && _ <= N && m(_);
    },
    V = () => {
      h > 1 && m(h - 1);
    },
    H = () => {
      h < N && m(h + 1);
    },
    Y = () => {
      const K = [],
        ee = [];
      for (let ne = Math.max(2, h - 2); ne <= Math.min(N - 1, h + 2); ne++)
        K.push(ne);
      return (
        h - 2 > 2 ? ee.push(1, "...") : ee.push(1),
        ee.push(...K),
        h + 2 < N - 1 ? ee.push("...", N) : ee.push(N),
        ee.filter((ne, ye, Me) =>
          typeof ne == "number" ? ne <= N && Me.indexOf(ne) === ye : !0
        )
      );
    };
  return l
    ? c.jsxs("div", {
        className: "w-full mx-auto p-4 pt-4",
        children: [
          c.jsx("div", {
            className: "flex justify-between items-center mb-6",
            children: c.jsx("h1", {
              className: "text-base md:text-2xl font-medium text-secondary",
              children: "Advertisement Management",
            }),
          }),
          c.jsx("div", {
            className: "flex justify-center items-center h-64",
            children: c.jsx("div", {
              className: "text-lg text-gray-500",
              children: "Loading advertisements...",
            }),
          }),
        ],
      })
    : o
    ? c.jsxs("div", {
        className: "w-full mx-auto p-4 pt-4",
        children: [
          c.jsxs("div", {
            className: "flex justify-between items-center mb-6",
            children: [
              c.jsx("h1", {
                className: "text-base md:text-2xl font-medium text-secondary",
                children: "Advertisement Management",
              }),
              c.jsx(He, { onClick: w, variant: "outline", children: "Retry" }),
            ],
          }),
          c.jsxs("div", {
            className:
              "flex flex-col justify-center items-center h-64 space-y-4",
            children: [
              c.jsxs("div", {
                className: "text-lg text-red-500",
                children: ["Error: ", o],
              }),
              c.jsx(He, {
                onClick: w,
                variant: "outline",
                children: "Try Again",
              }),
            ],
          }),
        ],
      })
    : c.jsxs("div", {
        className: "w-full mx-auto p-4 pt-4",
        children: [
          c.jsxs("div", {
            className: "flex justify-between items-center mb-6",
            children: [
              c.jsx("h1", {
                className: "text-base md:text-2xl font-medium text-secondary",
                children: "Advertisement Management",
              }),
              c.jsxs("div", {
                className: "flex items-center space-x-4",
                children: [
                  c.jsxs("div", {
                    className: "text-sm text-gray-500",
                    children: ["Total: ", a.length, " advertisements"],
                  }),
                  c.jsx(He, {
                    onClick: w,
                    variant: "outline",
                    size: "sm",
                    children: "Refresh",
                  }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            className: "grid grid-cols-2 md:grid-cols-3 gap-4 mb-6",
            children: [
              c.jsxs("div", {
                className: "bg-white p-4 rounded-lg border",
                children: [
                  c.jsx("div", {
                    className: "text-2xl font-bold text-gray-900",
                    children: a.filter((_) => _.progress === "Approved").length,
                  }),
                  c.jsx("div", {
                    className: "text-sm text-custom-green",
                    children: "Approved",
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "bg-white p-4 rounded-lg border",
                children: [
                  c.jsx("div", {
                    className: "text-2xl font-bold text-gray-900",
                    children: a.filter((_) => _.progress === "Pending").length,
                  }),
                  c.jsx("div", {
                    className: "text-sm text-custom-yellow",
                    children: "Pending",
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "bg-white p-4 rounded-lg border",
                children: [
                  c.jsx("div", {
                    className: "text-2xl font-bold text-gray-900",
                    children: a.filter((_) => _.progress === "Rejected").length,
                  }),
                  c.jsx("div", {
                    className: "text-sm text-textColor",
                    children: "Rejected",
                  }),
                ],
              }),
            ],
          }),
          c.jsx("div", {
            className: "rounded-lg overflow-hidden border bg-white",
            children: c.jsxs(jA, {
              children: [
                c.jsx(EA, {
                  className: "bg-[#E7EFFE]",
                  children: c.jsxs(Mf, {
                    children: [
                      c.jsx(Qa, {
                        className: "font-medium text-secondary",
                        children: "ID",
                      }),
                      c.jsx(Qa, {
                        className: "font-medium text-secondary",
                        children: "Serial",
                      }),
                      c.jsx(Qa, {
                        className: "font-medium text-secondary",
                        children: "Title",
                      }),
                      c.jsx(Qa, {
                        className: "font-medium text-secondary",
                        children: "Category",
                      }),
                      c.jsx(Qa, {
                        className: "font-medium text-secondary",
                        children: "User",
                      }),
                      c.jsx(Qa, {
                        className: "font-medium text-secondary",
                        children: "Images",
                      }),
                      c.jsx(Qa, {
                        className: "font-medium text-secondary",
                        children: "Status",
                      }),
                      c.jsx(Qa, {
                        className: "font-medium text-secondary",
                        children: "Created",
                      }),
                      c.jsx(Qa, {
                        className: "font-medium text-secondary",
                        children: "Actions",
                      }),
                    ],
                  }),
                }),
                c.jsx(AA, {
                  children:
                    U.length === 0
                      ? c.jsx(Mf, {
                          children: c.jsx(Ea, {
                            colSpan: 9,
                            className: "text-center py-8 text-gray-500",
                            children: "No advertisements found",
                          }),
                        })
                      : U.map((_, K) =>
                          c.jsxs(
                            Mf,
                            {
                              className:
                                K % 2 === 0 ? "bg-white" : "bg-gray-50",
                              children: [
                                c.jsxs(Ea, {
                                  className: "font-medium text-secondary",
                                  children: ["#", _.id],
                                }),
                                c.jsx(Ea, {
                                  className: "text-secondary font-mono text-sm",
                                  children: _.serialNumber,
                                }),
                                c.jsxs(Ea, {
                                  className: "text-secondary max-w-xs",
                                  children: [
                                    c.jsx("div", {
                                      className: "truncate",
                                      title: _.title,
                                      children: _.title,
                                    }),
                                    _.description &&
                                      c.jsx("div", {
                                        className:
                                          "text-xs text-gray-500 truncate mt-1",
                                        title: _.description,
                                        children:
                                          _.description.length > 50
                                            ? _.description.substring(0, 50) +
                                              "..."
                                            : _.description,
                                      }),
                                  ],
                                }),
                                c.jsx(Ea, {
                                  className: "text-secondary",
                                  children: c.jsx(Ou, {
                                    variant: "outline",
                                    className: "text-xs",
                                    children: _.category,
                                  }),
                                }),
                                c.jsx(Ea, {
                                  className: "text-secondary",
                                  children: c.jsxs("div", {
                                    className: "flex items-center space-x-1",
                                    children: [
                                      c.jsx(Nu, { className: "h-3 w-3" }),
                                      c.jsx("span", {
                                        className: "text-sm truncate max-w-24",
                                        title: _.user,
                                        children: _.user,
                                      }),
                                    ],
                                  }),
                                }),
                                c.jsx(Ea, {
                                  className: "text-secondary",
                                  children: c.jsx("div", {
                                    className: "flex items-center space-x-1",
                                    children: c.jsx("span", {
                                      className: "text-sm",
                                      children: _.imageDisplay,
                                    }),
                                  }),
                                }),
                                c.jsx(Ea, {
                                  children: c.jsx(Ou, {
                                    variant: Hj(_.progress),
                                    className: `text-xs ${qj(_.progress)}`,
                                    children: _.progress,
                                  }),
                                }),
                                c.jsx(Ea, {
                                  className: "text-secondary",
                                  children: c.jsxs("div", {
                                    className: "flex items-center space-x-1",
                                    children: [
                                      c.jsx(If, { className: "h-3 w-3" }),
                                      c.jsx("span", {
                                        className: "text-xs",
                                        children: En(_.created_at),
                                      }),
                                    ],
                                  }),
                                }),
                                c.jsx(Ea, {
                                  children: c.jsx("div", {
                                    className: "flex items-center space-x-2",
                                    children: c.jsx(He, {
                                      variant: "ghost",
                                      size: "sm",
                                      onClick: () => S(_),
                                      className: "h-8 w-8 p-0",
                                      title: "Edit Advertisement",
                                      children: c.jsx(EE, {
                                        className: "h-4 w-4 text-blue-600",
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            },
                            `${_.id}-${K}`
                          )
                        ),
                }),
              ],
            }),
          }),
          N > 1 &&
            c.jsx("div", {
              className: "mt-6",
              children: c.jsx(CA, {
                children: c.jsxs(OA, {
                  children: [
                    c.jsx(yl, {
                      children: c.jsx(RA, {
                        onClick: V,
                        disabled: h === 1,
                        className:
                          h === 1
                            ? "pointer-events-none opacity-50"
                            : "cursor-pointer",
                      }),
                    }),
                    N <= 7
                      ? Array.from({ length: N }, (_, K) => K + 1).map((_) =>
                          c.jsx(
                            yl,
                            {
                              children: c.jsx(Ru, {
                                onClick: () => M(_),
                                isActive: h === _,
                                className: "cursor-pointer",
                                children: _,
                              }),
                            },
                            _
                          )
                        )
                      : Y().map((_, K) =>
                          _ === "..."
                            ? c.jsx(
                                yl,
                                { children: c.jsx(DA, {}) },
                                `ellipsis-${K}`
                              )
                            : c.jsx(
                                yl,
                                {
                                  children: c.jsx(Ru, {
                                    onClick: () => M(_),
                                    isActive: h === _,
                                    className: "cursor-pointer",
                                    children: _,
                                  }),
                                },
                                _
                              )
                        ),
                    c.jsx(yl, {
                      children: c.jsx(_A, {
                        onClick: H,
                        disabled: h === N,
                        className:
                          h === N
                            ? "pointer-events-none opacity-50"
                            : "cursor-pointer",
                      }),
                    }),
                  ],
                }),
              }),
            }),
          a.length > 0 &&
            c.jsxs("div", {
              className: "mt-4 text-center text-sm text-gray-500",
              children: [
                "Showing ",
                R + 1,
                " to ",
                Math.min(C, O),
                " of",
                " ",
                O,
                " advertisement",
                O !== 1 ? "s" : "",
                N > 1 && ` (Page ${h} of ${N})`,
              ],
            }),
        ],
      });
}
var UA = "Separator",
  Vg = "horizontal",
  zA = ["horizontal", "vertical"],
  Gv = b.forwardRef((a, s) => {
    const { decorative: l, orientation: i = Vg, ...o } = a,
      f = kA(i) ? i : Vg,
      m = l
        ? { role: "none" }
        : {
            "aria-orientation": f === "vertical" ? f : void 0,
            role: "separator",
          };
    return c.jsx(zl.div, { "data-orientation": f, ...m, ...o, ref: s });
  });
Gv.displayName = UA;
function kA(a) {
  return zA.includes(a);
}
var LA = Gv;
function gl({
  className: a,
  orientation: s = "horizontal",
  decorative: l = !0,
  ...i
}) {
  return c.jsx(LA, {
    "data-slot": "separator-root",
    decorative: l,
    orientation: s,
    className: Le(
      "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
      a
    ),
    ...i,
  });
}
const HA = bd(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
      },
    },
    defaultVariants: { variant: "default" },
  }
);
function Pg({ className: a, variant: s, ...l }) {
  return c.jsx("div", {
    "data-slot": "alert",
    role: "alert",
    className: Le(HA({ variant: s }), a),
    ...l,
  });
}
function Yg({ className: a, ...s }) {
  return c.jsx("div", {
    "data-slot": "alert-description",
    className: Le(
      "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
      a
    ),
    ...s,
  });
}
const At = { APPROVED: "Approved", REJECTED: "Rejected", PENDING: "Pending" },
  In = { APPROVED: "approved", REJECTED: "rejected", PENDING: "pending" },
  qA = (a) => {
    const s = {
      [At.APPROVED]: {
        color: "text-green-700 bg-green-100 border-green-300",
        icon: Sd,
      },
      [At.REJECTED]: {
        color: "text-red-700 bg-red-100 border-red-300",
        icon: pv,
      },
      [At.PENDING]: {
        color: "text-yellow-700 bg-yellow-100 border-yellow-300",
        icon: yv,
      },
    };
    return s[a] || s[At.PENDING];
  },
  BA = (a) =>
    ({
      [In.APPROVED]: At.APPROVED,
      [In.REJECTED]: At.REJECTED,
      [In.PENDING]: At.PENDING,
    }[a] || At.PENDING),
  VA = (a, s, l, i) => {
    b.useEffect(() => {
      if (!a) return;
      const o = (f) => {
        switch (f.key) {
          case "Escape":
            s();
            break;
          case "ArrowLeft":
            l();
            break;
          case "ArrowRight":
            i();
            break;
        }
      };
      return (
        document.addEventListener("keydown", o),
        () => document.removeEventListener("keydown", o)
      );
    }, [a, s, l, i]);
  },
  PA = ({
    isOpen: a,
    onClose: s,
    images: l,
    currentIndex: i,
    onIndexChange: o,
    title: f,
  }) => {
    const h = l?.length || 0,
      m = b.useCallback(() => {
        o((v) => (v === 0 ? h - 1 : v - 1));
      }, [h, o]),
      y = b.useCallback(() => {
        o((v) => (v === h - 1 ? 0 : v + 1));
      }, [h, o]);
    if ((VA(a, s, m, y), !a || i === null || !l?.length)) return null;
    const p = l[i];
    return c.jsx("div", {
      className:
        "fixed inset-0 bg-white/80 bg-opacity-90 z-50 flex items-center justify-center p-4",
      onClick: s,
      children: c.jsxs("div", {
        className: "relative max-w-4xl max-h-full",
        children: [
          c.jsx("button", {
            onClick: s,
            className:
              "absolute top-4 right-4 text-white hover:text-gray-300 z-10 transition-colors",
            "aria-label": "Close modal",
            children: c.jsx(Yu, { className: "h-8 w-8" }),
          }),
          c.jsxs("div", {
            className:
              "absolute top-4 left-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm z-10",
            children: [i + 1, " of ", h],
          }),
          h > 1 &&
            c.jsxs(c.Fragment, {
              children: [
                c.jsx("button", {
                  onClick: (v) => {
                    v.stopPropagation(), m();
                  },
                  className:
                    "absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 transition-colors",
                  "aria-label": "Previous image",
                  children: c.jsx(hv, { className: "h-8 w-8" }),
                }),
                c.jsx("button", {
                  onClick: (v) => {
                    v.stopPropagation(), y();
                  },
                  className:
                    "absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 transition-colors",
                  "aria-label": "Next image",
                  children: c.jsx(mv, { className: "h-8 w-8" }),
                }),
              ],
            }),
          c.jsx("div", {
            className: "bg-white rounded-lg p-2",
            onClick: (v) => v.stopPropagation(),
            children: c.jsx("img", {
              src: p,
              alt: `${f} - Image ${i + 1}`,
              className: "max-w-full max-h-[80vh] object-contain rounded",
              onError: (v) => {
                console.error("Failed to load modal image:", p),
                  (v.target.src = "/placeholder-image.svg");
              },
            }),
          }),
          c.jsxs("div", {
            className: "text-white text-center mt-2 text-sm",
            children: [f, " - Image ", i + 1],
          }),
        ],
      }),
    });
  },
  YA = ({
    images: a,
    onImageClick: s,
    imageErrors: l,
    onImageError: i,
    title: o,
  }) =>
    c.jsxs(wl, {
      children: [
        c.jsx(hu, {
          children: c.jsxs(mu, {
            className: "flex items-center space-x-2",
            children: [
              c.jsx(Rf, { className: "h-5 w-5 text-primary" }),
              c.jsxs("span", { children: ["Images (", a?.length || 0, ")"] }),
            ],
          }),
        }),
        c.jsx(Nl, {
          children:
            a?.length > 0
              ? c.jsx("div", {
                  className:
                    "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
                  children: a.map((f, h) =>
                    c.jsxs(
                      "div",
                      {
                        className:
                          "relative group overflow-hidden rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-colors cursor-pointer",
                        onClick: () => s(h),
                        children: [
                          c.jsx("div", {
                            className: "aspect-square bg-gray-100",
                            children: l[h]
                              ? c.jsx("div", {
                                  className:
                                    "w-full h-full flex items-center justify-center text-gray-400",
                                  children: c.jsxs("div", {
                                    className: "text-center p-4",
                                    children: [
                                      c.jsx(Rf, {
                                        className: "h-8 w-8 mx-auto mb-2",
                                      }),
                                      c.jsx("p", {
                                        className: "text-xs",
                                        children: "Image not available",
                                      }),
                                    ],
                                  }),
                                })
                              : c.jsx("img", {
                                  src: f,
                                  alt: `${o} - Image ${h + 1}`,
                                  className: "w-full h-full object-cover",
                                  onError: () => i(h),
                                  loading: "lazy",
                                }),
                          }),
                          c.jsx("div", {
                            className:
                              "absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center",
                            children: c.jsxs("div", {
                              className:
                                "text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity text-center",
                              children: [
                                c.jsx("p", { children: "Click to large" }),
                                c.jsxs("p", {
                                  className: "text-xs",
                                  children: ["Image ", h + 1],
                                }),
                              ],
                            }),
                          }),
                        ],
                      },
                      `image-${h}`
                    )
                  ),
                })
              : c.jsxs("div", {
                  className: "text-center py-8 text-gray-500",
                  children: [
                    c.jsx(Rf, {
                      className: "h-12 w-12 mx-auto mb-3 text-gray-300",
                    }),
                    c.jsx("p", {
                      className: "text-base",
                      children: "No images uploaded",
                    }),
                  ],
                }),
        }),
      ],
    }),
  Fg = ({
    onClick: a,
    disabled: s,
    processing: l,
    variant: i,
    className: o,
    icon: f,
    children: h,
  }) =>
    c.jsx(He, {
      onClick: a,
      disabled: s,
      variant: i,
      className: o,
      children: l
        ? c.jsxs("div", {
            className: "flex items-center space-x-2",
            children: [
              c.jsx(td, { className: "h-4 w-4 animate-spin" }),
              c.jsx("span", { children: "Processing..." }),
            ],
          })
        : c.jsxs("div", {
            className: "flex items-center space-x-2",
            children: [
              c.jsx(f, { className: "h-4 w-4" }),
              c.jsx("span", { children: h }),
            ],
          }),
    });
function FA() {
  const { id: a } = SS(),
    s = ns(),
    l = b.useContext(Fv),
    { getAdvertisement: i, updateProgress: o } = l || {},
    [f, h] = b.useState(null),
    [m, y] = b.useState(!0),
    [p, v] = b.useState(!1),
    [S, w] = b.useState(null),
    [O, N] = b.useState({}),
    [R, C] = b.useState(null),
    [U, M] = b.useState(!1),
    V = b.useMemo(() => (f ? qA(f.progress) : null), [f?.progress]),
    H = b.useCallback(() => s(-1), [s]),
    Y = b.useCallback((Q) => {
      N((L) => ({ ...L, [Q]: !0 })),
        console.error(`Failed to load image at index ${Q}`);
    }, []),
    _ = b.useCallback((Q) => {
      C(Q), M(!0);
    }, []),
    K = b.useCallback(() => {
      M(!1), C(null);
    }, []),
    ee = b.useCallback(
      async (Q) => {
        if (!Q.success || !Q.data)
          throw new Error(Q.error || "Failed to process response");
        if (i) return Q.data;
        const { getFullImageUrl: L } = await es(async () => {
            const { getFullImageUrl: re } = await Promise.resolve().then(
              () => Df
            );
            return { getFullImageUrl: re };
          }, []),
          I = Array.isArray(Q.data.images)
            ? Q.data.images.map((re) => L(re.image)).filter(Boolean)
            : [];
        return {
          id: Q.data.id?.toString() || "N/A",
          serialNumber: Q.data.serial_number || Q.data.id?.toString() || "N/A",
          category: Q.data.category || "Uncategorized",
          title: Q.data.title || "No Title",
          description: Q.data.description || "No Description",
          images: I,
          progress: BA(Q.data.status || In.PENDING),
          rawStatus: Q.data.status || In.PENDING,
          url: Q.data.url || "",
          user: Q.data.user || "Unknown",
          views: Q.data.views || 0,
          created_at: Q.data.created_at,
          updated_at: Q.data.updated_at,
        };
      },
      [i]
    ),
    ne = b.useCallback(async () => {
      if (!a) {
        w("No advertisement ID provided"), y(!1);
        return;
      }
      y(!0), w(null);
      try {
        let Q;
        if (i) Q = await i(a);
        else {
          const { getAdvertisementById: I } = await es(async () => {
            const { getAdvertisementById: re } = await Promise.resolve().then(
              () => Df
            );
            return { getAdvertisementById: re };
          }, void 0);
          Q = await I(a);
        }
        const L = await ee(Q);
        h(L);
      } catch (Q) {
        console.error("Error fetching advertisement:", Q);
        const L =
          Q.message ||
          "An unexpected error occurred while fetching advertisement";
        w(L), Te.error(L);
      } finally {
        y(!1);
      }
    }, [a, i, ee]),
    ye = b.useCallback(
      async (Q, L) => {
        if (f?.id) {
          v(!0);
          try {
            let I;
            if (o) I = await o(f.id, Q);
            else {
              const { approveAdvertisement: re } = await es(async () => {
                  const { approveAdvertisement: E } =
                    await Promise.resolve().then(() => Df);
                  return { approveAdvertisement: E };
                }, void 0),
                je = Q === At.APPROVED ? "approve" : "reject";
              I = await re(f.id, je);
            }
            if (I.success)
              h((re) => ({
                ...re,
                progress: Q,
                rawStatus: Q === At.APPROVED ? In.APPROVED : In.REJECTED,
              }));
            else
              throw new Error(
                I.error || `Failed to ${Q.toLowerCase()} advertisement`
              );
          } catch (I) {
            console.error(`Error updating status to ${Q}:`, I),
              Te.error(I.message || "An unexpected error occurred");
          } finally {
            v(!1);
          }
        }
      },
      [f?.id, o]
    ),
    Me = b.useCallback(() => {
      ye(At.APPROVED);
    }, [ye]),
    fe = b.useCallback(() => {
      ye(At.REJECTED);
    }, [ye]),
    se = b.useCallback(
      (Q) => {
        if (p || !f) return !0;
        switch (Q) {
          case "approve":
            return f.progress === At.APPROVED;
          case "reject":
            return f.progress === At.REJECTED;
          default:
            return !1;
        }
      },
      [p, f?.progress]
    );
  if (
    (b.useEffect(() => {
      ne();
    }, [ne]),
    m)
  )
    return c.jsx("div", {
      className: "min-h-screen pt-4 px-4",
      children: c.jsxs("div", {
        className: "max-w-4xl mx-auto",
        children: [
          c.jsxs("div", {
            className: "flex items-center space-x-4 mb-6",
            children: [
              c.jsxs(He, {
                variant: "ghost",
                size: "sm",
                onClick: H,
                className: "flex items-center space-x-2",
                children: [
                  c.jsx(Zn, { className: "h-4 w-4" }),
                  c.jsx("span", { children: "Back" }),
                ],
              }),
              c.jsx("h1", {
                className: "text-xl md:text-2xl font-semibold text-secondary",
                children: "Advertisement Details",
              }),
            ],
          }),
          c.jsx("div", {
            className: "flex justify-center items-center h-64",
            children: c.jsxs("div", {
              className: "flex items-center space-x-3",
              children: [
                c.jsx(td, { className: "h-6 w-6 animate-spin text-primary" }),
                c.jsx("span", {
                  className: "text-lg text-gray-500",
                  children: "Loading advertisement...",
                }),
              ],
            }),
          }),
        ],
      }),
    });
  if (S)
    return c.jsx("div", {
      className: "min-h-screen pt-4 px-4",
      children: c.jsxs("div", {
        className: "max-w-4xl mx-auto",
        children: [
          c.jsxs("div", {
            className: "flex items-center space-x-4 mb-6",
            children: [
              c.jsxs(He, {
                variant: "ghost",
                size: "sm",
                onClick: H,
                className: "flex items-center space-x-2",
                children: [
                  c.jsx(Zn, { className: "h-4 w-4" }),
                  c.jsx("span", { children: "Back" }),
                ],
              }),
              c.jsx("h1", {
                className: "text-xl md:text-2xl font-semibold text-secondary",
                children: "Advertisement Details",
              }),
            ],
          }),
          c.jsxs(Pg, {
            variant: "destructive",
            children: [
              c.jsx(wg, { className: "h-4 w-4" }),
              c.jsx(Yg, { children: S }),
            ],
          }),
          c.jsx("div", {
            className: "mt-4",
            children: c.jsx(He, {
              onClick: ne,
              variant: "outline",
              children: "Try Again",
            }),
          }),
        ],
      }),
    });
  if (!f)
    return c.jsx("div", {
      className: "min-h-screen pt-4 px-4",
      children: c.jsxs("div", {
        className: "max-w-4xl mx-auto",
        children: [
          c.jsxs("div", {
            className: "flex items-center space-x-4 mb-6",
            children: [
              c.jsxs(He, {
                variant: "ghost",
                size: "sm",
                onClick: H,
                className: "flex items-center space-x-2",
                children: [
                  c.jsx(Zn, { className: "h-4 w-4" }),
                  c.jsx("span", { children: "Back" }),
                ],
              }),
              c.jsx("h1", {
                className: "text-xl md:text-2xl font-semibold text-secondary",
                children: "Advertisement Details",
              }),
            ],
          }),
          c.jsxs(Pg, {
            children: [
              c.jsx(wg, { className: "h-4 w-4" }),
              c.jsx(Yg, { children: "Advertisement not found" }),
            ],
          }),
        ],
      }),
    });
  const me = V.icon;
  return c.jsx("div", {
    className: "min-h-screen p-4 bg-gray-50",
    children: c.jsxs("div", {
      className: "max-full mx-auto space-y-4",
      children: [
        c.jsxs("div", {
          className: "flex items-center justify-between",
          children: [
            c.jsxs("div", {
              className: "flex items-center space-x-4",
              children: [
                c.jsxs(He, {
                  variant: "ghost",
                  size: "sm",
                  onClick: H,
                  className: "flex items-center space-x-2",
                  children: [
                    c.jsx(Zn, { className: "h-4 w-4" }),
                    c.jsx("span", { children: "Back" }),
                  ],
                }),
                c.jsxs("div", {
                  children: [
                    c.jsx("h1", {
                      className:
                        "text-xl md:text-2xl font-semibold text-secondary",
                      children: "Advertisement Details",
                    }),
                    c.jsx("p", {
                      className: "text-sm text-gray-500 mt-1",
                      children: "Review and manage advertisement status",
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs(Ou, {
              className: Le(
                "flex items-center space-x-1 px-3 py-1 text-sm font-medium",
                V.color
              ),
              children: [
                c.jsx(me, { className: "h-4 w-4" }),
                c.jsx("span", { children: f.progress }),
              ],
            }),
          ],
        }),
        c.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-3 gap-4",
          children: [
            c.jsxs("div", {
              className: "lg:col-span-2 space-y-2",
              children: [
                c.jsxs(wl, {
                  children: [
                    c.jsx(hu, {
                      children: c.jsxs(mu, {
                        className: "flex items-center space-x-2",
                        children: [
                          c.jsx(fE, { className: "h-5 w-5 text-primary" }),
                          c.jsx("span", { children: "Basic Information" }),
                        ],
                      }),
                    }),
                    c.jsxs(Nl, {
                      className: "space-y-4 py-0",
                      children: [
                        c.jsxs("div", {
                          children: [
                            c.jsx("label", {
                              className: "text-sm font-medium text-gray-800",
                              children: "Title",
                            }),
                            c.jsx("h2", {
                              className: "text-lg font-bold text-primary",
                              children: f.title,
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          children: [
                            c.jsx("label", {
                              className: "text-sm font-medium text-gray-600",
                              children: "Description",
                            }),
                            c.jsx("p", {
                              className:
                                "text-base text-gray-700 mt-1 leading-relaxed",
                              children: f.description,
                            }),
                          ],
                        }),
                        c.jsx(gl, {}),
                        c.jsxs("div", {
                          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                          children: [
                            c.jsx("div", {
                              children: c.jsxs("label", {
                                className:
                                  "text-sm text-gray-800 flex font-bold items-center space-x-1",
                                children: [
                                  "Advertisement ID :: ",
                                  c.jsx(jg, { className: "h-3 w-3" }),
                                  f.id,
                                ],
                              }),
                            }),
                            c.jsx("div", {
                              children: c.jsxs("label", {
                                className:
                                  "text-sm font-medium text-gray-600 flex items-center space-x-1",
                                children: [
                                  c.jsx(jg, { className: "h-3 w-3" }),
                                  c.jsx("span", {
                                    className: "mr-1",
                                    children: "Serial Number:: ",
                                  }),
                                  c.jsx("span", {
                                    className: "text-black",
                                    children: f.serialNumber,
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        c.jsx(gl, {}),
                        c.jsx("div", {
                          children: c.jsxs("label", {
                            className:
                              "text-sm font-medium text-gray-600 flex items-center space-x-1",
                            children: [
                              c.jsx(TE, { className: "h-3 w-3" }),
                              c.jsx("span", { children: "Category" }),
                              c.jsx(Ou, {
                                variant: "outline",
                                className: "ml-1 mt-1",
                                children: f.category,
                              }),
                            ],
                          }),
                        }),
                        f.url &&
                          c.jsxs(c.Fragment, {
                            children: [
                              c.jsx(gl, {}),
                              c.jsxs("div", {
                                children: [
                                  c.jsxs("label", {
                                    className:
                                      "text-sm font-medium text-gray-600 flex items-center space-x-1",
                                    children: [
                                      c.jsx(Ng, { className: "h-3 w-3" }),
                                      c.jsx("span", {
                                        children: "Website URL",
                                      }),
                                    ],
                                  }),
                                  c.jsxs("a", {
                                    href: f.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "text-blue-600 hover:text-blue-800 underline text-base mt-1 inline-flex items-center space-x-1",
                                    children: [
                                      c.jsx("span", {
                                        className: "break-all",
                                        children: f.url,
                                      }),
                                      c.jsx(Ng, {
                                        className: "h-3 w-3 flex-shrink-0",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                c.jsx(YA, {
                  images: f.images,
                  onImageClick: _,
                  imageErrors: O,
                  onImageError: Y,
                  title: f.title,
                }),
              ],
            }),
            c.jsxs("div", {
              className: "space-y-6",
              children: [
                c.jsxs(wl, {
                  children: [
                    c.jsx(hu, {
                      children: c.jsx(mu, {
                        className: "text-base",
                        children: "Advertisement Metadata",
                      }),
                    }),
                    c.jsxs(Nl, {
                      className: "space-y-4",
                      children: [
                        c.jsxs("div", {
                          children: [
                            c.jsxs("label", {
                              className:
                                "text-sm font-medium text-gray-600 flex items-center space-x-1",
                              children: [
                                c.jsx(Nu, { className: "h-3 w-3" }),
                                c.jsx("span", { children: "Created by" }),
                              ],
                            }),
                            c.jsx("p", {
                              className: "text-sm text-secondary mt-1",
                              children: f.user,
                            }),
                          ],
                        }),
                        c.jsx(gl, {}),
                        c.jsxs("div", {
                          children: [
                            c.jsxs("label", {
                              className:
                                "text-sm font-medium text-gray-600 flex items-center space-x-1",
                              children: [
                                c.jsx(If, { className: "h-3 w-3" }),
                                c.jsx("span", { children: "Created" }),
                              ],
                            }),
                            c.jsx("p", {
                              className: "text-xs text-gray-500 mt-1",
                              children: En(f.created_at),
                            }),
                          ],
                        }),
                        f.updated_at &&
                          f.updated_at !== f.created_at &&
                          c.jsxs("div", {
                            children: [
                              c.jsxs("label", {
                                className:
                                  "text-sm font-medium text-gray-600 flex items-center space-x-1",
                                children: [
                                  c.jsx(If, { className: "h-3 w-3" }),
                                  c.jsx("span", { children: "Last Updated" }),
                                ],
                              }),
                              c.jsx("p", {
                                className: "text-xs text-gray-500 mt-1",
                                children: En(f.updated_at),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                c.jsxs(wl, {
                  children: [
                    c.jsx(hu, {
                      children: c.jsx(mu, {
                        className: "text-base",
                        children: "Actions",
                      }),
                    }),
                    c.jsxs(Nl, {
                      className: "space-y-3",
                      children: [
                        c.jsx(Fg, {
                          onClick: Me,
                          disabled: se("approve"),
                          processing: p,
                          className:
                            "w-full text-white bg-green-600 hover:bg-green-700 disabled:bg-gray-300",
                          icon: Sd,
                          children:
                            f.progress === At.APPROVED ? "Approved" : "Approve",
                        }),
                        c.jsx(Fg, {
                          onClick: fe,
                          disabled: se("reject"),
                          processing: p,
                          variant: "destructive",
                          className: "w-full",
                          icon: pv,
                          children:
                            f.progress === At.REJECTED ? "Rejected" : "Reject",
                        }),
                        c.jsx(gl, {}),
                        c.jsx(He, {
                          onClick: ne,
                          variant: "outline",
                          size: "sm",
                          className: "w-full",
                          disabled: m,
                          children: c.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [
                              c.jsx(td, {
                                className: Le("h-3 w-3", m && "animate-spin"),
                              }),
                              c.jsx("span", { children: "Refresh" }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        c.jsx(PA, {
          isOpen: U,
          onClose: K,
          images: f.images,
          currentIndex: R,
          onIndexChange: C,
          title: f.title,
        }),
      ],
    }),
  });
}
const GA = async (a) => {
    try {
      return (await at.post("/payment/create-checkout-session/", a)).data;
    } catch (s) {
      throw (
        (console.error("Create Checkout Session Error:", s),
        new Error(
          s.response?.data?.error || "Failed to create checkout session"
        ))
      );
    }
  },
  QA = () => {
    const [a, s] = b.useState(!1),
      [l, i] = b.useState("signin"),
      { isLoggedIn: o, user: f } = rs(),
      [h, m] = b.useState(!1),
      [y, p] = b.useState(null),
      v = async () => {
        if (!o) {
          i("signin"), s(!0);
          return;
        }
        m(!0), p(null);
        try {
          const w = {
              plan_name: "Monthly",
              price_id: "price_1RkHKARAL12u3k7GZzNSYXO6",
              duration_type: "monthly",
              success_url: `${window.location.origin}/payment/success`,
              cancel_url: `${window.location.origin}/payment/cancel`,
            },
            O = await GA(w);
          if (O?.checkout_url) window.location.href = O.checkout_url;
          else throw new Error("No checkout URL received");
        } catch (w) {
          console.error("Payment error:", w),
            p(w.message || "Failed to create checkout session");
        } finally {
          m(!1);
        }
      },
      S = () => {
        s(!1),
          setTimeout(() => {
            v();
          }, 100);
      };
    return c.jsxs("div", {
      children: [
        c.jsx(Is, {}),
        c.jsx("div", {
          className:
            "mt-36 md:mt-10 lg:mt-0 flex justify-center h-screen items-center text-center",
          children: c.jsxs("div", {
            className: "",
            children: [
              c.jsx("h3", {
                className:
                  "text-xl md:text-2xl font-semibold text-secondary mb-6",
                children: "Pricing",
              }),
              c.jsxs("div", {
                className: "bg-[#f2f2f2] m-auto rounded-lg p-6 max-w-md",
                children: [
                  c.jsxs("div", {
                    className: "text-center mb-6",
                    children: [
                      c.jsxs("div", {
                        className:
                          "flex items-center justify-center space-x-2 mb-4",
                        children: [
                          c.jsx("div", {
                            className:
                              "w-4 h-4 rounded-full border-2 border-tertiary flex items-center justify-center",
                            children: c.jsx("div", {
                              className: "w-2 h-2 rounded-full bg-gray-400",
                            }),
                          }),
                          c.jsx("span", {
                            className:
                              "text-secondary text-base md:text-lg font-medium",
                            children: "Monthly",
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className:
                          "text-2xl md:text-4xl font-bold text-primary mb-2",
                        children: [
                          "$4.99",
                          c.jsx("span", {
                            className: "text-lg font-normal",
                            children: "/mn",
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className:
                          "flex items-center text-sm justify-center space-x-2",
                        children: [
                          c.jsx("span", {
                            className: "text-red-500 line-through",
                            children: "$295",
                          }),
                          c.jsx("span", {
                            className:
                              "py-0.5 px-2 border rounded-2xl text-white bg-blue-500 hover:bg-blue-600",
                            children: "Save $140",
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "space-y-3 mb-6",
                    children: [
                      c.jsxs("div", {
                        className: "flex items-start text-left space-x-3",
                        children: [
                          c.jsx("div", {
                            className: "w-2 h-2 rounded-full bg-blue-500 mt-2",
                          }),
                          c.jsx("span", {
                            className: "text-sm text-secondary",
                            children:
                              "Create your own automated bot effortlessly!",
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "flex items-start text-left space-x-3",
                        children: [
                          c.jsx("div", {
                            className: "w-2 h-2 rounded-full bg-blue-500 mt-2",
                          }),
                          c.jsx("span", {
                            className: "text-sm text-secondary",
                            children:
                              "Join our community for seamless team collaboration!",
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "flex items-start text-left space-x-3",
                        children: [
                          c.jsx("div", {
                            className: "w-2 h-2 rounded-full bg-blue-500 mt-2",
                          }),
                          c.jsx("span", {
                            className: "text-sm text-secondary",
                            children:
                              "Unlock the secrets of AI model training with us!",
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "flex items-start text-left space-x-3",
                        children: [
                          c.jsx("div", {
                            className: "w-2 h-2 rounded-full bg-blue-500 mt-2",
                          }),
                          c.jsx("span", {
                            className: "text-sm text-secondary",
                            children:
                              "Subscribe for insights on multilingual AI advancements!",
                          }),
                        ],
                      }),
                    ],
                  }),
                  y &&
                    c.jsx("div", {
                      className:
                        "mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded",
                      children: y,
                    }),
                  c.jsx(He, {
                    className:
                      "w-full bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-50",
                    onClick: v,
                    disabled: h,
                    children: h ? "Processing..." : "Buy Now",
                  }),
                  !o &&
                    c.jsx("p", {
                      className: "text-xs text-gray-500 mt-2",
                      children:
                        "You'll need to sign in to complete your purchase",
                    }),
                ],
              }),
            ],
          }),
        }),
        c.jsx(Od, {
          isOpen: a,
          onClose: () => s(!1),
          initialMode: l,
          onAuthSuccess: S,
        }),
      ],
    });
  },
  Gg = () => {
    const a = ns(),
      s = Ct(),
      [l] = fw(),
      i = l.get("success"),
      o = l.get("canceled"),
      [f, h] = b.useState("loading"),
      [m, y] = b.useState(null),
      [p, v] = b.useState(null);
    b.useEffect(() => {
      const O = s.pathname;
      if (O.includes("/payment/cancel") || o === "true") {
        h("canceled");
        return;
      }
      (O.includes("/payment/success") || i === "true") && h("success");
    }, [i, o, s.pathname]);
    const S = () => {
        a("/dashboard");
      },
      w = () => {
        a("/pricing");
      };
    return f === "loading"
      ? c.jsxs("div", {
          className: "min-h-screen bg-gray-50",
          children: [
            c.jsx(Is, {}),
            c.jsx("div", {
              className: "flex items-center justify-center h-screen",
              children: c.jsxs("div", {
                className: "text-center",
                children: [
                  c.jsx("div", {
                    className:
                      "w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4",
                  }),
                  c.jsx("h2", {
                    className: "text-xl font-semibold text-gray-700 mb-2",
                    children: "Verifying Payment...",
                  }),
                  c.jsx("p", {
                    className: "text-gray-600",
                    children: "Please wait while we confirm your payment",
                  }),
                ],
              }),
            }),
          ],
        })
      : f === "success"
      ? c.jsxs("div", {
          className: "min-h-screen bg-gray-50",
          children: [
            c.jsx(Is, {}),
            c.jsx("div", {
              className: "flex items-center justify-center h-screen",
              children: c.jsxs("div", {
                className:
                  "max-w-md mx-auto text-center bg-white rounded-lg shadow-lg p-8",
                children: [
                  c.jsx("div", {
                    className:
                      "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6",
                    children: c.jsx("svg", {
                      className: "w-8 h-8 text-green-500",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: c.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M5 13l4 4L19 7",
                      }),
                    }),
                  }),
                  c.jsx("h1", {
                    className: "text-2xl font-bold text-gray-900 mb-4",
                    children: "Payment Successful! 🎉",
                  }),
                  c.jsx("p", {
                    className: "text-gray-600 mb-6",
                    children:
                      "Thank you for your subscription! Your account has been upgraded successfully.",
                  }),
                  m &&
                    c.jsxs("div", {
                      className: "bg-gray-50 rounded-lg p-4 mb-6 text-left",
                      children: [
                        c.jsx("h3", {
                          className: "font-semibold text-gray-900 mb-2",
                          children: "Order Details:",
                        }),
                        c.jsxs("div", {
                          className: "space-y-1 text-sm text-gray-700",
                          children: [
                            c.jsxs("p", {
                              children: [
                                c.jsx("strong", { children: "Plan:" }),
                                " ",
                                m.plan_name,
                              ],
                            }),
                            c.jsxs("p", {
                              children: [
                                c.jsx("strong", { children: "Amount:" }),
                                " $",
                                m.amount,
                              ],
                            }),
                            c.jsxs("p", {
                              children: [
                                c.jsx("strong", {
                                  children: "Transaction ID:",
                                }),
                                " ",
                                m.transaction_id,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  c.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      c.jsx(He, {
                        onClick: S,
                        className:
                          "w-full bg-blue-500 hover:bg-blue-600 text-white",
                        children: "Go to Dashboard",
                      }),
                      c.jsx("p", {
                        className: "text-xs text-gray-500",
                        children:
                          "A confirmation email has been sent to your registered email address.",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
      : f === "canceled"
      ? c.jsxs("div", {
          className: "min-h-screen bg-gray-50",
          children: [
            c.jsx(Is, {}),
            c.jsx("div", {
              className: "flex items-center justify-center h-screen",
              children: c.jsxs("div", {
                className:
                  "max-w-md mx-auto text-center bg-white rounded-lg shadow-lg p-8",
                children: [
                  c.jsx("div", {
                    className:
                      "w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6",
                    children: c.jsx("svg", {
                      className: "w-8 h-8 text-yellow-500",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: c.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z",
                      }),
                    }),
                  }),
                  c.jsx("h1", {
                    className: "text-2xl font-bold text-gray-900 mb-4",
                    children: "Payment Canceled",
                  }),
                  c.jsx("p", {
                    className: "text-gray-600 mb-6",
                    children:
                      "Your payment was canceled. No charges have been made to your account.",
                  }),
                  c.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      c.jsx(He, {
                        onClick: w,
                        className:
                          "w-full bg-blue-500 hover:bg-blue-600 text-white",
                        children: "Try Again",
                      }),
                      c.jsx(He, {
                        onClick: S,
                        variant: "outline",
                        className: "w-full",
                        children: "Return Home",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
      : f === "error"
      ? c.jsxs("div", {
          className: "min-h-screen bg-gray-50",
          children: [
            c.jsx(Is, {}),
            c.jsx("div", {
              className: "flex items-center justify-center h-screen",
              children: c.jsxs("div", {
                className:
                  "max-w-md mx-auto text-center bg-white rounded-lg shadow-lg p-8",
                children: [
                  c.jsx("div", {
                    className:
                      "w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6",
                    children: c.jsx("svg", {
                      className: "w-8 h-8 text-red-500",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: c.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12",
                      }),
                    }),
                  }),
                  c.jsx("h1", {
                    className: "text-2xl font-bold text-gray-900 mb-4",
                    children: "Payment Verification Failed",
                  }),
                  c.jsx("p", {
                    className: "text-gray-600 mb-2",
                    children:
                      "We couldn't verify your payment. Please try again or contact support if this issue persists.",
                  }),
                  p &&
                    c.jsxs("p", {
                      className: "text-red-600 text-sm mb-6",
                      children: ["Error: ", p],
                    }),
                  c.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      c.jsx(He, {
                        onClick: w,
                        className:
                          "w-full bg-blue-500 hover:bg-blue-600 text-white",
                        children: "Try Payment Again",
                      }),
                      c.jsx(He, {
                        onClick: S,
                        variant: "outline",
                        className: "w-full",
                        children: "Contact Support",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
      : null;
  },
  Qg = b.lazy(() =>
    es(() => import("./HomePage-CePwZU5R.js"), __vite__mapDeps([0, 1]))
  ),
  Xg = b.lazy(() =>
    es(() => import("./Profile-Dhf47ywt.js"), __vite__mapDeps([2, 3]))
  ),
  XA = b.lazy(() =>
    es(() => import("./Advertise-Cwr9bcYJ.js"), __vite__mapDeps([4, 3]))
  ),
  $A = b.lazy(() =>
    es(() => import("./NewAdvertise-COFAgEyS.js"), __vite__mapDeps([5, 1]))
  ),
  KA = () => {
    const a = Ct();
    return (
      b.useEffect(() => {
        window.scrollTo(0, 0);
      }, [a.pathname]),
      c.jsx(b.Suspense, {
        fallback: c.jsx(Qg, {}),
        children: c.jsxs(
          kS,
          {
            location: a,
            children: [
              c.jsx(ft, {
                element: c.jsx(Tj, {}),
                children: c.jsxs(ft, {
                  element: c.jsx(yg, {}),
                  children: [
                    c.jsx(ft, { path: "/", element: c.jsx(Qg, {}) }),
                    c.jsx(ft, { path: "/pricing", element: c.jsx(QA, {}) }),
                    c.jsx(ft, {
                      path: "/payment/success",
                      element: c.jsx(Gg, {}),
                    }),
                    c.jsx(ft, {
                      path: "/payment/cancel",
                      element: c.jsx(Gg, {}),
                    }),
                  ],
                }),
              }),
              c.jsx(ft, {
                element: c.jsx(Oj, {}),
                children: c.jsx(ft, {
                  element: c.jsx(yg, {}),
                  children: c.jsxs(ft, {
                    path: "/dashboard",
                    element: c.jsx(NA, {}),
                    children: [
                      c.jsx(ft, { index: !0, element: c.jsx(Xg, {}) }),
                      c.jsx(ft, { path: "profile", element: c.jsx(Xg, {}) }),
                      c.jsx(ft, { path: "advertise", element: c.jsx(XA, {}) }),
                      c.jsx(ft, {
                        path: "newadvertise",
                        element: c.jsx($A, {}),
                      }),
                      c.jsxs(ft, {
                        element: c.jsx(Rj, {}),
                        children: [
                          c.jsx(ft, {
                            path: "advertiselist",
                            element: c.jsx(MA, {}),
                          }),
                          c.jsx(ft, {
                            path: "advertiseinfo/:id",
                            element: c.jsx(FA, {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              c.jsx(ft, { element: c.jsx(Cj, {}) }),
              c.jsx(ft, { path: "*", element: c.jsx(_E, {}) }),
            ],
          },
          a.pathname
        ),
      })
    );
  },
  ZA = new Bw({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1e3,
        cacheTime: 10 * 60 * 1e3,
        retry: 1,
        refetchOnWindowFocus: !1,
      },
      mutations: { retry: 1 },
    },
  });
p1.createRoot(document.getElementById("root")).render(
  c.jsx(Ce.StrictMode, {
    children: c.jsx(t0, {
      children: c.jsx(Yw, {
        client: ZA,
        children: c.jsx(iw, {
          future: { v7_startTransition: !0, v7_relativeSplatPath: !0 },
          children: c.jsxs(gj, {
            children: [
              c.jsx(KA, {}),
              c.jsx(M2, {
                position: "top-center",
                toastOptions: {
                  duration: 4e3,
                  style: {
                    background: "#fff",
                    color: "#333",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    padding: "12px 16px",
                    fontSize: "14px",
                    fontWeight: "500",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  },
                  success: {
                    style: {
                      border: "1px solid #00AE34",
                      background: "#f0fdf4",
                    },
                    iconTheme: { primary: "#00AE34", secondary: "#fff" },
                  },
                  error: {
                    style: {
                      border: "1px solid #ff4b4b",
                      background: "#fef2f2",
                    },
                    iconTheme: { primary: "#ff4b4b", secondary: "#fff" },
                  },
                },
              }),
            ],
          }),
        }),
      }),
    }),
  })
);
export {
  Vv as $,
  Od as A,
  He as B,
  hv as C,
  SA as D,
  Ng as E,
  fE as F,
  Xu as G,
  P1 as H,
  Pv as I,
  xT as J,
  dd as K,
  td as L,
  Qu as M,
  Is as N,
  rA as O,
  zl as P,
  Cu as Q,
  Ce as R,
  EE as S,
  TE as T,
  Nu as U,
  Te as V,
  JA as W,
  Yu as X,
  sA as Y,
  uv as Z,
  Zj as _,
  Le as a,
  u1 as a0,
  at as b,
  qe as c,
  mv as d,
  IE as e,
  qg as f,
  bg as g,
  xd as h,
  tA as i,
  c as j,
  Rv as k,
  Ij as l,
  wl as m,
  Nl as n,
  Pu as o,
  Lj as p,
  xA as q,
  b as r,
  vT as s,
  If as t,
  rs as u,
  Dt as v,
  gT as w,
  bA as x,
  ra as y,
  Tl as z,
};
