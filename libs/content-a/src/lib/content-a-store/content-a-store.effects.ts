import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as actions from './content-a-store.actions';
import { ContentAService } from './content-a.service';

@Injectable()
export class ContentAStoreEffects {
  loadContentAStores$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.loadContentA),
      switchMap(({ query }) =>
        this.service.get(query).pipe(
          map((data) => actions.loadContentASuccess({ data })),
          catchError((error) => of(actions.loadContentAFailure({ error })))
        )
      )
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly service: ContentAService
  ) {}
}
