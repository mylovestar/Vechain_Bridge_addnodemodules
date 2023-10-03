export declare function useNetwork(): {
    refetch: (opts: unknown) => void;
    error: unknown;
    network: import("@wagmi/core").GetNetworkResult | null;
};
