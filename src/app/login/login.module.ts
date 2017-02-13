import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login.component';
import {SharedModule} from '../shared/shared.module';
import {LoginService} from './login.service';
// import {HelloComponent} from '../shared/hello/hello.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
      LoginService
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
