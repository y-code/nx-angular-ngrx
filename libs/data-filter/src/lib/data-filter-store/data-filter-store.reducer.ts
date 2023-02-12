import { createReducer, on } from '@ngrx/store';
import { Loadable } from '../common.models';
import { DataFilterSet } from '../data-filter.models';
import * as DataFilterStoreActions from './data-filter-store.actions';

export type DataFilterStoreState = Loadable<DataFilterSet>;

export const initialDataFilterStoreState: DataFilterStoreState = {
};

/**
 * Reducer adapter to call reducer only when feature key matches
 */
export function onFeatureKey<TState, TAction extends { featureKey: string }>(
  featureKey: string,
  reducer: (state: TState, action: TAction) => TState
) : (state: TState, action: TAction) => TState {
  return (state: TState, action: TAction) => action.featureKey === featureKey ? reducer(state, action) : state;
}


export const createDataFilterStoreReducer = (featureKey: string) => createReducer(
  initialDataFilterStoreState,

  on(DataFilterStoreActions.loadDataFilterSet, onFeatureKey(featureKey, state => ({
    ...state,
    isLoading: true,
    error: undefined,
  }))),
  on(DataFilterStoreActions.loadDataFilterSetSuccess, onFeatureKey(featureKey, (state, { data }) => ({
    ...state,
    isLoading: false,
    data,
  }))),
  on(DataFilterStoreActions.loadDataFilterSetFailure, onFeatureKey(featureKey, (state, { error }) => ({
    ...state,
    isLoading: false,
    data: undefined,
    error,
  }))),
  on(DataFilterStoreActions.updateFilterValues, onFeatureKey(featureKey, (state, { query }) => ({
    ...state,
    data: state.data
      ? {
        ...state.data,
        filters: state.data.filters.map(filter => ({
          ...filter,
          value: query[filter.name],
        })),
      }
      : state.data
  }))),

);
