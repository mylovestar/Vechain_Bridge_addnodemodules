export declare const CoreHelpers: {
    isCoinbaseExtension(): import("@coinbase/wallet-sdk").CoinbaseWalletProvider | undefined;
    isMobile(): boolean;
    formatNativeUrl(appUrl: string, encodedWcUrl: string, name: string): string;
    formatUniversalUrl(appUrl: string, encodedWcUrl: string, name: string): string;
    wait(miliseconds: number): Promise<unknown>;
    openHref(href: string, target?: string): void;
    setWalletConnectDeepLink(href: string, name: string): void;
    removeWalletConnectDeepLink(): void;
};
