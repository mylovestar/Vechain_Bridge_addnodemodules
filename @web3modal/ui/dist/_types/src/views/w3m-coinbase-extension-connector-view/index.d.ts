import { LitElement } from 'lit';
import '../../components/w3m-button';
import '../../components/w3m-modal-content';
import '../../components/w3m-modal-header';
import '../../components/w3m-qrcode';
import '../../components/w3m-spinner';
import '../../components/w3m-text';
import '../../components/w3m-wallet-image';
export declare class W3mCoinbaseExtensionConnectorView extends LitElement {
    static styles: import("lit").CSSResult[];
    private connecting;
    private error;
    constructor();
    private onConnect;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-coinbase-extension-connector-view': W3mCoinbaseExtensionConnectorView;
    }
}
