import {
  watch
} from "./chunk.SUD4FHJ4.js";
import {
  i
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

// _ew4pej8sx:/Users/valentin/src/shoelace/src/components/responsive-embed/responsive-embed.scss
var responsive_embed_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n:host {\n  display: block;\n}\n\n.responsive-embed {\n  position: relative;\n}\n.responsive-embed ::slotted(embed),\n.responsive-embed ::slotted(iframe),\n.responsive-embed ::slotted(object) {\n  position: absolute !important;\n  top: 0 !important;\n  left: 0 !important;\n  width: 100% !important;\n  height: 100% !important;\n}";

// src/components/responsive-embed/responsive-embed.ts
var SlResponsiveEmbed = class extends o {
  constructor() {
    super(...arguments);
    this.aspectRatio = "16:9";
  }
  updateAspectRatio() {
    const split = this.aspectRatio.split(":");
    const x = parseInt(split[0]);
    const y = parseInt(split[1]);
    this.base.style.paddingBottom = x && y ? `${y / x * 100}%` : "";
  }
  render() {
    return p`
      <div part="base" class="responsive-embed">
        <slot @slotchange=${() => this.updateAspectRatio()}></slot>
      </div>
    `;
  }
};
SlResponsiveEmbed.styles = s(responsive_embed_default);
__decorate([
  i(".responsive-embed")
], SlResponsiveEmbed.prototype, "base", 2);
__decorate([
  e({attribute: "aspect-ratio"})
], SlResponsiveEmbed.prototype, "aspectRatio", 2);
__decorate([
  watch("aspectRatio")
], SlResponsiveEmbed.prototype, "updateAspectRatio", 1);
SlResponsiveEmbed = __decorate([
  n("sl-responsive-embed")
], SlResponsiveEmbed);
var responsive_embed_default2 = SlResponsiveEmbed;

export {
  responsive_embed_default2 as responsive_embed_default
};
