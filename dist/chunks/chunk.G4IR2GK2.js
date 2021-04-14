import {
  getLabelledBy,
  renderFormControl
} from "./chunk.DVMX54UT.js";
import {
  watch
} from "./chunk.SUD4FHJ4.js";
import {
  hasSlot
} from "./chunk.PCLPGKVT.js";
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

// _ew4pej8sx:/Users/valentin/src/shoelace/src/components/input/input.scss
var input_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n.form-control .form-control__label {\n  display: none;\n}\n.form-control .form-control__help-text {\n  display: none;\n}\n\n.form-control--has-label .form-control__label {\n  display: inline-block;\n  color: var(--sl-input-label-color);\n  margin-bottom: var(--sl-spacing-xxx-small);\n}\n.form-control--has-label.form-control--small .form-control__label {\n  font-size: var(--sl-input-label-font-size-small);\n}\n.form-control--has-label.form-control--medium .form-control__label {\n  font-size: var(--sl-input-label-font-size-medium);\n}\n.form-control--has-label.form-control--large .form-control_label {\n  font-size: var(--sl-input-label-font-size-large);\n}\n\n.form-control--has-help-text .form-control__help-text {\n  display: block;\n  color: var(--sl-input-help-text-color);\n}\n.form-control--has-help-text .form-control__help-text ::slotted(*) {\n  margin-top: var(--sl-spacing-xxx-small);\n}\n.form-control--has-help-text.form-control--small .form-control__help-text {\n  font-size: var(--sl-input-help-text-font-size-small);\n}\n.form-control--has-help-text.form-control--medium .form-control__help-text {\n  font-size: var(--sl-input-help-text-font-size-medium);\n}\n.form-control--has-help-text.form-control--large .form-control__help-text {\n  font-size: var(--sl-input-help-text-font-size-large);\n}\n\n/**\n * @prop --focus-ring: The focus ring style to use when the control receives focus, a `box-shadow` property.\n */\n:host {\n  --focus-ring: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);\n  display: block;\n}\n\n.input {\n  flex: 1 1 auto;\n  display: inline-flex;\n  align-items: stretch;\n  justify-content: start;\n  position: relative;\n  width: 100%;\n  font-family: var(--sl-input-font-family);\n  font-weight: var(--sl-input-font-weight);\n  letter-spacing: var(--sl-input-letter-spacing);\n  background-color: var(--sl-input-background-color);\n  border: solid var(--sl-input-border-width) var(--sl-input-border-color);\n  vertical-align: middle;\n  overflow: hidden;\n  transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;\n  cursor: text;\n}\n.input:hover:not(.input--disabled) {\n  background-color: var(--sl-input-background-color-hover);\n  border-color: var(--sl-input-border-color-hover);\n}\n.input:hover:not(.input--disabled) .input__control {\n  color: var(--sl-input-color-hover);\n}\n.input.input--focused:not(.input--disabled) {\n  background-color: var(--sl-input-background-color-focus);\n  border-color: var(--sl-input-border-color-focus);\n  box-shadow: var(--focus-ring);\n}\n.input.input--focused:not(.input--disabled) .input__control {\n  color: var(--sl-input-color-focus);\n}\n.input.input--disabled {\n  background-color: var(--sl-input-background-color-disabled);\n  border-color: var(--sl-input-border-color-disabled);\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.input.input--disabled .input__control {\n  color: var(--sl-input-color-disabled);\n}\n.input.input--disabled .input__control::placeholder {\n  color: var(--sl-input-placeholder-color-disabled);\n}\n\n.input__control {\n  flex: 1 1 auto;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  min-width: 0;\n  height: 100%;\n  color: var(--sl-input-color);\n  border: none;\n  background: none;\n  box-shadow: none;\n  padding: 0;\n  margin: 0;\n  cursor: inherit;\n  -webkit-appearance: none;\n}\n.input__control::-webkit-search-decoration, .input__control::-webkit-search-cancel-button, .input__control::-webkit-search-results-button, .input__control::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n}\n.input__control:-webkit-autofill, .input__control:-webkit-autofill:hover, .input__control:-webkit-autofill:focus, .input__control:-webkit-autofill:active {\n  box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;\n  -webkit-text-fill-color: var(--sl-color-primary-500);\n}\n.input__control::placeholder {\n  color: var(--sl-input-placeholder-color);\n  user-select: none;\n}\n.input__control:focus {\n  outline: none;\n}\n\n.input__prefix,\n.input__suffix {\n  display: inline-flex;\n  flex: 0 0 auto;\n  align-items: center;\n  cursor: default;\n}\n.input__prefix ::slotted(sl-icon),\n.input__suffix ::slotted(sl-icon) {\n  color: var(--sl-input-icon-color);\n}\n\n.input--small {\n  border-radius: var(--sl-input-border-radius-small);\n  font-size: var(--sl-input-font-size-small);\n  height: var(--sl-input-height-small);\n}\n.input--small .input__control {\n  height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);\n  margin: 0 var(--sl-input-spacing-small);\n}\n.input--small .input__clear,\n.input--small .input__password-toggle {\n  margin-right: var(--sl-input-spacing-small);\n}\n.input--small .input__prefix ::slotted(*) {\n  margin-left: var(--sl-input-spacing-small);\n}\n.input--small .input__suffix ::slotted(*) {\n  margin-right: var(--sl-input-spacing-small);\n}\n\n.input--medium {\n  border-radius: var(--sl-input-border-radius-medium);\n  font-size: var(--sl-input-font-size-medium);\n  height: var(--sl-input-height-medium);\n}\n.input--medium .input__control {\n  height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);\n  margin: 0 var(--sl-input-spacing-medium);\n}\n.input--medium .input__clear,\n.input--medium .input__password-toggle {\n  margin-right: var(--sl-input-spacing-medium);\n}\n.input--medium .input__prefix ::slotted(*) {\n  margin-left: var(--sl-input-spacing-medium);\n}\n.input--medium .input__suffix ::slotted(*) {\n  margin-right: var(--sl-input-spacing-medium);\n}\n\n.input--large {\n  border-radius: var(--sl-input-border-radius-large);\n  font-size: var(--sl-input-font-size-large);\n  height: var(--sl-input-height-large);\n}\n.input--large .input__control {\n  height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);\n  margin: 0 var(--sl-input-spacing-large);\n}\n.input--large .input__clear,\n.input--large .input__password-toggle {\n  margin-right: var(--sl-input-spacing-large);\n}\n.input--large .input__prefix ::slotted(*) {\n  margin-left: var(--sl-input-spacing-large);\n}\n.input--large .input__suffix ::slotted(*) {\n  margin-right: var(--sl-input-spacing-large);\n}\n\n.input--pill.input--small {\n  border-radius: var(--sl-input-height-small);\n}\n.input--pill.input--medium {\n  border-radius: var(--sl-input-height-medium);\n}\n.input--pill.input--large {\n  border-radius: var(--sl-input-height-large);\n}\n\n.input__clear,\n.input__password-toggle {\n  display: inline-flex;\n  align-items: center;\n  font-size: inherit;\n  color: var(--sl-input-icon-color);\n  border: none;\n  background: none;\n  padding: 0;\n  transition: var(--sl-transition-fast) color;\n  cursor: pointer;\n}\n.input__clear:hover,\n.input__password-toggle:hover {\n  color: var(--sl-input-icon-color-hover);\n}\n.input__clear:focus,\n.input__password-toggle:focus {\n  outline: none;\n}\n\n.input--empty .input__clear {\n  visibility: hidden;\n}";

