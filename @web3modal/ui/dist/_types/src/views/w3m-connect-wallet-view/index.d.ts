import { LitElement } from 'lit';
import '../../components/w3m-button';
import '../../components/w3m-modal-content';
import '../../components/w3m-modal-footer';
import '../../components/w3m-modal-header';
import '../../partials/w3m-desktop-wallet-selection';
import '../../partials/w3m-mobile-wallet-selection';
import '../../partials/w3m-wallets-slideshow';
export declare class W3mConnectWalletView extends LitElement {
    static styles: import("lit").CSSResult[];
    private readonly learnUrl;
    private onGetWallet;
    private onLearnMore;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-connect-wallet-view': W3mConnectWalletView;
    }
}
