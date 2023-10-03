import type { SignTypedDataOpts } from '@web3modal/ethereum';
export declare function useSignTypedData(initialOpts?: SignTypedDataOpts): {
    isLoading: boolean;
    error: unknown;
    signature: string | null;
    sign: (opts: SignTypedDataOpts) => Promise<void>;
};
