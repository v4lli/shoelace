import {
  r
} from "./chunk.QXBOLCLQ.js";
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

// _ew4pej8sx:/Users/valentin/src/shoelace/src/components/avatar/avatar.scss
var avatar_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n/**\n * @prop --size: The size of the avatar.\n */\n:host {\n  display: inline-block;\n  --size: 3rem;\n}\n\n.avatar {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  width: var(--size);\n  height: var(--size);\n  background-color: var(--sl-color-gray-300);\n  font-family: var(--sl-font-sans);\n  font-size: calc(var(--size) * 0.5);\n  font-weight: var(--sl-font-weight-normal);\n  color: var(--sl-color-white);\n  overflow: hidden;\n  user-select: none;\n  vertical-align: middle;\n}\n\n.avatar--circle {\n  border-radius: var(--sl-border-radius-circle);\n}\n\n.avatar--rounded {\n  border-radius: var(--sl-border-radius-medium);\n}\n\n.avatar--square {\n  border-radius: 0;\n}\n\n.avatar__icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.avatar__initials {\n  line-height: 1;\n  text-transform: uppercase;\n}\n\n.avatar__image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}";

// src/components/avatar/avatar.ts
var SlAvatar = class extends o {
  constructor() {
    super(...arguments);
    this.hasError = false;
    this.shape = "circle";
  }
  render() {
    return p`
      <div
        part="base"
        class=${i({
      avatar: true,
      "avatar--circle": this.shape === "circle",
      "avatar--rounded": this.shape === "rounded",
      "avatar--square": this.shape === "square"
    })}
        aria-label=${this.alt}
      >
        ${this.initials ? p` <div part="initials" class="avatar__initials">${this.initials}</div> ` : p`
              <div part="icon" class="avatar__icon">
                <slot name="icon">
                  <sl-icon name="person-fill"></sl-icon>
                </slot>
              </div>
            `}
        ${this.image && !this.hasError ? p`
              <img part="image" class="avatar__image" src="${this.image}" @error="${() => this.hasError = true}" />
            ` : ""}
      </div>
    `;
  }
};
SlAvatar.styles = s(avatar_default);
__decorate([
  r()
], SlAvatar.prototype, "hasError", 2);
__decorate([
  e()
], SlAvatar.prototype, "image", 2);
__decorate([
  e()
], SlAvatar.prototype, "alt", 2);
__decorate([
  e()
], SlAvatar.prototype, "initials", 2);
__decorate([
  e({reflect: true})
], SlAvatar.prototype, "shape", 2);
SlAvatar = __decorate([
  n("sl-avatar")
], SlAvatar);
var avatar_default2 = SlAvatar;

export {
  avatar_default2 as avatar_default
};
