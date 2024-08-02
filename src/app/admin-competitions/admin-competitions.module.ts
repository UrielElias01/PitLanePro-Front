import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCompetitionsRoutingModule } from './admin-competitions-routing.module';
import { AdminCompetitionsComponent } from './admin-competitions.component';
import { CreateCompetitionComponent } from './create-competition/create-competition.component';
import { ManageParticipantsComponent } from './manage-participants/manage-participants.component';
import { ResultsRankingComponent } from './results-ranking/results-ranking.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminCompetitionsComponent,

    ManageParticipantsComponent,
    ResultsRankingComponent
  ],
  imports: [
    CommonModule,
    AdminCompetitionsRoutingModule,
    FormsModule
  ]
})
export class AdminCompetitionsModule { }
