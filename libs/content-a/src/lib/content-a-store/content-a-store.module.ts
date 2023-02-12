import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ContentAStoreEffects } from './content-a-store.effects';
import { contentAStoreFeatureKey, contentAStoreReducer } from './content-a-store.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(contentAStoreFeatureKey, contentAStoreReducer),
    EffectsModule.forFeature([ContentAStoreEffects]),
  ],
  exports: [StoreModule, EffectsModule],
})
export class ContentAStoreModule {}
