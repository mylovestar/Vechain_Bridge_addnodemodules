import type { FetchTransactionOpts } from '@web3modal/ethereum';
export declare function useFetchTransaction(opts: FetchTransactionOpts): {
    refetch: (opts: FetchTransactionOpts) => Promise<void>;
    isLoading: boolean;
    error: unknown;
    transaction: import("@ethersproject/abstract-provider").TransactionResponse | null;
};
