var nc = { exports: {} }, be = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vo;
function $m() {
  if (vo) return be;
  vo = 1;
  var T = Symbol.for("react.transitional.element"), G = Symbol.for("react.fragment");
  function Y(h, ml, Sl) {
    var il = null;
    if (Sl !== void 0 && (il = "" + Sl), ml.key !== void 0 && (il = "" + ml.key), "key" in ml) {
      Sl = {};
      for (var hl in ml)
        hl !== "key" && (Sl[hl] = ml[hl]);
    } else Sl = ml;
    return ml = Sl.ref, {
      $$typeof: T,
      type: h,
      key: il,
      ref: ml !== void 0 ? ml : null,
      props: Sl
    };
  }
  return be.Fragment = G, be.jsx = Y, be.jsxs = Y, be;
}
var ho;
function Fm() {
  return ho || (ho = 1, nc.exports = $m()), nc.exports;
}
var k = Fm();
const km = ':host{display:block;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#fff}.weather-stage{display:flex;align-items:center;justify-content:center;min-height:380px;padding:32px 16px;box-sizing:border-box}.weather-card{width:100%;max-width:360px;border-radius:24px;padding:32px 28px;box-shadow:0 24px 48px -12px #0f172a73,0 8px 16px -4px #0f172a38;position:relative;overflow:hidden;isolation:isolate;background:linear-gradient(135deg,#4f46e5,#312e81)}.weather-card:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at 22% 0%,rgba(255,255,255,.18),transparent 50%),radial-gradient(circle at 80% 100%,rgba(255,255,255,.1),transparent 60%);pointer-events:none;z-index:-1}.accent-indigo .weather-card{background:linear-gradient(135deg,#4f46e5,#312e81)}.accent-violet .weather-card{background:linear-gradient(135deg,#6d28d9,#4c1d95)}.accent-cyan .weather-card{background:linear-gradient(135deg,#0e7490,#155e75)}.accent-emerald .weather-card{background:linear-gradient(135deg,#047857,#064e3b)}.weather-card__inner{display:block;min-height:280px}.weather-state{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;min-height:280px;text-align:center}.weather-state__icon{font-size:2.5rem;line-height:1}.weather-state__label{margin:0;font-size:.95rem;line-height:1.45;color:#fff;max-width:280px}.weather-spinner{width:40px;height:40px;border-radius:50%;border:3px solid rgba(255,255,255,.4);border-top-color:#fff;animation:weather-spin 1s linear infinite}@keyframes weather-spin{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.weather-spinner{animation:none;border:3px solid rgba(255,255,255,.7)}}.weather-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#ffffff2e;color:#fff;border:1px solid rgba(255,255,255,.7);border-radius:9999px;padding:10px 22px;font:inherit;font-weight:600;font-size:.875rem;cursor:pointer;transition:background .12s ease,transform .12s ease}.weather-button:hover{background:#ffffff47}.weather-button:active{transform:translateY(1px)}.weather-button:focus-visible{outline:3px solid #ffffff;outline-offset:3px}@media(prefers-reduced-motion:reduce){.weather-button{transition:none}}.weather-ready{display:flex;flex-direction:column;align-items:center;text-align:center;gap:4px}.weather-ready__icon{font-size:4rem;line-height:1;filter:drop-shadow(0 6px 14px rgba(15,23,42,.4));margin-bottom:6px}.weather-ready__temperature{display:flex;align-items:flex-start;justify-content:center;gap:4px;color:#fff;letter-spacing:-.04em}.weather-ready__temp-value{font-size:4.5rem;font-weight:700;line-height:1}.weather-ready__temp-unit{font-size:1.5rem;font-weight:600;margin-top:6px;color:#fff}.weather-ready__condition{margin:4px 0 14px;font-size:1rem;font-weight:500;color:#fff}.weather-ready__place{margin:0;font-size:1.15rem;font-weight:600;letter-spacing:-.01em;color:#fff}.weather-ready__place-secondary{margin:2px 0 14px;font-size:.85rem;color:#fff}.weather-ready__stats{margin:8px 0 0;padding:14px 16px;display:grid;grid-template-columns:1fr 1fr;gap:12px;width:100%;background:#00000047;border-radius:14px;box-sizing:border-box}.weather-stat{display:flex;flex-direction:column;align-items:center;gap:2px}.weather-stat__label{font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:#fff}.weather-stat__value{margin:0;font-size:1.05rem;font-weight:700;color:#fff}.weather-stat__unit{font-size:.78rem;font-weight:500;margin-left:2px;color:#fff}';
var fc = { exports: {} }, ze = {}, ic = { exports: {} }, cc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ro;
function Im() {
  return ro || (ro = 1, (function(T) {
    function G(S, A) {
      var C = S.length;
      S.push(A);
      l: for (; 0 < C; ) {
        var tl = C - 1 >>> 1, nl = S[tl];
        if (0 < ml(nl, A))
          S[tl] = A, S[C] = nl, C = tl;
        else break l;
      }
    }
    function Y(S) {
      return S.length === 0 ? null : S[0];
    }
    function h(S) {
      if (S.length === 0) return null;
      var A = S[0], C = S.pop();
      if (C !== A) {
        S[0] = C;
        l: for (var tl = 0, nl = S.length, d = nl >>> 1; tl < d; ) {
          var _ = 2 * (tl + 1) - 1, p = S[_], M = _ + 1, B = S[M];
          if (0 > ml(p, C))
            M < nl && 0 > ml(B, p) ? (S[tl] = B, S[M] = C, tl = M) : (S[tl] = p, S[_] = C, tl = _);
          else if (M < nl && 0 > ml(B, C))
            S[tl] = B, S[M] = C, tl = M;
          else break l;
        }
      }
      return A;
    }
    function ml(S, A) {
      var C = S.sortIndex - A.sortIndex;
      return C !== 0 ? C : S.id - A.id;
    }
    if (T.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var Sl = performance;
      T.unstable_now = function() {
        return Sl.now();
      };
    } else {
      var il = Date, hl = il.now();
      T.unstable_now = function() {
        return il.now() - hl;
      };
    }
    var U = [], E = [], w = 1, N = null, sl = 3, Nl = !1, El = !1, Hl = !1, Gl = !1, cl = typeof setTimeout == "function" ? setTimeout : null, Rl = typeof clearTimeout == "function" ? clearTimeout : null, vl = typeof setImmediate < "u" ? setImmediate : null;
    function Ll(S) {
      for (var A = Y(E); A !== null; ) {
        if (A.callback === null) h(E);
        else if (A.startTime <= S)
          h(E), A.sortIndex = A.expirationTime, G(U, A);
        else break;
        A = Y(E);
      }
    }
    function st(S) {
      if (Hl = !1, Ll(S), !El)
        if (Y(U) !== null)
          El = !0, Xl || (Xl = !0, Kl());
        else {
          var A = Y(E);
          A !== null && zt(st, A.startTime - S);
        }
    }
    var Xl = !1, X = -1, Cl = 5, At = -1;
    function Xa() {
      return Gl ? !0 : !(T.unstable_now() - At < Cl);
    }
    function pt() {
      if (Gl = !1, Xl) {
        var S = T.unstable_now();
        At = S;
        var A = !0;
        try {
          l: {
            El = !1, Hl && (Hl = !1, Rl(X), X = -1), Nl = !0;
            var C = sl;
            try {
              t: {
                for (Ll(S), N = Y(U); N !== null && !(N.expirationTime > S && Xa()); ) {
                  var tl = N.callback;
                  if (typeof tl == "function") {
                    N.callback = null, sl = N.priorityLevel;
                    var nl = tl(
                      N.expirationTime <= S
                    );
                    if (S = T.unstable_now(), typeof nl == "function") {
                      N.callback = nl, Ll(S), A = !0;
                      break t;
                    }
                    N === Y(U) && h(U), Ll(S);
                  } else h(U);
                  N = Y(U);
                }
                if (N !== null) A = !0;
                else {
                  var d = Y(E);
                  d !== null && zt(
                    st,
                    d.startTime - S
                  ), A = !1;
                }
              }
              break l;
            } finally {
              N = null, sl = C, Nl = !1;
            }
            A = void 0;
          }
        } finally {
          A ? Kl() : Xl = !1;
        }
      }
    }
    var Kl;
    if (typeof vl == "function")
      Kl = function() {
        vl(pt);
      };
    else if (typeof MessageChannel < "u") {
      var za = new MessageChannel(), Nt = za.port2;
      za.port1.onmessage = pt, Kl = function() {
        Nt.postMessage(null);
      };
    } else
      Kl = function() {
        cl(pt, 0);
      };
    function zt(S, A) {
      X = cl(function() {
        S(T.unstable_now());
      }, A);
    }
    T.unstable_IdlePriority = 5, T.unstable_ImmediatePriority = 1, T.unstable_LowPriority = 4, T.unstable_NormalPriority = 3, T.unstable_Profiling = null, T.unstable_UserBlockingPriority = 2, T.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, T.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Cl = 0 < S ? Math.floor(1e3 / S) : 5;
    }, T.unstable_getCurrentPriorityLevel = function() {
      return sl;
    }, T.unstable_next = function(S) {
      switch (sl) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = sl;
      }
      var C = sl;
      sl = A;
      try {
        return S();
      } finally {
        sl = C;
      }
    }, T.unstable_requestPaint = function() {
      Gl = !0;
    }, T.unstable_runWithPriority = function(S, A) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var C = sl;
      sl = S;
      try {
        return A();
      } finally {
        sl = C;
      }
    }, T.unstable_scheduleCallback = function(S, A, C) {
      var tl = T.unstable_now();
      switch (typeof C == "object" && C !== null ? (C = C.delay, C = typeof C == "number" && 0 < C ? tl + C : tl) : C = tl, S) {
        case 1:
          var nl = -1;
          break;
        case 2:
          nl = 250;
          break;
        case 5:
          nl = 1073741823;
          break;
        case 4:
          nl = 1e4;
          break;
        default:
          nl = 5e3;
      }
      return nl = C + nl, S = {
        id: w++,
        callback: A,
        priorityLevel: S,
        startTime: C,
        expirationTime: nl,
        sortIndex: -1
      }, C > tl ? (S.sortIndex = C, G(E, S), Y(U) === null && S === Y(E) && (Hl ? (Rl(X), X = -1) : Hl = !0, zt(st, C - tl))) : (S.sortIndex = nl, G(U, S), El || Nl || (El = !0, Xl || (Xl = !0, Kl()))), S;
    }, T.unstable_shouldYield = Xa, T.unstable_wrapCallback = function(S) {
      var A = sl;
      return function() {
        var C = sl;
        sl = A;
        try {
          return S.apply(this, arguments);
        } finally {
          sl = C;
        }
      };
    };
  })(cc)), cc;
}
var go;
function Pm() {
  return go || (go = 1, ic.exports = Im()), ic.exports;
}
var sc = { exports: {} }, q = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var So;
function lv() {
  if (So) return q;
  So = 1;
  var T = Symbol.for("react.transitional.element"), G = Symbol.for("react.portal"), Y = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), ml = Symbol.for("react.profiler"), Sl = Symbol.for("react.consumer"), il = Symbol.for("react.context"), hl = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), E = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), N = Symbol.for("react.activity"), sl = Symbol.iterator;
  function Nl(d) {
    return d === null || typeof d != "object" ? null : (d = sl && d[sl] || d["@@iterator"], typeof d == "function" ? d : null);
  }
  var El = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Hl = Object.assign, Gl = {};
  function cl(d, _, p) {
    this.props = d, this.context = _, this.refs = Gl, this.updater = p || El;
  }
  cl.prototype.isReactComponent = {}, cl.prototype.setState = function(d, _) {
    if (typeof d != "object" && typeof d != "function" && d != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, d, _, "setState");
  }, cl.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function Rl() {
  }
  Rl.prototype = cl.prototype;
  function vl(d, _, p) {
    this.props = d, this.context = _, this.refs = Gl, this.updater = p || El;
  }
  var Ll = vl.prototype = new Rl();
  Ll.constructor = vl, Hl(Ll, cl.prototype), Ll.isPureReactComponent = !0;
  var st = Array.isArray;
  function Xl() {
  }
  var X = { H: null, A: null, T: null, S: null }, Cl = Object.prototype.hasOwnProperty;
  function At(d, _, p) {
    var M = p.ref;
    return {
      $$typeof: T,
      type: d,
      key: _,
      ref: M !== void 0 ? M : null,
      props: p
    };
  }
  function Xa(d, _) {
    return At(d.type, _, d.props);
  }
  function pt(d) {
    return typeof d == "object" && d !== null && d.$$typeof === T;
  }
  function Kl(d) {
    var _ = { "=": "=0", ":": "=2" };
    return "$" + d.replace(/[=:]/g, function(p) {
      return _[p];
    });
  }
  var za = /\/+/g;
  function Nt(d, _) {
    return typeof d == "object" && d !== null && d.key != null ? Kl("" + d.key) : _.toString(36);
  }
  function zt(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (typeof d.status == "string" ? d.then(Xl, Xl) : (d.status = "pending", d.then(
          function(_) {
            d.status === "pending" && (d.status = "fulfilled", d.value = _);
          },
          function(_) {
            d.status === "pending" && (d.status = "rejected", d.reason = _);
          }
        )), d.status) {
          case "fulfilled":
            return d.value;
          case "rejected":
            throw d.reason;
        }
    }
    throw d;
  }
  function S(d, _, p, M, B) {
    var Q = typeof d;
    (Q === "undefined" || Q === "boolean") && (d = null);
    var I = !1;
    if (d === null) I = !0;
    else
      switch (Q) {
        case "bigint":
        case "string":
        case "number":
          I = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case T:
            case G:
              I = !0;
              break;
            case w:
              return I = d._init, S(
                I(d._payload),
                _,
                p,
                M,
                B
              );
          }
      }
    if (I)
      return B = B(d), I = M === "" ? "." + Nt(d, 0) : M, st(B) ? (p = "", I != null && (p = I.replace(za, "$&/") + "/"), S(B, _, p, "", function(Ou) {
        return Ou;
      })) : B != null && (pt(B) && (B = Xa(
        B,
        p + (B.key == null || d && d.key === B.key ? "" : ("" + B.key).replace(
          za,
          "$&/"
        ) + "/") + I
      )), _.push(B)), 1;
    I = 0;
    var Zl = M === "" ? "." : M + ":";
    if (st(d))
      for (var bl = 0; bl < d.length; bl++)
        M = d[bl], Q = Zl + Nt(M, bl), I += S(
          M,
          _,
          p,
          Q,
          B
        );
    else if (bl = Nl(d), typeof bl == "function")
      for (d = bl.call(d), bl = 0; !(M = d.next()).done; )
        M = M.value, Q = Zl + Nt(M, bl++), I += S(
          M,
          _,
          p,
          Q,
          B
        );
    else if (Q === "object") {
      if (typeof d.then == "function")
        return S(
          zt(d),
          _,
          p,
          M,
          B
        );
      throw _ = String(d), Error(
        "Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return I;
  }
  function A(d, _, p) {
    if (d == null) return d;
    var M = [], B = 0;
    return S(d, M, "", "", function(Q) {
      return _.call(p, Q, B++);
    }), M;
  }
  function C(d) {
    if (d._status === -1) {
      var _ = d._result;
      _ = _(), _.then(
        function(p) {
          (d._status === 0 || d._status === -1) && (d._status = 1, d._result = p);
        },
        function(p) {
          (d._status === 0 || d._status === -1) && (d._status = 2, d._result = p);
        }
      ), d._status === -1 && (d._status = 0, d._result = _);
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var tl = typeof reportError == "function" ? reportError : function(d) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var _ = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d),
        error: d
      });
      if (!window.dispatchEvent(_)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", d);
      return;
    }
    console.error(d);
  }, nl = {
    map: A,
    forEach: function(d, _, p) {
      A(
        d,
        function() {
          _.apply(this, arguments);
        },
        p
      );
    },
    count: function(d) {
      var _ = 0;
      return A(d, function() {
        _++;
      }), _;
    },
    toArray: function(d) {
      return A(d, function(_) {
        return _;
      }) || [];
    },
    only: function(d) {
      if (!pt(d))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return d;
    }
  };
  return q.Activity = N, q.Children = nl, q.Component = cl, q.Fragment = Y, q.Profiler = ml, q.PureComponent = vl, q.StrictMode = h, q.Suspense = U, q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X, q.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(d) {
      return X.H.useMemoCache(d);
    }
  }, q.cache = function(d) {
    return function() {
      return d.apply(null, arguments);
    };
  }, q.cacheSignal = function() {
    return null;
  }, q.cloneElement = function(d, _, p) {
    if (d == null)
      throw Error(
        "The argument must be a React element, but you passed " + d + "."
      );
    var M = Hl({}, d.props), B = d.key;
    if (_ != null)
      for (Q in _.key !== void 0 && (B = "" + _.key), _)
        !Cl.call(_, Q) || Q === "key" || Q === "__self" || Q === "__source" || Q === "ref" && _.ref === void 0 || (M[Q] = _[Q]);
    var Q = arguments.length - 2;
    if (Q === 1) M.children = p;
    else if (1 < Q) {
      for (var I = Array(Q), Zl = 0; Zl < Q; Zl++)
        I[Zl] = arguments[Zl + 2];
      M.children = I;
    }
    return At(d.type, B, M);
  }, q.createContext = function(d) {
    return d = {
      $$typeof: il,
      _currentValue: d,
      _currentValue2: d,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, d.Provider = d, d.Consumer = {
      $$typeof: Sl,
      _context: d
    }, d;
  }, q.createElement = function(d, _, p) {
    var M, B = {}, Q = null;
    if (_ != null)
      for (M in _.key !== void 0 && (Q = "" + _.key), _)
        Cl.call(_, M) && M !== "key" && M !== "__self" && M !== "__source" && (B[M] = _[M]);
    var I = arguments.length - 2;
    if (I === 1) B.children = p;
    else if (1 < I) {
      for (var Zl = Array(I), bl = 0; bl < I; bl++)
        Zl[bl] = arguments[bl + 2];
      B.children = Zl;
    }
    if (d && d.defaultProps)
      for (M in I = d.defaultProps, I)
        B[M] === void 0 && (B[M] = I[M]);
    return At(d, Q, B);
  }, q.createRef = function() {
    return { current: null };
  }, q.forwardRef = function(d) {
    return { $$typeof: hl, render: d };
  }, q.isValidElement = pt, q.lazy = function(d) {
    return {
      $$typeof: w,
      _payload: { _status: -1, _result: d },
      _init: C
    };
  }, q.memo = function(d, _) {
    return {
      $$typeof: E,
      type: d,
      compare: _ === void 0 ? null : _
    };
  }, q.startTransition = function(d) {
    var _ = X.T, p = {};
    X.T = p;
    try {
      var M = d(), B = X.S;
      B !== null && B(p, M), typeof M == "object" && M !== null && typeof M.then == "function" && M.then(Xl, tl);
    } catch (Q) {
      tl(Q);
    } finally {
      _ !== null && p.types !== null && (_.types = p.types), X.T = _;
    }
  }, q.unstable_useCacheRefresh = function() {
    return X.H.useCacheRefresh();
  }, q.use = function(d) {
    return X.H.use(d);
  }, q.useActionState = function(d, _, p) {
    return X.H.useActionState(d, _, p);
  }, q.useCallback = function(d, _) {
    return X.H.useCallback(d, _);
  }, q.useContext = function(d) {
    return X.H.useContext(d);
  }, q.useDebugValue = function() {
  }, q.useDeferredValue = function(d, _) {
    return X.H.useDeferredValue(d, _);
  }, q.useEffect = function(d, _) {
    return X.H.useEffect(d, _);
  }, q.useEffectEvent = function(d) {
    return X.H.useEffectEvent(d);
  }, q.useId = function() {
    return X.H.useId();
  }, q.useImperativeHandle = function(d, _, p) {
    return X.H.useImperativeHandle(d, _, p);
  }, q.useInsertionEffect = function(d, _) {
    return X.H.useInsertionEffect(d, _);
  }, q.useLayoutEffect = function(d, _) {
    return X.H.useLayoutEffect(d, _);
  }, q.useMemo = function(d, _) {
    return X.H.useMemo(d, _);
  }, q.useOptimistic = function(d, _) {
    return X.H.useOptimistic(d, _);
  }, q.useReducer = function(d, _, p) {
    return X.H.useReducer(d, _, p);
  }, q.useRef = function(d) {
    return X.H.useRef(d);
  }, q.useState = function(d) {
    return X.H.useState(d);
  }, q.useSyncExternalStore = function(d, _, p) {
    return X.H.useSyncExternalStore(
      d,
      _,
      p
    );
  }, q.useTransition = function() {
    return X.H.useTransition();
  }, q.version = "19.2.5", q;
}
var bo;
function oc() {
  return bo || (bo = 1, sc.exports = lv()), sc.exports;
}
var dc = { exports: {} }, Ql = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zo;
function tv() {
  if (zo) return Ql;
  zo = 1;
  var T = oc();
  function G(U) {
    var E = "https://react.dev/errors/" + U;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var w = 2; w < arguments.length; w++)
        E += "&args[]=" + encodeURIComponent(arguments[w]);
    }
    return "Minified React error #" + U + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Y() {
  }
  var h = {
    d: {
      f: Y,
      r: function() {
        throw Error(G(522));
      },
      D: Y,
      C: Y,
      L: Y,
      m: Y,
      X: Y,
      S: Y,
      M: Y
    },
    p: 0,
    findDOMNode: null
  }, ml = Symbol.for("react.portal");
  function Sl(U, E, w) {
    var N = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ml,
      key: N == null ? null : "" + N,
      children: U,
      containerInfo: E,
      implementation: w
    };
  }
  var il = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function hl(U, E) {
    if (U === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return Ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h, Ql.createPortal = function(U, E) {
    var w = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(G(299));
    return Sl(U, E, null, w);
  }, Ql.flushSync = function(U) {
    var E = il.T, w = h.p;
    try {
      if (il.T = null, h.p = 2, U) return U();
    } finally {
      il.T = E, h.p = w, h.d.f();
    }
  }, Ql.preconnect = function(U, E) {
    typeof U == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, h.d.C(U, E));
  }, Ql.prefetchDNS = function(U) {
    typeof U == "string" && h.d.D(U);
  }, Ql.preinit = function(U, E) {
    if (typeof U == "string" && E && typeof E.as == "string") {
      var w = E.as, N = hl(w, E.crossOrigin), sl = typeof E.integrity == "string" ? E.integrity : void 0, Nl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      w === "style" ? h.d.S(
        U,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: N,
          integrity: sl,
          fetchPriority: Nl
        }
      ) : w === "script" && h.d.X(U, {
        crossOrigin: N,
        integrity: sl,
        fetchPriority: Nl,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, Ql.preinitModule = function(U, E) {
    if (typeof U == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var w = hl(
            E.as,
            E.crossOrigin
          );
          h.d.M(U, {
            crossOrigin: w,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0
          });
        }
      } else E == null && h.d.M(U);
  }, Ql.preload = function(U, E) {
    if (typeof U == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var w = E.as, N = hl(w, E.crossOrigin);
      h.d.L(U, w, {
        crossOrigin: N,
        integrity: typeof E.integrity == "string" ? E.integrity : void 0,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0,
        type: typeof E.type == "string" ? E.type : void 0,
        fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
        referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
        imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
        imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
        media: typeof E.media == "string" ? E.media : void 0
      });
    }
  }, Ql.preloadModule = function(U, E) {
    if (typeof U == "string")
      if (E) {
        var w = hl(E.as, E.crossOrigin);
        h.d.m(U, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: w,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0
        });
      } else h.d.m(U);
  }, Ql.requestFormReset = function(U) {
    h.d.r(U);
  }, Ql.unstable_batchedUpdates = function(U, E) {
    return U(E);
  }, Ql.useFormState = function(U, E, w) {
    return il.H.useFormState(U, E, w);
  }, Ql.useFormStatus = function() {
    return il.H.useHostTransitionStatus();
  }, Ql.version = "19.2.5", Ql;
}
var _o;
function av() {
  if (_o) return dc.exports;
  _o = 1;
  function T() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T);
      } catch (G) {
        console.error(G);
      }
  }
  return T(), dc.exports = tv(), dc.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eo;
