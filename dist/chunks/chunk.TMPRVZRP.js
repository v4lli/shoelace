import {
  n
} from "./chunk.VTPVAM7N.js";
import {
  getIconLibrary,
  unwatchIcon,
  watchIcon
} from "./chunk.AF62ZLUK.js";
import {
  requestIcon
} from "./chunk.7GTYP37T.js";
import {
  watch
} from "./chunk.SUD4FHJ4.js";
import {
  event
} from "./chunk.NVGUFQGY.js";
import {
  r
} from "./chunk.QXBOLCLQ.js";
import {
  s
} from "./chunk.VSJN236Y.js";
import {
  e
} from "./chunk.T6M3ZU4B.js";
import {
  __decorate,
  n as n2,
  o,
  p,
  s as s2
} from "./chunk.SXOXLYUK.js";

// node_modules/lit-html/directives/unsafe-svg.js
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
var t = class extends n {
};
t.directiveName = "unsafeSVG", t.resultType = 2;
var o2 = s(t);

// _ew4pej8sx:/Users/valentin/src/shoelace/src/components/icon/icon.scss
var icon_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n:host {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  contain: strict;\n  box-sizing: content-box !important;\n}\n\n.icon,\nsvg {\n  display: block;\n  height: 100%;\n  width: 100%;\n}";

// src/components/icon/icon.ts
var parser = new DOMParser();
var SlIcon = class extends o {
  constructor() {
    super(...arguments);
    this.svg = "";
    this.library = "default";
  }
  connectedCallback() {
    super.connectedCallback();
    watchIcon(this);
  }
  firstUpdated() {
    this.setIcon();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    unwatchIcon(this);
  }
  getLabel() {
    let label = "";
    if (this.label) {
      label = this.label;
    } else if (this.name) {
      label = this.name.replace(/-/g, " ");
    } else if (this.src) {
      label = this.src.replace(/.*\//, "").replace(/-/g, " ").replace(/\.svg/i, "");
    }
    return label;
  }
  getUrl() {
    const library = getIconLibrary(this.library);
    if (this.name && library) {
      return library.resolver(this.name);
    } else {
      return this.src;
    }
  }
  redraw() {
    this.setIcon();
  }
  async setIcon() {
    const library = getIconLibrary(this.library);
    const url = this.getUrl();
    if (url) {
      try {
        const file = await requestIcon(url);
        if (url !== this.getUrl()) {
          return;
        } else if (file.ok) {
          const doc = parser.parseFromString(file.svg, "text/html");
          const svgEl = doc.body.querySelector("svg");
          if (svgEl) {
            if (library && library.mutator) {
              library.mutator(svgEl);
            }
            this.svg = svgEl.outerHTML;
            this.slLoad.emit();
          } else {
            this.svg = "";
            this.slError.emit({detail: {status: file.status}});
          }
        } else {
          this.svg = "";
          this.slError.emit({detail: {status: file.status}});
        }
      } catch (e2) {
        this.slError.emit({detail: {status: -1}});
      }
    } else if (this.svg) {
      this.svg = "";
    }
  }
  handleChange() {
    this.setIcon();
  }
  render() {
    return p` <div part="base" class="icon" role="img" aria-label=${this.getLabel()}>${o2(this.svg)}</div>`;
  }
};
SlIcon.styles = s2(icon_default);
__decorate([
  r()
], SlIcon.prototype, "svg", 2);
__decorate([
  e()
], SlIcon.prototype, "name", 2);
__decorate([
  e()
], SlIcon.prototype, "src", 2);
__decorate([
  e()
], SlIcon.prototype, "label", 2);
__decorate([
  e()
], SlIcon.prototype, "library", 2);
__decorate([
  event("sl-load")
], SlIcon.prototype, "slLoad", 2);
__decorate([
  event("sl-error")
], SlIcon.prototype, "slError", 2);
__decorate([
  watch("name"),
  watch("src"),
  watch("library")
], SlIcon.prototype, "setIcon", 1);
SlIcon = __decorate([
  n2("sl-icon")
], SlIcon);
var icon_default2 = SlIcon;

export {
  icon_default2 as icon_default
};
