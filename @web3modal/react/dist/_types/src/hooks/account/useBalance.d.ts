import type { GetBalanceOpts } from '@web3modal/ethereum';
export declare function useBalance(initialOpts?: GetBalanceOpts): {
    refetch: (opts: GetBalanceOpts) => Promise<void>;
    isLoading: boolean;
    error: unknown;
    balance: string | null;
};
