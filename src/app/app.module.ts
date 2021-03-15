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

import { SaisieManuelleComponent } from './saisie-manuelle/saisie-manuelle.component';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    MessageAccueilComponent,
    MenuIconAccueilComponent,
    SaisieManuelleComponent,
    TableauDeBordComponent
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