function uv() {
  if (Eo) return ze;
  Eo = 1;
  var T = Pm(), G = oc(), Y = av();
  function h(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ml(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function Sl(l) {
    var t = l, a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (a = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function il(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function hl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function U(l) {
    if (Sl(l) !== l)
      throw Error(h(188));
  }
  function E(l) {
    var t = l.alternate;
    if (!t) {
      if (t = Sl(l), t === null) throw Error(h(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ; ) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (u = e.return, u !== null) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === a) return U(e), l;
          if (n === u) return U(e), t;
          n = n.sibling;
        }
        throw Error(h(188));
      }
      if (a.return !== u.return) a = e, u = n;
      else {
        for (var f = !1, i = e.child; i; ) {
          if (i === a) {
            f = !0, a = e, u = n;
            break;
          }
          if (i === u) {
            f = !0, u = e, a = n;
            break;
          }
          i = i.sibling;
        }
        if (!f) {
          for (i = n.child; i; ) {
            if (i === a) {
              f = !0, a = n, u = e;
              break;
            }
            if (i === u) {
              f = !0, u = n, a = e;
              break;
            }
            i = i.sibling;
          }
          if (!f) throw Error(h(189));
        }
      }
      if (a.alternate !== u) throw Error(h(190));
    }
    if (a.tag !== 3) throw Error(h(188));
    return a.stateNode.current === a ? l : t;
  }
  function w(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = w(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var N = Object.assign, sl = Symbol.for("react.element"), Nl = Symbol.for("react.transitional.element"), El = Symbol.for("react.portal"), Hl = Symbol.for("react.fragment"), Gl = Symbol.for("react.strict_mode"), cl = Symbol.for("react.profiler"), Rl = Symbol.for("react.consumer"), vl = Symbol.for("react.context"), Ll = Symbol.for("react.forward_ref"), st = Symbol.for("react.suspense"), Xl = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), Cl = Symbol.for("react.lazy"), At = Symbol.for("react.activity"), Xa = Symbol.for("react.memo_cache_sentinel"), pt = Symbol.iterator;
  function Kl(l) {
    return l === null || typeof l != "object" ? null : (l = pt && l[pt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var za = Symbol.for("react.client.reference");
  function Nt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === za ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Hl:
        return "Fragment";
      case cl:
        return "Profiler";
      case Gl:
        return "StrictMode";
      case st:
        return "Suspense";
      case Xl:
        return "SuspenseList";
      case At:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case El:
          return "Portal";
        case vl:
          return l.displayName || "Context";
        case Rl:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ll:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case X:
          return t = l.displayName || null, t !== null ? t : Nt(l.type) || "Memo";
        case Cl:
          t = l._payload, l = l._init;
          try {
            return Nt(l(t));
          } catch {
          }
      }
    return null;
  }
  var zt = Array.isArray, S = G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = Y.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, tl = [], nl = -1;
  function d(l) {
    return { current: l };
  }
  function _(l) {
    0 > nl || (l.current = tl[nl], tl[nl] = null, nl--);
  }
  function p(l, t) {
    nl++, tl[nl] = l.current, l.current = t;
  }
  var M = d(null), B = d(null), Q = d(null), I = d(null);
  function Zl(l, t) {
    switch (p(Q, t), p(B, l), p(M, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Bd(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Bd(t), l = xd(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    _(M), p(M, l);
  }
  function bl() {
    _(M), _(B), _(Q);
  }
  function Ou(l) {
    l.memoizedState !== null && p(I, l);
    var t = M.current, a = xd(t, l.type);
    t !== a && (p(B, l), p(M, a));
  }
  function _e(l) {
    B.current === l && (_(M), _(B)), I.current === l && (_(I), he._currentValue = C);
  }
  var Xn, yc;
  function _a(l) {
    if (Xn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Xn = t && t[1] || "", yc = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Xn + l + yc;
  }
  var Qn = !1;
  function Zn(l, t) {
    if (!l || Qn) return "";
    Qn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var z = function() {
                throw Error();
              };
              if (Object.defineProperty(z.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(z, []);
                } catch (r) {
                  var v = r;
                }
                Reflect.construct(l, [], z);
              } else {
                try {
                  z.call();
                } catch (r) {
                  v = r;
                }
                l.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (r) {
                v = r;
              }
              (z = l()) && typeof z.catch == "function" && z.catch(function() {
              });
            }
          } catch (r) {
            if (r && v && typeof r.stack == "string")
              return [r.stack, v.stack];
          }
          return [null, null];
        }
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        u.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = u.DetermineComponentFrameRoot(), f = n[0], i = n[1];
      if (f && i) {
        var c = f.split(`
`), m = i.split(`
`);
        for (e = u = 0; u < c.length && !c[u].includes("DetermineComponentFrameRoot"); )
          u++;
        for (; e < m.length && !m[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (u === c.length || e === m.length)
          for (u = c.length - 1, e = m.length - 1; 1 <= u && 0 <= e && c[u] !== m[e]; )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (c[u] !== m[e]) {
            if (u !== 1 || e !== 1)
              do
                if (u--, e--, 0 > e || c[u] !== m[e]) {
                  var g = `
` + c[u].replace(" at new ", " at ");
                  return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g;
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      Qn = !1, Error.prepareStackTrace = a;
    }
    return (a = l ? l.displayName || l.name : "") ? _a(a) : "";
  }
  function Oo(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return _a(l.type);
      case 16:
        return _a("Lazy");
      case 13:
        return l.child !== t && t !== null ? _a("Suspense Fallback") : _a("Suspense");
      case 19:
        return _a("SuspenseList");
      case 0:
      case 15:
        return Zn(l.type, !1);
      case 11:
        return Zn(l.type.render, !1);
      case 1:
        return Zn(l.type, !0);
      case 31:
        return _a("Activity");
      default:
        return "";
    }
  }
  function mc(l) {
    try {
      var t = "", a = null;
      do
        t += Oo(l, a), a = l, l = l.return;
      while (l);
      return t;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  var Vn = Object.prototype.hasOwnProperty, Ln = T.unstable_scheduleCallback, Kn = T.unstable_cancelCallback, Mo = T.unstable_shouldYield, Do = T.unstable_requestPaint, Pl = T.unstable_now, Uo = T.unstable_getCurrentPriorityLevel, vc = T.unstable_ImmediatePriority, hc = T.unstable_UserBlockingPriority, Ee = T.unstable_NormalPriority, No = T.unstable_LowPriority, rc = T.unstable_IdlePriority, Ho = T.log, Ro = T.unstable_setDisableYieldValue, Mu = null, lt = null;
  function $t(l) {
    if (typeof Ho == "function" && Ro(l), lt && typeof lt.setStrictMode == "function")
      try {
        lt.setStrictMode(Mu, l);
      } catch {
      }
  }
  var tt = Math.clz32 ? Math.clz32 : Yo, Co = Math.log, qo = Math.LN2;
  function Yo(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Co(l) / qo | 0) | 0;
  }
  var Te = 256, Ae = 262144, pe = 4194304;
  function Ea(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
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
        return l;
    }
  }
  function Oe(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var i = u & 134217727;
    return i !== 0 ? (u = i & ~n, u !== 0 ? e = Ea(u) : (f &= i, f !== 0 ? e = Ea(f) : a || (a = i & ~l, a !== 0 && (e = Ea(a))))) : (i = u & ~n, i !== 0 ? e = Ea(i) : f !== 0 ? e = Ea(f) : a || (a = u & ~l, a !== 0 && (e = Ea(a)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, a = t & -t, n >= a || n === 32 && (a & 4194048) !== 0) ? t : e;
  }
  function Du(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Bo(l, t) {
    switch (l) {
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
  function gc() {
    var l = pe;
    return pe <<= 1, (pe & 62914560) === 0 && (pe = 4194304), l;
  }
  function Jn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Uu(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function xo(l, t, a, u, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
    var i = l.entanglements, c = l.expirationTimes, m = l.hiddenUpdates;
    for (a = f & ~a; 0 < a; ) {
      var g = 31 - tt(a), z = 1 << g;
      i[g] = 0, c[g] = -1;
      var v = m[g];
      if (v !== null)
        for (m[g] = null, g = 0; g < v.length; g++) {
          var r = v[g];
          r !== null && (r.lane &= -536870913);
        }
      a &= ~z;
    }
    u !== 0 && Sc(l, u, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function Sc(l, t, a) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var u = 31 - tt(t);
    l.entangledLanes |= t, l.entanglements[u] = l.entanglements[u] | 1073741824 | a & 261930;
  }
  function bc(l, t) {
    var a = l.entangledLanes |= t;
    for (l = l.entanglements; a; ) {
      var u = 31 - tt(a), e = 1 << u;
      e & t | l[u] & t && (l[u] |= t), a &= ~e;
    }
  }
  function zc(l, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : wn(a), (a & (l.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function wn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Wn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function _c() {
    var l = A.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : fo(l.type));
  }
  function Ec(l, t) {
    var a = A.p;
    try {
      return A.p = l, t();
    } finally {
      A.p = a;
    }
  }
  var Ft = Math.random().toString(36).slice(2), ql = "__reactFiber$" + Ft, Jl = "__reactProps$" + Ft, Qa = "__reactContainer$" + Ft, $n = "__reactEvents$" + Ft, jo = "__reactListeners$" + Ft, Go = "__reactHandles$" + Ft, Tc = "__reactResources$" + Ft, Nu = "__reactMarker$" + Ft;
  function Fn(l) {
    delete l[ql], delete l[Jl], delete l[$n], delete l[jo], delete l[Go];
  }
  function Za(l) {
    var t = l[ql];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if (t = a[Qa] || a[ql]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (l = Ld(l); l !== null; ) {
            if (a = l[ql]) return a;
            l = Ld(l);
          }
        return t;
      }
      l = a, a = l.parentNode;
    }
    return null;
  }
  function Va(l) {
    if (l = l[ql] || l[Qa]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Hu(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(h(33));
  }
  function La(l) {
    var t = l[Tc];
    return t || (t = l[Tc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Dl(l) {
    l[Nu] = !0;
  }
  var Ac = /* @__PURE__ */ new Set(), pc = {};
  function Ta(l, t) {
    Ka(l, t), Ka(l + "Capture", t);
  }
  function Ka(l, t) {
    for (pc[l] = t, l = 0; l < t.length; l++)
      Ac.add(t[l]);
  }
  var Xo = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Oc = {}, Mc = {};
  function Qo(l) {
    return Vn.call(Mc, l) ? !0 : Vn.call(Oc, l) ? !1 : Xo.test(l) ? Mc[l] = !0 : (Oc[l] = !0, !1);
  }
  function Me(l, t, a) {
    if (Qo(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function De(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Ht(l, t, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + u);
    }
  }
  function dt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Dc(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Zo(l, t, a) {
    var u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var e = u.get, n = u.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          a = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, t, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(f) {
          a = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function kn(l) {
    if (!l._valueTracker) {
      var t = Dc(l) ? "checked" : "value";
      l._valueTracker = Zo(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function Uc(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), u = "";
    return l && (u = Dc(l) ? l.checked ? "true" : "false" : l.value), l = u, l !== a ? (t.setValue(l), !0) : !1;
  }
  function Ue(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Vo = /[\n"\\]/g;
  function ot(l) {
    return l.replace(
      Vo,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function In(l, t, a, u, e, n, f, i) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + dt(t)) : l.value !== "" + dt(t) && (l.value = "" + dt(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? Pn(l, f, dt(t)) : a != null ? Pn(l, f, dt(a)) : u != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.name = "" + dt(i) : l.removeAttribute("name");
  }
  function Nc(l, t, a, u, e, n, f, i) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        kn(l);
        return;
      }
      a = a != null ? "" + dt(a) : "", t = t != null ? "" + dt(t) : a, i || t === l.value || (l.value = t), l.defaultValue = t;
    }
    u = u ?? e, u = typeof u != "function" && typeof u != "symbol" && !!u, l.checked = i ? l.checked : !!u, l.defaultChecked = !!u, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), kn(l);
  }
  function Pn(l, t, a) {
    t === "number" && Ue(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
  }
  function Ja(l, t, a, u) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < a.length; e++)
        t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        e = t.hasOwnProperty("$" + l[a].value), l[a].selected !== e && (l[a].selected = e), e && u && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + dt(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          l[e].selected = !0, u && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Hc(l, t, a) {
    if (t != null && (t = "" + dt(t), t !== l.value && (l.value = t), a == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + dt(a) : "";
  }
  function Rc(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(h(92));
        if (zt(u)) {
          if (1 < u.length) throw Error(h(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), t = a;
    }
    a = dt(t), l.defaultValue = a, u = l.textContent, u === a && u !== "" && u !== null && (l.value = u), kn(l);
  }
  function wa(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Lo = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Cc(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? u ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : u ? l.setProperty(t, a) : typeof a != "number" || a === 0 || Lo.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
  }
  function qc(l, t, a) {
    if (t != null && typeof t != "object")
      throw Error(h(62));
    if (l = l.style, a != null) {
      for (var u in a)
        !a.hasOwnProperty(u) || t != null && t.hasOwnProperty(u) || (u.indexOf("--") === 0 ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "");
      for (var e in t)
        u = t[e], t.hasOwnProperty(e) && a[e] !== u && Cc(l, e, u);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && Cc(l, n, t[n]);
  }
  function lf(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var Ko = /* @__PURE__ */ new Map([
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
    ["xHeight", "x-height"]
  ]), Jo = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ne(l) {
    return Jo.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Rt() {
  }
  var tf = null;
  function af(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Wa = null, $a = null;
  function Yc(l) {
    var t = Va(l);
    if (t && (l = t.stateNode)) {
      var a = l[Jl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (In(
            l,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + ot(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[Jl] || null;
                if (!e) throw Error(h(90));
                In(
                  u,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              u = a[t], u.form === l.form && Uc(u);
          }
          break l;
        case "textarea":
          Hc(l, a.value, a.defaultValue);
          break l;
        case "select":
          t = a.value, t != null && Ja(l, !!a.multiple, t, !1);
      }
    }
  }
  var uf = !1;
  function Bc(l, t, a) {
    if (uf) return l(t, a);
    uf = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (uf = !1, (Wa !== null || $a !== null) && (Sn(), Wa && (t = Wa, l = $a, $a = Wa = null, Yc(t), l)))
        for (t = 0; t < l.length; t++) Yc(l[t]);
    }
  }
  function Ru(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[Jl] || null;
    if (u === null) return null;
    a = u[t];
    l: switch (t) {
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
        (u = !u.disabled) || (l = l.type, u = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !u;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function")
      throw Error(
        h(231, t, typeof a)
      );
    return a;
  }
  var Ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ef = !1;
  if (Ct)
    try {
      var Cu = {};
      Object.defineProperty(Cu, "passive", {
        get: function() {
          ef = !0;
        }
      }), window.addEventListener("test", Cu, Cu), window.removeEventListener("test", Cu, Cu);
    } catch {
      ef = !1;
    }
  var kt = null, nf = null, He = null;
  function xc() {
    if (He) return He;
    var l, t = nf, a = t.length, u, e = "value" in kt ? kt.value : kt.textContent, n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++) ;
    var f = a - l;
    for (u = 1; u <= f && t[a - u] === e[n - u]; u++) ;
    return He = e.slice(l, 1 < u ? 1 - u : void 0);
  }
  function Re(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Ce() {
    return !0;
  }
  function jc() {
    return !1;
  }
  function wl(l) {
    function t(a, u, e, n, f) {
      this._reactName = a, this._targetInst = e, this.type = u, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var i in l)
        l.hasOwnProperty(i) && (a = l[i], this[i] = a ? a(n) : n[i]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Ce : jc, this.isPropagationStopped = jc, this;
    }
    return N(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ce);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ce);
      },
      persist: function() {
      },
      isPersistent: Ce
    }), t;
  }
  var Aa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, qe = wl(Aa), qu = N({}, Aa, { view: 0, detail: 0 }), wo = wl(qu), ff, cf, Yu, Ye = N({}, qu, {
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
    getModifierState: df,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Yu && (Yu && l.type === "mousemove" ? (ff = l.screenX - Yu.screenX, cf = l.screenY - Yu.screenY) : cf = ff = 0, Yu = l), ff);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : cf;
    }
  }), Gc = wl(Ye), Wo = N({}, Ye, { dataTransfer: 0 }), $o = wl(Wo), Fo = N({}, qu, { relatedTarget: 0 }), sf = wl(Fo), ko = N({}, Aa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Io = wl(ko), Po = N({}, Aa, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), ly = wl(Po), ty = N({}, Aa, { data: 0 }), Xc = wl(ty), ay = {
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
    MozPrintableKey: "Unidentified"
  }, uy = {
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
    224: "Meta"
  }, ey = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function ny(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = ey[l]) ? !!t[l] : !1;
  }
  function df() {
    return ny;
  }
  var fy = N({}, qu, {
    key: function(l) {
      if (l.key) {
        var t = ay[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Re(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? uy[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: df,
    charCode: function(l) {
      return l.type === "keypress" ? Re(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Re(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), iy = wl(fy), cy = N({}, Ye, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Qc = wl(cy), sy = N({}, qu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: df
  }), dy = wl(sy), oy = N({}, Aa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), yy = wl(oy), my = N({}, Ye, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), vy = wl(my), hy = N({}, Aa, {
    newState: 0,
    oldState: 0
  }), ry = wl(hy), gy = [9, 13, 27, 32], of = Ct && "CompositionEvent" in window, Bu = null;
  Ct && "documentMode" in document && (Bu = document.documentMode);
  var Sy = Ct && "TextEvent" in window && !Bu, Zc = Ct && (!of || Bu && 8 < Bu && 11 >= Bu), Vc = " ", Lc = !1;
  function Kc(l, t) {
    switch (l) {
      case "keyup":
        return gy.indexOf(t.keyCode) !== -1;
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
  function Jc(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Fa = !1;
  function by(l, t) {
    switch (l) {
      case "compositionend":
        return Jc(t);
      case "keypress":
        return t.which !== 32 ? null : (Lc = !0, Vc);
      case "textInput":
        return l = t.data, l === Vc && Lc ? null : l;
      default:
        return null;
    }
  }
  function zy(l, t) {
    if (Fa)
      return l === "compositionend" || !of && Kc(l, t) ? (l = xc(), He = nf = kt = null, Fa = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Zc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var _y = {
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
    week: !0
  };
  function wc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!_y[l.type] : t === "textarea";
  }
  function Wc(l, t, a, u) {
    Wa ? $a ? $a.push(u) : $a = [u] : Wa = u, t = pn(t, "onChange"), 0 < t.length && (a = new qe(
      "onChange",
      "change",
      null,
      a,
      u
    ), l.push({ event: a, listeners: t }));
  }
  var xu = null, ju = null;
  function Ey(l) {
    Nd(l, 0);
  }
  function Be(l) {
    var t = Hu(l);
    if (Uc(t)) return l;
  }
  function $c(l, t) {
    if (l === "change") return t;
  }
  var Fc = !1;
  if (Ct) {
    var yf;
    if (Ct) {
      var mf = "oninput" in document;
      if (!mf) {
        var kc = document.createElement("div");
        kc.setAttribute("oninput", "return;"), mf = typeof kc.oninput == "function";
      }
      yf = mf;
    } else yf = !1;
    Fc = yf && (!document.documentMode || 9 < document.documentMode);
  }
  function Ic() {
    xu && (xu.detachEvent("onpropertychange", Pc), ju = xu = null);
  }
  function Pc(l) {
    if (l.propertyName === "value" && Be(ju)) {
      var t = [];
      Wc(
        t,
        ju,
        l,
        af(l)
      ), Bc(Ey, t);
    }
  }
  function Ty(l, t, a) {
    l === "focusin" ? (Ic(), xu = t, ju = a, xu.attachEvent("onpropertychange", Pc)) : l === "focusout" && Ic();
  }
  function Ay(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Be(ju);
  }
  function py(l, t) {
    if (l === "click") return Be(t);
  }
  function Oy(l, t) {
    if (l === "input" || l === "change")
      return Be(t);
  }
  function My(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var at = typeof Object.is == "function" ? Object.is : My;
  function Gu(l, t) {
    if (at(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(l), u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!Vn.call(t, e) || !at(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function ls(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ts(l, t) {
    var a = ls(l);
    l = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (u = l + a.textContent.length, l <= t && u >= t)
          return { node: a, offset: t - l };
        l = u;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = ls(a);
    }
  }
  function as(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? as(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function us(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Ue(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Ue(l.document);
    }
    return t;
  }
  function vf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Dy = Ct && "documentMode" in document && 11 >= document.documentMode, ka = null, hf = null, Xu = null, rf = !1;
  function es(l, t, a) {
    var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    rf || ka == null || ka !== Ue(u) || (u = ka, "selectionStart" in u && vf(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), Xu && Gu(Xu, u) || (Xu = u, u = pn(hf, "onSelect"), 0 < u.length && (t = new qe(
      "onSelect",
      "select",
      null,
      t,
      a
    ), l.push({ event: t, listeners: u }), t.target = ka)));
  }
  function pa(l, t) {
    var a = {};
    return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a;
  }
  var Ia = {
    animationend: pa("Animation", "AnimationEnd"),
    animationiteration: pa("Animation", "AnimationIteration"),
    animationstart: pa("Animation", "AnimationStart"),
    transitionrun: pa("Transition", "TransitionRun"),
    transitionstart: pa("Transition", "TransitionStart"),
    transitioncancel: pa("Transition", "TransitionCancel"),
    transitionend: pa("Transition", "TransitionEnd")
  }, gf = {}, ns = {};
  Ct && (ns = document.createElement("div").style, "AnimationEvent" in window || (delete Ia.animationend.animation, delete Ia.animationiteration.animation, delete Ia.animationstart.animation), "TransitionEvent" in window || delete Ia.transitionend.transition);
  function Oa(l) {
    if (gf[l]) return gf[l];
    if (!Ia[l]) return l;
    var t = Ia[l], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in ns)
        return gf[l] = t[a];
    return l;
  }
  var fs = Oa("animationend"), is = Oa("animationiteration"), cs = Oa("animationstart"), Uy = Oa("transitionrun"), Ny = Oa("transitionstart"), Hy = Oa("transitioncancel"), ss = Oa("transitionend"), ds = /* @__PURE__ */ new Map(), Sf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Sf.push("scrollEnd");
  function _t(l, t) {
    ds.set(l, t), Ta(t, [l]);
  }
  var xe = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, yt = [], Pa = 0, bf = 0;
  function je() {
    for (var l = Pa, t = bf = Pa = 0; t < l; ) {
      var a = yt[t];
      yt[t++] = null;
      var u = yt[t];
      yt[t++] = null;
      var e = yt[t];
      yt[t++] = null;
      var n = yt[t];
      if (yt[t++] = null, u !== null && e !== null) {
        var f = u.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), u.pending = e;
      }
      n !== 0 && os(a, e, n);
    }
  }
  function Ge(l, t, a, u) {
    yt[Pa++] = l, yt[Pa++] = t, yt[Pa++] = a, yt[Pa++] = u, bf |= u, l.lanes |= u, l = l.alternate, l !== null && (l.lanes |= u);
  }
  function zf(l, t, a, u) {
    return Ge(l, t, a, u), Xe(l);
  }
  function Ma(l, t) {
    return Ge(l, null, null, t), Xe(l);
  }
  function os(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= a, u = n.alternate, u !== null && (u.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - tt(a), l = n.hiddenUpdates, u = l[e], u === null ? l[e] = [t] : u.push(t), t.lane = a | 536870912), n) : null;
  }
  function Xe(l) {
    if (50 < ce)
      throw ce = 0, Ui = null, Error(h(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var lu = {};
  function Ry(l, t, a, u) {
    this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ut(l, t, a, u) {
    return new Ry(l, t, a, u);
  }
  function _f(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function qt(l, t) {
    var a = l.alternate;
    return a === null ? (a = ut(
      l.tag,
      t,
      l.key,
      l.mode
    ), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
  }
  function ys(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Qe(l, t, a, u, e, n) {
    var f = 0;
    if (u = l, typeof l == "function") _f(l) && (f = 1);
    else if (typeof l == "string")
      f = xm(
        l,
        a,
        M.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case At:
          return l = ut(31, a, t, e), l.elementType = At, l.lanes = n, l;
        case Hl:
          return Da(a.children, e, n, t);
        case Gl:
          f = 8, e |= 24;
          break;
        case cl:
          return l = ut(12, a, t, e | 2), l.elementType = cl, l.lanes = n, l;
        case st:
          return l = ut(13, a, t, e), l.elementType = st, l.lanes = n, l;
        case Xl:
          return l = ut(19, a, t, e), l.elementType = Xl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case vl:
                f = 10;
                break l;
              case Rl:
                f = 9;
                break l;
              case Ll:
                f = 11;
                break l;
              case X:
                f = 14;
                break l;
              case Cl:
                f = 16, u = null;
                break l;
            }
          f = 29, a = Error(
            h(130, l === null ? "null" : typeof l, "")
          ), u = null;
      }
    return t = ut(f, a, t, e), t.elementType = l, t.type = u, t.lanes = n, t;
  }
  function Da(l, t, a, u) {
    return l = ut(7, l, u, t), l.lanes = a, l;
  }
  function Ef(l, t, a) {
    return l = ut(6, l, null, t), l.lanes = a, l;
  }
  function ms(l) {
    var t = ut(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Tf(l, t, a) {
    return t = ut(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var vs = /* @__PURE__ */ new WeakMap();
  function mt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = vs.get(l);
      return a !== void 0 ? a : (t = {
        value: l,
        source: t,
        stack: mc(t)
      }, vs.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: mc(t)
    };
  }
  var tu = [], au = 0, Ze = null, Qu = 0, vt = [], ht = 0, It = null, Ot = 1, Mt = "";
  function Yt(l, t) {
    tu[au++] = Qu, tu[au++] = Ze, Ze = l, Qu = t;
  }
  function hs(l, t, a) {
    vt[ht++] = Ot, vt[ht++] = Mt, vt[ht++] = It, It = l;
    var u = Ot;
    l = Mt;
    var e = 32 - tt(u) - 1;
    u &= ~(1 << e), a += 1;
    var n = 32 - tt(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (u & (1 << f) - 1).toString(32), u >>= f, e -= f, Ot = 1 << 32 - tt(t) + e | a << e | u, Mt = n + l;
    } else
      Ot = 1 << n | a << e | u, Mt = l;
  }
  function Af(l) {
    l.return !== null && (Yt(l, 1), hs(l, 1, 0));
  }
  function pf(l) {
    for (; l === Ze; )
      Ze = tu[--au], tu[au] = null, Qu = tu[--au], tu[au] = null;
    for (; l === It; )
      It = vt[--ht], vt[ht] = null, Mt = vt[--ht], vt[ht] = null, Ot = vt[--ht], vt[ht] = null;
  }
  function rs(l, t) {
    vt[ht++] = Ot, vt[ht++] = Mt, vt[ht++] = It, Ot = t.id, Mt = t.overflow, It = l;
  }
  var Yl = null, dl = null, J = !1, Pt = null, rt = !1, Of = Error(h(519));
  function la(l) {
    var t = Error(
      h(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Zu(mt(t, l)), Of;
  }
  function gs(l) {
    var t = l.stateNode, a = l.type, u = l.memoizedProps;
    switch (t[ql] = l, t[Jl] = u, a) {
      case "dialog":
        V("cancel", t), V("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        V("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < de.length; a++)
          V(de[a], t);
        break;
      case "source":
        V("error", t);
        break;
      case "img":
      case "image":
      case "link":
        V("error", t), V("load", t);
        break;
      case "details":
        V("toggle", t);
        break;
      case "input":
        V("invalid", t), Nc(
          t,
          u.value,
          u.defaultValue,
          u.checked,
          u.defaultChecked,
          u.type,
          u.name,
          !0
        );
        break;
      case "select":
        V("invalid", t);
        break;
      case "textarea":
        V("invalid", t), Rc(t, u.value, u.defaultValue, u.children);
    }
    a = u.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || u.suppressHydrationWarning === !0 || qd(t.textContent, a) ? (u.popover != null && (V("beforetoggle", t), V("toggle", t)), u.onScroll != null && V("scroll", t), u.onScrollEnd != null && V("scrollend", t), u.onClick != null && (t.onclick = Rt), t = !0) : t = !1, t || la(l, !0);
  }
  function Ss(l) {
    for (Yl = l.return; Yl; )
      switch (Yl.tag) {
        case 5:
        case 31:
        case 13:
          rt = !1;
          return;
        case 27:
        case 3:
          rt = !0;
          return;
        default:
          Yl = Yl.return;
      }
  }
  function uu(l) {
    if (l !== Yl) return !1;
    if (!J) return Ss(l), J = !0, !1;
    var t = l.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || Li(l.type, l.memoizedProps)), a = !a), a && dl && la(l), Ss(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(317));
      dl = Vd(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(317));
      dl = Vd(l);
    } else
      t === 27 ? (t = dl, va(l.type) ? (l = $i, $i = null, dl = l) : dl = t) : dl = Yl ? St(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ua() {
    dl = Yl = null, J = !1;
  }
  function Mf() {
    var l = Pt;
    return l !== null && (kl === null ? kl = l : kl.push.apply(
      kl,
      l
    ), Pt = null), l;
  }
  function Zu(l) {
    Pt === null ? Pt = [l] : Pt.push(l);
  }
  var Df = d(null), Na = null, Bt = null;
  function ta(l, t, a) {
    p(Df, t._currentValue), t._currentValue = a;
  }
  function xt(l) {
    l._currentValue = Df.current, _(Df);
  }
  function Uf(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), l === a) break;
      l = l.return;
    }
  }
  function Nf(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var i = n;
          n = e;
          for (var c = 0; c < t.length; c++)
            if (i.context === t[c]) {
              n.lanes |= a, i = n.alternate, i !== null && (i.lanes |= a), Uf(
                n.return,
                a,
                l
              ), u || (f = null);
              break l;
            }
          n = i.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(h(341));
        f.lanes |= a, n = f.alternate, n !== null && (n.lanes |= a), Uf(f, a, l), f = null;
      } else f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (e = f.sibling, e !== null) {
            e.return = f.return, f = e;
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function eu(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(h(387));
        if (f = f.memoizedProps, f !== null) {
          var i = e.type;
          at(e.pendingProps.value, f.value) || (l !== null ? l.push(i) : l = [i]);
        }
      } else if (e === I.current) {
        if (f = e.alternate, f === null) throw Error(h(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(he) : l = [he]);
      }
      e = e.return;
    }
    l !== null && Nf(
      t,
      l,
      a,
      u
    ), t.flags |= 262144;
  }
  function Ve(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!at(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Ha(l) {
    Na = l, Bt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Bl(l) {
    return bs(Na, l);
  }
  function Le(l, t) {
    return Na === null && Ha(l), bs(l, t);
  }
  function bs(l, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, Bt === null) {
      if (l === null) throw Error(h(308));
      Bt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Bt = Bt.next = t;
    return a;
  }
  var Cy = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, u) {
        l.push(u);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(a) {
        return a();
      });
    };
  }, qy = T.unstable_scheduleCallback, Yy = T.unstable_NormalPriority, Tl = {
    $$typeof: vl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Hf() {
    return {
      controller: new Cy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Vu(l) {
    l.refCount--, l.refCount === 0 && qy(Yy, function() {
      l.controller.abort();
    });
  }
  var Lu = null, Rf = 0, nu = 0, fu = null;
  function By(l, t) {
    if (Lu === null) {
      var a = Lu = [];
      Rf = 0, nu = Yi(), fu = {
        status: "pending",
        value: void 0,
        then: function(u) {
          a.push(u);
        }
      };
    }
    return Rf++, t.then(zs, zs), t;
  }
  function zs() {
    if (--Rf === 0 && Lu !== null) {
      fu !== null && (fu.status = "fulfilled");
      var l = Lu;
      Lu = null, nu = 0, fu = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function xy(l, t) {
    var a = [], u = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        a.push(e);
      }
    };
    return l.then(
      function() {
        u.status = "fulfilled", u.value = t;
        for (var e = 0; e < a.length; e++) (0, a[e])(t);
      },
      function(e) {
        for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
          (0, a[e])(void 0);
      }
    ), u;
  }
  var _s = S.S;
  S.S = function(l, t) {
    ed = Pl(), typeof t == "object" && t !== null && typeof t.then == "function" && By(l, t), _s !== null && _s(l, t);
  };
  var Ra = d(null);
  function Cf() {
    var l = Ra.current;
    return l !== null ? l : fl.pooledCache;
  }
  function Ke(l, t) {
    t === null ? p(Ra, Ra.current) : p(Ra, t.pool);
  }
  function Es() {
    var l = Cf();
    return l === null ? null : { parent: Tl._currentValue, pool: l };
  }
  var iu = Error(h(460)), qf = Error(h(474)), Je = Error(h(542)), we = { then: function() {
  } };
  function Ts(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function As(l, t, a) {
    switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(Rt, Rt), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Os(l), l;
      default:
        if (typeof t.status == "string") t.then(Rt, Rt);
        else {
          if (l = fl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(h(482));
          l = t, l.status = "pending", l.then(
            function(u) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = u;
              }
            },
            function(u) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = u;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Os(l), l;
        }
        throw qa = t, iu;
    }
  }
  function Ca(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (qa = a, iu) : a;
    }
  }
  var qa = null;
  function ps() {
    if (qa === null) throw Error(h(459));
    var l = qa;
    return qa = null, l;
  }
  function Os(l) {
    if (l === iu || l === Je)
      throw Error(h(483));
  }
  var cu = null, Ku = 0;
  function We(l) {
    var t = Ku;
    return Ku += 1, cu === null && (cu = []), As(cu, l, t);
  }
  function Ju(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function $e(l, t) {
    throw t.$$typeof === sl ? Error(h(525)) : (l = Object.prototype.toString.call(t), Error(
      h(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function Ms(l) {
    function t(o, s) {
      if (l) {
        var y = o.deletions;
        y === null ? (o.deletions = [s], o.flags |= 16) : y.push(s);
      }
    }
    function a(o, s) {
      if (!l) return null;
      for (; s !== null; )
        t(o, s), s = s.sibling;
      return null;
    }
    function u(o) {
      for (var s = /* @__PURE__ */ new Map(); o !== null; )
        o.key !== null ? s.set(o.key, o) : s.set(o.index, o), o = o.sibling;
      return s;
    }
    function e(o, s) {
      return o = qt(o, s), o.index = 0, o.sibling = null, o;
    }
    function n(o, s, y) {
      return o.index = y, l ? (y = o.alternate, y !== null ? (y = y.index, y < s ? (o.flags |= 67108866, s) : y) : (o.flags |= 67108866, s)) : (o.flags |= 1048576, s);
    }
    function f(o) {
      return l && o.alternate === null && (o.flags |= 67108866), o;
    }
    function i(o, s, y, b) {
      return s === null || s.tag !== 6 ? (s = Ef(y, o.mode, b), s.return = o, s) : (s = e(s, y), s.return = o, s);
    }
    function c(o, s, y, b) {
      var H = y.type;
      return H === Hl ? g(
        o,
        s,
        y.props.children,
        b,
        y.key
      ) : s !== null && (s.elementType === H || typeof H == "object" && H !== null && H.$$typeof === Cl && Ca(H) === s.type) ? (s = e(s, y.props), Ju(s, y), s.return = o, s) : (s = Qe(
        y.type,
        y.key,
        y.props,
        null,
        o.mode,
        b
      ), Ju(s, y), s.return = o, s);
    }
    function m(o, s, y, b) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== y.containerInfo || s.stateNode.implementation !== y.implementation ? (s = Tf(y, o.mode, b), s.return = o, s) : (s = e(s, y.children || []), s.return = o, s);
    }
    function g(o, s, y, b, H) {
      return s === null || s.tag !== 7 ? (s = Da(
        y,
        o.mode,
        b,
        H
      ), s.return = o, s) : (s = e(s, y), s.return = o, s);
    }
    function z(o, s, y) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return s = Ef(
          "" + s,
          o.mode,
          y
        ), s.return = o, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Nl:
            return y = Qe(
              s.type,
              s.key,
              s.props,
              null,
              o.mode,
              y
            ), Ju(y, s), y.return = o, y;
          case El:
            return s = Tf(
              s,
              o.mode,
              y
            ), s.return = o, s;
          case Cl:
            return s = Ca(s), z(o, s, y);
        }
        if (zt(s) || Kl(s))
          return s = Da(
            s,
            o.mode,
            y,
            null
          ), s.return = o, s;
        if (typeof s.then == "function")
          return z(o, We(s), y);
        if (s.$$typeof === vl)
          return z(
            o,
            Le(o, s),
            y
          );
        $e(o, s);
      }
      return null;
    }
    function v(o, s, y, b) {
      var H = s !== null ? s.key : null;
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return H !== null ? null : i(o, s, "" + y, b);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Nl:
            return y.key === H ? c(o, s, y, b) : null;
          case El:
            return y.key === H ? m(o, s, y, b) : null;
          case Cl:
            return y = Ca(y), v(o, s, y, b);
        }
        if (zt(y) || Kl(y))
          return H !== null ? null : g(o, s, y, b, null);
        if (typeof y.then == "function")
          return v(
            o,
            s,
            We(y),
            b
          );
        if (y.$$typeof === vl)
          return v(
            o,
            s,
            Le(o, y),
            b
          );
        $e(o, y);
      }
      return null;
    }
    function r(o, s, y, b, H) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return o = o.get(y) || null, i(s, o, "" + b, H);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Nl:
            return o = o.get(
              b.key === null ? y : b.key
            ) || null, c(s, o, b, H);
          case El:
            return o = o.get(
              b.key === null ? y : b.key
            ) || null, m(s, o, b, H);
          case Cl:
            return b = Ca(b), r(
              o,
              s,
              y,
              b,
              H
            );
        }
        if (zt(b) || Kl(b))
          return o = o.get(y) || null, g(s, o, b, H, null);
        if (typeof b.then == "function")
          return r(
            o,
            s,
            y,
            We(b),
            H
          );
        if (b.$$typeof === vl)
          return r(
            o,
            s,
            y,
            Le(s, b),
            H
          );
        $e(s, b);
      }
      return null;
    }
    function O(o, s, y, b) {
      for (var H = null, W = null, D = s, j = s = 0, K = null; D !== null && j < y.length; j++) {
        D.index > j ? (K = D, D = null) : K = D.sibling;
        var $ = v(
          o,
          D,
          y[j],
          b
        );
        if ($ === null) {
          D === null && (D = K);
          break;
        }
        l && D && $.alternate === null && t(o, D), s = n($, s, j), W === null ? H = $ : W.sibling = $, W = $, D = K;
      }
      if (j === y.length)
        return a(o, D), J && Yt(o, j), H;
      if (D === null) {
        for (; j < y.length; j++)
          D = z(o, y[j], b), D !== null && (s = n(
            D,
            s,
            j
          ), W === null ? H = D : W.sibling = D, W = D);
        return J && Yt(o, j), H;
      }
      for (D = u(D); j < y.length; j++)
        K = r(
          D,
          o,
          j,
          y[j],
          b
        ), K !== null && (l && K.alternate !== null && D.delete(
          K.key === null ? j : K.key
        ), s = n(
          K,
          s,
          j
        ), W === null ? H = K : W.sibling = K, W = K);
      return l && D.forEach(function(ba) {
        return t(o, ba);
      }), J && Yt(o, j), H;
    }
    function R(o, s, y, b) {
      if (y == null) throw Error(h(151));
      for (var H = null, W = null, D = s, j = s = 0, K = null, $ = y.next(); D !== null && !$.done; j++, $ = y.next()) {
        D.index > j ? (K = D, D = null) : K = D.sibling;
        var ba = v(o, D, $.value, b);
        if (ba === null) {
          D === null && (D = K);
          break;
        }
        l && D && ba.alternate === null && t(o, D), s = n(ba, s, j), W === null ? H = ba : W.sibling = ba, W = ba, D = K;
      }
      if ($.done)
        return a(o, D), J && Yt(o, j), H;
      if (D === null) {
        for (; !$.done; j++, $ = y.next())
          $ = z(o, $.value, b), $ !== null && (s = n($, s, j), W === null ? H = $ : W.sibling = $, W = $);
        return J && Yt(o, j), H;
      }
      for (D = u(D); !$.done; j++, $ = y.next())
        $ = r(D, o, j, $.value, b), $ !== null && (l && $.alternate !== null && D.delete($.key === null ? j : $.key), s = n($, s, j), W === null ? H = $ : W.sibling = $, W = $);
      return l && D.forEach(function(Wm) {
        return t(o, Wm);
      }), J && Yt(o, j), H;
    }
    function el(o, s, y, b) {
      if (typeof y == "object" && y !== null && y.type === Hl && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Nl:
            l: {
              for (var H = y.key; s !== null; ) {
                if (s.key === H) {
                  if (H = y.type, H === Hl) {
                    if (s.tag === 7) {
                      a(
                        o,
                        s.sibling
                      ), b = e(
                        s,
                        y.props.children
                      ), b.return = o, o = b;
                      break l;
                    }
                  } else if (s.elementType === H || typeof H == "object" && H !== null && H.$$typeof === Cl && Ca(H) === s.type) {
                    a(
                      o,
                      s.sibling
                    ), b = e(s, y.props), Ju(b, y), b.return = o, o = b;
                    break l;
                  }
                  a(o, s);
                  break;
                } else t(o, s);
                s = s.sibling;
              }
              y.type === Hl ? (b = Da(
                y.props.children,
                o.mode,
                b,
                y.key
              ), b.return = o, o = b) : (b = Qe(
                y.type,
                y.key,
                y.props,
                null,
                o.mode,
                b
              ), Ju(b, y), b.return = o, o = b);
            }
            return f(o);
          case El:
            l: {
              for (H = y.key; s !== null; ) {
                if (s.key === H)
                  if (s.tag === 4 && s.stateNode.containerInfo === y.containerInfo && s.stateNode.implementation === y.implementation) {
                    a(
                      o,
                      s.sibling
                    ), b = e(s, y.children || []), b.return = o, o = b;
                    break l;
                  } else {
                    a(o, s);
                    break;
                  }
                else t(o, s);
                s = s.sibling;
              }
              b = Tf(y, o.mode, b), b.return = o, o = b;
            }
            return f(o);
          case Cl:
            return y = Ca(y), el(
              o,
              s,
              y,
              b
            );
        }
        if (zt(y))
          return O(
            o,
            s,
            y,
            b
          );
        if (Kl(y)) {
          if (H = Kl(y), typeof H != "function") throw Error(h(150));
          return y = H.call(y), R(
            o,
            s,
            y,
            b
          );
        }
        if (typeof y.then == "function")
          return el(
            o,
            s,
            We(y),
            b
          );
        if (y.$$typeof === vl)
          return el(
            o,
            s,
            Le(o, y),
            b
          );
        $e(o, y);
      }
      return typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint" ? (y = "" + y, s !== null && s.tag === 6 ? (a(o, s.sibling), b = e(s, y), b.return = o, o = b) : (a(o, s), b = Ef(y, o.mode, b), b.return = o, o = b), f(o)) : a(o, s);
    }
    return function(o, s, y, b) {
      try {
        Ku = 0;
        var H = el(
          o,
          s,
          y,
          b
        );
        return cu = null, H;
      } catch (D) {
        if (D === iu || D === Je) throw D;
        var W = ut(29, D, null, o.mode);
        return W.lanes = b, W.return = o, W;
      } finally {
      }
    };
  }
  var Ya = Ms(!0), Ds = Ms(!1), aa = !1;
  function Yf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Bf(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function ua(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ea(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (F & 2) !== 0) {
      var e = u.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), u.pending = t, t = Xe(l), os(l, null, a), t;
    }
    return Ge(l, u, t, a), Xe(l);
  }
  function wu(l, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, bc(l, a);
    }
  }
  function xf(l, t) {
    var a = l.updateQueue, u = l.alternate;
    if (u !== null && (u = u.updateQueue, a === u)) {
      var e = null, n = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var f = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, a = a.next;
        } while (a !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks
      }, l.updateQueue = a;
      return;
    }
    l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = t : l.next = t, a.lastBaseUpdate = t;
  }
  var jf = !1;
  function Wu() {
    if (jf) {
      var l = fu;
      if (l !== null) throw l;
    }
  }
  function $u(l, t, a, u) {
    jf = !1;
    var e = l.updateQueue;
    aa = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, i = e.shared.pending;
    if (i !== null) {
      e.shared.pending = null;
      var c = i, m = c.next;
      c.next = null, f === null ? n = m : f.next = m, f = c;
      var g = l.alternate;
      g !== null && (g = g.updateQueue, i = g.lastBaseUpdate, i !== f && (i === null ? g.firstBaseUpdate = m : i.next = m, g.lastBaseUpdate = c));
    }
    if (n !== null) {
      var z = e.baseState;
      f = 0, g = m = c = null, i = n;
      do {
        var v = i.lane & -536870913, r = v !== i.lane;
        if (r ? (L & v) === v : (u & v) === v) {
          v !== 0 && v === nu && (jf = !0), g !== null && (g = g.next = {
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          });
          l: {
            var O = l, R = i;
            v = t;
            var el = a;
            switch (R.tag) {
              case 1:
                if (O = R.payload, typeof O == "function") {
                  z = O.call(el, z, v);
                  break l;
                }
                z = O;
                break l;
              case 3:
                O.flags = O.flags & -65537 | 128;
              case 0:
                if (O = R.payload, v = typeof O == "function" ? O.call(el, z, v) : O, v == null) break l;
                z = N({}, z, v);
                break l;
              case 2:
                aa = !0;
            }
          }
          v = i.callback, v !== null && (l.flags |= 64, r && (l.flags |= 8192), r = e.callbacks, r === null ? e.callbacks = [v] : r.push(v));
        } else
          r = {
            lane: v,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          }, g === null ? (m = g = r, c = z) : g = g.next = r, f |= v;
        if (i = i.next, i === null) {
          if (i = e.shared.pending, i === null)
            break;
          r = i, i = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
        }
      } while (!0);
      g === null && (c = z), e.baseState = c, e.firstBaseUpdate = m, e.lastBaseUpdate = g, n === null && (e.shared.lanes = 0), sa |= f, l.lanes = f, l.memoizedState = z;
    }
  }
  function Us(l, t) {
    if (typeof l != "function")
      throw Error(h(191, l));
    l.call(t);
  }
  function Ns(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++)
        Us(a[l], t);
  }
  var su = d(null), Fe = d(0);
  function Hs(l, t) {
    l = Jt, p(Fe, l), p(su, t), Jt = l | t.baseLanes;
  }
  function Gf() {
    p(Fe, Jt), p(su, su.current);
  }
  function Xf() {
    Jt = Fe.current, _(su), _(Fe);
  }
  var et = d(null), gt = null;
  function na(l) {
    var t = l.alternate;
    p(zl, zl.current & 1), p(et, l), gt === null && (t === null || su.current !== null || t.memoizedState !== null) && (gt = l);
  }
  function Qf(l) {
    p(zl, zl.current), p(et, l), gt === null && (gt = l);
  }
  function Rs(l) {
    l.tag === 22 ? (p(zl, zl.current), p(et, l), gt === null && (gt = l)) : fa();
  }
  function fa() {
    p(zl, zl.current), p(et, et.current);
  }
  function nt(l) {
    _(et), gt === l && (gt = null), _(zl);
  }
  var zl = d(0);
  function ke(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || wi(a) || Wi(a)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var jt = 0, x = null, al = null, Al = null, Ie = !1, du = !1, Ba = !1, Pe = 0, Fu = 0, ou = null, jy = 0;
  function rl() {
    throw Error(h(321));
  }
  function Zf(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!at(l[a], t[a])) return !1;
    return !0;
  }
  function Vf(l, t, a, u, e, n) {
    return jt = n, x = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, S.H = l === null || l.memoizedState === null ? h0 : ei, Ba = !1, n = a(u, e), Ba = !1, du && (n = qs(
      t,
      a,
      u,
      e
    )), Cs(l), n;
  }
  function Cs(l) {
    S.H = Pu;
    var t = al !== null && al.next !== null;
    if (jt = 0, Al = al = x = null, Ie = !1, Fu = 0, ou = null, t) throw Error(h(300));
    l === null || pl || (l = l.dependencies, l !== null && Ve(l) && (pl = !0));
  }
  function qs(l, t, a, u) {
    x = l;
    var e = 0;
    do {
      if (du && (ou = null), Fu = 0, du = !1, 25 <= e) throw Error(h(301));
      if (e += 1, Al = al = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      S.H = r0, n = t(a, u);
    } while (du);
    return n;
  }
  function Gy() {
    var l = S.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? ku(t) : t, l = l.useState()[0], (al !== null ? al.memoizedState : null) !== l && (x.flags |= 1024), t;
  }
  function Lf() {
    var l = Pe !== 0;
    return Pe = 0, l;
  }
  function Kf(l, t, a) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a;
  }
  function Jf(l) {
    if (Ie) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Ie = !1;
    }
    jt = 0, Al = al = x = null, du = !1, Fu = Pe = 0, ou = null;
  }
  function Vl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Al === null ? x.memoizedState = Al = l : Al = Al.next = l, Al;
  }
  function _l() {
    if (al === null) {
      var l = x.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = al.next;
    var t = Al === null ? x.memoizedState : Al.next;
    if (t !== null)
      Al = t, al = l;
    else {
      if (l === null)
        throw x.alternate === null ? Error(h(467)) : Error(h(310));
      al = l, l = {
        memoizedState: al.memoizedState,
        baseState: al.baseState,
        baseQueue: al.baseQueue,
        queue: al.queue,
        next: null
      }, Al === null ? x.memoizedState = Al = l : Al = Al.next = l;
    }
    return Al;
  }
  function ln() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ku(l) {
    var t = Fu;
    return Fu += 1, ou === null && (ou = []), l = As(ou, l, t), t = x, (Al === null ? t.memoizedState : Al.next) === null && (t = t.alternate, S.H = t === null || t.memoizedState === null ? h0 : ei), l;
  }
  function tn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return ku(l);
      if (l.$$typeof === vl) return Bl(l);
    }
    throw Error(h(438, String(l)));
  }
  function wf(l) {
    var t = null, a = x.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var u = x.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (t = {
        data: u.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = ln(), x.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++)
        a[u] = Xa;
    return t.index++, a;
  }
  function Gt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function an(l) {
    var t = _l();
    return Wf(t, al, l);
  }
  function Wf(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(h(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue, n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, u.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var i = f = null, c = null, m = t, g = !1;
      do {
        var z = m.lane & -536870913;
        if (z !== m.lane ? (L & z) === z : (jt & z) === z) {
          var v = m.revertLane;
          if (v === 0)
            c !== null && (c = c.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null
            }), z === nu && (g = !0);
          else if ((jt & v) === v) {
            m = m.next, v === nu && (g = !0);
            continue;
          } else
            z = {
              lane: 0,
              revertLane: m.revertLane,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null
            }, c === null ? (i = c = z, f = n) : c = c.next = z, x.lanes |= v, sa |= v;
          z = m.action, Ba && a(n, z), n = m.hasEagerState ? m.eagerState : a(n, z);
        } else
          v = {
            lane: z,
            revertLane: m.revertLane,
            gesture: m.gesture,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null
          }, c === null ? (i = c = v, f = n) : c = c.next = v, x.lanes |= z, sa |= z;
        m = m.next;
      } while (m !== null && m !== t);
      if (c === null ? f = n : c.next = i, !at(n, l.memoizedState) && (pl = !0, g && (a = fu, a !== null)))
        throw a;
      l.memoizedState = n, l.baseState = f, l.baseQueue = c, u.lastRenderedState = n;
    }
    return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function $f(l) {
    var t = _l(), a = t.queue;
    if (a === null) throw Error(h(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch, e = a.pending, n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      at(n, t.memoizedState) || (pl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n;
    }
    return [n, u];
  }
  function Ys(l, t, a) {
    var u = x, e = _l(), n = J;
    if (n) {
      if (a === void 0) throw Error(h(407));
      a = a();
    } else a = t();
    var f = !at(
      (al || e).memoizedState,
      a
    );
    if (f && (e.memoizedState = a, pl = !0), e = e.queue, If(js.bind(null, u, e, l), [
      l
    ]), e.getSnapshot !== t || f || Al !== null && Al.memoizedState.tag & 1) {
      if (u.flags |= 2048, yu(
        9,
        { destroy: void 0 },
        xs.bind(
          null,
          u,
          e,
          a,
          t
        ),
        null
      ), fl === null) throw Error(h(349));
      n || (jt & 127) !== 0 || Bs(u, t, a);
    }
    return a;
  }
  function Bs(l, t, a) {
    l.flags |= 16384, l = { getSnapshot: t, value: a }, t = x.updateQueue, t === null ? (t = ln(), x.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l));
  }
  function xs(l, t, a, u) {
    t.value = a, t.getSnapshot = u, Gs(t) && Xs(l);
  }
  function js(l, t, a) {
    return a(function() {
      Gs(t) && Xs(l);
    });
  }
  function Gs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !at(l, a);
    } catch {
      return !0;
    }
  }
  function Xs(l) {
    var t = Ma(l, 2);
    t !== null && Il(t, l, 2);
  }
  function Ff(l) {
    var t = Vl();
    if (typeof l == "function") {
      var a = l;
      if (l = a(), Ba) {
        $t(!0);
        try {
          a();
        } finally {
          $t(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gt,
      lastRenderedState: l
    }, t;
  }
  function Qs(l, t, a, u) {
    return l.baseState = a, Wf(
      l,
      al,
      typeof u == "function" ? u : Gt
    );
  }
  function Xy(l, t, a, u, e) {
    if (nn(l)) throw Error(h(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          n.listeners.push(f);
        }
      };
      S.T !== null ? a(!0) : n.isTransition = !1, u(n), a = t.pending, a === null ? (n.next = t.pending = n, Zs(t, n)) : (n.next = a.next, t.pending = a.next = n);
    }
  }
  function Zs(l, t) {
    var a = t.action, u = t.payload, e = l.state;
    if (t.isTransition) {
      var n = S.T, f = {};
      S.T = f;
      try {
        var i = a(e, u), c = S.S;
        c !== null && c(f, i), Vs(l, t, i);
      } catch (m) {
        kf(l, t, m);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), S.T = n;
      }
    } else
      try {
        n = a(e, u), Vs(l, t, n);
      } catch (m) {
        kf(l, t, m);
      }
  }
  function Vs(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(u) {
        Ls(l, t, u);
      },
      function(u) {
        return kf(l, t, u);
      }
    ) : Ls(l, t, a);
  }
  function Ls(l, t, a) {
    t.status = "fulfilled", t.value = a, Ks(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, Zs(l, a)));
  }
  function kf(l, t, a) {
    var u = l.pending;
    if (l.pending = null, u !== null) {
      u = u.next;
      do
        t.status = "rejected", t.reason = a, Ks(t), t = t.next;
      while (t !== u);
    }
    l.action = null;
  }
  function Ks(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Js(l, t) {
    return t;
  }
  function ws(l, t) {
    if (J) {
      var a = fl.formState;
      if (a !== null) {
        l: {
          var u = x;
          if (J) {
            if (dl) {
              t: {
                for (var e = dl, n = rt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = St(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                dl = St(
                  e.nextSibling
                ), u = e.data === "F!";
                break l;
              }
            }
            la(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return a = Vl(), a.memoizedState = a.baseState = t, u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Js,
      lastRenderedState: t
    }, a.queue = u, a = y0.bind(
      null,
      x,
      u
    ), u.dispatch = a, u = Ff(!1), n = ui.bind(
      null,
      x,
      !1,
      u.queue
    ), u = Vl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, u.queue = e, a = Xy.bind(
      null,
      x,
      e,
      n,
      a
    ), e.dispatch = a, u.memoizedState = l, [t, a, !1];
  }
  function Ws(l) {
    var t = _l();
    return $s(t, al, l);
  }
  function $s(l, t, a) {
    if (t = Wf(
      l,
      t,
      Js
    )[0], l = an(Gt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var u = ku(t);
      } catch (f) {
        throw f === iu ? Je : f;
      }
    else u = t;
    t = _l();
    var e = t.queue, n = e.dispatch;
    return a !== t.memoizedState && (x.flags |= 2048, yu(
      9,
      { destroy: void 0 },
      Qy.bind(null, e, a),
      null
    )), [u, n, l];
  }
  function Qy(l, t) {
    l.action = t;
  }
  function Fs(l) {
    var t = _l(), a = al;
    if (a !== null)
      return $s(t, a, l);
    _l(), t = t.memoizedState, a = _l();
    var u = a.queue.dispatch;
    return a.memoizedState = l, [t, u, !1];
  }
  function yu(l, t, a, u) {
    return l = { tag: l, create: a, deps: u, inst: t, next: null }, t = x.updateQueue, t === null && (t = ln(), x.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (u = a.next, a.next = l, l.next = u, t.lastEffect = l), l;
  }
  function ks() {
    return _l().memoizedState;
  }
  function un(l, t, a, u) {
    var e = Vl();
    x.flags |= l, e.memoizedState = yu(
      1 | t,
      { destroy: void 0 },
      a,
      u === void 0 ? null : u
    );
  }
  function en(l, t, a, u) {
    var e = _l();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    al !== null && u !== null && Zf(u, al.memoizedState.deps) ? e.memoizedState = yu(t, n, a, u) : (x.flags |= l, e.memoizedState = yu(
      1 | t,
      n,
      a,
      u
    ));
  }
  function Is(l, t) {
    un(8390656, 8, l, t);
  }
  function If(l, t) {
    en(2048, 8, l, t);
  }
  function Zy(l) {
    x.flags |= 4;
    var t = x.updateQueue;
    if (t === null)
      t = ln(), x.updateQueue = t, t.events = [l];
    else {
      var a = t.events;
      a === null ? t.events = [l] : a.push(l);
    }
  }
  function Ps(l) {
    var t = _l().memoizedState;
    return Zy({ ref: t, nextImpl: l }), function() {
      if ((F & 2) !== 0) throw Error(h(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function l0(l, t) {
    return en(4, 2, l, t);
  }
  function t0(l, t) {
    return en(4, 4, l, t);
  }
  function a0(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function u0(l, t, a) {
    a = a != null ? a.concat([l]) : null, en(4, 4, a0.bind(null, t, l), a);
  }
  function Pf() {
  }
  function e0(l, t) {
    var a = _l();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && Zf(t, u[1]) ? u[0] : (a.memoizedState = [l, t], l);
  }
  function n0(l, t) {
    var a = _l();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && Zf(t, u[1]))
      return u[0];
    if (u = l(), Ba) {
      $t(!0);
      try {
        l();
      } finally {
        $t(!1);
      }
    }
    return a.memoizedState = [u, t], u;
  }
  function li(l, t, a) {
    return a === void 0 || (jt & 1073741824) !== 0 && (L & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = a, l = fd(), x.lanes |= l, sa |= l, a);
  }
  function f0(l, t, a, u) {
    return at(a, t) ? a : su.current !== null ? (l = li(l, a, u), at(l, t) || (pl = !0), l) : (jt & 42) === 0 || (jt & 1073741824) !== 0 && (L & 261930) === 0 ? (pl = !0, l.memoizedState = a) : (l = fd(), x.lanes |= l, sa |= l, t);
  }
  function i0(l, t, a, u, e) {
    var n = A.p;
    A.p = n !== 0 && 8 > n ? n : 8;
    var f = S.T, i = {};
    S.T = i, ui(l, !1, t, a);
    try {
      var c = e(), m = S.S;
      if (m !== null && m(i, c), c !== null && typeof c == "object" && typeof c.then == "function") {
        var g = xy(
          c,
          u
        );
        Iu(
          l,
          t,
          g,
          ct(l)
        );
      } else
        Iu(
          l,
          t,
          u,
          ct(l)
        );
    } catch (z) {
      Iu(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: z },
        ct()
      );
    } finally {
      A.p = n, f !== null && i.types !== null && (f.types = i.types), S.T = f;
    }
  }
  function Vy() {
  }
  function ti(l, t, a, u) {
    if (l.tag !== 5) throw Error(h(476));
    var e = c0(l).queue;
    i0(
      l,
      e,
      t,
      C,
      a === null ? Vy : function() {
        return s0(l), a(u);
      }
    );
  }
  function c0(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: C,
      baseState: C,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gt,
        lastRenderedState: C
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gt,
        lastRenderedState: a
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function s0(l) {
    var t = c0(l);
    t.next === null && (t = l.alternate.memoizedState), Iu(
      l,
      t.next.queue,
      {},
      ct()
    );
  }
  function ai() {
    return Bl(he);
  }
  function d0() {
    return _l().memoizedState;
  }
  function o0() {
    return _l().memoizedState;
  }
  function Ly(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = ct();
          l = ua(a);
          var u = ea(t, l, a);
          u !== null && (Il(u, t, a), wu(u, t, a)), t = { cache: Hf() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Ky(l, t, a) {
    var u = ct();
    a = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l) ? m0(t, a) : (a = zf(l, t, a, u), a !== null && (Il(a, l, u), v0(a, t, u)));
  }
  function y0(l, t, a) {
    var u = ct();
    Iu(l, t, a, u);
  }
  function Iu(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (nn(l)) m0(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, i = n(f, a);
          if (e.hasEagerState = !0, e.eagerState = i, at(i, f))
            return Ge(l, t, e, 0), fl === null && je(), !1;
        } catch {
        } finally {
        }
      if (a = zf(l, t, e, u), a !== null)
        return Il(a, l, u), v0(a, t, u), !0;
    }
    return !1;
  }
  function ui(l, t, a, u) {
    if (u = {
      lane: 2,
      revertLane: Yi(),
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l)) {
      if (t) throw Error(h(479));
    } else
      t = zf(
        l,
        a,
        u,
        2
      ), t !== null && Il(t, l, 2);
  }
  function nn(l) {
    var t = l.alternate;
    return l === x || t !== null && t === x;
  }
  function m0(l, t) {
    du = Ie = !0;
    var a = l.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
  }
  function v0(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, bc(l, a);
    }
  }
  var Pu = {
    readContext: Bl,
    use: tn,
    useCallback: rl,
    useContext: rl,
    useEffect: rl,
    useImperativeHandle: rl,
    useLayoutEffect: rl,
    useInsertionEffect: rl,
    useMemo: rl,
    useReducer: rl,
    useRef: rl,
    useState: rl,
    useDebugValue: rl,
    useDeferredValue: rl,
    useTransition: rl,
    useSyncExternalStore: rl,
    useId: rl,
    useHostTransitionStatus: rl,
    useFormState: rl,
    useActionState: rl,
    useOptimistic: rl,
    useMemoCache: rl,
    useCacheRefresh: rl
  };
  Pu.useEffectEvent = rl;
  var h0 = {
    readContext: Bl,
    use: tn,
    useCallback: function(l, t) {
      return Vl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Bl,
    useEffect: Is,
    useImperativeHandle: function(l, t, a) {
      a = a != null ? a.concat([l]) : null, un(
        4194308,
        4,
        a0.bind(null, t, l),
        a
      );
    },
    useLayoutEffect: function(l, t) {
      return un(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      un(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var a = Vl();
      t = t === void 0 ? null : t;
      var u = l();
      if (Ba) {
        $t(!0);
        try {
          l();
        } finally {
          $t(!1);
        }
      }
      return a.memoizedState = [u, t], u;
    },
    useReducer: function(l, t, a) {
      var u = Vl();
      if (a !== void 0) {
        var e = a(t);
        if (Ba) {
          $t(!0);
          try {
            a(t);
          } finally {
            $t(!1);
          }
        }
      } else e = t;
      return u.memoizedState = u.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, u.queue = l, l = l.dispatch = Ky.bind(
        null,
        x,
        l
      ), [u.memoizedState, l];
    },
    useRef: function(l) {
      var t = Vl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Ff(l);
      var t = l.queue, a = y0.bind(null, x, t);
      return t.dispatch = a, [l.memoizedState, a];
    },
    useDebugValue: Pf,
    useDeferredValue: function(l, t) {
      var a = Vl();
      return li(a, l, t);
    },
    useTransition: function() {
      var l = Ff(!1);
      return l = i0.bind(
        null,
        x,
        l.queue,
        !0,
        !1
      ), Vl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, a) {
      var u = x, e = Vl();
      if (J) {
        if (a === void 0)
          throw Error(h(407));
        a = a();
      } else {
        if (a = t(), fl === null)
          throw Error(h(349));
        (L & 127) !== 0 || Bs(u, t, a);
      }
      e.memoizedState = a;
      var n = { value: a, getSnapshot: t };
      return e.queue = n, Is(js.bind(null, u, n, l), [
        l
      ]), u.flags |= 2048, yu(
        9,
        { destroy: void 0 },
        xs.bind(
          null,
          u,
          n,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var l = Vl(), t = fl.identifierPrefix;
      if (J) {
        var a = Mt, u = Ot;
        a = (u & ~(1 << 32 - tt(u) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Pe++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = jy++, t = "_" + t + "r_" + a.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: ai,
    useFormState: ws,
    useActionState: ws,
    useOptimistic: function(l) {
      var t = Vl();
      t.memoizedState = t.baseState = l;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = ui.bind(
        null,
        x,
        !0,
        a
      ), a.dispatch = t, [l, t];
    },
    useMemoCache: wf,
    useCacheRefresh: function() {
      return Vl().memoizedState = Ly.bind(
        null,
        x
      );
    },
    useEffectEvent: function(l) {
      var t = Vl(), a = { impl: l };
      return t.memoizedState = a, function() {
        if ((F & 2) !== 0)
          throw Error(h(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, ei = {
    readContext: Bl,
    use: tn,
    useCallback: e0,
    useContext: Bl,
    useEffect: If,
    useImperativeHandle: u0,
    useInsertionEffect: l0,
    useLayoutEffect: t0,
    useMemo: n0,
    useReducer: an,
    useRef: ks,
    useState: function() {
      return an(Gt);
    },
    useDebugValue: Pf,
    useDeferredValue: function(l, t) {
      var a = _l();
      return f0(
        a,
        al.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = an(Gt)[0], t = _l().memoizedState;
      return [
        typeof l == "boolean" ? l : ku(l),
        t
      ];
    },
    useSyncExternalStore: Ys,
    useId: d0,
    useHostTransitionStatus: ai,
    useFormState: Ws,
    useActionState: Ws,
    useOptimistic: function(l, t) {
      var a = _l();
      return Qs(a, al, l, t);
    },
    useMemoCache: wf,
    useCacheRefresh: o0
  };
  ei.useEffectEvent = Ps;
  var r0 = {
    readContext: Bl,
    use: tn,
    useCallback: e0,
    useContext: Bl,
    useEffect: If,
    useImperativeHandle: u0,
    useInsertionEffect: l0,
    useLayoutEffect: t0,
    useMemo: n0,
    useReducer: $f,
    useRef: ks,
    useState: function() {
      return $f(Gt);
    },
    useDebugValue: Pf,
    useDeferredValue: function(l, t) {
      var a = _l();
      return al === null ? li(a, l, t) : f0(
        a,
        al.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = $f(Gt)[0], t = _l().memoizedState;
      return [
        typeof l == "boolean" ? l : ku(l),
        t
      ];
    },
    useSyncExternalStore: Ys,
    useId: d0,
    useHostTransitionStatus: ai,
    useFormState: Fs,
    useActionState: Fs,
    useOptimistic: function(l, t) {
      var a = _l();
      return al !== null ? Qs(a, al, l, t) : (a.baseState = l, [l, a.queue.dispatch]);
    },
    useMemoCache: wf,
    useCacheRefresh: o0
  };
  r0.useEffectEvent = Ps;
  function ni(l, t, a, u) {
    t = l.memoizedState, a = a(u, t), a = a == null ? t : N({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var fi = {
    enqueueSetState: function(l, t, a) {
      l = l._reactInternals;
      var u = ct(), e = ua(u);
      e.payload = t, a != null && (e.callback = a), t = ea(l, e, u), t !== null && (Il(t, l, u), wu(t, l, u));
    },
    enqueueReplaceState: function(l, t, a) {
      l = l._reactInternals;
      var u = ct(), e = ua(u);
      e.tag = 1, e.payload = t, a != null && (e.callback = a), t = ea(l, e, u), t !== null && (Il(t, l, u), wu(t, l, u));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var a = ct(), u = ua(a);
      u.tag = 2, t != null && (u.callback = t), t = ea(l, u, a), t !== null && (Il(t, l, a), wu(t, l, a));
    }
  };
  function g0(l, t, a, u, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Gu(a, u) || !Gu(e, n) : !0;
  }
  function S0(l, t, a, u) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u), t.state !== l && fi.enqueueReplaceState(t, t.state, null);
  }
  function xa(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t)
        u !== "ref" && (a[u] = t[u]);
    }
    if (l = l.defaultProps) {
      a === t && (a = N({}, a));
      for (var e in l)
        a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  function b0(l) {
    xe(l);
  }
  function z0(l) {
    console.error(l);
  }
  function _0(l) {
    xe(l);
  }
  function fn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function E0(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function ii(l, t, a) {
    return a = ua(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      fn(l, t);
    }, a;
  }
  function T0(l) {
    return l = ua(l), l.tag = 3, l;
  }
  function A0(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        E0(t, a, u);
      };
    }
    var f = a.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      E0(t, a, u), typeof e != "function" && (da === null ? da = /* @__PURE__ */ new Set([this]) : da.add(this));
      var i = u.stack;
      this.componentDidCatch(u.value, {
        componentStack: i !== null ? i : ""
      });
    });
  }
  function Jy(l, t, a, u, e) {
    if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (t = a.alternate, t !== null && eu(
        t,
        a,
        e,
        !0
      ), a = et.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return gt === null ? bn() : a.alternate === null && gl === 0 && (gl = 3), a.flags &= -257, a.flags |= 65536, a.lanes = e, u === we ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([u]) : t.add(u), Ri(l, u, e)), !1;
          case 22:
            return a.flags |= 65536, u === we ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([u]) : a.add(u)), Ri(l, u, e)), !1;
        }
        throw Error(h(435, a.tag));
      }
      return Ri(l, u, e), bn(), !1;
    }
    if (J)
      return t = et.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, u !== Of && (l = Error(h(422), { cause: u }), Zu(mt(l, a)))) : (u !== Of && (t = Error(h(423), {
        cause: u
      }), Zu(
        mt(t, a)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, u = mt(u, a), e = ii(
        l.stateNode,
        u,
        e
      ), xf(l, e), gl !== 4 && (gl = 2)), !1;
    var n = Error(h(520), { cause: u });
    if (n = mt(n, a), ie === null ? ie = [n] : ie.push(n), gl !== 4 && (gl = 2), t === null) return !0;
    u = mt(u, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = e & -e, a.lanes |= l, l = ii(a.stateNode, u, l), xf(a, l), !1;
        case 1:
          if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (da === null || !da.has(n))))
            return a.flags |= 65536, e &= -e, a.lanes |= e, e = T0(e), A0(
              e,
              l,
              a,
              u
            ), xf(a, e), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var ci = Error(h(461)), pl = !1;
  function xl(l, t, a, u) {
    t.child = l === null ? Ds(t, null, a, u) : Ya(
      t,
      l.child,
      a,
      u
    );
  }
  function p0(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var f = {};
      for (var i in u)
        i !== "ref" && (f[i] = u[i]);
    } else f = u;
    return Ha(t), u = Vf(
      l,
      t,
      a,
      f,
      n,
      e
    ), i = Lf(), l !== null && !pl ? (Kf(l, t, e), Xt(l, t, e)) : (J && i && Af(t), t.flags |= 1, xl(l, t, u, e), t.child);
  }
  function O0(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" && !_f(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, M0(
        l,
        t,
        n,
        u,
        e
      )) : (l = Qe(
        a.type,
        null,
        u,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !ri(l, e)) {
      var f = n.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Gu, a(f, u) && l.ref === t.ref)
        return Xt(l, t, e);
    }
    return t.flags |= 1, l = qt(n, u), l.ref = t.ref, l.return = t, t.child = l;
  }
  function M0(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Gu(n, u) && l.ref === t.ref)
        if (pl = !1, t.pendingProps = u = n, ri(l, e))
          (l.flags & 131072) !== 0 && (pl = !0);
        else
          return t.lanes = l.lanes, Xt(l, t, e);
    }
    return si(
      l,
      t,
      a,
      u,
      e
    );
  }
  function D0(l, t, a, u) {
    var e = u.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), u.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | a : a, l !== null) {
          for (u = t.child = l.child, e = 0; u !== null; )
            e = e | u.lanes | u.childLanes, u = u.sibling;
          u = e & ~n;
        } else u = 0, t.child = null;
        return U0(
          l,
          t,
          n,
          a,
          u
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ke(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? Hs(t, n) : Gf(), Rs(t);
      else
        return u = t.lanes = 536870912, U0(
          l,
          t,
          n !== null ? n.baseLanes | a : a,
          a,
          u
        );
    } else
      n !== null ? (Ke(t, n.cachePool), Hs(t, n), fa(), t.memoizedState = null) : (l !== null && Ke(t, null), Gf(), fa());
    return xl(l, t, e, a), t.child;
  }
  function le(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function U0(l, t, a, u, e) {
    var n = Cf();
    return n = n === null ? null : { parent: Tl._currentValue, pool: n }, t.memoizedState = {
      baseLanes: a,
      cachePool: n
    }, l !== null && Ke(t, null), Gf(), Rs(t), l !== null && eu(l, t, u, !0), t.childLanes = e, null;
  }
  function cn(l, t) {
    return t = dn(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function N0(l, t, a) {
    return Ya(t, l.child, null, a), l = cn(t, t.pendingProps), l.flags |= 2, nt(t), t.memoizedState = null, l;
  }
  function wy(l, t, a) {
    var u = t.pendingProps, e = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (J) {
        if (u.mode === "hidden")
          return l = cn(t, u), t.lanes = 536870912, le(null, l);
        if (Qf(t), (l = dl) ? (l = Zd(
          l,
          rt
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? { id: Ot, overflow: Mt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = ms(l), a.return = t, t.child = a, Yl = t, dl = null)) : l = null, l === null) throw la(t);
        return t.lanes = 536870912, null;
      }
      return cn(t, u);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if (Qf(t), e)
        if (t.flags & 256)
          t.flags &= -257, t = N0(
            l,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(h(558));
      else if (pl || eu(l, t, a, !1), e = (a & l.childLanes) !== 0, pl || e) {
        if (u = fl, u !== null && (f = zc(u, a), f !== 0 && f !== n.retryLane))
          throw n.retryLane = f, Ma(l, f), Il(u, l, f), ci;
        bn(), t = N0(
          l,
          t,
          a
        );
      } else
        l = n.treeContext, dl = St(f.nextSibling), Yl = t, J = !0, Pt = null, rt = !1, l !== null && rs(t, l), t = cn(t, u), t.flags |= 4096;
      return t;
    }
    return l = qt(l.child, {
      mode: u.mode,
      children: u.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function sn(l, t) {
    var a = t.ref;
    if (a === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(h(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function si(l, t, a, u, e) {
    return Ha(t), a = Vf(
      l,
      t,
      a,
      u,
      void 0,
      e
    ), u = Lf(), l !== null && !pl ? (Kf(l, t, e), Xt(l, t, e)) : (J && u && Af(t), t.flags |= 1, xl(l, t, a, e), t.child);
  }
  function H0(l, t, a, u, e, n) {
    return Ha(t), t.updateQueue = null, a = qs(
      t,
      u,
      a,
      e
    ), Cs(l), u = Lf(), l !== null && !pl ? (Kf(l, t, n), Xt(l, t, n)) : (J && u && Af(t), t.flags |= 1, xl(l, t, a, n), t.child);
  }
  function R0(l, t, a, u, e) {
    if (Ha(t), t.stateNode === null) {
      var n = lu, f = a.contextType;
      typeof f == "object" && f !== null && (n = Bl(f)), n = new a(u, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = fi, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = u, n.state = t.memoizedState, n.refs = {}, Yf(t), f = a.contextType, n.context = typeof f == "object" && f !== null ? Bl(f) : lu, n.state = t.memoizedState, f = a.getDerivedStateFromProps, typeof f == "function" && (ni(
        t,
        a,
        f,
        u
      ), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && fi.enqueueReplaceState(n, n.state, null), $u(t, u, n, e), Wu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !0;
    } else if (l === null) {
      n = t.stateNode;
      var i = t.memoizedProps, c = xa(a, i);
      n.props = c;
      var m = n.context, g = a.contextType;
      f = lu, typeof g == "object" && g !== null && (f = Bl(g));
      var z = a.getDerivedStateFromProps;
      g = typeof z == "function" || typeof n.getSnapshotBeforeUpdate == "function", i = t.pendingProps !== i, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i || m !== f) && S0(
        t,
        n,
        u,
        f
      ), aa = !1;
      var v = t.memoizedState;
      n.state = v, $u(t, u, n, e), Wu(), m = t.memoizedState, i || v !== m || aa ? (typeof z == "function" && (ni(
        t,
        a,
        z,
        u
      ), m = t.memoizedState), (c = aa || g0(
        t,
        a,
        c,
        u,
        v,
        m,
        f
      )) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = m), n.props = u, n.state = m, n.context = f, u = c) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !1);
    } else {
      n = t.stateNode, Bf(l, t), f = t.memoizedProps, g = xa(a, f), n.props = g, z = t.pendingProps, v = n.context, m = a.contextType, c = lu, typeof m == "object" && m !== null && (c = Bl(m)), i = a.getDerivedStateFromProps, (m = typeof i == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== z || v !== c) && S0(
        t,
        n,
        u,
        c
      ), aa = !1, v = t.memoizedState, n.state = v, $u(t, u, n, e), Wu();
      var r = t.memoizedState;
      f !== z || v !== r || aa || l !== null && l.dependencies !== null && Ve(l.dependencies) ? (typeof i == "function" && (ni(
        t,
        a,
        i,
        u
      ), r = t.memoizedState), (g = aa || g0(
        t,
        a,
        g,
        u,
        v,
        r,
        c
      ) || l !== null && l.dependencies !== null && Ve(l.dependencies)) ? (m || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, r, c), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        u,
        r,
        c
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = r), n.props = u, n.state = r, n.context = c, u = g) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), u = !1);
    }
    return n = u, sn(l, t), u = (t.flags & 128) !== 0, n || u ? (n = t.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && u ? (t.child = Ya(
      t,
      l.child,
      null,
      e
    ), t.child = Ya(
      t,
      null,
      a,
      e
    )) : xl(l, t, a, e), t.memoizedState = n.state, l = t.child) : l = Xt(
      l,
      t,
      e
    ), l;
  }
  function C0(l, t, a, u) {
    return Ua(), t.flags |= 256, xl(l, t, a, u), t.child;
  }
  var di = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function oi(l) {
    return { baseLanes: l, cachePool: Es() };
  }
  function yi(l, t, a) {
    return l = l !== null ? l.childLanes & ~a : 0, t && (l |= it), l;
  }
  function q0(l, t, a) {
    var u = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (zl.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (J) {
        if (e ? na(t) : fa(), (l = dl) ? (l = Zd(
          l,
          rt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? { id: Ot, overflow: Mt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = ms(l), a.return = t, t.child = a, Yl = t, dl = null)) : l = null, l === null) throw la(t);
        return Wi(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var i = u.children;
      return u = u.fallback, e ? (fa(), e = t.mode, i = dn(
        { mode: "hidden", children: i },
        e
      ), u = Da(
        u,
        e,
        a,
        null
      ), i.return = t, u.return = t, i.sibling = u, t.child = i, u = t.child, u.memoizedState = oi(a), u.childLanes = yi(
        l,
        f,
        a
      ), t.memoizedState = di, le(null, u)) : (na(t), mi(t, i));
    }
    var c = l.memoizedState;
    if (c !== null && (i = c.dehydrated, i !== null)) {
      if (n)
        t.flags & 256 ? (na(t), t.flags &= -257, t = vi(
          l,
          t,
          a
        )) : t.memoizedState !== null ? (fa(), t.child = l.child, t.flags |= 128, t = null) : (fa(), i = u.fallback, e = t.mode, u = dn(
          { mode: "visible", children: u.children },
          e
        ), i = Da(
          i,
          e,
          a,
          null
        ), i.flags |= 2, u.return = t, i.return = t, u.sibling = i, t.child = u, Ya(
          t,
          l.child,
          null,
          a
        ), u = t.child, u.memoizedState = oi(a), u.childLanes = yi(
          l,
          f,
          a
        ), t.memoizedState = di, t = le(null, u));
      else if (na(t), Wi(i)) {
        if (f = i.nextSibling && i.nextSibling.dataset, f) var m = f.dgst;
        f = m, u = Error(h(419)), u.stack = "", u.digest = f, Zu({ value: u, source: null, stack: null }), t = vi(
          l,
          t,
          a
        );
      } else if (pl || eu(l, t, a, !1), f = (a & l.childLanes) !== 0, pl || f) {
        if (f = fl, f !== null && (u = zc(f, a), u !== 0 && u !== c.retryLane))
          throw c.retryLane = u, Ma(l, u), Il(f, l, u), ci;
        wi(i) || bn(), t = vi(
          l,
          t,
          a
        );
      } else
        wi(i) ? (t.flags |= 192, t.child = l.child, t = null) : (l = c.treeContext, dl = St(
          i.nextSibling
        ), Yl = t, J = !0, Pt = null, rt = !1, l !== null && rs(t, l), t = mi(
          t,
          u.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (fa(), i = u.fallback, e = t.mode, c = l.child, m = c.sibling, u = qt(c, {
      mode: "hidden",
      children: u.children
    }), u.subtreeFlags = c.subtreeFlags & 65011712, m !== null ? i = qt(
      m,
      i
    ) : (i = Da(
      i,
      e,
      a,
      null
    ), i.flags |= 2), i.return = t, u.return = t, u.sibling = i, t.child = u, le(null, u), u = t.child, i = l.child.memoizedState, i === null ? i = oi(a) : (e = i.cachePool, e !== null ? (c = Tl._currentValue, e = e.parent !== c ? { parent: c, pool: c } : e) : e = Es(), i = {
      baseLanes: i.baseLanes | a,
      cachePool: e
    }), u.memoizedState = i, u.childLanes = yi(
      l,
      f,
      a
    ), t.memoizedState = di, le(l.child, u)) : (na(t), a = l.child, l = a.sibling, a = qt(a, {
      mode: "visible",
      children: u.children
    }), a.return = t, a.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = a, t.memoizedState = null, a);
  }
  function mi(l, t) {
    return t = dn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function dn(l, t) {
    return l = ut(22, l, null, t), l.lanes = 0, l;
  }
  function vi(l, t, a) {
    return Ya(t, l.child, null, a), l = mi(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Y0(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t), Uf(l.return, t, a);
  }
  function hi(l, t, a, u, e, n) {
    var f = l.memoizedState;
    f === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: u,
      tail: a,
      tailMode: e,
      treeForkCount: n
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = u, f.tail = a, f.tailMode = e, f.treeForkCount = n);
  }
  function B0(l, t, a) {
    var u = t.pendingProps, e = u.revealOrder, n = u.tail;
    u = u.children;
    var f = zl.current, i = (f & 2) !== 0;
    if (i ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, p(zl, f), xl(l, t, u, a), u = J ? Qu : 0, !i && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && Y0(l, a, t);
        else if (l.tag === 19)
          Y0(l, a, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (e) {
      case "forwards":
        for (a = t.child, e = null; a !== null; )
          l = a.alternate, l !== null && ke(l) === null && (e = a), a = a.sibling;
        a = e, a === null ? (e = t.child, t.child = null) : (e = a.sibling, a.sibling = null), hi(
          t,
          !1,
          e,
          a,
          n,
          u
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && ke(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = a, a = e, e = l;
        }
        hi(
          t,
          !0,
          a,
          null,
          n,
          u
        );
        break;
      case "together":
        hi(
          t,
          !1,
          null,
          null,
          void 0,
          u
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Xt(l, t, a) {
    if (l !== null && (t.dependencies = l.dependencies), sa |= t.lanes, (a & t.childLanes) === 0)
      if (l !== null) {
        if (eu(
          l,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(h(153));
    if (t.child !== null) {
      for (l = t.child, a = qt(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; )
        l = l.sibling, a = a.sibling = qt(l, l.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function ri(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ve(l)));
  }
  function Wy(l, t, a) {
    switch (t.tag) {
      case 3:
        Zl(t, t.stateNode.containerInfo), ta(t, Tl, l.memoizedState.cache), Ua();
        break;
      case 27:
      case 5:
        Ou(t);
        break;
      case 4:
        Zl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ta(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Qf(t), null;
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null ? (na(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? q0(l, t, a) : (na(t), l = Xt(
            l,
            t,
            a
          ), l !== null ? l.sibling : null);
        na(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (u = (a & t.childLanes) !== 0, u || (eu(
          l,
          t,
          a,
          !1
        ), u = (a & t.childLanes) !== 0), e) {
          if (u)
            return B0(
              l,
              t,
              a
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), p(zl, zl.current), u) break;
        return null;
      case 22:
        return t.lanes = 0, D0(
          l,
          t,
          a,
          t.pendingProps
        );
      case 24:
        ta(t, Tl, l.memoizedState.cache);
    }
    return Xt(l, t, a);
  }
  function x0(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        pl = !0;
      else {
        if (!ri(l, a) && (t.flags & 128) === 0)
          return pl = !1, Wy(
            l,
            t,
            a
          );
        pl = (l.flags & 131072) !== 0;
      }
    else
      pl = !1, J && (t.flags & 1048576) !== 0 && hs(t, Qu, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var u = t.pendingProps;
          if (l = Ca(t.elementType), t.type = l, typeof l == "function")
            _f(l) ? (u = xa(l, u), t.tag = 1, t = R0(
              null,
              t,
              l,
              u,
              a
            )) : (t.tag = 0, t = si(
              null,
              t,
              l,
              u,
              a
            ));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === Ll) {
                t.tag = 11, t = p0(
                  null,
                  t,
                  l,
                  u,
                  a
                );
                break l;
              } else if (e === X) {
                t.tag = 14, t = O0(
                  null,
                  t,
                  l,
                  u,
                  a
                );
                break l;
              }
            }
            throw t = Nt(l) || l, Error(h(306, t, ""));
          }
        }
        return t;
      case 0:
        return si(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return u = t.type, e = xa(
          u,
          t.pendingProps
        ), R0(
          l,
          t,
          u,
          e,
          a
        );
      case 3:
        l: {
          if (Zl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(h(387));
          u = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Bf(l, t), $u(t, u, null, a);
          var f = t.memoizedState;
          if (u = f.cache, ta(t, Tl, u), u !== n.cache && Nf(
            t,
            [Tl],
            a,
            !0
          ), Wu(), u = f.element, n.isDehydrated)
            if (n = {
              element: u,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = C0(
                l,
                t,
                u,
                a
              );
              break l;
            } else if (u !== e) {
              e = mt(
                Error(h(424)),
                t
              ), Zu(e), t = C0(
                l,
                t,
                u,
                a
              );
              break l;
            } else {
              switch (l = t.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (dl = St(l.firstChild), Yl = t, J = !0, Pt = null, rt = !0, a = Ds(
                t,
                null,
                u,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Ua(), u === e) {
              t = Xt(
                l,
                t,
                a
              );
              break l;
            }
            xl(l, t, u, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return sn(l, t), l === null ? (a = Wd(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : J || (a = t.type, l = t.pendingProps, u = On(
          Q.current
        ).createElement(a), u[ql] = t, u[Jl] = l, jl(u, a, l), Dl(u), t.stateNode = u) : t.memoizedState = Wd(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Ou(t), l === null && J && (u = t.stateNode = Kd(
          t.type,
          t.pendingProps,
          Q.current
        ), Yl = t, rt = !0, e = dl, va(t.type) ? ($i = e, dl = St(u.firstChild)) : dl = e), xl(
          l,
          t,
          t.pendingProps.children,
          a
        ), sn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && J && ((e = u = dl) && (u = Am(
          u,
          t.type,
          t.pendingProps,
          rt
        ), u !== null ? (t.stateNode = u, Yl = t, dl = St(u.firstChild), rt = !1, e = !0) : e = !1), e || la(t)), Ou(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, u = n.children, Li(e, n) ? u = null : f !== null && Li(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Vf(
          l,
          t,
          Gy,
          null,
          null,
          a
        ), he._currentValue = e), sn(l, t), xl(l, t, u, a), t.child;
      case 6:
        return l === null && J && ((l = a = dl) && (a = pm(
          a,
          t.pendingProps,
          rt
        ), a !== null ? (t.stateNode = a, Yl = t, dl = null, l = !0) : l = !1), l || la(t)), null;
      case 13:
        return q0(l, t, a);
      case 4:
        return Zl(
          t,
          t.stateNode.containerInfo
        ), u = t.pendingProps, l === null ? t.child = Ya(
          t,
          null,
          u,
          a
        ) : xl(l, t, u, a), t.child;
      case 11:
        return p0(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return xl(
          l,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return xl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return xl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return u = t.pendingProps, ta(t, t.type, u.value), xl(l, t, u.children, a), t.child;
      case 9:
        return e = t.type._context, u = t.pendingProps.children, Ha(t), e = Bl(e), u = u(e), t.flags |= 1, xl(l, t, u, a), t.child;
      case 14:
        return O0(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return M0(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return B0(l, t, a);
      case 31:
        return wy(l, t, a);
      case 22:
        return D0(
          l,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return Ha(t), u = Bl(Tl), l === null ? (e = Cf(), e === null && (e = fl, n = Hf(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= a), e = n), t.memoizedState = { parent: u, cache: e }, Yf(t), ta(t, Tl, e)) : ((l.lanes & a) !== 0 && (Bf(l, t), $u(t, null, null, a), Wu()), e = l.memoizedState, n = t.memoizedState, e.parent !== u ? (e = { parent: u, cache: u }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), ta(t, Tl, u)) : (u = n.cache, ta(t, Tl, u), u !== e.cache && Nf(
          t,
          [Tl],
          a,
          !0
        ))), xl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(h(156, t.tag));
  }
  function Qt(l) {
    l.flags |= 4;
  }
  function gi(l, t, a, u, e) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (e & 335544128) === e)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (dd()) l.flags |= 8192;
        else
          throw qa = we, qf;
    } else l.flags &= -16777217;
  }
  function j0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Pd(t))
      if (dd()) l.flags |= 8192;
      else
        throw qa = we, qf;
  }
  function on(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? gc() : 536870912, l.lanes |= t, ru |= t);
  }
  function te(l, t) {
    if (!J)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? l.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), a = a.sibling;
          u === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : u.sibling = null;
      }
  }
  function ol(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, a = 0, u = 0;
    if (t)
      for (var e = l.child; e !== null; )
        a |= e.lanes | e.childLanes, u |= e.subtreeFlags & 65011712, u |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        a |= e.lanes | e.childLanes, u |= e.subtreeFlags, u |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= u, l.childLanes = a, t;
  }
  function $y(l, t, a) {
    var u = t.pendingProps;
    switch (pf(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ol(t), null;
      case 1:
        return ol(t), null;
      case 3:
        return a = t.stateNode, u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), xt(Tl), bl(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (uu(t) ? Qt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Mf())), ol(t), null;
      case 26:
        var e = t.type, n = t.memoizedState;
        return l === null ? (Qt(t), n !== null ? (ol(t), j0(t, n)) : (ol(t), gi(
          t,
          e,
          null,
          u,
          a
        ))) : n ? n !== l.memoizedState ? (Qt(t), ol(t), j0(t, n)) : (ol(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== u && Qt(t), ol(t), gi(
          t,
          e,
          l,
          u,
          a
        )), null;
      case 27:
        if (_e(t), a = Q.current, e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== u && Qt(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(h(166));
            return ol(t), null;
          }
          l = M.current, uu(t) ? gs(t) : (l = Kd(e, u, a), t.stateNode = l, Qt(t));
        }
        return ol(t), null;
      case 5:
        if (_e(t), e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== u && Qt(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(h(166));
            return ol(t), null;
          }
          if (n = M.current, uu(t))
            gs(t);
          else {
            var f = On(
              Q.current
            );
            switch (n) {
              case 1:
                n = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  e
                );
                break;
              case 2:
                n = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  e
                );
                break;
              default:
                switch (e) {
                  case "svg":
                    n = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      e
                    );
                    break;
                  case "math":
                    n = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    n = f.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof u.is == "string" ? f.createElement("select", {
                      is: u.is
                    }) : f.createElement("select"), u.multiple ? n.multiple = !0 : u.size && (n.size = u.size);
                    break;
                  default:
                    n = typeof u.is == "string" ? f.createElement(e, { is: u.is }) : f.createElement(e);
                }
            }
            n[ql] = t, n[Jl] = u;
            l: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                n.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break l;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t)
                  break l;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = n;
            l: switch (jl(n, e, u), e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                u = !!u.autoFocus;
                break l;
              case "img":
                u = !0;
                break l;
              default:
                u = !1;
            }
            u && Qt(t);
          }
        }
        return ol(t), gi(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== u && Qt(t);
        else {
          if (typeof u != "string" && t.stateNode === null)
            throw Error(h(166));
          if (l = Q.current, uu(t)) {
            if (l = t.stateNode, a = t.memoizedProps, u = null, e = Yl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            l[ql] = t, l = !!(l.nodeValue === a || u !== null && u.suppressHydrationWarning === !0 || qd(l.nodeValue, a)), l || la(t, !0);
          } else
            l = On(l).createTextNode(
              u
            ), l[ql] = t, t.stateNode = l;
        }
        return ol(t), null;
      case 31:
        if (a = t.memoizedState, l === null || l.memoizedState !== null) {
          if (u = uu(t), a !== null) {
            if (l === null) {
              if (!u) throw Error(h(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(557));
              l[ql] = t;
            } else
              Ua(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ol(t), l = !1;
          } else
            a = Mf(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), l = !0;
          if (!l)
            return t.flags & 256 ? (nt(t), t) : (nt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(h(558));
        }
        return ol(t), null;
      case 13:
        if (u = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = uu(t), u !== null && u.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(h(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(h(317));
              e[ql] = t;
            } else
              Ua(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ol(t), e = !1;
          } else
            e = Mf(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (nt(t), t) : (nt(t), null);
        }
        return nt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = u !== null, l = l !== null && l.memoizedState !== null, a && (u = t.child, e = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (e = u.alternate.memoizedState.cachePool.pool), n = null, u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== e && (u.flags |= 2048)), a !== l && a && (t.child.flags |= 8192), on(t, t.updateQueue), ol(t), null);
      case 4:
        return bl(), l === null && Gi(t.stateNode.containerInfo), ol(t), null;
      case 10:
        return xt(t.type), ol(t), null;
      case 19:
        if (_(zl), u = t.memoizedState, u === null) return ol(t), null;
        if (e = (t.flags & 128) !== 0, n = u.rendering, n === null)
          if (e) te(u, !1);
          else {
            if (gl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = ke(l), n !== null) {
                  for (t.flags |= 128, te(u, !1), l = n.updateQueue, t.updateQueue = l, on(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; )
                    ys(a, l), a = a.sibling;
                  return p(
                    zl,
                    zl.current & 1 | 2
                  ), J && Yt(t, u.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            u.tail !== null && Pl() > rn && (t.flags |= 128, e = !0, te(u, !1), t.lanes = 4194304);
          }
        else {
          if (!e)
            if (l = ke(n), l !== null) {
              if (t.flags |= 128, e = !0, l = l.updateQueue, t.updateQueue = l, on(t, l), te(u, !0), u.tail === null && u.tailMode === "hidden" && !n.alternate && !J)
                return ol(t), null;
            } else
              2 * Pl() - u.renderingStartTime > rn && a !== 536870912 && (t.flags |= 128, e = !0, te(u, !1), t.lanes = 4194304);
          u.isBackwards ? (n.sibling = t.child, t.child = n) : (l = u.last, l !== null ? l.sibling = n : t.child = n, u.last = n);
        }
        return u.tail !== null ? (l = u.tail, u.rendering = l, u.tail = l.sibling, u.renderingStartTime = Pl(), l.sibling = null, a = zl.current, p(
          zl,
          e ? a & 1 | 2 : a & 1
        ), J && Yt(t, u.treeForkCount), l) : (ol(t), null);
      case 22:
      case 23:
        return nt(t), Xf(), u = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (ol(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ol(t), a = t.updateQueue, a !== null && on(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== a && (t.flags |= 2048), l !== null && _(Ra), null;
      case 24:
        return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), xt(Tl), ol(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(h(156, t.tag));
  }
  function Fy(l, t) {
    switch (pf(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return xt(Tl), bl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return _e(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (nt(t), t.alternate === null)
            throw Error(h(340));
          Ua();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (nt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(h(340));
          Ua();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return _(zl), null;
      case 4:
        return bl(), null;
      case 10:
        return xt(t.type), null;
      case 22:
      case 23:
        return nt(t), Xf(), l !== null && _(Ra), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return xt(Tl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function G0(l, t) {
    switch (pf(t), t.tag) {
      case 3:
        xt(Tl), bl();
        break;
      case 26:
      case 27:
      case 5:
        _e(t);
        break;
      case 4:
        bl();
        break;
      case 31:
        t.memoizedState !== null && nt(t);
        break;
      case 13:
        nt(t);
        break;
      case 19:
        _(zl);
        break;
      case 10:
        xt(t.type);
        break;
      case 22:
      case 23:
        nt(t), Xf(), l !== null && _(Ra);
        break;
      case 24:
        xt(Tl);
    }
  }
  function ae(l, t) {
    try {
      var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create, f = a.inst;
            u = n(), f.destroy = u;
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (i) {
      ll(t, t.return, i);
    }
  }
  function ia(l, t, a) {
    try {
      var u = t.updateQueue, e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var f = u.inst, i = f.destroy;
            if (i !== void 0) {
              f.destroy = void 0, e = t;
              var c = a, m = i;
              try {
                m();
              } catch (g) {
                ll(
                  e,
                  c,
                  g
                );
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (g) {
      ll(t, t.return, g);
    }
  }
  function X0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Ns(t, a);
      } catch (u) {
        ll(l, l.return, u);
      }
    }
  }
  function Q0(l, t, a) {
    a.props = xa(
      l.type,
      l.memoizedProps
    ), a.state = l.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (u) {
      ll(l, t, u);
    }
  }
  function ue(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var u = l.stateNode;
            break;
          case 30:
            u = l.stateNode;
            break;
          default:
            u = l.stateNode;
        }
        typeof a == "function" ? l.refCleanup = a(u) : a.current = u;
      }
    } catch (e) {
      ll(l, t, e);
    }
  }
  function Dt(l, t) {
    var a = l.ref, u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          ll(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          ll(l, t, e);
        }
      else a.current = null;
  }
  function Z0(l) {
    var t = l.type, a = l.memoizedProps, u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? u.src = a.src : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      ll(l, l.return, e);
    }
  }
  function Si(l, t, a) {
    try {
      var u = l.stateNode;
      Sm(u, l.type, a, t), u[Jl] = t;
    } catch (e) {
      ll(l, l.return, e);
    }
  }
  function V0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && va(l.type) || l.tag === 4;
  }
  function bi(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || V0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && va(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function zi(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Rt));
    else if (u !== 4 && (u === 27 && va(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null))
      for (zi(l, t, a), l = l.sibling; l !== null; )
        zi(l, t, a), l = l.sibling;
  }
  function yn(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (u !== 4 && (u === 27 && va(l.type) && (a = l.stateNode), l = l.child, l !== null))
      for (yn(l, t, a), l = l.sibling; l !== null; )
        yn(l, t, a), l = l.sibling;
  }
  function L0(l) {
    var t = l.stateNode, a = l.memoizedProps;
    try {
      for (var u = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      jl(t, u, a), t[ql] = l, t[Jl] = a;
    } catch (n) {
      ll(l, l.return, n);
    }
  }
  var Zt = !1, Ol = !1, _i = !1, K0 = typeof WeakSet == "function" ? WeakSet : Set, Ul = null;
  function ky(l, t) {
    if (l = l.containerInfo, Zi = Cn, l = us(l), vf(l)) {
      if ("selectionStart" in l)
        var a = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          a = (a = l.ownerDocument) && a.defaultView || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset, n = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch {
              a = null;
              break l;
            }
            var f = 0, i = -1, c = -1, m = 0, g = 0, z = l, v = null;
            t: for (; ; ) {
              for (var r; z !== a || e !== 0 && z.nodeType !== 3 || (i = f + e), z !== n || u !== 0 && z.nodeType !== 3 || (c = f + u), z.nodeType === 3 && (f += z.nodeValue.length), (r = z.firstChild) !== null; )
                v = z, z = r;
              for (; ; ) {
                if (z === l) break t;
                if (v === a && ++m === e && (i = f), v === n && ++g === u && (c = f), (r = z.nextSibling) !== null) break;
                z = v, v = z.parentNode;
              }
              z = r;
            }
            a = i === -1 || c === -1 ? null : { start: i, end: c };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Vi = { focusedElem: l, selectionRange: a }, Cn = !1, Ul = t; Ul !== null; )
      if (t = Ul, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Ul = l;
      else
        for (; Ul !== null; ) {
          switch (t = Ul, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (a = 0; a < l.length; a++)
                  e = l[a], e.ref.impl = e.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, a = t, e = n.memoizedProps, n = n.memoizedState, u = a.stateNode;
                try {
                  var O = xa(
                    a.type,
                    e
                  );
                  l = u.getSnapshotBeforeUpdate(
                    O,
                    n
                  ), u.__reactInternalSnapshotBeforeUpdate = l;
                } catch (R) {
                  ll(
                    a,
                    a.return,
                    R
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9)
                  Ji(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ji(l);
                      break;
                    default:
                      l.textContent = "";
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
              if ((l & 1024) !== 0) throw Error(h(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Ul = l;
            break;
          }
          Ul = t.return;
        }
  }
  function J0(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Lt(l, a), u & 4 && ae(5, a);
        break;
      case 1:
        if (Lt(l, a), u & 4)
          if (l = a.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              ll(a, a.return, f);
            }
          else {
            var e = xa(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              ll(
                a,
                a.return,
                f
              );
            }
          }
        u & 64 && X0(a), u & 512 && ue(a, a.return);
        break;
      case 3:
        if (Lt(l, a), u & 64 && (l = a.updateQueue, l !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Ns(l, t);
          } catch (f) {
            ll(a, a.return, f);
          }
        }
        break;
      case 27:
        t === null && u & 4 && L0(a);
      case 26:
      case 5:
        Lt(l, a), t === null && u & 4 && Z0(a), u & 512 && ue(a, a.return);
        break;
      case 12:
        Lt(l, a);
        break;
      case 31:
        Lt(l, a), u & 4 && $0(l, a);
        break;
      case 13:
        Lt(l, a), u & 4 && F0(l, a), u & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = fm.bind(
          null,
          a
        ), Om(l, a))));
        break;
      case 22:
        if (u = a.memoizedState !== null || Zt, !u) {
          t = t !== null && t.memoizedState !== null || Ol, e = Zt;
          var n = Ol;
          Zt = u, (Ol = t) && !n ? Kt(
            l,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Lt(l, a), Zt = e, Ol = n;
        }
        break;
      case 30:
        break;
      default:
        Lt(l, a);
    }
  }
  function w0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, w0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Fn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var yl = null, Wl = !1;
  function Vt(l, t, a) {
    for (a = a.child; a !== null; )
      W0(l, t, a), a = a.sibling;
  }
  function W0(l, t, a) {
    if (lt && typeof lt.onCommitFiberUnmount == "function")
      try {
        lt.onCommitFiberUnmount(Mu, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        Ol || Dt(a, t), Vt(
          l,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Ol || Dt(a, t);
        var u = yl, e = Wl;
        va(a.type) && (yl = a.stateNode, Wl = !1), Vt(
          l,
          t,
          a
        ), ye(a.stateNode), yl = u, Wl = e;
        break;
      case 5:
        Ol || Dt(a, t);
      case 6:
        if (u = yl, e = Wl, yl = null, Vt(
          l,
          t,
          a
        ), yl = u, Wl = e, yl !== null)
          if (Wl)
            try {
              (yl.nodeType === 9 ? yl.body : yl.nodeName === "HTML" ? yl.ownerDocument.body : yl).removeChild(a.stateNode);
            } catch (n) {
              ll(
                a,
                t,
                n
              );
            }
          else
            try {
              yl.removeChild(a.stateNode);
            } catch (n) {
              ll(
                a,
                t,
                n
              );
            }
        break;
      case 18:
        yl !== null && (Wl ? (l = yl, Xd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          a.stateNode
        ), Au(l)) : Xd(yl, a.stateNode));
        break;
      case 4:
        u = yl, e = Wl, yl = a.stateNode.containerInfo, Wl = !0, Vt(
          l,
          t,
          a
        ), yl = u, Wl = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ia(2, a, t), Ol || ia(4, a, t), Vt(
          l,
          t,
          a
        );
        break;
      case 1:
        Ol || (Dt(a, t), u = a.stateNode, typeof u.componentWillUnmount == "function" && Q0(
          a,
          t,
          u
        )), Vt(
          l,
          t,
          a
        );
        break;
      case 21:
        Vt(
          l,
          t,
          a
        );
        break;
      case 22:
        Ol = (u = Ol) || a.memoizedState !== null, Vt(
          l,
          t,
          a
        ), Ol = u;
        break;
      default:
        Vt(
          l,
          t,
          a
        );
    }
  }
  function $0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Au(l);
      } catch (a) {
        ll(t, t.return, a);
      }
    }
  }
  function F0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Au(l);
      } catch (a) {
        ll(t, t.return, a);
      }
  }
  function Iy(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new K0()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new K0()), t;
      default:
        throw Error(h(435, l.tag));
    }
  }
  function mn(l, t) {
    var a = Iy(l);
    t.forEach(function(u) {
      if (!a.has(u)) {
        a.add(u);
        var e = im.bind(null, l, u);
        u.then(e, e);
      }
    });
  }
  function $l(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u], n = l, f = t, i = f;
        l: for (; i !== null; ) {
          switch (i.tag) {
            case 27:
              if (va(i.type)) {
                yl = i.stateNode, Wl = !1;
                break l;
              }
              break;
            case 5:
              yl = i.stateNode, Wl = !1;
              break l;
            case 3:
            case 4:
              yl = i.stateNode.containerInfo, Wl = !0;
              break l;
          }
          i = i.return;
        }
        if (yl === null) throw Error(h(160));
        W0(n, f, e), yl = null, Wl = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        k0(t, l), t = t.sibling;
  }
  var Et = null;
  function k0(l, t) {
    var a = l.alternate, u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        $l(t, l), Fl(l), u & 4 && (ia(3, l, l.return), ae(3, l), ia(5, l, l.return));
        break;
      case 1:
        $l(t, l), Fl(l), u & 512 && (Ol || a === null || Dt(a, a.return)), u & 64 && Zt && (l = l.updateQueue, l !== null && (u = l.callbacks, u !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
        break;
      case 26:
        var e = Et;
        if ($l(t, l), Fl(l), u & 512 && (Ol || a === null || Dt(a, a.return)), u & 4) {
          var n = a !== null ? a.memoizedState : null;
          if (u = l.memoizedState, a === null)
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  u = l.type, a = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (u) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Nu] || n[ql] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(u), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), jl(n, u, a), n[ql] = l, Dl(n), u = n;
                      break l;
                    case "link":
                      var f = kd(
                        "link",
                        "href",
                        e
                      ).get(u + (a.href || ""));
                      if (f) {
                        for (var i = 0; i < f.length; i++)
                          if (n = f[i], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            f.splice(i, 1);
                            break t;
                          }
                      }
                      n = e.createElement(u), jl(n, u, a), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = kd(
                        "meta",
                        "content",
                        e
                      ).get(u + (a.content || ""))) {
                        for (i = 0; i < f.length; i++)
                          if (n = f[i], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            f.splice(i, 1);
                            break t;
                          }
                      }
                      n = e.createElement(u), jl(n, u, a), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(h(468, u));
                  }
                  n[ql] = l, Dl(n), u = n;
                }
                l.stateNode = u;
              } else
                Id(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Fd(
                e,
                u,
                l.memoizedProps
              );
          else
            n !== u ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, u === null ? Id(
              e,
              l.type,
              l.stateNode
            ) : Fd(
              e,
              u,
              l.memoizedProps
            )) : u === null && l.stateNode !== null && Si(
              l,
              l.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        $l(t, l), Fl(l), u & 512 && (Ol || a === null || Dt(a, a.return)), a !== null && u & 4 && Si(
          l,
          l.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if ($l(t, l), Fl(l), u & 512 && (Ol || a === null || Dt(a, a.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            wa(e, "");
          } catch (O) {
            ll(l, l.return, O);
          }
        }
        u & 4 && l.stateNode != null && (e = l.memoizedProps, Si(
          l,
          e,
          a !== null ? a.memoizedProps : e
        )), u & 1024 && (_i = !0);
        break;
      case 6:
        if ($l(t, l), Fl(l), u & 4) {
          if (l.stateNode === null)
            throw Error(h(162));
          u = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = u;
          } catch (O) {
            ll(l, l.return, O);
          }
        }
        break;
      case 3:
        if (Un = null, e = Et, Et = Mn(t.containerInfo), $l(t, l), Et = e, Fl(l), u & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Au(t.containerInfo);
          } catch (O) {
            ll(l, l.return, O);
          }
        _i && (_i = !1, I0(l));
        break;
      case 4:
        u = Et, Et = Mn(
          l.stateNode.containerInfo
        ), $l(t, l), Fl(l), Et = u;
        break;
      case 12:
        $l(t, l), Fl(l);
        break;
      case 31:
        $l(t, l), Fl(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, mn(l, u)));
        break;
      case 13:
        $l(t, l), Fl(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (hn = Pl()), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, mn(l, u)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var c = a !== null && a.memoizedState !== null, m = Zt, g = Ol;
        if (Zt = m || e, Ol = g || c, $l(t, l), Ol = g, Zt = m, Fl(l), u & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (a === null || c || Zt || Ol || ja(l)), a = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                c = a = t;
                try {
                  if (n = c.stateNode, e)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    i = c.stateNode;
                    var z = c.memoizedProps.style, v = z != null && z.hasOwnProperty("display") ? z.display : null;
                    i.style.display = v == null || typeof v == "boolean" ? "" : ("" + v).trim();
                  }
                } catch (O) {
                  ll(c, c.return, O);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                c = t;
                try {
                  c.stateNode.nodeValue = e ? "" : c.memoizedProps;
                } catch (O) {
                  ll(c, c.return, O);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                c = t;
                try {
                  var r = c.stateNode;
                  e ? Qd(r, !0) : Qd(c.stateNode, !1);
                } catch (O) {
                  ll(c, c.return, O);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
        u & 4 && (u = l.updateQueue, u !== null && (a = u.retryQueue, a !== null && (u.retryQueue = null, mn(l, a))));
        break;
      case 19:
        $l(t, l), Fl(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, mn(l, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        $l(t, l), Fl(l);
    }
  }
  function Fl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, u = l.return; u !== null; ) {
          if (V0(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(h(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode, n = bi(l);
            yn(l, n, e);
            break;
          case 5:
            var f = a.stateNode;
            a.flags & 32 && (wa(f, ""), a.flags &= -33);
            var i = bi(l);
            yn(l, i, f);
            break;
          case 3:
          case 4:
            var c = a.stateNode.containerInfo, m = bi(l);
            zi(
              l,
              m,
              c
            );
            break;
          default:
            throw Error(h(161));
        }
      } catch (g) {
        ll(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function I0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        I0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function Lt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        J0(l, t.alternate, t), t = t.sibling;
  }
  function ja(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ia(4, t, t.return), ja(t);
          break;
        case 1:
          Dt(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Q0(
            t,
            t.return,
            a
          ), ja(t);
          break;
        case 27:
          ye(t.stateNode);
        case 26:
        case 5:
          Dt(t, t.return), ja(t);
          break;
        case 22:
          t.memoizedState === null && ja(t);
          break;
        case 30:
          ja(t);
          break;
        default:
          ja(t);
      }
      l = l.sibling;
    }
  }
  function Kt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate, e = l, n = t, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Kt(
            e,
            n,
            a
          ), ae(4, n);
          break;
        case 1:
          if (Kt(
            e,
            n,
            a
          ), u = n, e = u.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (m) {
              ll(u, u.return, m);
            }
          if (u = n, e = u.updateQueue, e !== null) {
            var i = u.stateNode;
            try {
              var c = e.shared.hiddenCallbacks;
              if (c !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < c.length; e++)
                  Us(c[e], i);
            } catch (m) {
              ll(u, u.return, m);
            }
          }
          a && f & 64 && X0(n), ue(n, n.return);
          break;
        case 27:
          L0(n);
        case 26:
        case 5:
          Kt(
            e,
            n,
            a
          ), a && u === null && f & 4 && Z0(n), ue(n, n.return);
          break;
        case 12:
          Kt(
            e,
            n,
            a
          );
          break;
        case 31:
          Kt(
            e,
            n,
            a
          ), a && f & 4 && $0(e, n);
          break;
        case 13:
          Kt(
            e,
            n,
            a
          ), a && f & 4 && F0(e, n);
          break;
        case 22:
          n.memoizedState === null && Kt(
            e,
            n,
            a
          ), ue(n, n.return);
          break;
        case 30:
          break;
        default:
          Kt(
            e,
            n,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Ei(l, t) {
    var a = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && Vu(a));
  }
  function Ti(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Vu(l));
  }
  function Tt(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        P0(
          l,
          t,
          a,
          u
        ), t = t.sibling;
  }
  function P0(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Tt(
          l,
          t,
          a,
          u
        ), e & 2048 && ae(9, t);
        break;
      case 1:
        Tt(
          l,
          t,
          a,
          u
        );
        break;
      case 3:
        Tt(
          l,
          t,
          a,
          u
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Vu(l)));
        break;
      case 12:
        if (e & 2048) {
          Tt(
            l,
            t,
            a,
            u
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, f = n.id, i = n.onPostCommit;
            typeof i == "function" && i(
              f,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (c) {
            ll(t, t.return, c);
          }
        } else
          Tt(
            l,
            t,
            a,
            u
          );
        break;
      case 31:
        Tt(
          l,
          t,
          a,
          u
        );
        break;
      case 13:
        Tt(
          l,
          t,
          a,
          u
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Tt(
          l,
          t,
          a,
          u
        ) : ee(l, t) : n._visibility & 2 ? Tt(
          l,
          t,
          a,
          u
        ) : (n._visibility |= 2, mu(
          l,
          t,
          a,
          u,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), e & 2048 && Ei(f, t);
        break;
      case 24:
        Tt(
          l,
          t,
          a,
          u
        ), e & 2048 && Ti(t.alternate, t);
        break;
      default:
        Tt(
          l,
          t,
          a,
          u
        );
    }
  }
  function mu(l, t, a, u, e) {
    for (e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, f = t, i = a, c = u, m = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          mu(
            n,
            f,
            i,
            c,
            e
          ), ae(8, f);
          break;
        case 23:
          break;
        case 22:
          var g = f.stateNode;
          f.memoizedState !== null ? g._visibility & 2 ? mu(
            n,
            f,
            i,
            c,
            e
          ) : ee(
            n,
            f
          ) : (g._visibility |= 2, mu(
            n,
            f,
            i,
            c,
            e
          )), e && m & 2048 && Ei(
            f.alternate,
            f
          );
          break;
        case 24:
          mu(
            n,
            f,
            i,
            c,
            e
          ), e && m & 2048 && Ti(f.alternate, f);
          break;
        default:
          mu(
            n,
            f,
            i,
            c,
            e
          );
      }
      t = t.sibling;
    }
  }
  function ee(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l, u = t, e = u.flags;
        switch (u.tag) {
          case 22:
            ee(a, u), e & 2048 && Ei(
              u.alternate,
              u
            );
            break;
          case 24:
            ee(a, u), e & 2048 && Ti(u.alternate, u);
            break;
          default:
            ee(a, u);
        }
        t = t.sibling;
      }
  }
  var ne = 8192;
  function vu(l, t, a) {
    if (l.subtreeFlags & ne)
      for (l = l.child; l !== null; )
        ld(
          l,
          t,
          a
        ), l = l.sibling;
  }
  function ld(l, t, a) {
    switch (l.tag) {
      case 26:
        vu(
          l,
          t,
          a
        ), l.flags & ne && l.memoizedState !== null && jm(
          a,
          Et,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        vu(
          l,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var u = Et;
        Et = Mn(l.stateNode.containerInfo), vu(
          l,
          t,
          a
        ), Et = u;
        break;
      case 22:
        l.memoizedState === null && (u = l.alternate, u !== null && u.memoizedState !== null ? (u = ne, ne = 16777216, vu(
          l,
          t,
          a
        ), ne = u) : vu(
          l,
          t,
          a
        ));
        break;
      default:
        vu(
          l,
          t,
          a
        );
    }
  }
  function td(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function fe(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          Ul = u, ud(
            u,
            l
          );
        }
      td(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        ad(l), l = l.sibling;
  }
  function ad(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        fe(l), l.flags & 2048 && ia(9, l, l.return);
        break;
      case 3:
        fe(l);
        break;
      case 12:
        fe(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, vn(l)) : fe(l);
        break;
      default:
        fe(l);
    }
  }
  function vn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          Ul = u, ud(
            u,
            l
          );
        }
      td(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          ia(8, t, t.return), vn(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, vn(t));
          break;
        default:
          vn(t);
      }
      l = l.sibling;
    }
  }
  function ud(l, t) {
    for (; Ul !== null; ) {
      var a = Ul;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ia(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Vu(a.memoizedState.cache);
      }
      if (u = a.child, u !== null) u.return = a, Ul = u;
      else
        l: for (a = l; Ul !== null; ) {
          u = Ul;
          var e = u.sibling, n = u.return;
          if (w0(u), u === a) {
            Ul = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Ul = e;
            break l;
          }
          Ul = n;
        }
    }
  }
  var Py = {
    getCacheForType: function(l) {
      var t = Bl(Tl), a = t.data.get(l);
      return a === void 0 && (a = l(), t.data.set(l, a)), a;
    },
    cacheSignal: function() {
      return Bl(Tl).controller.signal;
    }
  }, lm = typeof WeakMap == "function" ? WeakMap : Map, F = 0, fl = null, Z = null, L = 0, P = 0, ft = null, ca = !1, hu = !1, Ai = !1, Jt = 0, gl = 0, sa = 0, Ga = 0, pi = 0, it = 0, ru = 0, ie = null, kl = null, Oi = !1, hn = 0, ed = 0, rn = 1 / 0, gn = null, da = null, Ml = 0, oa = null, gu = null, wt = 0, Mi = 0, Di = null, nd = null, ce = 0, Ui = null;
  function ct() {
    return (F & 2) !== 0 && L !== 0 ? L & -L : S.T !== null ? Yi() : _c();
  }
  function fd() {
    if (it === 0)
      if ((L & 536870912) === 0 || J) {
        var l = Ae;
        Ae <<= 1, (Ae & 3932160) === 0 && (Ae = 262144), it = l;
      } else it = 536870912;
    return l = et.current, l !== null && (l.flags |= 32), it;
  }
  function Il(l, t, a) {
    (l === fl && (P === 2 || P === 9) || l.cancelPendingCommit !== null) && (Su(l, 0), ya(
      l,
      L,
      it,
      !1
    )), Uu(l, a), ((F & 2) === 0 || l !== fl) && (l === fl && ((F & 2) === 0 && (Ga |= a), gl === 4 && ya(
      l,
      L,
      it,
      !1
    )), Ut(l));
  }
  function id(l, t, a) {
    if ((F & 6) !== 0) throw Error(h(327));
    var u = !a && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Du(l, t), e = u ? um(l, t) : Hi(l, t, !0), n = u;
    do {
      if (e === 0) {
        hu && !u && ya(l, t, 0, !1);
        break;
      } else {
        if (a = l.current.alternate, n && !tm(a)) {
          e = Hi(l, t, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var i = l;
              e = ie;
              var c = i.current.memoizedState.isDehydrated;
              if (c && (Su(i, f).flags |= 256), f = Hi(
                i,
                f,
                !1
              ), f !== 2) {
                if (Ai && !c) {
                  i.errorRecoveryDisabledLanes |= n, Ga |= n, e = 4;
                  break l;
                }
                n = kl, kl = e, n !== null && (kl === null ? kl = n : kl.push.apply(
                  kl,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          Su(l, 0), ya(l, t, 0, !0);
          break;
        }
        l: {
          switch (u = l, n = e, n) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ya(
                u,
                t,
                it,
                !ca
              );
              break l;
            case 2:
              kl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((t & 62914560) === t && (e = hn + 300 - Pl(), 10 < e)) {
            if (ya(
              u,
              t,
              it,
              !ca
            ), Oe(u, 0, !0) !== 0) break l;
            wt = t, u.timeoutHandle = jd(
              cd.bind(
                null,
                u,
                a,
                kl,
                gn,
                Oi,
                t,
                it,
                Ga,
                ru,
                ca,
                n,
                "Throttled",
                -0,
                0
              ),
              e
            );
            break l;
          }
          cd(
            u,
            a,
            kl,
            gn,
            Oi,
            t,
            it,
            Ga,
            ru,
            ca,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Ut(l);
  }
  function cd(l, t, a, u, e, n, f, i, c, m, g, z, v, r) {
    if (l.timeoutHandle = -1, z = t.subtreeFlags, z & 8192 || (z & 16785408) === 16785408) {
      z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Rt
      }, ld(
        t,
        n,
        z
      );
      var O = (n & 62914560) === n ? hn - Pl() : (n & 4194048) === n ? ed - Pl() : 0;
      if (O = Gm(
        z,
        O
      ), O !== null) {
        wt = n, l.cancelPendingCommit = O(
          rd.bind(
            null,
            l,
            t,
            n,
            a,
            u,
            e,
            f,
            i,
            c,
            g,
            z,
            null,
            v,
            r
          )
        ), ya(l, n, f, !m);
        return;
      }
    }
    rd(
      l,
      t,
      n,
      a,
      u,
      e,
      f,
      i,
      c
    );
  }
  function tm(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var u = 0; u < a.length; u++) {
          var e = a[u], n = e.getSnapshot;
          e = e.value;
          try {
            if (!at(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function ya(l, t, a, u) {
    t &= ~pi, t &= ~Ga, l.suspendedLanes |= t, l.pingedLanes &= ~t, u && (l.warmLanes |= t), u = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - tt(e), f = 1 << n;
      u[n] = -1, e &= ~f;
    }
    a !== 0 && Sc(l, a, t);
  }
  function Sn() {
    return (F & 6) === 0 ? (se(0), !1) : !0;
  }
  function Ni() {
    if (Z !== null) {
      if (P === 0)
        var l = Z.return;
      else
        l = Z, Bt = Na = null, Jf(l), cu = null, Ku = 0, l = Z;
      for (; l !== null; )
        G0(l.alternate, l), l = l.return;
      Z = null;
    }
  }
  function Su(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && (l.timeoutHandle = -1, _m(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), wt = 0, Ni(), fl = l, Z = a = qt(l.current, null), L = t, P = 0, ft = null, ca = !1, hu = Du(l, t), Ai = !1, ru = it = pi = Ga = sa = gl = 0, kl = ie = null, Oi = !1, (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - tt(u), n = 1 << e;
        t |= l[e], u &= ~n;
      }
    return Jt = t, je(), a;
  }
  function sd(l, t) {
    x = null, S.H = Pu, t === iu || t === Je ? (t = ps(), P = 3) : t === qf ? (t = ps(), P = 4) : P = t === ci ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ft = t, Z === null && (gl = 1, fn(
      l,
      mt(t, l.current)
    ));
  }
  function dd() {
    var l = et.current;
    return l === null ? !0 : (L & 4194048) === L ? gt === null : (L & 62914560) === L || (L & 536870912) !== 0 ? l === gt : !1;
  }
  function od() {
    var l = S.H;
    return S.H = Pu, l === null ? Pu : l;
  }
  function yd() {
    var l = S.A;
    return S.A = Py, l;
  }
  function bn() {
    gl = 4, ca || (L & 4194048) !== L && et.current !== null || (hu = !0), (sa & 134217727) === 0 && (Ga & 134217727) === 0 || fl === null || ya(
      fl,
      L,
      it,
      !1
    );
  }
  function Hi(l, t, a) {
    var u = F;
    F |= 2;
    var e = od(), n = yd();
    (fl !== l || L !== t) && (gn = null, Su(l, t)), t = !1;
    var f = gl;
    l: do
      try {
        if (P !== 0 && Z !== null) {
          var i = Z, c = ft;
          switch (P) {
            case 8:
              Ni(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              et.current === null && (t = !0);
              var m = P;
              if (P = 0, ft = null, bu(l, i, c, m), a && hu) {
                f = 0;
                break l;
              }
              break;
            default:
              m = P, P = 0, ft = null, bu(l, i, c, m);
          }
        }
        am(), f = gl;
        break;
      } catch (g) {
        sd(l, g);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Bt = Na = null, F = u, S.H = e, S.A = n, Z === null && (fl = null, L = 0, je()), f;
  }
  function am() {
    for (; Z !== null; ) md(Z);
  }
  function um(l, t) {
    var a = F;
    F |= 2;
    var u = od(), e = yd();
    fl !== l || L !== t ? (gn = null, rn = Pl() + 500, Su(l, t)) : hu = Du(
      l,
      t
    );
    l: do
      try {
        if (P !== 0 && Z !== null) {
          t = Z;
          var n = ft;
          t: switch (P) {
            case 1:
              P = 0, ft = null, bu(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (Ts(n)) {
                P = 0, ft = null, vd(t);
                break;
              }
              t = function() {
                P !== 2 && P !== 9 || fl !== l || (P = 7), Ut(l);
              }, n.then(t, t);
              break l;
            case 3:
              P = 7;
              break l;
            case 4:
              P = 5;
              break l;
            case 7:
              Ts(n) ? (P = 0, ft = null, vd(t)) : (P = 0, ft = null, bu(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (Z.tag) {
                case 26:
                  f = Z.memoizedState;
                case 5:
                case 27:
                  var i = Z;
                  if (f ? Pd(f) : i.stateNode.complete) {
                    P = 0, ft = null;
                    var c = i.sibling;
                    if (c !== null) Z = c;
                    else {
                      var m = i.return;
                      m !== null ? (Z = m, zn(m)) : Z = null;
                    }
                    break t;
                  }
              }
              P = 0, ft = null, bu(l, t, n, 5);
              break;
            case 6:
              P = 0, ft = null, bu(l, t, n, 6);
              break;
            case 8:
              Ni(), gl = 6;
              break l;
            default:
              throw Error(h(462));
          }
        }
        em();
        break;
      } catch (g) {
        sd(l, g);
      }
    while (!0);
    return Bt = Na = null, S.H = u, S.A = e, F = a, Z !== null ? 0 : (fl = null, L = 0, je(), gl);
  }
  function em() {
    for (; Z !== null && !Mo(); )
      md(Z);
  }
  function md(l) {
    var t = x0(l.alternate, l, Jt);
    l.memoizedProps = l.pendingProps, t === null ? zn(l) : Z = t;
  }
  function vd(l) {
    var t = l, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = H0(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          L
        );
        break;
      case 11:
        t = H0(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          L
        );
        break;
      case 5:
        Jf(t);
      default:
        G0(a, t), t = Z = ys(t, Jt), t = x0(a, t, Jt);
    }
    l.memoizedProps = l.pendingProps, t === null ? zn(l) : Z = t;
  }
  function bu(l, t, a, u) {
    Bt = Na = null, Jf(t), cu = null, Ku = 0;
    var e = t.return;
    try {
      if (Jy(
        l,
        e,
        t,
        a,
        L
      )) {
        gl = 1, fn(
          l,
          mt(a, l.current)
        ), Z = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw Z = e, n;
      gl = 1, fn(
        l,
        mt(a, l.current)
      ), Z = null;
      return;
    }
    t.flags & 32768 ? (J || u === 1 ? l = !0 : hu || (L & 536870912) !== 0 ? l = !1 : (ca = l = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = et.current, u !== null && u.tag === 13 && (u.flags |= 16384))), hd(t, l)) : zn(t);
  }
  function zn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        hd(
          t,
          ca
        );
        return;
      }
      l = t.return;
      var a = $y(
        t.alternate,
        t,
        Jt
      );
      if (a !== null) {
        Z = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        Z = t;
        return;
      }
      Z = t = l;
    } while (t !== null);
    gl === 0 && (gl = 5);
  }
  function hd(l, t) {
    do {
      var a = Fy(l.alternate, l);
      if (a !== null) {
        a.flags &= 32767, Z = a;
        return;
      }
      if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
        Z = l;
        return;
      }
      Z = l = a;
    } while (l !== null);
    gl = 6, Z = null;
  }
  function rd(l, t, a, u, e, n, f, i, c) {
    l.cancelPendingCommit = null;
    do
      _n();
    while (Ml !== 0);
    if ((F & 6) !== 0) throw Error(h(327));
    if (t !== null) {
      if (t === l.current) throw Error(h(177));
      if (n = t.lanes | t.childLanes, n |= bf, xo(
        l,
        a,
        n,
        f,
        i,
        c
      ), l === fl && (Z = fl = null, L = 0), gu = t, oa = l, wt = a, Mi = n, Di = e, nd = u, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, cm(Ee, function() {
        return _d(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), u = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || u) {
        u = S.T, S.T = null, e = A.p, A.p = 2, f = F, F |= 4;
        try {
          ky(l, t, a);
        } finally {
          F = f, A.p = e, S.T = u;
        }
      }
      Ml = 1, gd(), Sd(), bd();
    }
  }
  function gd() {
    if (Ml === 1) {
      Ml = 0;
      var l = oa, t = gu, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = S.T, S.T = null;
        var u = A.p;
        A.p = 2;
        var e = F;
        F |= 4;
        try {
          k0(t, l);
          var n = Vi, f = us(l.containerInfo), i = n.focusedElem, c = n.selectionRange;
          if (f !== i && i && i.ownerDocument && as(
            i.ownerDocument.documentElement,
            i
          )) {
            if (c !== null && vf(i)) {
              var m = c.start, g = c.end;
              if (g === void 0 && (g = m), "selectionStart" in i)
                i.selectionStart = m, i.selectionEnd = Math.min(
                  g,
                  i.value.length
                );
              else {
                var z = i.ownerDocument || document, v = z && z.defaultView || window;
                if (v.getSelection) {
                  var r = v.getSelection(), O = i.textContent.length, R = Math.min(c.start, O), el = c.end === void 0 ? R : Math.min(c.end, O);
                  !r.extend && R > el && (f = el, el = R, R = f);
                  var o = ts(
                    i,
                    R
                  ), s = ts(
                    i,
                    el
                  );
                  if (o && s && (r.rangeCount !== 1 || r.anchorNode !== o.node || r.anchorOffset !== o.offset || r.focusNode !== s.node || r.focusOffset !== s.offset)) {
                    var y = z.createRange();
                    y.setStart(o.node, o.offset), r.removeAllRanges(), R > el ? (r.addRange(y), r.extend(s.node, s.offset)) : (y.setEnd(s.node, s.offset), r.addRange(y));
                  }
                }
              }
            }
            for (z = [], r = i; r = r.parentNode; )
              r.nodeType === 1 && z.push({
                element: r,
                left: r.scrollLeft,
                top: r.scrollTop
              });
            for (typeof i.focus == "function" && i.focus(), i = 0; i < z.length; i++) {
              var b = z[i];
              b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
            }
          }
          Cn = !!Zi, Vi = Zi = null;
        } finally {
          F = e, A.p = u, S.T = a;
        }
      }
      l.current = t, Ml = 2;
    }
  }
  function Sd() {
    if (Ml === 2) {
      Ml = 0;
      var l = oa, t = gu, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = S.T, S.T = null;
        var u = A.p;
        A.p = 2;
        var e = F;
        F |= 4;
        try {
          J0(l, t.alternate, t);
        } finally {
          F = e, A.p = u, S.T = a;
        }
      }
      Ml = 3;
    }
  }
  function bd() {
    if (Ml === 4 || Ml === 3) {
      Ml = 0, Do();
      var l = oa, t = gu, a = wt, u = nd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ml = 5 : (Ml = 0, gu = oa = null, zd(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (da = null), Wn(a), t = t.stateNode, lt && typeof lt.onCommitFiberRoot == "function")
        try {
          lt.onCommitFiberRoot(
            Mu,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        t = S.T, e = A.p, A.p = 2, S.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < u.length; f++) {
            var i = u[f];
            n(i.value, {
              componentStack: i.stack
            });
          }
        } finally {
          S.T = t, A.p = e;
        }
      }
      (wt & 3) !== 0 && _n(), Ut(l), e = l.pendingLanes, (a & 261930) !== 0 && (e & 42) !== 0 ? l === Ui ? ce++ : (ce = 0, Ui = l) : ce = 0, se(0);
    }
  }
  function zd(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Vu(t)));
  }
  function _n() {
    return gd(), Sd(), bd(), _d();
  }
  function _d() {
    if (Ml !== 5) return !1;
    var l = oa, t = Mi;
    Mi = 0;
    var a = Wn(wt), u = S.T, e = A.p;
    try {
      A.p = 32 > a ? 32 : a, S.T = null, a = Di, Di = null;
      var n = oa, f = wt;
      if (Ml = 0, gu = oa = null, wt = 0, (F & 6) !== 0) throw Error(h(331));
      var i = F;
      if (F |= 4, ad(n.current), P0(
        n,
        n.current,
        f,
        a
      ), F = i, se(0, !1), lt && typeof lt.onPostCommitFiberRoot == "function")
        try {
          lt.onPostCommitFiberRoot(Mu, n);
        } catch {
        }
      return !0;
    } finally {
      A.p = e, S.T = u, zd(l, t);
    }
  }
  function Ed(l, t, a) {
    t = mt(a, t), t = ii(l.stateNode, t, 2), l = ea(l, t, 2), l !== null && (Uu(l, 2), Ut(l));
  }
  function ll(l, t, a) {
    if (l.tag === 3)
      Ed(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ed(
            t,
            l,
            a
          );
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (da === null || !da.has(u))) {
            l = mt(a, l), a = T0(2), u = ea(t, a, 2), u !== null && (A0(
              a,
              u,
              t,
              l
            ), Uu(u, 2), Ut(u));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ri(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new lm();
      var e = /* @__PURE__ */ new Set();
      u.set(t, e);
    } else
      e = u.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), u.set(t, e));
    e.has(a) || (Ai = !0, e.add(a), l = nm.bind(null, l, t, a), t.then(l, l));
  }
  function nm(l, t, a) {
    var u = l.pingCache;
    u !== null && u.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, fl === l && (L & a) === a && (gl === 4 || gl === 3 && (L & 62914560) === L && 300 > Pl() - hn ? (F & 2) === 0 && Su(l, 0) : pi |= a, ru === L && (ru = 0)), Ut(l);
  }
  function Td(l, t) {
    t === 0 && (t = gc()), l = Ma(l, t), l !== null && (Uu(l, t), Ut(l));
  }
  function fm(l) {
    var t = l.memoizedState, a = 0;
    t !== null && (a = t.retryLane), Td(l, a);
  }
  function im(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var u = l.stateNode, e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(h(314));
    }
    u !== null && u.delete(t), Td(l, a);
  }
  function cm(l, t) {
    return Ln(l, t);
  }
  var En = null, zu = null, Ci = !1, Tn = !1, qi = !1, ma = 0;
  function Ut(l) {
    l !== zu && l.next === null && (zu === null ? En = zu = l : zu = zu.next = l), Tn = !0, Ci || (Ci = !0, dm());
  }
  function se(l, t) {
    if (!qi && Tn) {
      qi = !0;
      do
        for (var a = !1, u = En; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = u.suspendedLanes, i = u.pingedLanes;
              n = (1 << 31 - tt(42 | l) + 1) - 1, n &= e & ~(f & ~i), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (a = !0, Md(u, n));
          } else
            n = L, n = Oe(
              u,
              u === fl ? n : 0,
              u.cancelPendingCommit !== null || u.timeoutHandle !== -1
            ), (n & 3) === 0 || Du(u, n) || (a = !0, Md(u, n));
          u = u.next;
        }
      while (a);
      qi = !1;
    }
  }
  function sm() {
    Ad();
  }
  function Ad() {
    Tn = Ci = !1;
    var l = 0;
    ma !== 0 && zm() && (l = ma);
    for (var t = Pl(), a = null, u = En; u !== null; ) {
      var e = u.next, n = pd(u, t);
      n === 0 ? (u.next = null, a === null ? En = e : a.next = e, e === null && (zu = a)) : (a = u, (l !== 0 || (n & 3) !== 0) && (Tn = !0)), u = e;
    }
    Ml !== 0 && Ml !== 5 || se(l), ma !== 0 && (ma = 0);
  }
  function pd(l, t) {
    for (var a = l.suspendedLanes, u = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - tt(n), i = 1 << f, c = e[f];
      c === -1 ? ((i & a) === 0 || (i & u) !== 0) && (e[f] = Bo(i, t)) : c <= t && (l.expiredLanes |= i), n &= ~i;
    }
    if (t = fl, a = L, a = Oe(
      l,
      l === t ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), u = l.callbackNode, a === 0 || l === t && (P === 2 || P === 9) || l.cancelPendingCommit !== null)
      return u !== null && u !== null && Kn(u), l.callbackNode = null, l.callbackPriority = 0;
    if ((a & 3) === 0 || Du(l, a)) {
      if (t = a & -a, t === l.callbackPriority) return t;
      switch (u !== null && Kn(u), Wn(a)) {
        case 2:
        case 8:
          a = hc;
          break;
        case 32:
          a = Ee;
          break;
        case 268435456:
          a = rc;
          break;
        default:
          a = Ee;
      }
      return u = Od.bind(null, l), a = Ln(a, u), l.callbackPriority = t, l.callbackNode = a, t;
    }
    return u !== null && u !== null && Kn(u), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Od(l, t) {
    if (Ml !== 0 && Ml !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var a = l.callbackNode;
    if (_n() && l.callbackNode !== a)
      return null;
    var u = L;
    return u = Oe(
      l,
      l === fl ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), u === 0 ? null : (id(l, u, t), pd(l, Pl()), l.callbackNode != null && l.callbackNode === a ? Od.bind(null, l) : null);
  }
  function Md(l, t) {
    if (_n()) return null;
    id(l, t, !0);
  }
  function dm() {
    Em(function() {
      (F & 6) !== 0 ? Ln(
        vc,
        sm
      ) : Ad();
    });
  }
  function Yi() {
    if (ma === 0) {
      var l = nu;
      l === 0 && (l = Te, Te <<= 1, (Te & 261888) === 0 && (Te = 256)), ma = l;
    }
    return ma;
  }
  function Dd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Ne("" + l);
  }
  function Ud(l, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
  }
  function om(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = Dd(
        (e[Jl] || null).action
      ), f = u.submitter;
      f && (t = (t = f[Jl] || null) ? Dd(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var i = new qe(
        "action",
        "action",
        null,
        u,
        e
      );
      l.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (u.defaultPrevented) {
                if (ma !== 0) {
                  var c = f ? Ud(e, f) : new FormData(e);
                  ti(
                    a,
                    {
                      pending: !0,
                      data: c,
                      method: e.method,
                      action: n
                    },
                    null,
                    c
                  );
                }
              } else
                typeof n == "function" && (i.preventDefault(), c = f ? Ud(e, f) : new FormData(e), ti(
                  a,
                  {
                    pending: !0,
                    data: c,
                    method: e.method,
                    action: n
                  },
                  n,
                  c
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var Bi = 0; Bi < Sf.length; Bi++) {
    var xi = Sf[Bi], ym = xi.toLowerCase(), mm = xi[0].toUpperCase() + xi.slice(1);
    _t(
      ym,
      "on" + mm
    );
  }
  _t(fs, "onAnimationEnd"), _t(is, "onAnimationIteration"), _t(cs, "onAnimationStart"), _t("dblclick", "onDoubleClick"), _t("focusin", "onFocus"), _t("focusout", "onBlur"), _t(Uy, "onTransitionRun"), _t(Ny, "onTransitionStart"), _t(Hy, "onTransitionCancel"), _t(ss, "onTransitionEnd"), Ka("onMouseEnter", ["mouseout", "mouseover"]), Ka("onMouseLeave", ["mouseout", "mouseover"]), Ka("onPointerEnter", ["pointerout", "pointerover"]), Ka("onPointerLeave", ["pointerout", "pointerover"]), Ta(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ta(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ta("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ta(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ta(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ta(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var de = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), vm = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(de)
  );
  function Nd(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a], e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = u.length - 1; 0 <= f; f--) {
            var i = u[f], c = i.instance, m = i.currentTarget;
            if (i = i.listener, c !== n && e.isPropagationStopped())
              break l;
            n = i, e.currentTarget = m;
            try {
              n(e);
            } catch (g) {
              xe(g);
            }
            e.currentTarget = null, n = c;
          }
        else
          for (f = 0; f < u.length; f++) {
            if (i = u[f], c = i.instance, m = i.currentTarget, i = i.listener, c !== n && e.isPropagationStopped())
              break l;
            n = i, e.currentTarget = m;
            try {
              n(e);
            } catch (g) {
              xe(g);
            }
            e.currentTarget = null, n = c;
          }
      }
    }
  }
  function V(l, t) {
    var a = t[$n];
    a === void 0 && (a = t[$n] = /* @__PURE__ */ new Set());
    var u = l + "__bubble";
    a.has(u) || (Hd(t, l, 2, !1), a.add(u));
  }
  function ji(l, t, a) {
    var u = 0;
    t && (u |= 4), Hd(
      a,
      l,
      u,
      t
    );
  }
  var An = "_reactListening" + Math.random().toString(36).slice(2);
  function Gi(l) {
    if (!l[An]) {
      l[An] = !0, Ac.forEach(function(a) {
        a !== "selectionchange" && (vm.has(a) || ji(a, !1, l), ji(a, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[An] || (t[An] = !0, ji("selectionchange", !1, t));
    }
  }
  function Hd(l, t, a, u) {
    switch (fo(t)) {
      case 2:
        var e = Zm;
        break;
      case 8:
        e = Vm;
        break;
      default:
        e = lc;
    }
    a = e.bind(
      null,
      t,
      a,
      l
    ), e = void 0, !ef || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), u ? e !== void 0 ? l.addEventListener(t, a, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, a, !0) : e !== void 0 ? l.addEventListener(t, a, {
      passive: e
    }) : l.addEventListener(t, a, !1);
  }
  function Xi(l, t, a, u, e) {
    var n = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      l: for (; ; ) {
        if (u === null) return;
        var f = u.tag;
        if (f === 3 || f === 4) {
          var i = u.stateNode.containerInfo;
          if (i === e) break;
          if (f === 4)
            for (f = u.return; f !== null; ) {
              var c = f.tag;
              if ((c === 3 || c === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; i !== null; ) {
            if (f = Za(i), f === null) return;
            if (c = f.tag, c === 5 || c === 6 || c === 26 || c === 27) {
              u = n = f;
              continue l;
            }
            i = i.parentNode;
          }
        }
        u = u.return;
      }
    Bc(function() {
      var m = n, g = af(a), z = [];
      l: {
        var v = ds.get(l);
        if (v !== void 0) {
          var r = qe, O = l;
          switch (l) {
            case "keypress":
              if (Re(a) === 0) break l;
            case "keydown":
            case "keyup":
              r = iy;
              break;
            case "focusin":
              O = "focus", r = sf;
              break;
            case "focusout":
              O = "blur", r = sf;
              break;
            case "beforeblur":
            case "afterblur":
              r = sf;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              r = Gc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              r = $o;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              r = dy;
              break;
            case fs:
            case is:
            case cs:
              r = Io;
              break;
            case ss:
              r = yy;
              break;
            case "scroll":
            case "scrollend":
              r = wo;
              break;
            case "wheel":
              r = vy;
              break;
            case "copy":
            case "cut":
            case "paste":
              r = ly;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              r = Qc;
              break;
            case "toggle":
            case "beforetoggle":
              r = ry;
          }
          var R = (t & 4) !== 0, el = !R && (l === "scroll" || l === "scrollend"), o = R ? v !== null ? v + "Capture" : null : v;
          R = [];
          for (var s = m, y; s !== null; ) {
            var b = s;
            if (y = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || y === null || o === null || (b = Ru(s, o), b != null && R.push(
              oe(s, b, y)
            )), el) break;
            s = s.return;
          }
          0 < R.length && (v = new r(
            v,
            O,
            null,
            a,
            g
          ), z.push({ event: v, listeners: R }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (v = l === "mouseover" || l === "pointerover", r = l === "mouseout" || l === "pointerout", v && a !== tf && (O = a.relatedTarget || a.fromElement) && (Za(O) || O[Qa]))
            break l;
          if ((r || v) && (v = g.window === g ? g : (v = g.ownerDocument) ? v.defaultView || v.parentWindow : window, r ? (O = a.relatedTarget || a.toElement, r = m, O = O ? Za(O) : null, O !== null && (el = Sl(O), R = O.tag, O !== el || R !== 5 && R !== 27 && R !== 6) && (O = null)) : (r = null, O = m), r !== O)) {
            if (R = Gc, b = "onMouseLeave", o = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (R = Qc, b = "onPointerLeave", o = "onPointerEnter", s = "pointer"), el = r == null ? v : Hu(r), y = O == null ? v : Hu(O), v = new R(
              b,
              s + "leave",
              r,
              a,
              g
            ), v.target = el, v.relatedTarget = y, b = null, Za(g) === m && (R = new R(
              o,
              s + "enter",
              O,
              a,
              g
            ), R.target = y, R.relatedTarget = el, b = R), el = b, r && O)
              t: {
                for (R = hm, o = r, s = O, y = 0, b = o; b; b = R(b))
                  y++;
                b = 0;
                for (var H = s; H; H = R(H))
                  b++;
                for (; 0 < y - b; )
                  o = R(o), y--;
                for (; 0 < b - y; )
                  s = R(s), b--;
                for (; y--; ) {
                  if (o === s || s !== null && o === s.alternate) {
                    R = o;
                    break t;
                  }
                  o = R(o), s = R(s);
                }
                R = null;
              }
            else R = null;
            r !== null && Rd(
              z,
              v,
              r,
              R,
              !1
            ), O !== null && el !== null && Rd(
              z,
              el,
              O,
              R,
              !0
            );
          }
        }
        l: {
          if (v = m ? Hu(m) : window, r = v.nodeName && v.nodeName.toLowerCase(), r === "select" || r === "input" && v.type === "file")
            var W = $c;
          else if (wc(v))
            if (Fc)
              W = Oy;
            else {
              W = Ay;
              var D = Ty;
            }
          else
            r = v.nodeName, !r || r.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? m && lf(m.elementType) && (W = $c) : W = py;
          if (W && (W = W(l, m))) {
            Wc(
              z,
              W,
              a,
              g
            );
            break l;
          }
          D && D(l, v, m), l === "focusout" && m && v.type === "number" && m.memoizedProps.value != null && Pn(v, "number", v.value);
        }
        switch (D = m ? Hu(m) : window, l) {
          case "focusin":
            (wc(D) || D.contentEditable === "true") && (ka = D, hf = m, Xu = null);
            break;
          case "focusout":
            Xu = hf = ka = null;
            break;
          case "mousedown":
            rf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            rf = !1, es(z, a, g);
            break;
          case "selectionchange":
            if (Dy) break;
          case "keydown":
          case "keyup":
            es(z, a, g);
        }
        var j;
        if (of)
          l: {
            switch (l) {
              case "compositionstart":
                var K = "onCompositionStart";
                break l;
              case "compositionend":
                K = "onCompositionEnd";
                break l;
              case "compositionupdate":
                K = "onCompositionUpdate";
                break l;
            }
            K = void 0;
          }
        else
          Fa ? Kc(l, a) && (K = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (K = "onCompositionStart");
        K && (Zc && a.locale !== "ko" && (Fa || K !== "onCompositionStart" ? K === "onCompositionEnd" && Fa && (j = xc()) : (kt = g, nf = "value" in kt ? kt.value : kt.textContent, Fa = !0)), D = pn(m, K), 0 < D.length && (K = new Xc(
          K,
          l,
          null,
          a,
          g
        ), z.push({ event: K, listeners: D }), j ? K.data = j : (j = Jc(a), j !== null && (K.data = j)))), (j = Sy ? by(l, a) : zy(l, a)) && (K = pn(m, "onBeforeInput"), 0 < K.length && (D = new Xc(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          g
        ), z.push({
          event: D,
          listeners: K
        }), D.data = j)), om(
          z,
          l,
          m,
          a,
          g
        );
      }
      Nd(z, t);
    });
  }
  function oe(l, t, a) {
    return {
      instance: l,
      listener: t,
      currentTarget: a
    };
  }
  function pn(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Ru(l, a), e != null && u.unshift(
        oe(l, e, n)
      ), e = Ru(l, t), e != null && u.push(
        oe(l, e, n)
      )), l.tag === 3) return u;
      l = l.return;
    }
    return [];
  }
  function hm(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Rd(l, t, a, u, e) {
    for (var n = t._reactName, f = []; a !== null && a !== u; ) {
      var i = a, c = i.alternate, m = i.stateNode;
      if (i = i.tag, c !== null && c === u) break;
      i !== 5 && i !== 26 && i !== 27 || m === null || (c = m, e ? (m = Ru(a, n), m != null && f.unshift(
        oe(a, m, c)
      )) : e || (m = Ru(a, n), m != null && f.push(
        oe(a, m, c)
      ))), a = a.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var rm = /\r\n?/g, gm = /\u0000|\uFFFD/g;
  function Cd(l) {
    return (typeof l == "string" ? l : "" + l).replace(rm, `
`).replace(gm, "");
  }
  function qd(l, t) {
    return t = Cd(t), Cd(l) === t;
  }
  function ul(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string" ? t === "body" || t === "textarea" && u === "" || wa(l, u) : (typeof u == "number" || typeof u == "bigint") && t !== "body" && wa(l, "" + u);
        break;
      case "className":
        De(l, "class", u);
        break;
      case "tabIndex":
        De(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        De(l, a, u);
        break;
      case "style":
        qc(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          De(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = Ne("" + u), l.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (a === "formAction" ? (t !== "input" && ul(l, t, "name", e.name, e, null), ul(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), ul(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), ul(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (ul(l, t, "encType", e.encType, e, null), ul(l, t, "method", e.method, e, null), ul(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = Ne("" + u), l.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (l.onclick = Rt);
        break;
      case "onScroll":
        u != null && V("scroll", l);
        break;
      case "onScrollEnd":
        u != null && V("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(h(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(h(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
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
        if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        a = Ne("" + u), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "" + u) : l.removeAttribute(a);
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
        u && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0 ? l.setAttribute(a, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, u) : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? l.setAttribute(a, u) : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? l.removeAttribute(a) : l.setAttribute(a, u);
        break;
      case "popover":
        V("beforetoggle", l), V("toggle", l), Me(l, "popover", u);
        break;
      case "xlinkActuate":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          u
        );
        break;
      case "xlinkArcrole":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          u
        );
        break;
      case "xlinkRole":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          u
        );
        break;
      case "xlinkShow":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          u
        );
        break;
      case "xlinkTitle":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          u
        );
        break;
      case "xlinkType":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          u
        );
        break;
      case "xmlBase":
        Ht(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          u
        );
        break;
      case "xmlLang":
        Ht(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          u
        );
        break;
      case "xmlSpace":
        Ht(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          u
        );
        break;
      case "is":
        Me(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Ko.get(a) || a, Me(l, a, u));
    }
  }
  function Qi(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        qc(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(h(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(h(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string" ? wa(l, u) : (typeof u == "number" || typeof u == "bigint") && wa(l, "" + u);
        break;
      case "onScroll":
        u != null && V("scroll", l);
        break;
      case "onScrollEnd":
        u != null && V("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = Rt);
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
        if (!pc.hasOwnProperty(a))
          l: {
            if (a[0] === "o" && a[1] === "n" && (e = a.endsWith("Capture"), t = a.slice(2, e ? a.length - 7 : void 0), n = l[Jl] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof u == "function")) {
              typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, u, e);
              break l;
            }
            a in l ? l[a] = u : u === !0 ? l.setAttribute(a, "") : Me(l, a, u);
          }
    }
  }
  function jl(l, t, a) {
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
        V("error", l), V("load", l);
        var u = !1, e = !1, n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var f = a[n];
            if (f != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(h(137, t));
                default:
                  ul(l, t, n, f, a, null);
              }
          }
        e && ul(l, t, "srcSet", a.srcSet, a, null), u && ul(l, t, "src", a.src, a, null);
        return;
      case "input":
        V("invalid", l);
        var i = n = f = e = null, c = null, m = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var g = a[u];
            if (g != null)
              switch (u) {
                case "name":
                  e = g;
                  break;
                case "type":
                  f = g;
                  break;
                case "checked":
                  c = g;
                  break;
                case "defaultChecked":
                  m = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  i = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null)
                    throw Error(h(137, t));
                  break;
                default:
                  ul(l, t, u, g, a, null);
              }
          }
        Nc(
          l,
          n,
          i,
          c,
          m,
          f,
          e,
          !1
        );
        return;
      case "select":
        V("invalid", l), u = f = n = null;
        for (e in a)
          if (a.hasOwnProperty(e) && (i = a[e], i != null))
            switch (e) {
              case "value":
                n = i;
                break;
              case "defaultValue":
                f = i;
                break;
              case "multiple":
                u = i;
              default:
                ul(l, t, e, i, a, null);
            }
        t = n, a = f, l.multiple = !!u, t != null ? Ja(l, !!u, t, !1) : a != null && Ja(l, !!u, a, !0);
        return;
      case "textarea":
        V("invalid", l), n = e = u = null;
        for (f in a)
          if (a.hasOwnProperty(f) && (i = a[f], i != null))
            switch (f) {
              case "value":
                u = i;
                break;
              case "defaultValue":
                e = i;
                break;
              case "children":
                n = i;
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(h(91));
                break;
              default:
                ul(l, t, f, i, a, null);
            }
        Rc(l, u, e, n);
        return;
      case "option":
        for (c in a)
          if (a.hasOwnProperty(c) && (u = a[c], u != null))
            switch (c) {
              case "selected":
                l.selected = u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                ul(l, t, c, u, a, null);
            }
        return;
      case "dialog":
        V("beforetoggle", l), V("toggle", l), V("cancel", l), V("close", l);
        break;
      case "iframe":
      case "object":
        V("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < de.length; u++)
          V(de[u], l);
        break;
      case "image":
        V("error", l), V("load", l);
        break;
      case "details":
        V("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        V("error", l), V("load", l);
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
        for (m in a)
          if (a.hasOwnProperty(m) && (u = a[m], u != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(137, t));
              default:
                ul(l, t, m, u, a, null);
            }
        return;
      default:
        if (lf(t)) {
          for (g in a)
            a.hasOwnProperty(g) && (u = a[g], u !== void 0 && Qi(
              l,
              t,
              g,
              u,
              a,
              void 0
            ));
          return;
        }
    }
    for (i in a)
      a.hasOwnProperty(i) && (u = a[i], u != null && ul(l, t, i, u, a, null));
  }
  function Sm(l, t, a, u) {
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
        var e = null, n = null, f = null, i = null, c = null, m = null, g = null;
        for (r in a) {
          var z = a[r];
          if (a.hasOwnProperty(r) && z != null)
            switch (r) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                c = z;
              default:
                u.hasOwnProperty(r) || ul(l, t, r, null, u, z);
            }
        }
        for (var v in u) {
          var r = u[v];
          if (z = a[v], u.hasOwnProperty(v) && (r != null || z != null))
            switch (v) {
              case "type":
                n = r;
                break;
              case "name":
                e = r;
                break;
              case "checked":
                m = r;
                break;
              case "defaultChecked":
                g = r;
                break;
              case "value":
                f = r;
                break;
              case "defaultValue":
                i = r;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (r != null)
                  throw Error(h(137, t));
                break;
              default:
                r !== z && ul(
                  l,
                  t,
                  v,
                  r,
                  u,
                  z
                );
            }
        }
        In(
          l,
          f,
          i,
          c,
          m,
          g,
          n,
          e
        );
        return;
      case "select":
        r = f = i = v = null;
        for (n in a)
          if (c = a[n], a.hasOwnProperty(n) && c != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                r = c;
              default:
                u.hasOwnProperty(n) || ul(
                  l,
                  t,
                  n,
                  null,
                  u,
                  c
                );
            }
        for (e in u)
          if (n = u[e], c = a[e], u.hasOwnProperty(e) && (n != null || c != null))
            switch (e) {
              case "value":
                v = n;
                break;
              case "defaultValue":
                i = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== c && ul(
                  l,
                  t,
                  e,
                  n,
                  u,
                  c
                );
            }
        t = i, a = f, u = r, v != null ? Ja(l, !!a, v, !1) : !!u != !!a && (t != null ? Ja(l, !!a, t, !0) : Ja(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        r = v = null;
        for (i in a)
          if (e = a[i], a.hasOwnProperty(i) && e != null && !u.hasOwnProperty(i))
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                ul(l, t, i, null, u, e);
            }
        for (f in u)
          if (e = u[f], n = a[f], u.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                v = e;
                break;
              case "defaultValue":
                r = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(h(91));
                break;
              default:
                e !== n && ul(l, t, f, e, u, n);
            }
        Hc(l, v, r);
        return;
      case "option":
        for (var O in a)
          if (v = a[O], a.hasOwnProperty(O) && v != null && !u.hasOwnProperty(O))
            switch (O) {
              case "selected":
                l.selected = !1;
                break;
              default:
                ul(
                  l,
                  t,
                  O,
                  null,
                  u,
                  v
                );
            }
        for (c in u)
          if (v = u[c], r = a[c], u.hasOwnProperty(c) && v !== r && (v != null || r != null))
            switch (c) {
              case "selected":
                l.selected = v && typeof v != "function" && typeof v != "symbol";
                break;
              default:
                ul(
                  l,
                  t,
                  c,
                  v,
                  u,
                  r
                );
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
        for (var R in a)
          v = a[R], a.hasOwnProperty(R) && v != null && !u.hasOwnProperty(R) && ul(l, t, R, null, u, v);
        for (m in u)
          if (v = u[m], r = a[m], u.hasOwnProperty(m) && v !== r && (v != null || r != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null)
                  throw Error(h(137, t));
                break;
              default:
                ul(
                  l,
                  t,
                  m,
                  v,
                  u,
                  r
                );
            }
        return;
      default:
        if (lf(t)) {
          for (var el in a)
            v = a[el], a.hasOwnProperty(el) && v !== void 0 && !u.hasOwnProperty(el) && Qi(
              l,
              t,
              el,
              void 0,
              u,
              v
            );
          for (g in u)
            v = u[g], r = a[g], !u.hasOwnProperty(g) || v === r || v === void 0 && r === void 0 || Qi(
              l,
              t,
              g,
              v,
              u,
              r
            );
          return;
        }
    }
    for (var o in a)
      v = a[o], a.hasOwnProperty(o) && v != null && !u.hasOwnProperty(o) && ul(l, t, o, null, u, v);
    for (z in u)
      v = u[z], r = a[z], !u.hasOwnProperty(z) || v === r || v == null && r == null || ul(l, t, z, v, u, r);
  }
  function Yd(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function bm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, a = performance.getEntriesByType("resource"), u = 0; u < a.length; u++) {
        var e = a[u], n = e.transferSize, f = e.initiatorType, i = e.duration;
        if (n && i && Yd(f)) {
          for (f = 0, i = e.responseEnd, u += 1; u < a.length; u++) {
            var c = a[u], m = c.startTime;
            if (m > i) break;
            var g = c.transferSize, z = c.initiatorType;
            g && Yd(z) && (c = c.responseEnd, f += g * (c < i ? 1 : (i - m) / (c - m)));
          }
          if (--u, t += 8 * (n + f) / (e.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Zi = null, Vi = null;
  function On(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Bd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function xd(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Li(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ki = null;
  function zm() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Ki ? !1 : (Ki = l, !0) : (Ki = null, !1);
  }
  var jd = typeof setTimeout == "function" ? setTimeout : void 0, _m = typeof clearTimeout == "function" ? clearTimeout : void 0, Gd = typeof Promise == "function" ? Promise : void 0, Em = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gd < "u" ? function(l) {
    return Gd.resolve(null).then(l).catch(Tm);
  } : jd;
  function Tm(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function va(l) {
    return l === "head";
  }
  function Xd(l, t) {
    var a = t, u = 0;
    do {
      var e = a.nextSibling;
      if (l.removeChild(a), e && e.nodeType === 8)
        if (a = e.data, a === "/$" || a === "/&") {
          if (u === 0) {
            l.removeChild(e), Au(t);
            return;
          }
          u--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          u++;
        else if (a === "html")
          ye(l.ownerDocument.documentElement);
        else if (a === "head") {
          a = l.ownerDocument.head, ye(a);
          for (var n = a.firstChild; n; ) {
            var f = n.nextSibling, i = n.nodeName;
            n[Nu] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && n.rel.toLowerCase() === "stylesheet" || a.removeChild(n), n = f;
          }
        } else
          a === "body" && ye(l.ownerDocument.body);
      a = e;
    } while (a);
    Au(t);
  }
  function Qd(l, t) {
    var a = l;
    l = 0;
    do {
      var u = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), u && u.nodeType === 8)
        if (a = u.data, a === "/$") {
          if (l === 0) break;
          l--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || l++;
      a = u;
    } while (a);
  }
  function Ji(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ji(a), Fn(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function Am(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (u) {
        if (!l[Nu])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = St(l.nextSibling), l === null) break;
    }
    return null;
  }
  function pm(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = St(l.nextSibling), l === null)) return null;
    return l;
  }
  function Zd(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = St(l.nextSibling), l === null)) return null;
    return l;
  }
  function wi(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Wi(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Om(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading")
      t();
    else {
      var u = function() {
        t(), a.removeEventListener("DOMContentLoaded", u);
      };
      a.addEventListener("DOMContentLoaded", u), l._reactRetry = u;
    }
  }
  function St(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var $i = null;
  function Vd(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return St(l.nextSibling);
          t--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Ld(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else a !== "/$" && a !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Kd(l, t, a) {
    switch (t = On(a), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(h(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(h(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(h(454));
        return l;
      default:
        throw Error(h(451));
    }
  }
  function ye(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    Fn(l);
  }
  var bt = /* @__PURE__ */ new Map(), Jd = /* @__PURE__ */ new Set();
  function Mn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Wt = A.d;
  A.d = {
    f: Mm,
    r: Dm,
    D: Um,
    C: Nm,
    L: Hm,
    m: Rm,
    X: qm,
    S: Cm,
    M: Ym
  };
  function Mm() {
    var l = Wt.f(), t = Sn();
    return l || t;
  }
  function Dm(l) {
    var t = Va(l);
    t !== null && t.tag === 5 && t.type === "form" ? s0(t) : Wt.r(l);
  }
  var _u = typeof document > "u" ? null : document;
  function wd(l, t, a) {
    var u = _u;
    if (u && typeof t == "string" && t) {
      var e = ot(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof a == "string" && (e += '[crossorigin="' + a + '"]'), Jd.has(e) || (Jd.add(e), l = { rel: l, crossOrigin: a, href: t }, u.querySelector(e) === null && (t = u.createElement("link"), jl(t, "link", l), Dl(t), u.head.appendChild(t)));
    }
  }
  function Um(l) {
    Wt.D(l), wd("dns-prefetch", l, null);
  }
  function Nm(l, t) {
    Wt.C(l, t), wd("preconnect", l, t);
  }
  function Hm(l, t, a) {
    Wt.L(l, t, a);
    var u = _u;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + ot(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (e += '[imagesrcset="' + ot(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (e += '[imagesizes="' + ot(
        a.imageSizes
      ) + '"]')) : e += '[href="' + ot(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = Eu(l);
          break;
        case "script":
          n = Tu(l);
      }
      bt.has(n) || (l = N(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : l,
          as: t
        },
        a
      ), bt.set(n, l), u.querySelector(e) !== null || t === "style" && u.querySelector(me(n)) || t === "script" && u.querySelector(ve(n)) || (t = u.createElement("link"), jl(t, "link", l), Dl(t), u.head.appendChild(t)));
    }
  }
  function Rm(l, t) {
    Wt.m(l, t);
    var a = _u;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + ot(u) + '"][href="' + ot(l) + '"]', n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Tu(l);
      }
      if (!bt.has(n) && (l = N({ rel: "modulepreload", href: l }, t), bt.set(n, l), a.querySelector(e) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(ve(n)))
              return;
        }
        u = a.createElement("link"), jl(u, "link", l), Dl(u), a.head.appendChild(u);
      }
    }
  }
  function Cm(l, t, a) {
    Wt.S(l, t, a);
    var u = _u;
    if (u && l) {
      var e = La(u).hoistableStyles, n = Eu(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var i = { loading: 0, preload: null };
        if (f = u.querySelector(
          me(n)
        ))
          i.loading = 5;
        else {
          l = N(
            { rel: "stylesheet", href: l, "data-precedence": t },
            a
          ), (a = bt.get(n)) && Fi(l, a);
          var c = f = u.createElement("link");
          Dl(c), jl(c, "link", l), c._p = new Promise(function(m, g) {
            c.onload = m, c.onerror = g;
          }), c.addEventListener("load", function() {
            i.loading |= 1;
          }), c.addEventListener("error", function() {
            i.loading |= 2;
          }), i.loading |= 4, Dn(f, t, u);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: i
        }, e.set(n, f);
      }
    }
  }
  function qm(l, t) {
    Wt.X(l, t);
    var a = _u;
    if (a && l) {
      var u = La(a).hoistableScripts, e = Tu(l), n = u.get(e);
      n || (n = a.querySelector(ve(e)), n || (l = N({ src: l, async: !0 }, t), (t = bt.get(e)) && ki(l, t), n = a.createElement("script"), Dl(n), jl(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function Ym(l, t) {
    Wt.M(l, t);
    var a = _u;
    if (a && l) {
      var u = La(a).hoistableScripts, e = Tu(l), n = u.get(e);
      n || (n = a.querySelector(ve(e)), n || (l = N({ src: l, async: !0, type: "module" }, t), (t = bt.get(e)) && ki(l, t), n = a.createElement("script"), Dl(n), jl(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function Wd(l, t, a, u) {
    var e = (e = Q.current) ? Mn(e) : null;
    if (!e) throw Error(h(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Eu(a.href), a = La(
          e
        ).hoistableStyles, u = a.get(t), u || (u = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          l = Eu(a.href);
          var n = La(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            me(l)
          )) && !n._p && (f.instance = n, f.state.loading = 5), bt.has(l) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, bt.set(l, a), n || Bm(
            e,
            l,
            a,
            f.state
          ))), t && u === null)
            throw Error(h(528, ""));
          return f;
        }
        if (t && u !== null)
          throw Error(h(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Tu(a), a = La(
          e
        ).hoistableScripts, u = a.get(t), u || (u = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(h(444, l));
    }
  }
  function Eu(l) {
    return 'href="' + ot(l) + '"';
  }
  function me(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function $d(l) {
    return N({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Bm(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? u.loading = 1 : (t = l.createElement("link"), u.preload = t, t.addEventListener("load", function() {
      return u.loading |= 1;
    }), t.addEventListener("error", function() {
      return u.loading |= 2;
    }), jl(t, "link", a), Dl(t), l.head.appendChild(t));
  }
  function Tu(l) {
    return '[src="' + ot(l) + '"]';
  }
  function ve(l) {
    return "script[async]" + l;
  }
  function Fd(l, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var u = l.querySelector(
            'style[data-href~="' + ot(a.href) + '"]'
          );
          if (u)
            return t.instance = u, Dl(u), u;
          var e = N({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return u = (l.ownerDocument || l).createElement(
            "style"
          ), Dl(u), jl(u, "style", e), Dn(u, a.precedence, l), t.instance = u;
        case "stylesheet":
          e = Eu(a.href);
          var n = l.querySelector(
            me(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Dl(n), n;
          u = $d(a), (e = bt.get(e)) && Fi(u, e), n = (l.ownerDocument || l).createElement("link"), Dl(n);
          var f = n;
          return f._p = new Promise(function(i, c) {
            f.onload = i, f.onerror = c;
          }), jl(n, "link", u), t.state.loading |= 4, Dn(n, a.precedence, l), t.instance = n;
        case "script":
          return n = Tu(a.src), (e = l.querySelector(
            ve(n)
          )) ? (t.instance = e, Dl(e), e) : (u = a, (e = bt.get(n)) && (u = N({}, a), ki(u, e)), l = l.ownerDocument || l, e = l.createElement("script"), Dl(e), jl(e, "link", u), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(h(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (u = t.instance, t.state.loading |= 4, Dn(u, a.precedence, l));
    return t.instance;
  }
  function Dn(l, t, a) {
    for (var u = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = u.length ? u[u.length - 1] : null, n = e, f = 0; f < u.length; f++) {
      var i = u[f];
      if (i.dataset.precedence === t) n = i;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
  }
  function Fi(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function ki(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Un = null;
  function kd(l, t, a) {
    if (Un === null) {
      var u = /* @__PURE__ */ new Map(), e = Un = /* @__PURE__ */ new Map();
      e.set(a, u);
    } else
      e = Un, u = e.get(a), u || (u = /* @__PURE__ */ new Map(), e.set(a, u));
    if (u.has(l)) return u;
    for (u.set(l, null), a = a.getElementsByTagName(l), e = 0; e < a.length; e++) {
      var n = a[e];
      if (!(n[Nu] || n[ql] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var i = u.get(f);
        i ? i.push(n) : u.set(f, [n]);
      }
    }
    return u;
  }
  function Id(l, t, a) {
    l = l.ownerDocument || l, l.head.insertBefore(
      a,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function xm(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Pd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function jm(l, t, a, u) {
    if (a.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var e = Eu(u.href), n = t.querySelector(
          me(e)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Nn.bind(l), t.then(l, l)), a.state.loading |= 4, a.instance = n, Dl(n);
          return;
        }
        n = t.ownerDocument || t, u = $d(u), (e = bt.get(e)) && Fi(u, e), n = n.createElement("link"), Dl(n);
        var f = n;
        f._p = new Promise(function(i, c) {
          f.onload = i, f.onerror = c;
        }), jl(n, "link", u), a.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (l.count++, a = Nn.bind(l), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var Ii = 0;
  function Gm(l, t) {
    return l.stylesheets && l.count === 0 && Rn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(a) {
      var u = setTimeout(function() {
        if (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Ii === 0 && (Ii = 62500 * bm());
      var e = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > Ii ? 50 : 800) + t
      );
      return l.unsuspend = a, function() {
        l.unsuspend = null, clearTimeout(u), clearTimeout(e);
      };
    } : null;
  }
  function Nn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Rn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Hn = null;
  function Rn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Hn = /* @__PURE__ */ new Map(), t.forEach(Xm, l), Hn = null, Nn.call(l));
  }
  function Xm(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Hn.get(l);
      if (a) var u = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Hn.set(l, a);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (a.set(f.dataset.precedence, f), u = f);
        }
        u && a.set(null, u);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = a.get(f) || u, n === u && a.set(null, e), a.set(f, e), this.count++, u = Nn.bind(this), e.addEventListener("load", u), e.addEventListener("error", u), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var he = {
    $$typeof: vl,
    Provider: null,
    Consumer: null,
    _currentValue: C,
    _currentValue2: C,
    _threadCount: 0
  };
  function Qm(l, t, a, u, e, n, f, i, c) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Jn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Jn(0), this.hiddenUpdates = Jn(null), this.identifierPrefix = u, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function lo(l, t, a, u, e, n, f, i, c, m, g, z) {
    return l = new Qm(
      l,
      t,
      a,
      f,
      c,
      m,
      g,
      z,
      i
    ), t = 1, n === !0 && (t |= 24), n = ut(3, null, null, t), l.current = n, n.stateNode = l, t = Hf(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: u,
      isDehydrated: a,
      cache: t
    }, Yf(n), l;
  }
  function to(l) {
    return l ? (l = lu, l) : lu;
  }
  function ao(l, t, a, u, e, n) {
    e = to(e), u.context === null ? u.context = e : u.pendingContext = e, u = ua(t), u.payload = { element: a }, n = n === void 0 ? null : n, n !== null && (u.callback = n), a = ea(l, u, t), a !== null && (Il(a, l, t), wu(a, l, t));
  }
  function uo(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Pi(l, t) {
    uo(l, t), (l = l.alternate) && uo(l, t);
  }
  function eo(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ma(l, 67108864);
      t !== null && Il(t, l, 67108864), Pi(l, 67108864);
    }
  }
  function no(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ct();
      t = wn(t);
      var a = Ma(l, t);
      a !== null && Il(a, l, t), Pi(l, t);
    }
  }
  var Cn = !0;
  function Zm(l, t, a, u) {
    var e = S.T;
    S.T = null;
    var n = A.p;
    try {
      A.p = 2, lc(l, t, a, u);
    } finally {
      A.p = n, S.T = e;
    }
  }
  function Vm(l, t, a, u) {
    var e = S.T;
    S.T = null;
    var n = A.p;
    try {
      A.p = 8, lc(l, t, a, u);
    } finally {
      A.p = n, S.T = e;
    }
  }
  function lc(l, t, a, u) {
    if (Cn) {
      var e = tc(u);
      if (e === null)
        Xi(
          l,
          t,
          u,
          qn,
          a
        ), io(l, u);
      else if (Km(
        e,
        l,
        t,
        a,
        u
      ))
        u.stopPropagation();
      else if (io(l, u), t & 4 && -1 < Lm.indexOf(l)) {
        for (; e !== null; ) {
          var n = Va(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = Ea(n.pendingLanes);
                  if (f !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; f; ) {
                      var c = 1 << 31 - tt(f);
                      i.entanglements[1] |= c, f &= ~c;
                    }
                    Ut(n), (F & 6) === 0 && (rn = Pl() + 500, se(0));
                  }
                }
                break;
              case 31:
              case 13:
                i = Ma(n, 2), i !== null && Il(i, n, 2), Sn(), Pi(n, 2);
            }
          if (n = tc(u), n === null && Xi(
            l,
            t,
            u,
            qn,
            a
          ), n === e) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else
        Xi(
          l,
          t,
          u,
          null,
          a
        );
    }
  }
  function tc(l) {
    return l = af(l), ac(l);
  }
  var qn = null;
  function ac(l) {
    if (qn = null, l = Za(l), l !== null) {
      var t = Sl(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (l = il(t), l !== null) return l;
          l = null;
        } else if (a === 31) {
          if (l = hl(t), l !== null) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return qn = l, null;
  }
  function fo(l) {
    switch (l) {
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
        switch (Uo()) {
          case vc:
            return 2;
          case hc:
            return 8;
          case Ee:
          case No:
            return 32;
          case rc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var uc = !1, ha = null, ra = null, ga = null, re = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), Sa = [], Lm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function io(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ha = null;
        break;
      case "dragenter":
      case "dragleave":
        ra = null;
        break;
      case "mouseover":
      case "mouseout":
        ga = null;
        break;
      case "pointerover":
      case "pointerout":
        re.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ge.delete(t.pointerId);
    }
  }
  function Se(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: u,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = Va(t), t !== null && eo(t)), l) : (l.eventSystemFlags |= u, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function Km(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return ha = Se(
          ha,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "dragenter":
        return ra = Se(
          ra,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "mouseover":
        return ga = Se(
          ga,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return re.set(
          n,
          Se(
            re.get(n) || null,
            l,
            t,
            a,
            u,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, ge.set(
          n,
          Se(
            ge.get(n) || null,
            l,
            t,
            a,
            u,
            e
          )
        ), !0;
    }
    return !1;
  }
  function co(l) {
    var t = Za(l.target);
    if (t !== null) {
      var a = Sl(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = il(a), t !== null) {
            l.blockedOn = t, Ec(l.priority, function() {
              no(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = hl(a), t !== null) {
            l.blockedOn = t, Ec(l.priority, function() {
              no(a);
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Yn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = tc(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(
          a.type,
          a
        );
        tf = u, a.target.dispatchEvent(u), tf = null;
      } else
        return t = Va(a), t !== null && eo(t), l.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function so(l, t, a) {
    Yn(l) && a.delete(t);
  }
  function Jm() {
    uc = !1, ha !== null && Yn(ha) && (ha = null), ra !== null && Yn(ra) && (ra = null), ga !== null && Yn(ga) && (ga = null), re.forEach(so), ge.forEach(so);
  }
  function Bn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, uc || (uc = !0, T.unstable_scheduleCallback(
      T.unstable_NormalPriority,
      Jm
    )));
  }
  var xn = null;
  function oo(l) {
    xn !== l && (xn = l, T.unstable_scheduleCallback(
      T.unstable_NormalPriority,
      function() {
        xn === l && (xn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t], u = l[t + 1], e = l[t + 2];
          if (typeof u != "function") {
            if (ac(u || a) === null)
              continue;
            break;
          }
          var n = Va(a);
          n !== null && (l.splice(t, 3), t -= 3, ti(
            n,
            {
              pending: !0,
              data: e,
              method: a.method,
              action: u
            },
            u,
            e
          ));
        }
      }
    ));
  }
  function Au(l) {
    function t(c) {
      return Bn(c, l);
    }
    ha !== null && Bn(ha, l), ra !== null && Bn(ra, l), ga !== null && Bn(ga, l), re.forEach(t), ge.forEach(t);
    for (var a = 0; a < Sa.length; a++) {
      var u = Sa[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < Sa.length && (a = Sa[0], a.blockedOn === null); )
      co(a), a.blockedOn === null && Sa.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null)
      for (u = 0; u < a.length; u += 3) {
        var e = a[u], n = a[u + 1], f = e[Jl] || null;
        if (typeof n == "function")
          f || oo(a);
        else if (f) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Jl] || null)
              i = f.formAction;
            else if (ac(e) !== null) continue;
          } else i = f.action;
          typeof i == "function" ? a[u + 1] = i : (a.splice(u, 3), u -= 3), oo(a);
        }
      }
  }
  function yo() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(f) {
            return e = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      e !== null && (e(), e = null), u || setTimeout(a, 20);
    }
    function a() {
      if (!u && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var u = !1, e = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        u = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), e !== null && (e(), e = null);
      };
    }
  }
  function ec(l) {
    this._internalRoot = l;
  }
  jn.prototype.render = ec.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(h(409));
    var a = t.current, u = ct();
    ao(a, u, l, t, null, null);
  }, jn.prototype.unmount = ec.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      ao(l.current, 2, null, l, null, null), Sn(), t[Qa] = null;
    }
  };
  function jn(l) {
    this._internalRoot = l;
  }
  jn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = _c();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < Sa.length && t !== 0 && t < Sa[a].priority; a++) ;
      Sa.splice(a, 0, l), a === 0 && co(l);
    }
  };
  var mo = G.version;
  if (mo !== "19.2.5")
    throw Error(
      h(
        527,
        mo,
        "19.2.5"
      )
    );
  A.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(h(188)) : (l = Object.keys(l).join(","), Error(h(268, l)));
    return l = E(t), l = l !== null ? w(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var wm = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.2.5"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gn.isDisabled && Gn.supportsFiber)
      try {
        Mu = Gn.inject(
          wm
        ), lt = Gn;
      } catch {
      }
  }
  return ze.createRoot = function(l, t) {
    if (!ml(l)) throw Error(h(299));
    var a = !1, u = "", e = b0, n = z0, f = _0;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = lo(
      l,
      1,
      !1,
      null,
      null,
      a,
      u,
      null,
      e,
      n,
      f,
      yo
    ), l[Qa] = t.current, Gi(l), new ec(t);
  }, ze.hydrateRoot = function(l, t, a) {
    if (!ml(l)) throw Error(h(299));
    var u = !1, e = "", n = b0, f = z0, i = _0, c = null;
    return a != null && (a.unstable_strictMode === !0 && (u = !0), a.identifierPrefix !== void 0 && (e = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (f = a.onCaughtError), a.onRecoverableError !== void 0 && (i = a.onRecoverableError), a.formState !== void 0 && (c = a.formState)), t = lo(
      l,
      1,
      !0,
      t,
      a ?? null,
      u,
      e,
      c,
      n,
      f,
      i,
      yo
    ), t.context = to(null), a = t.current, u = ct(), u = wn(u), e = ua(u), e.callback = null, ea(a, e, u), a = u, t.current.lanes = a, Uu(t, a), Ut(t), l[Qa] = t.current, Gi(l), new jn(t);
  }, ze.version = "19.2.5", ze;
}
var To;
function ev() {
  if (To) return fc.exports;
  To = 1;
  function T() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T);
      } catch (G) {
        console.error(G);
      }
  }
  return T(), fc.exports = uv(), fc.exports;
}
var nv = ev(), pu = oc();
const fv = {
  0: { icon: "☀️", label: "Clear sky" },
  1: { icon: "🌤️", label: "Mainly clear" },
  2: { icon: "⛅", label: "Partly cloudy" },
  3: { icon: "☁️", label: "Overcast" },
  45: { icon: "🌫️", label: "Fog" },
  48: { icon: "🌫️", label: "Depositing rime fog" },
  51: { icon: "🌦️", label: "Light drizzle" },
  53: { icon: "🌦️", label: "Moderate drizzle" },
  55: { icon: "🌦️", label: "Dense drizzle" },
  56: { icon: "🌧️", label: "Light freezing drizzle" },
  57: { icon: "🌧️", label: "Dense freezing drizzle" },
  61: { icon: "🌧️", label: "Light rain" },
  63: { icon: "🌧️", label: "Moderate rain" },
  65: { icon: "🌧️", label: "Heavy rain" },
  66: { icon: "🌧️", label: "Light freezing rain" },
  67: { icon: "🌧️", label: "Heavy freezing rain" },
  71: { icon: "🌨️", label: "Light snow" },
  73: { icon: "🌨️", label: "Moderate snow" },
  75: { icon: "❄️", label: "Heavy snow" },
  77: { icon: "❄️", label: "Snow grains" },
  80: { icon: "🌦️", label: "Light rain showers" },
  81: { icon: "🌧️", label: "Moderate rain showers" },
  82: { icon: "⛈️", label: "Violent rain showers" },
  85: { icon: "🌨️", label: "Light snow showers" },
  86: { icon: "❄️", label: "Heavy snow showers" },
  95: { icon: "⛈️", label: "Thunderstorm" },
  96: { icon: "⛈️", label: "Thunderstorm with hail" },
  99: { icon: "⛈️", label: "Severe thunderstorm with hail" }
}, Ao = { icon: "🌡️", label: "Current conditions" }, iv = (T) => T === void 0 ? Ao : fv[T] ?? Ao, cv = (T) => T === "indigo" || T === "violet" || T === "cyan" || T === "emerald", sv = () => new Promise((T, G) => {
  if (!("geolocation" in navigator)) {
    G(new Error("Geolocation is not supported in this browser."));
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (Y) => T(Y.coords),
    (Y) => {
      Y.code === Y.PERMISSION_DENIED ? G(
        new Error("Location permission was denied. Update site settings to allow location access, then try again.")
      ) : Y.code === Y.POSITION_UNAVAILABLE ? G(new Error("Your location is currently unavailable.")) : Y.code === Y.TIMEOUT ? G(new Error("Locating you took too long. Please try again.")) : G(new Error("Could not determine your location."));
    },
    { enableHighAccuracy: !1, timeout: 1e4, maximumAge: 6e4 }
  );
});
function dv({
  sdk: T,
  widgetServiceSdk: G
}) {
  const [Y, h] = pu.useState(T.getProps()), [ml, Sl] = pu.useState(0), [il, hl] = pu.useState({ status: "idle" });
  pu.useEffect(() => T.on("propsChanged", h), [T]);
  const U = Y.units === "fahrenheit" ? "fahrenheit" : "celsius", E = cv(Y.accent) ? Y.accent : "indigo";
  pu.useEffect(() => {
    let N = !1;
    return (async () => {
      N || hl({ status: "requesting-location" });
      let Nl;
      try {
        Nl = await sv();
      } catch (El) {
        N || hl({
          status: "error",
          message: El instanceof Error ? El.message : "Could not determine your location."
        });
        return;
      }
      if (!N) {
        hl({ status: "loading" });
        try {
          const El = {
            latitude: String(Nl.latitude),
            longitude: String(Nl.longitude)
          }, Hl = U === "fahrenheit" ? "mph" : "kmh", [Gl, cl] = await Promise.all([
            G.connectors.execute({
              permalink: "weather-now-forecast",
              method: "GET",
              queryParams: {
                ...El,
                current: "temperature_2m,weather_code,is_day,wind_speed_10m,relative_humidity_2m",
                temperature_unit: U,
                wind_speed_unit: Hl,
                timezone: "auto"
              }
            }),
            G.connectors.execute({
              permalink: "weather-now-reverse-geocode",
              method: "GET",
              queryParams: { ...El, localityLanguage: "en" }
            })
          ]);
          if (N) return;
          const Rl = Gl == null ? void 0 : Gl.current, vl = Gl == null ? void 0 : Gl.current_units;
          if ((Rl == null ? void 0 : Rl.temperature_2m) === void 0 || Rl.weather_code === void 0) {
            hl({ status: "error", message: "Weather data was incomplete. Please try again." });
            return;
          }
          const Ll = {
            tempValue: Math.round(Rl.temperature_2m),
            tempUnit: (vl == null ? void 0 : vl.temperature_2m) ?? (U === "fahrenheit" ? "°F" : "°C"),
            windValue: Math.round(Rl.wind_speed_10m ?? 0),
            windUnit: (vl == null ? void 0 : vl.wind_speed_10m) ?? (U === "fahrenheit" ? "mph" : "km/h"),
            humidity: Math.round(Rl.relative_humidity_2m ?? 0),
            weatherCode: Rl.weather_code
          }, st = (cl == null ? void 0 : cl.city) ?? (cl == null ? void 0 : cl.locality) ?? "Your location", Xl = [cl == null ? void 0 : cl.principalSubdivision, cl == null ? void 0 : cl.countryName].filter(
            (Cl) => typeof Cl == "string" && Cl.length > 0
          ), X = { primary: st, secondary: Xl.join(", ") };
          hl({ status: "ready", weather: Ll, place: X });
        } catch {
          N || hl({
            status: "error",
            message: "Couldn't reach the weather service. Please try again."
          });
        }
      }
    })(), () => {
      N = !0;
    };
  }, [U, G, ml]);
  const w = pu.useCallback(() => Sl((N) => N + 1), []);
  return /* @__PURE__ */ k.jsx("div", { className: `weather-stage accent-${E}`, children: /* @__PURE__ */ k.jsx("article", { className: "weather-card", role: "region", "aria-label": "Current weather", children: /* @__PURE__ */ k.jsx("div", { className: "weather-card__inner", "aria-live": "polite", "aria-busy": il.status === "loading" || il.status === "requesting-location", children: il.status === "ready" ? /* @__PURE__ */ k.jsx(mv, { weather: il.weather, place: il.place }) : il.status === "error" ? /* @__PURE__ */ k.jsx(yv, { message: il.message, onRetry: w }) : /* @__PURE__ */ k.jsx(
    ov,
    {
      label: il.status === "requesting-location" ? "Asking for your location…" : "Fetching weather…"
    }
  ) }) }) });
}
function ov({ label: T }) {
  return /* @__PURE__ */ k.jsxs("div", { className: "weather-state", role: "status", children: [
    /* @__PURE__ */ k.jsx("div", { className: "weather-spinner", "aria-hidden": "true" }),
    /* @__PURE__ */ k.jsx("p", { className: "weather-state__label", children: T })
  ] });
}
function yv({ message: T, onRetry: G }) {
  return /* @__PURE__ */ k.jsxs("div", { className: "weather-state", role: "alert", children: [
    /* @__PURE__ */ k.jsx("div", { className: "weather-state__icon", "aria-hidden": "true", children: "⚠️" }),
    /* @__PURE__ */ k.jsx("p", { className: "weather-state__label", children: T }),
    /* @__PURE__ */ k.jsx("button", { type: "button", className: "weather-button", onClick: G, children: "Try again" })
  ] });
}
function mv({ weather: T, place: G }) {
  const { icon: Y, label: h } = iv(T.weatherCode);
  return /* @__PURE__ */ k.jsxs("div", { className: "weather-ready", children: [
    /* @__PURE__ */ k.jsx("div", { className: "weather-ready__icon", "aria-hidden": "true", children: Y }),
    /* @__PURE__ */ k.jsxs("div", { className: "weather-ready__temperature", children: [
      /* @__PURE__ */ k.jsx("span", { className: "weather-ready__temp-value", children: T.tempValue }),
      /* @__PURE__ */ k.jsx("span", { className: "weather-ready__temp-unit", children: T.tempUnit })
    ] }),
    /* @__PURE__ */ k.jsx("p", { className: "weather-ready__condition", children: h }),
    /* @__PURE__ */ k.jsx("h2", { className: "weather-ready__place", children: G.primary }),
    G.secondary && /* @__PURE__ */ k.jsx("p", { className: "weather-ready__place-secondary", children: G.secondary }),
    /* @__PURE__ */ k.jsxs("dl", { className: "weather-ready__stats", children: [
      /* @__PURE__ */ k.jsxs("div", { className: "weather-stat", children: [
        /* @__PURE__ */ k.jsx("dt", { className: "weather-stat__label", children: "Wind" }),
        /* @__PURE__ */ k.jsxs("dd", { className: "weather-stat__value", children: [
          T.windValue,
          " ",
          /* @__PURE__ */ k.jsx("span", { className: "weather-stat__unit", children: T.windUnit })
        ] })
      ] }),
      /* @__PURE__ */ k.jsxs("div", { className: "weather-stat", children: [
        /* @__PURE__ */ k.jsx("dt", { className: "weather-stat__label", children: "Humidity" }),
        /* @__PURE__ */ k.jsxs("dd", { className: "weather-stat__value", children: [
          T.humidity,
          /* @__PURE__ */ k.jsx("span", { className: "weather-stat__unit", children: "%" })
        ] })
      ] })
    ] })
  ] });
}
let vv = km;
const po = /* @__PURE__ */ new Set();
async function hv(T) {
  await T.whenReady();
  const G = document.createElement("style");
  G.textContent = vv, po.add(G), T.shadowRoot.insertBefore(G, T.shadowRoot.firstChild);
  const Y = new window.WidgetServiceSDK(), h = nv.createRoot(T.getContainer());
  h.render(/* @__PURE__ */ k.jsx(dv, { sdk: T, widgetServiceSdk: Y })), T.on("destroy", () => {
    po.delete(G), G.remove(), h.unmount();
  });
}
export {
  hv as init
};
