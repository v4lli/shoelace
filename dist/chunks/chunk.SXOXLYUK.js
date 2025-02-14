import {
  __defProp
} from "./chunk.W2OJMTVT.js";
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __assign = Object.assign;
var __decorate = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i5 = decorators.length - 1, decorator; i5 >= 0; i5--)
    if (decorator = decorators[i5])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// node_modules/@lit/reactive-element/decorators/base.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

// node_modules/@lit/reactive-element/decorators/custom-element.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var n = (n6) => (e7) => typeof e7 == "function" ? ((n7, e8) => (window.customElements.define(n7, e8), e8))(n6, e7) : ((n7, e8) => {
  const {kind: t5, elements: i5} = e8;
  return {kind: t5, elements: i5, finisher(e9) {
    window.customElements.define(n7, e9);
  }};
})(n6, e7);

// node_modules/@lit/reactive-element/decorators/property.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

// node_modules/@lit/reactive-element/decorators/query-async.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

// node_modules/@lit/reactive-element/decorators/query.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

// node_modules/@lit/reactive-element/decorators/state.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

// node_modules/@lit/reactive-element/decorators/event-options.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

// node_modules/@lit/reactive-element/decorators/query-all.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

// node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var n2 = Element.prototype;
var o = n2.msMatchesSelector || n2.webkitMatchesSelector;

