import { LitElement } from 'lit';
export default class SlResponsiveEmbed extends LitElement {
    static styles: import("lit").CSSResult;
    base: HTMLElement;
    aspectRatio: string;
    updateAspectRatio(): void;
    render(): import("lit-html").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-responsive-embed': SlResponsiveEmbed;
    }
}
