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

// _ew4pej8sx:/Users/valentin/src/shoelace/src/components/textarea/textarea.scss
var textarea_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n.form-control .form-control__label {\n  display: none;\n}\n.form-control .form-control__help-text {\n  display: none;\n}\n\n.form-control--has-label .form-control__label {\n  display: inline-block;\n  color: var(--sl-input-label-color);\n  margin-bottom: var(--sl-spacing-xxx-small);\n}\n.form-control--has-label.form-control--small .form-control__label {\n  font-size: var(--sl-input-label-font-size-small);\n}\n.form-control--has-label.form-control--medium .form-control__label {\n  font-size: var(--sl-input-label-font-size-medium);\n}\n.form-control--has-label.form-control--large .form-control_label {\n  font-size: var(--sl-input-label-font-size-large);\n}\n\n.form-control--has-help-text .form-control__help-text {\n  display: block;\n  color: var(--sl-input-help-text-color);\n}\n.form-control--has-help-text .form-control__help-text ::slotted(*) {\n  margin-top: var(--sl-spacing-xxx-small);\n}\n.form-control--has-help-text.form-control--small .form-control__help-text {\n  font-size: var(--sl-input-help-text-font-size-small);\n}\n.form-control--has-help-text.form-control--medium .form-control__help-text {\n  font-size: var(--sl-input-help-text-font-size-medium);\n}\n.form-control--has-help-text.form-control--large .form-control__help-text {\n  font-size: var(--sl-input-help-text-font-size-large);\n}\n\n:host {\n  display: block;\n}\n\n.textarea {\n  display: flex;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  font-family: var(--sl-input-font-family);\n  font-weight: var(--sl-input-font-weight);\n  line-height: var(--sl-line-height-normal);\n  letter-spacing: var(--sl-input-letter-spacing);\n  background-color: var(--sl-input-background-color);\n  border: solid var(--sl-input-border-width) var(--sl-input-border-color);\n  vertical-align: middle;\n  transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;\n  cursor: text;\n}\n.textarea:hover:not(.textarea--disabled) {\n  background-color: var(--sl-input-background-color-hover);\n  border-color: var(--sl-input-border-color-hover);\n}\n.textarea:hover:not(.textarea--disabled) .textarea__control {\n  color: var(--sl-input-color-hover);\n}\n.textarea.textarea--focused:not(.textarea--disabled) {\n  background-color: var(--sl-input-background-color-focus);\n  border-color: var(--sl-input-border-color-focus);\n  box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);\n  color: var(--sl-input-color-focus);\n}\n.textarea.textarea--focused:not(.textarea--disabled) .textarea__control {\n  color: var(--sl-input-color-focus);\n}\n.textarea.textarea--disabled {\n  background-color: var(--sl-input-background-color-disabled);\n  border-color: var(--sl-input-border-color-disabled);\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.textarea.textarea--disabled .textarea__control {\n  color: var(--sl-input-color-disabled);\n}\n.textarea.textarea--disabled .textarea__control::placeholder {\n  color: var(--sl-input-placeholder-color-disabled);\n}\n\n.textarea__control {\n  flex: 1 1 auto;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  line-height: 1.4;\n  color: var(--sl-input-color);\n  border: none;\n  background: none;\n  box-shadow: none;\n  cursor: inherit;\n  -webkit-appearance: none;\n}\n.textarea__control::-webkit-search-decoration, .textarea__control::-webkit-search-cancel-button, .textarea__control::-webkit-search-results-button, .textarea__control::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n}\n.textarea__control::placeholder {\n  color: var(--sl-input-placeholder-color);\n  user-select: none;\n}\n.textarea__control:focus {\n  outline: none;\n}\n\n.textarea--small {\n  border-radius: var(--sl-input-border-radius-small);\n  font-size: var(--sl-input-font-size-small);\n}\n.textarea--small .textarea__control {\n  padding: 0.5em var(--sl-input-spacing-small);\n}\n\n.textarea--medium {\n  border-radius: var(--sl-input-border-radius-medium);\n  font-size: var(--sl-input-font-size-medium);\n}\n.textarea--medium .textarea__control {\n  padding: 0.5em var(--sl-input-spacing-medium);\n}\n\n.textarea--large {\n  border-radius: var(--sl-input-border-radius-large);\n  font-size: var(--sl-input-font-size-large);\n}\n.textarea--large .textarea__control {\n  padding: 0.5em var(--sl-input-spacing-large);\n}\n\n.textarea--resize-none .textarea__control {\n  resize: none;\n}\n\n.textarea--resize-vertical .textarea__control {\n  resize: vertical;\n}\n\n.textarea--resize-auto .textarea__control {\n  height: auto;\n  resize: none;\n}";

