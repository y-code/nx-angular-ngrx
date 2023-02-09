import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ContentAStoreEffects } from './content-a-store.effects';

describe('ContentAStoreEffects', () => {
  let actions$: Observable<any>;
  let effects: ContentAStoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContentAStoreEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ContentAStoreEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
