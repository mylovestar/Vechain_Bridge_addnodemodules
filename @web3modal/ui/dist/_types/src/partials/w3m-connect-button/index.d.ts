import '../../components/w3m-spinner';
import '../../components/w3m-text';
import ThemedElement from '../../utils/ThemedElement';
export declare class W3mConnectButton extends ThemedElement {
    static styles: import("lit").CSSResult[];
    loading: boolean;
    label?: string | undefined;
    icon?: boolean | undefined;
    constructor();
    disconnectedCallback(): void;
    private readonly modalUnsub?;
    private iconTemplate;
    private onOpen;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-connect-button': W3mConnectButton;
    }
}
