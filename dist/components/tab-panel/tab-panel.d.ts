import { LitElement } from 'lit';
export default class SlTabPanel extends LitElement {
    static styles: import("lit").CSSResult;
    private componentId;
    name: string;
    active: boolean;
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-tab-panel': SlTabPanel;
    }
}
