import type { FetchEnsAvatarOpts } from '@web3modal/ethereum';
export declare function useFetchEnsAvatar(opts?: FetchEnsAvatarOpts): {
    refetch: (opts: FetchEnsAvatarOpts) => Promise<void>;
    isLoading: boolean;
    error: unknown;
    avatar: string | null | undefined;
};
