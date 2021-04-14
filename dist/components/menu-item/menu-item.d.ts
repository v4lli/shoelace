import { LitElement } from 'lit';
export default class SlMenuItem extends LitElement {
    static styles: import("lit").CSSResult;
    menuItem: HTMLElement;
    private hasFocus;
    checked: boolean;
    value: string;
    disabled: boolean;
    focus(options?: FocusOptions): void;
    blur(): void;
    handleBlur(): void;
    handleFocus(): void;
    handleMouseEnter(): void;
    handleMouseLeave(): void;
    render(): import("lit-html").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-menu-item': SlMenuItem;
    }
}
