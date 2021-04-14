import {
  __decorate,
  n,
  o,
  p,
  s
} from "./chunk.SXOXLYUK.js";

// _ew4pej8sx:/Users/valentin/src/shoelace/src/components/menu-divider/menu-divider.scss
var menu_divider_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n:host {\n  display: block;\n}\n\n.menu-divider {\n  border-top: solid 1px var(--sl-panel-border-color);\n  margin: var(--sl-spacing-x-small) 0;\n}";

// src/components/menu-divider/menu-divider.ts
var SlMenuDivider = class extends o {
  render() {
    return p` <div part="base" class="menu-divider" role="separator" aria-hidden="true"></div> `;
  }
};
SlMenuDivider.styles = s(menu_divider_default);
SlMenuDivider = __decorate([
  n("sl-menu-divider")
], SlMenuDivider);
var menu_divider_default2 = SlMenuDivider;

export {
  menu_divider_default2 as menu_divider_default
};
