import type { WriteContractOpts } from '@web3modal/ethereum';
export declare function useContractWrite(initialOpts?: WriteContractOpts): {
    data: import("@wagmi/core").SendTransactionResult | null;
    refetch: (opts: WriteContractOpts) => Promise<void>;
    isLoading: boolean;
    error: unknown;
};
