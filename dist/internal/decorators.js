export function event(eventName) {
    function legacyEvent(descriptor, protoOrDescriptor, name) {
        Object.defineProperty(protoOrDescriptor, name, descriptor);
    }
    function standardEvent(descriptor, element) {
        return {
            kind: 'method',
            placement: 'prototype',
            key: element.key,
            descriptor
        };
    }
    return (protoOrDescriptor, name) => {
        const descriptor = {
            get() {
                return new EventEmitter(this, eventName || (name !== undefined ? name : protoOrDescriptor.key));
            },
            enumerable: true,
            configurable: true
        };
        return name !== undefined
            ? legacyEvent(descriptor, protoOrDescriptor, name)
            : standardEvent(descriptor, protoOrDescriptor);
    };
}
export class EventEmitter {
    constructor(target, eventName) {
        this.target = target;
        this.eventName = eventName;
    }
    emit(eventOptions) {
        const event = new CustomEvent(this.eventName, Object.assign({
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: {}
        }, eventOptions));
        this.target.dispatchEvent(event);
        return event;
    }
}
export function watch(propName) {
    return (protoOrDescriptor, name) => {
        const { updated } = protoOrDescriptor;
        protoOrDescriptor.updated = function (changedProps) {
            if (this.__hasBeenUpdated && changedProps.has(propName)) {
                const oldValue = changedProps.get(propName);
                const newValue = this[propName];
                if (oldValue !== newValue) {
                    this[name].call(this, oldValue, newValue);
                }
            }
            updated.call(this, changedProps);
            this.__hasBeenUpdated = true;
        };
    };
}
