import { Injectable } from '@angular/core';
import { ContentAModel } from '@stackblitz-nx-angular/content-a';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
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
      },
      {
        id: 'a-002',
        summary: 'This is A-002.',
      },
      {
        id: 'a-003',
        summary: 'This is A-003.',
      },
    ];

    return {
      'content-a': contentA,
    };
  }
}
