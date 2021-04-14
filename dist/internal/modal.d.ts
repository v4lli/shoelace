interface ModalOptions {
    onfocusOut?: (event: Event) => any;
}
export default class Modal {
    element: HTMLElement;
    options: ModalOptions | undefined;
    constructor(element: HTMLElement, options?: ModalOptions);
    activate(): void;
    deactivate(): void;
    isActive(): boolean;
    handleFocusIn(event: Event): void;
}
export {};