// src/components/input/input.ts
var id = 0;
var SlInput = class extends o2 {
  constructor() {
    super(...arguments);
    this.inputId = `input-${++id}`;
    this.helpTextId = `input-help-text-${id}`;
    this.labelId = `input-label-${id}`;
    this.hasFocus = false;
    this.hasHelpTextSlot = false;
    this.hasLabelSlot = false;
    this.isPasswordVisible = false;
    this.type = "text";
    this.size = "medium";
    this.value = "";
    this.pill = false;
    this.helpText = "";
    this.clearable = false;
    this.togglePassword = false;
    this.disabled = false;
    this.readonly = false;
    this.required = false;
    this.invalid = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.handleSlotChange = this.handleSlotChange.bind(this);
    this.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
  }
  firstUpdated() {
    this.handleSlotChange();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
  }
  focus(options) {
    this.input.focus(options);
  }
  blur() {
    this.input.blur();
  }
  select() {
    return this.input.select();
  }
  setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
    return this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }
  setRangeText(replacement, start, end, selectMode = "preserve") {
    this.input.setRangeText(replacement, start, end, selectMode);
    if (this.value !== this.input.value) {
      this.value = this.input.value;
      this.slInput.emit();
      this.slChange.emit();
    }
  }
  reportValidity() {
    return this.input.reportValidity();
  }
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }
  handleChange() {
    this.value = this.input.value;
    this.slChange.emit();
  }
  handleInput() {
    this.value = this.input.value;
    this.slInput.emit();
  }
  handleInvalid() {
    this.invalid = true;
  }
  handleBlur() {
    this.hasFocus = false;
    this.slBlur.emit();
  }
  handleFocus() {
    this.hasFocus = true;
    this.slFocus.emit();
  }
  handleClearClick(event2) {
    this.value = "";
    this.slClear.emit();
    this.slInput.emit();
    this.slChange.emit();
    this.input.focus();
    event2.stopPropagation();
  }
  handlePasswordToggle() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  handleSlotChange() {
    this.hasHelpTextSlot = hasSlot(this, "help-text");
    this.hasLabelSlot = hasSlot(this, "label");
  }
  handleValueChange() {
    this.invalid = !this.input.checkValidity();
  }
  render() {
    return renderFormControl({
      inputId: this.inputId,
      label: this.label,
      labelId: this.labelId,
      hasLabelSlot: this.hasLabelSlot,
      helpTextId: this.helpTextId,
      helpText: this.helpText,
      hasHelpTextSlot: this.hasHelpTextSlot,
      size: this.size
    }, p`
        <div
          part="base"
          class=${i({
      input: true,
      "input--small": this.size === "small",
      "input--medium": this.size === "medium",
      "input--large": this.size === "large",
      "input--pill": this.pill,
      "input--disabled": this.disabled,
      "input--focused": this.hasFocus,
      "input--empty": this.value.length === 0,
      "input--invalid": this.invalid
    })}
        >
          <span part="prefix" class="input__prefix">
            <slot name="prefix"></slot>
          </span>

          <input
            part="input"
            id=${this.inputId}
            class="input__control"
            type=${this.type === "password" && this.isPasswordVisible ? "text" : this.type}
            name=${o(this.name)}
            .value=${this.value}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?required=${this.required}
            placeholder=${o(this.placeholder)}
            minlength=${o(this.minlength)}
            maxlength=${o(this.maxlength)}
            min=${o(this.min)}
            max=${o(this.max)}
            step=${o(this.step)}
            autocapitalize=${o(this.autocapitalize)}
            autocomplete=${o(this.autocomplete)}
            autocorrect=${o(this.autocorrect)}
            ?autofocus=${this.autofocus}
            spellcheck=${o(this.spellcheck)}
            pattern=${o(this.pattern)}
            inputmode=${o(this.inputmode)}
            aria-labelledby=${o(getLabelledBy({
      label: this.label,
      labelId: this.labelId,
      hasLabelSlot: this.hasLabelSlot,
      helpText: this.helpText,
      helpTextId: this.helpTextId,
      hasHelpTextSlot: this.hasHelpTextSlot
    }))}
            aria-invalid=${this.invalid ? "true" : "false"}
            @change=${this.handleChange}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
          />

          ${this.clearable && this.value.length > 0 ? p`
                <button
                  part="clear-button"
                  class="input__clear"
                  type="button"
                  @click=${this.handleClearClick}
                  tabindex="-1"
                >
                  <slot name="clear-icon">
                    <sl-icon name="x-circle"></sl-icon>
                  </slot>
                </button>
              ` : ""}
          ${this.togglePassword ? p`
                <button
                  part="password-toggle-button"
                  class="input__password-toggle"
                  type="button"
                  @click=${this.handlePasswordToggle}
                  tabindex="-1"
                >
                  ${this.isPasswordVisible ? p`
                        <slot name="show-password-icon">
                          <sl-icon name="eye-slash"></sl-icon>
                        </slot>
                      ` : p`
                        <slot name="hide-password-icon">
                          ${" "}
                          <sl-icon name="eye"></sl-icon>
                        </slot>
                      `}
                </button>
              ` : ""}

          <span part="suffix" class="input__suffix">
            <slot name="suffix"></slot>
          </span>
        </div>
      `);
  }
};
SlInput.styles = s(input_default);
__decorate([
  i2(".input__control")
], SlInput.prototype, "input", 2);
__decorate([
  r()
], SlInput.prototype, "hasFocus", 2);
__decorate([
  r()
], SlInput.prototype, "hasHelpTextSlot", 2);
__decorate([
  r()
], SlInput.prototype, "hasLabelSlot", 2);
__decorate([
  r()
], SlInput.prototype, "isPasswordVisible", 2);
__decorate([
  e({reflect: true})
], SlInput.prototype, "type", 2);
__decorate([
  e({reflect: true})
], SlInput.prototype, "size", 2);
__decorate([
  e()
], SlInput.prototype, "name", 2);
__decorate([
  e()
], SlInput.prototype, "value", 2);
__decorate([
  e({type: Boolean, reflect: true})
], SlInput.prototype, "pill", 2);
__decorate([
  e()
], SlInput.prototype, "label", 2);
__decorate([
  e({attribute: "help-text"})
], SlInput.prototype, "helpText", 2);
__decorate([
  e({type: Boolean})
], SlInput.prototype, "clearable", 2);
__decorate([
  e({attribute: "toggle-password", type: Boolean})
], SlInput.prototype, "togglePassword", 2);
__decorate([
  e()
], SlInput.prototype, "placeholder", 2);
__decorate([
  e({type: Boolean, reflect: true})
], SlInput.prototype, "disabled", 2);
__decorate([
  e({type: Boolean, reflect: true})
], SlInput.prototype, "readonly", 2);
__decorate([
  e({type: Number})
], SlInput.prototype, "minlength", 2);
__decorate([
  e({type: Number})
], SlInput.prototype, "maxlength", 2);
__decorate([
  e()
], SlInput.prototype, "min", 2);
__decorate([
  e()
], SlInput.prototype, "max", 2);
__decorate([
  e({type: Number})
], SlInput.prototype, "step", 2);
__decorate([
  e()
], SlInput.prototype, "pattern", 2);
__decorate([
  e({type: Boolean, reflect: true})
], SlInput.prototype, "required", 2);
__decorate([
  e({type: Boolean, reflect: true})
], SlInput.prototype, "invalid", 2);
__decorate([
  e()
], SlInput.prototype, "autocapitalize", 2);
__decorate([
  e()
], SlInput.prototype, "autocorrect", 2);
__decorate([
  e()
], SlInput.prototype, "autocomplete", 2);
__decorate([
  e({type: Boolean})
], SlInput.prototype, "autofocus", 2);
__decorate([
  e({type: Boolean})
], SlInput.prototype, "spellcheck", 2);
__decorate([
  e()
], SlInput.prototype, "inputmode", 2);
__decorate([
  event("sl-change")
], SlInput.prototype, "slChange", 2);
__decorate([
  event("sl-clear")
], SlInput.prototype, "slClear", 2);
__decorate([
  event("sl-input")
], SlInput.prototype, "slInput", 2);
__decorate([
  event("sl-focus")
], SlInput.prototype, "slFocus", 2);
__decorate([
  event("sl-blur")
], SlInput.prototype, "slBlur", 2);
__decorate([
  watch("helpText"),
  watch("label")
], SlInput.prototype, "handleSlotChange", 1);
__decorate([
  watch("value")
], SlInput.prototype, "handleValueChange", 1);
SlInput = __decorate([
  n("sl-input")
], SlInput);
var input_default2 = SlInput;

export {
  input_default2 as input_default
};
