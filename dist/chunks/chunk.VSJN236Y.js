// node_modules/lit-html/directive.js
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
var t = {ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6};
var s = (t2) => (...s2) => ({_$litDirective$: t2, values: s2});
var e = class {
  constructor(t2) {
    this.Q = t2.Q, this.\u03A3bt = t2.$, this.\u03A3gt = t2.g;
  }
  W(t2, s2) {
    return this.update(t2, s2);
  }
  update(t2, s2) {
    return this.render(...s2);
  }
};

export {
  t,
  s,
  e
};
