export declare function useSignMessage(initialMessage?: string): {
    isLoading: boolean;
    error: unknown;
    signature: string | null;
    sign: (opts: string) => Promise<void>;
};
