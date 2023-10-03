import { InjectedConnector } from '@wagmi/core';
import { CoinbaseWalletConnector } from '@wagmi/core/connectors/coinbaseWallet';
import { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect';
import { alchemyProvider } from '@wagmi/core/providers/alchemy';
import { infuraProvider } from '@wagmi/core/providers/infura';
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc';
import { publicProvider } from '@wagmi/core/providers/public';
import type { GetDefaultConnectorsOpts, GetWalletConnectProviderOpts } from '../../types/apiTypes';
declare function walletConnectProvider({ projectId }: GetWalletConnectProviderOpts): import("@wagmi/core").ChainProviderFn<import("@ethersproject/providers").JsonRpcProvider, import("@ethersproject/providers").WebSocketProvider, import("@wagmi/core").Chain>;
export declare const providers: {
    alchemyProvider: typeof alchemyProvider;
    infuraProvider: typeof infuraProvider;
    jsonRpcProvider: typeof jsonRpcProvider;
    publicProvider: typeof publicProvider;
    walletConnectProvider: typeof walletConnectProvider;
};
export declare const chains: {
    avalanche: import("@wagmi/core").Chain;
    fantom: import("@wagmi/core").Chain;
    binanceSmartChain: import("@wagmi/core").Chain;
    avalancheFuji: import("@wagmi/core").Chain;
    fantomTestnet: import("@wagmi/core").Chain;
    binanceSmartChainTestnet: import("@wagmi/core").Chain;
    mainnet: import("@wagmi/core").Chain;
    ropsten: import("@wagmi/core").Chain;
    rinkeby: import("@wagmi/core").Chain;
    goerli: import("@wagmi/core").Chain;
    kovan: import("@wagmi/core").Chain;
    sepolia: import("@wagmi/core").Chain;
    optimism: import("@wagmi/core").Chain;
    optimismGoerli: import("@wagmi/core").Chain;
    optimismKovan: import("@wagmi/core").Chain;
    polygon: import("@wagmi/core").Chain;
    polygonMumbai: import("@wagmi/core").Chain;
    arbitrum: import("@wagmi/core").Chain;
    arbitrumGoerli: import("@wagmi/core").Chain;
    arbitrumRinkeby: import("@wagmi/core").Chain;
    localhost: import("@wagmi/core").Chain;
    hardhat: import("@wagmi/core").Chain;
    foundry: import("@wagmi/core").Chain;
};
export declare function defaultConnectors({ appName, chains: connectorChains }: GetDefaultConnectorsOpts): (WalletConnectConnector | InjectedConnector | CoinbaseWalletConnector)[];
export {};
