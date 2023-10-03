import type { ListingResponse, PageParams } from '../../types/explorerTypes';
export declare function getExplorerApi(): {
    url: string;
    projectId: string;
};
export declare function fetchWallets(params: PageParams): Promise<ListingResponse>;
