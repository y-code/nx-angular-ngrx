import { Injectable } from '@angular/core';
import { ContentACategory, ContentAModel } from '@stackblitz-nx-angular/content-a';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { DataFilterSet } from 'libs/data-filter/src/lib/data-filter.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiContentAService implements InMemoryDbService {
  constructor() {}

  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    const contentA: ContentAModel[] = [
      {
        id: 'a-001',
        summary: 'This is A-001.',
        category: 'videoGame',
        tags: ['Xbox'],
      },
      {
        id: 'a-002',
        summary: 'This is A-002.',
        category: 'music',
        tags: ['Xbox', 'FPS'],
      },
      {
        id: 'a-003',
        summary: 'This is A-003.',
        category: 'sport',
        tags: ['Football', 'Social'],
      },
    ];

    const filterSet: DataFilterSet[] = [
      {
        name: 'content-a',
        version: '1',
        filters: [
          {
            name: 'tag',
            type: 'text',
            caption: 'tag',
            value: ['Football'],
          },
          {
            name: 'category',
            type: 'select',
            caption: 'category',
            value: ['sport', 'music'],
            options: {
              multiple: true,
            },
            api: {
              url: '/api/category',
            },
          },
        ],
      },
    ];

    const category: ContentACategory[] = [ 'sport', 'music', 'videoGame' ];

    return {
      'content-a': contentA,
      'filter-set': filterSet,
      category,
    };
  }
}
