import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import * as fromDataFilterStore from './data-filter-store.reducer';

const cache = new Map<
  string,
  MemoizedSelector<object, fromDataFilterStore.DataFilterStoreState, (s1: unknown) => fromDataFilterStore.DataFilterStoreState>
>()

export function getSelectDataFilterStoreState(featureKey: string) {
  let select = cache.get(featureKey);
  if (!select) {
    select = createSelector(
      createFeatureSelector<unknown>(featureKey),
      x => {
        const featureState = (x as { filterSet: fromDataFilterStore.DataFilterStoreState });
        if (!featureState)
          throw new Error(`Feature ${featureKey} is not initialized. Make sure that it is set up properly.`);
        if (!featureState.filterSet)
          throw new Error(`Feature ${featureKey} does not have the sub state named 'filterSet'. `
            + `Make it sure that the feature reducer is declared with the code like `
            + `'reducer = combineReducers({ filterSet: createDataFilterStoreReducer('${featureKey}') })'.`);
        return featureState.filterSet;
      }
    );
    cache.set(featureKey, select);
  }
  return select;
}

export function getSelectDataFilterStoreData(featureKey: string) {
  return createSelector(
    getSelectDataFilterStoreState(featureKey),
    x => x.data
  );
}

export function getSelectDataFilterStoreIsLoading(featureKey: string) {
  return createSelector(
    getSelectDataFilterStoreState(featureKey),
    x => x.isLoading
  );
}
