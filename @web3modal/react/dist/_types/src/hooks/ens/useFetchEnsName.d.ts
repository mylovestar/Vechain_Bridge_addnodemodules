import type { FetchEnsNameOpts } from '@web3modal/ethereum';
export declare function useFetchEnsName(opts?: FetchEnsNameOpts): {
    refetch: (opts: FetchEnsNameOpts) => Promise<void>;
    isLoading: boolean;
    error: unknown;
    name: string | null | undefined;
};
