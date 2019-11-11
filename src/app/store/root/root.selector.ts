import { createFeatureSelector } from '@ngrx/store';
import { IRootState, RootStateToken } from './root.state';
import { IAppStore } from '../app.store';

export const selectRoot = createFeatureSelector<IAppStore, IRootState>(RootStateToken);
