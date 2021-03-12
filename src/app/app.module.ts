import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { InlineSVGModule } from 'ng-inline-svg'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { MessageAccueilComponent } from './message-accueil/message-accueil.component';
import { MenuIconAccueilComponent } from './menu-icon-accueil/menu-icon-accueil.component';
import { ChartsModule } from 'ng2-charts';
import { RetraiteComplementaireComponent } from './tableau_de_bord_metier/retraite-complementaire/retraite-complementaire.component';
import { ClientDistributionComponent } from './tableau_de_bord_metier/client-distribution/client-distribution.component';
import { PrevoyanceSanteComponent } from './tableau_de_bord_metier/prevoyance-sante/prevoyance-sante.component';
import { EpargneRetraiteComponent } from './tableau_de_bord_metier/epargne-retraite/epargne-retraite.component';
import { FinanceRhComponent } from './tableau_de_bord_metier/finance-rh/finance-rh.component';
import { SaisieManuelleComponent } from './saisie-manuelle/saisie-manuelle.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    MessageAccueilComponent,
    MenuIconAccueilComponent,
    RetraiteComplementaireComponent,
    ClientDistributionComponent,
    PrevoyanceSanteComponent,
    EpargneRetraiteComponent,
    FinanceRhComponent,
    SaisieManuelleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InlineSVGModule.forRoot({ baseUrl: 'http://localhost:4200/' }),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
