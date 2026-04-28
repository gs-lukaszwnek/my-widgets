var sf = { exports: {} }, Du = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _r;
function th() {
  if (_r) return Du;
  _r = 1;
  var m = Symbol.for("react.transitional.element"), T = Symbol.for("react.fragment");
  function U(r, q, Q) {
    var V = null;
    if (Q !== void 0 && (V = "" + Q), q.key !== void 0 && (V = "" + q.key), "key" in q) {
      Q = {};
      for (var X in q)
        X !== "key" && (Q[X] = q[X]);
    } else Q = q;
    return q = Q.ref, {
      $$typeof: m,
      type: r,
      key: V,
      ref: q !== void 0 ? q : null,
      props: Q
    };
  }
  return Du.Fragment = T, Du.jsx = U, Du.jsxs = U, Du;
}
var zr;
function ah() {
  return zr || (zr = 1, sf.exports = th()), sf.exports;
}
var M = ah();
const eh = ":host{display:block;color:#0f172a;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,sans-serif;line-height:1.5}.aha-widget{display:flex;flex-direction:column;gap:1.25rem;padding:1.5rem;max-width:1100px;margin:0 auto;box-sizing:border-box;background:#fff;color:#0f172a}.aha-widget *,.aha-widget *:before,.aha-widget *:after{box-sizing:border-box}.aha-header{display:flex;flex-wrap:wrap;gap:1.25rem;align-items:flex-start;justify-content:space-between;padding-bottom:1rem;border-bottom:1px solid #e2e8f0}.aha-header__title{margin:0;font-size:1.625rem;font-weight:700;letter-spacing:-.015em;color:#0f172a}.aha-header__subtitle{margin:.25rem 0 0;color:#475569;font-size:.9375rem}.aha-header__email{min-width:16rem}.aha-product-picker{margin-top:.5rem;display:flex;align-items:center;gap:.6rem;flex-wrap:wrap}.aha-product-picker__label{font-size:.9375rem;font-weight:600;color:#1e293b}.aha-product-picker .aha-field__input{min-width:14rem;width:auto}.aha-product-picker__error{margin:.25rem 0 0;font-size:.8125rem;color:#b91c1c;flex-basis:100%}.aha-email-edit{display:flex;flex-direction:column;gap:.4rem}.aha-email-edit__label{font-size:.8125rem;font-weight:600;color:#334155}.aha-email-edit__help{margin:0;font-size:.8125rem;color:#b91c1c}.aha-email-edit__actions{display:flex;gap:.5rem}.aha-email-display{display:flex;flex-wrap:wrap;align-items:baseline;gap:.4rem;font-size:.9375rem;color:#334155}.aha-email-display__value{color:#0f172a;font-weight:600}.aha-toolbar{display:flex;flex-wrap:wrap;gap:.75rem;align-items:stretch}.aha-toolbar__search{flex:1 1 18rem;min-width:14rem}.aha-toolbar__sort{flex:0 0 auto;min-width:11rem}.aha-field{display:flex;flex-direction:column;gap:.35rem}.aha-field__label{font-size:.875rem;font-weight:600;color:#1e293b}.aha-field__label--sr{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.aha-field__required{color:#b91c1c;margin-left:.15rem}.aha-field__input{width:100%;padding:.55rem .75rem;font-size:.9375rem;font-family:inherit;color:#0f172a;background:#fff;border:1px solid #94a3b8;border-radius:6px;-webkit-appearance:none;-moz-appearance:none;appearance:none;transition:border-color .12s ease,box-shadow .12s ease}.aha-field__input:hover:not(:disabled){border-color:#64748b}.aha-field__input:focus,.aha-field__input:focus-visible{outline:2px solid #1d4ed8;outline-offset:1px;border-color:#1d4ed8}.aha-field__input:disabled{background:#f1f5f9;color:#475569;cursor:not-allowed;border-style:dashed;opacity:.75}.aha-field__input--textarea{min-height:6rem;resize:vertical}.aha-field__input--select{background-image:linear-gradient(45deg,transparent 50%,#475569 50%),linear-gradient(135deg,#475569 50%,transparent 50%);background-position:calc(100% - 1.1rem) 50%,calc(100% - .7rem) 50%;background-size:.4rem .4rem,.4rem .4rem;background-repeat:no-repeat;padding-right:2rem}.aha-button{display:inline-flex;align-items:center;justify-content:center;gap:.4rem;padding:.55rem 1rem;font-size:.9375rem;font-weight:600;font-family:inherit;border:1px solid transparent;border-radius:6px;cursor:pointer;background:#fff;color:#0f172a;transition:background-color .12s ease,color .12s ease,border-color .12s ease,box-shadow .12s ease;white-space:nowrap}.aha-button:focus,.aha-button:focus-visible{outline:2px solid #1d4ed8;outline-offset:2px}.aha-button:disabled,.aha-button[aria-disabled=true]{cursor:not-allowed;opacity:.6}.aha-button--sm{padding:.35rem .65rem;font-size:.8125rem}.aha-button--primary{background:#1d4ed8;color:#fff;border-color:#1d4ed8}.aha-button--primary:hover:not(:disabled):not([aria-disabled=true]){background:#1e40af;border-color:#1e40af}.aha-button--secondary{background:#fff;color:#0f172a;border-color:#94a3b8}.aha-button--secondary:hover:not(:disabled):not([aria-disabled=true]){background:#f1f5f9;border-color:#475569}.aha-button--vote{background:#fff;color:#1d4ed8;border-color:#1d4ed8;min-width:5rem}.aha-button--vote:hover:not(:disabled):not([aria-disabled=true]){background:#eff6ff}.aha-button--voted{background:#166534;color:#fff;border-color:#166534}.aha-button--link{background:transparent;color:#1d4ed8;border:none;padding:.25rem .35rem;text-decoration:underline;font-weight:500}.aha-button--link:hover:not(:disabled){color:#1e40af}.aha-status{font-size:.875rem;color:#475569}.aha-alert{padding:.75rem 1rem;border-radius:6px;display:flex;flex-wrap:wrap;gap:.75rem;align-items:center;border:1px solid;font-size:.9375rem}.aha-alert--error{background:#fef2f2;color:#7f1d1d;border-color:#fca5a5}.aha-alert--warning{background:#fffbeb;color:#78350f;border-color:#fcd34d}.aha-empty{padding:2rem;text-align:center;color:#475569;background:#f8fafc;border:1px dashed #cbd5e1;border-radius:8px}.aha-empty p{margin:.25rem 0}.aha-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:.75rem}.aha-list__item{margin:0}.aha-card{display:flex;gap:1.25rem;align-items:flex-start;padding:1.25rem;background:#fff;border:1px solid #e2e8f0;border-radius:8px;box-shadow:0 1px 2px #0f172a0a}.aha-card__main{flex:1 1 auto;min-width:0}.aha-card__title{margin:0;font-size:1.0625rem;font-weight:600;color:#0f172a;line-height:1.35}.aha-card__reference{margin:.15rem 0 0;font-size:.8125rem;font-weight:500;color:#475569;letter-spacing:.02em}.aha-card__description{margin:.65rem 0 0;font-size:.9375rem;color:#1e293b;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;word-break:break-word}.aha-card__actions{flex:0 0 auto;display:flex;flex-direction:column;align-items:center;gap:.4rem;min-width:5rem}.aha-card__count{font-size:1.375rem;font-weight:700;color:#0f172a}.aha-pagination{display:flex;flex-wrap:wrap;gap:.75rem;align-items:center;justify-content:center;padding-top:.5rem}.aha-pagination__status{font-size:.9375rem;color:#1e293b;font-weight:500}.aha-form{display:flex;flex-direction:column;gap:.85rem;padding:1.25rem;background:#f8fafc;border:1px solid #cbd5e1;border-radius:8px}.aha-form__heading{margin:0;font-size:1.125rem;font-weight:700;color:#0f172a}.aha-form__attribution{margin:0;font-size:.875rem;color:#475569}.aha-form__attribution strong{color:#0f172a}.aha-form__actions{display:flex;gap:.5rem;flex-wrap:wrap}.aha-toast{align-self:center;display:inline-flex;align-items:center;gap:.75rem;margin-top:.5rem;padding:.65rem 1rem;background:#0f172a;color:#fff;border-radius:6px;font-size:.9375rem;box-shadow:0 6px 14px #0f172a2e}.aha-toast__dismiss{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.55);padding:.2rem .55rem;font-size:.8125rem;font-weight:600;border-radius:4px;cursor:pointer}.aha-toast__dismiss:focus,.aha-toast__dismiss:focus-visible{outline:2px solid #ffffff;outline-offset:2px}@media(max-width:640px){.aha-widget{padding:1rem}.aha-card{flex-direction:column-reverse;align-items:stretch}.aha-card__actions{flex-direction:row;justify-content:space-between;min-width:0}}@media(prefers-reduced-motion:reduce){.aha-button,.aha-field__input{transition:none}}";
var of = { exports: {} }, Nu = {}, df = { exports: {} }, rf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Er;
function uh() {
  return Er || (Er = 1, (function(m) {
    function T(S, O) {
      var R = S.length;
      S.push(O);
      l: for (; 0 < R; ) {
        var al = R - 1 >>> 1, ul = S[al];
        if (0 < q(ul, O))
          S[al] = O, S[R] = ul, R = al;
        else break l;
      }
    }
    function U(S) {
      return S.length === 0 ? null : S[0];
    }
    function r(S) {
      if (S.length === 0) return null;
      var O = S[0], R = S.pop();
      if (R !== O) {
        S[0] = R;
        l: for (var al = 0, ul = S.length, o = ul >>> 1; al < o; ) {
          var z = 2 * (al + 1) - 1, A = S[z], N = z + 1, Z = S[N];
          if (0 > q(A, R))
            N < ul && 0 > q(Z, A) ? (S[al] = Z, S[N] = R, al = N) : (S[al] = A, S[z] = R, al = z);
          else if (N < ul && 0 > q(Z, R))
            S[al] = Z, S[N] = R, al = N;
          else break l;
        }
      }
      return O;
    }
    function q(S, O) {
      var R = S.sortIndex - O.sortIndex;
      return R !== 0 ? R : S.id - O.id;
    }
    if (m.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var Q = performance;
      m.unstable_now = function() {
        return Q.now();
      };
    } else {
      var V = Date, X = V.now();
      m.unstable_now = function() {
        return V.now() - X;
      };
    }
    var D = [], b = [], Y = 1, C = null, J = 3, nl = !1, zl = !1, F = !1, Cl = !1, pl = typeof setTimeout == "function" ? setTimeout : null, $l = typeof clearTimeout == "function" ? clearTimeout : null, gl = typeof setImmediate < "u" ? setImmediate : null;
    function Ml(S) {
      for (var O = U(b); O !== null; ) {
        if (O.callback === null) r(b);
        else if (O.startTime <= S)
          r(b), O.sortIndex = O.expirationTime, T(D, O);
        else break;
        O = U(b);
      }
    }
    function kl(S) {
      if (F = !1, Ml(S), !zl)
        if (U(D) !== null)
          zl = !0, Ll || (Ll = !0, Hl());
        else {
          var O = U(b);
          O !== null && Kl(kl, O.startTime - S);
        }
    }
    var Ll = !1, k = -1, jl = 5, yt = -1;
    function xt() {
      return Cl ? !0 : !(m.unstable_now() - yt < jl);
    }
    function wl() {
      if (Cl = !1, Ll) {
        var S = m.unstable_now();
        yt = S;
        var O = !0;
        try {
          l: {
            zl = !1, F && (F = !1, $l(k), k = -1), nl = !0;
            var R = J;
            try {
              t: {
                for (Ml(S), C = U(D); C !== null && !(C.expirationTime > S && xt()); ) {
                  var al = C.callback;
                  if (typeof al == "function") {
                    C.callback = null, J = C.priorityLevel;
                    var ul = al(
                      C.expirationTime <= S
                    );
                    if (S = m.unstable_now(), typeof ul == "function") {
                      C.callback = ul, Ml(S), O = !0;
                      break t;
                    }
                    C === U(D) && r(D), Ml(S);
                  } else r(D);
                  C = U(D);
                }
                if (C !== null) O = !0;
                else {
                  var o = U(b);
                  o !== null && Kl(
                    kl,
                    o.startTime - S
                  ), O = !1;
                }
              }
              break l;
            } finally {
              C = null, J = R, nl = !1;
            }
            O = void 0;
          }
        } finally {
          O ? Hl() : Ll = !1;
        }
      }
    }
    var Hl;
    if (typeof gl == "function")
      Hl = function() {
        gl(wl);
      };
    else if (typeof MessageChannel < "u") {
      var Ct = new MessageChannel(), vt = Ct.port2;
      Ct.port1.onmessage = wl, Hl = function() {
        vt.postMessage(null);
      };
    } else
      Hl = function() {
        pl(wl, 0);
      };
    function Kl(S, O) {
      k = pl(function() {
        S(m.unstable_now());
      }, O);
    }
    m.unstable_IdlePriority = 5, m.unstable_ImmediatePriority = 1, m.unstable_LowPriority = 4, m.unstable_NormalPriority = 3, m.unstable_Profiling = null, m.unstable_UserBlockingPriority = 2, m.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, m.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : jl = 0 < S ? Math.floor(1e3 / S) : 5;
    }, m.unstable_getCurrentPriorityLevel = function() {
      return J;
    }, m.unstable_next = function(S) {
      switch (J) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = J;
      }
      var R = J;
      J = O;
      try {
        return S();
      } finally {
        J = R;
      }
    }, m.unstable_requestPaint = function() {
      Cl = !0;
    }, m.unstable_runWithPriority = function(S, O) {
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
      var R = J;
      J = S;
      try {
        return O();
      } finally {
        J = R;
      }
    }, m.unstable_scheduleCallback = function(S, O, R) {
      var al = m.unstable_now();
      switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? al + R : al) : R = al, S) {
        case 1:
          var ul = -1;
          break;
        case 2:
          ul = 250;
          break;
        case 5:
          ul = 1073741823;
          break;
        case 4:
          ul = 1e4;
          break;
        default:
          ul = 5e3;
      }
      return ul = R + ul, S = {
        id: Y++,
        callback: O,
        priorityLevel: S,
        startTime: R,
        expirationTime: ul,
        sortIndex: -1
      }, R > al ? (S.sortIndex = R, T(b, S), U(D) === null && S === U(b) && (F ? ($l(k), k = -1) : F = !0, Kl(kl, R - al))) : (S.sortIndex = ul, T(D, S), zl || nl || (zl = !0, Ll || (Ll = !0, Hl()))), S;
    }, m.unstable_shouldYield = xt, m.unstable_wrapCallback = function(S) {
      var O = J;
      return function() {
        var R = J;
        J = O;
        try {
          return S.apply(this, arguments);
        } finally {
          J = R;
        }
      };
    };
  })(rf)), rf;
}
var Tr;
function nh() {
  return Tr || (Tr = 1, df.exports = uh()), df.exports;
}
var mf = { exports: {} }, L = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar;
function ih() {
  if (Ar) return L;
  Ar = 1;
  var m = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), U = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), Q = Symbol.for("react.consumer"), V = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), b = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), J = Symbol.iterator;
  function nl(o) {
    return o === null || typeof o != "object" ? null : (o = J && o[J] || o["@@iterator"], typeof o == "function" ? o : null);
  }
  var zl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, F = Object.assign, Cl = {};
  function pl(o, z, A) {
    this.props = o, this.context = z, this.refs = Cl, this.updater = A || zl;
  }
  pl.prototype.isReactComponent = {}, pl.prototype.setState = function(o, z) {
    if (typeof o != "object" && typeof o != "function" && o != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, o, z, "setState");
  }, pl.prototype.forceUpdate = function(o) {
    this.updater.enqueueForceUpdate(this, o, "forceUpdate");
  };
  function $l() {
  }
  $l.prototype = pl.prototype;
  function gl(o, z, A) {
    this.props = o, this.context = z, this.refs = Cl, this.updater = A || zl;
  }
  var Ml = gl.prototype = new $l();
  Ml.constructor = gl, F(Ml, pl.prototype), Ml.isPureReactComponent = !0;
  var kl = Array.isArray;
  function Ll() {
  }
  var k = { H: null, A: null, T: null, S: null }, jl = Object.prototype.hasOwnProperty;
  function yt(o, z, A) {
    var N = A.ref;
    return {
      $$typeof: m,
      type: o,
      key: z,
      ref: N !== void 0 ? N : null,
      props: A
    };
  }
  function xt(o, z) {
    return yt(o.type, z, o.props);
  }
  function wl(o) {
    return typeof o == "object" && o !== null && o.$$typeof === m;
  }
  function Hl(o) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + o.replace(/[=:]/g, function(A) {
      return z[A];
    });
  }
  var Ct = /\/+/g;
  function vt(o, z) {
    return typeof o == "object" && o !== null && o.key != null ? Hl("" + o.key) : z.toString(36);
  }
  function Kl(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (typeof o.status == "string" ? o.then(Ll, Ll) : (o.status = "pending", o.then(
          function(z) {
            o.status === "pending" && (o.status = "fulfilled", o.value = z);
          },
          function(z) {
            o.status === "pending" && (o.status = "rejected", o.reason = z);
          }
        )), o.status) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function S(o, z, A, N, Z) {
    var K = typeof o;
    (K === "undefined" || K === "boolean") && (o = null);
    var il = !1;
    if (o === null) il = !0;
    else
      switch (K) {
        case "bigint":
        case "string":
        case "number":
          il = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case m:
            case T:
              il = !0;
              break;
            case Y:
              return il = o._init, S(
                il(o._payload),
                z,
                A,
                N,
                Z
              );
          }
      }
    if (il)
      return Z = Z(o), il = N === "" ? "." + vt(o, 0) : N, kl(Z) ? (A = "", il != null && (A = il.replace(Ct, "$&/") + "/"), S(Z, z, A, "", function(Bt) {
        return Bt;
      })) : Z != null && (wl(Z) && (Z = xt(
        Z,
        A + (Z.key == null || o && o.key === Z.key ? "" : ("" + Z.key).replace(
          Ct,
          "$&/"
        ) + "/") + il
      )), z.push(Z)), 1;
    il = 0;
    var ql = N === "" ? "." : N + ":";
    if (kl(o))
      for (var yl = 0; yl < o.length; yl++)
        N = o[yl], K = ql + vt(N, yl), il += S(
          N,
          z,
          A,
          K,
          Z
        );
    else if (yl = nl(o), typeof yl == "function")
      for (o = yl.call(o), yl = 0; !(N = o.next()).done; )
        N = N.value, K = ql + vt(N, yl++), il += S(
          N,
          z,
          A,
          K,
          Z
        );
    else if (K === "object") {
      if (typeof o.then == "function")
        return S(
          Kl(o),
          z,
          A,
          N,
          Z
        );
      throw z = String(o), Error(
        "Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return il;
  }
  function O(o, z, A) {
    if (o == null) return o;
    var N = [], Z = 0;
    return S(o, N, "", "", function(K) {
      return z.call(A, K, Z++);
    }), N;
  }
  function R(o) {
    if (o._status === -1) {
      var z = o._result;
      z = z(), z.then(
        function(A) {
          (o._status === 0 || o._status === -1) && (o._status = 1, o._result = A);
        },
        function(A) {
          (o._status === 0 || o._status === -1) && (o._status = 2, o._result = A);
        }
      ), o._status === -1 && (o._status = 0, o._result = z);
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var al = typeof reportError == "function" ? reportError : function(o) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var z = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof o == "object" && o !== null && typeof o.message == "string" ? String(o.message) : String(o),
        error: o
      });
      if (!window.dispatchEvent(z)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", o);
      return;
    }
    console.error(o);
  }, ul = {
    map: O,
    forEach: function(o, z, A) {
      O(
        o,
        function() {
          z.apply(this, arguments);
        },
        A
      );
    },
    count: function(o) {
      var z = 0;
      return O(o, function() {
        z++;
      }), z;
    },
    toArray: function(o) {
      return O(o, function(z) {
        return z;
      }) || [];
    },
    only: function(o) {
      if (!wl(o))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return o;
    }
  };
  return L.Activity = C, L.Children = ul, L.Component = pl, L.Fragment = U, L.Profiler = q, L.PureComponent = gl, L.StrictMode = r, L.Suspense = D, L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k, L.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(o) {
      return k.H.useMemoCache(o);
    }
  }, L.cache = function(o) {
    return function() {
      return o.apply(null, arguments);
    };
  }, L.cacheSignal = function() {
    return null;
  }, L.cloneElement = function(o, z, A) {
    if (o == null)
      throw Error(
        "The argument must be a React element, but you passed " + o + "."
      );
    var N = F({}, o.props), Z = o.key;
    if (z != null)
      for (K in z.key !== void 0 && (Z = "" + z.key), z)
        !jl.call(z, K) || K === "key" || K === "__self" || K === "__source" || K === "ref" && z.ref === void 0 || (N[K] = z[K]);
    var K = arguments.length - 2;
    if (K === 1) N.children = A;
    else if (1 < K) {
      for (var il = Array(K), ql = 0; ql < K; ql++)
        il[ql] = arguments[ql + 2];
      N.children = il;
    }
    return yt(o.type, Z, N);
  }, L.createContext = function(o) {
    return o = {
      $$typeof: V,
      _currentValue: o,
      _currentValue2: o,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, o.Provider = o, o.Consumer = {
      $$typeof: Q,
      _context: o
    }, o;
  }, L.createElement = function(o, z, A) {
    var N, Z = {}, K = null;
    if (z != null)
      for (N in z.key !== void 0 && (K = "" + z.key), z)
        jl.call(z, N) && N !== "key" && N !== "__self" && N !== "__source" && (Z[N] = z[N]);
    var il = arguments.length - 2;
    if (il === 1) Z.children = A;
    else if (1 < il) {
      for (var ql = Array(il), yl = 0; yl < il; yl++)
        ql[yl] = arguments[yl + 2];
      Z.children = ql;
    }
    if (o && o.defaultProps)
      for (N in il = o.defaultProps, il)
        Z[N] === void 0 && (Z[N] = il[N]);
    return yt(o, K, Z);
  }, L.createRef = function() {
    return { current: null };
  }, L.forwardRef = function(o) {
    return { $$typeof: X, render: o };
  }, L.isValidElement = wl, L.lazy = function(o) {
    return {
      $$typeof: Y,
      _payload: { _status: -1, _result: o },
      _init: R
    };
  }, L.memo = function(o, z) {
    return {
      $$typeof: b,
      type: o,
      compare: z === void 0 ? null : z
    };
  }, L.startTransition = function(o) {
    var z = k.T, A = {};
    k.T = A;
    try {
      var N = o(), Z = k.S;
      Z !== null && Z(A, N), typeof N == "object" && N !== null && typeof N.then == "function" && N.then(Ll, al);
    } catch (K) {
      al(K);
    } finally {
      z !== null && A.types !== null && (z.types = A.types), k.T = z;
    }
  }, L.unstable_useCacheRefresh = function() {
    return k.H.useCacheRefresh();
  }, L.use = function(o) {
    return k.H.use(o);
  }, L.useActionState = function(o, z, A) {
    return k.H.useActionState(o, z, A);
  }, L.useCallback = function(o, z) {
    return k.H.useCallback(o, z);
  }, L.useContext = function(o) {
    return k.H.useContext(o);
  }, L.useDebugValue = function() {
  }, L.useDeferredValue = function(o, z) {
    return k.H.useDeferredValue(o, z);
  }, L.useEffect = function(o, z) {
    return k.H.useEffect(o, z);
  }, L.useEffectEvent = function(o) {
    return k.H.useEffectEvent(o);
  }, L.useId = function() {
    return k.H.useId();
  }, L.useImperativeHandle = function(o, z, A) {
    return k.H.useImperativeHandle(o, z, A);
  }, L.useInsertionEffect = function(o, z) {
    return k.H.useInsertionEffect(o, z);
  }, L.useLayoutEffect = function(o, z) {
    return k.H.useLayoutEffect(o, z);
  }, L.useMemo = function(o, z) {
    return k.H.useMemo(o, z);
  }, L.useOptimistic = function(o, z) {
    return k.H.useOptimistic(o, z);
  }, L.useReducer = function(o, z, A) {
    return k.H.useReducer(o, z, A);
  }, L.useRef = function(o) {
    return k.H.useRef(o);
  }, L.useState = function(o) {
    return k.H.useState(o);
  }, L.useSyncExternalStore = function(o, z, A) {
    return k.H.useSyncExternalStore(
      o,
      z,
      A
    );
  }, L.useTransition = function() {
    return k.H.useTransition();
  }, L.version = "19.2.5", L;
}
var Or;
function Sf() {
  return Or || (Or = 1, mf.exports = ih()), mf.exports;
}
var hf = { exports: {} }, Jl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mr;
function ch() {
  if (Mr) return Jl;
  Mr = 1;
  var m = Sf();
  function T(D) {
    var b = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Y = 2; Y < arguments.length; Y++)
        b += "&args[]=" + encodeURIComponent(arguments[Y]);
    }
    return "Minified React error #" + D + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function U() {
  }
  var r = {
    d: {
      f: U,
      r: function() {
        throw Error(T(522));
      },
      D: U,
      C: U,
      L: U,
      m: U,
      X: U,
      S: U,
      M: U
    },
    p: 0,
    findDOMNode: null
  }, q = Symbol.for("react.portal");
  function Q(D, b, Y) {
    var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: q,
      key: C == null ? null : "" + C,
      children: D,
      containerInfo: b,
      implementation: Y
    };
  }
  var V = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function X(D, b) {
    if (D === "font") return "";
    if (typeof b == "string")
      return b === "use-credentials" ? b : "";
  }
  return Jl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Jl.createPortal = function(D, b) {
    var Y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!b || b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11)
      throw Error(T(299));
    return Q(D, b, null, Y);
  }, Jl.flushSync = function(D) {
    var b = V.T, Y = r.p;
    try {
      if (V.T = null, r.p = 2, D) return D();
    } finally {
      V.T = b, r.p = Y, r.d.f();
    }
  }, Jl.preconnect = function(D, b) {
    typeof D == "string" && (b ? (b = b.crossOrigin, b = typeof b == "string" ? b === "use-credentials" ? b : "" : void 0) : b = null, r.d.C(D, b));
  }, Jl.prefetchDNS = function(D) {
    typeof D == "string" && r.d.D(D);
  }, Jl.preinit = function(D, b) {
    if (typeof D == "string" && b && typeof b.as == "string") {
      var Y = b.as, C = X(Y, b.crossOrigin), J = typeof b.integrity == "string" ? b.integrity : void 0, nl = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
      Y === "style" ? r.d.S(
        D,
        typeof b.precedence == "string" ? b.precedence : void 0,
        {
          crossOrigin: C,
          integrity: J,
          fetchPriority: nl
        }
      ) : Y === "script" && r.d.X(D, {
        crossOrigin: C,
        integrity: J,
        fetchPriority: nl,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0
      });
    }
  }, Jl.preinitModule = function(D, b) {
    if (typeof D == "string")
      if (typeof b == "object" && b !== null) {
        if (b.as == null || b.as === "script") {
          var Y = X(
            b.as,
            b.crossOrigin
          );
          r.d.M(D, {
            crossOrigin: Y,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
            nonce: typeof b.nonce == "string" ? b.nonce : void 0
          });
        }
      } else b == null && r.d.M(D);
  }, Jl.preload = function(D, b) {
    if (typeof D == "string" && typeof b == "object" && b !== null && typeof b.as == "string") {
      var Y = b.as, C = X(Y, b.crossOrigin);
      r.d.L(D, Y, {
        crossOrigin: C,
        integrity: typeof b.integrity == "string" ? b.integrity : void 0,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0,
        type: typeof b.type == "string" ? b.type : void 0,
        fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
        referrerPolicy: typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
        imageSrcSet: typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
        imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
        media: typeof b.media == "string" ? b.media : void 0
      });
    }
  }, Jl.preloadModule = function(D, b) {
    if (typeof D == "string")
      if (b) {
        var Y = X(b.as, b.crossOrigin);
        r.d.m(D, {
          as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
          crossOrigin: Y,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0
        });
      } else r.d.m(D);
  }, Jl.requestFormReset = function(D) {
    r.d.r(D);
  }, Jl.unstable_batchedUpdates = function(D, b) {
    return D(b);
  }, Jl.useFormState = function(D, b, Y) {
    return V.H.useFormState(D, b, Y);
  }, Jl.useFormStatus = function() {
    return V.H.useHostTransitionStatus();
  }, Jl.version = "19.2.5", Jl;
}
var Dr;
function fh() {
  if (Dr) return hf.exports;
  Dr = 1;
  function m() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m);
      } catch (T) {
        console.error(T);
      }
  }
  return m(), hf.exports = ch(), hf.exports;
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
var Nr;
function sh() {
  if (Nr) return Nu;
  Nr = 1;
  var m = nh(), T = Sf(), U = fh();
  function r(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function q(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function Q(l) {
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
  function V(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function X(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function D(l) {
    if (Q(l) !== l)
      throw Error(r(188));
  }
  function b(l) {
    var t = l.alternate;
    if (!t) {
      if (t = Q(l), t === null) throw Error(r(188));
      return t !== l ? null : l;
    }
    for (var a = l, e = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (e = u.return, e !== null) {
          a = e;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === a) return D(u), l;
          if (n === e) return D(u), t;
          n = n.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== e.return) a = u, e = n;
      else {
        for (var i = !1, c = u.child; c; ) {
          if (c === a) {
            i = !0, a = u, e = n;
            break;
          }
          if (c === e) {
            i = !0, e = u, a = n;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === a) {
              i = !0, a = n, e = u;
              break;
            }
            if (c === e) {
              i = !0, e = n, a = u;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(r(189));
        }
      }
      if (a.alternate !== e) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? l : t;
  }
  function Y(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = Y(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var C = Object.assign, J = Symbol.for("react.element"), nl = Symbol.for("react.transitional.element"), zl = Symbol.for("react.portal"), F = Symbol.for("react.fragment"), Cl = Symbol.for("react.strict_mode"), pl = Symbol.for("react.profiler"), $l = Symbol.for("react.consumer"), gl = Symbol.for("react.context"), Ml = Symbol.for("react.forward_ref"), kl = Symbol.for("react.suspense"), Ll = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), jl = Symbol.for("react.lazy"), yt = Symbol.for("react.activity"), xt = Symbol.for("react.memo_cache_sentinel"), wl = Symbol.iterator;
  function Hl(l) {
    return l === null || typeof l != "object" ? null : (l = wl && l[wl] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ct = Symbol.for("react.client.reference");
  function vt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ct ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case F:
        return "Fragment";
      case pl:
        return "Profiler";
      case Cl:
        return "StrictMode";
      case kl:
        return "Suspense";
      case Ll:
        return "SuspenseList";
      case yt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case zl:
          return "Portal";
        case gl:
          return l.displayName || "Context";
        case $l:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ml:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case k:
          return t = l.displayName || null, t !== null ? t : vt(l.type) || "Memo";
        case jl:
          t = l._payload, l = l._init;
          try {
            return vt(l(t));
          } catch {
          }
      }
    return null;
  }
  var Kl = Array.isArray, S = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = U.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, R = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, al = [], ul = -1;
  function o(l) {
    return { current: l };
  }
  function z(l) {
    0 > ul || (l.current = al[ul], al[ul] = null, ul--);
  }
  function A(l, t) {
    ul++, al[ul] = l.current, l.current = t;
  }
  var N = o(null), Z = o(null), K = o(null), il = o(null);
  function ql(l, t) {
    switch (A(K, t), A(Z, l), A(N, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Ld(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Ld(t), l = Kd(t, l);
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
    z(N), A(N, l);
  }
  function yl() {
    z(N), z(Z), z(K);
  }
  function Bt(l) {
    l.memoizedState !== null && A(il, l);
    var t = N.current, a = Kd(t, l.type);
    t !== a && (A(Z, l), A(N, a));
  }
  function Ja(l) {
    Z.current === l && (z(N), z(Z)), il.current === l && (z(il), Tu._currentValue = R);
  }
  var Ce, Uu;
  function Yt(l) {
    if (Ce === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Ce = t && t[1] || "", Uu = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ce + l + Uu;
  }
  var He = !1;
  function Re(l, t) {
    if (!l || He) return "";
    He = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var e = {
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
                  var v = g;
                }
                Reflect.construct(l, [], E);
              } else {
                try {
                  E.call();
                } catch (g) {
                  v = g;
                }
                l.call(E.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                v = g;
              }
              (E = l()) && typeof E.catch == "function" && E.catch(function() {
              });
            }
          } catch (g) {
            if (g && v && typeof g.stack == "string")
              return [g.stack, v.stack];
          }
          return [null, null];
        }
      };
      e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        e.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        e.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = e.DetermineComponentFrameRoot(), i = n[0], c = n[1];
      if (i && c) {
        var f = i.split(`
`), y = c.split(`
`);
        for (u = e = 0; e < f.length && !f[e].includes("DetermineComponentFrameRoot"); )
          e++;
        for (; u < y.length && !y[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (e === f.length || u === y.length)
          for (e = f.length - 1, u = y.length - 1; 1 <= e && 0 <= u && f[e] !== y[u]; )
            u--;
        for (; 1 <= e && 0 <= u; e--, u--)
          if (f[e] !== y[u]) {
            if (e !== 1 || u !== 1)
              do
                if (e--, u--, 0 > u || f[e] !== y[u]) {
                  var p = `
` + f[e].replace(" at new ", " at ");
                  return l.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", l.displayName)), p;
                }
              while (1 <= e && 0 <= u);
            break;
          }
      }
    } finally {
      He = !1, Error.prepareStackTrace = a;
    }
    return (a = l ? l.displayName || l.name : "") ? Yt(a) : "";
  }
  function je(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Yt(l.type);
      case 16:
        return Yt("Lazy");
      case 13:
        return l.child !== t && t !== null ? Yt("Suspense Fallback") : Yt("Suspense");
      case 19:
        return Yt("SuspenseList");
      case 0:
      case 15:
        return Re(l.type, !1);
      case 11:
        return Re(l.type.render, !1);
      case 1:
        return Re(l.type, !0);
      case 31:
        return Yt("Activity");
      default:
        return "";
    }
  }
  function xu(l) {
    try {
      var t = "", a = null;
      do
        t += je(l, a), a = l, l = l.return;
      while (l);
      return t;
    } catch (e) {
      return `
Error generating stack: ` + e.message + `
` + e.stack;
    }
  }
  var W = Object.prototype.hasOwnProperty, ut = m.unstable_scheduleCallback, wa = m.unstable_cancelCallback, Hr = m.unstable_shouldYield, Rr = m.unstable_requestPaint, nt = m.unstable_now, jr = m.unstable_getCurrentPriorityLevel, _f = m.unstable_ImmediatePriority, zf = m.unstable_UserBlockingPriority, Cu = m.unstable_NormalPriority, qr = m.unstable_LowPriority, Ef = m.unstable_IdlePriority, Br = m.log, Yr = m.unstable_setDisableYieldValue, qe = null, it = null;
  function ea(l) {
    if (typeof Br == "function" && Yr(l), it && typeof it.setStrictMode == "function")
      try {
        it.setStrictMode(qe, l);
      } catch {
      }
  }
  var ct = Math.clz32 ? Math.clz32 : Xr, Gr = Math.log, Qr = Math.LN2;
  function Xr(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Gr(l) / Qr | 0) | 0;
  }
  var Hu = 256, Ru = 262144, ju = 4194304;
  function Da(l) {
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
  function qu(l, t, a) {
    var e = l.pendingLanes;
    if (e === 0) return 0;
    var u = 0, n = l.suspendedLanes, i = l.pingedLanes;
    l = l.warmLanes;
    var c = e & 134217727;
    return c !== 0 ? (e = c & ~n, e !== 0 ? u = Da(e) : (i &= c, i !== 0 ? u = Da(i) : a || (a = c & ~l, a !== 0 && (u = Da(a))))) : (c = e & ~n, c !== 0 ? u = Da(c) : i !== 0 ? u = Da(i) : a || (a = e & ~l, a !== 0 && (u = Da(a)))), u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u, a = t & -t, n >= a || n === 32 && (a & 4194048) !== 0) ? t : u;
  }
  function Be(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Zr(l, t) {
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
  function Tf() {
    var l = ju;
    return ju <<= 1, (ju & 62914560) === 0 && (ju = 4194304), l;
  }
  function kn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Ye(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Vr(l, t, a, e, u, n) {
    var i = l.pendingLanes;
    l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
    var c = l.entanglements, f = l.expirationTimes, y = l.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var p = 31 - ct(a), E = 1 << p;
      c[p] = 0, f[p] = -1;
      var v = y[p];
      if (v !== null)
        for (y[p] = null, p = 0; p < v.length; p++) {
          var g = v[p];
          g !== null && (g.lane &= -536870913);
        }
      a &= ~E;
    }
    e !== 0 && Af(l, e, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t));
  }
  function Af(l, t, a) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var e = 31 - ct(t);
    l.entangledLanes |= t, l.entanglements[e] = l.entanglements[e] | 1073741824 | a & 261930;
  }
  function Of(l, t) {
    var a = l.entangledLanes |= t;
    for (l = l.entanglements; a; ) {
      var e = 31 - ct(a), u = 1 << e;
      u & t | l[e] & t && (l[e] |= t), a &= ~u;
    }
  }
  function Mf(l, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : Fn(a), (a & (l.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function Fn(l) {
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
  function In(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Df() {
    var l = O.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : hr(l.type));
  }
  function Nf(l, t) {
    var a = O.p;
    try {
      return O.p = l, t();
    } finally {
      O.p = a;
    }
  }
  var ua = Math.random().toString(36).slice(2), Gl = "__reactFiber$" + ua, Fl = "__reactProps$" + ua, Wa = "__reactContainer$" + ua, Pn = "__reactEvents$" + ua, Lr = "__reactListeners$" + ua, Kr = "__reactHandles$" + ua, Uf = "__reactResources$" + ua, Ge = "__reactMarker$" + ua;
  function li(l) {
    delete l[Gl], delete l[Fl], delete l[Pn], delete l[Lr], delete l[Kr];
  }
  function $a(l) {
    var t = l[Gl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if (t = a[Wa] || a[Gl]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (l = Id(l); l !== null; ) {
            if (a = l[Gl]) return a;
            l = Id(l);
          }
        return t;
      }
      l = a, a = l.parentNode;
    }
    return null;
  }
  function ka(l) {
    if (l = l[Gl] || l[Wa]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Qe(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(r(33));
  }
  function Fa(l) {
    var t = l[Uf];
    return t || (t = l[Uf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Bl(l) {
    l[Ge] = !0;
  }
  var xf = /* @__PURE__ */ new Set(), Cf = {};
  function Na(l, t) {
    Ia(l, t), Ia(l + "Capture", t);
  }
  function Ia(l, t) {
    for (Cf[l] = t, l = 0; l < t.length; l++)
      xf.add(t[l]);
  }
  var Jr = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Hf = {}, Rf = {};
  function wr(l) {
    return W.call(Rf, l) ? !0 : W.call(Hf, l) ? !1 : Jr.test(l) ? Rf[l] = !0 : (Hf[l] = !0, !1);
  }
  function Bu(l, t, a) {
    if (wr(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var e = t.toLowerCase().slice(0, 5);
            if (e !== "data-" && e !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function Yu(l, t, a) {
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
  function Gt(l, t, a, e) {
    if (e === null) l.removeAttribute(a);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + e);
    }
  }
  function gt(l) {
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
  function jf(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Wr(l, t, a) {
    var e = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
      var u = e.get, n = e.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(i) {
          a = "" + i, n.call(this, i);
        }
      }), Object.defineProperty(l, t, {
        enumerable: e.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(i) {
          a = "" + i;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function ti(l) {
    if (!l._valueTracker) {
      var t = jf(l) ? "checked" : "value";
      l._valueTracker = Wr(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function qf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), e = "";
    return l && (e = jf(l) ? l.checked ? "true" : "false" : l.value), l = e, l !== a ? (t.setValue(l), !0) : !1;
  }
  function Gu(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var $r = /[\n"\\]/g;
  function bt(l) {
    return l.replace(
      $r,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ai(l, t, a, e, u, n, i, c) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + gt(t)) : l.value !== "" + gt(t) && (l.value = "" + gt(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? ei(l, i, gt(t)) : a != null ? ei(l, i, gt(a)) : e != null && l.removeAttribute("value"), u == null && n != null && (l.defaultChecked = !!n), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + gt(c) : l.removeAttribute("name");
  }
  function Bf(l, t, a, e, u, n, i, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        ti(l);
        return;
      }
      a = a != null ? "" + gt(a) : "", t = t != null ? "" + gt(t) : a, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    e = e ?? u, e = typeof e != "function" && typeof e != "symbol" && !!e, l.checked = c ? l.checked : !!e, l.defaultChecked = !!e, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), ti(l);
  }
  function ei(l, t, a) {
    t === "number" && Gu(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
  }
  function Pa(l, t, a, e) {
    if (l = l.options, t) {
      t = {};
      for (var u = 0; u < a.length; u++)
        t["$" + a[u]] = !0;
      for (a = 0; a < l.length; a++)
        u = t.hasOwnProperty("$" + l[a].value), l[a].selected !== u && (l[a].selected = u), u && e && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + gt(a), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === a) {
          l[u].selected = !0, e && (l[u].defaultSelected = !0);
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Yf(l, t, a) {
    if (t != null && (t = "" + gt(t), t !== l.value && (l.value = t), a == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + gt(a) : "";
  }
  function Gf(l, t, a, e) {
    if (t == null) {
      if (e != null) {
        if (a != null) throw Error(r(92));
        if (Kl(e)) {
          if (1 < e.length) throw Error(r(93));
          e = e[0];
        }
        a = e;
      }
      a == null && (a = ""), t = a;
    }
    a = gt(t), l.defaultValue = a, e = l.textContent, e === a && e !== "" && e !== null && (l.value = e), ti(l);
  }
  function le(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var kr = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Qf(l, t, a) {
    var e = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? e ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : e ? l.setProperty(t, a) : typeof a != "number" || a === 0 || kr.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
  }
  function Xf(l, t, a) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (l = l.style, a != null) {
      for (var e in a)
        !a.hasOwnProperty(e) || t != null && t.hasOwnProperty(e) || (e.indexOf("--") === 0 ? l.setProperty(e, "") : e === "float" ? l.cssFloat = "" : l[e] = "");
      for (var u in t)
        e = t[u], t.hasOwnProperty(u) && a[u] !== e && Qf(l, u, e);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && Qf(l, n, t[n]);
  }
  function ui(l) {
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
  var Fr = /* @__PURE__ */ new Map([
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
  ]), Ir = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Qu(l) {
    return Ir.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Qt() {
  }
  var ni = null;
  function ii(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var te = null, ae = null;
  function Zf(l) {
    var t = ka(l);
    if (t && (l = t.stateNode)) {
      var a = l[Fl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (ai(
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
              'input[name="' + bt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var e = a[t];
              if (e !== l && e.form === l.form) {
                var u = e[Fl] || null;
                if (!u) throw Error(r(90));
                ai(
                  e,
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
            for (t = 0; t < a.length; t++)
              e = a[t], e.form === l.form && qf(e);
          }
          break l;
        case "textarea":
          Yf(l, a.value, a.defaultValue);
          break l;
        case "select":
          t = a.value, t != null && Pa(l, !!a.multiple, t, !1);
      }
    }
  }
  var ci = !1;
  function Vf(l, t, a) {
    if (ci) return l(t, a);
    ci = !0;
    try {
      var e = l(t);
      return e;
    } finally {
      if (ci = !1, (te !== null || ae !== null) && (Dn(), te && (t = te, l = ae, ae = te = null, Zf(t), l)))
        for (t = 0; t < l.length; t++) Zf(l[t]);
    }
  }
  function Xe(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var e = a[Fl] || null;
    if (e === null) return null;
    a = e[t];
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
        (e = !e.disabled) || (l = l.type, e = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !e;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function")
      throw Error(
        r(231, t, typeof a)
      );
    return a;
  }
  var Xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), fi = !1;
  if (Xt)
    try {
      var Ze = {};
      Object.defineProperty(Ze, "passive", {
        get: function() {
          fi = !0;
        }
      }), window.addEventListener("test", Ze, Ze), window.removeEventListener("test", Ze, Ze);
    } catch {
      fi = !1;
    }
  var na = null, si = null, Xu = null;
  function Lf() {
    if (Xu) return Xu;
    var l, t = si, a = t.length, e, u = "value" in na ? na.value : na.textContent, n = u.length;
    for (l = 0; l < a && t[l] === u[l]; l++) ;
    var i = a - l;
    for (e = 1; e <= i && t[a - e] === u[n - e]; e++) ;
    return Xu = u.slice(l, 1 < e ? 1 - e : void 0);
  }
  function Zu(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Vu() {
    return !0;
  }
  function Kf() {
    return !1;
  }
  function Il(l) {
    function t(a, e, u, n, i) {
      this._reactName = a, this._targetInst = u, this.type = e, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (a = l[c], this[c] = a ? a(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Vu : Kf, this.isPropagationStopped = Kf, this;
    }
    return C(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Vu);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Vu);
      },
      persist: function() {
      },
      isPersistent: Vu
    }), t;
  }
  var Ua = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Lu = Il(Ua), Ve = C({}, Ua, { view: 0, detail: 0 }), Pr = Il(Ve), oi, di, Le, Ku = C({}, Ve, {
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
    getModifierState: mi,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Le && (Le && l.type === "mousemove" ? (oi = l.screenX - Le.screenX, di = l.screenY - Le.screenY) : di = oi = 0, Le = l), oi);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : di;
    }
  }), Jf = Il(Ku), lm = C({}, Ku, { dataTransfer: 0 }), tm = Il(lm), am = C({}, Ve, { relatedTarget: 0 }), ri = Il(am), em = C({}, Ua, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), um = Il(em), nm = C({}, Ua, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), im = Il(nm), cm = C({}, Ua, { data: 0 }), wf = Il(cm), fm = {
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
  }, sm = {
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
  }, om = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function dm(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = om[l]) ? !!t[l] : !1;
  }
  function mi() {
    return dm;
  }
  var rm = C({}, Ve, {
    key: function(l) {
      if (l.key) {
        var t = fm[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Zu(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? sm[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: mi,
    charCode: function(l) {
      return l.type === "keypress" ? Zu(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Zu(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), mm = Il(rm), hm = C({}, Ku, {
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
  }), Wf = Il(hm), ym = C({}, Ve, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: mi
  }), vm = Il(ym), gm = C({}, Ua, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), bm = Il(gm), Sm = C({}, Ku, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), pm = Il(Sm), _m = C({}, Ua, {
    newState: 0,
    oldState: 0
  }), zm = Il(_m), Em = [9, 13, 27, 32], hi = Xt && "CompositionEvent" in window, Ke = null;
  Xt && "documentMode" in document && (Ke = document.documentMode);
  var Tm = Xt && "TextEvent" in window && !Ke, $f = Xt && (!hi || Ke && 8 < Ke && 11 >= Ke), kf = " ", Ff = !1;
  function If(l, t) {
    switch (l) {
      case "keyup":
        return Em.indexOf(t.keyCode) !== -1;
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
  function Pf(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ee = !1;
  function Am(l, t) {
    switch (l) {
      case "compositionend":
        return Pf(t);
      case "keypress":
        return t.which !== 32 ? null : (Ff = !0, kf);
      case "textInput":
        return l = t.data, l === kf && Ff ? null : l;
      default:
        return null;
    }
  }
  function Om(l, t) {
    if (ee)
      return l === "compositionend" || !hi && If(l, t) ? (l = Lf(), Xu = si = na = null, ee = !1, l) : null;
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
        return $f && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Mm = {
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
  function ls(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Mm[l.type] : t === "textarea";
  }
  function ts(l, t, a, e) {
    te ? ae ? ae.push(e) : ae = [e] : te = e, t = jn(t, "onChange"), 0 < t.length && (a = new Lu(
      "onChange",
      "change",
      null,
      a,
      e
    ), l.push({ event: a, listeners: t }));
  }
  var Je = null, we = null;
  function Dm(l) {
    Yd(l, 0);
  }
  function Ju(l) {
    var t = Qe(l);
    if (qf(t)) return l;
  }
  function as(l, t) {
    if (l === "change") return t;
  }
  var es = !1;
  if (Xt) {
    var yi;
    if (Xt) {
      var vi = "oninput" in document;
      if (!vi) {
        var us = document.createElement("div");
        us.setAttribute("oninput", "return;"), vi = typeof us.oninput == "function";
      }
      yi = vi;
    } else yi = !1;
    es = yi && (!document.documentMode || 9 < document.documentMode);
  }
  function ns() {
    Je && (Je.detachEvent("onpropertychange", is), we = Je = null);
  }
  function is(l) {
    if (l.propertyName === "value" && Ju(we)) {
      var t = [];
      ts(
        t,
        we,
        l,
        ii(l)
      ), Vf(Dm, t);
    }
  }
  function Nm(l, t, a) {
    l === "focusin" ? (ns(), Je = t, we = a, Je.attachEvent("onpropertychange", is)) : l === "focusout" && ns();
  }
  function Um(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ju(we);
  }
  function xm(l, t) {
    if (l === "click") return Ju(t);
  }
  function Cm(l, t) {
    if (l === "input" || l === "change")
      return Ju(t);
  }
  function Hm(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var ft = typeof Object.is == "function" ? Object.is : Hm;
  function We(l, t) {
    if (ft(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(l), e = Object.keys(t);
    if (a.length !== e.length) return !1;
    for (e = 0; e < a.length; e++) {
      var u = a[e];
      if (!W.call(t, u) || !ft(l[u], t[u]))
        return !1;
    }
    return !0;
  }
  function cs(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function fs(l, t) {
    var a = cs(l);
    l = 0;
    for (var e; a; ) {
      if (a.nodeType === 3) {
        if (e = l + a.textContent.length, l <= t && e >= t)
          return { node: a, offset: t - l };
        l = e;
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
      a = cs(a);
    }
  }
  function ss(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ss(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function os(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Gu(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Gu(l.document);
    }
    return t;
  }
  function gi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Rm = Xt && "documentMode" in document && 11 >= document.documentMode, ue = null, bi = null, $e = null, Si = !1;
  function ds(l, t, a) {
    var e = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Si || ue == null || ue !== Gu(e) || (e = ue, "selectionStart" in e && gi(e) ? e = { start: e.selectionStart, end: e.selectionEnd } : (e = (e.ownerDocument && e.ownerDocument.defaultView || window).getSelection(), e = {
      anchorNode: e.anchorNode,
      anchorOffset: e.anchorOffset,
      focusNode: e.focusNode,
      focusOffset: e.focusOffset
    }), $e && We($e, e) || ($e = e, e = jn(bi, "onSelect"), 0 < e.length && (t = new Lu(
      "onSelect",
      "select",
      null,
      t,
      a
    ), l.push({ event: t, listeners: e }), t.target = ue)));
  }
  function xa(l, t) {
    var a = {};
    return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a;
  }
  var ne = {
    animationend: xa("Animation", "AnimationEnd"),
    animationiteration: xa("Animation", "AnimationIteration"),
    animationstart: xa("Animation", "AnimationStart"),
    transitionrun: xa("Transition", "TransitionRun"),
    transitionstart: xa("Transition", "TransitionStart"),
    transitioncancel: xa("Transition", "TransitionCancel"),
    transitionend: xa("Transition", "TransitionEnd")
  }, pi = {}, rs = {};
  Xt && (rs = document.createElement("div").style, "AnimationEvent" in window || (delete ne.animationend.animation, delete ne.animationiteration.animation, delete ne.animationstart.animation), "TransitionEvent" in window || delete ne.transitionend.transition);
  function Ca(l) {
    if (pi[l]) return pi[l];
    if (!ne[l]) return l;
    var t = ne[l], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in rs)
        return pi[l] = t[a];
    return l;
  }
  var ms = Ca("animationend"), hs = Ca("animationiteration"), ys = Ca("animationstart"), jm = Ca("transitionrun"), qm = Ca("transitionstart"), Bm = Ca("transitioncancel"), vs = Ca("transitionend"), gs = /* @__PURE__ */ new Map(), _i = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  _i.push("scrollEnd");
  function Mt(l, t) {
    gs.set(l, t), Na(t, [l]);
  }
  var wu = typeof reportError == "function" ? reportError : function(l) {
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
  }, St = [], ie = 0, zi = 0;
  function Wu() {
    for (var l = ie, t = zi = ie = 0; t < l; ) {
      var a = St[t];
      St[t++] = null;
      var e = St[t];
      St[t++] = null;
      var u = St[t];
      St[t++] = null;
      var n = St[t];
      if (St[t++] = null, e !== null && u !== null) {
        var i = e.pending;
        i === null ? u.next = u : (u.next = i.next, i.next = u), e.pending = u;
      }
      n !== 0 && bs(a, u, n);
    }
  }
  function $u(l, t, a, e) {
    St[ie++] = l, St[ie++] = t, St[ie++] = a, St[ie++] = e, zi |= e, l.lanes |= e, l = l.alternate, l !== null && (l.lanes |= e);
  }
  function Ei(l, t, a, e) {
    return $u(l, t, a, e), ku(l);
  }
  function Ha(l, t) {
    return $u(l, null, null, t), ku(l);
  }
  function bs(l, t, a) {
    l.lanes |= a;
    var e = l.alternate;
    e !== null && (e.lanes |= a);
    for (var u = !1, n = l.return; n !== null; )
      n.childLanes |= a, e = n.alternate, e !== null && (e.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (u = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, u && t !== null && (u = 31 - ct(a), l = n.hiddenUpdates, e = l[u], e === null ? l[u] = [t] : e.push(t), t.lane = a | 536870912), n) : null;
  }
  function ku(l) {
    if (50 < gu)
      throw gu = 0, Cc = null, Error(r(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ce = {};
  function Ym(l, t, a, e) {
    this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = e, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function st(l, t, a, e) {
    return new Ym(l, t, a, e);
  }
  function Ti(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Zt(l, t) {
    var a = l.alternate;
    return a === null ? (a = st(
      l.tag,
      t,
      l.key,
      l.mode
    ), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
  }
  function Ss(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Fu(l, t, a, e, u, n) {
    var i = 0;
    if (e = l, typeof l == "function") Ti(l) && (i = 1);
    else if (typeof l == "string")
      i = V0(
        l,
        a,
        N.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case yt:
          return l = st(31, a, t, u), l.elementType = yt, l.lanes = n, l;
        case F:
          return Ra(a.children, u, n, t);
        case Cl:
          i = 8, u |= 24;
          break;
        case pl:
          return l = st(12, a, t, u | 2), l.elementType = pl, l.lanes = n, l;
        case kl:
          return l = st(13, a, t, u), l.elementType = kl, l.lanes = n, l;
        case Ll:
          return l = st(19, a, t, u), l.elementType = Ll, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case gl:
                i = 10;
                break l;
              case $l:
                i = 9;
                break l;
              case Ml:
                i = 11;
                break l;
              case k:
                i = 14;
                break l;
              case jl:
                i = 16, e = null;
                break l;
            }
          i = 29, a = Error(
            r(130, l === null ? "null" : typeof l, "")
          ), e = null;
      }
    return t = st(i, a, t, u), t.elementType = l, t.type = e, t.lanes = n, t;
  }
  function Ra(l, t, a, e) {
    return l = st(7, l, e, t), l.lanes = a, l;
  }
  function Ai(l, t, a) {
    return l = st(6, l, null, t), l.lanes = a, l;
  }
  function ps(l) {
    var t = st(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Oi(l, t, a) {
    return t = st(
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
  var _s = /* @__PURE__ */ new WeakMap();
  function pt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = _s.get(l);
      return a !== void 0 ? a : (t = {
        value: l,
        source: t,
        stack: xu(t)
      }, _s.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: xu(t)
    };
  }
  var fe = [], se = 0, Iu = null, ke = 0, _t = [], zt = 0, ia = null, Ht = 1, Rt = "";
  function Vt(l, t) {
    fe[se++] = ke, fe[se++] = Iu, Iu = l, ke = t;
  }
  function zs(l, t, a) {
    _t[zt++] = Ht, _t[zt++] = Rt, _t[zt++] = ia, ia = l;
    var e = Ht;
    l = Rt;
    var u = 32 - ct(e) - 1;
    e &= ~(1 << u), a += 1;
    var n = 32 - ct(t) + u;
    if (30 < n) {
      var i = u - u % 5;
      n = (e & (1 << i) - 1).toString(32), e >>= i, u -= i, Ht = 1 << 32 - ct(t) + u | a << u | e, Rt = n + l;
    } else
      Ht = 1 << n | a << u | e, Rt = l;
  }
  function Mi(l) {
    l.return !== null && (Vt(l, 1), zs(l, 1, 0));
  }
  function Di(l) {
    for (; l === Iu; )
      Iu = fe[--se], fe[se] = null, ke = fe[--se], fe[se] = null;
    for (; l === ia; )
      ia = _t[--zt], _t[zt] = null, Rt = _t[--zt], _t[zt] = null, Ht = _t[--zt], _t[zt] = null;
  }
  function Es(l, t) {
    _t[zt++] = Ht, _t[zt++] = Rt, _t[zt++] = ia, Ht = t.id, Rt = t.overflow, ia = l;
  }
  var Ql = null, bl = null, el = !1, ca = null, Et = !1, Ni = Error(r(519));
  function fa(l) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Fe(pt(t, l)), Ni;
  }
  function Ts(l) {
    var t = l.stateNode, a = l.type, e = l.memoizedProps;
    switch (t[Gl] = l, t[Fl] = e, a) {
      case "dialog":
        P("cancel", t), P("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        P("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Su.length; a++)
          P(Su[a], t);
        break;
      case "source":
        P("error", t);
        break;
      case "img":
      case "image":
      case "link":
        P("error", t), P("load", t);
        break;
      case "details":
        P("toggle", t);
        break;
      case "input":
        P("invalid", t), Bf(
          t,
          e.value,
          e.defaultValue,
          e.checked,
          e.defaultChecked,
          e.type,
          e.name,
          !0
        );
        break;
      case "select":
        P("invalid", t);
        break;
      case "textarea":
        P("invalid", t), Gf(t, e.value, e.defaultValue, e.children);
    }
    a = e.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || e.suppressHydrationWarning === !0 || Zd(t.textContent, a) ? (e.popover != null && (P("beforetoggle", t), P("toggle", t)), e.onScroll != null && P("scroll", t), e.onScrollEnd != null && P("scrollend", t), e.onClick != null && (t.onclick = Qt), t = !0) : t = !1, t || fa(l, !0);
  }
  function As(l) {
    for (Ql = l.return; Ql; )
      switch (Ql.tag) {
        case 5:
        case 31:
        case 13:
          Et = !1;
          return;
        case 27:
        case 3:
          Et = !0;
          return;
        default:
          Ql = Ql.return;
      }
  }
  function oe(l) {
    if (l !== Ql) return !1;
    if (!el) return As(l), el = !0, !1;
    var t = l.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || wc(l.type, l.memoizedProps)), a = !a), a && bl && fa(l), As(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
      bl = Fd(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
      bl = Fd(l);
    } else
      t === 27 ? (t = bl, za(l.type) ? (l = Ic, Ic = null, bl = l) : bl = t) : bl = Ql ? At(l.stateNode.nextSibling) : null;
    return !0;
  }
  function ja() {
    bl = Ql = null, el = !1;
  }
  function Ui() {
    var l = ca;
    return l !== null && (at === null ? at = l : at.push.apply(
      at,
      l
    ), ca = null), l;
  }
  function Fe(l) {
    ca === null ? ca = [l] : ca.push(l);
  }
  var xi = o(null), qa = null, Lt = null;
  function sa(l, t, a) {
    A(xi, t._currentValue), t._currentValue = a;
  }
  function Kt(l) {
    l._currentValue = xi.current, z(xi);
  }
  function Ci(l, t, a) {
    for (; l !== null; ) {
      var e = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, e !== null && (e.childLanes |= t)) : e !== null && (e.childLanes & t) !== t && (e.childLanes |= t), l === a) break;
      l = l.return;
    }
  }
  function Hi(l, t, a, e) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = u;
          for (var f = 0; f < t.length; f++)
            if (c.context === t[f]) {
              n.lanes |= a, c = n.alternate, c !== null && (c.lanes |= a), Ci(
                n.return,
                a,
                l
              ), e || (i = null);
              break l;
            }
          n = c.next;
        }
      } else if (u.tag === 18) {
        if (i = u.return, i === null) throw Error(r(341));
        i.lanes |= a, n = i.alternate, n !== null && (n.lanes |= a), Ci(i, a, l), i = null;
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (u = i.sibling, u !== null) {
            u.return = i.return, i = u;
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function de(l, t, a, e) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(r(387));
        if (i = i.memoizedProps, i !== null) {
          var c = u.type;
          ft(u.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (u === il.current) {
        if (i = u.alternate, i === null) throw Error(r(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(Tu) : l = [Tu]);
      }
      u = u.return;
    }
    l !== null && Hi(
      t,
      l,
      a,
      e
    ), t.flags |= 262144;
  }
  function Pu(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!ft(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Ba(l) {
    qa = l, Lt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Xl(l) {
    return Os(qa, l);
  }
  function ln(l, t) {
    return qa === null && Ba(l), Os(l, t);
  }
  function Os(l, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, Lt === null) {
      if (l === null) throw Error(r(308));
      Lt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Lt = Lt.next = t;
    return a;
  }
  var Gm = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, e) {
        l.push(e);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(a) {
        return a();
      });
    };
  }, Qm = m.unstable_scheduleCallback, Xm = m.unstable_NormalPriority, Dl = {
    $$typeof: gl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ri() {
    return {
      controller: new Gm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ie(l) {
    l.refCount--, l.refCount === 0 && Qm(Xm, function() {
      l.controller.abort();
    });
  }
  var Pe = null, ji = 0, re = 0, me = null;
  function Zm(l, t) {
    if (Pe === null) {
      var a = Pe = [];
      ji = 0, re = Yc(), me = {
        status: "pending",
        value: void 0,
        then: function(e) {
          a.push(e);
        }
      };
    }
    return ji++, t.then(Ms, Ms), t;
  }
  function Ms() {
    if (--ji === 0 && Pe !== null) {
      me !== null && (me.status = "fulfilled");
      var l = Pe;
      Pe = null, re = 0, me = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Vm(l, t) {
    var a = [], e = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        a.push(u);
      }
    };
    return l.then(
      function() {
        e.status = "fulfilled", e.value = t;
        for (var u = 0; u < a.length; u++) (0, a[u])(t);
      },
      function(u) {
        for (e.status = "rejected", e.reason = u, u = 0; u < a.length; u++)
          (0, a[u])(void 0);
      }
    ), e;
  }
  var Ds = S.S;
  S.S = function(l, t) {
    rd = nt(), typeof t == "object" && t !== null && typeof t.then == "function" && Zm(l, t), Ds !== null && Ds(l, t);
  };
  var Ya = o(null);
  function qi() {
    var l = Ya.current;
    return l !== null ? l : vl.pooledCache;
  }
  function tn(l, t) {
    t === null ? A(Ya, Ya.current) : A(Ya, t.pool);
  }
  function Ns() {
    var l = qi();
    return l === null ? null : { parent: Dl._currentValue, pool: l };
  }
  var he = Error(r(460)), Bi = Error(r(474)), an = Error(r(542)), en = { then: function() {
  } };
  function Us(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function xs(l, t, a) {
    switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(Qt, Qt), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Hs(l), l;
      default:
        if (typeof t.status == "string") t.then(Qt, Qt);
        else {
          if (l = vl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(r(482));
          l = t, l.status = "pending", l.then(
            function(e) {
              if (t.status === "pending") {
                var u = t;
                u.status = "fulfilled", u.value = e;
              }
            },
            function(e) {
              if (t.status === "pending") {
                var u = t;
                u.status = "rejected", u.reason = e;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Hs(l), l;
        }
        throw Qa = t, he;
    }
  }
  function Ga(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Qa = a, he) : a;
    }
  }
  var Qa = null;
  function Cs() {
    if (Qa === null) throw Error(r(459));
    var l = Qa;
    return Qa = null, l;
  }
  function Hs(l) {
    if (l === he || l === an)
      throw Error(r(483));
  }
  var ye = null, lu = 0;
  function un(l) {
    var t = lu;
    return lu += 1, ye === null && (ye = []), xs(ye, l, t);
  }
  function tu(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function nn(l, t) {
    throw t.$$typeof === J ? Error(r(525)) : (l = Object.prototype.toString.call(t), Error(
      r(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function Rs(l) {
    function t(d, s) {
      if (l) {
        var h = d.deletions;
        h === null ? (d.deletions = [s], d.flags |= 16) : h.push(s);
      }
    }
    function a(d, s) {
      if (!l) return null;
      for (; s !== null; )
        t(d, s), s = s.sibling;
      return null;
    }
    function e(d) {
      for (var s = /* @__PURE__ */ new Map(); d !== null; )
        d.key !== null ? s.set(d.key, d) : s.set(d.index, d), d = d.sibling;
      return s;
    }
    function u(d, s) {
      return d = Zt(d, s), d.index = 0, d.sibling = null, d;
    }
    function n(d, s, h) {
      return d.index = h, l ? (h = d.alternate, h !== null ? (h = h.index, h < s ? (d.flags |= 67108866, s) : h) : (d.flags |= 67108866, s)) : (d.flags |= 1048576, s);
    }
    function i(d) {
      return l && d.alternate === null && (d.flags |= 67108866), d;
    }
    function c(d, s, h, _) {
      return s === null || s.tag !== 6 ? (s = Ai(h, d.mode, _), s.return = d, s) : (s = u(s, h), s.return = d, s);
    }
    function f(d, s, h, _) {
      var j = h.type;
      return j === F ? p(
        d,
        s,
        h.props.children,
        _,
        h.key
      ) : s !== null && (s.elementType === j || typeof j == "object" && j !== null && j.$$typeof === jl && Ga(j) === s.type) ? (s = u(s, h.props), tu(s, h), s.return = d, s) : (s = Fu(
        h.type,
        h.key,
        h.props,
        null,
        d.mode,
        _
      ), tu(s, h), s.return = d, s);
    }
    function y(d, s, h, _) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== h.containerInfo || s.stateNode.implementation !== h.implementation ? (s = Oi(h, d.mode, _), s.return = d, s) : (s = u(s, h.children || []), s.return = d, s);
    }
    function p(d, s, h, _, j) {
      return s === null || s.tag !== 7 ? (s = Ra(
        h,
        d.mode,
        _,
        j
      ), s.return = d, s) : (s = u(s, h), s.return = d, s);
    }
    function E(d, s, h) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return s = Ai(
          "" + s,
          d.mode,
          h
        ), s.return = d, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case nl:
            return h = Fu(
              s.type,
              s.key,
              s.props,
              null,
              d.mode,
              h
            ), tu(h, s), h.return = d, h;
          case zl:
            return s = Oi(
              s,
              d.mode,
              h
            ), s.return = d, s;
          case jl:
            return s = Ga(s), E(d, s, h);
        }
        if (Kl(s) || Hl(s))
          return s = Ra(
            s,
            d.mode,
            h,
            null
          ), s.return = d, s;
        if (typeof s.then == "function")
          return E(d, un(s), h);
        if (s.$$typeof === gl)
          return E(
            d,
            ln(d, s),
            h
          );
        nn(d, s);
      }
      return null;
    }
    function v(d, s, h, _) {
      var j = s !== null ? s.key : null;
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
        return j !== null ? null : c(d, s, "" + h, _);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case nl:
            return h.key === j ? f(d, s, h, _) : null;
          case zl:
            return h.key === j ? y(d, s, h, _) : null;
          case jl:
            return h = Ga(h), v(d, s, h, _);
        }
        if (Kl(h) || Hl(h))
          return j !== null ? null : p(d, s, h, _, null);
        if (typeof h.then == "function")
          return v(
            d,
            s,
            un(h),
            _
          );
        if (h.$$typeof === gl)
          return v(
            d,
            s,
            ln(d, h),
            _
          );
        nn(d, h);
      }
      return null;
    }
    function g(d, s, h, _, j) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return d = d.get(h) || null, c(s, d, "" + _, j);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case nl:
            return d = d.get(
              _.key === null ? h : _.key
            ) || null, f(s, d, _, j);
          case zl:
            return d = d.get(
              _.key === null ? h : _.key
            ) || null, y(s, d, _, j);
          case jl:
            return _ = Ga(_), g(
              d,
              s,
              h,
              _,
              j
            );
        }
        if (Kl(_) || Hl(_))
          return d = d.get(h) || null, p(s, d, _, j, null);
        if (typeof _.then == "function")
          return g(
            d,
            s,
            h,
            un(_),
            j
          );
        if (_.$$typeof === gl)
          return g(
            d,
            s,
            h,
            ln(s, _),
            j
          );
        nn(s, _);
      }
      return null;
    }
    function x(d, s, h, _) {
      for (var j = null, cl = null, H = s, $ = s = 0, tl = null; H !== null && $ < h.length; $++) {
        H.index > $ ? (tl = H, H = null) : tl = H.sibling;
        var fl = v(
          d,
          H,
          h[$],
          _
        );
        if (fl === null) {
          H === null && (H = tl);
          break;
        }
        l && H && fl.alternate === null && t(d, H), s = n(fl, s, $), cl === null ? j = fl : cl.sibling = fl, cl = fl, H = tl;
      }
      if ($ === h.length)
        return a(d, H), el && Vt(d, $), j;
      if (H === null) {
        for (; $ < h.length; $++)
          H = E(d, h[$], _), H !== null && (s = n(
            H,
            s,
            $
          ), cl === null ? j = H : cl.sibling = H, cl = H);
        return el && Vt(d, $), j;
      }
      for (H = e(H); $ < h.length; $++)
        tl = g(
          H,
          d,
          $,
          h[$],
          _
        ), tl !== null && (l && tl.alternate !== null && H.delete(
          tl.key === null ? $ : tl.key
        ), s = n(
          tl,
          s,
          $
        ), cl === null ? j = tl : cl.sibling = tl, cl = tl);
      return l && H.forEach(function(Ma) {
        return t(d, Ma);
      }), el && Vt(d, $), j;
    }
    function B(d, s, h, _) {
      if (h == null) throw Error(r(151));
      for (var j = null, cl = null, H = s, $ = s = 0, tl = null, fl = h.next(); H !== null && !fl.done; $++, fl = h.next()) {
        H.index > $ ? (tl = H, H = null) : tl = H.sibling;
        var Ma = v(d, H, fl.value, _);
        if (Ma === null) {
          H === null && (H = tl);
          break;
        }
        l && H && Ma.alternate === null && t(d, H), s = n(Ma, s, $), cl === null ? j = Ma : cl.sibling = Ma, cl = Ma, H = tl;
      }
      if (fl.done)
        return a(d, H), el && Vt(d, $), j;
      if (H === null) {
        for (; !fl.done; $++, fl = h.next())
          fl = E(d, fl.value, _), fl !== null && (s = n(fl, s, $), cl === null ? j = fl : cl.sibling = fl, cl = fl);
        return el && Vt(d, $), j;
      }
      for (H = e(H); !fl.done; $++, fl = h.next())
        fl = g(H, d, $, fl.value, _), fl !== null && (l && fl.alternate !== null && H.delete(fl.key === null ? $ : fl.key), s = n(fl, s, $), cl === null ? j = fl : cl.sibling = fl, cl = fl);
      return l && H.forEach(function(lh) {
        return t(d, lh);
      }), el && Vt(d, $), j;
    }
    function hl(d, s, h, _) {
      if (typeof h == "object" && h !== null && h.type === F && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case nl:
            l: {
              for (var j = h.key; s !== null; ) {
                if (s.key === j) {
                  if (j = h.type, j === F) {
                    if (s.tag === 7) {
                      a(
                        d,
                        s.sibling
                      ), _ = u(
                        s,
                        h.props.children
                      ), _.return = d, d = _;
                      break l;
                    }
                  } else if (s.elementType === j || typeof j == "object" && j !== null && j.$$typeof === jl && Ga(j) === s.type) {
                    a(
                      d,
                      s.sibling
                    ), _ = u(s, h.props), tu(_, h), _.return = d, d = _;
                    break l;
                  }
                  a(d, s);
                  break;
                } else t(d, s);
                s = s.sibling;
              }
              h.type === F ? (_ = Ra(
                h.props.children,
                d.mode,
                _,
                h.key
              ), _.return = d, d = _) : (_ = Fu(
                h.type,
                h.key,
                h.props,
                null,
                d.mode,
                _
              ), tu(_, h), _.return = d, d = _);
            }
            return i(d);
          case zl:
            l: {
              for (j = h.key; s !== null; ) {
                if (s.key === j)
                  if (s.tag === 4 && s.stateNode.containerInfo === h.containerInfo && s.stateNode.implementation === h.implementation) {
                    a(
                      d,
                      s.sibling
                    ), _ = u(s, h.children || []), _.return = d, d = _;
                    break l;
                  } else {
                    a(d, s);
                    break;
                  }
                else t(d, s);
                s = s.sibling;
              }
              _ = Oi(h, d.mode, _), _.return = d, d = _;
            }
            return i(d);
          case jl:
            return h = Ga(h), hl(
              d,
              s,
              h,
              _
            );
        }
        if (Kl(h))
          return x(
            d,
            s,
            h,
            _
          );
        if (Hl(h)) {
          if (j = Hl(h), typeof j != "function") throw Error(r(150));
          return h = j.call(h), B(
            d,
            s,
            h,
            _
          );
        }
        if (typeof h.then == "function")
          return hl(
            d,
            s,
            un(h),
            _
          );
        if (h.$$typeof === gl)
          return hl(
            d,
            s,
            ln(d, h),
            _
          );
        nn(d, h);
      }
      return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, s !== null && s.tag === 6 ? (a(d, s.sibling), _ = u(s, h), _.return = d, d = _) : (a(d, s), _ = Ai(h, d.mode, _), _.return = d, d = _), i(d)) : a(d, s);
    }
    return function(d, s, h, _) {
      try {
        lu = 0;
        var j = hl(
          d,
          s,
          h,
          _
        );
        return ye = null, j;
      } catch (H) {
        if (H === he || H === an) throw H;
        var cl = st(29, H, null, d.mode);
        return cl.lanes = _, cl.return = d, cl;
      } finally {
      }
    };
  }
  var Xa = Rs(!0), js = Rs(!1), oa = !1;
  function Yi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Gi(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function da(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ra(l, t, a) {
    var e = l.updateQueue;
    if (e === null) return null;
    if (e = e.shared, (sl & 2) !== 0) {
      var u = e.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), e.pending = t, t = ku(l), bs(l, null, a), t;
    }
    return $u(l, e, t, a), ku(l);
  }
  function au(l, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var e = t.lanes;
      e &= l.pendingLanes, a |= e, t.lanes = a, Of(l, a);
    }
  }
  function Qi(l, t) {
    var a = l.updateQueue, e = l.alternate;
    if (e !== null && (e = e.updateQueue, a === e)) {
      var u = null, n = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var i = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          n === null ? u = n = i : n = n.next = i, a = a.next;
        } while (a !== null);
        n === null ? u = n = t : n = n.next = t;
      } else u = n = t;
      a = {
        baseState: e.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: e.shared,
        callbacks: e.callbacks
      }, l.updateQueue = a;
      return;
    }
    l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = t : l.next = t, a.lastBaseUpdate = t;
  }
  var Xi = !1;
  function eu() {
    if (Xi) {
      var l = me;
      if (l !== null) throw l;
    }
  }
  function uu(l, t, a, e) {
    Xi = !1;
    var u = l.updateQueue;
    oa = !1;
    var n = u.firstBaseUpdate, i = u.lastBaseUpdate, c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var f = c, y = f.next;
      f.next = null, i === null ? n = y : i.next = y, i = f;
      var p = l.alternate;
      p !== null && (p = p.updateQueue, c = p.lastBaseUpdate, c !== i && (c === null ? p.firstBaseUpdate = y : c.next = y, p.lastBaseUpdate = f));
    }
    if (n !== null) {
      var E = u.baseState;
      i = 0, p = y = f = null, c = n;
      do {
        var v = c.lane & -536870913, g = v !== c.lane;
        if (g ? (ll & v) === v : (e & v) === v) {
          v !== 0 && v === re && (Xi = !0), p !== null && (p = p.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var x = l, B = c;
            v = t;
            var hl = a;
            switch (B.tag) {
              case 1:
                if (x = B.payload, typeof x == "function") {
                  E = x.call(hl, E, v);
                  break l;
                }
                E = x;
                break l;
              case 3:
                x.flags = x.flags & -65537 | 128;
              case 0:
                if (x = B.payload, v = typeof x == "function" ? x.call(hl, E, v) : x, v == null) break l;
                E = C({}, E, v);
                break l;
              case 2:
                oa = !0;
            }
          }
          v = c.callback, v !== null && (l.flags |= 64, g && (l.flags |= 8192), g = u.callbacks, g === null ? u.callbacks = [v] : g.push(v));
        } else
          g = {
            lane: v,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, p === null ? (y = p = g, f = E) : p = p.next = g, i |= v;
        if (c = c.next, c === null) {
          if (c = u.shared.pending, c === null)
            break;
          g = c, c = g.next, g.next = null, u.lastBaseUpdate = g, u.shared.pending = null;
        }
      } while (!0);
      p === null && (f = E), u.baseState = f, u.firstBaseUpdate = y, u.lastBaseUpdate = p, n === null && (u.shared.lanes = 0), ga |= i, l.lanes = i, l.memoizedState = E;
    }
  }
  function qs(l, t) {
    if (typeof l != "function")
      throw Error(r(191, l));
    l.call(t);
  }
  function Bs(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++)
        qs(a[l], t);
  }
  var ve = o(null), cn = o(0);
  function Ys(l, t) {
    l = la, A(cn, l), A(ve, t), la = l | t.baseLanes;
  }
  function Zi() {
    A(cn, la), A(ve, ve.current);
  }
  function Vi() {
    la = cn.current, z(ve), z(cn);
  }
  var ot = o(null), Tt = null;
  function ma(l) {
    var t = l.alternate;
    A(Al, Al.current & 1), A(ot, l), Tt === null && (t === null || ve.current !== null || t.memoizedState !== null) && (Tt = l);
  }
  function Li(l) {
    A(Al, Al.current), A(ot, l), Tt === null && (Tt = l);
  }
  function Gs(l) {
    l.tag === 22 ? (A(Al, Al.current), A(ot, l), Tt === null && (Tt = l)) : ha();
  }
  function ha() {
    A(Al, Al.current), A(ot, ot.current);
  }
  function dt(l) {
    z(ot), Tt === l && (Tt = null), z(Al);
  }
  var Al = o(0);
  function fn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || kc(a) || Fc(a)))
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
  var Jt = 0, w = null, rl = null, Nl = null, sn = !1, ge = !1, Za = !1, on = 0, nu = 0, be = null, Lm = 0;
  function El() {
    throw Error(r(321));
  }
  function Ki(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!ft(l[a], t[a])) return !1;
    return !0;
  }
  function Ji(l, t, a, e, u, n) {
    return Jt = n, w = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, S.H = l === null || l.memoizedState === null ? Eo : cc, Za = !1, n = a(e, u), Za = !1, ge && (n = Xs(
      t,
      a,
      e,
      u
    )), Qs(l), n;
  }
  function Qs(l) {
    S.H = fu;
    var t = rl !== null && rl.next !== null;
    if (Jt = 0, Nl = rl = w = null, sn = !1, nu = 0, be = null, t) throw Error(r(300));
    l === null || Ul || (l = l.dependencies, l !== null && Pu(l) && (Ul = !0));
  }
  function Xs(l, t, a, e) {
    w = l;
    var u = 0;
    do {
      if (ge && (be = null), nu = 0, ge = !1, 25 <= u) throw Error(r(301));
      if (u += 1, Nl = rl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      S.H = To, n = t(a, e);
    } while (ge);
    return n;
  }
  function Km() {
    var l = S.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? iu(t) : t, l = l.useState()[0], (rl !== null ? rl.memoizedState : null) !== l && (w.flags |= 1024), t;
  }
  function wi() {
    var l = on !== 0;
    return on = 0, l;
  }
  function Wi(l, t, a) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a;
  }
  function $i(l) {
    if (sn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      sn = !1;
    }
    Jt = 0, Nl = rl = w = null, ge = !1, nu = on = 0, be = null;
  }
  function Wl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Nl === null ? w.memoizedState = Nl = l : Nl = Nl.next = l, Nl;
  }
  function Ol() {
    if (rl === null) {
      var l = w.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = rl.next;
    var t = Nl === null ? w.memoizedState : Nl.next;
    if (t !== null)
      Nl = t, rl = l;
    else {
      if (l === null)
        throw w.alternate === null ? Error(r(467)) : Error(r(310));
      rl = l, l = {
        memoizedState: rl.memoizedState,
        baseState: rl.baseState,
        baseQueue: rl.baseQueue,
        queue: rl.queue,
        next: null
      }, Nl === null ? w.memoizedState = Nl = l : Nl = Nl.next = l;
    }
    return Nl;
  }
  function dn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function iu(l) {
    var t = nu;
    return nu += 1, be === null && (be = []), l = xs(be, l, t), t = w, (Nl === null ? t.memoizedState : Nl.next) === null && (t = t.alternate, S.H = t === null || t.memoizedState === null ? Eo : cc), l;
  }
  function rn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return iu(l);
      if (l.$$typeof === gl) return Xl(l);
    }
    throw Error(r(438, String(l)));
  }
  function ki(l) {
    var t = null, a = w.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var e = w.alternate;
      e !== null && (e = e.updateQueue, e !== null && (e = e.memoCache, e != null && (t = {
        data: e.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = dn(), w.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(l), e = 0; e < l; e++)
        a[e] = xt;
    return t.index++, a;
  }
  function wt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function mn(l) {
    var t = Ol();
    return Fi(t, rl, l);
  }
  function Fi(l, t, a) {
    var e = l.queue;
    if (e === null) throw Error(r(311));
    e.lastRenderedReducer = a;
    var u = l.baseQueue, n = e.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        u.next = n.next, n.next = i;
      }
      t.baseQueue = u = n, e.pending = null;
    }
    if (n = l.baseState, u === null) l.memoizedState = n;
    else {
      t = u.next;
      var c = i = null, f = null, y = t, p = !1;
      do {
        var E = y.lane & -536870913;
        if (E !== y.lane ? (ll & E) === E : (Jt & E) === E) {
          var v = y.revertLane;
          if (v === 0)
            f !== null && (f = f.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }), E === re && (p = !0);
          else if ((Jt & v) === v) {
            y = y.next, v === re && (p = !0);
            continue;
          } else
            E = {
              lane: 0,
              revertLane: y.revertLane,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }, f === null ? (c = f = E, i = n) : f = f.next = E, w.lanes |= v, ga |= v;
          E = y.action, Za && a(n, E), n = y.hasEagerState ? y.eagerState : a(n, E);
        } else
          v = {
            lane: E,
            revertLane: y.revertLane,
            gesture: y.gesture,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }, f === null ? (c = f = v, i = n) : f = f.next = v, w.lanes |= E, ga |= E;
        y = y.next;
      } while (y !== null && y !== t);
      if (f === null ? i = n : f.next = c, !ft(n, l.memoizedState) && (Ul = !0, p && (a = me, a !== null)))
        throw a;
      l.memoizedState = n, l.baseState = i, l.baseQueue = f, e.lastRenderedState = n;
    }
    return u === null && (e.lanes = 0), [l.memoizedState, e.dispatch];
  }
  function Ii(l) {
    var t = Ol(), a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = l;
    var e = a.dispatch, u = a.pending, n = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var i = u = u.next;
      do
        n = l(n, i.action), i = i.next;
      while (i !== u);
      ft(n, t.memoizedState) || (Ul = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n;
    }
    return [n, e];
  }
  function Zs(l, t, a) {
    var e = w, u = Ol(), n = el;
    if (n) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = t();
    var i = !ft(
      (rl || u).memoizedState,
      a
    );
    if (i && (u.memoizedState = a, Ul = !0), u = u.queue, tc(Ks.bind(null, e, u, l), [
      l
    ]), u.getSnapshot !== t || i || Nl !== null && Nl.memoizedState.tag & 1) {
      if (e.flags |= 2048, Se(
        9,
        { destroy: void 0 },
        Ls.bind(
          null,
          e,
          u,
          a,
          t
        ),
        null
      ), vl === null) throw Error(r(349));
      n || (Jt & 127) !== 0 || Vs(e, t, a);
    }
    return a;
  }
  function Vs(l, t, a) {
    l.flags |= 16384, l = { getSnapshot: t, value: a }, t = w.updateQueue, t === null ? (t = dn(), w.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l));
  }
  function Ls(l, t, a, e) {
    t.value = a, t.getSnapshot = e, Js(t) && ws(l);
  }
  function Ks(l, t, a) {
    return a(function() {
      Js(t) && ws(l);
    });
  }
  function Js(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !ft(l, a);
    } catch {
      return !0;
    }
  }
  function ws(l) {
    var t = Ha(l, 2);
    t !== null && et(t, l, 2);
  }
  function Pi(l) {
    var t = Wl();
    if (typeof l == "function") {
      var a = l;
      if (l = a(), Za) {
        ea(!0);
        try {
          a();
        } finally {
          ea(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wt,
      lastRenderedState: l
    }, t;
  }
  function Ws(l, t, a, e) {
    return l.baseState = a, Fi(
      l,
      rl,
      typeof e == "function" ? e : wt
    );
  }
  function Jm(l, t, a, e, u) {
    if (vn(l)) throw Error(r(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          n.listeners.push(i);
        }
      };
      S.T !== null ? a(!0) : n.isTransition = !1, e(n), a = t.pending, a === null ? (n.next = t.pending = n, $s(t, n)) : (n.next = a.next, t.pending = a.next = n);
    }
  }
  function $s(l, t) {
    var a = t.action, e = t.payload, u = l.state;
    if (t.isTransition) {
      var n = S.T, i = {};
      S.T = i;
      try {
        var c = a(u, e), f = S.S;
        f !== null && f(i, c), ks(l, t, c);
      } catch (y) {
        lc(l, t, y);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), S.T = n;
      }
    } else
      try {
        n = a(u, e), ks(l, t, n);
      } catch (y) {
        lc(l, t, y);
      }
  }
  function ks(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(e) {
        Fs(l, t, e);
      },
      function(e) {
        return lc(l, t, e);
      }
    ) : Fs(l, t, a);
  }
  function Fs(l, t, a) {
    t.status = "fulfilled", t.value = a, Is(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, $s(l, a)));
  }
  function lc(l, t, a) {
    var e = l.pending;
    if (l.pending = null, e !== null) {
      e = e.next;
      do
        t.status = "rejected", t.reason = a, Is(t), t = t.next;
      while (t !== e);
    }
    l.action = null;
  }
  function Is(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Ps(l, t) {
    return t;
  }
  function lo(l, t) {
    if (el) {
      var a = vl.formState;
      if (a !== null) {
        l: {
          var e = w;
          if (el) {
            if (bl) {
              t: {
                for (var u = bl, n = Et; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (u = At(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                n = u.data, u = n === "F!" || n === "F" ? u : null;
              }
              if (u) {
                bl = At(
                  u.nextSibling
                ), e = u.data === "F!";
                break l;
              }
            }
            fa(e);
          }
          e = !1;
        }
        e && (t = a[0]);
      }
    }
    return a = Wl(), a.memoizedState = a.baseState = t, e = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ps,
      lastRenderedState: t
    }, a.queue = e, a = po.bind(
      null,
      w,
      e
    ), e.dispatch = a, e = Pi(!1), n = ic.bind(
      null,
      w,
      !1,
      e.queue
    ), e = Wl(), u = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, e.queue = u, a = Jm.bind(
      null,
      w,
      u,
      n,
      a
    ), u.dispatch = a, e.memoizedState = l, [t, a, !1];
  }
  function to(l) {
    var t = Ol();
    return ao(t, rl, l);
  }
  function ao(l, t, a) {
    if (t = Fi(
      l,
      t,
      Ps
    )[0], l = mn(wt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var e = iu(t);
      } catch (i) {
        throw i === he ? an : i;
      }
    else e = t;
    t = Ol();
    var u = t.queue, n = u.dispatch;
    return a !== t.memoizedState && (w.flags |= 2048, Se(
      9,
      { destroy: void 0 },
      wm.bind(null, u, a),
      null
    )), [e, n, l];
  }
  function wm(l, t) {
    l.action = t;
  }
  function eo(l) {
    var t = Ol(), a = rl;
    if (a !== null)
      return ao(t, a, l);
    Ol(), t = t.memoizedState, a = Ol();
    var e = a.queue.dispatch;
    return a.memoizedState = l, [t, e, !1];
  }
  function Se(l, t, a, e) {
    return l = { tag: l, create: a, deps: e, inst: t, next: null }, t = w.updateQueue, t === null && (t = dn(), w.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (e = a.next, a.next = l, l.next = e, t.lastEffect = l), l;
  }
  function uo() {
    return Ol().memoizedState;
  }
  function hn(l, t, a, e) {
    var u = Wl();
    w.flags |= l, u.memoizedState = Se(
      1 | t,
      { destroy: void 0 },
      a,
      e === void 0 ? null : e
    );
  }
  function yn(l, t, a, e) {
    var u = Ol();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    rl !== null && e !== null && Ki(e, rl.memoizedState.deps) ? u.memoizedState = Se(t, n, a, e) : (w.flags |= l, u.memoizedState = Se(
      1 | t,
      n,
      a,
      e
    ));
  }
  function no(l, t) {
    hn(8390656, 8, l, t);
  }
  function tc(l, t) {
    yn(2048, 8, l, t);
  }
  function Wm(l) {
    w.flags |= 4;
    var t = w.updateQueue;
    if (t === null)
      t = dn(), w.updateQueue = t, t.events = [l];
    else {
      var a = t.events;
      a === null ? t.events = [l] : a.push(l);
    }
  }
  function io(l) {
    var t = Ol().memoizedState;
    return Wm({ ref: t, nextImpl: l }), function() {
      if ((sl & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function co(l, t) {
    return yn(4, 2, l, t);
  }
  function fo(l, t) {
    return yn(4, 4, l, t);
  }
  function so(l, t) {
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
  function oo(l, t, a) {
    a = a != null ? a.concat([l]) : null, yn(4, 4, so.bind(null, t, l), a);
  }
  function ac() {
  }
  function ro(l, t) {
    var a = Ol();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    return t !== null && Ki(t, e[1]) ? e[0] : (a.memoizedState = [l, t], l);
  }
  function mo(l, t) {
    var a = Ol();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    if (t !== null && Ki(t, e[1]))
      return e[0];
    if (e = l(), Za) {
      ea(!0);
      try {
        l();
      } finally {
        ea(!1);
      }
    }
    return a.memoizedState = [e, t], e;
  }
  function ec(l, t, a) {
    return a === void 0 || (Jt & 1073741824) !== 0 && (ll & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = a, l = hd(), w.lanes |= l, ga |= l, a);
  }
  function ho(l, t, a, e) {
    return ft(a, t) ? a : ve.current !== null ? (l = ec(l, a, e), ft(l, t) || (Ul = !0), l) : (Jt & 42) === 0 || (Jt & 1073741824) !== 0 && (ll & 261930) === 0 ? (Ul = !0, l.memoizedState = a) : (l = hd(), w.lanes |= l, ga |= l, t);
  }
  function yo(l, t, a, e, u) {
    var n = O.p;
    O.p = n !== 0 && 8 > n ? n : 8;
    var i = S.T, c = {};
    S.T = c, ic(l, !1, t, a);
    try {
      var f = u(), y = S.S;
      if (y !== null && y(c, f), f !== null && typeof f == "object" && typeof f.then == "function") {
        var p = Vm(
          f,
          e
        );
        cu(
          l,
          t,
          p,
          ht(l)
        );
      } else
        cu(
          l,
          t,
          e,
          ht(l)
        );
    } catch (E) {
      cu(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: E },
        ht()
      );
    } finally {
      O.p = n, i !== null && c.types !== null && (i.types = c.types), S.T = i;
    }
  }
  function $m() {
  }
  function uc(l, t, a, e) {
    if (l.tag !== 5) throw Error(r(476));
    var u = vo(l).queue;
    yo(
      l,
      u,
      t,
      R,
      a === null ? $m : function() {
        return go(l), a(e);
      }
    );
  }
  function vo(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: R,
      baseState: R,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wt,
        lastRenderedState: R
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
        lastRenderedReducer: wt,
        lastRenderedState: a
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function go(l) {
    var t = vo(l);
    t.next === null && (t = l.alternate.memoizedState), cu(
      l,
      t.next.queue,
      {},
      ht()
    );
  }
  function nc() {
    return Xl(Tu);
  }
  function bo() {
    return Ol().memoizedState;
  }
  function So() {
    return Ol().memoizedState;
  }
  function km(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = ht();
          l = da(a);
          var e = ra(t, l, a);
          e !== null && (et(e, t, a), au(e, t, a)), t = { cache: Ri() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Fm(l, t, a) {
    var e = ht();
    a = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, vn(l) ? _o(t, a) : (a = Ei(l, t, a, e), a !== null && (et(a, l, e), zo(a, t, e)));
  }
  function po(l, t, a) {
    var e = ht();
    cu(l, t, a, e);
  }
  function cu(l, t, a, e) {
    var u = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (vn(l)) _o(t, u);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var i = t.lastRenderedState, c = n(i, a);
          if (u.hasEagerState = !0, u.eagerState = c, ft(c, i))
            return $u(l, t, u, 0), vl === null && Wu(), !1;
        } catch {
        } finally {
        }
      if (a = Ei(l, t, u, e), a !== null)
        return et(a, l, e), zo(a, t, e), !0;
    }
    return !1;
  }
  function ic(l, t, a, e) {
    if (e = {
      lane: 2,
      revertLane: Yc(),
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, vn(l)) {
      if (t) throw Error(r(479));
    } else
      t = Ei(
        l,
        a,
        e,
        2
      ), t !== null && et(t, l, 2);
  }
  function vn(l) {
    var t = l.alternate;
    return l === w || t !== null && t === w;
  }
  function _o(l, t) {
    ge = sn = !0;
    var a = l.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
  }
  function zo(l, t, a) {
    if ((a & 4194048) !== 0) {
      var e = t.lanes;
      e &= l.pendingLanes, a |= e, t.lanes = a, Of(l, a);
    }
  }
  var fu = {
    readContext: Xl,
    use: rn,
    useCallback: El,
    useContext: El,
    useEffect: El,
    useImperativeHandle: El,
    useLayoutEffect: El,
    useInsertionEffect: El,
    useMemo: El,
    useReducer: El,
    useRef: El,
    useState: El,
    useDebugValue: El,
    useDeferredValue: El,
    useTransition: El,
    useSyncExternalStore: El,
    useId: El,
    useHostTransitionStatus: El,
    useFormState: El,
    useActionState: El,
    useOptimistic: El,
    useMemoCache: El,
    useCacheRefresh: El
  };
  fu.useEffectEvent = El;
  var Eo = {
    readContext: Xl,
    use: rn,
    useCallback: function(l, t) {
      return Wl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Xl,
    useEffect: no,
    useImperativeHandle: function(l, t, a) {
      a = a != null ? a.concat([l]) : null, hn(
        4194308,
        4,
        so.bind(null, t, l),
        a
      );
    },
    useLayoutEffect: function(l, t) {
      return hn(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      hn(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var a = Wl();
      t = t === void 0 ? null : t;
      var e = l();
      if (Za) {
        ea(!0);
        try {
          l();
        } finally {
          ea(!1);
        }
      }
      return a.memoizedState = [e, t], e;
    },
    useReducer: function(l, t, a) {
      var e = Wl();
      if (a !== void 0) {
        var u = a(t);
        if (Za) {
          ea(!0);
          try {
            a(t);
          } finally {
            ea(!1);
          }
        }
      } else u = t;
      return e.memoizedState = e.baseState = u, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: u
      }, e.queue = l, l = l.dispatch = Fm.bind(
        null,
        w,
        l
      ), [e.memoizedState, l];
    },
    useRef: function(l) {
      var t = Wl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Pi(l);
      var t = l.queue, a = po.bind(null, w, t);
      return t.dispatch = a, [l.memoizedState, a];
    },
    useDebugValue: ac,
    useDeferredValue: function(l, t) {
      var a = Wl();
      return ec(a, l, t);
    },
    useTransition: function() {
      var l = Pi(!1);
      return l = yo.bind(
        null,
        w,
        l.queue,
        !0,
        !1
      ), Wl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, a) {
      var e = w, u = Wl();
      if (el) {
        if (a === void 0)
          throw Error(r(407));
        a = a();
      } else {
        if (a = t(), vl === null)
          throw Error(r(349));
        (ll & 127) !== 0 || Vs(e, t, a);
      }
      u.memoizedState = a;
      var n = { value: a, getSnapshot: t };
      return u.queue = n, no(Ks.bind(null, e, n, l), [
        l
      ]), e.flags |= 2048, Se(
        9,
        { destroy: void 0 },
        Ls.bind(
          null,
          e,
          n,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var l = Wl(), t = vl.identifierPrefix;
      if (el) {
        var a = Rt, e = Ht;
        a = (e & ~(1 << 32 - ct(e) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = on++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = Lm++, t = "_" + t + "r_" + a.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: nc,
    useFormState: lo,
    useActionState: lo,
    useOptimistic: function(l) {
      var t = Wl();
      t.memoizedState = t.baseState = l;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = ic.bind(
        null,
        w,
        !0,
        a
      ), a.dispatch = t, [l, t];
    },
    useMemoCache: ki,
    useCacheRefresh: function() {
      return Wl().memoizedState = km.bind(
        null,
        w
      );
    },
    useEffectEvent: function(l) {
      var t = Wl(), a = { impl: l };
      return t.memoizedState = a, function() {
        if ((sl & 2) !== 0)
          throw Error(r(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, cc = {
    readContext: Xl,
    use: rn,
    useCallback: ro,
    useContext: Xl,
    useEffect: tc,
    useImperativeHandle: oo,
    useInsertionEffect: co,
    useLayoutEffect: fo,
    useMemo: mo,
    useReducer: mn,
    useRef: uo,
    useState: function() {
      return mn(wt);
    },
    useDebugValue: ac,
    useDeferredValue: function(l, t) {
      var a = Ol();
      return ho(
        a,
        rl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = mn(wt)[0], t = Ol().memoizedState;
      return [
        typeof l == "boolean" ? l : iu(l),
        t
      ];
    },
    useSyncExternalStore: Zs,
    useId: bo,
    useHostTransitionStatus: nc,
    useFormState: to,
    useActionState: to,
    useOptimistic: function(l, t) {
      var a = Ol();
      return Ws(a, rl, l, t);
    },
    useMemoCache: ki,
    useCacheRefresh: So
  };
  cc.useEffectEvent = io;
  var To = {
    readContext: Xl,
    use: rn,
    useCallback: ro,
    useContext: Xl,
    useEffect: tc,
    useImperativeHandle: oo,
    useInsertionEffect: co,
    useLayoutEffect: fo,
    useMemo: mo,
    useReducer: Ii,
    useRef: uo,
    useState: function() {
      return Ii(wt);
    },
    useDebugValue: ac,
    useDeferredValue: function(l, t) {
      var a = Ol();
      return rl === null ? ec(a, l, t) : ho(
        a,
        rl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Ii(wt)[0], t = Ol().memoizedState;
      return [
        typeof l == "boolean" ? l : iu(l),
        t
      ];
    },
    useSyncExternalStore: Zs,
    useId: bo,
    useHostTransitionStatus: nc,
    useFormState: eo,
    useActionState: eo,
    useOptimistic: function(l, t) {
      var a = Ol();
      return rl !== null ? Ws(a, rl, l, t) : (a.baseState = l, [l, a.queue.dispatch]);
    },
    useMemoCache: ki,
    useCacheRefresh: So
  };
  To.useEffectEvent = io;
  function fc(l, t, a, e) {
    t = l.memoizedState, a = a(e, t), a = a == null ? t : C({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var sc = {
    enqueueSetState: function(l, t, a) {
      l = l._reactInternals;
      var e = ht(), u = da(e);
      u.payload = t, a != null && (u.callback = a), t = ra(l, u, e), t !== null && (et(t, l, e), au(t, l, e));
    },
    enqueueReplaceState: function(l, t, a) {
      l = l._reactInternals;
      var e = ht(), u = da(e);
      u.tag = 1, u.payload = t, a != null && (u.callback = a), t = ra(l, u, e), t !== null && (et(t, l, e), au(t, l, e));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var a = ht(), e = da(a);
      e.tag = 2, t != null && (e.callback = t), t = ra(l, e, a), t !== null && (et(t, l, a), au(t, l, a));
    }
  };
  function Ao(l, t, a, e, u, n, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(e, n, i) : t.prototype && t.prototype.isPureReactComponent ? !We(a, e) || !We(u, n) : !0;
  }
  function Oo(l, t, a, e) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, e), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, e), t.state !== l && sc.enqueueReplaceState(t, t.state, null);
  }
  function Va(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var e in t)
        e !== "ref" && (a[e] = t[e]);
    }
    if (l = l.defaultProps) {
      a === t && (a = C({}, a));
      for (var u in l)
        a[u] === void 0 && (a[u] = l[u]);
    }
    return a;
  }
  function Mo(l) {
    wu(l);
  }
  function Do(l) {
    console.error(l);
  }
  function No(l) {
    wu(l);
  }
  function gn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function Uo(l, t, a) {
    try {
      var e = l.onCaughtError;
      e(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function oc(l, t, a) {
    return a = da(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      gn(l, t);
    }, a;
  }
  function xo(l) {
    return l = da(l), l.tag = 3, l;
  }
  function Co(l, t, a, e) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = e.value;
      l.payload = function() {
        return u(n);
      }, l.callback = function() {
        Uo(t, a, e);
      };
    }
    var i = a.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
      Uo(t, a, e), typeof u != "function" && (ba === null ? ba = /* @__PURE__ */ new Set([this]) : ba.add(this));
      var c = e.stack;
      this.componentDidCatch(e.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Im(l, t, a, e, u) {
    if (a.flags |= 32768, e !== null && typeof e == "object" && typeof e.then == "function") {
      if (t = a.alternate, t !== null && de(
        t,
        a,
        u,
        !0
      ), a = ot.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Tt === null ? Nn() : a.alternate === null && Tl === 0 && (Tl = 3), a.flags &= -257, a.flags |= 65536, a.lanes = u, e === en ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([e]) : t.add(e), jc(l, e, u)), !1;
          case 22:
            return a.flags |= 65536, e === en ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([e])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([e]) : a.add(e)), jc(l, e, u)), !1;
        }
        throw Error(r(435, a.tag));
      }
      return jc(l, e, u), Nn(), !1;
    }
    if (el)
      return t = ot.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, e !== Ni && (l = Error(r(422), { cause: e }), Fe(pt(l, a)))) : (e !== Ni && (t = Error(r(423), {
        cause: e
      }), Fe(
        pt(t, a)
      )), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, e = pt(e, a), u = oc(
        l.stateNode,
        e,
        u
      ), Qi(l, u), Tl !== 4 && (Tl = 2)), !1;
    var n = Error(r(520), { cause: e });
    if (n = pt(n, a), vu === null ? vu = [n] : vu.push(n), Tl !== 4 && (Tl = 2), t === null) return !0;
    e = pt(e, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = u & -u, a.lanes |= l, l = oc(a.stateNode, e, l), Qi(a, l), !1;
        case 1:
          if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ba === null || !ba.has(n))))
            return a.flags |= 65536, u &= -u, a.lanes |= u, u = xo(u), Co(
              u,
              l,
              a,
              e
            ), Qi(a, u), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var dc = Error(r(461)), Ul = !1;
  function Zl(l, t, a, e) {
    t.child = l === null ? js(t, null, a, e) : Xa(
      t,
      l.child,
      a,
      e
    );
  }
  function Ho(l, t, a, e, u) {
    a = a.render;
    var n = t.ref;
    if ("ref" in e) {
      var i = {};
      for (var c in e)
        c !== "ref" && (i[c] = e[c]);
    } else i = e;
    return Ba(t), e = Ji(
      l,
      t,
      a,
      i,
      n,
      u
    ), c = wi(), l !== null && !Ul ? (Wi(l, t, u), Wt(l, t, u)) : (el && c && Mi(t), t.flags |= 1, Zl(l, t, e, u), t.child);
  }
  function Ro(l, t, a, e, u) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" && !Ti(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, jo(
        l,
        t,
        n,
        e,
        u
      )) : (l = Fu(
        a.type,
        null,
        e,
        t,
        t.mode,
        u
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !Sc(l, u)) {
      var i = n.memoizedProps;
      if (a = a.compare, a = a !== null ? a : We, a(i, e) && l.ref === t.ref)
        return Wt(l, t, u);
    }
    return t.flags |= 1, l = Zt(n, e), l.ref = t.ref, l.return = t, t.child = l;
  }
  function jo(l, t, a, e, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (We(n, e) && l.ref === t.ref)
        if (Ul = !1, t.pendingProps = e = n, Sc(l, u))
          (l.flags & 131072) !== 0 && (Ul = !0);
        else
          return t.lanes = l.lanes, Wt(l, t, u);
    }
    return rc(
      l,
      t,
      a,
      e,
      u
    );
  }
  function qo(l, t, a, e) {
    var u = e.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | a : a, l !== null) {
          for (e = t.child = l.child, u = 0; e !== null; )
            u = u | e.lanes | e.childLanes, e = e.sibling;
          e = u & ~n;
        } else e = 0, t.child = null;
        return Bo(
          l,
          t,
          n,
          a,
          e
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && tn(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? Ys(t, n) : Zi(), Gs(t);
      else
        return e = t.lanes = 536870912, Bo(
          l,
          t,
          n !== null ? n.baseLanes | a : a,
          a,
          e
        );
    } else
      n !== null ? (tn(t, n.cachePool), Ys(t, n), ha(), t.memoizedState = null) : (l !== null && tn(t, null), Zi(), ha());
    return Zl(l, t, u, a), t.child;
  }
  function su(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Bo(l, t, a, e, u) {
    var n = qi();
    return n = n === null ? null : { parent: Dl._currentValue, pool: n }, t.memoizedState = {
      baseLanes: a,
      cachePool: n
    }, l !== null && tn(t, null), Zi(), Gs(t), l !== null && de(l, t, e, !0), t.childLanes = u, null;
  }
  function bn(l, t) {
    return t = pn(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Yo(l, t, a) {
    return Xa(t, l.child, null, a), l = bn(t, t.pendingProps), l.flags |= 2, dt(t), t.memoizedState = null, l;
  }
  function Pm(l, t, a) {
    var e = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (el) {
        if (e.mode === "hidden")
          return l = bn(t, e), t.lanes = 536870912, su(null, l);
        if (Li(t), (l = bl) ? (l = kd(
          l,
          Et
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: ia !== null ? { id: Ht, overflow: Rt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = ps(l), a.return = t, t.child = a, Ql = t, bl = null)) : l = null, l === null) throw fa(t);
        return t.lanes = 536870912, null;
      }
      return bn(t, e);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if (Li(t), u)
        if (t.flags & 256)
          t.flags &= -257, t = Yo(
            l,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (Ul || de(l, t, a, !1), u = (a & l.childLanes) !== 0, Ul || u) {
        if (e = vl, e !== null && (i = Mf(e, a), i !== 0 && i !== n.retryLane))
          throw n.retryLane = i, Ha(l, i), et(e, l, i), dc;
        Nn(), t = Yo(
          l,
          t,
          a
        );
      } else
        l = n.treeContext, bl = At(i.nextSibling), Ql = t, el = !0, ca = null, Et = !1, l !== null && Es(t, l), t = bn(t, e), t.flags |= 4096;
      return t;
    }
    return l = Zt(l.child, {
      mode: e.mode,
      children: e.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function Sn(l, t) {
    var a = t.ref;
    if (a === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(r(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function rc(l, t, a, e, u) {
    return Ba(t), a = Ji(
      l,
      t,
      a,
      e,
      void 0,
      u
    ), e = wi(), l !== null && !Ul ? (Wi(l, t, u), Wt(l, t, u)) : (el && e && Mi(t), t.flags |= 1, Zl(l, t, a, u), t.child);
  }
  function Go(l, t, a, e, u, n) {
    return Ba(t), t.updateQueue = null, a = Xs(
      t,
      e,
      a,
      u
    ), Qs(l), e = wi(), l !== null && !Ul ? (Wi(l, t, n), Wt(l, t, n)) : (el && e && Mi(t), t.flags |= 1, Zl(l, t, a, n), t.child);
  }
  function Qo(l, t, a, e, u) {
    if (Ba(t), t.stateNode === null) {
      var n = ce, i = a.contextType;
      typeof i == "object" && i !== null && (n = Xl(i)), n = new a(e, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = sc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = e, n.state = t.memoizedState, n.refs = {}, Yi(t), i = a.contextType, n.context = typeof i == "object" && i !== null ? Xl(i) : ce, n.state = t.memoizedState, i = a.getDerivedStateFromProps, typeof i == "function" && (fc(
        t,
        a,
        i,
        e
      ), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && sc.enqueueReplaceState(n, n.state, null), uu(t, e, n, u), eu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), e = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, f = Va(a, c);
      n.props = f;
      var y = n.context, p = a.contextType;
      i = ce, typeof p == "object" && p !== null && (i = Xl(p));
      var E = a.getDerivedStateFromProps;
      p = typeof E == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, p || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || y !== i) && Oo(
        t,
        n,
        e,
        i
      ), oa = !1;
      var v = t.memoizedState;
      n.state = v, uu(t, e, n, u), eu(), y = t.memoizedState, c || v !== y || oa ? (typeof E == "function" && (fc(
        t,
        a,
        E,
        e
      ), y = t.memoizedState), (f = oa || Ao(
        t,
        a,
        f,
        e,
        v,
        y,
        i
      )) ? (p || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = e, t.memoizedState = y), n.props = e, n.state = y, n.context = i, e = f) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), e = !1);
    } else {
      n = t.stateNode, Gi(l, t), i = t.memoizedProps, p = Va(a, i), n.props = p, E = t.pendingProps, v = n.context, y = a.contextType, f = ce, typeof y == "object" && y !== null && (f = Xl(y)), c = a.getDerivedStateFromProps, (y = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== E || v !== f) && Oo(
        t,
        n,
        e,
        f
      ), oa = !1, v = t.memoizedState, n.state = v, uu(t, e, n, u), eu();
      var g = t.memoizedState;
      i !== E || v !== g || oa || l !== null && l.dependencies !== null && Pu(l.dependencies) ? (typeof c == "function" && (fc(
        t,
        a,
        c,
        e
      ), g = t.memoizedState), (p = oa || Ao(
        t,
        a,
        p,
        e,
        v,
        g,
        f
      ) || l !== null && l.dependencies !== null && Pu(l.dependencies)) ? (y || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(e, g, f), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        e,
        g,
        f
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), t.memoizedProps = e, t.memoizedState = g), n.props = e, n.state = g, n.context = f, e = p) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), e = !1);
    }
    return n = e, Sn(l, t), e = (t.flags & 128) !== 0, n || e ? (n = t.stateNode, a = e && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && e ? (t.child = Xa(
      t,
      l.child,
      null,
      u
    ), t.child = Xa(
      t,
      null,
      a,
      u
    )) : Zl(l, t, a, u), t.memoizedState = n.state, l = t.child) : l = Wt(
      l,
      t,
      u
    ), l;
  }
  function Xo(l, t, a, e) {
    return ja(), t.flags |= 256, Zl(l, t, a, e), t.child;
  }
  var mc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function hc(l) {
    return { baseLanes: l, cachePool: Ns() };
  }
  function yc(l, t, a) {
    return l = l !== null ? l.childLanes & ~a : 0, t && (l |= mt), l;
  }
  function Zo(l, t, a) {
    var e = t.pendingProps, u = !1, n = (t.flags & 128) !== 0, i;
    if ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (Al.current & 2) !== 0), i && (u = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (el) {
        if (u ? ma(t) : ha(), (l = bl) ? (l = kd(
          l,
          Et
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: ia !== null ? { id: Ht, overflow: Rt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = ps(l), a.return = t, t.child = a, Ql = t, bl = null)) : l = null, l === null) throw fa(t);
        return Fc(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = e.children;
      return e = e.fallback, u ? (ha(), u = t.mode, c = pn(
        { mode: "hidden", children: c },
        u
      ), e = Ra(
        e,
        u,
        a,
        null
      ), c.return = t, e.return = t, c.sibling = e, t.child = c, e = t.child, e.memoizedState = hc(a), e.childLanes = yc(
        l,
        i,
        a
      ), t.memoizedState = mc, su(null, e)) : (ma(t), vc(t, c));
    }
    var f = l.memoizedState;
    if (f !== null && (c = f.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (ma(t), t.flags &= -257, t = gc(
          l,
          t,
          a
        )) : t.memoizedState !== null ? (ha(), t.child = l.child, t.flags |= 128, t = null) : (ha(), c = e.fallback, u = t.mode, e = pn(
          { mode: "visible", children: e.children },
          u
        ), c = Ra(
          c,
          u,
          a,
          null
        ), c.flags |= 2, e.return = t, c.return = t, e.sibling = c, t.child = e, Xa(
          t,
          l.child,
          null,
          a
        ), e = t.child, e.memoizedState = hc(a), e.childLanes = yc(
          l,
          i,
          a
        ), t.memoizedState = mc, t = su(null, e));
      else if (ma(t), Fc(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var y = i.dgst;
        i = y, e = Error(r(419)), e.stack = "", e.digest = i, Fe({ value: e, source: null, stack: null }), t = gc(
          l,
          t,
          a
        );
      } else if (Ul || de(l, t, a, !1), i = (a & l.childLanes) !== 0, Ul || i) {
        if (i = vl, i !== null && (e = Mf(i, a), e !== 0 && e !== f.retryLane))
          throw f.retryLane = e, Ha(l, e), et(i, l, e), dc;
        kc(c) || Nn(), t = gc(
          l,
          t,
          a
        );
      } else
        kc(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = f.treeContext, bl = At(
          c.nextSibling
        ), Ql = t, el = !0, ca = null, Et = !1, l !== null && Es(t, l), t = vc(
          t,
          e.children
        ), t.flags |= 4096);
      return t;
    }
    return u ? (ha(), c = e.fallback, u = t.mode, f = l.child, y = f.sibling, e = Zt(f, {
      mode: "hidden",
      children: e.children
    }), e.subtreeFlags = f.subtreeFlags & 65011712, y !== null ? c = Zt(
      y,
      c
    ) : (c = Ra(
      c,
      u,
      a,
      null
    ), c.flags |= 2), c.return = t, e.return = t, e.sibling = c, t.child = e, su(null, e), e = t.child, c = l.child.memoizedState, c === null ? c = hc(a) : (u = c.cachePool, u !== null ? (f = Dl._currentValue, u = u.parent !== f ? { parent: f, pool: f } : u) : u = Ns(), c = {
      baseLanes: c.baseLanes | a,
      cachePool: u
    }), e.memoizedState = c, e.childLanes = yc(
      l,
      i,
      a
    ), t.memoizedState = mc, su(l.child, e)) : (ma(t), a = l.child, l = a.sibling, a = Zt(a, {
      mode: "visible",
      children: e.children
    }), a.return = t, a.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = a, t.memoizedState = null, a);
  }
  function vc(l, t) {
    return t = pn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function pn(l, t) {
    return l = st(22, l, null, t), l.lanes = 0, l;
  }
  function gc(l, t, a) {
    return Xa(t, l.child, null, a), l = vc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Vo(l, t, a) {
    l.lanes |= t;
    var e = l.alternate;
    e !== null && (e.lanes |= t), Ci(l.return, t, a);
  }
  function bc(l, t, a, e, u, n) {
    var i = l.memoizedState;
    i === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: e,
      tail: a,
      tailMode: u,
      treeForkCount: n
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = e, i.tail = a, i.tailMode = u, i.treeForkCount = n);
  }
  function Lo(l, t, a) {
    var e = t.pendingProps, u = e.revealOrder, n = e.tail;
    e = e.children;
    var i = Al.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, A(Al, i), Zl(l, t, e, a), e = el ? ke : 0, !c && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && Vo(l, a, t);
        else if (l.tag === 19)
          Vo(l, a, t);
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
    switch (u) {
      case "forwards":
        for (a = t.child, u = null; a !== null; )
          l = a.alternate, l !== null && fn(l) === null && (u = a), a = a.sibling;
        a = u, a === null ? (u = t.child, t.child = null) : (u = a.sibling, a.sibling = null), bc(
          t,
          !1,
          u,
          a,
          n,
          e
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, u = t.child, t.child = null; u !== null; ) {
          if (l = u.alternate, l !== null && fn(l) === null) {
            t.child = u;
            break;
          }
          l = u.sibling, u.sibling = a, a = u, u = l;
        }
        bc(
          t,
          !0,
          a,
          null,
          n,
          e
        );
        break;
      case "together":
        bc(
          t,
          !1,
          null,
          null,
          void 0,
          e
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Wt(l, t, a) {
    if (l !== null && (t.dependencies = l.dependencies), ga |= t.lanes, (a & t.childLanes) === 0)
      if (l !== null) {
        if (de(
          l,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (l = t.child, a = Zt(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; )
        l = l.sibling, a = a.sibling = Zt(l, l.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function Sc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Pu(l)));
  }
  function l0(l, t, a) {
    switch (t.tag) {
      case 3:
        ql(t, t.stateNode.containerInfo), sa(t, Dl, l.memoizedState.cache), ja();
        break;
      case 27:
      case 5:
        Bt(t);
        break;
      case 4:
        ql(t, t.stateNode.containerInfo);
        break;
      case 10:
        sa(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Li(t), null;
        break;
      case 13:
        var e = t.memoizedState;
        if (e !== null)
          return e.dehydrated !== null ? (ma(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Zo(l, t, a) : (ma(t), l = Wt(
            l,
            t,
            a
          ), l !== null ? l.sibling : null);
        ma(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (e = (a & t.childLanes) !== 0, e || (de(
          l,
          t,
          a,
          !1
        ), e = (a & t.childLanes) !== 0), u) {
          if (e)
            return Lo(
              l,
              t,
              a
            );
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), A(Al, Al.current), e) break;
        return null;
      case 22:
        return t.lanes = 0, qo(
          l,
          t,
          a,
          t.pendingProps
        );
      case 24:
        sa(t, Dl, l.memoizedState.cache);
    }
    return Wt(l, t, a);
  }
  function Ko(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Ul = !0;
      else {
        if (!Sc(l, a) && (t.flags & 128) === 0)
          return Ul = !1, l0(
            l,
            t,
            a
          );
        Ul = (l.flags & 131072) !== 0;
      }
    else
      Ul = !1, el && (t.flags & 1048576) !== 0 && zs(t, ke, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var e = t.pendingProps;
          if (l = Ga(t.elementType), t.type = l, typeof l == "function")
            Ti(l) ? (e = Va(l, e), t.tag = 1, t = Qo(
              null,
              t,
              l,
              e,
              a
            )) : (t.tag = 0, t = rc(
              null,
              t,
              l,
              e,
              a
            ));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === Ml) {
                t.tag = 11, t = Ho(
                  null,
                  t,
                  l,
                  e,
                  a
                );
                break l;
              } else if (u === k) {
                t.tag = 14, t = Ro(
                  null,
                  t,
                  l,
                  e,
                  a
                );
                break l;
              }
            }
            throw t = vt(l) || l, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return rc(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return e = t.type, u = Va(
          e,
          t.pendingProps
        ), Qo(
          l,
          t,
          e,
          u,
          a
        );
      case 3:
        l: {
          if (ql(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(r(387));
          e = t.pendingProps;
          var n = t.memoizedState;
          u = n.element, Gi(l, t), uu(t, e, null, a);
          var i = t.memoizedState;
          if (e = i.cache, sa(t, Dl, e), e !== n.cache && Hi(
            t,
            [Dl],
            a,
            !0
          ), eu(), e = i.element, n.isDehydrated)
            if (n = {
              element: e,
              isDehydrated: !1,
              cache: i.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = Xo(
                l,
                t,
                e,
                a
              );
              break l;
            } else if (e !== u) {
              u = pt(
                Error(r(424)),
                t
              ), Fe(u), t = Xo(
                l,
                t,
                e,
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
              for (bl = At(l.firstChild), Ql = t, el = !0, ca = null, Et = !0, a = js(
                t,
                null,
                e,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (ja(), e === u) {
              t = Wt(
                l,
                t,
                a
              );
              break l;
            }
            Zl(l, t, e, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Sn(l, t), l === null ? (a = ar(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : el || (a = t.type, l = t.pendingProps, e = qn(
          K.current
        ).createElement(a), e[Gl] = t, e[Fl] = l, Vl(e, a, l), Bl(e), t.stateNode = e) : t.memoizedState = ar(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Bt(t), l === null && el && (e = t.stateNode = Pd(
          t.type,
          t.pendingProps,
          K.current
        ), Ql = t, Et = !0, u = bl, za(t.type) ? (Ic = u, bl = At(e.firstChild)) : bl = u), Zl(
          l,
          t,
          t.pendingProps.children,
          a
        ), Sn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && el && ((u = e = bl) && (e = U0(
          e,
          t.type,
          t.pendingProps,
          Et
        ), e !== null ? (t.stateNode = e, Ql = t, bl = At(e.firstChild), Et = !1, u = !0) : u = !1), u || fa(t)), Bt(t), u = t.type, n = t.pendingProps, i = l !== null ? l.memoizedProps : null, e = n.children, wc(u, n) ? e = null : i !== null && wc(u, i) && (t.flags |= 32), t.memoizedState !== null && (u = Ji(
          l,
          t,
          Km,
          null,
          null,
          a
        ), Tu._currentValue = u), Sn(l, t), Zl(l, t, e, a), t.child;
      case 6:
        return l === null && el && ((l = a = bl) && (a = x0(
          a,
          t.pendingProps,
          Et
        ), a !== null ? (t.stateNode = a, Ql = t, bl = null, l = !0) : l = !1), l || fa(t)), null;
      case 13:
        return Zo(l, t, a);
      case 4:
        return ql(
          t,
          t.stateNode.containerInfo
        ), e = t.pendingProps, l === null ? t.child = Xa(
          t,
          null,
          e,
          a
        ) : Zl(l, t, e, a), t.child;
      case 11:
        return Ho(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return Zl(
          l,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return Zl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return Zl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return e = t.pendingProps, sa(t, t.type, e.value), Zl(l, t, e.children, a), t.child;
      case 9:
        return u = t.type._context, e = t.pendingProps.children, Ba(t), u = Xl(u), e = e(u), t.flags |= 1, Zl(l, t, e, a), t.child;
      case 14:
        return Ro(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return jo(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Lo(l, t, a);
      case 31:
        return Pm(l, t, a);
      case 22:
        return qo(
          l,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return Ba(t), e = Xl(Dl), l === null ? (u = qi(), u === null && (u = vl, n = Ri(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= a), u = n), t.memoizedState = { parent: e, cache: u }, Yi(t), sa(t, Dl, u)) : ((l.lanes & a) !== 0 && (Gi(l, t), uu(t, null, null, a), eu()), u = l.memoizedState, n = t.memoizedState, u.parent !== e ? (u = { parent: e, cache: e }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), sa(t, Dl, e)) : (e = n.cache, sa(t, Dl, e), e !== u.cache && Hi(
          t,
          [Dl],
          a,
          !0
        ))), Zl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function $t(l) {
    l.flags |= 4;
  }
  function pc(l, t, a, e, u) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (u & 335544128) === u)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (bd()) l.flags |= 8192;
        else
          throw Qa = en, Bi;
    } else l.flags &= -16777217;
  }
  function Jo(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !cr(t))
      if (bd()) l.flags |= 8192;
      else
        throw Qa = en, Bi;
  }
  function _n(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Tf() : 536870912, l.lanes |= t, Ee |= t);
  }
  function ou(l, t) {
    if (!el)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? l.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = l.tail;
          for (var e = null; a !== null; )
            a.alternate !== null && (e = a), a = a.sibling;
          e === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : e.sibling = null;
      }
  }
  function Sl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, a = 0, e = 0;
    if (t)
      for (var u = l.child; u !== null; )
        a |= u.lanes | u.childLanes, e |= u.subtreeFlags & 65011712, e |= u.flags & 65011712, u.return = l, u = u.sibling;
    else
      for (u = l.child; u !== null; )
        a |= u.lanes | u.childLanes, e |= u.subtreeFlags, e |= u.flags, u.return = l, u = u.sibling;
    return l.subtreeFlags |= e, l.childLanes = a, t;
  }
  function t0(l, t, a) {
    var e = t.pendingProps;
    switch (Di(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Sl(t), null;
      case 1:
        return Sl(t), null;
      case 3:
        return a = t.stateNode, e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Kt(Dl), yl(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (oe(t) ? $t(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ui())), Sl(t), null;
      case 26:
        var u = t.type, n = t.memoizedState;
        return l === null ? ($t(t), n !== null ? (Sl(t), Jo(t, n)) : (Sl(t), pc(
          t,
          u,
          null,
          e,
          a
        ))) : n ? n !== l.memoizedState ? ($t(t), Sl(t), Jo(t, n)) : (Sl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== e && $t(t), Sl(t), pc(
          t,
          u,
          l,
          e,
          a
        )), null;
      case 27:
        if (Ja(t), a = K.current, u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== e && $t(t);
        else {
          if (!e) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Sl(t), null;
          }
          l = N.current, oe(t) ? Ts(t) : (l = Pd(u, e, a), t.stateNode = l, $t(t));
        }
        return Sl(t), null;
      case 5:
        if (Ja(t), u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== e && $t(t);
        else {
          if (!e) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Sl(t), null;
          }
          if (n = N.current, oe(t))
            Ts(t);
          else {
            var i = qn(
              K.current
            );
            switch (n) {
              case 1:
                n = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                n = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    n = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    n = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    n = i.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof e.is == "string" ? i.createElement("select", {
                      is: e.is
                    }) : i.createElement("select"), e.multiple ? n.multiple = !0 : e.size && (n.size = e.size);
                    break;
                  default:
                    n = typeof e.is == "string" ? i.createElement(u, { is: e.is }) : i.createElement(u);
                }
            }
            n[Gl] = t, n[Fl] = e;
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t)
                  break l;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            t.stateNode = n;
            l: switch (Vl(n, u, e), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!e.autoFocus;
                break l;
              case "img":
                e = !0;
                break l;
              default:
                e = !1;
            }
            e && $t(t);
          }
        }
        return Sl(t), pc(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== e && $t(t);
        else {
          if (typeof e != "string" && t.stateNode === null)
            throw Error(r(166));
          if (l = K.current, oe(t)) {
            if (l = t.stateNode, a = t.memoizedProps, e = null, u = Ql, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  e = u.memoizedProps;
              }
            l[Gl] = t, l = !!(l.nodeValue === a || e !== null && e.suppressHydrationWarning === !0 || Zd(l.nodeValue, a)), l || fa(t, !0);
          } else
            l = qn(l).createTextNode(
              e
            ), l[Gl] = t, t.stateNode = l;
        }
        return Sl(t), null;
      case 31:
        if (a = t.memoizedState, l === null || l.memoizedState !== null) {
          if (e = oe(t), a !== null) {
            if (l === null) {
              if (!e) throw Error(r(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(557));
              l[Gl] = t;
            } else
              ja(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Sl(t), l = !1;
          } else
            a = Ui(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), l = !0;
          if (!l)
            return t.flags & 256 ? (dt(t), t) : (dt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Sl(t), null;
      case 13:
        if (e = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (u = oe(t), e !== null && e.dehydrated !== null) {
            if (l === null) {
              if (!u) throw Error(r(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(r(317));
              u[Gl] = t;
            } else
              ja(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Sl(t), u = !1;
          } else
            u = Ui(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (dt(t), t) : (dt(t), null);
        }
        return dt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = e !== null, l = l !== null && l.memoizedState !== null, a && (e = t.child, u = null, e.alternate !== null && e.alternate.memoizedState !== null && e.alternate.memoizedState.cachePool !== null && (u = e.alternate.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== u && (e.flags |= 2048)), a !== l && a && (t.child.flags |= 8192), _n(t, t.updateQueue), Sl(t), null);
      case 4:
        return yl(), l === null && Zc(t.stateNode.containerInfo), Sl(t), null;
      case 10:
        return Kt(t.type), Sl(t), null;
      case 19:
        if (z(Al), e = t.memoizedState, e === null) return Sl(t), null;
        if (u = (t.flags & 128) !== 0, n = e.rendering, n === null)
          if (u) ou(e, !1);
          else {
            if (Tl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = fn(l), n !== null) {
                  for (t.flags |= 128, ou(e, !1), l = n.updateQueue, t.updateQueue = l, _n(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; )
                    Ss(a, l), a = a.sibling;
                  return A(
                    Al,
                    Al.current & 1 | 2
                  ), el && Vt(t, e.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null && nt() > On && (t.flags |= 128, u = !0, ou(e, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (l = fn(n), l !== null) {
              if (t.flags |= 128, u = !0, l = l.updateQueue, t.updateQueue = l, _n(t, l), ou(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !el)
                return Sl(t), null;
            } else
              2 * nt() - e.renderingStartTime > On && a !== 536870912 && (t.flags |= 128, u = !0, ou(e, !1), t.lanes = 4194304);
          e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
        }
        return e.tail !== null ? (l = e.tail, e.rendering = l, e.tail = l.sibling, e.renderingStartTime = nt(), l.sibling = null, a = Al.current, A(
          Al,
          u ? a & 1 | 2 : a & 1
        ), el && Vt(t, e.treeForkCount), l) : (Sl(t), null);
      case 22:
      case 23:
        return dt(t), Vi(), e = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== e && (t.flags |= 8192) : e && (t.flags |= 8192), e ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Sl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Sl(t), a = t.updateQueue, a !== null && _n(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (t.flags |= 2048), l !== null && z(Ya), null;
      case 24:
        return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Kt(Dl), Sl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function a0(l, t) {
    switch (Di(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Kt(Dl), yl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ja(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (dt(t), t.alternate === null)
            throw Error(r(340));
          ja();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (dt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          ja();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return z(Al), null;
      case 4:
        return yl(), null;
      case 10:
        return Kt(t.type), null;
      case 22:
      case 23:
        return dt(t), Vi(), l !== null && z(Ya), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Kt(Dl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function wo(l, t) {
    switch (Di(t), t.tag) {
      case 3:
        Kt(Dl), yl();
        break;
      case 26:
      case 27:
      case 5:
        Ja(t);
        break;
      case 4:
        yl();
        break;
      case 31:
        t.memoizedState !== null && dt(t);
        break;
      case 13:
        dt(t);
        break;
      case 19:
        z(Al);
        break;
      case 10:
        Kt(t.type);
        break;
      case 22:
      case 23:
        dt(t), Vi(), l !== null && z(Ya);
        break;
      case 24:
        Kt(Dl);
    }
  }
  function du(l, t) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var u = e.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            e = void 0;
            var n = a.create, i = a.inst;
            e = n(), i.destroy = e;
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (c) {
      dl(t, t.return, c);
    }
  }
  function ya(l, t, a) {
    try {
      var e = t.updateQueue, u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            var i = e.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, u = t;
              var f = a, y = c;
              try {
                y();
              } catch (p) {
                dl(
                  u,
                  f,
                  p
                );
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (p) {
      dl(t, t.return, p);
    }
  }
  function Wo(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Bs(t, a);
      } catch (e) {
        dl(l, l.return, e);
      }
    }
  }
  function $o(l, t, a) {
    a.props = Va(
      l.type,
      l.memoizedProps
    ), a.state = l.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (e) {
      dl(l, t, e);
    }
  }
  function ru(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var e = l.stateNode;
            break;
          case 30:
            e = l.stateNode;
            break;
          default:
            e = l.stateNode;
        }
        typeof a == "function" ? l.refCleanup = a(e) : a.current = e;
      }
    } catch (u) {
      dl(l, t, u);
    }
  }
  function jt(l, t) {
    var a = l.ref, e = l.refCleanup;
    if (a !== null)
      if (typeof e == "function")
        try {
          e();
        } catch (u) {
          dl(l, t, u);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          dl(l, t, u);
        }
      else a.current = null;
  }
  function ko(l) {
    var t = l.type, a = l.memoizedProps, e = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break l;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    } catch (u) {
      dl(l, l.return, u);
    }
  }
  function _c(l, t, a) {
    try {
      var e = l.stateNode;
      T0(e, l.type, a, t), e[Fl] = t;
    } catch (u) {
      dl(l, l.return, u);
    }
  }
  function Fo(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && za(l.type) || l.tag === 4;
  }
  function zc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Fo(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && za(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Ec(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Qt));
    else if (e !== 4 && (e === 27 && za(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null))
      for (Ec(l, t, a), l = l.sibling; l !== null; )
        Ec(l, t, a), l = l.sibling;
  }
  function zn(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (e !== 4 && (e === 27 && za(l.type) && (a = l.stateNode), l = l.child, l !== null))
      for (zn(l, t, a), l = l.sibling; l !== null; )
        zn(l, t, a), l = l.sibling;
  }
  function Io(l) {
    var t = l.stateNode, a = l.memoizedProps;
    try {
      for (var e = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      Vl(t, e, a), t[Gl] = l, t[Fl] = a;
    } catch (n) {
      dl(l, l.return, n);
    }
  }
  var kt = !1, xl = !1, Tc = !1, Po = typeof WeakSet == "function" ? WeakSet : Set, Yl = null;
  function e0(l, t) {
    if (l = l.containerInfo, Kc = Vn, l = os(l), gi(l)) {
      if ("selectionStart" in l)
        var a = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          a = (a = l.ownerDocument) && a.defaultView || window;
          var e = a.getSelection && a.getSelection();
          if (e && e.rangeCount !== 0) {
            a = e.anchorNode;
            var u = e.anchorOffset, n = e.focusNode;
            e = e.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch {
              a = null;
              break l;
            }
            var i = 0, c = -1, f = -1, y = 0, p = 0, E = l, v = null;
            t: for (; ; ) {
              for (var g; E !== a || u !== 0 && E.nodeType !== 3 || (c = i + u), E !== n || e !== 0 && E.nodeType !== 3 || (f = i + e), E.nodeType === 3 && (i += E.nodeValue.length), (g = E.firstChild) !== null; )
                v = E, E = g;
              for (; ; ) {
                if (E === l) break t;
                if (v === a && ++y === u && (c = i), v === n && ++p === e && (f = i), (g = E.nextSibling) !== null) break;
                E = v, v = E.parentNode;
              }
              E = g;
            }
            a = c === -1 || f === -1 ? null : { start: c, end: f };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Jc = { focusedElem: l, selectionRange: a }, Vn = !1, Yl = t; Yl !== null; )
      if (t = Yl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Yl = l;
      else
        for (; Yl !== null; ) {
          switch (t = Yl, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (a = 0; a < l.length; a++)
                  u = l[a], u.ref.impl = u.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, a = t, u = n.memoizedProps, n = n.memoizedState, e = a.stateNode;
                try {
                  var x = Va(
                    a.type,
                    u
                  );
                  l = e.getSnapshotBeforeUpdate(
                    x,
                    n
                  ), e.__reactInternalSnapshotBeforeUpdate = l;
                } catch (B) {
                  dl(
                    a,
                    a.return,
                    B
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9)
                  $c(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      $c(l);
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
              if ((l & 1024) !== 0) throw Error(r(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Yl = l;
            break;
          }
          Yl = t.return;
        }
  }
  function ld(l, t, a) {
    var e = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        It(l, a), e & 4 && du(5, a);
        break;
      case 1:
        if (It(l, a), e & 4)
          if (l = a.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (i) {
              dl(a, a.return, i);
            }
          else {
            var u = Va(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                u,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              dl(
                a,
                a.return,
                i
              );
            }
          }
        e & 64 && Wo(a), e & 512 && ru(a, a.return);
        break;
      case 3:
        if (It(l, a), e & 64 && (l = a.updateQueue, l !== null)) {
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
            Bs(l, t);
          } catch (i) {
            dl(a, a.return, i);
          }
        }
        break;
      case 27:
        t === null && e & 4 && Io(a);
      case 26:
      case 5:
        It(l, a), t === null && e & 4 && ko(a), e & 512 && ru(a, a.return);
        break;
      case 12:
        It(l, a);
        break;
      case 31:
        It(l, a), e & 4 && ed(l, a);
        break;
      case 13:
        It(l, a), e & 4 && ud(l, a), e & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = r0.bind(
          null,
          a
        ), C0(l, a))));
        break;
      case 22:
        if (e = a.memoizedState !== null || kt, !e) {
          t = t !== null && t.memoizedState !== null || xl, u = kt;
          var n = xl;
          kt = e, (xl = t) && !n ? Pt(
            l,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : It(l, a), kt = u, xl = n;
        }
        break;
      case 30:
        break;
      default:
        It(l, a);
    }
  }
  function td(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, td(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && li(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var _l = null, Pl = !1;
  function Ft(l, t, a) {
    for (a = a.child; a !== null; )
      ad(l, t, a), a = a.sibling;
  }
  function ad(l, t, a) {
    if (it && typeof it.onCommitFiberUnmount == "function")
      try {
        it.onCommitFiberUnmount(qe, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        xl || jt(a, t), Ft(
          l,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        xl || jt(a, t);
        var e = _l, u = Pl;
        za(a.type) && (_l = a.stateNode, Pl = !1), Ft(
          l,
          t,
          a
        ), _u(a.stateNode), _l = e, Pl = u;
        break;
      case 5:
        xl || jt(a, t);
      case 6:
        if (e = _l, u = Pl, _l = null, Ft(
          l,
          t,
          a
        ), _l = e, Pl = u, _l !== null)
          if (Pl)
            try {
              (_l.nodeType === 9 ? _l.body : _l.nodeName === "HTML" ? _l.ownerDocument.body : _l).removeChild(a.stateNode);
            } catch (n) {
              dl(
                a,
                t,
                n
              );
            }
          else
            try {
              _l.removeChild(a.stateNode);
            } catch (n) {
              dl(
                a,
                t,
                n
              );
            }
        break;
      case 18:
        _l !== null && (Pl ? (l = _l, Wd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          a.stateNode
        ), xe(l)) : Wd(_l, a.stateNode));
        break;
      case 4:
        e = _l, u = Pl, _l = a.stateNode.containerInfo, Pl = !0, Ft(
          l,
          t,
          a
        ), _l = e, Pl = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ya(2, a, t), xl || ya(4, a, t), Ft(
          l,
          t,
          a
        );
        break;
      case 1:
        xl || (jt(a, t), e = a.stateNode, typeof e.componentWillUnmount == "function" && $o(
          a,
          t,
          e
        )), Ft(
          l,
          t,
          a
        );
        break;
      case 21:
        Ft(
          l,
          t,
          a
        );
        break;
      case 22:
        xl = (e = xl) || a.memoizedState !== null, Ft(
          l,
          t,
          a
        ), xl = e;
        break;
      default:
        Ft(
          l,
          t,
          a
        );
    }
  }
  function ed(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        xe(l);
      } catch (a) {
        dl(t, t.return, a);
      }
    }
  }
  function ud(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        xe(l);
      } catch (a) {
        dl(t, t.return, a);
      }
  }
  function u0(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Po()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Po()), t;
      default:
        throw Error(r(435, l.tag));
    }
  }
  function En(l, t) {
    var a = u0(l);
    t.forEach(function(e) {
      if (!a.has(e)) {
        a.add(e);
        var u = m0.bind(null, l, e);
        e.then(u, u);
      }
    });
  }
  function lt(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var u = a[e], n = l, i = t, c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (za(c.type)) {
                _l = c.stateNode, Pl = !1;
                break l;
              }
              break;
            case 5:
              _l = c.stateNode, Pl = !1;
              break l;
            case 3:
            case 4:
              _l = c.stateNode.containerInfo, Pl = !0;
              break l;
          }
          c = c.return;
        }
        if (_l === null) throw Error(r(160));
        ad(n, i, u), _l = null, Pl = !1, n = u.alternate, n !== null && (n.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        nd(t, l), t = t.sibling;
  }
  var Dt = null;
  function nd(l, t) {
    var a = l.alternate, e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        lt(t, l), tt(l), e & 4 && (ya(3, l, l.return), du(3, l), ya(5, l, l.return));
        break;
      case 1:
        lt(t, l), tt(l), e & 512 && (xl || a === null || jt(a, a.return)), e & 64 && kt && (l = l.updateQueue, l !== null && (e = l.callbacks, e !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? e : a.concat(e))));
        break;
      case 26:
        var u = Dt;
        if (lt(t, l), tt(l), e & 512 && (xl || a === null || jt(a, a.return)), e & 4) {
          var n = a !== null ? a.memoizedState : null;
          if (e = l.memoizedState, a === null)
            if (e === null)
              if (l.stateNode === null) {
                l: {
                  e = l.type, a = l.memoizedProps, u = u.ownerDocument || u;
                  t: switch (e) {
                    case "title":
                      n = u.getElementsByTagName("title")[0], (!n || n[Ge] || n[Gl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(e), u.head.insertBefore(
                        n,
                        u.querySelector("head > title")
                      )), Vl(n, e, a), n[Gl] = l, Bl(n), e = n;
                      break l;
                    case "link":
                      var i = nr(
                        "link",
                        "href",
                        u
                      ).get(e + (a.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (n = i[c], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      n = u.createElement(e), Vl(n, e, a), u.head.appendChild(n);
                      break;
                    case "meta":
                      if (i = nr(
                        "meta",
                        "content",
                        u
                      ).get(e + (a.content || ""))) {
                        for (c = 0; c < i.length; c++)
                          if (n = i[c], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      n = u.createElement(e), Vl(n, e, a), u.head.appendChild(n);
                      break;
                    default:
                      throw Error(r(468, e));
                  }
                  n[Gl] = l, Bl(n), e = n;
                }
                l.stateNode = e;
              } else
                ir(
                  u,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = ur(
                u,
                e,
                l.memoizedProps
              );
          else
            n !== e ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, e === null ? ir(
              u,
              l.type,
              l.stateNode
            ) : ur(
              u,
              e,
              l.memoizedProps
            )) : e === null && l.stateNode !== null && _c(
              l,
              l.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        lt(t, l), tt(l), e & 512 && (xl || a === null || jt(a, a.return)), a !== null && e & 4 && _c(
          l,
          l.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (lt(t, l), tt(l), e & 512 && (xl || a === null || jt(a, a.return)), l.flags & 32) {
          u = l.stateNode;
          try {
            le(u, "");
          } catch (x) {
            dl(l, l.return, x);
          }
        }
        e & 4 && l.stateNode != null && (u = l.memoizedProps, _c(
          l,
          u,
          a !== null ? a.memoizedProps : u
        )), e & 1024 && (Tc = !0);
        break;
      case 6:
        if (lt(t, l), tt(l), e & 4) {
          if (l.stateNode === null)
            throw Error(r(162));
          e = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = e;
          } catch (x) {
            dl(l, l.return, x);
          }
        }
        break;
      case 3:
        if (Gn = null, u = Dt, Dt = Bn(t.containerInfo), lt(t, l), Dt = u, tt(l), e & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            xe(t.containerInfo);
          } catch (x) {
            dl(l, l.return, x);
          }
        Tc && (Tc = !1, id(l));
        break;
      case 4:
        e = Dt, Dt = Bn(
          l.stateNode.containerInfo
        ), lt(t, l), tt(l), Dt = e;
        break;
      case 12:
        lt(t, l), tt(l);
        break;
      case 31:
        lt(t, l), tt(l), e & 4 && (e = l.updateQueue, e !== null && (l.updateQueue = null, En(l, e)));
        break;
      case 13:
        lt(t, l), tt(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (An = nt()), e & 4 && (e = l.updateQueue, e !== null && (l.updateQueue = null, En(l, e)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var f = a !== null && a.memoizedState !== null, y = kt, p = xl;
        if (kt = y || u, xl = p || f, lt(t, l), xl = p, kt = y, tt(l), e & 8192)
          l: for (t = l.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (a === null || f || kt || xl || La(l)), a = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                f = a = t;
                try {
                  if (n = f.stateNode, u)
                    i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    c = f.stateNode;
                    var E = f.memoizedProps.style, v = E != null && E.hasOwnProperty("display") ? E.display : null;
                    c.style.display = v == null || typeof v == "boolean" ? "" : ("" + v).trim();
                  }
                } catch (x) {
                  dl(f, f.return, x);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                f = t;
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (x) {
                  dl(f, f.return, x);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                f = t;
                try {
                  var g = f.stateNode;
                  u ? $d(g, !0) : $d(f.stateNode, !1);
                } catch (x) {
                  dl(f, f.return, x);
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
        e & 4 && (e = l.updateQueue, e !== null && (a = e.retryQueue, a !== null && (e.retryQueue = null, En(l, a))));
        break;
      case 19:
        lt(t, l), tt(l), e & 4 && (e = l.updateQueue, e !== null && (l.updateQueue = null, En(l, e)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        lt(t, l), tt(l);
    }
  }
  function tt(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, e = l.return; e !== null; ) {
          if (Fo(e)) {
            a = e;
            break;
          }
          e = e.return;
        }
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode, n = zc(l);
            zn(l, n, u);
            break;
          case 5:
            var i = a.stateNode;
            a.flags & 32 && (le(i, ""), a.flags &= -33);
            var c = zc(l);
            zn(l, c, i);
            break;
          case 3:
          case 4:
            var f = a.stateNode.containerInfo, y = zc(l);
            Ec(
              l,
              y,
              f
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (p) {
        dl(l, l.return, p);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function id(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        id(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function It(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        ld(l, t.alternate, t), t = t.sibling;
  }
  function La(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ya(4, t, t.return), La(t);
          break;
        case 1:
          jt(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && $o(
            t,
            t.return,
            a
          ), La(t);
          break;
        case 27:
          _u(t.stateNode);
        case 26:
        case 5:
          jt(t, t.return), La(t);
          break;
        case 22:
          t.memoizedState === null && La(t);
          break;
        case 30:
          La(t);
          break;
        default:
          La(t);
      }
      l = l.sibling;
    }
  }
  function Pt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var e = t.alternate, u = l, n = t, i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Pt(
            u,
            n,
            a
          ), du(4, n);
          break;
        case 1:
          if (Pt(
            u,
            n,
            a
          ), e = n, u = e.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (y) {
              dl(e, e.return, y);
            }
          if (e = n, u = e.updateQueue, u !== null) {
            var c = e.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
                  qs(f[u], c);
            } catch (y) {
              dl(e, e.return, y);
            }
          }
          a && i & 64 && Wo(n), ru(n, n.return);
          break;
        case 27:
          Io(n);
        case 26:
        case 5:
          Pt(
            u,
            n,
            a
          ), a && e === null && i & 4 && ko(n), ru(n, n.return);
          break;
        case 12:
          Pt(
            u,
            n,
            a
          );
          break;
        case 31:
          Pt(
            u,
            n,
            a
          ), a && i & 4 && ed(u, n);
          break;
        case 13:
          Pt(
            u,
            n,
            a
          ), a && i & 4 && ud(u, n);
          break;
        case 22:
          n.memoizedState === null && Pt(
            u,
            n,
            a
          ), ru(n, n.return);
          break;
        case 30:
          break;
        default:
          Pt(
            u,
            n,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Ac(l, t) {
    var a = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && Ie(a));
  }
  function Oc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ie(l));
  }
  function Nt(l, t, a, e) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        cd(
          l,
          t,
          a,
          e
        ), t = t.sibling;
  }
  function cd(l, t, a, e) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Nt(
          l,
          t,
          a,
          e
        ), u & 2048 && du(9, t);
        break;
      case 1:
        Nt(
          l,
          t,
          a,
          e
        );
        break;
      case 3:
        Nt(
          l,
          t,
          a,
          e
        ), u & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ie(l)));
        break;
      case 12:
        if (u & 2048) {
          Nt(
            l,
            t,
            a,
            e
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, i = n.id, c = n.onPostCommit;
            typeof c == "function" && c(
              i,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (f) {
            dl(t, t.return, f);
          }
        } else
          Nt(
            l,
            t,
            a,
            e
          );
        break;
      case 31:
        Nt(
          l,
          t,
          a,
          e
        );
        break;
      case 13:
        Nt(
          l,
          t,
          a,
          e
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, i = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Nt(
          l,
          t,
          a,
          e
        ) : mu(l, t) : n._visibility & 2 ? Nt(
          l,
          t,
          a,
          e
        ) : (n._visibility |= 2, pe(
          l,
          t,
          a,
          e,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && Ac(i, t);
        break;
      case 24:
        Nt(
          l,
          t,
          a,
          e
        ), u & 2048 && Oc(t.alternate, t);
        break;
      default:
        Nt(
          l,
          t,
          a,
          e
        );
    }
  }
  function pe(l, t, a, e, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, i = t, c = a, f = e, y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          pe(
            n,
            i,
            c,
            f,
            u
          ), du(8, i);
          break;
        case 23:
          break;
        case 22:
          var p = i.stateNode;
          i.memoizedState !== null ? p._visibility & 2 ? pe(
            n,
            i,
            c,
            f,
            u
          ) : mu(
            n,
            i
          ) : (p._visibility |= 2, pe(
            n,
            i,
            c,
            f,
            u
          )), u && y & 2048 && Ac(
            i.alternate,
            i
          );
          break;
        case 24:
          pe(
            n,
            i,
            c,
            f,
            u
          ), u && y & 2048 && Oc(i.alternate, i);
          break;
        default:
          pe(
            n,
            i,
            c,
            f,
            u
          );
      }
      t = t.sibling;
    }
  }
  function mu(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l, e = t, u = e.flags;
        switch (e.tag) {
          case 22:
            mu(a, e), u & 2048 && Ac(
              e.alternate,
              e
            );
            break;
          case 24:
            mu(a, e), u & 2048 && Oc(e.alternate, e);
            break;
          default:
            mu(a, e);
        }
        t = t.sibling;
      }
  }
  var hu = 8192;
  function _e(l, t, a) {
    if (l.subtreeFlags & hu)
      for (l = l.child; l !== null; )
        fd(
          l,
          t,
          a
        ), l = l.sibling;
  }
  function fd(l, t, a) {
    switch (l.tag) {
      case 26:
        _e(
          l,
          t,
          a
        ), l.flags & hu && l.memoizedState !== null && L0(
          a,
          Dt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        _e(
          l,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var e = Dt;
        Dt = Bn(l.stateNode.containerInfo), _e(
          l,
          t,
          a
        ), Dt = e;
        break;
      case 22:
        l.memoizedState === null && (e = l.alternate, e !== null && e.memoizedState !== null ? (e = hu, hu = 16777216, _e(
          l,
          t,
          a
        ), hu = e) : _e(
          l,
          t,
          a
        ));
        break;
      default:
        _e(
          l,
          t,
          a
        );
    }
  }
  function sd(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function yu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          Yl = e, dd(
            e,
            l
          );
        }
      sd(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        od(l), l = l.sibling;
  }
  function od(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        yu(l), l.flags & 2048 && ya(9, l, l.return);
        break;
      case 3:
        yu(l);
        break;
      case 12:
        yu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, Tn(l)) : yu(l);
        break;
      default:
        yu(l);
    }
  }
  function Tn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          Yl = e, dd(
            e,
            l
          );
        }
      sd(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          ya(8, t, t.return), Tn(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, Tn(t));
          break;
        default:
          Tn(t);
      }
      l = l.sibling;
    }
  }
  function dd(l, t) {
    for (; Yl !== null; ) {
      var a = Yl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ya(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var e = a.memoizedState.cachePool.pool;
            e != null && e.refCount++;
          }
          break;
        case 24:
          Ie(a.memoizedState.cache);
      }
      if (e = a.child, e !== null) e.return = a, Yl = e;
      else
        l: for (a = l; Yl !== null; ) {
          e = Yl;
          var u = e.sibling, n = e.return;
          if (td(e), e === a) {
            Yl = null;
            break l;
          }
          if (u !== null) {
            u.return = n, Yl = u;
            break l;
          }
          Yl = n;
        }
    }
  }
  var n0 = {
    getCacheForType: function(l) {
      var t = Xl(Dl), a = t.data.get(l);
      return a === void 0 && (a = l(), t.data.set(l, a)), a;
    },
    cacheSignal: function() {
      return Xl(Dl).controller.signal;
    }
  }, i0 = typeof WeakMap == "function" ? WeakMap : Map, sl = 0, vl = null, I = null, ll = 0, ol = 0, rt = null, va = !1, ze = !1, Mc = !1, la = 0, Tl = 0, ga = 0, Ka = 0, Dc = 0, mt = 0, Ee = 0, vu = null, at = null, Nc = !1, An = 0, rd = 0, On = 1 / 0, Mn = null, ba = null, Rl = 0, Sa = null, Te = null, ta = 0, Uc = 0, xc = null, md = null, gu = 0, Cc = null;
  function ht() {
    return (sl & 2) !== 0 && ll !== 0 ? ll & -ll : S.T !== null ? Yc() : Df();
  }
  function hd() {
    if (mt === 0)
      if ((ll & 536870912) === 0 || el) {
        var l = Ru;
        Ru <<= 1, (Ru & 3932160) === 0 && (Ru = 262144), mt = l;
      } else mt = 536870912;
    return l = ot.current, l !== null && (l.flags |= 32), mt;
  }
  function et(l, t, a) {
    (l === vl && (ol === 2 || ol === 9) || l.cancelPendingCommit !== null) && (Ae(l, 0), pa(
      l,
      ll,
      mt,
      !1
    )), Ye(l, a), ((sl & 2) === 0 || l !== vl) && (l === vl && ((sl & 2) === 0 && (Ka |= a), Tl === 4 && pa(
      l,
      ll,
      mt,
      !1
    )), qt(l));
  }
  function yd(l, t, a) {
    if ((sl & 6) !== 0) throw Error(r(327));
    var e = !a && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Be(l, t), u = e ? s0(l, t) : Rc(l, t, !0), n = e;
    do {
      if (u === 0) {
        ze && !e && pa(l, t, 0, !1);
        break;
      } else {
        if (a = l.current.alternate, n && !c0(a)) {
          u = Rc(l, t, !1), n = !1;
          continue;
        }
        if (u === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var i = 0;
          else
            i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              u = vu;
              var f = c.current.memoizedState.isDehydrated;
              if (f && (Ae(c, i).flags |= 256), i = Rc(
                c,
                i,
                !1
              ), i !== 2) {
                if (Mc && !f) {
                  c.errorRecoveryDisabledLanes |= n, Ka |= n, u = 4;
                  break l;
                }
                n = at, at = u, n !== null && (at === null ? at = n : at.push.apply(
                  at,
                  n
                ));
              }
              u = i;
            }
            if (n = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          Ae(l, 0), pa(l, t, 0, !0);
          break;
        }
        l: {
          switch (e = l, n = u, n) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              pa(
                e,
                t,
                mt,
                !va
              );
              break l;
            case 2:
              at = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (u = An + 300 - nt(), 10 < u)) {
            if (pa(
              e,
              t,
              mt,
              !va
            ), qu(e, 0, !0) !== 0) break l;
            ta = t, e.timeoutHandle = Jd(
              vd.bind(
                null,
                e,
                a,
                at,
                Mn,
                Nc,
                t,
                mt,
                Ka,
                Ee,
                va,
                n,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break l;
          }
          vd(
            e,
            a,
            at,
            Mn,
            Nc,
            t,
            mt,
            Ka,
            Ee,
            va,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    qt(l);
  }
  function vd(l, t, a, e, u, n, i, c, f, y, p, E, v, g) {
    if (l.timeoutHandle = -1, E = t.subtreeFlags, E & 8192 || (E & 16785408) === 16785408) {
      E = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Qt
      }, fd(
        t,
        n,
        E
      );
      var x = (n & 62914560) === n ? An - nt() : (n & 4194048) === n ? rd - nt() : 0;
      if (x = K0(
        E,
        x
      ), x !== null) {
        ta = n, l.cancelPendingCommit = x(
          Td.bind(
            null,
            l,
            t,
            n,
            a,
            e,
            u,
            i,
            c,
            f,
            p,
            E,
            null,
            v,
            g
          )
        ), pa(l, n, i, !y);
        return;
      }
    }
    Td(
      l,
      t,
      n,
      a,
      e,
      u,
      i,
      c,
      f
    );
  }
  function c0(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var e = 0; e < a.length; e++) {
          var u = a[e], n = u.getSnapshot;
          u = u.value;
          try {
            if (!ft(n(), u)) return !1;
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
  function pa(l, t, a, e) {
    t &= ~Dc, t &= ~Ka, l.suspendedLanes |= t, l.pingedLanes &= ~t, e && (l.warmLanes |= t), e = l.expirationTimes;
    for (var u = t; 0 < u; ) {
      var n = 31 - ct(u), i = 1 << n;
      e[n] = -1, u &= ~i;
    }
    a !== 0 && Af(l, a, t);
  }
  function Dn() {
    return (sl & 6) === 0 ? (bu(0), !1) : !0;
  }
  function Hc() {
    if (I !== null) {
      if (ol === 0)
        var l = I.return;
      else
        l = I, Lt = qa = null, $i(l), ye = null, lu = 0, l = I;
      for (; l !== null; )
        wo(l.alternate, l), l = l.return;
      I = null;
    }
  }
  function Ae(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && (l.timeoutHandle = -1, M0(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), ta = 0, Hc(), vl = l, I = a = Zt(l.current, null), ll = t, ol = 0, rt = null, va = !1, ze = Be(l, t), Mc = !1, Ee = mt = Dc = Ka = ga = Tl = 0, at = vu = null, Nc = !1, (t & 8) !== 0 && (t |= t & 32);
    var e = l.entangledLanes;
    if (e !== 0)
      for (l = l.entanglements, e &= t; 0 < e; ) {
        var u = 31 - ct(e), n = 1 << u;
        t |= l[u], e &= ~n;
      }
    return la = t, Wu(), a;
  }
  function gd(l, t) {
    w = null, S.H = fu, t === he || t === an ? (t = Cs(), ol = 3) : t === Bi ? (t = Cs(), ol = 4) : ol = t === dc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, rt = t, I === null && (Tl = 1, gn(
      l,
      pt(t, l.current)
    ));
  }
  function bd() {
    var l = ot.current;
    return l === null ? !0 : (ll & 4194048) === ll ? Tt === null : (ll & 62914560) === ll || (ll & 536870912) !== 0 ? l === Tt : !1;
  }
  function Sd() {
    var l = S.H;
    return S.H = fu, l === null ? fu : l;
  }
  function pd() {
    var l = S.A;
    return S.A = n0, l;
  }
  function Nn() {
    Tl = 4, va || (ll & 4194048) !== ll && ot.current !== null || (ze = !0), (ga & 134217727) === 0 && (Ka & 134217727) === 0 || vl === null || pa(
      vl,
      ll,
      mt,
      !1
    );
  }
  function Rc(l, t, a) {
    var e = sl;
    sl |= 2;
    var u = Sd(), n = pd();
    (vl !== l || ll !== t) && (Mn = null, Ae(l, t)), t = !1;
    var i = Tl;
    l: do
      try {
        if (ol !== 0 && I !== null) {
          var c = I, f = rt;
          switch (ol) {
            case 8:
              Hc(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              ot.current === null && (t = !0);
              var y = ol;
              if (ol = 0, rt = null, Oe(l, c, f, y), a && ze) {
                i = 0;
                break l;
              }
              break;
            default:
              y = ol, ol = 0, rt = null, Oe(l, c, f, y);
          }
        }
        f0(), i = Tl;
        break;
      } catch (p) {
        gd(l, p);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Lt = qa = null, sl = e, S.H = u, S.A = n, I === null && (vl = null, ll = 0, Wu()), i;
  }
  function f0() {
    for (; I !== null; ) _d(I);
  }
  function s0(l, t) {
    var a = sl;
    sl |= 2;
    var e = Sd(), u = pd();
    vl !== l || ll !== t ? (Mn = null, On = nt() + 500, Ae(l, t)) : ze = Be(
      l,
      t
    );
    l: do
      try {
        if (ol !== 0 && I !== null) {
          t = I;
          var n = rt;
          t: switch (ol) {
            case 1:
              ol = 0, rt = null, Oe(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (Us(n)) {
                ol = 0, rt = null, zd(t);
                break;
              }
              t = function() {
                ol !== 2 && ol !== 9 || vl !== l || (ol = 7), qt(l);
              }, n.then(t, t);
              break l;
            case 3:
              ol = 7;
              break l;
            case 4:
              ol = 5;
              break l;
            case 7:
              Us(n) ? (ol = 0, rt = null, zd(t)) : (ol = 0, rt = null, Oe(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (I.tag) {
                case 26:
                  i = I.memoizedState;
                case 5:
                case 27:
                  var c = I;
                  if (i ? cr(i) : c.stateNode.complete) {
                    ol = 0, rt = null;
                    var f = c.sibling;
                    if (f !== null) I = f;
                    else {
                      var y = c.return;
                      y !== null ? (I = y, Un(y)) : I = null;
                    }
                    break t;
                  }
              }
              ol = 0, rt = null, Oe(l, t, n, 5);
              break;
            case 6:
              ol = 0, rt = null, Oe(l, t, n, 6);
              break;
            case 8:
              Hc(), Tl = 6;
              break l;
            default:
              throw Error(r(462));
          }
        }
        o0();
        break;
      } catch (p) {
        gd(l, p);
      }
    while (!0);
    return Lt = qa = null, S.H = e, S.A = u, sl = a, I !== null ? 0 : (vl = null, ll = 0, Wu(), Tl);
  }
  function o0() {
    for (; I !== null && !Hr(); )
      _d(I);
  }
  function _d(l) {
    var t = Ko(l.alternate, l, la);
    l.memoizedProps = l.pendingProps, t === null ? Un(l) : I = t;
  }
  function zd(l) {
    var t = l, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Go(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ll
        );
        break;
      case 11:
        t = Go(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ll
        );
        break;
      case 5:
        $i(t);
      default:
        wo(a, t), t = I = Ss(t, la), t = Ko(a, t, la);
    }
    l.memoizedProps = l.pendingProps, t === null ? Un(l) : I = t;
  }
  function Oe(l, t, a, e) {
    Lt = qa = null, $i(t), ye = null, lu = 0;
    var u = t.return;
    try {
      if (Im(
        l,
        u,
        t,
        a,
        ll
      )) {
        Tl = 1, gn(
          l,
          pt(a, l.current)
        ), I = null;
        return;
      }
    } catch (n) {
      if (u !== null) throw I = u, n;
      Tl = 1, gn(
        l,
        pt(a, l.current)
      ), I = null;
      return;
    }
    t.flags & 32768 ? (el || e === 1 ? l = !0 : ze || (ll & 536870912) !== 0 ? l = !1 : (va = l = !0, (e === 2 || e === 9 || e === 3 || e === 6) && (e = ot.current, e !== null && e.tag === 13 && (e.flags |= 16384))), Ed(t, l)) : Un(t);
  }
  function Un(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Ed(
          t,
          va
        );
        return;
      }
      l = t.return;
      var a = t0(
        t.alternate,
        t,
        la
      );
      if (a !== null) {
        I = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        I = t;
        return;
      }
      I = t = l;
    } while (t !== null);
    Tl === 0 && (Tl = 5);
  }
  function Ed(l, t) {
    do {
      var a = a0(l.alternate, l);
      if (a !== null) {
        a.flags &= 32767, I = a;
        return;
      }
      if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
        I = l;
        return;
      }
      I = l = a;
    } while (l !== null);
    Tl = 6, I = null;
  }
  function Td(l, t, a, e, u, n, i, c, f) {
    l.cancelPendingCommit = null;
    do
      xn();
    while (Rl !== 0);
    if ((sl & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === l.current) throw Error(r(177));
      if (n = t.lanes | t.childLanes, n |= zi, Vr(
        l,
        a,
        n,
        i,
        c,
        f
      ), l === vl && (I = vl = null, ll = 0), Te = t, Sa = l, ta = a, Uc = n, xc = u, md = e, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, h0(Cu, function() {
        return Nd(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), e = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || e) {
        e = S.T, S.T = null, u = O.p, O.p = 2, i = sl, sl |= 4;
        try {
          e0(l, t, a);
        } finally {
          sl = i, O.p = u, S.T = e;
        }
      }
      Rl = 1, Ad(), Od(), Md();
    }
  }
  function Ad() {
    if (Rl === 1) {
      Rl = 0;
      var l = Sa, t = Te, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = S.T, S.T = null;
        var e = O.p;
        O.p = 2;
        var u = sl;
        sl |= 4;
        try {
          nd(t, l);
          var n = Jc, i = os(l.containerInfo), c = n.focusedElem, f = n.selectionRange;
          if (i !== c && c && c.ownerDocument && ss(
            c.ownerDocument.documentElement,
            c
          )) {
            if (f !== null && gi(c)) {
              var y = f.start, p = f.end;
              if (p === void 0 && (p = y), "selectionStart" in c)
                c.selectionStart = y, c.selectionEnd = Math.min(
                  p,
                  c.value.length
                );
              else {
                var E = c.ownerDocument || document, v = E && E.defaultView || window;
                if (v.getSelection) {
                  var g = v.getSelection(), x = c.textContent.length, B = Math.min(f.start, x), hl = f.end === void 0 ? B : Math.min(f.end, x);
                  !g.extend && B > hl && (i = hl, hl = B, B = i);
                  var d = fs(
                    c,
                    B
                  ), s = fs(
                    c,
                    hl
                  );
                  if (d && s && (g.rangeCount !== 1 || g.anchorNode !== d.node || g.anchorOffset !== d.offset || g.focusNode !== s.node || g.focusOffset !== s.offset)) {
                    var h = E.createRange();
                    h.setStart(d.node, d.offset), g.removeAllRanges(), B > hl ? (g.addRange(h), g.extend(s.node, s.offset)) : (h.setEnd(s.node, s.offset), g.addRange(h));
                  }
                }
              }
            }
            for (E = [], g = c; g = g.parentNode; )
              g.nodeType === 1 && E.push({
                element: g,
                left: g.scrollLeft,
                top: g.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < E.length; c++) {
              var _ = E[c];
              _.element.scrollLeft = _.left, _.element.scrollTop = _.top;
            }
          }
          Vn = !!Kc, Jc = Kc = null;
        } finally {
          sl = u, O.p = e, S.T = a;
        }
      }
      l.current = t, Rl = 2;
    }
  }
  function Od() {
    if (Rl === 2) {
      Rl = 0;
      var l = Sa, t = Te, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = S.T, S.T = null;
        var e = O.p;
        O.p = 2;
        var u = sl;
        sl |= 4;
        try {
          ld(l, t.alternate, t);
        } finally {
          sl = u, O.p = e, S.T = a;
        }
      }
      Rl = 3;
    }
  }
  function Md() {
    if (Rl === 4 || Rl === 3) {
      Rl = 0, Rr();
      var l = Sa, t = Te, a = ta, e = md;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Rl = 5 : (Rl = 0, Te = Sa = null, Dd(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (u === 0 && (ba = null), In(a), t = t.stateNode, it && typeof it.onCommitFiberRoot == "function")
        try {
          it.onCommitFiberRoot(
            qe,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (e !== null) {
        t = S.T, u = O.p, O.p = 2, S.T = null;
        try {
          for (var n = l.onRecoverableError, i = 0; i < e.length; i++) {
            var c = e[i];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          S.T = t, O.p = u;
        }
      }
      (ta & 3) !== 0 && xn(), qt(l), u = l.pendingLanes, (a & 261930) !== 0 && (u & 42) !== 0 ? l === Cc ? gu++ : (gu = 0, Cc = l) : gu = 0, bu(0);
    }
  }
  function Dd(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Ie(t)));
  }
  function xn() {
    return Ad(), Od(), Md(), Nd();
  }
  function Nd() {
    if (Rl !== 5) return !1;
    var l = Sa, t = Uc;
    Uc = 0;
    var a = In(ta), e = S.T, u = O.p;
    try {
      O.p = 32 > a ? 32 : a, S.T = null, a = xc, xc = null;
      var n = Sa, i = ta;
      if (Rl = 0, Te = Sa = null, ta = 0, (sl & 6) !== 0) throw Error(r(331));
      var c = sl;
      if (sl |= 4, od(n.current), cd(
        n,
        n.current,
        i,
        a
      ), sl = c, bu(0, !1), it && typeof it.onPostCommitFiberRoot == "function")
        try {
          it.onPostCommitFiberRoot(qe, n);
        } catch {
        }
      return !0;
    } finally {
      O.p = u, S.T = e, Dd(l, t);
    }
  }
  function Ud(l, t, a) {
    t = pt(a, t), t = oc(l.stateNode, t, 2), l = ra(l, t, 2), l !== null && (Ye(l, 2), qt(l));
  }
  function dl(l, t, a) {
    if (l.tag === 3)
      Ud(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ud(
            t,
            l,
            a
          );
          break;
        } else if (t.tag === 1) {
          var e = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof e.componentDidCatch == "function" && (ba === null || !ba.has(e))) {
            l = pt(a, l), a = xo(2), e = ra(t, a, 2), e !== null && (Co(
              a,
              e,
              t,
              l
            ), Ye(e, 2), qt(e));
            break;
          }
        }
        t = t.return;
      }
  }
  function jc(l, t, a) {
    var e = l.pingCache;
    if (e === null) {
      e = l.pingCache = new i0();
      var u = /* @__PURE__ */ new Set();
      e.set(t, u);
    } else
      u = e.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), e.set(t, u));
    u.has(a) || (Mc = !0, u.add(a), l = d0.bind(null, l, t, a), t.then(l, l));
  }
  function d0(l, t, a) {
    var e = l.pingCache;
    e !== null && e.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, vl === l && (ll & a) === a && (Tl === 4 || Tl === 3 && (ll & 62914560) === ll && 300 > nt() - An ? (sl & 2) === 0 && Ae(l, 0) : Dc |= a, Ee === ll && (Ee = 0)), qt(l);
  }
  function xd(l, t) {
    t === 0 && (t = Tf()), l = Ha(l, t), l !== null && (Ye(l, t), qt(l));
  }
  function r0(l) {
    var t = l.memoizedState, a = 0;
    t !== null && (a = t.retryLane), xd(l, a);
  }
  function m0(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var e = l.stateNode, u = l.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        e = l.stateNode;
        break;
      case 22:
        e = l.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    e !== null && e.delete(t), xd(l, a);
  }
  function h0(l, t) {
    return ut(l, t);
  }
  var Cn = null, Me = null, qc = !1, Hn = !1, Bc = !1, _a = 0;
  function qt(l) {
    l !== Me && l.next === null && (Me === null ? Cn = Me = l : Me = Me.next = l), Hn = !0, qc || (qc = !0, v0());
  }
  function bu(l, t) {
    if (!Bc && Hn) {
      Bc = !0;
      do
        for (var a = !1, e = Cn; e !== null; ) {
          if (l !== 0) {
            var u = e.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = e.suspendedLanes, c = e.pingedLanes;
              n = (1 << 31 - ct(42 | l) + 1) - 1, n &= u & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (a = !0, jd(e, n));
          } else
            n = ll, n = qu(
              e,
              e === vl ? n : 0,
              e.cancelPendingCommit !== null || e.timeoutHandle !== -1
            ), (n & 3) === 0 || Be(e, n) || (a = !0, jd(e, n));
          e = e.next;
        }
      while (a);
      Bc = !1;
    }
  }
  function y0() {
    Cd();
  }
  function Cd() {
    Hn = qc = !1;
    var l = 0;
    _a !== 0 && O0() && (l = _a);
    for (var t = nt(), a = null, e = Cn; e !== null; ) {
      var u = e.next, n = Hd(e, t);
      n === 0 ? (e.next = null, a === null ? Cn = u : a.next = u, u === null && (Me = a)) : (a = e, (l !== 0 || (n & 3) !== 0) && (Hn = !0)), e = u;
    }
    Rl !== 0 && Rl !== 5 || bu(l), _a !== 0 && (_a = 0);
  }
  function Hd(l, t) {
    for (var a = l.suspendedLanes, e = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - ct(n), c = 1 << i, f = u[i];
      f === -1 ? ((c & a) === 0 || (c & e) !== 0) && (u[i] = Zr(c, t)) : f <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = vl, a = ll, a = qu(
      l,
      l === t ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), e = l.callbackNode, a === 0 || l === t && (ol === 2 || ol === 9) || l.cancelPendingCommit !== null)
      return e !== null && e !== null && wa(e), l.callbackNode = null, l.callbackPriority = 0;
    if ((a & 3) === 0 || Be(l, a)) {
      if (t = a & -a, t === l.callbackPriority) return t;
      switch (e !== null && wa(e), In(a)) {
        case 2:
        case 8:
          a = zf;
          break;
        case 32:
          a = Cu;
          break;
        case 268435456:
          a = Ef;
          break;
        default:
          a = Cu;
      }
      return e = Rd.bind(null, l), a = ut(a, e), l.callbackPriority = t, l.callbackNode = a, t;
    }
    return e !== null && e !== null && wa(e), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Rd(l, t) {
    if (Rl !== 0 && Rl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var a = l.callbackNode;
    if (xn() && l.callbackNode !== a)
      return null;
    var e = ll;
    return e = qu(
      l,
      l === vl ? e : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), e === 0 ? null : (yd(l, e, t), Hd(l, nt()), l.callbackNode != null && l.callbackNode === a ? Rd.bind(null, l) : null);
  }
  function jd(l, t) {
    if (xn()) return null;
    yd(l, t, !0);
  }
  function v0() {
    D0(function() {
      (sl & 6) !== 0 ? ut(
        _f,
        y0
      ) : Cd();
    });
  }
  function Yc() {
    if (_a === 0) {
      var l = re;
      l === 0 && (l = Hu, Hu <<= 1, (Hu & 261888) === 0 && (Hu = 256)), _a = l;
    }
    return _a;
  }
  function qd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Qu("" + l);
  }
  function Bd(l, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
  }
  function g0(l, t, a, e, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var n = qd(
        (u[Fl] || null).action
      ), i = e.submitter;
      i && (t = (t = i[Fl] || null) ? qd(t.formAction) : i.getAttribute("formAction"), t !== null && (n = t, i = null));
      var c = new Lu(
        "action",
        "action",
        null,
        e,
        u
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (e.defaultPrevented) {
                if (_a !== 0) {
                  var f = i ? Bd(u, i) : new FormData(u);
                  uc(
                    a,
                    {
                      pending: !0,
                      data: f,
                      method: u.method,
                      action: n
                    },
                    null,
                    f
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), f = i ? Bd(u, i) : new FormData(u), uc(
                  a,
                  {
                    pending: !0,
                    data: f,
                    method: u.method,
                    action: n
                  },
                  n,
                  f
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var Gc = 0; Gc < _i.length; Gc++) {
    var Qc = _i[Gc], b0 = Qc.toLowerCase(), S0 = Qc[0].toUpperCase() + Qc.slice(1);
    Mt(
      b0,
      "on" + S0
    );
  }
  Mt(ms, "onAnimationEnd"), Mt(hs, "onAnimationIteration"), Mt(ys, "onAnimationStart"), Mt("dblclick", "onDoubleClick"), Mt("focusin", "onFocus"), Mt("focusout", "onBlur"), Mt(jm, "onTransitionRun"), Mt(qm, "onTransitionStart"), Mt(Bm, "onTransitionCancel"), Mt(vs, "onTransitionEnd"), Ia("onMouseEnter", ["mouseout", "mouseover"]), Ia("onMouseLeave", ["mouseout", "mouseover"]), Ia("onPointerEnter", ["pointerout", "pointerover"]), Ia("onPointerLeave", ["pointerout", "pointerover"]), Na(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Na(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Na("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Na(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Na(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Na(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Su = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), p0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Su)
  );
  function Yd(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var e = l[a], u = e.event;
      e = e.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = e.length - 1; 0 <= i; i--) {
            var c = e[i], f = c.instance, y = c.currentTarget;
            if (c = c.listener, f !== n && u.isPropagationStopped())
              break l;
            n = c, u.currentTarget = y;
            try {
              n(u);
            } catch (p) {
              wu(p);
            }
            u.currentTarget = null, n = f;
          }
        else
          for (i = 0; i < e.length; i++) {
            if (c = e[i], f = c.instance, y = c.currentTarget, c = c.listener, f !== n && u.isPropagationStopped())
              break l;
            n = c, u.currentTarget = y;
            try {
              n(u);
            } catch (p) {
              wu(p);
            }
            u.currentTarget = null, n = f;
          }
      }
    }
  }
  function P(l, t) {
    var a = t[Pn];
    a === void 0 && (a = t[Pn] = /* @__PURE__ */ new Set());
    var e = l + "__bubble";
    a.has(e) || (Gd(t, l, 2, !1), a.add(e));
  }
  function Xc(l, t, a) {
    var e = 0;
    t && (e |= 4), Gd(
      a,
      l,
      e,
      t
    );
  }
  var Rn = "_reactListening" + Math.random().toString(36).slice(2);
  function Zc(l) {
    if (!l[Rn]) {
      l[Rn] = !0, xf.forEach(function(a) {
        a !== "selectionchange" && (p0.has(a) || Xc(a, !1, l), Xc(a, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Rn] || (t[Rn] = !0, Xc("selectionchange", !1, t));
    }
  }
  function Gd(l, t, a, e) {
    switch (hr(t)) {
      case 2:
        var u = W0;
        break;
      case 8:
        u = $0;
        break;
      default:
        u = ef;
    }
    a = u.bind(
      null,
      t,
      a,
      l
    ), u = void 0, !fi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), e ? u !== void 0 ? l.addEventListener(t, a, {
      capture: !0,
      passive: u
    }) : l.addEventListener(t, a, !0) : u !== void 0 ? l.addEventListener(t, a, {
      passive: u
    }) : l.addEventListener(t, a, !1);
  }
  function Vc(l, t, a, e, u) {
    var n = e;
    if ((t & 1) === 0 && (t & 2) === 0 && e !== null)
      l: for (; ; ) {
        if (e === null) return;
        var i = e.tag;
        if (i === 3 || i === 4) {
          var c = e.stateNode.containerInfo;
          if (c === u) break;
          if (i === 4)
            for (i = e.return; i !== null; ) {
              var f = i.tag;
              if ((f === 3 || f === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (i = $a(c), i === null) return;
            if (f = i.tag, f === 5 || f === 6 || f === 26 || f === 27) {
              e = n = i;
              continue l;
            }
            c = c.parentNode;
          }
        }
        e = e.return;
      }
    Vf(function() {
      var y = n, p = ii(a), E = [];
      l: {
        var v = gs.get(l);
        if (v !== void 0) {
          var g = Lu, x = l;
          switch (l) {
            case "keypress":
              if (Zu(a) === 0) break l;
            case "keydown":
            case "keyup":
              g = mm;
              break;
            case "focusin":
              x = "focus", g = ri;
              break;
            case "focusout":
              x = "blur", g = ri;
              break;
            case "beforeblur":
            case "afterblur":
              g = ri;
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
              g = Jf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = tm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = vm;
              break;
            case ms:
            case hs:
            case ys:
              g = um;
              break;
            case vs:
              g = bm;
              break;
            case "scroll":
            case "scrollend":
              g = Pr;
              break;
            case "wheel":
              g = pm;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = im;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Wf;
              break;
            case "toggle":
            case "beforetoggle":
              g = zm;
          }
          var B = (t & 4) !== 0, hl = !B && (l === "scroll" || l === "scrollend"), d = B ? v !== null ? v + "Capture" : null : v;
          B = [];
          for (var s = y, h; s !== null; ) {
            var _ = s;
            if (h = _.stateNode, _ = _.tag, _ !== 5 && _ !== 26 && _ !== 27 || h === null || d === null || (_ = Xe(s, d), _ != null && B.push(
              pu(s, _, h)
            )), hl) break;
            s = s.return;
          }
          0 < B.length && (v = new g(
            v,
            x,
            null,
            a,
            p
          ), E.push({ event: v, listeners: B }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (v = l === "mouseover" || l === "pointerover", g = l === "mouseout" || l === "pointerout", v && a !== ni && (x = a.relatedTarget || a.fromElement) && ($a(x) || x[Wa]))
            break l;
          if ((g || v) && (v = p.window === p ? p : (v = p.ownerDocument) ? v.defaultView || v.parentWindow : window, g ? (x = a.relatedTarget || a.toElement, g = y, x = x ? $a(x) : null, x !== null && (hl = Q(x), B = x.tag, x !== hl || B !== 5 && B !== 27 && B !== 6) && (x = null)) : (g = null, x = y), g !== x)) {
            if (B = Jf, _ = "onMouseLeave", d = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (B = Wf, _ = "onPointerLeave", d = "onPointerEnter", s = "pointer"), hl = g == null ? v : Qe(g), h = x == null ? v : Qe(x), v = new B(
              _,
              s + "leave",
              g,
              a,
              p
            ), v.target = hl, v.relatedTarget = h, _ = null, $a(p) === y && (B = new B(
              d,
              s + "enter",
              x,
              a,
              p
            ), B.target = h, B.relatedTarget = hl, _ = B), hl = _, g && x)
              t: {
                for (B = _0, d = g, s = x, h = 0, _ = d; _; _ = B(_))
                  h++;
                _ = 0;
                for (var j = s; j; j = B(j))
                  _++;
                for (; 0 < h - _; )
                  d = B(d), h--;
                for (; 0 < _ - h; )
                  s = B(s), _--;
                for (; h--; ) {
                  if (d === s || s !== null && d === s.alternate) {
                    B = d;
                    break t;
                  }
                  d = B(d), s = B(s);
                }
                B = null;
              }
            else B = null;
            g !== null && Qd(
              E,
              v,
              g,
              B,
              !1
            ), x !== null && hl !== null && Qd(
              E,
              hl,
              x,
              B,
              !0
            );
          }
        }
        l: {
          if (v = y ? Qe(y) : window, g = v.nodeName && v.nodeName.toLowerCase(), g === "select" || g === "input" && v.type === "file")
            var cl = as;
          else if (ls(v))
            if (es)
              cl = Cm;
            else {
              cl = Um;
              var H = Nm;
            }
          else
            g = v.nodeName, !g || g.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? y && ui(y.elementType) && (cl = as) : cl = xm;
          if (cl && (cl = cl(l, y))) {
            ts(
              E,
              cl,
              a,
              p
            );
            break l;
          }
          H && H(l, v, y), l === "focusout" && y && v.type === "number" && y.memoizedProps.value != null && ei(v, "number", v.value);
        }
        switch (H = y ? Qe(y) : window, l) {
          case "focusin":
            (ls(H) || H.contentEditable === "true") && (ue = H, bi = y, $e = null);
            break;
          case "focusout":
            $e = bi = ue = null;
            break;
          case "mousedown":
            Si = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Si = !1, ds(E, a, p);
            break;
          case "selectionchange":
            if (Rm) break;
          case "keydown":
          case "keyup":
            ds(E, a, p);
        }
        var $;
        if (hi)
          l: {
            switch (l) {
              case "compositionstart":
                var tl = "onCompositionStart";
                break l;
              case "compositionend":
                tl = "onCompositionEnd";
                break l;
              case "compositionupdate":
                tl = "onCompositionUpdate";
                break l;
            }
            tl = void 0;
          }
        else
          ee ? If(l, a) && (tl = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (tl = "onCompositionStart");
        tl && ($f && a.locale !== "ko" && (ee || tl !== "onCompositionStart" ? tl === "onCompositionEnd" && ee && ($ = Lf()) : (na = p, si = "value" in na ? na.value : na.textContent, ee = !0)), H = jn(y, tl), 0 < H.length && (tl = new wf(
          tl,
          l,
          null,
          a,
          p
        ), E.push({ event: tl, listeners: H }), $ ? tl.data = $ : ($ = Pf(a), $ !== null && (tl.data = $)))), ($ = Tm ? Am(l, a) : Om(l, a)) && (tl = jn(y, "onBeforeInput"), 0 < tl.length && (H = new wf(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          p
        ), E.push({
          event: H,
          listeners: tl
        }), H.data = $)), g0(
          E,
          l,
          y,
          a,
          p
        );
      }
      Yd(E, t);
    });
  }
  function pu(l, t, a) {
    return {
      instance: l,
      listener: t,
      currentTarget: a
    };
  }
  function jn(l, t) {
    for (var a = t + "Capture", e = []; l !== null; ) {
      var u = l, n = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = Xe(l, a), u != null && e.unshift(
        pu(l, u, n)
      ), u = Xe(l, t), u != null && e.push(
        pu(l, u, n)
      )), l.tag === 3) return e;
      l = l.return;
    }
    return [];
  }
  function _0(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Qd(l, t, a, e, u) {
    for (var n = t._reactName, i = []; a !== null && a !== e; ) {
      var c = a, f = c.alternate, y = c.stateNode;
      if (c = c.tag, f !== null && f === e) break;
      c !== 5 && c !== 26 && c !== 27 || y === null || (f = y, u ? (y = Xe(a, n), y != null && i.unshift(
        pu(a, y, f)
      )) : u || (y = Xe(a, n), y != null && i.push(
        pu(a, y, f)
      ))), a = a.return;
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var z0 = /\r\n?/g, E0 = /\u0000|\uFFFD/g;
  function Xd(l) {
    return (typeof l == "string" ? l : "" + l).replace(z0, `
`).replace(E0, "");
  }
  function Zd(l, t) {
    return t = Xd(t), Xd(l) === t;
  }
  function ml(l, t, a, e, u, n) {
    switch (a) {
      case "children":
        typeof e == "string" ? t === "body" || t === "textarea" && e === "" || le(l, e) : (typeof e == "number" || typeof e == "bigint") && t !== "body" && le(l, "" + e);
        break;
      case "className":
        Yu(l, "class", e);
        break;
      case "tabIndex":
        Yu(l, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Yu(l, a, e);
        break;
      case "style":
        Xf(l, e, n);
        break;
      case "data":
        if (t !== "object") {
          Yu(l, "data", e);
          break;
        }
      case "src":
      case "href":
        if (e === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (e == null || typeof e == "function" || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        e = Qu("" + e), l.setAttribute(a, e);
        break;
      case "action":
      case "formAction":
        if (typeof e == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (a === "formAction" ? (t !== "input" && ml(l, t, "name", u.name, u, null), ml(
            l,
            t,
            "formEncType",
            u.formEncType,
            u,
            null
          ), ml(
            l,
            t,
            "formMethod",
            u.formMethod,
            u,
            null
          ), ml(
            l,
            t,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (ml(l, t, "encType", u.encType, u, null), ml(l, t, "method", u.method, u, null), ml(l, t, "target", u.target, u, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        e = Qu("" + e), l.setAttribute(a, e);
        break;
      case "onClick":
        e != null && (l.onclick = Qt);
        break;
      case "onScroll":
        e != null && P("scroll", l);
        break;
      case "onScrollEnd":
        e != null && P("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e))
            throw Error(r(61));
          if (a = e.__html, a != null) {
            if (u.children != null) throw Error(r(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "muted":
        l.muted = e && typeof e != "function" && typeof e != "symbol";
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
        if (e == null || typeof e == "function" || typeof e == "boolean" || typeof e == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        a = Qu("" + e), l.setAttributeNS(
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
        e != null && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, "" + e) : l.removeAttribute(a);
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
        e && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        e === !0 ? l.setAttribute(a, "") : e !== !1 && e != null && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, e) : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        e != null && typeof e != "function" && typeof e != "symbol" && !isNaN(e) && 1 <= e ? l.setAttribute(a, e) : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e) ? l.removeAttribute(a) : l.setAttribute(a, e);
        break;
      case "popover":
        P("beforetoggle", l), P("toggle", l), Bu(l, "popover", e);
        break;
      case "xlinkActuate":
        Gt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          e
        );
        break;
      case "xlinkArcrole":
        Gt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          e
        );
        break;
      case "xlinkRole":
        Gt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          e
        );
        break;
      case "xlinkShow":
        Gt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          e
        );
        break;
      case "xlinkTitle":
        Gt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          e
        );
        break;
      case "xlinkType":
        Gt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          e
        );
        break;
      case "xmlBase":
        Gt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          e
        );
        break;
      case "xmlLang":
        Gt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          e
        );
        break;
      case "xmlSpace":
        Gt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          e
        );
        break;
      case "is":
        Bu(l, "is", e);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Fr.get(a) || a, Bu(l, a, e));
    }
  }
  function Lc(l, t, a, e, u, n) {
    switch (a) {
      case "style":
        Xf(l, e, n);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e))
            throw Error(r(61));
          if (a = e.__html, a != null) {
            if (u.children != null) throw Error(r(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof e == "string" ? le(l, e) : (typeof e == "number" || typeof e == "bigint") && le(l, "" + e);
        break;
      case "onScroll":
        e != null && P("scroll", l);
        break;
      case "onScrollEnd":
        e != null && P("scrollend", l);
        break;
      case "onClick":
        e != null && (l.onclick = Qt);
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
        if (!Cf.hasOwnProperty(a))
          l: {
            if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"), t = a.slice(2, u ? a.length - 7 : void 0), n = l[Fl] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, u), typeof e == "function")) {
              typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, e, u);
              break l;
            }
            a in l ? l[a] = e : e === !0 ? l.setAttribute(a, "") : Bu(l, a, e);
          }
    }
  }
  function Vl(l, t, a) {
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
        P("error", l), P("load", l);
        var e = !1, u = !1, n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var i = a[n];
            if (i != null)
              switch (n) {
                case "src":
                  e = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  ml(l, t, n, i, a, null);
              }
          }
        u && ml(l, t, "srcSet", a.srcSet, a, null), e && ml(l, t, "src", a.src, a, null);
        return;
      case "input":
        P("invalid", l);
        var c = n = i = u = null, f = null, y = null;
        for (e in a)
          if (a.hasOwnProperty(e)) {
            var p = a[e];
            if (p != null)
              switch (e) {
                case "name":
                  u = p;
                  break;
                case "type":
                  i = p;
                  break;
                case "checked":
                  f = p;
                  break;
                case "defaultChecked":
                  y = p;
                  break;
                case "value":
                  n = p;
                  break;
                case "defaultValue":
                  c = p;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (p != null)
                    throw Error(r(137, t));
                  break;
                default:
                  ml(l, t, e, p, a, null);
              }
          }
        Bf(
          l,
          n,
          c,
          f,
          y,
          i,
          u,
          !1
        );
        return;
      case "select":
        P("invalid", l), e = i = n = null;
        for (u in a)
          if (a.hasOwnProperty(u) && (c = a[u], c != null))
            switch (u) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                e = c;
              default:
                ml(l, t, u, c, a, null);
            }
        t = n, a = i, l.multiple = !!e, t != null ? Pa(l, !!e, t, !1) : a != null && Pa(l, !!e, a, !0);
        return;
      case "textarea":
        P("invalid", l), n = u = e = null;
        for (i in a)
          if (a.hasOwnProperty(i) && (c = a[i], c != null))
            switch (i) {
              case "value":
                e = c;
                break;
              case "defaultValue":
                u = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(r(91));
                break;
              default:
                ml(l, t, i, c, a, null);
            }
        Gf(l, e, u, n);
        return;
      case "option":
        for (f in a)
          if (a.hasOwnProperty(f) && (e = a[f], e != null))
            switch (f) {
              case "selected":
                l.selected = e && typeof e != "function" && typeof e != "symbol";
                break;
              default:
                ml(l, t, f, e, a, null);
            }
        return;
      case "dialog":
        P("beforetoggle", l), P("toggle", l), P("cancel", l), P("close", l);
        break;
      case "iframe":
      case "object":
        P("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < Su.length; e++)
          P(Su[e], l);
        break;
      case "image":
        P("error", l), P("load", l);
        break;
      case "details":
        P("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        P("error", l), P("load", l);
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
        for (y in a)
          if (a.hasOwnProperty(y) && (e = a[y], e != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                ml(l, t, y, e, a, null);
            }
        return;
      default:
        if (ui(t)) {
          for (p in a)
            a.hasOwnProperty(p) && (e = a[p], e !== void 0 && Lc(
              l,
              t,
              p,
              e,
              a,
              void 0
            ));
          return;
        }
    }
    for (c in a)
      a.hasOwnProperty(c) && (e = a[c], e != null && ml(l, t, c, e, a, null));
  }
  function T0(l, t, a, e) {
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
        var u = null, n = null, i = null, c = null, f = null, y = null, p = null;
        for (g in a) {
          var E = a[g];
          if (a.hasOwnProperty(g) && E != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = E;
              default:
                e.hasOwnProperty(g) || ml(l, t, g, null, e, E);
            }
        }
        for (var v in e) {
          var g = e[v];
          if (E = a[v], e.hasOwnProperty(v) && (g != null || E != null))
            switch (v) {
              case "type":
                n = g;
                break;
              case "name":
                u = g;
                break;
              case "checked":
                y = g;
                break;
              case "defaultChecked":
                p = g;
                break;
              case "value":
                i = g;
                break;
              case "defaultValue":
                c = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null)
                  throw Error(r(137, t));
                break;
              default:
                g !== E && ml(
                  l,
                  t,
                  v,
                  g,
                  e,
                  E
                );
            }
        }
        ai(
          l,
          i,
          c,
          f,
          y,
          p,
          n,
          u
        );
        return;
      case "select":
        g = i = c = v = null;
        for (n in a)
          if (f = a[n], a.hasOwnProperty(n) && f != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = f;
              default:
                e.hasOwnProperty(n) || ml(
                  l,
                  t,
                  n,
                  null,
                  e,
                  f
                );
            }
        for (u in e)
          if (n = e[u], f = a[u], e.hasOwnProperty(u) && (n != null || f != null))
            switch (u) {
              case "value":
                v = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== f && ml(
                  l,
                  t,
                  u,
                  n,
                  e,
                  f
                );
            }
        t = c, a = i, e = g, v != null ? Pa(l, !!a, v, !1) : !!e != !!a && (t != null ? Pa(l, !!a, t, !0) : Pa(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        g = v = null;
        for (c in a)
          if (u = a[c], a.hasOwnProperty(c) && u != null && !e.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                ml(l, t, c, null, e, u);
            }
        for (i in e)
          if (u = e[i], n = a[i], e.hasOwnProperty(i) && (u != null || n != null))
            switch (i) {
              case "value":
                v = u;
                break;
              case "defaultValue":
                g = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== n && ml(l, t, i, u, e, n);
            }
        Yf(l, v, g);
        return;
      case "option":
        for (var x in a)
          if (v = a[x], a.hasOwnProperty(x) && v != null && !e.hasOwnProperty(x))
            switch (x) {
              case "selected":
                l.selected = !1;
                break;
              default:
                ml(
                  l,
                  t,
                  x,
                  null,
                  e,
                  v
                );
            }
        for (f in e)
          if (v = e[f], g = a[f], e.hasOwnProperty(f) && v !== g && (v != null || g != null))
            switch (f) {
              case "selected":
                l.selected = v && typeof v != "function" && typeof v != "symbol";
                break;
              default:
                ml(
                  l,
                  t,
                  f,
                  v,
                  e,
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
        for (var B in a)
          v = a[B], a.hasOwnProperty(B) && v != null && !e.hasOwnProperty(B) && ml(l, t, B, null, e, v);
        for (y in e)
          if (v = e[y], g = a[y], e.hasOwnProperty(y) && v !== g && (v != null || g != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null)
                  throw Error(r(137, t));
                break;
              default:
                ml(
                  l,
                  t,
                  y,
                  v,
                  e,
                  g
                );
            }
        return;
      default:
        if (ui(t)) {
          for (var hl in a)
            v = a[hl], a.hasOwnProperty(hl) && v !== void 0 && !e.hasOwnProperty(hl) && Lc(
              l,
              t,
              hl,
              void 0,
              e,
              v
            );
          for (p in e)
            v = e[p], g = a[p], !e.hasOwnProperty(p) || v === g || v === void 0 && g === void 0 || Lc(
              l,
              t,
              p,
              v,
              e,
              g
            );
          return;
        }
    }
    for (var d in a)
      v = a[d], a.hasOwnProperty(d) && v != null && !e.hasOwnProperty(d) && ml(l, t, d, null, e, v);
    for (E in e)
      v = e[E], g = a[E], !e.hasOwnProperty(E) || v === g || v == null && g == null || ml(l, t, E, v, e, g);
  }
  function Vd(l) {
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
  function A0() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, a = performance.getEntriesByType("resource"), e = 0; e < a.length; e++) {
        var u = a[e], n = u.transferSize, i = u.initiatorType, c = u.duration;
        if (n && c && Vd(i)) {
          for (i = 0, c = u.responseEnd, e += 1; e < a.length; e++) {
            var f = a[e], y = f.startTime;
            if (y > c) break;
            var p = f.transferSize, E = f.initiatorType;
            p && Vd(E) && (f = f.responseEnd, i += p * (f < c ? 1 : (c - y) / (f - y)));
          }
          if (--e, t += 8 * (n + i) / (u.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Kc = null, Jc = null;
  function qn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Ld(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Kd(l, t) {
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
  function wc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Wc = null;
  function O0() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Wc ? !1 : (Wc = l, !0) : (Wc = null, !1);
  }
  var Jd = typeof setTimeout == "function" ? setTimeout : void 0, M0 = typeof clearTimeout == "function" ? clearTimeout : void 0, wd = typeof Promise == "function" ? Promise : void 0, D0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof wd < "u" ? function(l) {
    return wd.resolve(null).then(l).catch(N0);
  } : Jd;
  function N0(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function za(l) {
    return l === "head";
  }
  function Wd(l, t) {
    var a = t, e = 0;
    do {
      var u = a.nextSibling;
      if (l.removeChild(a), u && u.nodeType === 8)
        if (a = u.data, a === "/$" || a === "/&") {
          if (e === 0) {
            l.removeChild(u), xe(t);
            return;
          }
          e--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          e++;
        else if (a === "html")
          _u(l.ownerDocument.documentElement);
        else if (a === "head") {
          a = l.ownerDocument.head, _u(a);
          for (var n = a.firstChild; n; ) {
            var i = n.nextSibling, c = n.nodeName;
            n[Ge] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || a.removeChild(n), n = i;
          }
        } else
          a === "body" && _u(l.ownerDocument.body);
      a = u;
    } while (a);
    xe(t);
  }
  function $d(l, t) {
    var a = l;
    l = 0;
    do {
      var e = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), e && e.nodeType === 8)
        if (a = e.data, a === "/$") {
          if (l === 0) break;
          l--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || l++;
      a = e;
    } while (a);
  }
  function $c(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          $c(a), li(a);
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
  function U0(l, t, a, e) {
    for (; l.nodeType === 1; ) {
      var u = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (e) {
        if (!l[Ge])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== u.rel || l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || l.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (u.src == null ? null : u.src) || l.getAttribute("type") !== (u.type == null ? null : u.type) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = At(l.nextSibling), l === null) break;
    }
    return null;
  }
  function x0(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = At(l.nextSibling), l === null)) return null;
    return l;
  }
  function kd(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = At(l.nextSibling), l === null)) return null;
    return l;
  }
  function kc(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Fc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function C0(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading")
      t();
    else {
      var e = function() {
        t(), a.removeEventListener("DOMContentLoaded", e);
      };
      a.addEventListener("DOMContentLoaded", e), l._reactRetry = e;
    }
  }
  function At(l) {
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
  var Ic = null;
  function Fd(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return At(l.nextSibling);
          t--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Id(l) {
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
  function Pd(l, t, a) {
    switch (t = qn(a), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(r(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(r(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(r(454));
        return l;
      default:
        throw Error(r(451));
    }
  }
  function _u(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    li(l);
  }
  var Ot = /* @__PURE__ */ new Map(), lr = /* @__PURE__ */ new Set();
  function Bn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var aa = O.d;
  O.d = {
    f: H0,
    r: R0,
    D: j0,
    C: q0,
    L: B0,
    m: Y0,
    X: Q0,
    S: G0,
    M: X0
  };
  function H0() {
    var l = aa.f(), t = Dn();
    return l || t;
  }
  function R0(l) {
    var t = ka(l);
    t !== null && t.tag === 5 && t.type === "form" ? go(t) : aa.r(l);
  }
  var De = typeof document > "u" ? null : document;
  function tr(l, t, a) {
    var e = De;
    if (e && typeof t == "string" && t) {
      var u = bt(t);
      u = 'link[rel="' + l + '"][href="' + u + '"]', typeof a == "string" && (u += '[crossorigin="' + a + '"]'), lr.has(u) || (lr.add(u), l = { rel: l, crossOrigin: a, href: t }, e.querySelector(u) === null && (t = e.createElement("link"), Vl(t, "link", l), Bl(t), e.head.appendChild(t)));
    }
  }
  function j0(l) {
    aa.D(l), tr("dns-prefetch", l, null);
  }
  function q0(l, t) {
    aa.C(l, t), tr("preconnect", l, t);
  }
  function B0(l, t, a) {
    aa.L(l, t, a);
    var e = De;
    if (e && l && t) {
      var u = 'link[rel="preload"][as="' + bt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (u += '[imagesrcset="' + bt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (u += '[imagesizes="' + bt(
        a.imageSizes
      ) + '"]')) : u += '[href="' + bt(l) + '"]';
      var n = u;
      switch (t) {
        case "style":
          n = Ne(l);
          break;
        case "script":
          n = Ue(l);
      }
      Ot.has(n) || (l = C(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : l,
          as: t
        },
        a
      ), Ot.set(n, l), e.querySelector(u) !== null || t === "style" && e.querySelector(zu(n)) || t === "script" && e.querySelector(Eu(n)) || (t = e.createElement("link"), Vl(t, "link", l), Bl(t), e.head.appendChild(t)));
    }
  }
  function Y0(l, t) {
    aa.m(l, t);
    var a = De;
    if (a && l) {
      var e = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + bt(e) + '"][href="' + bt(l) + '"]', n = u;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ue(l);
      }
      if (!Ot.has(n) && (l = C({ rel: "modulepreload", href: l }, t), Ot.set(n, l), a.querySelector(u) === null)) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Eu(n)))
              return;
        }
        e = a.createElement("link"), Vl(e, "link", l), Bl(e), a.head.appendChild(e);
      }
    }
  }
  function G0(l, t, a) {
    aa.S(l, t, a);
    var e = De;
    if (e && l) {
      var u = Fa(e).hoistableStyles, n = Ne(l);
      t = t || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = e.querySelector(
          zu(n)
        ))
          c.loading = 5;
        else {
          l = C(
            { rel: "stylesheet", href: l, "data-precedence": t },
            a
          ), (a = Ot.get(n)) && Pc(l, a);
          var f = i = e.createElement("link");
          Bl(f), Vl(f, "link", l), f._p = new Promise(function(y, p) {
            f.onload = y, f.onerror = p;
          }), f.addEventListener("load", function() {
            c.loading |= 1;
          }), f.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Yn(i, t, e);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: c
        }, u.set(n, i);
      }
    }
  }
  function Q0(l, t) {
    aa.X(l, t);
    var a = De;
    if (a && l) {
      var e = Fa(a).hoistableScripts, u = Ue(l), n = e.get(u);
      n || (n = a.querySelector(Eu(u)), n || (l = C({ src: l, async: !0 }, t), (t = Ot.get(u)) && lf(l, t), n = a.createElement("script"), Bl(n), Vl(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, e.set(u, n));
    }
  }
  function X0(l, t) {
    aa.M(l, t);
    var a = De;
    if (a && l) {
      var e = Fa(a).hoistableScripts, u = Ue(l), n = e.get(u);
      n || (n = a.querySelector(Eu(u)), n || (l = C({ src: l, async: !0, type: "module" }, t), (t = Ot.get(u)) && lf(l, t), n = a.createElement("script"), Bl(n), Vl(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, e.set(u, n));
    }
  }
  function ar(l, t, a, e) {
    var u = (u = K.current) ? Bn(u) : null;
    if (!u) throw Error(r(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Ne(a.href), a = Fa(
          u
        ).hoistableStyles, e = a.get(t), e || (e = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, e)), e) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          l = Ne(a.href);
          var n = Fa(
            u
          ).hoistableStyles, i = n.get(l);
          if (i || (u = u.ownerDocument || u, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, i), (n = u.querySelector(
            zu(l)
          )) && !n._p && (i.instance = n, i.state.loading = 5), Ot.has(l) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Ot.set(l, a), n || Z0(
            u,
            l,
            a,
            i.state
          ))), t && e === null)
            throw Error(r(528, ""));
          return i;
        }
        if (t && e !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ue(a), a = Fa(
          u
        ).hoistableScripts, e = a.get(t), e || (e = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, e)), e) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, l));
    }
  }
  function Ne(l) {
    return 'href="' + bt(l) + '"';
  }
  function zu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function er(l) {
    return C({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Z0(l, t, a, e) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? e.loading = 1 : (t = l.createElement("link"), e.preload = t, t.addEventListener("load", function() {
      return e.loading |= 1;
    }), t.addEventListener("error", function() {
      return e.loading |= 2;
    }), Vl(t, "link", a), Bl(t), l.head.appendChild(t));
  }
  function Ue(l) {
    return '[src="' + bt(l) + '"]';
  }
  function Eu(l) {
    return "script[async]" + l;
  }
  function ur(l, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var e = l.querySelector(
            'style[data-href~="' + bt(a.href) + '"]'
          );
          if (e)
            return t.instance = e, Bl(e), e;
          var u = C({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return e = (l.ownerDocument || l).createElement(
            "style"
          ), Bl(e), Vl(e, "style", u), Yn(e, a.precedence, l), t.instance = e;
        case "stylesheet":
          u = Ne(a.href);
          var n = l.querySelector(
            zu(u)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Bl(n), n;
          e = er(a), (u = Ot.get(u)) && Pc(e, u), n = (l.ownerDocument || l).createElement("link"), Bl(n);
          var i = n;
          return i._p = new Promise(function(c, f) {
            i.onload = c, i.onerror = f;
          }), Vl(n, "link", e), t.state.loading |= 4, Yn(n, a.precedence, l), t.instance = n;
        case "script":
          return n = Ue(a.src), (u = l.querySelector(
            Eu(n)
          )) ? (t.instance = u, Bl(u), u) : (e = a, (u = Ot.get(n)) && (e = C({}, a), lf(e, u)), l = l.ownerDocument || l, u = l.createElement("script"), Bl(u), Vl(u, "link", e), l.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (e = t.instance, t.state.loading |= 4, Yn(e, a.precedence, l));
    return t.instance;
  }
  function Yn(l, t, a) {
    for (var e = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = e.length ? e[e.length - 1] : null, n = u, i = 0; i < e.length; i++) {
      var c = e[i];
      if (c.dataset.precedence === t) n = c;
      else if (n !== u) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
  }
  function Pc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function lf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Gn = null;
  function nr(l, t, a) {
    if (Gn === null) {
      var e = /* @__PURE__ */ new Map(), u = Gn = /* @__PURE__ */ new Map();
      u.set(a, e);
    } else
      u = Gn, e = u.get(a), e || (e = /* @__PURE__ */ new Map(), u.set(a, e));
    if (e.has(l)) return e;
    for (e.set(l, null), a = a.getElementsByTagName(l), u = 0; u < a.length; u++) {
      var n = a[u];
      if (!(n[Ge] || n[Gl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var c = e.get(i);
        c ? c.push(n) : e.set(i, [n]);
      }
    }
    return e;
  }
  function ir(l, t, a) {
    l = l.ownerDocument || l, l.head.insertBefore(
      a,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function V0(l, t, a) {
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
  function cr(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function L0(l, t, a, e) {
    if (a.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var u = Ne(e.href), n = t.querySelector(
          zu(u)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Qn.bind(l), t.then(l, l)), a.state.loading |= 4, a.instance = n, Bl(n);
          return;
        }
        n = t.ownerDocument || t, e = er(e), (u = Ot.get(u)) && Pc(e, u), n = n.createElement("link"), Bl(n);
        var i = n;
        i._p = new Promise(function(c, f) {
          i.onload = c, i.onerror = f;
        }), Vl(n, "link", e), a.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (l.count++, a = Qn.bind(l), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var tf = 0;
  function K0(l, t) {
    return l.stylesheets && l.count === 0 && Zn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(a) {
      var e = setTimeout(function() {
        if (l.stylesheets && Zn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && tf === 0 && (tf = 62500 * A0());
      var u = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Zn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > tf ? 50 : 800) + t
      );
      return l.unsuspend = a, function() {
        l.unsuspend = null, clearTimeout(e), clearTimeout(u);
      };
    } : null;
  }
  function Qn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Zn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Xn = null;
  function Zn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Xn = /* @__PURE__ */ new Map(), t.forEach(J0, l), Xn = null, Qn.call(l));
  }
  function J0(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Xn.get(l);
      if (a) var e = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Xn.set(l, a);
        for (var u = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < u.length; n++) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (a.set(i.dataset.precedence, i), e = i);
        }
        e && a.set(null, e);
      }
      u = t.instance, i = u.getAttribute("data-precedence"), n = a.get(i) || e, n === e && a.set(null, u), a.set(i, u), this.count++, e = Qn.bind(this), u.addEventListener("load", e), u.addEventListener("error", e), n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(u, l.firstChild)), t.state.loading |= 4;
    }
  }
  var Tu = {
    $$typeof: gl,
    Provider: null,
    Consumer: null,
    _currentValue: R,
    _currentValue2: R,
    _threadCount: 0
  };
  function w0(l, t, a, e, u, n, i, c, f) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = kn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = kn(0), this.hiddenUpdates = kn(null), this.identifierPrefix = e, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function fr(l, t, a, e, u, n, i, c, f, y, p, E) {
    return l = new w0(
      l,
      t,
      a,
      i,
      f,
      y,
      p,
      E,
      c
    ), t = 1, n === !0 && (t |= 24), n = st(3, null, null, t), l.current = n, n.stateNode = l, t = Ri(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: e,
      isDehydrated: a,
      cache: t
    }, Yi(n), l;
  }
  function sr(l) {
    return l ? (l = ce, l) : ce;
  }
  function or(l, t, a, e, u, n) {
    u = sr(u), e.context === null ? e.context = u : e.pendingContext = u, e = da(t), e.payload = { element: a }, n = n === void 0 ? null : n, n !== null && (e.callback = n), a = ra(l, e, t), a !== null && (et(a, l, t), au(a, l, t));
  }
  function dr(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function af(l, t) {
    dr(l, t), (l = l.alternate) && dr(l, t);
  }
  function rr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ha(l, 67108864);
      t !== null && et(t, l, 67108864), af(l, 67108864);
    }
  }
  function mr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ht();
      t = Fn(t);
      var a = Ha(l, t);
      a !== null && et(a, l, t), af(l, t);
    }
  }
  var Vn = !0;
  function W0(l, t, a, e) {
    var u = S.T;
    S.T = null;
    var n = O.p;
    try {
      O.p = 2, ef(l, t, a, e);
    } finally {
      O.p = n, S.T = u;
    }
  }
  function $0(l, t, a, e) {
    var u = S.T;
    S.T = null;
    var n = O.p;
    try {
      O.p = 8, ef(l, t, a, e);
    } finally {
      O.p = n, S.T = u;
    }
  }
  function ef(l, t, a, e) {
    if (Vn) {
      var u = uf(e);
      if (u === null)
        Vc(
          l,
          t,
          e,
          Ln,
          a
        ), yr(l, e);
      else if (F0(
        u,
        l,
        t,
        a,
        e
      ))
        e.stopPropagation();
      else if (yr(l, e), t & 4 && -1 < k0.indexOf(l)) {
        for (; u !== null; ) {
          var n = ka(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var i = Da(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var f = 1 << 31 - ct(i);
                      c.entanglements[1] |= f, i &= ~f;
                    }
                    qt(n), (sl & 6) === 0 && (On = nt() + 500, bu(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Ha(n, 2), c !== null && et(c, n, 2), Dn(), af(n, 2);
            }
          if (n = uf(e), n === null && Vc(
            l,
            t,
            e,
            Ln,
            a
          ), n === u) break;
          u = n;
        }
        u !== null && e.stopPropagation();
      } else
        Vc(
          l,
          t,
          e,
          null,
          a
        );
    }
  }
  function uf(l) {
    return l = ii(l), nf(l);
  }
  var Ln = null;
  function nf(l) {
    if (Ln = null, l = $a(l), l !== null) {
      var t = Q(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (l = V(t), l !== null) return l;
          l = null;
        } else if (a === 31) {
          if (l = X(t), l !== null) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Ln = l, null;
  }
  function hr(l) {
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
        switch (jr()) {
          case _f:
            return 2;
          case zf:
            return 8;
          case Cu:
          case qr:
            return 32;
          case Ef:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var cf = !1, Ea = null, Ta = null, Aa = null, Au = /* @__PURE__ */ new Map(), Ou = /* @__PURE__ */ new Map(), Oa = [], k0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function yr(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Ea = null;
        break;
      case "dragenter":
      case "dragleave":
        Ta = null;
        break;
      case "mouseover":
      case "mouseout":
        Aa = null;
        break;
      case "pointerover":
      case "pointerout":
        Au.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ou.delete(t.pointerId);
    }
  }
  function Mu(l, t, a, e, u, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: e,
      nativeEvent: n,
      targetContainers: [u]
    }, t !== null && (t = ka(t), t !== null && rr(t)), l) : (l.eventSystemFlags |= e, t = l.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), l);
  }
  function F0(l, t, a, e, u) {
    switch (t) {
      case "focusin":
        return Ea = Mu(
          Ea,
          l,
          t,
          a,
          e,
          u
        ), !0;
      case "dragenter":
        return Ta = Mu(
          Ta,
          l,
          t,
          a,
          e,
          u
        ), !0;
      case "mouseover":
        return Aa = Mu(
          Aa,
          l,
          t,
          a,
          e,
          u
        ), !0;
      case "pointerover":
        var n = u.pointerId;
        return Au.set(
          n,
          Mu(
            Au.get(n) || null,
            l,
            t,
            a,
            e,
            u
          )
        ), !0;
      case "gotpointercapture":
        return n = u.pointerId, Ou.set(
          n,
          Mu(
            Ou.get(n) || null,
            l,
            t,
            a,
            e,
            u
          )
        ), !0;
    }
    return !1;
  }
  function vr(l) {
    var t = $a(l.target);
    if (t !== null) {
      var a = Q(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = V(a), t !== null) {
            l.blockedOn = t, Nf(l.priority, function() {
              mr(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = X(a), t !== null) {
            l.blockedOn = t, Nf(l.priority, function() {
              mr(a);
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
  function Kn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = uf(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var e = new a.constructor(
          a.type,
          a
        );
        ni = e, a.target.dispatchEvent(e), ni = null;
      } else
        return t = ka(a), t !== null && rr(t), l.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function gr(l, t, a) {
    Kn(l) && a.delete(t);
  }
  function I0() {
    cf = !1, Ea !== null && Kn(Ea) && (Ea = null), Ta !== null && Kn(Ta) && (Ta = null), Aa !== null && Kn(Aa) && (Aa = null), Au.forEach(gr), Ou.forEach(gr);
  }
  function Jn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, cf || (cf = !0, m.unstable_scheduleCallback(
      m.unstable_NormalPriority,
      I0
    )));
  }
  var wn = null;
  function br(l) {
    wn !== l && (wn = l, m.unstable_scheduleCallback(
      m.unstable_NormalPriority,
      function() {
        wn === l && (wn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t], e = l[t + 1], u = l[t + 2];
          if (typeof e != "function") {
            if (nf(e || a) === null)
              continue;
            break;
          }
          var n = ka(a);
          n !== null && (l.splice(t, 3), t -= 3, uc(
            n,
            {
              pending: !0,
              data: u,
              method: a.method,
              action: e
            },
            e,
            u
          ));
        }
      }
    ));
  }
  function xe(l) {
    function t(f) {
      return Jn(f, l);
    }
    Ea !== null && Jn(Ea, l), Ta !== null && Jn(Ta, l), Aa !== null && Jn(Aa, l), Au.forEach(t), Ou.forEach(t);
    for (var a = 0; a < Oa.length; a++) {
      var e = Oa[a];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < Oa.length && (a = Oa[0], a.blockedOn === null); )
      vr(a), a.blockedOn === null && Oa.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null)
      for (e = 0; e < a.length; e += 3) {
        var u = a[e], n = a[e + 1], i = u[Fl] || null;
        if (typeof n == "function")
          i || br(a);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (u = n, i = n[Fl] || null)
              c = i.formAction;
            else if (nf(u) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? a[e + 1] = c : (a.splice(e, 3), e -= 3), br(a);
        }
      }
  }
  function Sr() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(i) {
            return u = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      u !== null && (u(), u = null), e || setTimeout(a, 20);
    }
    function a() {
      if (!e && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var e = !1, u = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        e = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), u = null);
      };
    }
  }
  function ff(l) {
    this._internalRoot = l;
  }
  Wn.prototype.render = ff.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var a = t.current, e = ht();
    or(a, e, l, t, null, null);
  }, Wn.prototype.unmount = ff.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      or(l.current, 2, null, l, null, null), Dn(), t[Wa] = null;
    }
  };
  function Wn(l) {
    this._internalRoot = l;
  }
  Wn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Df();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < Oa.length && t !== 0 && t < Oa[a].priority; a++) ;
      Oa.splice(a, 0, l), a === 0 && vr(l);
    }
  };
  var pr = T.version;
  if (pr !== "19.2.5")
    throw Error(
      r(
        527,
        pr,
        "19.2.5"
      )
    );
  O.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(r(188)) : (l = Object.keys(l).join(","), Error(r(268, l)));
    return l = b(t), l = l !== null ? Y(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var P0 = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.2.5"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $n = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$n.isDisabled && $n.supportsFiber)
      try {
        qe = $n.inject(
          P0
        ), it = $n;
      } catch {
      }
  }
  return Nu.createRoot = function(l, t) {
    if (!q(l)) throw Error(r(299));
    var a = !1, e = "", u = Mo, n = Do, i = No;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (e = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = fr(
      l,
      1,
      !1,
      null,
      null,
      a,
      e,
      null,
      u,
      n,
      i,
      Sr
    ), l[Wa] = t.current, Zc(l), new ff(t);
  }, Nu.hydrateRoot = function(l, t, a) {
    if (!q(l)) throw Error(r(299));
    var e = !1, u = "", n = Mo, i = Do, c = No, f = null;
    return a != null && (a.unstable_strictMode === !0 && (e = !0), a.identifierPrefix !== void 0 && (u = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (i = a.onCaughtError), a.onRecoverableError !== void 0 && (c = a.onRecoverableError), a.formState !== void 0 && (f = a.formState)), t = fr(
      l,
      1,
      !0,
      t,
      a ?? null,
      e,
      u,
      f,
      n,
      i,
      c,
      Sr
    ), t.context = sr(null), a = t.current, e = ht(), e = Fn(e), u = da(e), u.callback = null, ra(a, u, e), a = e, t.current.lanes = a, Ye(t, a), qt(t), l[Wa] = t.current, Zc(l), new Wn(t);
  }, Nu.version = "19.2.5", Nu;
}
var Ur;
function oh() {
  if (Ur) return of.exports;
  Ur = 1;
  function m() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m);
      } catch (T) {
        console.error(T);
      }
  }
  return m(), of.exports = sh(), of.exports;
}
var dh = oh(), G = Sf();
const rh = "aha-ideas-products", mh = "aha-ideas-list", hh = "aha-ideas-create", yh = "aha-ideas-vote", yf = "aha-ideas:email", vf = "aha-ideas:product", vh = 20, gh = "recent", bh = [
  { value: "recent", label: "Recent" },
  { value: "trending", label: "Trending" },
  { value: "popular", label: "Popular" }
], Ut = (m) => typeof m == "object" && m !== null, pf = (m) => Ut(m) ? Ut(m.data) ? m.data : Ut(m.body) ? m.body : m : m, Sh = (m) => !(!Ut(m) || typeof m.id != "string" && typeof m.id != "number" || typeof m.name != "string"), ph = (m) => {
  const T = typeof m.id == "string" ? m.id : String(m.id), U = typeof m.name == "string" ? m.name : "", r = typeof m.reference_prefix == "string" ? m.reference_prefix : void 0;
  return { id: T, name: U, reference_prefix: r };
}, _h = (m) => {
  const T = pf(m);
  if (!Ut(T)) return [];
  const U = T.products;
  return Array.isArray(U) ? U.filter(Sh).map((r) => ph(r)) : [];
}, gf = (m) => !(!Ut(m) || typeof m.id != "string" && typeof m.id != "number" || typeof m.name != "string"), bf = (m) => {
  const T = typeof m.id == "string" ? m.id : String(m.id), U = typeof m.name == "string" ? m.name : "", r = typeof m.reference_num == "string" ? m.reference_num : void 0, q = typeof m.endorsement_count == "number" ? m.endorsement_count : void 0, Q = typeof m.score == "number" ? m.score : void 0, V = typeof m.created_at == "string" ? m.created_at : void 0, X = typeof m.url == "string" ? m.url : void 0, D = m.description;
  let b;
  return typeof D == "string" ? b = D : Ut(D) && typeof D.body == "string" && (b = { body: D.body }), { id: T, name: U, reference_num: r, endorsement_count: q, score: Q, created_at: V, url: X, description: b };
}, zh = (m) => {
  const T = pf(m);
  if (!Ut(T)) return { ideas: [] };
  const U = T.ideas, r = Array.isArray(U) ? U.filter(gf).map((V) => bf(V)) : [], q = T.pagination, Q = Ut(q) ? {
    total_records: typeof q.total_records == "number" ? q.total_records : void 0,
    total_pages: typeof q.total_pages == "number" ? q.total_pages : void 0,
    current_page: typeof q.current_page == "number" ? q.current_page : void 0
  } : void 0;
  return { ideas: r, pagination: Q };
}, Eh = (m) => {
  const T = pf(m);
  return Ut(T) ? Ut(T.idea) && gf(T.idea) ? bf(T.idea) : gf(T) ? bf(T) : null : null;
}, xr = (m) => typeof DOMParser > "u" ? m.replace(/<[^>]*>/g, "").trim() : (new DOMParser().parseFromString(m, "text/html").body.textContent ?? "").trim(), Th = () => {
  const [m, T] = G.useState(() => typeof localStorage > "u" ? "" : localStorage.getItem(yf) ?? ""), U = G.useCallback((r) => {
    T(r), !(typeof localStorage > "u") && (r ? localStorage.setItem(yf, r) : localStorage.removeItem(yf));
  }, []);
  return [m, U];
}, Ah = () => {
  const [m, T] = G.useState(() => typeof localStorage > "u" ? "" : localStorage.getItem(vf) ?? ""), U = G.useCallback((r) => {
    T(r), !(typeof localStorage > "u") && (r ? localStorage.setItem(vf, r) : localStorage.removeItem(vf));
  }, []);
  return [m, U];
}, Oh = ({ widgetServiceSdk: m, enabled: T }) => {
  const [U, r] = G.useState([]), [q, Q] = G.useState(!1), [V, X] = G.useState(null);
  return G.useEffect(() => {
    if (!T) {
      r([]), X(null), Q(!1);
      return;
    }
    let D = !1;
    return Q(!0), X(null), console.log("[aha-ideas] >>> products execute starting"), m.connectors.execute({ permalink: rh, method: "GET" }).then((b) => {
      if (D) return;
      const Y = _h(b);
      console.log("[aha-ideas] <<< products resolved", { raw: b, parsed: Y }), r(Y);
    }).catch((b) => {
      if (D) return;
      console.log("[aha-ideas] products execute threw", b);
      const Y = b instanceof Error ? b.message : "Failed to load products";
      X(Y), r([]);
    }).finally(() => {
      D || Q(!1);
    }), () => {
      D = !0;
    };
  }, [m, T]), { products: U, loading: q, error: V };
}, Mh = ({
  widgetServiceSdk: m,
  productKey: T,
  page: U,
  pageSize: r,
  sort: q,
  q: Q
}) => {
  const [V, X] = G.useState([]), [D, b] = G.useState(void 0), [Y, C] = G.useState(!1), [J, nl] = G.useState(null), [zl, F] = G.useState(0);
  G.useEffect(() => {
    if (!T) {
      X([]), b(void 0), nl(null), C(!1);
      return;
    }
    let pl = !1;
    C(!0), nl(null);
    const $l = {
      product_id: T,
      page: String(U),
      per_page: String(r),
      sort: q
    };
    return Q && ($l.q = Q), console.log("[aha-ideas] >>> list execute starting", { queryParams: $l }), m.connectors.execute({ permalink: mh, method: "GET", queryParams: $l }).then((gl) => {
      if (pl) return;
      const Ml = zh(gl);
      console.log("[aha-ideas] <<< list resolved", { raw: gl, parsed: Ml }), X(Ml.ideas), b(Ml.pagination);
    }).catch((gl) => {
      if (pl) return;
      console.log("[aha-ideas] list execute threw", gl);
      const Ml = gl instanceof Error ? gl.message : "Failed to load ideas";
      nl(Ml), X([]), b(void 0);
    }).finally(() => {
      pl || C(!1);
    }), () => {
      pl = !0;
    };
  }, [m, T, U, r, q, Q, zl]);
  const Cl = G.useCallback(() => F((pl) => pl + 1), []);
  return { ideas: V, pagination: D, loading: Y, error: J, refetch: Cl };
}, Dh = ({ widgetServiceSdk: m, productKey: T }) => {
  const [U, r] = G.useState(!1), [q, Q] = G.useState(null), V = G.useRef(!1), X = G.useCallback(
    async (b, Y, C) => {
      if (V.current) return null;
      V.current = !0, r(!0), Q(null);
      try {
        const J = await m.connectors.execute({
          permalink: hh,
          method: "POST",
          queryParams: { product_id: T },
          payload: {
            idea: {
              name: b,
              created_by: C,
              ...Y ? { description: Y } : {}
            }
          }
        });
        return Eh(J);
      } catch (J) {
        const nl = J instanceof Error ? J.message : "Failed to submit idea";
        return Q(nl), null;
      } finally {
        V.current = !1, r(!1);
      }
    },
    [m, T]
  ), D = G.useCallback(() => Q(null), []);
  return { create: X, submitting: U, error: q, clearError: D };
}, Nh = ({ widgetServiceSdk: m }) => {
  const [T, U] = G.useState(null), [r, q] = G.useState(/* @__PURE__ */ new Set()), [Q, V] = G.useState(null), X = G.useCallback(
    async (b, Y) => {
      if (T) return !1;
      U(b), V(null);
      try {
        return await m.connectors.execute({
          permalink: yh,
          method: "POST",
          queryParams: { idea_id: b },
          payload: { idea_endorsement: { email: Y } }
        }), q((C) => {
          const J = new Set(C);
          return J.add(b), J;
        }), !0;
      } catch (C) {
        const J = C instanceof Error ? C.message : "Vote failed (you may have already voted)";
        return V(J), !1;
      } finally {
        U(null);
      }
    },
    [m, T]
  ), D = G.useCallback(() => V(null), []);
  return { vote: X, votingId: T, votedIds: r, error: Q, clearError: D };
}, Uh = (m) => m.reference_num ?? m.id, xh = (m) => {
  const T = m.description;
  return T ? typeof T == "string" ? xr(T) : typeof T.body == "string" ? xr(T.body) : "" : "";
}, Ch = ({ idea: m, hasVoted: T, isVoting: U, canVote: r, onVote: q }) => {
  const Q = xh(m), V = m.endorsement_count ?? m.score ?? 0, X = !r || U || T, D = T ? "Voted ✓" : U ? "Voting…" : "Vote";
  return /* @__PURE__ */ M.jsxs("article", { className: "aha-card", "aria-labelledby": `idea-title-${m.id}`, children: [
    /* @__PURE__ */ M.jsxs("div", { className: "aha-card__main", children: [
      /* @__PURE__ */ M.jsx("h2", { className: "aha-card__title", id: `idea-title-${m.id}`, children: m.name }),
      m.reference_num && /* @__PURE__ */ M.jsx("p", { className: "aha-card__reference", children: m.reference_num }),
      Q && /* @__PURE__ */ M.jsx("p", { className: "aha-card__description", children: Q })
    ] }),
    /* @__PURE__ */ M.jsxs("div", { className: "aha-card__actions", children: [
      /* @__PURE__ */ M.jsx("span", { className: "aha-card__count", "aria-label": `${V} votes`, children: V }),
      /* @__PURE__ */ M.jsx(
        "button",
        {
          type: "button",
          className: `aha-button aha-button--vote${T ? " aha-button--voted" : ""}`,
          onClick: () => q(Uh(m)),
          disabled: X,
          "aria-pressed": T,
          children: D
        }
      )
    ] })
  ] });
}, Hh = ({
  email: m,
  submitting: T,
  error: U,
  onSubmit: r,
  onCancel: q
}) => {
  const [Q, V] = G.useState(""), [X, D] = G.useState(""), b = G.useId(), Y = G.useId(), C = G.useId(), J = async (nl) => {
    nl.preventDefault();
    const zl = Q.trim();
    if (!zl) return;
    await r(zl, X.trim()) && (V(""), D(""));
  };
  return /* @__PURE__ */ M.jsxs("form", { className: "aha-form", onSubmit: J, "aria-labelledby": "aha-form-heading", children: [
    /* @__PURE__ */ M.jsx("h2", { className: "aha-form__heading", id: "aha-form-heading", children: "Submit a new idea" }),
    /* @__PURE__ */ M.jsxs("div", { className: "aha-field", children: [
      /* @__PURE__ */ M.jsxs("label", { className: "aha-field__label", htmlFor: b, children: [
        "Idea title",
        /* @__PURE__ */ M.jsx("span", { className: "aha-field__required", "aria-hidden": "true", children: " *" })
      ] }),
      /* @__PURE__ */ M.jsx(
        "input",
        {
          id: b,
          className: "aha-field__input",
          type: "text",
          value: Q,
          onChange: (nl) => V(nl.target.value),
          required: !0,
          maxLength: 200,
          "aria-required": "true",
          autoComplete: "off"
        }
      )
    ] }),
    /* @__PURE__ */ M.jsxs("div", { className: "aha-field", children: [
      /* @__PURE__ */ M.jsx("label", { className: "aha-field__label", htmlFor: Y, children: "Description" }),
      /* @__PURE__ */ M.jsx(
        "textarea",
        {
          id: Y,
          className: "aha-field__input aha-field__input--textarea",
          value: X,
          onChange: (nl) => D(nl.target.value),
          rows: 4
        }
      )
    ] }),
    /* @__PURE__ */ M.jsxs("p", { className: "aha-form__attribution", children: [
      "Submitting as ",
      /* @__PURE__ */ M.jsx("strong", { children: m })
    ] }),
    U && /* @__PURE__ */ M.jsx("div", { className: "aha-alert aha-alert--error", role: "alert", id: C, children: U }),
    /* @__PURE__ */ M.jsxs("div", { className: "aha-form__actions", children: [
      /* @__PURE__ */ M.jsx(
        "button",
        {
          type: "submit",
          className: "aha-button aha-button--primary",
          disabled: T || !Q.trim(),
          "aria-describedby": U ? C : void 0,
          children: T ? "Submitting…" : "Submit idea"
        }
      ),
      /* @__PURE__ */ M.jsx(
        "button",
        {
          type: "button",
          className: "aha-button aha-button--secondary",
          onClick: q,
          disabled: T,
          children: "Cancel"
        }
      )
    ] })
  ] });
}, Rh = (m) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.trim()), jh = (m) => m === "recent" || m === "trending" || m === "popular", qh = (m) => {
  if (typeof m == "number" && Number.isFinite(m) && m > 0) return Math.min(Math.floor(m), 200);
  if (typeof m == "string") {
    const T = parseInt(m, 10);
    if (Number.isFinite(T) && T > 0) return Math.min(T, 200);
  }
  return vh;
}, Bh = (m) => typeof m == "string" ? m.trim() : typeof m == "number" ? String(m) : "", Yh = ({ sdk: m, widgetServiceSdk: T }) => {
  const [U, r] = G.useState(m.getProps());
  G.useEffect(() => m.on("propsChanged", r), [m]);
  const q = Bh(U.productKey), Q = qh(U.pageSize), V = !q, [X, D] = Th(), [b, Y] = G.useState(X), [C, J] = G.useState(!X), [nl, zl] = Ah(), F = Oh({ widgetServiceSdk: T, enabled: V }), Cl = q || nl, [pl, $l] = G.useState(""), [gl, Ml] = G.useState(""), [kl, Ll] = G.useState(gh), [k, jl] = G.useState(1), [yt, xt] = G.useState(!1), [wl, Hl] = G.useState(null), Ct = G.useId(), vt = G.useId(), Kl = G.useId(), S = G.useId();
  G.useEffect(() => {
    if (!V || F.loading || F.products.length === 0) return;
    const W = new Set(F.products.map((ut) => ut.id));
    nl && W.has(nl) || zl(F.products[0].id);
  }, [V, nl, F.loading, F.products, zl]), G.useEffect(() => {
    if (!wl) return;
    const W = window.setTimeout(() => Hl(null), 6e3);
    return () => window.clearTimeout(W);
  }, [wl]), G.useEffect(() => {
    const W = window.setTimeout(() => Ml(pl.trim()), 350);
    return () => window.clearTimeout(W);
  }, [pl]), G.useEffect(() => jl(1), [gl, kl, Cl, Q]);
  const { ideas: O, pagination: R, loading: al, error: ul, refetch: o } = Mh({
    widgetServiceSdk: T,
    productKey: Cl,
    page: k,
    pageSize: Q,
    sort: kl,
    q: gl
  }), z = Dh({ widgetServiceSdk: T, productKey: Cl }), A = Nh({ widgetServiceSdk: T }), N = (R == null ? void 0 : R.total_pages) ?? 1, Z = R == null ? void 0 : R.total_records, K = (R == null ? void 0 : R.current_page) ?? k, il = N > 1, ql = b.trim(), yl = Rh(ql), Bt = !!(X && Cl), Ja = !!X, Ce = () => {
    yl && (D(ql), J(!1));
  }, Uu = () => {
    Y(X), J(!1);
  }, Yt = () => {
    Y(X), J(!0);
  }, He = async (W, ut) => {
    const wa = await z.create(W, ut, X);
    return wa ? (xt(!1), Hl(`Idea “${wa.name}” submitted.`), o(), !0) : !1;
  }, Re = async (W) => {
    await A.vote(W, X) && Hl("Vote recorded.");
  }, je = !al && !ul && O.length === 0, xu = G.useMemo(() => al ? "Loading ideas…" : ul ? `Error loading ideas: ${ul}` : je ? "No ideas found." : typeof Z == "number" ? `${Z} ideas — page ${K} of ${N}.` : `${O.length} ideas loaded.`, [al, ul, je, Z, K, N, O.length]);
  return /* @__PURE__ */ M.jsxs("div", { className: "aha-widget", role: "region", "aria-label": "Aha! ideas portal", children: [
    /* @__PURE__ */ M.jsxs("header", { className: "aha-header", children: [
      /* @__PURE__ */ M.jsxs("div", { className: "aha-header__titles", children: [
        /* @__PURE__ */ M.jsx("h1", { className: "aha-header__title", children: "Ideas" }),
        V ? /* @__PURE__ */ M.jsxs("div", { className: "aha-product-picker", children: [
          /* @__PURE__ */ M.jsx("label", { htmlFor: S, className: "aha-product-picker__label", children: "Product" }),
          /* @__PURE__ */ M.jsxs(
            "select",
            {
              id: S,
              className: "aha-field__input aha-field__input--select",
              value: nl,
              onChange: (W) => zl(W.target.value),
              disabled: F.loading || !F.loading && F.products.length === 0,
              "aria-describedby": F.error ? `${S}-help` : void 0,
              children: [
                F.loading && /* @__PURE__ */ M.jsx("option", { value: "", children: "Loading products…" }),
                !F.loading && F.products.length === 0 && /* @__PURE__ */ M.jsx("option", { value: "", children: "No products available" }),
                !F.loading && F.products.length > 0 && !nl && /* @__PURE__ */ M.jsx("option", { value: "", children: "Select a product…" }),
                F.products.map((W) => {
                  const ut = W.reference_prefix ? `${W.name} (${W.reference_prefix})` : W.name;
                  return /* @__PURE__ */ M.jsx("option", { value: W.id, children: ut }, W.id);
                })
              ]
            }
          ),
          F.error && /* @__PURE__ */ M.jsx("p", { id: `${S}-help`, className: "aha-product-picker__error", children: F.error })
        ] }) : /* @__PURE__ */ M.jsxs("p", { className: "aha-header__subtitle", children: [
          "Product ",
          /* @__PURE__ */ M.jsx("strong", { children: q })
        ] })
      ] }),
      /* @__PURE__ */ M.jsx("div", { className: "aha-header__email", children: C ? /* @__PURE__ */ M.jsxs("div", { className: "aha-email-edit", children: [
        /* @__PURE__ */ M.jsx("label", { htmlFor: Kl, className: "aha-email-edit__label", children: "Your email" }),
        /* @__PURE__ */ M.jsx(
          "input",
          {
            id: Kl,
            className: "aha-field__input",
            type: "email",
            value: b,
            onChange: (W) => Y(W.target.value),
            placeholder: "you@example.com",
            autoComplete: "email",
            "aria-invalid": !!b && !yl,
            "aria-describedby": !yl && b ? `${Kl}-help` : void 0
          }
        ),
        !yl && b && /* @__PURE__ */ M.jsx("p", { id: `${Kl}-help`, className: "aha-email-edit__help", children: "Enter a valid email address." }),
        /* @__PURE__ */ M.jsxs("div", { className: "aha-email-edit__actions", children: [
          /* @__PURE__ */ M.jsx(
            "button",
            {
              type: "button",
              className: "aha-button aha-button--primary aha-button--sm",
              onClick: Ce,
              disabled: !yl,
              children: "Save"
            }
          ),
          X && /* @__PURE__ */ M.jsx(
            "button",
            {
              type: "button",
              className: "aha-button aha-button--secondary aha-button--sm",
              onClick: Uu,
              children: "Cancel"
            }
          )
        ] })
      ] }) : /* @__PURE__ */ M.jsxs("div", { className: "aha-email-display", children: [
        /* @__PURE__ */ M.jsx("span", { className: "aha-email-display__label", children: "Voting and submitting as" }),
        /* @__PURE__ */ M.jsx("strong", { className: "aha-email-display__value", children: X }),
        /* @__PURE__ */ M.jsx(
          "button",
          {
            type: "button",
            className: "aha-button aha-button--link",
            onClick: Yt,
            children: "Change"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ M.jsxs("div", { className: "aha-toolbar", children: [
      /* @__PURE__ */ M.jsxs("div", { className: "aha-field aha-toolbar__search", children: [
        /* @__PURE__ */ M.jsx("label", { className: "aha-field__label aha-field__label--sr", htmlFor: Ct, children: "Search ideas" }),
        /* @__PURE__ */ M.jsx(
          "input",
          {
            id: Ct,
            className: "aha-field__input",
            type: "search",
            placeholder: "Search ideas…",
            value: pl,
            onChange: (W) => $l(W.target.value),
            disabled: !Cl
          }
        )
      ] }),
      /* @__PURE__ */ M.jsxs("div", { className: "aha-field aha-toolbar__sort", children: [
        /* @__PURE__ */ M.jsx("label", { className: "aha-field__label aha-field__label--sr", htmlFor: vt, children: "Sort ideas" }),
        /* @__PURE__ */ M.jsx(
          "select",
          {
            id: vt,
            className: "aha-field__input aha-field__input--select",
            value: kl,
            onChange: (W) => {
              const ut = W.target.value;
              jh(ut) && Ll(ut);
            },
            disabled: !Cl,
            children: bh.map((W) => /* @__PURE__ */ M.jsxs("option", { value: W.value, children: [
              "Sort: ",
              W.label
            ] }, W.value))
          }
        )
      ] }),
      /* @__PURE__ */ M.jsx(
        "button",
        {
          type: "button",
          className: "aha-button aha-button--primary",
          onClick: () => {
            z.clearError(), xt(!0);
          },
          disabled: !Bt,
          "aria-disabled": !Bt,
          title: X ? Cl ? void 0 : "Configure a product key to submit ideas" : "Enter your email to submit ideas",
          children: "+ New Idea"
        }
      )
    ] }),
    yt && /* @__PURE__ */ M.jsx(
      Hh,
      {
        email: X,
        submitting: z.submitting,
        error: z.error,
        onSubmit: He,
        onCancel: () => {
          z.clearError(), xt(!1);
        }
      }
    ),
    /* @__PURE__ */ M.jsx("div", { className: "aha-status", role: "status", "aria-live": "polite", children: xu }),
    A.error && /* @__PURE__ */ M.jsxs("div", { className: "aha-alert aha-alert--warning", role: "alert", children: [
      A.error,
      /* @__PURE__ */ M.jsx(
        "button",
        {
          type: "button",
          className: "aha-button aha-button--link aha-button--sm",
          onClick: A.clearError,
          children: "Dismiss"
        }
      )
    ] }),
    ul && /* @__PURE__ */ M.jsxs("div", { className: "aha-alert aha-alert--error", role: "alert", children: [
      "Couldn’t load ideas: ",
      ul,
      /* @__PURE__ */ M.jsx("button", { type: "button", className: "aha-button aha-button--secondary aha-button--sm", onClick: o, children: "Retry" })
    ] }),
    je && /* @__PURE__ */ M.jsxs("div", { className: "aha-empty", children: [
      /* @__PURE__ */ M.jsx("p", { children: "No ideas yet." }),
      Bt && /* @__PURE__ */ M.jsxs("p", { children: [
        "Be the first — click ",
        /* @__PURE__ */ M.jsx("strong", { children: "+ New Idea" }),
        " above."
      ] })
    ] }),
    /* @__PURE__ */ M.jsx("ul", { className: "aha-list", "aria-busy": al, children: O.map((W) => /* @__PURE__ */ M.jsx("li", { className: "aha-list__item", children: /* @__PURE__ */ M.jsx(
      Ch,
      {
        idea: W,
        hasVoted: A.votedIds.has(W.id),
        isVoting: A.votingId === W.id,
        canVote: Ja,
        onVote: Re
      }
    ) }, W.id)) }),
    il && /* @__PURE__ */ M.jsxs("nav", { className: "aha-pagination", "aria-label": "Pagination", children: [
      /* @__PURE__ */ M.jsx(
        "button",
        {
          type: "button",
          className: "aha-button aha-button--secondary",
          onClick: () => jl((W) => Math.max(1, W - 1)),
          disabled: al || K <= 1,
          children: "Previous"
        }
      ),
      /* @__PURE__ */ M.jsxs("span", { className: "aha-pagination__status", "aria-live": "polite", children: [
        "Page ",
        K,
        " of ",
        N
      ] }),
      /* @__PURE__ */ M.jsx(
        "button",
        {
          type: "button",
          className: "aha-button aha-button--secondary",
          onClick: () => jl((W) => W + 1),
          disabled: al || K >= N,
          children: "Next"
        }
      )
    ] }),
    wl && /* @__PURE__ */ M.jsxs("div", { className: "aha-toast", role: "status", "aria-live": "polite", children: [
      /* @__PURE__ */ M.jsx("span", { children: wl }),
      /* @__PURE__ */ M.jsx(
        "button",
        {
          type: "button",
          className: "aha-toast__dismiss",
          onClick: () => Hl(null),
          children: "Dismiss"
        }
      )
    ] })
  ] });
};
let Gh = eh;
const Cr = /* @__PURE__ */ new Set();
async function Qh(m) {
  var q;
  console.log("[aha-ideas] init() called", { sdk: m }), await m.whenReady(), console.log("[aha-ideas] sdk.whenReady() resolved"), console.log("[aha-ideas] window.WidgetServiceSDK type:", typeof window.WidgetServiceSDK);
  const T = new window.WidgetServiceSDK();
  console.log("[aha-ideas] widgetServiceSdk:", T, "connectors.execute type:", typeof ((q = T.connectors) == null ? void 0 : q.execute));
  const U = document.createElement("style");
  U.textContent = Gh, Cr.add(U), m.shadowRoot.insertBefore(U, m.shadowRoot.firstChild);
  const r = dh.createRoot(m.getContainer());
  r.render(/* @__PURE__ */ M.jsx(Yh, { sdk: m, widgetServiceSdk: T })), m.on("destroy", () => {
    Cr.delete(U), U.remove(), r.unmount();
  });
}
export {
  Qh as init
};
