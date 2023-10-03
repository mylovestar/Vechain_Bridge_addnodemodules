import type { GetTokenOpts } from '@web3modal/ethereum';
export declare function useToken(initialOpts?: GetTokenOpts): {
    refetch: (opts: GetTokenOpts) => Promise<void>;
    isLoading: boolean;
    error: unknown;
    token: import("@wagmi/core").FetchTokenResult | null;
};
