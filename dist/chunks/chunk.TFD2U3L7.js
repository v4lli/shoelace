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

// _ew4pej8sx:/Users/valentin/src/shoelace/src/components/radio-group/radio-group.scss
var radio_group_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n:host {\n  display: block;\n}\n\n.radio-group {\n  border: solid var(--sl-input-border-width) var(--sl-input-border-color);\n  border-radius: var(--sl-border-radius-medium);\n  padding: var(--sl-spacing-large);\n  padding-top: var(--sl-spacing-x-small);\n}\n.radio-group .radio-group__label {\n  font-family: var(--sl-input-font-family);\n  font-size: var(--sl-input-font-size-medium);\n  font-weight: var(--sl-input-font-weight);\n  color: var(--sl-input-color);\n  padding: 0 var(--sl-spacing-xx-small);\n}\n\n::slotted(sl-radio:not(:last-of-type)) {\n  display: block;\n  margin-bottom: var(--sl-spacing-xx-small);\n}\n\n.radio-group--no-fieldset {\n  border: none;\n  padding: 0;\n  margin: 0;\n  min-width: 0;\n}\n.radio-group--no-fieldset .radio-group__label {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}";

// src/components/radio-group/radio-group.ts
var SlRadioGroup = class extends o {
  constructor() {
    super(...arguments);
    this.label = "";
    this.noFieldset = false;
  }
  render() {
    return p`
      <fieldset
        part="base"
        class=${i({
      "radio-group": true,
      "radio-group--no-fieldset": this.noFieldset
    })}
        role="radiogroup"
      >
        <legend part="label" class="radio-group__label">
          <slot name="label">${this.label}</slot>
        </legend>
        <slot></slot>
      </fieldset>
    `;
  }
};
SlRadioGroup.styles = s(radio_group_default);
__decorate([
  e()
], SlRadioGroup.prototype, "label", 2);
__decorate([
  e({type: Boolean, attribute: "no-fieldset"})
], SlRadioGroup.prototype, "noFieldset", 2);
SlRadioGroup = __decorate([
  n("sl-radio-group")
], SlRadioGroup);
var radio_group_default2 = SlRadioGroup;

export {
  radio_group_default2 as radio_group_default
};
