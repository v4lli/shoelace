import { LitElement } from 'lit';
export default class SlProgressBar extends LitElement {
    static styles: import("lit").CSSResult;
    percentage: number;
    indeterminate: boolean;
    render(): import("lit-html").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-progress-bar': SlProgressBar;
    }
}
