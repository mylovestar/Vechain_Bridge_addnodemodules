/// <reference types="react" />
import type { W3mAccountButton } from '@web3modal/ui';
/**
 * Component
 */
export declare function AccountButton(props: JSX.IntrinsicElements['w3m-account-button']): JSX.Element;
/**
 * Types
 */
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'w3m-account-button': Partial<W3mAccountButton>;
        }
    }
}
