export interface State {
    open: boolean;
    message: string;
    variant: 'error' | 'success';
}
export declare const ModalToastCtrl: {
    state: State;
    subscribe(callback: (newState: State) => void): () => void;
    openToast(message: State['message'], variant: State['variant']): void;
    closeToast(): void;
};
