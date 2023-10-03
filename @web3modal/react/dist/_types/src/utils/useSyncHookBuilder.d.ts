export declare function useSyncHookBuilder<TArgs, TResult>(fetcher: (opts: TArgs) => TResult, initialOpts?: TArgs): {
    data: TResult | null;
    refetch: (opts: TArgs) => void;
    error: unknown;
};
