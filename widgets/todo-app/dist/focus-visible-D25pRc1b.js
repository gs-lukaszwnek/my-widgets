function N(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var c = { exports: {} }, F = c.exports, b;
function C() {
  return b || (b = 1, (function(i, M) {
    (function(u, o) {
      o();
    })(F, (function() {
      function u(n) {
        var r = !0, s = !1, l = null, E = {
          text: !0,
          search: !0,
          url: !0,
          tel: !0,
          email: !0,
          password: !0,
          number: !0,
          date: !0,
          month: !0,
          week: !0,
          time: !0,
          datetime: !0,
          "datetime-local": !0
        };
        function d(e) {
          return !!(e && e !== document && e.nodeName !== "HTML" && e.nodeName !== "BODY" && "classList" in e && "contains" in e.classList);
        }
        function y(e) {
          var V = e.type, v = e.tagName;
          return !!(v === "INPUT" && E[V] && !e.readOnly || v === "TEXTAREA" && !e.readOnly || e.isContentEditable);
        }
        function m(e) {
          e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", ""));
        }
        function L(e) {
          e.hasAttribute("data-focus-visible-added") && (e.classList.remove("focus-visible"), e.removeAttribute("data-focus-visible-added"));
        }
        function p(e) {
          e.metaKey || e.altKey || e.ctrlKey || (d(n.activeElement) && m(n.activeElement), r = !0);
        }
        function a(e) {
          r = !1;
        }
        function w(e) {
          d(e.target) && (r || y(e.target)) && m(e.target);
        }
        function h(e) {
          d(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (s = !0, window.clearTimeout(l), l = window.setTimeout(function() {
            s = !1;
          }, 100), L(e.target));
        }
        function g(e) {
          document.visibilityState === "hidden" && (s && (r = !0), f());
        }
        function f() {
          document.addEventListener("mousemove", t), document.addEventListener("mousedown", t), document.addEventListener("mouseup", t), document.addEventListener("pointermove", t), document.addEventListener("pointerdown", t), document.addEventListener("pointerup", t), document.addEventListener("touchmove", t), document.addEventListener("touchstart", t), document.addEventListener("touchend", t);
        }
        function T() {
          document.removeEventListener("mousemove", t), document.removeEventListener("mousedown", t), document.removeEventListener("mouseup", t), document.removeEventListener("pointermove", t), document.removeEventListener("pointerdown", t), document.removeEventListener("pointerup", t), document.removeEventListener("touchmove", t), document.removeEventListener("touchstart", t), document.removeEventListener("touchend", t);
        }
        function t(e) {
          e.target.nodeName && e.target.nodeName.toLowerCase() === "html" || (r = !1, T());
        }
        document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", a, !0), document.addEventListener("pointerdown", a, !0), document.addEventListener("touchstart", a, !0), document.addEventListener("visibilitychange", g, !0), f(), n.addEventListener("focus", w, !0), n.addEventListener("blur", h, !0), n.nodeType === Node.DOCUMENT_FRAGMENT_NODE && n.host ? n.host.setAttribute("data-js-focus-visible", "") : n.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"), document.documentElement.setAttribute("data-js-focus-visible", ""));
      }
      if (typeof window < "u" && typeof document < "u") {
        window.applyFocusVisiblePolyfill = u;
        var o;
        try {
          o = new CustomEvent("focus-visible-polyfill-ready");
        } catch {
          o = document.createEvent("CustomEvent"), o.initCustomEvent("focus-visible-polyfill-ready", !1, !1, {});
        }
        window.dispatchEvent(o);
      }
      typeof document < "u" && u(document);
    }));
  })()), c.exports;
}
var O = C();
const A = /* @__PURE__ */ N(O), P = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: A
}, Symbol.toStringTag, { value: "Module" }));
export {
  P as f
};
