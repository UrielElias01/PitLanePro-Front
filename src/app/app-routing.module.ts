import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TokenComponent } from './components/token/token.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { Token2Component } from './components/token2/token2.component';
import { AuthGuard } from './utils/auth.guard';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'token',component:TokenComponent},
  {path:'signIn', component:RegisterComponent},
  {path:'restaurar', component: ForgotPassComponent},
  { path: 'reset-password', component: ResetPasswordComponent},
  {path: 'token2', component: Token2Component},
  {
    path:'test',component:TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 