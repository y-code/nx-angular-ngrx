import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { DataQuery, ValidationError } from '../data-filter.models';

export const loadDataFilterSet = createAction(
  '[DataFilterStore] Load a data filter set',
  props<{ featureKey: string, name: string, version: string }>()
);

export const loadDataFilterSetSuccess = createAction(
  '[DataFilterStore] Load a data filter set Success',
  props<{ featureKey: string, data: any }>()
);

export const loadDataFilterSetFailure = createAction(
  '[DataFilterStore] Load a data filter set Failure',
  props<{ featureKey: string, error: HttpErrorResponse }>()
);

export const updateFilterValues = createAction(
  '[DataFilterStore] update filter values',
  props<{ featureKey: string, query: DataQuery }>(),
)

export const updateValidationError = createAction(
  '[DataFilterStore] update validation error',
  props<{ featureKey: string, error: ValidationError }>(),
)
