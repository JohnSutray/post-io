import { ActionReducer, createReducer, on } from '@ngrx/store';

export class StoreUtils {
  static createReducer(initialState: any, mapperClass: any, actionsContainer: any): ActionReducer<any> {
    return createReducer(
      initialState,
      ...Object.keys(mapperClass).map(key => on(actionsContainer[key], mapperClass[key])),
    );
  }
}
