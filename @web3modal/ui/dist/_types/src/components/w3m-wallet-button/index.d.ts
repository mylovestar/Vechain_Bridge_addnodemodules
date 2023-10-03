import { LitElement } from 'lit';
import '../../components/w3m-text';
import '../w3m-wallet-image';
export declare class W3mWalletButton extends LitElement {
    static styles: import("lit").CSSResult[];
    onClick: () => void;
    name: string;
    label?: string;
    src?: string;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-wallet-button': W3mWalletButton;
    }
}
