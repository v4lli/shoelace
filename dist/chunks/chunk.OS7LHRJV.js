import {
  event
} from "./chunk.NVGUFQGY.js";
import {
  i
} from "./chunk.5D6J5A4S.js";
import {
  i as i2
} from "./chunk.BMRAUHVW.js";
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

// _ew4pej8sx:/Users/valentin/src/shoelace/src/components/tab/tab.scss
var tab_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n/**\n * @prop --focus-ring: The focus ring's box shadow.\n */\n:host {\n  --focus-ring: inset 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);\n  display: inline-block;\n}\n\n.tab {\n  display: inline-flex;\n  align-items: center;\n  font-family: var(--sl-font-sans);\n  font-size: var(--sl-font-size-small);\n  font-weight: var(--sl-font-weight-semibold);\n  border-radius: 4px;\n  color: var(--sl-color-gray-600);\n  padding: var(--sl-spacing-medium) var(--sl-spacing-large);\n  white-space: nowrap;\n  user-select: none;\n  cursor: pointer;\n  transition: var(--transition-speed) box-shadow, var(--transition-speed) color;\n}\n.tab:hover:not(.tab--disabled) {\n  color: var(--sl-color-primary-500);\n}\n.tab:focus {\n  outline: none;\n}\n.tab:focus:not(.tab--disabled) {\n  color: var(--sl-color-primary-500);\n  box-shadow: var(--focus-ring);\n}\n.tab.tab--active:not(.tab--disabled) {\n  color: var(--sl-color-primary-500);\n}\n.tab.tab--closable {\n  padding-right: var(--sl-spacing-small);\n}\n.tab.tab--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.tab__close-button {\n  font-size: var(--sl-font-size-large);\n  margin-left: var(--sl-spacing-xx-small);\n}\n.tab__close-button::part(base) {\n  padding: var(--sl-spacing-xxx-small);\n}";

// src/components/tab/tab.ts
var id = 0;
var SlTab = class extends o {
  constructor() {
    super(...arguments);
    this.componentId = `tab-${++id}`;
    this.panel = "";
    this.active = false;
    this.closable = false;
    this.disabled = false;
  }
  focus(options) {
    this.tab.focus(options);
  }
  blur() {
    this.tab.blur();
  }
  handleCloseClick() {
    this.slClose.emit();
  }
  render() {
    this.id = this.id || this.componentId;
    return p`
      <div
        part="base"
        class=${i({
      tab: true,
      "tab--active": this.active,
      "tab--closable": this.closable,
      "tab--disabled": this.disabled
    })}
        role="tab"
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-selected=${this.active ? "true" : "false"}
        tabindex=${this.disabled || !this.active ? "-1" : "0"}
      >
        <slot></slot>
        ${this.closable ? p`
              <sl-icon-button
                name="x"
                exportparts="base:close-button"
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
                aria-hidden="true"
              ></sl-icon-button>
            ` : ""}
      </div>
    `;
  }
};
SlTab.styles = s(tab_default);
__decorate([
  i2(".tab")
], SlTab.prototype, "tab", 2);
__decorate([
  e()
], SlTab.prototype, "panel", 2);
__decorate([
  e({type: Boolean, reflect: true})
], SlTab.prototype, "active", 2);
__decorate([
  e({type: Boolean})
], SlTab.prototype, "closable", 2);
__decorate([
  e({type: Boolean, reflect: true})
], SlTab.prototype, "disabled", 2);
__decorate([
  event("sl-close")
], SlTab.prototype, "slClose", 2);
SlTab = __decorate([
  n("sl-tab")
], SlTab);
var tab_default2 = SlTab;

export {
  tab_default2 as tab_default
};
