import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ApiContentAService } from './api-content-a.service';

@NgModule({
  imports: [
    InMemoryWebApiModule.forRoot(ApiContentAService, {
      dataEncapsulation: false,
    }),
  ],
  exports: [InMemoryWebApiModule],
})
export class FakeBackendModule {}
