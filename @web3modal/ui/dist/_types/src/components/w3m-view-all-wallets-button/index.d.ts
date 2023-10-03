import { LitElement } from 'lit';
import '../../components/w3m-text';
export declare class W3mViewAllWalletsButton extends LitElement {
    static styles: import("lit").CSSResult[];
    private onClick;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-view-all-wallets-button': W3mViewAllWalletsButton;
    }
}
