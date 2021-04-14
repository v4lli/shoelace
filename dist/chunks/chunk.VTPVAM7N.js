import {
  e,
  s,
  t
} from "./chunk.VSJN236Y.js";
import {
  g,
  y
} from "./chunk.SXOXLYUK.js";

// node_modules/lit-html/directives/unsafe-html.js
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
var n = class extends e {
  constructor(i) {
    if (super(i), this.value = y, i.type !== t.CHILD)
      throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(r) {
    if (r === y)
      return this.templateResult = void 0, this.value = r;
    if (r === g)
      return r;
    if (typeof r != "string")
      throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (r === this.value)
      return this.templateResult;
    this.value = r;
    const s2 = [r];
    return s2.raw = s2, this.templateResult = {_$litType$: this.constructor.resultType, strings: s2, values: []};
  }
};
n.directiveName = "unsafeHTML", n.resultType = 1;
var o = s(n);

export {
  n,
  o
};