// node_modules/lit-html/lit-html.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var t2;
var s = `lit$${(Math.random() + "").slice(9)}$`;
var i = "?" + s;
var e3 = `<${i}>`;
var h = document;
var o2 = (t5 = "") => h.createComment(t5);
var n3 = (t5) => t5 === null || typeof t5 != "object" && typeof t5 != "function";
var r = Array.isArray;
var l = (t5) => r(t5) || typeof (t5 == null ? void 0 : t5[Symbol.iterator]) == "function";
var c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var a = /-->/g;
var u = />/g;
var _ = />|[ 	\n\r](?:([^ -- "'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g;
var d = /'/g;
var f = /"/g;
var v = /^(?:script|style|textarea)$/i;
var m = (t5) => (s5, ...i5) => ({_$litType$: t5, strings: s5, values: i5});
var p = m(1);
var $ = m(2);
var g = Symbol.for("lit-noChange");
var y = Symbol.for("lit-nothing");
var x = new Map();
var T = h.createTreeWalker(h, 133, null, false);
var w = (t5, i5) => {
  const h4 = t5.length - 1, o7 = [];
  let n6, r5 = i5 === 2 ? "<svg>" : "", l3 = c;
  for (let i6 = 0; i6 < h4; i6++) {
    const h5 = t5[i6];
    let m3, p3, $3 = -1, g3 = 0;
    for (; g3 < h5.length && (l3.lastIndex = g3, p3 = l3.exec(h5), p3 !== null); )
      g3 = l3.lastIndex, l3 === c ? p3[1] === "!--" ? l3 = a : p3[1] !== void 0 ? l3 = u : p3[2] !== void 0 ? (v.test(p3[2]) && (n6 = RegExp("</" + p3[2], "g")), l3 = _) : p3[3] !== void 0 && (l3 = _) : l3 === _ ? p3[0] === ">" ? (l3 = n6 != null ? n6 : c, $3 = -1) : p3[1] === void 0 ? $3 = -2 : ($3 = l3.lastIndex - p3[2].length, m3 = p3[1], l3 = p3[3] === void 0 ? _ : p3[3] === '"' ? f : d) : l3 === f || l3 === d ? l3 = _ : l3 === a || l3 === u ? l3 = c : (l3 = _, n6 = void 0);
    const y3 = l3 === _ && t5[i6 + 1].startsWith("/>") ? " " : "";
    r5 += l3 === c ? h5 + e3 : $3 >= 0 ? (o7.push(m3), h5.slice(0, $3) + "$lit$" + h5.slice($3) + s + y3) : h5 + s + ($3 === -2 ? (o7.push(void 0), i6) : y3);
  }
  return [r5 + (t5[h4] || "<?>") + (i5 === 2 ? "</svg>" : ""), o7];
};
var A = class {
  constructor({strings: t5, _$litType$: e7}, h4) {
    let n6;
    this.o = [], this.C = h4;
    let r5 = 0, l3 = 0, c3 = 0;
    const a3 = t5.length - 1, [u3, _3] = w(t5, e7);
    if (this.B = this.A(u3), T.currentNode = this.B.content, e7 === 2) {
      const t6 = this.B.content, s5 = t6.firstChild;
      s5.remove(), t6.append(...s5.childNodes);
    }
    for (; (n6 = T.nextNode()) !== null && l3 < a3; ) {
      if (n6.nodeType === 1) {
        if (n6.hasAttributes()) {
          const t6 = [];
          for (const i5 of n6.getAttributeNames())
            if (i5.endsWith("$lit$") || i5.startsWith(s)) {
              const e8 = _3[c3++];
              if (t6.push(i5), e8 !== void 0) {
                const t7 = n6.getAttribute(e8.toLowerCase() + "$lit$").split(s), i6 = /([.?@])?(.*)/.exec(e8);
                this.o.push({h: 1, l: r5, u: i6[2], v: t7, p: i6[1] === "." ? I : i6[1] === "?" ? M : i6[1] === "@" ? C : S}), l3 += t7.length - 1;
              } else
                this.o.push({h: 6, l: r5});
            }
          for (const s5 of t6)
            n6.removeAttribute(s5);
        }
        if (v.test(n6.tagName)) {
          const t6 = n6.textContent.split(s), i5 = t6.length - 1;
          if (i5 > 0) {
            n6.textContent = "";
            for (let s5 = 0; s5 < i5; s5++)
              n6.append(t6[s5] || o2()), this.o.push({h: 2, l: ++r5}), l3++;
            n6.append(t6[i5] || o2());
          }
        }
      } else if (n6.nodeType === 8)
        if (n6.data === i)
          l3++, this.o.push({h: 2, l: r5});
        else {
          let t6 = -1;
          for (; (t6 = n6.data.indexOf(s, t6 + 1)) !== -1; )
            this.o.push({h: 7, l: r5}), l3++, t6 += s.length - 1;
        }
      r5++;
    }
  }
  A(t5) {
    const s5 = h.createElement("template");
    return s5.innerHTML = t5, s5;
  }
};
function P(t5, s5, i5 = t5, e7) {
  var _a6, _b5, _c;
  var h4;
  if (s5 === g)
    return s5;
  let o7 = e7 !== void 0 ? (_a6 = i5.\u03A3_) == null ? void 0 : _a6[e7] : i5.\u03A3m;
  const r5 = n3(s5) ? void 0 : s5._$litDirective$;
  return (o7 == null ? void 0 : o7.constructor) !== r5 && ((_b5 = o7 == null ? void 0 : o7.S) == null ? void 0 : _b5.call(o7, false), o7 = r5 === void 0 ? void 0 : new r5(__assign(__assign({}, t5), {$: t5, Q: i5, g: e7})), e7 !== void 0 ? ((_c = (h4 = i5).\u03A3_) != null ? _c : h4.\u03A3_ = [])[e7] = o7 : i5.\u03A3m = o7), o7 !== void 0 && (s5 = P(t5, o7.W(t5, s5.values), o7, e7)), s5;
}
var V = class {
  constructor(t5, s5) {
    this.o = [], this.R = void 0, this.G = t5, this.Q = s5;
  }
  k(t5) {
    const {B: {content: s5}, o: i5} = this.G, e7 = h.importNode(s5, true);
    T.currentNode = e7;
    let o7 = T.nextNode(), n6 = 0, r5 = 0, l3 = i5[0];
    for (; l3 !== void 0 && o7 !== null; ) {
      if (n6 === l3.l) {
        let s6;
        l3.h === 2 ? s6 = new E(o7, o7.nextSibling, this, t5) : l3.h === 1 ? s6 = new l3.p(o7, l3.u, l3.v, this, t5) : l3.h === 6 && (s6 = new N(o7, this, t5)), this.o.push(s6), l3 = i5[++r5];
      }
      l3 !== void 0 && n6 !== l3.l && (o7 = T.nextNode(), n6++);
    }
    return e7;
  }
  j(t5) {
    let s5 = 0;
    for (const i5 of this.o)
      i5 !== void 0 && (i5.strings !== void 0 ? (i5.M(t5, i5, s5), s5 += i5.strings.length - 2) : i5.M(t5[s5])), s5++;
  }
};
var E = class {
  constructor(t5, s5, i5, e7) {
    this.type = 2, this.R = void 0, this.D = t5, this.E = s5, this.Q = i5, this.options = e7;
  }
  setConnected(t5) {
    var _a6;
    (_a6 = this.T) == null ? void 0 : _a6.call(this, t5);
  }
  get parentNode() {
    return this.D.parentNode;
  }
  M(t5, s5 = this) {
    t5 = P(this, t5, s5), n3(t5) ? t5 === y || t5 == null || t5 === "" ? (this.L !== y && this.V(), this.L = y) : t5 !== this.L && t5 !== g && this.Y(t5) : t5._$litType$ !== void 0 ? this.q(t5) : t5.nodeType !== void 0 ? this.X(t5) : l(t5) ? this.tt(t5) : this.Y(t5);
  }
  it(t5, s5 = this.E) {
    return this.D.parentNode.insertBefore(t5, s5);
  }
  X(t5) {
    this.L !== t5 && (this.V(), this.L = this.it(t5));
  }
  Y(t5) {
    const s5 = this.D.nextSibling;
    s5 !== null && s5.nodeType === 3 && (this.E === null ? s5.nextSibling === null : s5 === this.E.previousSibling) ? s5.data = t5 : this.X(h.createTextNode(t5)), this.L = t5;
  }
  q(t5) {
    var _a6;
    const {values: s5, strings: i5} = t5, e7 = this.F(i5, t5);
    if (((_a6 = this.L) == null ? void 0 : _a6.G) === e7)
      this.L.j(s5);
    else {
      const t6 = new V(e7, this), i6 = t6.k(this.options);
      t6.j(s5), this.X(i6), this.L = t6;
    }
  }
  F(t5, s5) {
    let i5 = x.get(t5);
    return i5 === void 0 && x.set(t5, i5 = new A(s5)), i5;
  }
  tt(t5) {
    r(this.L) || (this.L = [], this.V());
    const s5 = this.L;
    let i5, e7 = 0;
    for (const h4 of t5)
      e7 === s5.length ? s5.push(i5 = new E(this.it(o2()), this.it(o2()), this, this.options)) : i5 = s5[e7], i5.M(h4), e7++;
    e7 < s5.length && (this.V(i5 && i5.E.nextSibling, e7), s5.length = e7);
  }
  V(t5 = this.D.nextSibling, s5) {
    var _a6;
    for ((_a6 = this.T) == null ? void 0 : _a6.call(this, false, true, s5); t5 && t5 !== this.E; ) {
      const s6 = t5.nextSibling;
      t5.remove(), t5 = s6;
    }
  }
};
var S = class {
  constructor(t5, s5, i5, e7, h4) {
    this.type = 1, this.L = y, this.R = void 0, this.st = void 0, this.element = t5, this.name = s5, this.Q = e7, this.options = h4, i5.length > 2 || i5[0] !== "" || i5[1] !== "" ? (this.L = Array(i5.length - 1).fill(y), this.strings = i5) : this.L = y;
  }
  get tagName() {
    return this.element.tagName;
  }
  M(t5, s5 = this, i5, e7) {
    const h4 = this.strings;
    let o7 = false;
    if (h4 === void 0)
      t5 = P(this, t5, s5, 0), o7 = !n3(t5) || t5 !== this.L && t5 !== g, o7 && (this.L = t5);
    else {
      const e8 = t5;
      let r5, l3;
      for (t5 = h4[0], r5 = 0; r5 < h4.length - 1; r5++)
        l3 = P(this, e8[i5 + r5], s5, r5), l3 === g && (l3 = this.L[r5]), o7 || (o7 = !n3(l3) || l3 !== this.L[r5]), l3 === y ? t5 = y : t5 !== y && (t5 += (l3 != null ? l3 : "") + h4[r5 + 1]), this.L[r5] = l3;
    }
    o7 && !e7 && this.nt(t5);
  }
  nt(t5) {
    t5 === y ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t5 != null ? t5 : "");
  }
};
var I = class extends S {
  constructor() {
    super(...arguments), this.type = 3;
  }
  nt(t5) {
    this.element[this.name] = t5 === y ? void 0 : t5;
  }
};
var M = class extends S {
  constructor() {
    super(...arguments), this.type = 4;
  }
  nt(t5) {
    t5 && t5 !== y ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name);
  }
};
var C = class extends S {
  constructor() {
    super(...arguments), this.type = 5;
  }
  M(t5, s5 = this) {
    var _a6;
    if ((t5 = (_a6 = P(this, t5, s5, 0)) != null ? _a6 : y) === g)
      return;
    const i5 = this.L, e7 = t5 === y && i5 !== y || t5.capture !== i5.capture || t5.once !== i5.once || t5.passive !== i5.passive, h4 = t5 !== y && (i5 === y || e7);
    e7 && this.element.removeEventListener(this.name, this, i5), h4 && this.element.addEventListener(this.name, this, t5), this.L = t5;
  }
  handleEvent(t5) {
    var _a6, _b5;
    typeof this.L == "function" ? this.L.call((_b5 = (_a6 = this.options) == null ? void 0 : _a6.host) != null ? _b5 : this.element, t5) : this.L.handleEvent(t5);
  }
};
var N = class {
  constructor(t5, s5, i5) {
    this.element = t5, this.type = 6, this.R = void 0, this.st = void 0, this.Q = s5, this.options = i5;
  }
  M(t5) {
    P(this, t5);
  }
};
var _a, _b;
(_a = globalThis.litHtmlPlatformSupport) == null ? void 0 : _a.call(globalThis, A, E), ((_b = (t2 = globalThis).litHtmlVersions) != null ? _b : t2.litHtmlVersions = []).push("2.0.0-pre.6");

// node_modules/@lit/reactive-element/css-tag.js
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var t3 = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var e4 = Symbol();
var n4 = class {
  constructor(t5, n6) {
    if (n6 !== e4)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t5;
  }
  get styleSheet() {
    return t3 && this.t === void 0 && (this.t = new CSSStyleSheet(), this.t.replaceSync(this.cssText)), this.t;
  }
  toString() {
    return this.cssText;
  }
};
var s2 = (t5) => new n4(t5 + "", e4);
var o3 = new Map();
var i2 = (e7, n6) => {
  t3 ? e7.adoptedStyleSheets = n6.map((t5) => t5 instanceof CSSStyleSheet ? t5 : t5.styleSheet) : n6.forEach((t5) => {
    const n7 = document.createElement("style");
    n7.textContent = t5.cssText, e7.appendChild(n7);
  });
};
var S2 = t3 ? (t5) => t5 : (t5) => t5 instanceof CSSStyleSheet ? ((t6) => {
  let e7 = "";
  for (const n6 of t6.cssRules)
    e7 += n6.cssText;
  return s2(e7);
})(t5) : t5;

// node_modules/@lit/reactive-element/reactive-element.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var i3;
window.JSCompiler_renameProperty = (t5, s5) => t5;
var e5 = {toAttribute(t5, s5) {
  switch (s5) {
    case Boolean:
      t5 = t5 ? "" : null;
      break;
    case Object:
    case Array:
      t5 = t5 == null ? t5 : JSON.stringify(t5);
  }
  return t5;
}, fromAttribute(t5, s5) {
  let i5 = t5;
  switch (s5) {
    case Boolean:
      i5 = t5 !== null;
      break;
    case Number:
      i5 = t5 === null ? null : Number(t5);
      break;
    case Object:
    case Array:
      try {
        i5 = JSON.parse(t5);
      } catch (t6) {
        i5 = null;
      }
  }
  return i5;
}};
var h2 = (t5, s5) => s5 !== t5 && (s5 == s5 || t5 == t5);
var r3 = {attribute: true, type: String, converter: e5, reflect: false, hasChanged: h2};
var o4 = class extends HTMLElement {
  constructor() {
    super(), this.\u03A0i = new Map(), this.\u03A0o = void 0, this.\u03A0h = void 0, this.isUpdatePending = false, this.hasUpdated = false, this.\u03A0l = null, this.u();
  }
  static get observedAttributes() {
    this.finalize();
    const t5 = [];
    return this.elementProperties.forEach((s5, i5) => {
      const e7 = this.\u03A0p(i5, s5);
      e7 !== void 0 && (this.\u03A0m.set(e7, i5), t5.push(e7));
    }), t5;
  }
  static createProperty(t5, s5 = r3) {
    if (s5.state && (s5.attribute = false), this.finalize(), this.elementProperties.set(t5, s5), !s5.noAccessor && !this.prototype.hasOwnProperty(t5)) {
      const i5 = typeof t5 == "symbol" ? Symbol() : "__" + t5, e7 = this.getPropertyDescriptor(t5, i5, s5);
      e7 !== void 0 && Object.defineProperty(this.prototype, t5, e7);
    }
  }
  static getPropertyDescriptor(t5, s5, i5) {
    return {get() {
      return this[s5];
    }, set(e7) {
      const h4 = this[t5];
      this[s5] = e7, this.requestUpdate(t5, h4, i5);
    }, configurable: true, enumerable: true};
  }
  static getPropertyOptions(t5) {
    return this.elementProperties.get(t5) || r3;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return false;
    this.finalized = true;
    const t5 = Object.getPrototypeOf(this);
    if (t5.finalize(), this.elementProperties = new Map(t5.elementProperties), this.\u03A0m = new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const t6 = this.properties, s5 = [...Object.getOwnPropertyNames(t6), ...Object.getOwnPropertySymbols(t6)];
      for (const i5 of s5)
        this.createProperty(i5, t6[i5]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(s5) {
    const i5 = [];
    if (Array.isArray(s5)) {
      const e7 = new Set(s5.flat(1 / 0).reverse());
      for (const s6 of e7)
        i5.unshift(S2(s6));
    } else
      s5 !== void 0 && i5.push(S2(s5));
    return i5;
  }
  static \u03A0p(t5, s5) {
    const i5 = s5.attribute;
    return i5 === false ? void 0 : typeof i5 == "string" ? i5 : typeof t5 == "string" ? t5.toLowerCase() : void 0;
  }
  u() {
    this.\u03A0v = new Promise((t5) => this.enableUpdating = t5), this.P = new Map(), this.\u03A0g(), this.requestUpdate();
  }
  addController(t5) {
    var _a6, _b5;
    ((_a6 = this.\u03A0_) != null ? _a6 : this.\u03A0_ = []).push(t5), this.isConnected && ((_b5 = t5.hostConnected) == null ? void 0 : _b5.call(t5));
  }
  removeController(t5) {
    var _a6;
    (_a6 = this.\u03A0_) == null ? void 0 : _a6.splice(this.\u03A0_.indexOf(t5) >>> 0, 1);
  }
  \u03A0g() {
    this.constructor.elementProperties.forEach((t5, s5) => {
      this.hasOwnProperty(s5) && (this.\u03A0i.set(s5, this[s5]), delete this[s5]);
    });
  }
  createRenderRoot() {
    var _a6;
    const t5 = (_a6 = this.shadowRoot) != null ? _a6 : this.attachShadow(this.constructor.shadowRootOptions);
    return i2(t5, this.constructor.elementStyles), t5;
  }
  connectedCallback() {
    var _a6;
    this.hasUpdated || (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (_a6 = this.\u03A0_) == null ? void 0 : _a6.forEach((t5) => {
      var _a7;
      return (_a7 = t5.hostConnected) == null ? void 0 : _a7.call(t5);
    }), this.\u03A0h && (this.\u03A0h(), this.\u03A0o = this.\u03A0h = void 0);
  }
  enableUpdating(t5) {
  }
  disconnectedCallback() {
    var _a6;
    (_a6 = this.\u03A0_) == null ? void 0 : _a6.forEach((t5) => {
      var _a7;
      return (_a7 = t5.hostDisconnected) == null ? void 0 : _a7.call(t5);
    }), this.\u03A0o = new Promise((t5) => this.\u03A0h = t5);
  }
  attributeChangedCallback(t5, s5, i5) {
    this.O(t5, i5);
  }
  \u03A0j(t5, s5, i5 = r3) {
    var _a6, _b5;
    const h4 = this.constructor.\u03A0p(t5, i5);
    if (h4 !== void 0 && i5.reflect === true) {
      const r5 = ((_b5 = (_a6 = i5.converter) == null ? void 0 : _a6.toAttribute) != null ? _b5 : e5.toAttribute)(s5, i5.type);
      this.\u03A0l = t5, r5 == null ? this.removeAttribute(h4) : this.setAttribute(h4, r5), this.\u03A0l = null;
    }
  }
  O(t5, s5) {
    var _a6, _b5;
    const i5 = this.constructor, h4 = i5.\u03A0m.get(t5);
    if (h4 !== void 0 && this.\u03A0l !== h4) {
      const t6 = i5.getPropertyOptions(h4), r5 = t6.converter, o7 = (_b5 = (_a6 = r5 == null ? void 0 : r5.fromAttribute) != null ? _a6 : typeof r5 == "function" ? r5 : null) != null ? _b5 : e5.fromAttribute;
      this.\u03A0l = h4, this[h4] = o7(s5, t6.type), this.\u03A0l = null;
    }
  }
  requestUpdate(t5, s5, i5) {
    let e7 = true;
    t5 !== void 0 && (((i5 = i5 || this.constructor.getPropertyOptions(t5)).hasChanged || h2)(this[t5], s5) ? (this.P.has(t5) || this.P.set(t5, s5), i5.reflect === true && this.\u03A0l !== t5 && (this.\u03A0k === void 0 && (this.\u03A0k = new Map()), this.\u03A0k.set(t5, i5))) : e7 = false), !this.isUpdatePending && e7 && (this.\u03A0v = this.\u03A0q());
  }
  async \u03A0q() {
    this.isUpdatePending = true;
    try {
      for (await this.\u03A0v; this.\u03A0o; )
        await this.\u03A0o;
    } catch (t6) {
      Promise.reject(t6);
    }
    const t5 = this.performUpdate();
    return t5 != null && await t5, !this.isUpdatePending;
  }
  performUpdate() {
    var _a6;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this.\u03A0i && (this.\u03A0i.forEach((t6, s6) => this[s6] = t6), this.\u03A0i = void 0);
    let t5 = false;
    const s5 = this.P;
    try {
      t5 = this.shouldUpdate(s5), t5 ? (this.willUpdate(s5), (_a6 = this.\u03A0_) == null ? void 0 : _a6.forEach((t6) => {
        var _a7;
        return (_a7 = t6.hostUpdate) == null ? void 0 : _a7.call(t6);
      }), this.update(s5)) : this.\u03A0$();
    } catch (s6) {
      throw t5 = false, this.\u03A0$(), s6;
    }
    t5 && this.H(s5);
  }
  willUpdate(t5) {
  }
  H(t5) {
    var _a6;
    this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t5)), (_a6 = this.\u03A0_) == null ? void 0 : _a6.forEach((t6) => {
      var _a7;
      return (_a7 = t6.hostUpdated) == null ? void 0 : _a7.call(t6);
    }), this.updated(t5);
  }
  \u03A0$() {
    this.P = new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this.\u03A0v;
  }
  shouldUpdate(t5) {
    return true;
  }
  update(t5) {
    this.\u03A0k !== void 0 && (this.\u03A0k.forEach((t6, s5) => this.\u03A0j(s5, this[s5], t6)), this.\u03A0k = void 0), this.\u03A0$();
  }
  updated(t5) {
  }
  firstUpdated(t5) {
  }
};
var _a2, _b2;
o4.finalized = true, o4.shadowRootOptions = {mode: "open"}, (_a2 = globalThis.reactiveElementPlatformSupport) == null ? void 0 : _a2.call(globalThis, {ReactiveElement: o4}), ((_b2 = (i3 = globalThis).reactiveElementVersions) != null ? _b2 : i3.reactiveElementVersions = []).push("1.0.0-pre.2");

// node_modules/lit-element/node_modules/lit-html/lit-html.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var t4;
var s3 = `lit$${(Math.random() + "").slice(9)}$`;
var i4 = "?" + s3;
var e6 = `<${i4}>`;
var h3 = document;
var o5 = (t5 = "") => h3.createComment(t5);
var n5 = (t5) => t5 === null || typeof t5 != "object" && typeof t5 != "function";
var r4 = Array.isArray;
var l2 = (t5) => r4(t5) || typeof (t5 == null ? void 0 : t5[Symbol.iterator]) == "function";
var c2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var a2 = /-->/g;
var u2 = />/g;
var _2 = />|[ 	\n\r](?:([^ -- "'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g;
var d2 = /'/g;
var f2 = /"/g;
var v2 = /^(?:script|style|textarea)$/i;
var m2 = (t5) => (s5, ...i5) => ({_$litType$: t5, strings: s5, values: i5});
var p2 = m2(1);
var $2 = m2(2);
var g2 = Symbol.for("lit-noChange");
var y2 = Symbol.for("lit-nothing");
var x2 = new Map();
var b = (t5, s5, i5) => {
  var _a6, _b5;
  const e7 = (_a6 = i5 == null ? void 0 : i5.renderBefore) != null ? _a6 : s5;
  let h4 = e7.t;
  if (h4 === void 0) {
    const t6 = (_b5 = i5 == null ? void 0 : i5.renderBefore) != null ? _b5 : null;
    e7.t = h4 = new E2(s5.insertBefore(o5(), t6), t6, void 0, i5);
  }
  return h4.M(t5), h4;
};
var T2 = h3.createTreeWalker(h3, 133, null, false);
var w2 = (t5, i5) => {
  const h4 = t5.length - 1, o7 = [];
  let n6, r5 = i5 === 2 ? "<svg>" : "", l3 = c2;
  for (let i6 = 0; i6 < h4; i6++) {
    const h5 = t5[i6];
    let m3, p3, $3 = -1, g3 = 0;
    for (; g3 < h5.length && (l3.lastIndex = g3, p3 = l3.exec(h5), p3 !== null); )
      g3 = l3.lastIndex, l3 === c2 ? p3[1] === "!--" ? l3 = a2 : p3[1] !== void 0 ? l3 = u2 : p3[2] !== void 0 ? (v2.test(p3[2]) && (n6 = RegExp("</" + p3[2], "g")), l3 = _2) : p3[3] !== void 0 && (l3 = _2) : l3 === _2 ? p3[0] === ">" ? (l3 = n6 != null ? n6 : c2, $3 = -1) : p3[1] === void 0 ? $3 = -2 : ($3 = l3.lastIndex - p3[2].length, m3 = p3[1], l3 = p3[3] === void 0 ? _2 : p3[3] === '"' ? f2 : d2) : l3 === f2 || l3 === d2 ? l3 = _2 : l3 === a2 || l3 === u2 ? l3 = c2 : (l3 = _2, n6 = void 0);
    const y3 = l3 === _2 && t5[i6 + 1].startsWith("/>") ? " " : "";
    r5 += l3 === c2 ? h5 + e6 : $3 >= 0 ? (o7.push(m3), h5.slice(0, $3) + "$lit$" + h5.slice($3) + s3 + y3) : h5 + s3 + ($3 === -2 ? (o7.push(void 0), i6) : y3);
  }
  return [r5 + (t5[h4] || "<?>") + (i5 === 2 ? "</svg>" : ""), o7];
};
var A2 = class {
  constructor({strings: t5, _$litType$: e7}, h4) {
    let n6;
    this.o = [], this.C = h4;
    let r5 = 0, l3 = 0, c3 = 0;
    const a3 = t5.length - 1, [u3, _3] = w2(t5, e7);
    if (this.B = this.A(u3), T2.currentNode = this.B.content, e7 === 2) {
      const t6 = this.B.content, s5 = t6.firstChild;
      s5.remove(), t6.append(...s5.childNodes);
    }
    for (; (n6 = T2.nextNode()) !== null && l3 < a3; ) {
      if (n6.nodeType === 1) {
        if (n6.hasAttributes()) {
          const t6 = [];
          for (const i5 of n6.getAttributeNames())
            if (i5.endsWith("$lit$") || i5.startsWith(s3)) {
              const e8 = _3[c3++];
              if (t6.push(i5), e8 !== void 0) {
                const t7 = n6.getAttribute(e8.toLowerCase() + "$lit$").split(s3), i6 = /([.?@])?(.*)/.exec(e8);
                this.o.push({h: 1, l: r5, u: i6[2], v: t7, p: i6[1] === "." ? I2 : i6[1] === "?" ? M2 : i6[1] === "@" ? C2 : S3}), l3 += t7.length - 1;
              } else
                this.o.push({h: 6, l: r5});
            }
          for (const s5 of t6)
            n6.removeAttribute(s5);
        }
        if (v2.test(n6.tagName)) {
          const t6 = n6.textContent.split(s3), i5 = t6.length - 1;
          if (i5 > 0) {
            n6.textContent = "";
            for (let s5 = 0; s5 < i5; s5++)
              n6.append(t6[s5] || o5()), this.o.push({h: 2, l: ++r5}), l3++;
            n6.append(t6[i5] || o5());
          }
        }
      } else if (n6.nodeType === 8)
        if (n6.data === i4)
          l3++, this.o.push({h: 2, l: r5});
        else {
          let t6 = -1;
          for (; (t6 = n6.data.indexOf(s3, t6 + 1)) !== -1; )
            this.o.push({h: 7, l: r5}), l3++, t6 += s3.length - 1;
        }
      r5++;
    }
  }
  A(t5) {
    const s5 = h3.createElement("template");
    return s5.innerHTML = t5, s5;
  }
};
function P2(t5, s5, i5 = t5, e7) {
  var _a6, _b5, _c;
  var h4;
  if (s5 === g2)
    return s5;
  let o7 = e7 !== void 0 ? (_a6 = i5.\u03A3_) == null ? void 0 : _a6[e7] : i5.\u03A3m;
  const r5 = n5(s5) ? void 0 : s5._$litDirective$;
  return (o7 == null ? void 0 : o7.constructor) !== r5 && ((_b5 = o7 == null ? void 0 : o7.S) == null ? void 0 : _b5.call(o7, false), o7 = r5 === void 0 ? void 0 : new r5(__assign(__assign({}, t5), {$: t5, Q: i5, g: e7})), e7 !== void 0 ? ((_c = (h4 = i5).\u03A3_) != null ? _c : h4.\u03A3_ = [])[e7] = o7 : i5.\u03A3m = o7), o7 !== void 0 && (s5 = P2(t5, o7.W(t5, s5.values), o7, e7)), s5;
}
var V2 = class {
  constructor(t5, s5) {
    this.o = [], this.R = void 0, this.G = t5, this.Q = s5;
  }
  k(t5) {
    const {B: {content: s5}, o: i5} = this.G, e7 = h3.importNode(s5, true);
    T2.currentNode = e7;
    let o7 = T2.nextNode(), n6 = 0, r5 = 0, l3 = i5[0];
    for (; l3 !== void 0 && o7 !== null; ) {
      if (n6 === l3.l) {
        let s6;
        l3.h === 2 ? s6 = new E2(o7, o7.nextSibling, this, t5) : l3.h === 1 ? s6 = new l3.p(o7, l3.u, l3.v, this, t5) : l3.h === 6 && (s6 = new N2(o7, this, t5)), this.o.push(s6), l3 = i5[++r5];
      }
      l3 !== void 0 && n6 !== l3.l && (o7 = T2.nextNode(), n6++);
    }
    return e7;
  }
  j(t5) {
    let s5 = 0;
    for (const i5 of this.o)
      i5 !== void 0 && (i5.strings !== void 0 ? (i5.M(t5, i5, s5), s5 += i5.strings.length - 2) : i5.M(t5[s5])), s5++;
  }
};
var E2 = class {
  constructor(t5, s5, i5, e7) {
    this.type = 2, this.R = void 0, this.D = t5, this.E = s5, this.Q = i5, this.options = e7;
  }
  setConnected(t5) {
    var _a6;
    (_a6 = this.T) == null ? void 0 : _a6.call(this, t5);
  }
  get parentNode() {
    return this.D.parentNode;
  }
  M(t5, s5 = this) {
    t5 = P2(this, t5, s5), n5(t5) ? t5 === y2 || t5 == null || t5 === "" ? (this.L !== y2 && this.V(), this.L = y2) : t5 !== this.L && t5 !== g2 && this.Y(t5) : t5._$litType$ !== void 0 ? this.q(t5) : t5.nodeType !== void 0 ? this.X(t5) : l2(t5) ? this.tt(t5) : this.Y(t5);
  }
  it(t5, s5 = this.E) {
    return this.D.parentNode.insertBefore(t5, s5);
  }
  X(t5) {
    this.L !== t5 && (this.V(), this.L = this.it(t5));
  }
  Y(t5) {
    const s5 = this.D.nextSibling;
    s5 !== null && s5.nodeType === 3 && (this.E === null ? s5.nextSibling === null : s5 === this.E.previousSibling) ? s5.data = t5 : this.X(h3.createTextNode(t5)), this.L = t5;
  }
  q(t5) {
    var _a6;
    const {values: s5, strings: i5} = t5, e7 = this.F(i5, t5);
    if (((_a6 = this.L) == null ? void 0 : _a6.G) === e7)
      this.L.j(s5);
    else {
      const t6 = new V2(e7, this), i6 = t6.k(this.options);
      t6.j(s5), this.X(i6), this.L = t6;
    }
  }
  F(t5, s5) {
    let i5 = x2.get(t5);
    return i5 === void 0 && x2.set(t5, i5 = new A2(s5)), i5;
  }
  tt(t5) {
    r4(this.L) || (this.L = [], this.V());
    const s5 = this.L;
    let i5, e7 = 0;
    for (const h4 of t5)
      e7 === s5.length ? s5.push(i5 = new E2(this.it(o5()), this.it(o5()), this, this.options)) : i5 = s5[e7], i5.M(h4), e7++;
    e7 < s5.length && (this.V(i5 && i5.E.nextSibling, e7), s5.length = e7);
  }
  V(t5 = this.D.nextSibling, s5) {
    var _a6;
    for ((_a6 = this.T) == null ? void 0 : _a6.call(this, false, true, s5); t5 && t5 !== this.E; ) {
      const s6 = t5.nextSibling;
      t5.remove(), t5 = s6;
    }
  }
};
var S3 = class {
  constructor(t5, s5, i5, e7, h4) {
    this.type = 1, this.L = y2, this.R = void 0, this.st = void 0, this.element = t5, this.name = s5, this.Q = e7, this.options = h4, i5.length > 2 || i5[0] !== "" || i5[1] !== "" ? (this.L = Array(i5.length - 1).fill(y2), this.strings = i5) : this.L = y2;
  }
  get tagName() {
    return this.element.tagName;
  }
  M(t5, s5 = this, i5, e7) {
    const h4 = this.strings;
    let o7 = false;
    if (h4 === void 0)
      t5 = P2(this, t5, s5, 0), o7 = !n5(t5) || t5 !== this.L && t5 !== g2, o7 && (this.L = t5);
    else {
      const e8 = t5;
      let r5, l3;
      for (t5 = h4[0], r5 = 0; r5 < h4.length - 1; r5++)
        l3 = P2(this, e8[i5 + r5], s5, r5), l3 === g2 && (l3 = this.L[r5]), o7 || (o7 = !n5(l3) || l3 !== this.L[r5]), l3 === y2 ? t5 = y2 : t5 !== y2 && (t5 += (l3 != null ? l3 : "") + h4[r5 + 1]), this.L[r5] = l3;
    }
    o7 && !e7 && this.nt(t5);
  }
  nt(t5) {
    t5 === y2 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t5 != null ? t5 : "");
  }
};
var I2 = class extends S3 {
  constructor() {
    super(...arguments), this.type = 3;
  }
  nt(t5) {
    this.element[this.name] = t5 === y2 ? void 0 : t5;
  }
};
var M2 = class extends S3 {
  constructor() {
    super(...arguments), this.type = 4;
  }
  nt(t5) {
    t5 && t5 !== y2 ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name);
  }
};
var C2 = class extends S3 {
  constructor() {
    super(...arguments), this.type = 5;
  }
  M(t5, s5 = this) {
    var _a6;
    if ((t5 = (_a6 = P2(this, t5, s5, 0)) != null ? _a6 : y2) === g2)
      return;
    const i5 = this.L, e7 = t5 === y2 && i5 !== y2 || t5.capture !== i5.capture || t5.once !== i5.once || t5.passive !== i5.passive, h4 = t5 !== y2 && (i5 === y2 || e7);
    e7 && this.element.removeEventListener(this.name, this, i5), h4 && this.element.addEventListener(this.name, this, t5), this.L = t5;
  }
  handleEvent(t5) {
    var _a6, _b5;
    typeof this.L == "function" ? this.L.call((_b5 = (_a6 = this.options) == null ? void 0 : _a6.host) != null ? _b5 : this.element, t5) : this.L.handleEvent(t5);
  }
};
var N2 = class {
  constructor(t5, s5, i5) {
    this.element = t5, this.type = 6, this.R = void 0, this.st = void 0, this.Q = s5, this.options = i5;
  }
  M(t5) {
    P2(this, t5);
  }
};
var _a3, _b3;
(_a3 = globalThis.litHtmlPlatformSupport) == null ? void 0 : _a3.call(globalThis, A2, E2), ((_b3 = (t4 = globalThis).litHtmlVersions) != null ? _b3 : t4.litHtmlVersions = []).push("2.0.0-pre.6");

// node_modules/lit-element/lit-element.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var s4;
var _a4;
((_a4 = (s4 = globalThis).litElementVersions) != null ? _a4 : s4.litElementVersions = []).push("3.0.0-pre.3");
var o6 = class extends o4 {
  constructor() {
    super(...arguments), this.I = {host: this}, this.\u03A6o = void 0;
  }
  createRenderRoot() {
    var _a6;
    var t5;
    const e7 = super.createRenderRoot();
    return (_a6 = (t5 = this.I).renderBefore) != null ? _a6 : t5.renderBefore = e7.firstChild, e7;
  }
  update(t5) {
    const r5 = this.render();
    super.update(t5), this.\u03A6o = b(r5, this.renderRoot, this.I);
  }
  connectedCallback() {
    var _a6;
    super.connectedCallback(), (_a6 = this.\u03A6o) == null ? void 0 : _a6.setConnected(true);
  }
  disconnectedCallback() {
    var _a6;
    super.disconnectedCallback(), (_a6 = this.\u03A6o) == null ? void 0 : _a6.setConnected(false);
  }
  render() {
    return g2;
  }
};
var _a5, _b4;
o6.finalized = true, (_a5 = globalThis.litElementHydrateSupport) == null ? void 0 : _a5.call(globalThis, {LitElement: o6}), (_b4 = globalThis.litElementPlatformSupport) == null ? void 0 : _b4.call(globalThis, {LitElement: o6});

export {
  n,
  __getOwnPropDesc,
  o6 as o,
  s2 as s,
  __assign,
  p2 as p,
  g,
  y,
  __decorate
};
