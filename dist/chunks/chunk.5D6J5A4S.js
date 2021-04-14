import {
  e,
  s,
  t
} from "./chunk.VSJN236Y.js";
import {
  g
} from "./chunk.SXOXLYUK.js";

// node_modules/lit-html/directives/class-map.js
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
    if (super(t2), t2.type !== t.ATTRIBUTE || t2.name !== "class" || ((_a = t2.strings) == null ? void 0 : _a.length) > 2)
      throw Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t2) {
    return Object.keys(t2).filter((s2) => t2[s2]).join(" ");
  }
  update(s2, [r]) {
    if (this.previousClasses === void 0) {
      this.previousClasses = new Set();
      for (const t2 in r)
        r[t2] && this.previousClasses.add(t2);
      return this.render(r);
    }
    const e2 = s2.element.classList;
    this.previousClasses.forEach((t2) => {
      t2 in r || (e2.remove(t2), this.previousClasses.delete(t2));
    });
    for (const t2 in r) {
      const s3 = !!r[t2];
      s3 !== this.previousClasses.has(t2) && (s3 ? (e2.add(t2), this.previousClasses.add(t2)) : (e2.remove(t2), this.previousClasses.delete(t2)));
    }
    return g;
  }
});

export {
  i
};
