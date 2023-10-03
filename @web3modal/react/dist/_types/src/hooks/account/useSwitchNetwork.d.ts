export declare function useSwitchNetwork(): {
    isLoading: boolean;
    error: unknown;
    chainId: string | null;
    switchChain: (opts: string) => Promise<void>;
};
