import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TokenComponent } from './components/token/token.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CardsPilotosComponent } from './components/cards-pilotos/cards-pilotos.component';
import { HorarioComponent } from './components/horario/horario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PoliPrivComponent } from './components/poli-priv/poli-priv.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { Token2Component } from './components/token2/token2.component';
import { AdminGuard} from './guards/admin.guard';
import { TestComponent } from './components/test/test.component';
import { CreateCompetitionComponent } from './admin-competitions/create-competition/create-competition.component';
import { ManageParticipantsComponent } from './admin-competitions/manage-participants/manage-participants.component';
import { ResultsRankingComponent } from './admin-competitions/results-ranking/results-ranking.component';

const routes: Routes = [
  { path: '', redirectTo: 'app-inicio', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'token',component:TokenComponent},
  {path:'signIn', component:RegisterComponent},

  {path:'restaurar', component: ForgotPassComponent},
  { path: 'reset-password', component: ResetPasswordComponent},
  {path: 'token2', component: Token2Component},
  {path:'test',component:TestComponent},
  {path:'app-cards-pilotos', component:CardsPilotosComponent},
  {path:'app-horario', component:HorarioComponent},
  {path:'app-inicio', component:InicioComponent},
  {path:'app-poli-priv', component:PoliPrivComponent},
  {path:'app-forgot-pass', component:ForgotPassComponent},
  {path:'app-reset-password', component:ResetPasswordComponent},
  {path:'app-token2', component:Token2Component},
  { path: 'admin-competitions', loadChildren: () => import('./admin-competitions/admin-competitions.module').then(m => m.AdminCompetitionsModule) },
  { path: 'create', component: CreateCompetitionComponent, canActivate: [AdminGuard] },
  { path: 'participants', component: ManageParticipantsComponent, canActivate: [AdminGuard] },
  { path: 'results', component: ResultsRankingComponent, canActivate: [AdminGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 