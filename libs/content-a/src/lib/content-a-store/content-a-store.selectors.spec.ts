import * as fromContentAStore from './content-a-store.reducer';
import { selectContentAStoreState } from './content-a-store.selectors';

describe('ContentAStore Selectors', () => {
  it('should select the feature state', () => {
    const result = selectContentAStoreState({
      [fromContentAStore.contentAStoreFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
