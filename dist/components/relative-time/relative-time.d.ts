import { LitElement } from 'lit';
export default class SlRelativeTime extends LitElement {
    private updateTimeout;
    private isoTime;
    private relativeTime;
    private titleTime;
    date: Date | string;
    locale: string;
    format: 'long' | 'short' | 'narrow';
    numeric: 'always' | 'auto';
    sync: boolean;
    firstUpdated(): void;
    disconnectedCallback(): void;
    updateTime(): void;
    render(): import("lit-html").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-relative-time': SlRelativeTime;
    }
}
