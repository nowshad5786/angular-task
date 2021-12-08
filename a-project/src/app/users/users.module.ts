import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ArisGlobalComponent } from './aris-global/aris-global.component';



@NgModule({
  declarations: [
    LoginComponent,
    ArisGlobalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    ArisGlobalComponent
  ]
})
export class UsersModule { }
