export interface State {
    open: boolean;
}
export declare const ConnectModalCtrl: {
    state: State;
    subscribe(callback: (newState: State) => void): () => void;
    openModal(): void;
    closeModal(): void;
};
