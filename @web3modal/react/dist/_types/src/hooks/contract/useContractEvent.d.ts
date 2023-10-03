import type { GetContractOpts } from '@web3modal/ethereum';
interface ListenerOpts {
    event: string;
    handler: (args: unknown[]) => void;
    once: boolean;
}
declare type UseContractOpts = GetContractOpts & ListenerOpts;
export declare function useContractEvent(opts: UseContractOpts): void;
export {};
