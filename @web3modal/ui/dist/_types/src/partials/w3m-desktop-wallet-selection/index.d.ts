import type { TemplateResult } from 'lit';
import { LitElement } from 'lit';
import '../../components/w3m-text';
import '../../components/w3m-view-all-wallets-button';
import '../../components/w3m-wallet-button';
import '../../partials/w3m-walletconnect-button';
export declare class W3mDesktopWalletSelection extends LitElement {
    static styles: import("lit").CSSResult[];
    private onWalletConnect;
    private onCoinbaseWallet;
    private onLedgerWallet;
    private onMetaMaskWallet;
    private onInjectedWallet;
    private metaMaskTemplate;
    private injectedTemplate;
    private dynamicSlots;
    protected render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-desktop-wallet-selection': W3mDesktopWalletSelection;
    }
}
