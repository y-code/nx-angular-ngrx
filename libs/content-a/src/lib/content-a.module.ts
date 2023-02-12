import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentAComponent } from './content-a/content-a.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { DataFilterModule } from '@stackblitz-nx-angular/data-filter';

const matModules = [MatTableModule, MatChipsModule];

@NgModule({
  imports: [CommonModule, HttpClientModule, matModules, DataFilterModule],
  declarations: [ContentAComponent],
})
export class ContentAModule {}
