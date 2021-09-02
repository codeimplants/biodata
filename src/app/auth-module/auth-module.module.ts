import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModuleRoutingModule } from './auth-module-routing.module';
import { AuthModuleComponent } from './auth-module.component';
import { UserSignUpSignInComponent } from './user-sign-up-sign-in/user-sign-up-sign-in.component';


@NgModule({
  declarations: [
    AuthModuleComponent,
    UserSignUpSignInComponent
  ],
  imports: [
    CommonModule,
    AuthModuleRoutingModule
  ]
})
export class AuthModuleModule { }
