import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromContentAStore from './content-a-store.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ContentAStoreEffects } from './content-a-store.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromContentAStore.contentAStoreFeatureKey,
      fromContentAStore.reducer
    ),
    EffectsModule.forFeature([ContentAStoreEffects]),
  ],
  exports: [StoreModule, EffectsModule],
})
export class ContentAStoreModule {}
