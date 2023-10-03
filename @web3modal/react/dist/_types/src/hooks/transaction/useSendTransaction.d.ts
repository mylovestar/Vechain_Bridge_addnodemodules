import type { SendTransactionOpts } from '@web3modal/ethereum';
export declare function useSendTransaction(initialOpts?: SendTransactionOpts): {
    refetch: (opts: SendTransactionOpts) => Promise<void>;
    isLoading: boolean;
    error: unknown;
    transaction: import("@wagmi/core").SendTransactionResult | null;
};
