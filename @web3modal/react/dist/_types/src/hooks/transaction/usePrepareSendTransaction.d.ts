import type { PrepareSendTransactionOpts } from '@web3modal/ethereum';
export declare function usePrepareSendTransaction(opts: PrepareSendTransactionOpts): {
    refetch: (opts: PrepareSendTransactionOpts) => Promise<void>;
    isLoading: boolean;
    error: unknown;
    transaction: import("@wagmi/core").PrepareSendTransactionResult | null;
};
