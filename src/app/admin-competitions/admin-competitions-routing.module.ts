import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCompetitionsComponent } from './admin-competitions.component';

const routes: Routes = [{ path: '', component: AdminCompetitionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminCompetitionsRoutingModule { }
