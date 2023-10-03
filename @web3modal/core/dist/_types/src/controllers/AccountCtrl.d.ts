import type { Account } from '../../types/accountTypes';
export declare const initialAccountlState: {
    connected: boolean;
    chainSupported: boolean;
    address: string;
    chainId: string;
    connector: string;
};
export declare const AccountCtrl: {
    state: Account;
    subscribe(callback: (newState: Account) => void): () => void;
    setAccount(account: Omit<Account, 'connected'>): void;
    setAddress(address: Account['address']): void;
    setChain(chainId: Account['chainId'], chainSupported: Account['chainSupported']): void;
    resetAccount(): void;
};
