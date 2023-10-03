import * as wagmi from '@wagmi/core';
import { CoinbaseWalletConnector } from '@wagmi/core/connectors/coinbaseWallet';
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask';
import { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect';
import { alchemyProvider } from '@wagmi/core/providers/alchemy';
import { infuraProvider } from '@wagmi/core/providers/infura';
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc';
import { publicProvider } from '@wagmi/core/providers/public';
import { Web3ModalEthereum } from '../api';
declare const Wagmi: {
    connectors: {
        injected: typeof wagmi.InjectedConnector;
        coinbase: typeof CoinbaseWalletConnector;
        walletConnect: typeof WalletConnectConnector;
        metamask: typeof MetaMaskConnector;
    };
    providers: {
        jsonRpcProvider: typeof jsonRpcProvider;
        alchemyProvider: typeof alchemyProvider;
        infuraProvider: typeof infuraProvider;
        publicProvider: typeof publicProvider;
    };
    connect: typeof wagmi.connect;
    deprecatedSendTransaction: typeof wagmi.deprecatedSendTransaction;
    deprecatedWriteContract: typeof wagmi.deprecatedWriteContract;
    disconnect: typeof wagmi.disconnect;
    fetchBalance: typeof wagmi.fetchBalance;
    fetchBlockNumber: typeof wagmi.fetchBlockNumber;
    fetchEnsAddress: typeof wagmi.fetchEnsAddress;
    fetchEnsAvatar: typeof wagmi.fetchEnsAvatar;
    fetchEnsName: typeof wagmi.fetchEnsName;
    fetchEnsResolver: typeof wagmi.fetchEnsResolver;
    fetchFeeData: typeof wagmi.fetchFeeData;
    fetchSigner: typeof wagmi.fetchSigner;
    fetchToken: typeof wagmi.fetchToken;
    fetchTransaction: typeof wagmi.fetchTransaction;
    getAccount: typeof wagmi.getAccount;
    getContract: typeof wagmi.getContract;
    getNetwork: typeof wagmi.getNetwork;
    getProvider: typeof wagmi.getProvider;
    getWebSocketProvider: typeof wagmi.getWebSocketProvider;
    prepareWriteContract: typeof wagmi.prepareWriteContract;
    prepareSendTransaction: typeof wagmi.prepareSendTransaction;
    readContract: typeof wagmi.readContract;
    readContracts: typeof wagmi.readContracts;
    sendTransaction: typeof wagmi.sendTransaction;
    signMessage: typeof wagmi.signMessage;
    signTypedData: typeof wagmi.signTypedData;
    switchNetwork: typeof wagmi.switchNetwork;
    waitForTransaction: typeof wagmi.waitForTransaction;
    watchAccount: typeof wagmi.watchAccount;
    watchBlockNumber: typeof wagmi.watchBlockNumber;
    watchContractEvent: typeof wagmi.watchContractEvent;
    watchNetwork: typeof wagmi.watchNetwork;
    watchProvider: typeof wagmi.watchProvider;
    watchReadContract: typeof wagmi.watchReadContract;
    watchReadContracts: typeof wagmi.watchReadContracts;
    watchSigner: typeof wagmi.watchSigner;
    watchWebSocketProvider: typeof wagmi.watchWebSocketProvider;
    writeContract: typeof wagmi.writeContract;
    createClient: typeof wagmi.createClient;
    Client: typeof wagmi.Client;
    Connector: typeof wagmi.Connector;
    InjectedConnector: typeof wagmi.InjectedConnector;
    alchemyRpcUrls: Record<"mainnet" | "ropsten" | "rinkeby" | "goerli" | "kovan" | "optimism" | "optimismKovan" | "optimismGoerli" | "polygon" | "polygonMumbai" | "arbitrum" | "arbitrumRinkeby" | "arbitrumGoerli", string>;
    allChains: wagmi.Chain[];
    chain: {
        readonly mainnet: wagmi.Chain;
        readonly ropsten: wagmi.Chain;
        readonly rinkeby: wagmi.Chain;
        readonly goerli: wagmi.Chain;
        readonly kovan: wagmi.Chain;
        readonly sepolia: wagmi.Chain;
        readonly optimism: wagmi.Chain;
        readonly optimismGoerli: wagmi.Chain;
        readonly optimismKovan: wagmi.Chain;
        readonly polygon: wagmi.Chain;
        readonly polygonMumbai: wagmi.Chain;
        readonly arbitrum: wagmi.Chain;
        readonly arbitrumGoerli: wagmi.Chain;
        readonly arbitrumRinkeby: wagmi.Chain;
        readonly localhost: wagmi.Chain;
        readonly hardhat: wagmi.Chain;
        readonly foundry: wagmi.Chain;
    };
    chainId: {
        readonly mainnet: 1;
        readonly ropsten: 3;
        readonly rinkeby: 4;
        readonly goerli: 5;
        readonly kovan: 42;
        readonly sepolia: 11155111;
        readonly optimism: 10;
        readonly optimismKovan: 69;
        readonly optimismGoerli: 420;
        readonly polygon: 137;
        readonly polygonMumbai: 80001;
        readonly arbitrum: 42161;
        readonly arbitrumRinkeby: 421611;
        readonly arbitrumGoerli: 421613;
        readonly localhost: 1337;
        readonly hardhat: 31337;
        readonly foundry: 31337;
    };
    defaultChains: wagmi.Chain[];
    defaultL2Chains: wagmi.Chain[];
    erc20ABI: string[];
    erc721ABI: string[];
    etherscanBlockExplorers: Record<"mainnet" | "ropsten" | "rinkeby" | "goerli" | "kovan" | "sepolia" | "optimism" | "optimismKovan" | "polygon" | "polygonMumbai" | "arbitrum" | "arbitrumRinkeby", import("@wagmi/core/dist/declarations/src/constants").BlockExplorer>;
    infuraRpcUrls: Record<"mainnet" | "ropsten" | "rinkeby" | "goerli" | "kovan" | "optimism" | "optimismKovan" | "optimismGoerli" | "polygon" | "polygonMumbai" | "arbitrum" | "arbitrumRinkeby" | "arbitrumGoerli", string>;
    publicRpcUrls: Record<"mainnet" | "ropsten" | "rinkeby" | "goerli" | "kovan" | "sepolia" | "optimism" | "optimismKovan" | "optimismGoerli" | "polygon" | "polygonMumbai" | "arbitrum" | "arbitrumRinkeby" | "arbitrumGoerli", string>;
    units: readonly ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];
    AddChainError: typeof wagmi.AddChainError;
    ChainDoesNotSupportMulticallError: typeof wagmi.ChainDoesNotSupportMulticallError;
    ChainMismatchError: typeof wagmi.ChainMismatchError;
    ChainNotConfiguredError: typeof wagmi.ChainNotConfiguredError;
    ConnectorAlreadyConnectedError: typeof wagmi.ConnectorAlreadyConnectedError;
    ConnectorNotFoundError: typeof wagmi.ConnectorNotFoundError;
    ContractMethodDoesNotExistError: typeof wagmi.ContractMethodDoesNotExistError;
    ContractMethodNoResultError: typeof wagmi.ContractMethodNoResultError;
    ContractMethodRevertedError: typeof wagmi.ContractMethodRevertedError;
    ContractResultDecodeError: typeof wagmi.ContractResultDecodeError;
    ProviderChainsNotFound: typeof wagmi.ProviderChainsNotFound;
    ProviderRpcError: typeof wagmi.ProviderRpcError;
    ResourceUnavailableError: typeof wagmi.ResourceUnavailableError;
    RpcError: typeof wagmi.RpcError;
    SwitchChainError: typeof wagmi.SwitchChainError;
    SwitchChainNotSupportedError: typeof wagmi.SwitchChainNotSupportedError;
    UserRejectedRequestError: typeof wagmi.UserRejectedRequestError;
    createStorage: typeof wagmi.createStorage;
    noopStorage: {
        getItem: (key: string) => string | null;
        setItem: (key: string, value: string) => void;
        removeItem: (key: string) => void;
    };
    configureChains: typeof wagmi.configureChains;
    deepEqual: typeof wagmi.deepEqual;
    minimizeContractInterface: typeof wagmi.minimizeContractInterface;
    normalizeChainId: typeof wagmi.normalizeChainId;
    parseContractResult: typeof wagmi.parseContractResult;
};
declare global {
    interface Window {
        Wagmi: typeof Wagmi;
        Web3ModalEthereum: typeof Web3ModalEthereum;
    }
}
export {};
