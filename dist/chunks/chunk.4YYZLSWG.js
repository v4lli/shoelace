import {
  requestInclude
} from "./chunk.2HYO2JO7.js";
import {
  watch
} from "./chunk.SUD4FHJ4.js";
import {
  event
} from "./chunk.NVGUFQGY.js";
import {
  e
} from "./chunk.T6M3ZU4B.js";
import {
  __decorate,
  n,
  o,
  p,
  s
} from "./chunk.SXOXLYUK.js";

// _ew4pej8sx:/Users/valentin/src/shoelace/src/components/include/include.scss
var include_default = ":host {\n  display: block;\n}";

// src/components/include/include.ts
var SlInclude = class extends o {
  constructor() {
    super(...arguments);
    this.mode = "cors";
    this.allowScripts = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.loadSource();
  }
  executeScript(script) {
    const newScript = document.createElement("script");
    [...script.attributes].map((attr) => newScript.setAttribute(attr.name, attr.value));
    newScript.textContent = script.textContent;
    script.parentNode.replaceChild(newScript, script);
  }
  async loadSource() {
    try {
      const src = this.src;
      const file = await requestInclude(src, this.mode);
      if (src !== this.src) {
        return;
      }
      if (!file) {
        return;
      }
      if (!file.ok) {
        this.slError.emit({detail: {status: file.status}});
        return;
      }
      this.innerHTML = file.html;
      if (this.allowScripts) {
        [...this.querySelectorAll("script")].map((script) => this.executeScript(script));
      }
      this.slLoad.emit();
    } catch (e2) {
      this.slError.emit({detail: {status: -1}});
    }
  }
  render() {
    return p`<slot></slot>`;
  }
};
SlInclude.styles = s(include_default);
__decorate([
  e()
], SlInclude.prototype, "src", 2);
__decorate([
  e()
], SlInclude.prototype, "mode", 2);
__decorate([
  e({attribute: "allow-scripts", type: Boolean})
], SlInclude.prototype, "allowScripts", 2);
__decorate([
  event("sl-load")
], SlInclude.prototype, "slLoad", 2);
__decorate([
  event("sl-error")
], SlInclude.prototype, "slError", 2);
__decorate([
  watch("src")
], SlInclude.prototype, "loadSource", 1);
SlInclude = __decorate([
  n("sl-include")
], SlInclude);
var include_default2 = SlInclude;

export {
  include_default2 as include_default
};
