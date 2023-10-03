import type { ConfigOptions } from '@web3modal/core';
import type { ReactNode } from 'react';
/**
 * Props
 */
interface Props {
    children: ReactNode | ReactNode[];
    config: ConfigOptions;
}
/**
 * Component
 */
export declare function Web3ModalProvider({ children, config }: Props): JSX.Element;
export {};
