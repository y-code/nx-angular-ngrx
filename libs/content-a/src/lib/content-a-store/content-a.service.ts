import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ContentAModel, DataQuery } from './content-a-store.models';

@Injectable({ providedIn: 'root' })
export class ContentAService {
  constructor(
    @Inject('BACKEND_BASE_URL') private readonly baseUrl: string,
    private readonly http: HttpClient
  ) {}

  get(query: DataQuery) {
    return this.http.get<ContentAModel[]>(`${this.baseUrl}/api/content-a`, {
      params: query,
    });
  }
}
