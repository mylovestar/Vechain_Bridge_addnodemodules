import ThemedElement from '../../utils/ThemedElement';
import '../w3m-modal-backcard';
import '../w3m-modal-router';
import '../w3m-modal-toast';
export declare class W3mModal extends ThemedElement {
    static styles: import("lit").CSSResult[];
    private open;
    private initialized;
    constructor();
    disconnectedCallback(): void;
    private readonly unsubscribe?;
    private firstOpen;
    private get overlayEl();
    private get containerEl();
    private onCloseModal;
    private onOpenModalEvent;
    private onCloseModalEvent;
    private onKeyDown;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-modal': W3mModal;
    }
}
