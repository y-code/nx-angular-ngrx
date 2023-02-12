import { createDataFilterStoreReducer, initialDataFilterStoreState } from './data-filter-store.reducer';

describe('DataFilterStore Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = createDataFilterStoreReducer(initialDataFilterStoreState, action);

      expect(result).toBe(initialDataFilterStoreState);
    });
  });
});
