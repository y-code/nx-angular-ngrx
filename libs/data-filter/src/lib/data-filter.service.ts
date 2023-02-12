import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { forkJoin, map, Observable, of, switchMap } from "rxjs";
import { DataFilter, DataFilterSet, getDataQuery } from "./data-filter.models";

@Injectable({ providedIn: 'root' })
export class DataFilterService {
  constructor(
    private readonly http: HttpClient,
    @Inject('BACKEND_BASE_URL') private readonly baseUrl: string,
  ) {}

  getFilterSet$(name: string, version: string): Observable<DataFilterSet> {
    return this.http.get<DataFilterSet[]>(`${this.baseUrl}/api/filter-set`, { params: { name, version } }).pipe(
      map(filterSets => {
        if (!filterSets || filterSets.length === 0) throw new Error(`Failed a filter set for ${name}:${version}.`);
        return filterSets[0];
      }),
      switchMap(filterSet => forkJoin(
        filterSet.filters.map(filter => this.fillFilterApi$(filter, filterSet.filters))
      ).pipe(
        map(() => filterSet),
      )),
    );
  }

  fillFilterApi$(filter: DataFilter, filters: DataFilter[]): Observable<DataFilter> {
    if (!filter?.api) return of(filter);
    const params = getDataQuery(filters, { filterNames: filter.api?.params ?? [] });
    return this.http.get(this.baseUrl + filter.api.url, { params }).pipe(
        map(value => {
          if (filter.api)
            filter.api.value = value;
          return filter;
        })
      );
  }
}
