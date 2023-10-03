import { LitElement } from 'lit';
import '../w3m-wallet-image';
export default class W3mQrCode extends LitElement {
    static styles: import("lit").CSSResult[];
    uri: string;
    size: number;
    logoSrc?: string | undefined;
    private svgTemplate;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-qrcode': W3mQrCode;
    }
}