// src/components/textarea/textarea.ts
var id = 0;
var SlTextarea = class extends o2 {
  constructor() {
    super(...arguments);
    this.inputId = `textarea-${++id}`;
    this.helpTextId = `textarea-help-text-${id}`;
    this.labelId = `textarea-label-${id}`;
    this.hasFocus = false;
    this.hasHelpTextSlot = false;
    this.hasLabelSlot = false;
    this.size = "medium";
    this.value = "";
    this.helpText = "";
    this.rows = 4;
    this.resize = "vertical";
    this.disabled = false;
    this.readonly = false;
    this.required = false;
    this.invalid = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.handleSlotChange = this.handleSlotChange.bind(this);
    this.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
    this.handleSlotChange();
  }
  firstUpdated() {
    this.setTextareaHeight();
    this.resizeObserver = new ResizeObserver(() => this.setTextareaHeight());
    this.resizeObserver.observe(this.input);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver.unobserve(this.input);
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
    }
    if (this.value !== this.input.value) {
      this.value = this.input.value;
      this.setTextareaHeight();
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
    this.setTextareaHeight();
    this.slInput.emit();
  }
  handleBlur() {
    this.hasFocus = false;
    this.slBlur.emit();
  }
  handleFocus() {
    this.hasFocus = true;
    this.slFocus.emit();
  }
  handleRowsChange() {
    this.setTextareaHeight();
  }
  handleSlotChange() {
    this.hasHelpTextSlot = hasSlot(this, "help-text");
    this.hasLabelSlot = hasSlot(this, "label");
  }
  handleValueChange() {
    this.invalid = !this.input.checkValidity();
  }
  setTextareaHeight() {
    if (this.resize === "auto") {
      this.input.style.height = "auto";
      this.input.style.height = this.input.scrollHeight + "px";
    } else {
      this.input.style.height = void 0;
    }
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
      textarea: true,
      "textarea--small": this.size === "small",
      "textarea--medium": this.size === "medium",
      "textarea--large": this.size === "large",
      "textarea--disabled": this.disabled,
      "textarea--focused": this.hasFocus,
      "textarea--empty": this.value.length === 0,
      "textarea--invalid": this.invalid,
      "textarea--resize-none": this.resize === "none",
      "textarea--resize-vertical": this.resize === "vertical",
      "textarea--resize-auto": this.resize === "auto"
    })}
        >
          <textarea
            part="textarea"
            id=${this.inputId}
            class="textarea__control"
            name=${o(this.name)}
            .value=${this.value}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?required=${this.required}
            placeholder=${o(this.placeholder)}
            rows=${o(this.rows)}
            minlength=${o(this.minlength)}
            maxlength=${o(this.maxlength)}
            autocapitalize=${o(this.autocapitalize)}
            autocorrect=${o(this.autocorrect)}
            ?autofocus=${this.autofocus}
            spellcheck=${o(this.spellcheck)}
            inputmode=${o(this.inputmode)}
            aria-labelledby=${o(getLabelledBy({
      label: this.label,
      labelId: this.labelId,
      hasLabelSlot: this.hasLabelSlot,
      helpText: this.helpText,
      helpTextId: this.helpTextId,
      hasHelpTextSlot: this.hasHelpTextSlot
    }))}
            @change=${this.handleChange.bind(this)}
            @input=${this.handleInput.bind(this)}
            @focus=${this.handleFocus.bind(this)}
            @blur=${this.handleBlur.bind(this)}
          ></textarea>
        </div>
      `);
  }
};
SlTextarea.styles = s(textarea_default);
__decorate([
  i2(".textarea__control")
], SlTextarea.prototype, "input", 2);
__decorate([
  r()
], SlTextarea.prototype, "hasFocus", 2);
__decorate([
  r()
], SlTextarea.prototype, "hasHelpTextSlot", 2);
__decorate([
  r()
], SlTextarea.prototype, "hasLabelSlot", 2);
__decorate([
  e({reflect: true})
], SlTextarea.prototype, "size", 2);
__decorate([
  e()
], SlTextarea.prototype, "name", 2);
__decorate([
  e()
], SlTextarea.prototype, "value", 2);
__decorate([
  e()
], SlTextarea.prototype, "label", 2);
__decorate([
  e({attribute: "help-text"})
], SlTextarea.prototype, "helpText", 2);
__decorate([
  e()
], SlTextarea.prototype, "placeholder", 2);
__decorate([
  e({type: Number})
], SlTextarea.prototype, "rows", 2);
__decorate([
  e()
], SlTextarea.prototype, "resize", 2);
__decorate([
  e({type: Boolean, reflect: true})
], SlTextarea.prototype, "disabled", 2);
__decorate([
  e({type: Boolean, reflect: true})
], SlTextarea.prototype, "readonly", 2);
__decorate([
  e({type: Number})
], SlTextarea.prototype, "minlength", 2);
__decorate([
  e({type: Number})
], SlTextarea.prototype, "maxlength", 2);
__decorate([
  e()
], SlTextarea.prototype, "pattern", 2);
__decorate([
  e({type: Boolean, reflect: true})
], SlTextarea.prototype, "required", 2);
__decorate([
  e({type: Boolean, reflect: true})
], SlTextarea.prototype, "invalid", 2);
__decorate([
  e()
], SlTextarea.prototype, "autocapitalize", 2);
__decorate([
  e()
], SlTextarea.prototype, "autocorrect", 2);
__decorate([
  e()
], SlTextarea.prototype, "autocomplete", 2);
__decorate([
  e({type: Boolean})
], SlTextarea.prototype, "autofocus", 2);
__decorate([
  e({type: Boolean})
], SlTextarea.prototype, "spellcheck", 2);
__decorate([
  e()
], SlTextarea.prototype, "inputmode", 2);
__decorate([
  event("sl-change")
], SlTextarea.prototype, "slChange", 2);
__decorate([
  event("sl-input")
], SlTextarea.prototype, "slInput", 2);
__decorate([
  event("sl-focus")
], SlTextarea.prototype, "slFocus", 2);
__decorate([
  event("sl-blur")
], SlTextarea.prototype, "slBlur", 2);
__decorate([
  watch("rows")
], SlTextarea.prototype, "handleRowsChange", 1);
__decorate([
  watch("helpText"),
  watch("label")
], SlTextarea.prototype, "handleSlotChange", 1);
__decorate([
  watch("value")
], SlTextarea.prototype, "handleValueChange", 1);
SlTextarea = __decorate([
  n("sl-textarea")
], SlTextarea);
var textarea_default2 = SlTextarea;

export {
  textarea_default2 as textarea_default
};
