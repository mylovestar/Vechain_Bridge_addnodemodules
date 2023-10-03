import { LitElement } from 'lit';
import '../w3m-spinner';
declare type Variant = 'large-bold' | 'medium-bold' | 'medium-normal' | 'medium-thin' | 'small-normal' | 'small-thin' | 'xsmall-normal' | 'xxsmall-bold';
declare type Align = 'center' | 'left' | 'right';
declare type Color = 'accent' | 'error' | 'inverse' | 'primary' | 'secondary' | 'tertiary';
export declare class W3mText extends LitElement {
    static styles: import("lit").CSSResult[];
    variant?: Variant;
    align?: Align;
    color?: Color;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-text': W3mText;
    }
}
export {};
