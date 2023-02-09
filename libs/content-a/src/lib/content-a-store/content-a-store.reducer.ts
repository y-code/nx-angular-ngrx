import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './content-a-store.actions';
import { ContentAModel, Loadable } from './content-a-store.models';

export const contentAStoreFeatureKey = 'contentAStore';

export type ContentAStoreState = Loadable<ContentAModel[]>;

export const initialState: ContentAStoreState = {};

export const reducer = createReducer(
  initialState,

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
);
