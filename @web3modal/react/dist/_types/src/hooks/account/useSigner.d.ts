export declare function useSigner(): {
    refetch: (opts: unknown) => Promise<void>;
    isLoading: boolean;
    error: unknown;
    signer: import("@wagmi/core").FetchSignerResult<import("ethers").Signer>;
};
