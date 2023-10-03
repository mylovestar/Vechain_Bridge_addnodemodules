import { LitElement } from 'lit';
import '../../components/w3m-text';
export declare class W3mWalletConnectButton extends LitElement {
    static styles: import("lit").CSSResult[];
    onClick: () => void;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-walletconnect-button': W3mWalletConnectButton;
    }
}
