import {
  event
} from "./chunk.NVGUFQGY.js";
import {
  i
} from "./chunk.5D6J5A4S.js";
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

// _ew4pej8sx:/Users/valentin/src/shoelace/src/components/tag/tag.scss
var tag_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n:host {\n  display: inline-block;\n}\n\n.tag {\n  display: flex;\n  align-items: center;\n  border: solid 1px;\n  line-height: 1;\n  white-space: nowrap;\n  user-select: none;\n  cursor: default;\n}\n\n.tag__clear::part(base) {\n  color: inherit;\n  padding: 0;\n}\n\n.tag--primary {\n  background-color: var(--sl-color-primary-100);\n  border-color: var(--sl-color-primary-200);\n  color: var(--sl-color-primary-700);\n}\n\n.tag--success {\n  background-color: var(--sl-color-success-100);\n  border-color: var(--sl-color-success-200);\n  color: var(--sl-color-success-700);\n}\n\n.tag--info {\n  background-color: var(--sl-color-info-100);\n  border-color: var(--sl-color-info-200);\n  color: var(--sl-color-info-700);\n}\n\n.tag--warning {\n  background-color: var(--sl-color-warning-100);\n  border-color: var(--sl-color-warning-200);\n  color: var(--sl-color-warning-700);\n}\n\n.tag--danger {\n  background-color: var(--sl-color-danger-100);\n  border-color: var(--sl-color-danger-200);\n  color: var(--sl-color-danger-700);\n}\n\n.tag--small {\n  font-size: var(--sl-button-font-size-small);\n  height: calc(var(--sl-input-height-small) * 0.8);\n  line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);\n  border-radius: var(--sl-input-border-radius-small);\n  padding: 0 var(--sl-spacing-x-small);\n}\n.tag--small .tag__clear {\n  margin-left: var(--sl-spacing-xx-small);\n  margin-right: calc(-1 * var(--sl-spacing-xxx-small));\n}\n\n.tag--medium {\n  font-size: var(--sl-button-font-size-medium);\n  height: calc(var(--sl-input-height-medium) * 0.8);\n  line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);\n  border-radius: var(--sl-input-border-radius-medium);\n  padding: 0 var(--sl-spacing-small);\n}\n.tag--medium .tag__clear {\n  margin-left: var(--sl-spacing-xx-small);\n  margin-right: calc(-1 * var(--sl-spacing-xx-small));\n}\n\n.tag--large {\n  font-size: var(--sl-button-font-size-large);\n  height: calc(var(--sl-input-height-large) * 0.8);\n  line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);\n  border-radius: var(--sl-input-border-radius-large);\n  padding: 0 var(--sl-spacing-medium);\n}\n.tag--large .tag__clear {\n  margin-left: var(--sl-spacing-xx-small);\n  margin-right: calc(-1 * var(--sl-spacing-x-small));\n}\n\n.tag--pill {\n  border-radius: var(--sl-border-radius-pill);\n}";

// src/components/tag/tag.ts
var SlTag = class extends o {
  constructor() {
    super(...arguments);
    this.type = "primary";
    this.size = "medium";
    this.pill = false;
    this.clearable = false;
  }
  handleClearClick() {
    this.slClear.emit();
  }
  render() {
    return p`
      <span
        part="base"
        class=${i({
      tag: true,
      "tag--primary": this.type === "primary",
      "tag--success": this.type === "success",
      "tag--info": this.type === "info",
      "tag--warning": this.type === "warning",
      "tag--danger": this.type === "danger",
      "tag--text": this.type === "text",
      "tag--small": this.size === "small",
      "tag--medium": this.size === "medium",
      "tag--large": this.size === "large",
      "tag--pill": this.pill,
      "tag--clearable": this.clearable
    })}
      >
        <span part="content" class="tag__content">
          <slot></slot>
        </span>

        ${this.clearable ? p`
              <sl-icon-button
                exportparts="base:clear-button"
                name="x"
                class="tag__clear"
                @click=${this.handleClearClick}
              ></sl-icon-button>
            ` : ""}
      </span>
    `;
  }
};
SlTag.styles = s(tag_default);
__decorate([
  e({reflect: true})
], SlTag.prototype, "type", 2);
__decorate([
  e({reflect: true})
], SlTag.prototype, "size", 2);
__decorate([
  e({type: Boolean, reflect: true})
], SlTag.prototype, "pill", 2);
__decorate([
  e({type: Boolean})
], SlTag.prototype, "clearable", 2);
__decorate([
  event("sl-clear")
], SlTag.prototype, "slClear", 2);
SlTag = __decorate([
  n("sl-tag")
], SlTag);
var tag_default2 = SlTag;

export {
  tag_default2 as tag_default
};
