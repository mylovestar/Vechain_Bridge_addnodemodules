import { LitElement } from 'lit';
export declare class W3mModalBackcard extends LitElement {
    static styles: import("lit").CSSResult[];
    firstUpdated(): void;
    disconnectedCallback(): void;
    private get canvasEl();
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-modal-backcard': W3mModalBackcard;
    }
}
