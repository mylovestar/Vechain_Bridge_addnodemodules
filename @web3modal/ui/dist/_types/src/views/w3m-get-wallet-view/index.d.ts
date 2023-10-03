import { LitElement } from 'lit';
import '../../components/w3m-button';
import '../../components/w3m-text';
import '../../components/w3m-wallet-image';
export declare class W3mGetWalletView extends LitElement {
    static styles: import("lit").CSSResult[];
    private readonly explorerUrl;
    private onGet;
    private onExplore;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-get-wallet-view': W3mGetWalletView;
    }
}
