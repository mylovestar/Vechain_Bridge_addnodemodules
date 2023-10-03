import ThemedElement from '../../utils/ThemedElement';
import '../w3m-spinner';
import '../w3m-text';
export declare class W3mModalHeader extends ThemedElement {
    static styles: import("lit").CSSResult[];
    title: string;
    private backBtntemplate;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-modal-header': W3mModalHeader;
    }
}
