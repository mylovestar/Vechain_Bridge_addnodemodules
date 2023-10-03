export declare function useAsyncHookBuilder<TArgs, TResult>(fetcher: (opts: TArgs) => Promise<TResult>, initialOpts?: TArgs): {
    data: TResult | null;
    refetch: (opts: TArgs) => Promise<void>;
    isLoading: boolean;
    error: unknown;
};
