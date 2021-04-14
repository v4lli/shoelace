import { LitElement } from 'lit';
export default class SlMenuLabel extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-menu-label': SlMenuLabel;
    }
}
