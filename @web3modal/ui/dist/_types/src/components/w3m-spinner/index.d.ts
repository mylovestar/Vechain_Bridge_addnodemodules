import { LitElement } from 'lit';
export declare class W3mSpinner extends LitElement {
    static styles: import("lit").CSSResult;
    size?: number;
    color?: string;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-spinner': W3mSpinner;
    }
}
