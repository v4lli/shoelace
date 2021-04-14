import { LitElement } from 'lit';
export default class SlBadge extends LitElement {
    static styles: import("lit").CSSResult;
    type: 'primary' | 'success' | 'info' | 'warning' | 'danger';
    pill: boolean;
    pulse: boolean;
    render(): import("lit-html").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-badge': SlBadge;
    }
}
