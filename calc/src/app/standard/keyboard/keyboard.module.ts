import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NumberComponent } from './number/number.component';
import { KeyboardComponent } from './keyboard.component';
import { OperationComponent } from './operation/operation.component';



@NgModule({
  declarations: [NumberComponent, KeyboardComponent, OperationComponent],
  imports: [
    CommonModule,

    MatCardModule,
    MatButtonModule,
    MatGridListModule,
  ],
  exports: [
    KeyboardComponent,
    NumberComponent,
    OperationComponent,

    MatCardModule,
    MatButtonModule,
    MatGridListModule,
  ],
})
export class KeyboardModule { }
