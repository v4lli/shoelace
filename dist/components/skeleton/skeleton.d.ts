import { LitElement } from 'lit';
export default class SlSkeleton extends LitElement {
    static styles: import("lit").CSSResult;
    effect: 'pulse' | 'sheen' | 'none';
    render(): import("lit-html").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-skeleton': SlSkeleton;
    }
}
