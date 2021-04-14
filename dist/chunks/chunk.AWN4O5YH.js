import {
  isPreventScrollSupported,
  lockBodyScrolling,
  modal_default,
  unlockBodyScrolling
} from "./chunk.5LDML7H2.js";
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

// _ew4pej8sx:/Users/valentin/src/shoelace/src/components/drawer/drawer.scss
var drawer_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n/**\n * @prop --size: The preferred size of the drawer. This will be applied to the drawer's width or height depending on its\n *   `placement`. Note that the drawer will shrink to accommodate smaller screens.\n * @prop --header-spacing: The amount of padding to use for the header.\n * @prop --body-spacing: The amount of padding to use for the body.\n * @prop --footer-spacing: The amount of padding to use for the footer.\n *\n */\n:host {\n  --size: 25rem;\n  --header-spacing: var(--sl-spacing-large);\n  --body-spacing: var(--sl-spacing-large);\n  --footer-spacing: var(--sl-spacing-large);\n  display: contents;\n}\n\n.drawer {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  overflow: hidden;\n}\n.drawer:not(.drawer--visible) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  overflow: hidden;\n  pointer-events: none;\n  visibility: hidden;\n}\n\n.drawer--contained {\n  position: absolute;\n  z-index: initial;\n}\n\n.drawer--fixed {\n  position: fixed;\n  z-index: var(--sl-z-index-drawer);\n}\n\n.drawer__panel {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  z-index: 2;\n  max-width: 100%;\n  max-height: 100%;\n  background-color: var(--sl-panel-background-color);\n  box-shadow: var(--sl-shadow-x-large);\n  transition: var(--sl-transition-medium) transform;\n  overflow: auto;\n  pointer-events: all;\n}\n.drawer__panel:focus {\n  outline: none;\n}\n\n.drawer--top .drawer__panel {\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 0;\n  width: 100%;\n  height: var(--size);\n  transform: translate(0, -100%);\n}\n\n.drawer--right .drawer__panel {\n  top: 0;\n  right: 0;\n  bottom: auto;\n  left: auto;\n  width: var(--size);\n  height: 100%;\n  transform: translate(100%, 0);\n}\n\n.drawer--bottom .drawer__panel {\n  top: auto;\n  right: auto;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: var(--size);\n  transform: translate(0, 100%);\n}\n\n.drawer--left .drawer__panel {\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 0;\n  width: var(--size);\n  height: 100%;\n  transform: translate(-100%, 0);\n}\n\n.drawer--open .drawer__panel {\n  transform: translate(0, 0);\n}\n\n.drawer__header {\n  display: flex;\n}\n\n.drawer__title {\n  flex: 1 1 auto;\n  font-size: var(--sl-font-size-large);\n  line-height: var(--sl-line-height-dense);\n  padding: var(--header-spacing);\n}\n\n.drawer__close {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  font-size: var(--sl-font-size-x-large);\n  padding: 0 var(--header-spacing);\n}\n\n.drawer__body {\n  flex: 1 1 auto;\n  padding: var(--body-spacing);\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.drawer__footer {\n  text-align: right;\n  padding: var(--footer-spacing);\n}\n.drawer__footer ::slotted(sl-button:not(:last-of-type)) {\n  margin-right: var(--sl-spacing-x-small);\n}\n\n.drawer:not(.drawer--has-footer) .drawer__footer {\n  display: none;\n}\n\n.drawer__overlay {\n  display: block;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: var(--sl-overlay-background-color);\n  opacity: 0;\n  transition: var(--sl-transition-medium) opacity;\n  pointer-events: all;\n}\n\n.drawer--contained .drawer__overlay {\n  position: absolute;\n}\n\n.drawer--open .drawer__overlay {\n  opacity: 1;\n}";

// src/components/drawer/drawer.ts
var hasPreventScroll = isPreventScrollSupported();
var id = 0;
var SlDrawer = class extends o2 {
  constructor() {
    super(...arguments);
    this.componentId = `drawer-${++id}`;
    this.willShow = false;
    this.willHide = false;
    this.hasFooter = false;
    this.isVisible = false;
    this.open = false;
    this.label = "";
    this.placement = "right";
    this.contained = false;
    this.noHeader = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.modal = new modal_default(this, {
      onfocusOut: () => this.contained ? null : this.panel.focus()
    });
    this.handleSlotChange();
    if (this.open) {
      this.show();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    unlockBodyScrolling(this);
  }
  show() {
    if (this.willShow) {
      return;
    }
    const slShow = this.slShow.emit();
    if (slShow.defaultPrevented) {
      this.open = false;
      return;
    }
    this.willShow = true;
    this.isVisible = true;
    this.open = true;
    if (!this.contained) {
      this.modal.activate();
      lockBodyScrolling(this);
    }
    if (this.open) {
      if (hasPreventScroll) {
        requestAnimationFrame(() => {
          const slInitialFocus = this.slInitialFocus.emit();
          if (!slInitialFocus.defaultPrevented) {
            this.panel.focus({preventScroll: true});
          }
        });
      } else {
        this.drawer.addEventListener("transitionend", () => {
          const slInitialFocus = this.slInitialFocus.emit();
          if (!slInitialFocus.defaultPrevented) {
            this.panel.focus();
          }
        }, {once: true});
      }
    }
  }
  hide() {
    if (this.willHide) {
      return;
    }
    const slHide = this.slHide.emit();
    if (slHide.defaultPrevented) {
      this.open = true;
      return;
    }
    this.willHide = true;
    this.open = false;
    this.modal.deactivate();
    unlockBodyScrolling(this);
  }
  handleCloseClick() {
    this.hide();
  }
  handleKeyDown(event2) {
    if (event2.key === "Escape") {
      this.hide();
    }
  }
  handleOpenChange() {
    this.open ? this.show() : this.hide();
  }
  handleOverlayClick() {
    const slOverlayDismiss = this.slOverlayDismiss.emit();
    if (!slOverlayDismiss.defaultPrevented) {
      this.hide();
    }
  }
  handleSlotChange() {
    this.hasFooter = hasSlot(this, "footer");
  }
  handleTransitionEnd(event2) {
    const target = event2.target;
    if (event2.propertyName === "transform" && target.classList.contains("drawer__panel")) {
      this.isVisible = this.open;
      this.willShow = false;
      this.willHide = false;
      this.open ? this.slAfterShow.emit() : this.slAfterHide.emit();
    }
  }
  render() {
    return p`
      <div
        part="base"
        class=${i({
      drawer: true,
      "drawer--open": this.open,
      "drawer--visible": this.isVisible,
      "drawer--top": this.placement === "top",
      "drawer--right": this.placement === "right",
      "drawer--bottom": this.placement === "bottom",
      "drawer--left": this.placement === "left",
      "drawer--contained": this.contained,
      "drawer--fixed": !this.contained,
      "drawer--has-footer": this.hasFooter
    })}
        @keydown=${this.handleKeyDown}
        @transitionend=${this.handleTransitionEnd}
      >
        <div part="overlay" class="drawer__overlay" @click=${this.handleOverlayClick} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${o(this.noHeader ? this.label : void 0)}
          aria-labelledby=${o(!this.noHeader ? `${this.componentId}-title` : void 0)}
          tabindex="0"
        >
          ${!this.noHeader ? p`
                <header part="header" class="drawer__header">
                  <span part="title" class="drawer__title" id=${`${this.componentId}-title`}>
                    <!-- If there's no label, use an invisible character to prevent the heading from collapsing -->
                    <slot name="label"> ${this.label || String.fromCharCode(65279)} </slot>
                  </span>
                  <sl-icon-button
                    exportparts="base:close-button"
                    class="drawer__close"
                    name="x"
                    @click=${this.handleCloseClick}
                  ></sl-icon-button>
                </header>
              ` : ""}

          <div part="body" class="drawer__body">
            <slot></slot>
          </div>

          <footer part="footer" class="drawer__footer">
            <slot name="footer" @slotchange=${this.handleSlotChange}></slot>
          </footer>
        </div>
      </div>
    `;
  }
};
SlDrawer.styles = s(drawer_default);
__decorate([
  i2(".drawer")
], SlDrawer.prototype, "drawer", 2);
__decorate([
  i2(".drawer__panel")
], SlDrawer.prototype, "panel", 2);
__decorate([
  r()
], SlDrawer.prototype, "hasFooter", 2);
__decorate([
  r()
], SlDrawer.prototype, "isVisible", 2);
__decorate([
  e({type: Boolean, reflect: true})
], SlDrawer.prototype, "open", 2);
__decorate([
  e({reflect: true})
], SlDrawer.prototype, "label", 2);
__decorate([
  e({reflect: true})
], SlDrawer.prototype, "placement", 2);
__decorate([
  e({type: Boolean, reflect: true})
], SlDrawer.prototype, "contained", 2);
__decorate([
  e({attribute: "no-header", type: Boolean, reflect: true})
], SlDrawer.prototype, "noHeader", 2);
__decorate([
  event("sl-show")
], SlDrawer.prototype, "slShow", 2);
__decorate([
  event("sl-after-show")
], SlDrawer.prototype, "slAfterShow", 2);
__decorate([
  event("sl-hide")
], SlDrawer.prototype, "slHide", 2);
__decorate([
  event("sl-after-hide")
], SlDrawer.prototype, "slAfterHide", 2);
__decorate([
  event("sl-initial-focus")
], SlDrawer.prototype, "slInitialFocus", 2);
__decorate([
  event("sl-overlay-dismiss")
], SlDrawer.prototype, "slOverlayDismiss", 2);
__decorate([
  watch("open")
], SlDrawer.prototype, "handleOpenChange", 1);
SlDrawer = __decorate([
  n("sl-drawer")
], SlDrawer);
var drawer_default2 = SlDrawer;

export {
  drawer_default2 as drawer_default
};
