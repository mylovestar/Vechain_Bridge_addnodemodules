export declare const NAMESPACE = "eip155";
export declare function getChainIdReference(chainId: string): number;
export declare function formatOpts<T>(opts: T & {
    chainId: string;
}): T & {
    chainId: number;
};
