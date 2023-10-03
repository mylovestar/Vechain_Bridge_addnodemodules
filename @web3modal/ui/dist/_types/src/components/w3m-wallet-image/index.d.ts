import { LitElement } from 'lit';
import '../../components/w3m-text';
export declare class W3mWalletButton extends LitElement {
    static styles: import("lit").CSSResult[];
    name: string;
    src?: string;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-wallet-image': W3mWalletButton;
    }
}
