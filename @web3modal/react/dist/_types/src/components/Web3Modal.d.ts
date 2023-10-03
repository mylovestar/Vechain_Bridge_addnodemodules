/// <reference types="react" />
import type { W3mModal } from '@web3modal/ui';
/**
 * Component
 */
export declare function Web3Modal(props: JSX.IntrinsicElements['w3m-modal']): JSX.Element;
/**
 * Types
 */
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'w3m-modal': Partial<W3mModal>;
        }
    }
}
