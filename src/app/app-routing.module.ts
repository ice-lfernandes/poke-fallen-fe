import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginViewComponent } from './view/login-view/login-view.component';
import { FirstLoginComponent } from './view/first-login/first-login.component';

const routes: Routes = [
  { path: 'login', component: LoginViewComponent },
  { path: 'first-login', component: FirstLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }