import type { ConfigOptions } from '../../types/configTypes';
export interface State extends ConfigOptions {
    configured: boolean;
}
export declare const ConfigCtrl: {
    state: State;
    subscribe(callback: (newState: State) => void): () => void;
    setConfig(config: ConfigOptions): void;
};
