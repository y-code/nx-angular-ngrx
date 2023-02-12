import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { updateValidationError } from 'libs/data-filter/src/lib/data-filter-store/data-filter-store.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import * as actions from './content-a-store.actions';
import { contentAStoreFeatureKey } from './content-a-store.reducer';
import { ContentAService } from './content-a.service';

@Injectable()
export class ContentAStoreEffects {
  loadContentAStores$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.loadContentA),
      switchMap(({ query }) =>
        this.service.get(query).pipe(
          map((data) => actions.loadContentASuccess({ data })),
          catchError((error) => of(
            actions.loadContentAFailure({ error }),
            updateValidationError({ featureKey: contentAStoreFeatureKey, error: error.error })
          )),
        )
      )
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly service: ContentAService
  ) {}
}
