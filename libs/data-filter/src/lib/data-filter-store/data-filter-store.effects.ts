import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as actions from './data-filter-store.actions';
import { DataFilterService } from '../data-filter.service';


@Injectable()
export class DataFilterStoreEffects {

  loadDataFilterStores$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(actions.loadDataFilterSet),
      switchMap(({ featureKey, name, version }) =>
        this.service.getFilterSet$(name, version).pipe(
          map(data => actions.loadDataFilterSetSuccess({ featureKey, data })),
          catchError(error => of(actions.loadDataFilterSetFailure({ featureKey, error }))))
      )
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly service: DataFilterService,
  ) {}
}
