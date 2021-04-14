import {
  e,
  t
} from "./chunk.AUTNDGPL.js";

// node_modules/@lit/reactive-element/decorators/query.js
function i(i2, r) {
  return (e2, n) => {
    const s = {get() {
      var _a;
      return (_a = this.renderRoot) == null ? void 0 : _a.querySelector(i2);
    }, enumerable: true, configurable: true};
    if (r) {
      const t2 = n !== void 0 ? n : e2.key, o = typeof t2 == "symbol" ? Symbol() : "__" + t2;
      s.get = function() {
        var _a;
        return this[o] === void 0 && (this[o] = (_a = this.renderRoot) == null ? void 0 : _a.querySelector(i2)), this[o];
      };
    }
    return n !== void 0 ? e(s, e2, n) : t(s, e2);
  };
}

export {
  i
};
