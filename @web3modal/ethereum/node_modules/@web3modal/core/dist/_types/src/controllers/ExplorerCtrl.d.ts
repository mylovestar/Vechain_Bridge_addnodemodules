import type { Listing, ListingResponse, PageParams } from '../../types/explorerTypes';
export interface State {
    search: string;
    page: number;
    wallets: ListingResponse;
    previewWallets: Listing[];
}
export declare const ExplorerCtrl: {
    state: State;
    subscribe(callback: (newState: State) => void): () => void;
    getPreviewWallets(): Promise<Listing[]>;
    getPaginatedWallets(params: PageParams): Promise<{
        listings: Listing[];
        total: number;
    }>;
};
