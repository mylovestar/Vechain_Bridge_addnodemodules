import type { GetContractOpts } from '@web3modal/ethereum';
export declare function useContract(initialOpts?: GetContractOpts): {
    refetch: (opts: GetContractOpts) => void;
    error: unknown;
    contract: import("ethers").Contract | null;
};
