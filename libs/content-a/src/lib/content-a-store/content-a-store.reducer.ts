import { Action, combineReducers, createReducer, on } from '@ngrx/store';
import * as actions from './content-a-store.actions';
import { ContentAModel, Loadable } from './content-a-store.models';
import { DataFilterStoreState, createDataFilterStoreReducer, initialDataFilterStoreState } from '@stackblitz-nx-angular/data-filter'

export const contentAStoreFeatureKey = 'contentA';

export type ContentADataState = Loadable<ContentAModel[]>;

export interface ContentAStoreState {
  data: ContentADataState,
  filterSet: DataFilterStoreState
}

export const initialState: ContentAStoreState = {
  data: {},
  filterSet: initialDataFilterStoreState,
};

export const contentAStoreReducer = combineReducers({

  data: createReducer<ContentADataState>(
    initialState.data,
    on(actions.loadContentA, (state) => ({
      ...state,
      isLoading: true,
      data: undefined,
    })),
    on(actions.loadContentASuccess, (state, { data }) => ({
      ...state,
      isLoading: false,
      data,
    })),
    on(actions.loadContentAFailure, (state, { error }) => ({
      ...state,
      error,
    }))
  ),
  
  filterSet: createDataFilterStoreReducer(contentAStoreFeatureKey),
});
