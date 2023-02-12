import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, first, merge, Subscription, tap } from 'rxjs';
import { loadContentA } from '../content-a-store/content-a-store.actions';
import { ContentAModel } from '../content-a-store/content-a-store.models';
import { contentAStoreFeatureKey } from '../content-a-store/content-a-store.reducer';
import { selectContentAStoreData } from '../content-a-store/content-a-store.selectors';

@Component({
  selector: 'stackblitz-nx-angular-content-a',
  templateUrl: './content-a.component.html',
  styleUrls: ['./content-a.component.scss'],
})
export class ContentAComponent implements OnInit, OnDestroy {
  readonly featureKey = contentAStoreFeatureKey;

  private subscription?: Subscription;
  data: ContentAModel[] = [];
  displayedColumns = ['summary', 'properties'];

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.subscription = merge(
      this.store.select(selectContentAStoreData).pipe(
        first(),
        filter((data) => !data),
        tap(() => this.store.dispatch(loadContentA({ query: {} })))
      ),
      this.store.select(selectContentAStoreData).pipe(
        tap((data) => {
          this.data = data ?? [];
        })
      )
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
