import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { ContentAModel, DataQuery } from './content-a-store.models';

export const loadContentA = createAction(
  '[ContentAStore] Load Content A',
  props<{ query: DataQuery }>()
);

export const loadContentASuccess = createAction(
  '[ContentAStore] Load Content A Success',
  props<{ data: ContentAModel[] }>()
);

export const loadContentAFailure = createAction(
  '[ContentAStore] Load Content A Failure',
  props<{ error: HttpErrorResponse }>()
);
