import type { WriteContractOpts } from '@web3modal/ethereum';
export declare function usePrepareContractWrite(initialOpts?: WriteContractOpts): {
    refetch: (opts: WriteContractOpts) => Promise<void>;
    isLoading: boolean;
    error: unknown;
    write: import("@wagmi/core").SendTransactionResult | null;
};
