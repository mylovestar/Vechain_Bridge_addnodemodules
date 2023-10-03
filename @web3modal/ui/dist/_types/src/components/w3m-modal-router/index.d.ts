import type { RouterView } from '@web3modal/core';
import { LitElement } from 'lit';
import '../../views/w3m-coinbase-extension-connector-view';
import '../../views/w3m-coinbase-mobile-connector-view';
import '../../views/w3m-connect-wallet-view';
import '../../views/w3m-get-wallet-view';
import '../../views/w3m-injected-connector-view';
import '../../views/w3m-ledger-desktop-connector-view';
import '../../views/w3m-metamask-connector-view';
import '../../views/w3m-select-network-view';
import '../../views/w3m-wallet-explorer-view';
import '../../views/w3m-walletconnect-connector-view';
export declare class W3mModalRouter extends LitElement {
    static styles: import("lit").CSSResult[];
    view: RouterView;
    prevView: RouterView;
    constructor();
    firstUpdated(): void;
    disconnectedCallback(): void;
    private readonly unsubscribe?;
    private oldHeight;
    private resizeObserver?;
    private get routerEl();
    private get contentEl();
    private viewTemplate;
    private onChangeRoute;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-modal-router': W3mModalRouter;
    }
}
