import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from './register.component';
import {SharedModule} from '../shared/shared.module';
// import {HelloComponent} from '../shared/hello/hello.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
