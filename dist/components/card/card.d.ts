import { LitElement } from 'lit';
export default class SlCard extends LitElement {
    static styles: import("lit").CSSResult;
    private hasFooter;
    private hasImage;
    private hasHeader;
    connectedCallback(): void;
    handleSlotChange(): void;
    render(): import("lit-html").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-card': SlCard;
    }
}
