const ei = ':host{display:block;color-scheme:light}.todo-root{display:block;padding:24px;border-radius:16px;background:var(--spectrum-gray-50, #fafafa);box-shadow:0 1px 2px #0f0f0f0f,0 8px 24px #0f0f0f14;font-family:Adobe Clean,"Source Sans 3",system-ui,-apple-system,Segoe UI,sans-serif;color:var(--spectrum-gray-900, #1f1f1f);box-sizing:border-box}.todo-header{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px}.todo-heading{display:flex;align-items:center;gap:12px;min-width:0}.todo-title{margin:0;font-size:1.375rem;font-weight:700;letter-spacing:-.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.todo-form{display:flex;gap:8px;align-items:stretch}.todo-input{flex:1 1 auto}.todo-divider{margin:16px 0}.todo-error{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px}.todo-loading{display:flex;align-items:center;justify-content:center;gap:12px;padding:24px 0}.todo-muted{color:var(--spectrum-gray-700, #6d6d6d);font-size:.875rem}.todo-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:4px}.todo-item{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:6px 8px;border-radius:8px;transition:background-color .12s ease}.todo-item:hover{background:var(--spectrum-gray-100, #f0f0f0)}.todo-item--done .todo-label{text-decoration:line-through;color:var(--spectrum-gray-600, #8f8f8f)}.todo-label{font-size:.9375rem;line-height:1.4}.todo-empty{display:flex;justify-content:center;padding:12px 0 4px}';
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Jo(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const X = {}, Me = [], Ut = () => {
}, _a = () => !1, Jr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Qr = (e) => e.startsWith("onUpdate:"), pt = Object.assign, Qo = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, ri = Object.prototype.hasOwnProperty, O = (e, t) => ri.call(e, t), D = Array.isArray, Le = (e) => xr(e) === "[object Map]", $a = (e) => xr(e) === "[object Set]", Ss = (e) => xr(e) === "[object Date]", B = (e) => typeof e == "function", it = (e) => typeof e == "string", Nt = (e) => typeof e == "symbol", U = (e) => e !== null && typeof e == "object", Ca = (e) => (U(e) || B(e)) && B(e.then) && B(e.catch), Aa = Object.prototype.toString, xr = (e) => Aa.call(e), oi = (e) => xr(e).slice(8, -1), Sa = (e) => xr(e) === "[object Object]", ts = (e) => it(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, rr = /* @__PURE__ */ Jo(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), to = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, si = /-\w/g, $t = to(
  (e) => e.replace(si, (t) => t.slice(1).toUpperCase())
), ai = /\B([A-Z])/g, Se = to(
  (e) => e.replace(ai, "-$1").toLowerCase()
), Ea = to((e) => e.charAt(0).toUpperCase() + e.slice(1)), go = to(
  (e) => e ? `on${Ea(e)}` : ""
), Lt = (e, t) => !Object.is(e, t), bo = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, Ta = (e, t, r, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: r
  });
}, ci = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Es;
const eo = () => Es || (Es = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function es(e) {
  if (D(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const o = e[r], s = it(o) ? ui(o) : es(o);
      if (s)
        for (const a in s)
          t[a] = s[a];
    }
    return t;
  } else if (it(e) || U(e))
    return e;
}
const ii = /;(?![^(]*\))/g, ni = /:([^]+)/, li = /\/\*[^]*?\*\//g;
function ui(e) {
  const t = {};
  return e.replace(li, "").split(ii).forEach((r) => {
    if (r) {
      const o = r.split(ni);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function ro(e) {
  let t = "";
  if (it(e))
    t = e;
  else if (D(e))
    for (let r = 0; r < e.length; r++) {
      const o = ro(e[r]);
      o && (t += o + " ");
    }
  else if (U(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const mi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", pi = /* @__PURE__ */ Jo(mi);
function Da(e) {
  return !!e || e === "";
}
function di(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let o = 0; r && o < e.length; o++)
    r = rs(e[o], t[o]);
  return r;
}
function rs(e, t) {
  if (e === t) return !0;
  let r = Ss(e), o = Ss(t);
  if (r || o)
    return r && o ? e.getTime() === t.getTime() : !1;
  if (r = Nt(e), o = Nt(t), r || o)
    return e === t;
  if (r = D(e), o = D(t), r || o)
    return r && o ? di(e, t) : !1;
  if (r = U(e), o = U(t), r || o) {
    if (!r || !o)
      return !1;
    const s = Object.keys(e).length, a = Object.keys(t).length;
    if (s !== a)
      return !1;
    for (const c in e) {
      const i = e.hasOwnProperty(c), n = t.hasOwnProperty(c);
      if (i && !n || !i && n || !rs(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Ba = (e) => !!(e && e.__v_isRef === !0), Qe = (e) => it(e) ? e : e == null ? "" : D(e) || U(e) && (e.toString === Aa || !B(e.toString)) ? Ba(e) ? Qe(e.value) : JSON.stringify(e, Ia, 2) : String(e), Ia = (e, t) => Ba(t) ? Ia(e, t.value) : Le(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [o, s], a) => (r[ho(o, a) + " =>"] = s, r),
    {}
  )
} : $a(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => ho(r))
} : Nt(t) ? ho(t) : U(t) && !D(t) && !Sa(t) ? String(t) : t, ho = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Nt(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let wt;
class gi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = wt, !t && wt && (this.index = (wt.scopes || (wt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++)
          this.scopes[t].pause();
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++)
          this.scopes[t].resume();
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const r = wt;
      try {
        return wt = this, t();
      } finally {
        wt = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = wt, wt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (wt = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let r, o;
      for (r = 0, o = this.effects.length; r < o; r++)
        this.effects[r].stop();
      for (this.effects.length = 0, r = 0, o = this.cleanups.length; r < o; r++)
        this.cleanups[r]();
      if (this.cleanups.length = 0, this.scopes) {
        for (r = 0, o = this.scopes.length; r < o; r++)
          this.scopes[r].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function bi() {
  return wt;
}
let W;
const fo = /* @__PURE__ */ new WeakSet();
class qa {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, wt && wt.active && wt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, fo.has(this) && (fo.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ma(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ts(this), La(this);
    const t = W, r = Ct;
    W = this, Ct = !0;
    try {
      return this.fn();
    } finally {
      Oa(this), W = t, Ct = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        as(t);
      this.deps = this.depsTail = void 0, Ts(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? fo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Do(this) && this.run();
  }
  get dirty() {
    return Do(this);
  }
}
let Pa = 0, or, sr;
function Ma(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = sr, sr = e;
    return;
  }
  e.next = or, or = e;
}
function os() {
  Pa++;
}
function ss() {
  if (--Pa > 0)
    return;
  if (sr) {
    let t = sr;
    for (sr = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; or; ) {
    let t = or;
    for (or = void 0; t; ) {
      const r = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = r;
    }
  }
  if (e) throw e;
}
function La(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Oa(e) {
  let t, r = e.depsTail, o = r;
  for (; o; ) {
    const s = o.prevDep;
    o.version === -1 ? (o === r && (r = s), as(o), hi(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s;
  }
  e.deps = t, e.depsTail = r;
}
function Do(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ra(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ra(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === gr) || (e.globalVersion = gr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Do(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = W, o = Ct;
  W = e, Ct = !0;
  try {
    La(e);
    const s = e.fn(e._value);
    (t.version === 0 || Lt(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    W = r, Ct = o, Oa(e), e.flags &= -3;
  }
}
function as(e, t = !1) {
  const { dep: r, prevSub: o, nextSub: s } = e;
  if (o && (o.nextSub = s, e.prevSub = void 0), s && (s.prevSub = o, e.nextSub = void 0), r.subs === e && (r.subs = o, !o && r.computed)) {
    r.computed.flags &= -5;
    for (let a = r.computed.deps; a; a = a.nextDep)
      as(a, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function hi(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let Ct = !0;
const Ua = [];
function ee() {
  Ua.push(Ct), Ct = !1;
}
function re() {
  const e = Ua.pop();
  Ct = e === void 0 ? !0 : e;
}
function Ts(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = W;
    W = void 0;
    try {
      t();
    } finally {
      W = r;
    }
  }
}
let gr = 0;
class fi {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class cs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!W || !Ct || W === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== W)
      r = this.activeLink = new fi(W, this), W.deps ? (r.prevDep = W.depsTail, W.depsTail.nextDep = r, W.depsTail = r) : W.deps = W.depsTail = r, Na(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const o = r.nextDep;
      o.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = o), r.prevDep = W.depsTail, r.nextDep = void 0, W.depsTail.nextDep = r, W.depsTail = r, W.deps === r && (W.deps = o);
    }
    return r;
  }
  trigger(t) {
    this.version++, gr++, this.notify(t);
  }
  notify(t) {
    os();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      ss();
    }
  }
}
function Na(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        Na(o);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const Bo = /* @__PURE__ */ new WeakMap(), _e = /* @__PURE__ */ Symbol(
  ""
), Io = /* @__PURE__ */ Symbol(
  ""
), br = /* @__PURE__ */ Symbol(
  ""
);
function dt(e, t, r) {
  if (Ct && W) {
    let o = Bo.get(e);
    o || Bo.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(r);
    s || (o.set(r, s = new cs()), s.map = o, s.key = r), s.track();
  }
}
function Qt(e, t, r, o, s, a) {
  const c = Bo.get(e);
  if (!c) {
    gr++;
    return;
  }
  const i = (n) => {
    n && n.trigger();
  };
  if (os(), t === "clear")
    c.forEach(i);
  else {
    const n = D(e), p = n && ts(r);
    if (n && r === "length") {
      const u = Number(o);
      c.forEach((d, b) => {
        (b === "length" || b === br || !Nt(b) && b >= u) && i(d);
      });
    } else
      switch ((r !== void 0 || c.has(void 0)) && i(c.get(r)), p && i(c.get(br)), t) {
        case "add":
          n ? p && i(c.get("length")) : (i(c.get(_e)), Le(e) && i(c.get(Io)));
          break;
        case "delete":
          n || (i(c.get(_e)), Le(e) && i(c.get(Io)));
          break;
        case "set":
          Le(e) && i(c.get(_e));
          break;
      }
  }
  ss();
}
function Ee(e) {
  const t = /* @__PURE__ */ L(e);
  return t === e ? t : (dt(t, "iterate", br), /* @__PURE__ */ _t(e) ? t : t.map(At));
}
function oo(e) {
  return dt(e = /* @__PURE__ */ L(e), "iterate", br), e;
}
function qt(e, t) {
  return /* @__PURE__ */ oe(e) ? Ue(/* @__PURE__ */ $e(e) ? At(t) : t) : At(t);
}
const vi = {
  __proto__: null,
  [Symbol.iterator]() {
    return vo(this, Symbol.iterator, (e) => qt(this, e));
  },
  concat(...e) {
    return Ee(this).concat(
      ...e.map((t) => D(t) ? Ee(t) : t)
    );
  },
  entries() {
    return vo(this, "entries", (e) => (e[1] = qt(this, e[1]), e));
  },
  every(e, t) {
    return Gt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Gt(
      this,
      "filter",
      e,
      t,
      (r) => r.map((o) => qt(this, o)),
      arguments
    );
  },
  find(e, t) {
    return Gt(
      this,
      "find",
      e,
      t,
      (r) => qt(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return Gt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Gt(
      this,
      "findLast",
      e,
      t,
      (r) => qt(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Gt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Gt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return yo(this, "includes", e);
  },
  indexOf(...e) {
    return yo(this, "indexOf", e);
  },
  join(e) {
    return Ee(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return yo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Gt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Xe(this, "pop");
  },
  push(...e) {
    return Xe(this, "push", e);
  },
  reduce(e, ...t) {
    return Ds(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ds(this, "reduceRight", e, t);
  },
  shift() {
    return Xe(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Gt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Xe(this, "splice", e);
  },
  toReversed() {
    return Ee(this).toReversed();
  },
  toSorted(e) {
    return Ee(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ee(this).toSpliced(...e);
  },
  unshift(...e) {
    return Xe(this, "unshift", e);
  },
  values() {
    return vo(this, "values", (e) => qt(this, e));
  }
};
function vo(e, t, r) {
  const o = oo(e), s = o[t]();
  return o !== e && !/* @__PURE__ */ _t(e) && (s._next = s.next, s.next = () => {
    const a = s._next();
    return a.done || (a.value = r(a.value)), a;
  }), s;
}
const yi = Array.prototype;
function Gt(e, t, r, o, s, a) {
  const c = oo(e), i = c !== e && !/* @__PURE__ */ _t(e), n = c[t];
  if (n !== yi[t]) {
    const d = n.apply(e, a);
    return i ? At(d) : d;
  }
  let p = r;
  c !== e && (i ? p = function(d, b) {
    return r.call(this, qt(e, d), b, e);
  } : r.length > 2 && (p = function(d, b) {
    return r.call(this, d, b, e);
  }));
  const u = n.call(c, p, o);
  return i && s ? s(u) : u;
}
function Ds(e, t, r, o) {
  const s = oo(e), a = s !== e && !/* @__PURE__ */ _t(e);
  let c = r, i = !1;
  s !== e && (a ? (i = o.length === 0, c = function(p, u, d) {
    return i && (i = !1, p = qt(e, p)), r.call(this, p, qt(e, u), d, e);
  }) : r.length > 3 && (c = function(p, u, d) {
    return r.call(this, p, u, d, e);
  }));
  const n = s[t](c, ...o);
  return i ? qt(e, n) : n;
}
function yo(e, t, r) {
  const o = /* @__PURE__ */ L(e);
  dt(o, "iterate", br);
  const s = o[t](...r);
  return (s === -1 || s === !1) && /* @__PURE__ */ us(r[0]) ? (r[0] = /* @__PURE__ */ L(r[0]), o[t](...r)) : s;
}
function Xe(e, t, r = []) {
  ee(), os();
  const o = (/* @__PURE__ */ L(e))[t].apply(e, r);
  return ss(), re(), o;
}
const ki = /* @__PURE__ */ Jo("__proto__,__v_isRef,__isVue"), Fa = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Nt)
);
function xi(e) {
  Nt(e) || (e = String(e));
  const t = /* @__PURE__ */ L(this);
  return dt(t, "has", e), t.hasOwnProperty(e);
}
class Va {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, o) {
    if (r === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, a = this._isShallow;
    if (r === "__v_isReactive")
      return !s;
    if (r === "__v_isReadonly")
      return s;
    if (r === "__v_isShallow")
      return a;
    if (r === "__v_raw")
      return o === (s ? a ? Ei : Xa : a ? Ga : Wa).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const c = D(t);
    if (!s) {
      let n;
      if (c && (n = vi[r]))
        return n;
      if (r === "hasOwnProperty")
        return xi;
    }
    const i = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ gt(t) ? t : o
    );
    if ((Nt(r) ? Fa.has(r) : ki(r)) || (s || dt(t, "get", r), a))
      return i;
    if (/* @__PURE__ */ gt(i)) {
      const n = c && ts(r) ? i : i.value;
      return s && U(n) ? /* @__PURE__ */ Po(n) : n;
    }
    return U(i) ? s ? /* @__PURE__ */ Po(i) : /* @__PURE__ */ ns(i) : i;
  }
}
class Ka extends Va {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, o, s) {
    let a = t[r];
    const c = D(t) && ts(r);
    if (!this._isShallow) {
      const p = /* @__PURE__ */ oe(a);
      if (!/* @__PURE__ */ _t(o) && !/* @__PURE__ */ oe(o) && (a = /* @__PURE__ */ L(a), o = /* @__PURE__ */ L(o)), !c && /* @__PURE__ */ gt(a) && !/* @__PURE__ */ gt(o))
        return p || (a.value = o), !0;
    }
    const i = c ? Number(r) < t.length : O(t, r), n = Reflect.set(
      t,
      r,
      o,
      /* @__PURE__ */ gt(t) ? t : s
    );
    return t === /* @__PURE__ */ L(s) && (i ? Lt(o, a) && Qt(t, "set", r, o) : Qt(t, "add", r, o)), n;
  }
  deleteProperty(t, r) {
    const o = O(t, r);
    t[r];
    const s = Reflect.deleteProperty(t, r);
    return s && o && Qt(t, "delete", r, void 0), s;
  }
  has(t, r) {
    const o = Reflect.has(t, r);
    return (!Nt(r) || !Fa.has(r)) && dt(t, "has", r), o;
  }
  ownKeys(t) {
    return dt(
      t,
      "iterate",
      D(t) ? "length" : _e
    ), Reflect.ownKeys(t);
  }
}
class wi extends Va {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, r) {
    return !0;
  }
  deleteProperty(t, r) {
    return !0;
  }
}
const zi = /* @__PURE__ */ new Ka(), ji = /* @__PURE__ */ new wi(), Hi = /* @__PURE__ */ new Ka(!0);
const qo = (e) => e, Tr = (e) => Reflect.getPrototypeOf(e);
function _i(e, t, r) {
  return function(...o) {
    const s = this.__v_raw, a = /* @__PURE__ */ L(s), c = Le(a), i = e === "entries" || e === Symbol.iterator && c, n = e === "keys" && c, p = s[e](...o), u = r ? qo : t ? Ue : At;
    return !t && dt(
      a,
      "iterate",
      n ? Io : _e
    ), pt(
      // inheriting all iterator properties
      Object.create(p),
      {
        // iterator protocol
        next() {
          const { value: d, done: b } = p.next();
          return b ? { value: d, done: b } : {
            value: i ? [u(d[0]), u(d[1])] : u(d),
            done: b
          };
        }
      }
    );
  };
}
function Dr(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function $i(e, t) {
  const r = {
    get(s) {
      const a = this.__v_raw, c = /* @__PURE__ */ L(a), i = /* @__PURE__ */ L(s);
      e || (Lt(s, i) && dt(c, "get", s), dt(c, "get", i));
      const { has: n } = Tr(c), p = t ? qo : e ? Ue : At;
      if (n.call(c, s))
        return p(a.get(s));
      if (n.call(c, i))
        return p(a.get(i));
      a !== c && a.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && dt(/* @__PURE__ */ L(s), "iterate", _e), s.size;
    },
    has(s) {
      const a = this.__v_raw, c = /* @__PURE__ */ L(a), i = /* @__PURE__ */ L(s);
      return e || (Lt(s, i) && dt(c, "has", s), dt(c, "has", i)), s === i ? a.has(s) : a.has(s) || a.has(i);
    },
    forEach(s, a) {
      const c = this, i = c.__v_raw, n = /* @__PURE__ */ L(i), p = t ? qo : e ? Ue : At;
      return !e && dt(n, "iterate", _e), i.forEach((u, d) => s.call(a, p(u), p(d), c));
    }
  };
  return pt(
    r,
    e ? {
      add: Dr("add"),
      set: Dr("set"),
      delete: Dr("delete"),
      clear: Dr("clear")
    } : {
      add(s) {
        const a = /* @__PURE__ */ L(this), c = Tr(a), i = /* @__PURE__ */ L(s), n = !t && !/* @__PURE__ */ _t(s) && !/* @__PURE__ */ oe(s) ? i : s;
        return c.has.call(a, n) || Lt(s, n) && c.has.call(a, s) || Lt(i, n) && c.has.call(a, i) || (a.add(n), Qt(a, "add", n, n)), this;
      },
      set(s, a) {
        !t && !/* @__PURE__ */ _t(a) && !/* @__PURE__ */ oe(a) && (a = /* @__PURE__ */ L(a));
        const c = /* @__PURE__ */ L(this), { has: i, get: n } = Tr(c);
        let p = i.call(c, s);
        p || (s = /* @__PURE__ */ L(s), p = i.call(c, s));
        const u = n.call(c, s);
        return c.set(s, a), p ? Lt(a, u) && Qt(c, "set", s, a) : Qt(c, "add", s, a), this;
      },
      delete(s) {
        const a = /* @__PURE__ */ L(this), { has: c, get: i } = Tr(a);
        let n = c.call(a, s);
        n || (s = /* @__PURE__ */ L(s), n = c.call(a, s)), i && i.call(a, s);
        const p = a.delete(s);
        return n && Qt(a, "delete", s, void 0), p;
      },
      clear() {
        const s = /* @__PURE__ */ L(this), a = s.size !== 0, c = s.clear();
        return a && Qt(
          s,
          "clear",
          void 0,
          void 0
        ), c;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    r[s] = _i(s, e, t);
  }), r;
}
function is(e, t) {
  const r = $i(e, t);
  return (o, s, a) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    O(r, s) && s in o ? r : o,
    s,
    a
  );
}
const Ci = {
  get: /* @__PURE__ */ is(!1, !1)
}, Ai = {
  get: /* @__PURE__ */ is(!1, !0)
}, Si = {
  get: /* @__PURE__ */ is(!0, !1)
};
const Wa = /* @__PURE__ */ new WeakMap(), Ga = /* @__PURE__ */ new WeakMap(), Xa = /* @__PURE__ */ new WeakMap(), Ei = /* @__PURE__ */ new WeakMap();
function Ti(e) {
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
function Di(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ti(oi(e));
}
// @__NO_SIDE_EFFECTS__
function ns(e) {
  return /* @__PURE__ */ oe(e) ? e : ls(
    e,
    !1,
    zi,
    Ci,
    Wa
  );
}
// @__NO_SIDE_EFFECTS__
function Bi(e) {
  return ls(
    e,
    !1,
    Hi,
    Ai,
    Ga
  );
}
// @__NO_SIDE_EFFECTS__
function Po(e) {
  return ls(
    e,
    !0,
    ji,
    Si,
    Xa
  );
}
function ls(e, t, r, o, s) {
  if (!U(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = Di(e);
  if (a === 0)
    return e;
  const c = s.get(e);
  if (c)
    return c;
  const i = new Proxy(
    e,
    a === 2 ? o : r
  );
  return s.set(e, i), i;
}
// @__NO_SIDE_EFFECTS__
function $e(e) {
  return /* @__PURE__ */ oe(e) ? /* @__PURE__ */ $e(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function oe(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function _t(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function us(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function L(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ L(t) : e;
}
function Ii(e) {
  return !O(e, "__v_skip") && Object.isExtensible(e) && Ta(e, "__v_skip", !0), e;
}
const At = (e) => U(e) ? /* @__PURE__ */ ns(e) : e, Ue = (e) => U(e) ? /* @__PURE__ */ Po(e) : e;
// @__NO_SIDE_EFFECTS__
function gt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function le(e) {
  return qi(e, !1);
}
function qi(e, t) {
  return /* @__PURE__ */ gt(e) ? e : new Pi(e, t);
}
class Pi {
  constructor(t, r) {
    this.dep = new cs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ L(t), this._value = r ? t : At(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, o = this.__v_isShallow || /* @__PURE__ */ _t(t) || /* @__PURE__ */ oe(t);
    t = o ? t : /* @__PURE__ */ L(t), Lt(t, r) && (this._rawValue = t, this._value = o ? t : At(t), this.dep.trigger());
  }
}
function lt(e) {
  return /* @__PURE__ */ gt(e) ? e.value : e;
}
const Mi = {
  get: (e, t, r) => t === "__v_raw" ? e : lt(Reflect.get(e, t, r)),
  set: (e, t, r, o) => {
    const s = e[t];
    return /* @__PURE__ */ gt(s) && !/* @__PURE__ */ gt(r) ? (s.value = r, !0) : Reflect.set(e, t, r, o);
  }
};
function Za(e) {
  return /* @__PURE__ */ $e(e) ? e : new Proxy(e, Mi);
}
class Li {
  constructor(t, r, o) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new cs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = gr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    W !== this)
      return Ma(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ra(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Oi(e, t, r = !1) {
  let o, s;
  return B(e) ? o = e : (o = e.get, s = e.set), new Li(o, s, r);
}
const Br = {}, Fr = /* @__PURE__ */ new WeakMap();
let we;
function Ri(e, t = !1, r = we) {
  if (r) {
    let o = Fr.get(r);
    o || Fr.set(r, o = []), o.push(e);
  }
}
function Ui(e, t, r = X) {
  const { immediate: o, deep: s, once: a, scheduler: c, augmentJob: i, call: n } = r, p = (E) => s ? E : /* @__PURE__ */ _t(E) || s === !1 || s === 0 ? ue(E, 1) : ue(E);
  let u, d, b, x, _ = !1, A = !1;
  if (/* @__PURE__ */ gt(e) ? (d = () => e.value, _ = /* @__PURE__ */ _t(e)) : /* @__PURE__ */ $e(e) ? (d = () => p(e), _ = !0) : D(e) ? (A = !0, _ = e.some((E) => /* @__PURE__ */ $e(E) || /* @__PURE__ */ _t(E)), d = () => e.map((E) => {
    if (/* @__PURE__ */ gt(E))
      return E.value;
    if (/* @__PURE__ */ $e(E))
      return p(E);
    if (B(E))
      return n ? n(E, 2) : E();
  })) : B(e) ? t ? d = n ? () => n(e, 2) : e : d = () => {
    if (b) {
      ee();
      try {
        b();
      } finally {
        re();
      }
    }
    const E = we;
    we = u;
    try {
      return n ? n(e, 3, [x]) : e(x);
    } finally {
      we = E;
    }
  } : d = Ut, t && s) {
    const E = d, Y = s === !0 ? 1 / 0 : s;
    d = () => ue(E(), Y);
  }
  const rt = bi(), N = () => {
    u.stop(), rt && rt.active && Qo(rt.effects, u);
  };
  if (a && t) {
    const E = t;
    t = (...Y) => {
      E(...Y), N();
    };
  }
  let q = A ? new Array(e.length).fill(Br) : Br;
  const R = (E) => {
    if (!(!(u.flags & 1) || !u.dirty && !E))
      if (t) {
        const Y = u.run();
        if (s || _ || (A ? Y.some((kt, Ht) => Lt(kt, q[Ht])) : Lt(Y, q))) {
          b && b();
          const kt = we;
          we = u;
          try {
            const Ht = [
              Y,
              // pass undefined as the old value when it's changed for the first time
              q === Br ? void 0 : A && q[0] === Br ? [] : q,
              x
            ];
            q = Y, n ? n(t, 3, Ht) : (
              // @ts-expect-error
              t(...Ht)
            );
          } finally {
            we = kt;
          }
        }
      } else
        u.run();
  };
  return i && i(R), u = new qa(d), u.scheduler = c ? () => c(R, !1) : R, x = (E) => Ri(E, !1, u), b = u.onStop = () => {
    const E = Fr.get(u);
    if (E) {
      if (n)
        n(E, 4);
      else
        for (const Y of E) Y();
      Fr.delete(u);
    }
  }, t ? o ? R(!0) : q = u.run() : c ? c(R.bind(null, !0), !0) : u.run(), N.pause = u.pause.bind(u), N.resume = u.resume.bind(u), N.stop = N, N;
}
function ue(e, t = 1 / 0, r) {
  if (t <= 0 || !U(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ gt(e))
    ue(e.value, t, r);
  else if (D(e))
    for (let o = 0; o < e.length; o++)
      ue(e[o], t, r);
  else if ($a(e) || Le(e))
    e.forEach((o) => {
      ue(o, t, r);
    });
  else if (Sa(e)) {
    for (const o in e)
      ue(e[o], t, r);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && ue(e[o], t, r);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function wr(e, t, r, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    so(s, t, r);
  }
}
function Ft(e, t, r, o) {
  if (B(e)) {
    const s = wr(e, t, r, o);
    return s && Ca(s) && s.catch((a) => {
      so(a, t, r);
    }), s;
  }
  if (D(e)) {
    const s = [];
    for (let a = 0; a < e.length; a++)
      s.push(Ft(e[a], t, r, o));
    return s;
  }
}
function so(e, t, r, o = !0) {
  const s = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: c } = t && t.appContext.config || X;
  if (t) {
    let i = t.parent;
    const n = t.proxy, p = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; i; ) {
      const u = i.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](e, n, p) === !1)
            return;
      }
      i = i.parent;
    }
    if (a) {
      ee(), wr(a, null, 10, [
        e,
        n,
        p
      ]), re();
      return;
    }
  }
  Ni(e, r, s, o, c);
}
function Ni(e, t, r, o = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const vt = [];
let It = -1;
const Oe = [];
let ne = null, Ie = 0;
const Ya = /* @__PURE__ */ Promise.resolve();
let Vr = null;
function Fi(e) {
  const t = Vr || Ya;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Vi(e) {
  let t = It + 1, r = vt.length;
  for (; t < r; ) {
    const o = t + r >>> 1, s = vt[o], a = hr(s);
    a < e || a === e && s.flags & 2 ? t = o + 1 : r = o;
  }
  return t;
}
function ms(e) {
  if (!(e.flags & 1)) {
    const t = hr(e), r = vt[vt.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= hr(r) ? vt.push(e) : vt.splice(Vi(t), 0, e), e.flags |= 1, Ja();
  }
}
function Ja() {
  Vr || (Vr = Ya.then(tc));
}
function Ki(e) {
  D(e) ? Oe.push(...e) : ne && e.id === -1 ? ne.splice(Ie + 1, 0, e) : e.flags & 1 || (Oe.push(e), e.flags |= 1), Ja();
}
function Bs(e, t, r = It + 1) {
  for (; r < vt.length; r++) {
    const o = vt[r];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid)
        continue;
      vt.splice(r, 1), r--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function Qa(e) {
  if (Oe.length) {
    const t = [...new Set(Oe)].sort(
      (r, o) => hr(r) - hr(o)
    );
    if (Oe.length = 0, ne) {
      ne.push(...t);
      return;
    }
    for (ne = t, Ie = 0; Ie < ne.length; Ie++) {
      const r = ne[Ie];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    ne = null, Ie = 0;
  }
}
const hr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function tc(e) {
  try {
    for (It = 0; It < vt.length; It++) {
      const t = vt[It];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), wr(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; It < vt.length; It++) {
      const t = vt[It];
      t && (t.flags &= -2);
    }
    It = -1, vt.length = 0, Qa(), Vr = null, (vt.length || Oe.length) && tc();
  }
}
let Ot = null, ec = null;
function Kr(e) {
  const t = Ot;
  return Ot = e, ec = e && e.type.__scopeId || null, t;
}
function Wi(e, t = Ot, r) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && Vs(-1);
    const a = Kr(t);
    let c;
    try {
      c = e(...s);
    } finally {
      Kr(a), o._d && Vs(1);
    }
    return c;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function ve(e, t, r, o) {
  const s = e.dirs, a = t && t.dirs;
  for (let c = 0; c < s.length; c++) {
    const i = s[c];
    a && (i.oldValue = a[c].value);
    let n = i.dir[o];
    n && (ee(), Ft(n, r, 8, [
      e.el,
      i,
      e,
      t
    ]), re());
  }
}
function Gi(e, t) {
  if (yt) {
    let r = yt.provides;
    const o = yt.parent && yt.parent.provides;
    o === r && (r = yt.provides = Object.create(o)), r[e] = t;
  }
}
function Pr(e, t, r = !1) {
  const o = Xn();
  if (o || Re) {
    let s = Re ? Re._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return r && B(t) ? t.call(o && o.proxy) : t;
  }
}
const Xi = /* @__PURE__ */ Symbol.for("v-scx"), Zi = () => Pr(Xi);
function Mr(e, t, r) {
  return rc(e, t, r);
}
function rc(e, t, r = X) {
  const { immediate: o, deep: s, flush: a, once: c } = r, i = pt({}, r), n = t && o || !t && a !== "post";
  let p;
  if (vr) {
    if (a === "sync") {
      const x = Zi();
      p = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!n) {
      const x = () => {
      };
      return x.stop = Ut, x.resume = Ut, x.pause = Ut, x;
    }
  }
  const u = yt;
  i.call = (x, _, A) => Ft(x, u, _, A);
  let d = !1;
  a === "post" ? i.scheduler = (x) => {
    xt(x, u && u.suspense);
  } : a !== "sync" && (d = !0, i.scheduler = (x, _) => {
    _ ? x() : ms(x);
  }), i.augmentJob = (x) => {
    t && (x.flags |= 4), d && (x.flags |= 2, u && (x.id = u.uid, x.i = u));
  };
  const b = Ui(e, t, i);
  return vr && (p ? p.push(b) : n && b()), b;
}
function Yi(e, t, r) {
  const o = this.proxy, s = it(e) ? e.includes(".") ? oc(o, e) : () => o[e] : e.bind(o, o);
  let a;
  B(t) ? a = t : (a = t.handler, r = t);
  const c = zr(this), i = rc(s, a.bind(o), r);
  return c(), i;
}
function oc(e, t) {
  const r = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < r.length && o; s++)
      o = o[r[s]];
    return o;
  };
}
const Ji = /* @__PURE__ */ Symbol("_vte"), Qi = (e) => e.__isTeleport, tn = /* @__PURE__ */ Symbol("_leaveCb");
function ps(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ps(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function en(e, t) {
  return B(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    pt({ name: e.name }, t, { setup: e })
  ) : e;
}
function sc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Is(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const Wr = /* @__PURE__ */ new WeakMap();
function ar(e, t, r, o, s = !1) {
  if (D(e)) {
    e.forEach(
      (A, rt) => ar(
        A,
        t && (D(t) ? t[rt] : t),
        r,
        o,
        s
      )
    );
    return;
  }
  if (cr(o) && !s) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && ar(e, t, r, o.component.subTree);
    return;
  }
  const a = o.shapeFlag & 4 ? vs(o.component) : o.el, c = s ? null : a, { i, r: n } = e, p = t && t.r, u = i.refs === X ? i.refs = {} : i.refs, d = i.setupState, b = /* @__PURE__ */ L(d), x = d === X ? _a : (A) => Is(u, A) ? !1 : O(b, A), _ = (A, rt) => !(rt && Is(u, rt));
  if (p != null && p !== n) {
    if (qs(t), it(p))
      u[p] = null, x(p) && (d[p] = null);
    else if (/* @__PURE__ */ gt(p)) {
      const A = t;
      _(p, A.k) && (p.value = null), A.k && (u[A.k] = null);
    }
  }
  if (B(n))
    wr(n, i, 12, [c, u]);
  else {
    const A = it(n), rt = /* @__PURE__ */ gt(n);
    if (A || rt) {
      const N = () => {
        if (e.f) {
          const q = A ? x(n) ? d[n] : u[n] : _() || !e.k ? n.value : u[e.k];
          if (s)
            D(q) && Qo(q, a);
          else if (D(q))
            q.includes(a) || q.push(a);
          else if (A)
            u[n] = [a], x(n) && (d[n] = u[n]);
          else {
            const R = [a];
            _(n, e.k) && (n.value = R), e.k && (u[e.k] = R);
          }
        } else A ? (u[n] = c, x(n) && (d[n] = c)) : rt && (_(n, e.k) && (n.value = c), e.k && (u[e.k] = c));
      };
      if (c) {
        const q = () => {
          N(), Wr.delete(e);
        };
        q.id = -1, Wr.set(e, q), xt(q, r);
      } else
        qs(e), N();
    }
  }
}
function qs(e) {
  const t = Wr.get(e);
  t && (t.flags |= 8, Wr.delete(e));
}
eo().requestIdleCallback;
eo().cancelIdleCallback;
const cr = (e) => !!e.type.__asyncLoader, ac = (e) => e.type.__isKeepAlive;
function rn(e, t) {
  cc(e, "a", t);
}
function on(e, t) {
  cc(e, "da", t);
}
function cc(e, t, r = yt) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = r;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (ao(t, o, r), r) {
    let s = r.parent;
    for (; s && s.parent; )
      ac(s.parent.vnode) && sn(o, t, r, s), s = s.parent;
  }
}
function sn(e, t, r, o) {
  const s = ao(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  gs(() => {
    Qo(o[t], s);
  }, r);
}
function ao(e, t, r = yt, o = !1) {
  if (r) {
    const s = r[e] || (r[e] = []), a = t.__weh || (t.__weh = (...c) => {
      ee();
      const i = zr(r), n = Ft(t, r, e, c);
      return i(), re(), n;
    });
    return o ? s.unshift(a) : s.push(a), a;
  }
}
const se = (e) => (t, r = yt) => {
  (!vr || e === "sp") && ao(e, (...o) => t(...o), r);
}, an = se("bm"), ds = se("m"), cn = se(
  "bu"
), nn = se("u"), ic = se(
  "bum"
), gs = se("um"), ln = se(
  "sp"
), un = se("rtg"), mn = se("rtc");
function pn(e, t = yt) {
  ao("ec", e, t);
}
const dn = /* @__PURE__ */ Symbol.for("v-ndc");
function gn(e, t, r, o) {
  let s;
  const a = r, c = D(e);
  if (c || it(e)) {
    const i = c && /* @__PURE__ */ $e(e);
    let n = !1, p = !1;
    i && (n = !/* @__PURE__ */ _t(e), p = /* @__PURE__ */ oe(e), e = oo(e)), s = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      s[u] = t(
        n ? p ? Ue(At(e[u])) : At(e[u]) : e[u],
        u,
        void 0,
        a
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let i = 0; i < e; i++)
      s[i] = t(i + 1, i, void 0, a);
  } else if (U(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (i, n) => t(i, n, void 0, a)
      );
    else {
      const i = Object.keys(e);
      s = new Array(i.length);
      for (let n = 0, p = i.length; n < p; n++) {
        const u = i[n];
        s[n] = t(e[u], u, n, a);
      }
    }
  else
    s = [];
  return s;
}
const Mo = (e) => e ? Ac(e) ? vs(e) : Mo(e.parent) : null, ir = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ pt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Mo(e.parent),
    $root: (e) => Mo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => lc(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ms(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Fi.bind(e.proxy)),
    $watch: (e) => Yi.bind(e)
  })
), ko = (e, t) => e !== X && !e.__isScriptSetup && O(e, t), bn = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: o, data: s, props: a, accessCache: c, type: i, appContext: n } = e;
    if (t[0] !== "$") {
      const b = c[t];
      if (b !== void 0)
        switch (b) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return r[t];
          case 3:
            return a[t];
        }
      else {
        if (ko(o, t))
          return c[t] = 1, o[t];
        if (s !== X && O(s, t))
          return c[t] = 2, s[t];
        if (O(a, t))
          return c[t] = 3, a[t];
        if (r !== X && O(r, t))
          return c[t] = 4, r[t];
        Lo && (c[t] = 0);
      }
    }
    const p = ir[t];
    let u, d;
    if (p)
      return t === "$attrs" && dt(e.attrs, "get", ""), p(e);
    if (
      // css module (injected by vue-loader)
      (u = i.__cssModules) && (u = u[t])
    )
      return u;
    if (r !== X && O(r, t))
      return c[t] = 4, r[t];
    if (
      // global properties
      d = n.config.globalProperties, O(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, r) {
    const { data: o, setupState: s, ctx: a } = e;
    return ko(s, t) ? (s[t] = r, !0) : o !== X && O(o, t) ? (o[t] = r, !0) : O(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: o, appContext: s, props: a, type: c }
  }, i) {
    let n;
    return !!(r[i] || e !== X && i[0] !== "$" && O(e, i) || ko(t, i) || O(a, i) || O(o, i) || O(ir, i) || O(s.config.globalProperties, i) || (n = c.__cssModules) && n[i]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : O(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Ps(e) {
  return D(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Lo = !0;
function hn(e) {
  const t = lc(e), r = e.proxy, o = e.ctx;
  Lo = !1, t.beforeCreate && Ms(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: a,
    methods: c,
    watch: i,
    provide: n,
    inject: p,
    // lifecycle
    created: u,
    beforeMount: d,
    mounted: b,
    beforeUpdate: x,
    updated: _,
    activated: A,
    deactivated: rt,
    beforeDestroy: N,
    beforeUnmount: q,
    destroyed: R,
    unmounted: E,
    render: Y,
    renderTracked: kt,
    renderTriggered: Ht,
    errorCaptured: I,
    serverPrefetch: M,
    // public API
    expose: at,
    inheritAttrs: be,
    // assets
    components: Cr,
    directives: Ar,
    filters: mo
  } = t;
  if (p && fn(p, o, null), c)
    for (const Q in c) {
      const V = c[Q];
      B(V) && (o[Q] = V.bind(r));
    }
  if (s) {
    const Q = s.call(r, r);
    U(Q) && (e.data = /* @__PURE__ */ ns(Q));
  }
  if (Lo = !0, a)
    for (const Q in a) {
      const V = a[Q], he = B(V) ? V.bind(r, r) : B(V.get) ? V.get.bind(r, r) : Ut, Sr = !B(V) && B(V.set) ? V.set.bind(r) : Ut, fe = Or({
        get: he,
        set: Sr
      });
      Object.defineProperty(o, Q, {
        enumerable: !0,
        configurable: !0,
        get: () => fe.value,
        set: (St) => fe.value = St
      });
    }
  if (i)
    for (const Q in i)
      nc(i[Q], o, r, Q);
  if (n) {
    const Q = B(n) ? n.call(r) : n;
    Reflect.ownKeys(Q).forEach((V) => {
      Gi(V, Q[V]);
    });
  }
  u && Ms(u, e, "c");
  function bt(Q, V) {
    D(V) ? V.forEach((he) => Q(he.bind(r))) : V && Q(V.bind(r));
  }
  if (bt(an, d), bt(ds, b), bt(cn, x), bt(nn, _), bt(rn, A), bt(on, rt), bt(pn, I), bt(mn, kt), bt(un, Ht), bt(ic, q), bt(gs, E), bt(ln, M), D(at))
    if (at.length) {
      const Q = e.exposed || (e.exposed = {});
      at.forEach((V) => {
        Object.defineProperty(Q, V, {
          get: () => r[V],
          set: (he) => r[V] = he,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  Y && e.render === Ut && (e.render = Y), be != null && (e.inheritAttrs = be), Cr && (e.components = Cr), Ar && (e.directives = Ar), M && sc(e);
}
function fn(e, t, r = Ut) {
  D(e) && (e = Oo(e));
  for (const o in e) {
    const s = e[o];
    let a;
    U(s) ? "default" in s ? a = Pr(
      s.from || o,
      s.default,
      !0
    ) : a = Pr(s.from || o) : a = Pr(s), /* @__PURE__ */ gt(a) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (c) => a.value = c
    }) : t[o] = a;
  }
}
function Ms(e, t, r) {
  Ft(
    D(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function nc(e, t, r, o) {
  let s = o.includes(".") ? oc(r, o) : () => r[o];
  if (it(e)) {
    const a = t[e];
    B(a) && Mr(s, a);
  } else if (B(e))
    Mr(s, e.bind(r));
  else if (U(e))
    if (D(e))
      e.forEach((a) => nc(a, t, r, o));
    else {
      const a = B(e.handler) ? e.handler.bind(r) : t[e.handler];
      B(a) && Mr(s, a, e);
    }
}
function lc(e) {
  const t = e.type, { mixins: r, extends: o } = t, {
    mixins: s,
    optionsCache: a,
    config: { optionMergeStrategies: c }
  } = e.appContext, i = a.get(t);
  let n;
  return i ? n = i : !s.length && !r && !o ? n = t : (n = {}, s.length && s.forEach(
    (p) => Gr(n, p, c, !0)
  ), Gr(n, t, c)), U(t) && a.set(t, n), n;
}
function Gr(e, t, r, o = !1) {
  const { mixins: s, extends: a } = t;
  a && Gr(e, a, r, !0), s && s.forEach(
    (c) => Gr(e, c, r, !0)
  );
  for (const c in t)
    if (!(o && c === "expose")) {
      const i = vn[c] || r && r[c];
      e[c] = i ? i(e[c], t[c]) : t[c];
    }
  return e;
}
const vn = {
  data: Ls,
  props: Os,
  emits: Os,
  // objects
  methods: tr,
  computed: tr,
  // lifecycle
  beforeCreate: ht,
  created: ht,
  beforeMount: ht,
  mounted: ht,
  beforeUpdate: ht,
  updated: ht,
  beforeDestroy: ht,
  beforeUnmount: ht,
  destroyed: ht,
  unmounted: ht,
  activated: ht,
  deactivated: ht,
  errorCaptured: ht,
  serverPrefetch: ht,
  // assets
  components: tr,
  directives: tr,
  // watch
  watch: kn,
  // provide / inject
  provide: Ls,
  inject: yn
};
function Ls(e, t) {
  return t ? e ? function() {
    return pt(
      B(e) ? e.call(this, this) : e,
      B(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function yn(e, t) {
  return tr(Oo(e), Oo(t));
}
function Oo(e) {
  if (D(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function ht(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function tr(e, t) {
  return e ? pt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Os(e, t) {
  return e ? D(e) && D(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : pt(
    /* @__PURE__ */ Object.create(null),
    Ps(e),
    Ps(t ?? {})
  ) : t;
}
function kn(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = pt(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    r[o] = ht(e[o], t[o]);
  return r;
}
function uc() {
  return {
    app: null,
    config: {
      isNativeTag: _a,
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
let xn = 0;
function wn(e, t) {
  return function(o, s = null) {
    B(o) || (o = pt({}, o)), s != null && !U(s) && (s = null);
    const a = uc(), c = /* @__PURE__ */ new WeakSet(), i = [];
    let n = !1;
    const p = a.app = {
      _uid: xn++,
      _component: o,
      _props: s,
      _container: null,
      _context: a,
      _instance: null,
      version: el,
      get config() {
        return a.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return c.has(u) || (u && B(u.install) ? (c.add(u), u.install(p, ...d)) : B(u) && (c.add(u), u(p, ...d))), p;
      },
      mixin(u) {
        return a.mixins.includes(u) || a.mixins.push(u), p;
      },
      component(u, d) {
        return d ? (a.components[u] = d, p) : a.components[u];
      },
      directive(u, d) {
        return d ? (a.directives[u] = d, p) : a.directives[u];
      },
      mount(u, d, b) {
        if (!n) {
          const x = p._ceVNode || te(o, s);
          return x.appContext = a, b === !0 ? b = "svg" : b === !1 && (b = void 0), e(x, u, b), n = !0, p._container = u, u.__vue_app__ = p, vs(x.component);
        }
      },
      onUnmount(u) {
        i.push(u);
      },
      unmount() {
        n && (Ft(
          i,
          p._instance,
          16
        ), e(null, p._container), delete p._container.__vue_app__);
      },
      provide(u, d) {
        return a.provides[u] = d, p;
      },
      runWithContext(u) {
        const d = Re;
        Re = p;
        try {
          return u();
        } finally {
          Re = d;
        }
      }
    };
    return p;
  };
}
let Re = null;
const zn = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${$t(t)}Modifiers`] || e[`${Se(t)}Modifiers`];
function jn(e, t, ...r) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || X;
  let s = r;
  const a = t.startsWith("update:"), c = a && zn(o, t.slice(7));
  c && (c.trim && (s = r.map((u) => it(u) ? u.trim() : u)), c.number && (s = r.map(ci)));
  let i, n = o[i = go(t)] || // also try camelCase event handler (#2249)
  o[i = go($t(t))];
  !n && a && (n = o[i = go(Se(t))]), n && Ft(
    n,
    e,
    6,
    s
  );
  const p = o[i + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[i])
      return;
    e.emitted[i] = !0, Ft(
      p,
      e,
      6,
      s
    );
  }
}
const Hn = /* @__PURE__ */ new WeakMap();
function mc(e, t, r = !1) {
  const o = r ? Hn : t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const a = e.emits;
  let c = {}, i = !1;
  if (!B(e)) {
    const n = (p) => {
      const u = mc(p, t, !0);
      u && (i = !0, pt(c, u));
    };
    !r && t.mixins.length && t.mixins.forEach(n), e.extends && n(e.extends), e.mixins && e.mixins.forEach(n);
  }
  return !a && !i ? (U(e) && o.set(e, null), null) : (D(a) ? a.forEach((n) => c[n] = null) : pt(c, a), U(e) && o.set(e, c), c);
}
function co(e, t) {
  return !e || !Jr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), O(e, t[0].toLowerCase() + t.slice(1)) || O(e, Se(t)) || O(e, t));
}
function Rs(e) {
  const {
    type: t,
    vnode: r,
    proxy: o,
    withProxy: s,
    propsOptions: [a],
    slots: c,
    attrs: i,
    emit: n,
    render: p,
    renderCache: u,
    props: d,
    data: b,
    setupState: x,
    ctx: _,
    inheritAttrs: A
  } = e, rt = Kr(e);
  let N, q;
  try {
    if (r.shapeFlag & 4) {
      const E = s || o, Y = E;
      N = Mt(
        p.call(
          Y,
          E,
          u,
          d,
          x,
          b,
          _
        )
      ), q = i;
    } else {
      const E = t;
      N = Mt(
        E.length > 1 ? E(
          d,
          { attrs: i, slots: c, emit: n }
        ) : E(
          d,
          null
        )
      ), q = t.props ? i : _n(i);
    }
  } catch (E) {
    nr.length = 0, so(E, e, 1), N = te(de);
  }
  let R = N;
  if (q && A !== !1) {
    const E = Object.keys(q), { shapeFlag: Y } = R;
    E.length && Y & 7 && (a && E.some(Qr) && (q = $n(
      q,
      a
    )), R = Ne(R, q, !1, !0));
  }
  return r.dirs && (R = Ne(R, null, !1, !0), R.dirs = R.dirs ? R.dirs.concat(r.dirs) : r.dirs), r.transition && ps(R, r.transition), N = R, Kr(rt), N;
}
const _n = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || Jr(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, $n = (e, t) => {
  const r = {};
  for (const o in e)
    (!Qr(o) || !(o.slice(9) in t)) && (r[o] = e[o]);
  return r;
};
function Cn(e, t, r) {
  const { props: o, children: s, component: a } = e, { props: c, children: i, patchFlag: n } = t, p = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && n >= 0) {
    if (n & 1024)
      return !0;
    if (n & 16)
      return o ? Us(o, c, p) : !!c;
    if (n & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const b = u[d];
        if (pc(c, o, b) && !co(p, b))
          return !0;
      }
    }
  } else
    return (s || i) && (!i || !i.$stable) ? !0 : o === c ? !1 : o ? c ? Us(o, c, p) : !0 : !!c;
  return !1;
}
function Us(e, t, r) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const a = o[s];
    if (pc(t, e, a) && !co(r, a))
      return !0;
  }
  return !1;
}
function pc(e, t, r) {
  const o = e[r], s = t[r];
  return r === "style" && U(o) && U(s) ? !rs(o, s) : o !== s;
}
function An({ vnode: e, parent: t, suspense: r }, o) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.suspense.vnode.el = s.el = o, e = s), s === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = o);
}
const dc = {}, gc = () => Object.create(dc), bc = (e) => Object.getPrototypeOf(e) === dc;
function Sn(e, t, r, o = !1) {
  const s = {}, a = gc();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), hc(e, t, s, a);
  for (const c in e.propsOptions[0])
    c in s || (s[c] = void 0);
  r ? e.props = o ? s : /* @__PURE__ */ Bi(s) : e.type.props ? e.props = s : e.props = a, e.attrs = a;
}
function En(e, t, r, o) {
  const {
    props: s,
    attrs: a,
    vnode: { patchFlag: c }
  } = e, i = /* @__PURE__ */ L(s), [n] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (o || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let b = u[d];
        if (co(e.emitsOptions, b))
          continue;
        const x = t[b];
        if (n)
          if (O(a, b))
            x !== a[b] && (a[b] = x, p = !0);
          else {
            const _ = $t(b);
            s[_] = Ro(
              n,
              i,
              _,
              x,
              e,
              !1
            );
          }
        else
          x !== a[b] && (a[b] = x, p = !0);
      }
    }
  } else {
    hc(e, t, s, a) && (p = !0);
    let u;
    for (const d in i)
      (!t || // for camelCase
      !O(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Se(d)) === d || !O(t, u))) && (n ? r && // for camelCase
      (r[d] !== void 0 || // for kebab-case
      r[u] !== void 0) && (s[d] = Ro(
        n,
        i,
        d,
        void 0,
        e,
        !0
      )) : delete s[d]);
    if (a !== i)
      for (const d in a)
        (!t || !O(t, d)) && (delete a[d], p = !0);
  }
  p && Qt(e.attrs, "set", "");
}
function hc(e, t, r, o) {
  const [s, a] = e.propsOptions;
  let c = !1, i;
  if (t)
    for (let n in t) {
      if (rr(n))
        continue;
      const p = t[n];
      let u;
      s && O(s, u = $t(n)) ? !a || !a.includes(u) ? r[u] = p : (i || (i = {}))[u] = p : co(e.emitsOptions, n) || (!(n in o) || p !== o[n]) && (o[n] = p, c = !0);
    }
  if (a) {
    const n = /* @__PURE__ */ L(r), p = i || X;
    for (let u = 0; u < a.length; u++) {
      const d = a[u];
      r[d] = Ro(
        s,
        n,
        d,
        p[d],
        e,
        !O(p, d)
      );
    }
  }
  return c;
}
function Ro(e, t, r, o, s, a) {
  const c = e[r];
  if (c != null) {
    const i = O(c, "default");
    if (i && o === void 0) {
      const n = c.default;
      if (c.type !== Function && !c.skipFactory && B(n)) {
        const { propsDefaults: p } = s;
        if (r in p)
          o = p[r];
        else {
          const u = zr(s);
          o = p[r] = n.call(
            null,
            t
          ), u();
        }
      } else
        o = n;
      s.ce && s.ce._setProp(r, o);
    }
    c[
      0
      /* shouldCast */
    ] && (a && !i ? o = !1 : c[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === Se(r)) && (o = !0));
  }
  return o;
}
const Tn = /* @__PURE__ */ new WeakMap();
function fc(e, t, r = !1) {
  const o = r ? Tn : t.propsCache, s = o.get(e);
  if (s)
    return s;
  const a = e.props, c = {}, i = [];
  let n = !1;
  if (!B(e)) {
    const u = (d) => {
      n = !0;
      const [b, x] = fc(d, t, !0);
      pt(c, b), x && i.push(...x);
    };
    !r && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!a && !n)
    return U(e) && o.set(e, Me), Me;
  if (D(a))
    for (let u = 0; u < a.length; u++) {
      const d = $t(a[u]);
      Ns(d) && (c[d] = X);
    }
  else if (a)
    for (const u in a) {
      const d = $t(u);
      if (Ns(d)) {
        const b = a[u], x = c[d] = D(b) || B(b) ? { type: b } : pt({}, b), _ = x.type;
        let A = !1, rt = !0;
        if (D(_))
          for (let N = 0; N < _.length; ++N) {
            const q = _[N], R = B(q) && q.name;
            if (R === "Boolean") {
              A = !0;
              break;
            } else R === "String" && (rt = !1);
          }
        else
          A = B(_) && _.name === "Boolean";
        x[
          0
          /* shouldCast */
        ] = A, x[
          1
          /* shouldCastTrue */
        ] = rt, (A || O(x, "default")) && i.push(d);
      }
    }
  const p = [c, i];
  return U(e) && o.set(e, p), p;
}
function Ns(e) {
  return e[0] !== "$" && !rr(e);
}
const bs = (e) => e === "_" || e === "_ctx" || e === "$stable", hs = (e) => D(e) ? e.map(Mt) : [Mt(e)], Dn = (e, t, r) => {
  if (t._n)
    return t;
  const o = Wi((...s) => hs(t(...s)), r);
  return o._c = !1, o;
}, vc = (e, t, r) => {
  const o = e._ctx;
  for (const s in e) {
    if (bs(s)) continue;
    const a = e[s];
    if (B(a))
      t[s] = Dn(s, a, o);
    else if (a != null) {
      const c = hs(a);
      t[s] = () => c;
    }
  }
}, yc = (e, t) => {
  const r = hs(t);
  e.slots.default = () => r;
}, kc = (e, t, r) => {
  for (const o in t)
    (r || !bs(o)) && (e[o] = t[o]);
}, Bn = (e, t, r) => {
  const o = e.slots = gc();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (kc(o, t, r), r && Ta(o, "_", s, !0)) : vc(t, o);
  } else t && yc(e, t);
}, In = (e, t, r) => {
  const { vnode: o, slots: s } = e;
  let a = !0, c = X;
  if (o.shapeFlag & 32) {
    const i = t._;
    i ? r && i === 1 ? a = !1 : kc(s, t, r) : (a = !t.$stable, vc(t, s)), c = t;
  } else t && (yc(e, t), c = { default: 1 });
  if (a)
    for (const i in s)
      !bs(i) && c[i] == null && delete s[i];
}, xt = On;
function qn(e) {
  return Pn(e);
}
function Pn(e, t) {
  const r = eo();
  r.__VUE__ = !0;
  const {
    insert: o,
    remove: s,
    patchProp: a,
    createElement: c,
    createText: i,
    createComment: n,
    setText: p,
    setElementText: u,
    parentNode: d,
    nextSibling: b,
    setScopeId: x = Ut,
    insertStaticContent: _
  } = e, A = (l, m, g, y = null, h = null, f = null, j = void 0, w = null, k = !!m.dynamicChildren) => {
    if (l === m)
      return;
    l && !Ze(l, m) && (y = Er(l), St(l, h, f, !0), l = null), m.patchFlag === -2 && (k = !1, m.dynamicChildren = null);
    const { type: v, ref: S, shapeFlag: H } = m;
    switch (v) {
      case io:
        rt(l, m, g, y);
        break;
      case de:
        N(l, m, g, y);
        break;
      case wo:
        l == null && q(m, g, y, j);
        break;
      case Pt:
        Cr(
          l,
          m,
          g,
          y,
          h,
          f,
          j,
          w,
          k
        );
        break;
      default:
        H & 1 ? Y(
          l,
          m,
          g,
          y,
          h,
          f,
          j,
          w,
          k
        ) : H & 6 ? Ar(
          l,
          m,
          g,
          y,
          h,
          f,
          j,
          w,
          k
        ) : (H & 64 || H & 128) && v.process(
          l,
          m,
          g,
          y,
          h,
          f,
          j,
          w,
          k,
          We
        );
    }
    S != null && h ? ar(S, l && l.ref, f, m || l, !m) : S == null && l && l.ref != null && ar(l.ref, null, f, l, !0);
  }, rt = (l, m, g, y) => {
    if (l == null)
      o(
        m.el = i(m.children),
        g,
        y
      );
    else {
      const h = m.el = l.el;
      m.children !== l.children && p(h, m.children);
    }
  }, N = (l, m, g, y) => {
    l == null ? o(
      m.el = n(m.children || ""),
      g,
      y
    ) : m.el = l.el;
  }, q = (l, m, g, y) => {
    [l.el, l.anchor] = _(
      l.children,
      m,
      g,
      y,
      l.el,
      l.anchor
    );
  }, R = ({ el: l, anchor: m }, g, y) => {
    let h;
    for (; l && l !== m; )
      h = b(l), o(l, g, y), l = h;
    o(m, g, y);
  }, E = ({ el: l, anchor: m }) => {
    let g;
    for (; l && l !== m; )
      g = b(l), s(l), l = g;
    s(m);
  }, Y = (l, m, g, y, h, f, j, w, k) => {
    if (m.type === "svg" ? j = "svg" : m.type === "math" && (j = "mathml"), l == null)
      kt(
        m,
        g,
        y,
        h,
        f,
        j,
        w,
        k
      );
    else {
      const v = l.el && l.el._isVueCE ? l.el : null;
      try {
        v && v._beginPatch(), M(
          l,
          m,
          h,
          f,
          j,
          w,
          k
        );
      } finally {
        v && v._endPatch();
      }
    }
  }, kt = (l, m, g, y, h, f, j, w) => {
    let k, v;
    const { props: S, shapeFlag: H, transition: $, dirs: T } = l;
    if (k = l.el = c(
      l.type,
      f,
      S && S.is,
      S
    ), H & 8 ? u(k, l.children) : H & 16 && I(
      l.children,
      k,
      null,
      y,
      h,
      xo(l, f),
      j,
      w
    ), T && ve(l, null, y, "created"), Ht(k, l, l.scopeId, j, y), S) {
      for (const F in S)
        F !== "value" && !rr(F) && a(k, F, null, S[F], f, y);
      "value" in S && a(k, "value", null, S.value, f), (v = S.onVnodeBeforeMount) && Bt(v, y, l);
    }
    T && ve(l, null, y, "beforeMount");
    const P = Mn(h, $);
    P && $.beforeEnter(k), o(k, m, g), ((v = S && S.onVnodeMounted) || P || T) && xt(() => {
      try {
        v && Bt(v, y, l), P && $.enter(k), T && ve(l, null, y, "mounted");
      } finally {
      }
    }, h);
  }, Ht = (l, m, g, y, h) => {
    if (g && x(l, g), y)
      for (let f = 0; f < y.length; f++)
        x(l, y[f]);
    if (h) {
      let f = h.subTree;
      if (m === f || jc(f.type) && (f.ssContent === m || f.ssFallback === m)) {
        const j = h.vnode;
        Ht(
          l,
          j,
          j.scopeId,
          j.slotScopeIds,
          h.parent
        );
      }
    }
  }, I = (l, m, g, y, h, f, j, w, k = 0) => {
    for (let v = k; v < l.length; v++) {
      const S = l[v] = w ? Jt(l[v]) : Mt(l[v]);
      A(
        null,
        S,
        m,
        g,
        y,
        h,
        f,
        j,
        w
      );
    }
  }, M = (l, m, g, y, h, f, j) => {
    const w = m.el = l.el;
    let { patchFlag: k, dynamicChildren: v, dirs: S } = m;
    k |= l.patchFlag & 16;
    const H = l.props || X, $ = m.props || X;
    let T;
    if (g && ye(g, !1), (T = $.onVnodeBeforeUpdate) && Bt(T, g, m, l), S && ve(m, l, g, "beforeUpdate"), g && ye(g, !0), (H.innerHTML && $.innerHTML == null || H.textContent && $.textContent == null) && u(w, ""), v ? at(
      l.dynamicChildren,
      v,
      w,
      g,
      y,
      xo(m, h),
      f
    ) : j || V(
      l,
      m,
      w,
      null,
      g,
      y,
      xo(m, h),
      f,
      !1
    ), k > 0) {
      if (k & 16)
        be(w, H, $, g, h);
      else if (k & 2 && H.class !== $.class && a(w, "class", null, $.class, h), k & 4 && a(w, "style", H.style, $.style, h), k & 8) {
        const P = m.dynamicProps;
        for (let F = 0; F < P.length; F++) {
          const K = P[F], ct = H[K], mt = $[K];
          (mt !== ct || K === "value") && a(w, K, ct, mt, h, g);
        }
      }
      k & 1 && l.children !== m.children && u(w, m.children);
    } else !j && v == null && be(w, H, $, g, h);
    ((T = $.onVnodeUpdated) || S) && xt(() => {
      T && Bt(T, g, m, l), S && ve(m, l, g, "updated");
    }, y);
  }, at = (l, m, g, y, h, f, j) => {
    for (let w = 0; w < m.length; w++) {
      const k = l[w], v = m[w], S = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        k.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (k.type === Pt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ze(k, v) || // - In the case of a component, it could contain anything.
        k.shapeFlag & 198) ? d(k.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      A(
        k,
        v,
        S,
        null,
        y,
        h,
        f,
        j,
        !0
      );
    }
  }, be = (l, m, g, y, h) => {
    if (m !== g) {
      if (m !== X)
        for (const f in m)
          !rr(f) && !(f in g) && a(
            l,
            f,
            m[f],
            null,
            h,
            y
          );
      for (const f in g) {
        if (rr(f)) continue;
        const j = g[f], w = m[f];
        j !== w && f !== "value" && a(l, f, w, j, h, y);
      }
      "value" in g && a(l, "value", m.value, g.value, h);
    }
  }, Cr = (l, m, g, y, h, f, j, w, k) => {
    const v = m.el = l ? l.el : i(""), S = m.anchor = l ? l.anchor : i("");
    let { patchFlag: H, dynamicChildren: $, slotScopeIds: T } = m;
    T && (w = w ? w.concat(T) : T), l == null ? (o(v, g, y), o(S, g, y), I(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      g,
      S,
      h,
      f,
      j,
      w,
      k
    )) : H > 0 && H & 64 && $ && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren && l.dynamicChildren.length === $.length ? (at(
      l.dynamicChildren,
      $,
      g,
      h,
      f,
      j,
      w
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || h && m === h.subTree) && xc(
      l,
      m,
      !0
      /* shallow */
    )) : V(
      l,
      m,
      g,
      S,
      h,
      f,
      j,
      w,
      k
    );
  }, Ar = (l, m, g, y, h, f, j, w, k) => {
    m.slotScopeIds = w, l == null ? m.shapeFlag & 512 ? h.ctx.activate(
      m,
      g,
      y,
      j,
      k
    ) : mo(
      m,
      g,
      y,
      h,
      f,
      j,
      k
    ) : js(l, m, k);
  }, mo = (l, m, g, y, h, f, j) => {
    const w = l.component = Gn(
      l,
      y,
      h
    );
    if (ac(l) && (w.ctx.renderer = We), Zn(w, !1, j), w.asyncDep) {
      if (h && h.registerDep(w, bt, j), !l.el) {
        const k = w.subTree = te(de);
        N(null, k, m, g), l.placeholder = k.el;
      }
    } else
      bt(
        w,
        l,
        m,
        g,
        h,
        f,
        j
      );
  }, js = (l, m, g) => {
    const y = m.component = l.component;
    if (Cn(l, m, g))
      if (y.asyncDep && !y.asyncResolved) {
        Q(y, m, g);
        return;
      } else
        y.next = m, y.update();
    else
      m.el = l.el, y.vnode = m;
  }, bt = (l, m, g, y, h, f, j) => {
    const w = () => {
      if (l.isMounted) {
        let { next: H, bu: $, u: T, parent: P, vnode: F } = l;
        {
          const Tt = wc(l);
          if (Tt) {
            H && (H.el = F.el, Q(l, H, j)), Tt.asyncDep.then(() => {
              xt(() => {
                l.isUnmounted || v();
              }, h);
            });
            return;
          }
        }
        let K = H, ct;
        ye(l, !1), H ? (H.el = F.el, Q(l, H, j)) : H = F, $ && bo($), (ct = H.props && H.props.onVnodeBeforeUpdate) && Bt(ct, P, H, F), ye(l, !0);
        const mt = Rs(l), Et = l.subTree;
        l.subTree = mt, A(
          Et,
          mt,
          // parent may have changed if it's in a teleport
          d(Et.el),
          // anchor may have changed if it's in a fragment
          Er(Et),
          l,
          h,
          f
        ), H.el = mt.el, K === null && An(l, mt.el), T && xt(T, h), (ct = H.props && H.props.onVnodeUpdated) && xt(
          () => Bt(ct, P, H, F),
          h
        );
      } else {
        let H;
        const { el: $, props: T } = m, { bm: P, m: F, parent: K, root: ct, type: mt } = l, Et = cr(m);
        ye(l, !1), P && bo(P), !Et && (H = T && T.onVnodeBeforeMount) && Bt(H, K, m), ye(l, !0);
        {
          ct.ce && ct.ce._hasShadowRoot() && ct.ce._injectChildStyle(
            mt,
            l.parent ? l.parent.type : void 0
          );
          const Tt = l.subTree = Rs(l);
          A(
            null,
            Tt,
            g,
            y,
            l,
            h,
            f
          ), m.el = Tt.el;
        }
        if (F && xt(F, h), !Et && (H = T && T.onVnodeMounted)) {
          const Tt = m;
          xt(
            () => Bt(H, K, Tt),
            h
          );
        }
        (m.shapeFlag & 256 || K && cr(K.vnode) && K.vnode.shapeFlag & 256) && l.a && xt(l.a, h), l.isMounted = !0, m = g = y = null;
      }
    };
    l.scope.on();
    const k = l.effect = new qa(w);
    l.scope.off();
    const v = l.update = k.run.bind(k), S = l.job = k.runIfDirty.bind(k);
    S.i = l, S.id = l.uid, k.scheduler = () => ms(S), ye(l, !0), v();
  }, Q = (l, m, g) => {
    m.component = l;
    const y = l.vnode.props;
    l.vnode = m, l.next = null, En(l, m.props, y, g), In(l, m.children, g), ee(), Bs(l), re();
  }, V = (l, m, g, y, h, f, j, w, k = !1) => {
    const v = l && l.children, S = l ? l.shapeFlag : 0, H = m.children, { patchFlag: $, shapeFlag: T } = m;
    if ($ > 0) {
      if ($ & 128) {
        Sr(
          v,
          H,
          g,
          y,
          h,
          f,
          j,
          w,
          k
        );
        return;
      } else if ($ & 256) {
        he(
          v,
          H,
          g,
          y,
          h,
          f,
          j,
          w,
          k
        );
        return;
      }
    }
    T & 8 ? (S & 16 && Ke(v, h, f), H !== v && u(g, H)) : S & 16 ? T & 16 ? Sr(
      v,
      H,
      g,
      y,
      h,
      f,
      j,
      w,
      k
    ) : Ke(v, h, f, !0) : (S & 8 && u(g, ""), T & 16 && I(
      H,
      g,
      y,
      h,
      f,
      j,
      w,
      k
    ));
  }, he = (l, m, g, y, h, f, j, w, k) => {
    l = l || Me, m = m || Me;
    const v = l.length, S = m.length, H = Math.min(v, S);
    let $;
    for ($ = 0; $ < H; $++) {
      const T = m[$] = k ? Jt(m[$]) : Mt(m[$]);
      A(
        l[$],
        T,
        g,
        null,
        h,
        f,
        j,
        w,
        k
      );
    }
    v > S ? Ke(
      l,
      h,
      f,
      !0,
      !1,
      H
    ) : I(
      m,
      g,
      y,
      h,
      f,
      j,
      w,
      k,
      H
    );
  }, Sr = (l, m, g, y, h, f, j, w, k) => {
    let v = 0;
    const S = m.length;
    let H = l.length - 1, $ = S - 1;
    for (; v <= H && v <= $; ) {
      const T = l[v], P = m[v] = k ? Jt(m[v]) : Mt(m[v]);
      if (Ze(T, P))
        A(
          T,
          P,
          g,
          null,
          h,
          f,
          j,
          w,
          k
        );
      else
        break;
      v++;
    }
    for (; v <= H && v <= $; ) {
      const T = l[H], P = m[$] = k ? Jt(m[$]) : Mt(m[$]);
      if (Ze(T, P))
        A(
          T,
          P,
          g,
          null,
          h,
          f,
          j,
          w,
          k
        );
      else
        break;
      H--, $--;
    }
    if (v > H) {
      if (v <= $) {
        const T = $ + 1, P = T < S ? m[T].el : y;
        for (; v <= $; )
          A(
            null,
            m[v] = k ? Jt(m[v]) : Mt(m[v]),
            g,
            P,
            h,
            f,
            j,
            w,
            k
          ), v++;
      }
    } else if (v > $)
      for (; v <= H; )
        St(l[v], h, f, !0), v++;
    else {
      const T = v, P = v, F = /* @__PURE__ */ new Map();
      for (v = P; v <= $; v++) {
        const zt = m[v] = k ? Jt(m[v]) : Mt(m[v]);
        zt.key != null && F.set(zt.key, v);
      }
      let K, ct = 0;
      const mt = $ - P + 1;
      let Et = !1, Tt = 0;
      const Ge = new Array(mt);
      for (v = 0; v < mt; v++) Ge[v] = 0;
      for (v = T; v <= H; v++) {
        const zt = l[v];
        if (ct >= mt) {
          St(zt, h, f, !0);
          continue;
        }
        let Dt;
        if (zt.key != null)
          Dt = F.get(zt.key);
        else
          for (K = P; K <= $; K++)
            if (Ge[K - P] === 0 && Ze(zt, m[K])) {
              Dt = K;
              break;
            }
        Dt === void 0 ? St(zt, h, f, !0) : (Ge[Dt - P] = v + 1, Dt >= Tt ? Tt = Dt : Et = !0, A(
          zt,
          m[Dt],
          g,
          null,
          h,
          f,
          j,
          w,
          k
        ), ct++);
      }
      const $s = Et ? Ln(Ge) : Me;
      for (K = $s.length - 1, v = mt - 1; v >= 0; v--) {
        const zt = P + v, Dt = m[zt], Cs = m[zt + 1], As = zt + 1 < S ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Cs.el || zc(Cs)
        ) : y;
        Ge[v] === 0 ? A(
          null,
          Dt,
          g,
          As,
          h,
          f,
          j,
          w,
          k
        ) : Et && (K < 0 || v !== $s[K] ? fe(Dt, g, As, 2) : K--);
      }
    }
  }, fe = (l, m, g, y, h = null) => {
    const { el: f, type: j, transition: w, children: k, shapeFlag: v } = l;
    if (v & 6) {
      fe(l.component.subTree, m, g, y);
      return;
    }
    if (v & 128) {
      l.suspense.move(m, g, y);
      return;
    }
    if (v & 64) {
      j.move(l, m, g, We);
      return;
    }
    if (j === Pt) {
      o(f, m, g);
      for (let H = 0; H < k.length; H++)
        fe(k[H], m, g, y);
      o(l.anchor, m, g);
      return;
    }
    if (j === wo) {
      R(l, m, g);
      return;
    }
    if (y !== 2 && v & 1 && w)
      if (y === 0)
        w.beforeEnter(f), o(f, m, g), xt(() => w.enter(f), h);
      else {
        const { leave: H, delayLeave: $, afterLeave: T } = w, P = () => {
          l.ctx.isUnmounted ? s(f) : o(f, m, g);
        }, F = () => {
          f._isLeaving && f[tn](
            !0
            /* cancelled */
          ), H(f, () => {
            P(), T && T();
          });
        };
        $ ? $(f, P, F) : F();
      }
    else
      o(f, m, g);
  }, St = (l, m, g, y = !1, h = !1) => {
    const {
      type: f,
      props: j,
      ref: w,
      children: k,
      dynamicChildren: v,
      shapeFlag: S,
      patchFlag: H,
      dirs: $,
      cacheIndex: T,
      memo: P
    } = l;
    if (H === -2 && (h = !1), w != null && (ee(), ar(w, null, g, l, !0), re()), T != null && (m.renderCache[T] = void 0), S & 256) {
      m.ctx.deactivate(l);
      return;
    }
    const F = S & 1 && $, K = !cr(l);
    let ct;
    if (K && (ct = j && j.onVnodeBeforeUnmount) && Bt(ct, m, l), S & 6)
      ti(l.component, g, y);
    else {
      if (S & 128) {
        l.suspense.unmount(g, y);
        return;
      }
      F && ve(l, null, m, "beforeUnmount"), S & 64 ? l.type.remove(
        l,
        m,
        g,
        We,
        y
      ) : v && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !v.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (f !== Pt || H > 0 && H & 64) ? Ke(
        v,
        m,
        g,
        !1,
        !0
      ) : (f === Pt && H & 384 || !h && S & 16) && Ke(k, m, g), y && Hs(l);
    }
    const mt = P != null && T == null;
    (K && (ct = j && j.onVnodeUnmounted) || F || mt) && xt(() => {
      ct && Bt(ct, m, l), F && ve(l, null, m, "unmounted"), mt && (l.el = null);
    }, g);
  }, Hs = (l) => {
    const { type: m, el: g, anchor: y, transition: h } = l;
    if (m === Pt) {
      Qc(g, y);
      return;
    }
    if (m === wo) {
      E(l);
      return;
    }
    const f = () => {
      s(g), h && !h.persisted && h.afterLeave && h.afterLeave();
    };
    if (l.shapeFlag & 1 && h && !h.persisted) {
      const { leave: j, delayLeave: w } = h, k = () => j(g, f);
      w ? w(l.el, f, k) : k();
    } else
      f();
  }, Qc = (l, m) => {
    let g;
    for (; l !== m; )
      g = b(l), s(l), l = g;
    s(m);
  }, ti = (l, m, g) => {
    const { bum: y, scope: h, job: f, subTree: j, um: w, m: k, a: v } = l;
    Fs(k), Fs(v), y && bo(y), h.stop(), f && (f.flags |= 8, St(j, l, m, g)), w && xt(w, m), xt(() => {
      l.isUnmounted = !0;
    }, m);
  }, Ke = (l, m, g, y = !1, h = !1, f = 0) => {
    for (let j = f; j < l.length; j++)
      St(l[j], m, g, y, h);
  }, Er = (l) => {
    if (l.shapeFlag & 6)
      return Er(l.component.subTree);
    if (l.shapeFlag & 128)
      return l.suspense.next();
    const m = b(l.anchor || l.el), g = m && m[Ji];
    return g ? b(g) : m;
  };
  let po = !1;
  const _s = (l, m, g) => {
    let y;
    l == null ? m._vnode && (St(m._vnode, null, null, !0), y = m._vnode.component) : A(
      m._vnode || null,
      l,
      m,
      null,
      null,
      null,
      g
    ), m._vnode = l, po || (po = !0, Bs(y), Qa(), po = !1);
  }, We = {
    p: A,
    um: St,
    m: fe,
    r: Hs,
    mt: mo,
    mc: I,
    pc: V,
    pbc: at,
    n: Er,
    o: e
  };
  return {
    render: _s,
    hydrate: void 0,
    createApp: wn(_s)
  };
}
function xo({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function ye({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Mn(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function xc(e, t, r = !1) {
  const o = e.children, s = t.children;
  if (D(o) && D(s))
    for (let a = 0; a < o.length; a++) {
      const c = o[a];
      let i = s[a];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = s[a] = Jt(s[a]), i.el = c.el), !r && i.patchFlag !== -2 && xc(c, i)), i.type === io && (i.patchFlag === -1 && (i = s[a] = Jt(i)), i.el = c.el), i.type === de && !i.el && (i.el = c.el);
    }
}
function Ln(e) {
  const t = e.slice(), r = [0];
  let o, s, a, c, i;
  const n = e.length;
  for (o = 0; o < n; o++) {
    const p = e[o];
    if (p !== 0) {
      if (s = r[r.length - 1], e[s] < p) {
        t[o] = s, r.push(o);
        continue;
      }
      for (a = 0, c = r.length - 1; a < c; )
        i = a + c >> 1, e[r[i]] < p ? a = i + 1 : c = i;
      p < e[r[a]] && (a > 0 && (t[o] = r[a - 1]), r[a] = o);
    }
  }
  for (a = r.length, c = r[a - 1]; a-- > 0; )
    r[a] = c, c = t[c];
  return r;
}
function wc(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : wc(t);
}
function Fs(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function zc(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? zc(t.subTree) : null;
}
const jc = (e) => e.__isSuspense;
function On(e, t) {
  t && t.pendingBranch ? D(e) ? t.effects.push(...e) : t.effects.push(e) : Ki(e);
}
const Pt = /* @__PURE__ */ Symbol.for("v-fgt"), io = /* @__PURE__ */ Symbol.for("v-txt"), de = /* @__PURE__ */ Symbol.for("v-cmt"), wo = /* @__PURE__ */ Symbol.for("v-stc"), nr = [];
let jt = null;
function Xt(e = !1) {
  nr.push(jt = e ? null : []);
}
function Rn() {
  nr.pop(), jt = nr[nr.length - 1] || null;
}
let fr = 1;
function Vs(e, t = !1) {
  fr += e, e < 0 && jt && t && (jt.hasOnce = !0);
}
function Hc(e) {
  return e.dynamicChildren = fr > 0 ? jt || Me : null, Rn(), fr > 0 && jt && jt.push(e), e;
}
function ae(e, t, r, o, s, a) {
  return Hc(
    ot(
      e,
      t,
      r,
      o,
      s,
      a,
      !0
    )
  );
}
function Un(e, t, r, o, s) {
  return Hc(
    te(
      e,
      t,
      r,
      o,
      s,
      !0
    )
  );
}
function _c(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ze(e, t) {
  return e.type === t.type && e.key === t.key;
}
const $c = ({ key: e }) => e ?? null, Lr = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? it(e) || /* @__PURE__ */ gt(e) || B(e) ? { i: Ot, r: e, k: t, f: !!r } : e : null);
function ot(e, t = null, r = null, o = 0, s = null, a = e === Pt ? 0 : 1, c = !1, i = !1) {
  const n = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && $c(t),
    ref: t && Lr(t),
    scopeId: ec,
    slotScopeIds: null,
    children: r,
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
    shapeFlag: a,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Ot
  };
  return i ? (fs(n, r), a & 128 && e.normalize(n)) : r && (n.shapeFlag |= it(r) ? 8 : 16), fr > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  jt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (n.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  n.patchFlag !== 32 && jt.push(n), n;
}
const te = Nn;
function Nn(e, t = null, r = null, o = 0, s = null, a = !1) {
  if ((!e || e === dn) && (e = de), _c(e)) {
    const i = Ne(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && fs(i, r), fr > 0 && !a && jt && (i.shapeFlag & 6 ? jt[jt.indexOf(e)] = i : jt.push(i)), i.patchFlag = -2, i;
  }
  if (tl(e) && (e = e.__vccOpts), t) {
    t = Fn(t);
    let { class: i, style: n } = t;
    i && !it(i) && (t.class = ro(i)), U(n) && (/* @__PURE__ */ us(n) && !D(n) && (n = pt({}, n)), t.style = es(n));
  }
  const c = it(e) ? 1 : jc(e) ? 128 : Qi(e) ? 64 : U(e) ? 4 : B(e) ? 2 : 0;
  return ot(
    e,
    t,
    r,
    o,
    s,
    c,
    a,
    !0
  );
}
function Fn(e) {
  return e ? /* @__PURE__ */ us(e) || bc(e) ? pt({}, e) : e : null;
}
function Ne(e, t, r = !1, o = !1) {
  const { props: s, ref: a, patchFlag: c, children: i, transition: n } = e, p = t ? Vn(s || {}, t) : s, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && $c(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && a ? D(a) ? a.concat(Lr(t)) : [a, Lr(t)] : Lr(t)
    ) : a,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Pt ? c === -1 ? 16 : c | 16 : c,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: n,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ne(e.ssContent),
    ssFallback: e.ssFallback && Ne(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return n && o && ps(
    u,
    n.clone(u)
  ), u;
}
function Cc(e = " ", t = 0) {
  return te(io, null, e, t);
}
function Ks(e = "", t = !1) {
  return t ? (Xt(), Un(de, null, e)) : te(de, null, e);
}
function Mt(e) {
  return e == null || typeof e == "boolean" ? te(de) : D(e) ? te(
    Pt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : _c(e) ? Jt(e) : te(io, null, String(e));
}
function Jt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ne(e);
}
function fs(e, t) {
  let r = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (D(t))
    r = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), fs(e, s()), s._c && (s._d = !0));
      return;
    } else {
      r = 32;
      const s = t._;
      !s && !bc(t) ? t._ctx = Ot : s === 3 && Ot && (Ot.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else B(t) ? (t = { default: t, _ctx: Ot }, r = 32) : (t = String(t), o & 64 ? (r = 16, t = [Cc(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function Vn(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = ro([t.class, o.class]));
      else if (s === "style")
        t.style = es([t.style, o.style]);
      else if (Jr(s)) {
        const a = t[s], c = o[s];
        c && a !== c && !(D(a) && a.includes(c)) ? t[s] = a ? [].concat(a, c) : c : c == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Qr(s) && (t[s] = c);
      } else s !== "" && (t[s] = o[s]);
  }
  return t;
}
function Bt(e, t, r, o = null) {
  Ft(e, t, 7, [
    r,
    o
  ]);
}
const Kn = uc();
let Wn = 0;
function Gn(e, t, r) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || Kn, a = {
    uid: Wn++,
    vnode: e,
    type: o,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new gi(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: fc(o, s),
    emitsOptions: mc(o, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: X,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: X,
    data: X,
    props: X,
    attrs: X,
    slots: X,
    refs: X,
    setupState: X,
    setupContext: null,
    // suspense related
    suspense: r,
    suspenseId: r ? r.pendingId : 0,
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = jn.bind(null, a), e.ce && e.ce(a), a;
}
let yt = null;
const Xn = () => yt || Ot;
let Xr, Uo;
{
  const e = eo(), t = (r, o) => {
    let s;
    return (s = e[r]) || (s = e[r] = []), s.push(o), (a) => {
      s.length > 1 ? s.forEach((c) => c(a)) : s[0](a);
    };
  };
  Xr = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => yt = r
  ), Uo = t(
    "__VUE_SSR_SETTERS__",
    (r) => vr = r
  );
}
const zr = (e) => {
  const t = yt;
  return Xr(e), e.scope.on(), () => {
    e.scope.off(), Xr(t);
  };
}, Ws = () => {
  yt && yt.scope.off(), Xr(null);
};
function Ac(e) {
  return e.vnode.shapeFlag & 4;
}
let vr = !1;
function Zn(e, t = !1, r = !1) {
  t && Uo(t);
  const { props: o, children: s } = e.vnode, a = Ac(e);
  Sn(e, o, a, t), Bn(e, s, r || t);
  const c = a ? Yn(e, t) : void 0;
  return t && Uo(!1), c;
}
function Yn(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, bn);
  const { setup: o } = r;
  if (o) {
    ee();
    const s = e.setupContext = o.length > 1 ? Qn(e) : null, a = zr(e), c = wr(
      o,
      e,
      0,
      [
        e.props,
        s
      ]
    ), i = Ca(c);
    if (re(), a(), (i || e.sp) && !cr(e) && sc(e), i) {
      if (c.then(Ws, Ws), t)
        return c.then((n) => {
          Gs(e, n);
        }).catch((n) => {
          so(n, e, 0);
        });
      e.asyncDep = c;
    } else
      Gs(e, c);
  } else
    Sc(e);
}
function Gs(e, t, r) {
  B(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : U(t) && (e.setupState = Za(t)), Sc(e);
}
function Sc(e, t, r) {
  const o = e.type;
  e.render || (e.render = o.render || Ut);
  {
    const s = zr(e);
    ee();
    try {
      hn(e);
    } finally {
      re(), s();
    }
  }
}
const Jn = {
  get(e, t) {
    return dt(e, "get", ""), e[t];
  }
};
function Qn(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, Jn),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function vs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Za(Ii(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in ir)
        return ir[r](e);
    },
    has(t, r) {
      return r in t || r in ir;
    }
  })) : e.proxy;
}
function tl(e) {
  return B(e) && "__vccOpts" in e;
}
const Or = (e, t) => /* @__PURE__ */ Oi(e, t, vr), el = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let No;
const Xs = typeof window < "u" && window.trustedTypes;
if (Xs)
  try {
    No = /* @__PURE__ */ Xs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ec = No ? (e) => No.createHTML(e) : (e) => e, rl = "http://www.w3.org/2000/svg", ol = "http://www.w3.org/1998/Math/MathML", Yt = typeof document < "u" ? document : null, Zs = Yt && /* @__PURE__ */ Yt.createElement("template"), sl = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, o) => {
    const s = t === "svg" ? Yt.createElementNS(rl, e) : t === "mathml" ? Yt.createElementNS(ol, e) : r ? Yt.createElement(e, { is: r }) : Yt.createElement(e);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => Yt.createTextNode(e),
  createComment: (e) => Yt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Yt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, o, s, a) {
    const c = r ? r.previousSibling : t.lastChild;
    if (s && (s === a || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), r), !(s === a || !(s = s.nextSibling)); )
        ;
    else {
      Zs.innerHTML = Ec(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const i = Zs.content;
      if (o === "svg" || o === "mathml") {
        const n = i.firstChild;
        for (; n.firstChild; )
          i.appendChild(n.firstChild);
        i.removeChild(n);
      }
      t.insertBefore(i, r);
    }
    return [
      // first
      c ? c.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, al = /* @__PURE__ */ Symbol("_vtc");
function cl(e, t, r) {
  const o = e[al];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Ys = /* @__PURE__ */ Symbol("_vod"), il = /* @__PURE__ */ Symbol("_vsh"), nl = /* @__PURE__ */ Symbol(""), ll = /(?:^|;)\s*display\s*:/;
function ul(e, t, r) {
  const o = e.style, s = it(r);
  let a = !1;
  if (r && !s) {
    if (t)
      if (it(t))
        for (const c of t.split(";")) {
          const i = c.slice(0, c.indexOf(":")).trim();
          r[i] == null && Rr(o, i, "");
        }
      else
        for (const c in t)
          r[c] == null && Rr(o, c, "");
    for (const c in r)
      c === "display" && (a = !0), Rr(o, c, r[c]);
  } else if (s) {
    if (t !== r) {
      const c = o[nl];
      c && (r += ";" + c), o.cssText = r, a = ll.test(r);
    }
  } else t && e.removeAttribute("style");
  Ys in e && (e[Ys] = a ? o.display : "", e[il] && (o.display = "none"));
}
const Js = /\s*!important$/;
function Rr(e, t, r) {
  if (D(r))
    r.forEach((o) => Rr(e, t, o));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const o = ml(e, t);
    Js.test(r) ? e.setProperty(
      Se(o),
      r.replace(Js, ""),
      "important"
    ) : e[o] = r;
  }
}
const Qs = ["Webkit", "Moz", "ms"], zo = {};
function ml(e, t) {
  const r = zo[t];
  if (r)
    return r;
  let o = $t(t);
  if (o !== "filter" && o in e)
    return zo[t] = o;
  o = Ea(o);
  for (let s = 0; s < Qs.length; s++) {
    const a = Qs[s] + o;
    if (a in e)
      return zo[t] = a;
  }
  return t;
}
const ta = "http://www.w3.org/1999/xlink";
function ea(e, t, r, o, s, a = pi(t)) {
  o && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(ta, t.slice(6, t.length)) : e.setAttributeNS(ta, t, r) : r == null || a && !Da(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : Nt(r) ? String(r) : r
  );
}
function ra(e, t, r, o, s) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? Ec(r) : r);
    return;
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    const i = a === "OPTION" ? e.getAttribute("value") || "" : e.value, n = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (i !== n || !("_value" in e)) && (e.value = n), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let c = !1;
  if (r === "" || r == null) {
    const i = typeof e[t];
    i === "boolean" ? r = Da(r) : r == null && i === "string" ? (r = "", c = !0) : i === "number" && (r = 0, c = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  c && e.removeAttribute(s || t);
}
function pl(e, t, r, o) {
  e.addEventListener(t, r, o);
}
function dl(e, t, r, o) {
  e.removeEventListener(t, r, o);
}
const oa = /* @__PURE__ */ Symbol("_vei");
function gl(e, t, r, o, s = null) {
  const a = e[oa] || (e[oa] = {}), c = a[t];
  if (o && c)
    c.value = o;
  else {
    const [i, n] = bl(t);
    if (o) {
      const p = a[t] = vl(
        o,
        s
      );
      pl(e, i, p, n);
    } else c && (dl(e, i, c, n), a[t] = void 0);
  }
}
const sa = /(?:Once|Passive|Capture)$/;
function bl(e) {
  let t;
  if (sa.test(e)) {
    t = {};
    let o;
    for (; o = e.match(sa); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Se(e.slice(2)), t];
}
let jo = 0;
const hl = /* @__PURE__ */ Promise.resolve(), fl = () => jo || (hl.then(() => jo = 0), jo = Date.now());
function vl(e, t) {
  const r = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= r.attached)
      return;
    Ft(
      yl(o, r.value),
      t,
      5,
      [o]
    );
  };
  return r.value = e, r.attached = fl(), r;
}
function yl(e, t) {
  if (D(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map(
      (o) => (s) => !s._stopped && o && o(s)
    );
  } else
    return t;
}
const aa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, kl = (e, t, r, o, s, a) => {
  const c = s === "svg";
  t === "class" ? cl(e, o, c) : t === "style" ? ul(e, r, o) : Jr(t) ? Qr(t) || gl(e, t, r, o, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : xl(e, t, o, c)) ? (ra(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ea(e, t, o, c, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (wl(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !it(o))) ? ra(e, $t(t), o, a, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), ea(e, t, o, c));
};
function xl(e, t, r, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && aa(t) && B(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return aa(t) && it(r) ? !1 : t in e;
}
function wl(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const o = $t(t);
  return Array.isArray(r) ? r.some((s) => $t(s) === o) : Object.keys(r).some((s) => $t(s) === o);
}
const zl = /* @__PURE__ */ pt({ patchProp: kl }, sl);
let ca;
function jl() {
  return ca || (ca = qn(zl));
}
const Hl = ((...e) => {
  const t = jl().createApp(...e), { mount: r } = t;
  return t.mount = (o) => {
    const s = $l(o);
    if (!s) return;
    const a = t._component;
    !B(a) && !a.render && !a.template && (a.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const c = r(s, !1, _l(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), c;
  }, t;
});
function _l(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function $l(e) {
  return it(e) ? document.querySelector(e) : e;
}
const Cl = "todo-app-list-todos", Al = "todo-app-create-todo", Sl = "todo-app-update-todo", El = "todo-app-delete-todo", Tl = (e) => {
  if (typeof e != "object" || e === null) return !1;
  const t = e;
  return typeof t.id == "string" && typeof t.title == "string" && typeof t.completed == "boolean" && typeof t.created_at == "string";
}, ia = (e) => Array.isArray(e) ? e.filter(Tl) : [], Ir = (e) => e instanceof Error ? e.message : typeof e == "string" ? e : "Something went wrong", Dl = (e) => {
  const t = /* @__PURE__ */ le([]), r = /* @__PURE__ */ le(!0), o = /* @__PURE__ */ le(null), s = /* @__PURE__ */ le(!1), a = /* @__PURE__ */ le(/* @__PURE__ */ new Set()), c = (b, x) => {
    const _ = new Set(a.value);
    x ? _.add(b) : _.delete(b), a.value = _;
  }, i = async () => {
    r.value = !0, o.value = null;
    try {
      const b = await e.connectors.execute({
        permalink: Cl,
        method: "GET"
      });
      t.value = ia(b);
    } catch (b) {
      o.value = Ir(b);
    } finally {
      r.value = !1;
    }
  }, n = async (b) => {
    const x = b.trim();
    if (!(x.length === 0 || s.value)) {
      s.value = !0, o.value = null;
      try {
        const _ = await e.connectors.execute({
          permalink: Al,
          method: "POST",
          payload: { title: x, completed: !1 }
        }), A = ia(_);
        A.length > 0 ? t.value = [A[0], ...t.value] : await i();
      } catch (_) {
        o.value = Ir(_);
      } finally {
        s.value = !1;
      }
    }
  }, p = async (b) => {
    if (a.value.has(b.id)) return;
    c(b.id, !0);
    const x = b.completed;
    t.value = t.value.map(
      (_) => _.id === b.id ? { ..._, completed: !x } : _
    );
    try {
      await e.connectors.execute({
        permalink: Sl,
        method: "PATCH",
        queryParams: { id: `eq.${b.id}` },
        payload: { completed: !x }
      });
    } catch (_) {
      t.value = t.value.map(
        (A) => A.id === b.id ? { ...A, completed: x } : A
      ), o.value = Ir(_);
    } finally {
      c(b.id, !1);
    }
  }, u = async (b) => {
    if (a.value.has(b.id)) return;
    c(b.id, !0);
    const x = t.value;
    t.value = t.value.filter((_) => _.id !== b.id);
    try {
      await e.connectors.execute({
        permalink: El,
        method: "DELETE",
        queryParams: { id: `eq.${b.id}` }
      });
    } catch (_) {
      t.value = x, o.value = Ir(_);
    } finally {
      c(b.id, !1);
    }
  }, d = () => {
    o.value = null;
  };
  return ds(i), {
    todos: t,
    loading: r,
    error: o,
    creating: s,
    pendingIds: a,
    refresh: i,
    createTodo: n,
    toggleTodo: p,
    deleteTodo: u,
    dismissError: d
  };
}, Bl = {
  system: "spectrum-two",
  color: "light",
  scale: "medium",
  class: "todo-root"
}, Il = { class: "todo-header" }, ql = { class: "todo-heading" }, Pl = { class: "todo-title" }, Ml = ["variant"], Ll = ["disabled"], Ol = ["placeholder", "disabled"], Rl = ["disabled"], Ul = {
  key: 0,
  class: "todo-error",
  role: "alert"
}, Nl = {
  size: "s",
  variant: "negative"
}, Fl = {
  key: 1,
  class: "todo-loading"
}, Vl = {
  key: 2,
  class: "todo-list"
}, Kl = ["checked", "disabled", "onChange"], Wl = { class: "todo-label" }, Gl = ["disabled", "onClick"], Xl = {
  key: 3,
  class: "todo-empty"
}, Zl = /* @__PURE__ */ en({
  __name: "App",
  props: {
    sdk: {},
    connectors: {}
  },
  setup(e) {
    const t = (I) => typeof I == "object" && I !== null, r = /* @__PURE__ */ le(e.sdk.getProps()), o = e.sdk.on("propsChanged", (I) => {
      t(I) && (r.value = I);
    });
    gs(o);
    const s = Or(() => r.value.title ?? "My todos"), a = Or(
      () => r.value.placeholder ?? "What needs doing?"
    ), c = /* @__PURE__ */ le(""), i = /* @__PURE__ */ le(null), {
      todos: n,
      loading: p,
      error: u,
      creating: d,
      pendingIds: b,
      refresh: x,
      createTodo: _,
      toggleTodo: A,
      deleteTodo: rt,
      dismissError: N
    } = Dl(e.connectors), q = Or(
      () => n.value.filter((I) => !I.completed).length
    ), R = (I) => {
      if (I === null) return "";
      const M = Reflect.get(I, "value");
      return typeof M == "string" ? M : "";
    }, E = (I, M) => {
      I !== null && Reflect.set(I, "value", M);
    }, Y = (I) => {
      const M = R(i.value);
      console.log("[todo-app] sync", { eventType: I.type, value: M }), c.value = M;
    };
    let kt = null;
    ds(() => {
      const I = i.value;
      console.log("[todo-app] mounted, textfieldRef=", I), I !== null && (I.addEventListener("input", Y), I.addEventListener("change", Y), kt = () => {
        I.removeEventListener("input", Y), I.removeEventListener("change", Y);
      });
    }), ic(() => {
      kt == null || kt(), kt = null;
    }), Mr(c, (I) => {
      R(i.value) !== I && E(i.value, I);
    });
    const Ht = async (I) => {
      if (I.preventDefault(), d.value || c.value.trim().length === 0) return;
      const M = c.value;
      c.value = "", E(i.value, ""), await _(M);
    };
    return (I, M) => (Xt(), ae("sp-theme", Bl, [
      ot("header", Il, [
        ot("div", ql, [
          ot("h2", Pl, Qe(s.value), 1),
          lt(p) ? Ks("", !0) : (Xt(), ae("sp-status-light", {
            key: 0,
            size: "s",
            variant: q.value === 0 ? "positive" : "notice"
          }, Qe(q.value === 0 ? "All clear" : `${q.value} open`), 9, Ml))
        ]),
        ot("sp-action-button", {
          quiet: "",
          size: "m",
          disabled: lt(p),
          "aria-label": "Refresh",
          onClick: M[0] || (M[0] = //@ts-ignore
          (...at) => lt(x) && lt(x)(...at))
        }, [...M[2] || (M[2] = [
          ot("sp-icon-refresh", { slot: "icon" }, null, -1)
        ])], 8, Ll)
      ]),
      ot("form", {
        class: "todo-form",
        onSubmit: Ht
      }, [
        ot("sp-textfield", {
          ref_key: "textfieldRef",
          ref: i,
          class: "todo-input",
          placeholder: a.value,
          disabled: lt(d)
        }, null, 8, Ol),
        ot("sp-button", {
          variant: "accent",
          type: "submit",
          disabled: lt(d) || c.value.trim().length === 0
        }, [...M[3] || (M[3] = [
          ot("sp-icon-add", { slot: "icon" }, null, -1),
          Cc(" Add ", -1)
        ])], 8, Rl)
      ], 32),
      M[7] || (M[7] = ot("sp-divider", {
        size: "s",
        class: "todo-divider"
      }, null, -1)),
      lt(u) ? (Xt(), ae("div", Ul, [
        ot("sp-status-light", Nl, Qe(lt(u)), 1),
        ot("sp-action-button", {
          quiet: "",
          size: "s",
          onClick: M[1] || (M[1] = //@ts-ignore
          (...at) => lt(N) && lt(N)(...at))
        }, " Dismiss ")
      ])) : Ks("", !0),
      lt(p) ? (Xt(), ae("div", Fl, [...M[4] || (M[4] = [
        ot("sp-progress-circle", {
          size: "m",
          indeterminate: ""
        }, null, -1),
        ot("span", { class: "todo-muted" }, "Loading todos…", -1)
      ])])) : lt(n).length > 0 ? (Xt(), ae("ul", Vl, [
        (Xt(!0), ae(Pt, null, gn(lt(n), (at) => (Xt(), ae("li", {
          key: at.id,
          class: ro(["todo-item", { "todo-item--done": at.completed }])
        }, [
          ot("sp-checkbox", {
            size: "m",
            checked: at.completed,
            disabled: lt(b).has(at.id),
            onChange: (be) => lt(A)(at)
          }, [
            ot("span", Wl, Qe(at.title), 1)
          ], 40, Kl),
          ot("sp-action-button", {
            quiet: "",
            size: "s",
            disabled: lt(b).has(at.id),
            "aria-label": "Delete todo",
            onClick: (be) => lt(rt)(at)
          }, [...M[5] || (M[5] = [
            ot("sp-icon-delete", { slot: "icon" }, null, -1)
          ])], 8, Gl)
        ], 2))), 128))
      ])) : (Xt(), ae("div", Xl, [...M[6] || (M[6] = [
        ot("sp-illustrated-message", { heading: "Nothing here yet" }, [
          ot("span", { slot: "description" }, " Add your first todo above to get started. ")
        ], -1)
      ])]))
    ]));
  }
}), Tc = "1.11.2", Yl = ["spectrum", "express", "spectrum-two"], Jl = ["medium", "large", "medium-express", "large-express", "medium-spectrum-two", "large-spectrum-two"], Ql = ["light", "lightest", "dark", "darkest", "light-express", "lightest-express", "dark-express", "darkest-express", "light-spectrum-two", "lightest-spectrum-two", "dark-spectrum-two", "darkest-spectrum-two"], er = class ft extends HTMLElement {
  constructor() {
    super(), this._dir = "", this._system = "spectrum", this._color = "", this._scale = "", this._systemContextConsumers = /* @__PURE__ */ new Map(), this.trackedChildren = /* @__PURE__ */ new Set(), this._updateRequested = !1, this._contextConsumers = /* @__PURE__ */ new Map(), this.attachShadow({ mode: "open" });
    const t = document.importNode(ft.template.content, !0);
    this.shadowRoot.appendChild(t), this.shouldAdoptStyles(), this.addEventListener("sp-language-context", this._handleContextPresence), this.addEventListener("sp-system-context", this._handleSystemContext), this.updateComplete = this.__createDeferredPromise();
  }
  static get observedAttributes() {
    return ["color", "scale", "lang", "dir", "system"];
  }
  set dir(t) {
    if (t === this.dir) return;
    this.setAttribute("dir", t), this._dir = t;
    const r = t === "rtl" ? t : "ltr";
    this.trackedChildren.forEach((o) => {
      o.setAttribute("dir", r);
    });
  }
  get dir() {
    return this._dir;
  }
  attributeChangedCallback(t, r, o) {
    r !== o && (t === "color" ? this.color = o : t === "scale" ? this.scale = o : t === "lang" && o ? (this.lang = o, this._provideContext()) : t === "system" ? (this.system = o, this._provideSystemContext()) : t === "dir" && (this.dir = o));
  }
  requestUpdate() {
    this.shouldAdoptStyles();
  }
  get system() {
    const t = ft.themeFragmentsByKind.get("system"), { name: r } = t && t.get("default") || {};
    return this._system || r || "";
  }
  set system(t) {
    if (t === this._system) return;
    const r = t && Yl.includes(t) ? t : this.system;
    r !== this._system && (this._system = r, this.requestUpdate()), r ? this.setAttribute("system", r) : this.removeAttribute("system");
  }
  get color() {
    const t = ft.themeFragmentsByKind.get("color"), { name: r } = t && t.get("default") || {};
    return this._color || r || "";
  }
  set color(t) {
    if (t === this._color) return;
    const r = t && Ql.includes(t) ? t : this.color;
    r !== this._color && (this._color = r, this.requestUpdate()), r ? this.setAttribute("color", r) : this.removeAttribute("color");
  }
  get scale() {
    const t = ft.themeFragmentsByKind.get("scale"), { name: r } = t && t.get("default") || {};
    return this._scale || r || "";
  }
  set scale(t) {
    if (t === this._scale) return;
    const r = t && Jl.includes(t) ? t : this.scale;
    r !== this._scale && (this._scale = r, this.requestUpdate()), r ? this.setAttribute("scale", r) : this.removeAttribute("scale");
  }
  get styles() {
    const t = [...ft.themeFragmentsByKind.keys()], r = (s, a, c) => {
      const i = c && c !== "system" && this.system !== "spectrum" ? s.get(`${a}-${this.system}`) : s.get(a), n = a === "spectrum" || !c || this.hasAttribute(c);
      if (i && n) return i.styles;
    }, o = t.reduce((s, a) => {
      const c = ft.themeFragmentsByKind.get(a);
      let i;
      if (a === "app" || a === "core") i = r(c, a);
      else {
        const { [a]: n } = this;
        i = r(c, n, a);
      }
      return i && s.push(i), s;
    }, []);
    return ft.themeFragmentsByKind, this.system, this.color, this.scale, [...o];
  }
  static get template() {
    return this.templateElement || (this.templateElement = document.createElement("template"), this.templateElement.innerHTML = "<slot></slot>"), this.templateElement;
  }
  _handleSystemContext(t) {
    t.stopPropagation();
    const r = t.composedPath()[0];
    if (this._systemContextConsumers.has(r)) return;
    const o = () => this._systemContextConsumers.delete(r);
    this._systemContextConsumers.set(r, [t.detail.callback, o]);
    const [s] = this._systemContextConsumers.get(r) || [];
    s && s(this.system, o);
  }
  __createDeferredPromise() {
    return new Promise((t) => {
      this.__resolve = t;
    });
  }
  connectedCallback() {
    if (this.shouldAdoptStyles(), ft.instances.add(this), !this.hasAttribute("dir")) {
      let t = this.assignedSlot || this.parentNode;
      for (; t !== document.documentElement && !(t instanceof ft); ) t = t.assignedSlot || t.parentNode || t.host;
      this.dir = t.dir === "rtl" ? t.dir : "ltr";
    }
  }
  disconnectedCallback() {
    ft.instances.delete(this);
  }
  startManagingContentDirection(t) {
    this.trackedChildren.add(t);
  }
  stopManagingContentDirection(t) {
    this.trackedChildren.delete(t);
  }
  async shouldAdoptStyles() {
    this._updateRequested || (this.updateComplete = this.__createDeferredPromise(), this._updateRequested = !0, this._updateRequested = await !1, this.adoptStyles(), this.__resolve(!0));
  }
  adoptStyles() {
    const t = this.styles, r = [];
    for (const o of t) r.push(o.styleSheet);
    this.shadowRoot.adoptedStyleSheets = r;
  }
  static registerThemeFragment(t, r, o) {
    const s = ft.themeFragmentsByKind.get(r) || /* @__PURE__ */ new Map();
    s.size === 0 && (ft.themeFragmentsByKind.set(r, s), s.set("default", { name: t, styles: o }), ft.defaultFragments.add(t)), s.set(t, { name: t, styles: o }), ft.instances.forEach((a) => a.shouldAdoptStyles());
  }
  _provideContext() {
    this._contextConsumers.forEach(([t, r]) => t(this.lang, r));
  }
  _provideSystemContext() {
    this._systemContextConsumers.forEach(([t, r]) => t(this.system, r));
  }
  _handleContextPresence(t) {
    t.stopPropagation();
    const r = t.composedPath()[0];
    if (this._contextConsumers.has(r)) return;
    this._contextConsumers.set(r, [t.detail.callback, () => this._contextConsumers.delete(r)]);
    const [o, s] = this._contextConsumers.get(r) || [];
    o && s && o(this.lang || document.documentElement.lang || navigator.language, s);
  }
};
er.themeFragmentsByKind = /* @__PURE__ */ new Map(), er.defaultFragments = /* @__PURE__ */ new Set(["spectrum"]), er.instances = /* @__PURE__ */ new Set(), er.VERSION = Tc;
let no = er;
customElements.define("sp-theme", no);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ur = globalThis, ys = Ur.ShadowRoot && (Ur.ShadyCSS === void 0 || Ur.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ks = Symbol(), na = /* @__PURE__ */ new WeakMap();
let Dc = class {
  constructor(t, r, o) {
    if (this._$cssResult$ = !0, o !== ks) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = r;
  }
  get styleSheet() {
    let t = this.o;
    const r = this.t;
    if (ys && t === void 0) {
      const o = r !== void 0 && r.length === 1;
      o && (t = na.get(r)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), o && na.set(r, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const tu = (e) => new Dc(typeof e == "string" ? e : e + "", void 0, ks), st = (e, ...t) => {
  const r = e.length === 1 ? e[0] : t.reduce((o, s, a) => o + ((c) => {
    if (c._$cssResult$ === !0) return c.cssText;
    if (typeof c == "number") return c;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + c + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + e[a + 1], e[0]);
  return new Dc(r, e, ks);
}, eu = (e, t) => {
  if (ys) e.adoptedStyleSheets = t.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of t) {
    const o = document.createElement("style"), s = Ur.litNonce;
    s !== void 0 && o.setAttribute("nonce", s), o.textContent = r.cssText, e.appendChild(o);
  }
}, la = ys ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let r = "";
  for (const o of t.cssRules) r += o.cssText;
  return tu(r);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: ru, defineProperty: ou, getOwnPropertyDescriptor: su, getOwnPropertyNames: au, getOwnPropertySymbols: cu, getPrototypeOf: iu } = Object, pe = globalThis, ua = pe.trustedTypes, nu = ua ? ua.emptyScript : "", Ho = pe.reactiveElementPolyfillSupport, lr = (e, t) => e, Zr = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? nu : null;
      break;
    case Object:
    case Array:
      e = e == null ? e : JSON.stringify(e);
  }
  return e;
}, fromAttribute(e, t) {
  let r = e;
  switch (t) {
    case Boolean:
      r = e !== null;
      break;
    case Number:
      r = e === null ? null : Number(e);
      break;
    case Object:
    case Array:
      try {
        r = JSON.parse(e);
      } catch {
        r = null;
      }
  }
  return r;
} }, xs = (e, t) => !ru(e, t), ma = { attribute: !0, type: String, converter: Zr, reflect: !1, useDefault: !1, hasChanged: xs };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), pe.litPropertyMetadata ?? (pe.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let qe = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, r = ma) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((r = Object.create(r)).wrapped = !0), this.elementProperties.set(t, r), !r.noAccessor) {
      const o = Symbol(), s = this.getPropertyDescriptor(t, o, r);
      s !== void 0 && ou(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, r, o) {
    const { get: s, set: a } = su(this.prototype, t) ?? { get() {
      return this[r];
    }, set(c) {
      this[r] = c;
    } };
    return { get: s, set(c) {
      const i = s == null ? void 0 : s.call(this);
      a == null || a.call(this, c), this.requestUpdate(t, i, o);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? ma;
  }
  static _$Ei() {
    if (this.hasOwnProperty(lr("elementProperties"))) return;
    const t = iu(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(lr("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(lr("properties"))) {
      const r = this.properties, o = [...au(r), ...cu(r)];
      for (const s of o) this.createProperty(s, r[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const r = litPropertyMetadata.get(t);
      if (r !== void 0) for (const [o, s] of r) this.elementProperties.set(o, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, o] of this.elementProperties) {
      const s = this._$Eu(r, o);
      s !== void 0 && this._$Eh.set(s, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const r = [];
    if (Array.isArray(t)) {
      const o = new Set(t.flat(1 / 0).reverse());
      for (const s of o) r.unshift(la(s));
    } else t !== void 0 && r.push(la(t));
    return r;
  }
  static _$Eu(t, r) {
    const o = r.attribute;
    return o === !1 ? void 0 : typeof o == "string" ? o : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((r) => this.enableUpdating = r), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((r) => r(this));
  }
  addController(t) {
    var r;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((r = t.hostConnected) == null || r.call(t));
  }
  removeController(t) {
    var r;
    (r = this._$EO) == null || r.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), r = this.constructor.elementProperties;
    for (const o of r.keys()) this.hasOwnProperty(o) && (t.set(o, this[o]), delete this[o]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return eu(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((r) => {
      var o;
      return (o = r.hostConnected) == null ? void 0 : o.call(r);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((r) => {
      var o;
      return (o = r.hostDisconnected) == null ? void 0 : o.call(r);
    });
  }
  attributeChangedCallback(t, r, o) {
    this._$AK(t, o);
  }
  _$ET(t, r) {
    var a;
    const o = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, o);
    if (s !== void 0 && o.reflect === !0) {
      const c = (((a = o.converter) == null ? void 0 : a.toAttribute) !== void 0 ? o.converter : Zr).toAttribute(r, o.type);
      this._$Em = t, c == null ? this.removeAttribute(s) : this.setAttribute(s, c), this._$Em = null;
    }
  }
  _$AK(t, r) {
    var a, c;
    const o = this.constructor, s = o._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const i = o.getPropertyOptions(s), n = typeof i.converter == "function" ? { fromAttribute: i.converter } : ((a = i.converter) == null ? void 0 : a.fromAttribute) !== void 0 ? i.converter : Zr;
      this._$Em = s;
      const p = n.fromAttribute(r, i.type);
      this[s] = p ?? ((c = this._$Ej) == null ? void 0 : c.get(s)) ?? p, this._$Em = null;
    }
  }
  requestUpdate(t, r, o, s = !1, a) {
    var c;
    if (t !== void 0) {
      const i = this.constructor;
      if (s === !1 && (a = this[t]), o ?? (o = i.getPropertyOptions(t)), !((o.hasChanged ?? xs)(a, r) || o.useDefault && o.reflect && a === ((c = this._$Ej) == null ? void 0 : c.get(t)) && !this.hasAttribute(i._$Eu(t, o)))) return;
      this.C(t, r, o);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, r, { useDefault: o, reflect: s, wrapped: a }, c) {
    o && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, c ?? r ?? this[t]), a !== !0 || c !== void 0) || (this._$AL.has(t) || (this.hasUpdated || o || (r = void 0), this._$AL.set(t, r)), s === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (r) {
      Promise.reject(r);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var o;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [a, c] of this._$Ep) this[a] = c;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [a, c] of s) {
        const { wrapped: i } = c, n = this[a];
        i !== !0 || this._$AL.has(a) || n === void 0 || this.C(a, void 0, c, n);
      }
    }
    let t = !1;
    const r = this._$AL;
    try {
      t = this.shouldUpdate(r), t ? (this.willUpdate(r), (o = this._$EO) == null || o.forEach((s) => {
        var a;
        return (a = s.hostUpdate) == null ? void 0 : a.call(s);
      }), this.update(r)) : this._$EM();
    } catch (s) {
      throw t = !1, this._$EM(), s;
    }
    t && this._$AE(r);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var r;
    (r = this._$EO) == null || r.forEach((o) => {
      var s;
      return (s = o.hostUpdated) == null ? void 0 : s.call(o);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((r) => this._$ET(r, this[r]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
qe.elementStyles = [], qe.shadowRootOptions = { mode: "open" }, qe[lr("elementProperties")] = /* @__PURE__ */ new Map(), qe[lr("finalized")] = /* @__PURE__ */ new Map(), Ho == null || Ho({ ReactiveElement: qe }), (pe.reactiveElementVersions ?? (pe.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ur = globalThis, pa = (e) => e, Yr = ur.trustedTypes, da = Yr ? Yr.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, Bc = "$lit$", me = `lit$${Math.random().toFixed(9).slice(2)}$`, Ic = "?" + me, lu = `<${Ic}>`, Ae = document, yr = () => Ae.createComment(""), kr = (e) => e === null || typeof e != "object" && typeof e != "function", ws = Array.isArray, uu = (e) => ws(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", _o = `[ 	
\f\r]`, Ye = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ga = /-->/g, ba = />/g, ke = RegExp(`>|${_o}(?:([^\\s"'>=/]+)(${_o}*=${_o}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ha = /'/g, fa = /"/g, qc = /^(?:script|style|textarea|title)$/i, mu = (e) => (t, ...r) => ({ _$litType$: e, strings: t, values: r }), C = mu(1), Rt = Symbol.for("lit-noChange"), Z = Symbol.for("lit-nothing"), va = /* @__PURE__ */ new WeakMap(), He = Ae.createTreeWalker(Ae, 129);
function Pc(e, t) {
  if (!ws(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return da !== void 0 ? da.createHTML(t) : t;
}
const pu = (e, t) => {
  const r = e.length - 1, o = [];
  let s, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", c = Ye;
  for (let i = 0; i < r; i++) {
    const n = e[i];
    let p, u, d = -1, b = 0;
    for (; b < n.length && (c.lastIndex = b, u = c.exec(n), u !== null); ) b = c.lastIndex, c === Ye ? u[1] === "!--" ? c = ga : u[1] !== void 0 ? c = ba : u[2] !== void 0 ? (qc.test(u[2]) && (s = RegExp("</" + u[2], "g")), c = ke) : u[3] !== void 0 && (c = ke) : c === ke ? u[0] === ">" ? (c = s ?? Ye, d = -1) : u[1] === void 0 ? d = -2 : (d = c.lastIndex - u[2].length, p = u[1], c = u[3] === void 0 ? ke : u[3] === '"' ? fa : ha) : c === fa || c === ha ? c = ke : c === ga || c === ba ? c = Ye : (c = ke, s = void 0);
    const x = c === ke && e[i + 1].startsWith("/>") ? " " : "";
    a += c === Ye ? n + lu : d >= 0 ? (o.push(p), n.slice(0, d) + Bc + n.slice(d) + me + x) : n + me + (d === -2 ? i : x);
  }
  return [Pc(e, a + (e[r] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), o];
};
let Fo = class Mc {
  constructor({ strings: t, _$litType$: r }, o) {
    let s;
    this.parts = [];
    let a = 0, c = 0;
    const i = t.length - 1, n = this.parts, [p, u] = pu(t, r);
    if (this.el = Mc.createElement(p, o), He.currentNode = this.el.content, r === 2 || r === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (s = He.nextNode()) !== null && n.length < i; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const d of s.getAttributeNames()) if (d.endsWith(Bc)) {
          const b = u[c++], x = s.getAttribute(d).split(me), _ = /([.?@])?(.*)/.exec(b);
          n.push({ type: 1, index: a, name: _[2], strings: x, ctor: _[1] === "." ? gu : _[1] === "?" ? bu : _[1] === "@" ? hu : lo }), s.removeAttribute(d);
        } else d.startsWith(me) && (n.push({ type: 6, index: a }), s.removeAttribute(d));
        if (qc.test(s.tagName)) {
          const d = s.textContent.split(me), b = d.length - 1;
          if (b > 0) {
            s.textContent = Yr ? Yr.emptyScript : "";
            for (let x = 0; x < b; x++) s.append(d[x], yr()), He.nextNode(), n.push({ type: 2, index: ++a });
            s.append(d[b], yr());
          }
        }
      } else if (s.nodeType === 8) if (s.data === Ic) n.push({ type: 2, index: a });
      else {
        let d = -1;
        for (; (d = s.data.indexOf(me, d + 1)) !== -1; ) n.push({ type: 7, index: a }), d += me.length - 1;
      }
      a++;
    }
  }
  static createElement(t, r) {
    const o = Ae.createElement("template");
    return o.innerHTML = t, o;
  }
};
function Fe(e, t, r = e, o) {
  var c, i;
  if (t === Rt) return t;
  let s = o !== void 0 ? (c = r._$Co) == null ? void 0 : c[o] : r._$Cl;
  const a = kr(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== a && ((i = s == null ? void 0 : s._$AO) == null || i.call(s, !1), a === void 0 ? s = void 0 : (s = new a(e), s._$AT(e, r, o)), o !== void 0 ? (r._$Co ?? (r._$Co = []))[o] = s : r._$Cl = s), s !== void 0 && (t = Fe(e, s._$AS(e, t.values), s, o)), t;
}
let du = class {
  constructor(t, r) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = r;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: r }, parts: o } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? Ae).importNode(r, !0);
    He.currentNode = s;
    let a = He.nextNode(), c = 0, i = 0, n = o[0];
    for (; n !== void 0; ) {
      if (c === n.index) {
        let p;
        n.type === 2 ? p = new jr(a, a.nextSibling, this, t) : n.type === 1 ? p = new n.ctor(a, n.name, n.strings, this, t) : n.type === 6 && (p = new fu(a, this, t)), this._$AV.push(p), n = o[++i];
      }
      c !== (n == null ? void 0 : n.index) && (a = He.nextNode(), c++);
    }
    return He.currentNode = Ae, s;
  }
  p(t) {
    let r = 0;
    for (const o of this._$AV) o !== void 0 && (o.strings !== void 0 ? (o._$AI(t, o, r), r += o.strings.length - 2) : o._$AI(t[r])), r++;
  }
};
class jr {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, r, o, s) {
    this.type = 2, this._$AH = Z, this._$AN = void 0, this._$AA = t, this._$AB = r, this._$AM = o, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const r = this._$AM;
    return r !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = r.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, r = this) {
    t = Fe(this, t, r), kr(t) ? t === Z || t == null || t === "" ? (this._$AH !== Z && this._$AR(), this._$AH = Z) : t !== this._$AH && t !== Rt && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : uu(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== Z && kr(this._$AH) ? this._$AA.nextSibling.data = t : this.T(Ae.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var a;
    const { values: r, _$litType$: o } = t, s = typeof o == "number" ? this._$AC(t) : (o.el === void 0 && (o.el = Fo.createElement(Pc(o.h, o.h[0]), this.options)), o);
    if (((a = this._$AH) == null ? void 0 : a._$AD) === s) this._$AH.p(r);
    else {
      const c = new du(s, this), i = c.u(this.options);
      c.p(r), this.T(i), this._$AH = c;
    }
  }
  _$AC(t) {
    let r = va.get(t.strings);
    return r === void 0 && va.set(t.strings, r = new Fo(t)), r;
  }
  k(t) {
    ws(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let o, s = 0;
    for (const a of t) s === r.length ? r.push(o = new jr(this.O(yr()), this.O(yr()), this, this.options)) : o = r[s], o._$AI(a), s++;
    s < r.length && (this._$AR(o && o._$AB.nextSibling, s), r.length = s);
  }
  _$AR(t = this._$AA.nextSibling, r) {
    var o;
    for ((o = this._$AP) == null ? void 0 : o.call(this, !1, !0, r); t !== this._$AB; ) {
      const s = pa(t).nextSibling;
      pa(t).remove(), t = s;
    }
  }
  setConnected(t) {
    var r;
    this._$AM === void 0 && (this._$Cv = t, (r = this._$AP) == null || r.call(this, t));
  }
}
class lo {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, r, o, s, a) {
    this.type = 1, this._$AH = Z, this._$AN = void 0, this.element = t, this.name = r, this._$AM = s, this.options = a, o.length > 2 || o[0] !== "" || o[1] !== "" ? (this._$AH = Array(o.length - 1).fill(new String()), this.strings = o) : this._$AH = Z;
  }
  _$AI(t, r = this, o, s) {
    const a = this.strings;
    let c = !1;
    if (a === void 0) t = Fe(this, t, r, 0), c = !kr(t) || t !== this._$AH && t !== Rt, c && (this._$AH = t);
    else {
      const i = t;
      let n, p;
      for (t = a[0], n = 0; n < a.length - 1; n++) p = Fe(this, i[o + n], r, n), p === Rt && (p = this._$AH[n]), c || (c = !kr(p) || p !== this._$AH[n]), p === Z ? t = Z : t !== Z && (t += (p ?? "") + a[n + 1]), this._$AH[n] = p;
    }
    c && !s && this.j(t);
  }
  j(t) {
    t === Z ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
let gu = class extends lo {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === Z ? void 0 : t;
  }
}, bu = class extends lo {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== Z);
  }
};
class hu extends lo {
  constructor(t, r, o, s, a) {
    super(t, r, o, s, a), this.type = 5;
  }
  _$AI(t, r = this) {
    if ((t = Fe(this, t, r, 0) ?? Z) === Rt) return;
    const o = this._$AH, s = t === Z && o !== Z || t.capture !== o.capture || t.once !== o.once || t.passive !== o.passive, a = t !== Z && (o === Z || s);
    s && this.element.removeEventListener(this.name, this, o), a && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class fu {
  constructor(t, r, o) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = o;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Fe(this, t);
  }
}
const $o = ur.litHtmlPolyfillSupport;
$o == null || $o(Fo, jr), (ur.litHtmlVersions ?? (ur.litHtmlVersions = [])).push("3.3.2");
const vu = (e, t, r) => {
  const o = (r == null ? void 0 : r.renderBefore) ?? t;
  let s = o._$litPart$;
  if (s === void 0) {
    const a = (r == null ? void 0 : r.renderBefore) ?? null;
    o._$litPart$ = s = new jr(t.insertBefore(yr(), a), a, void 0, r ?? {});
  }
  return s._$AI(e), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ce = globalThis;
let mr = class extends qe {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var r;
    const t = super.createRenderRoot();
    return (r = this.renderOptions).renderBefore ?? (r.renderBefore = t.firstChild), t;
  }
  update(t) {
    const r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = vu(r, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return Rt;
  }
};
var Ha;
mr._$litElement$ = !0, mr.finalized = !0, (Ha = Ce.litElementHydrateSupport) == null || Ha.call(Ce, { LitElement: mr });
const Co = Ce.litElementPolyfillSupport;
Co == null || Co({ LitElement: mr });
(Ce.litElementVersions ?? (Ce.litElementVersions = [])).push("4.2.2");
const Vo = /* @__PURE__ */ new Set(), yu = () => {
  const e = document.documentElement.dir === "rtl" ? document.documentElement.dir : "ltr";
  Vo.forEach((t) => {
    t.setAttribute("dir", e);
  });
}, ku = new MutationObserver(yu);
ku.observe(document.documentElement, {
  attributes: !0,
  attributeFilter: ["dir"]
});
const xu = (e) => typeof e.startManagingContentDirection < "u" || e.tagName === "SP-THEME";
function wu(e) {
  class t extends e {
    /**
     * @internal
     */
    get isLTR() {
      return this.dir === "ltr";
    }
    /**
     * @internal
     */
    hasVisibleFocusInTree() {
      const o = ((s = document) => {
        var a;
        let c = s.activeElement;
        for (; c != null && c.shadowRoot && c.shadowRoot.activeElement; )
          c = c.shadowRoot.activeElement;
        const i = c ? [c] : [];
        for (; c; ) {
          const n = c.assignedSlot || c.parentElement || ((a = c.getRootNode()) == null ? void 0 : a.host);
          n && i.push(n), c = n;
        }
        return i;
      })(
        this.getRootNode()
      )[0];
      if (!o)
        return !1;
      try {
        return o.matches(":focus-visible") || o.matches(".focus-visible");
      } catch {
        return o.matches(".focus-visible");
      }
    }
    connectedCallback() {
      if (!this.hasAttribute("dir")) {
        let o = this.assignedSlot || this.parentNode;
        for (; o !== document.documentElement && !xu(
          o
        ); )
          o = o.assignedSlot || // step into the shadow DOM of the parent of a slotted node
          o.parentNode || // DOM Element detected
          o.host;
        if (this.dir = o.dir === "rtl" ? o.dir : this.dir || "ltr", o === document.documentElement)
          Vo.add(this);
        else {
          const { localName: s } = o;
          s.search("-") > -1 && !customElements.get(s) ? customElements.whenDefined(s).then(() => {
            o.startManagingContentDirection(this);
          }) : o.startManagingContentDirection(
            this
          );
        }
        this._dirParent = o;
      }
      super.connectedCallback();
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._dirParent && (this._dirParent === document.documentElement ? Vo.delete(this) : this._dirParent.stopManagingContentDirection(
        this
      ), this.removeAttribute("dir"));
    }
  }
  return t;
}
class Vt extends wu(mr) {
}
Vt.VERSION = Tc;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const zu = { attribute: !0, type: String, converter: Zr, reflect: !1, hasChanged: xs }, ju = (e = zu, t, r) => {
  const { kind: o, metadata: s } = r;
  let a = globalThis.litPropertyMetadata.get(s);
  if (a === void 0 && globalThis.litPropertyMetadata.set(s, a = /* @__PURE__ */ new Map()), o === "setter" && ((e = Object.create(e)).wrapped = !0), a.set(r.name, e), o === "accessor") {
    const { name: c } = r;
    return { set(i) {
      const n = t.get.call(this);
      t.set.call(this, i), this.requestUpdate(c, n, e, !0, i);
    }, init(i) {
      return i !== void 0 && this.C(c, void 0, e, i), i;
    } };
  }
  if (o === "setter") {
    const { name: c } = r;
    return function(i) {
      const n = this[c];
      t.call(this, i), this.requestUpdate(c, n, e, !0, i);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function z(e) {
  return (t, r) => typeof r == "object" ? ju(e, t, r) : ((o, s, a) => {
    const c = s.hasOwnProperty(a);
    return s.constructor.createProperty(a, o), c ? Object.getOwnPropertyDescriptor(s, a) : void 0;
  })(e, t, r);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Ko(e) {
  return z({ ...e, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Lc = (e, t, r) => (r.configurable = !0, r.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(e, t, r), r);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Hr(e, t) {
  return (r, o, s) => {
    const a = (c) => {
      var i;
      return ((i = c.renderRoot) == null ? void 0 : i.querySelector(e)) ?? null;
    };
    return Lc(r, o, { get() {
      return a(this);
    } });
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Hu(e) {
  return (t, r) => {
    const { slot: o } = e ?? {}, s = "slot" + (o ? `[name=${o}]` : ":not([name])");
    return Lc(t, r, { get() {
      var c;
      const a = (c = this.renderRoot) == null ? void 0 : c.querySelector(s);
      return (a == null ? void 0 : a.assignedNodes(e)) ?? [];
    } });
  };
}
var _u = Object.defineProperty, $u = Object.getOwnPropertyDescriptor, Cu = (e, t, r, o) => {
  for (var s = $u(t, r), a = e.length - 1, c; a >= 0; a--)
    (c = e[a]) && (s = c(t, r, s) || s);
  return s && _u(t, r, s), s;
};
function ge(e, {
  validSizes: t = ["s", "m", "l", "xl"],
  noDefaultSize: r,
  defaultSize: o = "m"
} = {}) {
  class s extends e {
    constructor() {
      super(...arguments), this._size = o;
    }
    get size() {
      return this._size || o;
    }
    set size(c) {
      const i = r ? null : o, n = c && c.toLocaleLowerCase(), p = t.includes(n) ? n : i;
      if (p && this.setAttribute("size", p), this._size === p)
        return;
      const u = this._size;
      this._size = p, this.requestUpdate("size", u);
    }
    update(c) {
      !this.hasAttribute("size") && !r && this.setAttribute("size", this.size), super.update(c);
    }
  }
  return s.VALID_SIZES = t, Cu([
    z({ type: String })
  ], s.prototype, "size"), s;
}
const Au = st`
    :root,:host{--spectrum-global-color-status:Verified;--spectrum-global-color-version:5.1;--spectrum-global-color-opacity-100:1;--spectrum-global-color-opacity-90:.9;--spectrum-global-color-opacity-80:.8;--spectrum-global-color-opacity-70:.7;--spectrum-global-color-opacity-60:.6;--spectrum-global-color-opacity-55:.55;--spectrum-global-color-opacity-50:.5;--spectrum-global-color-opacity-42:.42;--spectrum-global-color-opacity-40:.4;--spectrum-global-color-opacity-30:.3;--spectrum-global-color-opacity-25:.25;--spectrum-global-color-opacity-20:.2;--spectrum-global-color-opacity-15:.15;--spectrum-global-color-opacity-10:.1;--spectrum-global-color-opacity-8:.08;--spectrum-global-color-opacity-7:.07;--spectrum-global-color-opacity-6:.06;--spectrum-global-color-opacity-5:.05;--spectrum-global-color-opacity-4:.04;--spectrum-global-color-opacity-0:0;--spectrum-global-color-celery-400-rgb:39,187,54;--spectrum-global-color-celery-400:rgb(var(--spectrum-global-color-celery-400-rgb));--spectrum-global-color-celery-500-rgb:7,167,33;--spectrum-global-color-celery-500:rgb(var(--spectrum-global-color-celery-500-rgb));--spectrum-global-color-celery-600-rgb:0,145,18;--spectrum-global-color-celery-600:rgb(var(--spectrum-global-color-celery-600-rgb));--spectrum-global-color-celery-700-rgb:0,124,15;--spectrum-global-color-celery-700:rgb(var(--spectrum-global-color-celery-700-rgb));--spectrum-global-color-chartreuse-400-rgb:152,197,10;--spectrum-global-color-chartreuse-400:rgb(var(--spectrum-global-color-chartreuse-400-rgb));--spectrum-global-color-chartreuse-500-rgb:135,177,3;--spectrum-global-color-chartreuse-500:rgb(var(--spectrum-global-color-chartreuse-500-rgb));--spectrum-global-color-chartreuse-600-rgb:118,156,0;--spectrum-global-color-chartreuse-600:rgb(var(--spectrum-global-color-chartreuse-600-rgb));--spectrum-global-color-chartreuse-700-rgb:103,136,0;--spectrum-global-color-chartreuse-700:rgb(var(--spectrum-global-color-chartreuse-700-rgb));--spectrum-global-color-yellow-400-rgb:232,198,0;--spectrum-global-color-yellow-400:rgb(var(--spectrum-global-color-yellow-400-rgb));--spectrum-global-color-yellow-500-rgb:215,179,0;--spectrum-global-color-yellow-500:rgb(var(--spectrum-global-color-yellow-500-rgb));--spectrum-global-color-yellow-600-rgb:196,159,0;--spectrum-global-color-yellow-600:rgb(var(--spectrum-global-color-yellow-600-rgb));--spectrum-global-color-yellow-700-rgb:176,140,0;--spectrum-global-color-yellow-700:rgb(var(--spectrum-global-color-yellow-700-rgb));--spectrum-global-color-magenta-400-rgb:222,61,130;--spectrum-global-color-magenta-400:rgb(var(--spectrum-global-color-magenta-400-rgb));--spectrum-global-color-magenta-500-rgb:200,34,105;--spectrum-global-color-magenta-500:rgb(var(--spectrum-global-color-magenta-500-rgb));--spectrum-global-color-magenta-600-rgb:173,9,85;--spectrum-global-color-magenta-600:rgb(var(--spectrum-global-color-magenta-600-rgb));--spectrum-global-color-magenta-700-rgb:142,0,69;--spectrum-global-color-magenta-700:rgb(var(--spectrum-global-color-magenta-700-rgb));--spectrum-global-color-fuchsia-400-rgb:205,58,206;--spectrum-global-color-fuchsia-400:rgb(var(--spectrum-global-color-fuchsia-400-rgb));--spectrum-global-color-fuchsia-500-rgb:182,34,183;--spectrum-global-color-fuchsia-500:rgb(var(--spectrum-global-color-fuchsia-500-rgb));--spectrum-global-color-fuchsia-600-rgb:157,3,158;--spectrum-global-color-fuchsia-600:rgb(var(--spectrum-global-color-fuchsia-600-rgb));--spectrum-global-color-fuchsia-700-rgb:128,0,129;--spectrum-global-color-fuchsia-700:rgb(var(--spectrum-global-color-fuchsia-700-rgb));--spectrum-global-color-purple-400-rgb:157,87,244;--spectrum-global-color-purple-400:rgb(var(--spectrum-global-color-purple-400-rgb));--spectrum-global-color-purple-500-rgb:137,61,231;--spectrum-global-color-purple-500:rgb(var(--spectrum-global-color-purple-500-rgb));--spectrum-global-color-purple-600-rgb:115,38,211;--spectrum-global-color-purple-600:rgb(var(--spectrum-global-color-purple-600-rgb));--spectrum-global-color-purple-700-rgb:93,19,183;--spectrum-global-color-purple-700:rgb(var(--spectrum-global-color-purple-700-rgb));--spectrum-global-color-indigo-400-rgb:104,109,244;--spectrum-global-color-indigo-400:rgb(var(--spectrum-global-color-indigo-400-rgb));--spectrum-global-color-indigo-500-rgb:82,88,228;--spectrum-global-color-indigo-500:rgb(var(--spectrum-global-color-indigo-500-rgb));--spectrum-global-color-indigo-600-rgb:64,70,202;--spectrum-global-color-indigo-600:rgb(var(--spectrum-global-color-indigo-600-rgb));--spectrum-global-color-indigo-700-rgb:50,54,168;--spectrum-global-color-indigo-700:rgb(var(--spectrum-global-color-indigo-700-rgb));--spectrum-global-color-seafoam-400-rgb:0,161,154;--spectrum-global-color-seafoam-400:rgb(var(--spectrum-global-color-seafoam-400-rgb));--spectrum-global-color-seafoam-500-rgb:0,140,135;--spectrum-global-color-seafoam-500:rgb(var(--spectrum-global-color-seafoam-500-rgb));--spectrum-global-color-seafoam-600-rgb:0,119,114;--spectrum-global-color-seafoam-600:rgb(var(--spectrum-global-color-seafoam-600-rgb));--spectrum-global-color-seafoam-700-rgb:0,99,95;--spectrum-global-color-seafoam-700:rgb(var(--spectrum-global-color-seafoam-700-rgb));--spectrum-global-color-red-400-rgb:234,56,41;--spectrum-global-color-red-400:rgb(var(--spectrum-global-color-red-400-rgb));--spectrum-global-color-red-500-rgb:211,21,16;--spectrum-global-color-red-500:rgb(var(--spectrum-global-color-red-500-rgb));--spectrum-global-color-red-600-rgb:180,0,0;--spectrum-global-color-red-600:rgb(var(--spectrum-global-color-red-600-rgb));--spectrum-global-color-red-700-rgb:147,0,0;--spectrum-global-color-red-700:rgb(var(--spectrum-global-color-red-700-rgb));--spectrum-global-color-orange-400-rgb:246,133,17;--spectrum-global-color-orange-400:rgb(var(--spectrum-global-color-orange-400-rgb));--spectrum-global-color-orange-500-rgb:228,111,0;--spectrum-global-color-orange-500:rgb(var(--spectrum-global-color-orange-500-rgb));--spectrum-global-color-orange-600-rgb:203,93,0;--spectrum-global-color-orange-600:rgb(var(--spectrum-global-color-orange-600-rgb));--spectrum-global-color-orange-700-rgb:177,76,0;--spectrum-global-color-orange-700:rgb(var(--spectrum-global-color-orange-700-rgb));--spectrum-global-color-green-400-rgb:0,143,93;--spectrum-global-color-green-400:rgb(var(--spectrum-global-color-green-400-rgb));--spectrum-global-color-green-500-rgb:0,122,77;--spectrum-global-color-green-500:rgb(var(--spectrum-global-color-green-500-rgb));--spectrum-global-color-green-600-rgb:0,101,62;--spectrum-global-color-green-600:rgb(var(--spectrum-global-color-green-600-rgb));--spectrum-global-color-green-700-rgb:0,81,50;--spectrum-global-color-green-700:rgb(var(--spectrum-global-color-green-700-rgb));--spectrum-global-color-blue-400-rgb:20,122,243;--spectrum-global-color-blue-400:rgb(var(--spectrum-global-color-blue-400-rgb));--spectrum-global-color-blue-500-rgb:2,101,220;--spectrum-global-color-blue-500:rgb(var(--spectrum-global-color-blue-500-rgb));--spectrum-global-color-blue-600-rgb:0,84,182;--spectrum-global-color-blue-600:rgb(var(--spectrum-global-color-blue-600-rgb));--spectrum-global-color-blue-700-rgb:0,68,145;--spectrum-global-color-blue-700:rgb(var(--spectrum-global-color-blue-700-rgb));--spectrum-global-color-gray-50-rgb:255,255,255;--spectrum-global-color-gray-50:rgb(var(--spectrum-global-color-gray-50-rgb));--spectrum-global-color-gray-75-rgb:253,253,253;--spectrum-global-color-gray-75:rgb(var(--spectrum-global-color-gray-75-rgb));--spectrum-global-color-gray-100-rgb:248,248,248;--spectrum-global-color-gray-100:rgb(var(--spectrum-global-color-gray-100-rgb));--spectrum-global-color-gray-200-rgb:230,230,230;--spectrum-global-color-gray-200:rgb(var(--spectrum-global-color-gray-200-rgb));--spectrum-global-color-gray-300-rgb:213,213,213;--spectrum-global-color-gray-300:rgb(var(--spectrum-global-color-gray-300-rgb));--spectrum-global-color-gray-400-rgb:177,177,177;--spectrum-global-color-gray-400:rgb(var(--spectrum-global-color-gray-400-rgb));--spectrum-global-color-gray-500-rgb:144,144,144;--spectrum-global-color-gray-500:rgb(var(--spectrum-global-color-gray-500-rgb));--spectrum-global-color-gray-600-rgb:109,109,109;--spectrum-global-color-gray-600:rgb(var(--spectrum-global-color-gray-600-rgb));--spectrum-global-color-gray-700-rgb:70,70,70;--spectrum-global-color-gray-700:rgb(var(--spectrum-global-color-gray-700-rgb));--spectrum-global-color-gray-800-rgb:34,34,34;--spectrum-global-color-gray-800:rgb(var(--spectrum-global-color-gray-800-rgb));--spectrum-global-color-gray-900-rgb:0,0,0;--spectrum-global-color-gray-900:rgb(var(--spectrum-global-color-gray-900-rgb));--spectrum-alias-background-color-primary:var(--spectrum-global-color-gray-50);--spectrum-alias-background-color-secondary:var(--spectrum-global-color-gray-100);--spectrum-alias-background-color-tertiary:var(--spectrum-global-color-gray-300);--spectrum-alias-background-color-modal-overlay:#0006;--spectrum-alias-dropshadow-color:#00000026;--spectrum-alias-background-color-hover-overlay:#0000000a;--spectrum-alias-highlight-hover:#0000000f;--spectrum-alias-highlight-down:#0000001a;--spectrum-alias-highlight-selected:#0265dc1a;--spectrum-alias-highlight-selected-hover:#0265dc33;--spectrum-alias-text-highlight-color:#0265dc33;--spectrum-alias-background-color-quickactions:#f8f8f8e6;--spectrum-alias-border-color-selected:var(--spectrum-global-color-blue-500);--spectrum-alias-border-color-translucent:#0000001a;--spectrum-alias-radial-reaction-color-default:#2229;--spectrum-alias-pasteboard-background-color:var(--spectrum-global-color-gray-300);--spectrum-alias-appframe-border-color:var(--spectrum-global-color-gray-300);--spectrum-alias-appframe-separator-color:var(--spectrum-global-color-gray-300)}:host,:root{color-scheme:light;--spectrum-overlay-opacity:.4;--spectrum-background-layer-2-color:var(--spectrum-gray-25);--spectrum-neutral-subdued-background-color-default:var(--spectrum-gray-700);--spectrum-neutral-subdued-background-color-hover:var(--spectrum-gray-800);--spectrum-neutral-subdued-background-color-down:var(--spectrum-gray-800);--spectrum-neutral-subdued-background-color-key-focus:var(--spectrum-gray-800);--spectrum-accent-background-color-default:var(--spectrum-accent-color-900);--spectrum-accent-background-color-hover:var(--spectrum-accent-color-1000);--spectrum-accent-background-color-down:var(--spectrum-accent-color-1000);--spectrum-accent-background-color-key-focus:var(--spectrum-accent-color-1000);--spectrum-informative-background-color-default:var(--spectrum-informative-color-900);--spectrum-informative-background-color-hover:var(--spectrum-informative-color-1000);--spectrum-informative-background-color-down:var(--spectrum-informative-color-1000);--spectrum-informative-background-color-key-focus:var(--spectrum-informative-color-1000);--spectrum-negative-background-color-default:var(--spectrum-negative-color-900);--spectrum-negative-background-color-hover:var(--spectrum-negative-color-1000);--spectrum-negative-background-color-down:var(--spectrum-negative-color-1000);--spectrum-negative-background-color-key-focus:var(--spectrum-negative-color-1000);--spectrum-positive-background-color-default:var(--spectrum-positive-color-900);--spectrum-positive-background-color-hover:var(--spectrum-positive-color-1000);--spectrum-positive-background-color-down:var(--spectrum-positive-color-1000);--spectrum-positive-background-color-key-focus:var(--spectrum-positive-color-1000);--spectrum-notice-background-color-default:var(--spectrum-notice-color-600);--spectrum-gray-background-color-default:var(--spectrum-gray-700);--spectrum-red-background-color-default:var(--spectrum-red-900);--spectrum-orange-background-color-default:var(--spectrum-orange-600);--spectrum-yellow-background-color-default:var(--spectrum-yellow-400);--spectrum-chartreuse-background-color-default:var(--spectrum-chartreuse-500);--spectrum-celery-background-color-default:var(--spectrum-celery-600);--spectrum-green-background-color-default:var(--spectrum-green-900);--spectrum-seafoam-background-color-default:var(--spectrum-seafoam-900);--spectrum-cyan-background-color-default:var(--spectrum-cyan-900);--spectrum-blue-background-color-default:var(--spectrum-blue-900);--spectrum-indigo-background-color-default:var(--spectrum-indigo-900);--spectrum-purple-background-color-default:var(--spectrum-purple-900);--spectrum-fuchsia-background-color-default:var(--spectrum-fuchsia-900);--spectrum-magenta-background-color-default:var(--spectrum-magenta-900);--spectrum-neutral-visual-color:var(--spectrum-gray-500);--spectrum-accent-visual-color:var(--spectrum-accent-color-800);--spectrum-informative-visual-color:var(--spectrum-informative-color-800);--spectrum-negative-visual-color:var(--spectrum-negative-color-800);--spectrum-notice-visual-color:var(--spectrum-notice-color-800);--spectrum-positive-visual-color:var(--spectrum-positive-color-800);--spectrum-gray-visual-color:var(--spectrum-gray-500);--spectrum-red-visual-color:var(--spectrum-red-800);--spectrum-orange-visual-color:var(--spectrum-orange-700);--spectrum-yellow-visual-color:var(--spectrum-yellow-600);--spectrum-chartreuse-visual-color:var(--spectrum-chartreuse-600);--spectrum-celery-visual-color:var(--spectrum-celery-700);--spectrum-green-visual-color:var(--spectrum-green-700);--spectrum-seafoam-visual-color:var(--spectrum-seafoam-700);--spectrum-cyan-visual-color:var(--spectrum-cyan-600);--spectrum-blue-visual-color:var(--spectrum-blue-800);--spectrum-indigo-visual-color:var(--spectrum-indigo-800);--spectrum-purple-visual-color:var(--spectrum-purple-800);--spectrum-fuchsia-visual-color:var(--spectrum-fuchsia-800);--spectrum-magenta-visual-color:var(--spectrum-magenta-800);--spectrum-background-elevated-color:var(--spectrum-gray-25);--spectrum-background-pasteboard-color:var(--spectrum-gray-100);--spectrum-brown-visual-color:var(--spectrum-brown-800);--spectrum-cinnamon-visual-color:var(--spectrum-cinnamon-800);--spectrum-pink-visual-color:var(--spectrum-pink-800);--spectrum-silver-visual-color:var(--spectrum-silver-800);--spectrum-turquoise-visual-color:var(--spectrum-turquoise-800);--spectrum-brown-background-color-default:var(--spectrum-brown-900);--spectrum-cinnamon-background-color-default:var(--spectrum-cinnamon-900);--spectrum-pink-background-color-default:var(--spectrum-pink-900);--spectrum-silver-background-color-default:var(--spectrum-silver-900);--spectrum-turquoise-background-color-default:var(--spectrum-turquoise-900);--spectrum-drop-shadow-color-100-rgb:0,0,0;--spectrum-drop-shadow-color-100-opacity:.12;--spectrum-drop-shadow-color-100:rgba(var(--spectrum-drop-shadow-color-100-rgb),var(--spectrum-drop-shadow-color-100-opacity));--spectrum-drop-shadow-color-200-rgb:0,0,0;--spectrum-drop-shadow-color-200-opacity:.16;--spectrum-drop-shadow-color-200:rgba(var(--spectrum-drop-shadow-color-200-rgb),var(--spectrum-drop-shadow-color-200-opacity));--spectrum-drop-shadow-color-300-rgb:0,0,0;--spectrum-drop-shadow-color-300-opacity:.2;--spectrum-drop-shadow-color-300:rgba(var(--spectrum-drop-shadow-color-300-rgb),var(--spectrum-drop-shadow-color-300-opacity));--spectrum-neutral-subtle-background-color-default:var(--spectrum-gray-100);--spectrum-gray-subtle-background-color-default:var(--spectrum-gray-100);--spectrum-blue-subtle-background-color-default:var(--spectrum-blue-200);--spectrum-green-subtle-background-color-default:var(--spectrum-green-200);--spectrum-orange-subtle-background-color-default:var(--spectrum-orange-200);--spectrum-red-subtle-background-color-default:var(--spectrum-red-200);--spectrum-brown-subtle-background-color-default:var(--spectrum-brown-200);--spectrum-cinnamon-subtle-background-color-default:var(--spectrum-cinnamon-200);--spectrum-celery-subtle-background-color-default:var(--spectrum-celery-200);--spectrum-chartreuse-subtle-background-color-default:var(--spectrum-chartreuse-200);--spectrum-cyan-subtle-background-color-default:var(--spectrum-cyan-200);--spectrum-fuchsia-subtle-background-color-default:var(--spectrum-fuchsia-200);--spectrum-indigo-subtle-background-color-default:var(--spectrum-indigo-200);--spectrum-magenta-subtle-background-color-default:var(--spectrum-magenta-200);--spectrum-pink-subtle-background-color-default:var(--spectrum-pink-200);--spectrum-purple-subtle-background-color-default:var(--spectrum-purple-200);--spectrum-seafoam-subtle-background-color-default:var(--spectrum-seafoam-200);--spectrum-silver-subtle-background-color-default:var(--spectrum-silver-200);--spectrum-turquoise-subtle-background-color-default:var(--spectrum-turquoise-200);--spectrum-yellow-subtle-background-color-default:var(--spectrum-yellow-200);--spectrum-opacity-checkerboard-square-dark:var(--spectrum-gray-200);--spectrum-white-rgb:255,255,255;--spectrum-white:rgba(var(--spectrum-white-rgb));--spectrum-transparent-white-25-rgb:255,255,255;--spectrum-transparent-white-25-opacity:0;--spectrum-transparent-white-25:rgba(var(--spectrum-transparent-white-25-rgb),var(--spectrum-transparent-white-25-opacity));--spectrum-transparent-white-50-rgb:255,255,255;--spectrum-transparent-white-50-opacity:.04;--spectrum-transparent-white-50:rgba(var(--spectrum-transparent-white-50-rgb),var(--spectrum-transparent-white-50-opacity));--spectrum-transparent-white-75-rgb:255,255,255;--spectrum-transparent-white-75-opacity:.07;--spectrum-transparent-white-75:rgba(var(--spectrum-transparent-white-75-rgb),var(--spectrum-transparent-white-75-opacity));--spectrum-transparent-white-100-rgb:255,255,255;--spectrum-transparent-white-100-opacity:.11;--spectrum-transparent-white-100:rgba(var(--spectrum-transparent-white-100-rgb),var(--spectrum-transparent-white-100-opacity));--spectrum-transparent-white-200-rgb:255,255,255;--spectrum-transparent-white-200-opacity:.14;--spectrum-transparent-white-200:rgba(var(--spectrum-transparent-white-200-rgb),var(--spectrum-transparent-white-200-opacity));--spectrum-transparent-white-300-rgb:255,255,255;--spectrum-transparent-white-300-opacity:.17;--spectrum-transparent-white-300:rgba(var(--spectrum-transparent-white-300-rgb),var(--spectrum-transparent-white-300-opacity));--spectrum-transparent-white-400-rgb:255,255,255;--spectrum-transparent-white-400-opacity:.21;--spectrum-transparent-white-400:rgba(var(--spectrum-transparent-white-400-rgb),var(--spectrum-transparent-white-400-opacity));--spectrum-transparent-white-500-rgb:255,255,255;--spectrum-transparent-white-500-opacity:.39;--spectrum-transparent-white-500:rgba(var(--spectrum-transparent-white-500-rgb),var(--spectrum-transparent-white-500-opacity));--spectrum-transparent-white-600-rgb:255,255,255;--spectrum-transparent-white-600-opacity:.51;--spectrum-transparent-white-600:rgba(var(--spectrum-transparent-white-600-rgb),var(--spectrum-transparent-white-600-opacity));--spectrum-transparent-white-700-rgb:255,255,255;--spectrum-transparent-white-700-opacity:.66;--spectrum-transparent-white-700:rgba(var(--spectrum-transparent-white-700-rgb),var(--spectrum-transparent-white-700-opacity));--spectrum-transparent-white-800-rgb:255,255,255;--spectrum-transparent-white-800-opacity:.85;--spectrum-transparent-white-800:rgba(var(--spectrum-transparent-white-800-rgb),var(--spectrum-transparent-white-800-opacity));--spectrum-transparent-white-900-rgb:255,255,255;--spectrum-transparent-white-900-opacity:.94;--spectrum-transparent-white-900:rgba(var(--spectrum-transparent-white-900-rgb),var(--spectrum-transparent-white-900-opacity));--spectrum-transparent-white-1000-rgb:255,255,255;--spectrum-transparent-white-1000:rgba(var(--spectrum-transparent-white-1000-rgb));--spectrum-transparent-black-25-rgb:0,0,0;--spectrum-transparent-black-25-opacity:0;--spectrum-transparent-black-25:rgba(var(--spectrum-transparent-black-25-rgb),var(--spectrum-transparent-black-25-opacity));--spectrum-transparent-black-50-rgb:0,0,0;--spectrum-transparent-black-50-opacity:.03;--spectrum-transparent-black-50:rgba(var(--spectrum-transparent-black-50-rgb),var(--spectrum-transparent-black-50-opacity));--spectrum-transparent-black-75-rgb:0,0,0;--spectrum-transparent-black-75-opacity:.05;--spectrum-transparent-black-75:rgba(var(--spectrum-transparent-black-75-rgb),var(--spectrum-transparent-black-75-opacity));--spectrum-transparent-black-100-rgb:0,0,0;--spectrum-transparent-black-100-opacity:.09;--spectrum-transparent-black-100:rgba(var(--spectrum-transparent-black-100-rgb),var(--spectrum-transparent-black-100-opacity));--spectrum-transparent-black-200-rgb:0,0,0;--spectrum-transparent-black-200-opacity:.12;--spectrum-transparent-black-200:rgba(var(--spectrum-transparent-black-200-rgb),var(--spectrum-transparent-black-200-opacity));--spectrum-transparent-black-300-rgb:0,0,0;--spectrum-transparent-black-300-opacity:.15;--spectrum-transparent-black-300:rgba(var(--spectrum-transparent-black-300-rgb),var(--spectrum-transparent-black-300-opacity));--spectrum-transparent-black-400-rgb:0,0,0;--spectrum-transparent-black-400-opacity:.22;--spectrum-transparent-black-400:rgba(var(--spectrum-transparent-black-400-rgb),var(--spectrum-transparent-black-400-opacity));--spectrum-transparent-black-500-rgb:0,0,0;--spectrum-transparent-black-500-opacity:.44;--spectrum-transparent-black-500:rgba(var(--spectrum-transparent-black-500-rgb),var(--spectrum-transparent-black-500-opacity));--spectrum-transparent-black-600-rgb:0,0,0;--spectrum-transparent-black-600-opacity:.56;--spectrum-transparent-black-600:rgba(var(--spectrum-transparent-black-600-rgb),var(--spectrum-transparent-black-600-opacity));--spectrum-transparent-black-700-rgb:0,0,0;--spectrum-transparent-black-700-opacity:.69;--spectrum-transparent-black-700:rgba(var(--spectrum-transparent-black-700-rgb),var(--spectrum-transparent-black-700-opacity));--spectrum-transparent-black-800-rgb:0,0,0;--spectrum-transparent-black-800-opacity:.84;--spectrum-transparent-black-800:rgba(var(--spectrum-transparent-black-800-rgb),var(--spectrum-transparent-black-800-opacity));--spectrum-transparent-black-900-rgb:0,0,0;--spectrum-transparent-black-900-opacity:.93;--spectrum-transparent-black-900:rgba(var(--spectrum-transparent-black-900-rgb),var(--spectrum-transparent-black-900-opacity));--spectrum-gray-25-rgb:255,255,255;--spectrum-gray-25:rgba(var(--spectrum-gray-25-rgb));--spectrum-gray-50-rgb:248,248,248;--spectrum-gray-50:rgba(var(--spectrum-gray-50-rgb));--spectrum-gray-75-rgb:243,243,243;--spectrum-gray-75:rgba(var(--spectrum-gray-75-rgb));--spectrum-gray-100-rgb:233,233,233;--spectrum-gray-100:rgba(var(--spectrum-gray-100-rgb));--spectrum-gray-200-rgb:225,225,225;--spectrum-gray-200:rgba(var(--spectrum-gray-200-rgb));--spectrum-gray-300-rgb:218,218,218;--spectrum-gray-300:rgba(var(--spectrum-gray-300-rgb));--spectrum-gray-400-rgb:198,198,198;--spectrum-gray-400:rgba(var(--spectrum-gray-400-rgb));--spectrum-gray-500-rgb:143,143,143;--spectrum-gray-500:rgba(var(--spectrum-gray-500-rgb));--spectrum-gray-600-rgb:113,113,113;--spectrum-gray-600:rgba(var(--spectrum-gray-600-rgb));--spectrum-gray-700-rgb:80,80,80;--spectrum-gray-700:rgba(var(--spectrum-gray-700-rgb));--spectrum-gray-800-rgb:41,41,41;--spectrum-gray-800:rgba(var(--spectrum-gray-800-rgb));--spectrum-gray-900-rgb:19,19,19;--spectrum-gray-900:rgba(var(--spectrum-gray-900-rgb));--spectrum-gray-1000-rgb:0,0,0;--spectrum-gray-1000:rgba(var(--spectrum-gray-1000-rgb));--spectrum-blue-100-rgb:245,249,255;--spectrum-blue-100:rgba(var(--spectrum-blue-100-rgb));--spectrum-blue-200-rgb:229,240,254;--spectrum-blue-200:rgba(var(--spectrum-blue-200-rgb));--spectrum-blue-300-rgb:203,226,254;--spectrum-blue-300:rgba(var(--spectrum-blue-300-rgb));--spectrum-blue-400-rgb:172,207,253;--spectrum-blue-400:rgba(var(--spectrum-blue-400-rgb));--spectrum-blue-500-rgb:142,185,252;--spectrum-blue-500:rgba(var(--spectrum-blue-500-rgb));--spectrum-blue-600-rgb:114,158,253;--spectrum-blue-600:rgba(var(--spectrum-blue-600-rgb));--spectrum-blue-700-rgb:93,137,255;--spectrum-blue-700:rgba(var(--spectrum-blue-700-rgb));--spectrum-blue-800-rgb:75,117,255;--spectrum-blue-800:rgba(var(--spectrum-blue-800-rgb));--spectrum-blue-900-rgb:59,99,251;--spectrum-blue-900:rgba(var(--spectrum-blue-900-rgb));--spectrum-blue-1000-rgb:39,77,234;--spectrum-blue-1000:rgba(var(--spectrum-blue-1000-rgb));--spectrum-blue-1100-rgb:29,62,207;--spectrum-blue-1100:rgba(var(--spectrum-blue-1100-rgb));--spectrum-blue-1200-rgb:21,50,173;--spectrum-blue-1200:rgba(var(--spectrum-blue-1200-rgb));--spectrum-blue-1300-rgb:16,40,140;--spectrum-blue-1300:rgba(var(--spectrum-blue-1300-rgb));--spectrum-blue-1400-rgb:12,31,105;--spectrum-blue-1400:rgba(var(--spectrum-blue-1400-rgb));--spectrum-blue-1500-rgb:14,24,67;--spectrum-blue-1500:rgba(var(--spectrum-blue-1500-rgb));--spectrum-blue-1600-rgb:7,11,30;--spectrum-blue-1600:rgba(var(--spectrum-blue-1600-rgb));--spectrum-red-100-rgb:255,246,245;--spectrum-red-100:rgba(var(--spectrum-red-100-rgb));--spectrum-red-200-rgb:255,235,232;--spectrum-red-200:rgba(var(--spectrum-red-200-rgb));--spectrum-red-300-rgb:255,214,209;--spectrum-red-300:rgba(var(--spectrum-red-300-rgb));--spectrum-red-400-rgb:255,188,180;--spectrum-red-400:rgba(var(--spectrum-red-400-rgb));--spectrum-red-500-rgb:255,157,145;--spectrum-red-500:rgba(var(--spectrum-red-500-rgb));--spectrum-red-600-rgb:255,118,101;--spectrum-red-600:rgba(var(--spectrum-red-600-rgb));--spectrum-red-700-rgb:255,81,61;--spectrum-red-700:rgba(var(--spectrum-red-700-rgb));--spectrum-red-800-rgb:240,56,35;--spectrum-red-800:rgba(var(--spectrum-red-800-rgb));--spectrum-red-900-rgb:215,50,32;--spectrum-red-900:rgba(var(--spectrum-red-900-rgb));--spectrum-red-1000-rgb:183,40,24;--spectrum-red-1000:rgba(var(--spectrum-red-1000-rgb));--spectrum-red-1100-rgb:156,33,19;--spectrum-red-1100:rgba(var(--spectrum-red-1100-rgb));--spectrum-red-1200-rgb:129,27,14;--spectrum-red-1200:rgba(var(--spectrum-red-1200-rgb));--spectrum-red-1300-rgb:104,21,10;--spectrum-red-1300:rgba(var(--spectrum-red-1300-rgb));--spectrum-red-1400-rgb:80,16,6;--spectrum-red-1400:rgba(var(--spectrum-red-1400-rgb));--spectrum-red-1500-rgb:59,11,4;--spectrum-red-1500:rgba(var(--spectrum-red-1500-rgb));--spectrum-red-1600-rgb:29,5,2;--spectrum-red-1600:rgba(var(--spectrum-red-1600-rgb));--spectrum-orange-100-rgb:255,246,231;--spectrum-orange-100:rgba(var(--spectrum-orange-100-rgb));--spectrum-orange-200-rgb:255,236,207;--spectrum-orange-200:rgba(var(--spectrum-orange-200-rgb));--spectrum-orange-300-rgb:255,218,158;--spectrum-orange-300:rgba(var(--spectrum-orange-300-rgb));--spectrum-orange-400-rgb:255,193,94;--spectrum-orange-400:rgba(var(--spectrum-orange-400-rgb));--spectrum-orange-500-rgb:255,162,19;--spectrum-orange-500:rgba(var(--spectrum-orange-500-rgb));--spectrum-orange-600-rgb:252,125,0;--spectrum-orange-600:rgba(var(--spectrum-orange-600-rgb));--spectrum-orange-700-rgb:232,106,0;--spectrum-orange-700:rgba(var(--spectrum-orange-700-rgb));--spectrum-orange-800-rgb:212,91,0;--spectrum-orange-800:rgba(var(--spectrum-orange-800-rgb));--spectrum-orange-900-rgb:194,78,0;--spectrum-orange-900:rgba(var(--spectrum-orange-900-rgb));--spectrum-orange-1000-rgb:167,62,0;--spectrum-orange-1000:rgba(var(--spectrum-orange-1000-rgb));--spectrum-orange-1100-rgb:144,51,0;--spectrum-orange-1100:rgba(var(--spectrum-orange-1100-rgb));--spectrum-orange-1200-rgb:118,41,0;--spectrum-orange-1200:rgba(var(--spectrum-orange-1200-rgb));--spectrum-orange-1300-rgb:95,32,0;--spectrum-orange-1300:rgba(var(--spectrum-orange-1300-rgb));--spectrum-orange-1400-rgb:73,24,0;--spectrum-orange-1400:rgba(var(--spectrum-orange-1400-rgb));--spectrum-orange-1500-rgb:52,18,0;--spectrum-orange-1500:rgba(var(--spectrum-orange-1500-rgb));--spectrum-orange-1600-rgb:25,8,0;--spectrum-orange-1600:rgba(var(--spectrum-orange-1600-rgb));--spectrum-yellow-100-rgb:255,248,204;--spectrum-yellow-100:rgba(var(--spectrum-yellow-100-rgb));--spectrum-yellow-200-rgb:255,241,151;--spectrum-yellow-200:rgba(var(--spectrum-yellow-200-rgb));--spectrum-yellow-300-rgb:255,222,44;--spectrum-yellow-300:rgba(var(--spectrum-yellow-300-rgb));--spectrum-yellow-400-rgb:245,199,0;--spectrum-yellow-400:rgba(var(--spectrum-yellow-400-rgb));--spectrum-yellow-500-rgb:230,175,0;--spectrum-yellow-500:rgba(var(--spectrum-yellow-500-rgb));--spectrum-yellow-600-rgb:210,149,0;--spectrum-yellow-600:rgba(var(--spectrum-yellow-600-rgb));--spectrum-yellow-700-rgb:193,131,0;--spectrum-yellow-700:rgba(var(--spectrum-yellow-700-rgb));--spectrum-yellow-800-rgb:175,116,0;--spectrum-yellow-800:rgba(var(--spectrum-yellow-800-rgb));--spectrum-yellow-900-rgb:158,102,0;--spectrum-yellow-900:rgba(var(--spectrum-yellow-900-rgb));--spectrum-yellow-1000-rgb:134,85,0;--spectrum-yellow-1000:rgba(var(--spectrum-yellow-1000-rgb));--spectrum-yellow-1100-rgb:114,72,0;--spectrum-yellow-1100:rgba(var(--spectrum-yellow-1100-rgb));--spectrum-yellow-1200-rgb:93,59,0;--spectrum-yellow-1200:rgba(var(--spectrum-yellow-1200-rgb));--spectrum-yellow-1300-rgb:75,47,0;--spectrum-yellow-1300:rgba(var(--spectrum-yellow-1300-rgb));--spectrum-yellow-1400-rgb:56,35,0;--spectrum-yellow-1400:rgba(var(--spectrum-yellow-1400-rgb));--spectrum-yellow-1500-rgb:40,25,0;--spectrum-yellow-1500:rgba(var(--spectrum-yellow-1500-rgb));--spectrum-yellow-1600-rgb:18,11,0;--spectrum-yellow-1600:rgba(var(--spectrum-yellow-1600-rgb));--spectrum-chartreuse-100-rgb:246,251,222;--spectrum-chartreuse-100:rgba(var(--spectrum-chartreuse-100-rgb));--spectrum-chartreuse-200-rgb:234,246,173;--spectrum-chartreuse-200:rgba(var(--spectrum-chartreuse-200-rgb));--spectrum-chartreuse-300-rgb:208,236,70;--spectrum-chartreuse-300:rgba(var(--spectrum-chartreuse-300-rgb));--spectrum-chartreuse-400-rgb:182,219,0;--spectrum-chartreuse-400:rgba(var(--spectrum-chartreuse-400-rgb));--spectrum-chartreuse-500-rgb:163,196,0;--spectrum-chartreuse-500:rgba(var(--spectrum-chartreuse-500-rgb));--spectrum-chartreuse-600-rgb:143,172,0;--spectrum-chartreuse-600:rgba(var(--spectrum-chartreuse-600-rgb));--spectrum-chartreuse-700-rgb:128,153,0;--spectrum-chartreuse-700:rgba(var(--spectrum-chartreuse-700-rgb));--spectrum-chartreuse-800-rgb:114,137,0;--spectrum-chartreuse-800:rgba(var(--spectrum-chartreuse-800-rgb));--spectrum-chartreuse-900-rgb:102,122,0;--spectrum-chartreuse-900:rgba(var(--spectrum-chartreuse-900-rgb));--spectrum-chartreuse-1000-rgb:86,103,0;--spectrum-chartreuse-1000:rgba(var(--spectrum-chartreuse-1000-rgb));--spectrum-chartreuse-1100-rgb:73,87,0;--spectrum-chartreuse-1100:rgba(var(--spectrum-chartreuse-1100-rgb));--spectrum-chartreuse-1200-rgb:60,71,0;--spectrum-chartreuse-1200:rgba(var(--spectrum-chartreuse-1200-rgb));--spectrum-chartreuse-1300-rgb:47,57,0;--spectrum-chartreuse-1300:rgba(var(--spectrum-chartreuse-1300-rgb));--spectrum-chartreuse-1400-rgb:35,43,0;--spectrum-chartreuse-1400:rgba(var(--spectrum-chartreuse-1400-rgb));--spectrum-chartreuse-1500-rgb:25,30,0;--spectrum-chartreuse-1500:rgba(var(--spectrum-chartreuse-1500-rgb));--spectrum-chartreuse-1600-rgb:11,14,0;--spectrum-chartreuse-1600:rgba(var(--spectrum-chartreuse-1600-rgb));--spectrum-celery-100-rgb:235,255,220;--spectrum-celery-100:rgba(var(--spectrum-celery-100-rgb));--spectrum-celery-200-rgb:197,255,156;--spectrum-celery-200:rgba(var(--spectrum-celery-200-rgb));--spectrum-celery-300-rgb:157,247,92;--spectrum-celery-300:rgba(var(--spectrum-celery-300-rgb));--spectrum-celery-400-rgb:129,228,58;--spectrum-celery-400:rgba(var(--spectrum-celery-400-rgb));--spectrum-celery-500-rgb:110,206,42;--spectrum-celery-500:rgba(var(--spectrum-celery-500-rgb));--spectrum-celery-600-rgb:93,180,31;--spectrum-celery-600:rgba(var(--spectrum-celery-600-rgb));--spectrum-celery-700-rgb:82,161,25;--spectrum-celery-700:rgba(var(--spectrum-celery-700-rgb));--spectrum-celery-800-rgb:72,144,20;--spectrum-celery-800:rgba(var(--spectrum-celery-800-rgb));--spectrum-celery-900-rgb:64,129,17;--spectrum-celery-900:rgba(var(--spectrum-celery-900-rgb));--spectrum-celery-1000-rgb:52,109,12;--spectrum-celery-1000:rgba(var(--spectrum-celery-1000-rgb));--spectrum-celery-1100-rgb:44,92,9;--spectrum-celery-1100:rgba(var(--spectrum-celery-1100-rgb));--spectrum-celery-1200-rgb:35,75,6;--spectrum-celery-1200:rgba(var(--spectrum-celery-1200-rgb));--spectrum-celery-1300-rgb:27,60,3;--spectrum-celery-1300:rgba(var(--spectrum-celery-1300-rgb));--spectrum-celery-1400-rgb:19,46,0;--spectrum-celery-1400:rgba(var(--spectrum-celery-1400-rgb));--spectrum-celery-1500-rgb:12,33,0;--spectrum-celery-1500:rgba(var(--spectrum-celery-1500-rgb));--spectrum-celery-1600-rgb:4,15,0;--spectrum-celery-1600:rgba(var(--spectrum-celery-1600-rgb));--spectrum-green-100-rgb:237,252,241;--spectrum-green-100:rgba(var(--spectrum-green-100-rgb));--spectrum-green-200-rgb:215,247,225;--spectrum-green-200:rgba(var(--spectrum-green-200-rgb));--spectrum-green-300-rgb:173,238,197;--spectrum-green-300:rgba(var(--spectrum-green-300-rgb));--spectrum-green-400-rgb:107,227,162;--spectrum-green-400:rgba(var(--spectrum-green-400-rgb));--spectrum-green-500-rgb:43,209,125;--spectrum-green-500:rgba(var(--spectrum-green-500-rgb));--spectrum-green-600-rgb:18,184,103;--spectrum-green-600:rgba(var(--spectrum-green-600-rgb));--spectrum-green-700-rgb:11,164,93;--spectrum-green-700:rgba(var(--spectrum-green-700-rgb));--spectrum-green-800-rgb:7,147,85;--spectrum-green-800:rgba(var(--spectrum-green-800-rgb));--spectrum-green-900-rgb:5,131,78;--spectrum-green-900:rgba(var(--spectrum-green-900-rgb));--spectrum-green-1000-rgb:3,110,69;--spectrum-green-1000:rgba(var(--spectrum-green-1000-rgb));--spectrum-green-1100-rgb:2,93,60;--spectrum-green-1100:rgba(var(--spectrum-green-1100-rgb));--spectrum-green-1200-rgb:1,76,52;--spectrum-green-1200:rgba(var(--spectrum-green-1200-rgb));--spectrum-green-1300-rgb:0,61,44;--spectrum-green-1300:rgba(var(--spectrum-green-1300-rgb));--spectrum-green-1400-rgb:0,46,34;--spectrum-green-1400:rgba(var(--spectrum-green-1400-rgb));--spectrum-green-1500-rgb:0,33,25;--spectrum-green-1500:rgba(var(--spectrum-green-1500-rgb));--spectrum-green-1600-rgb:0,15,12;--spectrum-green-1600:rgba(var(--spectrum-green-1600-rgb));--spectrum-seafoam-100-rgb:235,251,246;--spectrum-seafoam-100:rgba(var(--spectrum-seafoam-100-rgb));--spectrum-seafoam-200-rgb:211,246,234;--spectrum-seafoam-200:rgba(var(--spectrum-seafoam-200-rgb));--spectrum-seafoam-300-rgb:169,237,216;--spectrum-seafoam-300:rgba(var(--spectrum-seafoam-300-rgb));--spectrum-seafoam-400-rgb:92,225,194;--spectrum-seafoam-400:rgba(var(--spectrum-seafoam-400-rgb));--spectrum-seafoam-500-rgb:16,207,169;--spectrum-seafoam-500:rgba(var(--spectrum-seafoam-500-rgb));--spectrum-seafoam-600-rgb:13,181,149;--spectrum-seafoam-600:rgba(var(--spectrum-seafoam-600-rgb));--spectrum-seafoam-700-rgb:11,162,134;--spectrum-seafoam-700:rgba(var(--spectrum-seafoam-700-rgb));--spectrum-seafoam-800-rgb:9,144,120;--spectrum-seafoam-800:rgba(var(--spectrum-seafoam-800-rgb));--spectrum-seafoam-900-rgb:7,129,109;--spectrum-seafoam-900:rgba(var(--spectrum-seafoam-900-rgb));--spectrum-seafoam-1000-rgb:5,108,92;--spectrum-seafoam-1000:rgba(var(--spectrum-seafoam-1000-rgb));--spectrum-seafoam-1100-rgb:3,92,80;--spectrum-seafoam-1100:rgba(var(--spectrum-seafoam-1100-rgb));--spectrum-seafoam-1200-rgb:1,75,67;--spectrum-seafoam-1200:rgba(var(--spectrum-seafoam-1200-rgb));--spectrum-seafoam-1300-rgb:0,60,54;--spectrum-seafoam-1300:rgba(var(--spectrum-seafoam-1300-rgb));--spectrum-seafoam-1400-rgb:0,46,40;--spectrum-seafoam-1400:rgba(var(--spectrum-seafoam-1400-rgb));--spectrum-seafoam-1500-rgb:0,33,29;--spectrum-seafoam-1500:rgba(var(--spectrum-seafoam-1500-rgb));--spectrum-seafoam-1600-rgb:0,15,14;--spectrum-seafoam-1600:rgba(var(--spectrum-seafoam-1600-rgb));--spectrum-cyan-100-rgb:238,250,254;--spectrum-cyan-100:rgba(var(--spectrum-cyan-100-rgb));--spectrum-cyan-200-rgb:217,244,253;--spectrum-cyan-200:rgba(var(--spectrum-cyan-200-rgb));--spectrum-cyan-300-rgb:183,231,252;--spectrum-cyan-300:rgba(var(--spectrum-cyan-300-rgb));--spectrum-cyan-400-rgb:138,213,255;--spectrum-cyan-400:rgba(var(--spectrum-cyan-400-rgb));--spectrum-cyan-500-rgb:92,192,255;--spectrum-cyan-500:rgba(var(--spectrum-cyan-500-rgb));--spectrum-cyan-600-rgb:48,167,254;--spectrum-cyan-600:rgba(var(--spectrum-cyan-600-rgb));--spectrum-cyan-700-rgb:29,149,231;--spectrum-cyan-700:rgba(var(--spectrum-cyan-700-rgb));--spectrum-cyan-800-rgb:18,134,205;--spectrum-cyan-800:rgba(var(--spectrum-cyan-800-rgb));--spectrum-cyan-900-rgb:11,120,179;--spectrum-cyan-900:rgba(var(--spectrum-cyan-900-rgb));--spectrum-cyan-1000-rgb:4,102,145;--spectrum-cyan-1000:rgba(var(--spectrum-cyan-1000-rgb));--spectrum-cyan-1100-rgb:0,87,121;--spectrum-cyan-1100:rgba(var(--spectrum-cyan-1100-rgb));--spectrum-cyan-1200-rgb:0,71,98;--spectrum-cyan-1200:rgba(var(--spectrum-cyan-1200-rgb));--spectrum-cyan-1300-rgb:0,57,78;--spectrum-cyan-1300:rgba(var(--spectrum-cyan-1300-rgb));--spectrum-cyan-1400-rgb:0,43,59;--spectrum-cyan-1400:rgba(var(--spectrum-cyan-1400-rgb));--spectrum-cyan-1500-rgb:0,31,43;--spectrum-cyan-1500:rgba(var(--spectrum-cyan-1500-rgb));--spectrum-cyan-1600-rgb:0,14,20;--spectrum-cyan-1600:rgba(var(--spectrum-cyan-1600-rgb));--spectrum-indigo-100-rgb:247,248,255;--spectrum-indigo-100:rgba(var(--spectrum-indigo-100-rgb));--spectrum-indigo-200-rgb:235,238,255;--spectrum-indigo-200:rgba(var(--spectrum-indigo-200-rgb));--spectrum-indigo-300-rgb:216,222,255;--spectrum-indigo-300:rgba(var(--spectrum-indigo-300-rgb));--spectrum-indigo-400-rgb:192,201,255;--spectrum-indigo-400:rgba(var(--spectrum-indigo-400-rgb));--spectrum-indigo-500-rgb:167,178,255;--spectrum-indigo-500:rgba(var(--spectrum-indigo-500-rgb));--spectrum-indigo-600-rgb:145,151,254;--spectrum-indigo-600:rgba(var(--spectrum-indigo-600-rgb));--spectrum-indigo-700-rgb:132,128,254;--spectrum-indigo-700:rgba(var(--spectrum-indigo-700-rgb));--spectrum-indigo-800-rgb:122,106,253;--spectrum-indigo-800:rgba(var(--spectrum-indigo-800-rgb));--spectrum-indigo-900-rgb:113,85,250;--spectrum-indigo-900:rgba(var(--spectrum-indigo-900-rgb));--spectrum-indigo-1000-rgb:99,56,238;--spectrum-indigo-1000:rgba(var(--spectrum-indigo-1000-rgb));--spectrum-indigo-1100-rgb:84,36,219;--spectrum-indigo-1100:rgba(var(--spectrum-indigo-1100-rgb));--spectrum-indigo-1200-rgb:69,19,191;--spectrum-indigo-1200:rgba(var(--spectrum-indigo-1200-rgb));--spectrum-indigo-1300-rgb:55,6,160;--spectrum-indigo-1300:rgba(var(--spectrum-indigo-1300-rgb));--spectrum-indigo-1400-rgb:42,0,129;--spectrum-indigo-1400:rgba(var(--spectrum-indigo-1400-rgb));--spectrum-indigo-1500-rgb:31,0,98;--spectrum-indigo-1500:rgba(var(--spectrum-indigo-1500-rgb));--spectrum-indigo-1600-rgb:17,0,54;--spectrum-indigo-1600:rgba(var(--spectrum-indigo-1600-rgb));--spectrum-purple-100-rgb:251,247,254;--spectrum-purple-100:rgba(var(--spectrum-purple-100-rgb));--spectrum-purple-200-rgb:244,235,252;--spectrum-purple-200:rgba(var(--spectrum-purple-200-rgb));--spectrum-purple-300-rgb:235,218,249;--spectrum-purple-300:rgba(var(--spectrum-purple-300-rgb));--spectrum-purple-400-rgb:221,193,246;--spectrum-purple-400:rgba(var(--spectrum-purple-400-rgb));--spectrum-purple-500-rgb:208,167,243;--spectrum-purple-500:rgba(var(--spectrum-purple-500-rgb));--spectrum-purple-600-rgb:191,138,238;--spectrum-purple-600:rgba(var(--spectrum-purple-600-rgb));--spectrum-purple-700-rgb:178,114,235;--spectrum-purple-700:rgba(var(--spectrum-purple-700-rgb));--spectrum-purple-800-rgb:166,92,231;--spectrum-purple-800:rgba(var(--spectrum-purple-800-rgb));--spectrum-purple-900-rgb:154,71,226;--spectrum-purple-900:rgba(var(--spectrum-purple-900-rgb));--spectrum-purple-1000-rgb:134,40,217;--spectrum-purple-1000:rgba(var(--spectrum-purple-1000-rgb));--spectrum-purple-1100-rgb:115,13,204;--spectrum-purple-1100:rgba(var(--spectrum-purple-1100-rgb));--spectrum-purple-1200-rgb:93,0,177;--spectrum-purple-1200:rgba(var(--spectrum-purple-1200-rgb));--spectrum-purple-1300-rgb:75,0,144;--spectrum-purple-1300:rgba(var(--spectrum-purple-1300-rgb));--spectrum-purple-1400-rgb:59,0,111;--spectrum-purple-1400:rgba(var(--spectrum-purple-1400-rgb));--spectrum-purple-1500-rgb:44,0,84;--spectrum-purple-1500:rgba(var(--spectrum-purple-1500-rgb));--spectrum-purple-1600-rgb:23,0,45;--spectrum-purple-1600:rgba(var(--spectrum-purple-1600-rgb));--spectrum-fuchsia-100-rgb:254,246,255;--spectrum-fuchsia-100:rgba(var(--spectrum-fuchsia-100-rgb));--spectrum-fuchsia-200-rgb:253,233,255;--spectrum-fuchsia-200:rgba(var(--spectrum-fuchsia-200-rgb));--spectrum-fuchsia-300-rgb:250,211,255;--spectrum-fuchsia-300:rgba(var(--spectrum-fuchsia-300-rgb));--spectrum-fuchsia-400-rgb:247,181,255;--spectrum-fuchsia-400:rgba(var(--spectrum-fuchsia-400-rgb));--spectrum-fuchsia-500-rgb:243,147,255;--spectrum-fuchsia-500:rgba(var(--spectrum-fuchsia-500-rgb));--spectrum-fuchsia-600-rgb:236,105,255;--spectrum-fuchsia-600:rgba(var(--spectrum-fuchsia-600-rgb));--spectrum-fuchsia-700-rgb:223,77,245;--spectrum-fuchsia-700:rgba(var(--spectrum-fuchsia-700-rgb));--spectrum-fuchsia-800-rgb:200,68,220;--spectrum-fuchsia-800:rgba(var(--spectrum-fuchsia-800-rgb));--spectrum-fuchsia-900-rgb:181,57,200;--spectrum-fuchsia-900:rgba(var(--spectrum-fuchsia-900-rgb));--spectrum-fuchsia-1000-rgb:156,40,175;--spectrum-fuchsia-1000:rgba(var(--spectrum-fuchsia-1000-rgb));--spectrum-fuchsia-1100-rgb:135,27,154;--spectrum-fuchsia-1100:rgba(var(--spectrum-fuchsia-1100-rgb));--spectrum-fuchsia-1200-rgb:113,15,131;--spectrum-fuchsia-1200:rgba(var(--spectrum-fuchsia-1200-rgb));--spectrum-fuchsia-1300-rgb:92,4,109;--spectrum-fuchsia-1300:rgba(var(--spectrum-fuchsia-1300-rgb));--spectrum-fuchsia-1400-rgb:72,0,88;--spectrum-fuchsia-1400:rgba(var(--spectrum-fuchsia-1400-rgb));--spectrum-fuchsia-1500-rgb:54,0,66;--spectrum-fuchsia-1500:rgba(var(--spectrum-fuchsia-1500-rgb));--spectrum-fuchsia-1600-rgb:29,0,35;--spectrum-fuchsia-1600:rgba(var(--spectrum-fuchsia-1600-rgb));--spectrum-magenta-100-rgb:255,245,248;--spectrum-magenta-100:rgba(var(--spectrum-magenta-100-rgb));--spectrum-magenta-200-rgb:255,232,240;--spectrum-magenta-200:rgba(var(--spectrum-magenta-200-rgb));--spectrum-magenta-300-rgb:255,213,227;--spectrum-magenta-300:rgba(var(--spectrum-magenta-300-rgb));--spectrum-magenta-400-rgb:255,185,208;--spectrum-magenta-400:rgba(var(--spectrum-magenta-400-rgb));--spectrum-magenta-500-rgb:255,152,187;--spectrum-magenta-500:rgba(var(--spectrum-magenta-500-rgb));--spectrum-magenta-600-rgb:255,112,159;--spectrum-magenta-600:rgba(var(--spectrum-magenta-600-rgb));--spectrum-magenta-700-rgb:255,72,133;--spectrum-magenta-700:rgba(var(--spectrum-magenta-700-rgb));--spectrum-magenta-800-rgb:240,45,110;--spectrum-magenta-800:rgba(var(--spectrum-magenta-800-rgb));--spectrum-magenta-900-rgb:217,35,97;--spectrum-magenta-900:rgba(var(--spectrum-magenta-900-rgb));--spectrum-magenta-1000-rgb:186,22,80;--spectrum-magenta-1000:rgba(var(--spectrum-magenta-1000-rgb));--spectrum-magenta-1100-rgb:163,5,62;--spectrum-magenta-1100:rgba(var(--spectrum-magenta-1100-rgb));--spectrum-magenta-1200-rgb:136,0,51;--spectrum-magenta-1200:rgba(var(--spectrum-magenta-1200-rgb));--spectrum-magenta-1300-rgb:111,0,40;--spectrum-magenta-1300:rgba(var(--spectrum-magenta-1300-rgb));--spectrum-magenta-1400-rgb:86,0,30;--spectrum-magenta-1400:rgba(var(--spectrum-magenta-1400-rgb));--spectrum-magenta-1500-rgb:64,0,22;--spectrum-magenta-1500:rgba(var(--spectrum-magenta-1500-rgb));--spectrum-magenta-1600-rgb:35,0,12;--spectrum-magenta-1600:rgba(var(--spectrum-magenta-1600-rgb));--spectrum-pink-100-rgb:255,246,252;--spectrum-pink-100:rgba(var(--spectrum-pink-100-rgb));--spectrum-pink-200-rgb:255,232,247;--spectrum-pink-200:rgba(var(--spectrum-pink-200-rgb));--spectrum-pink-300-rgb:255,211,240;--spectrum-pink-300:rgba(var(--spectrum-pink-300-rgb));--spectrum-pink-400-rgb:255,181,230;--spectrum-pink-400:rgba(var(--spectrum-pink-400-rgb));--spectrum-pink-500-rgb:255,148,219;--spectrum-pink-500:rgba(var(--spectrum-pink-500-rgb));--spectrum-pink-600-rgb:255,103,204;--spectrum-pink-600:rgba(var(--spectrum-pink-600-rgb));--spectrum-pink-700-rgb:242,76,184;--spectrum-pink-700:rgba(var(--spectrum-pink-700-rgb));--spectrum-pink-800-rgb:228,52,163;--spectrum-pink-800:rgba(var(--spectrum-pink-800-rgb));--spectrum-pink-900-rgb:206,42,146;--spectrum-pink-900:rgba(var(--spectrum-pink-900-rgb));--spectrum-pink-1000-rgb:176,31,123;--spectrum-pink-1000:rgba(var(--spectrum-pink-1000-rgb));--spectrum-pink-1100-rgb:152,22,104;--spectrum-pink-1100:rgba(var(--spectrum-pink-1100-rgb));--spectrum-pink-1200-rgb:128,12,85;--spectrum-pink-1200:rgba(var(--spectrum-pink-1200-rgb));--spectrum-pink-1300-rgb:105,3,68;--spectrum-pink-1300:rgba(var(--spectrum-pink-1300-rgb));--spectrum-pink-1400-rgb:83,0,53;--spectrum-pink-1400:rgba(var(--spectrum-pink-1400-rgb));--spectrum-pink-1500-rgb:62,0,39;--spectrum-pink-1500:rgba(var(--spectrum-pink-1500-rgb));--spectrum-pink-1600-rgb:33,0,21;--spectrum-pink-1600:rgba(var(--spectrum-pink-1600-rgb));--spectrum-turquoise-100-rgb:238,251,251;--spectrum-turquoise-100:rgba(var(--spectrum-turquoise-100-rgb));--spectrum-turquoise-200-rgb:209,245,245;--spectrum-turquoise-200:rgba(var(--spectrum-turquoise-200-rgb));--spectrum-turquoise-300-rgb:169,236,237;--spectrum-turquoise-300:rgba(var(--spectrum-turquoise-300-rgb));--spectrum-turquoise-400-rgb:111,221,228;--spectrum-turquoise-400:rgba(var(--spectrum-turquoise-400-rgb));--spectrum-turquoise-500-rgb:39,202,216;--spectrum-turquoise-500:rgba(var(--spectrum-turquoise-500-rgb));--spectrum-turquoise-600-rgb:15,177,192;--spectrum-turquoise-600:rgba(var(--spectrum-turquoise-600-rgb));--spectrum-turquoise-700-rgb:12,158,171;--spectrum-turquoise-700:rgba(var(--spectrum-turquoise-700-rgb));--spectrum-turquoise-800-rgb:10,141,153;--spectrum-turquoise-800:rgba(var(--spectrum-turquoise-800-rgb));--spectrum-turquoise-900-rgb:8,126,137;--spectrum-turquoise-900:rgba(var(--spectrum-turquoise-900-rgb));--spectrum-turquoise-1000-rgb:5,107,116;--spectrum-turquoise-1000:rgba(var(--spectrum-turquoise-1000-rgb));--spectrum-turquoise-1100-rgb:3,90,98;--spectrum-turquoise-1100:rgba(var(--spectrum-turquoise-1100-rgb));--spectrum-turquoise-1200-rgb:1,74,81;--spectrum-turquoise-1200:rgba(var(--spectrum-turquoise-1200-rgb));--spectrum-turquoise-1300-rgb:0,59,65;--spectrum-turquoise-1300:rgba(var(--spectrum-turquoise-1300-rgb));--spectrum-turquoise-1400-rgb:0,44,49;--spectrum-turquoise-1400:rgba(var(--spectrum-turquoise-1400-rgb));--spectrum-turquoise-1500-rgb:0,32,35;--spectrum-turquoise-1500:rgba(var(--spectrum-turquoise-1500-rgb));--spectrum-turquoise-1600-rgb:0,15,17;--spectrum-turquoise-1600:rgba(var(--spectrum-turquoise-1600-rgb));--spectrum-brown-100-rgb:252,247,242;--spectrum-brown-100:rgba(var(--spectrum-brown-100-rgb));--spectrum-brown-200-rgb:247,238,225;--spectrum-brown-200:rgba(var(--spectrum-brown-200-rgb));--spectrum-brown-300-rgb:239,221,195;--spectrum-brown-300:rgba(var(--spectrum-brown-300-rgb));--spectrum-brown-400-rgb:229,200,157;--spectrum-brown-400:rgba(var(--spectrum-brown-400-rgb));--spectrum-brown-500-rgb:214,177,123;--spectrum-brown-500:rgba(var(--spectrum-brown-500-rgb));--spectrum-brown-600-rgb:190,155,104;--spectrum-brown-600:rgba(var(--spectrum-brown-600-rgb));--spectrum-brown-700-rgb:171,138,90;--spectrum-brown-700:rgba(var(--spectrum-brown-700-rgb));--spectrum-brown-800-rgb:154,123,77;--spectrum-brown-800:rgba(var(--spectrum-brown-800-rgb));--spectrum-brown-900-rgb:139,109,66;--spectrum-brown-900:rgba(var(--spectrum-brown-900-rgb));--spectrum-brown-1000-rgb:119,91,50;--spectrum-brown-1000:rgba(var(--spectrum-brown-1000-rgb));--spectrum-brown-1100-rgb:103,76,35;--spectrum-brown-1100:rgba(var(--spectrum-brown-1100-rgb));--spectrum-brown-1200-rgb:88,61,21;--spectrum-brown-1200:rgba(var(--spectrum-brown-1200-rgb));--spectrum-brown-1300-rgb:70,49,17;--spectrum-brown-1300:rgba(var(--spectrum-brown-1300-rgb));--spectrum-brown-1400-rgb:52,37,13;--spectrum-brown-1400:rgba(var(--spectrum-brown-1400-rgb));--spectrum-brown-1500-rgb:38,26,9;--spectrum-brown-1500:rgba(var(--spectrum-brown-1500-rgb));--spectrum-brown-1600-rgb:16,12,4;--spectrum-brown-1600:rgba(var(--spectrum-brown-1600-rgb));--spectrum-silver-100-rgb:247,247,247;--spectrum-silver-100:rgba(var(--spectrum-silver-100-rgb));--spectrum-silver-200-rgb:239,239,239;--spectrum-silver-200:rgba(var(--spectrum-silver-200-rgb));--spectrum-silver-300-rgb:223,223,223;--spectrum-silver-300:rgba(var(--spectrum-silver-300-rgb));--spectrum-silver-400-rgb:204,204,204;--spectrum-silver-400:rgba(var(--spectrum-silver-400-rgb));--spectrum-silver-500-rgb:183,183,183;--spectrum-silver-500:rgba(var(--spectrum-silver-500-rgb));--spectrum-silver-600-rgb:160,160,160;--spectrum-silver-600:rgba(var(--spectrum-silver-600-rgb));--spectrum-silver-700-rgb:143,143,143;--spectrum-silver-700:rgba(var(--spectrum-silver-700-rgb));--spectrum-silver-800-rgb:128,128,128;--spectrum-silver-800:rgba(var(--spectrum-silver-800-rgb));--spectrum-silver-900-rgb:114,114,114;--spectrum-silver-900:rgba(var(--spectrum-silver-900-rgb));--spectrum-silver-1000-rgb:96,96,96;--spectrum-silver-1000:rgba(var(--spectrum-silver-1000-rgb));--spectrum-silver-1100-rgb:81,81,81;--spectrum-silver-1100:rgba(var(--spectrum-silver-1100-rgb));--spectrum-silver-1200-rgb:66,66,66;--spectrum-silver-1200:rgba(var(--spectrum-silver-1200-rgb));--spectrum-silver-1300-rgb:52,52,52;--spectrum-silver-1300:rgba(var(--spectrum-silver-1300-rgb));--spectrum-silver-1400-rgb:39,39,39;--spectrum-silver-1400:rgba(var(--spectrum-silver-1400-rgb));--spectrum-silver-1500-rgb:28,28,28;--spectrum-silver-1500:rgba(var(--spectrum-silver-1500-rgb));--spectrum-silver-1600-rgb:12,12,12;--spectrum-silver-1600:rgba(var(--spectrum-silver-1600-rgb));--spectrum-cinnamon-100-rgb:253,247,243;--spectrum-cinnamon-100:rgba(var(--spectrum-cinnamon-100-rgb));--spectrum-cinnamon-200-rgb:249,236,229;--spectrum-cinnamon-200:rgba(var(--spectrum-cinnamon-200-rgb));--spectrum-cinnamon-300-rgb:244,218,203;--spectrum-cinnamon-300:rgba(var(--spectrum-cinnamon-300-rgb));--spectrum-cinnamon-400-rgb:237,196,172;--spectrum-cinnamon-400:rgba(var(--spectrum-cinnamon-400-rgb));--spectrum-cinnamon-500-rgb:229,170,136;--spectrum-cinnamon-500:rgba(var(--spectrum-cinnamon-500-rgb));--spectrum-cinnamon-600-rgb:212,145,108;--spectrum-cinnamon-600:rgba(var(--spectrum-cinnamon-600-rgb));--spectrum-cinnamon-700-rgb:198,126,88;--spectrum-cinnamon-700:rgba(var(--spectrum-cinnamon-700-rgb));--spectrum-cinnamon-800-rgb:184,109,70;--spectrum-cinnamon-800:rgba(var(--spectrum-cinnamon-800-rgb));--spectrum-cinnamon-900-rgb:170,94,56;--spectrum-cinnamon-900:rgba(var(--spectrum-cinnamon-900-rgb));--spectrum-cinnamon-1000-rgb:147,77,43;--spectrum-cinnamon-1000:rgba(var(--spectrum-cinnamon-1000-rgb));--spectrum-cinnamon-1100-rgb:128,62,32;--spectrum-cinnamon-1100:rgba(var(--spectrum-cinnamon-1100-rgb));--spectrum-cinnamon-1200-rgb:110,48,21;--spectrum-cinnamon-1200:rgba(var(--spectrum-cinnamon-1200-rgb));--spectrum-cinnamon-1300-rgb:92,35,11;--spectrum-cinnamon-1300:rgba(var(--spectrum-cinnamon-1300-rgb));--spectrum-cinnamon-1400-rgb:72,25,6;--spectrum-cinnamon-1400:rgba(var(--spectrum-cinnamon-1400-rgb));--spectrum-cinnamon-1500-rgb:52,18,4;--spectrum-cinnamon-1500:rgba(var(--spectrum-cinnamon-1500-rgb));--spectrum-cinnamon-1600-rgb:24,8,2;--spectrum-cinnamon-1600:rgba(var(--spectrum-cinnamon-1600-rgb));--spectrum-icon-color-blue-primary-default:var(--spectrum-blue-900);--spectrum-icon-color-green-primary-default:var(--spectrum-green-900);--spectrum-icon-color-red-primary-default:var(--spectrum-red-900);--spectrum-icon-color-yellow-primary-default:var(--spectrum-yellow-400);--spectrum-negative-subdued-background-color-default:var(--spectrum-negative-subtle-background-color-default);--spectrum-accent-subtle-background-color-default:var(--spectrum-accent-color-200);--spectrum-informative-subtle-background-color-default:var(--spectrum-informative-color-200);--spectrum-positive-subtle-background-color-default:var(--spectrum-positive-color-200);--spectrum-notice-subtle-background-color-default:var(--spectrum-notice-color-200);--spectrum-negative-subtle-background-color-default:var(--spectrum-negative-color-200);--color-scheme:light;--spectrum-assetcard-border-color-selected:var(--spectrum-blue-900);--spectrum-assetcard-border-color-selected-hover:var(--spectrum-blue-900);--spectrum-assetcard-border-color-selected-down:var(--spectrum-blue-1000);--spectrum-assetcard-selectionindicator-background-color-ordered:var(--spectrum-blue-900);--spectrum-assestcard-focus-indicator-color:var(--spectrum-blue-800);--spectrum-assetlist-item-background-color-selected-hover:rgba(var(--spectrum-blue-900-rgb),.2);--spectrum-assetlist-item-background-color-selected:rgba(var(--spectrum-blue-900-rgb),.1);--spectrum-assetlist-border-color-key-focus:var(--spectrum-blue-800);--spectrum-badge-label-icon-color-primary:var(--spectrum-white);--spectrum-calendar-day-background-color-selected:rgba(var(--spectrum-blue-900-rgb),.1);--spectrum-calendar-day-background-color-hover:rgba(var(--spectrum-black-rgb),.06);--spectrum-calendar-day-today-background-color-selected-hover:rgba(var(--spectrum-blue-900-rgb),.2);--spectrum-calendar-day-background-color-selected-hover:rgba(var(--spectrum-blue-900-rgb),.2);--spectrum-calendar-day-background-color-down:var(--spectrum-transparent-black-200);--spectrum-calendar-day-background-color-cap-selected:rgba(var(--spectrum-blue-900-rgb),.2);--spectrum-calendar-day-background-color-key-focus:rgba(var(--spectrum-black-rgb),.06);--spectrum-calendar-day-border-color-key-focus:var(--spectrum-blue-800);--spectrum-card-selected-background-color-rgb:var(--spectrum-blue-900-rgb);--spectrum-coach-indicator-ring-default-color:var(--spectrum-blue-800);--spectrum-drop-zone-background-color-rgb:var(--spectrum-blue-800-rgb);--spectrum-dropindicator-color:var(--spectrum-blue-800);--spectrum-logic-button-and-background-color:var(--spectrum-blue-900);--spectrum-logic-button-and-border-color:var(--spectrum-blue-900);--spectrum-logic-button-and-background-color-hover:var(--spectrum-blue-1100);--spectrum-logic-button-and-border-color-hover:var(--spectrum-blue-1100);--spectrum-logic-button-or-background-color:var(--spectrum-magenta-900);--spectrum-logic-button-or-border-color:var(--spectrum-magenta-900);--spectrum-logic-button-or-background-color-hover:var(--spectrum-magenta-1100);--spectrum-logic-button-or-border-color-hover:var(--spectrum-magenta-1100);--spectrum-steplist-current-marker-color-key-focus:var(--spectrum-blue-800);--spectrum-swatch-border-color-rgb:0,0,0;--spectrum-swatch-border-color-opacity:.51;--spectrum-swatch-border-color:rgba(var(--spectrum-swatch-border-color-rgb),var(--spectrum-swatch-border-color-opacity));--spectrum-swatch-border-color-light-rgb:0,0,0;--spectrum-swatch-border-color-light-opacity:.2;--spectrum-swatch-border-color-light:rgba(var(--spectrum-swatch-border-color-light-rgb),var(--spectrum-swatch-border-color-light-opacity));--spectrum-treeview-item-background-color-quiet-selected:rgba(var(--spectrum-gray-900-rgb),.06);--spectrum-treeview-item-background-color-selected:rgba(var(--spectrum-blue-900-rgb),.1)}
`, Su = st`
    :root,:host{--spectrum-global-animation-linear:cubic-bezier(0,0,1,1);--spectrum-global-animation-duration-0:0s;--spectrum-global-animation-duration-100:.13s;--spectrum-global-animation-duration-200:.16s;--spectrum-global-animation-duration-300:.19s;--spectrum-global-animation-duration-400:.22s;--spectrum-global-animation-duration-500:.25s;--spectrum-global-animation-duration-600:.3s;--spectrum-global-animation-duration-700:.35s;--spectrum-global-animation-duration-800:.4s;--spectrum-global-animation-duration-900:.45s;--spectrum-global-animation-duration-1000:.5s;--spectrum-global-animation-duration-2000:1s;--spectrum-global-animation-duration-4000:2s;--spectrum-global-animation-ease-in-out:cubic-bezier(.45,0,.4,1);--spectrum-global-animation-ease-in:cubic-bezier(.5,0,1,1);--spectrum-global-animation-ease-out:cubic-bezier(0,0,.4,1);--spectrum-global-animation-ease-linear:cubic-bezier(0,0,1,1);--spectrum-global-color-status:Verified;--spectrum-global-color-version:5.1;--spectrum-global-color-static-black-rgb:0,0,0;--spectrum-global-color-static-black:rgb(var(--spectrum-global-color-static-black-rgb));--spectrum-global-color-static-white-rgb:255,255,255;--spectrum-global-color-static-white:rgb(var(--spectrum-global-color-static-white-rgb));--spectrum-global-color-static-blue-rgb:0,87,191;--spectrum-global-color-static-blue:rgb(var(--spectrum-global-color-static-blue-rgb));--spectrum-global-color-static-gray-50-rgb:255,255,255;--spectrum-global-color-static-gray-50:rgb(var(--spectrum-global-color-static-gray-50-rgb));--spectrum-global-color-static-gray-75-rgb:255,255,255;--spectrum-global-color-static-gray-75:rgb(var(--spectrum-global-color-static-gray-75-rgb));--spectrum-global-color-static-gray-100-rgb:255,255,255;--spectrum-global-color-static-gray-100:rgb(var(--spectrum-global-color-static-gray-100-rgb));--spectrum-global-color-static-gray-200-rgb:235,235,235;--spectrum-global-color-static-gray-200:rgb(var(--spectrum-global-color-static-gray-200-rgb));--spectrum-global-color-static-gray-300-rgb:217,217,217;--spectrum-global-color-static-gray-300:rgb(var(--spectrum-global-color-static-gray-300-rgb));--spectrum-global-color-static-gray-400-rgb:179,179,179;--spectrum-global-color-static-gray-400:rgb(var(--spectrum-global-color-static-gray-400-rgb));--spectrum-global-color-static-gray-500-rgb:146,146,146;--spectrum-global-color-static-gray-500:rgb(var(--spectrum-global-color-static-gray-500-rgb));--spectrum-global-color-static-gray-600-rgb:110,110,110;--spectrum-global-color-static-gray-600:rgb(var(--spectrum-global-color-static-gray-600-rgb));--spectrum-global-color-static-gray-700-rgb:71,71,71;--spectrum-global-color-static-gray-700:rgb(var(--spectrum-global-color-static-gray-700-rgb));--spectrum-global-color-static-gray-800-rgb:34,34,34;--spectrum-global-color-static-gray-800:rgb(var(--spectrum-global-color-static-gray-800-rgb));--spectrum-global-color-static-gray-900-rgb:0,0,0;--spectrum-global-color-static-gray-900:rgb(var(--spectrum-global-color-static-gray-900-rgb));--spectrum-global-color-static-red-400-rgb:237,64,48;--spectrum-global-color-static-red-400:rgb(var(--spectrum-global-color-static-red-400-rgb));--spectrum-global-color-static-red-500-rgb:217,28,21;--spectrum-global-color-static-red-500:rgb(var(--spectrum-global-color-static-red-500-rgb));--spectrum-global-color-static-red-600-rgb:187,2,2;--spectrum-global-color-static-red-600:rgb(var(--spectrum-global-color-static-red-600-rgb));--spectrum-global-color-static-red-700-rgb:154,0,0;--spectrum-global-color-static-red-700:rgb(var(--spectrum-global-color-static-red-700-rgb));--spectrum-global-color-static-red-800-rgb:124,0,0;--spectrum-global-color-static-red-800:rgb(var(--spectrum-global-color-static-red-800-rgb));--spectrum-global-color-static-orange-400-rgb:250,139,26;--spectrum-global-color-static-orange-400:rgb(var(--spectrum-global-color-static-orange-400-rgb));--spectrum-global-color-static-orange-500-rgb:233,117,0;--spectrum-global-color-static-orange-500:rgb(var(--spectrum-global-color-static-orange-500-rgb));--spectrum-global-color-static-orange-600-rgb:209,97,0;--spectrum-global-color-static-orange-600:rgb(var(--spectrum-global-color-static-orange-600-rgb));--spectrum-global-color-static-orange-700-rgb:182,80,0;--spectrum-global-color-static-orange-700:rgb(var(--spectrum-global-color-static-orange-700-rgb));--spectrum-global-color-static-orange-800-rgb:155,64,0;--spectrum-global-color-static-orange-800:rgb(var(--spectrum-global-color-static-orange-800-rgb));--spectrum-global-color-static-yellow-200-rgb:250,237,123;--spectrum-global-color-static-yellow-200:rgb(var(--spectrum-global-color-static-yellow-200-rgb));--spectrum-global-color-static-yellow-300-rgb:250,224,23;--spectrum-global-color-static-yellow-300:rgb(var(--spectrum-global-color-static-yellow-300-rgb));--spectrum-global-color-static-yellow-400-rgb:238,205,0;--spectrum-global-color-static-yellow-400:rgb(var(--spectrum-global-color-static-yellow-400-rgb));--spectrum-global-color-static-yellow-500-rgb:221,185,0;--spectrum-global-color-static-yellow-500:rgb(var(--spectrum-global-color-static-yellow-500-rgb));--spectrum-global-color-static-yellow-600-rgb:201,164,0;--spectrum-global-color-static-yellow-600:rgb(var(--spectrum-global-color-static-yellow-600-rgb));--spectrum-global-color-static-yellow-700-rgb:181,144,0;--spectrum-global-color-static-yellow-700:rgb(var(--spectrum-global-color-static-yellow-700-rgb));--spectrum-global-color-static-yellow-800-rgb:160,125,0;--spectrum-global-color-static-yellow-800:rgb(var(--spectrum-global-color-static-yellow-800-rgb));--spectrum-global-color-static-chartreuse-300-rgb:176,222,27;--spectrum-global-color-static-chartreuse-300:rgb(var(--spectrum-global-color-static-chartreuse-300-rgb));--spectrum-global-color-static-chartreuse-400-rgb:157,203,13;--spectrum-global-color-static-chartreuse-400:rgb(var(--spectrum-global-color-static-chartreuse-400-rgb));--spectrum-global-color-static-chartreuse-500-rgb:139,182,4;--spectrum-global-color-static-chartreuse-500:rgb(var(--spectrum-global-color-static-chartreuse-500-rgb));--spectrum-global-color-static-chartreuse-600-rgb:122,162,0;--spectrum-global-color-static-chartreuse-600:rgb(var(--spectrum-global-color-static-chartreuse-600-rgb));--spectrum-global-color-static-chartreuse-700-rgb:106,141,0;--spectrum-global-color-static-chartreuse-700:rgb(var(--spectrum-global-color-static-chartreuse-700-rgb));--spectrum-global-color-static-chartreuse-800-rgb:90,120,0;--spectrum-global-color-static-chartreuse-800:rgb(var(--spectrum-global-color-static-chartreuse-800-rgb));--spectrum-global-color-static-celery-200-rgb:126,229,114;--spectrum-global-color-static-celery-200:rgb(var(--spectrum-global-color-static-celery-200-rgb));--spectrum-global-color-static-celery-300-rgb:87,212,86;--spectrum-global-color-static-celery-300:rgb(var(--spectrum-global-color-static-celery-300-rgb));--spectrum-global-color-static-celery-400-rgb:48,193,61;--spectrum-global-color-static-celery-400:rgb(var(--spectrum-global-color-static-celery-400-rgb));--spectrum-global-color-static-celery-500-rgb:15,172,38;--spectrum-global-color-static-celery-500:rgb(var(--spectrum-global-color-static-celery-500-rgb));--spectrum-global-color-static-celery-600-rgb:0,150,20;--spectrum-global-color-static-celery-600:rgb(var(--spectrum-global-color-static-celery-600-rgb));--spectrum-global-color-static-celery-700-rgb:0,128,15;--spectrum-global-color-static-celery-700:rgb(var(--spectrum-global-color-static-celery-700-rgb));--spectrum-global-color-static-celery-800-rgb:0,107,15;--spectrum-global-color-static-celery-800:rgb(var(--spectrum-global-color-static-celery-800-rgb));--spectrum-global-color-static-green-400-rgb:29,169,115;--spectrum-global-color-static-green-400:rgb(var(--spectrum-global-color-static-green-400-rgb));--spectrum-global-color-static-green-500-rgb:0,148,97;--spectrum-global-color-static-green-500:rgb(var(--spectrum-global-color-static-green-500-rgb));--spectrum-global-color-static-green-600-rgb:0,126,80;--spectrum-global-color-static-green-600:rgb(var(--spectrum-global-color-static-green-600-rgb));--spectrum-global-color-static-green-700-rgb:0,105,65;--spectrum-global-color-static-green-700:rgb(var(--spectrum-global-color-static-green-700-rgb));--spectrum-global-color-static-green-800-rgb:0,86,53;--spectrum-global-color-static-green-800:rgb(var(--spectrum-global-color-static-green-800-rgb));--spectrum-global-color-static-seafoam-200-rgb:75,206,199;--spectrum-global-color-static-seafoam-200:rgb(var(--spectrum-global-color-static-seafoam-200-rgb));--spectrum-global-color-static-seafoam-300-rgb:32,187,180;--spectrum-global-color-static-seafoam-300:rgb(var(--spectrum-global-color-static-seafoam-300-rgb));--spectrum-global-color-static-seafoam-400-rgb:0,166,160;--spectrum-global-color-static-seafoam-400:rgb(var(--spectrum-global-color-static-seafoam-400-rgb));--spectrum-global-color-static-seafoam-500-rgb:0,145,139;--spectrum-global-color-static-seafoam-500:rgb(var(--spectrum-global-color-static-seafoam-500-rgb));--spectrum-global-color-static-seafoam-600-rgb:0,124,118;--spectrum-global-color-static-seafoam-600:rgb(var(--spectrum-global-color-static-seafoam-600-rgb));--spectrum-global-color-static-seafoam-700-rgb:0,103,99;--spectrum-global-color-static-seafoam-700:rgb(var(--spectrum-global-color-static-seafoam-700-rgb));--spectrum-global-color-static-seafoam-800-rgb:10,83,80;--spectrum-global-color-static-seafoam-800:rgb(var(--spectrum-global-color-static-seafoam-800-rgb));--spectrum-global-color-static-blue-200-rgb:130,193,251;--spectrum-global-color-static-blue-200:rgb(var(--spectrum-global-color-static-blue-200-rgb));--spectrum-global-color-static-blue-300-rgb:98,173,247;--spectrum-global-color-static-blue-300:rgb(var(--spectrum-global-color-static-blue-300-rgb));--spectrum-global-color-static-blue-400-rgb:66,151,244;--spectrum-global-color-static-blue-400:rgb(var(--spectrum-global-color-static-blue-400-rgb));--spectrum-global-color-static-blue-500-rgb:27,127,245;--spectrum-global-color-static-blue-500:rgb(var(--spectrum-global-color-static-blue-500-rgb));--spectrum-global-color-static-blue-600-rgb:4,105,227;--spectrum-global-color-static-blue-600:rgb(var(--spectrum-global-color-static-blue-600-rgb));--spectrum-global-color-static-blue-700-rgb:0,87,190;--spectrum-global-color-static-blue-700:rgb(var(--spectrum-global-color-static-blue-700-rgb));--spectrum-global-color-static-blue-800-rgb:0,72,153;--spectrum-global-color-static-blue-800:rgb(var(--spectrum-global-color-static-blue-800-rgb));--spectrum-global-color-static-indigo-200-rgb:178,181,255;--spectrum-global-color-static-indigo-200:rgb(var(--spectrum-global-color-static-indigo-200-rgb));--spectrum-global-color-static-indigo-300-rgb:155,159,255;--spectrum-global-color-static-indigo-300:rgb(var(--spectrum-global-color-static-indigo-300-rgb));--spectrum-global-color-static-indigo-400-rgb:132,137,253;--spectrum-global-color-static-indigo-400:rgb(var(--spectrum-global-color-static-indigo-400-rgb));--spectrum-global-color-static-indigo-500-rgb:109,115,246;--spectrum-global-color-static-indigo-500:rgb(var(--spectrum-global-color-static-indigo-500-rgb));--spectrum-global-color-static-indigo-600-rgb:87,93,232;--spectrum-global-color-static-indigo-600:rgb(var(--spectrum-global-color-static-indigo-600-rgb));--spectrum-global-color-static-indigo-700-rgb:68,74,208;--spectrum-global-color-static-indigo-700:rgb(var(--spectrum-global-color-static-indigo-700-rgb));--spectrum-global-color-static-indigo-800-rgb:68,74,208;--spectrum-global-color-static-indigo-800:rgb(var(--spectrum-global-color-static-indigo-800-rgb));--spectrum-global-color-static-purple-400-rgb:178,121,250;--spectrum-global-color-static-purple-400:rgb(var(--spectrum-global-color-static-purple-400-rgb));--spectrum-global-color-static-purple-500-rgb:161,93,246;--spectrum-global-color-static-purple-500:rgb(var(--spectrum-global-color-static-purple-500-rgb));--spectrum-global-color-static-purple-600-rgb:142,67,234;--spectrum-global-color-static-purple-600:rgb(var(--spectrum-global-color-static-purple-600-rgb));--spectrum-global-color-static-purple-700-rgb:120,43,216;--spectrum-global-color-static-purple-700:rgb(var(--spectrum-global-color-static-purple-700-rgb));--spectrum-global-color-static-purple-800-rgb:98,23,190;--spectrum-global-color-static-purple-800:rgb(var(--spectrum-global-color-static-purple-800-rgb));--spectrum-global-color-static-fuchsia-400-rgb:228,93,230;--spectrum-global-color-static-fuchsia-400:rgb(var(--spectrum-global-color-static-fuchsia-400-rgb));--spectrum-global-color-static-fuchsia-500-rgb:211,63,212;--spectrum-global-color-static-fuchsia-500:rgb(var(--spectrum-global-color-static-fuchsia-500-rgb));--spectrum-global-color-static-fuchsia-600-rgb:188,39,187;--spectrum-global-color-static-fuchsia-600:rgb(var(--spectrum-global-color-static-fuchsia-600-rgb));--spectrum-global-color-static-fuchsia-700-rgb:163,10,163;--spectrum-global-color-static-fuchsia-700:rgb(var(--spectrum-global-color-static-fuchsia-700-rgb));--spectrum-global-color-static-fuchsia-800-rgb:135,0,136;--spectrum-global-color-static-fuchsia-800:rgb(var(--spectrum-global-color-static-fuchsia-800-rgb));--spectrum-global-color-static-magenta-200-rgb:253,127,175;--spectrum-global-color-static-magenta-200:rgb(var(--spectrum-global-color-static-magenta-200-rgb));--spectrum-global-color-static-magenta-300-rgb:242,98,157;--spectrum-global-color-static-magenta-300:rgb(var(--spectrum-global-color-static-magenta-300-rgb));--spectrum-global-color-static-magenta-400-rgb:226,68,135;--spectrum-global-color-static-magenta-400:rgb(var(--spectrum-global-color-static-magenta-400-rgb));--spectrum-global-color-static-magenta-500-rgb:205,40,111;--spectrum-global-color-static-magenta-500:rgb(var(--spectrum-global-color-static-magenta-500-rgb));--spectrum-global-color-static-magenta-600-rgb:179,15,89;--spectrum-global-color-static-magenta-600:rgb(var(--spectrum-global-color-static-magenta-600-rgb));--spectrum-global-color-static-magenta-700-rgb:149,0,72;--spectrum-global-color-static-magenta-700:rgb(var(--spectrum-global-color-static-magenta-700-rgb));--spectrum-global-color-static-magenta-800-rgb:119,0,58;--spectrum-global-color-static-magenta-800:rgb(var(--spectrum-global-color-static-magenta-800-rgb));--spectrum-global-color-static-transparent-white-200:#ffffff1a;--spectrum-global-color-static-transparent-white-300:#ffffff40;--spectrum-global-color-static-transparent-white-400:#fff6;--spectrum-global-color-static-transparent-white-500:#ffffff8c;--spectrum-global-color-static-transparent-white-600:#ffffffb3;--spectrum-global-color-static-transparent-white-700:#fffc;--spectrum-global-color-static-transparent-white-800:#ffffffe6;--spectrum-global-color-static-transparent-white-900-rgb:255,255,255;--spectrum-global-color-static-transparent-white-900:rgb(var(--spectrum-global-color-static-transparent-white-900-rgb));--spectrum-global-color-static-transparent-black-200:#0000001a;--spectrum-global-color-static-transparent-black-300:#00000040;--spectrum-global-color-static-transparent-black-400:#0006;--spectrum-global-color-static-transparent-black-500:#0000008c;--spectrum-global-color-static-transparent-black-600:#000000b3;--spectrum-global-color-static-transparent-black-700:#000c;--spectrum-global-color-static-transparent-black-800:#000000e6;--spectrum-global-color-static-transparent-black-900-rgb:0,0,0;--spectrum-global-color-static-transparent-black-900:rgb(var(--spectrum-global-color-static-transparent-black-900-rgb));--spectrum-global-color-sequential-cerulean:#e9fff1,#c8f1e4,#a5e3d7,#82d5ca,#68c5c1,#54b4ba,#3fa2b2,#2991ac,#2280a2,#1f6d98,#1d5c8d,#1a4b83,#1a3979,#1a266f,#191264,#180057;--spectrum-global-color-sequential-forest:#ffffdf,#e2f6ba,#c4eb95,#a4e16d,#8dd366,#77c460,#5fb65a,#48a754,#36984f,#2c894d,#237a4a,#196b47,#105c45,#094d41,#033f3e,#00313a;--spectrum-global-color-sequential-rose:#fff4dd,#ffddd7,#ffc5d2,#feaecb,#fa96c4,#f57ebd,#ef64b5,#e846ad,#d238a1,#bb2e96,#a3248c,#8a1b83,#71167c,#560f74,#370b6e,#000968;--spectrum-global-color-diverging-orange-yellow-seafoam:#580000,#79260b,#9c4511,#bd651a,#dd8629,#f5ad52,#fed693,#ffffe0,#bbe4d1,#76c7be,#3ea8a6,#208288,#076769,#00494b,#002c2d;--spectrum-global-color-diverging-red-yellow-blue:#4a001e,#751232,#a52747,#c65154,#e47961,#f0a882,#fad4ac,#ffffe0,#bce2cf,#89c0c4,#579eb9,#397aa8,#1c5796,#163771,#10194d;--spectrum-global-color-diverging-red-blue:#4a001e,#731331,#9f2945,#cc415a,#e06e85,#ed9ab0,#f8c3d9,#faf0ff,#c6d0f2,#92b2de,#5d94cb,#2f74b3,#265191,#163670,#0b194c;--spectrum-semantic-negative-background-color:var(--spectrum-global-color-static-red-600);--spectrum-semantic-negative-color-default:var(--spectrum-global-color-red-500);--spectrum-semantic-negative-color-hover:var(--spectrum-global-color-red-600);--spectrum-semantic-negative-color-dark:var(--spectrum-global-color-red-600);--spectrum-semantic-negative-border-color:var(--spectrum-global-color-red-400);--spectrum-semantic-negative-icon-color:var(--spectrum-global-color-red-600);--spectrum-semantic-negative-status-color:var(--spectrum-global-color-red-400);--spectrum-semantic-negative-text-color-large:var(--spectrum-global-color-red-500);--spectrum-semantic-negative-text-color-small:var(--spectrum-global-color-red-600);--spectrum-semantic-negative-text-color-small-hover:var(--spectrum-global-color-red-700);--spectrum-semantic-negative-text-color-small-down:var(--spectrum-global-color-red-700);--spectrum-semantic-negative-text-color-small-key-focus:var(--spectrum-global-color-red-600);--spectrum-semantic-negative-color-down:var(--spectrum-global-color-red-700);--spectrum-semantic-negative-color-key-focus:var(--spectrum-global-color-red-400);--spectrum-semantic-negative-background-color-default:var(--spectrum-global-color-static-red-600);--spectrum-semantic-negative-background-color-hover:var(--spectrum-global-color-static-red-700);--spectrum-semantic-negative-background-color-down:var(--spectrum-global-color-static-red-800);--spectrum-semantic-negative-background-color-key-focus:var(--spectrum-global-color-static-red-700);--spectrum-semantic-notice-background-color:var(--spectrum-global-color-static-orange-600);--spectrum-semantic-notice-color-default:var(--spectrum-global-color-orange-500);--spectrum-semantic-notice-color-dark:var(--spectrum-global-color-orange-600);--spectrum-semantic-notice-border-color:var(--spectrum-global-color-orange-400);--spectrum-semantic-notice-icon-color:var(--spectrum-global-color-orange-600);--spectrum-semantic-notice-status-color:var(--spectrum-global-color-orange-400);--spectrum-semantic-notice-text-color-large:var(--spectrum-global-color-orange-500);--spectrum-semantic-notice-text-color-small:var(--spectrum-global-color-orange-600);--spectrum-semantic-notice-color-down:var(--spectrum-global-color-orange-700);--spectrum-semantic-notice-color-key-focus:var(--spectrum-global-color-orange-400);--spectrum-semantic-notice-background-color-default:var(--spectrum-global-color-static-orange-600);--spectrum-semantic-notice-background-color-hover:var(--spectrum-global-color-static-orange-700);--spectrum-semantic-notice-background-color-down:var(--spectrum-global-color-static-orange-800);--spectrum-semantic-notice-background-color-key-focus:var(--spectrum-global-color-static-orange-700);--spectrum-semantic-positive-background-color:var(--spectrum-global-color-static-green-600);--spectrum-semantic-positive-color-default:var(--spectrum-global-color-green-500);--spectrum-semantic-positive-color-dark:var(--spectrum-global-color-green-600);--spectrum-semantic-positive-border-color:var(--spectrum-global-color-green-400);--spectrum-semantic-positive-icon-color:var(--spectrum-global-color-green-600);--spectrum-semantic-positive-status-color:var(--spectrum-global-color-green-400);--spectrum-semantic-positive-text-color-large:var(--spectrum-global-color-green-500);--spectrum-semantic-positive-text-color-small:var(--spectrum-global-color-green-600);--spectrum-semantic-positive-color-down:var(--spectrum-global-color-green-700);--spectrum-semantic-positive-color-key-focus:var(--spectrum-global-color-green-400);--spectrum-semantic-positive-background-color-default:var(--spectrum-global-color-static-green-600);--spectrum-semantic-positive-background-color-hover:var(--spectrum-global-color-static-green-700);--spectrum-semantic-positive-background-color-down:var(--spectrum-global-color-static-green-800);--spectrum-semantic-positive-background-color-key-focus:var(--spectrum-global-color-static-green-700);--spectrum-semantic-informative-background-color:var(--spectrum-global-color-static-blue-600);--spectrum-semantic-informative-color-default:var(--spectrum-global-color-blue-500);--spectrum-semantic-informative-color-dark:var(--spectrum-global-color-blue-600);--spectrum-semantic-informative-border-color:var(--spectrum-global-color-blue-400);--spectrum-semantic-informative-icon-color:var(--spectrum-global-color-blue-600);--spectrum-semantic-informative-status-color:var(--spectrum-global-color-blue-400);--spectrum-semantic-informative-text-color-large:var(--spectrum-global-color-blue-500);--spectrum-semantic-informative-text-color-small:var(--spectrum-global-color-blue-600);--spectrum-semantic-informative-color-down:var(--spectrum-global-color-blue-700);--spectrum-semantic-informative-color-key-focus:var(--spectrum-global-color-blue-400);--spectrum-semantic-informative-background-color-default:var(--spectrum-global-color-static-blue-600);--spectrum-semantic-informative-background-color-hover:var(--spectrum-global-color-static-blue-700);--spectrum-semantic-informative-background-color-down:var(--spectrum-global-color-static-blue-800);--spectrum-semantic-informative-background-color-key-focus:var(--spectrum-global-color-static-blue-700);--spectrum-semantic-cta-background-color-default:var(--spectrum-global-color-static-blue-600);--spectrum-semantic-cta-background-color-hover:var(--spectrum-global-color-static-blue-700);--spectrum-semantic-cta-background-color-down:var(--spectrum-global-color-static-blue-800);--spectrum-semantic-cta-background-color-key-focus:var(--spectrum-global-color-static-blue-700);--spectrum-semantic-emphasized-border-color-default:var(--spectrum-global-color-blue-500);--spectrum-semantic-emphasized-border-color-hover:var(--spectrum-global-color-blue-600);--spectrum-semantic-emphasized-border-color-down:var(--spectrum-global-color-blue-700);--spectrum-semantic-emphasized-border-color-key-focus:var(--spectrum-global-color-blue-600);--spectrum-semantic-neutral-background-color-default:var(--spectrum-global-color-static-gray-700);--spectrum-semantic-neutral-background-color-hover:var(--spectrum-global-color-static-gray-800);--spectrum-semantic-neutral-background-color-down:var(--spectrum-global-color-static-gray-900);--spectrum-semantic-neutral-background-color-key-focus:var(--spectrum-global-color-static-gray-800);--spectrum-semantic-presence-color-1:var(--spectrum-global-color-static-red-500);--spectrum-semantic-presence-color-2:var(--spectrum-global-color-static-orange-400);--spectrum-semantic-presence-color-3:var(--spectrum-global-color-static-yellow-400);--spectrum-semantic-presence-color-4-rgb:75,204,162;--spectrum-semantic-presence-color-4:rgb(var(--spectrum-semantic-presence-color-4-rgb));--spectrum-semantic-presence-color-5-rgb:0,199,255;--spectrum-semantic-presence-color-5:rgb(var(--spectrum-semantic-presence-color-5-rgb));--spectrum-semantic-presence-color-6-rgb:0,140,184;--spectrum-semantic-presence-color-6:rgb(var(--spectrum-semantic-presence-color-6-rgb));--spectrum-semantic-presence-color-7-rgb:126,75,243;--spectrum-semantic-presence-color-7:rgb(var(--spectrum-semantic-presence-color-7-rgb));--spectrum-semantic-presence-color-8:var(--spectrum-global-color-static-fuchsia-600);--spectrum-global-dimension-static-percent-50:50%;--spectrum-global-dimension-static-percent-70:70%;--spectrum-global-dimension-static-percent-100:100%;--spectrum-global-dimension-static-breakpoint-xsmall:304px;--spectrum-global-dimension-static-breakpoint-small:768px;--spectrum-global-dimension-static-breakpoint-medium:1280px;--spectrum-global-dimension-static-breakpoint-large:1768px;--spectrum-global-dimension-static-breakpoint-xlarge:2160px;--spectrum-global-dimension-static-grid-columns:12;--spectrum-global-dimension-static-grid-fluid-width:100%;--spectrum-global-dimension-static-grid-fixed-max-width:1280px;--spectrum-global-dimension-static-size-0:0px;--spectrum-global-dimension-static-size-10:1px;--spectrum-global-dimension-static-size-25:2px;--spectrum-global-dimension-static-size-40:3px;--spectrum-global-dimension-static-size-50:4px;--spectrum-global-dimension-static-size-65:5px;--spectrum-global-dimension-static-size-75:6px;--spectrum-global-dimension-static-size-85:7px;--spectrum-global-dimension-static-size-100:8px;--spectrum-global-dimension-static-size-115:9px;--spectrum-global-dimension-static-size-125:10px;--spectrum-global-dimension-static-size-130:11px;--spectrum-global-dimension-static-size-150:12px;--spectrum-global-dimension-static-size-160:13px;--spectrum-global-dimension-static-size-175:14px;--spectrum-global-dimension-static-size-185:15px;--spectrum-global-dimension-static-size-200:16px;--spectrum-global-dimension-static-size-225:18px;--spectrum-global-dimension-static-size-250:20px;--spectrum-global-dimension-static-size-275:22px;--spectrum-global-dimension-static-size-300:24px;--spectrum-global-dimension-static-size-325:26px;--spectrum-global-dimension-static-size-350:28px;--spectrum-global-dimension-static-size-400:32px;--spectrum-global-dimension-static-size-450:36px;--spectrum-global-dimension-static-size-500:40px;--spectrum-global-dimension-static-size-550:44px;--spectrum-global-dimension-static-size-600:48px;--spectrum-global-dimension-static-size-700:56px;--spectrum-global-dimension-static-size-800:64px;--spectrum-global-dimension-static-size-900:72px;--spectrum-global-dimension-static-size-1000:80px;--spectrum-global-dimension-static-size-1200:96px;--spectrum-global-dimension-static-size-1700:136px;--spectrum-global-dimension-static-size-2400:192px;--spectrum-global-dimension-static-size-2500:200px;--spectrum-global-dimension-static-size-2600:208px;--spectrum-global-dimension-static-size-2800:224px;--spectrum-global-dimension-static-size-3200:256px;--spectrum-global-dimension-static-size-3400:272px;--spectrum-global-dimension-static-size-3500:280px;--spectrum-global-dimension-static-size-3600:288px;--spectrum-global-dimension-static-size-3800:304px;--spectrum-global-dimension-static-size-4600:368px;--spectrum-global-dimension-static-size-5000:400px;--spectrum-global-dimension-static-size-6000:480px;--spectrum-global-dimension-static-size-16000:1280px;--spectrum-global-dimension-static-font-size-50:11px;--spectrum-global-dimension-static-font-size-75:12px;--spectrum-global-dimension-static-font-size-100:14px;--spectrum-global-dimension-static-font-size-150:15px;--spectrum-global-dimension-static-font-size-200:16px;--spectrum-global-dimension-static-font-size-300:18px;--spectrum-global-dimension-static-font-size-400:20px;--spectrum-global-dimension-static-font-size-500:22px;--spectrum-global-dimension-static-font-size-600:25px;--spectrum-global-dimension-static-font-size-700:28px;--spectrum-global-dimension-static-font-size-800:32px;--spectrum-global-dimension-static-font-size-900:36px;--spectrum-global-dimension-static-font-size-1000:40px;--spectrum-global-font-family-base:adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-family-serif:adobe-clean-serif,"Source Serif Pro",Georgia,serif;--spectrum-global-font-family-code:"Source Code Pro",Monaco,monospace;--spectrum-global-font-weight-thin:100;--spectrum-global-font-weight-ultra-light:200;--spectrum-global-font-weight-light:300;--spectrum-global-font-weight-regular:400;--spectrum-global-font-weight-medium:500;--spectrum-global-font-weight-semi-bold:600;--spectrum-global-font-weight-bold:700;--spectrum-global-font-weight-extra-bold:800;--spectrum-global-font-weight-black:900;--spectrum-global-font-style-regular:normal;--spectrum-global-font-style-italic:italic;--spectrum-global-font-letter-spacing-none:0;--spectrum-global-font-letter-spacing-small:.0125em;--spectrum-global-font-letter-spacing-han:.05em;--spectrum-global-font-letter-spacing-medium:.06em;--spectrum-global-font-line-height-large:1.7;--spectrum-global-font-line-height-medium:1.5;--spectrum-global-font-line-height-small:1.3;--spectrum-global-font-multiplier-0:0em;--spectrum-global-font-multiplier-25:.25em;--spectrum-global-font-multiplier-75:.75em;--spectrum-global-font-font-family-ar:myriad-arabic,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-font-family-he:myriad-hebrew,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-font-family-zh:adobe-clean-han-traditional,source-han-traditional,"MingLiu","Heiti TC Light","sans-serif";--spectrum-global-font-font-family-zhhans:adobe-clean-han-simplified-c,source-han-simplified-c,"SimSun","Heiti SC Light","sans-serif";--spectrum-global-font-font-family-ko:adobe-clean-han-korean,source-han-korean,"Malgun Gothic","Apple Gothic","sans-serif";--spectrum-global-font-font-family-ja:adobe-clean-han-japanese,"Hiragino Kaku Gothic ProN","ヒラギノ角ゴ ProN W3","Osaka",YuGothic,"Yu Gothic","メイリオ",Meiryo,"ＭＳ Ｐゴシック","MS PGothic","sans-serif";--spectrum-global-font-font-family-condensed:adobe-clean-han-traditional,source-han-traditional,"MingLiu","Heiti TC Light",adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-alias-border-size-thin:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-border-size-thick:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-border-size-thicker:var(--spectrum-global-dimension-static-size-50);--spectrum-alias-border-size-thickest:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-border-offset-thin:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-border-offset-thick:var(--spectrum-global-dimension-static-size-50);--spectrum-alias-border-offset-thicker:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-border-offset-thickest:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-grid-baseline:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-grid-gutter-xsmall:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-grid-gutter-small:var(--spectrum-global-dimension-static-size-300);--spectrum-alias-grid-gutter-medium:var(--spectrum-global-dimension-static-size-400);--spectrum-alias-grid-gutter-large:var(--spectrum-global-dimension-static-size-500);--spectrum-alias-grid-gutter-xlarge:var(--spectrum-global-dimension-static-size-600);--spectrum-alias-grid-margin-xsmall:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-grid-margin-small:var(--spectrum-global-dimension-static-size-300);--spectrum-alias-grid-margin-medium:var(--spectrum-global-dimension-static-size-400);--spectrum-alias-grid-margin-large:var(--spectrum-global-dimension-static-size-500);--spectrum-alias-grid-margin-xlarge:var(--spectrum-global-dimension-static-size-600);--spectrum-alias-grid-layout-region-margin-bottom-xsmall:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-grid-layout-region-margin-bottom-small:var(--spectrum-global-dimension-static-size-300);--spectrum-alias-grid-layout-region-margin-bottom-medium:var(--spectrum-global-dimension-static-size-400);--spectrum-alias-grid-layout-region-margin-bottom-large:var(--spectrum-global-dimension-static-size-500);--spectrum-alias-grid-layout-region-margin-bottom-xlarge:var(--spectrum-global-dimension-static-size-600);--spectrum-alias-radial-reaction-size-default:var(--spectrum-global-dimension-static-size-550);--spectrum-alias-focus-ring-gap:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-focus-ring-size:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-loupe-entry-animation-duration:var(--spectrum-global-animation-duration-300);--spectrum-alias-loupe-exit-animation-duration:var(--spectrum-global-animation-duration-300);--spectrum-alias-heading-text-line-height:var(--spectrum-global-font-line-height-small);--spectrum-alias-heading-text-font-weight-regular:var(--spectrum-global-font-weight-bold);--spectrum-alias-heading-text-font-weight-regular-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-heading-text-font-weight-light:var(--spectrum-global-font-weight-light);--spectrum-alias-heading-text-font-weight-light-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-heading-text-font-weight-heavy:var(--spectrum-global-font-weight-black);--spectrum-alias-heading-text-font-weight-heavy-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-heading-text-font-weight-quiet:var(--spectrum-global-font-weight-light);--spectrum-alias-heading-text-font-weight-quiet-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-heading-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-heading-text-font-weight-strong-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-heading-margin-bottom:var(--spectrum-global-font-multiplier-25);--spectrum-alias-subheading-text-font-weight:var(--spectrum-global-font-weight-bold);--spectrum-alias-subheading-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-body-text-font-family:var(--spectrum-global-font-family-base);--spectrum-alias-body-text-line-height:var(--spectrum-global-font-line-height-medium);--spectrum-alias-body-text-font-weight:var(--spectrum-global-font-weight-regular);--spectrum-alias-body-text-font-weight-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-body-margin-bottom:var(--spectrum-global-font-multiplier-75);--spectrum-alias-detail-text-font-weight:var(--spectrum-global-font-weight-bold);--spectrum-alias-detail-text-font-weight-regular:var(--spectrum-global-font-weight-bold);--spectrum-alias-detail-text-font-weight-light:var(--spectrum-global-font-weight-regular);--spectrum-alias-detail-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-article-heading-text-font-weight:var(--spectrum-global-font-weight-bold);--spectrum-alias-article-heading-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-article-heading-text-font-weight-quiet:var(--spectrum-global-font-weight-regular);--spectrum-alias-article-heading-text-font-weight-quiet-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-article-body-text-font-weight:var(--spectrum-global-font-weight-regular);--spectrum-alias-article-body-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-article-subheading-text-font-weight:var(--spectrum-global-font-weight-bold);--spectrum-alias-article-subheading-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-article-detail-text-font-weight:var(--spectrum-global-font-weight-regular);--spectrum-alias-article-detail-text-font-weight-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-code-text-font-family:var(--spectrum-global-font-family-code);--spectrum-alias-code-text-font-weight-regular:var(--spectrum-global-font-weight-regular);--spectrum-alias-code-text-font-weight-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-code-text-line-height:var(--spectrum-global-font-line-height-medium);--spectrum-alias-code-margin-bottom:var(--spectrum-global-font-multiplier-0);--spectrum-alias-font-family-ar:var(--spectrum-global-font-font-family-ar);--spectrum-alias-font-family-he:var(--spectrum-global-font-font-family-he);--spectrum-alias-font-family-zh:var(--spectrum-global-font-font-family-zh);--spectrum-alias-font-family-zhhans:var(--spectrum-global-font-font-family-zhhans);--spectrum-alias-font-family-ko:var(--spectrum-global-font-font-family-ko);--spectrum-alias-font-family-ja:var(--spectrum-global-font-font-family-ja);--spectrum-alias-font-family-condensed:var(--spectrum-global-font-font-family-condensed);--spectrum-alias-button-text-line-height:var(--spectrum-global-font-line-height-small);--spectrum-alias-component-text-line-height:var(--spectrum-global-font-line-height-small);--spectrum-alias-han-component-text-line-height:var(--spectrum-global-font-line-height-medium);--spectrum-alias-serif-text-font-family:var(--spectrum-global-font-family-serif);--spectrum-alias-han-heading-text-line-height:var(--spectrum-global-font-line-height-medium);--spectrum-alias-han-heading-text-font-weight-regular:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-heading-text-font-weight-regular-emphasis:var(--spectrum-global-font-weight-extra-bold);--spectrum-alias-han-heading-text-font-weight-regular-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-han-heading-text-font-weight-quiet-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-heading-text-font-weight-light:var(--spectrum-global-font-weight-light);--spectrum-alias-han-heading-text-font-weight-light-emphasis:var(--spectrum-global-font-weight-regular);--spectrum-alias-han-heading-text-font-weight-light-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-heading-text-font-weight-heavy:var(--spectrum-global-font-weight-black);--spectrum-alias-han-heading-text-font-weight-heavy-emphasis:var(--spectrum-global-font-weight-black);--spectrum-alias-han-heading-text-font-weight-heavy-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-han-body-text-line-height:var(--spectrum-global-font-line-height-large);--spectrum-alias-han-body-text-font-weight-regular:var(--spectrum-global-font-weight-regular);--spectrum-alias-han-body-text-font-weight-emphasis:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-body-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-han-subheading-text-font-weight-regular:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-subheading-text-font-weight-emphasis:var(--spectrum-global-font-weight-extra-bold);--spectrum-alias-han-subheading-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-han-detail-text-font-weight:var(--spectrum-global-font-weight-regular);--spectrum-alias-han-detail-text-font-weight-emphasis:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-detail-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-item-height-s:var(--spectrum-global-dimension-size-300);--spectrum-alias-item-height-m:var(--spectrum-global-dimension-size-400);--spectrum-alias-item-height-l:var(--spectrum-global-dimension-size-500);--spectrum-alias-item-height-xl:var(--spectrum-global-dimension-size-600);--spectrum-alias-item-rounded-border-radius-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-rounded-border-radius-m:var(--spectrum-global-dimension-size-200);--spectrum-alias-item-rounded-border-radius-l:var(--spectrum-global-dimension-size-250);--spectrum-alias-item-rounded-border-radius-xl:var(--spectrum-global-dimension-size-300);--spectrum-alias-item-text-size-s:var(--spectrum-global-dimension-font-size-75);--spectrum-alias-item-text-size-m:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-item-text-size-l:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-item-text-size-xl:var(--spectrum-global-dimension-font-size-300);--spectrum-alias-item-text-padding-top-s:var(--spectrum-global-dimension-static-size-50);--spectrum-alias-item-text-padding-top-m:var(--spectrum-global-dimension-size-75);--spectrum-alias-item-text-padding-top-xl:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-text-padding-bottom-m:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-text-padding-bottom-l:var(--spectrum-global-dimension-size-130);--spectrum-alias-item-text-padding-bottom-xl:var(--spectrum-global-dimension-size-175);--spectrum-alias-item-icon-padding-top-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-item-icon-padding-top-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-icon-padding-top-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-icon-padding-top-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-icon-padding-bottom-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-item-icon-padding-bottom-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-icon-padding-bottom-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-icon-padding-bottom-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-padding-s:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-padding-m:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-padding-l:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-padding-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-rounded-padding-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-rounded-padding-m:var(--spectrum-global-dimension-size-200);--spectrum-alias-item-rounded-padding-l:var(--spectrum-global-dimension-size-250);--spectrum-alias-item-rounded-padding-xl:var(--spectrum-global-dimension-size-300);--spectrum-alias-item-icononly-padding-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-item-icononly-padding-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-icononly-padding-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-icononly-padding-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-control-gap-s:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-control-gap-m:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-control-gap-l:var(--spectrum-global-dimension-size-130);--spectrum-alias-item-control-gap-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-workflow-icon-gap-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-workflow-icon-gap-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-workflow-icon-gap-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-workflow-icon-gap-xl:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-mark-gap-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-mark-gap-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-mark-gap-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-mark-gap-xl:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-ui-icon-gap-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-ui-icon-gap-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-ui-icon-gap-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-ui-icon-gap-xl:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-clearbutton-gap-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-item-clearbutton-gap-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-clearbutton-gap-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-clearbutton-gap-xl:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-workflow-padding-left-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-workflow-padding-left-l:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-workflow-padding-left-xl:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-rounded-workflow-padding-left-s:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-rounded-workflow-padding-left-l:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-mark-padding-top-s:var(--spectrum-global-dimension-size-40);--spectrum-alias-item-mark-padding-top-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-mark-padding-top-xl:var(--spectrum-global-dimension-size-130);--spectrum-alias-item-mark-padding-bottom-s:var(--spectrum-global-dimension-size-40);--spectrum-alias-item-mark-padding-bottom-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-mark-padding-bottom-xl:var(--spectrum-global-dimension-size-130);--spectrum-alias-item-mark-padding-left-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-mark-padding-left-l:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-mark-padding-left-xl:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-control-1-size-s:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-item-control-1-size-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-control-2-size-m:var(--spectrum-global-dimension-size-175);--spectrum-alias-item-control-2-size-l:var(--spectrum-global-dimension-size-200);--spectrum-alias-item-control-2-size-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-control-2-size-xxl:var(--spectrum-global-dimension-size-250);--spectrum-alias-item-control-2-border-radius-s:var(--spectrum-global-dimension-size-75);--spectrum-alias-item-control-2-border-radius-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-control-2-border-radius-l:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-control-2-border-radius-xl:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-control-2-border-radius-xxl:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-control-2-padding-s:var(--spectrum-global-dimension-size-75);--spectrum-alias-item-control-2-padding-m:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-control-2-padding-l:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-control-2-padding-xl:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-control-3-height-m:var(--spectrum-global-dimension-size-175);--spectrum-alias-item-control-3-height-l:var(--spectrum-global-dimension-size-200);--spectrum-alias-item-control-3-height-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-control-3-border-radius-s:var(--spectrum-global-dimension-size-75);--spectrum-alias-item-control-3-border-radius-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-control-3-border-radius-l:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-control-3-border-radius-xl:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-control-3-padding-s:var(--spectrum-global-dimension-size-75);--spectrum-alias-item-control-3-padding-m:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-control-3-padding-l:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-control-3-padding-xl:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-mark-size-s:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-mark-size-l:var(--spectrum-global-dimension-size-275);--spectrum-alias-item-mark-size-xl:var(--spectrum-global-dimension-size-325);--spectrum-alias-heading-xxxl-text-size:var(--spectrum-global-dimension-font-size-1300);--spectrum-alias-heading-xxl-text-size:var(--spectrum-global-dimension-font-size-1100);--spectrum-alias-heading-xl-text-size:var(--spectrum-global-dimension-font-size-900);--spectrum-alias-heading-l-text-size:var(--spectrum-global-dimension-font-size-700);--spectrum-alias-heading-m-text-size:var(--spectrum-global-dimension-font-size-500);--spectrum-alias-heading-s-text-size:var(--spectrum-global-dimension-font-size-300);--spectrum-alias-heading-xs-text-size:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-heading-xxs-text-size:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-heading-xxxl-margin-top:var(--spectrum-global-dimension-font-size-1200);--spectrum-alias-heading-xxl-margin-top:var(--spectrum-global-dimension-font-size-900);--spectrum-alias-heading-xl-margin-top:var(--spectrum-global-dimension-font-size-800);--spectrum-alias-heading-l-margin-top:var(--spectrum-global-dimension-font-size-600);--spectrum-alias-heading-m-margin-top:var(--spectrum-global-dimension-font-size-400);--spectrum-alias-heading-s-margin-top:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-heading-xs-margin-top:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-heading-xxs-margin-top:var(--spectrum-global-dimension-font-size-75);--spectrum-alias-heading-han-xxxl-text-size:var(--spectrum-global-dimension-font-size-1300);--spectrum-alias-heading-han-xxl-text-size:var(--spectrum-global-dimension-font-size-900);--spectrum-alias-heading-han-xl-text-size:var(--spectrum-global-dimension-font-size-800);--spectrum-alias-heading-han-l-text-size:var(--spectrum-global-dimension-font-size-600);--spectrum-alias-heading-han-m-text-size:var(--spectrum-global-dimension-font-size-400);--spectrum-alias-heading-han-s-text-size:var(--spectrum-global-dimension-font-size-300);--spectrum-alias-heading-han-xs-text-size:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-heading-han-xxs-text-size:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-heading-han-xxxl-margin-top:var(--spectrum-global-dimension-font-size-1200);--spectrum-alias-heading-han-xxl-margin-top:var(--spectrum-global-dimension-font-size-800);--spectrum-alias-heading-han-xl-margin-top:var(--spectrum-global-dimension-font-size-700);--spectrum-alias-heading-han-l-margin-top:var(--spectrum-global-dimension-font-size-500);--spectrum-alias-heading-han-m-margin-top:var(--spectrum-global-dimension-font-size-300);--spectrum-alias-heading-han-s-margin-top:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-heading-han-xs-margin-top:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-heading-han-xxs-margin-top:var(--spectrum-global-dimension-font-size-75);--spectrum-alias-component-border-radius:var(--spectrum-global-dimension-size-50);--spectrum-alias-component-border-radius-quiet:var(--spectrum-global-dimension-static-size-0);--spectrum-alias-component-focusring-gap:var(--spectrum-global-dimension-static-size-0);--spectrum-alias-component-focusring-gap-emphasized:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-component-focusring-size:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-component-focusring-size-emphasized:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-input-border-size:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-input-focusring-gap:var(--spectrum-global-dimension-static-size-0);--spectrum-alias-input-quiet-focusline-gap:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-control-two-size-m:var(--spectrum-global-dimension-size-175);--spectrum-alias-control-two-size-l:var(--spectrum-global-dimension-size-200);--spectrum-alias-control-two-size-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-control-two-size-xxl:var(--spectrum-global-dimension-size-250);--spectrum-alias-control-two-border-radius-s:var(--spectrum-global-dimension-size-75);--spectrum-alias-control-two-border-radius-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-control-two-border-radius-l:var(--spectrum-global-dimension-size-100);--spectrum-alias-control-two-border-radius-xl:var(--spectrum-global-dimension-size-115);--spectrum-alias-control-two-border-radius-xxl:var(--spectrum-global-dimension-size-125);--spectrum-alias-control-two-focus-ring-border-radius-s:var(--spectrum-global-dimension-size-125);--spectrum-alias-control-two-focus-ring-border-radius-m:var(--spectrum-global-dimension-size-130);--spectrum-alias-control-two-focus-ring-border-radius-l:var(--spectrum-global-dimension-size-150);--spectrum-alias-control-two-focus-ring-border-radius-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-control-two-focus-ring-border-radius-xxl:var(--spectrum-global-dimension-size-175);--spectrum-alias-control-three-height-m:var(--spectrum-global-dimension-size-175);--spectrum-alias-control-three-height-l:var(--spectrum-global-dimension-size-200);--spectrum-alias-control-three-height-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-infieldbutton-icon-margin-y-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-infieldbutton-icon-margin-y-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-infieldbutton-icon-margin-y-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-infieldbutton-icon-margin-y-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-infieldbutton-border-radius:var(--spectrum-global-dimension-size-50);--spectrum-alias-infieldbutton-border-radius-sided:0;--spectrum-alias-infieldbutton-border-size:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-infieldbutton-fill-padding-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-infieldbutton-fill-padding-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-infieldbutton-fill-padding-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-infieldbutton-fill-padding-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-infieldbutton-padding-s:0;--spectrum-alias-infieldbutton-padding-m:0;--spectrum-alias-infieldbutton-padding-l:0;--spectrum-alias-infieldbutton-padding-xl:0;--spectrum-alias-infieldbutton-full-height-s:var(--spectrum-global-dimension-size-300);--spectrum-alias-infieldbutton-full-height-m:var(--spectrum-global-dimension-size-400);--spectrum-alias-infieldbutton-full-height-l:var(--spectrum-global-dimension-size-500);--spectrum-alias-infieldbutton-full-height-xl:var(--spectrum-global-dimension-size-600);--spectrum-alias-infieldbutton-half-height-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-infieldbutton-half-height-m:var(--spectrum-global-dimension-size-200);--spectrum-alias-infieldbutton-half-height-l:var(--spectrum-global-dimension-size-250);--spectrum-alias-infieldbutton-half-height-xl:var(--spectrum-global-dimension-size-300);--spectrum-alias-stepperbutton-gap:0;--spectrum-alias-stepperbutton-width-s:var(--spectrum-global-dimension-size-225);--spectrum-alias-stepperbutton-width-m:var(--spectrum-global-dimension-size-300);--spectrum-alias-stepperbutton-width-l:var(--spectrum-global-dimension-size-400);--spectrum-alias-stepperbutton-width-xl:var(--spectrum-global-dimension-size-450);--spectrum-alias-stepperbutton-icon-x-offset-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-stepperbutton-icon-x-offset-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-stepperbutton-icon-x-offset-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-stepperbutton-icon-x-offset-xl:var(--spectrum-global-dimension-size-130);--spectrum-alias-stepperbutton-icon-y-offset-top-s:var(--spectrum-global-dimension-size-25);--spectrum-alias-stepperbutton-icon-y-offset-top-m:var(--spectrum-global-dimension-size-50);--spectrum-alias-stepperbutton-icon-y-offset-top-l:var(--spectrum-global-dimension-size-65);--spectrum-alias-stepperbutton-icon-y-offset-top-xl:var(--spectrum-global-dimension-size-75);--spectrum-alias-stepperbutton-icon-y-offset-bottom-s:var(--spectrum-global-dimension-size-10);--spectrum-alias-stepperbutton-icon-y-offset-bottom-m:var(--spectrum-global-dimension-size-25);--spectrum-alias-stepperbutton-icon-y-offset-bottom-l:var(--spectrum-global-dimension-size-40);--spectrum-alias-stepperbutton-icon-y-offset-bottom-xl:var(--spectrum-global-dimension-size-50);--spectrum-alias-stepperbutton-radius-touching:0;--spectrum-alias-clearbutton-icon-margin-s:var(--spectrum-global-dimension-size-100);--spectrum-alias-clearbutton-icon-margin-m:var(--spectrum-global-dimension-size-150);--spectrum-alias-clearbutton-icon-margin-l:var(--spectrum-global-dimension-size-185);--spectrum-alias-clearbutton-icon-margin-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-clearbutton-border-radius:var(--spectrum-global-dimension-size-50);--spectrum-alias-pickerbutton-icononly-padding-x-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-pickerbutton-icononly-padding-x-m:var(--spectrum-global-dimension-size-125);--spectrum-alias-pickerbutton-icononly-padding-x-l:var(--spectrum-global-dimension-size-160);--spectrum-alias-pickerbutton-icononly-padding-x-xl:var(--spectrum-global-dimension-size-200);--spectrum-alias-pickerbutton-icon-margin-y-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-pickerbutton-icon-margin-y-m:var(--spectrum-global-dimension-size-125);--spectrum-alias-pickerbutton-icon-margin-y-l:var(--spectrum-global-dimension-size-160);--spectrum-alias-pickerbutton-icon-margin-y-xl:var(--spectrum-global-dimension-size-200);--spectrum-alias-pickerbutton-label-padding-y-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-pickerbutton-label-padding-y-m:var(--spectrum-global-dimension-size-75);--spectrum-alias-pickerbutton-label-padding-y-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-pickerbutton-label-padding-y-xl:var(--spectrum-global-dimension-size-150);--spectrum-alias-pickerbutton-border-radius-rounded:var(--spectrum-global-dimension-size-50);--spectrum-alias-pickerbutton-border-radius-rounded-sided:0;--spectrum-alias-search-border-radius:var(--spectrum-global-dimension-size-50);--spectrum-alias-search-border-radius-quiet:0;--spectrum-alias-combobox-quiet-button-offset-x:var(--spectrum-global-dimension-size-100);--spectrum-alias-thumbnail-border-radius-small:var(--spectrum-global-dimension-size-25);--spectrum-alias-actiongroup-button-gap:var(--spectrum-global-dimension-size-100);--spectrum-alias-actiongroup-button-gap-compact:var(--spectrum-global-dimension-size-0);--spectrum-alias-actiongroup-button-gap-quiet:var(--spectrum-global-dimension-size-100);--spectrum-alias-actiongroup-button-gap-quiet-compact:var(--spectrum-global-dimension-size-25);--spectrum-alias-search-padding-left-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-search-padding-left-l:var(--spectrum-global-dimension-size-160);--spectrum-alias-search-padding-left-xl:var(--spectrum-global-dimension-size-185);--spectrum-alias-percent-50:50%;--spectrum-alias-percent-70:70%;--spectrum-alias-percent-100:100%;--spectrum-alias-breakpoint-xsmall:304px;--spectrum-alias-breakpoint-small:768px;--spectrum-alias-breakpoint-medium:1280px;--spectrum-alias-breakpoint-large:1768px;--spectrum-alias-breakpoint-xlarge:2160px;--spectrum-alias-grid-columns:12;--spectrum-alias-grid-fluid-width:100%;--spectrum-alias-grid-fixed-max-width:1280px;--spectrum-alias-focus-ring-gap-small:var(--spectrum-global-dimension-static-size-0);--spectrum-alias-focus-ring-size-small:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-dropshadow-blur:var(--spectrum-global-dimension-size-50);--spectrum-alias-dropshadow-offset-y:var(--spectrum-global-dimension-size-10);--spectrum-alias-font-size-default:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-layout-label-gap-size:var(--spectrum-global-dimension-size-100);--spectrum-alias-pill-button-text-size:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-pill-button-text-baseline:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-border-radius-xsmall:var(--spectrum-global-dimension-size-10);--spectrum-alias-border-radius-small:var(--spectrum-global-dimension-size-25);--spectrum-alias-border-radius-regular:var(--spectrum-global-dimension-size-50);--spectrum-alias-border-radius-medium:var(--spectrum-global-dimension-size-100);--spectrum-alias-border-radius-large:var(--spectrum-global-dimension-size-200);--spectrum-alias-border-radius-xlarge:var(--spectrum-global-dimension-size-300);--spectrum-alias-focus-ring-border-radius-xsmall:var(--spectrum-global-dimension-size-50);--spectrum-alias-focus-ring-border-radius-small:var(--spectrum-global-dimension-static-size-65);--spectrum-alias-focus-ring-border-radius-medium:var(--spectrum-global-dimension-size-150);--spectrum-alias-focus-ring-border-radius-large:var(--spectrum-global-dimension-size-250);--spectrum-alias-focus-ring-border-radius-xlarge:var(--spectrum-global-dimension-size-350);--spectrum-alias-single-line-height:var(--spectrum-global-dimension-size-400);--spectrum-alias-single-line-width:var(--spectrum-global-dimension-size-2400);--spectrum-alias-workflow-icon-size-s:var(--spectrum-global-dimension-size-200);--spectrum-alias-workflow-icon-size-m:var(--spectrum-global-dimension-size-225);--spectrum-alias-workflow-icon-size-xl:var(--spectrum-global-dimension-size-275);--spectrum-alias-ui-icon-alert-size-75:var(--spectrum-global-dimension-size-200);--spectrum-alias-ui-icon-alert-size-100:var(--spectrum-global-dimension-size-225);--spectrum-alias-ui-icon-alert-size-200:var(--spectrum-global-dimension-size-250);--spectrum-alias-ui-icon-alert-size-300:var(--spectrum-global-dimension-size-275);--spectrum-alias-ui-icon-triplegripper-size-100-height:var(--spectrum-global-dimension-size-100);--spectrum-alias-ui-icon-doublegripper-size-100-width:var(--spectrum-global-dimension-size-200);--spectrum-alias-ui-icon-singlegripper-size-100-width:var(--spectrum-global-dimension-size-300);--spectrum-alias-ui-icon-cornertriangle-size-75:var(--spectrum-global-dimension-size-65);--spectrum-alias-ui-icon-cornertriangle-size-200:var(--spectrum-global-dimension-size-75);--spectrum-alias-ui-icon-asterisk-size-75:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-ui-icon-asterisk-size-100:var(--spectrum-global-dimension-size-100);--spectrum-alias-avatar-size-50:var(--spectrum-global-dimension-size-200);--spectrum-alias-avatar-size-75:var(--spectrum-global-dimension-size-225);--spectrum-alias-avatar-size-200:var(--spectrum-global-dimension-size-275);--spectrum-alias-avatar-size-300:var(--spectrum-global-dimension-size-325);--spectrum-alias-avatar-size-500:var(--spectrum-global-dimension-size-400);--spectrum-alias-avatar-size-700:var(--spectrum-global-dimension-size-500);--spectrum-alias-avatar-border-size:var(--spectrum-global-dimension-size-0);--spectrum-alias-tag-border-radius:var(--spectrum-global-dimension-size-50);--spectrum-alias-tag-border-size-default:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-tag-border-size-key-focus:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-tag-border-size-disabled:var(--spectrum-global-dimension-size-0);--spectrum-alias-tag-border-size:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-tag-padding-right-s:var(--spectrum-global-dimension-size-115);--spectrum-alias-tag-padding-right-m:var(--spectrum-global-dimension-size-150);--spectrum-alias-tag-padding-right-l:var(--spectrum-global-dimension-size-185);--spectrum-alias-tag-height-s:var(--spectrum-global-dimension-size-300);--spectrum-alias-tag-height-m:var(--spectrum-global-dimension-size-400);--spectrum-alias-tag-height-l:var(--spectrum-global-dimension-size-500);--spectrum-alias-tag-font-size-s:var(--spectrum-global-dimension-font-size-75);--spectrum-alias-tag-font-size-m:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-tag-font-size-l:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-tag-text-padding-top-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-tag-text-padding-top-m:var(--spectrum-global-dimension-size-75);--spectrum-alias-tag-text-padding-top-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-tag-icon-size-s:var(--spectrum-global-dimension-size-200);--spectrum-alias-tag-icon-size-m:var(--spectrum-global-dimension-size-225);--spectrum-alias-tag-icon-margin-top-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-tag-icon-margin-top-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-tag-icon-margin-top-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-tag-icon-margin-right-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-tag-icon-margin-right-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-tag-icon-margin-right-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-tag-clearbutton-width-s:var(--spectrum-global-dimension-size-300);--spectrum-alias-tag-clearbutton-width-m:var(--spectrum-global-dimension-size-400);--spectrum-alias-tag-clearbutton-width-l:var(--spectrum-global-dimension-size-500);--spectrum-alias-tag-clearbutton-icon-margin-s:var(--spectrum-global-dimension-size-100);--spectrum-alias-tag-clearbutton-icon-margin-m:var(--spectrum-global-dimension-size-150);--spectrum-alias-tag-clearbutton-icon-margin-l:var(--spectrum-global-dimension-size-185);--spectrum-alias-tag-focusring-size:var(--spectrum-global-dimension-size-25);--spectrum-alias-tag-focusring-gap:var(--spectrum-global-dimension-static-size-0);--spectrum-alias-tag-focusring-gap-selected:var(--spectrum-global-dimension-size-25);--spectrum-alias-colorloupe-width:var(--spectrum-global-dimension-static-size-600);--spectrum-alias-colorloupe-height:var(--spectrum-global-dimension-static-size-800);--spectrum-alias-colorhandle-outer-border-color:#0000006b;--spectrum-alias-transparent-blue-background-color-hover:#0057be26;--spectrum-alias-transparent-blue-background-color-down:#0048994d;--spectrum-alias-transparent-blue-background-color-key-focus:var(--spectrum-alias-transparent-blue-background-color-hover);--spectrum-alias-transparent-blue-background-color-mouse-focus:var(--spectrum-alias-transparent-blue-background-color-hover);--spectrum-alias-transparent-blue-background-color:var(--spectrum-alias-component-text-color-default);--spectrum-alias-transparent-red-background-color-hover:#9a000026;--spectrum-alias-transparent-red-background-color-down:#7c00004d;--spectrum-alias-transparent-red-background-color-key-focus:var(--spectrum-alias-transparent-red-background-color-hover);--spectrum-alias-transparent-red-background-color-mouse-focus:var(--spectrum-alias-transparent-red-background-color-hover);--spectrum-alias-transparent-red-background-color:var(--spectrum-alias-component-text-color-default);--spectrum-alias-component-text-color-disabled:var(--spectrum-global-color-gray-500);--spectrum-alias-component-text-color-default:var(--spectrum-global-color-gray-800);--spectrum-alias-component-text-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-component-text-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-component-text-color-key-focus:var(--spectrum-alias-component-text-color-hover);--spectrum-alias-component-text-color-mouse-focus:var(--spectrum-alias-component-text-color-hover);--spectrum-alias-component-text-color:var(--spectrum-alias-component-text-color-default);--spectrum-alias-component-text-color-selected-default:var(--spectrum-alias-component-text-color-default);--spectrum-alias-component-text-color-selected-hover:var(--spectrum-alias-component-text-color-hover);--spectrum-alias-component-text-color-selected-down:var(--spectrum-alias-component-text-color-down);--spectrum-alias-component-text-color-selected-key-focus:var(--spectrum-alias-component-text-color-key-focus);--spectrum-alias-component-text-color-selected-mouse-focus:var(--spectrum-alias-component-text-color-mouse-focus);--spectrum-alias-component-text-color-selected:var(--spectrum-alias-component-text-color-selected-default);--spectrum-alias-component-text-color-emphasized-selected-default:var(--spectrum-global-color-static-white);--spectrum-alias-component-text-color-emphasized-selected-hover:var(--spectrum-alias-component-text-color-emphasized-selected-default);--spectrum-alias-component-text-color-emphasized-selected-down:var(--spectrum-alias-component-text-color-emphasized-selected-default);--spectrum-alias-component-text-color-emphasized-selected-key-focus:var(--spectrum-alias-component-text-color-emphasized-selected-default);--spectrum-alias-component-text-color-emphasized-selected-mouse-focus:var(--spectrum-alias-component-text-color-emphasized-selected-default);--spectrum-alias-component-text-color-emphasized-selected:var(--spectrum-alias-component-text-color-emphasized-selected-default);--spectrum-alias-component-text-color-error-default:var(--spectrum-semantic-negative-text-color-small);--spectrum-alias-component-text-color-error-hover:var(--spectrum-semantic-negative-text-color-small-hover);--spectrum-alias-component-text-color-error-down:var(--spectrum-semantic-negative-text-color-small-down);--spectrum-alias-component-text-color-error-key-focus:var(--spectrum-semantic-negative-text-color-small-key-focus);--spectrum-alias-component-text-color-error-mouse-focus:var(--spectrum-semantic-negative-text-color-small-key-focus);--spectrum-alias-component-text-color-error:var(--spectrum-alias-component-text-color-error-default);--spectrum-alias-component-icon-color-disabled:var(--spectrum-alias-icon-color-disabled);--spectrum-alias-component-icon-color-default:var(--spectrum-alias-icon-color);--spectrum-alias-component-icon-color-hover:var(--spectrum-alias-icon-color-hover);--spectrum-alias-component-icon-color-down:var(--spectrum-alias-icon-color-down);--spectrum-alias-component-icon-color-key-focus:var(--spectrum-alias-icon-color-hover);--spectrum-alias-component-icon-color-mouse-focus:var(--spectrum-alias-icon-color-down);--spectrum-alias-component-icon-color:var(--spectrum-alias-component-icon-color-default);--spectrum-alias-component-icon-color-selected:var(--spectrum-alias-icon-color-selected-neutral-subdued);--spectrum-alias-component-icon-color-emphasized-selected-default:var(--spectrum-global-color-static-white);--spectrum-alias-component-icon-color-emphasized-selected-hover:var(--spectrum-alias-component-icon-color-emphasized-selected-default);--spectrum-alias-component-icon-color-emphasized-selected-down:var(--spectrum-alias-component-icon-color-emphasized-selected-default);--spectrum-alias-component-icon-color-emphasized-selected-key-focus:var(--spectrum-alias-component-icon-color-emphasized-selected-default);--spectrum-alias-component-icon-color-emphasized-selected:var(--spectrum-alias-component-icon-color-emphasized-selected-default);--spectrum-alias-component-background-color-disabled:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-quiet-disabled:var(--spectrum-alias-background-color-transparent);--spectrum-alias-component-background-color-quiet-selected-disabled:var(--spectrum-alias-component-background-color-disabled);--spectrum-alias-component-background-color-default:var(--spectrum-global-color-gray-75);--spectrum-alias-component-background-color-hover:var(--spectrum-global-color-gray-50);--spectrum-alias-component-background-color-down:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-key-focus:var(--spectrum-global-color-gray-50);--spectrum-alias-component-background-color:var(--spectrum-alias-component-background-color-default);--spectrum-alias-component-background-color-selected-default:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-selected-hover:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-selected-down:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-selected-key-focus:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-selected:var(--spectrum-alias-component-background-color-selected-default);--spectrum-alias-component-background-color-quiet-default:var(--spectrum-alias-background-color-transparent);--spectrum-alias-component-background-color-quiet-hover:var(--spectrum-alias-background-color-transparent);--spectrum-alias-component-background-color-quiet-down:var(--spectrum-global-color-gray-300);--spectrum-alias-component-background-color-quiet-key-focus:var(--spectrum-alias-background-color-transparent);--spectrum-alias-component-background-color-quiet:var(--spectrum-alias-component-background-color-quiet-default);--spectrum-alias-component-background-color-quiet-selected-default:var(--spectrum-alias-component-background-color-selected-default);--spectrum-alias-component-background-color-quiet-selected-hover:var(--spectrum-alias-component-background-color-selected-hover);--spectrum-alias-component-background-color-quiet-selected-down:var(--spectrum-alias-component-background-color-selected-down);--spectrum-alias-component-background-color-quiet-selected-key-focus:var(--spectrum-alias-component-background-color-selected-key-focus);--spectrum-alias-component-background-color-quiet-selected:var(--spectrum-alias-component-background-color-selected-default);--spectrum-alias-component-background-color-emphasized-selected-default:var(--spectrum-semantic-cta-background-color-default);--spectrum-alias-component-background-color-emphasized-selected-hover:var(--spectrum-semantic-cta-background-color-hover);--spectrum-alias-component-background-color-emphasized-selected-down:var(--spectrum-semantic-cta-background-color-down);--spectrum-alias-component-background-color-emphasized-selected-key-focus:var(--spectrum-semantic-cta-background-color-key-focus);--spectrum-alias-component-background-color-emphasized-selected:var(--spectrum-alias-component-background-color-emphasized-selected-default);--spectrum-alias-component-border-color-disabled:var(--spectrum-alias-border-color-disabled);--spectrum-alias-component-border-color-quiet-disabled:var(--spectrum-alias-border-color-transparent);--spectrum-alias-component-border-color-default:var(--spectrum-alias-border-color);--spectrum-alias-component-border-color-hover:var(--spectrum-alias-border-color-hover);--spectrum-alias-component-border-color-down:var(--spectrum-alias-border-color-down);--spectrum-alias-component-border-color-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-component-border-color:var(--spectrum-alias-component-border-color-default);--spectrum-alias-component-border-color-selected-default:var(--spectrum-alias-border-color);--spectrum-alias-component-border-color-selected-hover:var(--spectrum-alias-border-color-hover);--spectrum-alias-component-border-color-selected-down:var(--spectrum-alias-border-color-down);--spectrum-alias-component-border-color-selected-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-component-border-color-selected:var(--spectrum-alias-component-border-color-selected-default);--spectrum-alias-component-border-color-quiet-default:var(--spectrum-alias-border-color-transparent);--spectrum-alias-component-border-color-quiet-hover:var(--spectrum-alias-border-color-transparent);--spectrum-alias-component-border-color-quiet-down:var(--spectrum-alias-border-color-transparent);--spectrum-alias-component-border-color-quiet-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-component-border-color-quiet:var(--spectrum-alias-component-border-color-quiet-default);--spectrum-alias-component-border-color-quiet-selected-default:var(--spectrum-global-color-gray-200);--spectrum-alias-component-border-color-quiet-selected-hover:var(--spectrum-global-color-gray-200);--spectrum-alias-component-border-color-quiet-selected-down:var(--spectrum-global-color-gray-200);--spectrum-alias-component-border-color-quiet-selected-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-component-border-color-quiet-selected:var(--spectrum-alias-component-border-color-quiet-selected-default);--spectrum-alias-component-border-color-emphasized-selected-default:var(--spectrum-semantic-cta-background-color-default);--spectrum-alias-component-border-color-emphasized-selected-hover:var(--spectrum-semantic-cta-background-color-hover);--spectrum-alias-component-border-color-emphasized-selected-down:var(--spectrum-semantic-cta-background-color-down);--spectrum-alias-component-border-color-emphasized-selected-key-focus:var(--spectrum-semantic-cta-background-color-key-focus);--spectrum-alias-component-border-color-emphasized-selected:var(--spectrum-alias-component-border-color-emphasized-selected-default);--spectrum-alias-tag-border-color-default:var(--spectrum-alias-border-color-darker-default);--spectrum-alias-tag-border-color-hover:var(--spectrum-alias-border-color-darker-hover);--spectrum-alias-tag-border-color-down:var(--spectrum-alias-border-color-darker-hover);--spectrum-alias-tag-border-color-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-tag-border-color-error-default:var(--spectrum-semantic-negative-color-default);--spectrum-alias-tag-border-color-error-hover:var(--spectrum-semantic-negative-color-hover);--spectrum-alias-tag-border-color-error-down:var(--spectrum-semantic-negative-color-hover);--spectrum-alias-tag-border-color-error-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-tag-border-color-error-selected:var(--spectrum-semantic-negative-color-default);--spectrum-alias-tag-border-color-selected:var(--spectrum-alias-tag-background-color-selected-default);--spectrum-alias-tag-border-color:var(--spectrum-alias-tag-border-color-default);--spectrum-alias-tag-border-color-disabled:var(--spectrum-alias-border-color-disabled);--spectrum-alias-tag-border-color-error:var(--spectrum-alias-tag-border-color-error-default);--spectrum-alias-tag-text-color-default:var(--spectrum-alias-label-text-color);--spectrum-alias-tag-text-color-hover:var(--spectrum-alias-text-color-hover);--spectrum-alias-tag-text-color-down:var(--spectrum-alias-text-color-down);--spectrum-alias-tag-text-color-key-focus:var(--spectrum-alias-text-color-hover);--spectrum-alias-tag-text-color-disabled:var(--spectrum-global-color-gray-500);--spectrum-alias-tag-text-color:var(--spectrum-alias-tag-text-color-default);--spectrum-alias-tag-text-color-error-default:var(--spectrum-global-color-red-600);--spectrum-alias-tag-text-color-error-hover:var(--spectrum-global-color-red-700);--spectrum-alias-tag-text-color-error-down:var(--spectrum-global-color-red-700);--spectrum-alias-tag-text-color-error-key-focus:var(--spectrum-global-color-red-700);--spectrum-alias-tag-text-color-error:var(--spectrum-alias-tag-text-color-error-default);--spectrum-alias-tag-text-color-selected:var(--spectrum-global-color-gray-50);--spectrum-alias-tag-icon-color-default:var(--spectrum-alias-icon-color);--spectrum-alias-tag-icon-color-hover:var(--spectrum-alias-icon-color-hover);--spectrum-alias-tag-icon-color-down:var(--spectrum-alias-icon-color-down);--spectrum-alias-tag-icon-color-key-focus:var(--spectrum-alias-icon-color-hover);--spectrum-alias-tag-icon-color-disabled:var(--spectrum-alias-icon-color-disabled);--spectrum-alias-tag-icon-color:var(--spectrum-alias-tag-icon-color-default);--spectrum-alias-tag-icon-color-error:var(--spectrum-global-color-red-600);--spectrum-alias-tag-icon-color-selected:var(--spectrum-global-color-gray-50);--spectrum-alias-tag-background-color-disabled:var(--spectrum-global-color-gray-200);--spectrum-alias-tag-background-color-default:var(--spectrum-global-color-gray-50);--spectrum-alias-tag-background-color-hover:var(--spectrum-global-color-gray-50);--spectrum-alias-tag-background-color-down:var(--spectrum-global-color-gray-200);--spectrum-alias-tag-background-color-key-focus:var(--spectrum-global-color-gray-50);--spectrum-alias-tag-background-color:var(--spectrum-alias-tag-background-color-default);--spectrum-alias-tag-background-color-error-default:var(--spectrum-global-color-gray-50);--spectrum-alias-tag-background-color-error-hover:var(--spectrum-global-color-gray-50);--spectrum-alias-tag-background-color-error-down:var(--spectrum-global-color-gray-200);--spectrum-alias-tag-background-color-error-key-focus:var(--spectrum-global-color-gray-50);--spectrum-alias-tag-background-color-error:var(--spectrum-alias-tag-background-color-error-default);--spectrum-alias-tag-background-color-error-selected-default:var(--spectrum-semantic-negative-color-default);--spectrum-alias-tag-background-color-error-selected-hover:var(--spectrum-semantic-negative-color-hover);--spectrum-alias-tag-background-color-error-selected-down:var(--spectrum-semantic-negative-color-hover);--spectrum-alias-tag-background-color-error-selected-key-focus:var(--spectrum-global-color-red-600);--spectrum-alias-tag-background-color-error-selected:var(--spectrum-alias-tag-background-color-error-selected-default);--spectrum-alias-tag-background-color-selected-default:var(--spectrum-global-color-gray-700);--spectrum-alias-tag-background-color-selected-hover:var(--spectrum-global-color-gray-800);--spectrum-alias-tag-background-color-selected-down:var(--spectrum-global-color-gray-900);--spectrum-alias-tag-background-color-selected-key-focus:var(--spectrum-global-color-gray-900);--spectrum-alias-tag-background-color-selected:var(--spectrum-alias-tag-background-color-selected-default);--spectrum-alias-tag-focusring-border-color-default:transparent;--spectrum-alias-tag-focusring-border-color-key-focus:transparent;--spectrum-alias-tag-focusring-border-color-disabled:transparent;--spectrum-alias-tag-focusring-border-color-selected-key-focus:var(--spectrum-alias-focus-ring-color);--spectrum-alias-tag-focusring-border-color:var(--spectrum-alias-tag-focusring-border-color-default);--spectrum-alias-avatar-border-color-default:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color-hover:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color-down:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color-key-focus:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color:var(--spectrum-alias-avatar-border-color-default);--spectrum-alias-avatar-border-color-disabled:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color-selected-default:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color-selected-hover:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color-selected-down:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color-selected-key-focus:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color-selected:var(--spectrum-alias-avatar-border-color-selected-default);--spectrum-alias-avatar-border-color-selected-disabled:var(--spectrum-alias-background-color-transparent);--spectrum-alias-toggle-background-color-default:var(--spectrum-global-color-gray-700);--spectrum-alias-toggle-background-color-hover:var(--spectrum-global-color-gray-800);--spectrum-alias-toggle-background-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-toggle-background-color-key-focus:var(--spectrum-global-color-gray-800);--spectrum-alias-toggle-background-color:var(--spectrum-alias-toggle-background-color-default);--spectrum-alias-toggle-background-color-emphasized-selected-default:var(--spectrum-global-color-blue-500);--spectrum-alias-toggle-background-color-emphasized-selected-hover:var(--spectrum-global-color-blue-600);--spectrum-alias-toggle-background-color-emphasized-selected-down:var(--spectrum-global-color-blue-700);--spectrum-alias-toggle-background-color-emphasized-selected-key-focus:var(--spectrum-global-color-blue-600);--spectrum-alias-toggle-background-color-emphasized-selected:var(--spectrum-alias-toggle-background-color-emphasized-selected-default);--spectrum-alias-toggle-border-color-default:var(--spectrum-global-color-gray-700);--spectrum-alias-toggle-border-color-hover:var(--spectrum-global-color-gray-800);--spectrum-alias-toggle-border-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-toggle-border-color-key-focus:var(--spectrum-global-color-gray-800);--spectrum-alias-toggle-border-color:var(--spectrum-alias-toggle-border-color-default);--spectrum-alias-toggle-icon-color-selected:var(--spectrum-global-color-gray-75);--spectrum-alias-toggle-icon-color-emphasized-selected:var(--spectrum-global-color-gray-75);--spectrum-alias-button-primary-background-color-default:var(--spectrum-alias-background-color-transparent);--spectrum-alias-button-primary-background-color-hover:var(--spectrum-global-color-gray-800);--spectrum-alias-button-primary-background-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-button-primary-background-color-key-focus:var(--spectrum-global-color-gray-800);--spectrum-alias-button-primary-background-color:var(--spectrum-alias-button-primary-background-color-default);--spectrum-alias-button-primary-border-color-default:var(--spectrum-global-color-gray-800);--spectrum-alias-button-primary-border-color-hover:var(--spectrum-alias-button-primary-background-color-hover);--spectrum-alias-button-primary-border-color-down:var(--spectrum-alias-button-primary-background-color-down);--spectrum-alias-button-primary-border-color-key-focus:var(--spectrum-alias-button-primary-background-color-key-focus);--spectrum-alias-button-primary-border-color:var(--spectrum-alias-button-primary-border-color-default);--spectrum-alias-button-primary-text-color-default:var(--spectrum-global-color-gray-800);--spectrum-alias-button-primary-text-color-hover:var(--spectrum-global-color-gray-50);--spectrum-alias-button-primary-text-color-down:var(--spectrum-global-color-gray-50);--spectrum-alias-button-primary-text-color-key-focus:var(--spectrum-global-color-gray-50);--spectrum-alias-button-primary-text-color:var(--spectrum-alias-button-primary-text-color-default);--spectrum-alias-button-primary-icon-color-default:var(--spectrum-alias-button-primary-text-color-default);--spectrum-alias-button-primary-icon-color-hover:var(--spectrum-alias-button-primary-text-color-hover);--spectrum-alias-button-primary-icon-color-down:var(--spectrum-alias-button-primary-text-color-down);--spectrum-alias-button-primary-icon-color-key-focus:var(--spectrum-alias-button-primary-text-color-key-focus);--spectrum-alias-button-primary-icon-color:var(--spectrum-alias-button-primary-icon-color-default);--spectrum-alias-button-secondary-background-color-default:var(--spectrum-alias-background-color-transparent);--spectrum-alias-button-secondary-background-color-hover:var(--spectrum-global-color-gray-700);--spectrum-alias-button-secondary-background-color-down:var(--spectrum-global-color-gray-800);--spectrum-alias-button-secondary-background-color-key-focus:var(--spectrum-global-color-gray-700);--spectrum-alias-button-secondary-background-color:var(--spectrum-alias-button-secondary-background-color-default);--spectrum-alias-button-secondary-border-color-default:var(--spectrum-global-color-gray-700);--spectrum-alias-button-secondary-border-color-hover:var(--spectrum-alias-button-secondary-background-color-hover);--spectrum-alias-button-secondary-border-color-down:var(--spectrum-alias-button-secondary-background-color-down);--spectrum-alias-button-secondary-border-color-key-focus:var(--spectrum-alias-button-secondary-background-color-key-focus);--spectrum-alias-button-secondary-border-color:var(--spectrum-alias-button-secondary-border-color-default);--spectrum-alias-button-secondary-text-color-default:var(--spectrum-global-color-gray-700);--spectrum-alias-button-secondary-text-color-hover:var(--spectrum-global-color-gray-50);--spectrum-alias-button-secondary-text-color-down:var(--spectrum-global-color-gray-50);--spectrum-alias-button-secondary-text-color-key-focus:var(--spectrum-global-color-gray-50);--spectrum-alias-button-secondary-text-color:var(--spectrum-alias-button-secondary-text-color-default);--spectrum-alias-button-secondary-icon-color-default:var(--spectrum-alias-button-secondary-text-color-default);--spectrum-alias-button-secondary-icon-color-hover:var(--spectrum-alias-button-secondary-text-color-hover);--spectrum-alias-button-secondary-icon-color-down:var(--spectrum-alias-button-secondary-text-color-down);--spectrum-alias-button-secondary-icon-color-key-focus:var(--spectrum-alias-button-secondary-text-color-key-focus);--spectrum-alias-button-secondary-icon-color:var(--spectrum-alias-button-secondary-icon-color-default);--spectrum-alias-button-negative-background-color-default:var(--spectrum-alias-background-color-transparent);--spectrum-alias-button-negative-background-color-hover:var(--spectrum-semantic-negative-text-color-small);--spectrum-alias-button-negative-background-color-down:var(--spectrum-global-color-red-700);--spectrum-alias-button-negative-background-color-key-focus:var(--spectrum-semantic-negative-text-color-small);--spectrum-alias-button-negative-background-color:var(--spectrum-alias-button-negative-background-color-default);--spectrum-alias-button-negative-border-color-default:var(--spectrum-semantic-negative-text-color-small);--spectrum-alias-button-negative-border-color-hover:var(--spectrum-semantic-negative-text-color-small);--spectrum-alias-button-negative-border-color-down:var(--spectrum-global-color-red-700);--spectrum-alias-button-negative-border-color-key-focus:var(--spectrum-semantic-negative-text-color-small);--spectrum-alias-button-negative-border-color:var(--spectrum-alias-button-negative-border-color-default);--spectrum-alias-button-negative-text-color-default:var(--spectrum-semantic-negative-text-color-small);--spectrum-alias-button-negative-text-color-hover:var(--spectrum-global-color-gray-50);--spectrum-alias-button-negative-text-color-down:var(--spectrum-global-color-gray-50);--spectrum-alias-button-negative-text-color-key-focus:var(--spectrum-global-color-gray-50);--spectrum-alias-button-negative-text-color:var(--spectrum-alias-button-negative-text-color-default);--spectrum-alias-button-negative-icon-color-default:var(--spectrum-alias-button-negative-text-color-default);--spectrum-alias-button-negative-icon-color-hover:var(--spectrum-alias-button-negative-text-color-hover);--spectrum-alias-button-negative-icon-color-down:var(--spectrum-alias-button-negative-text-color-down);--spectrum-alias-button-negative-icon-color-key-focus:var(--spectrum-alias-button-negative-text-color-key-focus);--spectrum-alias-button-negative-icon-color:var(--spectrum-alias-button-negative-icon-color-default);--spectrum-alias-input-border-color-disabled:var(--spectrum-alias-border-color-transparent);--spectrum-alias-input-border-color-quiet-disabled:var(--spectrum-alias-border-color-mid);--spectrum-alias-input-border-color-default:var(--spectrum-alias-border-color);--spectrum-alias-input-border-color-hover:var(--spectrum-alias-border-color-hover);--spectrum-alias-input-border-color-down:var(--spectrum-alias-border-color-mouse-focus);--spectrum-alias-input-border-color-mouse-focus:var(--spectrum-alias-border-color-mouse-focus);--spectrum-alias-input-border-color-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-input-border-color:var(--spectrum-alias-input-border-color-default);--spectrum-alias-input-border-color-invalid-default:var(--spectrum-semantic-negative-color-default);--spectrum-alias-input-border-color-invalid-hover:var(--spectrum-semantic-negative-color-hover);--spectrum-alias-input-border-color-invalid-down:var(--spectrum-semantic-negative-color-down);--spectrum-alias-input-border-color-invalid-mouse-focus:var(--spectrum-semantic-negative-color-hover);--spectrum-alias-input-border-color-invalid-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-input-border-color-invalid:var(--spectrum-alias-input-border-color-invalid-default);--spectrum-alias-background-color-yellow-default:var(--spectrum-global-color-static-yellow-300);--spectrum-alias-background-color-yellow-hover:var(--spectrum-global-color-static-yellow-400);--spectrum-alias-background-color-yellow-key-focus:var(--spectrum-global-color-static-yellow-400);--spectrum-alias-background-color-yellow-down:var(--spectrum-global-color-static-yellow-500);--spectrum-alias-background-color-yellow:var(--spectrum-alias-background-color-yellow-default);--spectrum-alias-infieldbutton-background-color:var(--spectrum-global-color-gray-200);--spectrum-alias-infieldbutton-fill-loudnessLow-border-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessMedium-border-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessHigh-border-color-disabled:var(--spectrum-alias-component-background-color-disabled);--spectrum-alias-infieldbutton-fill-border-color-default:var(--spectrum-alias-input-border-color-default);--spectrum-alias-infieldbutton-fill-border-color-hover:var(--spectrum-alias-input-border-color-hover);--spectrum-alias-infieldbutton-fill-border-color-down:var(--spectrum-alias-input-border-color-down);--spectrum-alias-infieldbutton-fill-border-color-mouse-focus:var(--spectrum-alias-input-border-color-mouse-focus);--spectrum-alias-infieldbutton-fill-border-color-key-focus:var(--spectrum-alias-input-border-color-key-focus);--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-default:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-hover:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-down:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-key-focus:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-default:var(--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-default);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-hover:var(--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-hover);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-down:var(--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-down);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-key-focus:var(--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-key-focus);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-default:var(--spectrum-alias-component-background-color-default);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-hover:var(--spectrum-alias-component-background-color-hover);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-down:var(--spectrum-alias-component-background-color-down);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-key-focus:var(--spectrum-alias-component-background-color-key-focus);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-disabled:var(--spectrum-alias-component-background-color-disabled);--spectrum-alias-actionbutton-staticBlack-border-color-default:#0006;--spectrum-alias-actionbutton-staticBlack-background-color-default:transparent;--spectrum-alias-actionbutton-staticBlack-border-color-hover:#0000008c;--spectrum-alias-actionbutton-staticBlack-background-color-hover:#00000040;--spectrum-alias-actionbutton-staticBlack-border-color-down:#000000b3;--spectrum-alias-actionbutton-staticBlack-background-color-down:#0006;--spectrum-alias-actionbutton-staticBlack-border-color-key-focus:#0000008c;--spectrum-alias-actionbutton-staticBlack-background-color-key-focus:#00000040;--spectrum-alias-actionbutton-staticBlack-border-color-disabled:#00000040;--spectrum-alias-actionbutton-staticBlack-background-color-disabled:transparent;--spectrum-alias-actionbutton-staticBlack-border-color-disabled-selected:transparent;--spectrum-alias-actionbutton-staticBlack-background-color-disabled-selected:#0000001a;--spectrum-alias-actionbutton-staticWhite-border-color-default:#fff6;--spectrum-alias-actionbutton-staticWhite-background-color-default:transparent;--spectrum-alias-actionbutton-staticWhite-border-color-hover:#ffffff8c;--spectrum-alias-actionbutton-staticWhite-background-color-hover:#ffffff40;--spectrum-alias-actionbutton-staticWhite-border-color-down:#ffffffb3;--spectrum-alias-actionbutton-staticWhite-background-color-down:#fff6;--spectrum-alias-actionbutton-staticWhite-border-color-key-focus:#ffffff8c;--spectrum-alias-actionbutton-staticWhite-background-color-key-focus:#ffffff40;--spectrum-alias-actionbutton-staticWhite-border-color-disabled:#ffffff40;--spectrum-alias-actionbutton-staticWhite-background-color-disabled:transparent;--spectrum-alias-actionbutton-staticWhite-border-color-disabled-selected:transparent;--spectrum-alias-actionbutton-staticWhite-background-color-disabled-selected:#ffffff1a;--spectrum-alias-tabs-divider-background-color-default:var(--spectrum-global-color-gray-300);--spectrum-alias-tabs-divider-background-color-quiet:var(--spectrum-alias-background-color-transparent);--spectrum-alias-tabitem-text-color-default:var(--spectrum-alias-label-text-color);--spectrum-alias-tabitem-text-color-hover:var(--spectrum-alias-text-color-hover);--spectrum-alias-tabitem-text-color-down:var(--spectrum-alias-text-color-down);--spectrum-alias-tabitem-text-color-key-focus:var(--spectrum-alias-text-color-hover);--spectrum-alias-tabitem-text-color-mouse-focus:var(--spectrum-alias-text-color-hover);--spectrum-alias-tabitem-text-color:var(--spectrum-alias-tabitem-text-color-default);--spectrum-alias-tabitem-text-color-selected-default:var(--spectrum-global-color-gray-900);--spectrum-alias-tabitem-text-color-selected-hover:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-text-color-selected-down:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-text-color-selected-key-focus:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-text-color-selected-mouse-focus:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-text-color-selected:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-text-color-emphasized:var(--spectrum-alias-tabitem-text-color-default);--spectrum-alias-tabitem-text-color-emphasized-selected-default:var(--spectrum-global-color-static-blue-500);--spectrum-alias-tabitem-text-color-emphasized-selected-hover:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-text-color-emphasized-selected-down:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-text-color-emphasized-selected-key-focus:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-text-color-emphasized-selected-mouse-focus:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-text-color-emphasized-selected:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-selection-indicator-color-default:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-selection-indicator-color-emphasized:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-icon-color-disabled:var(--spectrum-alias-text-color-disabled);--spectrum-alias-tabitem-icon-color-default:var(--spectrum-alias-icon-color);--spectrum-alias-tabitem-icon-color-hover:var(--spectrum-alias-icon-color-hover);--spectrum-alias-tabitem-icon-color-down:var(--spectrum-alias-icon-color-down);--spectrum-alias-tabitem-icon-color-key-focus:var(--spectrum-alias-icon-color-hover);--spectrum-alias-tabitem-icon-color-mouse-focus:var(--spectrum-alias-icon-color-down);--spectrum-alias-tabitem-icon-color:var(--spectrum-alias-tabitem-icon-color-default);--spectrum-alias-tabitem-icon-color-selected:var(--spectrum-alias-icon-color-selected-neutral);--spectrum-alias-tabitem-icon-color-emphasized:var(--spectrum-alias-tabitem-text-color-default);--spectrum-alias-tabitem-icon-color-emphasized-selected:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-assetcard-selectionindicator-background-color-ordered:var(--spectrum-global-color-blue-500);--spectrum-alias-assetcard-overlay-background-color:#1b7ff51a;--spectrum-alias-assetcard-border-color-selected:var(--spectrum-global-color-blue-500);--spectrum-alias-assetcard-border-color-selected-hover:var(--spectrum-global-color-blue-500);--spectrum-alias-assetcard-border-color-selected-down:var(--spectrum-global-color-blue-600);--spectrum-alias-background-color-default:var(--spectrum-global-color-gray-100);--spectrum-alias-background-color-disabled:var(--spectrum-global-color-gray-200);--spectrum-alias-background-color-transparent:transparent;--spectrum-alias-background-color-overbackground-down:#fff3;--spectrum-alias-background-color-quiet-overbackground-hover:#ffffff1a;--spectrum-alias-background-color-quiet-overbackground-down:#fff3;--spectrum-alias-background-color-overbackground-disabled:#ffffff1a;--spectrum-alias-background-color-quickactions-overlay:#0003;--spectrum-alias-placeholder-text-color:var(--spectrum-global-color-gray-800);--spectrum-alias-placeholder-text-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-placeholder-text-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-placeholder-text-color-selected:var(--spectrum-global-color-gray-800);--spectrum-alias-label-text-color:var(--spectrum-global-color-gray-700);--spectrum-alias-text-color:var(--spectrum-global-color-gray-800);--spectrum-alias-text-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-key-focus:var(--spectrum-global-color-blue-600);--spectrum-alias-text-color-mouse-focus:var(--spectrum-global-color-blue-600);--spectrum-alias-text-color-disabled:var(--spectrum-global-color-gray-500);--spectrum-alias-text-color-invalid:var(--spectrum-global-color-red-500);--spectrum-alias-text-color-selected:var(--spectrum-global-color-blue-600);--spectrum-alias-text-color-selected-neutral:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-overbackground:var(--spectrum-global-color-static-white);--spectrum-alias-text-color-overbackground-disabled:#fff3;--spectrum-alias-text-color-quiet-overbackground-disabled:#fff3;--spectrum-alias-heading-text-color:var(--spectrum-global-color-gray-900);--spectrum-alias-link-primary-text-color-default:var(--spectrum-global-color-blue-600);--spectrum-alias-link-primary-text-color-hover:var(--spectrum-global-color-blue-600);--spectrum-alias-link-primary-text-color-down:var(--spectrum-global-color-blue-700);--spectrum-alias-link-primary-text-color-key-focus:var(--spectrum-alias-text-color-key-focus);--spectrum-alias-link-primary-text-color:var(--spectrum-alias-link-primary-text-color-default);--spectrum-alias-link-secondary-text-color-default:var(--spectrum-alias-link-primary-text-color-default);--spectrum-alias-link-secondary-text-color-hover:var(--spectrum-alias-link-primary-text-color-hover);--spectrum-alias-link-secondary-text-color-down:var(--spectrum-alias-link-primary-text-color-down);--spectrum-alias-link-secondary-text-color-key-focus:var(--spectrum-alias-link-primary-text-color-key-focus);--spectrum-alias-link-secondary-text-color:var(--spectrum-alias-link-secondary-text-color-default);--spectrum-alias-border-color:var(--spectrum-global-color-gray-400);--spectrum-alias-border-color-hover:var(--spectrum-global-color-gray-500);--spectrum-alias-border-color-down:var(--spectrum-global-color-gray-500);--spectrum-alias-border-color-key-focus:var(--spectrum-global-color-blue-400);--spectrum-alias-border-color-mouse-focus:var(--spectrum-global-color-blue-500);--spectrum-alias-border-color-disabled:var(--spectrum-global-color-gray-200);--spectrum-alias-border-color-extralight:var(--spectrum-global-color-gray-100);--spectrum-alias-border-color-light:var(--spectrum-global-color-gray-200);--spectrum-alias-border-color-mid:var(--spectrum-global-color-gray-300);--spectrum-alias-border-color-dark:var(--spectrum-global-color-gray-400);--spectrum-alias-border-color-darker-default:var(--spectrum-global-color-gray-600);--spectrum-alias-border-color-darker-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-border-color-darker-down:var(--spectrum-global-color-gray-900);--spectrum-alias-border-color-transparent:transparent;--spectrum-alias-border-color-translucent-dark:#0000000d;--spectrum-alias-border-color-translucent-darker:#0000001a;--spectrum-alias-focus-color:var(--spectrum-global-color-blue-400);--spectrum-alias-focus-ring-color:var(--spectrum-alias-focus-color);--spectrum-alias-track-color-default:var(--spectrum-global-color-gray-300);--spectrum-alias-track-fill-color-overbackground:var(--spectrum-global-color-static-white);--spectrum-alias-track-color-disabled:var(--spectrum-global-color-gray-300);--spectrum-alias-thumbnail-darksquare-background-color:var(--spectrum-global-color-gray-300);--spectrum-alias-thumbnail-lightsquare-background-color:var(--spectrum-global-color-static-white);--spectrum-alias-track-color-overbackground:#fff3;--spectrum-alias-icon-color:var(--spectrum-global-color-gray-700);--spectrum-alias-icon-color-overbackground:var(--spectrum-global-color-static-white);--spectrum-alias-icon-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-key-focus:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-disabled:var(--spectrum-global-color-gray-400);--spectrum-alias-icon-color-overbackground-disabled:#fff3;--spectrum-alias-icon-color-quiet-overbackground-disabled:#ffffff26;--spectrum-alias-icon-color-selected-neutral:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-selected-neutral-subdued:var(--spectrum-global-color-gray-800);--spectrum-alias-icon-color-selected:var(--spectrum-global-color-blue-500);--spectrum-alias-icon-color-selected-hover:var(--spectrum-global-color-blue-600);--spectrum-alias-icon-color-selected-down:var(--spectrum-global-color-blue-700);--spectrum-alias-icon-color-selected-focus:var(--spectrum-global-color-blue-600);--spectrum-alias-image-opacity-disabled:var(--spectrum-global-color-opacity-30);--spectrum-alias-toolbar-background-color:var(--spectrum-global-color-gray-100);--spectrum-alias-code-highlight-color-default:var(--spectrum-global-color-gray-800);--spectrum-alias-code-highlight-background-color:var(--spectrum-global-color-gray-75);--spectrum-alias-code-highlight-color-keyword:var(--spectrum-global-color-fuchsia-600);--spectrum-alias-code-highlight-color-section:var(--spectrum-global-color-red-600);--spectrum-alias-code-highlight-color-literal:var(--spectrum-global-color-blue-600);--spectrum-alias-code-highlight-color-attribute:var(--spectrum-global-color-seafoam-600);--spectrum-alias-code-highlight-color-class:var(--spectrum-global-color-magenta-600);--spectrum-alias-code-highlight-color-variable:var(--spectrum-global-color-purple-600);--spectrum-alias-code-highlight-color-title:var(--spectrum-global-color-indigo-600);--spectrum-alias-code-highlight-color-string:var(--spectrum-global-color-fuchsia-600);--spectrum-alias-code-highlight-color-function:var(--spectrum-global-color-blue-600);--spectrum-alias-code-highlight-color-comment:var(--spectrum-global-color-gray-700);--spectrum-alias-categorical-color-1:var(--spectrum-global-color-static-seafoam-200);--spectrum-alias-categorical-color-2:var(--spectrum-global-color-static-indigo-700);--spectrum-alias-categorical-color-3:var(--spectrum-global-color-static-orange-500);--spectrum-alias-categorical-color-4:var(--spectrum-global-color-static-magenta-500);--spectrum-alias-categorical-color-5:var(--spectrum-global-color-static-indigo-200);--spectrum-alias-categorical-color-6:var(--spectrum-global-color-static-celery-200);--spectrum-alias-categorical-color-7:var(--spectrum-global-color-static-blue-500);--spectrum-alias-categorical-color-8:var(--spectrum-global-color-static-purple-800);--spectrum-alias-categorical-color-9:var(--spectrum-global-color-static-yellow-500);--spectrum-alias-categorical-color-10:var(--spectrum-global-color-static-orange-700);--spectrum-alias-categorical-color-11:var(--spectrum-global-color-static-green-600);--spectrum-alias-categorical-color-12:var(--spectrum-global-color-static-chartreuse-300);--spectrum-alias-categorical-color-13:var(--spectrum-global-color-static-blue-200);--spectrum-alias-categorical-color-14:var(--spectrum-global-color-static-fuchsia-500);--spectrum-alias-categorical-color-15:var(--spectrum-global-color-static-magenta-200);--spectrum-alias-categorical-color-16:var(--spectrum-global-color-static-yellow-200)}:host,:root{-webkit-tap-highlight-color:#0000;--spectrum-focus-indicator-color:var(--spectrum-blue-800);--spectrum-static-white-focus-indicator-color:var(--spectrum-white);--spectrum-static-black-focus-indicator-color:var(--spectrum-black);--spectrum-overlay-color:var(--spectrum-black);--spectrum-drop-shadow-color:var(--spectrum-drop-shadow-color-100);--spectrum-opacity-disabled:.3;--spectrum-background-base-color:var(--spectrum-gray-25);--spectrum-background-layer-1-color:var(--spectrum-gray-50);--spectrum-neutral-background-color-default:var(--spectrum-gray-800);--spectrum-neutral-background-color-hover:var(--spectrum-gray-900);--spectrum-neutral-background-color-down:var(--spectrum-gray-900);--spectrum-neutral-background-color-key-focus:var(--spectrum-gray-900);--spectrum-neutral-background-color-selected-default:var(--spectrum-gray-800);--spectrum-neutral-background-color-selected-hover:var(--spectrum-gray-900);--spectrum-neutral-background-color-selected-down:var(--spectrum-gray-900);--spectrum-neutral-background-color-selected-key-focus:var(--spectrum-gray-900);--spectrum-neutral-subdued-content-color-selected:var(--spectrum-neutral-subdued-content-color-down);--spectrum-accent-content-color-selected:var(--spectrum-accent-content-color-down);--spectrum-disabled-background-color:var(--spectrum-gray-100);--spectrum-disabled-static-white-background-color:var(--spectrum-transparent-white-100);--spectrum-disabled-static-black-background-color:var(--spectrum-transparent-black-100);--spectrum-background-opacity-default:0;--spectrum-background-opacity-hover:.1;--spectrum-background-opacity-down:.1;--spectrum-background-opacity-key-focus:.1;--spectrum-neutral-content-color-default:var(--spectrum-gray-800);--spectrum-neutral-content-color-hover:var(--spectrum-gray-900);--spectrum-neutral-content-color-down:var(--spectrum-gray-900);--spectrum-neutral-content-color-focus-hover:var(--spectrum-neutral-content-color-down);--spectrum-neutral-content-color-focus:var(--spectrum-neutral-content-color-down);--spectrum-neutral-content-color-key-focus:var(--spectrum-gray-900);--spectrum-neutral-subdued-content-color-default:var(--spectrum-gray-700);--spectrum-neutral-subdued-content-color-hover:var(--spectrum-gray-800);--spectrum-neutral-subdued-content-color-down:var(--spectrum-gray-800);--spectrum-neutral-subdued-content-color-key-focus:var(--spectrum-gray-800);--spectrum-accent-content-color-default:var(--spectrum-accent-color-900);--spectrum-accent-content-color-hover:var(--spectrum-accent-color-1000);--spectrum-accent-content-color-down:var(--spectrum-accent-color-1000);--spectrum-accent-content-color-key-focus:var(--spectrum-accent-color-1000);--spectrum-negative-content-color-default:var(--spectrum-negative-color-900);--spectrum-negative-content-color-hover:var(--spectrum-negative-color-1000);--spectrum-negative-content-color-down:var(--spectrum-negative-color-1000);--spectrum-negative-content-color-key-focus:var(--spectrum-negative-color-1000);--spectrum-disabled-content-color:var(--spectrum-gray-400);--spectrum-disabled-static-white-content-color:var(--spectrum-transparent-white-400);--spectrum-disabled-static-black-content-color:var(--spectrum-transparent-black-400);--spectrum-disabled-border-color:var(--spectrum-gray-300);--spectrum-disabled-static-white-border-color:var(--spectrum-transparent-white-300);--spectrum-disabled-static-black-border-color:var(--spectrum-transparent-black-300);--spectrum-negative-border-color-default:var(--spectrum-negative-color-900);--spectrum-negative-border-color-hover:var(--spectrum-negative-color-1000);--spectrum-negative-border-color-down:var(--spectrum-negative-color-1100);--spectrum-negative-border-color-focus-hover:var(--spectrum-negative-border-color-down);--spectrum-negative-border-color-focus:var(--spectrum-negative-color-1000);--spectrum-negative-border-color-key-focus:var(--spectrum-negative-color-1000);--spectrum-title-color:var(--spectrum-gray-900);--spectrum-drop-shadow-emphasized-default-color:var(--spectrum-drop-shadow-color-100);--spectrum-drop-shadow-emphasized-hover-color:var(--spectrum-drop-shadow-color-200);--spectrum-drop-shadow-elevated-color:var(--spectrum-drop-shadow-color-200);--spectrum-drop-shadow-dragged-color:var(--spectrum-drop-shadow-color-300);--spectrum-static-black-text-color:var(--spectrum-black);--spectrum-static-white-text-color:var(--spectrum-white);--spectrum-track-color:var(--spectrum-gray-300);--spectrum-static-black-track-color:var(--spectrum-transparent-black-300);--spectrum-static-white-track-color:var(--spectrum-transparent-white-300);--spectrum-static-black-track-indicator-color:var(--spectrum-transparent-black-900);--spectrum-static-white-track-indicator-color:var(--spectrum-transparent-white-900);--spectrum-swatch-border-color:var(--spectrum-gray-900);--spectrum-swatch-border-opacity:.51;--spectrum-swatch-disabled-icon-border-color:var(--spectrum-black);--spectrum-swatch-disabled-icon-border-opacity:.51;--spectrum-thumbnail-border-color:var(--spectrum-gray-800);--spectrum-thumbnail-border-opacity:.1;--spectrum-thumbnail-opacity-disabled:var(--spectrum-opacity-disabled);--spectrum-opacity-checkerboard-square-light:var(--spectrum-white);--spectrum-avatar-opacity-disabled:var(--spectrum-opacity-disabled);--spectrum-color-area-border-color:var(--spectrum-gray-900);--spectrum-color-area-border-opacity:.1;--spectrum-color-slider-border-color:var(--spectrum-gray-900);--spectrum-color-slider-border-opacity:.1;--spectrum-color-loupe-drop-shadow-color:var(--spectrum-transparent-black-300);--spectrum-color-loupe-inner-border:var(--spectrum-transparent-black-200);--spectrum-color-loupe-outer-border:var(--spectrum-white);--spectrum-card-selection-background-color:var(--spectrum-gray-100);--spectrum-card-selection-background-color-opacity:.95;--spectrum-drop-zone-background-color:var(--spectrum-accent-visual-color);--spectrum-drop-zone-background-color-opacity:.1;--spectrum-drop-zone-background-color-opacity-filled:.3;--spectrum-coach-mark-pagination-color:var(--spectrum-gray-600);--spectrum-color-handle-inner-border-color:var(--spectrum-black);--spectrum-color-handle-inner-border-opacity:.42;--spectrum-color-handle-outer-border-color:var(--spectrum-black);--spectrum-color-handle-outer-border-opacity:var(--spectrum-color-handle-inner-border-opacity);--spectrum-color-handle-drop-shadow-color:var(--spectrum-drop-shadow-color);--spectrum-floating-action-button-drop-shadow-color:var(--spectrum-transparent-black-300);--spectrum-floating-action-button-shadow-color:var(--spectrum-floating-action-button-drop-shadow-color);--spectrum-table-row-hover-color:var(--spectrum-gray-900);--spectrum-table-row-hover-opacity:.07;--spectrum-table-selected-row-background-color:var(--spectrum-informative-background-color-default);--spectrum-table-selected-row-background-opacity:.1;--spectrum-table-selected-row-background-color-non-emphasized:var(--spectrum-neutral-background-color-selected-default);--spectrum-table-selected-row-background-opacity-non-emphasized:.1;--spectrum-table-row-down-opacity:.1;--spectrum-table-selected-row-background-opacity-hover:.15;--spectrum-table-selected-row-background-opacity-non-emphasized-hover:.15;--spectrum-black-rgb:0,0,0;--spectrum-black:rgba(var(--spectrum-black-rgb));--spectrum-transparent-black-1000-rgb:0,0,0;--spectrum-transparent-black-1000:rgba(var(--spectrum-transparent-black-1000-rgb));--spectrum-icon-color-inverse:var(--spectrum-gray-50);--spectrum-icon-color-primary-default:var(--spectrum-neutral-content-color-default);--spectrum-asterisk-icon-size-75:8px;--spectrum-radio-button-selection-indicator:4px;--spectrum-field-label-top-margin-small:0px;--spectrum-field-label-to-component:0px;--spectrum-help-text-to-component:0px;--spectrum-status-light-dot-size-small:8px;--spectrum-action-button-edge-to-hold-icon-extra-small:3px;--spectrum-action-button-edge-to-hold-icon-small:3px;--spectrum-button-minimum-width-multiplier:2.25;--spectrum-divider-thickness-small:1px;--spectrum-divider-thickness-medium:2px;--spectrum-divider-thickness-large:4px;--spectrum-swatch-rectangle-width-multiplier:2;--spectrum-swatch-slash-thickness-extra-small:2px;--spectrum-swatch-slash-thickness-small:3px;--spectrum-swatch-slash-thickness-medium:4px;--spectrum-swatch-slash-thickness-large:5px;--spectrum-progress-bar-minimum-width:48px;--spectrum-progress-bar-maximum-width:768px;--spectrum-meter-minimum-width:48px;--spectrum-meter-maximum-width:768px;--spectrum-meter-default-width:var(--spectrum-meter-width);--spectrum-in-line-alert-minimum-width:240px;--spectrum-popover-tip-width:16px;--spectrum-popover-tip-height:8px;--spectrum-menu-item-label-to-description:1px;--spectrum-menu-item-section-divider-height:8px;--spectrum-slider-track-thickness:2px;--spectrum-slider-handle-gap:4px;--spectrum-picker-minimum-width-multiplier:2;--spectrum-picker-border-width:var(--spectrum-border-width-100);--spectrum-picker-end-edge-to-disclousure-icon-quiet:var(--spectrum-picker-end-edge-to-disclosure-icon-quiet);--spectrum-picker-end-edge-to-disclosure-icon-quiet:0px;--spectrum-text-field-minimum-width-multiplier:1.5;--spectrum-combo-box-minimum-width-multiplier:2.5;--spectrum-combo-box-quiet-minimum-width-multiplier:2;--spectrum-combo-box-visual-to-field-button-quiet:0px;--spectrum-alert-dialog-minimum-width:288px;--spectrum-alert-dialog-maximum-width:480px;--spectrum-contextual-help-minimum-width:268px;--spectrum-breadcrumbs-height:var(--spectrum-component-height-300);--spectrum-breadcrumbs-height-compact:var(--spectrum-component-height-200);--spectrum-breadcrumbs-end-edge-to-text:0px;--spectrum-breadcrumbs-truncated-menu-to-separator-icon:0px;--spectrum-breadcrumbs-start-edge-to-truncated-menu:0px;--spectrum-breadcrumbs-truncated-menu-to-bottom-text:0px;--spectrum-alert-banner-to-top-workflow-icon:var(--spectrum-alert-banner-top-to-workflow-icon);--spectrum-alert-banner-to-top-text:var(--spectrum-alert-banner-top-to-text);--spectrum-alert-banner-to-bottom-text:var(--spectrum-alert-banner-bottom-to-text);--spectrum-color-area-border-width:var(--spectrum-border-width-100);--spectrum-color-area-border-rounding:var(--spectrum-corner-radius-medium-size-small);--spectrum-color-wheel-color-area-margin:12px;--spectrum-color-slider-border-width:1px;--spectrum-color-slider-border-rounding:var(--spectrum-corner-radius-medium-size-small);--spectrum-floating-action-button-drop-shadow-blur:12px;--spectrum-floating-action-button-drop-shadow-y:4px;--spectrum-illustrated-message-maximum-width:380px;--spectrum-search-field-minimum-width-multiplier:3;--spectrum-color-loupe-height:64px;--spectrum-color-loupe-width:48px;--spectrum-color-loupe-bottom-to-color-handle:12px;--spectrum-color-loupe-outer-border-width:var(--spectrum-border-width-200);--spectrum-color-loupe-inner-border-width:1px;--spectrum-color-loupe-drop-shadow-y:2px;--spectrum-color-loupe-drop-shadow-blur:8px;--spectrum-card-minimum-width:100px;--spectrum-card-preview-minimum-height:130px;--spectrum-card-selection-background-size:40px;--spectrum-drop-zone-width:428px;--spectrum-drop-zone-content-maximum-width:var(--spectrum-illustrated-message-maximum-width);--spectrum-drop-zone-border-dash-length:8px;--spectrum-drop-zone-border-dash-gap:4px;--spectrum-drop-zone-title-size:var(--spectrum-illustrated-message-title-size);--spectrum-drop-zone-cjk-title-size:var(--spectrum-illustrated-message-cjk-title-size);--spectrum-drop-zone-body-size:var(--spectrum-illustrated-message-body-size);--spectrum-accordion-top-to-text-compact-small:2px;--spectrum-accordion-top-to-text-compact-medium:4px;--spectrum-accordion-disclosure-indicator-to-text:0px;--spectrum-accordion-edge-to-disclosure-indicator:0px;--spectrum-accordion-edge-to-text:0px;--spectrum-accordion-focus-indicator-gap:0px;--spectrum-color-handle-border-width:var(--spectrum-border-width-200);--spectrum-color-handle-inner-border-width:1px;--spectrum-color-handle-outer-border-width:1px;--spectrum-color-handle-drop-shadow-x:0;--spectrum-color-handle-drop-shadow-y:0;--spectrum-color-handle-drop-shadow-blur:0;--spectrum-table-row-height-small-compact:var(--spectrum-component-height-75);--spectrum-table-row-height-medium-compact:var(--spectrum-component-height-100);--spectrum-table-row-height-large-compact:var(--spectrum-component-height-200);--spectrum-table-row-height-extra-large-compact:var(--spectrum-component-height-300);--spectrum-table-row-top-to-text-small-compact:var(--spectrum-component-top-to-text-75);--spectrum-table-row-top-to-text-medium-compact:var(--spectrum-component-top-to-text-100);--spectrum-table-row-top-to-text-large-compact:var(--spectrum-component-top-to-text-200);--spectrum-table-row-top-to-text-extra-large-compact:var(--spectrum-component-top-to-text-300);--spectrum-table-row-bottom-to-text-small-compact:var(--spectrum-component-bottom-to-text-75);--spectrum-table-row-bottom-to-text-medium-compact:var(--spectrum-component-bottom-to-text-100);--spectrum-table-row-bottom-to-text-large-compact:var(--spectrum-component-bottom-to-text-200);--spectrum-table-row-bottom-to-text-extra-large-compact:var(--spectrum-component-bottom-to-text-300);--spectrum-table-edge-to-content:16px;--spectrum-table-border-divider-width:1px;--spectrum-tab-item-height-small:var(--spectrum-component-height-200);--spectrum-tab-item-height-medium:var(--spectrum-component-height-300);--spectrum-tab-item-height-large:var(--spectrum-component-height-400);--spectrum-tab-item-height-extra-large:var(--spectrum-component-height-500);--spectrum-tab-item-compact-height-small:var(--spectrum-component-height-75);--spectrum-tab-item-compact-height-medium:var(--spectrum-component-height-100);--spectrum-tab-item-compact-height-large:var(--spectrum-component-height-200);--spectrum-tab-item-compact-height-extra-large:var(--spectrum-component-height-300);--spectrum-tab-item-start-to-edge-quiet:0px;--spectrum-in-field-button-width-stacked-small:20px;--spectrum-in-field-button-width-stacked-medium:28px;--spectrum-in-field-button-width-stacked-large:36px;--spectrum-in-field-button-width-stacked-extra-large:44px;--spectrum-in-field-button-fill-stacked-inner-border-rounding:0px;--spectrum-in-field-button-edge-to-fill:0px;--spectrum-in-field-button-stacked-inner-edge-to-fill:0px;--spectrum-in-field-button-edge-to-disclosure-icon-stacked-small:7px;--spectrum-in-field-button-edge-to-disclosure-icon-stacked-medium:9px;--spectrum-in-field-button-edge-to-disclosure-icon-stacked-large:13px;--spectrum-in-field-button-edge-to-disclosure-icon-stacked-extra-large:16px;--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-small:3px;--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-medium:3px;--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-large:4px;--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-extra-large:5px;--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-small:var(--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-small);--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-medium:var(--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-medium);--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-large:var(--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-large);--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-extra-large:var(--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-extra-large);--spectrum-corner-radius-0:0px;--spectrum-corner-radius-75:4px;--spectrum-corner-radius-100:8px;--spectrum-corner-radius-200:10px;--spectrum-corner-radius-300:6px;--spectrum-corner-radius-400:7px;--spectrum-corner-radius-500:8px;--spectrum-corner-radius-600:9px;--spectrum-corner-radius-700:10px;--spectrum-corner-radius-800:16px;--spectrum-corner-radius-1000:.5;--spectrum-corner-radius-none:var(--spectrum-corner-radius-0);--spectrum-corner-radius-small-default:var(--spectrum-corner-radius-100);--spectrum-corner-radius-medium-default:var(--spectrum-corner-radius-500);--spectrum-corner-radius-large-default:var(--spectrum-corner-radius-700);--spectrum-corner-radius-extra-large-default:var(--spectrum-corner-radius-800);--spectrum-corner-radius-full:var(--spectrum-corner-radius-1000);--spectrum-corner-radius-small-size-small:var(--spectrum-corner-radius-75);--spectrum-corner-radius-small-size-medium:var(--spectrum-corner-radius-100);--spectrum-corner-radius-small-size-large:var(--spectrum-corner-radius-200);--spectrum-corner-radius-small-size-extra-large:var(--spectrum-corner-radius-300);--spectrum-corner-radius-medium-size-extra-small:var(--spectrum-corner-radius-300);--spectrum-corner-radius-medium-size-small:var(--spectrum-corner-radius-400);--spectrum-corner-radius-medium-size-medium:var(--spectrum-corner-radius-500);--spectrum-corner-radius-medium-size-large:var(--spectrum-corner-radius-600);--spectrum-corner-radius-medium-size-extra-large:var(--spectrum-corner-radius-700);--spectrum-drop-shadow-x:0px;--spectrum-spacing-50:2px;--spectrum-spacing-75:4px;--spectrum-spacing-100:8px;--spectrum-spacing-200:12px;--spectrum-spacing-300:16px;--spectrum-spacing-400:24px;--spectrum-spacing-500:32px;--spectrum-spacing-600:40px;--spectrum-spacing-700:48px;--spectrum-spacing-800:64px;--spectrum-spacing-900:80px;--spectrum-spacing-1000:96px;--spectrum-focus-indicator-thickness:2px;--spectrum-focus-indicator-gap:2px;--spectrum-border-width-100:1px;--spectrum-border-width-200:2px;--spectrum-border-width-400:4px;--spectrum-field-edge-to-text-quiet:0px;--spectrum-field-edge-to-visual-quiet:0px;--spectrum-field-edge-to-border-quiet:0px;--spectrum-field-edge-to-alert-icon-quiet:0px;--spectrum-field-edge-to-validation-icon-quiet:0px;--spectrum-text-underline-thickness:1px;--spectrum-text-underline-gap:1px;--spectrum-accent-color-100:var(--spectrum-blue-100);--spectrum-accent-color-200:var(--spectrum-blue-200);--spectrum-accent-color-300:var(--spectrum-blue-300);--spectrum-accent-color-400:var(--spectrum-blue-400);--spectrum-accent-color-500:var(--spectrum-blue-500);--spectrum-accent-color-600:var(--spectrum-blue-600);--spectrum-accent-color-700:var(--spectrum-blue-700);--spectrum-accent-color-800:var(--spectrum-blue-800);--spectrum-accent-color-900:var(--spectrum-blue-900);--spectrum-accent-color-1000:var(--spectrum-blue-1000);--spectrum-accent-color-1100:var(--spectrum-blue-1100);--spectrum-accent-color-1200:var(--spectrum-blue-1200);--spectrum-accent-color-1300:var(--spectrum-blue-1300);--spectrum-accent-color-1400:var(--spectrum-blue-1400);--spectrum-accent-color-1500:var(--spectrum-blue-1500);--spectrum-accent-color-1600:var(--spectrum-blue-1600);--spectrum-informative-color-100:var(--spectrum-blue-100);--spectrum-informative-color-200:var(--spectrum-blue-200);--spectrum-informative-color-300:var(--spectrum-blue-300);--spectrum-informative-color-400:var(--spectrum-blue-400);--spectrum-informative-color-500:var(--spectrum-blue-500);--spectrum-informative-color-600:var(--spectrum-blue-600);--spectrum-informative-color-700:var(--spectrum-blue-700);--spectrum-informative-color-800:var(--spectrum-blue-800);--spectrum-informative-color-900:var(--spectrum-blue-900);--spectrum-informative-color-1000:var(--spectrum-blue-1000);--spectrum-informative-color-1100:var(--spectrum-blue-1100);--spectrum-informative-color-1200:var(--spectrum-blue-1200);--spectrum-informative-color-1300:var(--spectrum-blue-1300);--spectrum-informative-color-1400:var(--spectrum-blue-1400);--spectrum-informative-color-1500:var(--spectrum-blue-1500);--spectrum-informative-color-1600:var(--spectrum-blue-1600);--spectrum-negative-color-100:var(--spectrum-red-100);--spectrum-negative-color-200:var(--spectrum-red-200);--spectrum-negative-color-300:var(--spectrum-red-300);--spectrum-negative-color-400:var(--spectrum-red-400);--spectrum-negative-color-500:var(--spectrum-red-500);--spectrum-negative-color-600:var(--spectrum-red-600);--spectrum-negative-color-700:var(--spectrum-red-700);--spectrum-negative-color-800:var(--spectrum-red-800);--spectrum-negative-color-900:var(--spectrum-red-900);--spectrum-negative-color-1000:var(--spectrum-red-1000);--spectrum-negative-color-1100:var(--spectrum-red-1100);--spectrum-negative-color-1200:var(--spectrum-red-1200);--spectrum-negative-color-1300:var(--spectrum-red-1300);--spectrum-negative-color-1400:var(--spectrum-red-1400);--spectrum-negative-color-1500:var(--spectrum-red-1500);--spectrum-negative-color-1600:var(--spectrum-red-1600);--spectrum-notice-color-100:var(--spectrum-orange-100);--spectrum-notice-color-200:var(--spectrum-orange-200);--spectrum-notice-color-300:var(--spectrum-orange-300);--spectrum-notice-color-400:var(--spectrum-orange-400);--spectrum-notice-color-500:var(--spectrum-orange-500);--spectrum-notice-color-600:var(--spectrum-orange-600);--spectrum-notice-color-700:var(--spectrum-orange-700);--spectrum-notice-color-800:var(--spectrum-orange-800);--spectrum-notice-color-900:var(--spectrum-orange-900);--spectrum-notice-color-1000:var(--spectrum-orange-1000);--spectrum-notice-color-1100:var(--spectrum-orange-1100);--spectrum-notice-color-1200:var(--spectrum-orange-1200);--spectrum-notice-color-1300:var(--spectrum-orange-1300);--spectrum-notice-color-1400:var(--spectrum-orange-1400);--spectrum-notice-color-1500:var(--spectrum-orange-1500);--spectrum-notice-color-1600:var(--spectrum-orange-1600);--spectrum-positive-color-100:var(--spectrum-green-100);--spectrum-positive-color-200:var(--spectrum-green-200);--spectrum-positive-color-300:var(--spectrum-green-300);--spectrum-positive-color-400:var(--spectrum-green-400);--spectrum-positive-color-500:var(--spectrum-green-500);--spectrum-positive-color-600:var(--spectrum-green-600);--spectrum-positive-color-700:var(--spectrum-green-700);--spectrum-positive-color-800:var(--spectrum-green-800);--spectrum-positive-color-900:var(--spectrum-green-900);--spectrum-positive-color-1000:var(--spectrum-green-1000);--spectrum-positive-color-1100:var(--spectrum-green-1100);--spectrum-positive-color-1200:var(--spectrum-green-1200);--spectrum-positive-color-1300:var(--spectrum-green-1300);--spectrum-positive-color-1400:var(--spectrum-green-1400);--spectrum-positive-color-1500:var(--spectrum-green-1500);--spectrum-positive-color-1600:var(--spectrum-green-1600);--spectrum-negative-subdued-background-color-hover:var(--spectrum-negative-color-300);--spectrum-negative-subdued-background-color-down:var(--spectrum-negative-color-300);--spectrum-negative-subdued-background-color-key-focus:var(--spectrum-negative-color-300);--spectrum-default-font-family:var(--spectrum-sans-serif-font-family);--spectrum-sans-serif-font-family:Adobe Clean;--spectrum-serif-font-family:Adobe Clean Serif;--spectrum-cjk-font-family:Adobe Clean Han;--spectrum-light-font-weight:300;--spectrum-regular-font-weight:400;--spectrum-medium-font-weight:500;--spectrum-bold-font-weight:700;--spectrum-extra-bold-font-weight:800;--spectrum-black-font-weight:900;--spectrum-italic-font-style:italic;--spectrum-default-font-style:normal;--spectrum-line-height-100:1.3;--spectrum-line-height-200:1.5;--spectrum-cjk-line-height-100:1.5;--spectrum-cjk-line-height-200:1.7;--spectrum-cjk-letter-spacing:.05em;--spectrum-heading-sans-serif-font-family:var(--spectrum-sans-serif-font-family);--spectrum-heading-serif-font-family:var(--spectrum-serif-font-family);--spectrum-heading-cjk-font-family:var(--spectrum-cjk-font-family);--spectrum-heading-sans-serif-light-font-weight:var(--spectrum-light-font-weight);--spectrum-heading-sans-serif-light-font-style:var(--spectrum-default-font-style);--spectrum-heading-serif-light-font-weight:var(--spectrum-regular-font-weight);--spectrum-heading-serif-light-font-style:var(--spectrum-default-font-style);--spectrum-heading-cjk-light-font-weight:var(--spectrum-light-font-weight);--spectrum-heading-cjk-light-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-sans-serif-font-style:var(--spectrum-default-font-style);--spectrum-heading-serif-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-serif-font-style:var(--spectrum-default-font-style);--spectrum-heading-cjk-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-heading-cjk-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-heavy-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-sans-serif-heavy-font-style:var(--spectrum-default-font-style);--spectrum-heading-serif-heavy-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-serif-heavy-font-style:var(--spectrum-default-font-style);--spectrum-heading-cjk-heavy-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-heavy-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-light-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-sans-serif-light-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-serif-light-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-serif-light-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-cjk-light-strong-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-heading-cjk-light-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-sans-serif-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-serif-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-serif-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-cjk-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-heavy-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-sans-serif-heavy-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-serif-heavy-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-serif-heavy-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-cjk-heavy-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-heavy-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-light-emphasized-font-weight:var(--spectrum-light-font-weight);--spectrum-heading-sans-serif-light-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-serif-light-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-heading-serif-light-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-cjk-light-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-heading-cjk-light-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-sans-serif-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-serif-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-serif-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-cjk-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-heavy-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-sans-serif-heavy-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-serif-heavy-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-serif-heavy-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-cjk-heavy-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-heavy-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-light-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-sans-serif-light-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-serif-light-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-serif-light-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-cjk-light-strong-emphasized-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-heading-cjk-light-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-sans-serif-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-serif-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-serif-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-cjk-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-heavy-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-sans-serif-heavy-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-serif-heavy-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-serif-heavy-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-cjk-heavy-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-heavy-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-heading-size-xxxl:var(--spectrum-font-size-1300);--spectrum-heading-size-xxl:var(--spectrum-font-size-1100);--spectrum-heading-size-xl:var(--spectrum-font-size-900);--spectrum-heading-size-l:var(--spectrum-font-size-700);--spectrum-heading-size-m:var(--spectrum-font-size-500);--spectrum-heading-size-s:var(--spectrum-font-size-300);--spectrum-heading-size-xs:var(--spectrum-font-size-200);--spectrum-heading-size-xxs:var(--spectrum-font-size-100);--spectrum-heading-cjk-size-xxxl:var(--spectrum-font-size-1300);--spectrum-heading-cjk-size-xxl:var(--spectrum-font-size-900);--spectrum-heading-cjk-size-xl:var(--spectrum-font-size-800);--spectrum-heading-cjk-size-l:var(--spectrum-font-size-600);--spectrum-heading-cjk-size-m:var(--spectrum-font-size-400);--spectrum-heading-cjk-size-s:var(--spectrum-font-size-300);--spectrum-heading-cjk-size-xs:var(--spectrum-font-size-200);--spectrum-heading-cjk-size-xxs:var(--spectrum-font-size-100);--spectrum-heading-line-height:var(--spectrum-line-height-100);--spectrum-heading-cjk-line-height:var(--spectrum-cjk-line-height-100);--spectrum-heading-margin-top-multiplier:.888889;--spectrum-heading-margin-bottom-multiplier:.25;--spectrum-heading-color:var(--spectrum-gray-900);--spectrum-body-sans-serif-font-family:var(--spectrum-sans-serif-font-family);--spectrum-body-serif-font-family:var(--spectrum-serif-font-family);--spectrum-body-cjk-font-family:var(--spectrum-cjk-font-family);--spectrum-body-sans-serif-font-weight:var(--spectrum-regular-font-weight);--spectrum-body-sans-serif-font-style:var(--spectrum-default-font-style);--spectrum-body-serif-font-weight:var(--spectrum-regular-font-weight);--spectrum-body-serif-font-style:var(--spectrum-default-font-style);--spectrum-body-cjk-font-weight:var(--spectrum-regular-font-weight);--spectrum-body-cjk-font-style:var(--spectrum-default-font-style);--spectrum-body-sans-serif-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-body-sans-serif-strong-font-style:var(--spectrum-default-font-style);--spectrum-body-serif-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-body-serif-strong-font-style:var(--spectrum-default-font-style);--spectrum-body-cjk-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-body-cjk-strong-font-style:var(--spectrum-default-font-style);--spectrum-body-sans-serif-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-body-sans-serif-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-body-serif-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-body-serif-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-body-cjk-emphasized-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-body-cjk-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-body-sans-serif-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-body-sans-serif-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-body-serif-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-body-serif-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-body-cjk-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-body-cjk-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-body-size-xxxl:var(--spectrum-font-size-600);--spectrum-body-size-xxl:var(--spectrum-font-size-500);--spectrum-body-size-xl:var(--spectrum-font-size-400);--spectrum-body-size-l:var(--spectrum-font-size-300);--spectrum-body-size-m:var(--spectrum-font-size-200);--spectrum-body-size-s:var(--spectrum-font-size-100);--spectrum-body-size-xs:var(--spectrum-font-size-75);--spectrum-body-line-height:var(--spectrum-line-height-200);--spectrum-body-cjk-line-height:var(--spectrum-cjk-line-height-200);--spectrum-body-margin-multiplier:.75;--spectrum-body-color:var(--spectrum-gray-800);--spectrum-detail-sans-serif-font-family:var(--spectrum-sans-serif-font-family);--spectrum-detail-serif-font-family:var(--spectrum-serif-font-family);--spectrum-detail-cjk-font-family:var(--spectrum-cjk-font-family);--spectrum-detail-sans-serif-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-sans-serif-font-style:var(--spectrum-default-font-style);--spectrum-detail-serif-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-serif-font-style:var(--spectrum-default-font-style);--spectrum-detail-cjk-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-detail-cjk-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-light-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-sans-serif-light-font-style:var(--spectrum-default-font-style);--spectrum-detail-serif-light-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-serif-light-font-style:var(--spectrum-default-font-style);--spectrum-detail-cjk-light-font-weight:var(--spectrum-light-font-weight);--spectrum-detail-cjk-light-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-sans-serif-strong-font-style:var(--spectrum-default-font-style);--spectrum-detail-serif-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-serif-strong-font-style:var(--spectrum-default-font-style);--spectrum-detail-cjk-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-detail-cjk-strong-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-light-strong-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-sans-serif-light-strong-font-style:var(--spectrum-default-font-style);--spectrum-detail-serif-light-strong-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-serif-light-strong-font-style:var(--spectrum-default-font-style);--spectrum-detail-cjk-light-strong-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-detail-cjk-light-strong-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-sans-serif-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-serif-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-serif-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-cjk-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-detail-cjk-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-light-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-sans-serif-light-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-serif-light-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-serif-light-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-cjk-light-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-cjk-light-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-sans-serif-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-serif-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-serif-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-cjk-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-detail-cjk-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-light-strong-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-sans-serif-light-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-serif-light-strong-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-serif-light-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-cjk-light-strong-emphasized-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-detail-cjk-light-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-detail-size-xl:var(--spectrum-font-size-200);--spectrum-detail-size-l:var(--spectrum-font-size-100);--spectrum-detail-size-m:var(--spectrum-font-size-75);--spectrum-detail-size-s:var(--spectrum-font-size-50);--spectrum-detail-line-height:var(--spectrum-line-height-100);--spectrum-detail-cjk-line-height:var(--spectrum-cjk-line-height-100);--spectrum-detail-margin-top-multiplier:.888889;--spectrum-detail-margin-bottom-multiplier:.25;--spectrum-detail-letter-spacing:.06em;--spectrum-detail-sans-serif-text-transform:uppercase;--spectrum-detail-serif-text-transform:uppercase;--spectrum-detail-color:var(--spectrum-gray-900);--spectrum-code-font-family:Source Code Pro;--spectrum-code-cjk-font-family:var(--spectrum-code-font-family);--spectrum-code-font-weight:var(--spectrum-regular-font-weight);--spectrum-code-font-style:var(--spectrum-default-font-style);--spectrum-code-cjk-font-weight:var(--spectrum-regular-font-weight);--spectrum-code-cjk-font-style:var(--spectrum-default-font-style);--spectrum-code-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-code-strong-font-style:var(--spectrum-default-font-style);--spectrum-code-cjk-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-code-cjk-strong-font-style:var(--spectrum-default-font-style);--spectrum-code-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-code-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-code-cjk-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-code-cjk-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-code-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-code-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-code-cjk-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-code-cjk-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-code-size-xl:var(--spectrum-font-size-400);--spectrum-code-size-l:var(--spectrum-font-size-300);--spectrum-code-size-m:var(--spectrum-font-size-200);--spectrum-code-size-s:var(--spectrum-font-size-100);--spectrum-code-size-xs:var(--spectrum-font-size-75);--spectrum-code-line-height:var(--spectrum-line-height-200);--spectrum-code-cjk-line-height:var(--spectrum-cjk-line-height-200);--spectrum-code-color:var(--spectrum-gray-800);--system:spectrum;--spectrum-animation-duration-0:0s;--spectrum-animation-duration-100:.13s;--spectrum-animation-duration-200:.16s;--spectrum-animation-duration-300:.19s;--spectrum-animation-duration-400:.22s;--spectrum-animation-duration-500:.25s;--spectrum-animation-duration-600:.3s;--spectrum-animation-duration-700:.35s;--spectrum-animation-duration-800:.4s;--spectrum-animation-duration-900:.45s;--spectrum-animation-duration-1000:.5s;--spectrum-animation-duration-2000:1s;--spectrum-animation-duration-4000:2s;--spectrum-animation-duration-6000:3s;--spectrum-animation-linear:cubic-bezier(0,0,1,1);--spectrum-animation-ease-in-out:cubic-bezier(.45,0,.4,1);--spectrum-animation-ease-in:cubic-bezier(.5,0,1,1);--spectrum-animation-ease-out:cubic-bezier(0,0,.4,1);--spectrum-animation-ease-linear:cubic-bezier(0,0,1,1);--spectrum-sans-font-family-stack:adobe-clean,var(--spectrum-sans-serif-font-family),"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-sans-serif-font:var(--spectrum-sans-font-family-stack);--spectrum-serif-font-family-stack:adobe-clean-serif,var(--spectrum-serif-font-family),"Source Serif Pro",Georgia,serif;--spectrum-serif-font:var(--spectrum-serif-font-family-stack);--spectrum-code-font-family-stack:"Source Code Pro",Monaco,monospace;--spectrum-font-family-ar:myriad-arabic,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-font-family-he:myriad-hebrew,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-font-family:var(--spectrum-sans-font-family-stack);--spectrum-font-style:var(--spectrum-default-font-style);--spectrum-font-size:var(--spectrum-font-size-100);--spectrum-cjk-font-family-stack:adobe-clean-han-japanese,var(--spectrum-cjk-font-family),sans-serif;--spectrum-cjk-font:var(--spectrum-cjk-font-family-stack);--spectrum-docs-static-white-background-color-rgb:15,121,125;--spectrum-docs-static-white-background-color:rgba(var(--spectrum-docs-static-white-background-color-rgb));--spectrum-docs-static-black-background-color-rgb:181,209,211;--spectrum-docs-static-black-background-color:rgba(var(--spectrum-docs-static-black-background-color-rgb));--spectrum-coach-indicator-ring-static-white-color:var(--spectrum-white);--spectrum-static-blue-900-rgb:59 99 251;--spectrum-static-blue-900:rgb(var(--spectrum-static-blue-900-rgb));--spectrum-static-blue-1000-rgb:39 77 234;--spectrum-static-blue-1000:rgb(var(--spectrum-static-blue-1000-rgb));--spectrum-static-fuchsia-400-rgb:247 181 255;--spectrum-static-fuchsia-400:rgb(var(--spectrum-static-fuchsia-400-rgb));--spectrum-static-fuchsia-600-rgb:236 105 255;--spectrum-static-fuchsia-600:rgb(var(--spectrum-static-fuchsia-600-rgb));--spectrum-static-fuchsia-800-rgb:200 68 220;--spectrum-static-fuchsia-800:rgb(var(--spectrum-static-fuchsia-800-rgb));--spectrum-static-fuchsia-900-rgb:181 57 200;--spectrum-static-fuchsia-900:rgb(var(--spectrum-static-fuchsia-900-rgb));--spectrum-static-fuchsia-1000-rgb:156 40 175;--spectrum-static-fuchsia-1000:rgb(var(--spectrum-static-fuchsia-1000-rgb));--spectrum-static-indigo-400-rgb:192 201 255;--spectrum-static-indigo-400:rgb(var(--spectrum-static-indigo-400-rgb));--spectrum-static-indigo-600-rgb:145 151 254;--spectrum-static-indigo-600:rgb(var(--spectrum-static-indigo-600-rgb));--spectrum-static-indigo-800-rgb:122 106 253;--spectrum-static-indigo-800:rgb(var(--spectrum-static-indigo-800-rgb));--spectrum-static-indigo-900-rgb:113 85 250;--spectrum-static-indigo-900:rgb(var(--spectrum-static-indigo-900-rgb));--spectrum-static-indigo-1000-rgb:99 56 238;--spectrum-static-indigo-1000:rgb(var(--spectrum-static-indigo-1000-rgb));--spectrum-static-magenta-400-rgb:255 185 208;--spectrum-static-magenta-400:rgb(var(--spectrum-static-magenta-400-rgb));--spectrum-static-magenta-600-rgb:255 112 159;--spectrum-static-magenta-600:rgb(var(--spectrum-static-magenta-600-rgb));--spectrum-static-magenta-800-rgb:240 45 110;--spectrum-static-magenta-800:rgb(var(--spectrum-static-magenta-800-rgb));--spectrum-static-magenta-900-rgb:217 35 97;--spectrum-static-magenta-900:rgb(var(--spectrum-static-magenta-900-rgb));--spectrum-static-magenta-1000-rgb:186 22 80;--spectrum-static-magenta-1000:rgb(var(--spectrum-static-magenta-1000-rgb));--spectrum-static-red-400-rgb:255 188 180;--spectrum-static-red-400:rgb(var(--spectrum-static-red-400-rgb));--spectrum-static-red-600-rgb:255 118 101;--spectrum-static-red-600:rgb(var(--spectrum-static-red-600-rgb));--spectrum-static-red-800-rgb:240 56 35;--spectrum-static-red-800:rgb(var(--spectrum-static-red-800-rgb));--spectrum-static-red-900-rgb:215 50 32;--spectrum-static-red-900:rgb(var(--spectrum-static-red-900-rgb));--spectrum-static-red-1000-rgb:183 40 24;--spectrum-static-red-1000:rgb(var(--spectrum-static-red-1000-rgb));--spectrum-static-cyan-400-rgb:138 213 255;--spectrum-static-cyan-400:rgb(var(--spectrum-static-cyan-400-rgb));--spectrum-static-cyan-600-rgb:48 167 254;--spectrum-static-cyan-600:rgb(var(--spectrum-static-cyan-600-rgb));--spectrum-static-cyan-800-rgb:18 134 205;--spectrum-static-cyan-800:rgb(var(--spectrum-static-cyan-800-rgb));--spectrum-static-chartreuse-400-rgb:182 219 0;--spectrum-static-chartreuse-400:rgb(var(--spectrum-static-chartreuse-400-rgb));--spectrum-static-chartreuse-600-rgb:143 172 0;--spectrum-static-chartreuse-600:rgb(var(--spectrum-static-chartreuse-600-rgb));--spectrum-static-chartreuse-800-rgb:114 137 0;--spectrum-static-chartreuse-800:rgb(var(--spectrum-static-chartreuse-800-rgb));--spectrum-static-green-400-rgb:107 227 162;--spectrum-static-green-400:rgb(var(--spectrum-static-green-400-rgb));--spectrum-static-green-600-rgb:18 184 103;--spectrum-static-green-600:rgb(var(--spectrum-static-green-600-rgb));--spectrum-static-green-800-rgb:7 147 85;--spectrum-static-green-800:rgb(var(--spectrum-static-green-800-rgb));--spectrum-static-orange-400-rgb:255 193 94;--spectrum-static-orange-400:rgb(var(--spectrum-static-orange-400-rgb));--spectrum-static-orange-600-rgb:252 125 0;--spectrum-static-orange-600:rgb(var(--spectrum-static-orange-600-rgb));--spectrum-static-orange-800-rgb:212 91 0;--spectrum-static-orange-800:rgb(var(--spectrum-static-orange-800-rgb));--spectrum-static-purple-400-rgb:221 193 246;--spectrum-static-purple-400:rgb(var(--spectrum-static-purple-400-rgb));--spectrum-static-purple-600-rgb:191 138 238;--spectrum-static-purple-600:rgb(var(--spectrum-static-purple-600-rgb));--spectrum-static-purple-800-rgb:166 92 231;--spectrum-static-purple-800:rgb(var(--spectrum-static-purple-800-rgb));--spectrum-static-turquoise-400-rgb:111 221 228;--spectrum-static-turquoise-400:rgb(var(--spectrum-static-turquoise-400-rgb));--spectrum-static-turquoise-600-rgb:15 177 192;--spectrum-static-turquoise-600:rgb(var(--spectrum-static-turquoise-600-rgb));--spectrum-static-turquoise-800-rgb:10 141 153;--spectrum-static-turquoise-800:rgb(var(--spectrum-static-turquoise-800-rgb));--system-accordion-divider-color:var(--spectrum-gray-200);--system-accordion-item-content-disabled-color:var(--spectrum-disabled-content-color);--system-accordion-item-content-color:var(--spectrum-body-color);--system-action-bar-popover-background-color:var(--spectrum-gray-25);--system-action-bar-popover-border-color:var(--spectrum-gray-400);--system-action-button-background-color-default:var(--spectrum-gray-100);--system-action-button-background-color-hover:var(--spectrum-gray-200);--system-action-button-background-color-down:var(--spectrum-gray-200);--system-action-button-background-color-focus:var(--spectrum-gray-200);--system-action-button-background-color-disabled:var(--spectrum-disabled-background-color);--system-action-button-background-color-selected:var(--spectrum-neutral-background-color-selected-default);--system-action-button-background-color-selected-hover:var(--spectrum-neutral-background-color-selected-hover);--system-action-button-background-color-selected-down:var(--spectrum-neutral-background-color-selected-down);--system-action-button-background-color-selected-focus:var(--spectrum-neutral-background-color-selected-key-focus);--system-action-button-border-color-default:transparent;--system-action-button-border-color-hover:transparent;--system-action-button-border-color-down:transparent;--system-action-button-border-color-focus:transparent;--system-action-button-border-color-disabled:transparent;--system-action-button-content-color-selected:var(--spectrum-gray-50);--system-action-button-size-m-border-radius-default:var(--spectrum-corner-radius-medium-size-medium);--system-action-button-size-xs-border-radius-default:var(--spectrum-corner-radius-medium-size-extra-small);--system-action-button-size-s-border-radius-default:var(--spectrum-corner-radius-medium-size-small);--system-action-button-size-l-border-radius-default:var(--spectrum-corner-radius-medium-size-large);--system-action-button-size-xl-border-radius-default:var(--spectrum-corner-radius-medium-size-extra-large);--system-action-button-quiet-background-color-default:transparent;--system-action-button-quiet-background-color-hover:var(--spectrum-gray-200);--system-action-button-quiet-background-color-down:var(--spectrum-gray-200);--system-action-button-quiet-background-color-focus:var(--spectrum-gray-200);--system-action-button-quiet-background-color-disabled:transparent;--system-action-button-quiet-background-color-selected-disabled:var(--spectrum-disabled-background-color);--system-action-button-static-black-border-color-default:transparent;--system-action-button-static-black-border-color-hover:transparent;--system-action-button-static-black-border-color-down:transparent;--system-action-button-static-black-border-color-focus:transparent;--system-action-button-static-black-border-color-disabled:transparent;--system-action-button-static-black-background-color-disabled:var(--spectrum-disabled-static-black-background-color);--system-action-button-static-black-background-color-selected-disabled:var(--spectrum-disabled-static-black-background-color);--system-action-button-static-black-background-color-default:var(--spectrum-transparent-black-100);--system-action-button-static-black-background-color-hover:var(--spectrum-transparent-black-200);--system-action-button-static-black-background-color-down:var(--spectrum-transparent-black-200);--system-action-button-static-black-background-color-focus:var(--spectrum-transparent-black-200);--system-action-button-static-black-quiet-background-color-default:transparent;--system-action-button-static-black-quiet-background-color-hover:var(--spectrum-transparent-black-200);--system-action-button-static-black-quiet-background-color-down:var(--spectrum-transparent-black-200);--system-action-button-static-black-quiet-background-color-focus:var(--spectrum-transparent-black-200);--system-action-button-static-black-quiet-background-color-disabled:transparent;--system-action-button-static-white-border-color-default:transparent;--system-action-button-static-white-border-color-hover:transparent;--system-action-button-static-white-border-color-down:transparent;--system-action-button-static-white-border-color-focus:transparent;--system-action-button-static-white-border-color-disabled:transparent;--system-action-button-static-white-background-color-disabled:var(--spectrum-disabled-static-white-background-color);--system-action-button-static-white-background-color-selected-disabled:var(--spectrum-disabled-static-white-background-color);--system-action-button-static-white-background-color-default:var(--spectrum-transparent-white-100);--system-action-button-static-white-background-color-hover:var(--spectrum-transparent-white-200);--system-action-button-static-white-background-color-down:var(--spectrum-transparent-white-200);--system-action-button-static-white-background-color-focus:var(--spectrum-transparent-white-200);--system-action-button-static-white-quiet-background-color-default:transparent;--system-action-button-static-white-quiet-background-color-hover:var(--spectrum-transparent-white-200);--system-action-button-static-white-quiet-background-color-down:var(--spectrum-transparent-white-200);--system-action-button-static-white-quiet-background-color-focus:var(--spectrum-transparent-white-200);--system-action-button-static-white-quiet-background-color-disabled:transparent;--system-action-group-gap-size-compact:0;--system-action-group-horizontal-spacing-compact:-1px;--system-action-group-vertical-spacing-compact:-1px;--system-alert-banner-neutral-background:var(--spectrum-neutral-subdued-background-color-default);--system-asset-folder-background-color:var(--spectrum-gray-200);--system-asset-file-background-color:var(--spectrum-gray-25);--system-asset-icon-outline-color:var(--spectrum-gray-500);--system-button-background-color-default:var(--spectrum-gray-50);--system-button-background-color-hover:var(--spectrum-gray-100);--system-button-background-color-down:var(--spectrum-gray-200);--system-button-background-color-focus:var(--spectrum-gray-100);--system-button-border-color-default:var(--spectrum-gray-400);--system-button-border-color-hover:var(--spectrum-gray-500);--system-button-border-color-down:var(--spectrum-gray-600);--system-button-border-color-focus:var(--spectrum-gray-500);--system-button-background-color-disabled:transparent;--system-button-border-color-disabled:var(--spectrum-disabled-border-color);--system-button-selected-background-color-default:var(--spectrum-neutral-subdued-background-color-default);--system-button-selected-background-color-hover:var(--spectrum-neutral-subdued-background-color-hover);--system-button-selected-background-color-down:var(--spectrum-neutral-subdued-background-color-down);--system-button-selected-background-color-focus:var(--spectrum-neutral-subdued-background-color-key-focus);--system-button-primary-content-color-default:var(--spectrum-gray-25);--system-button-primary-content-color-hover:var(--spectrum-gray-25);--system-button-primary-content-color-down:var(--spectrum-gray-25);--system-button-primary-content-color-focus:var(--spectrum-gray-25);--system-button-primary-outline-background-color-hover:var(--spectrum-gray-100);--system-button-primary-outline-background-color-down:var(--spectrum-gray-100);--system-button-primary-outline-background-color-focus:var(--spectrum-gray-100);--system-button-secondary-background-color-default:var(--spectrum-gray-100);--system-button-secondary-background-color-hover:var(--spectrum-gray-200);--system-button-secondary-background-color-down:var(--spectrum-gray-200);--system-button-secondary-background-color-focus:var(--spectrum-gray-200);--system-button-secondary-outline-background-color-hover:var(--spectrum-gray-100);--system-button-secondary-outline-background-color-down:var(--spectrum-gray-100);--system-button-secondary-outline-background-color-focus:var(--spectrum-gray-100);--system-button-secondary-outline-border-color-default:var(--spectrum-gray-300);--system-button-secondary-outline-border-color-down:var(--spectrum-gray-400);--system-button-static-white-background-color-default:var(--spectrum-transparent-white-800);--system-button-static-white-background-color-hover:var(--spectrum-transparent-white-900);--system-button-static-white-background-color-down:var(--spectrum-transparent-white-900);--system-button-static-white-background-color-focus:var(--spectrum-transparent-white-900);--system-button-static-white-content-color-default:var(--spectrum-black);--system-button-static-white-content-color-hover:var(--spectrum-black);--system-button-static-white-content-color-down:var(--spectrum-black);--system-button-static-white-content-color-focus:var(--spectrum-black);--system-button-static-white-outline-background-color-default:var(--spectrum-transparent-white-25);--system-button-static-white-outline-background-color-hover:var(--spectrum-transparent-white-100);--system-button-static-white-outline-background-color-down:var(--spectrum-transparent-white-100);--system-button-static-white-outline-background-color-focus:var(--spectrum-transparent-white-100);--system-button-static-white-outline-content-color-default:var(--spectrum-transparent-white-800);--system-button-static-white-outline-content-color-hover:var(--spectrum-transparent-white-900);--system-button-static-white-outline-content-color-down:var(--spectrum-transparent-white-900);--system-button-static-white-outline-content-color-focus:var(--spectrum-transparent-white-900);--system-button-static-white-outline-border-color-default:var(--spectrum-transparent-white-800);--system-button-static-white-outline-border-color-hover:var(--spectrum-transparent-white-900);--system-button-static-white-outline-border-color-down:var(--spectrum-transparent-white-900);--system-button-static-white-outline-border-color-focus:var(--spectrum-transparent-white-900);--system-button-static-white-secondary-background-color-default:var(--spectrum-transparent-white-100);--system-button-static-white-secondary-background-color-hover:var(--spectrum-transparent-white-200);--system-button-static-white-secondary-background-color-down:var(--spectrum-transparent-white-200);--system-button-static-white-secondary-background-color-focus:var(--spectrum-transparent-white-200);--system-button-static-white-secondary-content-color-default:var(--spectrum-transparent-white-800);--system-button-static-white-secondary-content-color-hover:var(--spectrum-transparent-white-900);--system-button-static-white-secondary-content-color-down:var(--spectrum-transparent-white-900);--system-button-static-white-secondary-content-color-focus:var(--spectrum-transparent-white-900);--system-button-static-white-secondary-outline-border-color-default:var(--spectrum-transparent-white-300);--system-button-static-white-secondary-outline-border-color-hover:var(--spectrum-transparent-white-400);--system-button-static-white-secondary-outline-border-color-down:var(--spectrum-transparent-white-400);--system-button-static-white-secondary-outline-border-color-focus:var(--spectrum-transparent-white-400);--system-button-static-white-secondary-outline-background-color-default:var(--spectrum-transparent-white-25);--system-button-static-white-secondary-outline-background-color-hover:var(--spectrum-transparent-white-100);--system-button-static-white-secondary-outline-background-color-down:var(--spectrum-transparent-white-100);--system-button-static-white-secondary-outline-background-color-focus:var(--spectrum-transparent-white-100);--system-button-static-black-background-color-default:var(--spectrum-transparent-black-800);--system-button-static-black-background-color-hover:var(--spectrum-transparent-black-900);--system-button-static-black-background-color-down:var(--spectrum-transparent-black-900);--system-button-static-black-background-color-focus:var(--spectrum-transparent-black-900);--system-button-static-black-content-color-default:var(--spectrum-white);--system-button-static-black-content-color-hover:var(--spectrum-white);--system-button-static-black-content-color-down:var(--spectrum-white);--system-button-static-black-content-color-focus:var(--spectrum-white);--system-button-static-black-outline-background-color-default:var(--spectrum-transparent-black-25);--system-button-static-black-outline-background-color-hover:var(--spectrum-transparent-black-100);--system-button-static-black-outline-background-color-down:var(--spectrum-transparent-black-100);--system-button-static-black-outline-background-color-focus:var(--spectrum-transparent-black-100);--system-button-static-black-outline-content-color-default:var(--spectrum-transparent-black-800);--system-button-static-black-outline-content-color-hover:var(--spectrum-transparent-black-900);--system-button-static-black-outline-content-color-down:var(--spectrum-transparent-black-900);--system-button-static-black-outline-content-color-focus:var(--spectrum-transparent-black-900);--system-button-static-black-outline-border-color-default:var(--spectrum-transparent-black-800);--system-button-static-black-outline-border-color-hover:var(--spectrum-transparent-black-900);--system-button-static-black-outline-border-color-down:var(--spectrum-transparent-black-900);--system-button-static-black-outline-border-color-focus:var(--spectrum-transparent-black-900);--system-button-static-black-secondary-background-color-default:var(--spectrum-transparent-black-100);--system-button-static-black-secondary-background-color-hover:var(--spectrum-transparent-black-200);--system-button-static-black-secondary-background-color-down:var(--spectrum-transparent-black-200);--system-button-static-black-secondary-background-color-focus:var(--spectrum-transparent-black-200);--system-button-static-black-secondary-content-color-default:var(--spectrum-transparent-black-800);--system-button-static-black-secondary-content-color-hover:var(--spectrum-transparent-black-900);--system-button-static-black-secondary-content-color-down:var(--spectrum-transparent-black-900);--system-button-static-black-secondary-content-color-focus:var(--spectrum-transparent-black-900);--system-button-static-black-secondary-outline-border-color-default:var(--spectrum-transparent-black-300);--system-button-static-black-secondary-outline-border-color-hover:var(--spectrum-transparent-black-400);--system-button-static-black-secondary-outline-border-color-down:var(--spectrum-transparent-black-400);--system-button-static-black-secondary-outline-border-color-focus:var(--spectrum-transparent-black-400);--system-button-static-black-secondary-outline-background-color-default:var(--spectrum-transparent-black-25);--system-button-static-black-secondary-outline-background-color-hover:var(--spectrum-transparent-black-100);--system-button-static-black-secondary-outline-background-color-down:var(--spectrum-transparent-black-100);--system-button-static-black-secondary-outline-background-color-focus:var(--spectrum-transparent-black-100);--system-checkbox-control-color-default:var(--spectrum-neutral-content-color-default);--system-checkbox-control-color-hover:var(--spectrum-gray-700);--system-checkbox-control-color-down:var(--spectrum-gray-800);--system-checkbox-control-color-focus:var(--spectrum-gray-700);--system-checkbox-checkmark-color:var(--spectrum-gray-50);--system-checkbox-control-corner-radius:2px;--system-card-border-color:var(--spectrum-gray-100);--system-card-border-color-hover:var(--spectrum-gray-200);--system-card-divider-color:var(--spectrum-gray-200);--system-card-preview-background-color:var(--spectrum-gray-100);--system-card-preview-background-color-hover:var(--spectrum-gray-200);--system-clear-button-background-color:transparent;--system-clear-button-background-color-hover:transparent;--system-clear-button-background-color-down:transparent;--system-clear-button-background-color-key-focus:transparent;--system-clear-button-static-white-background-color-hover:var(--spectrum-transparent-white-400);--system-clear-button-static-white-background-color-down:var(--spectrum-transparent-white-500);--system-clear-button-static-white-background-color-key-focus:var(--spectrum-transparent-white-400);--system-close-button-background-color-default:transparent;--system-close-button-background-color-hover:var(--spectrum-gray-100);--system-close-button-background-color-down:var(--spectrum-gray-200);--system-close-button-background-color-focus:var(--spectrum-gray-100);--system-close-button-static-white-static-background-color-hover:var(--spectrum-transparent-white-400);--system-close-button-static-white-static-background-color-down:var(--spectrum-transparent-white-500);--system-close-button-static-white-static-background-color-focus:var(--spectrum-transparent-white-400);--system-close-button-static-black-static-background-color-hover:var(--spectrum-transparent-black-400);--system-close-button-static-black-static-background-color-down:var(--spectrum-transparent-black-500);--system-close-button-static-black-static-background-color-focus:var(--spectrum-transparent-black-400);--system-coach-indicator-ring-border-size:var(--spectrum-border-width-200);--system-coach-indicator-min-inline-size:calc(var(--spectrum-coach-indicator-ring-diameter)*3);--system-coach-indicator-min-block-size:calc(var(--spectrum-coach-indicator-ring-diameter)*3);--system-coach-indicator-inline-size:var(--system-coach-indicator-min-inline-size);--system-coach-indicator-block-size:var(--system-coach-indicator-min-block-size);--system-coach-indicator-ring-inline-size:var(--spectrum-coach-indicator-ring-diameter);--system-coach-indicator-ring-block-size:var(--spectrum-coach-indicator-ring-diameter);--system-coach-indicator-ring-dark-color:var(--spectrum-gray-900);--system-coach-indicator-ring-light-color:var(--spectrum-gray-25);--system-coach-indicator-top:calc(var(--system-coach-indicator-block-size)/3 - var(--system-coach-indicator-ring-border-size));--system-coach-indicator-left:calc(var(--system-coach-indicator-inline-size)/3 - var(--system-coach-indicator-ring-border-size));--system-coach-indicator-coach-animation-indicator-ring-duration:var(--spectrum-animation-duration-6000);--system-coach-indicator-coach-animation-indicator-ring-inner-delay-multiple:-.5;--system-coach-indicator-coach-animation-indicator-ring-center-delay-multiple:-.66;--system-coach-indicator-coach-animation-indicator-ring-outer-delay-multiple:-1;--system-coach-indicator-quiet-animation-ring-inner-delay-multiple:-.33;--system-coach-indicator-animation-name:pulse;--system-coach-indicator-inner-animation-delay-multiple:var(--system-coach-indicator-coach-animation-indicator-ring-inner-delay-multiple);--system-coach-indicator-animation-keyframe-0-scale:1;--system-coach-indicator-animation-keyframe-0-opacity:0;--system-coach-indicator-animation-keyframe-50-scale:1.5;--system-coach-indicator-animation-keyframe-50-opacity:1;--system-coach-indicator-animation-keyframe-100-scale:2;--system-coach-indicator-animation-keyframe-100-opacity:0;--system-coach-indicator-quiet-animation-keyframe-0-scale:.8;--system-coach-indicator-quiet-quiet-ring-diameter-size:var(--spectrum-coach-indicator-quiet-ring-diameter);--system-coach-indicator-quiet-animation-name:pulse-quiet;--system-coach-mark-min-width:var(--spectrum-coach-mark-minimum-width);--system-coach-mark-width:var(--spectrum-coach-mark-width);--system-coach-mark-max-width:var(--spectrum-coach-mark-maximum-width);--system-coach-mark-media-height:var(--spectrum-coach-mark-media-height);--system-coach-mark-media-min-height:var(--spectrum-coach-mark-media-minimum-height);--system-coach-mark-padding:var(--spectrum-coach-mark-edge-to-content);--system-coach-mark-heading-to-action-button:var(--spectrum-spacing-300);--system-coach-mark-header-to-body:var(--spectrum-spacing-200);--system-coach-mark-body-to-footer:var(--spectrum-spacing-300);--system-coach-mark-title-color:var(--spectrum-heading-color);--system-coach-mark-title-font-family:var(--spectrum-sans-serif-font);--system-coach-mark-title-font-style:var(--spectrum-heading-serif-font-style);--system-coach-mark-title-text-font-weight:var(--spectrum-heading-sans-serif-font-weight);--system-coach-mark-title-font-size:var(--spectrum-coach-mark-title-size);--system-coach-mark-title-text-line-height:var(--spectrum-heading-line-height);--system-coach-mark-content-font-color:var(--spectrum-body-color);--system-coach-mark-content-font-weight:var(--spectrum-body-sans-serif-font-weight);--system-coach-mark-content-font-family:var(--spectrum-sans-serif-font);--system-coach-mark-content-font-style:var(--spectrum-body-sans-serif-font-style);--system-coach-mark-content-line-height:var(--spectrum-body-line-height);--system-coach-mark-content-font-size:var(--spectrum-coach-mark-body-size);--system-coach-mark-step-color:var(--spectrum-coach-mark-pagination-color);--system-coach-mark-step-font-weight:var(--spectrum-body-medium-font-weight);--system-coach-mark-step-font-family:var(--spectrum-sans-serif-font);--system-coach-mark-step-font-style:var(--spectrum-body-sans-serif-font-style);--system-coach-mark-step-line-height:var(--spectrum-body-line-height);--system-coach-mark-step-font-size:var(--spectrum-coach-mark-pagination-body-size);--system-coach-mark-step-to-bottom:var(--spectrum-coach-mark-pagination-text-to-bottom-edge);--system-coach-mark-popover-border-width:var(--spectrum-border-width-100);--system-coach-mark-popover-corner-radius:var(--spectrum-corner-radius-100);--system-coach-mark-buttongroup-spacing-horizontal:var(--spectrum-spacing-100);--system-color-wheel-border-color:var(--spectrum-transparent-black-300);--system-combobox-border-color-default:var(--spectrum-gray-500);--system-combobox-border-color-hover:var(--spectrum-gray-600);--system-combobox-border-color-focus:var(--spectrum-gray-800);--system-combobox-border-color-focus-hover:var(--spectrum-gray-900);--system-combobox-border-color-key-focus:var(--spectrum-gray-800);--system-combobox-readonly-input-border-color:var(--spectrum-gray-500);--system-combobox-background-color-disabled:var(--spectrum-gray-25);--system-combobox-border-color-disabled:var(--spectrum-disabled-border-color);--system-dialog-fullscreen-header-text-size:28px;--system-dialog-min-inline-size:288px;--system-dialog-confirm-small-width:400px;--system-dialog-confirm-medium-width:480px;--system-dialog-confirm-large-width:640px;--system-dialog-confirm-divider-block-spacing-start:var(--spectrum-spacing-300);--system-dialog-confirm-divider-block-spacing-end:var(--spectrum-spacing-200);--system-dialog-confirm-description-text-color:var(--spectrum-gray-800);--system-dialog-confirm-title-text-color:var(--spectrum-gray-900);--system-dialog-confirm-description-text-line-height:var(--spectrum-line-height-100);--system-dialog-confirm-title-text-line-height:var(--spectrum-line-height-100);--system-dialog-heading-font-weight:var(--spectrum-heading-sans-serif-font-weight);--system-dialog-confirm-description-padding:var(--spectrum-spacing-50);--system-dialog-confirm-description-margin:calc(var(--spectrum-spacing-50)*-1);--system-dialog-confirm-footer-padding-top:var(--spectrum-spacing-600);--system-dialog-confirm-gap-size:var(--spectrum-component-pill-edge-to-text-100);--system-dialog-confirm-buttongroup-padding-top:var(--spectrum-spacing-600);--system-dialog-confirm-close-button-size:var(--spectrum-component-height-100);--system-dialog-confirm-close-button-padding:calc(26px - var(--spectrum-component-bottom-to-text-300));--system-dialog-confirm-divider-height:var(--spectrum-spacing-50);--system-divider-background-color:var(--spectrum-gray-200);--system-divider-background-color-static-white:var(--spectrum-transparent-white-200);--system-divider-background-color-static-black:var(--spectrum-transparent-black-200);--system-alert-dialog-divider-background-color:transparent;--system-alert-dialog-divider-background-color-static-white:transparent;--system-alert-dialog-divider-background-color-static-black:transparent;--system-drop-zone-border-color:var(--spectrum-gray-200);--system-field-group-margin:var(--spectrum-spacing-300);--system-field-group-readonly-delimiter:",";--system-infield-button-border-width:var(--spectrum-border-width-100);--system-infield-button-border-color:inherit;--system-infield-button-border-radius:var(--spectrum-corner-radius-100);--system-infield-button-border-radius-reset:0;--system-infield-button-stacked-top-border-radius-start-start:var(--system-infield-button-border-radius-reset);--system-infield-button-stacked-bottom-border-radius-end-start:var(--system-infield-button-border-radius-reset);--system-infield-button-background-color:var(--spectrum-gray-100);--system-infield-button-background-color-hover:var(--spectrum-gray-200);--system-infield-button-background-color-down:var(--spectrum-gray-200);--system-infield-button-background-color-key-focus:var(--spectrum-gray-200);--system-infield-button-disabled-border-color:var(--spectrum-gray-300);--system-menu-item-background-color-hover:rgba(var(--spectrum-gray-1000-rgb),var(--spectrum-transparent-black-200-opacity));--system-menu-item-background-color-down:rgba(var(--spectrum-gray-1000-rgb),var(--spectrum-transparent-black-200-opacity));--system-menu-item-background-color-key-focus:rgba(var(--spectrum-gray-1000-rgb),var(--spectrum-transparent-black-200-opacity));--system-menu-item-corner-radius:var(--spectrum-corner-radius-100);--system-menu-item-focus-indicator-shadow:none;--system-menu-item-focus-indicator-offset:var(--spectrum-spacing-50);--system-menu-item-spacing-multiplier:1;--system-menu-item-focus-indicator-outline-style:solid;--system-submenu-offset-block:-9px;--system-meter-min-width:var(--spectrum-meter-minimum-width);--system-meter-max-width:var(--spectrum-meter-maximum-width);--system-meter-inline-size:var(--spectrum-progressbar-size-2500);--system-meter-top-to-text:var(--spectrum-component-top-to-text-200);--system-meter-fill-color-positive:var(--spectrum-positive-visual-color);--system-meter-fill-color-notice:var(--spectrum-notice-visual-color);--system-meter-fill-color-negative:var(--spectrum-negative-visual-color);--system-meter-size-s-thickness:var(--spectrum-meter-thickness-small);--system-meter-size-s-inline-size:var(--spectrum-progressbar-size-2400);--system-meter-size-s-font-size:var(--spectrum-font-size-75);--system-meter-size-s-top-to-text:var(--spectrum-component-top-to-text-75);--system-meter-thickness:var(--spectrum-meter-thickness-large);--system-meter-size-l-thickness:var(--spectrum-meter-thickness-large);--system-meter-size-l-inline-size:var(--spectrum-progressbar-size-2500);--system-meter-font-size:var(--spectrum-font-size-100);--system-meter-size-l-font-size:var(--spectrum-font-size-100);--system-meter-size-l-top-to-text:var(--spectrum-component-top-to-text-200);--system-modal-background-color:var(--spectrum-background-layer-2-color);--system-picker-background-color-default:var(--spectrum-gray-100);--system-picker-background-color-default-open:var(--spectrum-gray-200);--system-picker-background-color-hover:var(--spectrum-gray-200);--system-picker-background-color-hover-open:var(--spectrum-gray-200);--system-picker-background-color-active:var(--spectrum-gray-200);--system-picker-background-color-key-focus:var(--spectrum-gray-200);--system-picker-border-color-default:transparent;--system-picker-border-color-default-open:transparent;--system-picker-border-color-hover:transparent;--system-picker-border-color-hover-open:transparent;--system-picker-border-color-active:transparent;--system-picker-border-color-key-focus:transparent;--system-picker-border-color-disabled:transparent;--system-picker-border-width:var(--spectrum-border-width-200);--system-picker-button-background-color:var(--spectrum-gray-100);--system-picker-button-background-color-hover:var(--spectrum-gray-200);--system-picker-button-background-color-down:var(--spectrum-gray-200);--system-picker-button-background-color-key-focus:var(--spectrum-gray-200);--system-picker-button-border-color:none;--system-picker-button-border-radius:var(--spectrum-corner-radius-75);--system-picker-button-border-radius-rounded-sided:var(--spectrum-corner-radius-200);--system-picker-button-border-radius-sided:var(--spectrum-corner-radius-75);--system-picker-button-border-width:0px;--system-picker-button-padding:4px;--system-popover-border-width:var(--spectrum-border-width-100);--system-progress-bar-animation-ease-in-out-indeterminate:var(--spectrum-animation-ease-in-out);--system-progress-bar-animation-duration-indeterminate:var(--spectrum-animation-duration-2000);--system-progress-bar-corner-radius:var(--spectrum-corner-radius-100);--system-progress-bar-fill-size-indeterminate:70%;--system-progress-bar-size-2400:192px;--system-progress-bar-size-2500:200px;--system-progress-bar-size-2800:224px;--system-progress-bar-line-height-cjk:var(--spectrum-cjk-line-height-100);--system-progress-bar-min-size:var(--spectrum-progress-bar-minimum-width);--system-progress-bar-max-size:var(--spectrum-progress-bar-maximum-width);--system-progress-bar-line-height:var(--spectrum-line-height-100);--system-progress-bar-spacing-label-to:var(--spectrum-spacing-75);--system-progress-bar-spacing-label-to-text:var(--spectrum-spacing-200);--system-progress-bar-text-color:var(--spectrum-neutral-content-color-default);--system-progress-bar-track-color:var(--spectrum-gray-200);--system-progress-bar-fill-color:var(--spectrum-accent-color-900);--system-progress-bar-label-and-value-white:var(--spectrum-white);--system-progress-bar-track-color-white:var(--spectrum-transparent-white-400);--system-progress-bar-fill-color-white:var(--spectrum-white);--system-progress-bar-size-default:var(--system-progress-bar-size-2400);--system-progress-bar-size-m-size-default:var(--system-progress-bar-size-2400);--system-progress-bar-font-size:var(--spectrum-font-size-75);--system-progress-bar-size-m-font-size:var(--spectrum-font-size-75);--system-progress-bar-thickness:var(--spectrum-progress-bar-thickness-large);--system-progress-bar-size-m-thickness:var(--spectrum-progress-bar-thickness-large);--system-progress-bar-spacing-top-to-text:var(--spectrum-component-top-to-text-75);--system-progress-bar-size-m-spacing-top-to-text:var(--spectrum-component-top-to-text-75);--system-progress-bar-size-s-size-default:var(--system-progress-bar-size-2400);--system-progress-bar-size-s-font-size:var(--spectrum-font-size-75);--system-progress-bar-size-s-thickness:var(--spectrum-progress-bar-thickness-small);--system-progress-bar-size-s-spacing-top-to-text:var(--spectrum-component-top-to-text-75);--system-progress-bar-size-l-size-default:var(--system-progress-bar-size-2500);--system-progress-bar-size-l-font-size:var(--spectrum-font-size-100);--system-progress-bar-size-l-thickness:var(--spectrum-progress-bar-thickness-large);--system-progress-bar-size-l-spacing-top-to-text:var(--spectrum-component-top-to-text-200);--system-progress-bar-size-xl-size-default:var(--system-progress-bar-size-2800);--system-progress-bar-size-xl-font-size:var(--spectrum-font-size-200);--system-progress-bar-size-xl-thickness:var(--spectrum-progress-bar-thickness-extra-large);--system-progress-bar-size-xl-spacing-top-to-text:var(--spectrum-component-top-to-text-300);--system-progress-circle-track-border-color:var(--spectrum-gray-200);--system-progress-circle-track-border-color-over-background:var(--spectrum-transparent-white-400);--system-progress-circle-fill-border-color-over-background:var(--spectrum-transparent-white-1000);--system-radio-button-border-color-default:var(--spectrum-gray-600);--system-radio-button-border-color-hover:var(--spectrum-gray-700);--system-radio-button-border-color-down:var(--spectrum-gray-800);--system-radio-button-border-color-focus:var(--spectrum-gray-700);--system-radio-neutral-content-color:var(--spectrum-neutral-content-color-default);--system-radio-neutral-content-color-hover:var(--spectrum-neutral-content-color-hover);--system-radio-neutral-content-color-down:var(--spectrum-neutral-content-color-down);--system-radio-neutral-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--system-radio-focus-indicator-thickness:var(--spectrum-focus-indicator-thickness);--system-radio-focus-indicator-gap:var(--spectrum-focus-indicator-gap);--system-radio-focus-indicator-color:var(--spectrum-focus-indicator-color);--system-radio-disabled-content-color:var(--spectrum-disabled-content-color);--system-radio-disabled-border-color:var(--spectrum-disabled-content-color);--system-radio-emphasized-accent-color:var(--spectrum-accent-color-900);--system-radio-emphasized-accent-color-hover:var(--spectrum-accent-color-1000);--system-radio-emphasized-accent-color-down:var(--spectrum-accent-color-1100);--system-radio-emphasized-accent-color-focus:var(--spectrum-accent-color-1000);--system-radio-border-width:var(--spectrum-border-width-200);--system-radio-button-background-color:var(--spectrum-gray-50);--system-radio-button-checked-border-color-default:var(--spectrum-neutral-background-color-selected-default);--system-radio-button-checked-border-color-hover:var(--spectrum-neutral-background-color-selected-hover);--system-radio-button-checked-border-color-down:var(--spectrum-neutral-background-color-selected-down);--system-radio-button-checked-border-color-focus:var(--spectrum-neutral-background-color-selected-focus);--system-radio-line-height:var(--spectrum-line-height-100);--system-radio-animation-duration:var(--spectrum-animation-duration-100);--system-radio-lang-ja-line-height-cjk:var(--spectrum-cjk-line-height-100);--system-radio-lang-zh-line-height-cjk:var(--spectrum-cjk-line-height-100);--system-radio-lang-ko-line-height-cjk:var(--spectrum-cjk-line-height-100);--system-radio-height:var(--spectrum-component-height-100);--system-radio-size-m-height:var(--spectrum-component-height-100);--system-radio-button-control-size:var(--spectrum-radio-button-control-size-medium);--system-radio-size-m-button-control-size:var(--spectrum-radio-button-control-size-medium);--system-radio-text-to-control:var(--spectrum-text-to-control-100);--system-radio-size-m-text-to-control:var(--spectrum-text-to-control-100);--system-radio-label-top-to-text:var(--spectrum-component-top-to-text-100);--system-radio-size-m-label-top-to-text:var(--spectrum-component-top-to-text-100);--system-radio-label-bottom-to-text:var(--spectrum-component-bottom-to-text-100);--system-radio-size-m-label-bottom-to-text:var(--spectrum-component-bottom-to-text-100);--system-radio-button-top-to-control:var(--spectrum-radio-button-top-to-control-medium);--system-radio-size-m-button-top-to-control:var(--spectrum-radio-button-top-to-control-medium);--system-radio-font-size:var(--spectrum-font-size-100);--system-radio-size-m-font-size:var(--spectrum-font-size-100);--system-radio-size-s-height:var(--spectrum-component-height-75);--system-radio-size-s-button-control-size:var(--spectrum-radio-button-control-size-small);--system-radio-size-s-text-to-control:var(--spectrum-text-to-control-75);--system-radio-size-s-label-top-to-text:var(--spectrum-component-top-to-text-75);--system-radio-size-s-label-bottom-to-text:var(--spectrum-component-bottom-to-text-75);--system-radio-size-s-button-top-to-control:var(--spectrum-radio-button-top-to-control-small);--system-radio-size-s-font-size:var(--spectrum-font-size-75);--system-radio-size-l-height:var(--spectrum-component-height-200);--system-radio-size-l-button-control-size:var(--spectrum-radio-button-control-size-large);--system-radio-size-l-text-to-control:var(--spectrum-text-to-control-200);--system-radio-size-l-label-top-to-text:var(--spectrum-component-top-to-text-200);--system-radio-size-l-label-bottom-to-text:var(--spectrum-component-bottom-to-text-200);--system-radio-size-l-button-top-to-control:var(--spectrum-radio-button-top-to-control-large);--system-radio-size-l-font-size:var(--spectrum-font-size-200);--system-radio-size-xl-height:var(--spectrum-component-height-300);--system-radio-size-xl-button-control-size:var(--spectrum-radio-button-control-size-extra-large);--system-radio-size-xl-text-to-control:var(--spectrum-text-to-control-300);--system-radio-size-xl-label-top-to-text:var(--spectrum-component-top-to-text-300);--system-radio-size-xl-label-bottom-to-text:var(--spectrum-component-bottom-to-text-300);--system-radio-size-xl-button-top-to-control:var(--spectrum-radio-button-top-to-control-extra-large);--system-radio-size-xl-font-size:var(--spectrum-font-size-300);--system-radio-emphasized-button-checked-border-color-default:var(--spectrum-accent-color-900);--system-radio-emphasized-button-checked-border-color-hover:var(--spectrum-accent-color-1000);--system-radio-emphasized-button-checked-border-color-down:var(--spectrum-accent-color-1100);--system-radio-emphasized-button-checked-border-color-focus:var(--spectrum-accent-color-1000);--system-search-border-color-default:var(--spectrum-gray-500);--system-search-border-color-hover:var(--spectrum-gray-600);--system-search-border-color-focus:var(--spectrum-gray-800);--system-search-border-color-focus-hover:var(--spectrum-gray-900);--system-search-border-color-key-focus:var(--spectrum-gray-800);--system-search-background-color:var(--spectrum-gray-25);--system-search-background-color-disabled:var(--spectrum-gray-25);--system-search-border-color-disabled:var(--spectrum-gray-300);--system-search-border-radius:var(--spectrum-corner-radius-100);--system-search-size-m-border-radius:var(--spectrum-corner-radius-100);--system-search-edge-to-visual:var(--spectrum-component-edge-to-visual-100);--system-search-size-m-edge-to-visual:var(--spectrum-component-edge-to-visual-100);--system-search-size-s-border-radius:var(--spectrum-corner-radius-100);--system-search-size-s-edge-to-visual:var(--spectrum-component-edge-to-visual-75);--system-search-size-l-border-radius:var(--spectrum-corner-radius-100);--system-search-size-l-edge-to-visual:var(--spectrum-component-edge-to-visual-200);--system-search-size-xl-border-radius:var(--spectrum-corner-radius-100);--system-search-size-xl-edge-to-visual:var(--spectrum-component-edge-to-visual-300);--system-search-quiet-background-color-disabled:transparent;--system-search-quiet-border-color-disabled:var(--spectrum-disabled-border-color);--system-side-nav-background-hover:var(--spectrum-gray-100);--system-side-nav-item-background-down:var(--spectrum-gray-200);--system-side-nav-background-key-focus:var(--spectrum-gray-100);--system-side-nav-item-background-default-selected:var(--spectrum-gray-100);--system-side-nav-background-hover-selected:var(--spectrum-gray-200);--system-side-nav-item-background-down-selected:var(--spectrum-gray-200);--system-side-nav-background-key-focus-selected:var(--spectrum-gray-100);--system-slider-track-color:var(--spectrum-gray-200);--system-slider-track-fill-color:var(--spectrum-gray-700);--system-slider-ramp-track-color:var(--spectrum-gray-400);--system-slider-ramp-track-color-disabled:var(--spectrum-gray-100);--system-slider-handle-background-color:transparent;--system-slider-handle-background-color-disabled:transparent;--system-slider-ramp-handle-background-color:var(--spectrum-gray-75);--system-slider-ticks-handle-background-color:var(--spectrum-gray-75);--system-slider-handle-border-color:var(--spectrum-gray-700);--system-slider-handle-disabled-background-color:var(--spectrum-gray-75);--system-slider-tick-mark-color:var(--spectrum-gray-200);--system-slider-handle-border-color-hover:var(--spectrum-gray-800);--system-slider-handle-border-color-down:var(--spectrum-gray-800);--system-slider-handle-border-color-key-focus:var(--spectrum-gray-800);--system-slider-handle-focus-ring-color-key-focus:var(--spectrum-focus-indicator-color);--system-slider-track-corner-radius:2px;--system-slider-handle-border-radius:var(--spectrum-corner-radius-500);--system-slider-size-m-handle-border-radius:var(--spectrum-corner-radius-500);--system-slider-size-s-handle-border-radius:var(--spectrum-corner-radius-500);--system-slider-size-l-handle-border-radius:calc(var(--spectrum-corner-radius-500)*4);--system-slider-size-xl-handle-border-radius:calc(var(--spectrum-corner-radius-500)*4);--system-split-view-background-color:var(--spectrum-gray-75);--system-split-view-handle-background-color:var(--spectrum-gray-200);--system-split-view-gripper-border-radius:2px;--system-stepper-border-width:var(--spectrum-border-width-100);--system-stepper-border-color-default:var(--spectrum-gray-500);--system-stepper-border-color-hover:var(--spectrum-gray-600);--system-stepper-border-color-focus:var(--spectrum-gray-800);--system-stepper-border-color-focus-hover:var(--spectrum-gray-900);--system-stepper-border-color-keyboard-focus:var(--spectrum-gray-800);--system-stepper-buttons-border-style:none;--system-stepper-buttons-border-width:0;--system-stepper-buttons-border-color:var(--spectrum-gray-500);--system-stepper-buttons-background-color:var(--spectrum-gray-100);--system-stepper-buttons-border-color-hover:var(--spectrum-gray-600);--system-stepper-buttons-border-color-focus:var(--spectrum-gray-800);--system-stepper-buttons-border-color-keyboard-focus:var(--spectrum-gray-800);--system-stepper-button-border-width:var(--spectrum-border-width-100);--system-stepper-border-color-invalid:var(--spectrum-negative-border-color-default);--system-stepper-border-color-focus-invalid:var(--spectrum-negative-border-color-focus);--system-stepper-border-color-focus-hover-invalid:var(--spectrum-negative-border-color-focus-hover);--system-stepper-border-color-keyboard-focus-invalid:var(--spectrum-negative-border-color-key-focus);--system-stepper-border-color-disabled:var(--spectrum-gray-300);--system-stepper-button-border-width-disabled:var(--spectrum-border-width-200);--system-stepper-buttons-background-color-disabled:var(--spectrum-gray-50);--system-stepper-quiet-buttons-border-style:none;--system-stepper-quiet-button-edge-to-fill:0;--system-swatch-border-radius:var(--spectrum-corner-radius-100);--system-swatch-focus-indicator-border-radius:var(--spectrum-corner-radius-200);--system-swatch-border-thickness:var(--spectrum-border-width-100);--system-swatch-border-thickness-selected:var(--spectrum-border-width-200);--system-swatch-focus-indicator-thickness:var(--spectrum-focus-indicator-thickness);--system-swatch-focus-indicator-gap:var(--spectrum-focus-indicator-gap);--system-swatch-border-color-opacity:.51;--system-swatch-border-color-light-opacity:.2;--system-swatch-border-color:rgba(var(--spectrum-gray-1000-rgb),var(--system-swatch-border-color-opacity));--system-swatch-icon-border-color:rgba(var(--spectrum-black-rgb),var(--system-swatch-border-color-opacity));--system-swatch-border-color-light:rgba(var(--spectrum-black-rgb),var(--system-swatch-border-color-light-opacity));--system-swatch-border-color-selected:var(--spectrum-gray-900);--system-swatch-inner-border-color-selected:var(--spectrum-gray-25);--system-swatch-disabled-icon-color:var(--spectrum-gray-25);--system-swatch-dash-icon-color:var(--spectrum-gray-800);--system-swatch-slash-icon-color:var(--spectrum-red-900);--system-swatch-focus-indicator-color:var(--spectrum-focus-indicator-color);--system-swatch-size:var(--spectrum-swatch-size-medium);--system-swatch-size-m-size:var(--spectrum-swatch-size-medium);--system-swatch-disabled-icon-size:var(--spectrum-workflow-icon-size-100);--system-swatch-size-m-disabled-icon-size:var(--spectrum-workflow-icon-size-100);--system-swatch-slash-thickness:var(--spectrum-swatch-slash-thickness-medium);--system-swatch-size-m-slash-thickness:var(--spectrum-swatch-slash-thickness-medium);--system-swatch-size-xs-size:var(--spectrum-swatch-size-extra-small);--system-swatch-size-xs-disabled-icon-size:var(--spectrum-workflow-icon-size-50);--system-swatch-size-xs-slash-thickness:var(--spectrum-swatch-slash-thickness-extra-small);--system-swatch-size-s-size:var(--spectrum-swatch-size-small);--system-swatch-size-s-disabled-icon-size:var(--spectrum-workflow-icon-size-75);--system-swatch-size-s-slash-thickness:var(--spectrum-swatch-slash-thickness-small);--system-swatch-size-l-size:var(--spectrum-swatch-size-large);--system-swatch-size-l-disabled-icon-size:var(--spectrum-workflow-icon-size-200);--system-swatch-size-l-slash-thickness:var(--spectrum-swatch-slash-thickness-large);--system-swatch-group-spacing-compact:var(--spectrum-spacing-50);--system-swatch-group-spacing-regular:var(--spectrum-spacing-75);--system-swatch-group-spacing-spacious:var(--spectrum-spacing-100);--system-switch-handle-border-color-default:var(--spectrum-gray-600);--system-switch-handle-border-color-hover:var(--spectrum-gray-700);--system-switch-handle-border-color-down:var(--spectrum-gray-800);--system-switch-handle-border-color-focus:var(--spectrum-gray-700);--system-switch-handle-border-color-selected-default:var(--spectrum-gray-700);--system-switch-handle-border-color-selected-hover:var(--spectrum-gray-800);--system-switch-handle-border-color-selected-down:var(--spectrum-gray-900);--system-switch-handle-border-color-selected-focus:var(--spectrum-gray-800);--system-switch-background-color:var(--spectrum-gray-200);--system-switch-background-color-disabled:var(--spectrum-gray-200);--system-switch-handle-background-color:var(--spectrum-gray-50);--system-table-header-background-color:var(--spectrum-transparent-white-25);--system-table-border-color:var(--spectrum-gray-200);--system-table-divider-color:var(--spectrum-gray-200);--system-table-row-background-color:var(--spectrum-gray-25);--system-table-summary-row-background-color:var(--spectrum-gray-100);--system-table-section-header-background-color:var(--spectrum-gray-100);--system-table-icon-color-focus:var(--spectrum-neutral-subdued-content-color-key-focus);--system-table-icon-color-focus-hover:var(--spectrum-neutral-subdued-content-color-hover);--system-table-quiet-header-background-color:var(--spectrum-transparent-white-25);--system-table-quiet-row-background-color:var(--spectrum-transparent-white-25);--system-tabs-font-weight:var(--spectrum-regular-font-weight);--system-tabs-divider-background-color:var(--spectrum-gray-200);--system-tag-background-color:var(--spectrum-gray-50);--system-tag-background-color-hover:var(--spectrum-gray-50);--system-tag-background-color-active:var(--spectrum-gray-100);--system-tag-background-color-focus:var(--spectrum-gray-50);--system-tag-size-small-corner-radius:var(--spectrum-corner-radius-100);--system-tag-size-medium-corner-radius:var(--spectrum-corner-radius-100);--system-tag-size-large-corner-radius:var(--spectrum-corner-radius-100);--system-tag-border-color:var(--spectrum-gray-700);--system-tag-border-color-hover:var(--spectrum-gray-800);--system-tag-border-color-active:var(--spectrum-gray-900);--system-tag-border-color-focus:var(--spectrum-gray-800);--system-tag-content-color:var(--spectrum-neutral-subdued-content-color-default);--system-tag-content-color-hover:var(--spectrum-neutral-subdued-content-color-hover);--system-tag-content-color-active:var(--spectrum-neutral-subdued-content-color-down);--system-tag-content-color-focus:var(--spectrum-neutral-subdued-content-color-key-focus);--system-tag-content-color-selected:var(--spectrum-gray-25);--system-tag-border-color-selected:var(--spectrum-neutral-subdued-background-color-default);--system-tag-border-color-selected-hover:var(--spectrum-neutral-subdued-background-color-hover);--system-tag-border-color-selected-active:var(--spectrum-neutral-subdued-background-color-down);--system-tag-border-color-selected-focus:var(--spectrum-neutral-subdued-background-color-key-focus);--system-tag-border-color-disabled:transparent;--system-tag-background-color-disabled:var(--spectrum-disabled-background-color);--system-tag-size-small-spacing-inline-start:var(--spectrum-component-edge-to-visual-75);--system-tag-size-small-label-spacing-inline-end:var(--spectrum-component-edge-to-text-75);--system-tag-size-small-clear-button-spacing-inline-end:var(--spectrum-component-edge-to-visual-75);--system-tag-size-medium-spacing-inline-start:var(--spectrum-component-edge-to-visual-100);--system-tag-size-medium-label-spacing-inline-end:var(--spectrum-component-edge-to-text-100);--system-tag-size-medium-clear-button-spacing-inline-end:var(--spectrum-component-edge-to-visual-100);--system-tag-size-large-spacing-inline-start:var(--spectrum-component-edge-to-visual-200);--system-tag-size-large-label-spacing-inline-end:var(--spectrum-component-edge-to-text-200);--system-tag-size-large-clear-button-spacing-inline-end:var(--spectrum-component-edge-to-visual-200);--system-textfield-background-color:var(--spectrum-gray-25);--system-textfield-background-color-disabled:var(--spectrum-gray-25);--system-textfield-border-color:var(--spectrum-gray-300);--system-textfield-border-color-hover:var(--spectrum-gray-400);--system-textfield-border-color-focus:var(--spectrum-gray-800);--system-textfield-border-color-focus-hover:var(--spectrum-gray-900);--system-textfield-border-color-keyboard-focus:var(--spectrum-gray-800);--system-textfield-border-color-disabled:var(--spectrum-disabled-border-color);--system-textfield-border-width:var(--spectrum-border-width-200);--system-textfield-spacing-block-start:var(--spectrum-component-top-to-text-100);--system-textfield-spacing-block-start-small:var(--spectrum-component-top-to-text-75);--system-textfield-spacing-block-start-large:var(--spectrum-component-top-to-text-200);--system-textfield-spacing-block-start-extra-large:var(--spectrum-component-top-to-text-300);--system-textfield-spacing-block-end:var(--spectrum-component-bottom-to-text-100);--system-textfield-spacing-block-end-small:var(--spectrum-component-bottom-to-text-75);--system-textfield-spacing-block-end-large:var(--spectrum-component-bottom-to-text-200);--system-textfield-spacing-block-end-extra-large:var(--spectrum-component-bottom-to-text-300);--system-textfield-icon-spacing-block-invalid:var(--spectrum-component-top-to-workflow-icon-100);--system-textfield-size-s-icon-spacing-block-invalid:var(--spectrum-component-top-to-workflow-icon-75);--system-textfield-size-l-icon-spacing-block-invalid:var(--spectrum-component-top-to-workflow-icon-200);--system-textfield-size-xl-icon-spacing-block-invalid:var(--spectrum-component-top-to-workflow-icon-300);--system-textfield-quiet-border-color-disabled:var(--spectrum-gray-300);--system-thumbnail-border-radius:2px;--system-toast-background-color-default:var(--spectrum-neutral-subdued-background-color-default);--system-toast-divider-color:var(--spectrum-transparent-white-400);--system-tooltip-backgound-color-default-neutral:var(--spectrum-neutral-subdued-background-color-default);--system-field-label-top-to-text:var(--spectrum-component-top-to-text-100);--system-field-label-top-to-text-small:var(--spectrum-component-top-to-text-75);--system-field-label-top-to-text-large:var(--spectrum-component-top-to-text-200);--system-field-label-top-to-text-extra-large:var(--spectrum-component-top-to-text-300);--system-field-label-bottom-to-text:var(--spectrum-component-bottom-to-text-100);--system-field-label-bottom-to-text-small:var(--spectrum-component-bottom-to-text-75);--system-field-label-bottom-to-text-large:var(--spectrum-component-bottom-to-text-200);--system-field-label-bottom-to-text-extra-large:var(--spectrum-component-bottom-to-text-300);--system-helptext-top-to-text:var(--spectrum-component-top-to-text-100);--system-helptext-top-to-text-small:var(--spectrum-component-top-to-text-75);--system-helptext-top-to-text-large:var(--spectrum-component-top-to-text-200);--system-helptext-top-to-text-extra-large:var(--spectrum-component-top-to-text-300);--system-helptext-bottom-to-text:var(--spectrum-component-bottom-to-text-100);--system-helptext-bottom-to-text-small:var(--spectrum-component-bottom-to-text-75);--system-helptext-bottom-to-text-large:var(--spectrum-component-bottom-to-text-200);--system-helptext-bottom-to-text-extra-large:var(--spectrum-component-bottom-to-text-300);--system-textfield-corner-radius:var(--spectrum-corner-radius-medium-size-medium);--system-textfield-corner-radius-small:var(--spectrum-corner-radius-medium-size-small);--system-textfield-corner-radius-large:var(--spectrum-corner-radius-medium-size-large);--system-textfield-corner-radius-extra-large:var(--spectrum-corner-radius-medium-size-extra-large)}.spectrum-Typography{font-family:var(--spectrum-font-family);font-style:var(--spectrum-font-style);font-size:var(--spectrum-font-size)}.spectrum-Typography:lang(ar){font-family:var(--spectrum-font-family-ar)}.spectrum-Typography:lang(he){font-family:var(--spectrum-font-family-he)}.spectrum-Typography .spectrum-Heading{--spectrum-heading-margin-start:calc(var(--mod-heading-font-size,var(--spectrum-heading-font-size))*var(--spectrum-heading-margin-top-multiplier));--spectrum-heading-margin-end:calc(var(--mod-heading-font-size,var(--spectrum-heading-font-size))*var(--spectrum-heading-margin-bottom-multiplier))}.spectrum-Typography .spectrum-Body{--spectrum-body-margin-end:calc(var(--mod-body-font-size,var(--spectrum-body-font-size))*var(--spectrum-body-margin-multiplier))}.spectrum-Typography .spectrum-Detail{--spectrum-detail-margin-start:calc(var(--mod-detail-font-size,var(--spectrum-detail-font-size))*var(--spectrum-detail-margin-top-multiplier));--spectrum-detail-margin-end:calc(var(--mod-detail-font-size,var(--spectrum-detail-font-size))*var(--spectrum-detail-margin-bottom-multiplier))}.spectrum-Heading,.spectrum-Heading--sizeM{--spectrum-heading-font-size:var(--spectrum-heading-size-m);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-m)}.spectrum-Heading--sizeXXS{--spectrum-heading-font-size:var(--spectrum-heading-size-xxs);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xxs)}.spectrum-Heading--sizeXS{--spectrum-heading-font-size:var(--spectrum-heading-size-xs);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xs)}.spectrum-Heading--sizeS{--spectrum-heading-font-size:var(--spectrum-heading-size-s);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-s)}.spectrum-Heading--sizeL{--spectrum-heading-font-size:var(--spectrum-heading-size-l);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-l)}.spectrum-Heading--sizeXL{--spectrum-heading-font-size:var(--spectrum-heading-size-xl);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xl)}.spectrum-Heading--sizeXXL{--spectrum-heading-font-size:var(--spectrum-heading-size-xxl);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xxl)}.spectrum-Heading--sizeXXXL{--spectrum-heading-font-size:var(--spectrum-heading-size-xxxl);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xxxl)}.spectrum-Heading{--spectrum-heading-sans-serif-font-family:var(--spectrum-sans-font-family-stack);--spectrum-heading-serif-font-family:var(--spectrum-serif-font-family-stack);--spectrum-heading-cjk-font-family:var(--spectrum-cjk-font-family-stack);--spectrum-heading-cjk-letter-spacing:var(--spectrum-cjk-letter-spacing);--spectrum-heading-font-color:var(--spectrum-heading-color);font-family:var(--mod-heading-sans-serif-font-family,var(--spectrum-heading-sans-serif-font-family));font-style:var(--mod-heading-sans-serif-font-style,var(--spectrum-heading-sans-serif-font-style));font-weight:var(--mod-heading-sans-serif-font-weight,var(--spectrum-heading-sans-serif-font-weight));font-size:var(--mod-heading-font-size,var(--spectrum-heading-font-size));color:var(--highcontrast-heading-font-color,var(--mod-heading-font-color,var(--spectrum-heading-font-color)));line-height:var(--mod-heading-line-height,var(--spectrum-heading-line-height));margin-block-start:var(--mod-heading-margin-start,var(--spectrum-heading-margin-start,0));margin-block-end:var(--mod-heading-margin-end,var(--spectrum-heading-margin-end,0))}.spectrum-Heading .spectrum-Heading-strong,.spectrum-Heading strong{font-style:var(--mod-heading-sans-serif-strong-font-style,var(--spectrum-heading-sans-serif-strong-font-style));font-weight:var(--mod-heading-sans-serif-strong-font-weight,var(--spectrum-heading-sans-serif-strong-font-weight))}.spectrum-Heading .spectrum-Heading-emphasized,.spectrum-Heading em{font-style:var(--mod-heading-sans-serif-emphasized-font-style,var(--spectrum-heading-sans-serif-emphasized-font-style));font-weight:var(--mod-heading-sans-serif-emphasized-font-weight,var(--spectrum-heading-sans-serif-emphasized-font-weight))}.spectrum-Heading .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading em strong,.spectrum-Heading strong em{font-style:var(--mod-heading-sans-serif-strong-emphasized-font-style,var(--spectrum-heading-sans-serif-strong-emphasized-font-style));font-weight:var(--mod-heading-sans-serif-strong-emphasized-font-weight,var(--spectrum-heading-sans-serif-strong-emphasized-font-weight))}.spectrum-Heading:lang(ja),.spectrum-Heading:lang(ko),.spectrum-Heading:lang(zh){font-family:var(--mod-heading-cjk-font-family,var(--spectrum-heading-cjk-font-family));font-style:var(--mod-heading-cjk-font-style,var(--spectrum-heading-cjk-font-style));font-weight:var(--mod-heading-cjk-font-weight,var(--spectrum-heading-cjk-font-weight));font-size:var(--mod-heading-cjk-font-size,var(--spectrum-heading-cjk-font-size));line-height:var(--mod-heading-cjk-line-height,var(--spectrum-heading-cjk-line-height));letter-spacing:var(--mod-heading-cjk-letter-spacing,var(--spectrum-heading-cjk-letter-spacing))}.spectrum-Heading:lang(ja) .spectrum-Heading-emphasized,.spectrum-Heading:lang(ja) em,.spectrum-Heading:lang(ko) .spectrum-Heading-emphasized,.spectrum-Heading:lang(ko) em,.spectrum-Heading:lang(zh) .spectrum-Heading-emphasized,.spectrum-Heading:lang(zh) em{font-style:var(--mod-heading-cjk-emphasized-font-style,var(--spectrum-heading-cjk-emphasized-font-style));font-weight:var(--mod-heading-cjk-emphasized-font-weight,var(--spectrum-heading-cjk-emphasized-font-weight))}.spectrum-Heading:lang(ja) .spectrum-Heading-strong,.spectrum-Heading:lang(ja) strong,.spectrum-Heading:lang(ko) .spectrum-Heading-strong,.spectrum-Heading:lang(ko) strong,.spectrum-Heading:lang(zh) .spectrum-Heading-strong,.spectrum-Heading:lang(zh) strong{font-style:var(--mod-heading-cjk-strong-font-style,var(--spectrum-heading-cjk-strong-font-style));font-weight:var(--mod-heading-cjk-strong-font-weight,var(--spectrum-heading-cjk-strong-font-weight))}.spectrum-Heading:lang(ja) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading:lang(ja) em strong,.spectrum-Heading:lang(ja) strong em,.spectrum-Heading:lang(ko) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading:lang(ko) em strong,.spectrum-Heading:lang(ko) strong em,.spectrum-Heading:lang(zh) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading:lang(zh) em strong,.spectrum-Heading:lang(zh) strong em{font-style:var(--mod-heading-cjk-strong-emphasized-font-style,var(--spectrum-heading-cjk-strong-emphasized-font-style));font-weight:var(--mod-heading-cjk-strong-emphasized-font-weight,var(--spectrum-heading-cjk-strong-emphasized-font-weight))}.spectrum-Heading--heavy{font-style:var(--mod-heading-sans-serif-heavy-font-style,var(--spectrum-heading-sans-serif-heavy-font-style));font-weight:var(--mod-heading-sans-serif-heavy-font-weight,var(--spectrum-heading-sans-serif-heavy-font-weight))}.spectrum-Heading--heavy .spectrum-Heading-strong,.spectrum-Heading--heavy strong{font-style:var(--mod-heading-sans-serif-heavy-strong-font-style,var(--spectrum-heading-sans-serif-heavy-strong-font-style));font-weight:var(--mod-heading-sans-serif-heavy-strong-font-weight,var(--spectrum-heading-sans-serif-heavy-strong-font-weight))}.spectrum-Heading--heavy .spectrum-Heading-emphasized,.spectrum-Heading--heavy em{font-style:var(--mod-heading-sans-serif-heavy-emphasized-font-style,var(--spectrum-heading-sans-serif-heavy-emphasized-font-style));font-weight:var(--mod-heading-sans-serif-heavy-emphasized-font-weight,var(--spectrum-heading-sans-serif-heavy-emphasized-font-weight))}.spectrum-Heading--heavy .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy em strong,.spectrum-Heading--heavy strong em{font-style:var(--mod-heading-sans-serif-heavy-strong-emphasized-font-style,var(--spectrum-heading-sans-serif-heavy-strong-emphasized-font-style));font-weight:var(--mod-heading-sans-serif-heavy-strong-emphasized-font-weight,var(--spectrum-heading-sans-serif-heavy-strong-emphasized-font-weight))}.spectrum-Heading--heavy:lang(ja),.spectrum-Heading--heavy:lang(ko),.spectrum-Heading--heavy:lang(zh){font-style:var(--mod-heading-cjk-heavy-font-style,var(--spectrum-heading-cjk-heavy-font-style));font-weight:var(--mod-heading-cjk-heavy-font-weight,var(--spectrum-heading-cjk-heavy-font-weight))}.spectrum-Heading--heavy:lang(ja) .spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ja) em,.spectrum-Heading--heavy:lang(ko) .spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ko) em,.spectrum-Heading--heavy:lang(zh) .spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(zh) em{font-style:var(--mod-heading-cjk-heavy-emphasized-font-style,var(--spectrum-heading-cjk-heavy-emphasized-font-style));font-weight:var(--mod-heading-cjk-heavy-emphasized-font-weight,var(--spectrum-heading-cjk-heavy-emphasized-font-weight))}.spectrum-Heading--heavy:lang(ja) .spectrum-Heading-strong,.spectrum-Heading--heavy:lang(ja) strong,.spectrum-Heading--heavy:lang(ko) .spectrum-Heading-strong,.spectrum-Heading--heavy:lang(ko) strong,.spectrum-Heading--heavy:lang(zh) .spectrum-Heading-strong,.spectrum-Heading--heavy:lang(zh) strong{font-style:var(--mod-heading-cjk-heavy-strong-font-style,var(--spectrum-heading-cjk-heavy-strong-font-style));font-weight:var(--mod-heading-cjk-heavy-strong-font-weight,var(--spectrum-heading-cjk-heavy-strong-font-weight))}.spectrum-Heading--heavy:lang(ja) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ja) em strong,.spectrum-Heading--heavy:lang(ja) strong em,.spectrum-Heading--heavy:lang(ko) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ko) em strong,.spectrum-Heading--heavy:lang(ko) strong em,.spectrum-Heading--heavy:lang(zh) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(zh) em strong,.spectrum-Heading--heavy:lang(zh) strong em{font-style:var(--mod-heading-cjk-heavy-strong-emphasized-font-style,var(--spectrum-heading-cjk-heavy-strong-emphasized-font-style));font-weight:var(--mod-heading-cjk-heavy-strong-emphasized-font-weight,var(--spectrum-heading-cjk-heavy-strong-emphasized-font-weight))}.spectrum-Heading--light{font-style:var(--mod-heading-sans-serif-light-font-style,var(--spectrum-heading-sans-serif-light-font-style));font-weight:var(--mod-heading-sans-serif-light-font-weight,var(--spectrum-heading-sans-serif-light-font-weight))}.spectrum-Heading--light .spectrum-Heading-emphasized,.spectrum-Heading--light em{font-style:var(--mod-heading-sans-serif-light-emphasized-font-style,var(--spectrum-heading-sans-serif-light-emphasized-font-style));font-weight:var(--mod-heading-sans-serif-light-emphasized-font-weight,var(--spectrum-heading-sans-serif-light-emphasized-font-weight))}.spectrum-Heading--light .spectrum-Heading-strong,.spectrum-Heading--light strong{font-style:var(--mod-heading-sans-serif-light-strong-font-style,var(--spectrum-heading-sans-serif-light-strong-font-style));font-weight:var(--mod-heading-sans-serif-light-strong-font-weight,var(--spectrum-heading-sans-serif-light-strong-font-weight))}.spectrum-Heading--light .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light em strong,.spectrum-Heading--light strong em{font-style:var(--mod-heading-sans-serif-light-strong-emphasized-font-style,var(--spectrum-heading-sans-serif-light-strong-emphasized-font-style));font-weight:var(--mod-heading-sans-serif-light-strong-emphasized-font-weight,var(--spectrum-heading-sans-serif-light-strong-emphasized-font-weight))}.spectrum-Heading--light:lang(ja),.spectrum-Heading--light:lang(ko),.spectrum-Heading--light:lang(zh){font-style:var(--mod-heading-cjk-light-font-style,var(--spectrum-heading-cjk-light-font-style));font-weight:var(--mod-heading-cjk-light-font-weight,var(--spectrum-heading-cjk-light-font-weight))}.spectrum-Heading--light:lang(ja) .spectrum-Heading-strong,.spectrum-Heading--light:lang(ja) strong,.spectrum-Heading--light:lang(ko) .spectrum-Heading-strong,.spectrum-Heading--light:lang(ko) strong,.spectrum-Heading--light:lang(zh) .spectrum-Heading-strong,.spectrum-Heading--light:lang(zh) strong{font-style:var(--mod-heading-cjk-light-strong-font-style,var(--spectrum-heading-cjk-light-strong-font-style));font-weight:var(--mod-heading-cjk-light-strong-font-weight,var(--spectrum-heading-cjk-light-strong-font-weight))}.spectrum-Heading--light:lang(ja) .spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ja) em,.spectrum-Heading--light:lang(ko) .spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ko) em,.spectrum-Heading--light:lang(zh) .spectrum-Heading-emphasized,.spectrum-Heading--light:lang(zh) em{font-style:var(--mod-heading-cjk-light-emphasized-font-style,var(--spectrum-heading-cjk-light-emphasized-font-style));font-weight:var(--mod-heading-cjk-light-emphasized-font-weight,var(--spectrum-heading-cjk-light-emphasized-font-weight))}.spectrum-Heading--light:lang(ja) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ja) em strong,.spectrum-Heading--light:lang(ja) strong em,.spectrum-Heading--light:lang(ko) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ko) em strong,.spectrum-Heading--light:lang(ko) strong em,.spectrum-Heading--light:lang(zh) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light:lang(zh) em strong,.spectrum-Heading--light:lang(zh) strong em{font-style:var(--mod-heading-cjk-light-strong-emphasized-font-style,var(--spectrum-heading-cjk-light-strong-emphasized-font-style));font-weight:var(--mod-heading-cjk-light-strong-emphasized-font-weight,var(--spectrum-heading-cjk-light-strong-emphasized-font-weight))}.spectrum-Heading--serif{font-family:var(--mod-heading-serif-font-family,var(--spectrum-heading-serif-font-family));font-style:var(--mod-heading-serif-font-style,var(--spectrum-heading-serif-font-style));font-weight:var(--mod-heading-serif-font-weight,var(--spectrum-heading-serif-font-weight))}.spectrum-Heading--serif .spectrum-Heading-emphasized,.spectrum-Heading--serif em{font-style:var(--mod-heading-serif-emphasized-font-style,var(--spectrum-heading-serif-emphasized-font-style));font-weight:var(--mod-heading-serif-emphasized-font-weight,var(--spectrum-heading-serif-emphasized-font-weight))}.spectrum-Heading--serif .spectrum-Heading-strong,.spectrum-Heading--serif strong{font-style:var(--mod-heading-serif-strong-font-style,var(--spectrum-heading-serif-strong-font-style));font-weight:var(--mod-heading-serif-strong-font-weight,var(--spectrum-heading-serif-strong-font-weight))}.spectrum-Heading--serif .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--serif em strong,.spectrum-Heading--serif strong em{font-style:var(--mod-heading-serif-strong-emphasized-font-style,var(--spectrum-heading-serif-strong-emphasized-font-style));font-weight:var(--mod-heading-serif-strong-emphasized-font-weight,var(--spectrum-heading-serif-strong-emphasized-font-weight))}.spectrum-Heading--serif.spectrum-Heading--heavy{font-style:var(--mod-heading-serif-heavy-font-style,var(--spectrum-heading-serif-heavy-font-style));font-weight:var(--mod-heading-serif-heavy-font-weight,var(--spectrum-heading-serif-heavy-font-weight))}.spectrum-Heading--serif.spectrum-Heading--heavy .spectrum-Heading-strong,.spectrum-Heading--serif.spectrum-Heading--heavy strong{font-style:var(--mod-heading-serif-heavy-strong-font-style,var(--spectrum-heading-serif-heavy-strong-font-style));font-weight:var(--mod-heading-serif-heavy-strong-font-weight,var(--spectrum-heading-serif-heavy-strong-font-weight))}.spectrum-Heading--serif.spectrum-Heading--heavy .spectrum-Heading-emphasized,.spectrum-Heading--serif.spectrum-Heading--heavy em{font-style:var(--mod-heading-serif-heavy-emphasized-font-style,var(--spectrum-heading-serif-heavy-emphasized-font-style));font-weight:var(--mod-heading-serif-heavy-emphasized-font-weight,var(--spectrum-heading-serif-heavy-emphasized-font-weight))}.spectrum-Heading--serif.spectrum-Heading--heavy .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--serif.spectrum-Heading--heavy em strong,.spectrum-Heading--serif.spectrum-Heading--heavy strong em{font-style:var(--mod-heading-serif-heavy-strong-emphasized-font-style,var(--spectrum-heading-serif-heavy-strong-emphasized-font-style));font-weight:var(--mod-heading-serif-heavy-strong-emphasized-font-weight,var(--spectrum-heading-serif-heavy-strong-emphasized-font-weight))}.spectrum-Heading--serif.spectrum-Heading--light{font-style:var(--mod-heading-serif-light-font-style,var(--spectrum-heading-serif-light-font-style));font-weight:var(--mod-heading-serif-light-font-weight,var(--spectrum-heading-serif-light-font-weight))}.spectrum-Heading--serif.spectrum-Heading--light .spectrum-Heading-emphasized,.spectrum-Heading--serif.spectrum-Heading--light em{font-style:var(--mod-heading-serif-light-emphasized-font-style,var(--spectrum-heading-serif-light-emphasized-font-style));font-weight:var(--mod-heading-serif-light-emphasized-font-weight,var(--spectrum-heading-serif-light-emphasized-font-weight))}.spectrum-Heading--serif.spectrum-Heading--light .spectrum-Heading-strong,.spectrum-Heading--serif.spectrum-Heading--light strong{font-style:var(--mod-heading-serif-light-strong-font-style,var(--spectrum-heading-serif-light-strong-font-style));font-weight:var(--mod-heading-serif-light-strong-font-weight,var(--spectrum-heading-serif-light-strong-font-weight))}.spectrum-Heading--serif.spectrum-Heading--light .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--serif.spectrum-Heading--light em strong,.spectrum-Heading--serif.spectrum-Heading--light strong em{font-style:var(--mod-heading-serif-light-strong-emphasized-font-style,var(--spectrum-heading-serif-light-strong-emphasized-font-style));font-weight:var(--mod-heading-serif-light-strong-emphasized-font-weight,var(--spectrum-heading-serif-light-strong-emphasized-font-weight))}.spectrum-Body,.spectrum-Body--sizeM{--spectrum-body-font-size:var(--spectrum-body-size-m)}.spectrum-Body--sizeXS{--spectrum-body-font-size:var(--spectrum-body-size-xs)}.spectrum-Body--sizeS{--spectrum-body-font-size:var(--spectrum-body-size-s)}.spectrum-Body--sizeL{--spectrum-body-font-size:var(--spectrum-body-size-l)}.spectrum-Body--sizeXL{--spectrum-body-font-size:var(--spectrum-body-size-xl)}.spectrum-Body--sizeXXL{--spectrum-body-font-size:var(--spectrum-body-size-xxl)}.spectrum-Body--sizeXXXL{--spectrum-body-font-size:var(--spectrum-body-size-xxxl)}.spectrum-Body{--spectrum-body-sans-serif-font-family:var(--spectrum-sans-font-family-stack);--spectrum-body-serif-font-family:var(--spectrum-serif-font-family-stack);--spectrum-body-cjk-font-family:var(--spectrum-cjk-font-family-stack);--spectrum-body-cjk-letter-spacing:var(--spectrum-cjk-letter-spacing);--spectrum-body-font-color:var(--spectrum-body-color);font-family:var(--mod-body-sans-serif-font-family,var(--spectrum-body-sans-serif-font-family));font-style:var(--mod-body-sans-serif-font-style,var(--spectrum-body-sans-serif-font-style));font-weight:var(--mod-body-sans-serif-font-weight,var(--spectrum-body-sans-serif-font-weight));font-size:var(--mod-body-font-size,var(--spectrum-body-font-size));color:var(--highcontrast-body-font-color,var(--mod-body-font-color,var(--spectrum-body-font-color)));line-height:var(--mod-body-line-height,var(--spectrum-body-line-height));margin-block-start:var(--mod-body-margin-start,var(--mod-body-margin,0));margin-block-end:var(--mod-body-margin-end,var(--mod-body-margin,var(--spectrum-body-margin-end,0)))}.spectrum-Body .spectrum-Body-strong,.spectrum-Body strong{font-style:var(--mod-body-sans-serif-strong-font-style,var(--spectrum-body-sans-serif-strong-font-style));font-weight:var(--mod-body-sans-serif-strong-font-weight,var(--spectrum-body-sans-serif-strong-font-weight))}.spectrum-Body .spectrum-Body-emphasized,.spectrum-Body em{font-style:var(--mod-body-sans-serif-emphasized-font-style,var(--spectrum-body-sans-serif-emphasized-font-style));font-weight:var(--mod-body-sans-serif-emphasized-font-weight,var(--spectrum-body-sans-serif-emphasized-font-weight))}.spectrum-Body .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body em strong,.spectrum-Body strong em{font-style:var(--mod-body-sans-serif-strong-emphasized-font-style,var(--spectrum-body-sans-serif-strong-emphasized-font-style));font-weight:var(--mod-body-sans-serif-strong-emphasized-font-weight,var(--spectrum-body-sans-serif-strong-emphasized-font-weight))}.spectrum-Body:lang(ja),.spectrum-Body:lang(ko),.spectrum-Body:lang(zh){font-family:var(--mod-body-cjk-font-family,var(--spectrum-body-cjk-font-family));font-style:var(--mod-body-cjk-font-style,var(--spectrum-body-cjk-font-style));font-weight:var(--mod-body-cjk-font-weight,var(--spectrum-body-cjk-font-weight));line-height:var(--mod-body-cjk-line-height,var(--spectrum-body-cjk-line-height));letter-spacing:var(--mod-body-cjk-letter-spacing,var(--spectrum-body-cjk-letter-spacing))}.spectrum-Body:lang(ja) .spectrum-Body-strong,.spectrum-Body:lang(ja) strong,.spectrum-Body:lang(ko) .spectrum-Body-strong,.spectrum-Body:lang(ko) strong,.spectrum-Body:lang(zh) .spectrum-Body-strong,.spectrum-Body:lang(zh) strong{font-style:var(--mod-body-cjk-strong-font-style,var(--spectrum-body-cjk-strong-font-style));font-weight:var(--mod-body-cjk-strong-font-weight,var(--spectrum-body-cjk-strong-font-weight))}.spectrum-Body:lang(ja) .spectrum-Body-emphasized,.spectrum-Body:lang(ja) em,.spectrum-Body:lang(ko) .spectrum-Body-emphasized,.spectrum-Body:lang(ko) em,.spectrum-Body:lang(zh) .spectrum-Body-emphasized,.spectrum-Body:lang(zh) em{font-style:var(--mod-body-cjk-emphasized-font-style,var(--spectrum-body-cjk-emphasized-font-style));font-weight:var(--mod-body-cjk-emphasized-font-weight,var(--spectrum-body-cjk-emphasized-font-weight))}.spectrum-Body:lang(ja) .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body:lang(ja) em strong,.spectrum-Body:lang(ja) strong em,.spectrum-Body:lang(ko) .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body:lang(ko) em strong,.spectrum-Body:lang(ko) strong em,.spectrum-Body:lang(zh) .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body:lang(zh) em strong,.spectrum-Body:lang(zh) strong em{font-style:var(--mod-body-cjk-strong-emphasized-font-style,var(--spectrum-body-cjk-strong-emphasized-font-style));font-weight:var(--mod-body-cjk-strong-emphasized-font-weight,var(--spectrum-body-cjk-strong-emphasized-font-weight))}.spectrum-Body--serif{font-family:var(--mod-body-serif-font-family,var(--spectrum-body-serif-font-family));font-weight:var(--mod-body-serif-font-weight,var(--spectrum-body-serif-font-weight));font-style:var(--mod-body-serif-font-style,var(--spectrum-body-serif-font-style))}.spectrum-Body--serif .spectrum-Body-strong,.spectrum-Body--serif strong{font-style:var(--mod-body-serif-strong-font-style,var(--spectrum-body-serif-strong-font-style));font-weight:var(--mod-body-serif-strong-font-weight,var(--spectrum-body-serif-strong-font-weight))}.spectrum-Body--serif .spectrum-Body-emphasized,.spectrum-Body--serif em{font-style:var(--mod-body-serif-emphasized-font-style,var(--spectrum-body-serif-emphasized-font-style));font-weight:var(--mod-body-serif-emphasized-font-weight,var(--spectrum-body-serif-emphasized-font-weight))}.spectrum-Body--serif .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body--serif em strong,.spectrum-Body--serif strong em{font-style:var(--mod-body-serif-strong-emphasized-font-style,var(--spectrum-body-serif-strong-emphasized-font-style));font-weight:var(--mod-body-serif-strong-emphasized-font-weight,var(--spectrum-body-serif-strong-emphasized-font-weight))}.spectrum-Detail,.spectrum-Detail--sizeM{--spectrum-detail-font-size:var(--spectrum-detail-size-m)}.spectrum-Detail--sizeS{--spectrum-detail-font-size:var(--spectrum-detail-size-s)}.spectrum-Detail--sizeL{--spectrum-detail-font-size:var(--spectrum-detail-size-l)}.spectrum-Detail--sizeXL{--spectrum-detail-font-size:var(--spectrum-detail-size-xl)}.spectrum-Detail{--spectrum-detail-sans-serif-font-family:var(--spectrum-sans-font-family-stack);--spectrum-detail-serif-font-family:var(--spectrum-serif-font-family-stack);--spectrum-detail-cjk-font-family:var(--spectrum-cjk-font-family-stack);--spectrum-detail-font-color:var(--spectrum-detail-color);font-family:var(--mod-detail-sans-serif-font-family,var(--spectrum-detail-sans-serif-font-family));font-style:var(--mod-detail-sans-serif-font-style,var(--spectrum-detail-sans-serif-font-style));font-weight:var(--mod-detail-sans-serif-font-weight,var(--spectrum-detail-sans-serif-font-weight));font-size:var(--mod-detail-font-size,var(--spectrum-detail-font-size));color:var(--highcontrast-detail-font-color,var(--mod-detail-font-color,var(--spectrum-detail-font-color)));line-height:var(--mod-detail-line-height,var(--spectrum-detail-line-height));letter-spacing:var(--mod-detail-letter-spacing,var(--spectrum-detail-letter-spacing));text-transform:uppercase;margin-block-start:var(--mod-detail-margin-start,var(--spectrum-detail-margin-start,0));margin-block-end:var(--mod-detail-margin-end,var(--spectrum-detail-margin-end,0))}.spectrum-Detail .spectrum-Detail-strong,.spectrum-Detail strong{font-style:var(--mod-detail-sans-serif-strong-font-style,var(--spectrum-detail-sans-serif-strong-font-style));font-weight:var(--mod-detail-sans-serif-strong-font-weight,var(--spectrum-detail-sans-serif-strong-font-weight))}.spectrum-Detail .spectrum-Detail-emphasized,.spectrum-Detail em{font-style:var(--mod-detail-sans-serif-emphasized-font-style,var(--spectrum-detail-sans-serif-emphasized-font-style));font-weight:var(--mod-detail-sans-serif-emphasized-font-weight,var(--spectrum-detail-sans-serif-emphasized-font-weight))}.spectrum-Detail .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail em strong,.spectrum-Detail strong em{font-style:var(--mod-detail-sans-serif-strong-emphasized-font-style,var(--spectrum-detail-sans-serif-strong-emphasized-font-style));font-weight:var(--mod-detail-sans-serif-strong-emphasized-font-weight,var(--spectrum-detail-sans-serif-strong-emphasized-font-weight))}.spectrum-Detail:lang(ja),.spectrum-Detail:lang(ko),.spectrum-Detail:lang(zh){font-family:var(--mod-detail-cjk-font-family,var(--spectrum-detail-cjk-font-family));font-style:var(--mod-detail-cjk-font-style,var(--spectrum-detail-cjk-font-style));font-weight:var(--mod-detail-cjk-font-weight,var(--spectrum-detail-cjk-font-weight));line-height:var(--mod-detail-cjk-line-height,var(--spectrum-detail-cjk-line-height))}.spectrum-Detail:lang(ja) .spectrum-Detail-strong,.spectrum-Detail:lang(ja) strong,.spectrum-Detail:lang(ko) .spectrum-Detail-strong,.spectrum-Detail:lang(ko) strong,.spectrum-Detail:lang(zh) .spectrum-Detail-strong,.spectrum-Detail:lang(zh) strong{font-style:var(--mod-detail-cjk-strong-font-style,var(--spectrum-detail-cjk-strong-font-style));font-weight:var(--mod-detail-cjk-strong-font-weight,var(--spectrum-detail-cjk-strong-font-weight))}.spectrum-Detail:lang(ja) .spectrum-Detail-emphasized,.spectrum-Detail:lang(ja) em,.spectrum-Detail:lang(ko) .spectrum-Detail-emphasized,.spectrum-Detail:lang(ko) em,.spectrum-Detail:lang(zh) .spectrum-Detail-emphasized,.spectrum-Detail:lang(zh) em{font-style:var(--mod-detail-cjk-emphasized-font-style,var(--spectrum-detail-cjk-emphasized-font-style));font-weight:var(--mod-detail-cjk-emphasized-font-weight,var(--spectrum-detail-cjk-emphasized-font-weight))}.spectrum-Detail:lang(ja) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail:lang(ja) em strong,.spectrum-Detail:lang(ja) strong em,.spectrum-Detail:lang(ko) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail:lang(ko) em strong,.spectrum-Detail:lang(ko) strong em,.spectrum-Detail:lang(zh) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail:lang(zh) em strong,.spectrum-Detail:lang(zh) strong em{font-style:var(--mod-detail-cjk-strong-emphasized-font-style,var(--spectrum-detail-cjk-strong-emphasized-font-style));font-weight:var(--mod-detail-cjk-strong-emphasized-font-weight,var(--spectrum-detail-cjk-strong-emphasized-font-weight))}.spectrum-Detail--serif{font-family:var(--mod-detail-serif-font-family,var(--spectrum-detail-serif-font-family));font-style:var(--mod-detail-serif-font-style,var(--spectrum-detail-serif-font-style));font-weight:var(--mod-detail-serif-font-weight,var(--spectrum-detail-serif-font-weight))}.spectrum-Detail--serif .spectrum-Detail-strong,.spectrum-Detail--serif strong{font-style:var(--mod-detail-serif-strong-font-style,var(--spectrum-detail-serif-strong-font-style));font-weight:var(--mod-detail-serif-strong-font-weight,var(--spectrum-detail-serif-strong-font-weight))}.spectrum-Detail--serif .spectrum-Detail-emphasized,.spectrum-Detail--serif em{font-style:var(--mod-detail-serif-emphasized-font-style,var(--spectrum-detail-serif-emphasized-font-style));font-weight:var(--mod-detail-serif-emphasized-font-weight,var(--spectrum-detail-serif-emphasized-font-weight))}.spectrum-Detail--serif .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail--serif em strong,.spectrum-Detail--serif strong em{font-style:var(--mod-detail-serif-strong-emphasized-font-style,var(--spectrum-detail-serif-strong-emphasized-font-style));font-weight:var(--mod-detail-serif-strong-emphasized-font-weight,var(--spectrum-detail-serif-strong-emphasized-font-weight))}.spectrum-Detail--light{font-style:var(--mod-detail-sans-serif-light-font-style,var(--spectrum-detail-sans-serif-light-font-style));font-weight:var(--spectrum-detail-sans-serif-light-font-weight,var(--spectrum-detail-sans-serif-light-font-weight))}.spectrum-Detail--light .spectrum-Detail-strong,.spectrum-Detail--light strong{font-style:var(--mod-detail-sans-serif-light-strong-font-style,var(--spectrum-detail-sans-serif-light-strong-font-style));font-weight:var(--mod-detail-sans-serif-light-strong-font-weight,var(--spectrum-detail-sans-serif-light-strong-font-weight))}.spectrum-Detail--light .spectrum-Detail-emphasized,.spectrum-Detail--light em{font-style:var(--mod-detail-sans-serif-light-emphasized-font-style,var(--spectrum-detail-sans-serif-light-emphasized-font-style));font-weight:var(--mod-detail-sans-serif-light-emphasized-font-weight,var(--spectrum-detail-sans-serif-light-emphasized-font-weight))}.spectrum-Detail--light .spectrum-Detail-strong.spectrum-Body-emphasized,.spectrum-Detail--light em strong,.spectrum-Detail--light strong em{font-style:var(--mod-detail-sans-serif-light-strong-emphasized-font-style,var(--spectrum-detail-sans-serif-light-strong-emphasized-font-style));font-weight:var(--mod-detail-sans-serif-light-strong-emphasized-font-weight,var(--spectrum-detail-sans-serif-light-strong-emphasized-font-weight))}.spectrum-Detail--light:lang(ja),.spectrum-Detail--light:lang(ko),.spectrum-Detail--light:lang(zh){font-style:var(--mod-detail-cjk-light-font-style,var(--spectrum-detail-cjk-light-font-style));font-weight:var(--mod-detail-cjk-light-font-weight,var(--spectrum-detail-cjk-light-font-weight))}.spectrum-Detail--light:lang(ja) .spectrum-Detail-strong,.spectrum-Detail--light:lang(ja) strong,.spectrum-Detail--light:lang(ko) .spectrum-Detail-strong,.spectrum-Detail--light:lang(ko) strong,.spectrum-Detail--light:lang(zh) .spectrum-Detail-strong,.spectrum-Detail--light:lang(zh) strong{font-style:var(--mod-detail-cjk-light-strong-font-style,var(--spectrum-detail-cjk-light-strong-font-style));font-weight:var(--mod-detail-cjk-light-strong-font-weight,var(--spectrum-detail-cjk-light-strong-font-weight))}.spectrum-Detail--light:lang(ja) .spectrum-Detail-emphasized,.spectrum-Detail--light:lang(ja) em,.spectrum-Detail--light:lang(ko) .spectrum-Detail-emphasized,.spectrum-Detail--light:lang(ko) em,.spectrum-Detail--light:lang(zh) .spectrum-Detail-emphasized,.spectrum-Detail--light:lang(zh) em{font-style:var(--mod-detail-cjk-light-emphasized-font-style,var(--spectrum-detail-cjk-light-emphasized-font-style));font-weight:var(--mod-detail-cjk-light-emphasized-font-weight,var(--spectrum-detail-cjk-light-emphasized-font-weight))}.spectrum-Detail--light:lang(ja) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail--light:lang(ko) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail--light:lang(zh) .spectrum-Detail-strong.spectrum-Detail-emphasized{font-style:var(--mod-detail-cjk-light-strong-emphasized-font-style,var(--spectrum-detail-cjk-light-strong-emphasized-font-style));font-weight:var(--mod-detail-cjk-light-strong-emphasized-font-weight,var(--spectrum-detail-cjk-light-strong-emphasized-font-weight))}.spectrum-Detail--serif.spectrum-Detail--light{font-style:var(--mod-detail-serif-light-font-style,var(--spectrum-detail-serif-light-font-style));font-weight:var(--mod-detail-serif-light-font-weight,var(--spectrum-detail-serif-light-font-weight))}.spectrum-Detail--serif.spectrum-Detail--light .spectrum-Detail-strong,.spectrum-Detail--serif.spectrum-Detail--light strong{font-style:var(--mod-detail-serif-light-strong-font-style,var(--spectrum-detail-serif-light-strong-font-style));font-weight:var(--mod-detail-serif-light-strong-font-weight,var(--spectrum-detail-serif-light-strong-font-weight))}.spectrum-Detail--serif.spectrum-Detail--light .spectrum-Detail-emphasized,.spectrum-Detail--serif.spectrum-Detail--light em{font-style:var(--mod-detail-serif-light-emphasized-font-style,var(--spectrum-detail-serif-light-emphasized-font-style));font-weight:var(--mod-detail-serif-light-emphasized-font-weight,var(--spectrum-detail-serif-light-emphasized-font-weight))}.spectrum-Detail--serif.spectrum-Detail--light .spectrum-Detail-strong.spectrum-Body-emphasized,.spectrum-Detail--serif.spectrum-Detail--light em strong,.spectrum-Detail--serif.spectrum-Detail--light strong em{font-style:var(--mod-detail-serif-light-strong-emphasized-font-style,var(--spectrum-detail-serif-light-strong-emphasized-font-style));font-weight:var(--mod-detail-serif-light-strong-emphasized-font-weight,var(--spectrum-detail-serif-light-strong-emphasized-font-weight))}.spectrum-Code,.spectrum-Code--sizeM{--spectrum-code-font-size:var(--spectrum-code-size-m)}.spectrum-Code--sizeXS{--spectrum-code-font-size:var(--spectrum-code-size-xs)}.spectrum-Code--sizeS{--spectrum-code-font-size:var(--spectrum-code-size-s)}.spectrum-Code--sizeL{--spectrum-code-font-size:var(--spectrum-code-size-l)}.spectrum-Code--sizeXL{--spectrum-code-font-size:var(--spectrum-code-size-xl)}.spectrum-Code{--spectrum-code-font-family:var(--spectrum-code-font-family-stack);--spectrum-code-cjk-letter-spacing:var(--spectrum-cjk-letter-spacing);--spectrum-code-font-color:var(--spectrum-code-color);font-family:var(--mod-code-font-family,var(--spectrum-code-font-family));font-style:var(--mod-code-font-style,var(--spectrum-code-font-style));font-weight:var(--mod-code-font-weight,var(--spectrum-code-font-weight));font-size:var(--mod-code-font-size,var(--spectrum-code-font-size));line-height:var(--mod-code-line-height,var(--spectrum-code-line-height));color:var(--highcontrast-code-font-color,var(--mod-code-font-color,var(--spectrum-code-font-color)));margin-block-start:var(--mod-code-margin-start,0);margin-block-end:var(--mod-code-margin-end,0)}.spectrum-Code .spectrum-Code-strong,.spectrum-Code strong{font-style:var(--mod-code-strong-font-style,var(--spectrum-code-strong-font-style));font-weight:var(--mod-code-strong-font-weight,var(--spectrum-code-strong-font-weight))}.spectrum-Code .spectrum-Code-emphasized,.spectrum-Code em{font-style:var(--mod-code-emphasized-font-style,var(--spectrum-code-emphasized-font-style));font-weight:var(--mod-code-emphasized-font-weight,var(--spectrum-code-emphasized-font-weight))}.spectrum-Code .spectrum-Code-strong.spectrum-Code-emphasized,.spectrum-Code em strong,.spectrum-Code strong em{font-style:var(--mod-code-strong-emphasized-font-style,var(--spectrum-code-strong-emphasized-font-style));font-weight:var(--mod-code-strong-emphasized-font-weight,var(--spectrum-code-strong-emphasized-font-weight))}.spectrum-Code:lang(ja),.spectrum-Code:lang(ko),.spectrum-Code:lang(zh){font-family:var(--mod-code-cjk-font-family,var(--spectrum-code-cjk-font-family));font-style:var(--mod-code-cjk-font-style,var(--spectrum-code-cjk-font-style));font-weight:var(--mod-code-cjk-font-weight,var(--spectrum-code-cjk-font-weight));line-height:var(--mod-code-cjk-line-height,var(--spectrum-code-cjk-line-height));letter-spacing:var(--mod-code-cjk-letter-spacing,var(--spectrum-code-cjk-letter-spacing))}.spectrum-Code:lang(ja) .spectrum-Code-strong,.spectrum-Code:lang(ja) strong,.spectrum-Code:lang(ko) .spectrum-Code-strong,.spectrum-Code:lang(ko) strong,.spectrum-Code:lang(zh) .spectrum-Code-strong,.spectrum-Code:lang(zh) strong{font-style:var(--mod-code-cjk-strong-font-style,var(--spectrum-code-cjk-strong-font-style));font-weight:var(--mod-code-cjk-strong-font-weight,var(--spectrum-code-cjk-strong-font-weight))}.spectrum-Code:lang(ja) .spectrum-Code-emphasized,.spectrum-Code:lang(ja) em,.spectrum-Code:lang(ko) .spectrum-Code-emphasized,.spectrum-Code:lang(ko) em,.spectrum-Code:lang(zh) .spectrum-Code-emphasized,.spectrum-Code:lang(zh) em{font-style:var(--mod-code-cjk-emphasized-font-style,var(--spectrum-code-cjk-emphasized-font-style));font-weight:var(--mod-code-cjk-emphasized-font-weight,var(--spectrum-code-cjk-emphasized-font-weight))}.spectrum-Code:lang(ja) .spectrum-Code-strong.spectrum-Code-emphasized,.spectrum-Code:lang(ja) em strong,.spectrum-Code:lang(ja) strong em,.spectrum-Code:lang(ko) .spectrum-Code-strong.spectrum-Code-emphasized,.spectrum-Code:lang(ko) em strong,.spectrum-Code:lang(ko) strong em,.spectrum-Code:lang(zh) .spectrum-Code-strong.spectrum-Code-emphasized,.spectrum-Code:lang(zh) em strong,.spectrum-Code:lang(zh) strong em{font-style:var(--mod-code-cjk-strong-emphasized-font-style,var(--spectrum-code-cjk-strong-emphasized-font-style));font-weight:var(--mod-code-cjk-strong-emphasized-font-weight,var(--spectrum-code-cjk-strong-emphasized-font-weight))}:host{font-family:var(--spectrum-font-family);font-size:var(--spectrum-font-size);font-style:var(--spectrum-font-style);display:block;&:lang(ar){font-family:var(--spectrum-font-family-ar)}&:lang(he){font-family:var(--spectrum-font-family-he)}}#scale,#theme{width:100%;height:100%}
`;
no.registerThemeFragment("spectrum-two", "system", Su);
no.registerThemeFragment("light-spectrum-two", "color", Au);
const Eu = st`
    :root,:host{--spectrum-global-dimension-scale-factor:1;--spectrum-global-dimension-size-0:0px;--spectrum-global-dimension-size-10:1px;--spectrum-global-dimension-size-25:2px;--spectrum-global-dimension-size-30:2px;--spectrum-global-dimension-size-40:3px;--spectrum-global-dimension-size-50:4px;--spectrum-global-dimension-size-65:5px;--spectrum-global-dimension-size-75:6px;--spectrum-global-dimension-size-85:7px;--spectrum-global-dimension-size-100:8px;--spectrum-global-dimension-size-115:9px;--spectrum-global-dimension-size-125:10px;--spectrum-global-dimension-size-130:11px;--spectrum-global-dimension-size-150:12px;--spectrum-global-dimension-size-160:13px;--spectrum-global-dimension-size-175:14px;--spectrum-global-dimension-size-185:15px;--spectrum-global-dimension-size-200:16px;--spectrum-global-dimension-size-225:18px;--spectrum-global-dimension-size-250:20px;--spectrum-global-dimension-size-275:22px;--spectrum-global-dimension-size-300:24px;--spectrum-global-dimension-size-325:26px;--spectrum-global-dimension-size-350:28px;--spectrum-global-dimension-size-400:32px;--spectrum-global-dimension-size-450:36px;--spectrum-global-dimension-size-500:40px;--spectrum-global-dimension-size-550:44px;--spectrum-global-dimension-size-600:48px;--spectrum-global-dimension-size-650:52px;--spectrum-global-dimension-size-675:54px;--spectrum-global-dimension-size-700:56px;--spectrum-global-dimension-size-750:60px;--spectrum-global-dimension-size-800:64px;--spectrum-global-dimension-size-900:72px;--spectrum-global-dimension-size-1000:80px;--spectrum-global-dimension-size-1125:90px;--spectrum-global-dimension-size-1200:96px;--spectrum-global-dimension-size-1250:100px;--spectrum-global-dimension-size-1600:128px;--spectrum-global-dimension-size-1700:136px;--spectrum-global-dimension-size-1800:144px;--spectrum-global-dimension-size-2000:160px;--spectrum-global-dimension-size-2400:192px;--spectrum-global-dimension-size-2500:200px;--spectrum-global-dimension-size-3000:240px;--spectrum-global-dimension-size-3400:272px;--spectrum-global-dimension-size-3600:288px;--spectrum-global-dimension-size-4600:368px;--spectrum-global-dimension-size-5000:400px;--spectrum-global-dimension-size-6000:480px;--spectrum-global-dimension-font-size-25:10px;--spectrum-global-dimension-font-size-50:11px;--spectrum-global-dimension-font-size-75:12px;--spectrum-global-dimension-font-size-100:14px;--spectrum-global-dimension-font-size-150:15px;--spectrum-global-dimension-font-size-200:16px;--spectrum-global-dimension-font-size-300:18px;--spectrum-global-dimension-font-size-400:20px;--spectrum-global-dimension-font-size-500:22px;--spectrum-global-dimension-font-size-600:25px;--spectrum-global-dimension-font-size-700:28px;--spectrum-global-dimension-font-size-800:32px;--spectrum-global-dimension-font-size-900:36px;--spectrum-global-dimension-font-size-1000:40px;--spectrum-global-dimension-font-size-1100:45px;--spectrum-global-dimension-font-size-1200:50px;--spectrum-global-dimension-font-size-1300:60px;--spectrum-alias-item-text-padding-top-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-text-padding-bottom-s:var(--spectrum-global-dimension-static-size-65);--spectrum-alias-item-workflow-padding-left-m:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-rounded-workflow-padding-left-m:var(--spectrum-global-dimension-size-175);--spectrum-alias-item-rounded-workflow-padding-left-xl:21px;--spectrum-alias-item-mark-padding-top-m:var(--spectrum-global-dimension-static-size-75);--spectrum-alias-item-mark-padding-bottom-m:var(--spectrum-global-dimension-static-size-75);--spectrum-alias-item-mark-padding-left-m:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-control-1-size-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-control-1-size-xl:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-control-2-size-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-control-3-height-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-control-3-width-s:23px;--spectrum-alias-item-control-3-width-m:var(--spectrum-global-dimension-static-size-325);--spectrum-alias-item-control-3-width-l:29px;--spectrum-alias-item-control-3-width-xl:33px;--spectrum-alias-item-mark-size-m:var(--spectrum-global-dimension-size-250);--spectrum-alias-component-focusring-border-radius:var(--spectrum-global-dimension-static-size-65);--spectrum-alias-control-two-size-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-control-three-height-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-control-three-width-s:23px;--spectrum-alias-control-three-width-m:var(--spectrum-global-dimension-static-size-325);--spectrum-alias-control-three-width-l:29px;--spectrum-alias-control-three-width-xl:33px;--spectrum-alias-search-padding-left-m:var(--spectrum-global-dimension-size-125);--spectrum-alias-focus-ring-border-radius-regular:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-focus-ring-radius-default:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-workflow-icon-size-l:var(--spectrum-global-dimension-static-size-250);--spectrum-alias-ui-icon-chevron-size-75:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-chevron-size-100:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-chevron-size-200:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-chevron-size-300:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-chevron-size-400:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-chevron-size-500:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-checkmark-size-50:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-checkmark-size-75:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-checkmark-size-100:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-checkmark-size-200:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-checkmark-size-300:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-checkmark-size-400:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-checkmark-size-500:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-checkmark-size-600:var(--spectrum-global-dimension-static-size-225);--spectrum-alias-ui-icon-dash-size-50:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-ui-icon-dash-size-75:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-ui-icon-dash-size-100:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-dash-size-200:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-dash-size-300:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-dash-size-400:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-dash-size-500:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-dash-size-600:var(--spectrum-global-dimension-static-size-225);--spectrum-alias-ui-icon-cross-size-75:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-ui-icon-cross-size-100:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-ui-icon-cross-size-200:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-cross-size-300:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-cross-size-400:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-cross-size-500:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-cross-size-600:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-arrow-size-75:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-arrow-size-100:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-arrow-size-200:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-arrow-size-300:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-arrow-size-400:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-arrow-size-500:var(--spectrum-global-dimension-static-size-225);--spectrum-alias-ui-icon-arrow-size-600:var(--spectrum-global-dimension-static-size-250);--spectrum-alias-ui-icon-triplegripper-size-100-width:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-doublegripper-size-100-height:var(--spectrum-global-dimension-static-size-50);--spectrum-alias-ui-icon-singlegripper-size-100-height:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-ui-icon-cornertriangle-size-100:var(--spectrum-global-dimension-static-size-65);--spectrum-alias-ui-icon-cornertriangle-size-300:var(--spectrum-global-dimension-static-size-85);--spectrum-alias-ui-icon-asterisk-size-200:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-asterisk-size-300:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-avatar-size-100:var(--spectrum-global-dimension-size-250);--spectrum-alias-avatar-size-400:var(--spectrum-global-dimension-size-350);--spectrum-alias-avatar-size-600:var(--spectrum-global-dimension-size-450);--spectrum-alias-tag-icon-size-l:var(--spectrum-global-dimension-static-size-250);--spectrum-alias-tag-focusring-border-radius:var(--spectrum-global-dimension-static-size-65);--spectrum-dialog-confirm-title-text-size:var(--spectrum-alias-heading-s-text-size);--spectrum-dialog-confirm-description-text-size:var(--spectrum-global-dimension-font-size-100)}:host,:root{--spectrum-global-alias-appframe-border-size:2px;--swc-scale-factor:1;--spectrum-workflow-icon-size-50:14px;--spectrum-workflow-icon-size-75:16px;--spectrum-workflow-icon-size-100:20px;--spectrum-workflow-icon-size-200:22px;--spectrum-workflow-icon-size-300:26px;--spectrum-arrow-icon-size-75:10px;--spectrum-arrow-icon-size-100:10px;--spectrum-arrow-icon-size-200:12px;--spectrum-arrow-icon-size-300:14px;--spectrum-arrow-icon-size-400:16px;--spectrum-arrow-icon-size-500:18px;--spectrum-arrow-icon-size-600:20px;--spectrum-asterisk-icon-size-100:8px;--spectrum-asterisk-icon-size-200:10px;--spectrum-asterisk-icon-size-300:10px;--spectrum-checkmark-icon-size-50:10px;--spectrum-checkmark-icon-size-75:10px;--spectrum-checkmark-icon-size-100:10px;--spectrum-checkmark-icon-size-200:12px;--spectrum-checkmark-icon-size-300:14px;--spectrum-checkmark-icon-size-400:16px;--spectrum-checkmark-icon-size-500:16px;--spectrum-checkmark-icon-size-600:18px;--spectrum-chevron-icon-size-50:6px;--spectrum-chevron-icon-size-75:10px;--spectrum-chevron-icon-size-100:10px;--spectrum-chevron-icon-size-200:12px;--spectrum-chevron-icon-size-300:14px;--spectrum-chevron-icon-size-400:16px;--spectrum-chevron-icon-size-500:16px;--spectrum-chevron-icon-size-600:18px;--spectrum-corner-triangle-icon-size-75:5px;--spectrum-corner-triangle-icon-size-100:5px;--spectrum-corner-triangle-icon-size-200:6px;--spectrum-corner-triangle-icon-size-300:7px;--spectrum-cross-icon-size-75:8px;--spectrum-cross-icon-size-100:8px;--spectrum-cross-icon-size-200:10px;--spectrum-cross-icon-size-300:12px;--spectrum-cross-icon-size-400:12px;--spectrum-cross-icon-size-500:14px;--spectrum-cross-icon-size-600:16px;--spectrum-dash-icon-size-50:8px;--spectrum-dash-icon-size-75:8px;--spectrum-dash-icon-size-100:10px;--spectrum-dash-icon-size-200:12px;--spectrum-dash-icon-size-300:12px;--spectrum-dash-icon-size-400:14px;--spectrum-dash-icon-size-500:16px;--spectrum-dash-icon-size-600:18px;--spectrum-checkbox-control-size-small:12px;--spectrum-checkbox-control-size-medium:14px;--spectrum-checkbox-control-size-large:16px;--spectrum-checkbox-control-size-extra-large:18px;--spectrum-checkbox-top-to-control-small:6px;--spectrum-checkbox-top-to-control-medium:9px;--spectrum-checkbox-top-to-control-large:12px;--spectrum-checkbox-top-to-control-extra-large:15px;--spectrum-switch-control-width-small:23px;--spectrum-switch-control-width-medium:26px;--spectrum-switch-control-width-large:29px;--spectrum-switch-control-width-extra-large:33px;--spectrum-switch-control-height-small:12px;--spectrum-switch-control-height-medium:14px;--spectrum-switch-control-height-large:16px;--spectrum-switch-control-height-extra-large:18px;--spectrum-switch-top-to-control-small:6px;--spectrum-switch-top-to-control-medium:9px;--spectrum-switch-top-to-control-large:12px;--spectrum-switch-top-to-control-extra-large:15px;--spectrum-radio-button-control-size-small:12px;--spectrum-radio-button-control-size-medium:14px;--spectrum-radio-button-control-size-large:16px;--spectrum-radio-button-control-size-extra-large:18px;--spectrum-radio-button-top-to-control-small:6px;--spectrum-radio-button-top-to-control-medium:9px;--spectrum-radio-button-top-to-control-large:12px;--spectrum-radio-button-top-to-control-extra-large:15px;--spectrum-field-label-text-to-asterisk-small:4px;--spectrum-field-label-text-to-asterisk-medium:4px;--spectrum-field-label-text-to-asterisk-large:5px;--spectrum-field-label-text-to-asterisk-extra-large:5px;--spectrum-field-label-top-to-asterisk-small:8px;--spectrum-field-label-top-to-asterisk-medium:12px;--spectrum-field-label-top-to-asterisk-large:15px;--spectrum-field-label-top-to-asterisk-extra-large:19px;--spectrum-field-label-top-margin-medium:4px;--spectrum-field-label-top-margin-large:5px;--spectrum-field-label-top-margin-extra-large:5px;--spectrum-field-label-to-component-quiet-small:-8px;--spectrum-field-label-to-component-quiet-medium:-8px;--spectrum-field-label-to-component-quiet-large:-12px;--spectrum-field-label-to-component-quiet-extra-large:-15px;--spectrum-help-text-top-to-workflow-icon-small:4px;--spectrum-help-text-top-to-workflow-icon-medium:3px;--spectrum-help-text-top-to-workflow-icon-large:6px;--spectrum-help-text-top-to-workflow-icon-extra-large:9px;--spectrum-status-light-dot-size-medium:8px;--spectrum-status-light-dot-size-large:10px;--spectrum-status-light-dot-size-extra-large:10px;--spectrum-status-light-top-to-dot-small:8px;--spectrum-status-light-top-to-dot-medium:12px;--spectrum-status-light-top-to-dot-large:15px;--spectrum-status-light-top-to-dot-extra-large:19px;--spectrum-action-button-edge-to-hold-icon-medium:4px;--spectrum-action-button-edge-to-hold-icon-large:5px;--spectrum-action-button-edge-to-hold-icon-extra-large:6px;--spectrum-tooltip-tip-width:8px;--spectrum-tooltip-tip-height:4px;--spectrum-tooltip-maximum-width:160px;--spectrum-progress-circle-size-small:16px;--spectrum-progress-circle-size-medium:32px;--spectrum-progress-circle-size-large:64px;--spectrum-progress-circle-thickness-small:2px;--spectrum-progress-circle-thickness-medium:3px;--spectrum-progress-circle-thickness-large:4px;--spectrum-toast-height:48px;--spectrum-toast-maximum-width:336px;--spectrum-toast-top-to-workflow-icon:15px;--spectrum-toast-top-to-text:14px;--spectrum-toast-bottom-to-text:17px;--spectrum-action-bar-height:48px;--spectrum-action-bar-top-to-item-counter:14px;--spectrum-swatch-size-extra-small:16px;--spectrum-swatch-size-small:24px;--spectrum-swatch-size-medium:32px;--spectrum-swatch-size-large:40px;--spectrum-progress-bar-thickness-small:4px;--spectrum-progress-bar-thickness-medium:6px;--spectrum-progress-bar-thickness-large:8px;--spectrum-progress-bar-thickness-extra-large:10px;--spectrum-meter-width:192px;--spectrum-meter-thickness-small:4px;--spectrum-meter-thickness-large:6px;--spectrum-tag-top-to-avatar-small:4px;--spectrum-tag-top-to-avatar-medium:6px;--spectrum-tag-top-to-avatar-large:9px;--spectrum-tag-top-to-cross-icon-small:8px;--spectrum-tag-top-to-cross-icon-medium:12px;--spectrum-tag-top-to-cross-icon-large:15px;--spectrum-popover-top-to-content-area:4px;--spectrum-menu-item-edge-to-content-not-selected-small:28px;--spectrum-menu-item-edge-to-content-not-selected-medium:32px;--spectrum-menu-item-edge-to-content-not-selected-large:38px;--spectrum-menu-item-edge-to-content-not-selected-extra-large:45px;--spectrum-menu-item-top-to-disclosure-icon-small:7px;--spectrum-menu-item-top-to-disclosure-icon-medium:11px;--spectrum-menu-item-top-to-disclosure-icon-large:14px;--spectrum-menu-item-top-to-disclosure-icon-extra-large:17px;--spectrum-menu-item-top-to-selected-icon-small:7px;--spectrum-menu-item-top-to-selected-icon-medium:11px;--spectrum-menu-item-top-to-selected-icon-large:14px;--spectrum-menu-item-top-to-selected-icon-extra-large:17px;--spectrum-slider-control-height-small:14px;--spectrum-slider-control-height-medium:16px;--spectrum-slider-control-height-large:18px;--spectrum-slider-control-height-extra-large:20px;--spectrum-slider-handle-size-small:14px;--spectrum-slider-handle-size-medium:16px;--spectrum-slider-handle-size-large:18px;--spectrum-slider-handle-size-extra-large:20px;--spectrum-slider-handle-border-width-down-small:5px;--spectrum-slider-handle-border-width-down-medium:6px;--spectrum-slider-handle-border-width-down-large:7px;--spectrum-slider-handle-border-width-down-extra-large:8px;--spectrum-slider-bottom-to-handle-small:5px;--spectrum-slider-bottom-to-handle-medium:8px;--spectrum-slider-bottom-to-handle-large:11px;--spectrum-slider-bottom-to-handle-extra-large:14px;--spectrum-slider-control-to-field-label-small:5px;--spectrum-slider-control-to-field-label-medium:8px;--spectrum-slider-control-to-field-label-large:11px;--spectrum-slider-control-to-field-label-extra-large:14px;--spectrum-picker-visual-to-disclosure-icon-small:7px;--spectrum-picker-visual-to-disclosure-icon-medium:8px;--spectrum-picker-visual-to-disclosure-icon-large:9px;--spectrum-picker-visual-to-disclosure-icon-extra-large:10px;--spectrum-text-area-minimum-width:112px;--spectrum-text-area-minimum-height:56px;--spectrum-combo-box-visual-to-field-button-small:7px;--spectrum-combo-box-visual-to-field-button-medium:8px;--spectrum-combo-box-visual-to-field-button-large:9px;--spectrum-combo-box-visual-to-field-button-extra-large:10px;--spectrum-thumbnail-size-50:16px;--spectrum-thumbnail-size-75:18px;--spectrum-thumbnail-size-100:20px;--spectrum-thumbnail-size-200:22px;--spectrum-thumbnail-size-300:26px;--spectrum-thumbnail-size-400:28px;--spectrum-thumbnail-size-500:32px;--spectrum-thumbnail-size-600:36px;--spectrum-thumbnail-size-700:40px;--spectrum-thumbnail-size-800:44px;--spectrum-thumbnail-size-900:50px;--spectrum-thumbnail-size-1000:56px;--spectrum-alert-dialog-title-size:var(--spectrum-heading-size-s);--spectrum-alert-dialog-description-size:var(--spectrum-body-size-s);--spectrum-opacity-checkerboard-square-size:8px;--spectrum-contextual-help-title-size:var(--spectrum-heading-size-xs);--spectrum-contextual-help-body-size:var(--spectrum-body-size-s);--spectrum-breadcrumbs-height-multiline:72px;--spectrum-breadcrumbs-top-to-text:13px;--spectrum-breadcrumbs-top-to-text-compact:11px;--spectrum-breadcrumbs-top-to-text-multiline:12px;--spectrum-breadcrumbs-bottom-to-text:15px;--spectrum-breadcrumbs-bottom-to-text-compact:12px;--spectrum-breadcrumbs-bottom-to-text-multiline:9px;--spectrum-breadcrumbs-start-edge-to-text:8px;--spectrum-breadcrumbs-top-text-to-bottom-text:9px;--spectrum-breadcrumbs-top-to-separator-icon:19px;--spectrum-breadcrumbs-top-to-separator-icon-compact:15px;--spectrum-breadcrumbs-top-to-separator-icon-multiline:15px;--spectrum-breadcrumbs-separator-icon-to-bottom-text-multiline:11px;--spectrum-breadcrumbs-top-to-truncated-menu:8px;--spectrum-breadcrumbs-top-to-truncated-menu-compact:4px;--spectrum-avatar-size-50:16px;--spectrum-avatar-size-75:18px;--spectrum-avatar-size-100:20px;--spectrum-avatar-size-200:22px;--spectrum-avatar-size-300:26px;--spectrum-avatar-size-400:28px;--spectrum-avatar-size-500:32px;--spectrum-avatar-size-600:36px;--spectrum-avatar-size-700:40px;--spectrum-alert-banner-minimum-height:48px;--spectrum-alert-banner-width:832px;--spectrum-alert-banner-top-to-workflow-icon:15px;--spectrum-alert-banner-top-to-text:14px;--spectrum-alert-banner-bottom-to-text:17px;--spectrum-rating-indicator-width:18px;--spectrum-rating-indicator-to-icon:4px;--spectrum-color-area-width:192px;--spectrum-color-area-minimum-width:64px;--spectrum-color-area-height:192px;--spectrum-color-area-minimum-height:64px;--spectrum-color-wheel-width:192px;--spectrum-color-wheel-minimum-width:175px;--spectrum-color-slider-length:192px;--spectrum-color-slider-minimum-length:80px;--spectrum-illustrated-message-title-size:var(--spectrum-heading-size-m);--spectrum-illustrated-message-cjk-title-size:var(--spectrum-heading-cjk-size-m);--spectrum-illustrated-message-body-size:var(--spectrum-body-size-s);--spectrum-coach-mark-width:296px;--spectrum-coach-mark-minimum-width:296px;--spectrum-coach-mark-maximum-width:380px;--spectrum-coach-mark-edge-to-content:var(--spectrum-spacing-400);--spectrum-coach-mark-pagination-text-to-bottom-edge:33px;--spectrum-coach-mark-media-height:222px;--spectrum-coach-mark-media-minimum-height:166px;--spectrum-coach-mark-title-size:var(--spectrum-heading-size-xs);--spectrum-coach-mark-body-size:var(--spectrum-body-size-s);--spectrum-coach-mark-pagination-body-size:var(--spectrum-body-size-s);--spectrum-accordion-top-to-text-regular-small:5px;--spectrum-accordion-small-top-to-text-spacious:9px;--spectrum-accordion-top-to-text-regular-medium:8px;--spectrum-accordion-top-to-text-spacious-medium:12px;--spectrum-accordion-top-to-text-compact-large:4px;--spectrum-accordion-top-to-text-regular-large:9px;--spectrum-accordion-top-to-text-spacious-large:12px;--spectrum-accordion-top-to-text-compact-extra-large:5px;--spectrum-accordion-top-to-text-regular-extra-large:9px;--spectrum-accordion-top-to-text-spacious-extra-large:13px;--spectrum-accordion-bottom-to-text-compact-small:2px;--spectrum-accordion-bottom-to-text-regular-small:7px;--spectrum-accordion-bottom-to-text-spacious-small:11px;--spectrum-accordion-bottom-to-text-compact-medium:5px;--spectrum-accordion-bottom-to-text-regular-medium:9px;--spectrum-accordion-bottom-to-text-spacious-medium:13px;--spectrum-accordion-bottom-to-text-compact-large:8px;--spectrum-accordion-bottom-to-text-regular-large:11px;--spectrum-accordion-bottom-to-text-spacious-large:16px;--spectrum-accordion-bottom-to-text-compact-extra-large:8px;--spectrum-accordion-bottom-to-text-regular-extra-large:12px;--spectrum-accordion-bottom-to-text-spacious-extra-large:16px;--spectrum-accordion-minimum-width:200px;--spectrum-accordion-content-area-top-to-content:8px;--spectrum-accordion-content-area-bottom-to-content:16px;--spectrum-color-handle-size:16px;--spectrum-color-handle-size-key-focus:32px;--spectrum-table-column-header-row-top-to-text-small:8px;--spectrum-table-column-header-row-top-to-text-medium:7px;--spectrum-table-column-header-row-top-to-text-large:10px;--spectrum-table-column-header-row-top-to-text-extra-large:13px;--spectrum-table-column-header-row-bottom-to-text-small:9px;--spectrum-table-column-header-row-bottom-to-text-medium:8px;--spectrum-table-column-header-row-bottom-to-text-large:10px;--spectrum-table-column-header-row-bottom-to-text-extra-large:13px;--spectrum-table-row-height-small-regular:32px;--spectrum-table-row-height-medium-regular:40px;--spectrum-table-row-height-large-regular:48px;--spectrum-table-row-height-extra-large-regular:56px;--spectrum-table-row-height-small-spacious:40px;--spectrum-table-row-height-medium-spacious:48px;--spectrum-table-row-height-large-spacious:56px;--spectrum-table-row-height-extra-large-spacious:64px;--spectrum-table-row-top-to-text-small-regular:8px;--spectrum-table-row-top-to-text-medium-regular:11px;--spectrum-table-row-top-to-text-large-regular:14px;--spectrum-table-row-top-to-text-extra-large-regular:17px;--spectrum-table-row-bottom-to-text-small-regular:9px;--spectrum-table-row-bottom-to-text-medium-regular:12px;--spectrum-table-row-bottom-to-text-large-regular:14px;--spectrum-table-row-bottom-to-text-extra-large-regular:17px;--spectrum-table-row-top-to-text-small-spacious:12px;--spectrum-table-row-top-to-text-medium-spacious:15px;--spectrum-table-row-top-to-text-large-spacious:18px;--spectrum-table-row-top-to-text-extra-large-spacious:21px;--spectrum-table-row-bottom-to-text-small-spacious:13px;--spectrum-table-row-bottom-to-text-medium-spacious:16px;--spectrum-table-row-bottom-to-text-large-spacious:18px;--spectrum-table-row-bottom-to-text-extra-large-spacious:21px;--spectrum-table-checkbox-to-text:24px;--spectrum-table-header-row-checkbox-to-top-small:10px;--spectrum-table-header-row-checkbox-to-top-medium:9px;--spectrum-table-header-row-checkbox-to-top-large:12px;--spectrum-table-header-row-checkbox-to-top-extra-large:15px;--spectrum-table-row-checkbox-to-top-small-compact:6px;--spectrum-table-row-checkbox-to-top-small-regular:10px;--spectrum-table-row-checkbox-to-top-small-spacious:14px;--spectrum-table-row-checkbox-to-top-medium-compact:9px;--spectrum-table-row-checkbox-to-top-medium-regular:13px;--spectrum-table-row-checkbox-to-top-medium-spacious:17px;--spectrum-table-row-checkbox-to-top-large-compact:12px;--spectrum-table-row-checkbox-to-top-large-regular:16px;--spectrum-table-row-checkbox-to-top-large-spacious:20px;--spectrum-table-row-checkbox-to-top-extra-large-compact:15px;--spectrum-table-row-checkbox-to-top-extra-large-regular:19px;--spectrum-table-row-checkbox-to-top-extra-large-spacious:23px;--spectrum-table-section-header-row-height-small:24px;--spectrum-table-section-header-row-height-medium:32px;--spectrum-table-section-header-row-height-large:40px;--spectrum-table-section-header-row-height-extra-large:48px;--spectrum-table-thumbnail-to-top-minimum-small-compact:4px;--spectrum-table-thumbnail-to-top-minimum-medium-compact:5px;--spectrum-table-thumbnail-to-top-minimum-large-compact:7px;--spectrum-table-thumbnail-to-top-minimum-extra-large-compact:8px;--spectrum-table-thumbnail-to-top-minimum-small-regular:5px;--spectrum-table-thumbnail-to-top-minimum-medium-regular:7px;--spectrum-table-thumbnail-to-top-minimum-large-regular:8px;--spectrum-table-thumbnail-to-top-minimum-extra-large-regular:8px;--spectrum-table-thumbnail-to-top-minimum-small-spacious:7px;--spectrum-table-thumbnail-to-top-minimum-medium-spacious:8px;--spectrum-table-thumbnail-to-top-minimum-large-spacious:8px;--spectrum-table-thumbnail-to-top-minimum-extra-large-spacious:10px;--spectrum-tab-item-to-tab-item-horizontal-small:21px;--spectrum-tab-item-to-tab-item-horizontal-medium:24px;--spectrum-tab-item-to-tab-item-horizontal-large:27px;--spectrum-tab-item-to-tab-item-horizontal-extra-large:30px;--spectrum-tab-item-to-tab-item-vertical-small:4px;--spectrum-tab-item-to-tab-item-vertical-medium:4px;--spectrum-tab-item-to-tab-item-vertical-large:5px;--spectrum-tab-item-to-tab-item-vertical-extra-large:5px;--spectrum-tab-item-start-to-edge-small:12px;--spectrum-tab-item-start-to-edge-medium:12px;--spectrum-tab-item-start-to-edge-large:13px;--spectrum-tab-item-start-to-edge-extra-large:13px;--spectrum-tab-item-top-to-text-small:11px;--spectrum-tab-item-bottom-to-text-small:12px;--spectrum-tab-item-top-to-text-medium:14px;--spectrum-tab-item-bottom-to-text-medium:14px;--spectrum-tab-item-top-to-text-large:16px;--spectrum-tab-item-bottom-to-text-large:18px;--spectrum-tab-item-top-to-text-extra-large:19px;--spectrum-tab-item-bottom-to-text-extra-large:20px;--spectrum-tab-item-top-to-text-compact-small:4px;--spectrum-tab-item-bottom-to-text-compact-small:5px;--spectrum-tab-item-top-to-text-compact-medium:6px;--spectrum-tab-item-bottom-to-text-compact-medium:8px;--spectrum-tab-item-top-to-text-compact-large:10px;--spectrum-tab-item-bottom-to-text-compact-large:12px;--spectrum-tab-item-top-to-text-compact-extra-large:12px;--spectrum-tab-item-bottom-to-text-compact-extra-large:13px;--spectrum-tab-item-top-to-workflow-icon-small:13px;--spectrum-tab-item-top-to-workflow-icon-medium:15px;--spectrum-tab-item-top-to-workflow-icon-large:17px;--spectrum-tab-item-top-to-workflow-icon-extra-large:19px;--spectrum-tab-item-top-to-workflow-icon-compact-small:3px;--spectrum-tab-item-top-to-workflow-icon-compact-medium:7px;--spectrum-tab-item-top-to-workflow-icon-compact-large:9px;--spectrum-tab-item-top-to-workflow-icon-compact-extra-large:11px;--spectrum-tab-item-focus-indicator-gap-small:7px;--spectrum-tab-item-focus-indicator-gap-medium:8px;--spectrum-tab-item-focus-indicator-gap-large:9px;--spectrum-tab-item-focus-indicator-gap-extra-large:10px;--spectrum-side-navigation-width:192px;--spectrum-side-navigation-minimum-width:160px;--spectrum-side-navigation-maximum-width:240px;--spectrum-side-navigation-second-level-edge-to-text:24px;--spectrum-side-navigation-third-level-edge-to-text:36px;--spectrum-side-navigation-with-icon-second-level-edge-to-text:50px;--spectrum-side-navigation-with-icon-third-level-edge-to-text:62px;--spectrum-side-navigation-item-to-item:4px;--spectrum-side-navigation-item-to-header:24px;--spectrum-side-navigation-header-to-item:8px;--spectrum-side-navigation-bottom-to-text:8px;--spectrum-tray-top-to-content-area:4px;--spectrum-accordion-top-to-text-spacious-small:9px;--spectrum-drop-shadow-y:1px;--spectrum-drop-shadow-blur:4px;--spectrum-text-to-visual-50:5px;--spectrum-text-to-visual-75:5px;--spectrum-text-to-visual-100:6px;--spectrum-text-to-visual-200:7px;--spectrum-text-to-visual-300:8px;--spectrum-text-to-visual-400:9px;--spectrum-text-to-control-75:9px;--spectrum-text-to-control-100:10px;--spectrum-text-to-control-200:11px;--spectrum-text-to-control-300:13px;--spectrum-component-height-50:20px;--spectrum-component-height-75:24px;--spectrum-component-height-100:32px;--spectrum-component-height-200:40px;--spectrum-component-height-300:48px;--spectrum-component-height-400:56px;--spectrum-component-height-500:64px;--spectrum-component-pill-edge-to-visual-75:11px;--spectrum-component-pill-edge-to-visual-100:14px;--spectrum-component-pill-edge-to-visual-200:18px;--spectrum-component-pill-edge-to-visual-300:20px;--spectrum-component-pill-edge-to-visual-only-75:4px;--spectrum-component-pill-edge-to-visual-only-100:6px;--spectrum-component-pill-edge-to-visual-only-200:9px;--spectrum-component-pill-edge-to-visual-only-300:11px;--spectrum-component-pill-edge-to-text-75:13px;--spectrum-component-pill-edge-to-text-100:16px;--spectrum-component-pill-edge-to-text-200:20px;--spectrum-component-pill-edge-to-text-300:23px;--spectrum-component-edge-to-visual-50:7px;--spectrum-component-edge-to-visual-75:8px;--spectrum-component-edge-to-visual-100:10px;--spectrum-component-edge-to-visual-200:13px;--spectrum-component-edge-to-visual-300:14px;--spectrum-component-edge-to-visual-only-50:3px;--spectrum-component-edge-to-visual-only-75:4px;--spectrum-component-edge-to-visual-only-100:6px;--spectrum-component-edge-to-visual-only-200:9px;--spectrum-component-edge-to-visual-only-300:11px;--spectrum-component-edge-to-text-50:8px;--spectrum-component-edge-to-text-75:10px;--spectrum-component-edge-to-text-100:12px;--spectrum-component-edge-to-text-200:15px;--spectrum-component-edge-to-text-300:17px;--spectrum-component-top-to-workflow-icon-50:3px;--spectrum-component-top-to-workflow-icon-75:4px;--spectrum-component-top-to-workflow-icon-100:6px;--spectrum-component-top-to-workflow-icon-200:9px;--spectrum-component-top-to-workflow-icon-300:11px;--spectrum-component-top-to-text-50:3px;--spectrum-component-top-to-text-75:4px;--spectrum-component-top-to-text-100:6px;--spectrum-component-top-to-text-200:9px;--spectrum-component-top-to-text-300:12px;--spectrum-component-bottom-to-text-50:3px;--spectrum-component-bottom-to-text-75:5px;--spectrum-component-bottom-to-text-100:9px;--spectrum-component-bottom-to-text-200:11px;--spectrum-component-bottom-to-text-300:14px;--spectrum-component-to-menu-small:6px;--spectrum-component-to-menu-medium:6px;--spectrum-component-to-menu-large:7px;--spectrum-component-to-menu-extra-large:8px;--spectrum-field-edge-to-disclosure-icon-75:7px;--spectrum-field-edge-to-disclosure-icon-100:11px;--spectrum-field-edge-to-disclosure-icon-200:14px;--spectrum-field-edge-to-disclosure-icon-300:17px;--spectrum-field-end-edge-to-disclosure-icon-75:7px;--spectrum-field-end-edge-to-disclosure-icon-100:11px;--spectrum-field-end-edge-to-disclosure-icon-200:14px;--spectrum-field-end-edge-to-disclosure-icon-300:17px;--spectrum-field-top-to-disclosure-icon-75:7px;--spectrum-field-top-to-disclosure-icon-100:11px;--spectrum-field-top-to-disclosure-icon-200:14px;--spectrum-field-top-to-disclosure-icon-300:17px;--spectrum-field-top-to-alert-icon-small:4px;--spectrum-field-top-to-alert-icon-medium:7px;--spectrum-field-top-to-alert-icon-large:10px;--spectrum-field-top-to-alert-icon-extra-large:13px;--spectrum-field-top-to-validation-icon-small:7px;--spectrum-field-top-to-validation-icon-medium:11px;--spectrum-field-top-to-validation-icon-large:14px;--spectrum-field-top-to-validation-icon-extra-large:17px;--spectrum-field-top-to-progress-circle-small:4px;--spectrum-field-top-to-progress-circle-medium:8px;--spectrum-field-top-to-progress-circle-large:12px;--spectrum-field-top-to-progress-circle-extra-large:16px;--spectrum-field-edge-to-alert-icon-small:9px;--spectrum-field-edge-to-alert-icon-medium:12px;--spectrum-field-edge-to-alert-icon-large:15px;--spectrum-field-edge-to-alert-icon-extra-large:18px;--spectrum-field-edge-to-validation-icon-small:9px;--spectrum-field-edge-to-validation-icon-medium:12px;--spectrum-field-edge-to-validation-icon-large:15px;--spectrum-field-edge-to-validation-icon-extra-large:18px;--spectrum-field-text-to-alert-icon-small:8px;--spectrum-field-text-to-alert-icon-medium:12px;--spectrum-field-text-to-alert-icon-large:15px;--spectrum-field-text-to-alert-icon-extra-large:18px;--spectrum-field-text-to-validation-icon-small:8px;--spectrum-field-text-to-validation-icon-medium:12px;--spectrum-field-text-to-validation-icon-large:15px;--spectrum-field-text-to-validation-icon-extra-large:18px;--spectrum-field-width:192px;--spectrum-character-count-to-field-quiet-small:-3px;--spectrum-character-count-to-field-quiet-medium:-3px;--spectrum-character-count-to-field-quiet-large:-3px;--spectrum-character-count-to-field-quiet-extra-large:-4px;--spectrum-side-label-character-count-to-field:12px;--spectrum-side-label-character-count-top-margin-small:4px;--spectrum-side-label-character-count-top-margin-medium:8px;--spectrum-side-label-character-count-top-margin-large:11px;--spectrum-side-label-character-count-top-margin-extra-large:14px;--spectrum-disclosure-indicator-top-to-disclosure-icon-small:7px;--spectrum-disclosure-indicator-top-to-disclosure-icon-medium:11px;--spectrum-disclosure-indicator-top-to-disclosure-icon-large:14px;--spectrum-disclosure-indicator-top-to-disclosure-icon-extra-large:17px;--spectrum-navigational-indicator-top-to-back-icon-small:6px;--spectrum-navigational-indicator-top-to-back-icon-medium:9px;--spectrum-navigational-indicator-top-to-back-icon-large:12px;--spectrum-navigational-indicator-top-to-back-icon-extra-large:15px;--spectrum-color-control-track-width:24px;--spectrum-font-size-50:11px;--spectrum-font-size-75:12px;--spectrum-font-size-100:14px;--spectrum-font-size-200:16px;--spectrum-font-size-300:18px;--spectrum-font-size-400:20px;--spectrum-font-size-500:22px;--spectrum-font-size-600:25px;--spectrum-font-size-700:28px;--spectrum-font-size-800:32px;--spectrum-font-size-900:36px;--spectrum-font-size-1000:40px;--spectrum-font-size-1100:45px;--spectrum-font-size-1200:50px;--spectrum-font-size-1300:60px;--scale:medium;--spectrum-alert-banner-close-button-spacing:var(--spectrum-spacing-100);--spectrum-alert-banner-edge-to-button:var(--spectrum-spacing-100);--spectrum-alert-banner-edge-to-divider:var(--spectrum-spacing-100);--spectrum-alert-banner-text-to-button-vertical:var(--spectrum-spacing-100);--spectrum-alert-dialog-description-to-buttons:var(--spectrum-spacing-700);--spectrum-alert-dialog-padding:var(--spectrum-spacing-500);--spectrum-assetcard-content-font-size:var(--spectrum-body-size-s);--spectrum-assetcard-focus-ring-border-radius:8px;--spectrum-assetcard-header-content-font-size:var(--spectrum-heading-size-xs);--spectrum-assetcard-selectionindicator-margin:12px;--spectrum-assetcard-title-font-size:var(--spectrum-heading-size-xs);--spectrum-button-bottom-to-text-small:4px;--spectrum-button-bottom-to-text-medium:8px;--spectrum-button-bottom-to-text-large:10px;--spectrum-button-bottom-to-text-extra-large:13px;--spectrum-button-top-to-text-small:5px;--spectrum-button-top-to-text-medium:7px;--spectrum-button-top-to-text-large:10px;--spectrum-button-top-to-text-extra-large:13px;--spectrum-coach-indicator-gap:6px;--spectrum-coach-indicator-ring-diameter:var(--spectrum-spacing-300);--spectrum-coach-indicator-quiet-ring-diameter:var(--spectrum-spacing-100);--spectrum-coachmark-buttongroup-display:flex;--spectrum-coachmark-buttongroup-mobile-display:none;--spectrum-coachmark-menu-display:inline-flex;--spectrum-coachmark-menu-mobile-display:none;--spectrum-colorloupe-checkerboard-fill:url(#checkerboard-primary);--spectrum-colorwheel-colorarea-container-size:144px;--spectrum-colorwheel-path:"M 95 95 m -95 0 a 95 95 0 1 0 190 0 a 95 95 0 1 0 -190 0.2 M 95 95 m -73 0 a 73 73 0 1 0 146 0 a 73 73 0 1 0 -146 0";--spectrum-colorwheel-path-borders:"M 96 96 m -96 0 a 96 96 0 1 0 192 0 a 96 96 0 1 0 -192 0.2 M 96 96 m -72 0 a 72 72 0 1 0 144 0 a 72 72 0 1 0 -144 0";--spectrum-contextual-help-content-spacing:var(--spectrum-spacing-100);--spectrum-datepicker-dash-line-height:24px;--spectrum-datepicker-datetime-width-first:36px;--spectrum-datepicker-generic-padding:var(--spectrum-spacing-200);--spectrum-datepicker-initial-width:128px;--spectrum-datepicker-input-datetime-width:var(--spectrum-spacing-400);--spectrum-datepicker-invalid-icon-to-button:8px;--spectrum-datepicker-invalid-icon-to-button-quiet:7px;--spectrum-datepicker-width-quiet-first:72px;--spectrum-datepicker-width-quiet-second:16px;--spectrum-dial-border-radius:16px;--spectrum-dial-controls-margin:8px;--spectrum-dial-handle-block-margin:16px;--spectrum-dial-handle-inline-margin:16px;--spectrum-dial-handle-position:8px;--spectrum-dial-label-container-top-to-text:4px;--spectrum-dial-label-gap-y:5px;--spectrum-dialog-confirm-border-radius:4px;--spectrum-dialog-confirm-description-text-size:14px;--spectrum-dialog-confirm-entry-animation-distance:20px;--spectrum-dialog-confirm-hero-height:128px;--spectrum-dialog-confirm-padding-grid:40px;--spectrum-dialog-confirm-title-text-size:18px;--spectrum-menu-item-checkmark-height-small:10px;--spectrum-menu-item-checkmark-height-medium:10px;--spectrum-menu-item-checkmark-height-large:12px;--spectrum-menu-item-checkmark-height-extra-large:14px;--spectrum-menu-item-checkmark-width-small:10px;--spectrum-menu-item-checkmark-width-medium:10px;--spectrum-menu-item-checkmark-width-large:12px;--spectrum-menu-item-checkmark-width-extra-large:14px;--spectrum-menu-item-selectable-edge-to-text-not-selected-small:28px;--spectrum-menu-item-selectable-edge-to-text-not-selected-medium:32px;--spectrum-menu-item-selectable-edge-to-text-not-selected-large:38px;--spectrum-menu-item-selectable-edge-to-text-not-selected-extra-large:45px;--spectrum-pagination-item-inline-spacing:5px;--spectrum-pagination-textfield-width:var(--spectrum-spacing-700);--spectrum-rating-icon-spacing:var(--spectrum-spacing-75);--spectrum-slider-ramp-track-height:16px;--spectrum-slider-tick-mark-height:10px;--spectrum-treeview-indicator-inset-block-start:5px;--spectrum-treeview-item-indentation-small:var(--spectrum-spacing-200);--spectrum-treeview-item-indentation-medium:var(--spectrum-spacing-300);--spectrum-treeview-item-indentation-large:20px;--spectrum-treeview-item-indentation-extra-large:var(--spectrum-spacing-400);--spectrum-treeview-item-min-block-size-thumbnail-offset-medium:0px;--spectrum-tooltip-animation-distance:var(--spectrum-spacing-75);--spectrum-ui-icon-medium-display:block;--spectrum-ui-icon-large-display:none;--spectrum-well-border-radius:var(--spectrum-spacing-75);--spectrum-well-margin-top:var(--spectrum-spacing-75);--spectrum-well-min-width:240px;--spectrum-well-padding:var(--spectrum-spacing-300);--spectrum-workflow-icon-size-xxl:32px;--spectrum-workflow-icon-size-xxs:12px}:root,:host{--spectrum-global-alias-appframe-border-size:2px;--swc-scale-factor:1}
`;
no.registerThemeFragment("medium-spectrum-two", "scale", Eu);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G = (e) => e ?? Z;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Te = { ATTRIBUTE: 1, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4 }, Tu = (e) => (...t) => ({ _$litDirective$: e, values: t });
let Du = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, r, o) {
    this._$Ct = t, this._$AM = r, this._$Ci = o;
  }
  _$AS(t, r) {
    return this.update(t, r);
  }
  update(t, r) {
    return this.render(...r);
  }
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Bu = (e) => e.strings === void 0, Iu = {}, qu = (e, t = Iu) => e._$AH = t;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Pu = Tu(class extends Du {
  constructor(e) {
    if (super(e), e.type !== Te.PROPERTY && e.type !== Te.ATTRIBUTE && e.type !== Te.BOOLEAN_ATTRIBUTE) throw Error("The `live` directive is not allowed on child or event bindings");
    if (!Bu(e)) throw Error("`live` bindings can only contain a single expression");
  }
  render(e) {
    return e;
  }
  update(e, [t]) {
    if (t === Rt || t === Z) return t;
    const r = e.element, o = e.name;
    if (e.type === Te.PROPERTY) {
      if (t === r[o]) return Rt;
    } else if (e.type === Te.BOOLEAN_ATTRIBUTE) {
      if (!!t === r.hasAttribute(o)) return Rt;
    } else if (e.type === Te.ATTRIBUTE && r.getAttribute(o) === t + "") return Rt;
    return qu(e), t;
  }
});
var Mu = Object.defineProperty, De = (e, t, r, o) => {
  for (var s = void 0, a = e.length - 1, c; a >= 0; a--) (c = e[a]) && (s = c(t, r, s) || s);
  return s && Mu(t, r, s), s;
};
function Lu(e) {
  class t extends e {
    renderAnchor({ id: o, className: s, ariaHidden: a, labelledby: c, tabindex: i, anchorContent: n = C`<slot></slot>` }) {
      return C`<a
                    id=${o}
                    class=${G(s)}
                    href=${G(this.href)}
                    download=${G(this.download)}
                    target=${G(this.target)}
                    aria-label=${G(this.label)}
                    aria-labelledby=${G(c)}
                    aria-hidden=${G(a ? "true" : void 0)}
                    tabindex=${G(i)}
                    referrerpolicy=${G(this.referrerpolicy)}
                    rel=${G(this.rel)}
                >${n}</a>`;
    }
  }
  return De([z()], t.prototype, "download"), De([z()], t.prototype, "label"), De([z()], t.prototype, "href"), De([z()], t.prototype, "target"), De([z()], t.prototype, "referrerpolicy"), De([z()], t.prototype, "rel"), t;
}
let Wo = !0;
try {
  document.body.querySelector(":focus-visible");
} catch {
  Wo = !1, import("./focus-visible-D25pRc1b.js").then((t) => t.f);
}
const Ou = (e) => {
  var t, r;
  const o = (c) => {
    if (c.shadowRoot == null || c.hasAttribute("data-js-focus-visible")) return () => {
    };
    if (self.applyFocusVisiblePolyfill) self.applyFocusVisiblePolyfill(c.shadowRoot), c.manageAutoFocus && c.manageAutoFocus();
    else {
      const i = () => {
        self.applyFocusVisiblePolyfill && c.shadowRoot && self.applyFocusVisiblePolyfill(c.shadowRoot), c.manageAutoFocus && c.manageAutoFocus();
      };
      return self.addEventListener("focus-visible-polyfill-ready", i, { once: !0 }), () => {
        self.removeEventListener("focus-visible-polyfill-ready", i);
      };
    }
    return () => {
    };
  }, s = Symbol("endPolyfillCoordination");
  class a extends (r = e, t = s, r) {
    constructor() {
      super(...arguments), this[t] = null;
    }
    connectedCallback() {
      super.connectedCallback && super.connectedCallback(), Wo || requestAnimationFrame(() => {
        this[s] == null && (this[s] = o(this));
      });
    }
    disconnectedCallback() {
      super.disconnectedCallback && super.disconnectedCallback(), Wo || requestAnimationFrame(() => {
        this[s] != null && (this[s](), this[s] = null);
      });
    }
  }
  return a;
};
var Ru = Object.defineProperty, Uu = Object.getOwnPropertyDescriptor, Ao = (e, t, r, o) => {
  for (var s = o > 1 ? void 0 : o ? Uu(t, r) : t, a = e.length - 1, c; a >= 0; a--) (c = e[a]) && (s = (o ? c(t, r, s) : c(s)) || s);
  return o && s && Ru(t, r, s), s;
};
function ya() {
  return new Promise((e) => requestAnimationFrame(() => e()));
}
class pr extends Ou(Vt) {
  constructor() {
    super(...arguments), this.disabled = !1, this.autofocus = !1, this._tabIndex = 0, this.manipulatingTabindex = !1, this.autofocusReady = Promise.resolve();
  }
  get tabIndex() {
    if (this.focusElement === this) {
      const r = this.hasAttribute("tabindex") ? Number(this.getAttribute("tabindex")) : NaN;
      return isNaN(r) ? -1 : r;
    }
    const t = parseFloat(this.hasAttribute("tabindex") && this.getAttribute("tabindex") || "0");
    return this.disabled || t < 0 ? -1 : this.focusElement ? this._tabIndex : t;
  }
  set tabIndex(t) {
    var r;
    if (this.manipulatingTabindex) {
      this.manipulatingTabindex = !1;
      return;
    }
    if (this.focusElement === this) {
      if (this.disabled) this._tabIndex = t;
      else if (t !== this._tabIndex) {
        this._tabIndex = t;
        const o = "" + t;
        this.manipulatingTabindex = !0, this.setAttribute("tabindex", o);
      }
      return;
    }
    if (t === -1 ? this.addEventListener("pointerdown", this.onPointerdownManagementOfTabIndex) : (this.manipulatingTabindex = !0, this.removeEventListener("pointerdown", this.onPointerdownManagementOfTabIndex)), t === -1 || this.disabled) {
      if (this.manipulatingTabindex = !0, this.setAttribute("tabindex", "-1"), this.removeAttribute("focusable"), this.selfManageFocusElement) return;
      t !== -1 ? (this._tabIndex = t, this.manageFocusElementTabindex(t)) : (r = this.focusElement) == null || r.removeAttribute("tabindex");
      return;
    }
    this.setAttribute("focusable", ""), this.hasAttribute("tabindex") ? this.removeAttribute("tabindex") : this.manipulatingTabindex = !1, this._tabIndex = t, this.manageFocusElementTabindex(t);
  }
  onPointerdownManagementOfTabIndex() {
    this.tabIndex === -1 && setTimeout(() => {
      this.tabIndex = 0, this.focus({ preventScroll: !0 }), this.tabIndex = -1;
    });
  }
  async manageFocusElementTabindex(t) {
    this.focusElement || await this.updateComplete, t === null ? this.focusElement.removeAttribute("tabindex") : this.focusElement !== this && (this.focusElement.tabIndex = t);
  }
  get focusElement() {
    throw new Error("Must implement focusElement getter!");
  }
  get selfManageFocusElement() {
    return !1;
  }
  focus(t) {
    this.disabled || !this.focusElement || (this.focusElement !== this ? this.focusElement.focus(t) : HTMLElement.prototype.focus.apply(this, [t]));
  }
  blur() {
    const t = this.focusElement || this;
    t !== this ? t.blur() : HTMLElement.prototype.blur.apply(this);
  }
  click() {
    if (this.disabled) return;
    const t = this.focusElement || this;
    t !== this ? t.click() : HTMLElement.prototype.click.apply(this);
  }
  manageAutoFocus() {
    this.autofocus && (this.dispatchEvent(new KeyboardEvent("keydown", { code: "Tab" })), this.focusElement.focus());
  }
  firstUpdated(t) {
    super.firstUpdated(t), (!this.hasAttribute("tabindex") || this.getAttribute("tabindex") !== "-1") && this.setAttribute("focusable", "");
  }
  update(t) {
    t.has("disabled") && this.handleDisabledChanged(this.disabled, t.get("disabled")), super.update(t);
  }
  updated(t) {
    super.updated(t), t.has("disabled") && this.disabled && this.blur();
  }
  async handleDisabledChanged(t, r) {
    const o = () => this.focusElement !== this && typeof this.focusElement.disabled < "u";
    t ? (this.manipulatingTabindex = !0, this.setAttribute("tabindex", "-1"), await this.updateComplete, o() ? this.focusElement.disabled = !0 : this.setAttribute("aria-disabled", "true")) : r && (this.manipulatingTabindex = !0, this.focusElement === this ? this.setAttribute("tabindex", "" + this._tabIndex) : this.removeAttribute("tabindex"), await this.updateComplete, o() ? this.focusElement.disabled = !1 : this.removeAttribute("aria-disabled"));
  }
  async getUpdateComplete() {
    const t = await super.getUpdateComplete();
    return await this.autofocusReady, t;
  }
  connectedCallback() {
    super.connectedCallback(), this.autofocus && (this.autofocusReady = new Promise(async (t) => {
      await ya(), await ya(), t();
    }), this.updateComplete.then(() => {
      this.manageAutoFocus();
    }));
  }
}
Ao([z({ type: Boolean, reflect: !0 })], pr.prototype, "disabled", 2), Ao([z({ type: Boolean })], pr.prototype, "autofocus", 2), Ao([z({ type: Number })], pr.prototype, "tabIndex", 1);
let Nu = class {
  constructor(t, { target: r, config: o, callback: s, skipInitial: a }) {
    this.t = /* @__PURE__ */ new Set(), this.o = !1, this.i = !1, this.h = t, r !== null && this.t.add(r ?? t), this.l = o, this.o = a ?? this.o, this.callback = s, window.MutationObserver ? (this.u = new MutationObserver(((c) => {
      this.handleChanges(c), this.h.requestUpdate();
    })), t.addController(this)) : console.warn("MutationController error: browser does not support MutationObserver.");
  }
  handleChanges(t) {
    var r;
    this.value = (r = this.callback) == null ? void 0 : r.call(this, t, this.u);
  }
  hostConnected() {
    for (const t of this.t) this.observe(t);
  }
  hostDisconnected() {
    this.disconnect();
  }
  async hostUpdated() {
    const t = this.u.takeRecords();
    (t.length || !this.o && this.i) && this.handleChanges(t), this.i = !1;
  }
  observe(t) {
    this.t.add(t), this.u.observe(t, this.l), this.i = !0, this.h.requestUpdate();
  }
  disconnect() {
    this.u.disconnect();
  }
};
var Fu = Object.defineProperty, ka = (e, t, r, o) => {
  for (var s = void 0, a = e.length - 1, c; a >= 0; a--)
    (c = e[a]) && (s = c(t, r, s) || s);
  return s && Fu(t, r, s), s;
};
const So = Symbol("assignedNodes");
function Vu(e, t, r = []) {
  var o, s;
  const a = (i) => (n) => i.matches(n);
  class c extends (s = e, o = So, s) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...n) {
      super(...n), this.slotHasContent = !1, new Nu(this, {
        config: {
          characterData: !0,
          subtree: !0
        },
        callback: (p) => {
          for (const u of p)
            if (u.type === "characterData") {
              this.manageTextObservedSlot();
              return;
            }
        }
      });
    }
    /**
     * @internal
     */
    manageTextObservedSlot() {
      if (!this[So])
        return;
      const n = [...this[So]].filter(
        (p) => {
          const u = p;
          return u.tagName ? !r.some(a(u)) : u.textContent ? u.textContent.trim() : !1;
        }
      );
      this.slotHasContent = n.length > 0;
    }
    update(n) {
      if (!this.hasUpdated) {
        const { childNodes: p } = this, u = [...p].filter((d) => {
          const b = d;
          return b.tagName ? r.some(
            a(b)
          ) ? !1 : (
            // This pass happens at element upgrade and before slot rendering.
            // Confirm it would exisit in a targeted slot if there was one supplied.
            !b.hasAttribute("slot")
          ) : b.textContent ? b.textContent.trim() : !1;
        });
        this.slotHasContent = u.length > 0;
      }
      super.update(n);
    }
    firstUpdated(n) {
      super.firstUpdated(n), this.updateComplete.then(() => {
        this.manageTextObservedSlot();
      });
    }
  }
  return ka([
    z({ type: Boolean, attribute: !1 })
  ], c.prototype, "slotHasContent"), ka([
    Hu({
      slot: t,
      flatten: !0
    })
  ], c.prototype, o), c;
}
const Ku = st`
    :host{vertical-align:top;--spectrum-progress-circle-size:var(--spectrum-workflow-icon-size-100);--spectrum-icon-size:var(--spectrum-workflow-icon-size-100);display:inline-flex}:host([dir]){-webkit-appearance:none}:host([disabled]){pointer-events:none;cursor:auto}#button{position:absolute;inset:0}::slotted(sp-overlay),::slotted(sp-tooltip){position:absolute}:host:after,::slotted(*){pointer-events:none}slot[name=icon]::slotted(svg),slot[name=icon]::slotted(img){fill:currentColor;stroke:currentColor;block-size:var(--spectrum-icon-size,var(--spectrum-workflow-icon-size-100));inline-size:var(--spectrum-icon-size,var(--spectrum-workflow-icon-size-100))}[icon-only]+#label{display:contents}:host([size=xs]){--spectrum-progress-circle-size:var(--spectrum-workflow-icon-size-50);--spectrum-icon-size:var(--spectrum-workflow-icon-size-50)}:host([size=s]){--spectrum-progress-circle-size:var(--spectrum-workflow-icon-size-75);--spectrum-icon-size:var(--spectrum-workflow-icon-size-75)}:host([size=l]){--spectrum-progress-circle-size:var(--spectrum-workflow-icon-size-200);--spectrum-icon-size:var(--spectrum-workflow-icon-size-200)}:host([size=xl]){--spectrum-progress-circle-size:var(--spectrum-workflow-icon-size-300);--spectrum-icon-size:var(--spectrum-workflow-icon-size-300)}:host([size=xxl]){--spectrum-progress-circle-size:var(--spectrum-workflow-icon-size-400);--spectrum-icon-size:var(--spectrum-workflow-icon-size-400)}
`;
var Wu = Object.defineProperty, Eo = (e, t, r, o) => {
  for (var s = void 0, a = e.length - 1, c; a >= 0; a--) (c = e[a]) && (s = c(t, r, s) || s);
  return s && Wu(t, r, s), s;
};
class dr extends Vu(Lu(pr), "", ["sp-overlay,sp-tooltip"]) {
  constructor() {
    super(), this.active = !1, this.type = "button", this.proxyFocus = this.proxyFocus.bind(this), this.addEventListener("click", this.handleClickCapture, { capture: !0 });
  }
  static get styles() {
    return [Ku];
  }
  get focusElement() {
    return this;
  }
  get hasLabel() {
    return this.slotHasContent;
  }
  get buttonContent() {
    return [C`
                <slot name="icon" ?icon-only=${!this.hasLabel}></slot>
            `, C`
                <span id="label">
                    <slot @slotchange=${this.manageTextObservedSlot}></slot>
                </span>
            `];
  }
  handleClickCapture(t) {
    if (this.disabled) return t.preventDefault(), t.stopImmediatePropagation(), !1;
    this.shouldProxyClick(t);
  }
  proxyFocus() {
    this.focus();
  }
  shouldProxyClick(t) {
    let r = !1;
    if (t && (t.metaKey || t.ctrlKey || t.shiftKey || t.altKey)) return !1;
    if (this.anchorElement) this.anchorElement.click(), r = !0;
    else if (this.type !== "button") {
      const o = document.createElement("button");
      o.type = this.type, this.insertAdjacentElement("afterend", o), o.click(), o.remove(), r = !0;
    }
    return r;
  }
  renderAnchor() {
    return C`
            ${this.buttonContent}
            ${super.renderAnchor({ id: "button", ariaHidden: !0, className: "button anchor", tabindex: -1 })}
        `;
  }
  renderButton() {
    return C`
            ${this.buttonContent}
        `;
  }
  render() {
    return this.href && this.href.length > 0 ? this.renderAnchor() : this.renderButton();
  }
  handleKeydown(t) {
    const { code: r } = t;
    switch (r) {
      case "Space":
        t.preventDefault(), typeof this.href > "u" && (this.addEventListener("keyup", this.handleKeyup), this.active = !0);
        break;
    }
  }
  handleKeypress(t) {
    const { code: r } = t;
    switch (r) {
      case "Enter":
      case "NumpadEnter":
        this.click();
        break;
    }
  }
  handleKeyup(t) {
    const { code: r } = t;
    switch (r) {
      case "Space":
        this.removeEventListener("keyup", this.handleKeyup), this.active = !1, this.click();
        break;
    }
  }
  manageAnchor() {
    this.href && this.href.length > 0 ? (!this.hasAttribute("role") || this.getAttribute("role") === "button") && this.setAttribute("role", "link") : (!this.hasAttribute("role") || this.getAttribute("role") === "link") && this.setAttribute("role", "button");
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.hasAttribute("tabindex") || this.setAttribute("tabindex", "0"), this.manageAnchor(), this.addEventListener("keydown", this.handleKeydown), this.addEventListener("keypress", this.handleKeypress);
  }
  updated(t) {
    super.updated(t), t.has("href") && this.manageAnchor(), t.has("label") && (this.label ? this.setAttribute("aria-label", this.label) : this.removeAttribute("aria-label")), this.anchorElement && (this.anchorElement.tabIndex = -1, this.anchorElement.hasAttribute("aria-hidden") || this.anchorElement.setAttribute("aria-hidden", "true"), this.anchorElement.addEventListener("focus", this.proxyFocus));
  }
}
Eo([z({ type: Boolean, reflect: !0 })], dr.prototype, "active"), Eo([z({ type: String })], dr.prototype, "type"), Eo([Hr(".anchor")], dr.prototype, "anchorElement");
const Gu = st`
    :host{cursor:pointer;-webkit-user-select:none;user-select:none;box-sizing:border-box;font-family:var(--mod-button-font-family,var(--mod-sans-font-family-stack,var(--spectrum-sans-font-family-stack)));-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;line-height:var(--mod-button-line-height,var(--mod-line-height-100,var(--spectrum-line-height-100)));text-transform:none;vertical-align:top;-webkit-appearance:button;transition:background var(--mod-button-animation-duration,var(--mod-animation-duration-100,var(--spectrum-animation-duration-100)))ease-out,border-color var(--mod-button-animation-duration,var(--mod-animation-duration-100,var(--spectrum-animation-duration-100)))ease-out,color var(--mod-button-animation-duration,var(--mod-animation-duration-100,var(--spectrum-animation-duration-100)))ease-out,box-shadow var(--mod-button-animation-duration,var(--mod-animation-duration-100,var(--spectrum-animation-duration-100)))ease-out;justify-content:center;align-items:center;margin:0;-webkit-text-decoration:none;text-decoration:none;display:inline-flex;overflow:visible}:host(:focus){outline:none}:host .is-disabled,:host([disabled]){cursor:default}:host:after{margin:calc(var(--mod-button-focus-indicator-gap,var(--spectrum-focus-indicator-gap))*-1);transition:opacity var(--mod-button-animation-duration,var(--mod-button-animation-duration,var(--spectrum-animation-duration-100)))ease-out,margin var(--mod-button-animation-duration,var(--mod-button-animation-duration,var(--spectrum-animation-duration-100)))ease-out;display:block;inset-block:0;inset-inline:0}:host(:focus-visible):after{margin:calc(var(--mod-focus-indicator-gap,var(--spectrum-focus-indicator-gap))*-2)}#label{text-align:center;place-self:center}#label[hidden]{display:none}:host{--spectrum-button-sized-height:var(--spectrum-component-height-100);--spectrum-button-sized-font-size:var(--spectrum-font-size-100);--spectrum-button-sized-edge-to-visual:calc(var(--spectrum-component-pill-edge-to-visual-100) - var(--spectrum-button-border-width));--spectrum-button-sized-edge-to-visual-only:var(--spectrum-component-pill-edge-to-visual-only-100);--spectrum-button-sized-edge-to-text:calc(var(--spectrum-component-pill-edge-to-text-100) - var(--spectrum-button-border-width));--spectrum-button-sized-padding-label-to-icon:var(--spectrum-text-to-visual-100);--spectrum-button-sized-top-to-text:var(--spectrum-button-top-to-text-medium);--spectrum-button-sized-bottom-to-text:var(--spectrum-button-bottom-to-text-medium);--spectrum-button-sized-top-to-icon:var(--spectrum-component-top-to-workflow-icon-100);--spectrum-button-intended-icon-size:var(--spectrum-workflow-icon-size-100)}:host([size=s]){--spectrum-button-sized-height:var(--spectrum-component-height-75);--spectrum-button-sized-font-size:var(--spectrum-font-size-75);--spectrum-button-sized-edge-to-visual:calc(var(--spectrum-component-pill-edge-to-visual-75) - var(--spectrum-button-border-width));--spectrum-button-sized-edge-to-visual-only:var(--spectrum-component-pill-edge-to-visual-only-75);--spectrum-button-sized-edge-to-text:calc(var(--spectrum-component-pill-edge-to-text-75) - var(--spectrum-button-border-width));--spectrum-button-sized-padding-label-to-icon:var(--spectrum-text-to-visual-75);--spectrum-button-sized-top-to-text:var(--spectrum-button-top-to-text-small);--spectrum-button-sized-bottom-to-text:var(--spectrum-button-bottom-to-text-small);--spectrum-button-sized-top-to-icon:var(--spectrum-component-top-to-workflow-icon-75);--spectrum-button-intended-icon-size:var(--spectrum-workflow-icon-size-75)}:host([size=l]){--spectrum-button-sized-height:var(--spectrum-component-height-200);--spectrum-button-sized-font-size:var(--spectrum-font-size-200);--spectrum-button-sized-edge-to-visual:calc(var(--spectrum-component-pill-edge-to-visual-200) - var(--spectrum-button-border-width));--spectrum-button-sized-edge-to-visual-only:var(--spectrum-component-pill-edge-to-visual-only-200);--spectrum-button-sized-edge-to-text:calc(var(--spectrum-component-pill-edge-to-text-200) - var(--spectrum-button-border-width));--spectrum-button-sized-padding-label-to-icon:var(--spectrum-text-to-visual-200);--spectrum-button-sized-top-to-text:var(--spectrum-button-top-to-text-large);--spectrum-button-sized-bottom-to-text:var(--spectrum-button-bottom-to-text-large);--spectrum-button-sized-top-to-icon:var(--spectrum-component-top-to-workflow-icon-200);--spectrum-button-intended-icon-size:var(--spectrum-workflow-icon-size-200)}:host([size=xl]){--spectrum-button-sized-height:var(--spectrum-component-height-300);--spectrum-button-sized-font-size:var(--spectrum-font-size-300);--spectrum-button-sized-edge-to-visual:calc(var(--spectrum-component-pill-edge-to-visual-300) - var(--spectrum-button-border-width));--spectrum-button-sized-edge-to-visual-only:var(--spectrum-component-pill-edge-to-visual-only-300);--spectrum-button-sized-edge-to-text:calc(var(--spectrum-component-pill-edge-to-text-300) - var(--spectrum-button-border-width));--spectrum-button-sized-padding-label-to-icon:var(--spectrum-text-to-visual-300);--spectrum-button-sized-top-to-text:var(--spectrum-button-top-to-text-extra-large);--spectrum-button-sized-bottom-to-text:var(--spectrum-button-bottom-to-text-extra-large);--spectrum-button-sized-top-to-icon:var(--spectrum-component-top-to-workflow-icon-300);--spectrum-button-intended-icon-size:var(--spectrum-workflow-icon-size-300)}:host{--spectrum-button-content-color-default:var(--spectrum-neutral-content-color-default);--spectrum-button-content-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-button-content-color-down:var(--spectrum-neutral-content-color-down);--spectrum-button-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-button-content-color-disabled:var(--spectrum-disabled-content-color)}:host([selected]){--spectrum-button-border-color-default:transparent;--spectrum-button-border-color-hover:transparent;--spectrum-button-border-color-down:transparent;--spectrum-button-border-color-focus:transparent;--spectrum-button-content-color-default:var(--spectrum-white);--spectrum-button-content-color-hover:var(--spectrum-white);--spectrum-button-content-color-down:var(--spectrum-white);--spectrum-button-content-color-focus:var(--spectrum-white);--spectrum-button-background-color-disabled:var(--spectrum-disabled-background-color);--spectrum-button-border-color-disabled:transparent}:host([selected][emphasized]),:host([variant=accent]){--spectrum-button-background-color-default:var(--spectrum-accent-background-color-default);--spectrum-button-background-color-hover:var(--spectrum-accent-background-color-hover);--spectrum-button-background-color-down:var(--spectrum-accent-background-color-down);--spectrum-button-background-color-focus:var(--spectrum-accent-background-color-key-focus)}:host([variant=accent]){--spectrum-button-background-color-disabled:var(--spectrum-disabled-background-color);--spectrum-button-border-color-default:transparent;--spectrum-button-border-color-hover:transparent;--spectrum-button-border-color-down:transparent;--spectrum-button-border-color-focus:transparent;--spectrum-button-border-color-disabled:transparent;--spectrum-button-content-color-default:var(--spectrum-white);--spectrum-button-content-color-hover:var(--spectrum-white);--spectrum-button-content-color-down:var(--spectrum-white);--spectrum-button-content-color-focus:var(--spectrum-white)}:host([variant=accent][treatment=outline]){--spectrum-button-background-color-hover:var(--spectrum-accent-color-200);--spectrum-button-background-color-down:var(--spectrum-accent-color-300);--spectrum-button-background-color-focus:var(--spectrum-accent-color-200);--spectrum-button-border-color-default:var(--spectrum-accent-color-900);--spectrum-button-border-color-hover:var(--spectrum-accent-color-1000);--spectrum-button-border-color-down:var(--spectrum-accent-color-1100);--spectrum-button-border-color-focus:var(--spectrum-accent-color-1000);--spectrum-button-border-color-disabled:var(--spectrum-disabled-border-color);--spectrum-button-content-color-default:var(--spectrum-accent-content-color-default);--spectrum-button-content-color-hover:var(--spectrum-accent-content-color-hover);--spectrum-button-content-color-down:var(--spectrum-accent-content-color-down);--spectrum-button-content-color-focus:var(--spectrum-accent-content-color-key-focus);--spectrum-button-content-color-disabled:var(--spectrum-disabled-content-color)}:host([variant=negative]){--spectrum-button-background-color-default:var(--spectrum-negative-background-color-default);--spectrum-button-background-color-hover:var(--spectrum-negative-background-color-hover);--spectrum-button-background-color-down:var(--spectrum-negative-background-color-down);--spectrum-button-background-color-focus:var(--spectrum-negative-background-color-key-focus);--spectrum-button-border-color-default:transparent;--spectrum-button-border-color-hover:transparent;--spectrum-button-border-color-down:transparent;--spectrum-button-border-color-focus:transparent;--spectrum-button-content-color-default:var(--spectrum-white);--spectrum-button-content-color-hover:var(--spectrum-white);--spectrum-button-content-color-down:var(--spectrum-white);--spectrum-button-content-color-focus:var(--spectrum-white);--spectrum-button-background-color-disabled:var(--spectrum-disabled-background-color);--spectrum-button-border-color-disabled:transparent;--spectrum-button-content-color-disabled:var(--spectrum-disabled-content-color)}:host([variant=negative][treatment=outline]){--spectrum-button-background-color-hover:var(--spectrum-negative-color-200);--spectrum-button-background-color-down:var(--spectrum-negative-color-300);--spectrum-button-background-color-focus:var(--spectrum-negative-color-200);--spectrum-button-border-color-default:var(--spectrum-negative-color-900);--spectrum-button-border-color-hover:var(--spectrum-negative-color-1000);--spectrum-button-border-color-down:var(--spectrum-negative-color-1100);--spectrum-button-border-color-focus:var(--spectrum-negative-color-1000);--spectrum-button-border-color-disabled:var(--spectrum-disabled-border-color);--spectrum-button-content-color-default:var(--spectrum-negative-content-color-default);--spectrum-button-content-color-hover:var(--spectrum-negative-content-color-hover);--spectrum-button-content-color-down:var(--spectrum-negative-content-color-down);--spectrum-button-content-color-focus:var(--spectrum-negative-content-color-key-focus);--spectrum-button-content-color-disabled:var(--spectrum-disabled-content-color)}:host([variant=primary]){--spectrum-button-background-color-default:var(--spectrum-neutral-background-color-default);--spectrum-button-background-color-hover:var(--spectrum-neutral-background-color-hover);--spectrum-button-background-color-down:var(--spectrum-neutral-background-color-down);--spectrum-button-background-color-focus:var(--spectrum-neutral-background-color-key-focus);--spectrum-button-background-color-disabled:var(--spectrum-disabled-background-color);--spectrum-button-border-color-default:transparent;--spectrum-button-border-color-hover:transparent;--spectrum-button-border-color-down:transparent;--spectrum-button-border-color-focus:transparent;--spectrum-button-border-color-disabled:transparent}:host([variant=primary][treatment=outline]){--spectrum-button-border-color-default:var(--spectrum-gray-800);--spectrum-button-border-color-hover:var(--spectrum-gray-900);--spectrum-button-border-color-down:var(--spectrum-gray-900);--spectrum-button-border-color-focus:var(--spectrum-gray-900);--spectrum-button-content-color-default:var(--spectrum-neutral-content-color-default);--spectrum-button-content-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-button-content-color-down:var(--spectrum-neutral-content-color-down);--spectrum-button-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-button-border-color-disabled:var(--spectrum-disabled-border-color);--spectrum-button-content-color-disabled:var(--spectrum-disabled-content-color)}:host([variant=secondary]){--spectrum-button-background-color-disabled:var(--spectrum-disabled-background-color);--spectrum-button-border-color-default:transparent;--spectrum-button-border-color-hover:transparent;--spectrum-button-border-color-down:transparent;--spectrum-button-border-color-focus:transparent;--spectrum-button-border-color-disabled:transparent;--spectrum-button-content-color-default:var(--spectrum-neutral-content-color-default);--spectrum-button-content-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-button-content-color-down:var(--spectrum-neutral-content-color-down);--spectrum-button-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-button-content-color-disabled:var(--spectrum-disabled-content-color)}:host([variant=secondary][treatment=outline]){--spectrum-button-background-color-down:var(--spectrum-gray-400);--spectrum-button-border-color-default:var(--spectrum-gray-300);--spectrum-button-border-color-hover:var(--spectrum-gray-400);--spectrum-button-border-color-focus:var(--spectrum-gray-400);--spectrum-button-border-color-disabled:var(--spectrum-disabled-border-color);--spectrum-button-content-color-default:var(--spectrum-neutral-content-color-default);--spectrum-button-content-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-button-content-color-down:var(--spectrum-neutral-content-color-down);--spectrum-button-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-button-content-color-disabled:var(--spectrum-disabled-content-color)}:host([quiet]){--spectrum-button-background-color-hover:var(--spectrum-gray-200);--spectrum-button-background-color-down:var(--spectrum-gray-300);--spectrum-button-background-color-focus:var(--spectrum-gray-200)}:host([quiet]),:host([static-color=black]),:host([static-color=white]){--spectrum-button-border-color-default:transparent;--spectrum-button-border-color-hover:transparent;--spectrum-button-border-color-down:transparent;--spectrum-button-border-color-focus:transparent;--spectrum-button-border-color-disabled:transparent}:host([static-color=black][selected]),:host([static-color=white][selected]){--mod-button-content-color-default:var(--mod-button-static-content-color);--mod-button-content-color-hover:var(--mod-button-static-content-color);--mod-button-content-color-down:var(--mod-button-static-content-color);--mod-button-content-color-focus:var(--mod-button-static-content-color);--spectrum-button-border-color-disabled:transparent}:host([static-color=black][variant=secondary]),:host([static-color=white][variant=secondary]){--spectrum-button-border-color-default:transparent;--spectrum-button-border-color-hover:transparent;--spectrum-button-border-color-down:transparent;--spectrum-button-border-color-focus:transparent;--spectrum-button-border-color-disabled:transparent}:host([static-color=black][variant=secondary][treatment=outline]),:host([static-color=white][variant=secondary][treatment=outline]){--spectrum-button-background-color-disabled:transparent}:host([static-color=black][quiet]),:host([static-color=white][quiet]){--spectrum-button-border-color-default:transparent;--spectrum-button-border-color-hover:transparent;--spectrum-button-border-color-down:transparent;--spectrum-button-border-color-focus:transparent;--spectrum-button-border-color-disabled:transparent}:host([static-color=white]){--spectrum-button-content-color-disabled:var(--spectrum-disabled-static-white-content-color);--spectrum-button-background-color-disabled:var(--spectrum-disabled-static-white-background-color);--spectrum-button-focus-indicator-color:var(--spectrum-static-white-focus-indicator-color)}:host([static-color=white][treatment=outline]){--spectrum-button-content-color-disabled:var(--spectrum-disabled-static-white-content-color);--spectrum-button-border-color-disabled:var(--spectrum-disabled-static-white-border-color)}:host([static-color=white][variant=secondary]){--spectrum-button-background-color-disabled:var(--spectrum-disabled-static-white-background-color)}:host([static-color=black]){--spectrum-button-content-color-disabled:var(--spectrum-disabled-static-black-content-color);--spectrum-button-background-color-disabled:var(--spectrum-disabled-static-black-background-color);--spectrum-button-focus-indicator-color:var(--mod-static-black-focus-indicator-color,var(--spectrum-static-black-focus-indicator-color))}:host([static-color=black][treatment=outline]){--spectrum-button-content-color-disabled:var(--spectrum-disabled-static-black-content-color);--spectrum-button-border-color-disabled:var(--spectrum-disabled-static-black-border-color)}:host([static-color=black][variant=secondary]){--spectrum-button-background-color-disabled:var(--spectrum-disabled-static-black-background-color)}:host([treatment=outline]),:host([quiet]){--spectrum-button-background-color-default:transparent;--spectrum-button-background-color-disabled:transparent}:host{--spectrum-button-height:var(--mod-button-height,var(--spectrum-button-sized-height));--spectrum-button-min-width:var(--mod-button-min-width,calc(var(--spectrum-button-height)*var(--spectrum-button-minimum-width-multiplier)));--spectrum-button-line-height:var(--mod-button-line-height,1.2);--spectrum-button-font-size:var(--mod-button-font-size,var(--spectrum-button-sized-font-size));--spectrum-button-padding-label-to-icon:var(--mod-button-padding-label-to-icon,var(--spectrum-button-sized-padding-label-to-icon));--spectrum-button-edge-to-visual:var(--mod-button-edge-to-visual,var(--spectrum-button-sized-edge-to-visual));--spectrum-button-edge-to-visual-only:var(--mod-button-edge-to-visual-only,var(--spectrum-button-sized-edge-to-visual-only));--spectrum-button-edge-to-text:var(--mod-button-edge-to-text,var(--spectrum-button-sized-edge-to-text));--spectrum-button-top-to-text:var(--mod-button-top-to-text,var(--spectrum-button-sized-top-to-text));--spectrum-button-bottom-to-text:var(--mod-button-bottom-to-text,var(--spectrum-button-sized-bottom-to-text));--spectrum-button-top-to-icon:var(--mod-button-top-to-icon,var(--spectrum-button-sized-top-to-icon));--spectrum-button-focus-ring-thickness:var(--mod-button-focus-ring-thickness,var(--spectrum-focus-indicator-thickness));--spectrum-button-focus-indicator-color:var(--mod-button-focus-ring-color,var(--spectrum-focus-indicator-color));--spectrum-button-animation-duration:var(--mod-button-animation-duration,var(--spectrum-animation-duration-100));--spectrum-button-border-width:var(--mod-button-border-width,var(--spectrum-border-width-200));--spectrum-button-focus-ring-gap:var(--mod-focus-indicator-gap,var(--mod-button-focus-ring-gap,var(--spectrum-focus-indicator-gap)));--spectrum-button-border-radius:var(--mod-button-border-radius,calc(var(--spectrum-button-height)/2));--mod-progress-circle-position:absolute;border-radius:var(--spectrum-button-border-radius);border-width:var(--spectrum-button-border-width);font-size:var(--spectrum-button-font-size);font-weight:var(--mod-bold-font-weight,var(--spectrum-bold-font-weight));gap:var(--spectrum-button-padding-label-to-icon);max-inline-size:var(--mod-button-max-inline-size,none);min-inline-size:var(--spectrum-button-min-width);min-block-size:var(--spectrum-button-height);padding-block:0;padding-inline:var(--spectrum-button-edge-to-text);margin-block:var(--mod-button-margin-block);background-color:var(--highcontrast-button-background-color-default,var(--mod-button-background-color-default,var(--spectrum-button-background-color-default)));border-style:solid;border-color:var(--highcontrast-button-border-color-default,var(--mod-button-border-color-default,var(--spectrum-button-border-color-default)));color:var(--highcontrast-button-content-color-default,var(--mod-button-content-color-default,var(--spectrum-button-content-color-default,inherit)));transition:border var(--spectrum-button-animation-duration,.13s)linear,color var(--spectrum-button-animation-duration,.13s)linear,background-color var(--spectrum-button-animation-duration,.13s)linear;margin-inline-start:var(--mod-button-margin-left);margin-inline-end:var(--mod-button-margin-right);position:relative}:host([treatment=outline]){background-color:initial}:host:after{margin:var(--mod-button-focus-ring-border-radius,calc((var(--spectrum-button-focus-ring-gap) + var(--spectrum-button-border-width))*-1));transition:box-shadow var(--spectrum-button-animation-duration)ease-in-out;pointer-events:none;content:"";border-radius:calc(var(--spectrum-button-border-radius) + var(--spectrum-focus-indicator-gap));position:absolute;inset:0}:host(:focus-visible){background-color:var(--highcontrast-button-background-color-focus,var(--mod-button-background-color-focus,var(--spectrum-button-background-color-focus)));border-color:var(--highcontrast-button-border-color-focus,var(--mod-button-border-color-focus,var(--spectrum-button-border-color-focus)));color:var(--highcontrast-button-content-color-focus,var(--mod-button-content-color-focus,var(--spectrum-button-content-color-focus)));box-shadow:none;outline:none}:host([focused]):after,:host(:focus-visible):after{box-shadow:0 0 0 var(--spectrum-button-focus-ring-thickness)var(--spectrum-button-focus-indicator-color)}:host(:is(:active,[active])){background-color:var(--highcontrast-button-background-color-down,var(--mod-button-background-color-down,var(--spectrum-button-background-color-down)));border-color:var(--highcontrast-button-border-color-down,var(--mod-button-border-color-down,var(--spectrum-button-border-color-down)));color:var(--highcontrast-button-content-color-down,var(--mod-button-content-color-down,var(--spectrum-button-content-color-down)));box-shadow:none}@media (hover:hover){:host(:hover){background-color:var(--highcontrast-button-background-color-hover,var(--mod-button-background-color-hover,var(--spectrum-button-background-color-hover)));border-color:var(--highcontrast-button-border-color-hover,var(--mod-button-border-color-hover,var(--spectrum-button-border-color-hover)));color:var(--highcontrast-button-content-color-hover,var(--mod-button-content-color-hover,var(--spectrum-button-content-color-hover)));box-shadow:none}}:host .is-disabled,:host([pending]),:host([disabled]),:host([pending]){background-color:var(--highcontrast-button-background-color-disabled,var(--mod-button-background-color-disabled,var(--spectrum-button-background-color-disabled)));border-color:var(--highcontrast-button-border-color-disabled,var(--mod-button-border-color-disabled,var(--spectrum-button-border-color-disabled)));color:var(--highcontrast-button-content-color-disabled,var(--mod-button-content-color-disabled,var(--spectrum-button-content-color-disabled)))}::slotted([slot=icon]){--_icon-size-difference:max(0px,var(--spectrum-button-intended-icon-size) - var(--spectrum-icon-block-size,var(--spectrum-button-intended-icon-size)));margin-block-start:var(--mod-button-icon-margin-block-start,max(0px,var(--mod-button-top-to-icon,var(--spectrum-button-top-to-icon)) - var(--mod-button-border-width,var(--spectrum-button-border-width)) + (var(--_icon-size-difference,0px)/2)));margin-inline-start:calc(var(--mod-button-edge-to-visual,var(--spectrum-button-edge-to-visual)) - var(--mod-button-edge-to-text,var(--spectrum-button-edge-to-text)))}:host([icon-only]){padding:calc(var(--mod-button-edge-to-visual-only,var(--spectrum-button-edge-to-visual-only)) - var(--mod-button-border-width,var(--spectrum-button-border-width)))}#label,::slotted([slot=icon]){visibility:visible;opacity:1;transition:opacity var(--spectrum-button-animation-duration,.13s)ease-in-out}.spectrum-ProgressCircle{visibility:hidden;opacity:0;transition:opacity var(--spectrum-button-animation-duration,.13s)ease-in-out,visibility 0s linear var(--spectrum-button-animation-duration,.13s)}:host([pending]),:host([pending]){cursor:default}:host([pending]) .spectrum-ProgressCircle,:host([pending]) .spectrum-ProgressCircle{visibility:visible;opacity:1;transition:opacity var(--spectrum-button-animation-duration,.13s)ease-in-out}::slotted([slot=icon]){--_icon-size-difference:max(0px,calc(var(--spectrum-button-intended-icon-size) - var(--spectrum-icon-block-size,var(--spectrum-button-intended-icon-size))));color:inherit;flex-shrink:0;align-self:flex-start;margin-block-start:var(--mod-button-icon-margin-block-start,max(0px,calc(var(--spectrum-button-top-to-icon) - var(--spectrum-button-border-width) + var(--_icon-size-difference,0px)/2)));margin-inline-start:calc(var(--spectrum-button-edge-to-visual) - var(--spectrum-button-edge-to-text))}:host([icon-only]){min-inline-size:unset;padding:calc(var(--spectrum-button-edge-to-visual-only) - var(--spectrum-button-border-width));border-radius:50%}:host([icon-only]) ::slotted([slot=icon]){align-self:center;margin-block-start:0;margin-inline-start:0}:host([icon-only]):after{border-radius:50%}[name=icon]+#label{text-align:var(--mod-button-text-align-with-icon,start)}#label{line-height:var(--spectrum-button-line-height);text-align:var(--mod-button-text-align,center);align-self:start;padding-block-start:calc(var(--spectrum-button-top-to-text) - var(--spectrum-button-border-width));padding-block-end:calc(var(--spectrum-button-bottom-to-text) - var(--spectrum-button-border-width))}:host([no-wrap]) #label{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@media (forced-colors:active){:host{--highcontrast-button-content-color-default:ButtonText;--highcontrast-button-content-color-hover:ButtonText;--highcontrast-button-content-color-focus:ButtonText;--highcontrast-button-content-color-down:ButtonText;--highcontrast-button-content-color-disabled:GrayText;--highcontrast-button-border-color-default:ButtonBorder;--highcontrast-button-border-color-hover:ButtonBorder;--highcontrast-button-border-color-focus:ButtonBorder;--highcontrast-button-border-color-down:ButtonBorder;--highcontrast-button-border-color-disabled:GrayText;--highcontrast-button-background-color-default:ButtonFace;--highcontrast-button-background-color-hover:ButtonFace;--highcontrast-button-background-color-down:ButtonFace;--highcontrast-button-background-color-focus:ButtonFace;--highcontrast-button-background-color-disabled:ButtonFace;--mod-progress-circle-track-border-color:ButtonText;--mod-progress-circle-track-border-color-over-background:ButtonText;--mod-progress-circle-thickness:var(--spectrum-progress-circle-thickness-medium);--spectrum-button-animation-duration:0s}#label{forced-color-adjust:none}:host(:focus-visible):after{forced-color-adjust:none;box-shadow:0 0 0 var(--spectrum-button-focus-ring-thickness)ButtonText}:host([variant=accent][treatment=fill]){--highcontrast-button-background-color-default:ButtonText;--highcontrast-button-background-color-hover:Highlight;--highcontrast-button-background-color-down:Highlight;--highcontrast-button-background-color-focus:Highlight;--highcontrast-button-background-color-disabled:ButtonFace;--highcontrast-button-content-color-default:ButtonFace;--highcontrast-button-content-color-hover:HighlightText;--highcontrast-button-content-color-down:HighlightText;--highcontrast-button-content-color-focus:HighlightText;--highcontrast-button-border-color-default:ButtonText;--highcontrast-button-border-color-hover:Highlight;--highcontrast-button-border-color-focus:Highlight;--highcontrast-button-border-color-down:Highlight}:host([static-color=white][variant=accent]){--highcontrast-button-content-color-disabled:GrayText}}:host{--spectrum-button-background-color-default:var(--system-button-background-color-default);--spectrum-button-background-color-hover:var(--system-button-background-color-hover);--spectrum-button-background-color-down:var(--system-button-background-color-down);--spectrum-button-background-color-focus:var(--system-button-background-color-focus);--spectrum-button-border-color-default:var(--system-button-border-color-default);--spectrum-button-border-color-hover:var(--system-button-border-color-hover);--spectrum-button-border-color-down:var(--system-button-border-color-down);--spectrum-button-border-color-focus:var(--system-button-border-color-focus);--spectrum-button-background-color-disabled:var(--system-button-background-color-disabled);--spectrum-button-border-color-disabled:var(--system-button-border-color-disabled)}:host([selected]){--spectrum-button-background-color-default:var(--system-button-selected-background-color-default);--spectrum-button-background-color-hover:var(--system-button-selected-background-color-hover);--spectrum-button-background-color-down:var(--system-button-selected-background-color-down);--spectrum-button-background-color-focus:var(--system-button-selected-background-color-focus)}:host([variant=primary]){--spectrum-button-content-color-default:var(--system-button-primary-content-color-default);--spectrum-button-content-color-hover:var(--system-button-primary-content-color-hover);--spectrum-button-content-color-down:var(--system-button-primary-content-color-down);--spectrum-button-content-color-focus:var(--system-button-primary-content-color-focus)}:host([variant=primary][treatment=outline]){--spectrum-button-background-color-hover:var(--system-button-primary-outline-background-color-hover);--spectrum-button-background-color-down:var(--system-button-primary-outline-background-color-down);--spectrum-button-background-color-focus:var(--system-button-primary-outline-background-color-focus)}:host([variant=secondary]){--spectrum-button-background-color-default:var(--system-button-secondary-background-color-default);--spectrum-button-background-color-hover:var(--system-button-secondary-background-color-hover);--spectrum-button-background-color-down:var(--system-button-secondary-background-color-down);--spectrum-button-background-color-focus:var(--system-button-secondary-background-color-focus)}:host([variant=secondary][treatment=outline]){--spectrum-button-background-color-hover:var(--system-button-secondary-outline-background-color-hover);--spectrum-button-background-color-down:var(--system-button-secondary-outline-background-color-down);--spectrum-button-background-color-focus:var(--system-button-secondary-outline-background-color-focus);--spectrum-button-border-color-default:var(--system-button-secondary-outline-border-color-default);--spectrum-button-border-color-down:var(--system-button-secondary-outline-border-color-down)}:host([static-color=white]){--spectrum-button-background-color-default:var(--system-button-static-white-background-color-default);--spectrum-button-background-color-hover:var(--system-button-static-white-background-color-hover);--spectrum-button-background-color-down:var(--system-button-static-white-background-color-down);--spectrum-button-background-color-focus:var(--system-button-static-white-background-color-focus);--spectrum-button-content-color-default:var(--system-button-static-white-content-color-default);--spectrum-button-content-color-hover:var(--system-button-static-white-content-color-hover);--spectrum-button-content-color-down:var(--system-button-static-white-content-color-down);--spectrum-button-content-color-focus:var(--system-button-static-white-content-color-focus)}:host([static-color=white][treatment=outline]){--spectrum-button-background-color-default:var(--system-button-static-white-outline-background-color-default);--spectrum-button-background-color-hover:var(--system-button-static-white-outline-background-color-hover);--spectrum-button-background-color-down:var(--system-button-static-white-outline-background-color-down);--spectrum-button-background-color-focus:var(--system-button-static-white-outline-background-color-focus);--spectrum-button-content-color-default:var(--system-button-static-white-outline-content-color-default);--spectrum-button-content-color-hover:var(--system-button-static-white-outline-content-color-hover);--spectrum-button-content-color-down:var(--system-button-static-white-outline-content-color-down);--spectrum-button-content-color-focus:var(--system-button-static-white-outline-content-color-focus);--spectrum-button-border-color-default:var(--system-button-static-white-outline-border-color-default);--spectrum-button-border-color-hover:var(--system-button-static-white-outline-border-color-hover);--spectrum-button-border-color-down:var(--system-button-static-white-outline-border-color-down);--spectrum-button-border-color-focus:var(--system-button-static-white-outline-border-color-focus)}:host([static-color=white][variant=secondary]){--spectrum-button-background-color-default:var(--system-button-static-white-secondary-background-color-default);--spectrum-button-background-color-hover:var(--system-button-static-white-secondary-background-color-hover);--spectrum-button-background-color-down:var(--system-button-static-white-secondary-background-color-down);--spectrum-button-background-color-focus:var(--system-button-static-white-secondary-background-color-focus);--spectrum-button-content-color-default:var(--system-button-static-white-secondary-content-color-default);--spectrum-button-content-color-hover:var(--system-button-static-white-secondary-content-color-hover);--spectrum-button-content-color-down:var(--system-button-static-white-secondary-content-color-down);--spectrum-button-content-color-focus:var(--system-button-static-white-secondary-content-color-focus)}:host([static-color=white][variant=secondary][treatment=outline]){--spectrum-button-border-color-default:var(--system-button-static-white-secondary-outline-border-color-default);--spectrum-button-border-color-hover:var(--system-button-static-white-secondary-outline-border-color-hover);--spectrum-button-border-color-down:var(--system-button-static-white-secondary-outline-border-color-down);--spectrum-button-border-color-focus:var(--system-button-static-white-secondary-outline-border-color-focus);--spectrum-button-background-color-default:var(--system-button-static-white-secondary-outline-background-color-default);--spectrum-button-background-color-hover:var(--system-button-static-white-secondary-outline-background-color-hover);--spectrum-button-background-color-down:var(--system-button-static-white-secondary-outline-background-color-down);--spectrum-button-background-color-focus:var(--system-button-static-white-secondary-outline-background-color-focus)}:host([static-color=black]){--spectrum-button-background-color-default:var(--system-button-static-black-background-color-default);--spectrum-button-background-color-hover:var(--system-button-static-black-background-color-hover);--spectrum-button-background-color-down:var(--system-button-static-black-background-color-down);--spectrum-button-background-color-focus:var(--system-button-static-black-background-color-focus);--spectrum-button-content-color-default:var(--system-button-static-black-content-color-default);--spectrum-button-content-color-hover:var(--system-button-static-black-content-color-hover);--spectrum-button-content-color-down:var(--system-button-static-black-content-color-down);--spectrum-button-content-color-focus:var(--system-button-static-black-content-color-focus)}:host([static-color=black][treatment=outline]){--spectrum-button-background-color-default:var(--system-button-static-black-outline-background-color-default);--spectrum-button-background-color-hover:var(--system-button-static-black-outline-background-color-hover);--spectrum-button-background-color-down:var(--system-button-static-black-outline-background-color-down);--spectrum-button-background-color-focus:var(--system-button-static-black-outline-background-color-focus);--spectrum-button-content-color-default:var(--system-button-static-black-outline-content-color-default);--spectrum-button-content-color-hover:var(--system-button-static-black-outline-content-color-hover);--spectrum-button-content-color-down:var(--system-button-static-black-outline-content-color-down);--spectrum-button-content-color-focus:var(--system-button-static-black-outline-content-color-focus);--spectrum-button-border-color-default:var(--system-button-static-black-outline-border-color-default);--spectrum-button-border-color-hover:var(--system-button-static-black-outline-border-color-hover);--spectrum-button-border-color-down:var(--system-button-static-black-outline-border-color-down);--spectrum-button-border-color-focus:var(--system-button-static-black-outline-border-color-focus)}:host([static-color=black][variant=secondary]){--spectrum-button-background-color-default:var(--system-button-static-black-secondary-background-color-default);--spectrum-button-background-color-hover:var(--system-button-static-black-secondary-background-color-hover);--spectrum-button-background-color-down:var(--system-button-static-black-secondary-background-color-down);--spectrum-button-background-color-focus:var(--system-button-static-black-secondary-background-color-focus);--spectrum-button-content-color-default:var(--system-button-static-black-secondary-content-color-default);--spectrum-button-content-color-hover:var(--system-button-static-black-secondary-content-color-hover);--spectrum-button-content-color-down:var(--system-button-static-black-secondary-content-color-down);--spectrum-button-content-color-focus:var(--system-button-static-black-secondary-content-color-focus)}:host([static-color=black][variant=secondary][treatment=outline]){--spectrum-button-border-color-default:var(--system-button-static-black-secondary-outline-border-color-default);--spectrum-button-border-color-hover:var(--system-button-static-black-secondary-outline-border-color-hover);--spectrum-button-border-color-down:var(--system-button-static-black-secondary-outline-border-color-down);--spectrum-button-border-color-focus:var(--system-button-static-black-secondary-outline-border-color-focus);--spectrum-button-background-color-default:var(--system-button-static-black-secondary-outline-background-color-default);--spectrum-button-background-color-hover:var(--system-button-static-black-secondary-outline-background-color-hover);--spectrum-button-background-color-down:var(--system-button-static-black-secondary-outline-background-color-down);--spectrum-button-background-color-focus:var(--system-button-static-black-secondary-outline-background-color-focus)}@media (forced-colors:active){:host([treatment][disabled]){border-color:graytext}:host([treatment]:not([disabled]):hover){border-color:highlight}:host(.remove-focus-ring-safari-hack:focus-visible):after{forced-color-adjust:none;box-shadow:none}}@keyframes show-progress-circle{0%{visibility:hidden}to{visibility:visible}}@keyframes hide-icons-label{0%{visibility:visible}to{visibility:hidden}}@keyframes update-pending-button-styles{to{background-color:var(--highcontrast-button-background-color-disabled,var(--mod-button-background-color-disabled,var(--spectrum-button-background-color-disabled)));border-color:var(--highcontrast-button-border-color-disabled,var(--mod-button-border-color-disabled,var(--spectrum-button-border-color-disabled)));color:var(--highcontrast-button-content-color-disabled,var(--mod-button-content-color-disabled,var(--spectrum-button-content-color-disabled)))}}:host([pending]:not([disabled])){cursor:default;pointer-events:none;animation:update-pending-button-styles 0s var(--pending-delay,1s)forwards}::slotted([slot=icon]){visibility:revert-layer;--mod-progress-circle-position:relative;--spectrum-icon-size:inherit}sp-progress-circle{visibility:hidden;display:block;position:absolute;left:50%;transform:translate(-50%)}:host([pending]:not([disabled])) sp-progress-circle{animation:show-progress-circle 0s var(--pending-delay,1s)forwards}:host([pending]:not([disabled])) slot[name=icon],:host([pending]:not([disabled])) #label{animation:hide-icons-label 0s var(--pending-delay,1s)forwards}:host(.remove-focus-ring-safari-hack:focus-visible):after{margin:calc(-1*var(--mod-button-focus-indicator-gap,var(--mod-focus-indicator-gap,var(--spectrum-focus-indicator-gap))));box-shadow:none}:host(.remove-focus-ring-safari-hack:focus-visible){box-shadow:none;outline:none}:host(.remove-focus-ring-safari-hack:focus-visible:not(:hover)){background-color:var(--highcontrast-button-background-color-default,var(--mod-button-background-color-default,var(--spectrum-button-background-color-default)));border-color:var(--highcontrast-button-border-color-default,var(--mod-button-border-color-default,var(--spectrum-button-border-color-default)));color:var(--highcontrast-button-content-color-default,var(--mod-button-content-color-default,var(--spectrum-button-content-color-default)))}
`;
function J(e, t) {
  window.__swc && window.__swc.DEBUG && customElements.get(e) && window.__swc.warn(
    void 0,
    `Attempted to redefine <${e}>. This usually indicates that multiple versions of the same web component were loaded onto a single page.`,
    "https://opensource.adobe.com/spectrum-web-components/registry-conflicts"
  ), customElements.define(e, t);
}
const Xu = (e, t) => {
  if (e)
    return null;
  const r = t.assignedNodes().reduce((o, s) => s.textContent ? o + s.textContent : o, "");
  return r ? r.trim() : null;
}, Zu = [
  "s",
  "m",
  "l"
], Oc = ["white"];
[
  ...Oc
];
var Yu = Object.defineProperty, _r = (e, t, r, o) => {
  for (var s = void 0, a = e.length - 1, c; a >= 0; a--)
    (c = e[a]) && (s = c(t, r, s) || s);
  return s && Yu(t, r, s), s;
};
let Ve = class extends ge(Vt, {
  validSizes: Zu
}) {
  constructor() {
    super(...arguments), this.indeterminate = !1, this.label = "", this.progress = 0;
  }
  makeRotation(t) {
    return this.indeterminate ? void 0 : `transform: rotate(${t}deg);`;
  }
  handleSlotchange() {
    const t = Xu(this.label, this.slotEl);
    t && (this.label = t);
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.hasAttribute("role") || this.setAttribute("role", "progressbar");
  }
  updated(t) {
    var r, o;
    super.updated(t), !this.indeterminate && t.has("progress") ? this.setAttribute("aria-valuenow", "" + this.progress) : this.hasAttribute("aria-valuenow") && this.removeAttribute("aria-valuenow"), t.has("label") && (this.label.length ? this.setAttribute("aria-label", this.label) : t.get("label") === this.getAttribute("aria-label") && this.removeAttribute("aria-label"));
    const s = () => !!(this.label || this.getAttribute("aria-label") || this.getAttribute("aria-labelledby") || this.slotEl.assignedNodes().length);
    (r = window.__swc) != null && r.DEBUG && !s() && this.getAttribute("role") === "progressbar" && ((o = window.__swc) == null || o.warn(
      this,
      "<sp-progress-circle> elements need one of the following to be accessible:",
      "https://opensource.adobe.com/spectrum-web-components/components/progress-circle/#accessibility",
      {
        type: "accessibility",
        issues: [
          'value supplied to the "label" attribute, which will be displayed visually as part of the element, or',
          "text content supplied directly to the <sp-progress-circle> element, or",
          'value supplied to the "aria-label" attribute, which will only be provided to screen readers, or',
          'an element ID reference supplied to the "aria-labelledby" attribute, which will be provided by screen readers and will need to be managed manually by the parent application.'
        ]
      }
    ));
  }
};
_r([
  z({ type: String, reflect: !0, attribute: "static-color" })
], Ve.prototype, "staticColor");
_r([
  z({ type: Boolean, reflect: !0 })
], Ve.prototype, "indeterminate");
_r([
  z({ type: String })
], Ve.prototype, "label");
_r([
  z({ type: Number })
], Ve.prototype, "progress");
_r([
  Hr("slot")
], Ve.prototype, "slotEl");
const Ju = st`
    @media (forced-colors:active){:host{--highcontrast-progress-circle-fill-border-color:Highlight;--highcontrast-progress-circle-fill-border-color-over-background:Highlight}.track{--spectrum-progress-circle-track-border-style:double}}:host{--spectrum-progress-circle-track-border-color:var(--spectrum-gray-300);--spectrum-progress-circle-fill-border-color:var(--spectrum-accent-content-color-default);--spectrum-progress-circle-track-border-color-over-background:var(--spectrum-transparent-white-300);--spectrum-progress-circle-fill-border-color-over-background:var(--spectrum-transparent-white-900);--spectrum-progress-circle-track-border-style:solid;inline-size:var(--mod-progress-circle-size,var(--spectrum-progress-circle-size));block-size:var(--mod-progress-circle-size,var(--spectrum-progress-circle-size));position:var(--mod-progress-circle-position,relative);direction:ltr;display:inline-block;position:relative;transform:translateZ(0)}:host([size=s]){--spectrum-progress-circle-size:var(--spectrum-progress-circle-size-small);--spectrum-progress-circle-thickness:var(--spectrum-progress-circle-thickness-small)}:host{--spectrum-progress-circle-size:var(--spectrum-progress-circle-size-medium);--spectrum-progress-circle-thickness:var(--spectrum-progress-circle-thickness-medium)}:host([size=l]){--spectrum-progress-circle-size:var(--spectrum-progress-circle-size-large);--spectrum-progress-circle-thickness:var(--spectrum-progress-circle-thickness-large)}.track{box-sizing:border-box;inline-size:var(--mod-progress-circle-size,var(--spectrum-progress-circle-size));block-size:var(--mod-progress-circle-size,var(--spectrum-progress-circle-size));border-style:var(--mod-progress-circle-track-border-style,var(--spectrum-progress-circle-track-border-style));border-width:var(--mod-progress-circle-thickness,var(--spectrum-progress-circle-thickness));border-radius:var(--mod-progress-circle-size,var(--spectrum-progress-circle-size));border-color:var(--mod-progress-circle-track-border-color,var(--spectrum-progress-circle-track-border-color))}.fills{block-size:100%;inline-size:100%;position:absolute;inset-block-start:0;inset-inline-start:0}.fill{box-sizing:border-box;inline-size:var(--mod-progress-circle-size,var(--spectrum-progress-circle-size));block-size:var(--mod-progress-circle-size,var(--spectrum-progress-circle-size));border-style:solid;border-width:var(--mod-progress-circle-thickness,var(--spectrum-progress-circle-thickness));border-radius:var(--mod-progress-circle-size,var(--spectrum-progress-circle-size));border-color:var(--highcontrast-progress-circle-fill-border-color,var(--mod-progress-circle-fill-border-color,var(--spectrum-progress-circle-fill-border-color)))}:host([static-color=white]) .track{border-color:var(--mod-progress-circle-track-border-color-over-background,var(--spectrum-progress-circle-track-border-color-over-background))}:host([static-color=white]) .fill{border-color:var(--highcontrast-progress-circle-fill-border-color-over-background,var(--mod-progress-circle-fill-border-color-over-background,var(--spectrum-progress-circle-fill-border-color-over-background)))}.fillMask1,.fillMask2{transform-origin:100%;block-size:100%;inline-size:50%;position:absolute;overflow:hidden;transform:rotate(180deg)}.fillSubMask1,.fillSubMask2{transform-origin:100%;block-size:100%;inline-size:100%;overflow:hidden;transform:rotate(-180deg)}.fillMask2{transform:rotate(0)}:host([indeterminate]) .fills{will-change:transform;transform-origin:50%;animation:1s cubic-bezier(.25,.78,.48,.89) infinite spectrum-fills-rotate;transform:translateZ(0)}:host([indeterminate]) .fillSubMask1{will-change:transform;animation:1s linear infinite spectrum-fill-mask-1;transform:translateZ(0)}:host([indeterminate]) .fillSubMask2{will-change:transform;animation:1s linear infinite spectrum-fill-mask-2;transform:translateZ(0)}.fill-submask-2{animation:1s linear infinite spectrum-fill-mask-2}@keyframes spectrum-fill-mask-1{0%{transform:rotate(90deg)}1.69%{transform:rotate(72.3deg)}3.39%{transform:rotate(55.5deg)}5.08%{transform:rotate(40.3deg)}6.78%{transform:rotate(25deg)}8.47%{transform:rotate(10.6deg)}10.17%{transform:rotate(0)}11.86%{transform:rotate(0)}13.56%{transform:rotate(0)}15.25%{transform:rotate(0)}16.95%{transform:rotate(0)}18.64%{transform:rotate(0)}20.34%{transform:rotate(0)}22.03%{transform:rotate(0)}23.73%{transform:rotate(0)}25.42%{transform:rotate(0)}27.12%{transform:rotate(0)}28.81%{transform:rotate(0)}30.51%{transform:rotate(0)}32.2%{transform:rotate(0)}33.9%{transform:rotate(0)}35.59%{transform:rotate(0)}37.29%{transform:rotate(0)}38.98%{transform:rotate(0)}40.68%{transform:rotate(0)}42.37%{transform:rotate(5.3deg)}44.07%{transform:rotate(13.4deg)}45.76%{transform:rotate(20.6deg)}47.46%{transform:rotate(29deg)}49.15%{transform:rotate(36.5deg)}50.85%{transform:rotate(42.6deg)}52.54%{transform:rotate(48.8deg)}54.24%{transform:rotate(54.2deg)}55.93%{transform:rotate(59.4deg)}57.63%{transform:rotate(63.2deg)}59.32%{transform:rotate(67.2deg)}61.02%{transform:rotate(70.8deg)}62.71%{transform:rotate(73.8deg)}64.41%{transform:rotate(76.2deg)}66.1%{transform:rotate(78.7deg)}67.8%{transform:rotate(80.6deg)}69.49%{transform:rotate(82.6deg)}71.19%{transform:rotate(83.7deg)}72.88%{transform:rotate(85deg)}74.58%{transform:rotate(86.3deg)}76.27%{transform:rotate(87deg)}77.97%{transform:rotate(87.7deg)}79.66%{transform:rotate(88.3deg)}81.36%{transform:rotate(88.6deg)}83.05%{transform:rotate(89.2deg)}84.75%{transform:rotate(89.2deg)}86.44%{transform:rotate(89.5deg)}88.14%{transform:rotate(89.9deg)}89.83%{transform:rotate(89.7deg)}91.53%{transform:rotate(90.1deg)}93.22%{transform:rotate(90.2deg)}94.92%{transform:rotate(90.1deg)}96.61%{transform:rotate(90deg)}98.31%{transform:rotate(89.8deg)}to{transform:rotate(90deg)}}@keyframes spectrum-fill-mask-2{0%{transform:rotate(180deg)}1.69%{transform:rotate(180deg)}3.39%{transform:rotate(180deg)}5.08%{transform:rotate(180deg)}6.78%{transform:rotate(180deg)}8.47%{transform:rotate(180deg)}10.17%{transform:rotate(179.2deg)}11.86%{transform:rotate(164deg)}13.56%{transform:rotate(151.8deg)}15.25%{transform:rotate(140.8deg)}16.95%{transform:rotate(130.3deg)}18.64%{transform:rotate(120.4deg)}20.34%{transform:rotate(110.8deg)}22.03%{transform:rotate(101.6deg)}23.73%{transform:rotate(93.5deg)}25.42%{transform:rotate(85.4deg)}27.12%{transform:rotate(78.1deg)}28.81%{transform:rotate(71.2deg)}30.51%{transform:rotate(89.1deg)}32.2%{transform:rotate(105.5deg)}33.9%{transform:rotate(121.3deg)}35.59%{transform:rotate(135.5deg)}37.29%{transform:rotate(148.4deg)}38.98%{transform:rotate(161deg)}40.68%{transform:rotate(173.5deg)}42.37%{transform:rotate(180deg)}44.07%{transform:rotate(180deg)}45.76%{transform:rotate(180deg)}47.46%{transform:rotate(180deg)}49.15%{transform:rotate(180deg)}50.85%{transform:rotate(180deg)}52.54%{transform:rotate(180deg)}54.24%{transform:rotate(180deg)}55.93%{transform:rotate(180deg)}57.63%{transform:rotate(180deg)}59.32%{transform:rotate(180deg)}61.02%{transform:rotate(180deg)}62.71%{transform:rotate(180deg)}64.41%{transform:rotate(180deg)}66.1%{transform:rotate(180deg)}67.8%{transform:rotate(180deg)}69.49%{transform:rotate(180deg)}71.19%{transform:rotate(180deg)}72.88%{transform:rotate(180deg)}74.58%{transform:rotate(180deg)}76.27%{transform:rotate(180deg)}77.97%{transform:rotate(180deg)}79.66%{transform:rotate(180deg)}81.36%{transform:rotate(180deg)}83.05%{transform:rotate(180deg)}84.75%{transform:rotate(180deg)}86.44%{transform:rotate(180deg)}88.14%{transform:rotate(180deg)}89.83%{transform:rotate(180deg)}91.53%{transform:rotate(180deg)}93.22%{transform:rotate(180deg)}94.92%{transform:rotate(180deg)}96.61%{transform:rotate(180deg)}98.31%{transform:rotate(180deg)}to{transform:rotate(180deg)}}@keyframes spectrum-fills-rotate{0%{transform:rotate(-90deg)}to{transform:rotate(270deg)}}:host{--spectrum-progress-circle-track-border-color:var(--system-progress-circle-track-border-color);--spectrum-progress-circle-track-border-color-over-background:var(--system-progress-circle-track-border-color-over-background);--spectrum-progress-circle-fill-border-color-over-background:var(--system-progress-circle-fill-border-color-over-background)}:host{block-size:var(--mod-progress-circle-size,var(--_spectrum-progress-circle-size));inline-size:var(--mod-progress-circle-size,var(--_spectrum-progress-circle-size));--spectrum-progress-circle-size:inherit;--spectrum-progresscircle-m-over-background-track-fill-color:var(--spectrum-alias-track-fill-color-overbackground);--_spectrum-progress-circle-size:var(--spectrum-progress-circle-size,var(--spectrum-progress-circle-size-medium))}:host([size=s]){--_spectrum-progress-circle-size:var(--spectrum-progress-circle-size,var(--spectrum-progress-circle-size-small))}:host([size=l]){--_spectrum-progress-circle-size:var(--spectrum-progress-circle-size,var(--spectrum-progress-circle-size-large))}slot{display:none}.track,.fill{block-size:var(--mod-progress-circle-size,var(--_spectrum-progress-circle-size));border-radius:var(--mod-progress-circle-size,var(--_spectrum-progress-circle-size));inline-size:var(--mod-progress-circle-size,var(--_spectrum-progress-circle-size))}:host([indeterminate]) .fills,:host([indeterminate]) .fillSubMask1,:host([indeterminate]) .fillSubMask2{animation-duration:var(--spectrum-animation-duration-2000)}
`;
var Qu = Object.defineProperty, tm = (e, t, r, o) => {
  for (var s = void 0, a = e.length - 1, c; a >= 0; a--) (c = e[a]) && (s = c(t, r, s) || s);
  return s && Qu(t, r, s), s;
};
class Go extends Ve {
  static get styles() {
    return [Ju];
  }
  render() {
    const t = [this.makeRotation(-180 + 3.6 * Math.min(this.progress, 50)), this.makeRotation(-180 + 3.6 * Math.max(this.progress - 50, 0))], r = ["Mask1", "Mask2"];
    return C`
            <slot @slotchange=${this.handleSlotchange}></slot>
            <div class="track"></div>
            <div class="fills">
                ${r.map((o, s) => C`
                        <div class="fill${o}">
                            <div
                                class="fillSub${o}"
                                style=${G(t[s])}
                            >
                                <div class="fill"></div>
                            </div>
                        </div>
                    `)}
            </div>
        `;
  }
}
Go.STATIC_COLORS = Oc, tm([z({ type: String, reflect: !0, attribute: "static-color" })], Go.prototype, "staticColor");
J("sp-progress-circle", Go);
class em {
  constructor(t) {
    this.cachedAriaLabel = null, this.host = t, this.host.addController(this);
  }
  renderPendingState() {
    return this.host.pending ? C`
                  <sp-progress-circle
                      id="loader"
                      size="s"
                      indeterminate
                      class="progress-circle"
                      role="presentation"
                  ></sp-progress-circle>
              ` : C``;
  }
  updateAriaLabel() {
    const { pending: t, disabled: r, pendingLabel: o } = this.host, s = this.host.getAttribute("aria-label");
    function a(c, i, n) {
      return !c && i !== n || c !== i && i !== n;
    }
    a(this.cachedAriaLabel, s, o) && (this.cachedAriaLabel = s), t && !r ? this.host.setAttribute("aria-label", o || "Pending") : this.cachedAriaLabel ? this.host.setAttribute("aria-label", this.cachedAriaLabel) : this.host.removeAttribute("aria-label");
  }
  hostConnected() {
    this.cachedAriaLabel || (this.cachedAriaLabel = this.host.getAttribute("aria-label")), this.updateAriaLabel();
  }
  hostUpdated() {
    this.updateAriaLabel();
  }
}
var rm = Object.defineProperty, om = Object.getOwnPropertyDescriptor, xe = (e, t, r, o) => {
  for (var s = o > 1 ? void 0 : o ? om(t, r) : t, a = e.length - 1, c; a >= 0; a--) (c = e[a]) && (s = (o ? c(t, r, s) : c(s)) || s);
  return o && s && rm(t, r, s), s;
};
const sm = ["accent", "primary", "secondary", "negative", "white", "black"];
class ie extends ge(dr, { noDefaultSize: !0 }) {
  constructor() {
    super(), this.pendingLabel = "Pending", this.pending = !1, this._variant = "accent", this.treatment = "fill", this.noWrap = !1, this.pendingStateController = new em(this);
  }
  static get styles() {
    return [...super.styles, Gu];
  }
  click() {
    this.pending || super.click();
  }
  get variant() {
    return this._variant;
  }
  set variant(t) {
    if (t !== this.variant) {
      switch (this.requestUpdate("variant", this.variant), t) {
        case "cta":
          this._variant = "accent";
          break;
        case "overBackground":
          this.removeAttribute("variant"), this.staticColor = "white", this.treatment = "outline";
          return;
        case "white":
          this.staticColor = "white";
          return;
        case "black":
          this.staticColor = "black";
          return;
        case null:
          return;
        default:
          sm.includes(t) ? this._variant = t : this._variant = "accent";
          break;
      }
      this.setAttribute("variant", this.variant);
    }
  }
  set quiet(t) {
    this.treatment = t ? "outline" : "fill";
  }
  get quiet() {
    return this.treatment === "outline";
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.hasAttribute("variant") || this.setAttribute("variant", this.variant), this.pending && this.pendingStateController.hostUpdated();
  }
  renderButton() {
    return C`
            ${this.buttonContent}
            ${this.pendingStateController.renderPendingState()}
        `;
  }
}
xe([z({ type: String, attribute: "pending-label" })], ie.prototype, "pendingLabel", 2), xe([z({ type: Boolean, reflect: !0, attribute: !0 })], ie.prototype, "pending", 2), xe([z()], ie.prototype, "variant", 1), xe([z({ reflect: !0, attribute: "static-color" })], ie.prototype, "staticColor", 2), xe([z({ reflect: !0 })], ie.prototype, "treatment", 2), xe([z({ type: Boolean })], ie.prototype, "quiet", 1), xe([z({ type: Boolean, attribute: "no-wrap", reflect: !0 })], ie.prototype, "noWrap", 2);
J("sp-button", ie);
function Rc(e, t, r) {
  const o = e.getAttribute(t);
  let s = o ? o.split(/\s+/) : [];
  s = s.filter((a) => !r.find((c) => a === c)), s.length ? e.setAttribute(t, s.join(" ")) : e.removeAttribute(t);
}
function Uc(e, t, r) {
  const o = Array.isArray(r) ? r : [r], s = e.getAttribute(t), a = s ? s.split(/\s+/) : [];
  return o.every((c) => a.indexOf(c) > -1) ? () => {
  } : (a.push(...o), e.setAttribute(t, a.join(" ")), () => Rc(e, t, o));
}
function Xo() {
  return Array.from(crypto.getRandomValues(new Uint8Array(4)), (e) => `0${(e & 255).toString(16)}`.slice(-2)).join("");
}
class am {
  constructor(t, { mode: r } = { mode: "internal" }) {
    this.mode = "internal", this.handleSlotchange = ({ target: o }) => {
      this.handleHelpText(o), this.handleNegativeHelpText(o);
    }, this.host = t, this.id = `sp-help-text-${Xo()}`, this.mode = r;
  }
  get isInternal() {
    return this.mode === "internal";
  }
  render(t) {
    return C`
            <div
                id=${G(this.isInternal ? this.id : void 0)}
                aria-live="assertive"
            >
                <slot
                    name=${t ? "negative-help-text" : `pass-through-help-text-${Xo()}`}
                    @slotchange=${this.handleSlotchange}
                >
                    <slot name="help-text"></slot>
                </slot>
            </div>
        `;
  }
  addId() {
    const t = this.helpTextElement ? this.helpTextElement.id : this.id;
    this.conditionId = Uc(this.host, "aria-describedby", t), this.host.hasAttribute("tabindex") && (this.previousTabindex = parseFloat(this.host.getAttribute("tabindex"))), this.host.tabIndex = 0;
  }
  removeId() {
    this.conditionId && (this.conditionId(), delete this.conditionId), !this.helpTextElement && (this.previousTabindex ? this.host.tabIndex = this.previousTabindex : this.host.removeAttribute("tabindex"));
  }
  handleHelpText(t) {
    if (this.isInternal) return;
    this.helpTextElement && this.helpTextElement.id === this.id && this.helpTextElement.removeAttribute("id"), this.removeId();
    const r = t.assignedElements()[0];
    this.helpTextElement = r, r && (r.id || (r.id = this.id), this.addId());
  }
  handleNegativeHelpText(t) {
    t.name === "negative-help-text" && t.assignedElements().forEach((r) => r.variant = "negative");
  }
}
function cm(e, { mode: t } = { mode: "internal" }) {
  class r extends e {
    constructor() {
      super(...arguments), this.helpTextManager = new am(this, { mode: t });
    }
    get helpTextId() {
      return this.helpTextManager.id;
    }
    renderHelpText(s) {
      return this.helpTextManager.render(s);
    }
  }
  return r;
}
const Nc = Symbol("system resolver updated");
class im {
  constructor(t) {
    this.system = "spectrum", this.host = t, this.host.addController(this);
  }
  hostConnected() {
    this.resolveSystem();
  }
  hostDisconnected() {
    var t;
    (t = this.unsubscribe) == null || t.call(this);
  }
  resolveSystem() {
    const t = new CustomEvent("sp-system-context", { bubbles: !0, composed: !0, detail: { callback: (r, o) => {
      const s = this.system;
      this.system = r, this.unsubscribe = o, this.host.requestUpdate(Nc, s);
    } }, cancelable: !0 });
    this.host.dispatchEvent(t);
  }
}
const nm = st`
    :host{--spectrum-icon-inline-size:var(--mod-icon-inline-size,var(--mod-icon-size,var(--spectrum-icon-size)));--spectrum-icon-block-size:var(--mod-icon-block-size,var(--mod-icon-size,var(--spectrum-icon-size)));inline-size:var(--spectrum-icon-inline-size);block-size:var(--spectrum-icon-block-size);color:var(--mod-icon-color,inherit);fill:currentColor;pointer-events:none;display:inline-block}@media (forced-colors:active){:host{forced-color-adjust:auto}}:host{--spectrum-icon-size:var(--spectrum-workflow-icon-size-100)}:host([size=xxs]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-xxs)}:host([size=xs]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-50)}:host([size=s]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-75)}:host([size=l]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-200)}:host([size=xl]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-300)}:host([size=xxl]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-xxl)}#container{height:100%}img,svg,::slotted(*){vertical-align:top;width:100%;height:100%;color:inherit}@media (forced-colors:active){img,svg,::slotted(*){forced-color-adjust:auto}}:host(:not(:root)){overflow:hidden}
`;
var lm = Object.defineProperty, To = (e, t, r, o) => {
  for (var s = void 0, a = e.length - 1, c; a >= 0; a--) (c = e[a]) && (s = c(t, r, s) || s);
  return s && lm(t, r, s), s;
};
class ut extends Vt {
  constructor() {
    super(...arguments), this.unsubscribeSystemContext = null, this.spectrumVersion = 1, this.label = "", this.systemResolver = new im(this);
  }
  static get styles() {
    return [nm];
  }
  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.unsubscribeSystemContext && (this.unsubscribeSystemContext(), this.unsubscribeSystemContext = null);
  }
  update(t) {
    t.has("label") && (this.label ? this.removeAttribute("aria-hidden") : this.setAttribute("aria-hidden", "true")), t.has(Nc) && (this.spectrumVersion = this.systemResolver.system === "spectrum-two" ? 2 : 1), super.update(t);
  }
  render() {
    return C`
            <slot></slot>
        `;
  }
}
To([Ko()], ut.prototype, "spectrumVersion"), To([z({ reflect: !0 })], ut.prototype, "label"), To([z({ reflect: !0 })], ut.prototype, "size");
let Zo;
const nt = function(e, ...t) {
  return Zo ? Zo(e, ...t) : t.reduce((r, o, s) => r + o + e[s + 1], e[0]);
}, Kt = (e) => {
  Zo = e;
}, um = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Checkmark100" } = {}) => nt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
    width="${e}"
    height="${t}"
  >
    <path
      d="M3.5 9.5a1 1 0 0 1-.774-.368l-2.45-3a1 1 0 1 1 1.548-1.264l1.657 2.028 4.68-6.01A1 1 0 0 1 9.74 2.114l-5.45 7a1 1 0 0 1-.777.386z"
    />
  </svg>`, mm = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Checkmark100" } = {}) => nt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
    width="${e}"
    height="${t}"
  >
    <path
      d="M3.5 9.5a1 1 0 0 1-.774-.368l-2.45-3a1 1 0 1 1 1.548-1.264l1.657 2.028 4.68-6.01A1 1 0 0 1 9.74 2.114l-5.45 7a1 1 0 0 1-.777.386z"
    />
  </svg>`;
class pm extends ut {
  render() {
    return Kt(C), this.spectrumVersion === 2 ? um({ hidden: !this.label, title: this.label }) : mm({ hidden: !this.label, title: this.label });
  }
}
J("sp-icon-checkmark100", pm);
let Yo;
const Wt = function(e, ...t) {
  return Yo ? Yo(e, ...t) : t.reduce((r, o, s) => r + o + e[s + 1], e[0]);
}, $r = (e) => {
  Yo = e;
}, dm = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Alert" } = {}) => Wt`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 36 36"
    width="${e}"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
  >
    <path
      d="M17.127 2.579.4 32.512A1 1 0 0 0 1.272 34h33.456a1 1 0 0 0 .872-1.488L18.873 2.579a1 1 0 0 0-1.746 0ZM20 29.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Zm0-6a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Z"
    />
  </svg>`, gm = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Alert Triangle" } = {}) => Wt`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${e}"
    height="${t}"
    viewBox="0 0 20 20"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
  >
    <path
      d="m9.99936,15.12334c-.23065.00812-.45538-.07378-.62661-.22835-.33033-.36462-.33033-.91993,0-1.28455.16935-.15832.39483-.24279.62664-.23476.23635-.00947.46589.08026.63302.24745.16207.1677.24916.39386.24137.62681.01238.23469-.06959.4646-.2277.63864-.17358.16455-.40786.24959-.64671.23475Z"
      fill="currentColor"
    />
    <path
      d="m10,11.75c-.41406,0-.75-.33594-.75-.75v-4c0-.41406.33594-.75.75-.75s.75.33594.75.75v4c0,.41406-.33594.75-.75.75Z"
      fill="currentColor"
    />
    <path
      d="m16.7334,18H3.2666c-.80029,0-1.52295-.41016-1.93262-1.09766s-.42725-1.51855-.04639-2.22266L8.021,2.23242c.39355-.72754,1.15186-1.17969,1.979-1.17969s1.58545.45215,1.979,1.17969l6.7334,12.44727c.38086.7041.36328,1.53516-.04639,2.22266s-1.13232,1.09766-1.93262,1.09766ZM10,2.55273c-.13428,0-.46777.03809-.65967.39258L2.60693,15.39258c-.18311.33887-.05029.63184.01562.74121.06543.11035.25928.36621.64404.36621h13.4668c.38477,0,.57861-.25586.64404-.36621.06592-.10938.19873-.40234.01562-.74121L10.65967,2.94531c-.19189-.35449-.52539-.39258-.65967-.39258Z"
      fill="currentColor"
    />
  </svg>`;
class bm extends ut {
  render() {
    return $r(C), this.spectrumVersion === 1 ? dm({ hidden: !this.label, title: this.label }) : gm({ hidden: !this.label, title: this.label });
  }
}
J("sp-icon-alert", bm);
const hm = st`
            /*!
 * Copyright 2025 Adobe. All rights reserved. This file is licensed to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License./
 * 
 *  Override divider background color when used inside alert-dialog/
 * .divider {
 *     --spectrum-divider-background-color: var(--system-alert-dialog-divider-background-color);
 *     --spectrum-divider-background-color-static-white: var(--spectrum-alert-dialog-divider-background-color-static-white);
 *     --spectrum-divider-background-color-static-black: var(--spectrum-alert-dialog-divider-background-color-static-black);
 * }
 */
/*!
 * Copyright 2025 Adobe. All rights reserved. This file is licensed to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License./
 * 
 *  Override divider background color when used inside alert-dialog/
 * .divider {
 *     --spectrum-divider-background-color: var(--system-alert-dialog-divider-background-color);
 *     --spectrum-divider-background-color-static-white: var(--spectrum-alert-dialog-divider-background-color-static-white);
 *     --spectrum-divider-background-color-static-black: var(--spectrum-alert-dialog-divider-background-color-static-black);
 * }
 */
:host{--spectrum-textfield-input-line-height:var(--spectrum-textfield-height);--spectrum-texfield-animation-duration:var(--spectrum-animation-duration-100);--spectrum-textfield-width:240px;--spectrum-textfield-min-width:var(--spectrum-text-field-minimum-width-multiplier);--spectrum-textfield-spacing-inline-quiet:var(--spectrum-field-edge-to-text-quiet);--spectrum-textfield-spacing-block-quiet:var(--spectrum-field-edge-to-border-quiet);--spectrum-textfield-label-spacing-block:var(--spectrum-field-label-to-component);--spectrum-textfield-helptext-spacing-block:var(--spectrum-help-text-to-component);--spectrum-textfield-icon-spacing-inline-end-quiet-invalid:var(--spectrum-field-edge-to-alert-icon-quiet);--spectrum-textfield-icon-spacing-inline-end-quiet-valid:var(--spectrum-field-edge-to-validation-icon-quiet);--spectrum-textfield-font-family:var(--spectrum-sans-font-family-stack);--spectrum-textfield-font-weight:var(--spectrum-regular-font-weight);--spectrum-textfield-character-count-font-family:var(--spectrum-sans-font-family-stack);--spectrum-textfield-character-count-font-weight:var(--spectrum-regular-font-weight);--spectrum-textfield-character-count-spacing-inline:var(--spectrum-spacing-200);--spectrum-textfield-character-count-spacing-inline-side:var(--spectrum-side-label-character-count-to-field);--spectrum-textfield-focus-indicator-width:var(--spectrum-focus-indicator-thickness);--spectrum-textfield-focus-indicator-gap:var(--spectrum-focus-indicator-gap);--spectrum-textfield-text-color-default:var(--spectrum-neutral-content-color-default);--spectrum-textfield-text-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-textfield-text-color-focus:var(--spectrum-neutral-content-color-focus);--spectrum-textfield-text-color-focus-hover:var(--spectrum-neutral-content-color-focus-hover);--spectrum-textfield-text-color-keyboard-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-textfield-text-color-readonly:var(--spectrum-neutral-content-color-default);--spectrum-textfield-text-color-disabled:var(--spectrum-disabled-content-color);--spectrum-textfield-border-color-invalid-default:var(--spectrum-negative-border-color-default);--spectrum-textfield-border-color-invalid-hover:var(--spectrum-negative-border-color-hover);--spectrum-textfield-border-color-invalid-focus:var(--spectrum-negative-border-color-focus);--spectrum-textfield-border-color-invalid-focus-hover:var(--spectrum-negative-border-color-focus-hover);--spectrum-textfield-border-color-invalid-keyboard-focus:var(--spectrum-negative-border-color-key-focus);--spectrum-textfield-icon-color-invalid:var(--spectrum-negative-visual-color);--spectrum-textfield-text-color-invalid:var(--spectrum-neutral-content-color-default);--spectrum-textfield-text-color-valid:var(--spectrum-neutral-content-color-default);--spectrum-textfield-icon-color-valid:var(--spectrum-positive-visual-color);--spectrum-textfield-focus-indicator-color:var(--spectrum-focus-indicator-color);--spectrum-text-area-min-inline-size:var(--spectrum-text-area-minimum-width);--spectrum-text-area-min-block-size:var(--spectrum-text-area-minimum-height);--spectrum-textfield-height:var(--spectrum-component-height-100);--spectrum-textfield-label-spacing-block-quiet:var(--spectrum-field-label-to-component-quiet-medium);--spectrum-textfield-label-spacing-inline-side-label:var(--spectrum-spacing-200);--spectrum-textfield-placeholder-font-size:var(--spectrum-font-size-100);--spectrum-textfield-spacing-inline:var(--spectrum-component-edge-to-text-100);--spectrum-textfield-icon-size-invalid:var(--spectrum-workflow-icon-size-100);--spectrum-textfield-icon-size-valid:var(--spectrum-checkmark-icon-size-100);--spectrum-textfield-icon-spacing-inline-end-invalid:var(--spectrum-field-edge-to-alert-icon-medium);--spectrum-textfield-icon-spacing-inline-end-valid:var(--spectrum-field-edge-to-validation-icon-medium);--spectrum-textfield-icon-spacing-block-valid:var(--spectrum-field-top-to-validation-icon-medium);--spectrum-textfield-icon-spacing-inline-start-invalid:var(--spectrum-field-text-to-alert-icon-medium);--spectrum-textfield-icon-spacing-inline-start-valid:var(--spectrum-field-text-to-validation-icon-medium);--spectrum-textfield-character-count-font-size:var(--spectrum-font-size-75);--spectrum-textfield-character-count-spacing-block:var(--spectrum-component-bottom-to-text-75);--spectrum-textfield-character-count-spacing-block-quiet:var(--spectrum-character-count-to-field-quiet-medium);--spectrum-textfield-character-count-spacing-block-side:var(--spectrum-side-label-character-count-top-margin-medium);--spectrum-text-area-min-block-size-quiet:var(--spectrum-component-height-100)}:host([size=s]) #textfield{--spectrum-textfield-height:var(--spectrum-component-height-75);--spectrum-textfield-label-spacing-block-quiet:var(--spectrum-field-label-to-component-quiet-small);--spectrum-textfield-label-spacing-inline-side-label:var(--spectrum-spacing-100);--spectrum-textfield-placeholder-font-size:var(--spectrum-font-size-75);--spectrum-textfield-spacing-inline:var(--spectrum-component-edge-to-text-75);--spectrum-textfield-icon-size-invalid:var(--spectrum-workflow-icon-size-75);--spectrum-textfield-icon-size-valid:var(--spectrum-checkmark-icon-size-75);--spectrum-textfield-icon-spacing-inline-end-invalid:var(--spectrum-field-edge-to-alert-icon-small);--spectrum-textfield-icon-spacing-inline-end-valid:var(--spectrum-field-edge-to-validation-icon-small);--spectrum-textfield-icon-spacing-block-valid:var(--spectrum-field-top-to-validation-icon-small);--spectrum-textfield-icon-spacing-inline-start-invalid:var(--spectrum-field-text-to-alert-icon-small);--spectrum-textfield-icon-spacing-inline-start-valid:var(--spectrum-field-text-to-validation-icon-small);--spectrum-textfield-character-count-font-size:var(--spectrum-font-size-75);--spectrum-textfield-character-count-spacing-block:var(--spectrum-component-bottom-to-text-75);--spectrum-textfield-character-count-spacing-block-quiet:var(--spectrum-character-count-to-field-quiet-small);--spectrum-textfield-character-count-spacing-block-side:var(--spectrum-side-label-character-count-top-margin-small);--spectrum-text-area-min-block-size-quiet:var(--spectrum-component-height-75)}:host([size=l]) #textfield{--spectrum-textfield-height:var(--spectrum-component-height-200);--spectrum-textfield-label-spacing-block-quiet:var(--spectrum-field-label-to-component-quiet-large);--spectrum-textfield-label-spacing-inline-side-label:var(--spectrum-spacing-200);--spectrum-textfield-placeholder-font-size:var(--spectrum-font-size-200);--spectrum-textfield-spacing-inline:var(--spectrum-component-edge-to-text-200);--spectrum-textfield-icon-size-invalid:var(--spectrum-workflow-icon-size-200);--spectrum-textfield-icon-size-valid:var(--spectrum-checkmark-icon-size-200);--spectrum-textfield-icon-spacing-inline-end-invalid:var(--spectrum-field-edge-to-alert-icon-large);--spectrum-textfield-icon-spacing-inline-end-valid:var(--spectrum-field-edge-to-validation-icon-large);--spectrum-textfield-icon-spacing-block-valid:var(--spectrum-field-top-to-validation-icon-large);--spectrum-textfield-icon-spacing-inline-start-invalid:var(--spectrum-field-text-to-alert-icon-large);--spectrum-textfield-icon-spacing-inline-start-valid:var(--spectrum-field-text-to-validation-icon-large);--spectrum-textfield-character-count-font-size:var(--spectrum-font-size-100);--spectrum-textfield-character-count-spacing-block:var(--spectrum-component-bottom-to-text-100);--spectrum-textfield-character-count-spacing-block-quiet:var(--spectrum-character-count-to-field-quiet-large);--spectrum-textfield-character-count-spacing-block-side:var(--spectrum-side-label-character-count-top-margin-large);--spectrum-text-area-min-block-size-quiet:var(--spectrum-component-height-200)}:host([size=xl]) #textfield{--spectrum-textfield-height:var(--spectrum-component-height-300);--spectrum-textfield-label-spacing-block-quiet:var(--spectrum-field-label-to-component-quiet-extra-large);--spectrum-textfield-label-spacing-inline-side-label:var(--spectrum-spacing-200);--spectrum-textfield-placeholder-font-size:var(--spectrum-font-size-300);--spectrum-textfield-spacing-inline:var(--spectrum-component-edge-to-text-200);--spectrum-textfield-icon-size-invalid:var(--spectrum-workflow-icon-size-300);--spectrum-textfield-icon-size-valid:var(--spectrum-checkmark-icon-size-300);--spectrum-textfield-icon-spacing-inline-end-invalid:var(--spectrum-field-edge-to-alert-icon-extra-large);--spectrum-textfield-icon-spacing-inline-end-valid:var(--spectrum-field-edge-to-validation-icon-extra-large);--spectrum-textfield-icon-spacing-block-valid:var(--spectrum-field-top-to-validation-icon-extra-large);--spectrum-textfield-icon-spacing-inline-start-invalid:var(--spectrum-field-text-to-alert-icon-extra-large);--spectrum-textfield-icon-spacing-inline-start-valid:var(--spectrum-field-text-to-validation-icon-extra-large);--spectrum-textfield-character-count-font-size:var(--spectrum-font-size-200);--spectrum-textfield-character-count-spacing-block:var(--spectrum-component-bottom-to-text-200);--spectrum-textfield-character-count-spacing-block-quiet:var(--spectrum-character-count-to-field-quiet-extra-large);--spectrum-textfield-character-count-spacing-block-side:var(--spectrum-side-label-character-count-top-margin-extra-large);--spectrum-text-area-min-block-size-quiet:var(--spectrum-component-height-300)}#textfield{text-overflow:ellipsis;inline-size:var(--mod-textfield-width,var(--spectrum-textfield-width));grid-template-rows:auto auto auto;grid-template-columns:auto auto;margin:0;display:inline-grid;position:relative;overflow:visible}:host([invalid]) #textfield .icon,:host([valid]) #textfield .icon{pointer-events:all;grid-area:2/2;margin-inline-start:auto;position:absolute;inset-block-start:0}#textfield.spectrum-Textfield--sideLabel .icon{grid-area:1/2/span 1/span 1}:host([valid]) #textfield .icon{color:var(--mod-textfield-icon-color-valid,var(--spectrum-textfield-icon-color-valid));inset-block-start:var(--mod-textfield-icon-spacing-block-valid,var(--spectrum-textfield-icon-spacing-block-valid));inset-block-end:var(--mod-textfield-icon-spacing-block-valid,var(--spectrum-textfield-icon-spacing-block-valid));inset-inline-end:var(--mod-textfield-icon-spacing-inline-end-valid,var(--spectrum-textfield-icon-spacing-inline-end-valid))}:host([invalid]) #textfield .icon{block-size:var(--mod-textfield-icon-size-invalid,var(--spectrum-textfield-icon-size-invalid));inline-size:var(--mod-textfield-icon-size-invalid,var(--spectrum-textfield-icon-size-invalid));color:var(--mod-textfield-icon-color-invalid,var(--spectrum-textfield-icon-color-invalid));inset-block-start:var(--mod-textfield-icon-spacing-block-invalid,var(--spectrum-textfield-icon-spacing-block-invalid));inset-block-end:var(--mod-textfield-icon-spacing-block-invalid,var(--spectrum-textfield-icon-spacing-block-invalid));inset-inline-end:var(--mod-textfield-icon-spacing-inline-end-invalid,var(--spectrum-textfield-icon-spacing-inline-end-invalid))}:host([disabled]) #textfield .icon,:host([readonly]) #textfield .icon{color:#0000}:host([quiet]) .icon{padding-inline-end:0}:host([quiet][valid]) .icon{inset-inline-end:var(--mod-textfield-icon-spacing-inline-end-quiet-valid,var(--spectrum-textfield-icon-spacing-inline-end-quiet-valid))}:host([quiet][invalid]) .icon{inset-inline-end:var(--mod-textfield-icon-spacing-inline-end-quiet-invalid,var(--spectrum-textfield-icon-spacing-inline-end-quiet-invalid))}#textfield .spectrum-FieldLabel{grid-area:1/1/auto/span 1;margin-block-end:var(--mod-textfield-label-spacing-block,var(--spectrum-textfield-label-spacing-block))}:host([quiet]) .spectrum-FieldLabel{margin-block-end:var(--mod-textfield-label-spacing-block-quiet,var(--spectrum-textfield-label-spacing-block-quiet))}:host([disabled]) #textfield .spectrum-FieldLabel{color:var(--spectrum-textfield-text-color-disabled)}#textfield .spectrum-HelpText{grid-area:3/1/auto/span 2;margin-block-start:var(--mod-textfield-helptext-spacing-block,var(--spectrum-textfield-helptext-spacing-block))}.spectrum-Textfield-characterCount{inline-size:auto;font-size:var(--mod-textfield-character-count-font-size,var(--spectrum-textfield-character-count-font-size));font-family:var(--mod-textfield-character-count-font-family,var(--spectrum-textfield-character-count-font-family));font-weight:var(--mod-textfield-character-count-font-weight,var(--spectrum-textfield-character-count-font-weight));grid-area:1/2/auto/span 1;justify-content:flex-end;align-items:flex-end;margin-block-end:var(--mod-textfield-character-count-spacing-block,var(--spectrum-textfield-character-count-spacing-block));margin-inline-start:var(--mod-textfield-character-count-spacing-inline,var(--spectrum-textfield-character-count-spacing-inline));margin-inline-end:0;padding-inline-end:calc(var(--mod-textfield-corner-radius,var(--spectrum-textfield-corner-radius))/2);display:inline-flex}:host([quiet]) .spectrum-Textfield-characterCount{margin-block-end:var(--mod-textfield-character-count-spacing-block-quiet,var(--spectrum-textfield-character-count-spacing-block-quiet))}.input{line-height:var(--spectrum-textfield-input-line-height);box-sizing:border-box;inline-size:100%;min-inline-size:var(--mod-textfield-min-width,var(--spectrum-textfield-min-width));block-size:var(--mod-textfield-height,var(--spectrum-textfield-height));padding-block-start:calc(var(--mod-textfield-spacing-block-start,var(--spectrum-textfield-spacing-block-start)) - var(--mod-textfield-border-width,var(--spectrum-textfield-border-width)));padding-block-end:calc(var(--mod-textfield-spacing-block-end,var(--spectrum-textfield-spacing-block-end)) - var(--mod-textfield-border-width,var(--spectrum-textfield-border-width)));padding-inline:calc(var(--mod-textfield-spacing-inline,var(--spectrum-textfield-spacing-inline)) - var(--mod-textfield-border-width,var(--spectrum-textfield-border-width)));vertical-align:top;background-color:var(--mod-textfield-background-color,var(--spectrum-textfield-background-color));border-width:var(--mod-textfield-border-width,var(--spectrum-textfield-border-width));border-style:solid;border-color:var(--highcontrast-textfield-border-color,var(--mod-textfield-border-color,var(--spectrum-textfield-border-color)));border-radius:var(--mod-textfield-corner-radius,var(--spectrum-textfield-corner-radius));transition:border-color var(--mod-texfield-animation-duration,var(--spectrum-texfield-animation-duration))ease-in-out;font-size:var(--mod-textfield-placeholder-font-size,var(--spectrum-textfield-placeholder-font-size));font-family:var(--mod-textfield-font-family,var(--spectrum-textfield-font-family));font-weight:var(--mod-textfield-font-weight,var(--spectrum-textfield-font-weight));color:var(--highcontrast-textfield-text-color-default,var(--mod-textfield-text-color-default,var(--spectrum-textfield-text-color-default)));text-overflow:ellipsis;appearance:none;outline:none;grid-area:2/1/auto/span 2;margin:0}:host([type=number]) .input{appearance:textfield}:host([type=number]) .input::-webkit-inner-spin-button,:host([type=number]) .input::-webkit-outer-spin-button{appearance:none;margin:0}.input:-moz-ui-invalid{box-shadow:none}.input::placeholder{opacity:1;font-size:var(--mod-textfield-placeholder-font-size,var(--spectrum-textfield-placeholder-font-size));font-family:var(--mod-textfield-font-family,var(--spectrum-textfield-font-family));font-weight:var(--mod-textfield-font-weight,var(--spectrum-textfield-font-weight));color:var(--highcontrast-textfield-text-color-default,var(--mod-textfield-text-color-default,var(--spectrum-textfield-text-color-default)));transition:color var(--mod-texfield-animation-duration,var(--spectrum-texfield-animation-duration))ease-in-out}.input:lang(ja)::placeholder,.input:lang(ko)::placeholder,.input:lang(zh)::placeholder{font-style:normal}:host([focused]) .input,.input:focus{border-color:var(--highcontrast-textfield-border-color-focus,var(--mod-textfield-border-color-focus,var(--spectrum-textfield-border-color-focus)))}:host([focused]) .input,:host([focused]) .input::placeholder,.input:focus,.input:focus::placeholder{color:var(--mod-textfield-text-color-focus,var(--spectrum-textfield-text-color-focus))}:host([focused]) .input{border-color:var(--highcontrast-textfield-border-color-keyboard-focus,var(--mod-textfield-border-color-keyboard-focus,var(--spectrum-textfield-border-color-keyboard-focus)));outline:var(--mod-textfield-focus-indicator-width,var(--spectrum-textfield-focus-indicator-width))solid;outline-color:var(--highcontrast-textfield-focus-indicator-color,var(--mod-textfield-focus-indicator-color,var(--spectrum-textfield-focus-indicator-color)));outline-offset:var(--mod-textfield-focus-indicator-gap,var(--spectrum-textfield-focus-indicator-gap))}:host([focused]) .input,:host([focused]) .input::placeholder{color:var(--highcontrast-textfield-text-color-keyboard-focus,var(--mod-textfield-text-color-keyboard-focus,var(--spectrum-textfield-text-color-keyboard-focus)))}:host([valid]) .input{color:var(--highcontrast-textfield-text-color-valid,var(--mod-textfield-text-color-valid,var(--spectrum-textfield-text-color-valid)));padding-inline-end:calc(var(--mod-textfield-icon-spacing-inline-start-valid,var(--spectrum-textfield-icon-spacing-inline-start-valid)) + var(--mod-textfield-icon-size-valid,var(--spectrum-textfield-icon-size-valid)) + var(--mod-textfield-icon-spacing-inline-end-valid,var(--spectrum-textfield-icon-spacing-inline-end-valid)) - var(--mod-textfield-border-width,var(--spectrum-textfield-border-width)))}:host([invalid]) .input{color:var(--highcontrast-textfield-text-color-invalid,var(--mod-textfield-text-color-invalid,var(--spectrum-textfield-text-color-invalid)));border-color:var(--highcontrast-textfield-border-color-invalid-default,var(--mod-textfield-border-color-invalid-default,var(--spectrum-textfield-border-color-invalid-default)));padding-inline-end:calc(var(--mod-textfield-icon-spacing-inline-start-invalid,var(--spectrum-textfield-icon-spacing-inline-start-invalid)) + var(--mod-textfield-icon-size-invalid,var(--spectrum-textfield-icon-size-invalid)) + var(--mod-textfield-icon-spacing-inline-end-invalid,var(--spectrum-textfield-icon-spacing-inline-end-invalid)) - var(--mod-textfield-border-width,var(--spectrum-textfield-border-width)))}:host([invalid]) .input:focus,:host([invalid][focused]) .input,:host([invalid]:focus) .input{border-color:var(--highcontrast-textfield-border-color-invalid-focus,var(--mod-textfield-border-color-invalid-focus,var(--spectrum-textfield-border-color-invalid-focus)))}:host([invalid]) .input:focus-visible,:host([invalid][focused]) .input{border-color:var(--highcontrast-textfield-border-color-invalid-keyboard-focus,var(--mod-textfield-border-color-invalid-keyboard-focus,var(--spectrum-textfield-border-color-invalid-keyboard-focus)))}.input:disabled,:host([disabled]) #textfield .input{background-color:var(--mod-textfield-background-color-disabled,var(--spectrum-textfield-background-color-disabled));border-color:var(--mod-textfield-border-color-disabled,var(--spectrum-textfield-border-color-disabled));resize:none;opacity:1}.input:disabled,.input:disabled::placeholder,:host([disabled]) #textfield .input,:host([disabled]) #textfield .input::placeholder{color:var(--highcontrast-textfield-text-color-disabled,var(--mod-textfield-text-color-disabled,var(--spectrum-textfield-text-color-disabled)))}:host([quiet]) .input{padding-block-start:var(--mod-textfield-spacing-block-start,var(--spectrum-textfield-spacing-block-start));padding-inline:var(--mod-textfield-spacing-inline-quiet,var(--spectrum-textfield-spacing-inline-quiet));background-color:initial;resize:none;border-block-start-width:0;border-inline-width:0;border-radius:0;outline:none;margin-block-end:var(--mod-textfield-spacing-block-quiet,var(--spectrum-textfield-spacing-block-quiet));overflow-y:hidden}:host([quiet][disabled]) .input,.input:disabled{background-color:initial;border-color:var(--mod-textfield-border-color-disabled,var(--spectrum-textfield-border-color-disabled))}:host([quiet][disabled]) .input,:host([quiet][disabled]) .input::placeholder,.input:disabled,.input:disabled::placeholder{color:var(--highcontrast-textfield-text-color-disabled,var(--mod-textfield-text-color-disabled,var(--spectrum-textfield-text-color-disabled)))}.input:read-only,:host([readonly]) #textfield .input{background-color:initial;color:var(--highcontrast-textfield-text-color-readonly,var(--mod-textfield-text-color-readonly,var(--spectrum-textfield-text-color-readonly)));border-color:#0000;outline:none}.input:read-only::placeholder,:host([readonly]) #textfield .input::placeholder{color:var(--highcontrast-textfield-text-color-readonly,var(--mod-textfield-text-color-readonly,var(--spectrum-textfield-text-color-readonly)));background-color:initial}@media (hover:hover){.input:hover,#textfield:hover .input{border-color:var(--highcontrast-textfield-border-color-hover,var(--mod-textfield-border-color-hover,var(--spectrum-textfield-border-color-hover)))}.input:hover,.input:hover::placeholder,#textfield:hover .input,#textfield:hover .input::placeholder{color:var(--highcontrast-textfield-text-color-hover,var(--mod-textfield-text-color-hover,var(--spectrum-textfield-text-color-hover)))}:host([focused]) .input:hover,.input:focus:hover{border-color:var(--mod-textfield-border-color-focus-hover,var(--spectrum-textfield-border-color-focus-hover))}:host([focused]) .input:hover,:host([focused]) .input:hover::placeholder,.input:focus:hover,.input:focus:hover::placeholder{color:var(--mod-textfield-text-color-focus-hover,var(--spectrum-textfield-text-color-focus-hover))}:host([invalid]) .input:hover:not(.is-disabled),:host([invalid]:hover):not(.is-disabled) .input{border-color:var(--highcontrast-textfield-border-color-invalid-hover,var(--mod-textfield-border-color-invalid-hover,var(--spectrum-textfield-border-color-invalid-hover)))}:host([invalid]) .input:focus:hover,:host([invalid][focused]) .input:hover,:host([invalid]:focus) .input:hover{border-color:var(--mod-textfield-border-color-invalid-focus-hover,var(--spectrum-textfield-border-color-invalid-focus-hover))}:host([disabled]) #textfield:hover .input{background-color:var(--mod-textfield-background-color-disabled,var(--spectrum-textfield-background-color-disabled));border-color:var(--mod-textfield-border-color-disabled,var(--spectrum-textfield-border-color-disabled));resize:none;opacity:1}:host([quiet][disabled]:hover) .input,:host([disabled]) #textfield:hover .input,:host([disabled]) #textfield:hover .input::placeholder{color:var(--highcontrast-textfield-text-color-disabled,var(--mod-textfield-text-color-disabled,var(--spectrum-textfield-text-color-disabled)))}:host([quiet][disabled]:hover) .input{background-color:initial;border-color:var(--mod-textfield-border-color-disabled,var(--spectrum-textfield-border-color-disabled))}:host([quiet][disabled]:hover) .input::placeholder{color:var(--highcontrast-textfield-text-color-disabled,var(--mod-textfield-text-color-disabled,var(--spectrum-textfield-text-color-disabled)))}:host([readonly]) #textfield:hover .input{border-color:#0000;outline:none}:host([readonly]) #textfield:hover .input,:host([readonly]) #textfield:hover .input::placeholder{background-color:initial;color:var(--highcontrast-textfield-text-color-readonly,var(--mod-textfield-text-color-readonly,var(--spectrum-textfield-text-color-readonly)))}}.spectrum-Textfield--sideLabel{grid-template-rows:auto auto;grid-template-columns:auto auto auto}.spectrum-Textfield--sideLabel:after{grid-area:1/2/span 1/span 1}.spectrum-Textfield--sideLabel .spectrum-FieldLabel{grid-area:1/1/span 2/span 1;margin-inline-end:var(--mod-textfield-label-spacing-inline-side-label,var(--spectrum-textfield-label-spacing-inline-side-label))}.spectrum-Textfield--sideLabel .spectrum-Textfield-characterCount{grid-area:1/3/auto/span 1;align-items:flex-start;margin-block-start:var(--mod-textfield-character-count-spacing-block-side,var(--spectrum-textfield-character-count-spacing-block-side));margin-inline-start:var(--mod-textfield-character-count-spacing-inline-side,var(--spectrum-textfield-character-count-spacing-inline-side))}.spectrum-Textfield--sideLabel .spectrum-HelpText{grid-area:2/2/auto/span 1}.spectrum-Textfield--sideLabel .input,.spectrum-Textfield--sideLabel .icon{grid-area:1/2/span 1/span 1}:host([multiline]){--spectrum-textfield-input-line-height:normal}:host([multiline]) .input{min-inline-size:var(--mod-text-area-min-inline-size,var(--spectrum-text-area-min-inline-size));min-block-size:var(--mod-text-area-min-block-size,var(--spectrum-text-area-min-block-size));resize:inherit}:host([multiline][grows]) .input{grid-row:2}:host([multiline][grows]) .spectrum-Textfield--sideLabel .input{grid-row:1}:host([multiline][quiet]) .input{min-block-size:var(--mod-text-area-min-block-size-quiet,var(--spectrum-text-area-min-block-size-quiet));resize:none;overflow-y:hidden}:host([quiet]) #textfield:after{content:"";pointer-events:none;inline-size:100%;block-size:var(--mod-textfield-focus-indicator-width,var(--spectrum-textfield-focus-indicator-width));position:absolute;inset-block-end:calc((var(--mod-textfield-focus-indicator-gap,var(--spectrum-textfield-focus-indicator-gap)) + var(--mod-textfield-focus-indicator-width,var(--spectrum-textfield-focus-indicator-width)))*-1);inset-inline-start:0}:host([quiet][focused]) #textfield:after{background-color:var(--highcontrast-textfield-focus-indicator-color,var(--mod-textfield-focus-indicator-color,var(--spectrum-textfield-focus-indicator-color)))}:host([quiet][invalid]) .input{padding-inline-end:calc(var(--mod-textfield-icon-spacing-inline-start-invalid,var(--spectrum-textfield-icon-spacing-inline-start-invalid)) + var(--mod-textfield-icon-size-invalid,var(--spectrum-textfield-icon-size-invalid)))}:host([quiet][valid]) .input{padding-inline-end:calc(var(--mod-textfield-icon-spacing-inline-start-valid,var(--spectrum-textfield-icon-spacing-inline-start-valid)) + var(--mod-textfield-icon-size-valid,var(--spectrum-textfield-icon-size-valid)))}@media (forced-colors:active){:host{--highcontrast-textfield-border-color:CanvasText;--highcontrast-textfield-border-color-hover:Highlight;--highcontrast-textfield-border-color-focus:Highlight;--highcontrast-textfield-border-color-keyboard-focus:CanvasText;--highcontrast-textfield-focus-indicator-color:Highlight;--highcontrast-textfield-border-color-invalid-default:Highlight;--highcontrast-textfield-border-color-invalid-hover:Highlight;--highcontrast-textfield-border-color-invalid-focus:Highlight;--highcontrast-textfield-border-color-invalid-keyboard-focus:Highlight;--highcontrast-textfield-text-color-valid:CanvasText;--highcontrast-textfield-text-color-invalid:CanvasText}#textfield .input{--highcontrast-textfield-text-color-default:CanvasText;--highcontrast-textfield-text-color-hover:CanvasText;--highcontrast-textfield-text-color-keyboard-focus:CanvasText;--highcontrast-textfield-text-color-disabled:GrayText;--highcontrast-textfield-text-color-readonly:CanvasText}#textfield .input::placeholder{--highcontrast-textfield-text-color-default:GrayText;--highcontrast-textfield-text-color-hover:GrayText;--highcontrast-textfield-text-color-keyboard-focus:GrayText;--highcontrast-textfield-text-color-disabled:GrayText;--highcontrast-textfield-text-color-readonly:CanvasText}}:host{--spectrum-textfield-background-color:var(--system-textfield-background-color);--spectrum-textfield-background-color-disabled:var(--system-textfield-background-color-disabled);--spectrum-textfield-border-color:var(--system-textfield-border-color);--spectrum-textfield-border-color-hover:var(--system-textfield-border-color-hover);--spectrum-textfield-border-color-focus:var(--system-textfield-border-color-focus);--spectrum-textfield-border-color-focus-hover:var(--system-textfield-border-color-focus-hover);--spectrum-textfield-border-color-keyboard-focus:var(--system-textfield-border-color-keyboard-focus);--spectrum-textfield-border-color-disabled:var(--system-textfield-border-color-disabled);--spectrum-textfield-border-width:var(--system-textfield-border-width);--spectrum-textfield-spacing-block-start:var(--system-textfield-spacing-block-start);--spectrum-textfield-spacing-block-end:var(--system-textfield-spacing-block-end);--spectrum-textfield-corner-radius:var(--system-textfield-corner-radius);--spectrum-textfield-icon-spacing-block-invalid:var(--system-textfield-icon-spacing-block-invalid)}:host([size=s]) #textfield#textfield{--spectrum-textfield-spacing-block-start:var(--system-textfield-spacing-block-start-small);--spectrum-textfield-spacing-block-end:var(--system-textfield-spacing-block-end-small);--spectrum-textfield-icon-spacing-block-invalid:var(--system-textfield-size-s-icon-spacing-block-invalid);--spectrum-textfield-corner-radius:var(--system-textfield-corner-radius-small)}:host([size=l]) #textfield#textfield{--spectrum-textfield-spacing-block-start:var(--system-textfield-spacing-block-start-large);--spectrum-textfield-spacing-block-end:var(--system-textfield-spacing-block-end-large);--spectrum-textfield-icon-spacing-block-invalid:var(--system-textfield-size-l-icon-spacing-block-invalid);--spectrum-textfield-corner-radius:var(--system-textfield-corner-radius-large)}:host([size=xl]) #textfield#textfield{--spectrum-textfield-spacing-block-start:var(--system-textfield-spacing-block-start-extra-large);--spectrum-textfield-spacing-block-end:var(--system-textfield-spacing-block-end-extra-large);--spectrum-textfield-icon-spacing-block-invalid:var(--system-textfield-size-xl-icon-spacing-block-invalid);--spectrum-textfield-corner-radius:var(--system-textfield-corner-radius-extra-large)}:host([quiet]) #textfield{--spectrum-textfield-border-color-disabled:var(--system-textfield-quiet-border-color-disabled)}:host{inline-size:var(--mod-textfield-width,var(--spectrum-textfield-width));flex-direction:column;display:inline-flex}:host([multiline]){resize:both}:host([multiline][readonly]){resize:none}:host([disabled]:focus-visible){outline:none}#textfield{inline-size:100%}#textfield,textarea{resize:inherit}.input{min-inline-size:var(--spectrum-textfield-min-width)}:host([focused]) .input{caret-color:var(--swc-test-caret-color);forced-color-adjust:var(--swc-test-forced-color-adjust)}:host([focused]) #textfield:hover .input,:host([focused]) .input:hover{border-color:var(--mod-textfield-border-color-focus-hover,var(--spectrum-textfield-border-color-focus-hover))}#sizer{overflow-wrap:break-word;opacity:0;white-space:pre-line;block-size:auto}.icon,.icon-workflow{pointer-events:none}:host([multiline]) #textfield{--spectrum-textfield-input-line-height:normal;display:inline-grid}:host([multiline]) textarea{transition:box-shadow var(--spectrum-animation-duration-100,.13s)ease-in-out,border-color var(--spectrum-animation-duration-100,.13s)ease-in-out}:host([multiline]:not([quiet])) #textfield:after{box-shadow:none}:host([multiline][rows]) .input{resize:none;block-size:auto}:host([multiline][rows="1"]) .input{min-block-size:auto}:host([disabled][quiet]) #textfield .input,:host([disabled][quiet]) #textfield:hover .input,:host([quiet]) .input :disabled{border-color:var(--mod-textfield-border-color-disabled,var(--spectrum-textfield-border-color-disabled));color:var(--highcontrast-textfield-text-color-disabled,var(--mod-textfield-text-color-disabled,var(--spectrum-textfield-text-color-disabled)));background-color:#0000}:host([disabled]) #textfield .icon.icon-search,:host([readonly]) #textfield .icon.icon-search{color:var(--highcontrast-textfield-text-color-disabled,var(--mod-textfield-text-color-disabled,var(--spectrum-textfield-text-color-disabled)))}:host([focused]) #textfield .icon.icon-search{--spectrum-search-color:var(--highcontrast-search-color-focus,var(--mod-search-color-focus,var(--spectrum-search-color-focus)))}:host([multiline][grows]:not([quiet])) #textfield:after{grid-area:unset;min-block-size:calc(var(--mod-text-area-min-block-size,var(--spectrum-text-area-min-block-size)) + var(--mod-textfield-focus-indicator-gap,var(--spectrum-textfield-focus-indicator-gap))*2)}:host([multiline][grows]:not([rows])) .input:not(#sizer){resize:none;height:100%;position:absolute;top:0;left:0;overflow:hidden}
        `, Fc = st`
    .spectrum-UIIcon-Checkmark50{--spectrum-icon-size:var(--spectrum-checkmark-icon-size-50)}.spectrum-UIIcon-Checkmark75{--spectrum-icon-size:var(--spectrum-checkmark-icon-size-75)}.spectrum-UIIcon-Checkmark100{--spectrum-icon-size:var(--spectrum-checkmark-icon-size-100)}.spectrum-UIIcon-Checkmark200{--spectrum-icon-size:var(--spectrum-checkmark-icon-size-200)}.spectrum-UIIcon-Checkmark300{--spectrum-icon-size:var(--spectrum-checkmark-icon-size-300)}.spectrum-UIIcon-Checkmark400{--spectrum-icon-size:var(--spectrum-checkmark-icon-size-400)}.spectrum-UIIcon-Checkmark500{--spectrum-icon-size:var(--spectrum-checkmark-icon-size-500)}.spectrum-UIIcon-Checkmark600{--spectrum-icon-size:var(--spectrum-checkmark-icon-size-600)}
`;
var fm = Object.defineProperty, vm = Object.getOwnPropertyDescriptor, tt = (e, t, r, o) => {
  for (var s = o > 1 ? void 0 : o ? vm(t, r) : t, a = e.length - 1, c; a >= 0; a--) (c = e[a]) && (s = (o ? c(t, r, s) : c(s)) || s);
  return o && s && fm(t, r, s), s;
};
const ym = ["text", "url", "tel", "email", "password"];
class et extends cm(ge(pr, { noDefaultSize: !0 })) {
  constructor() {
    super(...arguments), this.allowedKeys = "", this.focused = !1, this.invalid = !1, this.label = "", this.placeholder = "", this._type = "text", this.grows = !1, this.maxlength = -1, this.minlength = -1, this.multiline = !1, this.readonly = !1, this.rows = -1, this.valid = !1, this._value = "", this.quiet = !1, this.required = !1;
  }
  static get styles() {
    return [hm, Fc];
  }
  set type(t) {
    const r = this._type;
    this._type = t, this.requestUpdate("type", r);
  }
  get type() {
    var t;
    return (t = ym.find((r) => r === this._type)) != null ? t : "text";
  }
  set value(t) {
    if (t === this.value) return;
    const r = this._value;
    this._value = t, this.requestUpdate("value", r);
  }
  get value() {
    return this._value;
  }
  get focusElement() {
    return this.inputElement;
  }
  setSelectionRange(t, r, o = "none") {
    this.inputElement.setSelectionRange(t, r, o);
  }
  select() {
    this.inputElement.select();
  }
  handleInput(t) {
    if (this.allowedKeys && this.inputElement.value && !new RegExp(`^[${this.allowedKeys}]*$`, "u").test(this.inputElement.value)) {
      const r = this.inputElement.selectionStart - 1;
      this.inputElement.value = this.value.toString(), this.inputElement.setSelectionRange(r, r);
      return;
    }
    this.value = this.inputElement.value;
  }
  handleChange() {
    this.dispatchEvent(new Event("change", { bubbles: !0, composed: !0 }));
  }
  onFocus() {
    this.focused = !this.readonly && !0;
  }
  onBlur(t) {
    this.focused = !this.readonly && !1;
  }
  handleInputElementPointerdown() {
  }
  renderStateIcons() {
    return this.invalid ? C`
                <sp-icon-alert id="invalid" class="icon"></sp-icon-alert>
            ` : this.valid ? C`
                <sp-icon-checkmark100
                    id="valid"
                    class="icon spectrum-UIIcon-Checkmark100"
                ></sp-icon-checkmark100>
            ` : Z;
  }
  get displayValue() {
    return this.value.toString();
  }
  get renderMultiline() {
    return C`
            ${this.multiline && this.grows && this.rows === -1 ? C`
                      <div id="sizer" class="input" aria-hidden="true">${this.value}&#8203;
                      </div>
                  ` : Z}
            <!-- @ts-ignore -->
            <textarea
                name=${G(this.name || void 0)}
                aria-describedby=${this.helpTextId}
                aria-label=${this.label || this.appliedLabel || this.placeholder}
                aria-invalid=${G(this.invalid || void 0)}
                class="input"
                maxlength=${G(this.maxlength > -1 ? this.maxlength : void 0)}
                minlength=${G(this.minlength > -1 ? this.minlength : void 0)}
                title=${this.invalid ? "" : Z}
                pattern=${G(this.pattern)}
                placeholder=${this.placeholder}
                .value=${this.displayValue}
                @change=${this.handleChange}
                @input=${this.handleInput}
                @focus=${this.onFocus}
                @blur=${this.onBlur}
                ?disabled=${this.disabled}
                ?required=${this.required}
                ?readonly=${this.readonly}
                rows=${G(this.rows > -1 ? this.rows : void 0)}
                autocomplete=${G(this.autocomplete)}
            ></textarea>
        `;
  }
  get renderInput() {
    return C`
            <!-- @ts-ignore -->
            <input
                name=${G(this.name || void 0)}
                type=${this.type}
                aria-describedby=${this.helpTextId}
                aria-label=${this.label || this.appliedLabel || this.placeholder}
                aria-invalid=${G(this.invalid || void 0)}
                class="input"
                title=${this.invalid ? "" : Z}
                maxlength=${G(this.maxlength > -1 ? this.maxlength : void 0)}
                minlength=${G(this.minlength > -1 ? this.minlength : void 0)}
                pattern=${G(this.pattern)}
                placeholder=${this.placeholder}
                .value=${Pu(this.displayValue)}
                @change=${this.handleChange}
                @input=${this.handleInput}
                @pointerdown=${this.handleInputElementPointerdown}
                @focus=${this.onFocus}
                @blur=${this.onBlur}
                ?disabled=${this.disabled}
                ?required=${this.required}
                ?readonly=${this.readonly}
                autocomplete=${G(this.autocomplete)}
            />
        `;
  }
  renderField() {
    return C`
            ${this.renderStateIcons()}
            ${this.multiline ? this.renderMultiline : this.renderInput}
        `;
  }
  render() {
    return C`
            <div id="textfield">${this.renderField()}</div>
            ${this.renderHelpText(this.invalid)}
        `;
  }
  update(t) {
    (t.has("value") || t.has("required") && this.required) && this.updateComplete.then(() => {
      this.checkValidity();
    }), super.update(t);
  }
  checkValidity() {
    let t = this.inputElement.checkValidity();
    return (this.required || this.value && this.pattern) && ((this.disabled || this.multiline) && this.pattern && (t = new RegExp(`^${this.pattern}$`, "u").test(this.value.toString())), typeof this.minlength < "u" && (t = t && this.value.toString().length >= this.minlength), this.valid = t, this.invalid = !t), t;
  }
}
tt([Ko()], et.prototype, "appliedLabel", 2), tt([z({ attribute: "allowed-keys" })], et.prototype, "allowedKeys", 2), tt([z({ type: Boolean, reflect: !0 })], et.prototype, "focused", 2), tt([Hr(".input:not(#sizer)")], et.prototype, "inputElement", 2), tt([z({ type: Boolean, reflect: !0 })], et.prototype, "invalid", 2), tt([z()], et.prototype, "label", 2), tt([z({ type: String, reflect: !0 })], et.prototype, "name", 2), tt([z()], et.prototype, "placeholder", 2), tt([Ko()], et.prototype, "type", 1), tt([z({ attribute: "type", reflect: !0 })], et.prototype, "_type", 2), tt([z()], et.prototype, "pattern", 2), tt([z({ type: Boolean, reflect: !0 })], et.prototype, "grows", 2), tt([z({ type: Number })], et.prototype, "maxlength", 2), tt([z({ type: Number })], et.prototype, "minlength", 2), tt([z({ type: Boolean, reflect: !0 })], et.prototype, "multiline", 2), tt([z({ type: Boolean, reflect: !0 })], et.prototype, "readonly", 2), tt([z({ type: Number })], et.prototype, "rows", 2), tt([z({ type: Boolean, reflect: !0 })], et.prototype, "valid", 2), tt([z({ type: String })], et.prototype, "value", 1), tt([z({ type: Boolean, reflect: !0 })], et.prototype, "quiet", 2), tt([z({ type: Boolean, reflect: !0 })], et.prototype, "required", 2), tt([z({ type: String, reflect: !0 })], et.prototype, "autocomplete", 2);
class Vc extends et {
  constructor() {
    super(...arguments), this._value = "";
  }
  set value(t) {
    if (t === this.value) return;
    const r = this._value;
    this._value = t, this.requestUpdate("value", r);
  }
  get value() {
    return this._value;
  }
}
tt([z({ type: String })], Vc.prototype, "value", 1);
J("sp-textfield", Vc);
var km = Object.defineProperty, qr = (e, t, r, o) => {
  for (var s = void 0, a = e.length - 1, c; a >= 0; a--) (c = e[a]) && (s = c(t, r, s) || s);
  return s && km(t, r, s), s;
};
function xm(e) {
  class t extends e {
    constructor() {
      super(...arguments), this.checked = !1, this.readonly = !1;
    }
    handleChange() {
      if (this.readonly) {
        this.inputElement.checked = this.checked;
        return;
      }
      this.checked = this.inputElement.checked;
      const o = new CustomEvent("change", { bubbles: !0, cancelable: !0, composed: !0 });
      this.dispatchEvent(o) || (this.checked = !this.inputElement.checked, this.inputElement.checked = this.checked);
    }
    render() {
      return C`
                <input
                    id="input"
                    name=${G(this.name || void 0)}
                    type="checkbox"
                    .checked=${this.checked}
                    ?disabled=${this.readonly}
                    @change=${this.handleChange}
                />
            `;
    }
  }
  return qr([z({ type: Boolean, reflect: !0 })], t.prototype, "checked"), qr([z({ type: String, reflect: !0 })], t.prototype, "name"), qr([z({ type: Boolean, reflect: !0 })], t.prototype, "readonly"), qr([Hr("#input")], t.prototype, "inputElement"), t;
}
const wm = st`
    :host{--spectrum-checkbox-content-color-default:var(--spectrum-neutral-content-color-default);--spectrum-checkbox-content-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-checkbox-content-color-down:var(--spectrum-neutral-content-color-down);--spectrum-checkbox-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-checkbox-focus-indicator-color:var(--spectrum-focus-indicator-color);--spectrum-checkbox-content-color-disabled:var(--spectrum-disabled-content-color);--spectrum-checkbox-control-color-disabled:var(--spectrum-disabled-content-color);--spectrum-checkbox-invalid-color-default:var(--spectrum-negative-color-900);--spectrum-checkbox-invalid-color-hover:var(--spectrum-negative-color-1000);--spectrum-checkbox-invalid-color-down:var(--spectrum-negative-color-1100);--spectrum-checkbox-invalid-color-focus:var(--spectrum-negative-color-1000);--spectrum-checkbox-emphasized-color-default:var(--spectrum-accent-color-900);--spectrum-checkbox-emphasized-color-hover:var(--spectrum-accent-color-1000);--spectrum-checkbox-emphasized-color-down:var(--spectrum-accent-color-1100);--spectrum-checkbox-emphasized-color-focus:var(--spectrum-accent-color-1000);--spectrum-checkbox-control-selected-color-default:var(--spectrum-neutral-background-color-selected-default);--spectrum-checkbox-control-selected-color-hover:var(--spectrum-neutral-background-color-selected-hover);--spectrum-checkbox-control-selected-color-down:var(--spectrum-neutral-background-color-selected-down);--spectrum-checkbox-control-selected-color-focus:var(--spectrum-neutral-background-color-selected-key-focus);--spectrum-checkbox-line-height:var(--spectrum-line-height-100);--spectrum-checkbox-line-height-cjk:var(--spectrum-cjk-line-height-100);--spectrum-checkbox-focus-indicator-gap:var(--spectrum-focus-indicator-gap);--spectrum-checkbox-focus-indicator-thickness:var(--spectrum-focus-indicator-thickness);--spectrum-checkbox-border-width:var(--spectrum-border-width-200);--spectrum-checkbox-selected-border-width:calc(var(--spectrum-checkbox-control-size)/2);--spectrum-checkbox-animation-duration:var(--spectrum-animation-duration-100)}:host,:host{--spectrum-checkbox-font-size:var(--spectrum-font-size-100);--spectrum-checkbox-height:var(--spectrum-component-height-100);--spectrum-checkbox-control-size:var(--spectrum-checkbox-control-size-medium);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-100);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-100)}:host([size=s]){--spectrum-checkbox-font-size:var(--spectrum-font-size-75);--spectrum-checkbox-height:var(--spectrum-component-height-75);--spectrum-checkbox-control-size:var(--spectrum-checkbox-control-size-small);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-75)}:host([size=l]){--spectrum-checkbox-font-size:var(--spectrum-font-size-200);--spectrum-checkbox-height:var(--spectrum-component-height-200);--spectrum-checkbox-control-size:var(--spectrum-checkbox-control-size-large);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-200);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-200)}:host([size=xl]){--spectrum-checkbox-font-size:var(--spectrum-font-size-300);--spectrum-checkbox-height:var(--spectrum-component-height-300);--spectrum-checkbox-control-size:var(--spectrum-checkbox-control-size-extra-large);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-300);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-300)}:host{color:var(--highcontrast-checkbox-content-color-default,var(--mod-checkbox-content-color-default,var(--spectrum-checkbox-content-color-default)));min-block-size:var(--mod-checkbox-height,var(--spectrum-checkbox-height));vertical-align:top;align-items:flex-start;max-inline-size:100%;display:inline-flex;position:relative}:host(:is(:active,[active])) #box:before{border-color:var(--highcontrast-checkbox-highlight-color-down,var(--mod-checkbox-control-color-down,var(--spectrum-checkbox-control-color-down)))}:host(:is(:active,[active])) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-down,var(--mod-checkbox-control-selected-color-down,var(--spectrum-checkbox-control-selected-color-down)))}:host(:is(:active,[active])) #label{color:var(--highcontrast-checkbox-content-color-down,var(--mod-checkbox-content-color-down,var(--spectrum-checkbox-content-color-down)))}:host([invalid][invalid]) #box:before,:host([invalid][invalid]) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-invalid-color-default,var(--spectrum-checkbox-invalid-color-default)))}:host([invalid][invalid]) #input:focus-visible+#box:before,:host([invalid][invalid][indeterminate]) #input:focus-visible+#box:before{border-color:var(--highcontrast-checkbox-color-hover,var(--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)))}:host([readonly]) #input{cursor:default}:host([readonly]) #input:checked:disabled+#box:before,:host([readonly]) #input:disabled+#box:before{border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-control-selected-color-default,var(--spectrum-checkbox-control-selected-color-default)));background-color:var(--highcontrast-checkbox-background-color-default,var(--mod-checkbox-checkmark-color,var(--spectrum-checkbox-checkmark-color)))}:host([readonly]) #input:checked:disabled~#label,:host([readonly]) #input:disabled~#label{color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-content-color-default,var(--spectrum-checkbox-content-color-default)))}:host([indeterminate]) #box:before,:host([indeterminate]) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default,var(--mod-checkbox-control-selected-color-default,var(--spectrum-checkbox-control-selected-color-default)));border-width:var(--mod-checkbox-selected-border-width,var(--spectrum-checkbox-selected-border-width))}:host([indeterminate]) #box #checkmark,:host([indeterminate]) #input:checked+#box #checkmark{display:none}:host([indeterminate]) #box #partialCheckmark,:host([indeterminate]) #input:checked+#box #partialCheckmark{opacity:1;display:block;transform:scale(1)}:host([indeterminate]) #input:focus-visible+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-focus,var(--mod-checkbox-control-selected-color-focus,var(--spectrum-checkbox-control-selected-color-focus)))}:host([invalid][invalid][indeterminate]) #box:before,:host([invalid][invalid][indeterminate]) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-invalid-color-default,var(--spectrum-checkbox-invalid-color-default)));border-width:var(--mod-checkbox-selected-border-width,var(--spectrum-checkbox-selected-border-width))}:host([emphasized]) #input:checked+#box:before,:host([emphasized][indeterminate]) #box:before,:host([emphasized][indeterminate]) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default,var(--mod-checkbox-emphasized-color-default,var(--spectrum-checkbox-emphasized-color-default)))}:host([emphasized]) #input:focus-visible:checked+#box:before,:host([emphasized][indeterminate]) #input:focus-visible+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-focus,var(--mod-checkbox-emphasized-color-focus,var(--spectrum-checkbox-emphasized-color-focus)))}:host([emphasized][invalid][invalid]) #input:focus-visible:checked+#box:before{border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-invalid-color-focus,var(--spectrum-checkbox-invalid-color-focus)))}@media (hover:hover){:host(:hover) #box:before{border-color:var(--highcontrast-checkbox-highlight-color-hover,var(--mod-checkbox-control-color-hover,var(--spectrum-checkbox-control-color-hover)))}:host(:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-hover,var(--mod-checkbox-control-selected-color-hover,var(--spectrum-checkbox-control-selected-color-hover)))}:host(:hover) #label{color:var(--highcontrast-checkbox-content-color-hover,var(--mod-checkbox-content-color-hover,var(--spectrum-checkbox-content-color-hover)))}:host([invalid][invalid]:hover) #box:before,:host([invalid][invalid]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-hover,var(--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)))}:host([indeterminate]:hover) #box:before,:host([indeterminate]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-hover,var(--mod-checkbox-control-selected-color-hover,var(--spectrum-checkbox-control-selected-color-hover)))}:host([invalid][invalid][indeterminate]:hover) #box:before,:host([invalid][invalid][indeterminate]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)))}:host([invalid][invalid][indeterminate]:hover) #label{color:var(--highcontrast-checkbox-content-color-hover,var(--mod-checkbox-content-color-hover,var(--spectrum-checkbox-content-color-hover)))}:host([emphasized][invalid][invalid][indeterminate]:hover) #box:before,:host([emphasized][invalid][invalid][indeterminate]:hover) #input:checked+#box:before,:host([emphasized][invalid][invalid]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-hover,var(--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)))}:host([emphasized][indeterminate]:hover) #box:before,:host([emphasized][indeterminate]:hover) #input:checked+#box:before,:host([emphasized]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-hover,var(--mod-checkbox-emphasized-color-hover,var(--spectrum-checkbox-emphasized-color-hover)))}}:host([emphasized][indeterminate]:is(:active,[active])) #box:before,:host([emphasized][indeterminate]:is(:active,[active])) #input:checked+#box:before,:host([emphasized]:is(:active,[active])) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default,var(--mod-checkbox-emphasized-color-down,var(--spectrum-checkbox-emphasized-color-down)))}:host([emphasized][invalid][invalid]:is(:active,[active])) #box:before,:host([emphasized][invalid][invalid]:is(:active,[active])) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default,var(--mod-checkbox-control-invalid-color-down,var(--spectrum-checkbox-invalid-color-down)))}:host([emphasized]:focus-visible) #box:before,:host([emphasized]:focus-visible) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-focus,var(--mod-checkbox-control-color-focus,var(--spectrum-checkbox-control-color-focus)))}#label{text-align:start;font-size:var(--mod-checkbox-font-size,var(--spectrum-checkbox-font-size));transition:color var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-in-out;line-height:var(--mod-checkbox-line-height,var(--spectrum-checkbox-line-height));margin-block-start:var(--mod-checkbox-top-to-text,var(--spectrum-checkbox-top-to-text));margin-inline-start:var(--mod-checkbox-text-to-control,var(--spectrum-checkbox-text-to-control))}#label:lang(ja),#label:lang(ko),#label:lang(zh){line-height:var(--mod-checkbox-line-height-cjk,var(--spectrum-checkbox-line-height-cjk))}#input{color:var(--mod-checkbox-control-color-default,var(--spectrum-checkbox-control-color-default));box-sizing:border-box;opacity:0;z-index:1;cursor:pointer;block-size:100%;inline-size:100%;margin:0;padding:0;font-family:inherit;font-size:100%;line-height:1.15;position:absolute;overflow:visible}#input:disabled{cursor:default}#input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default,var(--mod-checkbox-control-selected-color-default,var(--spectrum-checkbox-control-selected-color-default)));background-color:var(--mod-checkbox-checkmark-color,var(--spectrum-checkbox-checkmark-color));border-width:var(--mod-checkbox-selected-border-width,var(--spectrum-checkbox-selected-border-width))}#input:checked+#box #checkmark{opacity:1;transform:scale(1)}#input:focus-visible+#box:before{border-color:var(--highcontrast-checkbox-color-focus,var(--mod-checkbox-control-color-focus,var(--spectrum-checkbox-control-color-focus)))}#input:focus-visible+#box:after{forced-color-adjust:none;box-shadow:0 0 0 var(--mod-checkbox-focus-indicator-thinkness,var(--spectrum-checkbox-focus-indicator-thickness))var(--highcontrast-checkbox-focus-indicator-color,var(--mod-checkbox-focus-indicator-color,var(--spectrum-checkbox-focus-indicator-color)));margin:calc(var(--mod-checkbox-focus-indicator-gap,var(--spectrum-checkbox-focus-indicator-gap))*-1)}#input:focus-visible+#label{color:var(--highcontrast-checkbox-content-color-focus,var(--mod-checkbox-content-color-focus,var(--spectrum-checkbox-content-color-focus)))}#input:focus-visible:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-focus,var(--mod-checkbox-control-selected-color-focus,var(--spectrum-checkbox-control-selected-color-focus)))}#box{--spectrum-checkbox-spacing:calc(var(--mod-checkbox-height,var(--spectrum-checkbox-height)) - var(--mod-checkbox-control-size,var(--spectrum-checkbox-control-size)));margin:calc(var(--mod-checkbox-spacing,var(--spectrum-checkbox-spacing))/2)0;flex-grow:0;flex-shrink:0;justify-content:center;align-items:center;display:flex;position:relative}#box,#box:before{box-sizing:border-box;inline-size:var(--mod-checkbox-control-size,var(--spectrum-checkbox-control-size));block-size:var(--mod-checkbox-control-size,var(--spectrum-checkbox-control-size))}#box:before{forced-color-adjust:none;border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-control-color-default,var(--spectrum-checkbox-control-color-default)));z-index:0;content:"";border-radius:var(--mod-checkbox-control-corner-radius,var(--spectrum-checkbox-control-corner-radius));border-width:var(--mod-checkbox-border-width,var(--spectrum-checkbox-border-width));transition:border var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-in-out,box-shadow var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-in-out;border-style:solid;display:block;position:absolute}#box:after{border-radius:calc(var(--mod-checkbox-control-corner-radius,var(--spectrum-checkbox-control-corner-radius)) + var(--mod-checkbox-focus-indicator-gap,var(--spectrum-checkbox-focus-indicator-gap)));content:"";margin:var(--mod-checkbox-focus-indicator-gap,var(--spectrum-checkbox-focus-indicator-gap));transition:box-shadow var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-out,margin var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-out;display:block;position:absolute;inset-block:0;inset-inline:0;transform:translate(0)}#checkmark,#partialCheckmark{color:var(--highcontrast-checkbox-background-color-default,var(--mod-checkbox-checkmark-color,var(--spectrum-checkbox-checkmark-color)));opacity:0;transition:opacity var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-in-out,transform var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-in-out;transform:scale(0)}#partialCheckmark{display:none}#input:checked:disabled+#box:before,#input:disabled+#box:before{border-color:var(--highcontrast-checkbox-disabled-color-default,var(--mod-checkbox-control-color-disabled,var(--spectrum-checkbox-control-color-disabled)));background-color:var(--highcontrast-checkbox-background-color-default,var(--mod-checkbox-checkmark-color,var(--spectrum-checkbox-checkmark-color)))}#input:checked:disabled~#label,#input:disabled~#label{forced-color-adjust:none;color:var(--highcontrast-checkbox-disabled-color-default,var(--mod-checkbox-content-color-disabled,var(--spectrum-checkbox-content-color-disabled)))}@media (forced-colors:active){#input:focus-visible+#box{forced-color-adjust:none;outline-color:var(--highcontrast-checkbox-focus-indicator-color,var(--mod-checkbox-focus-indicator-color,var(--spectrum-checkbox-focus-indicator-color)));outline-offset:var(--mod-checkbox-focus-indicator-gap,var(--spectrum-checkbox-focus-indicator-gap));outline-style:auto;outline-width:var(--mod-focus-indicator-thickness,var(--spectrum-focus-indicator-thickness))}#input:focus-visible+#box:after{box-shadow:0 0 0 0 var(--highcontrast-checkbox-focus-indicator-color,var(--mod-checkbox-focus-indicator-color,var(--spectrum-checkbox-focus-indicator-color)))}:host{--highcontrast-checkbox-content-color-default:CanvasText;--highcontrast-checkbox-content-color-hover:CanvasText;--highcontrast-checkbox-content-color-down:CanvasText;--highcontrast-checkbox-content-color-focus:CanvasText;--highcontrast-checkbox-background-color-default:Canvas;--highcontrast-checkbox-color-default:ButtonText;--highcontrast-checkbox-color-hover:ButtonText;--highcontrast-checkbox-color-focus:Highlight;--highcontrast-checkbox-highlight-color-default:Highlight;--highcontrast-checkbox-highlight-color-hover:Highlight;--highcontrast-checkbox-highlight-color-down:Highlight;--highcontrast-checkbox-highlight-color-focus:Highlight;--highcontrast-checkbox-disabled-color-default:GrayText;--highcontrast-checkbox-focus-indicator-color:CanvasText}}:host{--spectrum-checkbox-control-color-default:var(--system-checkbox-control-color-default);--spectrum-checkbox-control-color-hover:var(--system-checkbox-control-color-hover);--spectrum-checkbox-control-color-down:var(--system-checkbox-control-color-down);--spectrum-checkbox-control-color-focus:var(--system-checkbox-control-color-focus);--spectrum-checkbox-checkmark-color:var(--system-checkbox-checkmark-color);--spectrum-checkbox-control-corner-radius:var(--system-checkbox-control-corner-radius)}:host{vertical-align:top;display:inline-flex}:host(:focus){outline:none}:host([disabled]){pointer-events:none}:host(:empty) label{display:none}
`, zm = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Checkmark75" } = {}) => nt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
    width="${e}"
    height="${t}"
  >
    <path
      d="M3.667 9.07a.96.96 0 0 1-.737-.344L.753 6.114a.96.96 0 1 1 1.474-1.23l1.418 1.701 4.112-5.233a.96.96 0 0 1 1.51 1.186L4.422 8.704a.96.96 0 0 1-.741.367z"
    />
  </svg>`, jm = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Checkmark75" } = {}) => nt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
    width="${e}"
    height="${t}"
  >
    <path
      d="M3.667 9.07a.96.96 0 0 1-.737-.344L.753 6.114a.96.96 0 1 1 1.474-1.23l1.418 1.701 4.112-5.233a.96.96 0 0 1 1.51 1.186L4.422 8.704a.96.96 0 0 1-.741.367z"
    />
  </svg>`;
class Hm extends ut {
  render() {
    return Kt(C), this.spectrumVersion === 2 ? zm({ hidden: !this.label, title: this.label }) : jm({ hidden: !this.label, title: this.label });
  }
}
J("sp-icon-checkmark75", Hm);
const _m = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Checkmark200" } = {}) => nt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
    width="${e}"
    height="${t}"
  >
    <path
      d="M4.313 10.98a1.04 1.04 0 0 1-.8-.375L.647 7.165a1.042 1.042 0 0 1 1.6-1.333l2.042 2.45 5.443-6.928a1.042 1.042 0 0 1 1.64 1.287l-6.24 7.94a1.04 1.04 0 0 1-.804.399z"
    />
  </svg>`, $m = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Checkmark200" } = {}) => nt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
    width="${e}"
    height="${t}"
  >
    <path
      d="M4.313 10.98a1.04 1.04 0 0 1-.8-.375L.647 7.165a1.042 1.042 0 0 1 1.6-1.333l2.042 2.45 5.443-6.928a1.042 1.042 0 0 1 1.64 1.287l-6.24 7.94a1.04 1.04 0 0 1-.804.399z"
    />
  </svg>`;
class Cm extends ut {
  render() {
    return Kt(C), this.spectrumVersion === 2 ? _m({ hidden: !this.label, title: this.label }) : $m({ hidden: !this.label, title: this.label });
  }
}
J("sp-icon-checkmark200", Cm);
const Am = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Checkmark300" } = {}) => nt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
    width="${e}"
    height="${t}"
  >
    <path
      d="M5.102 12.514a1.09 1.09 0 0 1-.834-.39L.988 8.19A1.085 1.085 0 0 1 2.656 6.8l2.421 2.906 6.243-7.947a1.085 1.085 0 0 1 1.707 1.34L5.955 12.1a1.09 1.09 0 0 1-.838.415z"
    />
  </svg>`, Sm = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Checkmark300" } = {}) => nt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
    width="${e}"
    height="${t}"
  >
    <path
      d="M5.102 12.514a1.09 1.09 0 0 1-.834-.39L.988 8.19A1.085 1.085 0 0 1 2.656 6.8l2.421 2.906 6.243-7.947a1.085 1.085 0 0 1 1.707 1.34L5.955 12.1a1.09 1.09 0 0 1-.838.415z"
    />
  </svg>`;
class Em extends ut {
  render() {
    return Kt(C), this.spectrumVersion === 2 ? Am({ hidden: !this.label, title: this.label }) : Sm({ hidden: !this.label, title: this.label });
  }
}
J("sp-icon-checkmark300", Em);
const Tm = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Dash75" } = {}) => nt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
    width="${e}"
    height="${t}"
  >
    <path d="M6.99 4.96H1.01a.96.96 0 0 1 0-1.92h5.98a.96.96 0 0 1 0 1.92" />
  </svg>`, Dm = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Dash75" } = {}) => nt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
    width="${e}"
    height="${t}"
  >
    <path d="M6.99 4.96H1.01a.96.96 0 0 1 0-1.92h5.98a.96.96 0 0 1 0 1.92" />
  </svg>`;
class Bm extends ut {
  render() {
    return Kt(C), this.spectrumVersion === 2 ? Tm({ hidden: !this.label, title: this.label }) : Dm({ hidden: !this.label, title: this.label });
  }
}
J("sp-icon-dash75", Bm);
const Im = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Dash100" } = {}) => nt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
    width="${e}"
    height="${t}"
  >
    <path d="M8.5 6h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2" />
  </svg>`, qm = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Dash100" } = {}) => nt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
    width="${e}"
    height="${t}"
  >
    <path d="M8.5 6h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2" />
  </svg>`;
class Pm extends ut {
  render() {
    return Kt(C), this.spectrumVersion === 2 ? Im({ hidden: !this.label, title: this.label }) : qm({ hidden: !this.label, title: this.label });
  }
}
J("sp-icon-dash100", Pm);
const Mm = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Dash200" } = {}) => nt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
    width="${e}"
    height="${t}"
  >
    <path d="M10.021 7.042H1.98a1.042 1.042 0 1 1 0-2.083h8.043a1.042 1.042 0 0 1 0 2.083z" />
  </svg>`, Lm = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Dash200" } = {}) => nt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
    width="${e}"
    height="${t}"
  >
    <path d="M10.021 7.042H1.98a1.042 1.042 0 1 1 0-2.083h8.043a1.042 1.042 0 0 1 0 2.083z" />
  </svg>`;
class Om extends ut {
  render() {
    return Kt(C), this.spectrumVersion === 2 ? Mm({ hidden: !this.label, title: this.label }) : Lm({ hidden: !this.label, title: this.label });
  }
}
J("sp-icon-dash200", Om);
const Rm = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Dash300" } = {}) => nt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
    width="${e}"
    height="${t}"
  >
    <path d="M10.61 7.085H1.39a1.085 1.085 0 0 1 0-2.17h9.22a1.085 1.085 0 0 1 0 2.17" />
  </svg>`, Um = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Dash300" } = {}) => nt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
    width="${e}"
    height="${t}"
  >
    <path d="M10.61 7.085H1.39a1.085 1.085 0 0 1 0-2.17h9.22a1.085 1.085 0 0 1 0 2.17" />
  </svg>`;
class Nm extends ut {
  render() {
    return Kt(C), this.spectrumVersion === 2 ? Rm({ hidden: !this.label, title: this.label }) : Um({ hidden: !this.label, title: this.label });
  }
}
J("sp-icon-dash300", Nm);
const Fm = st`
    .spectrum-UIIcon-Dash50{--spectrum-icon-size:var(--spectrum-dash-icon-size-50)}.spectrum-UIIcon-Dash75{--spectrum-icon-size:var(--spectrum-dash-icon-size-75)}.spectrum-UIIcon-Dash100{--spectrum-icon-size:var(--spectrum-dash-icon-size-100)}.spectrum-UIIcon-Dash200{--spectrum-icon-size:var(--spectrum-dash-icon-size-200)}.spectrum-UIIcon-Dash300{--spectrum-icon-size:var(--spectrum-dash-icon-size-300)}.spectrum-UIIcon-Dash400{--spectrum-icon-size:var(--spectrum-dash-icon-size-400)}.spectrum-UIIcon-Dash500{--spectrum-icon-size:var(--spectrum-dash-icon-size-500)}.spectrum-UIIcon-Dash600{--spectrum-icon-size:var(--spectrum-dash-icon-size-600)}
`;
var Vm = Object.defineProperty, Je = (e, t, r, o) => {
  for (var s = void 0, a = e.length - 1, c; a >= 0; a--) (c = e[a]) && (s = c(t, r, s) || s);
  return s && Vm(t, r, s), s;
};
const Km = { s: () => C`
            <sp-icon-checkmark75
                id="checkmark"
                class="spectrum-Icon spectrum-UIIcon-Checkmark75"
            ></sp-icon-checkmark75>
        `, m: () => C`
            <sp-icon-checkmark100
                id="checkmark"
                class="spectrum-Icon spectrum-UIIcon-Checkmark100"
            ></sp-icon-checkmark100>
        `, l: () => C`
            <sp-icon-checkmark200
                id="checkmark"
                class="spectrum-Icon spectrum-UIIcon-Checkmark200"
            ></sp-icon-checkmark200>
        `, xl: () => C`
            <sp-icon-checkmark300
                id="checkmark"
                class="spectrum-Icon spectrum-UIIcon-Checkmark300"
            ></sp-icon-checkmark300>
        ` }, Wm = { s: () => C`
            <sp-icon-dash75
                id="partialCheckmark"
                class="spectrum-Icon spectrum-UIIcon-Dash75"
            ></sp-icon-dash75>
        `, m: () => C`
            <sp-icon-dash100
                id="partialCheckmark"
                class="spectrum-Icon spectrum-UIIcon-Dash100"
            ></sp-icon-dash100>
        `, l: () => C`
            <sp-icon-dash200
                id="partialCheckmark"
                class="spectrum-Icon spectrum-UIIcon-Dash200"
            ></sp-icon-dash200>
        `, xl: () => C`
            <sp-icon-dash300
                id="partialCheckmark"
                class="spectrum-Icon spectrum-UIIcon-Dash300"
            ></sp-icon-dash300>
        ` };
class ze extends ge(xm(Vt), { noDefaultSize: !0 }) {
  constructor() {
    super(...arguments), this.disabled = !1, this.indeterminate = !1, this.invalid = !1, this.emphasized = !1, this.tabIndex = 0;
  }
  connectedCallback() {
    super.connectedCallback(), this.hasAttribute("autofocus") && this.updateComplete.then(() => {
      this.focus();
    });
  }
  static get styles() {
    return [wm, Fc, Fm];
  }
  click() {
    var t;
    this.disabled || (t = this.inputElement) == null || t.click();
  }
  handleChange() {
    this.indeterminate = !1, super.handleChange();
  }
  render() {
    return C`
            ${super.render()}
            <span id="box">
                ${this.checked ? Km[this.size]() : C``}
                ${this.indeterminate ? Wm[this.size]() : C``}
            </span>
            <label id="label" for="input"><slot></slot></label>
        `;
  }
  updated(t) {
    super.updated(t), t.has("disabled") && (typeof t.get("disabled") < "u" || this.disabled) && (this.disabled ? (this.inputElement.tabIndex = this.tabIndex, this.tabIndex = -1) : (this.tabIndex = this.inputElement.tabIndex, this.inputElement.removeAttribute("tabindex")), this.inputElement.disabled = this.disabled), t.has("indeterminate") && (this.inputElement.indeterminate = this.indeterminate), t.has("invalid") && (this.invalid ? this.inputElement.setAttribute("aria-invalid", "true") : this.inputElement.removeAttribute("aria-invalid"));
  }
}
ze.shadowRootOptions = { ...Vt.shadowRootOptions, delegatesFocus: !0 }, Je([z({ type: Boolean, reflect: !0 })], ze.prototype, "disabled"), Je([z({ type: Boolean, reflect: !0 })], ze.prototype, "indeterminate"), Je([z({ type: Boolean, reflect: !0 })], ze.prototype, "invalid"), Je([z({ type: Boolean, reflect: !0 })], ze.prototype, "emphasized"), Je([z({ reflect: !0, type: Number, attribute: "tabindex" })], ze.prototype, "tabIndex");
J("sp-checkbox", ze);
const Gm = st`
    :host{cursor:pointer;-webkit-user-select:none;user-select:none;box-sizing:border-box;font-family:var(--mod-button-font-family,var(--mod-sans-font-family-stack,var(--spectrum-sans-font-family-stack)));-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;line-height:var(--mod-button-line-height,var(--mod-line-height-100,var(--spectrum-line-height-100)));text-transform:none;vertical-align:top;-webkit-appearance:button;transition:background var(--mod-button-animation-duration,var(--mod-animation-duration-100,var(--spectrum-animation-duration-100)))ease-out,border-color var(--mod-button-animation-duration,var(--mod-animation-duration-100,var(--spectrum-animation-duration-100)))ease-out,color var(--mod-button-animation-duration,var(--mod-animation-duration-100,var(--spectrum-animation-duration-100)))ease-out,box-shadow var(--mod-button-animation-duration,var(--mod-animation-duration-100,var(--spectrum-animation-duration-100)))ease-out;border-style:solid;justify-content:center;align-items:center;margin:0;-webkit-text-decoration:none;text-decoration:none;display:inline-flex;overflow:visible}:host(:focus){outline:none}:host([disabled]),:host([disabled]){cursor:default}::slotted([slot=icon]){flex-shrink:0;max-block-size:100%}#label{text-align:center;place-self:center}#label:empty{display:none}@media (forced-colors:active){:host{--highcontrast-actionbutton-focus-indicator-color:ButtonText;--highcontrast-actionbutton-content-color:ButtonText}:host:after{forced-color-adjust:none}:host([selected]){--highcontrast-actionbutton-background-color:Highlight;--highcontrast-actionbutton-border-color:HighlightText;--highcontrast-actionbutton-content-color:HighlightText}:host([selected]) .hold-affordance,:host([selected]) ::slotted([slot=icon]),:host([selected]) #label{forced-color-adjust:none}:host([disabled]),:host([disabled]){--highcontrast-actionbutton-content-color:GrayText;--highcontrast-actionbutton-border-color:GrayText;--highcontrast-actionbutton-background-color:ButtonFace}}:host{--spectrum-actionbutton-background-color:var(--highcontrast-actionbutton-background-color,var(--mod-actionbutton-background-color-default,var(--spectrum-actionbutton-background-color-default)));--spectrum-actionbutton-border-color:var(--highcontrast-actionbutton-border-color,var(--mod-actionbutton-border-color-default,var(--spectrum-actionbutton-border-color-default)));--spectrum-actionbutton-content-color:var(--highcontrast-actionbutton-content-color,var(--mod-actionbutton-content-color-default,var(--spectrum-neutral-content-color-default)));--spectrum-actionbutton-border-radius:var(--mod-actionbutton-border-radius,var(--spectrum-actionbutton-border-radius-default));--spectrum-actionbutton-border-width:var(--mod-actionbutton-border-width,var(--spectrum-border-width-100));--spectrum-actionbutton-focus-indicator-gap:var(--mod-actionbutton-focus-indicator-gap,var(--spectrum-focus-indicator-gap));--spectrum-actionbutton-focus-indicator-thickness:var(--mod-actionbutton-focus-indicator-thickness,var(--spectrum-focus-indicator-thickness));--spectrum-actionbutton-focus-indicator-color:var(--highcontrast-actionbutton-focus-indicator-color,var(--mod-actionbutton-focus-indicator-color,var(--spectrum-focus-indicator-color)))}:host:dir(rtl),:host([dir=rtl]){--spectrum-logical-rotation:matrix(-1,0,0,1,0,0)}:host([quiet]){--spectrum-actionbutton-border-color:transparent}:host([emphasized]:not([static-color=black],[static-color=white])){--mod-actionbutton-background-color-default-selected:var(--mod-actionbutton-background-color-default-selected-emphasized,var(--spectrum-accent-background-color-default));--mod-actionbutton-background-color-hover-selected:var(--mod-actionbutton-background-color-hover-selected-emphasized,var(--spectrum-accent-background-color-hover));--mod-actionbutton-background-color-down-selected:var(--mod-actionbutton-background-color-down-selected-emphasized,var(--spectrum-accent-background-color-down));--mod-actionbutton-background-color-focus-selected:var(--mod-actionbutton-background-color-focus-selected-emphasized,var(--spectrum-accent-background-color-key-focus));--mod-actionbutton-content-color-default-selected:var(--mod-actionbutton-content-color-default-selected-emphasized,var(--spectrum-white));--mod-actionbutton-content-color-hover-selected:var(--mod-actionbutton-content-color-hover-selected-emphasized,var(--spectrum-white));--mod-actionbutton-content-color-down-selected:var(--mod-actionbutton-content-color-down-selected-emphasized,var(--spectrum-white));--mod-actionbutton-content-color-focus-selected:var(--mod-actionbutton-content-color-focus-selected-emphasized,var(--spectrum-white))}:host([static-color=black]){--mod-actionbutton-background-color-default-selected:var(--spectrum-transparent-black-800);--mod-actionbutton-background-color-hover-selected:var(--spectrum-transparent-black-900);--mod-actionbutton-background-color-down-selected:var(--spectrum-transparent-black-900);--mod-actionbutton-background-color-focus-selected:var(--spectrum-transparent-black-900);--mod-actionbutton-content-color-default:var(--spectrum-black);--mod-actionbutton-content-color-hover:var(--spectrum-black);--mod-actionbutton-content-color-down:var(--spectrum-black);--mod-actionbutton-content-color-focus:var(--spectrum-black);--mod-actionbutton-content-color-disabled:var(--spectrum-disabled-static-black-content-color);--mod-actionbutton-content-color-default-selected:var(--mod-actionbutton-static-content-color,var(--spectrum-white));--mod-actionbutton-content-color-hover-selected:var(--mod-actionbutton-static-content-color,var(--spectrum-white));--mod-actionbutton-content-color-down-selected:var(--mod-actionbutton-static-content-color,var(--spectrum-white));--mod-actionbutton-content-color-focus-selected:var(--mod-actionbutton-static-content-color,var(--spectrum-white));--mod-actionbutton-focus-indicator-color:var(--spectrum-static-black-focus-indicator-color)}:host([static-color=white]){--mod-actionbutton-background-color-default-selected:var(--spectrum-transparent-white-800);--mod-actionbutton-background-color-hover-selected:var(--spectrum-transparent-white-900);--mod-actionbutton-background-color-down-selected:var(--spectrum-transparent-white-900);--mod-actionbutton-background-color-focus-selected:var(--spectrum-transparent-white-900);--mod-actionbutton-content-color-default:var(--spectrum-white);--mod-actionbutton-content-color-hover:var(--spectrum-white);--mod-actionbutton-content-color-down:var(--spectrum-white);--mod-actionbutton-content-color-focus:var(--spectrum-white);--mod-actionbutton-content-color-disabled:var(--spectrum-disabled-static-white-content-color);--mod-actionbutton-content-color-default-selected:var(--mod-actionbutton-static-content-color,var(--spectrum-black));--mod-actionbutton-content-color-hover-selected:var(--mod-actionbutton-static-content-color,var(--spectrum-black));--mod-actionbutton-content-color-down-selected:var(--mod-actionbutton-static-content-color,var(--spectrum-black));--mod-actionbutton-content-color-focus-selected:var(--mod-actionbutton-static-content-color,var(--spectrum-black));--mod-actionbutton-focus-indicator-color:var(--spectrum-static-white-focus-indicator-color)}:host([selected]){--mod-actionbutton-background-color-default:var(--mod-actionbutton-background-color-default-selected,var(--spectrum-actionbutton-background-color-selected));--mod-actionbutton-background-color-hover:var(--mod-actionbutton-background-color-hover-selected,var(--spectrum-actionbutton-background-color-selected-hover));--mod-actionbutton-background-color-down:var(--mod-actionbutton-background-color-down-selected,var(--spectrum-actionbutton-background-color-selected-down));--mod-actionbutton-background-color-focus:var(--mod-actionbutton-background-color-focus-selected,var(--spectrum-actionbutton-background-color-selected-focus));--mod-actionbutton-background-color-disabled:var(--spectrum-actionbutton-background-color-selected-disabled);--mod-actionbutton-border-color-default:transparent;--mod-actionbutton-border-color-hover:transparent;--mod-actionbutton-border-color-down:transparent;--mod-actionbutton-border-color-focus:transparent;--mod-actionbutton-border-color-disabled:transparent;--mod-actionbutton-content-color-default:var(--mod-actionbutton-content-color-default-selected,var(--spectrum-actionbutton-content-color-selected));--mod-actionbutton-content-color-hover:var(--mod-actionbutton-content-color-hover-selected,var(--spectrum-actionbutton-content-color-selected));--mod-actionbutton-content-color-down:var(--mod-actionbutton-content-color-down-selected,var(--spectrum-actionbutton-content-color-selected));--mod-actionbutton-content-color-focus:var(--mod-actionbutton-content-color-focus-selected,var(--spectrum-actionbutton-content-color-selected))}@media (hover:hover){:host(:hover){--mod-actionbutton-background-color-default:var(--mod-actionbutton-background-color-hover,var(--spectrum-actionbutton-background-color-hover));--mod-actionbutton-border-color-default:var(--mod-actionbutton-border-color-hover,var(--spectrum-actionbutton-border-color-hover));--mod-actionbutton-content-color-default:var(--mod-actionbutton-content-color-hover,var(--spectrum-neutral-content-color-hover))}}:host(:focus-visible){--mod-actionbutton-background-color-default:var(--mod-actionbutton-background-color-focus,var(--spectrum-actionbutton-background-color-focus));--mod-actionbutton-border-color-default:var(--mod-actionbutton-border-color-focus,var(--spectrum-actionbutton-border-color-focus));--mod-actionbutton-content-color-default:var(--mod-actionbutton-content-color-focus,var(--spectrum-neutral-content-color-key-focus))}:host(:is(:active,[active])){--mod-actionbutton-background-color-default:var(--mod-actionbutton-background-color-down,var(--spectrum-actionbutton-background-color-down));--mod-actionbutton-border-color-default:var(--mod-actionbutton-border-color-down,var(--spectrum-actionbutton-border-color-down));--mod-actionbutton-content-color-default:var(--mod-actionbutton-content-color-down,var(--spectrum-neutral-content-color-down))}:host([disabled]),:host([disabled]){--mod-actionbutton-background-color-default:var(--mod-actionbutton-background-color-disabled,var(--spectrum-actionbutton-background-color-disabled));--mod-actionbutton-border-color-default:var(--mod-actionbutton-border-color-disabled,var(--spectrum-actionbutton-border-color-disabled));--mod-actionbutton-content-color-default:var(--mod-actionbutton-content-color-disabled,var(--spectrum-disabled-content-color))}:host,:host{--spectrum-actionbutton-sized-height:var(--spectrum-component-height-100);--spectrum-actionbutton-sized-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-actionbutton-sized-font-size:var(--spectrum-font-size-100);--spectrum-actionbutton-sized-text-to-visual:var(--spectrum-text-to-visual-100);--spectrum-actionbutton-sized-edge-to-hold-icon:var(--spectrum-action-button-edge-to-hold-icon-medium);--spectrum-actionbutton-sized-edge-to-visual:var(--spectrum-component-edge-to-visual-100);--spectrum-actionbutton-sized-edge-to-text:var(--spectrum-component-edge-to-text-100);--spectrum-actionbutton-sized-edge-to-visual-only:var(--spectrum-component-edge-to-visual-only-100)}:host([size=xs]){--spectrum-actionbutton-sized-height:var(--spectrum-component-height-50);--spectrum-actionbutton-sized-icon-size:var(--spectrum-workflow-icon-size-50);--spectrum-actionbutton-sized-font-size:var(--spectrum-font-size-50);--spectrum-actionbutton-sized-text-to-visual:var(--spectrum-text-to-visual-50);--spectrum-actionbutton-sized-edge-to-hold-icon:var(--spectrum-action-button-edge-to-hold-icon-extra-small);--spectrum-actionbutton-sized-edge-to-visual:var(--spectrum-component-edge-to-visual-50);--spectrum-actionbutton-sized-edge-to-text:var(--spectrum-component-edge-to-text-50);--spectrum-actionbutton-sized-edge-to-visual-only:var(--spectrum-component-edge-to-visual-only-50)}:host([size=s]){--spectrum-actionbutton-sized-height:var(--spectrum-component-height-75);--spectrum-actionbutton-sized-icon-size:var(--spectrum-workflow-icon-size-75);--spectrum-actionbutton-sized-font-size:var(--spectrum-font-size-75);--spectrum-actionbutton-sized-text-to-visual:var(--spectrum-text-to-visual-75);--spectrum-actionbutton-sized-edge-to-hold-icon:var(--spectrum-action-button-edge-to-hold-icon-small);--spectrum-actionbutton-sized-edge-to-visual:var(--spectrum-component-edge-to-visual-75);--spectrum-actionbutton-sized-edge-to-text:var(--spectrum-component-edge-to-text-75);--spectrum-actionbutton-sized-edge-to-visual-only:var(--spectrum-component-edge-to-visual-only-75)}:host([size=l]){--spectrum-actionbutton-sized-height:var(--spectrum-component-height-200);--spectrum-actionbutton-sized-icon-size:var(--spectrum-workflow-icon-size-200);--spectrum-actionbutton-sized-font-size:var(--spectrum-font-size-200);--spectrum-actionbutton-sized-text-to-visual:var(--spectrum-text-to-visual-200);--spectrum-actionbutton-sized-edge-to-hold-icon:var(--spectrum-action-button-edge-to-hold-icon-large);--spectrum-actionbutton-sized-edge-to-visual:var(--spectrum-component-edge-to-visual-200);--spectrum-actionbutton-sized-edge-to-text:var(--spectrum-component-edge-to-text-200);--spectrum-actionbutton-sized-edge-to-visual-only:var(--spectrum-component-edge-to-visual-only-200)}:host([size=xl]){--spectrum-actionbutton-sized-height:var(--spectrum-component-height-300);--spectrum-actionbutton-sized-icon-size:var(--spectrum-workflow-icon-size-300);--spectrum-actionbutton-sized-font-size:var(--spectrum-font-size-300);--spectrum-actionbutton-sized-text-to-visual:var(--spectrum-text-to-visual-300);--spectrum-actionbutton-sized-edge-to-hold-icon:var(--spectrum-action-button-edge-to-hold-icon-extra-large);--spectrum-actionbutton-sized-edge-to-visual:var(--spectrum-component-edge-to-visual-300);--spectrum-actionbutton-sized-edge-to-text:var(--spectrum-component-edge-to-text-300);--spectrum-actionbutton-sized-edge-to-visual-only:var(--spectrum-component-edge-to-visual-only-300)}:host{--spectrum-actionbutton-height:var(--mod-actionbutton-height,var(--spectrum-actionbutton-sized-height));--spectrum-actionbutton-icon-size:var(--mod-actionbutton-icon-size,var(--spectrum-actionbutton-sized-icon-size));--spectrum-actionbutton-font-size:var(--mod-actionbutton-font-size,var(--spectrum-actionbutton-sized-font-size));--spectrum-actionbutton-text-to-visual:var(--mod-actionbutton-text-to-visual,var(--spectrum-actionbutton-sized-text-to-visual));--spectrum-actionbutton-edge-to-hold-icon:var(--mod-actionbutton-edge-to-hold-icon,var(--spectrum-actionbutton-sized-edge-to-hold-icon));--spectrum-actionbutton-edge-to-visual:var(--mod-actionbutton-edge-to-visual,calc(var(--spectrum-actionbutton-sized-edge-to-visual) - var(--spectrum-actionbutton-border-width)));--spectrum-actionbutton-edge-to-text:var(--mod-actionbutton-edge-to-text,calc(var(--spectrum-actionbutton-sized-edge-to-text) - var(--spectrum-actionbutton-border-width)));--spectrum-actionbutton-edge-to-visual-only:var(--mod-actionbutton-edge-to-visual-only,calc(var(--spectrum-actionbutton-sized-edge-to-visual-only) - var(--spectrum-actionbutton-border-width)));min-inline-size:var(--mod-actionbutton-min-width,calc(var(--mod-actionbutton-edge-to-visual-only,var(--spectrum-actionbutton-sized-edge-to-visual-only))*2 + var(--spectrum-actionbutton-icon-size)));block-size:var(--spectrum-actionbutton-height);border-radius:var(--spectrum-actionbutton-border-radius);border-width:var(--spectrum-actionbutton-border-width);gap:calc(var(--spectrum-actionbutton-text-to-visual) + var(--spectrum-actionbutton-edge-to-text) - var(--spectrum-actionbutton-edge-to-visual-only));padding-inline:var(--spectrum-actionbutton-edge-to-text);background-color:var(--spectrum-actionbutton-background-color);border-color:var(--spectrum-actionbutton-border-color);color:var(--spectrum-actionbutton-content-color);transition:border-color var(--mod-actionbutton-animation-duration,var(--spectrum-animation-duration-100))ease-in-out;position:relative}:host:after{margin:calc((var(--spectrum-actionbutton-focus-indicator-gap) + var(--spectrum-actionbutton-border-width))*-1);border-radius:var(--mod-actionbutton-focus-indicator-border-radius,calc(var(--spectrum-actionbutton-border-radius) + var(--spectrum-actionbutton-focus-indicator-gap)));transition:box-shadow var(--mod-actionbutton-animation-duration,var(--spectrum-animation-duration-100))ease-in-out;pointer-events:none;content:"";position:absolute;inset:0}:host(:focus-visible){box-shadow:none;outline:none}:host(:focus-visible):after{box-shadow:0 0 0 var(--spectrum-actionbutton-focus-indicator-thickness)var(--spectrum-actionbutton-focus-indicator-color)}::slotted([slot=icon]){inline-size:var(--spectrum-actionbutton-icon-size);block-size:var(--spectrum-actionbutton-icon-size);color:inherit;margin-inline-start:calc(var(--spectrum-actionbutton-edge-to-visual) - var(--spectrum-actionbutton-edge-to-text));margin-inline-end:calc(var(--spectrum-actionbutton-edge-to-visual-only) - var(--spectrum-actionbutton-edge-to-text))}.hold-affordance+::slotted([slot=icon]),[icon-only]::slotted([slot=icon]){margin-inline-start:calc(var(--spectrum-actionbutton-edge-to-visual-only) - var(--spectrum-actionbutton-edge-to-text))}#label{pointer-events:none;line-height:var(--spectrum-actionbutton-height);font-size:var(--spectrum-actionbutton-font-size);white-space:nowrap;color:var(--mod-actionbutton-label-color,inherit);text-overflow:ellipsis;overflow:hidden}.hold-affordance{color:inherit;transform:var(--spectrum-logical-rotation,);position:absolute;inset-block-end:calc(var(--spectrum-actionbutton-edge-to-hold-icon) - var(--spectrum-actionbutton-border-width));inset-inline-end:calc(var(--spectrum-actionbutton-edge-to-hold-icon) - var(--spectrum-actionbutton-border-width))}:host{--spectrum-actionbutton-background-color-default:var(--system-action-button-background-color-default);--spectrum-actionbutton-background-color-hover:var(--system-action-button-background-color-hover);--spectrum-actionbutton-background-color-down:var(--system-action-button-background-color-down);--spectrum-actionbutton-background-color-focus:var(--system-action-button-background-color-focus);--spectrum-actionbutton-background-color-disabled:var(--system-action-button-background-color-disabled);--spectrum-actionbutton-background-color-selected:var(--system-action-button-background-color-selected);--spectrum-actionbutton-background-color-selected-hover:var(--system-action-button-background-color-selected-hover);--spectrum-actionbutton-background-color-selected-down:var(--system-action-button-background-color-selected-down);--spectrum-actionbutton-background-color-selected-focus:var(--system-action-button-background-color-selected-focus);--spectrum-actionbutton-border-color-default:var(--system-action-button-border-color-default);--spectrum-actionbutton-border-color-hover:var(--system-action-button-border-color-hover);--spectrum-actionbutton-border-color-down:var(--system-action-button-border-color-down);--spectrum-actionbutton-border-color-focus:var(--system-action-button-border-color-focus);--spectrum-actionbutton-border-color-disabled:var(--system-action-button-border-color-disabled);--spectrum-actionbutton-content-color-selected:var(--system-action-button-content-color-selected);--spectrum-actionbutton-background-color-selected-disabled:var(--system-action-button-background-color-selected-disabled);--spectrum-actionbutton-border-radius-default:var(--system-action-button-size-m-border-radius-default)}:host([size=xs]){--spectrum-actionbutton-border-radius-default:var(--system-action-button-size-xs-border-radius-default)}:host([size=s]){--spectrum-actionbutton-border-radius-default:var(--system-action-button-size-s-border-radius-default)}:host([size=l]){--spectrum-actionbutton-border-radius-default:var(--system-action-button-size-l-border-radius-default)}:host([size=xl]){--spectrum-actionbutton-border-radius-default:var(--system-action-button-size-xl-border-radius-default)}:host([quiet]){--spectrum-actionbutton-background-color-default:var(--system-action-button-quiet-background-color-default);--spectrum-actionbutton-background-color-hover:var(--system-action-button-quiet-background-color-hover);--spectrum-actionbutton-background-color-down:var(--system-action-button-quiet-background-color-down);--spectrum-actionbutton-background-color-focus:var(--system-action-button-quiet-background-color-focus);--spectrum-actionbutton-background-color-disabled:var(--system-action-button-quiet-background-color-disabled);--spectrum-actionbutton-background-color-selected-disabled:var(--system-action-button-quiet-background-color-selected-disabled)}:host([static-color=black]){--spectrum-actionbutton-border-color-default:var(--system-action-button-static-black-border-color-default);--spectrum-actionbutton-border-color-hover:var(--system-action-button-static-black-border-color-hover);--spectrum-actionbutton-border-color-down:var(--system-action-button-static-black-border-color-down);--spectrum-actionbutton-border-color-focus:var(--system-action-button-static-black-border-color-focus);--spectrum-actionbutton-border-color-disabled:var(--system-action-button-static-black-border-color-disabled);--spectrum-actionbutton-background-color-disabled:var(--system-action-button-static-black-background-color-disabled);--spectrum-actionbutton-background-color-selected-disabled:var(--system-action-button-static-black-background-color-selected-disabled);--spectrum-actionbutton-background-color-default:var(--system-action-button-static-black-background-color-default);--spectrum-actionbutton-background-color-hover:var(--system-action-button-static-black-background-color-hover);--spectrum-actionbutton-background-color-down:var(--system-action-button-static-black-background-color-down);--spectrum-actionbutton-background-color-focus:var(--system-action-button-static-black-background-color-focus)}:host([static-color=black][quiet]){--spectrum-actionbutton-background-color-default:var(--system-action-button-static-black-quiet-background-color-default);--spectrum-actionbutton-background-color-hover:var(--system-action-button-static-black-quiet-background-color-hover);--spectrum-actionbutton-background-color-down:var(--system-action-button-static-black-quiet-background-color-down);--spectrum-actionbutton-background-color-focus:var(--system-action-button-static-black-quiet-background-color-focus);--spectrum-actionbutton-background-color-disabled:var(--system-action-button-static-black-quiet-background-color-disabled)}:host([static-color=white]){--spectrum-actionbutton-border-color-default:var(--system-action-button-static-white-border-color-default);--spectrum-actionbutton-border-color-hover:var(--system-action-button-static-white-border-color-hover);--spectrum-actionbutton-border-color-down:var(--system-action-button-static-white-border-color-down);--spectrum-actionbutton-border-color-focus:var(--system-action-button-static-white-border-color-focus);--spectrum-actionbutton-border-color-disabled:var(--system-action-button-static-white-border-color-disabled);--spectrum-actionbutton-background-color-disabled:var(--system-action-button-static-white-background-color-disabled);--spectrum-actionbutton-background-color-selected-disabled:var(--system-action-button-static-white-background-color-selected-disabled);--spectrum-actionbutton-background-color-default:var(--system-action-button-static-white-background-color-default);--spectrum-actionbutton-background-color-hover:var(--system-action-button-static-white-background-color-hover);--spectrum-actionbutton-background-color-down:var(--system-action-button-static-white-background-color-down);--spectrum-actionbutton-background-color-focus:var(--system-action-button-static-white-background-color-focus)}:host([static-color=white][quiet]){--spectrum-actionbutton-background-color-default:var(--system-action-button-static-white-quiet-background-color-default);--spectrum-actionbutton-background-color-hover:var(--system-action-button-static-white-quiet-background-color-hover);--spectrum-actionbutton-background-color-down:var(--system-action-button-static-white-quiet-background-color-down);--spectrum-actionbutton-background-color-focus:var(--system-action-button-static-white-quiet-background-color-focus);--spectrum-actionbutton-background-color-disabled:var(--system-action-button-static-white-quiet-background-color-disabled)}::slotted([slot=icon]){flex-shrink:0}#label{flex-grow:var(--spectrum-actionbutton-label-flex-grow);text-align:var(--spectrum-actionbutton-label-text-align);pointer-events:none!important}:host([size=xs]){min-width:var(--spectrum-actionbutton-height,0);--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-50) - var(--spectrum-actionbutton-border-width))}:host([size=s]){--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-75) - var(--spectrum-actionbutton-border-width))}:host([size=m]){--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-100) - var(--spectrum-actionbutton-border-width))}:host([size=l]){--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-200) - var(--spectrum-actionbutton-border-width))}:host([size=xl]){--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-300) - var(--spectrum-actionbutton-border-width))}@media (forced-colors:active){:host{--highcontrast-actionbutton-border-color-disabled:GrayText;--highcontrast-actionbutton-content-color-disabled:GrayText}}
`, Xm = st`
    .spectrum-UIIcon-CornerTriangle75{--spectrum-icon-size:var(--spectrum-corner-triangle-icon-size-75)}.spectrum-UIIcon-CornerTriangle100{--spectrum-icon-size:var(--spectrum-corner-triangle-icon-size-100)}.spectrum-UIIcon-CornerTriangle200{--spectrum-icon-size:var(--spectrum-corner-triangle-icon-size-200)}.spectrum-UIIcon-CornerTriangle300{--spectrum-icon-size:var(--spectrum-corner-triangle-icon-size-300)}
`, Zm = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Corner Triangle300" } = {}) => nt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 7 7"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
    width="${e}"
    height="${t}"
  >
    <path
      d="M6.683.67a.32.32 0 0 0-.223.093l-5.7 5.7a.316.316 0 0 0 .224.54h5.7A.316.316 0 0 0 7 6.687V.986A.316.316 0 0 0 6.684.67z"
    />
  </svg>`, Ym = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Corner Triangle300" } = {}) => nt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 7 7"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
    width="${e}"
    height="${t}"
  >
    <path
      d="M6.683.67a.32.32 0 0 0-.223.093l-5.7 5.7a.316.316 0 0 0 .224.54h5.7A.316.316 0 0 0 7 6.687V.986A.316.316 0 0 0 6.684.67z"
    />
  </svg>`;
class Jm extends ut {
  render() {
    return Kt(C), this.spectrumVersion === 2 ? Zm({ hidden: !this.label, title: this.label }) : Ym({ hidden: !this.label, title: this.label });
  }
}
J("sp-icon-corner-triangle300", Jm);
var Qm = Object.defineProperty, tp = Object.getOwnPropertyDescriptor, ce = (e, t, r, o) => {
  for (var s = o > 1 ? void 0 : o ? tp(t, r) : t, a = e.length - 1, c; a >= 0; a--) (c = e[a]) && (s = (o ? c(t, r, s) : c(s)) || s);
  return o && s && Qm(t, r, s), s;
};
const ep = { xs: "spectrum-UIIcon-CornerTriangle75", s: "spectrum-UIIcon-CornerTriangle75", m: "spectrum-UIIcon-CornerTriangle100", l: "spectrum-UIIcon-CornerTriangle200", xl: "spectrum-UIIcon-CornerTriangle300" }, rp = 300;
let xa;
class Zt extends ge(dr, { validSizes: ["xs", "s", "m", "l", "xl"], noDefaultSize: !0 }) {
  constructor() {
    super(), this.emphasized = !1, this.holdAffordance = !1, this.quiet = !1, this.role = "button", this.selected = !1, this.toggles = !1, this._value = "", this.onClick = () => {
      this.toggles && (this.selected = !this.selected, this.dispatchEvent(new Event("change", { cancelable: !0, bubbles: !0, composed: !0 })) || (this.selected = !this.selected));
    }, this.addEventListener("click", this.onClick);
  }
  static get styles() {
    return [...super.styles, Gm, Xm];
  }
  get value() {
    return this._value || this.itemText;
  }
  set value(t) {
    t !== this._value && (this._value = t || "", this._value ? this.setAttribute("value", this._value) : this.removeAttribute("value"));
  }
  get itemText() {
    return (this.textContent || "").trim();
  }
  handlePointerdownHoldAffordance(t) {
    t.button === 0 && (this.addEventListener("pointerup", this.handlePointerupHoldAffordance), this.addEventListener("pointercancel", this.handlePointerupHoldAffordance), xa = setTimeout(() => {
      this.dispatchEvent(new CustomEvent("longpress", { bubbles: !0, composed: !0, detail: { source: "pointer" } }));
    }, rp));
  }
  handlePointerupHoldAffordance() {
    clearTimeout(xa), this.removeEventListener("pointerup", this.handlePointerupHoldAffordance), this.removeEventListener("pointercancel", this.handlePointerupHoldAffordance);
  }
  handleKeydown(t) {
    if (!this.holdAffordance) return super.handleKeydown(t);
    const { code: r, altKey: o } = t;
    (r === "Space" || o && r === "ArrowDown") && (t.preventDefault(), r === "ArrowDown" && t.stopImmediatePropagation(), this.addEventListener("keyup", this.handleKeyup), this.active = !0);
  }
  handleKeyup(t) {
    if (!this.holdAffordance) return super.handleKeyup(t);
    const { code: r, altKey: o } = t;
    (r === "Space" || o && r === "ArrowDown") && (t.stopPropagation(), this.dispatchEvent(new CustomEvent("longpress", { bubbles: !0, composed: !0, detail: { source: "keyboard" } })), this.active = !1);
  }
  get buttonContent() {
    const t = super.buttonContent;
    return this.holdAffordance && t.unshift(C`
                <sp-icon-corner-triangle300
                    class="hold-affordance ${ep[this.size]}"
                ></sp-icon-corner-triangle300>
            `), t;
  }
  updated(t) {
    super.updated(t);
    const r = this.role === "button", o = r && (this.selected || this.toggles) && !(this.hasAttribute("aria-haspopup") && this.hasAttribute("aria-expanded"));
    (t.has("selected") || t.has("role")) && (o ? this.setAttribute("aria-pressed", this.selected ? "true" : "false") : (this.removeAttribute("aria-pressed"), r && this.toggles && this.hasAttribute("aria-expanded") && this.setAttribute("aria-expanded", this.selected ? "true" : "false"))), t.has("holdAffordance") && (this.holdAffordance ? this.addEventListener("pointerdown", this.handlePointerdownHoldAffordance) : (this.removeEventListener("pointerdown", this.handlePointerdownHoldAffordance), this.handlePointerupHoldAffordance()));
  }
}
ce([z({ type: Boolean, reflect: !0 })], Zt.prototype, "emphasized", 2), ce([z({ type: Boolean, reflect: !0, attribute: "hold-affordance" })], Zt.prototype, "holdAffordance", 2), ce([z({ type: Boolean, reflect: !0 })], Zt.prototype, "quiet", 2), ce([z({ reflect: !0 })], Zt.prototype, "role", 2), ce([z({ type: Boolean, reflect: !0 })], Zt.prototype, "selected", 2), ce([z({ type: Boolean, reflect: !0 })], Zt.prototype, "toggles", 2), ce([z({ reflect: !0, attribute: "static-color" })], Zt.prototype, "staticColor", 2), ce([z({ type: String })], Zt.prototype, "value", 1);
J("sp-action-button", Zt);
const op = [
  "s",
  "m",
  "l"
], sp = ["white", "black"];
var ap = Object.defineProperty, Kc = (e, t, r, o) => {
  for (var s = void 0, a = e.length - 1, c; a >= 0; a--)
    (c = e[a]) && (s = c(t, r, s) || s);
  return s && ap(t, r, s), s;
};
class uo extends ge(Vt, {
  validSizes: op,
  /**@todo the design spec says the default size is small but we declare no default size */
  noDefaultSize: !0
}) {
  constructor() {
    super(...arguments), this.vertical = !1;
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.setAttribute("role", "separator");
  }
  updated(t) {
    super.updated(t), t.has("vertical") && (this.vertical ? this.setAttribute("aria-orientation", "vertical") : this.removeAttribute("aria-orientation"));
  }
}
uo.STATIC_COLORS = sp;
Kc([
  z({ type: Boolean, reflect: !0 })
], uo.prototype, "vertical");
Kc([
  z({ reflect: !0, attribute: "static-color" })
], uo.prototype, "staticColor");
const cp = st`
    @media (forced-colors:active){:host{--highcontrast-divider-background-color:CanvasText}}:host{--spectrum-divider-thickness:var(--spectrum-divider-thickness-medium)}:host([size=s]){--spectrum-divider-thickness:var(--spectrum-divider-thickness-small)}:host([size=l]){--spectrum-divider-thickness:var(--spectrum-divider-thickness-large);--spectrum-divider-background-color:var(--spectrum-gray-800)}:host([static-color=white]){--mod-divider-background-color:var(--mod-divider-background-color-medium-static-white,var(--spectrum-divider-background-color-static-white))}:host([static-color=white][size=s]){--mod-divider-background-color:var(--mod-divider-background-color-small-static-white,var(--spectrum-divider-background-color-static-white))}:host([static-color=white][size=l]){--mod-divider-background-color:var(--mod-divider-background-color-large-static-white,var(--spectrum-transparent-white-800))}:host([static-color=black]){--mod-divider-background-color:var(--mod-divider-background-color-medium-static-black,var(--spectrum-divider-background-color-static-black))}:host([static-color=black][size=s]){--mod-divider-background-color:var(--mod-divider-background-color-small-static-black,var(--spectrum-divider-background-color-static-black))}:host([static-color=black][size=l]){--mod-divider-background-color:var(--mod-divider-background-color-large-static-black,var(--spectrum-transparent-black-800))}:host{block-size:var(--mod-divider-thickness,var(--spectrum-divider-thickness));border:none;border-width:var(--mod-divider-thickness,var(--spectrum-divider-thickness));border-radius:var(--mod-divider-thickness,var(--spectrum-divider-thickness));background-color:var(--highcontrast-divider-background-color,var(--mod-divider-background-color,var(--spectrum-divider-background-color)));inline-size:100%;overflow:visible}:host([vertical]){inline-size:var(--mod-divider-thickness,var(--spectrum-divider-thickness));block-size:100%;block-size:var(--mod-divider-vertical-height,100%);margin-block:var(--mod-divider-vertical-margin);align-self:var(--mod-divider-vertical-align)}:host{--spectrum-divider-background-color:var(--system-divider-background-color);--spectrum-divider-background-color-static-white:var(--system-divider-background-color-static-white);--spectrum-divider-background-color-static-black:var(--system-divider-background-color-static-black)}:host{display:block}hr{border:none;margin:0}
`;
class Wc extends uo {
  render() {
    return C``;
  }
}
Wc.styles = [cp];
J("sp-divider", Wc);
const ip = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Asterisk100" } = {}) => nt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
    width="${e}"
    height="${t}"
  >
    <path
      d="M6.575 6.555c.055.056.092.13 0 .2l-1.149.741c-.092.056-.129.019-.166-.074L3.834 4.94 1.963 7c-.019.036-.074.073-.129 0l-.889-.927c-.093-.055-.074-.111 0-.166l2.111-1.76L.648 3.24c-.037 0-.092-.074-.056-.167l.63-1.259a.097.097 0 0 1 .167-.036L3.5 3.148l.13-2.7a.1.1 0 0 1 .081-.111h.03l1.537.2c.093 0 .111.037.093.13l-.723 2.647 2.445-.741c.055-.037.111-.037.148.074l.241 1.37c.018.093 0 .13-.074.13l-2.556.2z"
    />
  </svg>`, np = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Asterisk100" } = {}) => nt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
    width="${e}"
    height="${t}"
  >
    <path
      d="M6.575 6.555c.055.056.092.13 0 .2l-1.149.741c-.092.056-.129.019-.166-.074L3.834 4.94 1.963 7c-.019.036-.074.073-.129 0l-.889-.927c-.093-.055-.074-.111 0-.166l2.111-1.76L.648 3.24c-.037 0-.092-.074-.056-.167l.63-1.259a.097.097 0 0 1 .167-.036L3.5 3.148l.13-2.7a.1.1 0 0 1 .081-.111h.03l1.537.2c.093 0 .111.037.093.13l-.723 2.647 2.445-.741c.055-.037.111-.037.148.074l.241 1.37c.018.093 0 .13-.074.13l-2.556.2z"
    />
  </svg>`;
class lp extends ut {
  render() {
    return Kt(C), this.spectrumVersion === 2 ? ip({ hidden: !this.label, title: this.label }) : np({ hidden: !this.label, title: this.label });
  }
}
J("sp-icon-asterisk100", lp);
const up = st`
    .spectrum-UIIcon-Asterisk75{--spectrum-icon-size:var(--spectrum-asterisk-icon-size-75)}.spectrum-UIIcon-Asterisk100{--spectrum-icon-size:var(--spectrum-asterisk-icon-size-100)}.spectrum-UIIcon-Asterisk200{--spectrum-icon-size:var(--spectrum-asterisk-icon-size-200)}.spectrum-UIIcon-Asterisk300{--spectrum-icon-size:var(--spectrum-asterisk-icon-size-300)}
`, Gc = Symbol("element resolver updated");
class mp {
  constructor(t, { selector: r } = { selector: "" }) {
    this._element = null, this._selector = "", this.mutationCallback = (o) => {
      let s = !1;
      o.forEach((a) => {
        if (!s) {
          if (a.type === "childList") {
            const c = this.element && [...a.removedNodes].includes(this.element), i = !!this.selector && [...a.addedNodes].some(this.elementIsSelected);
            s = s || c || i;
          }
          if (a.type === "attributes") {
            const c = a.target === this.element, i = !!this.selector && this.elementIsSelected(a.target);
            s = s || c || i;
          }
        }
      }), s && this.resolveElement();
    }, this.elementIsSelected = (o) => {
      var s;
      return this.selectorIsId ? (o == null ? void 0 : o.id) === this.selectorAsId : (s = o == null ? void 0 : o.matches) == null ? void 0 : s.call(o, this.selector);
    }, this.host = t, this.selector = r, this.observer = new MutationObserver(this.mutationCallback), this.host.addController(this);
  }
  get element() {
    return this._element;
  }
  set element(t) {
    if (t === this.element) return;
    const r = this.element;
    this._element = t, this.host.requestUpdate(Gc, r);
  }
  get selector() {
    return this._selector;
  }
  set selector(t) {
    t !== this.selector && (this.releaseElement(), this._selector = t, this.resolveElement());
  }
  get selectorAsId() {
    return this.selector.slice(1);
  }
  get selectorIsId() {
    return !!this.selector && this.selector.startsWith("#");
  }
  hostConnected() {
    this.resolveElement(), this.observer.observe(this.host.getRootNode(), { subtree: !0, childList: !0, attributes: !0 });
  }
  hostDisconnected() {
    this.releaseElement(), this.observer.disconnect();
  }
  resolveElement() {
    if (!this.selector) {
      this.releaseElement();
      return;
    }
    const t = this.host.getRootNode();
    this.element = this.selectorIsId ? t.getElementById(this.selectorAsId) : t.querySelector(this.selector);
  }
  releaseElement() {
    this.element = null;
  }
}
const pp = st`
            /*!
 * Copyright 2025 Adobe. All rights reserved. This file is licensed to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License./
 * 
 *  Override divider background color when used inside alert-dialog/
 * .divider {
 *     --spectrum-divider-background-color: var(--system-alert-dialog-divider-background-color);
 *     --spectrum-divider-background-color-static-white: var(--spectrum-alert-dialog-divider-background-color-static-white);
 *     --spectrum-divider-background-color-static-black: var(--spectrum-alert-dialog-divider-background-color-static-black);
 * }
 */
:host,:host{--spectrum-field-label-min-height:var(--spectrum-component-height-75);--spectrum-field-label-font-size:var(--spectrum-font-size-75);--spectrum-field-label-side-margin-block-start:var(--spectrum-field-label-top-margin-medium);--spectrum-field-label-side-padding-right:var(--spectrum-spacing-200);--spectrum-field-label-text-to-asterisk:var(--spectrum-field-label-text-to-asterisk-medium)}:host([size=s]){--spectrum-field-label-min-height:var(--spectrum-component-height-75);--spectrum-field-label-font-size:var(--spectrum-font-size-75);--spectrum-field-label-side-margin-block-start:var(--spectrum-field-label-top-margin-small);--spectrum-field-label-side-padding-right:var(--spectrum-spacing-100);--spectrum-field-label-text-to-asterisk:var(--spectrum-field-label-text-to-asterisk-small)}:host([size=l]){--spectrum-field-label-min-height:var(--spectrum-component-height-100);--spectrum-field-label-font-size:var(--spectrum-font-size-100);--spectrum-field-label-side-margin-block-start:var(--spectrum-field-label-top-margin-large);--spectrum-field-label-side-padding-right:var(--spectrum-spacing-200);--spectrum-field-label-text-to-asterisk:var(--spectrum-field-label-text-to-asterisk-large)}:host([size=xl]){--spectrum-field-label-min-height:var(--spectrum-component-height-200);--spectrum-field-label-font-size:var(--spectrum-font-size-200);--spectrum-field-label-side-margin-block-start:var(--spectrum-field-label-top-margin-extra-large);--spectrum-field-label-side-padding-right:var(--spectrum-spacing-200);--spectrum-field-label-text-to-asterisk:var(--spectrum-field-label-text-to-asterisk-extra-large)}:host{box-sizing:border-box;min-block-size:var(--mod-fieldlabel-min-height,var(--spectrum-field-label-min-height));padding-block:var(--mod-fieldlabel-padding-block,var(--mod-field-label-top-to-text,var(--spectrum-field-label-top-to-text))var(--mod-field-label-bottom-to-text,var(--spectrum-field-label-bottom-to-text)));padding-inline:0;padding-inline:var(--mod-fieldlabel-padding-inline,0);margin-block:0;margin-block:var(--mod-fieldlabel-margin-block,var(--mod-fieldlabel-margin-block-start,0)var(--mod-fieldlabel-margin-block-end,0));margin-inline:0;margin-inline:var(--mod-fieldlabel-margin-inline,var(--mod-fieldlabel-margin-inline-start,0)var(--mod-fieldlabel-margin-inline-end,0));font-size:var(--mod-fieldlabel-font-size,var(--spectrum-field-label-font-size));font-weight:var(--mod-fieldlabel-font-weight,var(--spectrum-regular-font-weight));line-height:var(--mod-fieldlabel-line-height,var(--spectrum-line-height-100));-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto;color:var(--highcontrast-field-label-content-color,var(--mod-fieldlabel-color,var(--spectrum-neutral-subdued-content-color-default)));display:block}:host(:lang(ja)),:host(:lang(ko)),:host(:lang(zh)){--mod-fieldlabel-line-height:var(--mod-fieldlabel-line-height-cjk,var(--spectrum-cjk-line-height-100))}:host([disabled]){--mod-fieldlabel-color:var(--mod-disabled-content-color,var(--spectrum-disabled-content-color))}.required-icon{color:inherit;margin-block:0;margin-inline:var(--mod-field-label-text-to-asterisk,var(--spectrum-field-label-text-to-asterisk))0;vertical-align:initial;vertical-align:var(--mod-field-label-asterisk-vertical-align,baseline)}:host([side-aligned=start]),:host([side-aligned=end]){vertical-align:top;margin-block-start:var(--mod-fieldlabel-side-margin-block-start,var(--spectrum-field-label-side-margin-block-start));margin-block-end:0;margin-inline-end:var(--mod-fieldlabel-side-padding-right,var(--spectrum-field-label-side-padding-right));display:inline-block}:host([side-aligned=end]){text-align:end}@media (forced-colors:active){:host([disabled]){--highcontrast-field-label-content-color:GrayText}}:host{--spectrum-field-label-top-to-text:var(--system-field-label-top-to-text);--spectrum-field-label-bottom-to-text:var(--system-field-label-bottom-to-text)}:host([size=s]){--spectrum-field-label-top-to-text:var(--system-field-label-top-to-text-small);--spectrum-field-label-bottom-to-text:var(--system-field-label-bottom-to-text-small)}:host([size=l]){--spectrum-field-label-top-to-text:var(--system-field-label-top-to-text-large);--spectrum-field-label-bottom-to-text:var(--system-field-label-bottom-to-text-large)}:host([size=xl]){--spectrum-field-label-top-to-text:var(--system-field-label-top-to-text-extra-large);--spectrum-field-label-bottom-to-text:var(--system-field-label-bottom-to-text-extra-large)}label{display:inline-block}
        `;
var dp = Object.defineProperty, Be = (e, t, r, o) => {
  for (var s = void 0, a = e.length - 1, c; a >= 0; a--) (c = e[a]) && (s = c(t, r, s) || s);
  return s && dp(t, r, s), s;
};
class je extends ge(Vt, { noDefaultSize: !0 }) {
  constructor() {
    super(...arguments), this.disabled = !1, this.id = "", this.for = "", this.required = !1, this.resolvedElement = new mp(this);
  }
  static get styles() {
    return [pp, up];
  }
  handleClick(t) {
    if (!this.target || this.disabled || t.defaultPrevented) return;
    this.target.focus();
    const r = this.getRootNode(), o = this.target, s = o.getRootNode(), a = s.host;
    s === r && o.forceFocusVisible ? o.forceFocusVisible() : a && a.forceFocusVisible && a.forceFocusVisible();
  }
  applyTargetLabel(t) {
    if (this.target = t || this.target, this.target) {
      const r = this.target.applyFocusElementLabel, o = this.target.focusElement || this.target, s = o.getRootNode();
      typeof r < "u" ? r(this.labelText, this) : s === this.getRootNode() ? (t ? Uc : Rc)(o, "aria-labelledby", [this.id]) : t ? o.setAttribute("aria-label", this.labelText) : o.removeAttribute("aria-label");
    }
  }
  async manageTarget() {
    this.applyTargetLabel();
    const t = this.resolvedElement.element;
    if (!t) {
      this.target = t;
      return;
    }
    t.localName.search("-") > 0 && await customElements.whenDefined(t.localName), typeof t.updateComplete < "u" && await t.updateComplete, this.applyTargetLabel(t);
  }
  get labelText() {
    const t = this.slotEl.assignedNodes({ flatten: !0 });
    return t.length ? t.map((r) => (r.textContent || "").trim()).join(" ") : "";
  }
  render() {
    return C`
            <label>
                <slot></slot>
                ${this.required ? C`
                          <sp-icon-asterisk100
                              class="required-icon spectrum-UIIcon-Asterisk100"
                          ></sp-icon-asterisk100>
                      ` : Z}
            </label>
        `;
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.addEventListener("click", this.handleClick);
  }
  willUpdate(t) {
    this.hasAttribute("id") || this.setAttribute("id", `${this.tagName.toLowerCase()}-${Xo()}`), t.has("for") && (this.resolvedElement.selector = this.for ? `#${this.for}` : ""), (t.has("id") || t.has(Gc)) && this.manageTarget();
  }
}
Be([z({ type: Boolean, reflect: !0 })], je.prototype, "disabled"), Be([z({ type: String })], je.prototype, "id"), Be([z({ type: String })], je.prototype, "for"), Be([z({ type: Boolean, reflect: !0 })], je.prototype, "required"), Be([Hr("slot")], je.prototype, "slotEl"), Be([z({ type: String, reflect: !0, attribute: "side-aligned" })], je.prototype, "sideAligned");
J("sp-field-label", je);
var gp = Object.defineProperty, bp = (e, t, r, o) => {
  for (var s = void 0, a = e.length - 1, c; a >= 0; a--)
    (c = e[a]) && (s = c(t, r, s) || s);
  return s && gp(t, r, s), s;
};
let Xc = class extends ge(Vt, {
  noDefaultSize: !0
}) {
  constructor() {
    super(...arguments), this.variant = "info";
  }
  // ──────────────────────
  //     IMPLEMENTATION
  // ──────────────────────
  updated(t) {
    var r;
    if (super.updated(t), (r = window.__swc) != null && r.DEBUG) {
      const o = this.constructor;
      o.VARIANTS.includes(this.variant) || window.__swc.warn(
        this,
        `<${this.localName}> element expects the "variant" attribute to be one of the following:`,
        "https://opensource.adobe.com/spectrum-web-components/components/status-light/#variants",
        {
          issues: [...o.VARIANTS]
        }
      ), this.hasAttribute("disabled") && !("disabled" in this) && window.__swc.warn(
        this,
        `<${this.localName}> element does not support the disabled state.`,
        "https://opensource.adobe.com/spectrum-web-components/components/status-light/#states",
        {
          issues: [
            "disabled is not a supported property in Spectrum 2"
          ]
        }
      );
    }
  }
};
bp([
  z({ type: String, reflect: !0 })
], Xc.prototype, "variant");
const hp = [
  "neutral",
  "info",
  "positive",
  "negative",
  "notice"
], Zc = [
  ...hp,
  "accent"
], zs = [
  "fuchsia",
  "indigo",
  "magenta",
  "purple",
  "seafoam",
  "yellow",
  "chartreuse",
  "celery",
  "cyan"
];
[
  ...zs
];
const fp = [
  ...Zc,
  ...zs
], vp = st`
    :host([dir]),:host{--spectrum-statuslight-height:var(--spectrum-component-height-100);--spectrum-statuslight-dot-size:var(--spectrum-status-light-dot-size-medium);--spectrum-statuslight-font-size:var(--spectrum-font-size-100);--spectrum-statuslight-spacing-dot-to-label:var(--spectrum-text-to-visual-100);--spectrum-statuslight-spacing-top-to-dot:var(--spectrum-status-light-top-to-dot-medium);--spectrum-statuslight-spacing-top-to-label:var(--spectrum-component-top-to-text-100);--spectrum-statuslight-spacing-bottom-to-label:var(--spectrum-component-bottom-to-text-100)}:host([size=s]){--spectrum-statuslight-height:var(--spectrum-component-height-75);--spectrum-statuslight-dot-size:var(--spectrum-status-light-dot-size-small);--spectrum-statuslight-font-size:var(--spectrum-font-size-75);--spectrum-statuslight-spacing-dot-to-label:var(--spectrum-text-to-visual-75);--spectrum-statuslight-spacing-top-to-dot:var(--spectrum-status-light-top-to-dot-small);--spectrum-statuslight-spacing-top-to-label:var(--spectrum-component-top-to-text-75);--spectrum-statuslight-spacing-bottom-to-label:var(--spectrum-component-bottom-to-text-75)}:host([size=l]){--spectrum-statuslight-height:var(--spectrum-component-height-200);--spectrum-statuslight-dot-size:var(--spectrum-status-light-dot-size-large);--spectrum-statuslight-font-size:var(--spectrum-font-size-200);--spectrum-statuslight-spacing-dot-to-label:var(--spectrum-text-to-visual-200);--spectrum-statuslight-spacing-top-to-dot:var(--spectrum-status-light-top-to-dot-large);--spectrum-statuslight-spacing-top-to-label:var(--spectrum-component-top-to-text-200);--spectrum-statuslight-spacing-bottom-to-label:var(--spectrum-component-bottom-to-text-200)}:host([size=xl]){--spectrum-statuslight-height:var(--spectrum-component-height-300);--spectrum-statuslight-dot-size:var(--spectrum-status-light-dot-size-extra-large);--spectrum-statuslight-font-size:var(--spectrum-font-size-300);--spectrum-statuslight-spacing-dot-to-label:var(--spectrum-text-to-visual-300);--spectrum-statuslight-spacing-top-to-dot:var(--spectrum-status-light-top-to-dot-extra-large);--spectrum-statuslight-spacing-top-to-label:var(--spectrum-component-top-to-text-300);--spectrum-statuslight-spacing-bottom-to-label:var(--spectrum-component-bottom-to-text-300)}:host([dir]){--spectrum-statuslight-corner-radius:50%;--spectrum-statuslight-font-weight:400;--spectrum-statuslight-border-width:var(--spectrum-border-width-100);--spectrum-statuslight-line-height:var(--spectrum-line-height-100);--spectrum-statuslight-line-height-cjk:var(--spectrum-cjk-line-height-100);--spectrum-statuslight-content-color-default:var(--spectrum-neutral-content-color-default);--spectrum-statuslight-subdued-content-color-default:var(--spectrum-neutral-subdued-content-color-default);--spectrum-statuslight-semantic-neutral-color:var(--spectrum-neutral-visual-color);--spectrum-statuslight-semantic-accent-color:var(--spectrum-accent-visual-color);--spectrum-statuslight-semantic-negative-color:var(--spectrum-negative-visual-color);--spectrum-statuslight-semantic-info-color:var(--spectrum-informative-visual-color);--spectrum-statuslight-semantic-notice-color:var(--spectrum-notice-visual-color);--spectrum-statuslight-semantic-positive-color:var(--spectrum-positive-visual-color);--spectrum-statuslight-nonsemantic-gray-color:var(--spectrum-gray-visual-color);--spectrum-statuslight-nonsemantic-red-color:var(--spectrum-red-visual-color);--spectrum-statuslight-nonsemantic-orange-color:var(--spectrum-orange-visual-color);--spectrum-statuslight-nonsemantic-yellow-color:var(--spectrum-yellow-visual-color);--spectrum-statuslight-nonsemantic-chartreuse-color:var(--spectrum-chartreuse-visual-color);--spectrum-statuslight-nonsemantic-celery-color:var(--spectrum-celery-visual-color);--spectrum-statuslight-nonsemantic-green-color:var(--spectrum-green-visual-color);--spectrum-statuslight-nonsemantic-seafoam-color:var(--spectrum-seafoam-visual-color);--spectrum-statuslight-nonsemantic-cyan-color:var(--spectrum-cyan-visual-color);--spectrum-statuslight-nonsemantic-blue-color:var(--spectrum-blue-visual-color);--spectrum-statuslight-nonsemantic-indigo-color:var(--spectrum-indigo-visual-color);--spectrum-statuslight-nonsemantic-purple-color:var(--spectrum-purple-visual-color);--spectrum-statuslight-nonsemantic-fuchsia-color:var(--spectrum-fuchsia-visual-color);--spectrum-statuslight-nonsemantic-magenta-color:var(--spectrum-magenta-visual-color);min-block-size:var(--mod-statuslight-height,var(--spectrum-statuslight-height));box-sizing:border-box;font-size:var(--mod-statuslight-font-size,var(--spectrum-statuslight-font-size));font-weight:400;font-weight:var(--mod-statuslight-font-weight,var(--spectrum-statuslight-font-weight));line-height:var(--mod-statuslight-line-height,var(--spectrum-statuslight-line-height));color:var(--highcontrast-statuslight-content-color-default,var(--mod-statuslight-content-color-default,var(--spectrum-statuslight-content-color-default)));flex-direction:row;align-items:flex-start;padding-block-start:var(--mod-statuslight-spacing-top-to-label,var(--spectrum-statuslight-spacing-top-to-label));padding-block-end:var(--mod-statuslight-spacing-bottom-to-label,var(--spectrum-statuslight-spacing-bottom-to-label));padding-inline:0;display:flex}:host(:lang(ja)),:host(:lang(ko)),:host(:lang(zh)){line-height:var(--mod-statuslight-line-height-cjk,var(--spectrum-statuslight-line-height-cjk))}:host:before{--spectrum-statuslight-spacing-computed-top-to-dot:calc(var(--mod-statuslight-spacing-top-to-dot,var(--spectrum-statuslight-spacing-top-to-dot)) - var(--mod-statuslight-spacing-top-to-label,var(--spectrum-statuslight-spacing-top-to-label)));content:"";inline-size:var(--mod-statuslight-dot-size,var(--spectrum-statuslight-dot-size));block-size:var(--mod-statuslight-dot-size,var(--spectrum-statuslight-dot-size));border-radius:var(--mod-statuslight-corner-radius,var(--spectrum-statuslight-corner-radius));flex-grow:0;flex-shrink:0;margin-block-start:var(--spectrum-statuslight-spacing-computed-top-to-dot);margin-inline-end:var(--mod-statuslight-spacing-dot-to-label,var(--spectrum-statuslight-spacing-dot-to-label));display:inline-block}:host([variant=neutral]){color:var(--highcontrast-statuslight-subdued-content-color-default,var(--mod-statuslight-subdued-content-color-default,var(--spectrum-statuslight-subdued-content-color-default)));font-style:italic}:host([variant=neutral]):before{background-color:var(--mod-statuslight-semantic-neutral-color,var(--spectrum-statuslight-semantic-neutral-color))}:host([variant=accent]):before{background-color:var(--mod-statuslight-semantic-accent-color,var(--spectrum-statuslight-semantic-accent-color))}:host([variant=info]):before{background-color:var(--mod-statuslight-semantic-info-color,var(--spectrum-statuslight-semantic-info-color))}:host([variant=negative]):before{background-color:var(--mod-statuslight-semantic-negative-color,var(--spectrum-statuslight-semantic-negative-color))}:host([variant=notice]):before{background-color:var(--mod-statuslight-semantic-notice-color,var(--spectrum-statuslight-semantic-notice-color))}:host([variant=positive]):before{background-color:var(--mod-statuslight-semantic-positive-color,var(--spectrum-statuslight-semantic-positive-color))}.spectrum-StatusLight--gray:before{background-color:var(--mod-statuslight-nonsemantic-gray-color,var(--spectrum-statuslight-nonsemantic-gray-color))}.spectrum-StatusLight--red:before{background-color:var(--mod-statuslight-nonsemantic-red-color,var(--spectrum-statuslight-nonsemantic-red-color))}.spectrum-StatusLight--orange:before{background-color:var(--mod-statuslight-nonsemantic-orange-color,var(--spectrum-statuslight-nonsemantic-orange-color))}:host([variant=yellow]):before{background-color:var(--mod-statuslight-nonsemantic-yellow-color,var(--spectrum-statuslight-nonsemantic-yellow-color))}:host([variant=chartreuse]):before{background-color:var(--mod-statuslight-nonsemantic-chartreuse-color,var(--spectrum-statuslight-nonsemantic-chartreuse-color))}:host([variant=celery]):before{background-color:var(--mod-statuslight-nonsemantic-celery-color,var(--spectrum-statuslight-nonsemantic-celery-color))}.spectrum-StatusLight--green:before{background-color:var(--mod-statuslight-nonsemantic-green-color,var(--spectrum-statuslight-nonsemantic-green-color))}:host([variant=seafoam]):before{background-color:var(--mod-statuslight-nonsemantic-seafoam-color,var(--spectrum-statuslight-nonsemantic-seafoam-color))}:host([variant=cyan]):before{background-color:var(--mod-statuslight-nonsemantic-cyan-color,var(--spectrum-statuslight-nonsemantic-cyan-color))}.spectrum-StatusLight--blue:before{background-color:var(--mod-statuslight-nonsemantic-blue-color,var(--spectrum-statuslight-nonsemantic-blue-color))}:host([variant=indigo]):before{background-color:var(--mod-statuslight-nonsemantic-indigo-color,var(--spectrum-statuslight-nonsemantic-indigo-color))}:host([variant=purple]):before{background-color:var(--mod-statuslight-nonsemantic-purple-color,var(--spectrum-statuslight-nonsemantic-purple-color))}:host([variant=fuchsia]):before{background-color:var(--mod-statuslight-nonsemantic-fuchsia-color,var(--spectrum-statuslight-nonsemantic-fuchsia-color))}:host([variant=magenta]):before{background-color:var(--mod-statuslight-nonsemantic-magenta-color,var(--spectrum-statuslight-nonsemantic-magenta-color))}@media (forced-colors:active){:host([dir]){--highcontrast-statuslight-content-color-default:CanvasText;--highcontrast-statuslight-subdued-content-color-default:CanvasText;forced-color-adjust:none}:host:before{forced-color-adjust:none;border:var(--mod-statuslight-border-width,var(--spectrum-statuslight-border-width))solid ButtonText}}:host([disabled]):before{background-color:var(--spectrum-statuslight-dot-color-disabled,var(--spectrum-gray-400))}
`;
var yp = Object.defineProperty, wa = (e, t, r, o) => {
  for (var s = void 0, a = e.length - 1, c; a >= 0; a--) (c = e[a]) && (s = c(t, r, s) || s);
  return s && yp(t, r, s), s;
};
class Pe extends Xc {
  constructor() {
    super(...arguments), this.variant = "info", this.disabled = !1;
  }
  updated(t) {
    super.updated(t), t.has("disabled") && (this.disabled ? this.setAttribute("aria-disabled", "true") : this.removeAttribute("aria-disabled"));
  }
  static get styles() {
    return [vp];
  }
  render() {
    return C`
            <slot></slot>
        `;
  }
}
Pe.VARIANTS_COLOR = zs, Pe.VARIANTS_SEMANTIC = Zc, Pe.VARIANTS = fp, wa([z({ type: String, reflect: !0 })], Pe.prototype, "variant"), wa([z({ type: Boolean, reflect: !0 })], Pe.prototype, "disabled");
J("sp-status-light", Pe);
const kp = st`
    @media (forced-colors:active){:host{--highcontrast-illustrated-message-illustration-color:CanvasText;--highcontrast-illustrated-message-illustration-accent-color:Highlight}}:host{--spectrum-illustrated-message-description-max-inline-size:var(--spectrum-illustrated-message-maximum-width);--spectrum-illustrated-message-heading-max-inline-size:var(--spectrum-illustrated-message-maximum-width);--spectrum-illustrated-message-title-to-heading:var(--spectrum-spacing-400);--spectrum-illustrated-message-heading-to-description:var(--spectrum-spacing-75);--spectrum-illustrated-message-illustration-color:var(--spectrum-neutral-visual-color);--spectrum-illustrated-message-illustration-accent-color:var(--spectrum-accent-visual-color);--spectrum-illustrated-message-title-font-family:var(--spectrum-sans-font-family-stack);--spectrum-illustrated-message-title-font-weight:var(--spectrum-heading-sans-serif-font-weight);--spectrum-illustrated-message-title-font-style:var(--spectrum-heading-sans-serif-font-style);--spectrum-illustrated-message-title-font-size:var(--spectrum-illustrated-message-title-size);--spectrum-illustrated-message-title-line-height:var(--spectrum-heading-line-height);--spectrum-illustrated-message-title-color:var(--spectrum-heading-color);--spectrum-illustrated-message-description-font-family:var(--spectrum-sans-font-family-stack);--spectrum-illustrated-message-description-font-weight:var(--spectrum-body-sans-serif-font-weight);--spectrum-illustrated-message-description-font-style:var(--spectrum-body-sans-serif-font-style);--spectrum-illustrated-message-description-font-size:var(--spectrum-illustrated-message-body-size);--spectrum-illustrated-message-description-line-height:var(--spectrum-body-line-height);--spectrum-illustrated-message-description-color:var(--spectrum-body-color);block-size:100%;display:flex;display:var(--mod-illustrated-message-display,flex);text-align:center;pointer-events:auto;pointer-events:var(--mod-illustrated-message-pointer-events,auto);max-inline-size:var(--mod-illustrated-message-content-maximum-width);flex-direction:column;justify-content:center;align-items:center}:host:lang(ja),:host:lang(ko),:host:lang(zh){--spectrum-illustrated-message-title-font-size:var(--spectrum-illustrated-message-cjk-title-size)}#illustration{color:var(--highcontrast-illustrated-message-illustration-color,var(--mod-illustrated-message-illustration-color,var(--spectrum-illustrated-message-illustration-color)));fill:currentColor;stroke:currentColor;margin-block-end:var(--mod-illustrated-message-title-to-heading,var(--spectrum-illustrated-message-title-to-heading))}.spectrum-IllustratedMessage-accent{color:var(--highcontrast-illustrated-message-illustration-accent-color,var(--mod-illustrated-message-illustration-accent-color,var(--spectrum-illustrated-message-illustration-accent-color)));fill:currentColor;stroke:currentColor}#heading{font-family:var(--mod-illustrated-message-title-font-family,var(--spectrum-illustrated-message-title-font-family));font-weight:var(--mod-illustrated-message-title-font-weight,var(--spectrum-illustrated-message-title-font-weight));font-style:var(--mod-illustrated-message-title-font-style,var(--spectrum-illustrated-message-title-font-style));font-size:var(--mod-illustrated-message-title-font-size,var(--spectrum-illustrated-message-title-font-size));line-height:var(--mod-illustrated-message-title-line-height,var(--spectrum-illustrated-message-title-line-height));color:var(--mod-illustrated-message-title-color,var(--spectrum-illustrated-message-title-color));max-inline-size:var(--mod-illustrated-message-heading-max-inline-size,var(--spectrum-illustrated-message-heading-max-inline-size));margin-block-start:0;margin-block-end:var(--mod-illustrated-message-heading-to-body,0)}#description{position:var(--mod-illustrated-message-description-position);z-index:var(--mod-illustrated-message-description-z-index);pointer-events:auto;pointer-events:var(--mod-illustrated-message-description-pointer-events,auto);font-family:var(--mod-illustrated-message-description-font-family,var(--spectrum-illustrated-message-description-font-family));font-weight:var(--mod-illustrated-message-description-font-weight,var(--spectrum-illustrated-message-description-font-weight));font-style:var(--mod-illustrated-message-description-font-style,var(--spectrum-illustrated-message-description-font-style));font-size:var(--mod-illustrated-message-description-font-size,var(--spectrum-illustrated-message-description-font-size));line-height:var(--mod-illustrated-message-description-line-height,var(--spectrum-illustrated-message-description-line-height));color:var(--mod-illustrated-message-description-color,var(--spectrum-illustrated-message-description-color));max-inline-size:var(--mod-illustrated-message-description-max-inline-size,var(--spectrum-illustrated-message-description-max-inline-size));margin-block-start:var(--mod-illustrated-message-heading-to-description,var(--spectrum-illustrated-message-heading-to-description));margin-block-end:0}::slotted(svg[viewBox]){width:100%}
`, Yc = st`
    .spectrum{color:var(--spectrum-body-m-text-color,var(--spectrum-alias-text-color));font-family:var(--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base));font-size:var(--spectrum-alias-font-size-default,var(--spectrum-global-dimension-font-size-100))}
`, Jc = st`
    .spectrum-Typography:lang(ar){font-family:var(--spectrum-font-family-ar)}.spectrum-Typography:lang(he){font-family:var(--spectrum-font-family-he)}.spectrum-Heading:lang(ja),.spectrum-Heading:lang(ko),.spectrum-Heading:lang(zh){font-family:var(--mod-heading-cjk-font-family,var(--spectrum-heading-cjk-font-family));font-style:var(--mod-heading-cjk-font-style,var(--spectrum-heading-cjk-font-style));font-weight:var(--mod-heading-cjk-font-weight,var(--spectrum-heading-cjk-font-weight));font-size:var(--mod-heading-cjk-font-size,var(--spectrum-heading-cjk-font-size));line-height:var(--mod-heading-cjk-line-height,var(--spectrum-heading-cjk-line-height));letter-spacing:var(--mod-heading-cjk-letter-spacing,var(--spectrum-heading-cjk-letter-spacing))}.spectrum-Heading:lang(ja) .spectrum-Heading-emphasized,.spectrum-Heading:lang(ja) em,.spectrum-Heading:lang(ko) .spectrum-Heading-emphasized,.spectrum-Heading:lang(ko) em,.spectrum-Heading:lang(zh) .spectrum-Heading-emphasized,.spectrum-Heading:lang(zh) em{font-style:var(--mod-heading-cjk-emphasized-font-style,var(--spectrum-heading-cjk-emphasized-font-style));font-weight:var(--mod-heading-cjk-emphasized-font-weight,var(--spectrum-heading-cjk-emphasized-font-weight))}.spectrum-Heading:lang(ja) .spectrum-Heading-strong,.spectrum-Heading:lang(ja) strong,.spectrum-Heading:lang(ko) .spectrum-Heading-strong,.spectrum-Heading:lang(ko) strong,.spectrum-Heading:lang(zh) .spectrum-Heading-strong,.spectrum-Heading:lang(zh) strong{font-style:var(--mod-heading-cjk-strong-font-style,var(--spectrum-heading-cjk-strong-font-style));font-weight:var(--mod-heading-cjk-strong-font-weight,var(--spectrum-heading-cjk-strong-font-weight))}.spectrum-Heading:lang(ja) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading:lang(ja) em strong,.spectrum-Heading:lang(ja) strong em,.spectrum-Heading:lang(ko) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading:lang(ko) em strong,.spectrum-Heading:lang(ko) strong em,.spectrum-Heading:lang(zh) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading:lang(zh) em strong,.spectrum-Heading:lang(zh) strong em{font-style:var(--mod-heading-cjk-strong-emphasized-font-style,var(--spectrum-heading-cjk-strong-emphasized-font-style));font-weight:var(--mod-heading-cjk-strong-emphasized-font-weight,var(--spectrum-heading-cjk-strong-emphasized-font-weight))}.spectrum-Heading--heavy:lang(ja),.spectrum-Heading--heavy:lang(ko),.spectrum-Heading--heavy:lang(zh){font-style:var(--mod-heading-cjk-heavy-font-style,var(--spectrum-heading-cjk-heavy-font-style));font-weight:var(--mod-heading-cjk-heavy-font-weight,var(--spectrum-heading-cjk-heavy-font-weight))}.spectrum-Heading--heavy:lang(ja) .spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ja) em,.spectrum-Heading--heavy:lang(ko) .spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ko) em,.spectrum-Heading--heavy:lang(zh) .spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(zh) em{font-style:var(--mod-heading-cjk-heavy-emphasized-font-style,var(--spectrum-heading-cjk-heavy-emphasized-font-style));font-weight:var(--mod-heading-cjk-heavy-emphasized-font-weight,var(--spectrum-heading-cjk-heavy-emphasized-font-weight))}.spectrum-Heading--heavy:lang(ja) .spectrum-Heading-strong,.spectrum-Heading--heavy:lang(ja) strong,.spectrum-Heading--heavy:lang(ko) .spectrum-Heading-strong,.spectrum-Heading--heavy:lang(ko) strong,.spectrum-Heading--heavy:lang(zh) .spectrum-Heading-strong,.spectrum-Heading--heavy:lang(zh) strong{font-style:var(--mod-heading-cjk-heavy-strong-font-style,var(--spectrum-heading-cjk-heavy-strong-font-style));font-weight:var(--mod-heading-cjk-heavy-strong-font-weight,var(--spectrum-heading-cjk-heavy-strong-font-weight))}.spectrum-Heading--heavy:lang(ja) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ja) em strong,.spectrum-Heading--heavy:lang(ja) strong em,.spectrum-Heading--heavy:lang(ko) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ko) em strong,.spectrum-Heading--heavy:lang(ko) strong em,.spectrum-Heading--heavy:lang(zh) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(zh) em strong,.spectrum-Heading--heavy:lang(zh) strong em{font-style:var(--mod-heading-cjk-heavy-strong-emphasized-font-style,var(--spectrum-heading-cjk-heavy-strong-emphasized-font-style));font-weight:var(--mod-heading-cjk-heavy-strong-emphasized-font-weight,var(--spectrum-heading-cjk-heavy-strong-emphasized-font-weight))}.spectrum-Heading--light:lang(ja),.spectrum-Heading--light:lang(ko),.spectrum-Heading--light:lang(zh){font-style:var(--mod-heading-cjk-light-font-style,var(--spectrum-heading-cjk-light-font-style));font-weight:var(--mod-heading-cjk-light-font-weight,var(--spectrum-heading-cjk-light-font-weight))}.spectrum-Heading--light:lang(ja) .spectrum-Heading-strong,.spectrum-Heading--light:lang(ja) strong,.spectrum-Heading--light:lang(ko) .spectrum-Heading-strong,.spectrum-Heading--light:lang(ko) strong,.spectrum-Heading--light:lang(zh) .spectrum-Heading-strong,.spectrum-Heading--light:lang(zh) strong{font-style:var(--mod-heading-cjk-light-strong-font-style,var(--spectrum-heading-cjk-light-strong-font-style));font-weight:var(--mod-heading-cjk-light-strong-font-weight,var(--spectrum-heading-cjk-light-strong-font-weight))}.spectrum-Heading--light:lang(ja) .spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ja) em,.spectrum-Heading--light:lang(ko) .spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ko) em,.spectrum-Heading--light:lang(zh) .spectrum-Heading-emphasized,.spectrum-Heading--light:lang(zh) em{font-style:var(--mod-heading-cjk-light-emphasized-font-style,var(--spectrum-heading-cjk-light-emphasized-font-style));font-weight:var(--mod-heading-cjk-light-emphasized-font-weight,var(--spectrum-heading-cjk-light-emphasized-font-weight))}.spectrum-Heading--light:lang(ja) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ja) em strong,.spectrum-Heading--light:lang(ja) strong em,.spectrum-Heading--light:lang(ko) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ko) em strong,.spectrum-Heading--light:lang(ko) strong em,.spectrum-Heading--light:lang(zh) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light:lang(zh) em strong,.spectrum-Heading--light:lang(zh) strong em{font-style:var(--mod-heading-cjk-light-strong-emphasized-font-style,var(--spectrum-heading-cjk-light-strong-emphasized-font-style));font-weight:var(--mod-heading-cjk-light-strong-emphasized-font-weight,var(--spectrum-heading-cjk-light-strong-emphasized-font-weight))}.spectrum-Body:lang(ja),.spectrum-Body:lang(ko),.spectrum-Body:lang(zh){font-family:var(--mod-body-cjk-font-family,var(--spectrum-body-cjk-font-family));font-style:var(--mod-body-cjk-font-style,var(--spectrum-body-cjk-font-style));font-weight:var(--mod-body-cjk-font-weight,var(--spectrum-body-cjk-font-weight));line-height:var(--mod-body-cjk-line-height,var(--spectrum-body-cjk-line-height));letter-spacing:var(--mod-body-cjk-letter-spacing,var(--spectrum-body-cjk-letter-spacing))}.spectrum-Body:lang(ja) .spectrum-Body-strong,.spectrum-Body:lang(ja) strong,.spectrum-Body:lang(ko) .spectrum-Body-strong,.spectrum-Body:lang(ko) strong,.spectrum-Body:lang(zh) .spectrum-Body-strong,.spectrum-Body:lang(zh) strong{font-style:var(--mod-body-cjk-strong-font-style,var(--spectrum-body-cjk-strong-font-style));font-weight:var(--mod-body-cjk-strong-font-weight,var(--spectrum-body-cjk-strong-font-weight))}.spectrum-Body:lang(ja) .spectrum-Body-emphasized,.spectrum-Body:lang(ja) em,.spectrum-Body:lang(ko) .spectrum-Body-emphasized,.spectrum-Body:lang(ko) em,.spectrum-Body:lang(zh) .spectrum-Body-emphasized,.spectrum-Body:lang(zh) em{font-style:var(--mod-body-cjk-emphasized-font-style,var(--spectrum-body-cjk-emphasized-font-style));font-weight:var(--mod-body-cjk-emphasized-font-weight,var(--spectrum-body-cjk-emphasized-font-weight))}.spectrum-Body:lang(ja) .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body:lang(ja) em strong,.spectrum-Body:lang(ja) strong em,.spectrum-Body:lang(ko) .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body:lang(ko) em strong,.spectrum-Body:lang(ko) strong em,.spectrum-Body:lang(zh) .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body:lang(zh) em strong,.spectrum-Body:lang(zh) strong em{font-style:var(--mod-body-cjk-strong-emphasized-font-style,var(--spectrum-body-cjk-strong-emphasized-font-style));font-weight:var(--mod-body-cjk-strong-emphasized-font-weight,var(--spectrum-body-cjk-strong-emphasized-font-weight))}.spectrum-Detail:lang(ja),.spectrum-Detail:lang(ko),.spectrum-Detail:lang(zh){font-family:var(--mod-detail-cjk-font-family,var(--spectrum-detail-cjk-font-family));font-style:var(--mod-detail-cjk-font-style,var(--spectrum-detail-cjk-font-style));font-weight:var(--mod-detail-cjk-font-weight,var(--spectrum-detail-cjk-font-weight));line-height:var(--mod-detail-cjk-line-height,var(--spectrum-detail-cjk-line-height))}.spectrum-Detail:lang(ja) .spectrum-Detail-strong,.spectrum-Detail:lang(ja) strong,.spectrum-Detail:lang(ko) .spectrum-Detail-strong,.spectrum-Detail:lang(ko) strong,.spectrum-Detail:lang(zh) .spectrum-Detail-strong,.spectrum-Detail:lang(zh) strong{font-style:var(--mod-detail-cjk-strong-font-style,var(--spectrum-detail-cjk-strong-font-style));font-weight:var(--mod-detail-cjk-strong-font-weight,var(--spectrum-detail-cjk-strong-font-weight))}.spectrum-Detail:lang(ja) .spectrum-Detail-emphasized,.spectrum-Detail:lang(ja) em,.spectrum-Detail:lang(ko) .spectrum-Detail-emphasized,.spectrum-Detail:lang(ko) em,.spectrum-Detail:lang(zh) .spectrum-Detail-emphasized,.spectrum-Detail:lang(zh) em{font-style:var(--mod-detail-cjk-emphasized-font-style,var(--spectrum-detail-cjk-emphasized-font-style));font-weight:var(--mod-detail-cjk-emphasized-font-weight,var(--spectrum-detail-cjk-emphasized-font-weight))}.spectrum-Detail:lang(ja) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail:lang(ja) em strong,.spectrum-Detail:lang(ja) strong em,.spectrum-Detail:lang(ko) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail:lang(ko) em strong,.spectrum-Detail:lang(ko) strong em,.spectrum-Detail:lang(zh) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail:lang(zh) em strong,.spectrum-Detail:lang(zh) strong em{font-style:var(--mod-detail-cjk-strong-emphasized-font-style,var(--spectrum-detail-cjk-strong-emphasized-font-style));font-weight:var(--mod-detail-cjk-strong-emphasized-font-weight,var(--spectrum-detail-cjk-strong-emphasized-font-weight))}.spectrum-Detail--light:lang(ja),.spectrum-Detail--light:lang(ko),.spectrum-Detail--light:lang(zh){font-style:var(--mod-detail-cjk-light-font-style,var(--spectrum-detail-cjk-light-font-style));font-weight:var(--mod-detail-cjk-light-font-weight,var(--spectrum-detail-cjk-light-font-weight))}.spectrum-Detail--light:lang(ja) .spectrum-Detail-strong,.spectrum-Detail--light:lang(ja) strong,.spectrum-Detail--light:lang(ko) .spectrum-Detail-strong,.spectrum-Detail--light:lang(ko) strong,.spectrum-Detail--light:lang(zh) .spectrum-Detail-strong,.spectrum-Detail--light:lang(zh) strong{font-style:var(--mod-detail-cjk-light-strong-font-style,var(--spectrum-detail-cjk-light-strong-font-style));font-weight:var(--mod-detail-cjk-light-strong-font-weight,var(--spectrum-detail-cjk-light-strong-font-weight))}.spectrum-Detail--light:lang(ja) .spectrum-Detail-emphasized,.spectrum-Detail--light:lang(ja) em,.spectrum-Detail--light:lang(ko) .spectrum-Detail-emphasized,.spectrum-Detail--light:lang(ko) em,.spectrum-Detail--light:lang(zh) .spectrum-Detail-emphasized,.spectrum-Detail--light:lang(zh) em{font-style:var(--mod-detail-cjk-light-emphasized-font-style,var(--spectrum-detail-cjk-light-emphasized-font-style));font-weight:var(--mod-detail-cjk-light-emphasized-font-weight,var(--spectrum-detail-cjk-light-emphasized-font-weight))}.spectrum-Detail--light:lang(ja) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail--light:lang(ko) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail--light:lang(zh) .spectrum-Detail-strong.spectrum-Detail-emphasized{font-style:var(--mod-detail-cjk-light-strong-emphasized-font-style,var(--spectrum-detail-cjk-light-strong-emphasized-font-style));font-weight:var(--mod-detail-cjk-light-strong-emphasized-font-weight,var(--spectrum-detail-cjk-light-strong-emphasized-font-weight))}.spectrum-Code:lang(ja),.spectrum-Code:lang(ko),.spectrum-Code:lang(zh){font-family:var(--mod-code-cjk-font-family,var(--spectrum-code-cjk-font-family));font-style:var(--mod-code-cjk-font-style,var(--spectrum-code-cjk-font-style));font-weight:var(--mod-code-cjk-font-weight,var(--spectrum-code-cjk-font-weight));line-height:var(--mod-code-cjk-line-height,var(--spectrum-code-cjk-line-height));letter-spacing:var(--mod-code-cjk-letter-spacing,var(--spectrum-code-cjk-letter-spacing))}.spectrum-Code:lang(ja) .spectrum-Code-strong,.spectrum-Code:lang(ja) strong,.spectrum-Code:lang(ko) .spectrum-Code-strong,.spectrum-Code:lang(ko) strong,.spectrum-Code:lang(zh) .spectrum-Code-strong,.spectrum-Code:lang(zh) strong{font-style:var(--mod-code-cjk-strong-font-style,var(--spectrum-code-cjk-strong-font-style));font-weight:var(--mod-code-cjk-strong-font-weight,var(--spectrum-code-cjk-strong-font-weight))}.spectrum-Code:lang(ja) .spectrum-Code-emphasized,.spectrum-Code:lang(ja) em,.spectrum-Code:lang(ko) .spectrum-Code-emphasized,.spectrum-Code:lang(ko) em,.spectrum-Code:lang(zh) .spectrum-Code-emphasized,.spectrum-Code:lang(zh) em{font-style:var(--mod-code-cjk-emphasized-font-style,var(--spectrum-code-cjk-emphasized-font-style));font-weight:var(--mod-code-cjk-emphasized-font-weight,var(--spectrum-code-cjk-emphasized-font-weight))}.spectrum-Code:lang(ja) .spectrum-Code-strong.spectrum-Code-emphasized,.spectrum-Code:lang(ja) em strong,.spectrum-Code:lang(ja) strong em,.spectrum-Code:lang(ko) .spectrum-Code-strong.spectrum-Code-emphasized,.spectrum-Code:lang(ko) em strong,.spectrum-Code:lang(ko) strong em,.spectrum-Code:lang(zh) .spectrum-Code-strong.spectrum-Code-emphasized,.spectrum-Code:lang(zh) em strong,.spectrum-Code:lang(zh) strong em{font-style:var(--mod-code-cjk-strong-emphasized-font-style,var(--spectrum-code-cjk-strong-emphasized-font-style));font-weight:var(--mod-code-cjk-strong-emphasized-font-weight,var(--spectrum-code-cjk-strong-emphasized-font-weight))}
`, xp = st`
    .spectrum-Typography .spectrum-Heading{--spectrum-heading-margin-start:calc(var(--mod-heading-font-size,var(--spectrum-heading-font-size))*var(--spectrum-heading-margin-top-multiplier));--spectrum-heading-margin-end:calc(var(--mod-heading-font-size,var(--spectrum-heading-font-size))*var(--spectrum-heading-margin-bottom-multiplier))}@media (forced-colors:active){.spectrum-Heading{--highcontrast-heading-font-color:Text}}.spectrum-Heading,.spectrum-Heading--sizeM{--spectrum-heading-font-size:var(--spectrum-heading-size-m);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-m)}.spectrum-Heading--sizeXXS{--spectrum-heading-font-size:var(--spectrum-heading-size-xxs);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xxs)}.spectrum-Heading--sizeXS{--spectrum-heading-font-size:var(--spectrum-heading-size-xs);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xs)}.spectrum-Heading--sizeS{--spectrum-heading-font-size:var(--spectrum-heading-size-s);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-s)}.spectrum-Heading--sizeL{--spectrum-heading-font-size:var(--spectrum-heading-size-l);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-l)}.spectrum-Heading--sizeXL{--spectrum-heading-font-size:var(--spectrum-heading-size-xl);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xl)}.spectrum-Heading--sizeXXL{--spectrum-heading-font-size:var(--spectrum-heading-size-xxl);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xxl)}.spectrum-Heading--sizeXXXL{--spectrum-heading-font-size:var(--spectrum-heading-size-xxxl);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xxxl)}.spectrum-Heading{--spectrum-heading-sans-serif-font-family:var(--spectrum-sans-font-family-stack);--spectrum-heading-serif-font-family:var(--spectrum-serif-font-family-stack);--spectrum-heading-cjk-font-family:var(--spectrum-cjk-font-family-stack);--spectrum-heading-cjk-letter-spacing:var(--spectrum-cjk-letter-spacing);--spectrum-heading-font-color:var(--spectrum-heading-color);font-family:var(--mod-heading-sans-serif-font-family,var(--spectrum-heading-sans-serif-font-family));font-style:var(--mod-heading-sans-serif-font-style,var(--spectrum-heading-sans-serif-font-style));font-weight:var(--mod-heading-sans-serif-font-weight,var(--spectrum-heading-sans-serif-font-weight));font-size:var(--mod-heading-font-size,var(--spectrum-heading-font-size));color:var(--highcontrast-heading-font-color,var(--mod-heading-font-color,var(--spectrum-heading-font-color)));line-height:var(--mod-heading-line-height,var(--spectrum-heading-line-height));margin-block-start:var(--mod-heading-margin-start,var(--spectrum-heading-margin-start,0));margin-block-end:var(--mod-heading-margin-end,var(--spectrum-heading-margin-end,0))}.spectrum-Heading .spectrum-Heading-strong,.spectrum-Heading strong{font-style:var(--mod-heading-sans-serif-strong-font-style,var(--spectrum-heading-sans-serif-strong-font-style));font-weight:var(--mod-heading-sans-serif-strong-font-weight,var(--spectrum-heading-sans-serif-strong-font-weight))}.spectrum-Heading .spectrum-Heading-emphasized,.spectrum-Heading em{font-style:var(--mod-heading-sans-serif-emphasized-font-style,var(--spectrum-heading-sans-serif-emphasized-font-style));font-weight:var(--mod-heading-sans-serif-emphasized-font-weight,var(--spectrum-heading-sans-serif-emphasized-font-weight))}.spectrum-Heading .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading em strong,.spectrum-Heading strong em{font-style:var(--mod-heading-sans-serif-strong-emphasized-font-style,var(--spectrum-heading-sans-serif-strong-emphasized-font-style));font-weight:var(--mod-heading-sans-serif-strong-emphasized-font-weight,var(--spectrum-heading-sans-serif-strong-emphasized-font-weight))}.spectrum-Heading:lang(ja),.spectrum-Heading:lang(ko),.spectrum-Heading:lang(zh){font-family:var(--mod-heading-cjk-font-family,var(--spectrum-heading-cjk-font-family));font-style:var(--mod-heading-cjk-font-style,var(--spectrum-heading-cjk-font-style));font-weight:var(--mod-heading-cjk-font-weight,var(--spectrum-heading-cjk-font-weight));font-size:var(--mod-heading-cjk-font-size,var(--spectrum-heading-cjk-font-size));line-height:var(--mod-heading-cjk-line-height,var(--spectrum-heading-cjk-line-height));letter-spacing:var(--mod-heading-cjk-letter-spacing,var(--spectrum-heading-cjk-letter-spacing))}.spectrum-Heading:lang(ja) .spectrum-Heading-emphasized,.spectrum-Heading:lang(ja) em,.spectrum-Heading:lang(ko) .spectrum-Heading-emphasized,.spectrum-Heading:lang(ko) em,.spectrum-Heading:lang(zh) .spectrum-Heading-emphasized,.spectrum-Heading:lang(zh) em{font-style:var(--mod-heading-cjk-emphasized-font-style,var(--spectrum-heading-cjk-emphasized-font-style));font-weight:var(--mod-heading-cjk-emphasized-font-weight,var(--spectrum-heading-cjk-emphasized-font-weight))}.spectrum-Heading:lang(ja) .spectrum-Heading-strong,.spectrum-Heading:lang(ja) strong,.spectrum-Heading:lang(ko) .spectrum-Heading-strong,.spectrum-Heading:lang(ko) strong,.spectrum-Heading:lang(zh) .spectrum-Heading-strong,.spectrum-Heading:lang(zh) strong{font-style:var(--mod-heading-cjk-strong-font-style,var(--spectrum-heading-cjk-strong-font-style));font-weight:var(--mod-heading-cjk-strong-font-weight,var(--spectrum-heading-cjk-strong-font-weight))}.spectrum-Heading:lang(ja) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading:lang(ja) em strong,.spectrum-Heading:lang(ja) strong em,.spectrum-Heading:lang(ko) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading:lang(ko) em strong,.spectrum-Heading:lang(ko) strong em,.spectrum-Heading:lang(zh) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading:lang(zh) em strong,.spectrum-Heading:lang(zh) strong em{font-style:var(--mod-heading-cjk-strong-emphasized-font-style,var(--spectrum-heading-cjk-strong-emphasized-font-style));font-weight:var(--mod-heading-cjk-strong-emphasized-font-weight,var(--spectrum-heading-cjk-strong-emphasized-font-weight))}.spectrum-Heading--heavy{font-style:var(--mod-heading-sans-serif-heavy-font-style,var(--spectrum-heading-sans-serif-heavy-font-style));font-weight:var(--mod-heading-sans-serif-heavy-font-weight,var(--spectrum-heading-sans-serif-heavy-font-weight))}.spectrum-Heading--heavy .spectrum-Heading-strong,.spectrum-Heading--heavy strong{font-style:var(--mod-heading-sans-serif-heavy-strong-font-style,var(--spectrum-heading-sans-serif-heavy-strong-font-style));font-weight:var(--mod-heading-sans-serif-heavy-strong-font-weight,var(--spectrum-heading-sans-serif-heavy-strong-font-weight))}.spectrum-Heading--heavy .spectrum-Heading-emphasized,.spectrum-Heading--heavy em{font-style:var(--mod-heading-sans-serif-heavy-emphasized-font-style,var(--spectrum-heading-sans-serif-heavy-emphasized-font-style));font-weight:var(--mod-heading-sans-serif-heavy-emphasized-font-weight,var(--spectrum-heading-sans-serif-heavy-emphasized-font-weight))}.spectrum-Heading--heavy .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy em strong,.spectrum-Heading--heavy strong em{font-style:var(--mod-heading-sans-serif-heavy-strong-emphasized-font-style,var(--spectrum-heading-sans-serif-heavy-strong-emphasized-font-style));font-weight:var(--mod-heading-sans-serif-heavy-strong-emphasized-font-weight,var(--spectrum-heading-sans-serif-heavy-strong-emphasized-font-weight))}.spectrum-Heading--heavy:lang(ja),.spectrum-Heading--heavy:lang(ko),.spectrum-Heading--heavy:lang(zh){font-style:var(--mod-heading-cjk-heavy-font-style,var(--spectrum-heading-cjk-heavy-font-style));font-weight:var(--mod-heading-cjk-heavy-font-weight,var(--spectrum-heading-cjk-heavy-font-weight))}.spectrum-Heading--heavy:lang(ja) .spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ja) em,.spectrum-Heading--heavy:lang(ko) .spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ko) em,.spectrum-Heading--heavy:lang(zh) .spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(zh) em{font-style:var(--mod-heading-cjk-heavy-emphasized-font-style,var(--spectrum-heading-cjk-heavy-emphasized-font-style));font-weight:var(--mod-heading-cjk-heavy-emphasized-font-weight,var(--spectrum-heading-cjk-heavy-emphasized-font-weight))}.spectrum-Heading--heavy:lang(ja) .spectrum-Heading-strong,.spectrum-Heading--heavy:lang(ja) strong,.spectrum-Heading--heavy:lang(ko) .spectrum-Heading-strong,.spectrum-Heading--heavy:lang(ko) strong,.spectrum-Heading--heavy:lang(zh) .spectrum-Heading-strong,.spectrum-Heading--heavy:lang(zh) strong{font-style:var(--mod-heading-cjk-heavy-strong-font-style,var(--spectrum-heading-cjk-heavy-strong-font-style));font-weight:var(--mod-heading-cjk-heavy-strong-font-weight,var(--spectrum-heading-cjk-heavy-strong-font-weight))}.spectrum-Heading--heavy:lang(ja) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ja) em strong,.spectrum-Heading--heavy:lang(ja) strong em,.spectrum-Heading--heavy:lang(ko) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ko) em strong,.spectrum-Heading--heavy:lang(ko) strong em,.spectrum-Heading--heavy:lang(zh) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(zh) em strong,.spectrum-Heading--heavy:lang(zh) strong em{font-style:var(--mod-heading-cjk-heavy-strong-emphasized-font-style,var(--spectrum-heading-cjk-heavy-strong-emphasized-font-style));font-weight:var(--mod-heading-cjk-heavy-strong-emphasized-font-weight,var(--spectrum-heading-cjk-heavy-strong-emphasized-font-weight))}.spectrum-Heading--light{font-style:var(--mod-heading-sans-serif-light-font-style,var(--spectrum-heading-sans-serif-light-font-style));font-weight:var(--mod-heading-sans-serif-light-font-weight,var(--spectrum-heading-sans-serif-light-font-weight))}.spectrum-Heading--light .spectrum-Heading-emphasized,.spectrum-Heading--light em{font-style:var(--mod-heading-sans-serif-light-emphasized-font-style,var(--spectrum-heading-sans-serif-light-emphasized-font-style));font-weight:var(--mod-heading-sans-serif-light-emphasized-font-weight,var(--spectrum-heading-sans-serif-light-emphasized-font-weight))}.spectrum-Heading--light .spectrum-Heading-strong,.spectrum-Heading--light strong{font-style:var(--mod-heading-sans-serif-light-strong-font-style,var(--spectrum-heading-sans-serif-light-strong-font-style));font-weight:var(--mod-heading-sans-serif-light-strong-font-weight,var(--spectrum-heading-sans-serif-light-strong-font-weight))}.spectrum-Heading--light .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light em strong,.spectrum-Heading--light strong em{font-style:var(--mod-heading-sans-serif-light-strong-emphasized-font-style,var(--spectrum-heading-sans-serif-light-strong-emphasized-font-style));font-weight:var(--mod-heading-sans-serif-light-strong-emphasized-font-weight,var(--spectrum-heading-sans-serif-light-strong-emphasized-font-weight))}.spectrum-Heading--light:lang(ja),.spectrum-Heading--light:lang(ko),.spectrum-Heading--light:lang(zh){font-style:var(--mod-heading-cjk-light-font-style,var(--spectrum-heading-cjk-light-font-style));font-weight:var(--mod-heading-cjk-light-font-weight,var(--spectrum-heading-cjk-light-font-weight))}.spectrum-Heading--light:lang(ja) .spectrum-Heading-strong,.spectrum-Heading--light:lang(ja) strong,.spectrum-Heading--light:lang(ko) .spectrum-Heading-strong,.spectrum-Heading--light:lang(ko) strong,.spectrum-Heading--light:lang(zh) .spectrum-Heading-strong,.spectrum-Heading--light:lang(zh) strong{font-style:var(--mod-heading-cjk-light-strong-font-style,var(--spectrum-heading-cjk-light-strong-font-style));font-weight:var(--mod-heading-cjk-light-strong-font-weight,var(--spectrum-heading-cjk-light-strong-font-weight))}.spectrum-Heading--light:lang(ja) .spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ja) em,.spectrum-Heading--light:lang(ko) .spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ko) em,.spectrum-Heading--light:lang(zh) .spectrum-Heading-emphasized,.spectrum-Heading--light:lang(zh) em{font-style:var(--mod-heading-cjk-light-emphasized-font-style,var(--spectrum-heading-cjk-light-emphasized-font-style));font-weight:var(--mod-heading-cjk-light-emphasized-font-weight,var(--spectrum-heading-cjk-light-emphasized-font-weight))}.spectrum-Heading--light:lang(ja) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ja) em strong,.spectrum-Heading--light:lang(ja) strong em,.spectrum-Heading--light:lang(ko) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ko) em strong,.spectrum-Heading--light:lang(ko) strong em,.spectrum-Heading--light:lang(zh) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light:lang(zh) em strong,.spectrum-Heading--light:lang(zh) strong em{font-style:var(--mod-heading-cjk-light-strong-emphasized-font-style,var(--spectrum-heading-cjk-light-strong-emphasized-font-style));font-weight:var(--mod-heading-cjk-light-strong-emphasized-font-weight,var(--spectrum-heading-cjk-light-strong-emphasized-font-weight))}.spectrum-Heading--serif{font-family:var(--mod-heading-serif-font-family,var(--spectrum-heading-serif-font-family));font-style:var(--mod-heading-serif-font-style,var(--spectrum-heading-serif-font-style));font-weight:var(--mod-heading-serif-font-weight,var(--spectrum-heading-serif-font-weight))}.spectrum-Heading--serif .spectrum-Heading-emphasized,.spectrum-Heading--serif em{font-style:var(--mod-heading-serif-emphasized-font-style,var(--spectrum-heading-serif-emphasized-font-style));font-weight:var(--mod-heading-serif-emphasized-font-weight,var(--spectrum-heading-serif-emphasized-font-weight))}.spectrum-Heading--serif .spectrum-Heading-strong,.spectrum-Heading--serif strong{font-style:var(--mod-heading-serif-strong-font-style,var(--spectrum-heading-serif-strong-font-style));font-weight:var(--mod-heading-serif-strong-font-weight,var(--spectrum-heading-serif-strong-font-weight))}.spectrum-Heading--serif .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--serif em strong,.spectrum-Heading--serif strong em{font-style:var(--mod-heading-serif-strong-emphasized-font-style,var(--spectrum-heading-serif-strong-emphasized-font-style));font-weight:var(--mod-heading-serif-strong-emphasized-font-weight,var(--spectrum-heading-serif-strong-emphasized-font-weight))}.spectrum-Heading--serif.spectrum-Heading--heavy{font-style:var(--mod-heading-serif-heavy-font-style,var(--spectrum-heading-serif-heavy-font-style));font-weight:var(--mod-heading-serif-heavy-font-weight,var(--spectrum-heading-serif-heavy-font-weight))}.spectrum-Heading--serif.spectrum-Heading--heavy .spectrum-Heading-strong,.spectrum-Heading--serif.spectrum-Heading--heavy strong{font-style:var(--mod-heading-serif-heavy-strong-font-style,var(--spectrum-heading-serif-heavy-strong-font-style));font-weight:var(--mod-heading-serif-heavy-strong-font-weight,var(--spectrum-heading-serif-heavy-strong-font-weight))}.spectrum-Heading--serif.spectrum-Heading--heavy .spectrum-Heading-emphasized,.spectrum-Heading--serif.spectrum-Heading--heavy em{font-style:var(--mod-heading-serif-heavy-emphasized-font-style,var(--spectrum-heading-serif-heavy-emphasized-font-style));font-weight:var(--mod-heading-serif-heavy-emphasized-font-weight,var(--spectrum-heading-serif-heavy-emphasized-font-weight))}.spectrum-Heading--serif.spectrum-Heading--heavy .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--serif.spectrum-Heading--heavy em strong,.spectrum-Heading--serif.spectrum-Heading--heavy strong em{font-style:var(--mod-heading-serif-heavy-strong-emphasized-font-style,var(--spectrum-heading-serif-heavy-strong-emphasized-font-style));font-weight:var(--mod-heading-serif-heavy-strong-emphasized-font-weight,var(--spectrum-heading-serif-heavy-strong-emphasized-font-weight))}.spectrum-Heading--serif.spectrum-Heading--light{font-style:var(--mod-heading-serif-light-font-style,var(--spectrum-heading-serif-light-font-style));font-weight:var(--mod-heading-serif-light-font-weight,var(--spectrum-heading-serif-light-font-weight))}.spectrum-Heading--serif.spectrum-Heading--light .spectrum-Heading-emphasized,.spectrum-Heading--serif.spectrum-Heading--light em{font-style:var(--mod-heading-serif-light-emphasized-font-style,var(--spectrum-heading-serif-light-emphasized-font-style));font-weight:var(--mod-heading-serif-light-emphasized-font-weight,var(--spectrum-heading-serif-light-emphasized-font-weight))}.spectrum-Heading--serif.spectrum-Heading--light .spectrum-Heading-strong,.spectrum-Heading--serif.spectrum-Heading--light strong{font-style:var(--mod-heading-serif-light-strong-font-style,var(--spectrum-heading-serif-light-strong-font-style));font-weight:var(--mod-heading-serif-light-strong-font-weight,var(--spectrum-heading-serif-light-strong-font-weight))}.spectrum-Heading--serif.spectrum-Heading--light .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--serif.spectrum-Heading--light em strong,.spectrum-Heading--serif.spectrum-Heading--light strong em{font-style:var(--mod-heading-serif-light-strong-emphasized-font-style,var(--spectrum-heading-serif-light-strong-emphasized-font-style));font-weight:var(--mod-heading-serif-light-strong-emphasized-font-weight,var(--spectrum-heading-serif-light-strong-emphasized-font-weight))}
`, wp = [Yc, Jc, xp], zp = st`
    .spectrum-Typography .spectrum-Body{--spectrum-body-margin-end:calc(var(--mod-body-font-size,var(--spectrum-body-font-size))*var(--spectrum-body-margin-multiplier))}@media (forced-colors:active){.spectrum-Body{--highcontrast-body-font-color:Text}}.spectrum-Body,.spectrum-Body--sizeM{--spectrum-body-font-size:var(--spectrum-body-size-m)}.spectrum-Body--sizeXS{--spectrum-body-font-size:var(--spectrum-body-size-xs)}.spectrum-Body--sizeS{--spectrum-body-font-size:var(--spectrum-body-size-s)}.spectrum-Body--sizeL{--spectrum-body-font-size:var(--spectrum-body-size-l)}.spectrum-Body--sizeXL{--spectrum-body-font-size:var(--spectrum-body-size-xl)}.spectrum-Body--sizeXXL{--spectrum-body-font-size:var(--spectrum-body-size-xxl)}.spectrum-Body--sizeXXXL{--spectrum-body-font-size:var(--spectrum-body-size-xxxl)}.spectrum-Body{--spectrum-body-sans-serif-font-family:var(--spectrum-sans-font-family-stack);--spectrum-body-serif-font-family:var(--spectrum-serif-font-family-stack);--spectrum-body-cjk-font-family:var(--spectrum-cjk-font-family-stack);--spectrum-body-cjk-letter-spacing:var(--spectrum-cjk-letter-spacing);--spectrum-body-font-color:var(--spectrum-body-color);font-family:var(--mod-body-sans-serif-font-family,var(--spectrum-body-sans-serif-font-family));font-style:var(--mod-body-sans-serif-font-style,var(--spectrum-body-sans-serif-font-style));font-weight:var(--mod-body-sans-serif-font-weight,var(--spectrum-body-sans-serif-font-weight));font-size:var(--mod-body-font-size,var(--spectrum-body-font-size));color:var(--highcontrast-body-font-color,var(--mod-body-font-color,var(--spectrum-body-font-color)));line-height:var(--mod-body-line-height,var(--spectrum-body-line-height));margin-block-start:var(--mod-body-margin-start,var(--mod-body-margin,0));margin-block-end:var(--mod-body-margin-end,var(--mod-body-margin,var(--spectrum-body-margin-end,0)))}.spectrum-Body .spectrum-Body-strong,.spectrum-Body strong{font-style:var(--mod-body-sans-serif-strong-font-style,var(--spectrum-body-sans-serif-strong-font-style));font-weight:var(--mod-body-sans-serif-strong-font-weight,var(--spectrum-body-sans-serif-strong-font-weight))}.spectrum-Body .spectrum-Body-emphasized,.spectrum-Body em{font-style:var(--mod-body-sans-serif-emphasized-font-style,var(--spectrum-body-sans-serif-emphasized-font-style));font-weight:var(--mod-body-sans-serif-emphasized-font-weight,var(--spectrum-body-sans-serif-emphasized-font-weight))}.spectrum-Body .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body em strong,.spectrum-Body strong em{font-style:var(--mod-body-sans-serif-strong-emphasized-font-style,var(--spectrum-body-sans-serif-strong-emphasized-font-style));font-weight:var(--mod-body-sans-serif-strong-emphasized-font-weight,var(--spectrum-body-sans-serif-strong-emphasized-font-weight))}.spectrum-Body:lang(ja),.spectrum-Body:lang(ko),.spectrum-Body:lang(zh){font-family:var(--mod-body-cjk-font-family,var(--spectrum-body-cjk-font-family));font-style:var(--mod-body-cjk-font-style,var(--spectrum-body-cjk-font-style));font-weight:var(--mod-body-cjk-font-weight,var(--spectrum-body-cjk-font-weight));line-height:var(--mod-body-cjk-line-height,var(--spectrum-body-cjk-line-height));letter-spacing:var(--mod-body-cjk-letter-spacing,var(--spectrum-body-cjk-letter-spacing))}.spectrum-Body:lang(ja) .spectrum-Body-strong,.spectrum-Body:lang(ja) strong,.spectrum-Body:lang(ko) .spectrum-Body-strong,.spectrum-Body:lang(ko) strong,.spectrum-Body:lang(zh) .spectrum-Body-strong,.spectrum-Body:lang(zh) strong{font-style:var(--mod-body-cjk-strong-font-style,var(--spectrum-body-cjk-strong-font-style));font-weight:var(--mod-body-cjk-strong-font-weight,var(--spectrum-body-cjk-strong-font-weight))}.spectrum-Body:lang(ja) .spectrum-Body-emphasized,.spectrum-Body:lang(ja) em,.spectrum-Body:lang(ko) .spectrum-Body-emphasized,.spectrum-Body:lang(ko) em,.spectrum-Body:lang(zh) .spectrum-Body-emphasized,.spectrum-Body:lang(zh) em{font-style:var(--mod-body-cjk-emphasized-font-style,var(--spectrum-body-cjk-emphasized-font-style));font-weight:var(--mod-body-cjk-emphasized-font-weight,var(--spectrum-body-cjk-emphasized-font-weight))}.spectrum-Body:lang(ja) .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body:lang(ja) em strong,.spectrum-Body:lang(ja) strong em,.spectrum-Body:lang(ko) .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body:lang(ko) em strong,.spectrum-Body:lang(ko) strong em,.spectrum-Body:lang(zh) .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body:lang(zh) em strong,.spectrum-Body:lang(zh) strong em{font-style:var(--mod-body-cjk-strong-emphasized-font-style,var(--spectrum-body-cjk-strong-emphasized-font-style));font-weight:var(--mod-body-cjk-strong-emphasized-font-weight,var(--spectrum-body-cjk-strong-emphasized-font-weight))}.spectrum-Body--serif{font-family:var(--mod-body-serif-font-family,var(--spectrum-body-serif-font-family));font-weight:var(--mod-body-serif-font-weight,var(--spectrum-body-serif-font-weight));font-style:var(--mod-body-serif-font-style,var(--spectrum-body-serif-font-style))}.spectrum-Body--serif .spectrum-Body-strong,.spectrum-Body--serif strong{font-style:var(--mod-body-serif-strong-font-style,var(--spectrum-body-serif-strong-font-style));font-weight:var(--mod-body-serif-strong-font-weight,var(--spectrum-body-serif-strong-font-weight))}.spectrum-Body--serif .spectrum-Body-emphasized,.spectrum-Body--serif em{font-style:var(--mod-body-serif-emphasized-font-style,var(--spectrum-body-serif-emphasized-font-style));font-weight:var(--mod-body-serif-emphasized-font-weight,var(--spectrum-body-serif-emphasized-font-weight))}.spectrum-Body--serif .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body--serif em strong,.spectrum-Body--serif strong em{font-style:var(--mod-body-serif-strong-emphasized-font-style,var(--spectrum-body-serif-strong-emphasized-font-style));font-weight:var(--mod-body-serif-strong-emphasized-font-weight,var(--spectrum-body-serif-strong-emphasized-font-weight))}.spectrum-Detail--light .spectrum-Detail-strong.spectrum-Body-emphasized{font-style:var(--mod-detail-sans-serif-light-strong-emphasized-font-style,var(--spectrum-detail-sans-serif-light-strong-emphasized-font-style));font-weight:var(--mod-detail-sans-serif-light-strong-emphasized-font-weight,var(--spectrum-detail-sans-serif-light-strong-emphasized-font-weight))}.spectrum-Detail--serif.spectrum-Detail--light .spectrum-Detail-strong.spectrum-Body-emphasized{font-style:var(--mod-detail-serif-light-strong-emphasized-font-style,var(--spectrum-detail-serif-light-strong-emphasized-font-style));font-weight:var(--mod-detail-serif-light-strong-emphasized-font-weight,var(--spectrum-detail-serif-light-strong-emphasized-font-weight))}
`, jp = [Yc, Jc, zp];
var Hp = Object.defineProperty, za = (e, t, r, o) => {
  for (var s = void 0, a = e.length - 1, c; a >= 0; a--) (c = e[a]) && (s = c(t, r, s) || s);
  return s && Hp(t, r, s), s;
};
class Nr extends Vt {
  constructor() {
    super(...arguments), this.heading = "", this.description = "";
  }
  static get styles() {
    return [wp, jp, kp];
  }
  render() {
    return C`
            <div id="illustration"><slot></slot></div>
            <h2
                id="heading"
                class="spectrum-Heading spectrum-Heading--sizeL spectrum-Heading--light"
            >
                <slot name="heading">${this.heading}</slot>
            </h2>
            <div id="description" class="spectrum-Body spectrum-Body--sizeS">
                <slot name="description">${this.description}</slot>
            </div>
        `;
  }
}
Nr.is = "sp-illustrated-message", za([z()], Nr.prototype, "heading"), za([z()], Nr.prototype, "description");
J("sp-illustrated-message", Nr);
const _p = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Delete" } = {}) => Wt`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${e}"
    height="${t}"
    viewBox="0 0 20 20"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
  >
    <path
      d="m8.24902,15.02148c-.40039,0-.7334-.31738-.74805-.7207l-.25-6.5c-.0166-.41406.30664-.7627.71973-.77832.01074-.00098.02051-.00098.03027-.00098.40039,0,.7334.31738.74805.7207l.25,6.5c.0166.41406-.30664.7627-.71973.77832-.01074.00098-.02051.00098-.03027.00098Z"
      fill="currentColor"
    />
    <path
      d="m11.75098,15.02148c-.00977,0-.01953,0-.03027-.00098-.41309-.01562-.73633-.36426-.71973-.77832l.25-6.5c.01465-.40332.34766-.7207.74805-.7207.00977,0,.01953,0,.03027.00098.41309.01562.73633.36426.71973.77832l-.25,6.5c-.01465.40332-.34766.7207-.74805.7207Z"
      fill="currentColor"
    />
    <path
      d="m17,4h-3.5v-.75c0-1.24023-1.00977-2.25-2.25-2.25h-2.5c-1.24023,0-2.25,1.00977-2.25,2.25v.75h-3.5c-.41406,0-.75.33594-.75.75s.33594.75.75.75h.52002l.42236,10.3418c.04785,1.20996,1.03613,2.1582,2.24805,2.1582h7.61914c1.21191,0,2.2002-.94824,2.24805-2.1582l.42236-10.3418h.52002c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75Zm-9-.75c0-.41309.33691-.75.75-.75h2.5c.41309,0,.75.33691.75.75v.75h-4v-.75Zm6.55957,12.53125c-.0166.40332-.3457.71875-.75.71875h-7.61914c-.4043,0-.7334-.31543-.75-.71875l-.41968-10.28125h9.9585l-.41968,10.28125Z"
      fill="currentColor"
    />
  </svg>`, $p = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Delete" } = {}) => Wt`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 36 36"
    width="${e}"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
  >
    <path
      d="M31.5 6H24V4a2 2 0 0 0-2-2H12a2 2 0 0 0-2 2v2H2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2l2.413 25.1a1 1 0 0 0 1 .9h18.179a1 1 0 0 0 1-.9L29.5 8h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5ZM11.065 29A1 1 0 0 1 10 28.068l-1.071-16a1 1 0 1 1 2-.134l1.071 16A1 1 0 0 1 11.065 29ZM18 28a1 1 0 0 1-2 0V12a1 1 0 0 1 2 0Zm4-22H12V4h10Zm2 22.068a1 1 0 1 1-2-.134l1.071-16a1 1 0 1 1 2 .134Z"
    />
  </svg>`;
class Cp extends ut {
  render() {
    return $r(C), this.spectrumVersion === 2 ? _p({ hidden: !this.label, title: this.label }) : $p({ hidden: !this.label, title: this.label });
  }
}
J("sp-icon-delete", Cp);
const Ap = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Add" } = {}) => Wt`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${e}"
    height="${t}"
    viewBox="0 0 20 20"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
  >
    <path
      d="m16.25,9.25h-5.5V3.75c0-.41406-.33594-.75-.75-.75s-.75.33594-.75.75v5.5H3.75c-.41406,0-.75.33594-.75.75s.33594.75.75.75h5.5v5.5c0,.41406.33594.75.75.75s.75-.33594.75-.75v-5.5h5.5c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75Z"
      fill="currentColor"
    />
  </svg>`, Sp = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Add" } = {}) => Wt`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 36 36"
    width="${e}"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
  >
    <path
      d="M29 16h-9V7a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v9H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9v9a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-9h9a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"
    />
  </svg>`;
class Ep extends ut {
  render() {
    return $r(C), this.spectrumVersion === 2 ? Ap({ hidden: !this.label, title: this.label }) : Sp({ hidden: !this.label, title: this.label });
  }
}
J("sp-icon-add", Ep);
const Tp = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Checkmark" } = {}) => Wt`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${e}"
    height="${t}"
    viewBox="0 0 20 20"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
  >
    <path
      d="M7.86426,15.73438c-.22266,0-.43359-.09863-.57617-.26953l-3.74707-4.49805c-.26562-.31836-.22168-.79199.0957-1.05664.31738-.26562.79004-.22363,1.05664.0957l3.15332,3.78613,7.43945-9.46875c.25586-.32617.72852-.38184,1.05273-.12695.32617.25586.38281.72754.12695,1.05273l-8.01172,10.19824c-.13965.17871-.35254.28418-.5791.28711h-.01074Z"
      fill="currentColor"
    />
  </svg>`, Dp = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Checkmark" } = {}) => Wt`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 36 36"
    width="${e}"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
  >
    <path
      d="m31.312 7.725-1.455-1.133a1 1 0 0 0-1.4.175L14.822 24.283l-6.647-6.612a1 1 0 0 0-1.414 0L5.436 19a1 1 0 0 0 0 1.414l8.926 8.9a1 1 0 0 0 1.5-.093L31.487 9.128a1 1 0 0 0-.175-1.403Z"
    />
  </svg>`;
class Bp extends ut {
  render() {
    return $r(C), this.spectrumVersion === 2 ? Tp({ hidden: !this.label, title: this.label }) : Dp({ hidden: !this.label, title: this.label });
  }
}
J("sp-icon-checkmark", Bp);
const Ip = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Refresh" } = {}) => Wt`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${e}"
    height="${t}"
    viewBox="0 0 20 20"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
  >
    <path
      d="M18.20654,3.89746c-.40527-.09473-.80811.15039-.90527.55371l-.38043,1.57471c-1.39771-2.43188-4.00189-4.00439-6.92084-4.00439-3.68457,0-6.87549,2.5-7.75928,6.08008-.09961.40234.146.80859.54834.9082.40137.09961.80859-.14648.90771-.54883.71826-2.9082,3.31006-4.93945,6.30322-4.93945,2.51685,0,4.73499,1.44629,5.80896,3.63232l-2.10242-.5083c-.40332-.09375-.80762.15039-.90527.55371-.09717.40234.15039.80762.55273.90527l3.24524.78418c.12476.08862.27362.14258.43152.14258.05957,0,.12012-.00684.18018-.02148.04822-.01196.08582-.04102.12921-.06104.06952-.01855.14331-.01953.20575-.05811.16943-.10352.29102-.27051.33789-.46387l.87549-3.62402c.09717-.40234-.15039-.80762-.55273-.90527Z"
      fill="currentColor"
    />
    <path
      d="M17.21094,11.03223c-.39697-.09668-.80811.14648-.90771.54883-.71826,2.90918-3.31006,4.94043-6.30322,4.94043-2.51703,0-4.73523-1.44653-5.80914-3.63354l2.1026.50854c.40283.0918.80811-.15039.90527-.55371.09717-.40234-.15039-.80762-.55273-.90527l-3.25494-.78662c-.17102-.11816-.38531-.17139-.60199-.11865-.0152.00391-.026.01465-.04071.01929-.10321.01318-.20392.04419-.29425.09985-.16943.10352-.29102.27051-.33789.46387l-.87549,3.62402c-.09717.40234.15039.80762.55273.90527.05957.01367.11865.02051.17676.02051.33838,0,.64551-.23047.72852-.57422l.38043-1.57471c1.39764,2.43213,4.00189,4.00537,6.92084,4.00537,3.68457,0,6.87549-2.50098,7.75928-6.08105.09961-.40234-.146-.80859-.54834-.9082Z"
      fill="currentColor"
    />
  </svg>`, qp = ({ width: e = 24, height: t = 24, hidden: r = !1, title: o = "Refresh" } = {}) => Wt`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${e}"
    height="${t}"
    viewBox="0 0 36 36"
    aria-hidden=${r ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${o}"
  >
    <path
      d="M32.674 20H30.78a1.215 1.215 0 0 0-1.162.938 11.447 11.447 0 0 1-19.116 5.074l-.692-.693 3.955-3.955a.785.785 0 0 0 .235-.56.803.803 0 0 0-.754-.804H2.496a.5.5 0 0 0-.496.496v10.75a.803.803 0 0 0 .804.754.784.784 0 0 0 .56-.236l3.617-3.617.356.357a16.17 16.17 0 0 0 7.284 4.331A15.43 15.43 0 0 0 33.665 21.17a.996.996 0 0 0-.991-1.17ZM33.196 4a.784.784 0 0 0-.56.236l-3.617 3.617-.356-.357a16.17 16.17 0 0 0-7.284-4.331A15.43 15.43 0 0 0 2.335 14.83.996.996 0 0 0 3.326 16H5.22a1.216 1.216 0 0 0 1.162-.938 11.447 11.447 0 0 1 19.116-5.074l.692.693-3.955 3.955a.786.786 0 0 0-.235.56.804.804 0 0 0 .754.804h10.75a.5.5 0 0 0 .496-.496V4.754A.803.803 0 0 0 33.196 4Z"
    />
  </svg>`;
class Pp extends ut {
  render() {
    return $r(C), this.spectrumVersion === 2 ? Ip({ hidden: !this.label, title: this.label }) : qp({ hidden: !this.label, title: this.label });
  }
}
J("sp-icon-refresh", Pp);
let Mp = ei;
const ja = /* @__PURE__ */ new Set(), Lp = () => window.WidgetServiceSDK ? new window.WidgetServiceSDK() : null;
async function Yp(e) {
  console.log("[todo-app] init v3"), await e.whenReady();
  const t = document.createElement("style");
  t.textContent = Mp, ja.add(t), e.shadowRoot.insertBefore(t, e.shadowRoot.firstChild);
  const r = Lp();
  if (!r) {
    const s = e.getContainer();
    s.textContent = "Connectors SDK failed to load. Include the widget-sdk UMD script in index.html.";
    return;
  }
  const o = Hl(Zl, { sdk: e, connectors: r });
  o.mount(e.getContainer()), e.on("destroy", () => {
    ja.delete(t), t.remove(), o.unmount();
  });
}
export {
  Yp as init
};
