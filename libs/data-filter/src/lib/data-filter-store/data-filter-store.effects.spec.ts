import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DataFilterStoreEffects } from './data-filter-store.effects';

describe('DataFilterStoreEffects', () => {
  let actions$: Observable<any>;
  let effects: DataFilterStoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DataFilterStoreEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(DataFilterStoreEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
