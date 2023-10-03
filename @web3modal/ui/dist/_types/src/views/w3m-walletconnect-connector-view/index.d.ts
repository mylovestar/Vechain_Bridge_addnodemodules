import { LitElement } from 'lit';
import '../../components/w3m-button';
import '../../components/w3m-modal-content';
import '../../components/w3m-modal-footer';
import '../../components/w3m-modal-header';
import '../../components/w3m-qrcode';
import '../../components/w3m-text';
export declare class W3mWalletConnectConnectorView extends LitElement {
    static styles: import("lit").CSSResult[];
    private uri;
    constructor();
    private getConnectionUri;
    private onCopy;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-walletconnect-conector-view': W3mWalletConnectConnectorView;
    }
}
