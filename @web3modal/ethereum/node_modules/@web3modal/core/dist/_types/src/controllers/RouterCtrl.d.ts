import type { RouterView } from '../../types/routerTypes';
export interface State {
    history: RouterView[];
    view: RouterView;
}
export declare const RouterCtrl: {
    state: State;
    subscribe(callback: (newState: State) => void): () => void;
    push(view: State['view']): void;
    replace(view: State['view']): void;
    goBack(): void;
};
