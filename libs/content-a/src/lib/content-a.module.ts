import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentAComponent } from './content-a/content-a.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

const matModules = [MatTableModule];

@NgModule({
  imports: [CommonModule, HttpClientModule, matModules],
  declarations: [ContentAComponent],
})
export class ContentAModule {}
