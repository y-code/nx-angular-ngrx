import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { filter, first, map, merge, of, Subscription, switchMap, tap, withLatestFrom } from 'rxjs';
import { loadDataFilterSet, updateFilterValues } from '../data-filter-store/data-filter-store.actions';
import { getSelectDataFilterStoreData, getSelectDataFilterStoreIsLoading } from '../data-filter-store/data-filter-store.selectors';
import { buildForm, DataFilterSet, DataQuery } from '../data-filter.models';

@Component({
  selector: 'stackblitz-nx-angular-data-filter',
  templateUrl: './data-filter.component.html',
  styleUrls: ['./data-filter.component.scss'],
})
export class DataFilterComponent implements OnInit, OnDestroy {

  @Input()
  featureKey: string = '';

  private subscription?: Subscription;
  
  filterSet?: DataFilterSet;
  form = this.formBuilder.group<Record<string, FormControl<string[]>>>({});

  constructor(
    private readonly store: Store,
    private readonly formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    if (this.featureKey) {
      this.subscription = merge(
        this.store.select(getSelectDataFilterStoreData(this.featureKey)).pipe(
          first(),
          map(filterSet => {
            if (!filterSet) {
              this.store.dispatch(loadDataFilterSet({ featureKey: this.featureKey, name: 'content-a', version: '1'}));
              return void 0;
            }
            return filterSet;
          })
        ),

        this.store.select(getSelectDataFilterStoreIsLoading(this.featureKey)).pipe(
          filter(isLoading => !isLoading),
          withLatestFrom(this.store.select(getSelectDataFilterStoreData(this.featureKey))),
          map(([_, filterSet]) => filterSet),
        )
      ).pipe(
        tap(filterSet => this.filterSet = filterSet),
        map(filterSet => this.form = buildForm(this.formBuilder, filterSet?.filters)),
        switchMap(form => merge(
          form.valueChanges.pipe(
            tap(values => this.store.dispatch(updateFilterValues({ featureKey: this.featureKey, query: values as DataQuery })))
          ),
          form.statusChanges.pipe(
            map(x => console.log('Status Change:', x)),
          )
        )),
      ).subscribe();
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
