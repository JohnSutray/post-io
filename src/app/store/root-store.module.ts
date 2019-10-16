import { RootReducer } from './reducers/root.reducer';
import { IRootState } from './state/root.state';
import { ActionReducer, State, StoreModule } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';

export interface IAppState {
  root: IRootState;
}

export const RootReducers = {
  root: RootReducer.reducer,
};

export function logger(reducer: ActionReducer<State<IRootState>>): any {
  return storeLogger()(reducer);
}

export const RootStoreModule = StoreModule.forRoot(RootReducers as any, {metaReducers: [logger]});
