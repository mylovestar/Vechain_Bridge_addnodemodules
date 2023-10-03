import type { WaitForTransactionOpts } from '@web3modal/ethereum';
export declare function useWaitForTransaction(opts: WaitForTransactionOpts): {
    refetch: (opts: WaitForTransactionOpts) => Promise<void>;
    isLoading: boolean;
    error: unknown;
    transaction: import("@ethersproject/abstract-provider").TransactionReceipt | null;
};
