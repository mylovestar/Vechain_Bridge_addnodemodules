/// <reference types="react" />
import type { W3mConnectButton } from '@web3modal/ui';
/**
 * Component
 */
export declare function ConnectButton(props: JSX.IntrinsicElements['w3m-connect-button']): JSX.Element;
/**
 * Types
 */
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'w3m-connect-button': Pick<W3mConnectButton, 'label'>;
        }
    }
}
