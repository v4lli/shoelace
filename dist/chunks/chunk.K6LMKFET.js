import {
  watch
} from "./chunk.SUD4FHJ4.js";
import {
  o
} from "./chunk.SA3KMFF3.js";
import {
  event
} from "./chunk.NVGUFQGY.js";
import {
  r
} from "./chunk.QXBOLCLQ.js";
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
  o as o2,
  p,
  s
} from "./chunk.SXOXLYUK.js";

// _ew4pej8sx:/Users/valentin/src/shoelace/src/components/checkbox/checkbox.scss
var checkbox_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n:host {\n  display: inline-block;\n}\n\n.checkbox {\n  display: inline-flex;\n  align-items: center;\n  font-family: var(--sl-input-font-family);\n  font-size: var(--sl-input-font-size-medium);\n  font-weight: var(--sl-input-font-weight);\n  color: var(--sl-input-color);\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.checkbox__control {\n  flex: 0 0 auto;\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: var(--sl-toggle-size);\n  height: var(--sl-toggle-size);\n  border: solid var(--sl-input-border-width) var(--sl-input-border-color);\n  border-radius: 2px;\n  background-color: var(--sl-input-background-color);\n  color: var(--sl-color-white);\n  transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color, var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;\n}\n.checkbox__control input[type=checkbox] {\n  position: absolute;\n  opacity: 0;\n  padding: 0;\n  margin: 0;\n  pointer-events: none;\n}\n.checkbox__control .checkbox__icon {\n  display: inline-flex;\n  width: var(--sl-toggle-size);\n  height: var(--sl-toggle-size);\n}\n.checkbox__control .checkbox__icon svg {\n  width: 100%;\n  height: 100%;\n}\n\n.checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {\n  border-color: var(--sl-input-border-color-hover);\n  background-color: var(--sl-input-background-color-hover);\n}\n\n.checkbox.checkbox--focused:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control {\n  border-color: var(--sl-input-border-color-focus);\n  background-color: var(--sl-input-background-color-focus);\n  box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);\n}\n\n.checkbox--checked .checkbox__control,\n.checkbox--indeterminate .checkbox__control {\n  border-color: var(--sl-color-primary-500);\n  background-color: var(--sl-color-primary-500);\n}\n\n.checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,\n.checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {\n  border-color: var(--sl-color-primary-400);\n  background-color: var(--sl-color-primary-400);\n}\n\n.checkbox.checkbox--checked:not(.checkbox--disabled).checkbox--focused .checkbox__control,\n.checkbox.checkbox--indeterminate:not(.checkbox--disabled).checkbox--focused .checkbox__control {\n  border-color: var(--sl-color-primary-400);\n  background-color: var(--sl-color-primary-400);\n  box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);\n}\n\n.checkbox--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.checkbox__label {\n  line-height: var(--sl-toggle-size);\n  margin-left: 0.5em;\n  user-select: none;\n}";

// src/components/checkbox/checkbox.ts
var id = 0;
var SlCheckbox = class extends o2 {
  constructor() {
    super(...arguments);
    this.inputId = `checkbox-${++id}`;
    this.labelId = `checkbox-label-${id}`;
    this.hasFocus = false;
    this.disabled = false;
    this.required = false;
    this.checked = false;
    this.indeterminate = false;
    this.invalid = false;
  }
  firstUpdated() {
    this.input.indeterminate = this.indeterminate;
  }
  click() {
    this.input.click();
  }
  focus(options) {
    this.input.focus(options);
  }
  blur() {
    this.input.blur();
  }
  reportValidity() {
    return this.input.reportValidity();
  }
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }
  handleClick() {
    this.checked = !this.checked;
    this.indeterminate = false;
  }
  handleBlur() {
    this.hasFocus = false;
    this.slBlur.emit();
  }
  handleFocus() {
    this.hasFocus = true;
    this.slFocus.emit();
  }
  handleLabelMouseDown(event2) {
    event2.preventDefault();
    this.input.focus();
  }
  handleStateChange() {
    this.input.checked = this.checked;
    this.input.indeterminate = this.indeterminate;
    this.slChange.emit();
  }
  render() {
    return p`
      <label
        part="base"
        class=${i({
      checkbox: true,
      "checkbox--checked": this.checked,
      "checkbox--disabled": this.disabled,
      "checkbox--focused": this.hasFocus,
      "checkbox--indeterminate": this.indeterminate
    })}
        for=${this.inputId}
        @mousedown=${this.handleLabelMouseDown}
      >
        <span part="control" class="checkbox__control">
          ${this.checked ? p`
                <span part="checked-icon" class="checkbox__icon">
                  <svg viewBox="0 0 16 16">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                      <g stroke="currentColor" stroke-width="2">
                        <g transform="translate(3.428571, 3.428571)">
                          <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
                          <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              ` : ""}
          ${!this.checked && this.indeterminate ? p`
                <span part="indeterminate-icon" class="checkbox__icon">
                  <svg viewBox="0 0 16 16">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                      <g stroke="currentColor" stroke-width="2">
                        <g transform="translate(2.285714, 6.857143)">
                          <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              ` : ""}

          <input
            id=${this.inputId}
            type="checkbox"
            name=${o(this.name)}
            value=${o(this.value)}
            ?checked=${this.checked}
            ?disabled=${this.disabled}
            ?required=${this.required}
            role="checkbox"
            aria-checked=${this.checked ? "true" : "false"}
            aria-labelledby=${this.labelId}
            @click=${this.handleClick}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />
        </span>

        <span part="label" id=${this.labelId} class="checkbox__label">
          <slot></slot>
        </span>
      </label>
    `;
  }
};
SlCheckbox.styles = s(checkbox_default);
__decorate([
  i2('input[type="checkbox"]')
], SlCheckbox.prototype, "input", 2);
__decorate([
  r()
], SlCheckbox.prototype, "hasFocus", 2);
__decorate([
  e()
], SlCheckbox.prototype, "name", 2);
__decorate([
  e()
], SlCheckbox.prototype, "value", 2);
__decorate([
  e({type: Boolean, reflect: true})
], SlCheckbox.prototype, "disabled", 2);
__decorate([
  e({type: Boolean, reflect: true})
], SlCheckbox.prototype, "required", 2);
__decorate([
  e({type: Boolean, reflect: true})
], SlCheckbox.prototype, "checked", 2);
__decorate([
  e({type: Boolean, reflect: true})
], SlCheckbox.prototype, "indeterminate", 2);
__decorate([
  e({type: Boolean, reflect: true})
], SlCheckbox.prototype, "invalid", 2);
__decorate([
  event("sl-blur")
], SlCheckbox.prototype, "slBlur", 2);
__decorate([
  event("sl-change")
], SlCheckbox.prototype, "slChange", 2);
__decorate([
  event("sl-focus")
], SlCheckbox.prototype, "slFocus", 2);
__decorate([
  watch("checked"),
  watch("indeterminate")
], SlCheckbox.prototype, "handleStateChange", 1);
SlCheckbox = __decorate([
  n("sl-checkbox")
], SlCheckbox);
var checkbox_default2 = SlCheckbox;

export {
  checkbox_default2 as checkbox_default
};
