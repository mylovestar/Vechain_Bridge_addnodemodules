import { LitElement } from 'lit';
import '../w3m-text';
export declare class W3mModalToast extends LitElement {
    static styles: import("lit").CSSResult[];
    open: boolean;
    constructor();
    disconnectedCallback(): void;
    private readonly unsubscribe?;
    private timeout?;
    protected render(): import("lit-html").TemplateResult<1> | null;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-modal-toast': W3mModalToast;
    }
}
