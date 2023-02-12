import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  contentAStoreFeatureKey,
  ContentAStoreState,
} from './content-a-store.reducer';

export const selectContentAStoreState =
  createFeatureSelector<ContentAStoreState>(contentAStoreFeatureKey);

export const selectContentAStoreData = createSelector(
  selectContentAStoreState,
  (x) => x.data?.data
);

export const selectContentAStoreFilterSet = createSelector(
  selectContentAStoreState,
  (x) => x.filterSet?.data
);
