import type { ConfigOptions } from '@web3modal/core';
import { LitElement } from 'lit';
export default class ThemedElement extends LitElement {
    protected theme: ConfigOptions['theme'];
    protected accentColor: ConfigOptions['accentColor'];
    constructor();
    disconnectedCallback(): void;
    private readonly configUnsub?;
}
