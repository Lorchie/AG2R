import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { InlineSVGModule } from 'ng-inline-svg';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { ChartsModule } from 'ng2-charts';

import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';

import { SaisieManuelleComponent } from './saisie-manuelle/saisie-manuelle.component';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';


import { FaitsMarquantsComponent } from './component-TDB/faits-marquants/faits-marquants.component';
import { EtatPlanBatchComponent } from './component-TDB/etat-plan-batch/etat-plan-batch.component';
import { ScenarioSuspendusComponent } from './component-TDB/scenario-suspendus/scenario-suspendus.component';
import { TableauIncidentsComponent } from './component-TDB/tableau-incidents/tableau-incidents.component';
import { ChargementDonneComponent } from './chargement-donne/chargement-donne.component';
import { SaisieMessagesComponent } from './saisie-messages/saisie-messages.component';
import { DragDropDirectiveDirective } from './drag-drop-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    SaisieManuelleComponent,
    TableauDeBordComponent,
    FaitsMarquantsComponent,
    EtatPlanBatchComponent,
    ScenarioSuspendusComponent,
    TableauIncidentsComponent,
    ChargementDonneComponent,
    SaisieMessagesComponent,
    DragDropDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InlineSVGModule.forRoot({ baseUrl: 'http://localhost:4200/' }),
    ChartsModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
