import type { FetchEnsAddressOpts } from '@web3modal/ethereum';
export declare function useFetchEnsResolver(opts?: FetchEnsAddressOpts): {
    refetch: (opts: FetchEnsAddressOpts) => Promise<void>;
    isLoading: boolean;
    error: unknown;
    address: import("@wagmi/core").FetchEnsResolverResult;
};
