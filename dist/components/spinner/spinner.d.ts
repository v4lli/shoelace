import { LitElement } from 'lit';
export default class SlSpinner extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-spinner': SlSpinner;
    }
}
