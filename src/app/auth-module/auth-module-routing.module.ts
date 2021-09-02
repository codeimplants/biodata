import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModuleComponent } from './auth-module.component';
import { UserSignUpSignInComponent } from './user-sign-up-sign-in/user-sign-up-sign-in.component';

const routes: Routes = [{ path: '', component: UserSignUpSignInComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthModuleRoutingModule { }
