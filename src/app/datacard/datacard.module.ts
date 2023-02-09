import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatacardComponent } from './datacard.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    DatacardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    DatacardComponent
  ]
})
export class DatacardModule { }
