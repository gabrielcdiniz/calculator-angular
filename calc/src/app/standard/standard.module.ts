import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandardRoutingModule } from './standard-routing.module';
import { StandardComponent } from './standard.component';
import { ScreenModule } from './screen/screen.module';
import { KeyboardModule } from './keyboard/keyboard.module';


@NgModule({
  declarations: [StandardComponent],
  imports: [
    CommonModule,
    StandardRoutingModule,
    ScreenModule,
    KeyboardModule,
  ],
  exports: [
    ScreenModule,
  ],
})
export class StandardModule { }
