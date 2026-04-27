var fc = { exports: {} }, be = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hm;
function Wd() {
  if (hm) return be;
  hm = 1;
  var r = Symbol.for("react.transitional.element"), G = Symbol.for("react.fragment");
  function Z(o, W, gl) {
    var ml = null;
    if (gl !== void 0 && (ml = "" + gl), W.key !== void 0 && (ml = "" + W.key), "key" in W) {
      gl = {};
      for (var Ml in W)
        Ml !== "key" && (gl[Ml] = W[Ml]);
    } else gl = W;
    return W = gl.ref, {
      $$typeof: r,
      type: o,
      key: ml,
      ref: W !== void 0 ? W : null,
      props: gl
    };
  }
  return be.Fragment = G, be.jsx = Z, be.jsxs = Z, be;
}
var om;
function $d() {
  return om || (om = 1, fc.exports = Wd()), fc.exports;
}
var dl = $d();
const Fd = ".weather-stage{display:flex;align-items:center;justify-content:center;width:100%;min-height:60vh;padding:2rem 1rem;box-sizing:border-box;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif}.weather-card{width:100%;max-width:380px;border-radius:20px;background:linear-gradient(160deg,#fff,#eef4ff 60%,#e0ecff);box-shadow:0 28px 60px -28px #0f274e73,0 12px 24px -16px #0f274e38,0 0 0 1px #0f274e0f;overflow:hidden}.weather-card .card-content{padding:2.25rem 1.75rem}.weather-emoji{font-size:4rem;line-height:1;margin:0 0 .5rem}.weather-temp{font-size:4rem!important;font-weight:700!important;letter-spacing:-.04em;margin-bottom:.25rem!important;color:#1d2b4f}.weather-unit{font-size:2rem;font-weight:600;margin-left:.25rem;color:#4a5b86}.weather-stats .heading{letter-spacing:.1em;font-size:.7rem;text-transform:uppercase;color:#6b7280;margin-bottom:.25rem}.weather-stat-value{font-size:1rem;font-weight:600;color:#1d2b4f;margin:0}.weather-place{font-size:.95rem;font-weight:600;color:#1d2b4f;margin-top:.85rem;letter-spacing:.01em}";
var ic = { exports: {} }, ze = {}, cc = { exports: {} }, sc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gm;
function kd() {
  return gm || (gm = 1, (function(r) {
    function G(b, _) {
      var C = b.length;
      b.push(_);
      l: for (; 0 < C; ) {
        var al = C - 1 >>> 1, il = b[al];
        if (0 < W(il, _))
          b[al] = _, b[C] = il, C = al;
        else break l;
      }
    }
    function Z(b) {
      return b.length === 0 ? null : b[0];
    }
    function o(b) {
      if (b.length === 0) return null;
      var _ = b[0], C = b.pop();
      if (C !== _) {
        b[0] = C;
        l: for (var al = 0, il = b.length, y = il >>> 1; al < y; ) {
          var T = 2 * (al + 1) - 1, O = b[T], D = T + 1, B = b[D];
          if (0 > W(O, C))
            D < il && 0 > W(B, O) ? (b[al] = B, b[D] = C, al = D) : (b[al] = O, b[T] = C, al = T);
          else if (D < il && 0 > W(B, C))
            b[al] = B, b[D] = C, al = D;
          else break l;
        }
      }
      return _;
    }
    function W(b, _) {
      var C = b.sortIndex - _.sortIndex;
      return C !== 0 ? C : b.id - _.id;
    }
    if (r.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var gl = performance;
      r.unstable_now = function() {
        return gl.now();
      };
    } else {
      var ml = Date, Ml = ml.now();
      r.unstable_now = function() {
        return ml.now() - Ml;
      };
    }
    var p = [], A = [], w = 1, N = null, ul = 3, Dl = !1, pl = !1, El = !1, rt = !1, I = typeof setTimeout == "function" ? setTimeout : null, Sl = typeof clearTimeout == "function" ? clearTimeout : null, jl = typeof setImmediate < "u" ? setImmediate : null;
    function it(b) {
      for (var _ = Z(A); _ !== null; ) {
        if (_.callback === null) o(A);
        else if (_.startTime <= b)
          o(A), _.sortIndex = _.expirationTime, G(p, _);
        else break;
        _ = Z(A);
      }
    }
    function _t(b) {
      if (El = !1, it(b), !pl)
        if (Z(p) !== null)
          pl = !0, xl || (xl = !0, Vl());
        else {
          var _ = Z(A);
          _ !== null && bt(_t, _.startTime - b);
        }
    }
    var xl = !1, K = -1, Zl = 5, Ot = -1;
    function xu() {
      return rt ? !0 : !(r.unstable_now() - Ot < Zl);
    }
    function Mt() {
      if (rt = !1, xl) {
        var b = r.unstable_now();
        Ot = b;
        var _ = !0;
        try {
          l: {
            pl = !1, El && (El = !1, Sl(K), K = -1), Dl = !0;
            var C = ul;
            try {
              t: {
                for (it(b), N = Z(p); N !== null && !(N.expirationTime > b && xu()); ) {
                  var al = N.callback;
                  if (typeof al == "function") {
                    N.callback = null, ul = N.priorityLevel;
                    var il = al(
                      N.expirationTime <= b
                    );
                    if (b = r.unstable_now(), typeof il == "function") {
                      N.callback = il, it(b), _ = !0;
                      break t;
                    }
                    N === Z(p) && o(p), it(b);
                  } else o(p);
                  N = Z(p);
                }
                if (N !== null) _ = !0;
                else {
                  var y = Z(A);
                  y !== null && bt(
                    _t,
                    y.startTime - b
                  ), _ = !1;
                }
              }
              break l;
            } finally {
              N = null, ul = C, Dl = !1;
            }
            _ = void 0;
          }
        } finally {
          _ ? Vl() : xl = !1;
        }
      }
    }
    var Vl;
    if (typeof jl == "function")
      Vl = function() {
        jl(Mt);
      };
    else if (typeof MessageChannel < "u") {
      var Eu = new MessageChannel(), Ht = Eu.port2;
      Eu.port1.onmessage = Mt, Vl = function() {
        Ht.postMessage(null);
      };
    } else
      Vl = function() {
        I(Mt, 0);
      };
    function bt(b, _) {
      K = I(function() {
        b(r.unstable_now());
      }, _);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(b) {
      b.callback = null;
    }, r.unstable_forceFrameRate = function(b) {
      0 > b || 125 < b ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Zl = 0 < b ? Math.floor(1e3 / b) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return ul;
    }, r.unstable_next = function(b) {
      switch (ul) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = ul;
      }
      var C = ul;
      ul = _;
      try {
        return b();
      } finally {
        ul = C;
      }
    }, r.unstable_requestPaint = function() {
      rt = !0;
    }, r.unstable_runWithPriority = function(b, _) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var C = ul;
      ul = b;
      try {
        return _();
      } finally {
        ul = C;
      }
    }, r.unstable_scheduleCallback = function(b, _, C) {
      var al = r.unstable_now();
      switch (typeof C == "object" && C !== null ? (C = C.delay, C = typeof C == "number" && 0 < C ? al + C : al) : C = al, b) {
        case 1:
          var il = -1;
          break;
        case 2:
          il = 250;
          break;
        case 5:
          il = 1073741823;
          break;
        case 4:
          il = 1e4;
          break;
        default:
          il = 5e3;
      }
      return il = C + il, b = {
        id: w++,
        callback: _,
        priorityLevel: b,
        startTime: C,
        expirationTime: il,
        sortIndex: -1
      }, C > al ? (b.sortIndex = C, G(A, b), Z(p) === null && b === Z(A) && (El ? (Sl(K), K = -1) : El = !0, bt(_t, C - al))) : (b.sortIndex = il, G(p, b), pl || Dl || (pl = !0, xl || (xl = !0, Vl()))), b;
    }, r.unstable_shouldYield = xu, r.unstable_wrapCallback = function(b) {
      var _ = ul;
      return function() {
        var C = ul;
        ul = _;
        try {
          return b.apply(this, arguments);
        } finally {
          ul = C;
        }
      };
    };
  })(sc)), sc;
}
var Sm;
function Id() {
  return Sm || (Sm = 1, cc.exports = kd()), cc.exports;
}
var yc = { exports: {} }, q = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rm;
function Pd() {
  if (rm) return q;
  rm = 1;
  var r = Symbol.for("react.transitional.element"), G = Symbol.for("react.portal"), Z = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), gl = Symbol.for("react.consumer"), ml = Symbol.for("react.context"), Ml = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), A = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), N = Symbol.for("react.activity"), ul = Symbol.iterator;
  function Dl(y) {
    return y === null || typeof y != "object" ? null : (y = ul && y[ul] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var pl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, El = Object.assign, rt = {};
  function I(y, T, O) {
    this.props = y, this.context = T, this.refs = rt, this.updater = O || pl;
  }
  I.prototype.isReactComponent = {}, I.prototype.setState = function(y, T) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, T, "setState");
  }, I.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function Sl() {
  }
  Sl.prototype = I.prototype;
  function jl(y, T, O) {
    this.props = y, this.context = T, this.refs = rt, this.updater = O || pl;
  }
  var it = jl.prototype = new Sl();
  it.constructor = jl, El(it, I.prototype), it.isPureReactComponent = !0;
  var _t = Array.isArray;
  function xl() {
  }
  var K = { H: null, A: null, T: null, S: null }, Zl = Object.prototype.hasOwnProperty;
  function Ot(y, T, O) {
    var D = O.ref;
    return {
      $$typeof: r,
      type: y,
      key: T,
      ref: D !== void 0 ? D : null,
      props: O
    };
  }
  function xu(y, T) {
    return Ot(y.type, T, y.props);
  }
  function Mt(y) {
    return typeof y == "object" && y !== null && y.$$typeof === r;
  }
  function Vl(y) {
    var T = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(O) {
      return T[O];
    });
  }
  var Eu = /\/+/g;
  function Ht(y, T) {
    return typeof y == "object" && y !== null && y.key != null ? Vl("" + y.key) : T.toString(36);
  }
  function bt(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(xl, xl) : (y.status = "pending", y.then(
          function(T) {
            y.status === "pending" && (y.status = "fulfilled", y.value = T);
          },
          function(T) {
            y.status === "pending" && (y.status = "rejected", y.reason = T);
          }
        )), y.status) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function b(y, T, O, D, B) {
    var X = typeof y;
    (X === "undefined" || X === "boolean") && (y = null);
    var P = !1;
    if (y === null) P = !0;
    else
      switch (X) {
        case "bigint":
        case "string":
        case "number":
          P = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case r:
            case G:
              P = !0;
              break;
            case w:
              return P = y._init, b(
                P(y._payload),
                T,
                O,
                D,
                B
              );
          }
      }
    if (P)
      return B = B(y), P = D === "" ? "." + Ht(y, 0) : D, _t(B) ? (O = "", P != null && (O = P.replace(Eu, "$&/") + "/"), b(B, T, O, "", function(Ma) {
        return Ma;
      })) : B != null && (Mt(B) && (B = xu(
        B,
        O + (B.key == null || y && y.key === B.key ? "" : ("" + B.key).replace(
          Eu,
          "$&/"
        ) + "/") + P
      )), T.push(B)), 1;
    P = 0;
    var Xl = D === "" ? "." : D + ":";
    if (_t(y))
      for (var rl = 0; rl < y.length; rl++)
        D = y[rl], X = Xl + Ht(D, rl), P += b(
          D,
          T,
          O,
          X,
          B
        );
    else if (rl = Dl(y), typeof rl == "function")
      for (y = rl.call(y), rl = 0; !(D = y.next()).done; )
        D = D.value, X = Xl + Ht(D, rl++), P += b(
          D,
          T,
          O,
          X,
          B
        );
    else if (X === "object") {
      if (typeof y.then == "function")
        return b(
          bt(y),
          T,
          O,
          D,
          B
        );
      throw T = String(y), Error(
        "Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return P;
  }
  function _(y, T, O) {
    if (y == null) return y;
    var D = [], B = 0;
    return b(y, D, "", "", function(X) {
      return T.call(O, X, B++);
    }), D;
  }
  function C(y) {
    if (y._status === -1) {
      var T = y._result;
      T = T(), T.then(
        function(O) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = O);
        },
        function(O) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = O);
        }
      ), y._status === -1 && (y._status = 0, y._result = T);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var al = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var T = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(T)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  }, il = {
    map: _,
    forEach: function(y, T, O) {
      _(
        y,
        function() {
          T.apply(this, arguments);
        },
        O
      );
    },
    count: function(y) {
      var T = 0;
      return _(y, function() {
        T++;
      }), T;
    },
    toArray: function(y) {
      return _(y, function(T) {
        return T;
      }) || [];
    },
    only: function(y) {
      if (!Mt(y))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return y;
    }
  };
  return q.Activity = N, q.Children = il, q.Component = I, q.Fragment = Z, q.Profiler = W, q.PureComponent = jl, q.StrictMode = o, q.Suspense = p, q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K, q.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return K.H.useMemoCache(y);
    }
  }, q.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, q.cacheSignal = function() {
    return null;
  }, q.cloneElement = function(y, T, O) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var D = El({}, y.props), B = y.key;
    if (T != null)
      for (X in T.key !== void 0 && (B = "" + T.key), T)
        !Zl.call(T, X) || X === "key" || X === "__self" || X === "__source" || X === "ref" && T.ref === void 0 || (D[X] = T[X]);
    var X = arguments.length - 2;
    if (X === 1) D.children = O;
    else if (1 < X) {
      for (var P = Array(X), Xl = 0; Xl < X; Xl++)
        P[Xl] = arguments[Xl + 2];
      D.children = P;
    }
    return Ot(y.type, B, D);
  }, q.createContext = function(y) {
    return y = {
      $$typeof: ml,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: gl,
      _context: y
    }, y;
  }, q.createElement = function(y, T, O) {
    var D, B = {}, X = null;
    if (T != null)
      for (D in T.key !== void 0 && (X = "" + T.key), T)
        Zl.call(T, D) && D !== "key" && D !== "__self" && D !== "__source" && (B[D] = T[D]);
    var P = arguments.length - 2;
    if (P === 1) B.children = O;
    else if (1 < P) {
      for (var Xl = Array(P), rl = 0; rl < P; rl++)
        Xl[rl] = arguments[rl + 2];
      B.children = Xl;
    }
    if (y && y.defaultProps)
      for (D in P = y.defaultProps, P)
        B[D] === void 0 && (B[D] = P[D]);
    return Ot(y, X, B);
  }, q.createRef = function() {
    return { current: null };
  }, q.forwardRef = function(y) {
    return { $$typeof: Ml, render: y };
  }, q.isValidElement = Mt, q.lazy = function(y) {
    return {
      $$typeof: w,
      _payload: { _status: -1, _result: y },
      _init: C
    };
  }, q.memo = function(y, T) {
    return {
      $$typeof: A,
      type: y,
      compare: T === void 0 ? null : T
    };
  }, q.startTransition = function(y) {
    var T = K.T, O = {};
    K.T = O;
    try {
      var D = y(), B = K.S;
      B !== null && B(O, D), typeof D == "object" && D !== null && typeof D.then == "function" && D.then(xl, al);
    } catch (X) {
      al(X);
    } finally {
      T !== null && O.types !== null && (T.types = O.types), K.T = T;
    }
  }, q.unstable_useCacheRefresh = function() {
    return K.H.useCacheRefresh();
  }, q.use = function(y) {
    return K.H.use(y);
  }, q.useActionState = function(y, T, O) {
    return K.H.useActionState(y, T, O);
  }, q.useCallback = function(y, T) {
    return K.H.useCallback(y, T);
  }, q.useContext = function(y) {
    return K.H.useContext(y);
  }, q.useDebugValue = function() {
  }, q.useDeferredValue = function(y, T) {
    return K.H.useDeferredValue(y, T);
  }, q.useEffect = function(y, T) {
    return K.H.useEffect(y, T);
  }, q.useEffectEvent = function(y) {
    return K.H.useEffectEvent(y);
  }, q.useId = function() {
    return K.H.useId();
  }, q.useImperativeHandle = function(y, T, O) {
    return K.H.useImperativeHandle(y, T, O);
  }, q.useInsertionEffect = function(y, T) {
    return K.H.useInsertionEffect(y, T);
  }, q.useLayoutEffect = function(y, T) {
    return K.H.useLayoutEffect(y, T);
  }, q.useMemo = function(y, T) {
    return K.H.useMemo(y, T);
  }, q.useOptimistic = function(y, T) {
    return K.H.useOptimistic(y, T);
  }, q.useReducer = function(y, T, O) {
    return K.H.useReducer(y, T, O);
  }, q.useRef = function(y) {
    return K.H.useRef(y);
  }, q.useState = function(y) {
    return K.H.useState(y);
  }, q.useSyncExternalStore = function(y, T, O) {
    return K.H.useSyncExternalStore(
      y,
      T,
      O
    );
  }, q.useTransition = function() {
    return K.H.useTransition();
  }, q.version = "19.2.5", q;
}
var bm;
function vc() {
  return bm || (bm = 1, yc.exports = Pd()), yc.exports;
}
var mc = { exports: {} }, Gl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zm;
function lh() {
  if (zm) return Gl;
  zm = 1;
  var r = vc();
  function G(p) {
    var A = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      A += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var w = 2; w < arguments.length; w++)
        A += "&args[]=" + encodeURIComponent(arguments[w]);
    }
    return "Minified React error #" + p + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Z() {
  }
  var o = {
    d: {
      f: Z,
      r: function() {
        throw Error(G(522));
      },
      D: Z,
      C: Z,
      L: Z,
      m: Z,
      X: Z,
      S: Z,
      M: Z
    },
    p: 0,
    findDOMNode: null
  }, W = Symbol.for("react.portal");
  function gl(p, A, w) {
    var N = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: W,
      key: N == null ? null : "" + N,
      children: p,
      containerInfo: A,
      implementation: w
    };
  }
  var ml = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Ml(p, A) {
    if (p === "font") return "";
    if (typeof A == "string")
      return A === "use-credentials" ? A : "";
  }
  return Gl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Gl.createPortal = function(p, A) {
    var w = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11)
      throw Error(G(299));
    return gl(p, A, null, w);
  }, Gl.flushSync = function(p) {
    var A = ml.T, w = o.p;
    try {
      if (ml.T = null, o.p = 2, p) return p();
    } finally {
      ml.T = A, o.p = w, o.d.f();
    }
  }, Gl.preconnect = function(p, A) {
    typeof p == "string" && (A ? (A = A.crossOrigin, A = typeof A == "string" ? A === "use-credentials" ? A : "" : void 0) : A = null, o.d.C(p, A));
  }, Gl.prefetchDNS = function(p) {
    typeof p == "string" && o.d.D(p);
  }, Gl.preinit = function(p, A) {
    if (typeof p == "string" && A && typeof A.as == "string") {
      var w = A.as, N = Ml(w, A.crossOrigin), ul = typeof A.integrity == "string" ? A.integrity : void 0, Dl = typeof A.fetchPriority == "string" ? A.fetchPriority : void 0;
      w === "style" ? o.d.S(
        p,
        typeof A.precedence == "string" ? A.precedence : void 0,
        {
          crossOrigin: N,
          integrity: ul,
          fetchPriority: Dl
        }
      ) : w === "script" && o.d.X(p, {
        crossOrigin: N,
        integrity: ul,
        fetchPriority: Dl,
        nonce: typeof A.nonce == "string" ? A.nonce : void 0
      });
    }
  }, Gl.preinitModule = function(p, A) {
    if (typeof p == "string")
      if (typeof A == "object" && A !== null) {
        if (A.as == null || A.as === "script") {
          var w = Ml(
            A.as,
            A.crossOrigin
          );
          o.d.M(p, {
            crossOrigin: w,
            integrity: typeof A.integrity == "string" ? A.integrity : void 0,
            nonce: typeof A.nonce == "string" ? A.nonce : void 0
          });
        }
      } else A == null && o.d.M(p);
  }, Gl.preload = function(p, A) {
    if (typeof p == "string" && typeof A == "object" && A !== null && typeof A.as == "string") {
      var w = A.as, N = Ml(w, A.crossOrigin);
      o.d.L(p, w, {
        crossOrigin: N,
        integrity: typeof A.integrity == "string" ? A.integrity : void 0,
        nonce: typeof A.nonce == "string" ? A.nonce : void 0,
        type: typeof A.type == "string" ? A.type : void 0,
        fetchPriority: typeof A.fetchPriority == "string" ? A.fetchPriority : void 0,
        referrerPolicy: typeof A.referrerPolicy == "string" ? A.referrerPolicy : void 0,
        imageSrcSet: typeof A.imageSrcSet == "string" ? A.imageSrcSet : void 0,
        imageSizes: typeof A.imageSizes == "string" ? A.imageSizes : void 0,
        media: typeof A.media == "string" ? A.media : void 0
      });
    }
  }, Gl.preloadModule = function(p, A) {
    if (typeof p == "string")
      if (A) {
        var w = Ml(A.as, A.crossOrigin);
        o.d.m(p, {
          as: typeof A.as == "string" && A.as !== "script" ? A.as : void 0,
          crossOrigin: w,
          integrity: typeof A.integrity == "string" ? A.integrity : void 0
        });
      } else o.d.m(p);
  }, Gl.requestFormReset = function(p) {
    o.d.r(p);
  }, Gl.unstable_batchedUpdates = function(p, A) {
    return p(A);
  }, Gl.useFormState = function(p, A, w) {
    return ml.H.useFormState(p, A, w);
  }, Gl.useFormStatus = function() {
    return ml.H.useHostTransitionStatus();
  }, Gl.version = "19.2.5", Gl;
}
var Em;
function th() {
  if (Em) return mc.exports;
  Em = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (G) {
        console.error(G);
      }
  }
  return r(), mc.exports = lh(), mc.exports;
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
var Tm;
function uh() {
  if (Tm) return ze;
  Tm = 1;
  var r = Id(), G = vc(), Z = th();
  function o(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function W(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function gl(l) {
    var t = l, u = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (u = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? u : null;
  }
  function ml(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Ml(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function p(l) {
    if (gl(l) !== l)
      throw Error(o(188));
  }
  function A(l) {
    var t = l.alternate;
    if (!t) {
      if (t = gl(l), t === null) throw Error(o(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (a = e.return, a !== null) {
          u = a;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === u) return p(e), l;
          if (n === a) return p(e), t;
          n = n.sibling;
        }
        throw Error(o(188));
      }
      if (u.return !== a.return) u = e, a = n;
      else {
        for (var f = !1, i = e.child; i; ) {
          if (i === u) {
            f = !0, u = e, a = n;
            break;
          }
          if (i === a) {
            f = !0, a = e, u = n;
            break;
          }
          i = i.sibling;
        }
        if (!f) {
          for (i = n.child; i; ) {
            if (i === u) {
              f = !0, u = n, a = e;
              break;
            }
            if (i === a) {
              f = !0, a = n, u = e;
              break;
            }
            i = i.sibling;
          }
          if (!f) throw Error(o(189));
        }
      }
      if (u.alternate !== a) throw Error(o(190));
    }
    if (u.tag !== 3) throw Error(o(188));
    return u.stateNode.current === u ? l : t;
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
  var N = Object.assign, ul = Symbol.for("react.element"), Dl = Symbol.for("react.transitional.element"), pl = Symbol.for("react.portal"), El = Symbol.for("react.fragment"), rt = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), Sl = Symbol.for("react.consumer"), jl = Symbol.for("react.context"), it = Symbol.for("react.forward_ref"), _t = Symbol.for("react.suspense"), xl = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), Zl = Symbol.for("react.lazy"), Ot = Symbol.for("react.activity"), xu = Symbol.for("react.memo_cache_sentinel"), Mt = Symbol.iterator;
  function Vl(l) {
    return l === null || typeof l != "object" ? null : (l = Mt && l[Mt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Eu = Symbol.for("react.client.reference");
  function Ht(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Eu ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case El:
        return "Fragment";
      case I:
        return "Profiler";
      case rt:
        return "StrictMode";
      case _t:
        return "Suspense";
      case xl:
        return "SuspenseList";
      case Ot:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case pl:
          return "Portal";
        case jl:
          return l.displayName || "Context";
        case Sl:
          return (l._context.displayName || "Context") + ".Consumer";
        case it:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case K:
          return t = l.displayName || null, t !== null ? t : Ht(l.type) || "Memo";
        case Zl:
          t = l._payload, l = l._init;
          try {
            return Ht(l(t));
          } catch {
          }
      }
    return null;
  }
  var bt = Array.isArray, b = G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = Z.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, al = [], il = -1;
  function y(l) {
    return { current: l };
  }
  function T(l) {
    0 > il || (l.current = al[il], al[il] = null, il--);
  }
  function O(l, t) {
    il++, al[il] = l.current, l.current = t;
  }
  var D = y(null), B = y(null), X = y(null), P = y(null);
  function Xl(l, t) {
    switch (O(X, t), O(B, l), O(D, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? jy(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = jy(t), l = Gy(t, l);
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
    T(D), O(D, l);
  }
  function rl() {
    T(D), T(B), T(X);
  }
  function Ma(l) {
    l.memoizedState !== null && O(P, l);
    var t = D.current, u = Gy(t, l.type);
    t !== u && (O(B, l), O(D, u));
  }
  function Ee(l) {
    B.current === l && (T(D), T(B)), P.current === l && (T(P), oe._currentValue = C);
  }
  var xn, dc;
  function Tu(l) {
    if (xn === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        xn = t && t[1] || "", dc = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + xn + l + dc;
  }
  var Zn = !1;
  function Vn(l, t) {
    if (!l || Zn) return "";
    Zn = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var E = function() {
                throw Error();
              };
              if (Object.defineProperty(E.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(E, []);
                } catch (g) {
                  var h = g;
                }
                Reflect.construct(l, [], E);
              } else {
                try {
                  E.call();
                } catch (g) {
                  h = g;
                }
                l.call(E.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                h = g;
              }
              (E = l()) && typeof E.catch == "function" && E.catch(function() {
              });
            }
          } catch (g) {
            if (g && h && typeof g.stack == "string")
              return [g.stack, h.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), f = n[0], i = n[1];
      if (f && i) {
        var c = f.split(`
`), d = i.split(`
`);
        for (e = a = 0; a < c.length && !c[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; e < d.length && !d[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (a === c.length || e === d.length)
          for (a = c.length - 1, e = d.length - 1; 1 <= a && 0 <= e && c[a] !== d[e]; )
            e--;
        for (; 1 <= a && 0 <= e; a--, e--)
          if (c[a] !== d[e]) {
            if (a !== 1 || e !== 1)
              do
                if (a--, e--, 0 > e || c[a] !== d[e]) {
                  var S = `
` + c[a].replace(" at new ", " at ");
                  return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), S;
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      Zn = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Tu(u) : "";
  }
  function Om(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Tu(l.type);
      case 16:
        return Tu("Lazy");
      case 13:
        return l.child !== t && t !== null ? Tu("Suspense Fallback") : Tu("Suspense");
      case 19:
        return Tu("SuspenseList");
      case 0:
      case 15:
        return Vn(l.type, !1);
      case 11:
        return Vn(l.type.render, !1);
      case 1:
        return Vn(l.type, !0);
      case 31:
        return Tu("Activity");
      default:
        return "";
    }
  }
  function hc(l) {
    try {
      var t = "", u = null;
      do
        t += Om(l, u), u = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Ln = Object.prototype.hasOwnProperty, Kn = r.unstable_scheduleCallback, Jn = r.unstable_cancelCallback, Mm = r.unstable_shouldYield, Dm = r.unstable_requestPaint, kl = r.unstable_now, Um = r.unstable_getCurrentPriorityLevel, oc = r.unstable_ImmediatePriority, gc = r.unstable_UserBlockingPriority, Te = r.unstable_NormalPriority, pm = r.unstable_LowPriority, Sc = r.unstable_IdlePriority, Nm = r.log, Hm = r.unstable_setDisableYieldValue, Da = null, Il = null;
  function Ft(l) {
    if (typeof Nm == "function" && Hm(l), Il && typeof Il.setStrictMode == "function")
      try {
        Il.setStrictMode(Da, l);
      } catch {
      }
  }
  var Pl = Math.clz32 ? Math.clz32 : qm, Rm = Math.log, Cm = Math.LN2;
  function qm(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Rm(l) / Cm | 0) | 0;
  }
  var Ae = 256, _e = 262144, Oe = 4194304;
  function Au(l) {
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
  function Me(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var i = a & 134217727;
    return i !== 0 ? (a = i & ~n, a !== 0 ? e = Au(a) : (f &= i, f !== 0 ? e = Au(f) : u || (u = i & ~l, u !== 0 && (e = Au(u))))) : (i = a & ~n, i !== 0 ? e = Au(i) : f !== 0 ? e = Au(f) : u || (u = a & ~l, u !== 0 && (e = Au(u)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : e;
  }
  function Ua(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Bm(l, t) {
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
  function rc() {
    var l = Oe;
    return Oe <<= 1, (Oe & 62914560) === 0 && (Oe = 4194304), l;
  }
  function wn(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function pa(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Ym(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var i = l.entanglements, c = l.expirationTimes, d = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var S = 31 - Pl(u), E = 1 << S;
      i[S] = 0, c[S] = -1;
      var h = d[S];
      if (h !== null)
        for (d[S] = null, S = 0; S < h.length; S++) {
          var g = h[S];
          g !== null && (g.lane &= -536870913);
        }
      u &= ~E;
    }
    a !== 0 && bc(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function bc(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - Pl(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 261930;
  }
  function zc(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - Pl(u), e = 1 << a;
      e & t | l[a] & t && (l[a] |= t), u &= ~e;
    }
  }
  function Ec(l, t) {
    var u = t & -t;
    return u = (u & 42) !== 0 ? 1 : Wn(u), (u & (l.suspendedLanes | t)) !== 0 ? 0 : u;
  }
  function Wn(l) {
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
  function $n(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Tc() {
    var l = _.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : im(l.type));
  }
  function Ac(l, t) {
    var u = _.p;
    try {
      return _.p = l, t();
    } finally {
      _.p = u;
    }
  }
  var kt = Math.random().toString(36).slice(2), Rl = "__reactFiber$" + kt, Ll = "__reactProps$" + kt, Zu = "__reactContainer$" + kt, Fn = "__reactEvents$" + kt, jm = "__reactListeners$" + kt, Gm = "__reactHandles$" + kt, _c = "__reactResources$" + kt, Na = "__reactMarker$" + kt;
  function kn(l) {
    delete l[Rl], delete l[Ll], delete l[Fn], delete l[jm], delete l[Gm];
  }
  function Vu(l) {
    var t = l[Rl];
    if (t) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[Zu] || u[Rl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = Ky(l); l !== null; ) {
            if (u = l[Rl]) return u;
            l = Ky(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Lu(l) {
    if (l = l[Rl] || l[Zu]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Ha(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(o(33));
  }
  function Ku(l) {
    var t = l[_c];
    return t || (t = l[_c] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Nl(l) {
    l[Na] = !0;
  }
  var Oc = /* @__PURE__ */ new Set(), Mc = {};
  function _u(l, t) {
    Ju(l, t), Ju(l + "Capture", t);
  }
  function Ju(l, t) {
    for (Mc[l] = t, l = 0; l < t.length; l++)
      Oc.add(t[l]);
  }
  var Xm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Dc = {}, Uc = {};
  function Qm(l) {
    return Ln.call(Uc, l) ? !0 : Ln.call(Dc, l) ? !1 : Xm.test(l) ? Uc[l] = !0 : (Dc[l] = !0, !1);
  }
  function De(l, t, u) {
    if (Qm(t))
      if (u === null) l.removeAttribute(t);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + u);
      }
  }
  function Ue(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + u);
    }
  }
  function Rt(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, "" + a);
    }
  }
  function ct(l) {
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
  function pc(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function xm(l, t, u) {
    var a = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var e = a.get, n = a.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          u = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(f) {
          u = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function In(l) {
    if (!l._valueTracker) {
      var t = pc(l) ? "checked" : "value";
      l._valueTracker = xm(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function Nc(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(), a = "";
    return l && (a = pc(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), !0) : !1;
  }
  function pe(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Zm = /[\n"\\]/g;
  function st(l) {
    return l.replace(
      Zm,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Pn(l, t, u, a, e, n, f, i) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ct(t)) : l.value !== "" + ct(t) && (l.value = "" + ct(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? lf(l, f, ct(t)) : u != null ? lf(l, f, ct(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.name = "" + ct(i) : l.removeAttribute("name");
  }
  function Hc(l, t, u, a, e, n, f, i) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        In(l);
        return;
      }
      u = u != null ? "" + ct(u) : "", t = t != null ? "" + ct(t) : u, i || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = i ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), In(l);
  }
  function lf(l, t, u) {
    t === "number" && pe(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function wu(l, t, u, a) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < u.length; e++)
        t["$" + u[e]] = !0;
      for (u = 0; u < l.length; u++)
        e = t.hasOwnProperty("$" + l[u].value), l[u].selected !== e && (l[u].selected = e), e && a && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + ct(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          l[e].selected = !0, a && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Rc(l, t, u) {
    if (t != null && (t = "" + ct(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + ct(u) : "";
  }
  function Cc(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(o(92));
        if (bt(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = ct(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a), In(l);
  }
  function Wu(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Vm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function qc(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || Vm.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function Bc(l, t, u) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (l = l.style, u != null) {
      for (var a in u)
        !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var e in t)
        a = t[e], t.hasOwnProperty(e) && u[e] !== a && qc(l, e, a);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && qc(l, n, t[n]);
  }
  function tf(l) {
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
  var Lm = /* @__PURE__ */ new Map([
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
  ]), Km = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ne(l) {
    return Km.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Ct() {
  }
  var uf = null;
  function af(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var $u = null, Fu = null;
  function Yc(l) {
    var t = Lu(l);
    if (t && (l = t.stateNode)) {
      var u = l[Ll] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (Pn(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), t = u.name, u.type === "radio" && t != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + st(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[Ll] || null;
                if (!e) throw Error(o(90));
                Pn(
                  a,
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
            for (t = 0; t < u.length; t++)
              a = u[t], a.form === l.form && Nc(a);
          }
          break l;
        case "textarea":
          Rc(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && wu(l, !!u.multiple, t, !1);
      }
    }
  }
  var ef = !1;
  function jc(l, t, u) {
    if (ef) return l(t, u);
    ef = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (ef = !1, ($u !== null || Fu !== null) && (rn(), $u && (t = $u, l = Fu, Fu = $u = null, Yc(t), l)))
        for (t = 0; t < l.length; t++) Yc(l[t]);
    }
  }
  function Ra(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[Ll] || null;
    if (a === null) return null;
    u = a[t];
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
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        o(231, t, typeof u)
      );
    return u;
  }
  var qt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), nf = !1;
  if (qt)
    try {
      var Ca = {};
      Object.defineProperty(Ca, "passive", {
        get: function() {
          nf = !0;
        }
      }), window.addEventListener("test", Ca, Ca), window.removeEventListener("test", Ca, Ca);
    } catch {
      nf = !1;
    }
  var It = null, ff = null, He = null;
  function Gc() {
    if (He) return He;
    var l, t = ff, u = t.length, a, e = "value" in It ? It.value : It.textContent, n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++) ;
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++) ;
    return He = e.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Re(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Ce() {
    return !0;
  }
  function Xc() {
    return !1;
  }
  function Kl(l) {
    function t(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var i in l)
        l.hasOwnProperty(i) && (u = l[i], this[i] = u ? u(n) : n[i]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Ce : Xc, this.isPropagationStopped = Xc, this;
    }
    return N(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Ce);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Ce);
      },
      persist: function() {
      },
      isPersistent: Ce
    }), t;
  }
  var Ou = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, qe = Kl(Ou), qa = N({}, Ou, { view: 0, detail: 0 }), Jm = Kl(qa), cf, sf, Ba, Be = N({}, qa, {
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
    getModifierState: mf,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Ba && (Ba && l.type === "mousemove" ? (cf = l.screenX - Ba.screenX, sf = l.screenY - Ba.screenY) : sf = cf = 0, Ba = l), cf);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : sf;
    }
  }), Qc = Kl(Be), wm = N({}, Be, { dataTransfer: 0 }), Wm = Kl(wm), $m = N({}, qa, { relatedTarget: 0 }), yf = Kl($m), Fm = N({}, Ou, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), km = Kl(Fm), Im = N({}, Ou, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Pm = Kl(Im), lv = N({}, Ou, { data: 0 }), xc = Kl(lv), tv = {
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
  }, uv = {
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
  }, av = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function ev(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = av[l]) ? !!t[l] : !1;
  }
  function mf() {
    return ev;
  }
  var nv = N({}, qa, {
    key: function(l) {
      if (l.key) {
        var t = tv[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Re(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? uv[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: mf,
    charCode: function(l) {
      return l.type === "keypress" ? Re(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Re(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), fv = Kl(nv), iv = N({}, Be, {
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
  }), Zc = Kl(iv), cv = N({}, qa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: mf
  }), sv = Kl(cv), yv = N({}, Ou, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), mv = Kl(yv), vv = N({}, Be, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), dv = Kl(vv), hv = N({}, Ou, {
    newState: 0,
    oldState: 0
  }), ov = Kl(hv), gv = [9, 13, 27, 32], vf = qt && "CompositionEvent" in window, Ya = null;
  qt && "documentMode" in document && (Ya = document.documentMode);
  var Sv = qt && "TextEvent" in window && !Ya, Vc = qt && (!vf || Ya && 8 < Ya && 11 >= Ya), Lc = " ", Kc = !1;
  function Jc(l, t) {
    switch (l) {
      case "keyup":
        return gv.indexOf(t.keyCode) !== -1;
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
  function wc(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ku = !1;
  function rv(l, t) {
    switch (l) {
      case "compositionend":
        return wc(t);
      case "keypress":
        return t.which !== 32 ? null : (Kc = !0, Lc);
      case "textInput":
        return l = t.data, l === Lc && Kc ? null : l;
      default:
        return null;
    }
  }
  function bv(l, t) {
    if (ku)
      return l === "compositionend" || !vf && Jc(l, t) ? (l = Gc(), He = ff = It = null, ku = !1, l) : null;
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
        return Vc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var zv = {
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
  function Wc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!zv[l.type] : t === "textarea";
  }
  function $c(l, t, u, a) {
    $u ? Fu ? Fu.push(a) : Fu = [a] : $u = a, t = On(t, "onChange"), 0 < t.length && (u = new qe(
      "onChange",
      "change",
      null,
      u,
      a
    ), l.push({ event: u, listeners: t }));
  }
  var ja = null, Ga = null;
  function Ev(l) {
    Hy(l, 0);
  }
  function Ye(l) {
    var t = Ha(l);
    if (Nc(t)) return l;
  }
  function Fc(l, t) {
    if (l === "change") return t;
  }
  var kc = !1;
  if (qt) {
    var df;
    if (qt) {
      var hf = "oninput" in document;
      if (!hf) {
        var Ic = document.createElement("div");
        Ic.setAttribute("oninput", "return;"), hf = typeof Ic.oninput == "function";
      }
      df = hf;
    } else df = !1;
    kc = df && (!document.documentMode || 9 < document.documentMode);
  }
  function Pc() {
    ja && (ja.detachEvent("onpropertychange", l0), Ga = ja = null);
  }
  function l0(l) {
    if (l.propertyName === "value" && Ye(Ga)) {
      var t = [];
      $c(
        t,
        Ga,
        l,
        af(l)
      ), jc(Ev, t);
    }
  }
  function Tv(l, t, u) {
    l === "focusin" ? (Pc(), ja = t, Ga = u, ja.attachEvent("onpropertychange", l0)) : l === "focusout" && Pc();
  }
  function Av(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ye(Ga);
  }
  function _v(l, t) {
    if (l === "click") return Ye(t);
  }
  function Ov(l, t) {
    if (l === "input" || l === "change")
      return Ye(t);
  }
  function Mv(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var lt = typeof Object.is == "function" ? Object.is : Mv;
  function Xa(l, t) {
    if (lt(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!Ln.call(t, e) || !lt(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function t0(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function u0(l, t) {
    var u = t0(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (a = l + u.textContent.length, l <= t && a >= t)
          return { node: u, offset: t - l };
        l = a;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = t0(u);
    }
  }
  function a0(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? a0(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function e0(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = pe(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = pe(l.document);
    }
    return t;
  }
  function of(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Dv = qt && "documentMode" in document && 11 >= document.documentMode, Iu = null, gf = null, Qa = null, Sf = !1;
  function n0(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Sf || Iu == null || Iu !== pe(a) || (a = Iu, "selectionStart" in a && of(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Qa && Xa(Qa, a) || (Qa = a, a = On(gf, "onSelect"), 0 < a.length && (t = new qe(
      "onSelect",
      "select",
      null,
      t,
      u
    ), l.push({ event: t, listeners: a }), t.target = Iu)));
  }
  function Mu(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var Pu = {
    animationend: Mu("Animation", "AnimationEnd"),
    animationiteration: Mu("Animation", "AnimationIteration"),
    animationstart: Mu("Animation", "AnimationStart"),
    transitionrun: Mu("Transition", "TransitionRun"),
    transitionstart: Mu("Transition", "TransitionStart"),
    transitioncancel: Mu("Transition", "TransitionCancel"),
    transitionend: Mu("Transition", "TransitionEnd")
  }, rf = {}, f0 = {};
  qt && (f0 = document.createElement("div").style, "AnimationEvent" in window || (delete Pu.animationend.animation, delete Pu.animationiteration.animation, delete Pu.animationstart.animation), "TransitionEvent" in window || delete Pu.transitionend.transition);
  function Du(l) {
    if (rf[l]) return rf[l];
    if (!Pu[l]) return l;
    var t = Pu[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in f0)
        return rf[l] = t[u];
    return l;
  }
  var i0 = Du("animationend"), c0 = Du("animationiteration"), s0 = Du("animationstart"), Uv = Du("transitionrun"), pv = Du("transitionstart"), Nv = Du("transitioncancel"), y0 = Du("transitionend"), m0 = /* @__PURE__ */ new Map(), bf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  bf.push("scrollEnd");
  function zt(l, t) {
    m0.set(l, t), _u(t, [l]);
  }
  var je = typeof reportError == "function" ? reportError : function(l) {
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
  }, yt = [], la = 0, zf = 0;
  function Ge() {
    for (var l = la, t = zf = la = 0; t < l; ) {
      var u = yt[t];
      yt[t++] = null;
      var a = yt[t];
      yt[t++] = null;
      var e = yt[t];
      yt[t++] = null;
      var n = yt[t];
      if (yt[t++] = null, a !== null && e !== null) {
        var f = a.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), a.pending = e;
      }
      n !== 0 && v0(u, e, n);
    }
  }
  function Xe(l, t, u, a) {
    yt[la++] = l, yt[la++] = t, yt[la++] = u, yt[la++] = a, zf |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Ef(l, t, u, a) {
    return Xe(l, t, u, a), Qe(l);
  }
  function Uu(l, t) {
    return Xe(l, null, null, t), Qe(l);
  }
  function v0(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - Pl(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function Qe(l) {
    if (50 < ce)
      throw ce = 0, Ni = null, Error(o(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ta = {};
  function Hv(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function tt(l, t, u, a) {
    return new Hv(l, t, u, a);
  }
  function Tf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Bt(l, t) {
    var u = l.alternate;
    return u === null ? (u = tt(
      l.tag,
      t,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function d0(l, t) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function xe(l, t, u, a, e, n) {
    var f = 0;
    if (a = l, typeof l == "function") Tf(l) && (f = 1);
    else if (typeof l == "string")
      f = Yd(
        l,
        u,
        D.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case Ot:
          return l = tt(31, u, t, e), l.elementType = Ot, l.lanes = n, l;
        case El:
          return pu(u.children, e, n, t);
        case rt:
          f = 8, e |= 24;
          break;
        case I:
          return l = tt(12, u, t, e | 2), l.elementType = I, l.lanes = n, l;
        case _t:
          return l = tt(13, u, t, e), l.elementType = _t, l.lanes = n, l;
        case xl:
          return l = tt(19, u, t, e), l.elementType = xl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case jl:
                f = 10;
                break l;
              case Sl:
                f = 9;
                break l;
              case it:
                f = 11;
                break l;
              case K:
                f = 14;
                break l;
              case Zl:
                f = 16, a = null;
                break l;
            }
          f = 29, u = Error(
            o(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = tt(f, u, t, e), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function pu(l, t, u, a) {
    return l = tt(7, l, a, t), l.lanes = u, l;
  }
  function Af(l, t, u) {
    return l = tt(6, l, null, t), l.lanes = u, l;
  }
  function h0(l) {
    var t = tt(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function _f(l, t, u) {
    return t = tt(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = u, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var o0 = /* @__PURE__ */ new WeakMap();
  function mt(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = o0.get(l);
      return u !== void 0 ? u : (t = {
        value: l,
        source: t,
        stack: hc(t)
      }, o0.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: hc(t)
    };
  }
  var ua = [], aa = 0, Ze = null, xa = 0, vt = [], dt = 0, Pt = null, Dt = 1, Ut = "";
  function Yt(l, t) {
    ua[aa++] = xa, ua[aa++] = Ze, Ze = l, xa = t;
  }
  function g0(l, t, u) {
    vt[dt++] = Dt, vt[dt++] = Ut, vt[dt++] = Pt, Pt = l;
    var a = Dt;
    l = Ut;
    var e = 32 - Pl(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - Pl(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e -= f, Dt = 1 << 32 - Pl(t) + e | u << e | a, Ut = n + l;
    } else
      Dt = 1 << n | u << e | a, Ut = l;
  }
  function Of(l) {
    l.return !== null && (Yt(l, 1), g0(l, 1, 0));
  }
  function Mf(l) {
    for (; l === Ze; )
      Ze = ua[--aa], ua[aa] = null, xa = ua[--aa], ua[aa] = null;
    for (; l === Pt; )
      Pt = vt[--dt], vt[dt] = null, Ut = vt[--dt], vt[dt] = null, Dt = vt[--dt], vt[dt] = null;
  }
  function S0(l, t) {
    vt[dt++] = Dt, vt[dt++] = Ut, vt[dt++] = Pt, Dt = t.id, Ut = t.overflow, Pt = l;
  }
  var Cl = null, sl = null, J = !1, lu = null, ht = !1, Df = Error(o(519));
  function tu(l) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Za(mt(t, l)), Df;
  }
  function r0(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[Rl] = l, t[Ll] = a, u) {
      case "dialog":
        x("cancel", t), x("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        x("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ye.length; u++)
          x(ye[u], t);
        break;
      case "source":
        x("error", t);
        break;
      case "img":
      case "image":
      case "link":
        x("error", t), x("load", t);
        break;
      case "details":
        x("toggle", t);
        break;
      case "input":
        x("invalid", t), Hc(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        x("invalid", t);
        break;
      case "textarea":
        x("invalid", t), Cc(t, a.value, a.defaultValue, a.children);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || By(t.textContent, u) ? (a.popover != null && (x("beforetoggle", t), x("toggle", t)), a.onScroll != null && x("scroll", t), a.onScrollEnd != null && x("scrollend", t), a.onClick != null && (t.onclick = Ct), t = !0) : t = !1, t || tu(l, !0);
  }
  function b0(l) {
    for (Cl = l.return; Cl; )
      switch (Cl.tag) {
        case 5:
        case 31:
        case 13:
          ht = !1;
          return;
        case 27:
        case 3:
          ht = !0;
          return;
        default:
          Cl = Cl.return;
      }
  }
  function ea(l) {
    if (l !== Cl) return !1;
    if (!J) return b0(l), J = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Ki(l.type, l.memoizedProps)), u = !u), u && sl && tu(l), b0(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      sl = Ly(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      sl = Ly(l);
    } else
      t === 27 ? (t = sl, ou(l.type) ? (l = Fi, Fi = null, sl = l) : sl = t) : sl = Cl ? gt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Nu() {
    sl = Cl = null, J = !1;
  }
  function Uf() {
    var l = lu;
    return l !== null && ($l === null ? $l = l : $l.push.apply(
      $l,
      l
    ), lu = null), l;
  }
  function Za(l) {
    lu === null ? lu = [l] : lu.push(l);
  }
  var pf = y(null), Hu = null, jt = null;
  function uu(l, t, u) {
    O(pf, t._currentValue), t._currentValue = u;
  }
  function Gt(l) {
    l._currentValue = pf.current, T(pf);
  }
  function Nf(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function Hf(l, t, u, a) {
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
              n.lanes |= u, i = n.alternate, i !== null && (i.lanes |= u), Nf(
                n.return,
                u,
                l
              ), a || (f = null);
              break l;
            }
          n = i.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(o(341));
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), Nf(f, u, l), f = null;
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
  function na(l, t, u, a) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(o(387));
        if (f = f.memoizedProps, f !== null) {
          var i = e.type;
          lt(e.pendingProps.value, f.value) || (l !== null ? l.push(i) : l = [i]);
        }
      } else if (e === P.current) {
        if (f = e.alternate, f === null) throw Error(o(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(oe) : l = [oe]);
      }
      e = e.return;
    }
    l !== null && Hf(
      t,
      l,
      u,
      a
    ), t.flags |= 262144;
  }
  function Ve(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!lt(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Ru(l) {
    Hu = l, jt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function ql(l) {
    return z0(Hu, l);
  }
  function Le(l, t) {
    return Hu === null && Ru(l), z0(l, t);
  }
  function z0(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, jt === null) {
      if (l === null) throw Error(o(308));
      jt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else jt = jt.next = t;
    return u;
  }
  var Rv = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(u, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, Cv = r.unstable_scheduleCallback, qv = r.unstable_NormalPriority, Tl = {
    $$typeof: jl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Rf() {
    return {
      controller: new Rv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Va(l) {
    l.refCount--, l.refCount === 0 && Cv(qv, function() {
      l.controller.abort();
    });
  }
  var La = null, Cf = 0, fa = 0, ia = null;
  function Bv(l, t) {
    if (La === null) {
      var u = La = [];
      Cf = 0, fa = Yi(), ia = {
        status: "pending",
        value: void 0,
        then: function(a) {
          u.push(a);
        }
      };
    }
    return Cf++, t.then(E0, E0), t;
  }
  function E0() {
    if (--Cf === 0 && La !== null) {
      ia !== null && (ia.status = "fulfilled");
      var l = La;
      La = null, fa = 0, ia = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Yv(l, t) {
    var u = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        u.push(e);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var e = 0; e < u.length; e++) (0, u[e])(t);
      },
      function(e) {
        for (a.status = "rejected", a.reason = e, e = 0; e < u.length; e++)
          (0, u[e])(void 0);
      }
    ), a;
  }
  var T0 = b.S;
  b.S = function(l, t) {
    ny = kl(), typeof t == "object" && t !== null && typeof t.then == "function" && Bv(l, t), T0 !== null && T0(l, t);
  };
  var Cu = y(null);
  function qf() {
    var l = Cu.current;
    return l !== null ? l : cl.pooledCache;
  }
  function Ke(l, t) {
    t === null ? O(Cu, Cu.current) : O(Cu, t.pool);
  }
  function A0() {
    var l = qf();
    return l === null ? null : { parent: Tl._currentValue, pool: l };
  }
  var ca = Error(o(460)), Bf = Error(o(474)), Je = Error(o(542)), we = { then: function() {
  } };
  function _0(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function O0(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Ct, Ct), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, D0(l), l;
      default:
        if (typeof t.status == "string") t.then(Ct, Ct);
        else {
          if (l = cl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(o(482));
          l = t, l.status = "pending", l.then(
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, D0(l), l;
        }
        throw Bu = t, ca;
    }
  }
  function qu(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Bu = u, ca) : u;
    }
  }
  var Bu = null;
  function M0() {
    if (Bu === null) throw Error(o(459));
    var l = Bu;
    return Bu = null, l;
  }
  function D0(l) {
    if (l === ca || l === Je)
      throw Error(o(483));
  }
  var sa = null, Ka = 0;
  function We(l) {
    var t = Ka;
    return Ka += 1, sa === null && (sa = []), O0(sa, l, t);
  }
  function Ja(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function $e(l, t) {
    throw t.$$typeof === ul ? Error(o(525)) : (l = Object.prototype.toString.call(t), Error(
      o(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function U0(l) {
    function t(m, s) {
      if (l) {
        var v = m.deletions;
        v === null ? (m.deletions = [s], m.flags |= 16) : v.push(s);
      }
    }
    function u(m, s) {
      if (!l) return null;
      for (; s !== null; )
        t(m, s), s = s.sibling;
      return null;
    }
    function a(m) {
      for (var s = /* @__PURE__ */ new Map(); m !== null; )
        m.key !== null ? s.set(m.key, m) : s.set(m.index, m), m = m.sibling;
      return s;
    }
    function e(m, s) {
      return m = Bt(m, s), m.index = 0, m.sibling = null, m;
    }
    function n(m, s, v) {
      return m.index = v, l ? (v = m.alternate, v !== null ? (v = v.index, v < s ? (m.flags |= 67108866, s) : v) : (m.flags |= 67108866, s)) : (m.flags |= 1048576, s);
    }
    function f(m) {
      return l && m.alternate === null && (m.flags |= 67108866), m;
    }
    function i(m, s, v, z) {
      return s === null || s.tag !== 6 ? (s = Af(v, m.mode, z), s.return = m, s) : (s = e(s, v), s.return = m, s);
    }
    function c(m, s, v, z) {
      var H = v.type;
      return H === El ? S(
        m,
        s,
        v.props.children,
        z,
        v.key
      ) : s !== null && (s.elementType === H || typeof H == "object" && H !== null && H.$$typeof === Zl && qu(H) === s.type) ? (s = e(s, v.props), Ja(s, v), s.return = m, s) : (s = xe(
        v.type,
        v.key,
        v.props,
        null,
        m.mode,
        z
      ), Ja(s, v), s.return = m, s);
    }
    function d(m, s, v, z) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== v.containerInfo || s.stateNode.implementation !== v.implementation ? (s = _f(v, m.mode, z), s.return = m, s) : (s = e(s, v.children || []), s.return = m, s);
    }
    function S(m, s, v, z, H) {
      return s === null || s.tag !== 7 ? (s = pu(
        v,
        m.mode,
        z,
        H
      ), s.return = m, s) : (s = e(s, v), s.return = m, s);
    }
    function E(m, s, v) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return s = Af(
          "" + s,
          m.mode,
          v
        ), s.return = m, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Dl:
            return v = xe(
              s.type,
              s.key,
              s.props,
              null,
              m.mode,
              v
            ), Ja(v, s), v.return = m, v;
          case pl:
            return s = _f(
              s,
              m.mode,
              v
            ), s.return = m, s;
          case Zl:
            return s = qu(s), E(m, s, v);
        }
        if (bt(s) || Vl(s))
          return s = pu(
            s,
            m.mode,
            v,
            null
          ), s.return = m, s;
        if (typeof s.then == "function")
          return E(m, We(s), v);
        if (s.$$typeof === jl)
          return E(
            m,
            Le(m, s),
            v
          );
        $e(m, s);
      }
      return null;
    }
    function h(m, s, v, z) {
      var H = s !== null ? s.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return H !== null ? null : i(m, s, "" + v, z);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Dl:
            return v.key === H ? c(m, s, v, z) : null;
          case pl:
            return v.key === H ? d(m, s, v, z) : null;
          case Zl:
            return v = qu(v), h(m, s, v, z);
        }
        if (bt(v) || Vl(v))
          return H !== null ? null : S(m, s, v, z, null);
        if (typeof v.then == "function")
          return h(
            m,
            s,
            We(v),
            z
          );
        if (v.$$typeof === jl)
          return h(
            m,
            s,
            Le(m, v),
            z
          );
        $e(m, v);
      }
      return null;
    }
    function g(m, s, v, z, H) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return m = m.get(v) || null, i(s, m, "" + z, H);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Dl:
            return m = m.get(
              z.key === null ? v : z.key
            ) || null, c(s, m, z, H);
          case pl:
            return m = m.get(
              z.key === null ? v : z.key
            ) || null, d(s, m, z, H);
          case Zl:
            return z = qu(z), g(
              m,
              s,
              v,
              z,
              H
            );
        }
        if (bt(z) || Vl(z))
          return m = m.get(v) || null, S(s, m, z, H, null);
        if (typeof z.then == "function")
          return g(
            m,
            s,
            v,
            We(z),
            H
          );
        if (z.$$typeof === jl)
          return g(
            m,
            s,
            v,
            Le(s, z),
            H
          );
        $e(s, z);
      }
      return null;
    }
    function M(m, s, v, z) {
      for (var H = null, $ = null, U = s, j = s = 0, L = null; U !== null && j < v.length; j++) {
        U.index > j ? (L = U, U = null) : L = U.sibling;
        var F = h(
          m,
          U,
          v[j],
          z
        );
        if (F === null) {
          U === null && (U = L);
          break;
        }
        l && U && F.alternate === null && t(m, U), s = n(F, s, j), $ === null ? H = F : $.sibling = F, $ = F, U = L;
      }
      if (j === v.length)
        return u(m, U), J && Yt(m, j), H;
      if (U === null) {
        for (; j < v.length; j++)
          U = E(m, v[j], z), U !== null && (s = n(
            U,
            s,
            j
          ), $ === null ? H = U : $.sibling = U, $ = U);
        return J && Yt(m, j), H;
      }
      for (U = a(U); j < v.length; j++)
        L = g(
          U,
          m,
          j,
          v[j],
          z
        ), L !== null && (l && L.alternate !== null && U.delete(
          L.key === null ? j : L.key
        ), s = n(
          L,
          s,
          j
        ), $ === null ? H = L : $.sibling = L, $ = L);
      return l && U.forEach(function(zu) {
        return t(m, zu);
      }), J && Yt(m, j), H;
    }
    function R(m, s, v, z) {
      if (v == null) throw Error(o(151));
      for (var H = null, $ = null, U = s, j = s = 0, L = null, F = v.next(); U !== null && !F.done; j++, F = v.next()) {
        U.index > j ? (L = U, U = null) : L = U.sibling;
        var zu = h(m, U, F.value, z);
        if (zu === null) {
          U === null && (U = L);
          break;
        }
        l && U && zu.alternate === null && t(m, U), s = n(zu, s, j), $ === null ? H = zu : $.sibling = zu, $ = zu, U = L;
      }
      if (F.done)
        return u(m, U), J && Yt(m, j), H;
      if (U === null) {
        for (; !F.done; j++, F = v.next())
          F = E(m, F.value, z), F !== null && (s = n(F, s, j), $ === null ? H = F : $.sibling = F, $ = F);
        return J && Yt(m, j), H;
      }
      for (U = a(U); !F.done; j++, F = v.next())
        F = g(U, m, j, F.value, z), F !== null && (l && F.alternate !== null && U.delete(F.key === null ? j : F.key), s = n(F, s, j), $ === null ? H = F : $.sibling = F, $ = F);
      return l && U.forEach(function(wd) {
        return t(m, wd);
      }), J && Yt(m, j), H;
    }
    function fl(m, s, v, z) {
      if (typeof v == "object" && v !== null && v.type === El && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Dl:
            l: {
              for (var H = v.key; s !== null; ) {
                if (s.key === H) {
                  if (H = v.type, H === El) {
                    if (s.tag === 7) {
                      u(
                        m,
                        s.sibling
                      ), z = e(
                        s,
                        v.props.children
                      ), z.return = m, m = z;
                      break l;
                    }
                  } else if (s.elementType === H || typeof H == "object" && H !== null && H.$$typeof === Zl && qu(H) === s.type) {
                    u(
                      m,
                      s.sibling
                    ), z = e(s, v.props), Ja(z, v), z.return = m, m = z;
                    break l;
                  }
                  u(m, s);
                  break;
                } else t(m, s);
                s = s.sibling;
              }
              v.type === El ? (z = pu(
                v.props.children,
                m.mode,
                z,
                v.key
              ), z.return = m, m = z) : (z = xe(
                v.type,
                v.key,
                v.props,
                null,
                m.mode,
                z
              ), Ja(z, v), z.return = m, m = z);
            }
            return f(m);
          case pl:
            l: {
              for (H = v.key; s !== null; ) {
                if (s.key === H)
                  if (s.tag === 4 && s.stateNode.containerInfo === v.containerInfo && s.stateNode.implementation === v.implementation) {
                    u(
                      m,
                      s.sibling
                    ), z = e(s, v.children || []), z.return = m, m = z;
                    break l;
                  } else {
                    u(m, s);
                    break;
                  }
                else t(m, s);
                s = s.sibling;
              }
              z = _f(v, m.mode, z), z.return = m, m = z;
            }
            return f(m);
          case Zl:
            return v = qu(v), fl(
              m,
              s,
              v,
              z
            );
        }
        if (bt(v))
          return M(
            m,
            s,
            v,
            z
          );
        if (Vl(v)) {
          if (H = Vl(v), typeof H != "function") throw Error(o(150));
          return v = H.call(v), R(
            m,
            s,
            v,
            z
          );
        }
        if (typeof v.then == "function")
          return fl(
            m,
            s,
            We(v),
            z
          );
        if (v.$$typeof === jl)
          return fl(
            m,
            s,
            Le(m, v),
            z
          );
        $e(m, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, s !== null && s.tag === 6 ? (u(m, s.sibling), z = e(s, v), z.return = m, m = z) : (u(m, s), z = Af(v, m.mode, z), z.return = m, m = z), f(m)) : u(m, s);
    }
    return function(m, s, v, z) {
      try {
        Ka = 0;
        var H = fl(
          m,
          s,
          v,
          z
        );
        return sa = null, H;
      } catch (U) {
        if (U === ca || U === Je) throw U;
        var $ = tt(29, U, null, m.mode);
        return $.lanes = z, $.return = m, $;
      } finally {
      }
    };
  }
  var Yu = U0(!0), p0 = U0(!1), au = !1;
  function Yf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function jf(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function eu(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function nu(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (k & 2) !== 0) {
      var e = a.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = Qe(l), v0(l, null, u), t;
    }
    return Xe(l, a, t, u), Qe(l);
  }
  function wa(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, zc(l, u);
    }
  }
  function Gf(l, t) {
    var u = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, u === a)) {
      var e = null, n = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var f = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, u = u.next;
        } while (u !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      u = {
        baseState: a.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = t : l.next = t, u.lastBaseUpdate = t;
  }
  var Xf = !1;
  function Wa() {
    if (Xf) {
      var l = ia;
      if (l !== null) throw l;
    }
  }
  function $a(l, t, u, a) {
    Xf = !1;
    var e = l.updateQueue;
    au = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, i = e.shared.pending;
    if (i !== null) {
      e.shared.pending = null;
      var c = i, d = c.next;
      c.next = null, f === null ? n = d : f.next = d, f = c;
      var S = l.alternate;
      S !== null && (S = S.updateQueue, i = S.lastBaseUpdate, i !== f && (i === null ? S.firstBaseUpdate = d : i.next = d, S.lastBaseUpdate = c));
    }
    if (n !== null) {
      var E = e.baseState;
      f = 0, S = d = c = null, i = n;
      do {
        var h = i.lane & -536870913, g = h !== i.lane;
        if (g ? (V & h) === h : (a & h) === h) {
          h !== 0 && h === fa && (Xf = !0), S !== null && (S = S.next = {
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          });
          l: {
            var M = l, R = i;
            h = t;
            var fl = u;
            switch (R.tag) {
              case 1:
                if (M = R.payload, typeof M == "function") {
                  E = M.call(fl, E, h);
                  break l;
                }
                E = M;
                break l;
              case 3:
                M.flags = M.flags & -65537 | 128;
              case 0:
                if (M = R.payload, h = typeof M == "function" ? M.call(fl, E, h) : M, h == null) break l;
                E = N({}, E, h);
                break l;
              case 2:
                au = !0;
            }
          }
          h = i.callback, h !== null && (l.flags |= 64, g && (l.flags |= 8192), g = e.callbacks, g === null ? e.callbacks = [h] : g.push(h));
        } else
          g = {
            lane: h,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          }, S === null ? (d = S = g, c = E) : S = S.next = g, f |= h;
        if (i = i.next, i === null) {
          if (i = e.shared.pending, i === null)
            break;
          g = i, i = g.next, g.next = null, e.lastBaseUpdate = g, e.shared.pending = null;
        }
      } while (!0);
      S === null && (c = E), e.baseState = c, e.firstBaseUpdate = d, e.lastBaseUpdate = S, n === null && (e.shared.lanes = 0), yu |= f, l.lanes = f, l.memoizedState = E;
    }
  }
  function N0(l, t) {
    if (typeof l != "function")
      throw Error(o(191, l));
    l.call(t);
  }
  function H0(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        N0(u[l], t);
  }
  var ya = y(null), Fe = y(0);
  function R0(l, t) {
    l = wt, O(Fe, l), O(ya, t), wt = l | t.baseLanes;
  }
  function Qf() {
    O(Fe, wt), O(ya, ya.current);
  }
  function xf() {
    wt = Fe.current, T(ya), T(Fe);
  }
  var ut = y(null), ot = null;
  function fu(l) {
    var t = l.alternate;
    O(bl, bl.current & 1), O(ut, l), ot === null && (t === null || ya.current !== null || t.memoizedState !== null) && (ot = l);
  }
  function Zf(l) {
    O(bl, bl.current), O(ut, l), ot === null && (ot = l);
  }
  function C0(l) {
    l.tag === 22 ? (O(bl, bl.current), O(ut, l), ot === null && (ot = l)) : iu();
  }
  function iu() {
    O(bl, bl.current), O(ut, ut.current);
  }
  function at(l) {
    T(ut), ot === l && (ot = null), T(bl);
  }
  var bl = y(0);
  function ke(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || Wi(u) || $i(u)))
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
  var Xt = 0, Y = null, el = null, Al = null, Ie = !1, ma = !1, ju = !1, Pe = 0, Fa = 0, va = null, jv = 0;
  function hl() {
    throw Error(o(321));
  }
  function Vf(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!lt(l[u], t[u])) return !1;
    return !0;
  }
  function Lf(l, t, u, a, e, n) {
    return Xt = n, Y = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, b.H = l === null || l.memoizedState === null ? gs : ni, ju = !1, n = u(a, e), ju = !1, ma && (n = B0(
      t,
      u,
      a,
      e
    )), q0(l), n;
  }
  function q0(l) {
    b.H = Pa;
    var t = el !== null && el.next !== null;
    if (Xt = 0, Al = el = Y = null, Ie = !1, Fa = 0, va = null, t) throw Error(o(300));
    l === null || _l || (l = l.dependencies, l !== null && Ve(l) && (_l = !0));
  }
  function B0(l, t, u, a) {
    Y = l;
    var e = 0;
    do {
      if (ma && (va = null), Fa = 0, ma = !1, 25 <= e) throw Error(o(301));
      if (e += 1, Al = el = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      b.H = Ss, n = t(u, a);
    } while (ma);
    return n;
  }
  function Gv() {
    var l = b.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? ka(t) : t, l = l.useState()[0], (el !== null ? el.memoizedState : null) !== l && (Y.flags |= 1024), t;
  }
  function Kf() {
    var l = Pe !== 0;
    return Pe = 0, l;
  }
  function Jf(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function wf(l) {
    if (Ie) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Ie = !1;
    }
    Xt = 0, Al = el = Y = null, ma = !1, Fa = Pe = 0, va = null;
  }
  function Ql() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Al === null ? Y.memoizedState = Al = l : Al = Al.next = l, Al;
  }
  function zl() {
    if (el === null) {
      var l = Y.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = el.next;
    var t = Al === null ? Y.memoizedState : Al.next;
    if (t !== null)
      Al = t, el = l;
    else {
      if (l === null)
        throw Y.alternate === null ? Error(o(467)) : Error(o(310));
      el = l, l = {
        memoizedState: el.memoizedState,
        baseState: el.baseState,
        baseQueue: el.baseQueue,
        queue: el.queue,
        next: null
      }, Al === null ? Y.memoizedState = Al = l : Al = Al.next = l;
    }
    return Al;
  }
  function ln() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ka(l) {
    var t = Fa;
    return Fa += 1, va === null && (va = []), l = O0(va, l, t), t = Y, (Al === null ? t.memoizedState : Al.next) === null && (t = t.alternate, b.H = t === null || t.memoizedState === null ? gs : ni), l;
  }
  function tn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return ka(l);
      if (l.$$typeof === jl) return ql(l);
    }
    throw Error(o(438, String(l)));
  }
  function Wf(l) {
    var t = null, u = Y.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = Y.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = ln(), Y.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++)
        u[a] = xu;
    return t.index++, u;
  }
  function Qt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function un(l) {
    var t = zl();
    return $f(t, el, l);
  }
  function $f(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = u;
    var e = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, a.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var i = f = null, c = null, d = t, S = !1;
      do {
        var E = d.lane & -536870913;
        if (E !== d.lane ? (V & E) === E : (Xt & E) === E) {
          var h = d.revertLane;
          if (h === 0)
            c !== null && (c = c.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null
            }), E === fa && (S = !0);
          else if ((Xt & h) === h) {
            d = d.next, h === fa && (S = !0);
            continue;
          } else
            E = {
              lane: 0,
              revertLane: d.revertLane,
              gesture: null,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null
            }, c === null ? (i = c = E, f = n) : c = c.next = E, Y.lanes |= h, yu |= h;
          E = d.action, ju && u(n, E), n = d.hasEagerState ? d.eagerState : u(n, E);
        } else
          h = {
            lane: E,
            revertLane: d.revertLane,
            gesture: d.gesture,
            action: d.action,
            hasEagerState: d.hasEagerState,
            eagerState: d.eagerState,
            next: null
          }, c === null ? (i = c = h, f = n) : c = c.next = h, Y.lanes |= E, yu |= E;
        d = d.next;
      } while (d !== null && d !== t);
      if (c === null ? f = n : c.next = i, !lt(n, l.memoizedState) && (_l = !0, S && (u = ia, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = c, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Ff(l) {
    var t = zl(), u = t.queue;
    if (u === null) throw Error(o(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, e = u.pending, n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      lt(n, t.memoizedState) || (_l = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function Y0(l, t, u) {
    var a = Y, e = zl(), n = J;
    if (n) {
      if (u === void 0) throw Error(o(407));
      u = u();
    } else u = t();
    var f = !lt(
      (el || e).memoizedState,
      u
    );
    if (f && (e.memoizedState = u, _l = !0), e = e.queue, Pf(X0.bind(null, a, e, l), [
      l
    ]), e.getSnapshot !== t || f || Al !== null && Al.memoizedState.tag & 1) {
      if (a.flags |= 2048, da(
        9,
        { destroy: void 0 },
        G0.bind(
          null,
          a,
          e,
          u,
          t
        ),
        null
      ), cl === null) throw Error(o(349));
      n || (Xt & 127) !== 0 || j0(a, t, u);
    }
    return u;
  }
  function j0(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = Y.updateQueue, t === null ? (t = ln(), Y.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function G0(l, t, u, a) {
    t.value = u, t.getSnapshot = a, Q0(t) && x0(l);
  }
  function X0(l, t, u) {
    return u(function() {
      Q0(t) && x0(l);
    });
  }
  function Q0(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !lt(l, u);
    } catch {
      return !0;
    }
  }
  function x0(l) {
    var t = Uu(l, 2);
    t !== null && Fl(t, l, 2);
  }
  function kf(l) {
    var t = Ql();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), ju) {
        Ft(!0);
        try {
          u();
        } finally {
          Ft(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qt,
      lastRenderedState: l
    }, t;
  }
  function Z0(l, t, u, a) {
    return l.baseState = u, $f(
      l,
      el,
      typeof a == "function" ? a : Qt
    );
  }
  function Xv(l, t, u, a, e) {
    if (nn(l)) throw Error(o(485));
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
      b.T !== null ? u(!0) : n.isTransition = !1, a(n), u = t.pending, u === null ? (n.next = t.pending = n, V0(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function V0(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = b.T, f = {};
      b.T = f;
      try {
        var i = u(e, a), c = b.S;
        c !== null && c(f, i), L0(l, t, i);
      } catch (d) {
        If(l, t, d);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), b.T = n;
      }
    } else
      try {
        n = u(e, a), L0(l, t, n);
      } catch (d) {
        If(l, t, d);
      }
  }
  function L0(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(a) {
        K0(l, t, a);
      },
      function(a) {
        return If(l, t, a);
      }
    ) : K0(l, t, u);
  }
  function K0(l, t, u) {
    t.status = "fulfilled", t.value = u, J0(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, V0(l, u)));
  }
  function If(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, J0(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function J0(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function w0(l, t) {
    return t;
  }
  function W0(l, t) {
    if (J) {
      var u = cl.formState;
      if (u !== null) {
        l: {
          var a = Y;
          if (J) {
            if (sl) {
              t: {
                for (var e = sl, n = ht; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = gt(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                sl = gt(
                  e.nextSibling
                ), a = e.data === "F!";
                break l;
              }
            }
            tu(a);
          }
          a = !1;
        }
        a && (t = u[0]);
      }
    }
    return u = Ql(), u.memoizedState = u.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: w0,
      lastRenderedState: t
    }, u.queue = a, u = ds.bind(
      null,
      Y,
      a
    ), a.dispatch = u, a = kf(!1), n = ei.bind(
      null,
      Y,
      !1,
      a.queue
    ), a = Ql(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = e, u = Xv.bind(
      null,
      Y,
      e,
      n,
      u
    ), e.dispatch = u, a.memoizedState = l, [t, u, !1];
  }
  function $0(l) {
    var t = zl();
    return F0(t, el, l);
  }
  function F0(l, t, u) {
    if (t = $f(
      l,
      t,
      w0
    )[0], l = un(Qt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = ka(t);
      } catch (f) {
        throw f === ca ? Je : f;
      }
    else a = t;
    t = zl();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (Y.flags |= 2048, da(
      9,
      { destroy: void 0 },
      Qv.bind(null, e, u),
      null
    )), [a, n, l];
  }
  function Qv(l, t) {
    l.action = t;
  }
  function k0(l) {
    var t = zl(), u = el;
    if (u !== null)
      return F0(t, u, l);
    zl(), t = t.memoizedState, u = zl();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, !1];
  }
  function da(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = Y.updateQueue, t === null && (t = ln(), Y.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function I0() {
    return zl().memoizedState;
  }
  function an(l, t, u, a) {
    var e = Ql();
    Y.flags |= l, e.memoizedState = da(
      1 | t,
      { destroy: void 0 },
      u,
      a === void 0 ? null : a
    );
  }
  function en(l, t, u, a) {
    var e = zl();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    el !== null && a !== null && Vf(a, el.memoizedState.deps) ? e.memoizedState = da(t, n, u, a) : (Y.flags |= l, e.memoizedState = da(
      1 | t,
      n,
      u,
      a
    ));
  }
  function P0(l, t) {
    an(8390656, 8, l, t);
  }
  function Pf(l, t) {
    en(2048, 8, l, t);
  }
  function xv(l) {
    Y.flags |= 4;
    var t = Y.updateQueue;
    if (t === null)
      t = ln(), Y.updateQueue = t, t.events = [l];
    else {
      var u = t.events;
      u === null ? t.events = [l] : u.push(l);
    }
  }
  function ls(l) {
    var t = zl().memoizedState;
    return xv({ ref: t, nextImpl: l }), function() {
      if ((k & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function ts(l, t) {
    return en(4, 2, l, t);
  }
  function us(l, t) {
    return en(4, 4, l, t);
  }
  function as(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function() {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function es(l, t, u) {
    u = u != null ? u.concat([l]) : null, en(4, 4, as.bind(null, t, l), u);
  }
  function li() {
  }
  function ns(l, t) {
    var u = zl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && Vf(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function fs(l, t) {
    var u = zl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && Vf(t, a[1]))
      return a[0];
    if (a = l(), ju) {
      Ft(!0);
      try {
        l();
      } finally {
        Ft(!1);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function ti(l, t, u) {
    return u === void 0 || (Xt & 1073741824) !== 0 && (V & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = u, l = iy(), Y.lanes |= l, yu |= l, u);
  }
  function is(l, t, u, a) {
    return lt(u, t) ? u : ya.current !== null ? (l = ti(l, u, a), lt(l, t) || (_l = !0), l) : (Xt & 42) === 0 || (Xt & 1073741824) !== 0 && (V & 261930) === 0 ? (_l = !0, l.memoizedState = u) : (l = iy(), Y.lanes |= l, yu |= l, t);
  }
  function cs(l, t, u, a, e) {
    var n = _.p;
    _.p = n !== 0 && 8 > n ? n : 8;
    var f = b.T, i = {};
    b.T = i, ei(l, !1, t, u);
    try {
      var c = e(), d = b.S;
      if (d !== null && d(i, c), c !== null && typeof c == "object" && typeof c.then == "function") {
        var S = Yv(
          c,
          a
        );
        Ia(
          l,
          t,
          S,
          ft(l)
        );
      } else
        Ia(
          l,
          t,
          a,
          ft(l)
        );
    } catch (E) {
      Ia(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: E },
        ft()
      );
    } finally {
      _.p = n, f !== null && i.types !== null && (f.types = i.types), b.T = f;
    }
  }
  function Zv() {
  }
  function ui(l, t, u, a) {
    if (l.tag !== 5) throw Error(o(476));
    var e = ss(l).queue;
    cs(
      l,
      e,
      t,
      C,
      u === null ? Zv : function() {
        return ys(l), u(a);
      }
    );
  }
  function ss(l) {
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
        lastRenderedReducer: Qt,
        lastRenderedState: C
      },
      next: null
    };
    var u = {};
    return t.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qt,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function ys(l) {
    var t = ss(l);
    t.next === null && (t = l.alternate.memoizedState), Ia(
      l,
      t.next.queue,
      {},
      ft()
    );
  }
  function ai() {
    return ql(oe);
  }
  function ms() {
    return zl().memoizedState;
  }
  function vs() {
    return zl().memoizedState;
  }
  function Vv(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = ft();
          l = eu(u);
          var a = nu(t, l, u);
          a !== null && (Fl(a, t, u), wa(a, t, u)), t = { cache: Rf() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Lv(l, t, u) {
    var a = ft();
    u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l) ? hs(t, u) : (u = Ef(l, t, u, a), u !== null && (Fl(u, l, a), os(u, t, a)));
  }
  function ds(l, t, u) {
    var a = ft();
    Ia(l, t, u, a);
  }
  function Ia(l, t, u, a) {
    var e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (nn(l)) hs(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, i = n(f, u);
          if (e.hasEagerState = !0, e.eagerState = i, lt(i, f))
            return Xe(l, t, e, 0), cl === null && Ge(), !1;
        } catch {
        } finally {
        }
      if (u = Ef(l, t, e, a), u !== null)
        return Fl(u, l, a), os(u, t, a), !0;
    }
    return !1;
  }
  function ei(l, t, u, a) {
    if (a = {
      lane: 2,
      revertLane: Yi(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l)) {
      if (t) throw Error(o(479));
    } else
      t = Ef(
        l,
        u,
        a,
        2
      ), t !== null && Fl(t, l, 2);
  }
  function nn(l) {
    var t = l.alternate;
    return l === Y || t !== null && t === Y;
  }
  function hs(l, t) {
    ma = Ie = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function os(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, zc(l, u);
    }
  }
  var Pa = {
    readContext: ql,
    use: tn,
    useCallback: hl,
    useContext: hl,
    useEffect: hl,
    useImperativeHandle: hl,
    useLayoutEffect: hl,
    useInsertionEffect: hl,
    useMemo: hl,
    useReducer: hl,
    useRef: hl,
    useState: hl,
    useDebugValue: hl,
    useDeferredValue: hl,
    useTransition: hl,
    useSyncExternalStore: hl,
    useId: hl,
    useHostTransitionStatus: hl,
    useFormState: hl,
    useActionState: hl,
    useOptimistic: hl,
    useMemoCache: hl,
    useCacheRefresh: hl
  };
  Pa.useEffectEvent = hl;
  var gs = {
    readContext: ql,
    use: tn,
    useCallback: function(l, t) {
      return Ql().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: ql,
    useEffect: P0,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, an(
        4194308,
        4,
        as.bind(null, t, l),
        u
      );
    },
    useLayoutEffect: function(l, t) {
      return an(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      an(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var u = Ql();
      t = t === void 0 ? null : t;
      var a = l();
      if (ju) {
        Ft(!0);
        try {
          l();
        } finally {
          Ft(!1);
        }
      }
      return u.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, u) {
      var a = Ql();
      if (u !== void 0) {
        var e = u(t);
        if (ju) {
          Ft(!0);
          try {
            u(t);
          } finally {
            Ft(!1);
          }
        }
      } else e = t;
      return a.memoizedState = a.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, a.queue = l, l = l.dispatch = Lv.bind(
        null,
        Y,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = Ql();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = kf(l);
      var t = l.queue, u = ds.bind(null, Y, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: li,
    useDeferredValue: function(l, t) {
      var u = Ql();
      return ti(u, l, t);
    },
    useTransition: function() {
      var l = kf(!1);
      return l = cs.bind(
        null,
        Y,
        l.queue,
        !0,
        !1
      ), Ql().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = Y, e = Ql();
      if (J) {
        if (u === void 0)
          throw Error(o(407));
        u = u();
      } else {
        if (u = t(), cl === null)
          throw Error(o(349));
        (V & 127) !== 0 || j0(a, t, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return e.queue = n, P0(X0.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, da(
        9,
        { destroy: void 0 },
        G0.bind(
          null,
          a,
          n,
          u,
          t
        ),
        null
      ), u;
    },
    useId: function() {
      var l = Ql(), t = cl.identifierPrefix;
      if (J) {
        var u = Ut, a = Dt;
        u = (a & ~(1 << 32 - Pl(a) - 1)).toString(32) + u, t = "_" + t + "R_" + u, u = Pe++, 0 < u && (t += "H" + u.toString(32)), t += "_";
      } else
        u = jv++, t = "_" + t + "r_" + u.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: ai,
    useFormState: W0,
    useActionState: W0,
    useOptimistic: function(l) {
      var t = Ql();
      t.memoizedState = t.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = u, t = ei.bind(
        null,
        Y,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: Wf,
    useCacheRefresh: function() {
      return Ql().memoizedState = Vv.bind(
        null,
        Y
      );
    },
    useEffectEvent: function(l) {
      var t = Ql(), u = { impl: l };
      return t.memoizedState = u, function() {
        if ((k & 2) !== 0)
          throw Error(o(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, ni = {
    readContext: ql,
    use: tn,
    useCallback: ns,
    useContext: ql,
    useEffect: Pf,
    useImperativeHandle: es,
    useInsertionEffect: ts,
    useLayoutEffect: us,
    useMemo: fs,
    useReducer: un,
    useRef: I0,
    useState: function() {
      return un(Qt);
    },
    useDebugValue: li,
    useDeferredValue: function(l, t) {
      var u = zl();
      return is(
        u,
        el.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = un(Qt)[0], t = zl().memoizedState;
      return [
        typeof l == "boolean" ? l : ka(l),
        t
      ];
    },
    useSyncExternalStore: Y0,
    useId: ms,
    useHostTransitionStatus: ai,
    useFormState: $0,
    useActionState: $0,
    useOptimistic: function(l, t) {
      var u = zl();
      return Z0(u, el, l, t);
    },
    useMemoCache: Wf,
    useCacheRefresh: vs
  };
  ni.useEffectEvent = ls;
  var Ss = {
    readContext: ql,
    use: tn,
    useCallback: ns,
    useContext: ql,
    useEffect: Pf,
    useImperativeHandle: es,
    useInsertionEffect: ts,
    useLayoutEffect: us,
    useMemo: fs,
    useReducer: Ff,
    useRef: I0,
    useState: function() {
      return Ff(Qt);
    },
    useDebugValue: li,
    useDeferredValue: function(l, t) {
      var u = zl();
      return el === null ? ti(u, l, t) : is(
        u,
        el.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Ff(Qt)[0], t = zl().memoizedState;
      return [
        typeof l == "boolean" ? l : ka(l),
        t
      ];
    },
    useSyncExternalStore: Y0,
    useId: ms,
    useHostTransitionStatus: ai,
    useFormState: k0,
    useActionState: k0,
    useOptimistic: function(l, t) {
      var u = zl();
      return el !== null ? Z0(u, el, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Wf,
    useCacheRefresh: vs
  };
  Ss.useEffectEvent = ls;
  function fi(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : N({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var ii = {
    enqueueSetState: function(l, t, u) {
      l = l._reactInternals;
      var a = ft(), e = eu(a);
      e.payload = t, u != null && (e.callback = u), t = nu(l, e, a), t !== null && (Fl(t, l, a), wa(t, l, a));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var a = ft(), e = eu(a);
      e.tag = 1, e.payload = t, u != null && (e.callback = u), t = nu(l, e, a), t !== null && (Fl(t, l, a), wa(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = ft(), a = eu(u);
      a.tag = 2, t != null && (a.callback = t), t = nu(l, a, u), t !== null && (Fl(t, l, u), wa(t, l, u));
    }
  };
  function rs(l, t, u, a, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Xa(u, a) || !Xa(e, n) : !0;
  }
  function bs(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && ii.enqueueReplaceState(t, t.state, null);
  }
  function Gu(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t)
        a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = N({}, u));
      for (var e in l)
        u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  function zs(l) {
    je(l);
  }
  function Es(l) {
    console.error(l);
  }
  function Ts(l) {
    je(l);
  }
  function fn(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function As(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, {
        componentStack: u.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function ci(l, t, u) {
    return u = eu(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      fn(l, t);
    }, u;
  }
  function _s(l) {
    return l = eu(l), l.tag = 3, l;
  }
  function Os(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        As(t, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      As(t, u, a), typeof e != "function" && (mu === null ? mu = /* @__PURE__ */ new Set([this]) : mu.add(this));
      var i = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: i !== null ? i : ""
      });
    });
  }
  function Kv(l, t, u, a, e) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && na(
        t,
        u,
        e,
        !0
      ), u = ut.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return ot === null ? bn() : u.alternate === null && ol === 0 && (ol = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === we ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Ci(l, a, e)), !1;
          case 22:
            return u.flags |= 65536, a === we ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), Ci(l, a, e)), !1;
        }
        throw Error(o(435, u.tag));
      }
      return Ci(l, a, e), bn(), !1;
    }
    if (J)
      return t = ut.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== Df && (l = Error(o(422), { cause: a }), Za(mt(l, u)))) : (a !== Df && (t = Error(o(423), {
        cause: a
      }), Za(
        mt(t, u)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = mt(a, u), e = ci(
        l.stateNode,
        a,
        e
      ), Gf(l, e), ol !== 4 && (ol = 2)), !1;
    var n = Error(o(520), { cause: a });
    if (n = mt(n, u), ie === null ? ie = [n] : ie.push(n), ol !== 4 && (ol = 2), t === null) return !0;
    a = mt(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = ci(u.stateNode, a, l), Gf(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (mu === null || !mu.has(n))))
            return u.flags |= 65536, e &= -e, u.lanes |= e, e = _s(e), Os(
              e,
              l,
              u,
              a
            ), Gf(u, e), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var si = Error(o(461)), _l = !1;
  function Bl(l, t, u, a) {
    t.child = l === null ? p0(t, null, u, a) : Yu(
      t,
      l.child,
      u,
      a
    );
  }
  function Ms(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var i in a)
        i !== "ref" && (f[i] = a[i]);
    } else f = a;
    return Ru(t), a = Lf(
      l,
      t,
      u,
      f,
      n,
      e
    ), i = Kf(), l !== null && !_l ? (Jf(l, t, e), xt(l, t, e)) : (J && i && Of(t), t.flags |= 1, Bl(l, t, a, e), t.child);
  }
  function Ds(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !Tf(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, Us(
        l,
        t,
        n,
        a,
        e
      )) : (l = xe(
        u.type,
        null,
        a,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !Si(l, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Xa, u(f, a) && l.ref === t.ref)
        return xt(l, t, e);
    }
    return t.flags |= 1, l = Bt(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Us(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Xa(n, a) && l.ref === t.ref)
        if (_l = !1, t.pendingProps = a = n, Si(l, e))
          (l.flags & 131072) !== 0 && (_l = !0);
        else
          return t.lanes = l.lanes, xt(l, t, e);
    }
    return yi(
      l,
      t,
      u,
      a,
      e
    );
  }
  function ps(l, t, u, a) {
    var e = a.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | u : u, l !== null) {
          for (a = t.child = l.child, e = 0; a !== null; )
            e = e | a.lanes | a.childLanes, a = a.sibling;
          a = e & ~n;
        } else a = 0, t.child = null;
        return Ns(
          l,
          t,
          n,
          u,
          a
        );
      }
      if ((u & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ke(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? R0(t, n) : Qf(), C0(t);
      else
        return a = t.lanes = 536870912, Ns(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u,
          a
        );
    } else
      n !== null ? (Ke(t, n.cachePool), R0(t, n), iu(), t.memoizedState = null) : (l !== null && Ke(t, null), Qf(), iu());
    return Bl(l, t, e, u), t.child;
  }
  function le(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Ns(l, t, u, a, e) {
    var n = qf();
    return n = n === null ? null : { parent: Tl._currentValue, pool: n }, t.memoizedState = {
      baseLanes: u,
      cachePool: n
    }, l !== null && Ke(t, null), Qf(), C0(t), l !== null && na(l, t, a, !0), t.childLanes = e, null;
  }
  function cn(l, t) {
    return t = yn(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Hs(l, t, u) {
    return Yu(t, l.child, null, u), l = cn(t, t.pendingProps), l.flags |= 2, at(t), t.memoizedState = null, l;
  }
  function Jv(l, t, u) {
    var a = t.pendingProps, e = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (J) {
        if (a.mode === "hidden")
          return l = cn(t, a), t.lanes = 536870912, le(null, l);
        if (Zf(t), (l = sl) ? (l = Vy(
          l,
          ht
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: Pt !== null ? { id: Dt, overflow: Ut } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = h0(l), u.return = t, t.child = u, Cl = t, sl = null)) : l = null, l === null) throw tu(t);
        return t.lanes = 536870912, null;
      }
      return cn(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if (Zf(t), e)
        if (t.flags & 256)
          t.flags &= -257, t = Hs(
            l,
            t,
            u
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (_l || na(l, t, u, !1), e = (u & l.childLanes) !== 0, _l || e) {
        if (a = cl, a !== null && (f = Ec(a, u), f !== 0 && f !== n.retryLane))
          throw n.retryLane = f, Uu(l, f), Fl(a, l, f), si;
        bn(), t = Hs(
          l,
          t,
          u
        );
      } else
        l = n.treeContext, sl = gt(f.nextSibling), Cl = t, J = !0, lu = null, ht = !1, l !== null && S0(t, l), t = cn(t, a), t.flags |= 4096;
      return t;
    }
    return l = Bt(l.child, {
      mode: a.mode,
      children: a.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function sn(l, t) {
    var u = t.ref;
    if (u === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(o(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function yi(l, t, u, a, e) {
    return Ru(t), u = Lf(
      l,
      t,
      u,
      a,
      void 0,
      e
    ), a = Kf(), l !== null && !_l ? (Jf(l, t, e), xt(l, t, e)) : (J && a && Of(t), t.flags |= 1, Bl(l, t, u, e), t.child);
  }
  function Rs(l, t, u, a, e, n) {
    return Ru(t), t.updateQueue = null, u = B0(
      t,
      a,
      u,
      e
    ), q0(l), a = Kf(), l !== null && !_l ? (Jf(l, t, n), xt(l, t, n)) : (J && a && Of(t), t.flags |= 1, Bl(l, t, u, n), t.child);
  }
  function Cs(l, t, u, a, e) {
    if (Ru(t), t.stateNode === null) {
      var n = ta, f = u.contextType;
      typeof f == "object" && f !== null && (n = ql(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = ii, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Yf(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? ql(f) : ta, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (fi(
        t,
        u,
        f,
        a
      ), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && ii.enqueueReplaceState(n, n.state, null), $a(t, a, n, e), Wa(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var i = t.memoizedProps, c = Gu(u, i);
      n.props = c;
      var d = n.context, S = u.contextType;
      f = ta, typeof S == "object" && S !== null && (f = ql(S));
      var E = u.getDerivedStateFromProps;
      S = typeof E == "function" || typeof n.getSnapshotBeforeUpdate == "function", i = t.pendingProps !== i, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i || d !== f) && bs(
        t,
        n,
        a,
        f
      ), au = !1;
      var h = t.memoizedState;
      n.state = h, $a(t, a, n, e), Wa(), d = t.memoizedState, i || h !== d || au ? (typeof E == "function" && (fi(
        t,
        u,
        E,
        a
      ), d = t.memoizedState), (c = au || rs(
        t,
        u,
        c,
        a,
        h,
        d,
        f
      )) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = d), n.props = a, n.state = d, n.context = f, a = c) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, jf(l, t), f = t.memoizedProps, S = Gu(u, f), n.props = S, E = t.pendingProps, h = n.context, d = u.contextType, c = ta, typeof d == "object" && d !== null && (c = ql(d)), i = u.getDerivedStateFromProps, (d = typeof i == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== E || h !== c) && bs(
        t,
        n,
        a,
        c
      ), au = !1, h = t.memoizedState, n.state = h, $a(t, a, n, e), Wa();
      var g = t.memoizedState;
      f !== E || h !== g || au || l !== null && l.dependencies !== null && Ve(l.dependencies) ? (typeof i == "function" && (fi(
        t,
        u,
        i,
        a
      ), g = t.memoizedState), (S = au || rs(
        t,
        u,
        S,
        a,
        h,
        g,
        c
      ) || l !== null && l.dependencies !== null && Ve(l.dependencies)) ? (d || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, g, c), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        g,
        c
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = g), n.props = a, n.state = g, n.context = c, a = S) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, sn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = Yu(
      t,
      l.child,
      null,
      e
    ), t.child = Yu(
      t,
      null,
      u,
      e
    )) : Bl(l, t, u, e), t.memoizedState = n.state, l = t.child) : l = xt(
      l,
      t,
      e
    ), l;
  }
  function qs(l, t, u, a) {
    return Nu(), t.flags |= 256, Bl(l, t, u, a), t.child;
  }
  var mi = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function vi(l) {
    return { baseLanes: l, cachePool: A0() };
  }
  function di(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= nt), l;
  }
  function Bs(l, t, u) {
    var a = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (bl.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (J) {
        if (e ? fu(t) : iu(), (l = sl) ? (l = Vy(
          l,
          ht
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: Pt !== null ? { id: Dt, overflow: Ut } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = h0(l), u.return = t, t.child = u, Cl = t, sl = null)) : l = null, l === null) throw tu(t);
        return $i(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var i = a.children;
      return a = a.fallback, e ? (iu(), e = t.mode, i = yn(
        { mode: "hidden", children: i },
        e
      ), a = pu(
        a,
        e,
        u,
        null
      ), i.return = t, a.return = t, i.sibling = a, t.child = i, a = t.child, a.memoizedState = vi(u), a.childLanes = di(
        l,
        f,
        u
      ), t.memoizedState = mi, le(null, a)) : (fu(t), hi(t, i));
    }
    var c = l.memoizedState;
    if (c !== null && (i = c.dehydrated, i !== null)) {
      if (n)
        t.flags & 256 ? (fu(t), t.flags &= -257, t = oi(
          l,
          t,
          u
        )) : t.memoizedState !== null ? (iu(), t.child = l.child, t.flags |= 128, t = null) : (iu(), i = a.fallback, e = t.mode, a = yn(
          { mode: "visible", children: a.children },
          e
        ), i = pu(
          i,
          e,
          u,
          null
        ), i.flags |= 2, a.return = t, i.return = t, a.sibling = i, t.child = a, Yu(
          t,
          l.child,
          null,
          u
        ), a = t.child, a.memoizedState = vi(u), a.childLanes = di(
          l,
          f,
          u
        ), t.memoizedState = mi, t = le(null, a));
      else if (fu(t), $i(i)) {
        if (f = i.nextSibling && i.nextSibling.dataset, f) var d = f.dgst;
        f = d, a = Error(o(419)), a.stack = "", a.digest = f, Za({ value: a, source: null, stack: null }), t = oi(
          l,
          t,
          u
        );
      } else if (_l || na(l, t, u, !1), f = (u & l.childLanes) !== 0, _l || f) {
        if (f = cl, f !== null && (a = Ec(f, u), a !== 0 && a !== c.retryLane))
          throw c.retryLane = a, Uu(l, a), Fl(f, l, a), si;
        Wi(i) || bn(), t = oi(
          l,
          t,
          u
        );
      } else
        Wi(i) ? (t.flags |= 192, t.child = l.child, t = null) : (l = c.treeContext, sl = gt(
          i.nextSibling
        ), Cl = t, J = !0, lu = null, ht = !1, l !== null && S0(t, l), t = hi(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (iu(), i = a.fallback, e = t.mode, c = l.child, d = c.sibling, a = Bt(c, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = c.subtreeFlags & 65011712, d !== null ? i = Bt(
      d,
      i
    ) : (i = pu(
      i,
      e,
      u,
      null
    ), i.flags |= 2), i.return = t, a.return = t, a.sibling = i, t.child = a, le(null, a), a = t.child, i = l.child.memoizedState, i === null ? i = vi(u) : (e = i.cachePool, e !== null ? (c = Tl._currentValue, e = e.parent !== c ? { parent: c, pool: c } : e) : e = A0(), i = {
      baseLanes: i.baseLanes | u,
      cachePool: e
    }), a.memoizedState = i, a.childLanes = di(
      l,
      f,
      u
    ), t.memoizedState = mi, le(l.child, a)) : (fu(t), u = l.child, l = u.sibling, u = Bt(u, {
      mode: "visible",
      children: a.children
    }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function hi(l, t) {
    return t = yn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function yn(l, t) {
    return l = tt(22, l, null, t), l.lanes = 0, l;
  }
  function oi(l, t, u) {
    return Yu(t, l.child, null, u), l = hi(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Ys(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Nf(l.return, t, u);
  }
  function gi(l, t, u, a, e, n) {
    var f = l.memoizedState;
    f === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: u,
      tailMode: e,
      treeForkCount: n
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = u, f.tailMode = e, f.treeForkCount = n);
  }
  function js(l, t, u) {
    var a = t.pendingProps, e = a.revealOrder, n = a.tail;
    a = a.children;
    var f = bl.current, i = (f & 2) !== 0;
    if (i ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, O(bl, f), Bl(l, t, a, u), a = J ? xa : 0, !i && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && Ys(l, u, t);
        else if (l.tag === 19)
          Ys(l, u, t);
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
        for (u = t.child, e = null; u !== null; )
          l = u.alternate, l !== null && ke(l) === null && (e = u), u = u.sibling;
        u = e, u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null), gi(
          t,
          !1,
          e,
          u,
          n,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && ke(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = u, u = e, e = l;
        }
        gi(
          t,
          !0,
          u,
          null,
          n,
          a
        );
        break;
      case "together":
        gi(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function xt(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), yu |= t.lanes, (u & t.childLanes) === 0)
      if (l !== null) {
        if (na(
          l,
          t,
          u,
          !1
        ), (u & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(o(153));
    if (t.child !== null) {
      for (l = t.child, u = Bt(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Bt(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function Si(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ve(l)));
  }
  function wv(l, t, u) {
    switch (t.tag) {
      case 3:
        Xl(t, t.stateNode.containerInfo), uu(t, Tl, l.memoizedState.cache), Nu();
        break;
      case 27:
      case 5:
        Ma(t);
        break;
      case 4:
        Xl(t, t.stateNode.containerInfo);
        break;
      case 10:
        uu(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Zf(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (fu(t), t.flags |= 128, null) : (u & t.child.childLanes) !== 0 ? Bs(l, t, u) : (fu(t), l = xt(
            l,
            t,
            u
          ), l !== null ? l.sibling : null);
        fu(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (a = (u & t.childLanes) !== 0, a || (na(
          l,
          t,
          u,
          !1
        ), a = (u & t.childLanes) !== 0), e) {
          if (a)
            return js(
              l,
              t,
              u
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), O(bl, bl.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, ps(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        uu(t, Tl, l.memoizedState.cache);
    }
    return xt(l, t, u);
  }
  function Gs(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        _l = !0;
      else {
        if (!Si(l, u) && (t.flags & 128) === 0)
          return _l = !1, wv(
            l,
            t,
            u
          );
        _l = (l.flags & 131072) !== 0;
      }
    else
      _l = !1, J && (t.flags & 1048576) !== 0 && g0(t, xa, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = qu(t.elementType), t.type = l, typeof l == "function")
            Tf(l) ? (a = Gu(l, a), t.tag = 1, t = Cs(
              null,
              t,
              l,
              a,
              u
            )) : (t.tag = 0, t = yi(
              null,
              t,
              l,
              a,
              u
            ));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === it) {
                t.tag = 11, t = Ms(
                  null,
                  t,
                  l,
                  a,
                  u
                );
                break l;
              } else if (e === K) {
                t.tag = 14, t = Ds(
                  null,
                  t,
                  l,
                  a,
                  u
                );
                break l;
              }
            }
            throw t = Ht(l) || l, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return yi(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 1:
        return a = t.type, e = Gu(
          a,
          t.pendingProps
        ), Cs(
          l,
          t,
          a,
          e,
          u
        );
      case 3:
        l: {
          if (Xl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(o(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, jf(l, t), $a(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, uu(t, Tl, a), a !== n.cache && Hf(
            t,
            [Tl],
            u,
            !0
          ), Wa(), a = f.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = qs(
                l,
                t,
                a,
                u
              );
              break l;
            } else if (a !== e) {
              e = mt(
                Error(o(424)),
                t
              ), Za(e), t = qs(
                l,
                t,
                a,
                u
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
              for (sl = gt(l.firstChild), Cl = t, J = !0, lu = null, ht = !0, u = p0(
                t,
                null,
                a,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Nu(), a === e) {
              t = xt(
                l,
                t,
                u
              );
              break l;
            }
            Bl(l, t, a, u);
          }
          t = t.child;
        }
        return t;
      case 26:
        return sn(l, t), l === null ? (u = $y(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : J || (u = t.type, l = t.pendingProps, a = Mn(
          X.current
        ).createElement(u), a[Rl] = t, a[Ll] = l, Yl(a, u, l), Nl(a), t.stateNode = a) : t.memoizedState = $y(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Ma(t), l === null && J && (a = t.stateNode = Jy(
          t.type,
          t.pendingProps,
          X.current
        ), Cl = t, ht = !0, e = sl, ou(t.type) ? (Fi = e, sl = gt(a.firstChild)) : sl = e), Bl(
          l,
          t,
          t.pendingProps.children,
          u
        ), sn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && J && ((e = a = sl) && (a = Ad(
          a,
          t.type,
          t.pendingProps,
          ht
        ), a !== null ? (t.stateNode = a, Cl = t, sl = gt(a.firstChild), ht = !1, e = !0) : e = !1), e || tu(t)), Ma(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, Ki(e, n) ? a = null : f !== null && Ki(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Lf(
          l,
          t,
          Gv,
          null,
          null,
          u
        ), oe._currentValue = e), sn(l, t), Bl(l, t, a, u), t.child;
      case 6:
        return l === null && J && ((l = u = sl) && (u = _d(
          u,
          t.pendingProps,
          ht
        ), u !== null ? (t.stateNode = u, Cl = t, sl = null, l = !0) : l = !1), l || tu(t)), null;
      case 13:
        return Bs(l, t, u);
      case 4:
        return Xl(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = Yu(
          t,
          null,
          a,
          u
        ) : Bl(l, t, a, u), t.child;
      case 11:
        return Ms(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 7:
        return Bl(
          l,
          t,
          t.pendingProps,
          u
        ), t.child;
      case 8:
        return Bl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 12:
        return Bl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 10:
        return a = t.pendingProps, uu(t, t.type, a.value), Bl(l, t, a.children, u), t.child;
      case 9:
        return e = t.type._context, a = t.pendingProps.children, Ru(t), e = ql(e), a = a(e), t.flags |= 1, Bl(l, t, a, u), t.child;
      case 14:
        return Ds(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 15:
        return Us(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 19:
        return js(l, t, u);
      case 31:
        return Jv(l, t, u);
      case 22:
        return ps(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        return Ru(t), a = ql(Tl), l === null ? (e = qf(), e === null && (e = cl, n = Rf(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = { parent: a, cache: e }, Yf(t), uu(t, Tl, e)) : ((l.lanes & u) !== 0 && (jf(l, t), $a(t, null, null, u), Wa()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), uu(t, Tl, a)) : (a = n.cache, uu(t, Tl, a), a !== e.cache && Hf(
          t,
          [Tl],
          u,
          !0
        ))), Bl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Zt(l) {
    l.flags |= 4;
  }
  function ri(l, t, u, a, e) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (e & 335544128) === e)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (my()) l.flags |= 8192;
        else
          throw Bu = we, Bf;
    } else l.flags &= -16777217;
  }
  function Xs(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !lm(t))
      if (my()) l.flags |= 8192;
      else
        throw Bu = we, Bf;
  }
  function mn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? rc() : 536870912, l.lanes |= t, Sa |= t);
  }
  function te(l, t) {
    if (!J)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var u = null; t !== null; )
            t.alternate !== null && (u = t), t = t.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var a = null; u !== null; )
            u.alternate !== null && (a = u), u = u.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
      }
  }
  function yl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t)
      for (var e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags & 65011712, a |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags, a |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function Wv(l, t, u) {
    var a = t.pendingProps;
    switch (Mf(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return yl(t), null;
      case 1:
        return yl(t), null;
      case 3:
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Gt(Tl), rl(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (ea(t) ? Zt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Uf())), yl(t), null;
      case 26:
        var e = t.type, n = t.memoizedState;
        return l === null ? (Zt(t), n !== null ? (yl(t), Xs(t, n)) : (yl(t), ri(
          t,
          e,
          null,
          a,
          u
        ))) : n ? n !== l.memoizedState ? (Zt(t), yl(t), Xs(t, n)) : (yl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && Zt(t), yl(t), ri(
          t,
          e,
          l,
          a,
          u
        )), null;
      case 27:
        if (Ee(t), u = X.current, e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Zt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return yl(t), null;
          }
          l = D.current, ea(t) ? r0(t) : (l = Jy(e, a, u), t.stateNode = l, Zt(t));
        }
        return yl(t), null;
      case 5:
        if (Ee(t), e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Zt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return yl(t), null;
          }
          if (n = D.current, ea(t))
            r0(t);
          else {
            var f = Mn(
              X.current
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
                    n = typeof a.is == "string" ? f.createElement("select", {
                      is: a.is
                    }) : f.createElement("select"), a.multiple ? n.multiple = !0 : a.size && (n.size = a.size);
                    break;
                  default:
                    n = typeof a.is == "string" ? f.createElement(e, { is: a.is }) : f.createElement(e);
                }
            }
            n[Rl] = t, n[Ll] = a;
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
            l: switch (Yl(n, e, a), e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && Zt(t);
          }
        }
        return yl(t), ri(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          u
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && Zt(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(o(166));
          if (l = X.current, ea(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = Cl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            l[Rl] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || By(l.nodeValue, u)), l || tu(t, !0);
          } else
            l = Mn(l).createTextNode(
              a
            ), l[Rl] = t, t.stateNode = l;
        }
        return yl(t), null;
      case 31:
        if (u = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = ea(t), u !== null) {
            if (l === null) {
              if (!a) throw Error(o(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(557));
              l[Rl] = t;
            } else
              Nu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            yl(t), l = !1;
          } else
            u = Uf(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return t.flags & 256 ? (at(t), t) : (at(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return yl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = ea(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
              e[Rl] = t;
            } else
              Nu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            yl(t), e = !1;
          } else
            e = Uf(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (at(t), t) : (at(t), null);
        }
        return at(t), (t.flags & 128) !== 0 ? (t.lanes = u, t) : (u = a !== null, l = l !== null && l.memoizedState !== null, u && (a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048)), u !== l && u && (t.child.flags |= 8192), mn(t, t.updateQueue), yl(t), null);
      case 4:
        return rl(), l === null && Qi(t.stateNode.containerInfo), yl(t), null;
      case 10:
        return Gt(t.type), yl(t), null;
      case 19:
        if (T(bl), a = t.memoizedState, a === null) return yl(t), null;
        if (e = (t.flags & 128) !== 0, n = a.rendering, n === null)
          if (e) te(a, !1);
          else {
            if (ol !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = ke(l), n !== null) {
                  for (t.flags |= 128, te(a, !1), l = n.updateQueue, t.updateQueue = l, mn(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    d0(u, l), u = u.sibling;
                  return O(
                    bl,
                    bl.current & 1 | 2
                  ), J && Yt(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && kl() > gn && (t.flags |= 128, e = !0, te(a, !1), t.lanes = 4194304);
          }
        else {
          if (!e)
            if (l = ke(n), l !== null) {
              if (t.flags |= 128, e = !0, l = l.updateQueue, t.updateQueue = l, mn(t, l), te(a, !0), a.tail === null && a.tailMode === "hidden" && !n.alternate && !J)
                return yl(t), null;
            } else
              2 * kl() - a.renderingStartTime > gn && u !== 536870912 && (t.flags |= 128, e = !0, te(a, !1), t.lanes = 4194304);
          a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = kl(), l.sibling = null, u = bl.current, O(
          bl,
          e ? u & 1 | 2 : u & 1
        ), J && Yt(t, a.treeForkCount), l) : (yl(t), null);
      case 22:
      case 23:
        return at(t), xf(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (yl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yl(t), u = t.updateQueue, u !== null && mn(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && T(Cu), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Gt(Tl), yl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function $v(l, t) {
    switch (Mf(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Gt(Tl), rl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ee(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (at(t), t.alternate === null)
            throw Error(o(340));
          Nu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (at(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          Nu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return T(bl), null;
      case 4:
        return rl(), null;
      case 10:
        return Gt(t.type), null;
      case 22:
      case 23:
        return at(t), xf(), l !== null && T(Cu), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Gt(Tl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Qs(l, t) {
    switch (Mf(t), t.tag) {
      case 3:
        Gt(Tl), rl();
        break;
      case 26:
      case 27:
      case 5:
        Ee(t);
        break;
      case 4:
        rl();
        break;
      case 31:
        t.memoizedState !== null && at(t);
        break;
      case 13:
        at(t);
        break;
      case 19:
        T(bl);
        break;
      case 10:
        Gt(t.type);
        break;
      case 22:
      case 23:
        at(t), xf(), l !== null && T(Cu);
        break;
      case 24:
        Gt(Tl);
    }
  }
  function ue(l, t) {
    try {
      var u = t.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e = a.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var n = u.create, f = u.inst;
            a = n(), f.destroy = a;
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (i) {
      tl(t, t.return, i);
    }
  }
  function cu(l, t, u) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var f = a.inst, i = f.destroy;
            if (i !== void 0) {
              f.destroy = void 0, e = t;
              var c = u, d = i;
              try {
                d();
              } catch (S) {
                tl(
                  e,
                  c,
                  S
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (S) {
      tl(t, t.return, S);
    }
  }
  function xs(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        H0(t, u);
      } catch (a) {
        tl(l, l.return, a);
      }
    }
  }
  function Zs(l, t, u) {
    u.props = Gu(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (a) {
      tl(l, t, a);
    }
  }
  function ae(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(a) : u.current = a;
      }
    } catch (e) {
      tl(l, t, e);
    }
  }
  function pt(l, t) {
    var u = l.ref, a = l.refCleanup;
    if (u !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (e) {
          tl(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (e) {
          tl(l, t, e);
        }
      else u.current = null;
  }
  function Vs(l) {
    var t = l.type, u = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? a.src = u.src : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e) {
      tl(l, l.return, e);
    }
  }
  function bi(l, t, u) {
    try {
      var a = l.stateNode;
      Sd(a, l.type, u, t), a[Ll] = t;
    } catch (e) {
      tl(l, l.return, e);
    }
  }
  function Ls(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && ou(l.type) || l.tag === 4;
  }
  function zi(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Ls(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && ou(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Ei(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(l), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = Ct));
    else if (a !== 4 && (a === 27 && ou(l.type) && (u = l.stateNode, t = null), l = l.child, l !== null))
      for (Ei(l, t, u), l = l.sibling; l !== null; )
        Ei(l, t, u), l = l.sibling;
  }
  function vn(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? u.insertBefore(l, t) : u.appendChild(l);
    else if (a !== 4 && (a === 27 && ou(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (vn(l, t, u), l = l.sibling; l !== null; )
        vn(l, t, u), l = l.sibling;
  }
  function Ks(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Yl(t, a, u), t[Rl] = l, t[Ll] = u;
    } catch (n) {
      tl(l, l.return, n);
    }
  }
  var Vt = !1, Ol = !1, Ti = !1, Js = typeof WeakSet == "function" ? WeakSet : Set, Hl = null;
  function Fv(l, t) {
    if (l = l.containerInfo, Vi = Cn, l = e0(l), of(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var a = u.getSelection && u.getSelection();
          if (a && a.rangeCount !== 0) {
            u = a.anchorNode;
            var e = a.anchorOffset, n = a.focusNode;
            a = a.focusOffset;
            try {
              u.nodeType, n.nodeType;
            } catch {
              u = null;
              break l;
            }
            var f = 0, i = -1, c = -1, d = 0, S = 0, E = l, h = null;
            t: for (; ; ) {
              for (var g; E !== u || e !== 0 && E.nodeType !== 3 || (i = f + e), E !== n || a !== 0 && E.nodeType !== 3 || (c = f + a), E.nodeType === 3 && (f += E.nodeValue.length), (g = E.firstChild) !== null; )
                h = E, E = g;
              for (; ; ) {
                if (E === l) break t;
                if (h === u && ++d === e && (i = f), h === n && ++S === a && (c = f), (g = E.nextSibling) !== null) break;
                E = h, h = E.parentNode;
              }
              E = g;
            }
            u = i === -1 || c === -1 ? null : { start: i, end: c };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Li = { focusedElem: l, selectionRange: u }, Cn = !1, Hl = t; Hl !== null; )
      if (t = Hl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Hl = l;
      else
        for (; Hl !== null; ) {
          switch (t = Hl, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (u = 0; u < l.length; u++)
                  e = l[u], e.ref.impl = e.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, u = t, e = n.memoizedProps, n = n.memoizedState, a = u.stateNode;
                try {
                  var M = Gu(
                    u.type,
                    e
                  );
                  l = a.getSnapshotBeforeUpdate(
                    M,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (R) {
                  tl(
                    u,
                    u.return,
                    R
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, u = l.nodeType, u === 9)
                  wi(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      wi(l);
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
              if ((l & 1024) !== 0) throw Error(o(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Hl = l;
            break;
          }
          Hl = t.return;
        }
  }
  function ws(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Kt(l, u), a & 4 && ue(5, u);
        break;
      case 1:
        if (Kt(l, u), a & 4)
          if (l = u.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              tl(u, u.return, f);
            }
          else {
            var e = Gu(
              u.type,
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
              tl(
                u,
                u.return,
                f
              );
            }
          }
        a & 64 && xs(u), a & 512 && ae(u, u.return);
        break;
      case 3:
        if (Kt(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
          if (t = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                t = u.child.stateNode;
                break;
              case 1:
                t = u.child.stateNode;
            }
          try {
            H0(l, t);
          } catch (f) {
            tl(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Ks(u);
      case 26:
      case 5:
        Kt(l, u), t === null && a & 4 && Vs(u), a & 512 && ae(u, u.return);
        break;
      case 12:
        Kt(l, u);
        break;
      case 31:
        Kt(l, u), a & 4 && Fs(l, u);
        break;
      case 13:
        Kt(l, u), a & 4 && ks(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = nd.bind(
          null,
          u
        ), Od(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || Vt, !a) {
          t = t !== null && t.memoizedState !== null || Ol, e = Vt;
          var n = Ol;
          Vt = a, (Ol = t) && !n ? Jt(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Kt(l, u), Vt = e, Ol = n;
        }
        break;
      case 30:
        break;
      default:
        Kt(l, u);
    }
  }
  function Ws(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, Ws(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && kn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var vl = null, Jl = !1;
  function Lt(l, t, u) {
    for (u = u.child; u !== null; )
      $s(l, t, u), u = u.sibling;
  }
  function $s(l, t, u) {
    if (Il && typeof Il.onCommitFiberUnmount == "function")
      try {
        Il.onCommitFiberUnmount(Da, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Ol || pt(u, t), Lt(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Ol || pt(u, t);
        var a = vl, e = Jl;
        ou(u.type) && (vl = u.stateNode, Jl = !1), Lt(
          l,
          t,
          u
        ), ve(u.stateNode), vl = a, Jl = e;
        break;
      case 5:
        Ol || pt(u, t);
      case 6:
        if (a = vl, e = Jl, vl = null, Lt(
          l,
          t,
          u
        ), vl = a, Jl = e, vl !== null)
          if (Jl)
            try {
              (vl.nodeType === 9 ? vl.body : vl.nodeName === "HTML" ? vl.ownerDocument.body : vl).removeChild(u.stateNode);
            } catch (n) {
              tl(
                u,
                t,
                n
              );
            }
          else
            try {
              vl.removeChild(u.stateNode);
            } catch (n) {
              tl(
                u,
                t,
                n
              );
            }
        break;
      case 18:
        vl !== null && (Jl ? (l = vl, xy(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Oa(l)) : xy(vl, u.stateNode));
        break;
      case 4:
        a = vl, e = Jl, vl = u.stateNode.containerInfo, Jl = !0, Lt(
          l,
          t,
          u
        ), vl = a, Jl = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        cu(2, u, t), Ol || cu(4, u, t), Lt(
          l,
          t,
          u
        );
        break;
      case 1:
        Ol || (pt(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && Zs(
          u,
          t,
          a
        )), Lt(
          l,
          t,
          u
        );
        break;
      case 21:
        Lt(
          l,
          t,
          u
        );
        break;
      case 22:
        Ol = (a = Ol) || u.memoizedState !== null, Lt(
          l,
          t,
          u
        ), Ol = a;
        break;
      default:
        Lt(
          l,
          t,
          u
        );
    }
  }
  function Fs(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Oa(l);
      } catch (u) {
        tl(t, t.return, u);
      }
    }
  }
  function ks(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Oa(l);
      } catch (u) {
        tl(t, t.return, u);
      }
  }
  function kv(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Js()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Js()), t;
      default:
        throw Error(o(435, l.tag));
    }
  }
  function dn(l, t) {
    var u = kv(l);
    t.forEach(function(a) {
      if (!u.has(a)) {
        u.add(a);
        var e = fd.bind(null, l, a);
        a.then(e, e);
      }
    });
  }
  function wl(l, t) {
    var u = t.deletions;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a], n = l, f = t, i = f;
        l: for (; i !== null; ) {
          switch (i.tag) {
            case 27:
              if (ou(i.type)) {
                vl = i.stateNode, Jl = !1;
                break l;
              }
              break;
            case 5:
              vl = i.stateNode, Jl = !1;
              break l;
            case 3:
            case 4:
              vl = i.stateNode.containerInfo, Jl = !0;
              break l;
          }
          i = i.return;
        }
        if (vl === null) throw Error(o(160));
        $s(n, f, e), vl = null, Jl = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Is(t, l), t = t.sibling;
  }
  var Et = null;
  function Is(l, t) {
    var u = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        wl(t, l), Wl(l), a & 4 && (cu(3, l, l.return), ue(3, l), cu(5, l, l.return));
        break;
      case 1:
        wl(t, l), Wl(l), a & 512 && (Ol || u === null || pt(u, u.return)), a & 64 && Vt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? a : u.concat(a))));
        break;
      case 26:
        var e = Et;
        if (wl(t, l), Wl(l), a & 512 && (Ol || u === null || pt(u, u.return)), a & 4) {
          var n = u !== null ? u.memoizedState : null;
          if (a = l.memoizedState, u === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, u = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (a) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Na] || n[Rl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(a), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Yl(n, a, u), n[Rl] = l, Nl(n), a = n;
                      break l;
                    case "link":
                      var f = Iy(
                        "link",
                        "href",
                        e
                      ).get(a + (u.href || ""));
                      if (f) {
                        for (var i = 0; i < f.length; i++)
                          if (n = f[i], n.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && n.getAttribute("rel") === (u.rel == null ? null : u.rel) && n.getAttribute("title") === (u.title == null ? null : u.title) && n.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            f.splice(i, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), Yl(n, a, u), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = Iy(
                        "meta",
                        "content",
                        e
                      ).get(a + (u.content || ""))) {
                        for (i = 0; i < f.length; i++)
                          if (n = f[i], n.getAttribute("content") === (u.content == null ? null : "" + u.content) && n.getAttribute("name") === (u.name == null ? null : u.name) && n.getAttribute("property") === (u.property == null ? null : u.property) && n.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && n.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            f.splice(i, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), Yl(n, a, u), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  n[Rl] = l, Nl(n), a = n;
                }
                l.stateNode = a;
              } else
                Py(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = ky(
                e,
                a,
                l.memoizedProps
              );
          else
            n !== a ? (n === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : n.count--, a === null ? Py(
              e,
              l.type,
              l.stateNode
            ) : ky(
              e,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && bi(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        wl(t, l), Wl(l), a & 512 && (Ol || u === null || pt(u, u.return)), u !== null && a & 4 && bi(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (wl(t, l), Wl(l), a & 512 && (Ol || u === null || pt(u, u.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            Wu(e, "");
          } catch (M) {
            tl(l, l.return, M);
          }
        }
        a & 4 && l.stateNode != null && (e = l.memoizedProps, bi(
          l,
          e,
          u !== null ? u.memoizedProps : e
        )), a & 1024 && (Ti = !0);
        break;
      case 6:
        if (wl(t, l), Wl(l), a & 4) {
          if (l.stateNode === null)
            throw Error(o(162));
          a = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = a;
          } catch (M) {
            tl(l, l.return, M);
          }
        }
        break;
      case 3:
        if (pn = null, e = Et, Et = Dn(t.containerInfo), wl(t, l), Et = e, Wl(l), a & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Oa(t.containerInfo);
          } catch (M) {
            tl(l, l.return, M);
          }
        Ti && (Ti = !1, Ps(l));
        break;
      case 4:
        a = Et, Et = Dn(
          l.stateNode.containerInfo
        ), wl(t, l), Wl(l), Et = a;
        break;
      case 12:
        wl(t, l), Wl(l);
        break;
      case 31:
        wl(t, l), Wl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, dn(l, a)));
        break;
      case 13:
        wl(t, l), Wl(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (on = kl()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, dn(l, a)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var c = u !== null && u.memoizedState !== null, d = Vt, S = Ol;
        if (Vt = d || e, Ol = S || c, wl(t, l), Ol = S, Vt = d, Wl(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (u === null || c || Vt || Ol || Xu(l)), u = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (u === null) {
                c = u = t;
                try {
                  if (n = c.stateNode, e)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    i = c.stateNode;
                    var E = c.memoizedProps.style, h = E != null && E.hasOwnProperty("display") ? E.display : null;
                    i.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                  }
                } catch (M) {
                  tl(c, c.return, M);
                }
              }
            } else if (t.tag === 6) {
              if (u === null) {
                c = t;
                try {
                  c.stateNode.nodeValue = e ? "" : c.memoizedProps;
                } catch (M) {
                  tl(c, c.return, M);
                }
              }
            } else if (t.tag === 18) {
              if (u === null) {
                c = t;
                try {
                  var g = c.stateNode;
                  e ? Zy(g, !0) : Zy(c.stateNode, !1);
                } catch (M) {
                  tl(c, c.return, M);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              u === t && (u = null), t = t.return;
            }
            u === t && (u = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = l.updateQueue, a !== null && (u = a.retryQueue, u !== null && (a.retryQueue = null, dn(l, u))));
        break;
      case 19:
        wl(t, l), Wl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, dn(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        wl(t, l), Wl(l);
    }
  }
  function Wl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (Ls(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        if (u == null) throw Error(o(160));
        switch (u.tag) {
          case 27:
            var e = u.stateNode, n = zi(l);
            vn(l, n, e);
            break;
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (Wu(f, ""), u.flags &= -33);
            var i = zi(l);
            vn(l, i, f);
            break;
          case 3:
          case 4:
            var c = u.stateNode.containerInfo, d = zi(l);
            Ei(
              l,
              d,
              c
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (S) {
        tl(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Ps(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Ps(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function Kt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        ws(l, t.alternate, t), t = t.sibling;
  }
  function Xu(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          cu(4, t, t.return), Xu(t);
          break;
        case 1:
          pt(t, t.return);
          var u = t.stateNode;
          typeof u.componentWillUnmount == "function" && Zs(
            t,
            t.return,
            u
          ), Xu(t);
          break;
        case 27:
          ve(t.stateNode);
        case 26:
        case 5:
          pt(t, t.return), Xu(t);
          break;
        case 22:
          t.memoizedState === null && Xu(t);
          break;
        case 30:
          Xu(t);
          break;
        default:
          Xu(t);
      }
      l = l.sibling;
    }
  }
  function Jt(l, t, u) {
    for (u = u && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, e = l, n = t, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Jt(
            e,
            n,
            u
          ), ue(4, n);
          break;
        case 1:
          if (Jt(
            e,
            n,
            u
          ), a = n, e = a.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (d) {
              tl(a, a.return, d);
            }
          if (a = n, e = a.updateQueue, e !== null) {
            var i = a.stateNode;
            try {
              var c = e.shared.hiddenCallbacks;
              if (c !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < c.length; e++)
                  N0(c[e], i);
            } catch (d) {
              tl(a, a.return, d);
            }
          }
          u && f & 64 && xs(n), ae(n, n.return);
          break;
        case 27:
          Ks(n);
        case 26:
        case 5:
          Jt(
            e,
            n,
            u
          ), u && a === null && f & 4 && Vs(n), ae(n, n.return);
          break;
        case 12:
          Jt(
            e,
            n,
            u
          );
          break;
        case 31:
          Jt(
            e,
            n,
            u
          ), u && f & 4 && Fs(e, n);
          break;
        case 13:
          Jt(
            e,
            n,
            u
          ), u && f & 4 && ks(e, n);
          break;
        case 22:
          n.memoizedState === null && Jt(
            e,
            n,
            u
          ), ae(n, n.return);
          break;
        case 30:
          break;
        default:
          Jt(
            e,
            n,
            u
          );
      }
      t = t.sibling;
    }
  }
  function Ai(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Va(u));
  }
  function _i(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Va(l));
  }
  function Tt(l, t, u, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        ly(
          l,
          t,
          u,
          a
        ), t = t.sibling;
  }
  function ly(l, t, u, a) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Tt(
          l,
          t,
          u,
          a
        ), e & 2048 && ue(9, t);
        break;
      case 1:
        Tt(
          l,
          t,
          u,
          a
        );
        break;
      case 3:
        Tt(
          l,
          t,
          u,
          a
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Va(l)));
        break;
      case 12:
        if (e & 2048) {
          Tt(
            l,
            t,
            u,
            a
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
            tl(t, t.return, c);
          }
        } else
          Tt(
            l,
            t,
            u,
            a
          );
        break;
      case 31:
        Tt(
          l,
          t,
          u,
          a
        );
        break;
      case 13:
        Tt(
          l,
          t,
          u,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Tt(
          l,
          t,
          u,
          a
        ) : ee(l, t) : n._visibility & 2 ? Tt(
          l,
          t,
          u,
          a
        ) : (n._visibility |= 2, ha(
          l,
          t,
          u,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), e & 2048 && Ai(f, t);
        break;
      case 24:
        Tt(
          l,
          t,
          u,
          a
        ), e & 2048 && _i(t.alternate, t);
        break;
      default:
        Tt(
          l,
          t,
          u,
          a
        );
    }
  }
  function ha(l, t, u, a, e) {
    for (e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, f = t, i = u, c = a, d = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ha(
            n,
            f,
            i,
            c,
            e
          ), ue(8, f);
          break;
        case 23:
          break;
        case 22:
          var S = f.stateNode;
          f.memoizedState !== null ? S._visibility & 2 ? ha(
            n,
            f,
            i,
            c,
            e
          ) : ee(
            n,
            f
          ) : (S._visibility |= 2, ha(
            n,
            f,
            i,
            c,
            e
          )), e && d & 2048 && Ai(
            f.alternate,
            f
          );
          break;
        case 24:
          ha(
            n,
            f,
            i,
            c,
            e
          ), e && d & 2048 && _i(f.alternate, f);
          break;
        default:
          ha(
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
        var u = l, a = t, e = a.flags;
        switch (a.tag) {
          case 22:
            ee(u, a), e & 2048 && Ai(
              a.alternate,
              a
            );
            break;
          case 24:
            ee(u, a), e & 2048 && _i(a.alternate, a);
            break;
          default:
            ee(u, a);
        }
        t = t.sibling;
      }
  }
  var ne = 8192;
  function oa(l, t, u) {
    if (l.subtreeFlags & ne)
      for (l = l.child; l !== null; )
        ty(
          l,
          t,
          u
        ), l = l.sibling;
  }
  function ty(l, t, u) {
    switch (l.tag) {
      case 26:
        oa(
          l,
          t,
          u
        ), l.flags & ne && l.memoizedState !== null && jd(
          u,
          Et,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        oa(
          l,
          t,
          u
        );
        break;
      case 3:
      case 4:
        var a = Et;
        Et = Dn(l.stateNode.containerInfo), oa(
          l,
          t,
          u
        ), Et = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = ne, ne = 16777216, oa(
          l,
          t,
          u
        ), ne = a) : oa(
          l,
          t,
          u
        ));
        break;
      default:
        oa(
          l,
          t,
          u
        );
    }
  }
  function uy(l) {
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
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Hl = a, ey(
            a,
            l
          );
        }
      uy(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        ay(l), l = l.sibling;
  }
  function ay(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        fe(l), l.flags & 2048 && cu(9, l, l.return);
        break;
      case 3:
        fe(l);
        break;
      case 12:
        fe(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, hn(l)) : fe(l);
        break;
      default:
        fe(l);
    }
  }
  function hn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Hl = a, ey(
            a,
            l
          );
        }
      uy(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          cu(8, t, t.return), hn(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, hn(t));
          break;
        default:
          hn(t);
      }
      l = l.sibling;
    }
  }
  function ey(l, t) {
    for (; Hl !== null; ) {
      var u = Hl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          cu(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Va(u.memoizedState.cache);
      }
      if (a = u.child, a !== null) a.return = u, Hl = a;
      else
        l: for (u = l; Hl !== null; ) {
          a = Hl;
          var e = a.sibling, n = a.return;
          if (Ws(a), a === u) {
            Hl = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Hl = e;
            break l;
          }
          Hl = n;
        }
    }
  }
  var Iv = {
    getCacheForType: function(l) {
      var t = ql(Tl), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return ql(Tl).controller.signal;
    }
  }, Pv = typeof WeakMap == "function" ? WeakMap : Map, k = 0, cl = null, Q = null, V = 0, ll = 0, et = null, su = !1, ga = !1, Oi = !1, wt = 0, ol = 0, yu = 0, Qu = 0, Mi = 0, nt = 0, Sa = 0, ie = null, $l = null, Di = !1, on = 0, ny = 0, gn = 1 / 0, Sn = null, mu = null, Ul = 0, vu = null, ra = null, Wt = 0, Ui = 0, pi = null, fy = null, ce = 0, Ni = null;
  function ft() {
    return (k & 2) !== 0 && V !== 0 ? V & -V : b.T !== null ? Yi() : Tc();
  }
  function iy() {
    if (nt === 0)
      if ((V & 536870912) === 0 || J) {
        var l = _e;
        _e <<= 1, (_e & 3932160) === 0 && (_e = 262144), nt = l;
      } else nt = 536870912;
    return l = ut.current, l !== null && (l.flags |= 32), nt;
  }
  function Fl(l, t, u) {
    (l === cl && (ll === 2 || ll === 9) || l.cancelPendingCommit !== null) && (ba(l, 0), du(
      l,
      V,
      nt,
      !1
    )), pa(l, u), ((k & 2) === 0 || l !== cl) && (l === cl && ((k & 2) === 0 && (Qu |= u), ol === 4 && du(
      l,
      V,
      nt,
      !1
    )), Nt(l));
  }
  function cy(l, t, u) {
    if ((k & 6) !== 0) throw Error(o(327));
    var a = !u && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Ua(l, t), e = a ? ud(l, t) : Ri(l, t, !0), n = a;
    do {
      if (e === 0) {
        ga && !a && du(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !ld(u)) {
          e = Ri(l, t, !1), n = !1;
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
              if (c && (ba(i, f).flags |= 256), f = Ri(
                i,
                f,
                !1
              ), f !== 2) {
                if (Oi && !c) {
                  i.errorRecoveryDisabledLanes |= n, Qu |= n, e = 4;
                  break l;
                }
                n = $l, $l = e, n !== null && ($l === null ? $l = n : $l.push.apply(
                  $l,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          ba(l, 0), du(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, n = e, n) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              du(
                a,
                t,
                nt,
                !su
              );
              break l;
            case 2:
              $l = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (e = on + 300 - kl(), 10 < e)) {
            if (du(
              a,
              t,
              nt,
              !su
            ), Me(a, 0, !0) !== 0) break l;
            Wt = t, a.timeoutHandle = Xy(
              sy.bind(
                null,
                a,
                u,
                $l,
                Sn,
                Di,
                t,
                nt,
                Qu,
                Sa,
                su,
                n,
                "Throttled",
                -0,
                0
              ),
              e
            );
            break l;
          }
          sy(
            a,
            u,
            $l,
            Sn,
            Di,
            t,
            nt,
            Qu,
            Sa,
            su,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Nt(l);
  }
  function sy(l, t, u, a, e, n, f, i, c, d, S, E, h, g) {
    if (l.timeoutHandle = -1, E = t.subtreeFlags, E & 8192 || (E & 16785408) === 16785408) {
      E = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ct
      }, ty(
        t,
        n,
        E
      );
      var M = (n & 62914560) === n ? on - kl() : (n & 4194048) === n ? ny - kl() : 0;
      if (M = Gd(
        E,
        M
      ), M !== null) {
        Wt = n, l.cancelPendingCommit = M(
          Sy.bind(
            null,
            l,
            t,
            n,
            u,
            a,
            e,
            f,
            i,
            c,
            S,
            E,
            null,
            h,
            g
          )
        ), du(l, n, f, !d);
        return;
      }
    }
    Sy(
      l,
      t,
      n,
      u,
      a,
      e,
      f,
      i,
      c
    );
  }
  function ld(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var a = 0; a < u.length; a++) {
          var e = u[a], n = e.getSnapshot;
          e = e.value;
          try {
            if (!lt(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = t.child, t.subtreeFlags & 16384 && u !== null)
        u.return = t, t = u;
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
  function du(l, t, u, a) {
    t &= ~Mi, t &= ~Qu, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - Pl(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && bc(l, u, t);
  }
  function rn() {
    return (k & 6) === 0 ? (se(0), !1) : !0;
  }
  function Hi() {
    if (Q !== null) {
      if (ll === 0)
        var l = Q.return;
      else
        l = Q, jt = Hu = null, wf(l), sa = null, Ka = 0, l = Q;
      for (; l !== null; )
        Qs(l.alternate, l), l = l.return;
      Q = null;
    }
  }
  function ba(l, t) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, zd(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Wt = 0, Hi(), cl = l, Q = u = Bt(l.current, null), V = t, ll = 0, et = null, su = !1, ga = Ua(l, t), Oi = !1, Sa = nt = Mi = Qu = yu = ol = 0, $l = ie = null, Di = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var e = 31 - Pl(a), n = 1 << e;
        t |= l[e], a &= ~n;
      }
    return wt = t, Ge(), u;
  }
  function yy(l, t) {
    Y = null, b.H = Pa, t === ca || t === Je ? (t = M0(), ll = 3) : t === Bf ? (t = M0(), ll = 4) : ll = t === si ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, et = t, Q === null && (ol = 1, fn(
      l,
      mt(t, l.current)
    ));
  }
  function my() {
    var l = ut.current;
    return l === null ? !0 : (V & 4194048) === V ? ot === null : (V & 62914560) === V || (V & 536870912) !== 0 ? l === ot : !1;
  }
  function vy() {
    var l = b.H;
    return b.H = Pa, l === null ? Pa : l;
  }
  function dy() {
    var l = b.A;
    return b.A = Iv, l;
  }
  function bn() {
    ol = 4, su || (V & 4194048) !== V && ut.current !== null || (ga = !0), (yu & 134217727) === 0 && (Qu & 134217727) === 0 || cl === null || du(
      cl,
      V,
      nt,
      !1
    );
  }
  function Ri(l, t, u) {
    var a = k;
    k |= 2;
    var e = vy(), n = dy();
    (cl !== l || V !== t) && (Sn = null, ba(l, t)), t = !1;
    var f = ol;
    l: do
      try {
        if (ll !== 0 && Q !== null) {
          var i = Q, c = et;
          switch (ll) {
            case 8:
              Hi(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              ut.current === null && (t = !0);
              var d = ll;
              if (ll = 0, et = null, za(l, i, c, d), u && ga) {
                f = 0;
                break l;
              }
              break;
            default:
              d = ll, ll = 0, et = null, za(l, i, c, d);
          }
        }
        td(), f = ol;
        break;
      } catch (S) {
        yy(l, S);
      }
    while (!0);
    return t && l.shellSuspendCounter++, jt = Hu = null, k = a, b.H = e, b.A = n, Q === null && (cl = null, V = 0, Ge()), f;
  }
  function td() {
    for (; Q !== null; ) hy(Q);
  }
  function ud(l, t) {
    var u = k;
    k |= 2;
    var a = vy(), e = dy();
    cl !== l || V !== t ? (Sn = null, gn = kl() + 500, ba(l, t)) : ga = Ua(
      l,
      t
    );
    l: do
      try {
        if (ll !== 0 && Q !== null) {
          t = Q;
          var n = et;
          t: switch (ll) {
            case 1:
              ll = 0, et = null, za(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (_0(n)) {
                ll = 0, et = null, oy(t);
                break;
              }
              t = function() {
                ll !== 2 && ll !== 9 || cl !== l || (ll = 7), Nt(l);
              }, n.then(t, t);
              break l;
            case 3:
              ll = 7;
              break l;
            case 4:
              ll = 5;
              break l;
            case 7:
              _0(n) ? (ll = 0, et = null, oy(t)) : (ll = 0, et = null, za(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (Q.tag) {
                case 26:
                  f = Q.memoizedState;
                case 5:
                case 27:
                  var i = Q;
                  if (f ? lm(f) : i.stateNode.complete) {
                    ll = 0, et = null;
                    var c = i.sibling;
                    if (c !== null) Q = c;
                    else {
                      var d = i.return;
                      d !== null ? (Q = d, zn(d)) : Q = null;
                    }
                    break t;
                  }
              }
              ll = 0, et = null, za(l, t, n, 5);
              break;
            case 6:
              ll = 0, et = null, za(l, t, n, 6);
              break;
            case 8:
              Hi(), ol = 6;
              break l;
            default:
              throw Error(o(462));
          }
        }
        ad();
        break;
      } catch (S) {
        yy(l, S);
      }
    while (!0);
    return jt = Hu = null, b.H = a, b.A = e, k = u, Q !== null ? 0 : (cl = null, V = 0, Ge(), ol);
  }
  function ad() {
    for (; Q !== null && !Mm(); )
      hy(Q);
  }
  function hy(l) {
    var t = Gs(l.alternate, l, wt);
    l.memoizedProps = l.pendingProps, t === null ? zn(l) : Q = t;
  }
  function oy(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Rs(
          u,
          t,
          t.pendingProps,
          t.type,
          void 0,
          V
        );
        break;
      case 11:
        t = Rs(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          V
        );
        break;
      case 5:
        wf(t);
      default:
        Qs(u, t), t = Q = d0(t, wt), t = Gs(u, t, wt);
    }
    l.memoizedProps = l.pendingProps, t === null ? zn(l) : Q = t;
  }
  function za(l, t, u, a) {
    jt = Hu = null, wf(t), sa = null, Ka = 0;
    var e = t.return;
    try {
      if (Kv(
        l,
        e,
        t,
        u,
        V
      )) {
        ol = 1, fn(
          l,
          mt(u, l.current)
        ), Q = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw Q = e, n;
      ol = 1, fn(
        l,
        mt(u, l.current)
      ), Q = null;
      return;
    }
    t.flags & 32768 ? (J || a === 1 ? l = !0 : ga || (V & 536870912) !== 0 ? l = !1 : (su = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ut.current, a !== null && a.tag === 13 && (a.flags |= 16384))), gy(t, l)) : zn(t);
  }
  function zn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        gy(
          t,
          su
        );
        return;
      }
      l = t.return;
      var u = Wv(
        t.alternate,
        t,
        wt
      );
      if (u !== null) {
        Q = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        Q = t;
        return;
      }
      Q = t = l;
    } while (t !== null);
    ol === 0 && (ol = 5);
  }
  function gy(l, t) {
    do {
      var u = $v(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, Q = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        Q = l;
        return;
      }
      Q = l = u;
    } while (l !== null);
    ol = 6, Q = null;
  }
  function Sy(l, t, u, a, e, n, f, i, c) {
    l.cancelPendingCommit = null;
    do
      En();
    while (Ul !== 0);
    if ((k & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === l.current) throw Error(o(177));
      if (n = t.lanes | t.childLanes, n |= zf, Ym(
        l,
        u,
        n,
        f,
        i,
        c
      ), l === cl && (Q = cl = null, V = 0), ra = t, vu = l, Wt = u, Ui = n, pi = e, fy = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, id(Te, function() {
        return Ty(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = b.T, b.T = null, e = _.p, _.p = 2, f = k, k |= 4;
        try {
          Fv(l, t, u);
        } finally {
          k = f, _.p = e, b.T = a;
        }
      }
      Ul = 1, ry(), by(), zy();
    }
  }
  function ry() {
    if (Ul === 1) {
      Ul = 0;
      var l = vu, t = ra, u = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || u) {
        u = b.T, b.T = null;
        var a = _.p;
        _.p = 2;
        var e = k;
        k |= 4;
        try {
          Is(t, l);
          var n = Li, f = e0(l.containerInfo), i = n.focusedElem, c = n.selectionRange;
          if (f !== i && i && i.ownerDocument && a0(
            i.ownerDocument.documentElement,
            i
          )) {
            if (c !== null && of(i)) {
              var d = c.start, S = c.end;
              if (S === void 0 && (S = d), "selectionStart" in i)
                i.selectionStart = d, i.selectionEnd = Math.min(
                  S,
                  i.value.length
                );
              else {
                var E = i.ownerDocument || document, h = E && E.defaultView || window;
                if (h.getSelection) {
                  var g = h.getSelection(), M = i.textContent.length, R = Math.min(c.start, M), fl = c.end === void 0 ? R : Math.min(c.end, M);
                  !g.extend && R > fl && (f = fl, fl = R, R = f);
                  var m = u0(
                    i,
                    R
                  ), s = u0(
                    i,
                    fl
                  );
                  if (m && s && (g.rangeCount !== 1 || g.anchorNode !== m.node || g.anchorOffset !== m.offset || g.focusNode !== s.node || g.focusOffset !== s.offset)) {
                    var v = E.createRange();
                    v.setStart(m.node, m.offset), g.removeAllRanges(), R > fl ? (g.addRange(v), g.extend(s.node, s.offset)) : (v.setEnd(s.node, s.offset), g.addRange(v));
                  }
                }
              }
            }
            for (E = [], g = i; g = g.parentNode; )
              g.nodeType === 1 && E.push({
                element: g,
                left: g.scrollLeft,
                top: g.scrollTop
              });
            for (typeof i.focus == "function" && i.focus(), i = 0; i < E.length; i++) {
              var z = E[i];
              z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
            }
          }
          Cn = !!Vi, Li = Vi = null;
        } finally {
          k = e, _.p = a, b.T = u;
        }
      }
      l.current = t, Ul = 2;
    }
  }
  function by() {
    if (Ul === 2) {
      Ul = 0;
      var l = vu, t = ra, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = b.T, b.T = null;
        var a = _.p;
        _.p = 2;
        var e = k;
        k |= 4;
        try {
          ws(l, t.alternate, t);
        } finally {
          k = e, _.p = a, b.T = u;
        }
      }
      Ul = 3;
    }
  }
  function zy() {
    if (Ul === 4 || Ul === 3) {
      Ul = 0, Dm();
      var l = vu, t = ra, u = Wt, a = fy;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ul = 5 : (Ul = 0, ra = vu = null, Ey(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (mu = null), $n(u), t = t.stateNode, Il && typeof Il.onCommitFiberRoot == "function")
        try {
          Il.onCommitFiberRoot(
            Da,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = b.T, e = _.p, _.p = 2, b.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < a.length; f++) {
            var i = a[f];
            n(i.value, {
              componentStack: i.stack
            });
          }
        } finally {
          b.T = t, _.p = e;
        }
      }
      (Wt & 3) !== 0 && En(), Nt(l), e = l.pendingLanes, (u & 261930) !== 0 && (e & 42) !== 0 ? l === Ni ? ce++ : (ce = 0, Ni = l) : ce = 0, se(0);
    }
  }
  function Ey(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Va(t)));
  }
  function En() {
    return ry(), by(), zy(), Ty();
  }
  function Ty() {
    if (Ul !== 5) return !1;
    var l = vu, t = Ui;
    Ui = 0;
    var u = $n(Wt), a = b.T, e = _.p;
    try {
      _.p = 32 > u ? 32 : u, b.T = null, u = pi, pi = null;
      var n = vu, f = Wt;
      if (Ul = 0, ra = vu = null, Wt = 0, (k & 6) !== 0) throw Error(o(331));
      var i = k;
      if (k |= 4, ay(n.current), ly(
        n,
        n.current,
        f,
        u
      ), k = i, se(0, !1), Il && typeof Il.onPostCommitFiberRoot == "function")
        try {
          Il.onPostCommitFiberRoot(Da, n);
        } catch {
        }
      return !0;
    } finally {
      _.p = e, b.T = a, Ey(l, t);
    }
  }
  function Ay(l, t, u) {
    t = mt(u, t), t = ci(l.stateNode, t, 2), l = nu(l, t, 2), l !== null && (pa(l, 2), Nt(l));
  }
  function tl(l, t, u) {
    if (l.tag === 3)
      Ay(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ay(
            t,
            l,
            u
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (mu === null || !mu.has(a))) {
            l = mt(u, l), u = _s(2), a = nu(t, u, 2), a !== null && (Os(
              u,
              a,
              t,
              l
            ), pa(a, 2), Nt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ci(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Pv();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else
      e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (Oi = !0, e.add(u), l = ed.bind(null, l, t, u), t.then(l, l));
  }
  function ed(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, cl === l && (V & u) === u && (ol === 4 || ol === 3 && (V & 62914560) === V && 300 > kl() - on ? (k & 2) === 0 && ba(l, 0) : Mi |= u, Sa === V && (Sa = 0)), Nt(l);
  }
  function _y(l, t) {
    t === 0 && (t = rc()), l = Uu(l, t), l !== null && (pa(l, t), Nt(l));
  }
  function nd(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), _y(l, u);
  }
  function fd(l, t) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, e = l.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    a !== null && a.delete(t), _y(l, u);
  }
  function id(l, t) {
    return Kn(l, t);
  }
  var Tn = null, Ea = null, qi = !1, An = !1, Bi = !1, hu = 0;
  function Nt(l) {
    l !== Ea && l.next === null && (Ea === null ? Tn = Ea = l : Ea = Ea.next = l), An = !0, qi || (qi = !0, sd());
  }
  function se(l, t) {
    if (!Bi && An) {
      Bi = !0;
      do
        for (var u = !1, a = Tn; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, i = a.pingedLanes;
              n = (1 << 31 - Pl(42 | l) + 1) - 1, n &= e & ~(f & ~i), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, Uy(a, n));
          } else
            n = V, n = Me(
              a,
              a === cl ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Ua(a, n) || (u = !0, Uy(a, n));
          a = a.next;
        }
      while (u);
      Bi = !1;
    }
  }
  function cd() {
    Oy();
  }
  function Oy() {
    An = qi = !1;
    var l = 0;
    hu !== 0 && bd() && (l = hu);
    for (var t = kl(), u = null, a = Tn; a !== null; ) {
      var e = a.next, n = My(a, t);
      n === 0 ? (a.next = null, u === null ? Tn = e : u.next = e, e === null && (Ea = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (An = !0)), a = e;
    }
    Ul !== 0 && Ul !== 5 || se(l), hu !== 0 && (hu = 0);
  }
  function My(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - Pl(n), i = 1 << f, c = e[f];
      c === -1 ? ((i & u) === 0 || (i & a) !== 0) && (e[f] = Bm(i, t)) : c <= t && (l.expiredLanes |= i), n &= ~i;
    }
    if (t = cl, u = V, u = Me(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, u === 0 || l === t && (ll === 2 || ll === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && Jn(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Ua(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && Jn(a), $n(u)) {
        case 2:
        case 8:
          u = gc;
          break;
        case 32:
          u = Te;
          break;
        case 268435456:
          u = Sc;
          break;
        default:
          u = Te;
      }
      return a = Dy.bind(null, l), u = Kn(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && Jn(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Dy(l, t) {
    if (Ul !== 0 && Ul !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (En() && l.callbackNode !== u)
      return null;
    var a = V;
    return a = Me(
      l,
      l === cl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (cy(l, a, t), My(l, kl()), l.callbackNode != null && l.callbackNode === u ? Dy.bind(null, l) : null);
  }
  function Uy(l, t) {
    if (En()) return null;
    cy(l, t, !0);
  }
  function sd() {
    Ed(function() {
      (k & 6) !== 0 ? Kn(
        oc,
        cd
      ) : Oy();
    });
  }
  function Yi() {
    if (hu === 0) {
      var l = fa;
      l === 0 && (l = Ae, Ae <<= 1, (Ae & 261888) === 0 && (Ae = 256)), hu = l;
    }
    return hu;
  }
  function py(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Ne("" + l);
  }
  function Ny(l, t) {
    var u = t.ownerDocument.createElement("input");
    return u.name = t.name, u.value = t.value, l.id && u.setAttribute("form", l.id), t.parentNode.insertBefore(u, t), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function yd(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = py(
        (e[Ll] || null).action
      ), f = a.submitter;
      f && (t = (t = f[Ll] || null) ? py(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var i = new qe(
        "action",
        "action",
        null,
        a,
        e
      );
      l.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (hu !== 0) {
                  var c = f ? Ny(e, f) : new FormData(e);
                  ui(
                    u,
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
                typeof n == "function" && (i.preventDefault(), c = f ? Ny(e, f) : new FormData(e), ui(
                  u,
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
  for (var ji = 0; ji < bf.length; ji++) {
    var Gi = bf[ji], md = Gi.toLowerCase(), vd = Gi[0].toUpperCase() + Gi.slice(1);
    zt(
      md,
      "on" + vd
    );
  }
  zt(i0, "onAnimationEnd"), zt(c0, "onAnimationIteration"), zt(s0, "onAnimationStart"), zt("dblclick", "onDoubleClick"), zt("focusin", "onFocus"), zt("focusout", "onBlur"), zt(Uv, "onTransitionRun"), zt(pv, "onTransitionStart"), zt(Nv, "onTransitionCancel"), zt(y0, "onTransitionEnd"), Ju("onMouseEnter", ["mouseout", "mouseover"]), Ju("onMouseLeave", ["mouseout", "mouseover"]), Ju("onPointerEnter", ["pointerout", "pointerover"]), Ju("onPointerLeave", ["pointerout", "pointerover"]), _u(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), _u(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), _u("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), _u(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), _u(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), _u(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ye = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), dd = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ye)
  );
  function Hy(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u], e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var i = a[f], c = i.instance, d = i.currentTarget;
            if (i = i.listener, c !== n && e.isPropagationStopped())
              break l;
            n = i, e.currentTarget = d;
            try {
              n(e);
            } catch (S) {
              je(S);
            }
            e.currentTarget = null, n = c;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (i = a[f], c = i.instance, d = i.currentTarget, i = i.listener, c !== n && e.isPropagationStopped())
              break l;
            n = i, e.currentTarget = d;
            try {
              n(e);
            } catch (S) {
              je(S);
            }
            e.currentTarget = null, n = c;
          }
      }
    }
  }
  function x(l, t) {
    var u = t[Fn];
    u === void 0 && (u = t[Fn] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (Ry(t, l, 2, !1), u.add(a));
  }
  function Xi(l, t, u) {
    var a = 0;
    t && (a |= 4), Ry(
      u,
      l,
      a,
      t
    );
  }
  var _n = "_reactListening" + Math.random().toString(36).slice(2);
  function Qi(l) {
    if (!l[_n]) {
      l[_n] = !0, Oc.forEach(function(u) {
        u !== "selectionchange" && (dd.has(u) || Xi(u, !1, l), Xi(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[_n] || (t[_n] = !0, Xi("selectionchange", !1, t));
    }
  }
  function Ry(l, t, u, a) {
    switch (im(t)) {
      case 2:
        var e = xd;
        break;
      case 8:
        e = Zd;
        break;
      default:
        e = tc;
    }
    u = e.bind(
      null,
      t,
      u,
      l
    ), e = void 0, !nf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), a ? e !== void 0 ? l.addEventListener(t, u, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, u, !0) : e !== void 0 ? l.addEventListener(t, u, {
      passive: e
    }) : l.addEventListener(t, u, !1);
  }
  function xi(l, t, u, a, e) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var i = a.stateNode.containerInfo;
          if (i === e) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var c = f.tag;
              if ((c === 3 || c === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; i !== null; ) {
            if (f = Vu(i), f === null) return;
            if (c = f.tag, c === 5 || c === 6 || c === 26 || c === 27) {
              a = n = f;
              continue l;
            }
            i = i.parentNode;
          }
        }
        a = a.return;
      }
    jc(function() {
      var d = n, S = af(u), E = [];
      l: {
        var h = m0.get(l);
        if (h !== void 0) {
          var g = qe, M = l;
          switch (l) {
            case "keypress":
              if (Re(u) === 0) break l;
            case "keydown":
            case "keyup":
              g = fv;
              break;
            case "focusin":
              M = "focus", g = yf;
              break;
            case "focusout":
              M = "blur", g = yf;
              break;
            case "beforeblur":
            case "afterblur":
              g = yf;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = Qc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = Wm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = sv;
              break;
            case i0:
            case c0:
            case s0:
              g = km;
              break;
            case y0:
              g = mv;
              break;
            case "scroll":
            case "scrollend":
              g = Jm;
              break;
            case "wheel":
              g = dv;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = Pm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Zc;
              break;
            case "toggle":
            case "beforetoggle":
              g = ov;
          }
          var R = (t & 4) !== 0, fl = !R && (l === "scroll" || l === "scrollend"), m = R ? h !== null ? h + "Capture" : null : h;
          R = [];
          for (var s = d, v; s !== null; ) {
            var z = s;
            if (v = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || v === null || m === null || (z = Ra(s, m), z != null && R.push(
              me(s, z, v)
            )), fl) break;
            s = s.return;
          }
          0 < R.length && (h = new g(
            h,
            M,
            null,
            u,
            S
          ), E.push({ event: h, listeners: R }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (h = l === "mouseover" || l === "pointerover", g = l === "mouseout" || l === "pointerout", h && u !== uf && (M = u.relatedTarget || u.fromElement) && (Vu(M) || M[Zu]))
            break l;
          if ((g || h) && (h = S.window === S ? S : (h = S.ownerDocument) ? h.defaultView || h.parentWindow : window, g ? (M = u.relatedTarget || u.toElement, g = d, M = M ? Vu(M) : null, M !== null && (fl = gl(M), R = M.tag, M !== fl || R !== 5 && R !== 27 && R !== 6) && (M = null)) : (g = null, M = d), g !== M)) {
            if (R = Qc, z = "onMouseLeave", m = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (R = Zc, z = "onPointerLeave", m = "onPointerEnter", s = "pointer"), fl = g == null ? h : Ha(g), v = M == null ? h : Ha(M), h = new R(
              z,
              s + "leave",
              g,
              u,
              S
            ), h.target = fl, h.relatedTarget = v, z = null, Vu(S) === d && (R = new R(
              m,
              s + "enter",
              M,
              u,
              S
            ), R.target = v, R.relatedTarget = fl, z = R), fl = z, g && M)
              t: {
                for (R = hd, m = g, s = M, v = 0, z = m; z; z = R(z))
                  v++;
                z = 0;
                for (var H = s; H; H = R(H))
                  z++;
                for (; 0 < v - z; )
                  m = R(m), v--;
                for (; 0 < z - v; )
                  s = R(s), z--;
                for (; v--; ) {
                  if (m === s || s !== null && m === s.alternate) {
                    R = m;
                    break t;
                  }
                  m = R(m), s = R(s);
                }
                R = null;
              }
            else R = null;
            g !== null && Cy(
              E,
              h,
              g,
              R,
              !1
            ), M !== null && fl !== null && Cy(
              E,
              fl,
              M,
              R,
              !0
            );
          }
        }
        l: {
          if (h = d ? Ha(d) : window, g = h.nodeName && h.nodeName.toLowerCase(), g === "select" || g === "input" && h.type === "file")
            var $ = Fc;
          else if (Wc(h))
            if (kc)
              $ = Ov;
            else {
              $ = Av;
              var U = Tv;
            }
          else
            g = h.nodeName, !g || g.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? d && tf(d.elementType) && ($ = Fc) : $ = _v;
          if ($ && ($ = $(l, d))) {
            $c(
              E,
              $,
              u,
              S
            );
            break l;
          }
          U && U(l, h, d), l === "focusout" && d && h.type === "number" && d.memoizedProps.value != null && lf(h, "number", h.value);
        }
        switch (U = d ? Ha(d) : window, l) {
          case "focusin":
            (Wc(U) || U.contentEditable === "true") && (Iu = U, gf = d, Qa = null);
            break;
          case "focusout":
            Qa = gf = Iu = null;
            break;
          case "mousedown":
            Sf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Sf = !1, n0(E, u, S);
            break;
          case "selectionchange":
            if (Dv) break;
          case "keydown":
          case "keyup":
            n0(E, u, S);
        }
        var j;
        if (vf)
          l: {
            switch (l) {
              case "compositionstart":
                var L = "onCompositionStart";
                break l;
              case "compositionend":
                L = "onCompositionEnd";
                break l;
              case "compositionupdate":
                L = "onCompositionUpdate";
                break l;
            }
            L = void 0;
          }
        else
          ku ? Jc(l, u) && (L = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (L = "onCompositionStart");
        L && (Vc && u.locale !== "ko" && (ku || L !== "onCompositionStart" ? L === "onCompositionEnd" && ku && (j = Gc()) : (It = S, ff = "value" in It ? It.value : It.textContent, ku = !0)), U = On(d, L), 0 < U.length && (L = new xc(
          L,
          l,
          null,
          u,
          S
        ), E.push({ event: L, listeners: U }), j ? L.data = j : (j = wc(u), j !== null && (L.data = j)))), (j = Sv ? rv(l, u) : bv(l, u)) && (L = On(d, "onBeforeInput"), 0 < L.length && (U = new xc(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          S
        ), E.push({
          event: U,
          listeners: L
        }), U.data = j)), yd(
          E,
          l,
          d,
          u,
          S
        );
      }
      Hy(E, t);
    });
  }
  function me(l, t, u) {
    return {
      instance: l,
      listener: t,
      currentTarget: u
    };
  }
  function On(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Ra(l, u), e != null && a.unshift(
        me(l, e, n)
      ), e = Ra(l, t), e != null && a.push(
        me(l, e, n)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function hd(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Cy(l, t, u, a, e) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var i = u, c = i.alternate, d = i.stateNode;
      if (i = i.tag, c !== null && c === a) break;
      i !== 5 && i !== 26 && i !== 27 || d === null || (c = d, e ? (d = Ra(u, n), d != null && f.unshift(
        me(u, d, c)
      )) : e || (d = Ra(u, n), d != null && f.push(
        me(u, d, c)
      ))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var od = /\r\n?/g, gd = /\u0000|\uFFFD/g;
  function qy(l) {
    return (typeof l == "string" ? l : "" + l).replace(od, `
`).replace(gd, "");
  }
  function By(l, t) {
    return t = qy(t), qy(l) === t;
  }
  function nl(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Wu(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Wu(l, "" + a);
        break;
      case "className":
        Ue(l, "class", a);
        break;
      case "tabIndex":
        Ue(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ue(l, u, a);
        break;
      case "style":
        Bc(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          Ue(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Ne("" + a), l.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (u === "formAction" ? (t !== "input" && nl(l, t, "name", e.name, e, null), nl(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), nl(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), nl(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (nl(l, t, "encType", e.encType, e, null), nl(l, t, "method", e.method, e, null), nl(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Ne("" + a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = Ct);
        break;
      case "onScroll":
        a != null && x("scroll", l);
        break;
      case "onScrollEnd":
        a != null && x("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(o(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
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
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = Ne("" + a), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
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
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "" + a) : l.removeAttribute(u);
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
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(u, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(u) : l.setAttribute(u, a);
        break;
      case "popover":
        x("beforetoggle", l), x("toggle", l), De(l, "popover", a);
        break;
      case "xlinkActuate":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Rt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Rt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Rt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        De(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Lm.get(u) || u, De(l, u, a));
    }
  }
  function Zi(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        Bc(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(o(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Wu(l, a) : (typeof a == "number" || typeof a == "bigint") && Wu(l, "" + a);
        break;
      case "onScroll":
        a != null && x("scroll", l);
        break;
      case "onScrollEnd":
        a != null && x("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Ct);
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
        if (!Mc.hasOwnProperty(u))
          l: {
            if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), t = u.slice(2, e ? u.length - 7 : void 0), n = l[Ll] || null, n = n != null ? n[u] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof a == "function")) {
              typeof n != "function" && n !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(t, a, e);
              break l;
            }
            u in l ? l[u] = a : a === !0 ? l.setAttribute(u, "") : De(l, u, a);
          }
    }
  }
  function Yl(l, t, u) {
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
        x("error", l), x("load", l);
        var a = !1, e = !1, n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var f = u[n];
            if (f != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  nl(l, t, n, f, u, null);
              }
          }
        e && nl(l, t, "srcSet", u.srcSet, u, null), a && nl(l, t, "src", u.src, u, null);
        return;
      case "input":
        x("invalid", l);
        var i = n = f = e = null, c = null, d = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var S = u[a];
            if (S != null)
              switch (a) {
                case "name":
                  e = S;
                  break;
                case "type":
                  f = S;
                  break;
                case "checked":
                  c = S;
                  break;
                case "defaultChecked":
                  d = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  i = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null)
                    throw Error(o(137, t));
                  break;
                default:
                  nl(l, t, a, S, u, null);
              }
          }
        Hc(
          l,
          n,
          i,
          c,
          d,
          f,
          e,
          !1
        );
        return;
      case "select":
        x("invalid", l), a = f = n = null;
        for (e in u)
          if (u.hasOwnProperty(e) && (i = u[e], i != null))
            switch (e) {
              case "value":
                n = i;
                break;
              case "defaultValue":
                f = i;
                break;
              case "multiple":
                a = i;
              default:
                nl(l, t, e, i, u, null);
            }
        t = n, u = f, l.multiple = !!a, t != null ? wu(l, !!a, t, !1) : u != null && wu(l, !!a, u, !0);
        return;
      case "textarea":
        x("invalid", l), n = e = a = null;
        for (f in u)
          if (u.hasOwnProperty(f) && (i = u[f], i != null))
            switch (f) {
              case "value":
                a = i;
                break;
              case "defaultValue":
                e = i;
                break;
              case "children":
                n = i;
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(o(91));
                break;
              default:
                nl(l, t, f, i, u, null);
            }
        Cc(l, a, e, n);
        return;
      case "option":
        for (c in u)
          if (u.hasOwnProperty(c) && (a = u[c], a != null))
            switch (c) {
              case "selected":
                l.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                nl(l, t, c, a, u, null);
            }
        return;
      case "dialog":
        x("beforetoggle", l), x("toggle", l), x("cancel", l), x("close", l);
        break;
      case "iframe":
      case "object":
        x("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ye.length; a++)
          x(ye[a], l);
        break;
      case "image":
        x("error", l), x("load", l);
        break;
      case "details":
        x("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        x("error", l), x("load", l);
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
        for (d in u)
          if (u.hasOwnProperty(d) && (a = u[d], a != null))
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                nl(l, t, d, a, u, null);
            }
        return;
      default:
        if (tf(t)) {
          for (S in u)
            u.hasOwnProperty(S) && (a = u[S], a !== void 0 && Zi(
              l,
              t,
              S,
              a,
              u,
              void 0
            ));
          return;
        }
    }
    for (i in u)
      u.hasOwnProperty(i) && (a = u[i], a != null && nl(l, t, i, a, u, null));
  }
  function Sd(l, t, u, a) {
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
        var e = null, n = null, f = null, i = null, c = null, d = null, S = null;
        for (g in u) {
          var E = u[g];
          if (u.hasOwnProperty(g) && E != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                c = E;
              default:
                a.hasOwnProperty(g) || nl(l, t, g, null, a, E);
            }
        }
        for (var h in a) {
          var g = a[h];
          if (E = u[h], a.hasOwnProperty(h) && (g != null || E != null))
            switch (h) {
              case "type":
                n = g;
                break;
              case "name":
                e = g;
                break;
              case "checked":
                d = g;
                break;
              case "defaultChecked":
                S = g;
                break;
              case "value":
                f = g;
                break;
              case "defaultValue":
                i = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null)
                  throw Error(o(137, t));
                break;
              default:
                g !== E && nl(
                  l,
                  t,
                  h,
                  g,
                  a,
                  E
                );
            }
        }
        Pn(
          l,
          f,
          i,
          c,
          d,
          S,
          n,
          e
        );
        return;
      case "select":
        g = f = i = h = null;
        for (n in u)
          if (c = u[n], u.hasOwnProperty(n) && c != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = c;
              default:
                a.hasOwnProperty(n) || nl(
                  l,
                  t,
                  n,
                  null,
                  a,
                  c
                );
            }
        for (e in a)
          if (n = a[e], c = u[e], a.hasOwnProperty(e) && (n != null || c != null))
            switch (e) {
              case "value":
                h = n;
                break;
              case "defaultValue":
                i = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== c && nl(
                  l,
                  t,
                  e,
                  n,
                  a,
                  c
                );
            }
        t = i, u = f, a = g, h != null ? wu(l, !!u, h, !1) : !!a != !!u && (t != null ? wu(l, !!u, t, !0) : wu(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        g = h = null;
        for (i in u)
          if (e = u[i], u.hasOwnProperty(i) && e != null && !a.hasOwnProperty(i))
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                nl(l, t, i, null, a, e);
            }
        for (f in a)
          if (e = a[f], n = u[f], a.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                h = e;
                break;
              case "defaultValue":
                g = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(o(91));
                break;
              default:
                e !== n && nl(l, t, f, e, a, n);
            }
        Rc(l, h, g);
        return;
      case "option":
        for (var M in u)
          if (h = u[M], u.hasOwnProperty(M) && h != null && !a.hasOwnProperty(M))
            switch (M) {
              case "selected":
                l.selected = !1;
                break;
              default:
                nl(
                  l,
                  t,
                  M,
                  null,
                  a,
                  h
                );
            }
        for (c in a)
          if (h = a[c], g = u[c], a.hasOwnProperty(c) && h !== g && (h != null || g != null))
            switch (c) {
              case "selected":
                l.selected = h && typeof h != "function" && typeof h != "symbol";
                break;
              default:
                nl(
                  l,
                  t,
                  c,
                  h,
                  a,
                  g
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
        for (var R in u)
          h = u[R], u.hasOwnProperty(R) && h != null && !a.hasOwnProperty(R) && nl(l, t, R, null, a, h);
        for (d in a)
          if (h = a[d], g = u[d], a.hasOwnProperty(d) && h !== g && (h != null || g != null))
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null)
                  throw Error(o(137, t));
                break;
              default:
                nl(
                  l,
                  t,
                  d,
                  h,
                  a,
                  g
                );
            }
        return;
      default:
        if (tf(t)) {
          for (var fl in u)
            h = u[fl], u.hasOwnProperty(fl) && h !== void 0 && !a.hasOwnProperty(fl) && Zi(
              l,
              t,
              fl,
              void 0,
              a,
              h
            );
          for (S in a)
            h = a[S], g = u[S], !a.hasOwnProperty(S) || h === g || h === void 0 && g === void 0 || Zi(
              l,
              t,
              S,
              h,
              a,
              g
            );
          return;
        }
    }
    for (var m in u)
      h = u[m], u.hasOwnProperty(m) && h != null && !a.hasOwnProperty(m) && nl(l, t, m, null, a, h);
    for (E in a)
      h = a[E], g = u[E], !a.hasOwnProperty(E) || h === g || h == null && g == null || nl(l, t, E, h, a, g);
  }
  function Yy(l) {
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
  function rd() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, u = performance.getEntriesByType("resource"), a = 0; a < u.length; a++) {
        var e = u[a], n = e.transferSize, f = e.initiatorType, i = e.duration;
        if (n && i && Yy(f)) {
          for (f = 0, i = e.responseEnd, a += 1; a < u.length; a++) {
            var c = u[a], d = c.startTime;
            if (d > i) break;
            var S = c.transferSize, E = c.initiatorType;
            S && Yy(E) && (c = c.responseEnd, f += S * (c < i ? 1 : (i - d) / (c - d)));
          }
          if (--a, t += 8 * (n + f) / (e.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Vi = null, Li = null;
  function Mn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function jy(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Gy(l, t) {
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
  function Ki(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ji = null;
  function bd() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Ji ? !1 : (Ji = l, !0) : (Ji = null, !1);
  }
  var Xy = typeof setTimeout == "function" ? setTimeout : void 0, zd = typeof clearTimeout == "function" ? clearTimeout : void 0, Qy = typeof Promise == "function" ? Promise : void 0, Ed = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qy < "u" ? function(l) {
    return Qy.resolve(null).then(l).catch(Td);
  } : Xy;
  function Td(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function ou(l) {
    return l === "head";
  }
  function xy(l, t) {
    var u = t, a = 0;
    do {
      var e = u.nextSibling;
      if (l.removeChild(u), e && e.nodeType === 8)
        if (u = e.data, u === "/$" || u === "/&") {
          if (a === 0) {
            l.removeChild(e), Oa(t);
            return;
          }
          a--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          a++;
        else if (u === "html")
          ve(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, ve(u);
          for (var n = u.firstChild; n; ) {
            var f = n.nextSibling, i = n.nodeName;
            n[Na] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && n.rel.toLowerCase() === "stylesheet" || u.removeChild(n), n = f;
          }
        } else
          u === "body" && ve(l.ownerDocument.body);
      u = e;
    } while (u);
    Oa(t);
  }
  function Zy(l, t) {
    var u = l;
    l = 0;
    do {
      var a = u.nextSibling;
      if (u.nodeType === 1 ? t ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (t ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), a && a.nodeType === 8)
        if (u = a.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = a;
    } while (u);
  }
  function wi(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          wi(u), kn(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Ad(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[Na])
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
      if (l = gt(l.nextSibling), l === null) break;
    }
    return null;
  }
  function _d(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = gt(l.nextSibling), l === null)) return null;
    return l;
  }
  function Vy(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = gt(l.nextSibling), l === null)) return null;
    return l;
  }
  function Wi(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function $i(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Od(l, t) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || u.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), u.removeEventListener("DOMContentLoaded", a);
      };
      u.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function gt(l) {
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
  var Fi = null;
  function Ly(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (t === 0)
            return gt(l.nextSibling);
          t--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Ky(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (t === 0) return l;
          t--;
        } else u !== "/$" && u !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Jy(l, t, u) {
    switch (t = Mn(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(o(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(o(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(o(454));
        return l;
      default:
        throw Error(o(451));
    }
  }
  function ve(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    kn(l);
  }
  var St = /* @__PURE__ */ new Map(), wy = /* @__PURE__ */ new Set();
  function Dn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var $t = _.d;
  _.d = {
    f: Md,
    r: Dd,
    D: Ud,
    C: pd,
    L: Nd,
    m: Hd,
    X: Cd,
    S: Rd,
    M: qd
  };
  function Md() {
    var l = $t.f(), t = rn();
    return l || t;
  }
  function Dd(l) {
    var t = Lu(l);
    t !== null && t.tag === 5 && t.type === "form" ? ys(t) : $t.r(l);
  }
  var Ta = typeof document > "u" ? null : document;
  function Wy(l, t, u) {
    var a = Ta;
    if (a && typeof t == "string" && t) {
      var e = st(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), wy.has(e) || (wy.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), Yl(t, "link", l), Nl(t), a.head.appendChild(t)));
    }
  }
  function Ud(l) {
    $t.D(l), Wy("dns-prefetch", l, null);
  }
  function pd(l, t) {
    $t.C(l, t), Wy("preconnect", l, t);
  }
  function Nd(l, t, u) {
    $t.L(l, t, u);
    var a = Ta;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + st(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (e += '[imagesrcset="' + st(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (e += '[imagesizes="' + st(
        u.imageSizes
      ) + '"]')) : e += '[href="' + st(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = Aa(l);
          break;
        case "script":
          n = _a(l);
      }
      St.has(n) || (l = N(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), St.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(de(n)) || t === "script" && a.querySelector(he(n)) || (t = a.createElement("link"), Yl(t, "link", l), Nl(t), a.head.appendChild(t)));
    }
  }
  function Hd(l, t) {
    $t.m(l, t);
    var u = Ta;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + st(a) + '"][href="' + st(l) + '"]', n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = _a(l);
      }
      if (!St.has(n) && (l = N({ rel: "modulepreload", href: l }, t), St.set(n, l), u.querySelector(e) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(he(n)))
              return;
        }
        a = u.createElement("link"), Yl(a, "link", l), Nl(a), u.head.appendChild(a);
      }
    }
  }
  function Rd(l, t, u) {
    $t.S(l, t, u);
    var a = Ta;
    if (a && l) {
      var e = Ku(a).hoistableStyles, n = Aa(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var i = { loading: 0, preload: null };
        if (f = a.querySelector(
          de(n)
        ))
          i.loading = 5;
        else {
          l = N(
            { rel: "stylesheet", href: l, "data-precedence": t },
            u
          ), (u = St.get(n)) && ki(l, u);
          var c = f = a.createElement("link");
          Nl(c), Yl(c, "link", l), c._p = new Promise(function(d, S) {
            c.onload = d, c.onerror = S;
          }), c.addEventListener("load", function() {
            i.loading |= 1;
          }), c.addEventListener("error", function() {
            i.loading |= 2;
          }), i.loading |= 4, Un(f, t, a);
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
  function Cd(l, t) {
    $t.X(l, t);
    var u = Ta;
    if (u && l) {
      var a = Ku(u).hoistableScripts, e = _a(l), n = a.get(e);
      n || (n = u.querySelector(he(e)), n || (l = N({ src: l, async: !0 }, t), (t = St.get(e)) && Ii(l, t), n = u.createElement("script"), Nl(n), Yl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function qd(l, t) {
    $t.M(l, t);
    var u = Ta;
    if (u && l) {
      var a = Ku(u).hoistableScripts, e = _a(l), n = a.get(e);
      n || (n = u.querySelector(he(e)), n || (l = N({ src: l, async: !0, type: "module" }, t), (t = St.get(e)) && Ii(l, t), n = u.createElement("script"), Nl(n), Yl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function $y(l, t, u, a) {
    var e = (e = X.current) ? Dn(e) : null;
    if (!e) throw Error(o(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (t = Aa(u.href), u = Ku(
          e
        ).hoistableStyles, a = u.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Aa(u.href);
          var n = Ku(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            de(l)
          )) && !n._p && (f.instance = n, f.state.loading = 5), St.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, St.set(l, u), n || Bd(
            e,
            l,
            u,
            f.state
          ))), t && a === null)
            throw Error(o(528, ""));
          return f;
        }
        if (t && a !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = _a(u), u = Ku(
          e
        ).hoistableScripts, a = u.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, l));
    }
  }
  function Aa(l) {
    return 'href="' + st(l) + '"';
  }
  function de(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Fy(l) {
    return N({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Bd(l, t, u, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Yl(t, "link", u), Nl(t), l.head.appendChild(t));
  }
  function _a(l) {
    return '[src="' + st(l) + '"]';
  }
  function he(l) {
    return "script[async]" + l;
  }
  function ky(l, t, u) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + st(u.href) + '"]'
          );
          if (a)
            return t.instance = a, Nl(a), a;
          var e = N({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), Nl(a), Yl(a, "style", e), Un(a, u.precedence, l), t.instance = a;
        case "stylesheet":
          e = Aa(u.href);
          var n = l.querySelector(
            de(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Nl(n), n;
          a = Fy(u), (e = St.get(e)) && ki(a, e), n = (l.ownerDocument || l).createElement("link"), Nl(n);
          var f = n;
          return f._p = new Promise(function(i, c) {
            f.onload = i, f.onerror = c;
          }), Yl(n, "link", a), t.state.loading |= 4, Un(n, u.precedence, l), t.instance = n;
        case "script":
          return n = _a(u.src), (e = l.querySelector(
            he(n)
          )) ? (t.instance = e, Nl(e), e) : (a = u, (e = St.get(n)) && (a = N({}, u), Ii(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), Nl(e), Yl(e, "link", a), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Un(a, u.precedence, l));
    return t.instance;
  }
  function Un(l, t, u) {
    for (var a = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = a.length ? a[a.length - 1] : null, n = e, f = 0; f < a.length; f++) {
      var i = a[f];
      if (i.dataset.precedence === t) n = i;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function ki(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Ii(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var pn = null;
  function Iy(l, t, u) {
    if (pn === null) {
      var a = /* @__PURE__ */ new Map(), e = pn = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else
      e = pn, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[Na] || n[Rl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var i = a.get(f);
        i ? i.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function Py(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function Yd(l, t, u) {
    if (u === 1 || t.itemProp != null) return !1;
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
  function lm(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function jd(l, t, u, a) {
    if (u.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var e = Aa(a.href), n = t.querySelector(
          de(e)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Nn.bind(l), t.then(l, l)), u.state.loading |= 4, u.instance = n, Nl(n);
          return;
        }
        n = t.ownerDocument || t, a = Fy(a), (e = St.get(e)) && ki(a, e), n = n.createElement("link"), Nl(n);
        var f = n;
        f._p = new Promise(function(i, c) {
          f.onload = i, f.onerror = c;
        }), Yl(n, "link", a), u.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, t), (t = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Nn.bind(l), t.addEventListener("load", u), t.addEventListener("error", u));
    }
  }
  var Pi = 0;
  function Gd(l, t) {
    return l.stylesheets && l.count === 0 && Rn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var a = setTimeout(function() {
        if (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Pi === 0 && (Pi = 62500 * rd());
      var e = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > Pi ? 50 : 800) + t
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(e);
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
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Hn = /* @__PURE__ */ new Map(), t.forEach(Xd, l), Hn = null, Nn.call(l));
  }
  function Xd(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Hn.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Hn.set(l, u);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), a = f);
        }
        a && u.set(null, a);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = u.get(f) || a, n === a && u.set(null, e), u.set(f, e), this.count++, a = Nn.bind(this), e.addEventListener("load", a), e.addEventListener("error", a), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var oe = {
    $$typeof: jl,
    Provider: null,
    Consumer: null,
    _currentValue: C,
    _currentValue2: C,
    _threadCount: 0
  };
  function Qd(l, t, u, a, e, n, f, i, c) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = wn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wn(0), this.hiddenUpdates = wn(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function tm(l, t, u, a, e, n, f, i, c, d, S, E) {
    return l = new Qd(
      l,
      t,
      u,
      f,
      c,
      d,
      S,
      E,
      i
    ), t = 1, n === !0 && (t |= 24), n = tt(3, null, null, t), l.current = n, n.stateNode = l, t = Rf(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: t
    }, Yf(n), l;
  }
  function um(l) {
    return l ? (l = ta, l) : ta;
  }
  function am(l, t, u, a, e, n) {
    e = um(e), a.context === null ? a.context = e : a.pendingContext = e, a = eu(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = nu(l, a, t), u !== null && (Fl(u, l, t), wa(u, l, t));
  }
  function em(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function lc(l, t) {
    em(l, t), (l = l.alternate) && em(l, t);
  }
  function nm(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Uu(l, 67108864);
      t !== null && Fl(t, l, 67108864), lc(l, 67108864);
    }
  }
  function fm(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ft();
      t = Wn(t);
      var u = Uu(l, t);
      u !== null && Fl(u, l, t), lc(l, t);
    }
  }
  var Cn = !0;
  function xd(l, t, u, a) {
    var e = b.T;
    b.T = null;
    var n = _.p;
    try {
      _.p = 2, tc(l, t, u, a);
    } finally {
      _.p = n, b.T = e;
    }
  }
  function Zd(l, t, u, a) {
    var e = b.T;
    b.T = null;
    var n = _.p;
    try {
      _.p = 8, tc(l, t, u, a);
    } finally {
      _.p = n, b.T = e;
    }
  }
  function tc(l, t, u, a) {
    if (Cn) {
      var e = uc(a);
      if (e === null)
        xi(
          l,
          t,
          a,
          qn,
          u
        ), cm(l, a);
      else if (Ld(
        e,
        l,
        t,
        u,
        a
      ))
        a.stopPropagation();
      else if (cm(l, a), t & 4 && -1 < Vd.indexOf(l)) {
        for (; e !== null; ) {
          var n = Lu(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = Au(n.pendingLanes);
                  if (f !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; f; ) {
                      var c = 1 << 31 - Pl(f);
                      i.entanglements[1] |= c, f &= ~c;
                    }
                    Nt(n), (k & 6) === 0 && (gn = kl() + 500, se(0));
                  }
                }
                break;
              case 31:
              case 13:
                i = Uu(n, 2), i !== null && Fl(i, n, 2), rn(), lc(n, 2);
            }
          if (n = uc(a), n === null && xi(
            l,
            t,
            a,
            qn,
            u
          ), n === e) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else
        xi(
          l,
          t,
          a,
          null,
          u
        );
    }
  }
  function uc(l) {
    return l = af(l), ac(l);
  }
  var qn = null;
  function ac(l) {
    if (qn = null, l = Vu(l), l !== null) {
      var t = gl(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = ml(t), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = Ml(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return qn = l, null;
  }
  function im(l) {
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
        switch (Um()) {
          case oc:
            return 2;
          case gc:
            return 8;
          case Te:
          case pm:
            return 32;
          case Sc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ec = !1, gu = null, Su = null, ru = null, ge = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), bu = [], Vd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function cm(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        gu = null;
        break;
      case "dragenter":
      case "dragleave":
        Su = null;
        break;
      case "mouseover":
      case "mouseout":
        ru = null;
        break;
      case "pointerover":
      case "pointerout":
        ge.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Se.delete(t.pointerId);
    }
  }
  function re(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: u,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = Lu(t), t !== null && nm(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function Ld(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return gu = re(
          gu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "dragenter":
        return Su = re(
          Su,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "mouseover":
        return ru = re(
          ru,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return ge.set(
          n,
          re(
            ge.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, Se.set(
          n,
          re(
            Se.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
    }
    return !1;
  }
  function sm(l) {
    var t = Vu(l.target);
    if (t !== null) {
      var u = gl(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = ml(u), t !== null) {
            l.blockedOn = t, Ac(l.priority, function() {
              fm(u);
            });
            return;
          }
        } else if (t === 31) {
          if (t = Ml(u), t !== null) {
            l.blockedOn = t, Ac(l.priority, function() {
              fm(u);
            });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Bn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = uc(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(
          u.type,
          u
        );
        uf = a, u.target.dispatchEvent(a), uf = null;
      } else
        return t = Lu(u), t !== null && nm(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function ym(l, t, u) {
    Bn(l) && u.delete(t);
  }
  function Kd() {
    ec = !1, gu !== null && Bn(gu) && (gu = null), Su !== null && Bn(Su) && (Su = null), ru !== null && Bn(ru) && (ru = null), ge.forEach(ym), Se.forEach(ym);
  }
  function Yn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, ec || (ec = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      Kd
    )));
  }
  var jn = null;
  function mm(l) {
    jn !== l && (jn = l, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        jn === l && (jn = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t], a = l[t + 1], e = l[t + 2];
          if (typeof a != "function") {
            if (ac(a || u) === null)
              continue;
            break;
          }
          var n = Lu(u);
          n !== null && (l.splice(t, 3), t -= 3, ui(
            n,
            {
              pending: !0,
              data: e,
              method: u.method,
              action: a
            },
            a,
            e
          ));
        }
      }
    ));
  }
  function Oa(l) {
    function t(c) {
      return Yn(c, l);
    }
    gu !== null && Yn(gu, l), Su !== null && Yn(Su, l), ru !== null && Yn(ru, l), ge.forEach(t), Se.forEach(t);
    for (var u = 0; u < bu.length; u++) {
      var a = bu[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < bu.length && (u = bu[0], u.blockedOn === null); )
      sm(u), u.blockedOn === null && bu.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var e = u[a], n = u[a + 1], f = e[Ll] || null;
        if (typeof n == "function")
          f || mm(u);
        else if (f) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Ll] || null)
              i = f.formAction;
            else if (ac(e) !== null) continue;
          } else i = f.action;
          typeof i == "function" ? u[a + 1] = i : (u.splice(a, 3), a -= 3), mm(u);
        }
      }
  }
  function vm() {
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
      e !== null && (e(), e = null), a || setTimeout(u, 20);
    }
    function u() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, e = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(u, 100), function() {
        a = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), e !== null && (e(), e = null);
      };
    }
  }
  function nc(l) {
    this._internalRoot = l;
  }
  Gn.prototype.render = nc.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var u = t.current, a = ft();
    am(u, a, l, t, null, null);
  }, Gn.prototype.unmount = nc.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      am(l.current, 2, null, l, null, null), rn(), t[Zu] = null;
    }
  };
  function Gn(l) {
    this._internalRoot = l;
  }
  Gn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Tc();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < bu.length && t !== 0 && t < bu[u].priority; u++) ;
      bu.splice(u, 0, l), u === 0 && sm(l);
    }
  };
  var dm = G.version;
  if (dm !== "19.2.5")
    throw Error(
      o(
        527,
        dm,
        "19.2.5"
      )
    );
  _.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(o(188)) : (l = Object.keys(l).join(","), Error(o(268, l)));
    return l = A(t), l = l !== null ? w(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Jd = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.2.5"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xn.isDisabled && Xn.supportsFiber)
      try {
        Da = Xn.inject(
          Jd
        ), Il = Xn;
      } catch {
      }
  }
  return ze.createRoot = function(l, t) {
    if (!W(l)) throw Error(o(299));
    var u = !1, a = "", e = zs, n = Es, f = Ts;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = tm(
      l,
      1,
      !1,
      null,
      null,
      u,
      a,
      null,
      e,
      n,
      f,
      vm
    ), l[Zu] = t.current, Qi(l), new nc(t);
  }, ze.hydrateRoot = function(l, t, u) {
    if (!W(l)) throw Error(o(299));
    var a = !1, e = "", n = zs, f = Es, i = Ts, c = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (i = u.onRecoverableError), u.formState !== void 0 && (c = u.formState)), t = tm(
      l,
      1,
      !0,
      t,
      u ?? null,
      a,
      e,
      c,
      n,
      f,
      i,
      vm
    ), t.context = um(null), u = t.current, a = ft(), a = Wn(a), e = eu(a), e.callback = null, nu(u, e, a), u = a, t.current.lanes = u, pa(t, u), Nt(t), l[Zu] = t.current, Qi(l), new Gn(t);
  }, ze.version = "19.2.5", ze;
}
var Am;
function ah() {
  if (Am) return ic.exports;
  Am = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (G) {
        console.error(G);
      }
  }
  return r(), ic.exports = uh(), ic.exports;
}
var eh = ah(), At = vc();
const Qn = (r) => typeof r == "string" && r.length > 0 ? r : void 0, nh = (r) => {
  if (typeof r != "object" || r === null) return {};
  const G = ("city" in r ? Qn(r.city) : void 0) ?? ("locality" in r ? Qn(r.locality) : void 0) ?? ("principalSubdivision" in r ? Qn(r.principalSubdivision) : void 0), Z = "countryName" in r ? Qn(r.countryName) : void 0;
  return { city: G, country: Z };
}, fh = (r) => r === "fahrenheit" ? "fahrenheit" : "celsius", ih = (r) => r === 0 ? "Clear sky" : r === 1 ? "Mainly clear" : r === 2 ? "Partly cloudy" : r === 3 ? "Overcast" : r === 45 || r === 48 ? "Fog" : r >= 51 && r <= 57 ? "Drizzle" : r >= 61 && r <= 67 ? "Rain" : r >= 71 && r <= 77 ? "Snow" : r >= 80 && r <= 82 ? "Rain showers" : r >= 85 && r <= 86 ? "Snow showers" : r === 95 ? "Thunderstorm" : r === 96 || r === 99 ? "Thunderstorm with hail" : "Unknown conditions", ch = (r) => r === 0 ? "☀️" : r === 1 || r === 2 ? "⛅" : r === 3 ? "☁️" : r === 45 || r === 48 ? "🌫️" : r >= 51 && r <= 67 ? "🌧️" : r >= 71 && r <= 86 ? "❄️" : r >= 95 ? "⛈️" : "☁️", sh = (r) => {
  if (typeof r != "object" || r === null || !("current" in r)) return !1;
  const G = r.current;
  return typeof G != "object" || G === null || !("temperature_2m" in G) || !("relative_humidity_2m" in G) || !("wind_speed_10m" in G) || !("weather_code" in G) ? !1 : typeof G.temperature_2m == "number" && typeof G.relative_humidity_2m == "number" && typeof G.wind_speed_10m == "number" && typeof G.weather_code == "number";
};
function yh({ sdk: r, widgetServiceSdk: G }) {
  const [Z, o] = At.useState(r.getProps()), [W, gl] = At.useState(null), [ml, Ml] = At.useState(null), [p, A] = At.useState(null), [w, N] = At.useState(null), [ul, Dl] = At.useState(!0);
  At.useEffect(() => r.on("propsChanged", () => o(r.getProps())), [r]);
  const pl = At.useCallback(() => {
    if (N(null), Dl(!0), A(null), typeof navigator > "u" || !navigator.geolocation) {
      N("Geolocation is not supported in this browser."), Dl(!1);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (I) => gl({ latitude: I.coords.latitude, longitude: I.coords.longitude }),
      (I) => {
        const Sl = I.code === I.PERMISSION_DENIED ? "Location permission denied. Allow location access and try again." : I.code === I.POSITION_UNAVAILABLE ? "Location is currently unavailable." : "Could not determine your location.";
        N(Sl), Dl(!1);
      },
      { enableHighAccuracy: !1, timeout: 1e4, maximumAge: 6e5 }
    );
  }, []);
  At.useEffect(() => {
    pl();
  }, [pl]);
  const El = fh(Z.temperatureUnit);
  At.useEffect(() => {
    if (!W) return;
    let I = !1;
    return (async () => {
      Dl(!0), N(null);
      try {
        const Sl = await G.connectors.execute({
          permalink: "weather-widget-open-meteo",
          method: "GET",
          queryParams: {
            latitude: W.latitude.toFixed(4),
            longitude: W.longitude.toFixed(4),
            current: "temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m",
            temperature_unit: El
          }
        });
        if (I) return;
        if (!sh(Sl)) {
          N("Weather data is unavailable right now."), Ml(null);
          return;
        }
        Ml({
          temperature: Sl.current.temperature_2m,
          humidity: Sl.current.relative_humidity_2m,
          windSpeed: Sl.current.wind_speed_10m,
          weatherCode: Sl.current.weather_code,
          unit: El
        });
      } catch (Sl) {
        if (I) return;
        N(Sl instanceof Error ? Sl.message : "Failed to load weather."), Ml(null);
      } finally {
        I || Dl(!1);
      }
    })(), () => {
      I = !0;
    };
  }, [W, El, G]), At.useEffect(() => {
    if (!W) return;
    let I = !1;
    return (async () => {
      try {
        const Sl = await G.connectors.execute({
          permalink: "weather-widget-reverse-geocode",
          method: "GET",
          queryParams: {
            latitude: W.latitude.toFixed(4),
            longitude: W.longitude.toFixed(4),
            localityLanguage: "en"
          }
        });
        if (I) return;
        A(nh(Sl));
      } catch {
        I || A(null);
      }
    })(), () => {
      I = !0;
    };
  }, [W, G]);
  const rt = El === "fahrenheit" ? "°F" : "°C";
  return /* @__PURE__ */ dl.jsx("div", { className: "weather-stage", children: /* @__PURE__ */ dl.jsx("div", { className: "card weather-card", children: /* @__PURE__ */ dl.jsxs("div", { className: "card-content has-text-centered", children: [
    ul && /* @__PURE__ */ dl.jsx("p", { className: "is-size-5 has-text-grey", children: "Loading weather…" }),
    !ul && w && /* @__PURE__ */ dl.jsxs(dl.Fragment, { children: [
      /* @__PURE__ */ dl.jsx("p", { className: "title is-5 has-text-danger mb-2", children: "Weather unavailable" }),
      /* @__PURE__ */ dl.jsx("p", { className: "subtitle is-6 has-text-grey-dark", children: w }),
      /* @__PURE__ */ dl.jsx(
        "button",
        {
          type: "button",
          className: "button is-link is-small mt-3",
          onClick: pl,
          children: "Try again"
        }
      )
    ] }),
    !ul && !w && ml && /* @__PURE__ */ dl.jsxs(dl.Fragment, { children: [
      /* @__PURE__ */ dl.jsx("p", { className: "weather-emoji", children: ch(ml.weatherCode) }),
      /* @__PURE__ */ dl.jsxs("p", { className: "title is-1 weather-temp", children: [
        Math.round(ml.temperature),
        /* @__PURE__ */ dl.jsx("span", { className: "weather-unit", children: rt })
      ] }),
      /* @__PURE__ */ dl.jsx("p", { className: "subtitle is-5 has-text-grey-dark", children: ih(ml.weatherCode) }),
      /* @__PURE__ */ dl.jsxs("div", { className: "columns is-mobile is-centered weather-stats mt-4", children: [
        /* @__PURE__ */ dl.jsxs("div", { className: "column is-narrow", children: [
          /* @__PURE__ */ dl.jsx("p", { className: "heading", children: "Humidity" }),
          /* @__PURE__ */ dl.jsxs("p", { className: "weather-stat-value", children: [
            ml.humidity,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ dl.jsxs("div", { className: "column is-narrow", children: [
          /* @__PURE__ */ dl.jsx("p", { className: "heading", children: "Wind" }),
          /* @__PURE__ */ dl.jsxs("p", { className: "weather-stat-value", children: [
            Math.round(ml.windSpeed),
            " km/h"
          ] })
        ] })
      ] }),
      (p == null ? void 0 : p.city) && /* @__PURE__ */ dl.jsxs("p", { className: "weather-place", children: [
        p.city,
        p.country ? `, ${p.country}` : ""
      ] })
    ] })
  ] }) }) });
}
const mh = "https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css";
let vh = Fd;
const _m = /* @__PURE__ */ new Set();
async function dh(r) {
  await r.whenReady();
  const G = new window.WidgetServiceSDK(), Z = document.createElement("link");
  Z.rel = "stylesheet", Z.href = mh, r.shadowRoot.insertBefore(Z, r.shadowRoot.firstChild);
  const o = document.createElement("style");
  o.textContent = vh, _m.add(o), r.shadowRoot.insertBefore(o, Z.nextSibling);
  const W = eh.createRoot(r.getContainer());
  W.render(/* @__PURE__ */ dl.jsx(yh, { sdk: r, widgetServiceSdk: G })), r.on("destroy", () => {
    _m.delete(o), o.remove(), Z.remove(), W.unmount();
  });
}
export {
  dh as init
};
