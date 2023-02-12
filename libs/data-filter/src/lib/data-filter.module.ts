import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { DataFilterStoreEffects } from './data-filter-store/data-filter-store.effects';
import { DataFilterComponent } from './data-filter/data-filter.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { AsPipe } from './common.pipes';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([DataFilterStoreEffects]),
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  declarations: [
    AsPipe,
    DataFilterComponent,
  ],
  exports: [EffectsModule, DataFilterComponent],
})
export class DataFilterModule {}
