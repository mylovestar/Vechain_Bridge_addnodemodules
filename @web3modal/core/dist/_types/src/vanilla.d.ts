declare const Web3ModalCore: {
    ClientCtrl: {
        ethereum(): {
            createClient(options: import("@web3modal/ethereum").EthereumOptions): any;
            getDefaultConnectorChainId(connector: import("@wagmi/core").Connector<any, any, any>): number;
            getConnectorById(id: "coinbaseWallet" | "injected" | "metaMask" | "walletConnect"): import("@wagmi/core").Connector<any, any, any>;
            disconnect(): Promise<void>;
            connectWalletConnect(onUri: (uri: string) => void): Promise<import("@wagmi/core").ConnectResult<import("@wagmi/core").Provider>>;
            connectLinking(onUri: (uri: string) => void): Promise<import("@wagmi/core").ConnectResult<import("@wagmi/core").Provider>>;
            connectCoinbaseMobile(onUri?: ((uri: string) => void) | undefined): Promise<import("@wagmi/core").ConnectResult<import("@wagmi/core").Provider>>;
            connectCoinbaseExtension(): Promise<import("@wagmi/core").ConnectResult<import("@wagmi/core").Provider>>;
            connectMetaMask(): Promise<import("@wagmi/core").ConnectResult<import("@wagmi/core").Provider>>;
            connectInjected(): Promise<import("@wagmi/core").ConnectResult<import("@wagmi/core").Provider>>;
            switchChain(chainId: string): Promise<string>;
            signTypedData({ value, domain, types }: import("@web3modal/ethereum").SignTypedDataOpts): Promise<string>;
            signMessage(message: string): Promise<string>;
            fetchBalance(opts: import("@web3modal/ethereum").GetBalanceOpts): Promise<string>;
            fetchSigner(): Promise<import("@wagmi/core").FetchSignerResult<import("ethers").Signer>>;
            getNetwork(): import("@wagmi/core").GetNetworkResult;
            getContract({ addressOrName, contractInterface, signerOrProvider }: import("@web3modal/ethereum").GetContractOpts): import("ethers").Contract;
            getToken({ address, chainId, formatUnits }: import("@web3modal/ethereum").GetTokenOpts): Promise<import("@wagmi/core").FetchTokenResult>;
            readContract(opts: import("@web3modal/ethereum").ContractOpts): Promise<import("@ethersproject/abi").Result>;
            writeContract(opts: import("@web3modal/ethereum").WriteContractOpts): Promise<import("@wagmi/core").SendTransactionResult>;
            prepareWriteContract(opts: import("@web3modal/ethereum").PrepareWriteContractOpts): Promise<import("@wagmi/core").PrepareWriteContractResult<import("ethers").Signer>>;
            watchReadContract(opts: import("@web3modal/ethereum").WatchReadContractOpts): void;
            fetchEnsAddress(opts: import("@web3modal/ethereum").FetchEnsAddressOpts): Promise<string | undefined>;
            fetchEnsAvatar(opts: import("@web3modal/ethereum").FetchEnsAvatarOpts): Promise<string | undefined>;
            fetchEnsName(opts: import("@web3modal/ethereum").FetchEnsNameOpts): Promise<string | undefined>;
            fetchEnsResolver(opts: import("@web3modal/ethereum").FetchEnsAddressOpts): Promise<import("@wagmi/core").FetchEnsResolverResult>;
            fetchTransaction(opts: import("@web3modal/ethereum").FetchTransactionOpts): Promise<import("@ethersproject/abstract-provider").TransactionResponse>;
            prepareSendTransaction(opts: import("@web3modal/ethereum").PrepareSendTransactionOpts): Promise<import("@wagmi/core").PrepareSendTransactionResult>;
            sendTransaction(opts: import("@web3modal/ethereum").PrepareSendTransactionOpts): Promise<import("@wagmi/core").SendTransactionResult>;
            waitForTransaction(opts: import("@web3modal/ethereum").WaitForTransactionOpts): Promise<import("@ethersproject/abstract-provider").TransactionReceipt>;
        };
        setEthereumClient(options: import("@web3modal/ethereum").EthereumOptions): Promise<void>;
    };
    ConfigCtrl: {
        state: import("./controllers/ConfigCtrl").State;
        subscribe(callback: (newState: import("./controllers/ConfigCtrl").State) => void): () => void;
        setConfig(config: import("..").ConfigOptions): void;
    };
    ExplorerCtrl: {
        state: import("./controllers/ExplorerCtrl").State;
        subscribe(callback: (newState: import("./controllers/ExplorerCtrl").State) => void): () => void;
        getPreviewWallets(): Promise<import("..").Listing[]>;
        getPaginatedWallets(params: import("../types/explorerTypes").PageParams): Promise<{
            listings: import("..").Listing[];
            total: number;
        }>;
    };
    ConnectModalCtrl: {
        state: import("./controllers/ConnectModalCtrl").State;
        subscribe(callback: (newState: import("./controllers/ConnectModalCtrl").State) => void): () => void;
        openModal(): void;
        closeModal(): void;
    };
    RouterCtrl: {
        state: import("./controllers/RouterCtrl").State;
        subscribe(callback: (newState: import("./controllers/RouterCtrl").State) => void): () => void;
        push(view: import("..").RouterView): void;
        replace(view: import("..").RouterView): void;
        goBack(): void;
    };
    AccountCtrl: {
        state: import("..").Account;
        subscribe(callback: (newState: import("..").Account) => void): () => void;
        setAccount(account: Omit<import("..").Account, "connected">): void;
        setAddress(address: string): void;
        setChain(chainId: string, chainSupported: boolean): void;
        resetAccount(): void;
    };
};
declare global {
    interface Window {
        Web3ModalCore: typeof Web3ModalCore;
    }
}
export {};
