import { LitElement } from 'lit';
import '../../components/w3m-modal-content';
import '../../components/w3m-modal-header';
import '../../components/w3m-spinner';
import '../../components/w3m-text';
import '../../components/w3m-wallet-button';
export declare class W3mWalletExplorerView extends LitElement {
    static styles: import("lit").CSSResult[];
    private loading;
    private firstFetch;
    private endReached;
    firstUpdated(): void;
    disconnectedCallback(): void;
    private get loaderEl();
    private intersectionObserver;
    private createPaginationObserver;
    private fetchWallets;
    private onConnect;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-wallet-explorer-view': W3mWalletExplorerView;
    }
}
