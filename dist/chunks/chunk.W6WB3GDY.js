import {
  e,
  s,
  t
} from "./chunk.VSJN236Y.js";
import {
  g
} from "./chunk.SXOXLYUK.js";

// node_modules/lit-html/directives/style-map.js
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
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
var i = s(class extends e {
  constructor(t2) {
    var _a;
    if (super(t2), t2.type !== t.ATTRIBUTE || t2.name !== "style" || ((_a = t2.strings) == null ? void 0 : _a.length) > 2)
      throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(t2) {
    return Object.keys(t2).reduce((e2, r) => {
      const s2 = t2[r];
      return s2 === null ? e2 : e2 + `${r = r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s2};`;
    }, "");
  }
  update(e2, [r]) {
    const {style: s2} = e2.element;
    if (this.previousStyleProperties === void 0) {
      this.previousStyleProperties = new Set();
      for (const t2 in r)
        this.previousStyleProperties.add(t2);
      return this.render(r);
    }
    this.previousStyleProperties.forEach((t2) => {
      t2 in r || (this.previousStyleProperties.delete(t2), t2.indexOf("-") === -1 ? s2[t2] = null : s2.removeProperty(t2));
    });
    for (const t2 in r)
      this.previousStyleProperties.add(t2), t2.indexOf("-") === -1 ? s2[t2] = r[t2] : s2.setProperty(t2, r[t2]);
    return g;
  }
});

export {
  i
};
