/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Rs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const B = {}, ot = [], Me = () => {
}, Nn = () => !1, Xt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Zt = (e) => e.startsWith("onUpdate:"), ee = Object.assign, Fs = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Br = Object.prototype.hasOwnProperty, H = (e, t) => Br.call(e, t), M = Array.isArray, lt = (e) => It(e) === "[object Map]", $n = (e) => It(e) === "[object Set]", rn = (e) => It(e) === "[object Date]", I = (e) => typeof e == "function", X = (e) => typeof e == "string", Ie = (e) => typeof e == "symbol", N = (e) => e !== null && typeof e == "object", Ln = (e) => (N(e) || I(e)) && I(e.then) && I(e.catch), Kn = Object.prototype.toString, It = (e) => Kn.call(e), kr = (e) => It(e).slice(8, -1), Vn = (e) => It(e) === "[object Object]", Ds = (e) => X(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, yt = /* @__PURE__ */ Rs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Qt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((s) => t[s] || (t[s] = e(s)));
}, qr = /-\w/g, _e = Qt(
  (e) => e.replace(qr, (t) => t.slice(1).toUpperCase())
), Gr = /\B([A-Z])/g, st = Qt(
  (e) => e.replace(Gr, "-$1").toLowerCase()
), Wn = Qt((e) => e.charAt(0).toUpperCase() + e.slice(1)), fs = Qt(
  (e) => e ? `on${Wn(e)}` : ""
), Oe = (e, t) => !Object.is(e, t), us = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Un = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Jr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let on;
const es = () => on || (on = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function js(e) {
  if (M(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = X(n) ? Zr(n) : js(n);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (X(e) || N(e))
    return e;
}
const Yr = /;(?![^(]*\))/g, zr = /:([^]+)/, Xr = /\/\*[^]*?\*\//g;
function Zr(e) {
  const t = {};
  return e.replace(Xr, "").split(Yr).forEach((s) => {
    if (s) {
      const n = s.split(zr);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function ts(e) {
  let t = "";
  if (X(e))
    t = e;
  else if (M(e))
    for (let s = 0; s < e.length; s++) {
      const n = ts(e[s]);
      n && (t += n + " ");
    }
  else if (N(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Qr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ei = /* @__PURE__ */ Rs(Qr);
function Bn(e) {
  return !!e || e === "";
}
function ti(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = Hs(e[n], t[n]);
  return s;
}
function Hs(e, t) {
  if (e === t) return !0;
  let s = rn(e), n = rn(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = Ie(e), n = Ie(t), s || n)
    return e === t;
  if (s = M(e), n = M(t), s || n)
    return s && n ? ti(e, t) : !1;
  if (s = N(e), n = N(t), s || n) {
    if (!s || !n)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), f = t.hasOwnProperty(o);
      if (l && !f || !l && f || !Hs(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const kn = (e) => !!(e && e.__v_isRef === !0), _t = (e) => X(e) ? e : e == null ? "" : M(e) || N(e) && (e.toString === Kn || !I(e.toString)) ? kn(e) ? _t(e.value) : JSON.stringify(e, qn, 2) : String(e), qn = (e, t) => kn(t) ? qn(e, t.value) : lt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], i) => (s[as(n, i) + " =>"] = r, s),
    {}
  )
} : $n(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => as(s))
} : Ie(t) ? as(t) : N(t) && !M(t) && !Vn(t) ? String(t) : t, as = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ie(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ue;
class si {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = ue, !t && ue && (this.index = (ue.scopes || (ue.scopes = [])).push(
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
      const s = ue;
      try {
        return ue = this, t();
      } finally {
        ue = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ue, ue = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ue = this.prevScope, this.prevScope = void 0);
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
  return ue;
}
let U;
const ds = /* @__PURE__ */ new WeakSet();
class Gn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ue && ue.active && ue.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ds.has(this) && (ds.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Yn(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ln(this), zn(this);
    const t = U, s = be;
    U = this, be = !0;
    try {
      return this.fn();
    } finally {
      Xn(this), U = t, be = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ls(t);
      this.deps = this.depsTail = void 0, ln(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ds.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    xs(this) && this.run();
  }
  get dirty() {
    return xs(this);
  }
}
let Jn = 0, vt, xt;
function Yn(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = xt, xt = e;
    return;
  }
  e.next = vt, vt = e;
}
function Ns() {
  Jn++;
}
function $s() {
  if (--Jn > 0)
    return;
  if (xt) {
    let t = xt;
    for (xt = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; vt; ) {
    let t = vt;
    for (vt = void 0; t; ) {
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
function zn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Xn(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), Ls(n), ri(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  e.deps = t, e.depsTail = s;
}
function xs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Zn(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Zn(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Et) || (e.globalVersion = Et, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !xs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = U, n = be;
  U = e, be = !0;
  try {
    zn(e);
    const r = e.fn(e._value);
    (t.version === 0 || Oe(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    U = s, be = n, Xn(e), e.flags &= -3;
  }
}
function Ls(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: r } = e;
  if (n && (n.nextSub = r, e.prevSub = void 0), r && (r.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      Ls(i, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function ri(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let be = !0;
const Qn = [];
function Le() {
  Qn.push(be), be = !1;
}
function Ke() {
  const e = Qn.pop();
  be = e === void 0 ? !0 : e;
}
function ln(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = U;
    U = void 0;
    try {
      t();
    } finally {
      U = s;
    }
  }
}
let Et = 0;
class ii {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ks {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!U || !be || U === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== U)
      s = this.activeLink = new ii(U, this), U.deps ? (s.prevDep = U.depsTail, U.depsTail.nextDep = s, U.depsTail = s) : U.deps = U.depsTail = s, er(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = U.depsTail, s.nextDep = void 0, U.depsTail.nextDep = s, U.depsTail = s, U.deps === s && (U.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, Et++, this.notify(t);
  }
  notify(t) {
    Ns();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      $s();
    }
  }
}
function er(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        er(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const Ss = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ Symbol(
  ""
), ws = /* @__PURE__ */ Symbol(
  ""
), At = /* @__PURE__ */ Symbol(
  ""
);
function se(e, t, s) {
  if (be && U) {
    let n = Ss.get(e);
    n || Ss.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new Ks()), r.map = n, r.key = s), r.track();
  }
}
function Ne(e, t, s, n, r, i) {
  const o = Ss.get(e);
  if (!o) {
    Et++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if (Ns(), t === "clear")
    o.forEach(l);
  else {
    const f = M(e), d = f && Ds(s);
    if (f && s === "length") {
      const a = Number(n);
      o.forEach((p, v) => {
        (v === "length" || v === At || !Ie(v) && v >= a) && l(p);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(At)), t) {
        case "add":
          f ? d && l(o.get("length")) : (l(o.get(et)), lt(e) && l(o.get(ws)));
          break;
        case "delete":
          f || (l(o.get(et)), lt(e) && l(o.get(ws)));
          break;
        case "set":
          lt(e) && l(o.get(et));
          break;
      }
  }
  $s();
}
function nt(e) {
  const t = /* @__PURE__ */ j(e);
  return t === e ? t : (se(t, "iterate", At), /* @__PURE__ */ ge(e) ? t : t.map(ye));
}
function ss(e) {
  return se(e = /* @__PURE__ */ j(e), "iterate", At), e;
}
function Ee(e, t) {
  return /* @__PURE__ */ Ve(e) ? ut(/* @__PURE__ */ tt(e) ? ye(t) : t) : ye(t);
}
const oi = {
  __proto__: null,
  [Symbol.iterator]() {
    return hs(this, Symbol.iterator, (e) => Ee(this, e));
  },
  concat(...e) {
    return nt(this).concat(
      ...e.map((t) => M(t) ? nt(t) : t)
    );
  },
  entries() {
    return hs(this, "entries", (e) => (e[1] = Ee(this, e[1]), e));
  },
  every(e, t) {
    return Fe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Fe(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => Ee(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Fe(
      this,
      "find",
      e,
      t,
      (s) => Ee(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return Fe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Fe(
      this,
      "findLast",
      e,
      t,
      (s) => Ee(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Fe(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Fe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ps(this, "includes", e);
  },
  indexOf(...e) {
    return ps(this, "indexOf", e);
  },
  join(e) {
    return nt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ps(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Fe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return gt(this, "pop");
  },
  push(...e) {
    return gt(this, "push", e);
  },
  reduce(e, ...t) {
    return cn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return cn(this, "reduceRight", e, t);
  },
  shift() {
    return gt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Fe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return gt(this, "splice", e);
  },
  toReversed() {
    return nt(this).toReversed();
  },
  toSorted(e) {
    return nt(this).toSorted(e);
  },
  toSpliced(...e) {
    return nt(this).toSpliced(...e);
  },
  unshift(...e) {
    return gt(this, "unshift", e);
  },
  values() {
    return hs(this, "values", (e) => Ee(this, e));
  }
};
function hs(e, t, s) {
  const n = ss(e), r = n[t]();
  return n !== e && !/* @__PURE__ */ ge(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = s(i.value)), i;
  }), r;
}
const li = Array.prototype;
function Fe(e, t, s, n, r, i) {
  const o = ss(e), l = o !== e && !/* @__PURE__ */ ge(e), f = o[t];
  if (f !== li[t]) {
    const p = f.apply(e, i);
    return l ? ye(p) : p;
  }
  let d = s;
  o !== e && (l ? d = function(p, v) {
    return s.call(this, Ee(e, p), v, e);
  } : s.length > 2 && (d = function(p, v) {
    return s.call(this, p, v, e);
  }));
  const a = f.call(o, d, n);
  return l && r ? r(a) : a;
}
function cn(e, t, s, n) {
  const r = ss(e), i = r !== e && !/* @__PURE__ */ ge(e);
  let o = s, l = !1;
  r !== e && (i ? (l = n.length === 0, o = function(d, a, p) {
    return l && (l = !1, d = Ee(e, d)), s.call(this, d, Ee(e, a), p, e);
  }) : s.length > 3 && (o = function(d, a, p) {
    return s.call(this, d, a, p, e);
  }));
  const f = r[t](o, ...n);
  return l ? Ee(e, f) : f;
}
function ps(e, t, s) {
  const n = /* @__PURE__ */ j(e);
  se(n, "iterate", At);
  const r = n[t](...s);
  return (r === -1 || r === !1) && /* @__PURE__ */ Bs(s[0]) ? (s[0] = /* @__PURE__ */ j(s[0]), n[t](...s)) : r;
}
function gt(e, t, s = []) {
  Le(), Ns();
  const n = (/* @__PURE__ */ j(e))[t].apply(e, s);
  return $s(), Ke(), n;
}
const ci = /* @__PURE__ */ Rs("__proto__,__v_isRef,__isVue"), tr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ie)
);
function fi(e) {
  Ie(e) || (e = String(e));
  const t = /* @__PURE__ */ j(this);
  return se(t, "has", e), t.hasOwnProperty(e);
}
class sr {
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
      return n === (r ? i ? yi : or : i ? ir : rr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = M(t);
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
      /* @__PURE__ */ ne(t) ? t : n
    );
    if ((Ie(s) ? tr.has(s) : ci(s)) || (r || se(t, "get", s), i))
      return l;
    if (/* @__PURE__ */ ne(l)) {
      const f = o && Ds(s) ? l : l.value;
      return r && N(f) ? /* @__PURE__ */ Ts(f) : f;
    }
    return N(l) ? r ? /* @__PURE__ */ Ts(l) : /* @__PURE__ */ Ws(l) : l;
  }
}
class nr extends sr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    const o = M(t) && Ds(s);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ Ve(i);
      if (!/* @__PURE__ */ ge(n) && !/* @__PURE__ */ Ve(n) && (i = /* @__PURE__ */ j(i), n = /* @__PURE__ */ j(n)), !o && /* @__PURE__ */ ne(i) && !/* @__PURE__ */ ne(n))
        return d || (i.value = n), !0;
    }
    const l = o ? Number(s) < t.length : H(t, s), f = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ ne(t) ? t : r
    );
    return t === /* @__PURE__ */ j(r) && (l ? Oe(n, i) && Ne(t, "set", s, n) : Ne(t, "add", s, n)), f;
  }
  deleteProperty(t, s) {
    const n = H(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Ne(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Ie(s) || !tr.has(s)) && se(t, "has", s), n;
  }
  ownKeys(t) {
    return se(
      t,
      "iterate",
      M(t) ? "length" : et
    ), Reflect.ownKeys(t);
  }
}
class ui extends sr {
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
const ai = /* @__PURE__ */ new nr(), di = /* @__PURE__ */ new ui(), hi = /* @__PURE__ */ new nr(!0);
const Cs = (e) => e, $t = (e) => Reflect.getPrototypeOf(e);
function pi(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, i = /* @__PURE__ */ j(r), o = lt(i), l = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, d = r[e](...n), a = s ? Cs : t ? ut : ye;
    return !t && se(
      i,
      "iterate",
      f ? ws : et
    ), ee(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: p, done: v } = d.next();
          return v ? { value: p, done: v } : {
            value: l ? [a(p[0]), a(p[1])] : a(p),
            done: v
          };
        }
      }
    );
  };
}
function Lt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function gi(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ j(i), l = /* @__PURE__ */ j(r);
      e || (Oe(r, l) && se(o, "get", r), se(o, "get", l));
      const { has: f } = $t(o), d = t ? Cs : e ? ut : ye;
      if (f.call(o, r))
        return d(i.get(r));
      if (f.call(o, l))
        return d(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && se(/* @__PURE__ */ j(r), "iterate", et), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ j(i), l = /* @__PURE__ */ j(r);
      return e || (Oe(r, l) && se(o, "has", r), se(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, f = /* @__PURE__ */ j(l), d = t ? Cs : e ? ut : ye;
      return !e && se(f, "iterate", et), l.forEach((a, p) => r.call(i, d(a), d(p), o));
    }
  };
  return ee(
    s,
    e ? {
      add: Lt("add"),
      set: Lt("set"),
      delete: Lt("delete"),
      clear: Lt("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ j(this), o = $t(i), l = /* @__PURE__ */ j(r), f = !t && !/* @__PURE__ */ ge(r) && !/* @__PURE__ */ Ve(r) ? l : r;
        return o.has.call(i, f) || Oe(r, f) && o.has.call(i, r) || Oe(l, f) && o.has.call(i, l) || (i.add(f), Ne(i, "add", f, f)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ ge(i) && !/* @__PURE__ */ Ve(i) && (i = /* @__PURE__ */ j(i));
        const o = /* @__PURE__ */ j(this), { has: l, get: f } = $t(o);
        let d = l.call(o, r);
        d || (r = /* @__PURE__ */ j(r), d = l.call(o, r));
        const a = f.call(o, r);
        return o.set(r, i), d ? Oe(i, a) && Ne(o, "set", r, i) : Ne(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ j(this), { has: o, get: l } = $t(i);
        let f = o.call(i, r);
        f || (r = /* @__PURE__ */ j(r), f = o.call(i, r)), l && l.call(i, r);
        const d = i.delete(r);
        return f && Ne(i, "delete", r, void 0), d;
      },
      clear() {
        const r = /* @__PURE__ */ j(this), i = r.size !== 0, o = r.clear();
        return i && Ne(
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
function Vs(e, t) {
  const s = gi(e, t);
  return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    H(s, r) && r in n ? s : n,
    r,
    i
  );
}
const mi = {
  get: /* @__PURE__ */ Vs(!1, !1)
}, _i = {
  get: /* @__PURE__ */ Vs(!1, !0)
}, bi = {
  get: /* @__PURE__ */ Vs(!0, !1)
};
const rr = /* @__PURE__ */ new WeakMap(), ir = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap(), yi = /* @__PURE__ */ new WeakMap();
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : vi(kr(e));
}
// @__NO_SIDE_EFFECTS__
function Ws(e) {
  return /* @__PURE__ */ Ve(e) ? e : Us(
    e,
    !1,
    ai,
    mi,
    rr
  );
}
// @__NO_SIDE_EFFECTS__
function Si(e) {
  return Us(
    e,
    !1,
    hi,
    _i,
    ir
  );
}
// @__NO_SIDE_EFFECTS__
function Ts(e) {
  return Us(
    e,
    !0,
    di,
    bi,
    or
  );
}
function Us(e, t, s, n, r) {
  if (!N(e) || e.__v_raw && !(t && e.__v_isReactive))
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
function tt(e) {
  return /* @__PURE__ */ Ve(e) ? /* @__PURE__ */ tt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ve(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ge(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Bs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function j(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ j(t) : e;
}
function wi(e) {
  return !H(e, "__v_skip") && Object.isExtensible(e) && Un(e, "__v_skip", !0), e;
}
const ye = (e) => N(e) ? /* @__PURE__ */ Ws(e) : e, ut = (e) => N(e) ? /* @__PURE__ */ Ts(e) : e;
// @__NO_SIDE_EFFECTS__
function ne(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Qe(e) {
  return Ci(e, !1);
}
function Ci(e, t) {
  return /* @__PURE__ */ ne(e) ? e : new Ti(e, t);
}
class Ti {
  constructor(t, s) {
    this.dep = new Ks(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ j(t), this._value = s ? t : ye(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ ge(t) || /* @__PURE__ */ Ve(t);
    t = n ? t : /* @__PURE__ */ j(t), Oe(t, s) && (this._rawValue = t, this._value = n ? t : ye(t), this.dep.trigger());
  }
}
function Z(e) {
  return /* @__PURE__ */ ne(e) ? e.value : e;
}
const Ei = {
  get: (e, t, s) => t === "__v_raw" ? e : Z(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return /* @__PURE__ */ ne(r) && !/* @__PURE__ */ ne(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function lr(e) {
  return /* @__PURE__ */ tt(e) ? e : new Proxy(e, Ei);
}
class Ai {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Ks(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Et - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    U !== this)
      return Yn(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Zn(this), t && (t.version = this.dep.version), this._value;
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
const Kt = {}, kt = /* @__PURE__ */ new WeakMap();
let Ze;
function Pi(e, t = !1, s = Ze) {
  if (s) {
    let n = kt.get(s);
    n || kt.set(s, n = []), n.push(e);
  }
}
function Mi(e, t, s = B) {
  const { immediate: n, deep: r, once: i, scheduler: o, augmentJob: l, call: f } = s, d = (A) => r ? A : /* @__PURE__ */ ge(A) || r === !1 || r === 0 ? ke(A, 1) : ke(A);
  let a, p, v, C, D = !1, P = !1;
  if (/* @__PURE__ */ ne(e) ? (p = () => e.value, D = /* @__PURE__ */ ge(e)) : /* @__PURE__ */ tt(e) ? (p = () => d(e), D = !0) : M(e) ? (P = !0, D = e.some((A) => /* @__PURE__ */ tt(A) || /* @__PURE__ */ ge(A)), p = () => e.map((A) => {
    if (/* @__PURE__ */ ne(A))
      return A.value;
    if (/* @__PURE__ */ tt(A))
      return d(A);
    if (I(A))
      return f ? f(A, 2) : A();
  })) : I(e) ? t ? p = f ? () => f(e, 2) : e : p = () => {
    if (v) {
      Le();
      try {
        v();
      } finally {
        Ke();
      }
    }
    const A = Ze;
    Ze = a;
    try {
      return f ? f(e, 3, [C]) : e(C);
    } finally {
      Ze = A;
    }
  } : p = Me, t && r) {
    const A = p, J = r === !0 ? 1 / 0 : r;
    p = () => ke(A(), J);
  }
  const q = ni(), K = () => {
    a.stop(), q && q.active && Fs(q.effects, a);
  };
  if (i && t) {
    const A = t;
    t = (...J) => {
      A(...J), K();
    };
  }
  let R = P ? new Array(e.length).fill(Kt) : Kt;
  const $ = (A) => {
    if (!(!(a.flags & 1) || !a.dirty && !A))
      if (t) {
        const J = a.run();
        if (r || D || (P ? J.some((he, pe) => Oe(he, R[pe])) : Oe(J, R))) {
          v && v();
          const he = Ze;
          Ze = a;
          try {
            const pe = [
              J,
              // pass undefined as the old value when it's changed for the first time
              R === Kt ? void 0 : P && R[0] === Kt ? [] : R,
              C
            ];
            R = J, f ? f(t, 3, pe) : (
              // @ts-expect-error
              t(...pe)
            );
          } finally {
            Ze = he;
          }
        }
      } else
        a.run();
  };
  return l && l($), a = new Gn(p), a.scheduler = o ? () => o($, !1) : $, C = (A) => Pi(A, !1, a), v = a.onStop = () => {
    const A = kt.get(a);
    if (A) {
      if (f)
        f(A, 4);
      else
        for (const J of A) J();
      kt.delete(a);
    }
  }, t ? n ? $(!0) : R = a.run() : o ? o($.bind(null, !0), !0) : a.run(), K.pause = a.pause.bind(a), K.resume = a.resume.bind(a), K.stop = K, K;
}
function ke(e, t = 1 / 0, s) {
  if (t <= 0 || !N(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ ne(e))
    ke(e.value, t, s);
  else if (M(e))
    for (let n = 0; n < e.length; n++)
      ke(e[n], t, s);
  else if ($n(e) || lt(e))
    e.forEach((n) => {
      ke(n, t, s);
    });
  else if (Vn(e)) {
    for (const n in e)
      ke(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && ke(e[n], t, s);
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
    ns(r, t, s);
  }
}
function Re(e, t, s, n) {
  if (I(e)) {
    const r = Rt(e, t, s, n);
    return r && Ln(r) && r.catch((i) => {
      ns(i, t, s);
    }), r;
  }
  if (M(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Re(e[i], t, s, n));
    return r;
  }
}
function ns(e, t, s, n = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || B;
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
      Le(), Rt(i, null, 10, [
        e,
        f,
        d
      ]), Ke();
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
const oe = [];
let Te = -1;
const ct = [];
let Be = null, rt = 0;
const cr = /* @__PURE__ */ Promise.resolve();
let qt = null;
function Ri(e) {
  const t = qt || cr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Fi(e) {
  let t = Te + 1, s = oe.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = oe[n], i = Ot(r);
    i < e || i === e && r.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function ks(e) {
  if (!(e.flags & 1)) {
    const t = Ot(e), s = oe[oe.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ot(s) ? oe.push(e) : oe.splice(Fi(t), 0, e), e.flags |= 1, fr();
  }
}
function fr() {
  qt || (qt = cr.then(ar));
}
function Di(e) {
  M(e) ? ct.push(...e) : Be && e.id === -1 ? Be.splice(rt + 1, 0, e) : e.flags & 1 || (ct.push(e), e.flags |= 1), fr();
}
function fn(e, t, s = Te + 1) {
  for (; s < oe.length; s++) {
    const n = oe[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      oe.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function ur(e) {
  if (ct.length) {
    const t = [...new Set(ct)].sort(
      (s, n) => Ot(s) - Ot(n)
    );
    if (ct.length = 0, Be) {
      Be.push(...t);
      return;
    }
    for (Be = t, rt = 0; rt < Be.length; rt++) {
      const s = Be[rt];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Be = null, rt = 0;
  }
}
const Ot = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ar(e) {
  try {
    for (Te = 0; Te < oe.length; Te++) {
      const t = oe[Te];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Rt(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Te < oe.length; Te++) {
      const t = oe[Te];
      t && (t.flags &= -2);
    }
    Te = -1, oe.length = 0, ur(), qt = null, (oe.length || ct.length) && ar();
  }
}
let Pe = null, dr = null;
function Gt(e) {
  const t = Pe;
  return Pe = e, dr = e && e.type.__scopeId || null, t;
}
function ji(e, t = Pe, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && xn(-1);
    const i = Gt(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Gt(i), n._d && xn(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function ze(e, t, s, n) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let f = l.dir[n];
    f && (Le(), Re(f, s, 8, [
      e.el,
      l,
      e,
      t
    ]), Ke());
  }
}
function Hi(e, t) {
  if (le) {
    let s = le.provides;
    const n = le.parent && le.parent.provides;
    n === s && (s = le.provides = Object.create(n)), s[e] = t;
  }
}
function Wt(e, t, s = !1) {
  const n = Lo();
  if (n || ft) {
    let r = ft ? ft._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && I(t) ? t.call(n && n.proxy) : t;
  }
}
const Ni = /* @__PURE__ */ Symbol.for("v-scx"), $i = () => Wt(Ni);
function gs(e, t, s) {
  return hr(e, t, s);
}
function hr(e, t, s = B) {
  const { immediate: n, deep: r, flush: i, once: o } = s, l = ee({}, s), f = t && n || !t && i !== "post";
  let d;
  if (Mt) {
    if (i === "sync") {
      const C = $i();
      d = C.__watcherHandles || (C.__watcherHandles = []);
    } else if (!f) {
      const C = () => {
      };
      return C.stop = Me, C.resume = Me, C.pause = Me, C;
    }
  }
  const a = le;
  l.call = (C, D, P) => Re(C, a, D, P);
  let p = !1;
  i === "post" ? l.scheduler = (C) => {
    fe(C, a && a.suspense);
  } : i !== "sync" && (p = !0, l.scheduler = (C, D) => {
    D ? C() : ks(C);
  }), l.augmentJob = (C) => {
    t && (C.flags |= 4), p && (C.flags |= 2, a && (C.id = a.uid, C.i = a));
  };
  const v = Mi(e, t, l);
  return Mt && (d ? d.push(v) : f && v()), v;
}
function Li(e, t, s) {
  const n = this.proxy, r = X(e) ? e.includes(".") ? pr(n, e) : () => n[e] : e.bind(n, n);
  let i;
  I(t) ? i = t : (i = t.handler, s = t);
  const o = Ft(this), l = hr(r, i.bind(n), s);
  return o(), l;
}
function pr(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const Ki = /* @__PURE__ */ Symbol("_vte"), Vi = (e) => e.__isTeleport, Wi = /* @__PURE__ */ Symbol("_leaveCb");
function qs(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, qs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Ui(e, t) {
  return I(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ee({ name: e.name }, t, { setup: e })
  ) : e;
}
function gr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function un(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const Jt = /* @__PURE__ */ new WeakMap();
function St(e, t, s, n, r = !1) {
  if (M(e)) {
    e.forEach(
      (P, q) => St(
        P,
        t && (M(t) ? t[q] : t),
        s,
        n,
        r
      )
    );
    return;
  }
  if (wt(n) && !r) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && St(e, t, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? Xs(n.component) : n.el, o = r ? null : i, { i: l, r: f } = e, d = t && t.r, a = l.refs === B ? l.refs = {} : l.refs, p = l.setupState, v = /* @__PURE__ */ j(p), C = p === B ? Nn : (P) => un(a, P) ? !1 : H(v, P), D = (P, q) => !(q && un(a, q));
  if (d != null && d !== f) {
    if (an(t), X(d))
      a[d] = null, C(d) && (p[d] = null);
    else if (/* @__PURE__ */ ne(d)) {
      const P = t;
      D(d, P.k) && (d.value = null), P.k && (a[P.k] = null);
    }
  }
  if (I(f))
    Rt(f, l, 12, [o, a]);
  else {
    const P = X(f), q = /* @__PURE__ */ ne(f);
    if (P || q) {
      const K = () => {
        if (e.f) {
          const R = P ? C(f) ? p[f] : a[f] : D() || !e.k ? f.value : a[e.k];
          if (r)
            M(R) && Fs(R, i);
          else if (M(R))
            R.includes(i) || R.push(i);
          else if (P)
            a[f] = [i], C(f) && (p[f] = a[f]);
          else {
            const $ = [i];
            D(f, e.k) && (f.value = $), e.k && (a[e.k] = $);
          }
        } else P ? (a[f] = o, C(f) && (p[f] = o)) : q && (D(f, e.k) && (f.value = o), e.k && (a[e.k] = o));
      };
      if (o) {
        const R = () => {
          K(), Jt.delete(e);
        };
        R.id = -1, Jt.set(e, R), fe(R, s);
      } else
        an(e), K();
    }
  }
}
function an(e) {
  const t = Jt.get(e);
  t && (t.flags |= 8, Jt.delete(e));
}
es().requestIdleCallback;
es().cancelIdleCallback;
const wt = (e) => !!e.type.__asyncLoader, mr = (e) => e.type.__isKeepAlive;
function Bi(e, t) {
  _r(e, "a", t);
}
function ki(e, t) {
  _r(e, "da", t);
}
function _r(e, t, s = le) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (rs(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      mr(r.parent.vnode) && qi(n, t, s, r), r = r.parent;
  }
}
function qi(e, t, s, n) {
  const r = rs(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Gs(() => {
    Fs(n[t], r);
  }, s);
}
function rs(e, t, s = le, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Le();
      const l = Ft(s), f = Re(t, s, e, o);
      return l(), Ke(), f;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const We = (e) => (t, s = le) => {
  (!Mt || e === "sp") && rs(e, (...n) => t(...n), s);
}, Gi = We("bm"), br = We("m"), Ji = We(
  "bu"
), Yi = We("u"), zi = We(
  "bum"
), Gs = We("um"), Xi = We(
  "sp"
), Zi = We("rtg"), Qi = We("rtc");
function eo(e, t = le) {
  rs("ec", e, t);
}
const to = /* @__PURE__ */ Symbol.for("v-ndc");
function dn(e, t, s, n) {
  let r;
  const i = s, o = M(e);
  if (o || X(e)) {
    const l = o && /* @__PURE__ */ tt(e);
    let f = !1, d = !1;
    l && (f = !/* @__PURE__ */ ge(e), d = /* @__PURE__ */ Ve(e), e = ss(e)), r = new Array(e.length);
    for (let a = 0, p = e.length; a < p; a++)
      r[a] = t(
        f ? d ? ut(ye(e[a])) : ye(e[a]) : e[a],
        a,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if (N(e))
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
const Es = (e) => e ? Lr(e) ? Xs(e) : Es(e.parent) : null, Ct = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ee(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Es(e.parent),
    $root: (e) => Es(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => vr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ks(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ri.bind(e.proxy)),
    $watch: (e) => Li.bind(e)
  })
), ms = (e, t) => e !== B && !e.__isScriptSetup && H(e, t), so = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: i, accessCache: o, type: l, appContext: f } = e;
    if (t[0] !== "$") {
      const v = o[t];
      if (v !== void 0)
        switch (v) {
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
        if (ms(n, t))
          return o[t] = 1, n[t];
        if (r !== B && H(r, t))
          return o[t] = 2, r[t];
        if (H(i, t))
          return o[t] = 3, i[t];
        if (s !== B && H(s, t))
          return o[t] = 4, s[t];
        As && (o[t] = 0);
      }
    }
    const d = Ct[t];
    let a, p;
    if (d)
      return t === "$attrs" && se(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (s !== B && H(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      p = f.config.globalProperties, H(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: r, ctx: i } = e;
    return ms(r, t) ? (r[t] = s, !0) : n !== B && H(n, t) ? (n[t] = s, !0) : H(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, props: i, type: o }
  }, l) {
    let f;
    return !!(s[l] || e !== B && l[0] !== "$" && H(e, l) || ms(t, l) || H(i, l) || H(n, l) || H(Ct, l) || H(r.config.globalProperties, l) || (f = o.__cssModules) && f[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : H(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function hn(e) {
  return M(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let As = !0;
function no(e) {
  const t = vr(e), s = e.proxy, n = e.ctx;
  As = !1, t.beforeCreate && pn(t.beforeCreate, e, "bc");
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
    mounted: v,
    beforeUpdate: C,
    updated: D,
    activated: P,
    deactivated: q,
    beforeDestroy: K,
    beforeUnmount: R,
    destroyed: $,
    unmounted: A,
    render: J,
    renderTracked: he,
    renderTriggered: pe,
    errorCaptured: k,
    serverPrefetch: ce,
    // public API
    expose: Y,
    inheritAttrs: Ge,
    // assets
    components: Dt,
    directives: jt,
    filters: ls
  } = t;
  if (d && ro(d, n, null), o)
    for (const G in o) {
      const V = o[G];
      I(V) && (n[G] = V.bind(s));
    }
  if (r) {
    const G = r.call(s, s);
    N(G) && (e.data = /* @__PURE__ */ Ws(G));
  }
  if (As = !0, i)
    for (const G in i) {
      const V = i[G], Je = I(V) ? V.bind(s, s) : I(V.get) ? V.get.bind(s, s) : Me, Ht = !I(V) && I(V.set) ? V.set.bind(s) : Me, Ye = it({
        get: Je,
        set: Ht
      });
      Object.defineProperty(n, G, {
        enumerable: !0,
        configurable: !0,
        get: () => Ye.value,
        set: (ve) => Ye.value = ve
      });
    }
  if (l)
    for (const G in l)
      yr(l[G], n, s, G);
  if (f) {
    const G = I(f) ? f.call(s) : f;
    Reflect.ownKeys(G).forEach((V) => {
      Hi(V, G[V]);
    });
  }
  a && pn(a, e, "c");
  function re(G, V) {
    M(V) ? V.forEach((Je) => G(Je.bind(s))) : V && G(V.bind(s));
  }
  if (re(Gi, p), re(br, v), re(Ji, C), re(Yi, D), re(Bi, P), re(ki, q), re(eo, k), re(Qi, he), re(Zi, pe), re(zi, R), re(Gs, A), re(Xi, ce), M(Y))
    if (Y.length) {
      const G = e.exposed || (e.exposed = {});
      Y.forEach((V) => {
        Object.defineProperty(G, V, {
          get: () => s[V],
          set: (Je) => s[V] = Je,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  J && e.render === Me && (e.render = J), Ge != null && (e.inheritAttrs = Ge), Dt && (e.components = Dt), jt && (e.directives = jt), ce && gr(e);
}
function ro(e, t, s = Me) {
  M(e) && (e = Os(e));
  for (const n in e) {
    const r = e[n];
    let i;
    N(r) ? "default" in r ? i = Wt(
      r.from || n,
      r.default,
      !0
    ) : i = Wt(r.from || n) : i = Wt(r), /* @__PURE__ */ ne(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[n] = i;
  }
}
function pn(e, t, s) {
  Re(
    M(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function yr(e, t, s, n) {
  let r = n.includes(".") ? pr(s, n) : () => s[n];
  if (X(e)) {
    const i = t[e];
    I(i) && gs(r, i);
  } else if (I(e))
    gs(r, e.bind(s));
  else if (N(e))
    if (M(e))
      e.forEach((i) => yr(i, t, s, n));
    else {
      const i = I(e.handler) ? e.handler.bind(s) : t[e.handler];
      I(i) && gs(r, i, e);
    }
}
function vr(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let f;
  return l ? f = l : !r.length && !s && !n ? f = t : (f = {}, r.length && r.forEach(
    (d) => Yt(f, d, o, !0)
  ), Yt(f, t, o)), N(t) && i.set(t, f), f;
}
function Yt(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t;
  i && Yt(e, i, s, !0), r && r.forEach(
    (o) => Yt(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = io[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const io = {
  data: gn,
  props: mn,
  emits: mn,
  // objects
  methods: bt,
  computed: bt,
  // lifecycle
  beforeCreate: ie,
  created: ie,
  beforeMount: ie,
  mounted: ie,
  beforeUpdate: ie,
  updated: ie,
  beforeDestroy: ie,
  beforeUnmount: ie,
  destroyed: ie,
  unmounted: ie,
  activated: ie,
  deactivated: ie,
  errorCaptured: ie,
  serverPrefetch: ie,
  // assets
  components: bt,
  directives: bt,
  // watch
  watch: lo,
  // provide / inject
  provide: gn,
  inject: oo
};
function gn(e, t) {
  return t ? e ? function() {
    return ee(
      I(e) ? e.call(this, this) : e,
      I(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function oo(e, t) {
  return bt(Os(e), Os(t));
}
function Os(e) {
  if (M(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function ie(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function bt(e, t) {
  return e ? ee(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function mn(e, t) {
  return e ? M(e) && M(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ee(
    /* @__PURE__ */ Object.create(null),
    hn(e),
    hn(t ?? {})
  ) : t;
}
function lo(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = ee(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = ie(e[n], t[n]);
  return s;
}
function xr() {
  return {
    app: null,
    config: {
      isNativeTag: Nn,
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
let co = 0;
function fo(e, t) {
  return function(n, r = null) {
    I(n) || (n = ee({}, n)), r != null && !N(r) && (r = null);
    const i = xr(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const d = i.app = {
      _uid: co++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: ko,
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
      mount(a, p, v) {
        if (!f) {
          const C = d._ceVNode || $e(n, r);
          return C.appContext = i, v === !0 ? v = "svg" : v === !1 && (v = void 0), e(C, a, v), f = !0, d._container = a, a.__vue_app__ = d, Xs(C.component);
        }
      },
      onUnmount(a) {
        l.push(a);
      },
      unmount() {
        f && (Re(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(a, p) {
        return i.provides[a] = p, d;
      },
      runWithContext(a) {
        const p = ft;
        ft = d;
        try {
          return a();
        } finally {
          ft = p;
        }
      }
    };
    return d;
  };
}
let ft = null;
const uo = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_e(t)}Modifiers`] || e[`${st(t)}Modifiers`];
function ao(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || B;
  let r = s;
  const i = t.startsWith("update:"), o = i && uo(n, t.slice(7));
  o && (o.trim && (r = s.map((a) => X(a) ? a.trim() : a)), o.number && (r = s.map(Jr)));
  let l, f = n[l = fs(t)] || // also try camelCase event handler (#2249)
  n[l = fs(_e(t))];
  !f && i && (f = n[l = fs(st(t))]), f && Re(
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
    e.emitted[l] = !0, Re(
      d,
      e,
      6,
      r
    );
  }
}
const ho = /* @__PURE__ */ new WeakMap();
function Sr(e, t, s = !1) {
  const n = s ? ho : t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!I(e)) {
    const f = (d) => {
      const a = Sr(d, t, !0);
      a && (l = !0, ee(o, a));
    };
    !s && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !l ? (N(e) && n.set(e, null), null) : (M(i) ? i.forEach((f) => o[f] = null) : ee(o, i), N(e) && n.set(e, o), o);
}
function is(e, t) {
  return !e || !Xt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, st(t)) || H(e, t));
}
function _n(e) {
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
    data: v,
    setupState: C,
    ctx: D,
    inheritAttrs: P
  } = e, q = Gt(e);
  let K, R;
  try {
    if (s.shapeFlag & 4) {
      const A = r || n, J = A;
      K = Ae(
        d.call(
          J,
          A,
          a,
          p,
          C,
          v,
          D
        )
      ), R = l;
    } else {
      const A = t;
      K = Ae(
        A.length > 1 ? A(
          p,
          { attrs: l, slots: o, emit: f }
        ) : A(
          p,
          null
        )
      ), R = t.props ? l : po(l);
    }
  } catch (A) {
    Tt.length = 0, ns(A, e, 1), K = $e(qe);
  }
  let $ = K;
  if (R && P !== !1) {
    const A = Object.keys(R), { shapeFlag: J } = $;
    A.length && J & 7 && (i && A.some(Zt) && (R = go(
      R,
      i
    )), $ = at($, R, !1, !0));
  }
  return s.dirs && ($ = at($, null, !1, !0), $.dirs = $.dirs ? $.dirs.concat(s.dirs) : s.dirs), s.transition && qs($, s.transition), K = $, Gt(q), K;
}
const po = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Xt(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, go = (e, t) => {
  const s = {};
  for (const n in e)
    (!Zt(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
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
      return n ? bn(n, o, d) : !!o;
    if (f & 8) {
      const a = t.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        const v = a[p];
        if (wr(o, n, v) && !is(d, v))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? bn(n, o, d) : !0 : !!o;
  return !1;
}
function bn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (wr(t, e, i) && !is(s, i))
      return !0;
  }
  return !1;
}
function wr(e, t, s) {
  const n = e[s], r = t[s];
  return s === "style" && N(n) && N(r) ? !Hs(n, r) : n !== r;
}
function _o({ vnode: e, parent: t, suspense: s }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = n, e = r), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  s && s.activeBranch === e && (s.vnode.el = n);
}
const Cr = {}, Tr = () => Object.create(Cr), Er = (e) => Object.getPrototypeOf(e) === Cr;
function bo(e, t, s, n = !1) {
  const r = {}, i = Tr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ar(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  s ? e.props = n ? r : /* @__PURE__ */ Si(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function yo(e, t, s, n) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ j(r), [f] = e.propsOptions;
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
        let v = a[p];
        if (is(e.emitsOptions, v))
          continue;
        const C = t[v];
        if (f)
          if (H(i, v))
            C !== i[v] && (i[v] = C, d = !0);
          else {
            const D = _e(v);
            r[D] = Ps(
              f,
              l,
              D,
              C,
              e,
              !1
            );
          }
        else
          C !== i[v] && (i[v] = C, d = !0);
      }
    }
  } else {
    Ar(e, t, r, i) && (d = !0);
    let a;
    for (const p in l)
      (!t || // for camelCase
      !H(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = st(p)) === p || !H(t, a))) && (f ? s && // for camelCase
      (s[p] !== void 0 || // for kebab-case
      s[a] !== void 0) && (r[p] = Ps(
        f,
        l,
        p,
        void 0,
        e,
        !0
      )) : delete r[p]);
    if (i !== l)
      for (const p in i)
        (!t || !H(t, p)) && (delete i[p], d = !0);
  }
  d && Ne(e.attrs, "set", "");
}
function Ar(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let f in t) {
      if (yt(f))
        continue;
      const d = t[f];
      let a;
      r && H(r, a = _e(f)) ? !i || !i.includes(a) ? s[a] = d : (l || (l = {}))[a] = d : is(e.emitsOptions, f) || (!(f in n) || d !== n[f]) && (n[f] = d, o = !0);
    }
  if (i) {
    const f = /* @__PURE__ */ j(s), d = l || B;
    for (let a = 0; a < i.length; a++) {
      const p = i[a];
      s[p] = Ps(
        r,
        f,
        p,
        d[p],
        e,
        !H(d, p)
      );
    }
  }
  return o;
}
function Ps(e, t, s, n, r, i) {
  const o = e[s];
  if (o != null) {
    const l = H(o, "default");
    if (l && n === void 0) {
      const f = o.default;
      if (o.type !== Function && !o.skipFactory && I(f)) {
        const { propsDefaults: d } = r;
        if (s in d)
          n = d[s];
        else {
          const a = Ft(r);
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
    ] && (n === "" || n === st(s)) && (n = !0));
  }
  return n;
}
const vo = /* @__PURE__ */ new WeakMap();
function Or(e, t, s = !1) {
  const n = s ? vo : t.propsCache, r = n.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let f = !1;
  if (!I(e)) {
    const a = (p) => {
      f = !0;
      const [v, C] = Or(p, t, !0);
      ee(o, v), C && l.push(...C);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!i && !f)
    return N(e) && n.set(e, ot), ot;
  if (M(i))
    for (let a = 0; a < i.length; a++) {
      const p = _e(i[a]);
      yn(p) && (o[p] = B);
    }
  else if (i)
    for (const a in i) {
      const p = _e(a);
      if (yn(p)) {
        const v = i[a], C = o[p] = M(v) || I(v) ? { type: v } : ee({}, v), D = C.type;
        let P = !1, q = !0;
        if (M(D))
          for (let K = 0; K < D.length; ++K) {
            const R = D[K], $ = I(R) && R.name;
            if ($ === "Boolean") {
              P = !0;
              break;
            } else $ === "String" && (q = !1);
          }
        else
          P = I(D) && D.name === "Boolean";
        C[
          0
          /* shouldCast */
        ] = P, C[
          1
          /* shouldCastTrue */
        ] = q, (P || H(C, "default")) && l.push(p);
      }
    }
  const d = [o, l];
  return N(e) && n.set(e, d), d;
}
function yn(e) {
  return e[0] !== "$" && !yt(e);
}
const Js = (e) => e === "_" || e === "_ctx" || e === "$stable", Ys = (e) => M(e) ? e.map(Ae) : [Ae(e)], xo = (e, t, s) => {
  if (t._n)
    return t;
  const n = ji((...r) => Ys(t(...r)), s);
  return n._c = !1, n;
}, Pr = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (Js(r)) continue;
    const i = e[r];
    if (I(i))
      t[r] = xo(r, i, n);
    else if (i != null) {
      const o = Ys(i);
      t[r] = () => o;
    }
  }
}, Mr = (e, t) => {
  const s = Ys(t);
  e.slots.default = () => s;
}, Ir = (e, t, s) => {
  for (const n in t)
    (s || !Js(n)) && (e[n] = t[n]);
}, So = (e, t, s) => {
  const n = e.slots = Tr();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Ir(n, t, s), s && Un(n, "_", r, !0)) : Pr(t, n);
  } else t && Mr(e, t);
}, wo = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let i = !0, o = B;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? i = !1 : Ir(r, t, s) : (i = !t.$stable, Pr(t, r)), o = t;
  } else t && (Mr(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !Js(l) && o[l] == null && delete r[l];
}, fe = Oo;
function Co(e) {
  return To(e);
}
function To(e, t) {
  const s = es();
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
    nextSibling: v,
    setScopeId: C = Me,
    insertStaticContent: D
  } = e, P = (c, u, h, b = null, g = null, m = null, S = void 0, x = null, y = !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !mt(c, u) && (b = Nt(c), ve(c, g, m, !0), c = null), u.patchFlag === -2 && (y = !1, u.dynamicChildren = null);
    const { type: _, ref: E, shapeFlag: w } = u;
    switch (_) {
      case os:
        q(c, u, h, b);
        break;
      case qe:
        K(c, u, h, b);
        break;
      case bs:
        c == null && R(u, h, b, S);
        break;
      case me:
        Dt(
          c,
          u,
          h,
          b,
          g,
          m,
          S,
          x,
          y
        );
        break;
      default:
        w & 1 ? J(
          c,
          u,
          h,
          b,
          g,
          m,
          S,
          x,
          y
        ) : w & 6 ? jt(
          c,
          u,
          h,
          b,
          g,
          m,
          S,
          x,
          y
        ) : (w & 64 || w & 128) && _.process(
          c,
          u,
          h,
          b,
          g,
          m,
          S,
          x,
          y,
          ht
        );
    }
    E != null && g ? St(E, c && c.ref, m, u || c, !u) : E == null && c && c.ref != null && St(c.ref, null, m, c, !0);
  }, q = (c, u, h, b) => {
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
  }, K = (c, u, h, b) => {
    c == null ? n(
      u.el = f(u.children || ""),
      h,
      b
    ) : u.el = c.el;
  }, R = (c, u, h, b) => {
    [c.el, c.anchor] = D(
      c.children,
      u,
      h,
      b,
      c.el,
      c.anchor
    );
  }, $ = ({ el: c, anchor: u }, h, b) => {
    let g;
    for (; c && c !== u; )
      g = v(c), n(c, h, b), c = g;
    n(u, h, b);
  }, A = ({ el: c, anchor: u }) => {
    let h;
    for (; c && c !== u; )
      h = v(c), r(c), c = h;
    r(u);
  }, J = (c, u, h, b, g, m, S, x, y) => {
    if (u.type === "svg" ? S = "svg" : u.type === "math" && (S = "mathml"), c == null)
      he(
        u,
        h,
        b,
        g,
        m,
        S,
        x,
        y
      );
    else {
      const _ = c.el && c.el._isVueCE ? c.el : null;
      try {
        _ && _._beginPatch(), ce(
          c,
          u,
          g,
          m,
          S,
          x,
          y
        );
      } finally {
        _ && _._endPatch();
      }
    }
  }, he = (c, u, h, b, g, m, S, x) => {
    let y, _;
    const { props: E, shapeFlag: w, transition: T, dirs: O } = c;
    if (y = c.el = o(
      c.type,
      m,
      E && E.is,
      E
    ), w & 8 ? a(y, c.children) : w & 16 && k(
      c.children,
      y,
      null,
      b,
      g,
      _s(c, m),
      S,
      x
    ), O && ze(c, null, b, "created"), pe(y, c, c.scopeId, S, b), E) {
      for (const L in E)
        L !== "value" && !yt(L) && i(y, L, null, E[L], m, b);
      "value" in E && i(y, "value", null, E.value, m), (_ = E.onVnodeBeforeMount) && Ce(_, b, c);
    }
    O && ze(c, null, b, "beforeMount");
    const F = Eo(g, T);
    F && T.beforeEnter(y), n(y, u, h), ((_ = E && E.onVnodeMounted) || F || O) && fe(() => {
      try {
        _ && Ce(_, b, c), F && T.enter(y), O && ze(c, null, b, "mounted");
      } finally {
      }
    }, g);
  }, pe = (c, u, h, b, g) => {
    if (h && C(c, h), b)
      for (let m = 0; m < b.length; m++)
        C(c, b[m]);
    if (g) {
      let m = g.subTree;
      if (u === m || jr(m.type) && (m.ssContent === u || m.ssFallback === u)) {
        const S = g.vnode;
        pe(
          c,
          S,
          S.scopeId,
          S.slotScopeIds,
          g.parent
        );
      }
    }
  }, k = (c, u, h, b, g, m, S, x, y = 0) => {
    for (let _ = y; _ < c.length; _++) {
      const E = c[_] = x ? He(c[_]) : Ae(c[_]);
      P(
        null,
        E,
        u,
        h,
        b,
        g,
        m,
        S,
        x
      );
    }
  }, ce = (c, u, h, b, g, m, S) => {
    const x = u.el = c.el;
    let { patchFlag: y, dynamicChildren: _, dirs: E } = u;
    y |= c.patchFlag & 16;
    const w = c.props || B, T = u.props || B;
    let O;
    if (h && Xe(h, !1), (O = T.onVnodeBeforeUpdate) && Ce(O, h, u, c), E && ze(u, c, h, "beforeUpdate"), h && Xe(h, !0), (w.innerHTML && T.innerHTML == null || w.textContent && T.textContent == null) && a(x, ""), _ ? Y(
      c.dynamicChildren,
      _,
      x,
      h,
      b,
      _s(u, g),
      m
    ) : S || V(
      c,
      u,
      x,
      null,
      h,
      b,
      _s(u, g),
      m,
      !1
    ), y > 0) {
      if (y & 16)
        Ge(x, w, T, h, g);
      else if (y & 2 && w.class !== T.class && i(x, "class", null, T.class, g), y & 4 && i(x, "style", w.style, T.style, g), y & 8) {
        const F = u.dynamicProps;
        for (let L = 0; L < F.length; L++) {
          const W = F[L], z = w[W], Q = T[W];
          (Q !== z || W === "value") && i(x, W, z, Q, g, h);
        }
      }
      y & 1 && c.children !== u.children && a(x, u.children);
    } else !S && _ == null && Ge(x, w, T, h, g);
    ((O = T.onVnodeUpdated) || E) && fe(() => {
      O && Ce(O, h, u, c), E && ze(u, c, h, "updated");
    }, b);
  }, Y = (c, u, h, b, g, m, S) => {
    for (let x = 0; x < u.length; x++) {
      const y = c[x], _ = u[x], E = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === me || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !mt(y, _) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 198) ? p(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      P(
        y,
        _,
        E,
        null,
        b,
        g,
        m,
        S,
        !0
      );
    }
  }, Ge = (c, u, h, b, g) => {
    if (u !== h) {
      if (u !== B)
        for (const m in u)
          !yt(m) && !(m in h) && i(
            c,
            m,
            u[m],
            null,
            g,
            b
          );
      for (const m in h) {
        if (yt(m)) continue;
        const S = h[m], x = u[m];
        S !== x && m !== "value" && i(c, m, x, S, g, b);
      }
      "value" in h && i(c, "value", u.value, h.value, g);
    }
  }, Dt = (c, u, h, b, g, m, S, x, y) => {
    const _ = u.el = c ? c.el : l(""), E = u.anchor = c ? c.anchor : l("");
    let { patchFlag: w, dynamicChildren: T, slotScopeIds: O } = u;
    O && (x = x ? x.concat(O) : O), c == null ? (n(_, h, b), n(E, h, b), k(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      E,
      g,
      m,
      S,
      x,
      y
    )) : w > 0 && w & 64 && T && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === T.length ? (Y(
      c.dynamicChildren,
      T,
      h,
      g,
      m,
      S,
      x
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || g && u === g.subTree) && Rr(
      c,
      u,
      !0
      /* shallow */
    )) : V(
      c,
      u,
      h,
      E,
      g,
      m,
      S,
      x,
      y
    );
  }, jt = (c, u, h, b, g, m, S, x, y) => {
    u.slotScopeIds = x, c == null ? u.shapeFlag & 512 ? g.ctx.activate(
      u,
      h,
      b,
      S,
      y
    ) : ls(
      u,
      h,
      b,
      g,
      m,
      S,
      y
    ) : Zs(c, u, y);
  }, ls = (c, u, h, b, g, m, S) => {
    const x = c.component = $o(
      c,
      b,
      g
    );
    if (mr(c) && (x.ctx.renderer = ht), Ko(x, !1, S), x.asyncDep) {
      if (g && g.registerDep(x, re, S), !c.el) {
        const y = x.subTree = $e(qe);
        K(null, y, u, h), c.placeholder = y.el;
      }
    } else
      re(
        x,
        c,
        u,
        h,
        g,
        m,
        S
      );
  }, Zs = (c, u, h) => {
    const b = u.component = c.component;
    if (mo(c, u, h))
      if (b.asyncDep && !b.asyncResolved) {
        G(b, u, h);
        return;
      } else
        b.next = u, b.update();
    else
      u.el = c.el, b.vnode = u;
  }, re = (c, u, h, b, g, m, S) => {
    const x = () => {
      if (c.isMounted) {
        let { next: w, bu: T, u: O, parent: F, vnode: L } = c;
        {
          const Se = Fr(c);
          if (Se) {
            w && (w.el = L.el, G(c, w, S)), Se.asyncDep.then(() => {
              fe(() => {
                c.isUnmounted || _();
              }, g);
            });
            return;
          }
        }
        let W = w, z;
        Xe(c, !1), w ? (w.el = L.el, G(c, w, S)) : w = L, T && us(T), (z = w.props && w.props.onVnodeBeforeUpdate) && Ce(z, F, w, L), Xe(c, !0);
        const Q = _n(c), xe = c.subTree;
        c.subTree = Q, P(
          xe,
          Q,
          // parent may have changed if it's in a teleport
          p(xe.el),
          // anchor may have changed if it's in a fragment
          Nt(xe),
          c,
          g,
          m
        ), w.el = Q.el, W === null && _o(c, Q.el), O && fe(O, g), (z = w.props && w.props.onVnodeUpdated) && fe(
          () => Ce(z, F, w, L),
          g
        );
      } else {
        let w;
        const { el: T, props: O } = u, { bm: F, m: L, parent: W, root: z, type: Q } = c, xe = wt(u);
        Xe(c, !1), F && us(F), !xe && (w = O && O.onVnodeBeforeMount) && Ce(w, W, u), Xe(c, !0);
        {
          z.ce && z.ce._hasShadowRoot() && z.ce._injectChildStyle(
            Q,
            c.parent ? c.parent.type : void 0
          );
          const Se = c.subTree = _n(c);
          P(
            null,
            Se,
            h,
            b,
            c,
            g,
            m
          ), u.el = Se.el;
        }
        if (L && fe(L, g), !xe && (w = O && O.onVnodeMounted)) {
          const Se = u;
          fe(
            () => Ce(w, W, Se),
            g
          );
        }
        (u.shapeFlag & 256 || W && wt(W.vnode) && W.vnode.shapeFlag & 256) && c.a && fe(c.a, g), c.isMounted = !0, u = h = b = null;
      }
    };
    c.scope.on();
    const y = c.effect = new Gn(x);
    c.scope.off();
    const _ = c.update = y.run.bind(y), E = c.job = y.runIfDirty.bind(y);
    E.i = c, E.id = c.uid, y.scheduler = () => ks(E), Xe(c, !0), _();
  }, G = (c, u, h) => {
    u.component = c;
    const b = c.vnode.props;
    c.vnode = u, c.next = null, yo(c, u.props, b, h), wo(c, u.children, h), Le(), fn(c), Ke();
  }, V = (c, u, h, b, g, m, S, x, y = !1) => {
    const _ = c && c.children, E = c ? c.shapeFlag : 0, w = u.children, { patchFlag: T, shapeFlag: O } = u;
    if (T > 0) {
      if (T & 128) {
        Ht(
          _,
          w,
          h,
          b,
          g,
          m,
          S,
          x,
          y
        );
        return;
      } else if (T & 256) {
        Je(
          _,
          w,
          h,
          b,
          g,
          m,
          S,
          x,
          y
        );
        return;
      }
    }
    O & 8 ? (E & 16 && dt(_, g, m), w !== _ && a(h, w)) : E & 16 ? O & 16 ? Ht(
      _,
      w,
      h,
      b,
      g,
      m,
      S,
      x,
      y
    ) : dt(_, g, m, !0) : (E & 8 && a(h, ""), O & 16 && k(
      w,
      h,
      b,
      g,
      m,
      S,
      x,
      y
    ));
  }, Je = (c, u, h, b, g, m, S, x, y) => {
    c = c || ot, u = u || ot;
    const _ = c.length, E = u.length, w = Math.min(_, E);
    let T;
    for (T = 0; T < w; T++) {
      const O = u[T] = y ? He(u[T]) : Ae(u[T]);
      P(
        c[T],
        O,
        h,
        null,
        g,
        m,
        S,
        x,
        y
      );
    }
    _ > E ? dt(
      c,
      g,
      m,
      !0,
      !1,
      w
    ) : k(
      u,
      h,
      b,
      g,
      m,
      S,
      x,
      y,
      w
    );
  }, Ht = (c, u, h, b, g, m, S, x, y) => {
    let _ = 0;
    const E = u.length;
    let w = c.length - 1, T = E - 1;
    for (; _ <= w && _ <= T; ) {
      const O = c[_], F = u[_] = y ? He(u[_]) : Ae(u[_]);
      if (mt(O, F))
        P(
          O,
          F,
          h,
          null,
          g,
          m,
          S,
          x,
          y
        );
      else
        break;
      _++;
    }
    for (; _ <= w && _ <= T; ) {
      const O = c[w], F = u[T] = y ? He(u[T]) : Ae(u[T]);
      if (mt(O, F))
        P(
          O,
          F,
          h,
          null,
          g,
          m,
          S,
          x,
          y
        );
      else
        break;
      w--, T--;
    }
    if (_ > w) {
      if (_ <= T) {
        const O = T + 1, F = O < E ? u[O].el : b;
        for (; _ <= T; )
          P(
            null,
            u[_] = y ? He(u[_]) : Ae(u[_]),
            h,
            F,
            g,
            m,
            S,
            x,
            y
          ), _++;
      }
    } else if (_ > T)
      for (; _ <= w; )
        ve(c[_], g, m, !0), _++;
    else {
      const O = _, F = _, L = /* @__PURE__ */ new Map();
      for (_ = F; _ <= T; _++) {
        const ae = u[_] = y ? He(u[_]) : Ae(u[_]);
        ae.key != null && L.set(ae.key, _);
      }
      let W, z = 0;
      const Q = T - F + 1;
      let xe = !1, Se = 0;
      const pt = new Array(Q);
      for (_ = 0; _ < Q; _++) pt[_] = 0;
      for (_ = O; _ <= w; _++) {
        const ae = c[_];
        if (z >= Q) {
          ve(ae, g, m, !0);
          continue;
        }
        let we;
        if (ae.key != null)
          we = L.get(ae.key);
        else
          for (W = F; W <= T; W++)
            if (pt[W - F] === 0 && mt(ae, u[W])) {
              we = W;
              break;
            }
        we === void 0 ? ve(ae, g, m, !0) : (pt[we - F] = _ + 1, we >= Se ? Se = we : xe = !0, P(
          ae,
          u[we],
          h,
          null,
          g,
          m,
          S,
          x,
          y
        ), z++);
      }
      const tn = xe ? Ao(pt) : ot;
      for (W = tn.length - 1, _ = Q - 1; _ >= 0; _--) {
        const ae = F + _, we = u[ae], sn = u[ae + 1], nn = ae + 1 < E ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          sn.el || Dr(sn)
        ) : b;
        pt[_] === 0 ? P(
          null,
          we,
          h,
          nn,
          g,
          m,
          S,
          x,
          y
        ) : xe && (W < 0 || _ !== tn[W] ? Ye(we, h, nn, 2) : W--);
      }
    }
  }, Ye = (c, u, h, b, g = null) => {
    const { el: m, type: S, transition: x, children: y, shapeFlag: _ } = c;
    if (_ & 6) {
      Ye(c.component.subTree, u, h, b);
      return;
    }
    if (_ & 128) {
      c.suspense.move(u, h, b);
      return;
    }
    if (_ & 64) {
      S.move(c, u, h, ht);
      return;
    }
    if (S === me) {
      n(m, u, h);
      for (let w = 0; w < y.length; w++)
        Ye(y[w], u, h, b);
      n(c.anchor, u, h);
      return;
    }
    if (S === bs) {
      $(c, u, h);
      return;
    }
    if (b !== 2 && _ & 1 && x)
      if (b === 0)
        x.beforeEnter(m), n(m, u, h), fe(() => x.enter(m), g);
      else {
        const { leave: w, delayLeave: T, afterLeave: O } = x, F = () => {
          c.ctx.isUnmounted ? r(m) : n(m, u, h);
        }, L = () => {
          m._isLeaving && m[Wi](
            !0
            /* cancelled */
          ), w(m, () => {
            F(), O && O();
          });
        };
        T ? T(m, F, L) : L();
      }
    else
      n(m, u, h);
  }, ve = (c, u, h, b = !1, g = !1) => {
    const {
      type: m,
      props: S,
      ref: x,
      children: y,
      dynamicChildren: _,
      shapeFlag: E,
      patchFlag: w,
      dirs: T,
      cacheIndex: O,
      memo: F
    } = c;
    if (w === -2 && (g = !1), x != null && (Le(), St(x, null, h, c, !0), Ke()), O != null && (u.renderCache[O] = void 0), E & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const L = E & 1 && T, W = !wt(c);
    let z;
    if (W && (z = S && S.onVnodeBeforeUnmount) && Ce(z, u, c), E & 6)
      Ur(c.component, h, b);
    else {
      if (E & 128) {
        c.suspense.unmount(h, b);
        return;
      }
      L && ze(c, null, u, "beforeUnmount"), E & 64 ? c.type.remove(
        c,
        u,
        h,
        ht,
        b
      ) : _ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (m !== me || w > 0 && w & 64) ? dt(
        _,
        u,
        h,
        !1,
        !0
      ) : (m === me && w & 384 || !g && E & 16) && dt(y, u, h), b && Qs(c);
    }
    const Q = F != null && O == null;
    (W && (z = S && S.onVnodeUnmounted) || L || Q) && fe(() => {
      z && Ce(z, u, c), L && ze(c, null, u, "unmounted"), Q && (c.el = null);
    }, h);
  }, Qs = (c) => {
    const { type: u, el: h, anchor: b, transition: g } = c;
    if (u === me) {
      Wr(h, b);
      return;
    }
    if (u === bs) {
      A(c);
      return;
    }
    const m = () => {
      r(h), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (c.shapeFlag & 1 && g && !g.persisted) {
      const { leave: S, delayLeave: x } = g, y = () => S(h, m);
      x ? x(c.el, m, y) : y();
    } else
      m();
  }, Wr = (c, u) => {
    let h;
    for (; c !== u; )
      h = v(c), r(c), c = h;
    r(u);
  }, Ur = (c, u, h) => {
    const { bum: b, scope: g, job: m, subTree: S, um: x, m: y, a: _ } = c;
    vn(y), vn(_), b && us(b), g.stop(), m && (m.flags |= 8, ve(S, c, u, h)), x && fe(x, u), fe(() => {
      c.isUnmounted = !0;
    }, u);
  }, dt = (c, u, h, b = !1, g = !1, m = 0) => {
    for (let S = m; S < c.length; S++)
      ve(c[S], u, h, b, g);
  }, Nt = (c) => {
    if (c.shapeFlag & 6)
      return Nt(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = v(c.anchor || c.el), h = u && u[Ki];
    return h ? v(h) : u;
  };
  let cs = !1;
  const en = (c, u, h) => {
    let b;
    c == null ? u._vnode && (ve(u._vnode, null, null, !0), b = u._vnode.component) : P(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = c, cs || (cs = !0, fn(b), ur(), cs = !1);
  }, ht = {
    p: P,
    um: ve,
    m: Ye,
    r: Qs,
    mt: ls,
    mc: k,
    pc: V,
    pbc: Y,
    n: Nt,
    o: e
  };
  return {
    render: en,
    hydrate: void 0,
    createApp: fo(en)
  };
}
function _s({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function Xe({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Eo(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Rr(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (M(n) && M(r))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = He(r[i]), l.el = o.el), !s && l.patchFlag !== -2 && Rr(o, l)), l.type === os && (l.patchFlag === -1 && (l = r[i] = He(l)), l.el = o.el), l.type === qe && !l.el && (l.el = o.el);
    }
}
function Ao(e) {
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
function Fr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Fr(t);
}
function vn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Dr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Dr(t.subTree) : null;
}
const jr = (e) => e.__isSuspense;
function Oo(e, t) {
  t && t.pendingBranch ? M(e) ? t.effects.push(...e) : t.effects.push(e) : Di(e);
}
const me = /* @__PURE__ */ Symbol.for("v-fgt"), os = /* @__PURE__ */ Symbol.for("v-txt"), qe = /* @__PURE__ */ Symbol.for("v-cmt"), bs = /* @__PURE__ */ Symbol.for("v-stc"), Tt = [];
let de = null;
function De(e = !1) {
  Tt.push(de = e ? null : []);
}
function Po() {
  Tt.pop(), de = Tt[Tt.length - 1] || null;
}
let Pt = 1;
function xn(e, t = !1) {
  Pt += e, e < 0 && de && t && (de.hasOnce = !0);
}
function Hr(e) {
  return e.dynamicChildren = Pt > 0 ? de || ot : null, Po(), Pt > 0 && de && de.push(e), e;
}
function Ue(e, t, s, n, r, i) {
  return Hr(
    te(
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
function Mo(e, t, s, n, r) {
  return Hr(
    $e(
      e,
      t,
      s,
      n,
      r,
      !0
    )
  );
}
function Nr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function mt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const $r = ({ key: e }) => e ?? null, Ut = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? X(e) || /* @__PURE__ */ ne(e) || I(e) ? { i: Pe, r: e, k: t, f: !!s } : e : null);
function te(e, t = null, s = null, n = 0, r = null, i = e === me ? 0 : 1, o = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && $r(t),
    ref: t && Ut(t),
    scopeId: dr,
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
    ctx: Pe
  };
  return l ? (zs(f, s), i & 128 && e.normalize(f)) : s && (f.shapeFlag |= X(s) ? 8 : 16), Pt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  de && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && de.push(f), f;
}
const $e = Io;
function Io(e, t = null, s = null, n = 0, r = null, i = !1) {
  if ((!e || e === to) && (e = qe), Nr(e)) {
    const l = at(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && zs(l, s), Pt > 0 && !i && de && (l.shapeFlag & 6 ? de[de.indexOf(e)] = l : de.push(l)), l.patchFlag = -2, l;
  }
  if (Bo(e) && (e = e.__vccOpts), t) {
    t = Ro(t);
    let { class: l, style: f } = t;
    l && !X(l) && (t.class = ts(l)), N(f) && (/* @__PURE__ */ Bs(f) && !M(f) && (f = ee({}, f)), t.style = js(f));
  }
  const o = X(e) ? 1 : jr(e) ? 128 : Vi(e) ? 64 : N(e) ? 4 : I(e) ? 2 : 0;
  return te(
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
function Ro(e) {
  return e ? /* @__PURE__ */ Bs(e) || Er(e) ? ee({}, e) : e : null;
}
function at(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: f } = e, d = t ? jo(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && $r(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? M(i) ? i.concat(Ut(t)) : [i, Ut(t)] : Ut(t)
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
    patchFlag: t && e.type !== me ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && at(e.ssContent),
    ssFallback: e.ssFallback && at(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && n && qs(
    a,
    f.clone(a)
  ), a;
}
function Fo(e = " ", t = 0) {
  return $e(os, null, e, t);
}
function Do(e = "", t = !1) {
  return t ? (De(), Mo(qe, null, e)) : $e(qe, null, e);
}
function Ae(e) {
  return e == null || typeof e == "boolean" ? $e(qe) : M(e) ? $e(
    me,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Nr(e) ? He(e) : $e(os, null, String(e));
}
function He(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : at(e);
}
function zs(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (M(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), zs(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !Er(t) ? t._ctx = Pe : r === 3 && Pe && (Pe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else I(t) ? (t = { default: t, _ctx: Pe }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Fo(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function jo(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = ts([t.class, n.class]));
      else if (r === "style")
        t.style = js([t.style, n.style]);
      else if (Xt(r)) {
        const i = t[r], o = n[r];
        o && i !== o && !(M(i) && i.includes(o)) ? t[r] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Zt(r) && (t[r] = o);
      } else r !== "" && (t[r] = n[r]);
  }
  return t;
}
function Ce(e, t, s, n = null) {
  Re(e, t, 7, [
    s,
    n
  ]);
}
const Ho = xr();
let No = 0;
function $o(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || Ho, i = {
    uid: No++,
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
    propsOptions: Or(n, r),
    emitsOptions: Sr(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: B,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: B,
    data: B,
    props: B,
    attrs: B,
    slots: B,
    refs: B,
    setupState: B,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = ao.bind(null, i), e.ce && e.ce(i), i;
}
let le = null;
const Lo = () => le || Pe;
let zt, Ms;
{
  const e = es(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  zt = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => le = s
  ), Ms = t(
    "__VUE_SSR_SETTERS__",
    (s) => Mt = s
  );
}
const Ft = (e) => {
  const t = le;
  return zt(e), e.scope.on(), () => {
    e.scope.off(), zt(t);
  };
}, Sn = () => {
  le && le.scope.off(), zt(null);
};
function Lr(e) {
  return e.vnode.shapeFlag & 4;
}
let Mt = !1;
function Ko(e, t = !1, s = !1) {
  t && Ms(t);
  const { props: n, children: r } = e.vnode, i = Lr(e);
  bo(e, n, i, t), So(e, r, s || t);
  const o = i ? Vo(e, t) : void 0;
  return t && Ms(!1), o;
}
function Vo(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, so);
  const { setup: n } = s;
  if (n) {
    Le();
    const r = e.setupContext = n.length > 1 ? Uo(e) : null, i = Ft(e), o = Rt(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = Ln(o);
    if (Ke(), i(), (l || e.sp) && !wt(e) && gr(e), l) {
      if (o.then(Sn, Sn), t)
        return o.then((f) => {
          wn(e, f);
        }).catch((f) => {
          ns(f, e, 0);
        });
      e.asyncDep = o;
    } else
      wn(e, o);
  } else
    Kr(e);
}
function wn(e, t, s) {
  I(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : N(t) && (e.setupState = lr(t)), Kr(e);
}
function Kr(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Me);
  {
    const r = Ft(e);
    Le();
    try {
      no(e);
    } finally {
      Ke(), r();
    }
  }
}
const Wo = {
  get(e, t) {
    return se(e, "get", ""), e[t];
  }
};
function Uo(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Wo),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Xs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(lr(wi(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in Ct)
        return Ct[s](e);
    },
    has(t, s) {
      return s in t || s in Ct;
    }
  })) : e.proxy;
}
function Bo(e) {
  return I(e) && "__vccOpts" in e;
}
const it = (e, t) => /* @__PURE__ */ Oi(e, t, Mt), ko = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Is;
const Cn = typeof window < "u" && window.trustedTypes;
if (Cn)
  try {
    Is = /* @__PURE__ */ Cn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Vr = Is ? (e) => Is.createHTML(e) : (e) => e, qo = "http://www.w3.org/2000/svg", Go = "http://www.w3.org/1998/Math/MathML", je = typeof document < "u" ? document : null, Tn = je && /* @__PURE__ */ je.createElement("template"), Jo = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? je.createElementNS(qo, e) : t === "mathml" ? je.createElementNS(Go, e) : s ? je.createElement(e, { is: s }) : je.createElement(e);
    return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (e) => je.createTextNode(e),
  createComment: (e) => je.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => je.querySelector(e),
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
      Tn.innerHTML = Vr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Tn.content;
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
}, Yo = /* @__PURE__ */ Symbol("_vtc");
function zo(e, t, s) {
  const n = e[Yo];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const En = /* @__PURE__ */ Symbol("_vod"), Xo = /* @__PURE__ */ Symbol("_vsh"), Zo = /* @__PURE__ */ Symbol(""), Qo = /(?:^|;)\s*display\s*:/;
function el(e, t, s) {
  const n = e.style, r = X(s);
  let i = !1;
  if (s && !r) {
    if (t)
      if (X(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && Bt(n, l, "");
        }
      else
        for (const o in t)
          s[o] == null && Bt(n, o, "");
    for (const o in s)
      o === "display" && (i = !0), Bt(n, o, s[o]);
  } else if (r) {
    if (t !== s) {
      const o = n[Zo];
      o && (s += ";" + o), n.cssText = s, i = Qo.test(s);
    }
  } else t && e.removeAttribute("style");
  En in e && (e[En] = i ? n.display : "", e[Xo] && (n.display = "none"));
}
const An = /\s*!important$/;
function Bt(e, t, s) {
  if (M(s))
    s.forEach((n) => Bt(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = tl(e, t);
    An.test(s) ? e.setProperty(
      st(n),
      s.replace(An, ""),
      "important"
    ) : e[n] = s;
  }
}
const On = ["Webkit", "Moz", "ms"], ys = {};
function tl(e, t) {
  const s = ys[t];
  if (s)
    return s;
  let n = _e(t);
  if (n !== "filter" && n in e)
    return ys[t] = n;
  n = Wn(n);
  for (let r = 0; r < On.length; r++) {
    const i = On[r] + n;
    if (i in e)
      return ys[t] = i;
  }
  return t;
}
const Pn = "http://www.w3.org/1999/xlink";
function Mn(e, t, s, n, r, i = ei(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Pn, t.slice(6, t.length)) : e.setAttributeNS(Pn, t, s) : s == null || i && !Bn(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ie(s) ? String(s) : s
  );
}
function In(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Vr(s) : s);
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
    l === "boolean" ? s = Bn(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function sl(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function nl(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Rn = /* @__PURE__ */ Symbol("_vei");
function rl(e, t, s, n, r = null) {
  const i = e[Rn] || (e[Rn] = {}), o = i[t];
  if (n && o)
    o.value = n;
  else {
    const [l, f] = il(t);
    if (n) {
      const d = i[t] = cl(
        n,
        r
      );
      sl(e, l, d, f);
    } else o && (nl(e, l, o, f), i[t] = void 0);
  }
}
const Fn = /(?:Once|Passive|Capture)$/;
function il(e) {
  let t;
  if (Fn.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Fn); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : st(e.slice(2)), t];
}
let vs = 0;
const ol = /* @__PURE__ */ Promise.resolve(), ll = () => vs || (ol.then(() => vs = 0), vs = Date.now());
function cl(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    Re(
      fl(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = ll(), s;
}
function fl(e, t) {
  if (M(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (r) => !r._stopped && n && n(r)
    );
  } else
    return t;
}
const Dn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ul = (e, t, s, n, r, i) => {
  const o = r === "svg";
  t === "class" ? zo(e, n, o) : t === "style" ? el(e, s, n) : Xt(t) ? Zt(t) || rl(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : al(e, t, n, o)) ? (In(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Mn(e, t, n, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (dl(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !X(n))) ? In(e, _e(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Mn(e, t, n, o));
};
function al(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Dn(t) && I(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Dn(t) && X(s) ? !1 : t in e;
}
function dl(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = _e(t);
  return Array.isArray(s) ? s.some((r) => _e(r) === n) : Object.keys(s).some((r) => _e(r) === n);
}
const hl = ["ctrl", "shift", "alt", "meta"], pl = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => hl.some((s) => e[`${s}Key`] && !t.includes(s))
}, gl = (e, t) => {
  if (!e) return e;
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = ((r, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = pl[t[o]];
      if (l && l(r, t)) return;
    }
    return e(r, ...i);
  }));
}, ml = /* @__PURE__ */ ee({ patchProp: ul }, Jo);
let jn;
function _l() {
  return jn || (jn = Co(ml));
}
const bl = ((...e) => {
  const t = _l().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = vl(n);
    if (!r) return;
    const i = t._component;
    !I(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = s(r, !1, yl(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
});
function yl(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function vl(e) {
  return X(e) ? document.querySelector(e) : e;
}
const Vt = (e, t) => e instanceof Error ? e.message : typeof e == "string" ? e : t, Hn = (e) => Array.isArray(e) ? e.filter(
  (t) => typeof t == "object" && t !== null && "id" in t && typeof t.id == "string"
) : [], xl = (e) => {
  const t = /* @__PURE__ */ Qe([]), s = /* @__PURE__ */ Qe(!1), n = /* @__PURE__ */ Qe(!1), r = /* @__PURE__ */ Qe(null), i = async () => {
    s.value = !0, r.value = null;
    try {
      const a = await e.execute({
        permalink: "todo-app-list",
        method: "GET"
      });
      t.value = Hn(a);
    } catch (a) {
      r.value = Vt(a, "Failed to load todos");
    } finally {
      s.value = !1;
    }
  };
  return { todos: t, isLoading: s, isBusy: n, error: r, refresh: i, add: async (a) => {
    const p = a.trim();
    if (!p || n.value) return !1;
    n.value = !0, r.value = null;
    try {
      const v = await e.execute({
        permalink: "todo-app-create",
        method: "POST",
        payload: { title: p, completed: !1 }
      }), C = Hn(v);
      return t.value = C.length ? [...C, ...t.value] : t.value, C.length || await i(), !0;
    } catch (v) {
      return r.value = Vt(v, "Failed to add todo"), !1;
    } finally {
      n.value = !1;
    }
  }, remove: async (a) => {
    if (n.value) return;
    n.value = !0, r.value = null;
    const p = t.value;
    t.value = t.value.filter((v) => v.id !== a);
    try {
      await e.execute({
        permalink: "todo-app-delete",
        method: "DELETE",
        queryParams: { id: `eq.${a}` }
      });
    } catch (v) {
      t.value = p, r.value = Vt(v, "Failed to delete todo");
    } finally {
      n.value = !1;
    }
  }, toggle: async (a, p) => {
    if (n.value) return;
    n.value = !0, r.value = null;
    const v = t.value;
    t.value = t.value.map(
      (C) => C.id === a ? { ...C, completed: p } : C
    );
    try {
      await e.execute({
        permalink: "todo-app-toggle",
        method: "PATCH",
        queryParams: { id: `eq.${a}` },
        payload: { completed: p }
      });
    } catch (C) {
      t.value = v, r.value = Vt(C, "Failed to update todo");
    } finally {
      n.value = !1;
    }
  }, dismissError: () => r.value = null };
}, Sl = ["color", "data-theme"], wl = { class: "todo-header" }, Cl = { class: "todo-title" }, Tl = { class: "todo-meta" }, El = ["disabled"], Al = ["value", "placeholder", "disabled"], Ol = ["disabled"], Pl = {
  key: 0,
  class: "todo-alert",
  role: "alert"
}, Ml = {
  key: 1,
  class: "todo-list todo-list--skeleton"
}, Il = {
  key: 2,
  class: "todo-empty"
}, Rl = {
  key: 3,
  class: "todo-list"
}, Fl = ["checked", "disabled", "onChange"], Dl = { class: "todo-row-title" }, jl = ["disabled", "onClick"], Hl = /* @__PURE__ */ Ui({
  __name: "App",
  props: {
    sdk: {},
    connectorsSdk: {}
  },
  setup(e) {
    const t = /* @__PURE__ */ Qe(e.sdk.getProps()), s = e.sdk.on("propsChanged", (k) => t.value = k);
    Gs(s);
    const { todos: n, isLoading: r, isBusy: i, error: o, refresh: l, add: f, remove: d, toggle: a, dismissError: p } = xl(e.connectorsSdk.connectors), v = /* @__PURE__ */ Qe(""), C = /* @__PURE__ */ Qe(!1), D = it(() => n.value.filter((k) => !k.completed).length), P = it(
      () => n.value.length === 0 ? "Nothing here yet" : `${D.value} of ${n.value.length} remaining`
    ), q = it(() => t.value.theme === "dark" ? "dark" : "light"), K = it(() => t.value.placeholder ?? "What needs doing?"), R = it(() => t.value.title ?? "My Todos"), $ = (k) => typeof k == "string" ? k : "", A = (k) => {
      const ce = k.target;
      return ce !== null && typeof ce == "object" && "value" in ce ? $(ce.value) : "";
    }, J = (k) => v.value = A(k), he = async () => {
      if (!C.value) {
        C.value = !0;
        try {
          await f(v.value) && (v.value = "");
        } finally {
          C.value = !1;
        }
      }
    }, pe = (k) => {
      k.key === "Enter" && !k.shiftKey && (k.preventDefault(), he());
    };
    return br(l), (k, ce) => (De(), Ue("sp-theme", {
      color: q.value,
      scale: "medium",
      system: "spectrum",
      class: "todo-widget",
      "data-theme": q.value
    }, [
      te("header", wl, [
        te("div", null, [
          te("h2", Cl, _t(R.value), 1),
          te("p", Tl, _t(P.value), 1)
        ]),
        te("sp-action-button", {
          quiet: "",
          disabled: Z(r),
          "aria-label": "Refresh",
          onClick: ce[0] || (ce[0] = //@ts-ignore
          (...Y) => Z(l) && Z(l)(...Y))
        }, " ↻ ", 8, El)
      ]),
      te("form", {
        class: "todo-compose",
        onSubmit: gl(he, ["prevent"])
      }, [
        te("sp-textfield", {
          class: "todo-input",
          value: v.value,
          placeholder: K.value,
          disabled: Z(i),
          onInput: J,
          onKeydown: pe
        }, null, 40, Al),
        te("sp-button", {
          variant: "accent",
          disabled: Z(i) || !v.value.trim(),
          onClick: he
        }, " Add ", 8, Ol)
      ], 32),
      Z(o) ? (De(), Ue("div", Pl, [
        te("span", null, _t(Z(o)), 1),
        te("sp-action-button", {
          quiet: "",
          size: "s",
          "aria-label": "Dismiss",
          onClick: ce[1] || (ce[1] = //@ts-ignore
          (...Y) => Z(p) && Z(p)(...Y))
        }, "✕")
      ])) : Do("", !0),
      Z(r) && !Z(n).length ? (De(), Ue("ul", Ml, [
        (De(), Ue(me, null, dn(3, (Y) => te("li", {
          key: Y,
          class: "todo-row todo-row--skeleton"
        })), 64))
      ])) : Z(n).length ? (De(), Ue("ul", Rl, [
        (De(!0), Ue(me, null, dn(Z(n), (Y) => (De(), Ue("li", {
          key: Y.id,
          class: ts(["todo-row", { "todo-row--done": Y.completed }])
        }, [
          te("sp-checkbox", {
            checked: Y.completed,
            disabled: Z(i),
            onChange: (Ge) => Z(a)(Y.id, !Y.completed)
          }, null, 40, Fl),
          te("span", Dl, _t(Y.title), 1),
          te("sp-action-button", {
            quiet: "",
            "aria-label": "Delete todo",
            disabled: Z(i),
            onClick: (Ge) => Z(d)(Y.id)
          }, " ✕ ", 8, jl)
        ], 2))), 128))
      ])) : (De(), Ue("p", Il, "No todos yet. Capture your first task above."))
    ], 8, Sl));
  }
}), Nl = "[todo-app] window.WidgetServiceSDK missing. Include https://static.customer-hub.northpass.com/widget-sdk/latest/index.umd.js before widget.js.";
async function Ll(e) {
  await e.whenReady();
  const t = window.WidgetServiceSDK;
  if (!t) {
    console.error(Nl);
    return;
  }
  const s = new t(), n = bl(Hl, { sdk: e, connectorsSdk: s });
  n.mount(e.getContainer()), e.on("destroy", () => n.unmount());
}
export {
  Ll as init
};
