import { LitElement } from 'lit';
import '../../components/w3m-view-all-wallets-button';
import '../../components/w3m-wallet-button';
export declare class W3mMobileWalletSelection extends LitElement {
    static styles: import("lit").CSSResult[];
    private onConnect;
    private onCoinbaseWallet;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-mobile-wallet-selection': W3mMobileWalletSelection;
    }
}
