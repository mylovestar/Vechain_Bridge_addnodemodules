import type { TemplateResult } from 'lit';
import { LitElement } from 'lit';
import '../w3m-text';
declare type Variant = 'fill' | 'ghost';
export declare class W3mButton extends LitElement {
    static styles: import("lit").CSSResult[];
    variant?: Variant;
    disabled?: boolean | undefined;
    iconLeft?: TemplateResult<2>;
    iconRight?: TemplateResult<2>;
    onClick: () => void;
    protected render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-button': W3mButton;
    }
}
export {};
