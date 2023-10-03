import type { FetchEnsAddressOpts } from '@web3modal/ethereum';
export declare function useFetchEnsAddress(opts?: FetchEnsAddressOpts): {
    refetch: (opts: FetchEnsAddressOpts) => Promise<void>;
    isLoading: boolean;
    error: unknown;
    address: string | null | undefined;
};
