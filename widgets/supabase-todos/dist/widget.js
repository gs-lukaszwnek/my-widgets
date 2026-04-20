import "https://esm.sh/@spectrum-web-components/theme/sp-theme.js";
import "https://esm.sh/@spectrum-web-components/theme/src/themes.js";
import "https://esm.sh/@spectrum-web-components/theme/src/express/themes.js";
import "https://esm.sh/@spectrum-web-components/button/sp-button.js";
import "https://esm.sh/@spectrum-web-components/action-button/sp-action-button.js";
import "https://esm.sh/@spectrum-web-components/textfield/sp-textfield.js";
import "https://esm.sh/@spectrum-web-components/progress-circle/sp-progress-circle.js";
import "https://esm.sh/@spectrum-web-components/icon/sp-icon.js";
import "https://esm.sh/@spectrum-web-components/icons-workflow/icons/sp-icon-delete.js";
import "https://esm.sh/@spectrum-web-components/icons-workflow/icons/sp-icon-refresh.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ps(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const q = {}, rt = [], Ce = () => {
}, Ln = () => !1, zt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Xt = (e) => e.startsWith("onUpdate:"), Q = Object.assign, Rs = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Vr = Object.prototype.hasOwnProperty, j = (e, t) => Vr.call(e, t), R = Array.isArray, it = (e) => Pt(e) === "[object Map]", Nn = (e) => Pt(e) === "[object Set]", sn = (e) => Pt(e) === "[object Date]", I = (e) => typeof e == "function", z = (e) => typeof e == "string", Ae = (e) => typeof e == "symbol", B = (e) => e !== null && typeof e == "object", Hn = (e) => (B(e) || I(e)) && I(e.then) && I(e.catch), jn = Object.prototype.toString, Pt = (e) => jn.call(e), qr = (e) => Pt(e).slice(8, -1), $n = (e) => Pt(e) === "[object Object]", Is = (e) => z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, mt = /* @__PURE__ */ Ps(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Zt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((s) => t[s] || (t[s] = e(s)));
}, Gr = /-\w/g, ae = Zt(
  (e) => e.replace(Gr, (t) => t.slice(1).toUpperCase())
), Jr = /\B([A-Z])/g, tt = Zt(
  (e) => e.replace(Jr, "-$1").toLowerCase()
), Bn = Zt((e) => e.charAt(0).toUpperCase() + e.slice(1)), os = Zt(
  (e) => e ? `on${Bn(e)}` : ""
), Ee = (e, t) => !Object.is(e, t), ls = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Kn = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Yr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let nn;
const Qt = () => nn || (nn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ms(e) {
  if (R(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = z(n) ? Qr(n) : Ms(n);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (z(e) || B(e))
    return e;
}
const zr = /;(?![^(]*\))/g, Xr = /:([^]+)/, Zr = /\/\*[^]*?\*\//g;
function Qr(e) {
  const t = {};
  return e.replace(Zr, "").split(zr).forEach((s) => {
    if (s) {
      const n = s.split(Xr);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Fs(e) {
  let t = "";
  if (z(e))
    t = e;
  else if (R(e))
    for (let s = 0; s < e.length; s++) {
      const n = Fs(e[s]);
      n && (t += n + " ");
    }
  else if (B(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const kr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ei = /* @__PURE__ */ Ps(kr);
function Wn(e) {
  return !!e || e === "";
}
function ti(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = Ds(e[n], t[n]);
  return s;
}
function Ds(e, t) {
  if (e === t) return !0;
  let s = sn(e), n = sn(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = Ae(e), n = Ae(t), s || n)
    return e === t;
  if (s = R(e), n = R(t), s || n)
    return s && n ? ti(e, t) : !1;
  if (s = B(e), n = B(t), s || n) {
    if (!s || !n)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), f = t.hasOwnProperty(o);
      if (l && !f || !l && f || !Ds(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Un = (e) => !!(e && e.__v_isRef === !0), Be = (e) => z(e) ? e : e == null ? "" : R(e) || B(e) && (e.toString === jn || !I(e.toString)) ? Un(e) ? Be(e.value) : JSON.stringify(e, Vn, 2) : String(e), Vn = (e, t) => Un(t) ? Vn(e, t.value) : it(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], i) => (s[cs(n, i) + " =>"] = r, s),
    {}
  )
} : Nn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => cs(s))
} : Ae(t) ? cs(t) : B(t) && !R(t) && !$n(t) ? String(t) : t, cs = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ae(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let le;
class si {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = le, !t && le && (this.index = (le.scopes || (le.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].pause();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].resume();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const s = le;
      try {
        return le = this, t();
      } finally {
        le = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = le, le = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (le = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.cleanups.length = 0, this.scopes) {
        for (s = 0, n = this.scopes.length; s < n; s++)
          this.scopes[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function ni() {
  return le;
}
let V;
const fs = /* @__PURE__ */ new WeakSet();
class qn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, le && le.active && le.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, fs.has(this) && (fs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Jn(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, rn(this), Yn(this);
    const t = V, s = de;
    V = this, de = !0;
    try {
      return this.fn();
    } finally {
      zn(this), V = t, de = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Hs(t);
      this.deps = this.depsTail = void 0, rn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? fs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    bs(this) && this.run();
  }
  get dirty() {
    return bs(this);
  }
}
let Gn = 0, bt, yt;
function Jn(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = yt, yt = e;
    return;
  }
  e.next = bt, bt = e;
}
function Ls() {
  Gn++;
}
function Ns() {
  if (--Gn > 0)
    return;
  if (yt) {
    let t = yt;
    for (yt = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; bt; ) {
    let t = bt;
    for (bt = void 0; t; ) {
      const s = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = s;
    }
  }
  if (e) throw e;
}
function Yn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function zn(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), Hs(n), ri(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  e.deps = t, e.depsTail = s;
}
function bs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Xn(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Xn(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Et) || (e.globalVersion = Et, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !bs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = V, n = de;
  V = e, de = !0;
  try {
    Yn(e);
    const r = e.fn(e._value);
    (t.version === 0 || Ee(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    V = s, de = n, zn(e), e.flags &= -3;
  }
}
function Hs(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: r } = e;
  if (n && (n.nextSub = r, e.prevSub = void 0), r && (r.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      Hs(i, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function ri(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let de = !0;
const Zn = [];
function De() {
  Zn.push(de), de = !1;
}
function Le() {
  const e = Zn.pop();
  de = e === void 0 ? !0 : e;
}
function rn(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = V;
    V = void 0;
    try {
      t();
    } finally {
      V = s;
    }
  }
}
let Et = 0;
class ii {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class js {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!V || !de || V === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== V)
      s = this.activeLink = new ii(V, this), V.deps ? (s.prevDep = V.depsTail, V.depsTail.nextDep = s, V.depsTail = s) : V.deps = V.depsTail = s, Qn(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = V.depsTail, s.nextDep = void 0, V.depsTail.nextDep = s, V.depsTail = s, V.deps === s && (V.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, Et++, this.notify(t);
  }
  notify(t) {
    Ls();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Ns();
    }
  }
}
function Qn(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Qn(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const ys = /* @__PURE__ */ new WeakMap(), ke = /* @__PURE__ */ Symbol(
  ""
), vs = /* @__PURE__ */ Symbol(
  ""
), Tt = /* @__PURE__ */ Symbol(
  ""
);
function ee(e, t, s) {
  if (de && V) {
    let n = ys.get(e);
    n || ys.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new js()), r.map = n, r.key = s), r.track();
  }
}
function Me(e, t, s, n, r, i) {
  const o = ys.get(e);
  if (!o) {
    Et++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if (Ls(), t === "clear")
    o.forEach(l);
  else {
    const f = R(e), d = f && Is(s);
    if (f && s === "length") {
      const a = Number(n);
      o.forEach((p, w) => {
        (w === "length" || w === Tt || !Ae(w) && w >= a) && l(p);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(Tt)), t) {
        case "add":
          f ? d && l(o.get("length")) : (l(o.get(ke)), it(e) && l(o.get(vs)));
          break;
        case "delete":
          f || (l(o.get(ke)), it(e) && l(o.get(vs)));
          break;
        case "set":
          it(e) && l(o.get(ke));
          break;
      }
  }
  Ns();
}
function st(e) {
  const t = /* @__PURE__ */ H(e);
  return t === e ? t : (ee(t, "iterate", Tt), /* @__PURE__ */ ue(e) ? t : t.map(he));
}
function kt(e) {
  return ee(e = /* @__PURE__ */ H(e), "iterate", Tt), e;
}
function xe(e, t) {
  return /* @__PURE__ */ Ne(e) ? ct(/* @__PURE__ */ et(e) ? he(t) : t) : he(t);
}
const oi = {
  __proto__: null,
  [Symbol.iterator]() {
    return us(this, Symbol.iterator, (e) => xe(this, e));
  },
  concat(...e) {
    return st(this).concat(
      ...e.map((t) => R(t) ? st(t) : t)
    );
  },
  entries() {
    return us(this, "entries", (e) => (e[1] = xe(this, e[1]), e));
  },
  every(e, t) {
    return Pe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Pe(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => xe(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Pe(
      this,
      "find",
      e,
      t,
      (s) => xe(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return Pe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Pe(
      this,
      "findLast",
      e,
      t,
      (s) => xe(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Pe(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Pe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return as(this, "includes", e);
  },
  indexOf(...e) {
    return as(this, "indexOf", e);
  },
  join(e) {
    return st(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return as(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Pe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return pt(this, "pop");
  },
  push(...e) {
    return pt(this, "push", e);
  },
  reduce(e, ...t) {
    return on(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return on(this, "reduceRight", e, t);
  },
  shift() {
    return pt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Pe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return pt(this, "splice", e);
  },
  toReversed() {
    return st(this).toReversed();
  },
  toSorted(e) {
    return st(this).toSorted(e);
  },
  toSpliced(...e) {
    return st(this).toSpliced(...e);
  },
  unshift(...e) {
    return pt(this, "unshift", e);
  },
  values() {
    return us(this, "values", (e) => xe(this, e));
  }
};
function us(e, t, s) {
  const n = kt(e), r = n[t]();
  return n !== e && !/* @__PURE__ */ ue(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = s(i.value)), i;
  }), r;
}
const li = Array.prototype;
function Pe(e, t, s, n, r, i) {
  const o = kt(e), l = o !== e && !/* @__PURE__ */ ue(e), f = o[t];
  if (f !== li[t]) {
    const p = f.apply(e, i);
    return l ? he(p) : p;
  }
  let d = s;
  o !== e && (l ? d = function(p, w) {
    return s.call(this, xe(e, p), w, e);
  } : s.length > 2 && (d = function(p, w) {
    return s.call(this, p, w, e);
  }));
  const a = f.call(o, d, n);
  return l && r ? r(a) : a;
}
function on(e, t, s, n) {
  const r = kt(e), i = r !== e && !/* @__PURE__ */ ue(e);
  let o = s, l = !1;
  r !== e && (i ? (l = n.length === 0, o = function(d, a, p) {
    return l && (l = !1, d = xe(e, d)), s.call(this, d, xe(e, a), p, e);
  }) : s.length > 3 && (o = function(d, a, p) {
    return s.call(this, d, a, p, e);
  }));
  const f = r[t](o, ...n);
  return l ? xe(e, f) : f;
}
function as(e, t, s) {
  const n = /* @__PURE__ */ H(e);
  ee(n, "iterate", Tt);
  const r = n[t](...s);
  return (r === -1 || r === !1) && /* @__PURE__ */ Ws(s[0]) ? (s[0] = /* @__PURE__ */ H(s[0]), n[t](...s)) : r;
}
function pt(e, t, s = []) {
  De(), Ls();
  const n = (/* @__PURE__ */ H(e))[t].apply(e, s);
  return Ns(), Le(), n;
}
const ci = /* @__PURE__ */ Ps("__proto__,__v_isRef,__isVue"), kn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ae)
);
function fi(e) {
  Ae(e) || (e = String(e));
  const t = /* @__PURE__ */ H(this);
  return ee(t, "has", e), t.hasOwnProperty(e);
}
class er {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    if (s === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (s === "__v_isReactive")
      return !r;
    if (s === "__v_isReadonly")
      return r;
    if (s === "__v_isShallow")
      return i;
    if (s === "__v_raw")
      return n === (r ? i ? yi : rr : i ? nr : sr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = R(t);
    if (!r) {
      let f;
      if (o && (f = oi[s]))
        return f;
      if (s === "hasOwnProperty")
        return fi;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ te(t) ? t : n
    );
    if ((Ae(s) ? kn.has(s) : ci(s)) || (r || ee(t, "get", s), i))
      return l;
    if (/* @__PURE__ */ te(l)) {
      const f = o && Is(s) ? l : l.value;
      return r && B(f) ? /* @__PURE__ */ Ss(f) : f;
    }
    return B(l) ? r ? /* @__PURE__ */ Ss(l) : /* @__PURE__ */ Bs(l) : l;
  }
}
class tr extends er {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    const o = R(t) && Is(s);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ Ne(i);
      if (!/* @__PURE__ */ ue(n) && !/* @__PURE__ */ Ne(n) && (i = /* @__PURE__ */ H(i), n = /* @__PURE__ */ H(n)), !o && /* @__PURE__ */ te(i) && !/* @__PURE__ */ te(n))
        return d || (i.value = n), !0;
    }
    const l = o ? Number(s) < t.length : j(t, s), f = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ te(t) ? t : r
    );
    return t === /* @__PURE__ */ H(r) && (l ? Ee(n, i) && Me(t, "set", s, n) : Me(t, "add", s, n)), f;
  }
  deleteProperty(t, s) {
    const n = j(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Me(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Ae(s) || !kn.has(s)) && ee(t, "has", s), n;
  }
  ownKeys(t) {
    return ee(
      t,
      "iterate",
      R(t) ? "length" : ke
    ), Reflect.ownKeys(t);
  }
}
class ui extends er {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const ai = /* @__PURE__ */ new tr(), di = /* @__PURE__ */ new ui(), hi = /* @__PURE__ */ new tr(!0);
const xs = (e) => e, Ht = (e) => Reflect.getPrototypeOf(e);
function pi(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, i = /* @__PURE__ */ H(r), o = it(i), l = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, d = r[e](...n), a = s ? xs : t ? ct : he;
    return !t && ee(
      i,
      "iterate",
      f ? vs : ke
    ), Q(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: p, done: w } = d.next();
          return w ? { value: p, done: w } : {
            value: l ? [a(p[0]), a(p[1])] : a(p),
            done: w
          };
        }
      }
    );
  };
}
function jt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function gi(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ H(i), l = /* @__PURE__ */ H(r);
      e || (Ee(r, l) && ee(o, "get", r), ee(o, "get", l));
      const { has: f } = Ht(o), d = t ? xs : e ? ct : he;
      if (f.call(o, r))
        return d(i.get(r));
      if (f.call(o, l))
        return d(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && ee(/* @__PURE__ */ H(r), "iterate", ke), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ H(i), l = /* @__PURE__ */ H(r);
      return e || (Ee(r, l) && ee(o, "has", r), ee(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, f = /* @__PURE__ */ H(l), d = t ? xs : e ? ct : he;
      return !e && ee(f, "iterate", ke), l.forEach((a, p) => r.call(i, d(a), d(p), o));
    }
  };
  return Q(
    s,
    e ? {
      add: jt("add"),
      set: jt("set"),
      delete: jt("delete"),
      clear: jt("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ H(this), o = Ht(i), l = /* @__PURE__ */ H(r), f = !t && !/* @__PURE__ */ ue(r) && !/* @__PURE__ */ Ne(r) ? l : r;
        return o.has.call(i, f) || Ee(r, f) && o.has.call(i, r) || Ee(l, f) && o.has.call(i, l) || (i.add(f), Me(i, "add", f, f)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ ue(i) && !/* @__PURE__ */ Ne(i) && (i = /* @__PURE__ */ H(i));
        const o = /* @__PURE__ */ H(this), { has: l, get: f } = Ht(o);
        let d = l.call(o, r);
        d || (r = /* @__PURE__ */ H(r), d = l.call(o, r));
        const a = f.call(o, r);
        return o.set(r, i), d ? Ee(i, a) && Me(o, "set", r, i) : Me(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ H(this), { has: o, get: l } = Ht(i);
        let f = o.call(i, r);
        f || (r = /* @__PURE__ */ H(r), f = o.call(i, r)), l && l.call(i, r);
        const d = i.delete(r);
        return f && Me(i, "delete", r, void 0), d;
      },
      clear() {
        const r = /* @__PURE__ */ H(this), i = r.size !== 0, o = r.clear();
        return i && Me(
          r,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    s[r] = pi(r, e, t);
  }), s;
}
function $s(e, t) {
  const s = gi(e, t);
  return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    j(s, r) && r in n ? s : n,
    r,
    i
  );
}
const _i = {
  get: /* @__PURE__ */ $s(!1, !1)
}, mi = {
  get: /* @__PURE__ */ $s(!1, !0)
}, bi = {
  get: /* @__PURE__ */ $s(!0, !1)
};
const sr = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), rr = /* @__PURE__ */ new WeakMap(), yi = /* @__PURE__ */ new WeakMap();
function vi(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function xi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : vi(qr(e));
}
// @__NO_SIDE_EFFECTS__
function Bs(e) {
  return /* @__PURE__ */ Ne(e) ? e : Ks(
    e,
    !1,
    ai,
    _i,
    sr
  );
}
// @__NO_SIDE_EFFECTS__
function Si(e) {
  return Ks(
    e,
    !1,
    hi,
    mi,
    nr
  );
}
// @__NO_SIDE_EFFECTS__
function Ss(e) {
  return Ks(
    e,
    !0,
    di,
    bi,
    rr
  );
}
function Ks(e, t, s, n, r) {
  if (!B(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = xi(e);
  if (i === 0)
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const l = new Proxy(
    e,
    i === 2 ? n : s
  );
  return r.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function et(e) {
  return /* @__PURE__ */ Ne(e) ? /* @__PURE__ */ et(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ne(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ue(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ws(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function H(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ H(t) : e;
}
function wi(e) {
  return !j(e, "__v_skip") && Object.isExtensible(e) && Kn(e, "__v_skip", !0), e;
}
const he = (e) => B(e) ? /* @__PURE__ */ Bs(e) : e, ct = (e) => B(e) ? /* @__PURE__ */ Ss(e) : e;
// @__NO_SIDE_EFFECTS__
function te(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Qe(e) {
  return Ei(e, !1);
}
function Ei(e, t) {
  return /* @__PURE__ */ te(e) ? e : new Ti(e, t);
}
class Ti {
  constructor(t, s) {
    this.dep = new js(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ H(t), this._value = s ? t : he(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ ue(t) || /* @__PURE__ */ Ne(t);
    t = n ? t : /* @__PURE__ */ H(t), Ee(t, s) && (this._rawValue = t, this._value = n ? t : he(t), this.dep.trigger());
  }
}
function $(e) {
  return /* @__PURE__ */ te(e) ? e.value : e;
}
const Ci = {
  get: (e, t, s) => t === "__v_raw" ? e : $(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return /* @__PURE__ */ te(r) && !/* @__PURE__ */ te(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function ir(e) {
  return /* @__PURE__ */ et(e) ? e : new Proxy(e, Ci);
}
class Ai {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new js(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Et - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    V !== this)
      return Jn(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Xn(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Oi(e, t, s = !1) {
  let n, r;
  return I(e) ? n = e : (n = e.get, r = e.set), new Ai(n, r, s);
}
const $t = {}, Ut = /* @__PURE__ */ new WeakMap();
let Ze;
function Pi(e, t = !1, s = Ze) {
  if (s) {
    let n = Ut.get(s);
    n || Ut.set(s, n = []), n.push(e);
  }
}
function Ri(e, t, s = q) {
  const { immediate: n, deep: r, once: i, scheduler: o, augmentJob: l, call: f } = s, d = (P) => r ? P : /* @__PURE__ */ ue(P) || r === !1 || r === 0 ? Ue(P, 1) : Ue(P);
  let a, p, w, E, N = !1, C = !1;
  if (/* @__PURE__ */ te(e) ? (p = () => e.value, N = /* @__PURE__ */ ue(e)) : /* @__PURE__ */ et(e) ? (p = () => d(e), N = !0) : R(e) ? (C = !0, N = e.some((P) => /* @__PURE__ */ et(P) || /* @__PURE__ */ ue(P)), p = () => e.map((P) => {
    if (/* @__PURE__ */ te(P))
      return P.value;
    if (/* @__PURE__ */ et(P))
      return d(P);
    if (I(P))
      return f ? f(P, 2) : P();
  })) : I(e) ? t ? p = f ? () => f(e, 2) : e : p = () => {
    if (w) {
      De();
      try {
        w();
      } finally {
        Le();
      }
    }
    const P = Ze;
    Ze = a;
    try {
      return f ? f(e, 3, [E]) : e(E);
    } finally {
      Ze = P;
    }
  } : p = Ce, t && r) {
    const P = p, X = r === !0 ? 1 / 0 : r;
    p = () => Ue(P(), X);
  }
  const M = ni(), F = () => {
    a.stop(), M && M.active && Rs(M.effects, a);
  };
  if (i && t) {
    const P = t;
    t = (...X) => {
      P(...X), F();
    };
  }
  let D = C ? new Array(e.length).fill($t) : $t;
  const G = (P) => {
    if (!(!(a.flags & 1) || !a.dirty && !P))
      if (t) {
        const X = a.run();
        if (r || N || (C ? X.some((je, pe) => Ee(je, D[pe])) : Ee(X, D))) {
          w && w();
          const je = Ze;
          Ze = a;
          try {
            const pe = [
              X,
              // pass undefined as the old value when it's changed for the first time
              D === $t ? void 0 : C && D[0] === $t ? [] : D,
              E
            ];
            D = X, f ? f(t, 3, pe) : (
              // @ts-expect-error
              t(...pe)
            );
          } finally {
            Ze = je;
          }
        }
      } else
        a.run();
  };
  return l && l(G), a = new qn(p), a.scheduler = o ? () => o(G, !1) : G, E = (P) => Pi(P, !1, a), w = a.onStop = () => {
    const P = Ut.get(a);
    if (P) {
      if (f)
        f(P, 4);
      else
        for (const X of P) X();
      Ut.delete(a);
    }
  }, t ? n ? G(!0) : D = a.run() : o ? o(G.bind(null, !0), !0) : a.run(), F.pause = a.pause.bind(a), F.resume = a.resume.bind(a), F.stop = F, F;
}
function Ue(e, t = 1 / 0, s) {
  if (t <= 0 || !B(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ te(e))
    Ue(e.value, t, s);
  else if (R(e))
    for (let n = 0; n < e.length; n++)
      Ue(e[n], t, s);
  else if (Nn(e) || it(e))
    e.forEach((n) => {
      Ue(n, t, s);
    });
  else if ($n(e)) {
    for (const n in e)
      Ue(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Ue(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Rt(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    es(r, t, s);
  }
}
function Oe(e, t, s, n) {
  if (I(e)) {
    const r = Rt(e, t, s, n);
    return r && Hn(r) && r.catch((i) => {
      es(i, t, s);
    }), r;
  }
  if (R(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Oe(e[i], t, s, n));
    return r;
  }
}
function es(e, t, s, n = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || q;
  if (t) {
    let l = t.parent;
    const f = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let p = 0; p < a.length; p++)
          if (a[p](e, f, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      De(), Rt(i, null, 10, [
        e,
        f,
        d
      ]), Le();
      return;
    }
  }
  Ii(e, s, r, n, o);
}
function Ii(e, t, s, n = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const re = [];
let ve = -1;
const ot = [];
let We = null, nt = 0;
const or = /* @__PURE__ */ Promise.resolve();
let Vt = null;
function Mi(e) {
  const t = Vt || or;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Fi(e) {
  let t = ve + 1, s = re.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = re[n], i = Ct(r);
    i < e || i === e && r.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function Us(e) {
  if (!(e.flags & 1)) {
    const t = Ct(e), s = re[re.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ct(s) ? re.push(e) : re.splice(Fi(t), 0, e), e.flags |= 1, lr();
  }
}
function lr() {
  Vt || (Vt = or.then(fr));
}
function Di(e) {
  R(e) ? ot.push(...e) : We && e.id === -1 ? We.splice(nt + 1, 0, e) : e.flags & 1 || (ot.push(e), e.flags |= 1), lr();
}
function ln(e, t, s = ve + 1) {
  for (; s < re.length; s++) {
    const n = re[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      re.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function cr(e) {
  if (ot.length) {
    const t = [...new Set(ot)].sort(
      (s, n) => Ct(s) - Ct(n)
    );
    if (ot.length = 0, We) {
      We.push(...t);
      return;
    }
    for (We = t, nt = 0; nt < We.length; nt++) {
      const s = We[nt];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    We = null, nt = 0;
  }
}
const Ct = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function fr(e) {
  try {
    for (ve = 0; ve < re.length; ve++) {
      const t = re[ve];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Rt(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ve < re.length; ve++) {
      const t = re[ve];
      t && (t.flags &= -2);
    }
    ve = -1, re.length = 0, cr(), Vt = null, (re.length || ot.length) && fr();
  }
}
let Te = null, ur = null;
function qt(e) {
  const t = Te;
  return Te = e, ur = e && e.type.__scopeId || null, t;
}
function Li(e, t = Te, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && bn(-1);
    const i = qt(t);
    let o;
    try {
      o = e(...r);
    } finally {
      qt(i), n._d && bn(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Ye(e, t, s, n) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let f = l.dir[n];
    f && (De(), Oe(f, s, 8, [
      e.el,
      l,
      e,
      t
    ]), Le());
  }
}
function Ni(e, t) {
  if (ie) {
    let s = ie.provides;
    const n = ie.parent && ie.parent.provides;
    n === s && (s = ie.provides = Object.create(n)), s[e] = t;
  }
}
function Bt(e, t, s = !1) {
  const n = Bo();
  if (n || lt) {
    let r = lt ? lt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && I(t) ? t.call(n && n.proxy) : t;
  }
}
const Hi = /* @__PURE__ */ Symbol.for("v-scx"), ji = () => Bt(Hi);
function ds(e, t, s) {
  return ar(e, t, s);
}
function ar(e, t, s = q) {
  const { immediate: n, deep: r, flush: i, once: o } = s, l = Q({}, s), f = t && n || !t && i !== "post";
  let d;
  if (Ot) {
    if (i === "sync") {
      const E = ji();
      d = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!f) {
      const E = () => {
      };
      return E.stop = Ce, E.resume = Ce, E.pause = Ce, E;
    }
  }
  const a = ie;
  l.call = (E, N, C) => Oe(E, a, N, C);
  let p = !1;
  i === "post" ? l.scheduler = (E) => {
    oe(E, a && a.suspense);
  } : i !== "sync" && (p = !0, l.scheduler = (E, N) => {
    N ? E() : Us(E);
  }), l.augmentJob = (E) => {
    t && (E.flags |= 4), p && (E.flags |= 2, a && (E.id = a.uid, E.i = a));
  };
  const w = Ri(e, t, l);
  return Ot && (d ? d.push(w) : f && w()), w;
}
function $i(e, t, s) {
  const n = this.proxy, r = z(e) ? e.includes(".") ? dr(n, e) : () => n[e] : e.bind(n, n);
  let i;
  I(t) ? i = t : (i = t.handler, s = t);
  const o = It(this), l = ar(r, i.bind(n), s);
  return o(), l;
}
function dr(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const Bi = /* @__PURE__ */ Symbol("_vte"), Ki = (e) => e.__isTeleport, Wi = /* @__PURE__ */ Symbol("_leaveCb");
function Vs(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Vs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Ui(e, t) {
  return I(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Q({ name: e.name }, t, { setup: e })
  ) : e;
}
function hr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function cn(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const Gt = /* @__PURE__ */ new WeakMap();
function vt(e, t, s, n, r = !1) {
  if (R(e)) {
    e.forEach(
      (C, M) => vt(
        C,
        t && (R(t) ? t[M] : t),
        s,
        n,
        r
      )
    );
    return;
  }
  if (xt(n) && !r) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && vt(e, t, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? zs(n.component) : n.el, o = r ? null : i, { i: l, r: f } = e, d = t && t.r, a = l.refs === q ? l.refs = {} : l.refs, p = l.setupState, w = /* @__PURE__ */ H(p), E = p === q ? Ln : (C) => cn(a, C) ? !1 : j(w, C), N = (C, M) => !(M && cn(a, M));
  if (d != null && d !== f) {
    if (fn(t), z(d))
      a[d] = null, E(d) && (p[d] = null);
    else if (/* @__PURE__ */ te(d)) {
      const C = t;
      N(d, C.k) && (d.value = null), C.k && (a[C.k] = null);
    }
  }
  if (I(f))
    Rt(f, l, 12, [o, a]);
  else {
    const C = z(f), M = /* @__PURE__ */ te(f);
    if (C || M) {
      const F = () => {
        if (e.f) {
          const D = C ? E(f) ? p[f] : a[f] : N() || !e.k ? f.value : a[e.k];
          if (r)
            R(D) && Rs(D, i);
          else if (R(D))
            D.includes(i) || D.push(i);
          else if (C)
            a[f] = [i], E(f) && (p[f] = a[f]);
          else {
            const G = [i];
            N(f, e.k) && (f.value = G), e.k && (a[e.k] = G);
          }
        } else C ? (a[f] = o, E(f) && (p[f] = o)) : M && (N(f, e.k) && (f.value = o), e.k && (a[e.k] = o));
      };
      if (o) {
        const D = () => {
          F(), Gt.delete(e);
        };
        D.id = -1, Gt.set(e, D), oe(D, s);
      } else
        fn(e), F();
    }
  }
}
function fn(e) {
  const t = Gt.get(e);
  t && (t.flags |= 8, Gt.delete(e));
}
Qt().requestIdleCallback;
Qt().cancelIdleCallback;
const xt = (e) => !!e.type.__asyncLoader, pr = (e) => e.type.__isKeepAlive;
function Vi(e, t) {
  gr(e, "a", t);
}
function qi(e, t) {
  gr(e, "da", t);
}
function gr(e, t, s = ie) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (ts(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      pr(r.parent.vnode) && Gi(n, t, s, r), r = r.parent;
  }
}
function Gi(e, t, s, n) {
  const r = ts(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  qs(() => {
    Rs(n[t], r);
  }, s);
}
function ts(e, t, s = ie, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...o) => {
      De();
      const l = It(s), f = Oe(t, s, e, o);
      return l(), Le(), f;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const He = (e) => (t, s = ie) => {
  (!Ot || e === "sp") && ts(e, (...n) => t(...n), s);
}, Ji = He("bm"), _r = He("m"), Yi = He(
  "bu"
), zi = He("u"), Xi = He(
  "bum"
), qs = He("um"), Zi = He(
  "sp"
), Qi = He("rtg"), ki = He("rtc");
function eo(e, t = ie) {
  ts("ec", e, t);
}
const to = /* @__PURE__ */ Symbol.for("v-ndc");
function so(e, t, s, n) {
  let r;
  const i = s, o = R(e);
  if (o || z(e)) {
    const l = o && /* @__PURE__ */ et(e);
    let f = !1, d = !1;
    l && (f = !/* @__PURE__ */ ue(e), d = /* @__PURE__ */ Ne(e), e = kt(e)), r = new Array(e.length);
    for (let a = 0, p = e.length; a < p; a++)
      r[a] = t(
        f ? d ? ct(he(e[a])) : he(e[a]) : e[a],
        a,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if (B(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, f) => t(l, f, void 0, i)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let f = 0, d = l.length; f < d; f++) {
        const a = l[f];
        r[f] = t(e[a], a, f, i);
      }
    }
  else
    r = [];
  return r;
}
const ws = (e) => e ? Hr(e) ? zs(e) : ws(e.parent) : null, St = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Q(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ws(e.parent),
    $root: (e) => ws(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => br(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Us(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Mi.bind(e.proxy)),
    $watch: (e) => $i.bind(e)
  })
), hs = (e, t) => e !== q && !e.__isScriptSetup && j(e, t), no = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: i, accessCache: o, type: l, appContext: f } = e;
    if (t[0] !== "$") {
      const w = o[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return n[t];
          case 2:
            return r[t];
          case 4:
            return s[t];
          case 3:
            return i[t];
        }
      else {
        if (hs(n, t))
          return o[t] = 1, n[t];
        if (r !== q && j(r, t))
          return o[t] = 2, r[t];
        if (j(i, t))
          return o[t] = 3, i[t];
        if (s !== q && j(s, t))
          return o[t] = 4, s[t];
        Es && (o[t] = 0);
      }
    }
    const d = St[t];
    let a, p;
    if (d)
      return t === "$attrs" && ee(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (s !== q && j(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      p = f.config.globalProperties, j(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: r, ctx: i } = e;
    return hs(r, t) ? (r[t] = s, !0) : n !== q && j(n, t) ? (n[t] = s, !0) : j(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, props: i, type: o }
  }, l) {
    let f;
    return !!(s[l] || e !== q && l[0] !== "$" && j(e, l) || hs(t, l) || j(i, l) || j(n, l) || j(St, l) || j(r.config.globalProperties, l) || (f = o.__cssModules) && f[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : j(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function un(e) {
  return R(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Es = !0;
function ro(e) {
  const t = br(e), s = e.proxy, n = e.ctx;
  Es = !1, t.beforeCreate && an(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: f,
    inject: d,
    // lifecycle
    created: a,
    beforeMount: p,
    mounted: w,
    beforeUpdate: E,
    updated: N,
    activated: C,
    deactivated: M,
    beforeDestroy: F,
    beforeUnmount: D,
    destroyed: G,
    unmounted: P,
    render: X,
    renderTracked: je,
    renderTriggered: pe,
    errorCaptured: $e,
    serverPrefetch: Mt,
    // public API
    expose: qe,
    inheritAttrs: ut,
    // assets
    components: Ft,
    directives: Dt,
    filters: rs
  } = t;
  if (d && io(d, n, null), o)
    for (const J in o) {
      const W = o[J];
      I(W) && (n[J] = W.bind(s));
    }
  if (r) {
    const J = r.call(s, s);
    B(J) && (e.data = /* @__PURE__ */ Bs(J));
  }
  if (Es = !0, i)
    for (const J in i) {
      const W = i[J], Ge = I(W) ? W.bind(s, s) : I(W.get) ? W.get.bind(s, s) : Ce, Lt = !I(W) && I(W.set) ? W.set.bind(s) : Ce, Je = $r({
        get: Ge,
        set: Lt
      });
      Object.defineProperty(n, J, {
        enumerable: !0,
        configurable: !0,
        get: () => Je.value,
        set: (ge) => Je.value = ge
      });
    }
  if (l)
    for (const J in l)
      mr(l[J], n, s, J);
  if (f) {
    const J = I(f) ? f.call(s) : f;
    Reflect.ownKeys(J).forEach((W) => {
      Ni(W, J[W]);
    });
  }
  a && an(a, e, "c");
  function se(J, W) {
    R(W) ? W.forEach((Ge) => J(Ge.bind(s))) : W && J(W.bind(s));
  }
  if (se(Ji, p), se(_r, w), se(Yi, E), se(zi, N), se(Vi, C), se(qi, M), se(eo, $e), se(ki, je), se(Qi, pe), se(Xi, D), se(qs, P), se(Zi, Mt), R(qe))
    if (qe.length) {
      const J = e.exposed || (e.exposed = {});
      qe.forEach((W) => {
        Object.defineProperty(J, W, {
          get: () => s[W],
          set: (Ge) => s[W] = Ge,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  X && e.render === Ce && (e.render = X), ut != null && (e.inheritAttrs = ut), Ft && (e.components = Ft), Dt && (e.directives = Dt), Mt && hr(e);
}
function io(e, t, s = Ce) {
  R(e) && (e = Ts(e));
  for (const n in e) {
    const r = e[n];
    let i;
    B(r) ? "default" in r ? i = Bt(
      r.from || n,
      r.default,
      !0
    ) : i = Bt(r.from || n) : i = Bt(r), /* @__PURE__ */ te(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[n] = i;
  }
}
function an(e, t, s) {
  Oe(
    R(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function mr(e, t, s, n) {
  let r = n.includes(".") ? dr(s, n) : () => s[n];
  if (z(e)) {
    const i = t[e];
    I(i) && ds(r, i);
  } else if (I(e))
    ds(r, e.bind(s));
  else if (B(e))
    if (R(e))
      e.forEach((i) => mr(i, t, s, n));
    else {
      const i = I(e.handler) ? e.handler.bind(s) : t[e.handler];
      I(i) && ds(r, i, e);
    }
}
function br(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let f;
  return l ? f = l : !r.length && !s && !n ? f = t : (f = {}, r.length && r.forEach(
    (d) => Jt(f, d, o, !0)
  ), Jt(f, t, o)), B(t) && i.set(t, f), f;
}
function Jt(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t;
  i && Jt(e, i, s, !0), r && r.forEach(
    (o) => Jt(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = oo[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const oo = {
  data: dn,
  props: hn,
  emits: hn,
  // objects
  methods: _t,
  computed: _t,
  // lifecycle
  beforeCreate: ne,
  created: ne,
  beforeMount: ne,
  mounted: ne,
  beforeUpdate: ne,
  updated: ne,
  beforeDestroy: ne,
  beforeUnmount: ne,
  destroyed: ne,
  unmounted: ne,
  activated: ne,
  deactivated: ne,
  errorCaptured: ne,
  serverPrefetch: ne,
  // assets
  components: _t,
  directives: _t,
  // watch
  watch: co,
  // provide / inject
  provide: dn,
  inject: lo
};
function dn(e, t) {
  return t ? e ? function() {
    return Q(
      I(e) ? e.call(this, this) : e,
      I(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function lo(e, t) {
  return _t(Ts(e), Ts(t));
}
function Ts(e) {
  if (R(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function ne(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function _t(e, t) {
  return e ? Q(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function hn(e, t) {
  return e ? R(e) && R(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Q(
    /* @__PURE__ */ Object.create(null),
    un(e),
    un(t ?? {})
  ) : t;
}
function co(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = Q(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = ne(e[n], t[n]);
  return s;
}
function yr() {
  return {
    app: null,
    config: {
      isNativeTag: Ln,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let fo = 0;
function uo(e, t) {
  return function(n, r = null) {
    I(n) || (n = Q({}, n)), r != null && !B(r) && (r = null);
    const i = yr(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const d = i.app = {
      _uid: fo++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Go,
      get config() {
        return i.config;
      },
      set config(a) {
      },
      use(a, ...p) {
        return o.has(a) || (a && I(a.install) ? (o.add(a), a.install(d, ...p)) : I(a) && (o.add(a), a(d, ...p))), d;
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), d;
      },
      component(a, p) {
        return p ? (i.components[a] = p, d) : i.components[a];
      },
      directive(a, p) {
        return p ? (i.directives[a] = p, d) : i.directives[a];
      },
      mount(a, p, w) {
        if (!f) {
          const E = d._ceVNode || Fe(n, r);
          return E.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(E, a, w), f = !0, d._container = a, a.__vue_app__ = d, zs(E.component);
        }
      },
      onUnmount(a) {
        l.push(a);
      },
      unmount() {
        f && (Oe(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(a, p) {
        return i.provides[a] = p, d;
      },
      runWithContext(a) {
        const p = lt;
        lt = d;
        try {
          return a();
        } finally {
          lt = p;
        }
      }
    };
    return d;
  };
}
let lt = null;
const ao = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ae(t)}Modifiers`] || e[`${tt(t)}Modifiers`];
function ho(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || q;
  let r = s;
  const i = t.startsWith("update:"), o = i && ao(n, t.slice(7));
  o && (o.trim && (r = s.map((a) => z(a) ? a.trim() : a)), o.number && (r = s.map(Yr)));
  let l, f = n[l = os(t)] || // also try camelCase event handler (#2249)
  n[l = os(ae(t))];
  !f && i && (f = n[l = os(tt(t))]), f && Oe(
    f,
    e,
    6,
    r
  );
  const d = n[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Oe(
      d,
      e,
      6,
      r
    );
  }
}
const po = /* @__PURE__ */ new WeakMap();
function vr(e, t, s = !1) {
  const n = s ? po : t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!I(e)) {
    const f = (d) => {
      const a = vr(d, t, !0);
      a && (l = !0, Q(o, a));
    };
    !s && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !l ? (B(e) && n.set(e, null), null) : (R(i) ? i.forEach((f) => o[f] = null) : Q(o, i), B(e) && n.set(e, o), o);
}
function ss(e, t) {
  return !e || !zt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), j(e, t[0].toLowerCase() + t.slice(1)) || j(e, tt(t)) || j(e, t));
}
function pn(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: f,
    render: d,
    renderCache: a,
    props: p,
    data: w,
    setupState: E,
    ctx: N,
    inheritAttrs: C
  } = e, M = qt(e);
  let F, D;
  try {
    if (s.shapeFlag & 4) {
      const P = r || n, X = P;
      F = we(
        d.call(
          X,
          P,
          a,
          p,
          E,
          w,
          N
        )
      ), D = l;
    } else {
      const P = t;
      F = we(
        P.length > 1 ? P(
          p,
          { attrs: l, slots: o, emit: f }
        ) : P(
          p,
          null
        )
      ), D = t.props ? l : go(l);
    }
  } catch (P) {
    wt.length = 0, es(P, e, 1), F = Fe(Ve);
  }
  let G = F;
  if (D && C !== !1) {
    const P = Object.keys(D), { shapeFlag: X } = G;
    P.length && X & 7 && (i && P.some(Xt) && (D = _o(
      D,
      i
    )), G = ft(G, D, !1, !0));
  }
  return s.dirs && (G = ft(G, null, !1, !0), G.dirs = G.dirs ? G.dirs.concat(s.dirs) : s.dirs), s.transition && Vs(G, s.transition), F = G, qt(M), F;
}
const go = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || zt(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, _o = (e, t) => {
  const s = {};
  for (const n in e)
    (!Xt(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function mo(e, t, s) {
  const { props: n, children: r, component: i } = e, { props: o, children: l, patchFlag: f } = t, d = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return n ? gn(n, o, d) : !!o;
    if (f & 8) {
      const a = t.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        const w = a[p];
        if (xr(o, n, w) && !ss(d, w))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? gn(n, o, d) : !0 : !!o;
  return !1;
}
function gn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (xr(t, e, i) && !ss(s, i))
      return !0;
  }
  return !1;
}
function xr(e, t, s) {
  const n = e[s], r = t[s];
  return s === "style" && B(n) && B(r) ? !Ds(n, r) : n !== r;
}
function bo({ vnode: e, parent: t, suspense: s }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = n, e = r), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  s && s.activeBranch === e && (s.vnode.el = n);
}
const Sr = {}, wr = () => Object.create(Sr), Er = (e) => Object.getPrototypeOf(e) === Sr;
function yo(e, t, s, n = !1) {
  const r = {}, i = wr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Tr(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  s ? e.props = n ? r : /* @__PURE__ */ Si(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function vo(e, t, s, n) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ H(r), [f] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        let w = a[p];
        if (ss(e.emitsOptions, w))
          continue;
        const E = t[w];
        if (f)
          if (j(i, w))
            E !== i[w] && (i[w] = E, d = !0);
          else {
            const N = ae(w);
            r[N] = Cs(
              f,
              l,
              N,
              E,
              e,
              !1
            );
          }
        else
          E !== i[w] && (i[w] = E, d = !0);
      }
    }
  } else {
    Tr(e, t, r, i) && (d = !0);
    let a;
    for (const p in l)
      (!t || // for camelCase
      !j(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = tt(p)) === p || !j(t, a))) && (f ? s && // for camelCase
      (s[p] !== void 0 || // for kebab-case
      s[a] !== void 0) && (r[p] = Cs(
        f,
        l,
        p,
        void 0,
        e,
        !0
      )) : delete r[p]);
    if (i !== l)
      for (const p in i)
        (!t || !j(t, p)) && (delete i[p], d = !0);
  }
  d && Me(e.attrs, "set", "");
}
function Tr(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let f in t) {
      if (mt(f))
        continue;
      const d = t[f];
      let a;
      r && j(r, a = ae(f)) ? !i || !i.includes(a) ? s[a] = d : (l || (l = {}))[a] = d : ss(e.emitsOptions, f) || (!(f in n) || d !== n[f]) && (n[f] = d, o = !0);
    }
  if (i) {
    const f = /* @__PURE__ */ H(s), d = l || q;
    for (let a = 0; a < i.length; a++) {
      const p = i[a];
      s[p] = Cs(
        r,
        f,
        p,
        d[p],
        e,
        !j(d, p)
      );
    }
  }
  return o;
}
function Cs(e, t, s, n, r, i) {
  const o = e[s];
  if (o != null) {
    const l = j(o, "default");
    if (l && n === void 0) {
      const f = o.default;
      if (o.type !== Function && !o.skipFactory && I(f)) {
        const { propsDefaults: d } = r;
        if (s in d)
          n = d[s];
        else {
          const a = It(r);
          n = d[s] = f.call(
            null,
            t
          ), a();
        }
      } else
        n = f;
      r.ce && r.ce._setProp(s, n);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === tt(s)) && (n = !0));
  }
  return n;
}
const xo = /* @__PURE__ */ new WeakMap();
function Cr(e, t, s = !1) {
  const n = s ? xo : t.propsCache, r = n.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let f = !1;
  if (!I(e)) {
    const a = (p) => {
      f = !0;
      const [w, E] = Cr(p, t, !0);
      Q(o, w), E && l.push(...E);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!i && !f)
    return B(e) && n.set(e, rt), rt;
  if (R(i))
    for (let a = 0; a < i.length; a++) {
      const p = ae(i[a]);
      _n(p) && (o[p] = q);
    }
  else if (i)
    for (const a in i) {
      const p = ae(a);
      if (_n(p)) {
        const w = i[a], E = o[p] = R(w) || I(w) ? { type: w } : Q({}, w), N = E.type;
        let C = !1, M = !0;
        if (R(N))
          for (let F = 0; F < N.length; ++F) {
            const D = N[F], G = I(D) && D.name;
            if (G === "Boolean") {
              C = !0;
              break;
            } else G === "String" && (M = !1);
          }
        else
          C = I(N) && N.name === "Boolean";
        E[
          0
          /* shouldCast */
        ] = C, E[
          1
          /* shouldCastTrue */
        ] = M, (C || j(E, "default")) && l.push(p);
      }
    }
  const d = [o, l];
  return B(e) && n.set(e, d), d;
}
function _n(e) {
  return e[0] !== "$" && !mt(e);
}
const Gs = (e) => e === "_" || e === "_ctx" || e === "$stable", Js = (e) => R(e) ? e.map(we) : [we(e)], So = (e, t, s) => {
  if (t._n)
    return t;
  const n = Li((...r) => Js(t(...r)), s);
  return n._c = !1, n;
}, Ar = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (Gs(r)) continue;
    const i = e[r];
    if (I(i))
      t[r] = So(r, i, n);
    else if (i != null) {
      const o = Js(i);
      t[r] = () => o;
    }
  }
}, Or = (e, t) => {
  const s = Js(t);
  e.slots.default = () => s;
}, Pr = (e, t, s) => {
  for (const n in t)
    (s || !Gs(n)) && (e[n] = t[n]);
}, wo = (e, t, s) => {
  const n = e.slots = wr();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Pr(n, t, s), s && Kn(n, "_", r, !0)) : Ar(t, n);
  } else t && Or(e, t);
}, Eo = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let i = !0, o = q;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? i = !1 : Pr(r, t, s) : (i = !t.$stable, Ar(t, r)), o = t;
  } else t && (Or(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !Gs(l) && o[l] == null && delete r[l];
}, oe = Po;
function To(e) {
  return Co(e);
}
function Co(e, t) {
  const s = Qt();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: f,
    setText: d,
    setElementText: a,
    parentNode: p,
    nextSibling: w,
    setScopeId: E = Ce,
    insertStaticContent: N
  } = e, C = (c, u, h, b = null, g = null, _ = null, x = void 0, v = null, y = !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !gt(c, u) && (b = Nt(c), ge(c, g, _, !0), c = null), u.patchFlag === -2 && (y = !1, u.dynamicChildren = null);
    const { type: m, ref: A, shapeFlag: S } = u;
    switch (m) {
      case ns:
        M(c, u, h, b);
        break;
      case Ve:
        F(c, u, h, b);
        break;
      case gs:
        c == null && D(u, h, b, x);
        break;
      case Se:
        Ft(
          c,
          u,
          h,
          b,
          g,
          _,
          x,
          v,
          y
        );
        break;
      default:
        S & 1 ? X(
          c,
          u,
          h,
          b,
          g,
          _,
          x,
          v,
          y
        ) : S & 6 ? Dt(
          c,
          u,
          h,
          b,
          g,
          _,
          x,
          v,
          y
        ) : (S & 64 || S & 128) && m.process(
          c,
          u,
          h,
          b,
          g,
          _,
          x,
          v,
          y,
          dt
        );
    }
    A != null && g ? vt(A, c && c.ref, _, u || c, !u) : A == null && c && c.ref != null && vt(c.ref, null, _, c, !0);
  }, M = (c, u, h, b) => {
    if (c == null)
      n(
        u.el = l(u.children),
        h,
        b
      );
    else {
      const g = u.el = c.el;
      u.children !== c.children && d(g, u.children);
    }
  }, F = (c, u, h, b) => {
    c == null ? n(
      u.el = f(u.children || ""),
      h,
      b
    ) : u.el = c.el;
  }, D = (c, u, h, b) => {
    [c.el, c.anchor] = N(
      c.children,
      u,
      h,
      b,
      c.el,
      c.anchor
    );
  }, G = ({ el: c, anchor: u }, h, b) => {
    let g;
    for (; c && c !== u; )
      g = w(c), n(c, h, b), c = g;
    n(u, h, b);
  }, P = ({ el: c, anchor: u }) => {
    let h;
    for (; c && c !== u; )
      h = w(c), r(c), c = h;
    r(u);
  }, X = (c, u, h, b, g, _, x, v, y) => {
    if (u.type === "svg" ? x = "svg" : u.type === "math" && (x = "mathml"), c == null)
      je(
        u,
        h,
        b,
        g,
        _,
        x,
        v,
        y
      );
    else {
      const m = c.el && c.el._isVueCE ? c.el : null;
      try {
        m && m._beginPatch(), Mt(
          c,
          u,
          g,
          _,
          x,
          v,
          y
        );
      } finally {
        m && m._endPatch();
      }
    }
  }, je = (c, u, h, b, g, _, x, v) => {
    let y, m;
    const { props: A, shapeFlag: S, transition: T, dirs: O } = c;
    if (y = c.el = o(
      c.type,
      _,
      A && A.is,
      A
    ), S & 8 ? a(y, c.children) : S & 16 && $e(
      c.children,
      y,
      null,
      b,
      g,
      ps(c, _),
      x,
      v
    ), O && Ye(c, null, b, "created"), pe(y, c, c.scopeId, x, b), A) {
      for (const K in A)
        K !== "value" && !mt(K) && i(y, K, null, A[K], _, b);
      "value" in A && i(y, "value", null, A.value, _), (m = A.onVnodeBeforeMount) && ye(m, b, c);
    }
    O && Ye(c, null, b, "beforeMount");
    const L = Ao(g, T);
    L && T.beforeEnter(y), n(y, u, h), ((m = A && A.onVnodeMounted) || L || O) && oe(() => {
      try {
        m && ye(m, b, c), L && T.enter(y), O && Ye(c, null, b, "mounted");
      } finally {
      }
    }, g);
  }, pe = (c, u, h, b, g) => {
    if (h && E(c, h), b)
      for (let _ = 0; _ < b.length; _++)
        E(c, b[_]);
    if (g) {
      let _ = g.subTree;
      if (u === _ || Fr(_.type) && (_.ssContent === u || _.ssFallback === u)) {
        const x = g.vnode;
        pe(
          c,
          x,
          x.scopeId,
          x.slotScopeIds,
          g.parent
        );
      }
    }
  }, $e = (c, u, h, b, g, _, x, v, y = 0) => {
    for (let m = y; m < c.length; m++) {
      const A = c[m] = v ? Ie(c[m]) : we(c[m]);
      C(
        null,
        A,
        u,
        h,
        b,
        g,
        _,
        x,
        v
      );
    }
  }, Mt = (c, u, h, b, g, _, x) => {
    const v = u.el = c.el;
    let { patchFlag: y, dynamicChildren: m, dirs: A } = u;
    y |= c.patchFlag & 16;
    const S = c.props || q, T = u.props || q;
    let O;
    if (h && ze(h, !1), (O = T.onVnodeBeforeUpdate) && ye(O, h, u, c), A && Ye(u, c, h, "beforeUpdate"), h && ze(h, !0), (S.innerHTML && T.innerHTML == null || S.textContent && T.textContent == null) && a(v, ""), m ? qe(
      c.dynamicChildren,
      m,
      v,
      h,
      b,
      ps(u, g),
      _
    ) : x || W(
      c,
      u,
      v,
      null,
      h,
      b,
      ps(u, g),
      _,
      !1
    ), y > 0) {
      if (y & 16)
        ut(v, S, T, h, g);
      else if (y & 2 && S.class !== T.class && i(v, "class", null, T.class, g), y & 4 && i(v, "style", S.style, T.style, g), y & 8) {
        const L = u.dynamicProps;
        for (let K = 0; K < L.length; K++) {
          const U = L[K], Y = S[U], Z = T[U];
          (Z !== Y || U === "value") && i(v, U, Y, Z, g, h);
        }
      }
      y & 1 && c.children !== u.children && a(v, u.children);
    } else !x && m == null && ut(v, S, T, h, g);
    ((O = T.onVnodeUpdated) || A) && oe(() => {
      O && ye(O, h, u, c), A && Ye(u, c, h, "updated");
    }, b);
  }, qe = (c, u, h, b, g, _, x) => {
    for (let v = 0; v < u.length; v++) {
      const y = c[v], m = u[v], A = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === Se || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !gt(y, m) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 198) ? p(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      C(
        y,
        m,
        A,
        null,
        b,
        g,
        _,
        x,
        !0
      );
    }
  }, ut = (c, u, h, b, g) => {
    if (u !== h) {
      if (u !== q)
        for (const _ in u)
          !mt(_) && !(_ in h) && i(
            c,
            _,
            u[_],
            null,
            g,
            b
          );
      for (const _ in h) {
        if (mt(_)) continue;
        const x = h[_], v = u[_];
        x !== v && _ !== "value" && i(c, _, v, x, g, b);
      }
      "value" in h && i(c, "value", u.value, h.value, g);
    }
  }, Ft = (c, u, h, b, g, _, x, v, y) => {
    const m = u.el = c ? c.el : l(""), A = u.anchor = c ? c.anchor : l("");
    let { patchFlag: S, dynamicChildren: T, slotScopeIds: O } = u;
    O && (v = v ? v.concat(O) : O), c == null ? (n(m, h, b), n(A, h, b), $e(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      A,
      g,
      _,
      x,
      v,
      y
    )) : S > 0 && S & 64 && T && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === T.length ? (qe(
      c.dynamicChildren,
      T,
      h,
      g,
      _,
      x,
      v
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || g && u === g.subTree) && Rr(
      c,
      u,
      !0
      /* shallow */
    )) : W(
      c,
      u,
      h,
      A,
      g,
      _,
      x,
      v,
      y
    );
  }, Dt = (c, u, h, b, g, _, x, v, y) => {
    u.slotScopeIds = v, c == null ? u.shapeFlag & 512 ? g.ctx.activate(
      u,
      h,
      b,
      x,
      y
    ) : rs(
      u,
      h,
      b,
      g,
      _,
      x,
      y
    ) : Xs(c, u, y);
  }, rs = (c, u, h, b, g, _, x) => {
    const v = c.component = $o(
      c,
      b,
      g
    );
    if (pr(c) && (v.ctx.renderer = dt), Ko(v, !1, x), v.asyncDep) {
      if (g && g.registerDep(v, se, x), !c.el) {
        const y = v.subTree = Fe(Ve);
        F(null, y, u, h), c.placeholder = y.el;
      }
    } else
      se(
        v,
        c,
        u,
        h,
        g,
        _,
        x
      );
  }, Xs = (c, u, h) => {
    const b = u.component = c.component;
    if (mo(c, u, h))
      if (b.asyncDep && !b.asyncResolved) {
        J(b, u, h);
        return;
      } else
        b.next = u, b.update();
    else
      u.el = c.el, b.vnode = u;
  }, se = (c, u, h, b, g, _, x) => {
    const v = () => {
      if (c.isMounted) {
        let { next: S, bu: T, u: O, parent: L, vnode: K } = c;
        {
          const me = Ir(c);
          if (me) {
            S && (S.el = K.el, J(c, S, x)), me.asyncDep.then(() => {
              oe(() => {
                c.isUnmounted || m();
              }, g);
            });
            return;
          }
        }
        let U = S, Y;
        ze(c, !1), S ? (S.el = K.el, J(c, S, x)) : S = K, T && ls(T), (Y = S.props && S.props.onVnodeBeforeUpdate) && ye(Y, L, S, K), ze(c, !0);
        const Z = pn(c), _e = c.subTree;
        c.subTree = Z, C(
          _e,
          Z,
          // parent may have changed if it's in a teleport
          p(_e.el),
          // anchor may have changed if it's in a fragment
          Nt(_e),
          c,
          g,
          _
        ), S.el = Z.el, U === null && bo(c, Z.el), O && oe(O, g), (Y = S.props && S.props.onVnodeUpdated) && oe(
          () => ye(Y, L, S, K),
          g
        );
      } else {
        let S;
        const { el: T, props: O } = u, { bm: L, m: K, parent: U, root: Y, type: Z } = c, _e = xt(u);
        ze(c, !1), L && ls(L), !_e && (S = O && O.onVnodeBeforeMount) && ye(S, U, u), ze(c, !0);
        {
          Y.ce && Y.ce._hasShadowRoot() && Y.ce._injectChildStyle(
            Z,
            c.parent ? c.parent.type : void 0
          );
          const me = c.subTree = pn(c);
          C(
            null,
            me,
            h,
            b,
            c,
            g,
            _
          ), u.el = me.el;
        }
        if (K && oe(K, g), !_e && (S = O && O.onVnodeMounted)) {
          const me = u;
          oe(
            () => ye(S, U, me),
            g
          );
        }
        (u.shapeFlag & 256 || U && xt(U.vnode) && U.vnode.shapeFlag & 256) && c.a && oe(c.a, g), c.isMounted = !0, u = h = b = null;
      }
    };
    c.scope.on();
    const y = c.effect = new qn(v);
    c.scope.off();
    const m = c.update = y.run.bind(y), A = c.job = y.runIfDirty.bind(y);
    A.i = c, A.id = c.uid, y.scheduler = () => Us(A), ze(c, !0), m();
  }, J = (c, u, h) => {
    u.component = c;
    const b = c.vnode.props;
    c.vnode = u, c.next = null, vo(c, u.props, b, h), Eo(c, u.children, h), De(), ln(c), Le();
  }, W = (c, u, h, b, g, _, x, v, y = !1) => {
    const m = c && c.children, A = c ? c.shapeFlag : 0, S = u.children, { patchFlag: T, shapeFlag: O } = u;
    if (T > 0) {
      if (T & 128) {
        Lt(
          m,
          S,
          h,
          b,
          g,
          _,
          x,
          v,
          y
        );
        return;
      } else if (T & 256) {
        Ge(
          m,
          S,
          h,
          b,
          g,
          _,
          x,
          v,
          y
        );
        return;
      }
    }
    O & 8 ? (A & 16 && at(m, g, _), S !== m && a(h, S)) : A & 16 ? O & 16 ? Lt(
      m,
      S,
      h,
      b,
      g,
      _,
      x,
      v,
      y
    ) : at(m, g, _, !0) : (A & 8 && a(h, ""), O & 16 && $e(
      S,
      h,
      b,
      g,
      _,
      x,
      v,
      y
    ));
  }, Ge = (c, u, h, b, g, _, x, v, y) => {
    c = c || rt, u = u || rt;
    const m = c.length, A = u.length, S = Math.min(m, A);
    let T;
    for (T = 0; T < S; T++) {
      const O = u[T] = y ? Ie(u[T]) : we(u[T]);
      C(
        c[T],
        O,
        h,
        null,
        g,
        _,
        x,
        v,
        y
      );
    }
    m > A ? at(
      c,
      g,
      _,
      !0,
      !1,
      S
    ) : $e(
      u,
      h,
      b,
      g,
      _,
      x,
      v,
      y,
      S
    );
  }, Lt = (c, u, h, b, g, _, x, v, y) => {
    let m = 0;
    const A = u.length;
    let S = c.length - 1, T = A - 1;
    for (; m <= S && m <= T; ) {
      const O = c[m], L = u[m] = y ? Ie(u[m]) : we(u[m]);
      if (gt(O, L))
        C(
          O,
          L,
          h,
          null,
          g,
          _,
          x,
          v,
          y
        );
      else
        break;
      m++;
    }
    for (; m <= S && m <= T; ) {
      const O = c[S], L = u[T] = y ? Ie(u[T]) : we(u[T]);
      if (gt(O, L))
        C(
          O,
          L,
          h,
          null,
          g,
          _,
          x,
          v,
          y
        );
      else
        break;
      S--, T--;
    }
    if (m > S) {
      if (m <= T) {
        const O = T + 1, L = O < A ? u[O].el : b;
        for (; m <= T; )
          C(
            null,
            u[m] = y ? Ie(u[m]) : we(u[m]),
            h,
            L,
            g,
            _,
            x,
            v,
            y
          ), m++;
      }
    } else if (m > T)
      for (; m <= S; )
        ge(c[m], g, _, !0), m++;
    else {
      const O = m, L = m, K = /* @__PURE__ */ new Map();
      for (m = L; m <= T; m++) {
        const ce = u[m] = y ? Ie(u[m]) : we(u[m]);
        ce.key != null && K.set(ce.key, m);
      }
      let U, Y = 0;
      const Z = T - L + 1;
      let _e = !1, me = 0;
      const ht = new Array(Z);
      for (m = 0; m < Z; m++) ht[m] = 0;
      for (m = O; m <= S; m++) {
        const ce = c[m];
        if (Y >= Z) {
          ge(ce, g, _, !0);
          continue;
        }
        let be;
        if (ce.key != null)
          be = K.get(ce.key);
        else
          for (U = L; U <= T; U++)
            if (ht[U - L] === 0 && gt(ce, u[U])) {
              be = U;
              break;
            }
        be === void 0 ? ge(ce, g, _, !0) : (ht[be - L] = m + 1, be >= me ? me = be : _e = !0, C(
          ce,
          u[be],
          h,
          null,
          g,
          _,
          x,
          v,
          y
        ), Y++);
      }
      const ks = _e ? Oo(ht) : rt;
      for (U = ks.length - 1, m = Z - 1; m >= 0; m--) {
        const ce = L + m, be = u[ce], en = u[ce + 1], tn = ce + 1 < A ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          en.el || Mr(en)
        ) : b;
        ht[m] === 0 ? C(
          null,
          be,
          h,
          tn,
          g,
          _,
          x,
          v,
          y
        ) : _e && (U < 0 || m !== ks[U] ? Je(be, h, tn, 2) : U--);
      }
    }
  }, Je = (c, u, h, b, g = null) => {
    const { el: _, type: x, transition: v, children: y, shapeFlag: m } = c;
    if (m & 6) {
      Je(c.component.subTree, u, h, b);
      return;
    }
    if (m & 128) {
      c.suspense.move(u, h, b);
      return;
    }
    if (m & 64) {
      x.move(c, u, h, dt);
      return;
    }
    if (x === Se) {
      n(_, u, h);
      for (let S = 0; S < y.length; S++)
        Je(y[S], u, h, b);
      n(c.anchor, u, h);
      return;
    }
    if (x === gs) {
      G(c, u, h);
      return;
    }
    if (b !== 2 && m & 1 && v)
      if (b === 0)
        v.beforeEnter(_), n(_, u, h), oe(() => v.enter(_), g);
      else {
        const { leave: S, delayLeave: T, afterLeave: O } = v, L = () => {
          c.ctx.isUnmounted ? r(_) : n(_, u, h);
        }, K = () => {
          _._isLeaving && _[Wi](
            !0
            /* cancelled */
          ), S(_, () => {
            L(), O && O();
          });
        };
        T ? T(_, L, K) : K();
      }
    else
      n(_, u, h);
  }, ge = (c, u, h, b = !1, g = !1) => {
    const {
      type: _,
      props: x,
      ref: v,
      children: y,
      dynamicChildren: m,
      shapeFlag: A,
      patchFlag: S,
      dirs: T,
      cacheIndex: O,
      memo: L
    } = c;
    if (S === -2 && (g = !1), v != null && (De(), vt(v, null, h, c, !0), Le()), O != null && (u.renderCache[O] = void 0), A & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const K = A & 1 && T, U = !xt(c);
    let Y;
    if (U && (Y = x && x.onVnodeBeforeUnmount) && ye(Y, u, c), A & 6)
      Ur(c.component, h, b);
    else {
      if (A & 128) {
        c.suspense.unmount(h, b);
        return;
      }
      K && Ye(c, null, u, "beforeUnmount"), A & 64 ? c.type.remove(
        c,
        u,
        h,
        dt,
        b
      ) : m && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !m.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== Se || S > 0 && S & 64) ? at(
        m,
        u,
        h,
        !1,
        !0
      ) : (_ === Se && S & 384 || !g && A & 16) && at(y, u, h), b && Zs(c);
    }
    const Z = L != null && O == null;
    (U && (Y = x && x.onVnodeUnmounted) || K || Z) && oe(() => {
      Y && ye(Y, u, c), K && Ye(c, null, u, "unmounted"), Z && (c.el = null);
    }, h);
  }, Zs = (c) => {
    const { type: u, el: h, anchor: b, transition: g } = c;
    if (u === Se) {
      Wr(h, b);
      return;
    }
    if (u === gs) {
      P(c);
      return;
    }
    const _ = () => {
      r(h), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (c.shapeFlag & 1 && g && !g.persisted) {
      const { leave: x, delayLeave: v } = g, y = () => x(h, _);
      v ? v(c.el, _, y) : y();
    } else
      _();
  }, Wr = (c, u) => {
    let h;
    for (; c !== u; )
      h = w(c), r(c), c = h;
    r(u);
  }, Ur = (c, u, h) => {
    const { bum: b, scope: g, job: _, subTree: x, um: v, m: y, a: m } = c;
    mn(y), mn(m), b && ls(b), g.stop(), _ && (_.flags |= 8, ge(x, c, u, h)), v && oe(v, u), oe(() => {
      c.isUnmounted = !0;
    }, u);
  }, at = (c, u, h, b = !1, g = !1, _ = 0) => {
    for (let x = _; x < c.length; x++)
      ge(c[x], u, h, b, g);
  }, Nt = (c) => {
    if (c.shapeFlag & 6)
      return Nt(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = w(c.anchor || c.el), h = u && u[Bi];
    return h ? w(h) : u;
  };
  let is = !1;
  const Qs = (c, u, h) => {
    let b;
    c == null ? u._vnode && (ge(u._vnode, null, null, !0), b = u._vnode.component) : C(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = c, is || (is = !0, ln(b), cr(), is = !1);
  }, dt = {
    p: C,
    um: ge,
    m: Je,
    r: Zs,
    mt: rs,
    mc: $e,
    pc: W,
    pbc: qe,
    n: Nt,
    o: e
  };
  return {
    render: Qs,
    hydrate: void 0,
    createApp: uo(Qs)
  };
}
function ps({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function ze({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ao(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Rr(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (R(n) && R(r))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Ie(r[i]), l.el = o.el), !s && l.patchFlag !== -2 && Rr(o, l)), l.type === ns && (l.patchFlag === -1 && (l = r[i] = Ie(l)), l.el = o.el), l.type === Ve && !l.el && (l.el = o.el);
    }
}
function Oo(e) {
  const t = e.slice(), s = [0];
  let n, r, i, o, l;
  const f = e.length;
  for (n = 0; n < f; n++) {
    const d = e[n];
    if (d !== 0) {
      if (r = s[s.length - 1], e[r] < d) {
        t[n] = r, s.push(n);
        continue;
      }
      for (i = 0, o = s.length - 1; i < o; )
        l = i + o >> 1, e[s[l]] < d ? i = l + 1 : o = l;
      d < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), s[i] = n);
    }
  }
  for (i = s.length, o = s[i - 1]; i-- > 0; )
    s[i] = o, o = t[o];
  return s;
}
function Ir(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ir(t);
}
function mn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Mr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Mr(t.subTree) : null;
}
const Fr = (e) => e.__isSuspense;
function Po(e, t) {
  t && t.pendingBranch ? R(e) ? t.effects.push(...e) : t.effects.push(e) : Di(e);
}
const Se = /* @__PURE__ */ Symbol.for("v-fgt"), ns = /* @__PURE__ */ Symbol.for("v-txt"), Ve = /* @__PURE__ */ Symbol.for("v-cmt"), gs = /* @__PURE__ */ Symbol.for("v-stc"), wt = [];
let fe = null;
function Ke(e = !1) {
  wt.push(fe = e ? null : []);
}
function Ro() {
  wt.pop(), fe = wt[wt.length - 1] || null;
}
let At = 1;
function bn(e, t = !1) {
  At += e, e < 0 && fe && t && (fe.hasOnce = !0);
}
function Dr(e) {
  return e.dynamicChildren = At > 0 ? fe || rt : null, Ro(), At > 0 && fe && fe.push(e), e;
}
function Xe(e, t, s, n, r, i) {
  return Dr(
    k(
      e,
      t,
      s,
      n,
      r,
      i,
      !0
    )
  );
}
function Io(e, t, s, n, r) {
  return Dr(
    Fe(
      e,
      t,
      s,
      n,
      r,
      !0
    )
  );
}
function Lr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function gt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Nr = ({ key: e }) => e ?? null, Kt = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? z(e) || /* @__PURE__ */ te(e) || I(e) ? { i: Te, r: e, k: t, f: !!s } : e : null);
function k(e, t = null, s = null, n = 0, r = null, i = e === Se ? 0 : 1, o = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Nr(t),
    ref: t && Kt(t),
    scopeId: ur,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Te
  };
  return l ? (Ys(f, s), i & 128 && e.normalize(f)) : s && (f.shapeFlag |= z(s) ? 8 : 16), At > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  fe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && fe.push(f), f;
}
const Fe = Mo;
function Mo(e, t = null, s = null, n = 0, r = null, i = !1) {
  if ((!e || e === to) && (e = Ve), Lr(e)) {
    const l = ft(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Ys(l, s), At > 0 && !i && fe && (l.shapeFlag & 6 ? fe[fe.indexOf(e)] = l : fe.push(l)), l.patchFlag = -2, l;
  }
  if (qo(e) && (e = e.__vccOpts), t) {
    t = Fo(t);
    let { class: l, style: f } = t;
    l && !z(l) && (t.class = Fs(l)), B(f) && (/* @__PURE__ */ Ws(f) && !R(f) && (f = Q({}, f)), t.style = Ms(f));
  }
  const o = z(e) ? 1 : Fr(e) ? 128 : Ki(e) ? 64 : B(e) ? 4 : I(e) ? 2 : 0;
  return k(
    e,
    t,
    s,
    n,
    r,
    o,
    i,
    !0
  );
}
function Fo(e) {
  return e ? /* @__PURE__ */ Ws(e) || Er(e) ? Q({}, e) : e : null;
}
function ft(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: f } = e, d = t ? No(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Nr(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? R(i) ? i.concat(Kt(t)) : [i, Kt(t)] : Kt(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Se ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ft(e.ssContent),
    ssFallback: e.ssFallback && ft(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && n && Vs(
    a,
    f.clone(a)
  ), a;
}
function Do(e = " ", t = 0) {
  return Fe(ns, null, e, t);
}
function Lo(e = "", t = !1) {
  return t ? (Ke(), Io(Ve, null, e)) : Fe(Ve, null, e);
}
function we(e) {
  return e == null || typeof e == "boolean" ? Fe(Ve) : R(e) ? Fe(
    Se,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Lr(e) ? Ie(e) : Fe(ns, null, String(e));
}
function Ie(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ft(e);
}
function Ys(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (R(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ys(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !Er(t) ? t._ctx = Te : r === 3 && Te && (Te.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else I(t) ? (t = { default: t, _ctx: Te }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Do(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function No(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = Fs([t.class, n.class]));
      else if (r === "style")
        t.style = Ms([t.style, n.style]);
      else if (zt(r)) {
        const i = t[r], o = n[r];
        o && i !== o && !(R(i) && i.includes(o)) ? t[r] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Xt(r) && (t[r] = o);
      } else r !== "" && (t[r] = n[r]);
  }
  return t;
}
function ye(e, t, s, n = null) {
  Oe(e, t, 7, [
    s,
    n
  ]);
}
const Ho = yr();
let jo = 0;
function $o(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || Ho, i = {
    uid: jo++,
    vnode: e,
    type: n,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new si(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Cr(n, r),
    emitsOptions: vr(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: q,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: q,
    data: q,
    props: q,
    attrs: q,
    slots: q,
    refs: q,
    setupState: q,
    setupContext: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = ho.bind(null, i), e.ce && e.ce(i), i;
}
let ie = null;
const Bo = () => ie || Te;
let Yt, As;
{
  const e = Qt(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Yt = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => ie = s
  ), As = t(
    "__VUE_SSR_SETTERS__",
    (s) => Ot = s
  );
}
const It = (e) => {
  const t = ie;
  return Yt(e), e.scope.on(), () => {
    e.scope.off(), Yt(t);
  };
}, yn = () => {
  ie && ie.scope.off(), Yt(null);
};
function Hr(e) {
  return e.vnode.shapeFlag & 4;
}
let Ot = !1;
function Ko(e, t = !1, s = !1) {
  t && As(t);
  const { props: n, children: r } = e.vnode, i = Hr(e);
  yo(e, n, i, t), wo(e, r, s || t);
  const o = i ? Wo(e, t) : void 0;
  return t && As(!1), o;
}
function Wo(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, no);
  const { setup: n } = s;
  if (n) {
    De();
    const r = e.setupContext = n.length > 1 ? Vo(e) : null, i = It(e), o = Rt(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = Hn(o);
    if (Le(), i(), (l || e.sp) && !xt(e) && hr(e), l) {
      if (o.then(yn, yn), t)
        return o.then((f) => {
          vn(e, f);
        }).catch((f) => {
          es(f, e, 0);
        });
      e.asyncDep = o;
    } else
      vn(e, o);
  } else
    jr(e);
}
function vn(e, t, s) {
  I(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : B(t) && (e.setupState = ir(t)), jr(e);
}
function jr(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Ce);
  {
    const r = It(e);
    De();
    try {
      ro(e);
    } finally {
      Le(), r();
    }
  }
}
const Uo = {
  get(e, t) {
    return ee(e, "get", ""), e[t];
  }
};
function Vo(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Uo),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function zs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ir(wi(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in St)
        return St[s](e);
    },
    has(t, s) {
      return s in t || s in St;
    }
  })) : e.proxy;
}
function qo(e) {
  return I(e) && "__vccOpts" in e;
}
const $r = (e, t) => /* @__PURE__ */ Oi(e, t, Ot), Go = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Os;
const xn = typeof window < "u" && window.trustedTypes;
if (xn)
  try {
    Os = /* @__PURE__ */ xn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Br = Os ? (e) => Os.createHTML(e) : (e) => e, Jo = "http://www.w3.org/2000/svg", Yo = "http://www.w3.org/1998/Math/MathML", Re = typeof document < "u" ? document : null, Sn = Re && /* @__PURE__ */ Re.createElement("template"), zo = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? Re.createElementNS(Jo, e) : t === "mathml" ? Re.createElementNS(Yo, e) : s ? Re.createElement(e, { is: s }) : Re.createElement(e);
    return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (e) => Re.createTextNode(e),
  createComment: (e) => Re.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Re.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, r, i) {
    const o = s ? s.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), s), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      Sn.innerHTML = Br(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Sn.content;
      if (n === "svg" || n === "mathml") {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, s);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, Xo = /* @__PURE__ */ Symbol("_vtc");
function Zo(e, t, s) {
  const n = e[Xo];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const wn = /* @__PURE__ */ Symbol("_vod"), Qo = /* @__PURE__ */ Symbol("_vsh"), ko = /* @__PURE__ */ Symbol(""), el = /(?:^|;)\s*display\s*:/;
function tl(e, t, s) {
  const n = e.style, r = z(s);
  let i = !1;
  if (s && !r) {
    if (t)
      if (z(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && Wt(n, l, "");
        }
      else
        for (const o in t)
          s[o] == null && Wt(n, o, "");
    for (const o in s)
      o === "display" && (i = !0), Wt(n, o, s[o]);
  } else if (r) {
    if (t !== s) {
      const o = n[ko];
      o && (s += ";" + o), n.cssText = s, i = el.test(s);
    }
  } else t && e.removeAttribute("style");
  wn in e && (e[wn] = i ? n.display : "", e[Qo] && (n.display = "none"));
}
const En = /\s*!important$/;
function Wt(e, t, s) {
  if (R(s))
    s.forEach((n) => Wt(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = sl(e, t);
    En.test(s) ? e.setProperty(
      tt(n),
      s.replace(En, ""),
      "important"
    ) : e[n] = s;
  }
}
const Tn = ["Webkit", "Moz", "ms"], _s = {};
function sl(e, t) {
  const s = _s[t];
  if (s)
    return s;
  let n = ae(t);
  if (n !== "filter" && n in e)
    return _s[t] = n;
  n = Bn(n);
  for (let r = 0; r < Tn.length; r++) {
    const i = Tn[r] + n;
    if (i in e)
      return _s[t] = i;
  }
  return t;
}
const Cn = "http://www.w3.org/1999/xlink";
function An(e, t, s, n, r, i = ei(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Cn, t.slice(6, t.length)) : e.setAttributeNS(Cn, t, s) : s == null || i && !Wn(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ae(s) ? String(s) : s
  );
}
function On(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Br(s) : s);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, f = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (l !== f || !("_value" in e)) && (e.value = f), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let o = !1;
  if (s === "" || s == null) {
    const l = typeof e[t];
    l === "boolean" ? s = Wn(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function nl(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function rl(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Pn = /* @__PURE__ */ Symbol("_vei");
function il(e, t, s, n, r = null) {
  const i = e[Pn] || (e[Pn] = {}), o = i[t];
  if (n && o)
    o.value = n;
  else {
    const [l, f] = ol(t);
    if (n) {
      const d = i[t] = fl(
        n,
        r
      );
      nl(e, l, d, f);
    } else o && (rl(e, l, o, f), i[t] = void 0);
  }
}
const Rn = /(?:Once|Passive|Capture)$/;
function ol(e) {
  let t;
  if (Rn.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Rn); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : tt(e.slice(2)), t];
}
let ms = 0;
const ll = /* @__PURE__ */ Promise.resolve(), cl = () => ms || (ll.then(() => ms = 0), ms = Date.now());
function fl(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    Oe(
      ul(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = cl(), s;
}
function ul(e, t) {
  if (R(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (r) => !r._stopped && n && n(r)
    );
  } else
    return t;
}
const In = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, al = (e, t, s, n, r, i) => {
  const o = r === "svg";
  t === "class" ? Zo(e, n, o) : t === "style" ? tl(e, s, n) : zt(t) ? Xt(t) || il(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : dl(e, t, n, o)) ? (On(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && An(e, t, n, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (hl(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !z(n))) ? On(e, ae(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), An(e, t, n, o));
};
function dl(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && In(t) && I(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return In(t) && z(s) ? !1 : t in e;
}
function hl(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = ae(t);
  return Array.isArray(s) ? s.some((r) => ae(r) === n) : Object.keys(s).some((r) => ae(r) === n);
}
const pl = /* @__PURE__ */ Q({ patchProp: al }, zo);
let Mn;
function gl() {
  return Mn || (Mn = To(pl));
}
const _l = ((...e) => {
  const t = gl().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = bl(n);
    if (!r) return;
    const i = t._component;
    !I(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = s(r, !1, ml(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
});
function ml(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function bl(e) {
  return z(e) ? document.querySelector(e) : e;
}
const Kr = (e) => {
  if (typeof e != "object" || e === null || !("id" in e) || !("title" in e) || !("created_at" in e)) return !1;
  const { id: t, title: s, created_at: n } = e;
  return typeof t == "string" && typeof s == "string" && typeof n == "string";
}, yl = (e) => Array.isArray(e) && e.every(Kr), vl = "supabase-todos-list", xl = "supabase-todos-create", Sl = "supabase-todos-delete", Fn = 280, wl = "Could not load todos.", El = "Could not add todo.", Tl = "Could not delete todo.", Cl = "What needs doing?", Al = "Add", Ol = "Adding…", Pl = "Delete", Dn = "Loading todos…", Rl = "Refresh", Il = (e, t) => {
  const s = /* @__PURE__ */ Qe([]), n = /* @__PURE__ */ Qe(!1), r = /* @__PURE__ */ Qe(!1), i = /* @__PURE__ */ Qe(null), o = /* @__PURE__ */ Qe(null), l = async () => {
    n.value = !0, o.value = null;
    try {
      const a = await e.connectors.execute({
        permalink: vl,
        method: "GET",
        queryParams: { limit: t.value }
      });
      s.value = yl(a) ? a : [];
    } catch {
      o.value = wl, s.value = [];
    } finally {
      n.value = !1;
    }
  };
  return { todos: s, loading: n, creating: r, deletingId: i, error: o, refresh: l, add: async (a) => {
    if (r.value) return;
    const p = a.trim();
    if (p.length !== 0) {
      r.value = !0, o.value = null;
      try {
        const w = await e.connectors.execute({
          permalink: xl,
          method: "POST",
          payload: { title: p }
        }), E = Array.isArray(w) ? w[0] : w;
        Kr(E) ? s.value = [E, ...s.value].slice(0, t.value) : await l();
      } catch {
        o.value = El;
      } finally {
        r.value = !1;
      }
    }
  }, remove: async (a) => {
    if (i.value === null) {
      i.value = a, o.value = null;
      try {
        await e.connectors.execute({
          permalink: Sl,
          method: "DELETE",
          queryParams: { id: `eq.${a}` }
        }), s.value = s.value.filter((p) => p.id !== a);
      } catch {
        o.value = Tl;
      } finally {
        i.value = null;
      }
    }
  } };
}, Ml = (e) => {
  const t = /* @__PURE__ */ Qe(e.getProps()), s = e.on("propsChanged", (n) => {
    t.value = n;
  });
  return qs(s), t;
}, Fl = ["color"], Dl = { class: "todo-widget__header" }, Ll = { class: "todo-widget__title" }, Nl = ["disabled", "aria-label"], Hl = ["placeholder", "value", "maxlength", "disabled"], jl = ["disabled"], $l = {
  key: 0,
  class: "todo-widget__error",
  role: "alert"
}, Bl = {
  key: 1,
  class: "todo-widget__state"
}, Kl = ["label"], Wl = { class: "todo-widget__state-text" }, Ul = {
  key: 2,
  class: "todo-widget__state-text"
}, Vl = {
  key: 3,
  class: "todo-widget__list"
}, ql = { class: "todo-widget__item-body" }, Gl = { class: "todo-widget__item-title" }, Jl = ["datetime"], Yl = ["aria-label", "disabled", "onClick"], zl = /* @__PURE__ */ Ui({
  __name: "App",
  props: {
    sdk: {}
  },
  setup(e) {
    const t = Ml(e.sdk), s = $r(() => Number(t.value.pageSize) || 20), { todos: n, loading: r, creating: i, deletingId: o, error: l, refresh: f, add: d, remove: a } = Il(e.sdk, s), p = /* @__PURE__ */ Qe(""), w = async (C) => {
      C.preventDefault();
      const M = p.value;
      M.trim().length !== 0 && (await d(M), p.value = "");
    }, E = (C) => {
      const M = C.target;
      if (!(M instanceof HTMLElement) || !("value" in M)) return;
      const F = M.value;
      typeof F == "string" && (p.value = F.slice(0, Fn));
    }, N = (C) => {
      const M = new Date(C);
      return Number.isNaN(M.getTime()) ? "" : M.toLocaleString();
    };
    return _r(() => f()), (C, M) => (Ke(), Xe("sp-theme", {
      color: $(t).theme,
      scale: "medium",
      system: "spectrum-two",
      class: "todo-widget"
    }, [
      k("header", Dl, [
        k("h2", Ll, Be($(t).heading), 1),
        k("sp-action-button", {
          quiet: "",
          disabled: $(r),
          "aria-label": $(Rl),
          onClick: M[0] || (M[0] = //@ts-ignore
          (...F) => $(f) && $(f)(...F))
        }, [...M[1] || (M[1] = [
          k("sp-icon-refresh", { slot: "icon" }, null, -1)
        ])], 8, Nl)
      ]),
      k("form", {
        class: "todo-widget__form",
        onSubmit: w
      }, [
        k("sp-textfield", {
          class: "todo-widget__input",
          placeholder: $(Cl),
          value: p.value,
          maxlength: $(Fn),
          disabled: $(i),
          onInput: E
        }, null, 40, Hl),
        k("sp-button", {
          variant: "accent",
          type: "submit",
          disabled: $(i) || p.value.trim().length === 0
        }, Be($(i) ? $(Ol) : $(Al)), 9, jl)
      ], 32),
      $(l) ? (Ke(), Xe("p", $l, Be($(l)), 1)) : Lo("", !0),
      $(r) && $(n).length === 0 ? (Ke(), Xe("div", Bl, [
        k("sp-progress-circle", {
          indeterminate: "",
          size: "m",
          label: $(Dn)
        }, null, 8, Kl),
        k("span", Wl, Be($(Dn)), 1)
      ])) : !$(r) && $(n).length === 0 && !$(l) ? (Ke(), Xe("p", Ul, Be($(t).emptyStateText), 1)) : (Ke(), Xe("ul", Vl, [
        (Ke(!0), Xe(Se, null, so($(n), (F) => (Ke(), Xe("li", {
          key: F.id,
          class: "todo-widget__item"
        }, [
          k("div", ql, [
            k("span", Gl, Be(F.title), 1),
            k("time", {
              class: "todo-widget__item-meta",
              datetime: F.created_at
            }, Be(N(F.created_at)), 9, Jl)
          ]),
          k("sp-action-button", {
            quiet: "",
            "aria-label": `${$(Pl)} ${F.title}`,
            disabled: $(o) === F.id,
            onClick: (D) => $(a)(F.id)
          }, [...M[2] || (M[2] = [
            k("sp-icon-delete", { slot: "icon" }, null, -1)
          ])], 8, Yl)
        ]))), 128))
      ]))
    ], 8, Fl));
  }
}), Xl = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, r] of t)
    s[n] = r;
  return s;
}, Zl = /* @__PURE__ */ Xl(zl, [["__scopeId", "data-v-2b965f37"]]);
async function fc(e) {
  await e.whenReady();
  const t = _l(Zl, { sdk: e });
  t.mount(e.getContainer()), e.on("destroy", () => t.unmount());
}
export {
  fc as init
};
