import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [DisplayComponent],
  imports: [
    CommonModule,

    MatCardModule,
    MatButtonModule,
    MatGridListModule,
  ],
  exports: [
    DisplayComponent,

    MatCardModule,
    MatButtonModule,
    MatGridListModule,
  ],
})
export class ScreenModule { }
