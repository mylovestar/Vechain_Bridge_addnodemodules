import type { Client } from '@wagmi/core';
import type { EthereumOptions } from '../../types/apiTypes';
export declare function getClient(): Client<any, any> | undefined;
export declare function initializeClient(options: EthereumOptions): void;
