import type { ReadContractOpts } from '@web3modal/ethereum';
export declare function useContractRead(initialOpts?: ReadContractOpts): {
    refetch: (opts: import("@web3modal/ethereum").ContractOpts) => Promise<void>;
    isLoading: boolean;
    error: unknown;
    read: import("@ethersproject/abi").Result | null;
};
