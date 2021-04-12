import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { SaisieManuelleComponent } from './saisie-manuelle/saisie-manuelle.component';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'accueil-component', component: AccueilComponent },
  { path: 'client-distribution-component', component: TableauDeBordComponent, data : {code : 'CDD', titre : 'Clients, distribution & digital'} },
  { path: 'epargne-retraite-component', component: TableauDeBordComponent, data : {code : 'ERS', titre : 'Epargne et retraite supplémentaire'} },
  { path: 'finance-rh-component', component: TableauDeBordComponent, data : {code : 'FRFS', titre : 'Finance, rh & autres Fonction supports'} },
  { path: 'prevoyance-sante-component', component: TableauDeBordComponent, data : {code : 'PS', titre : 'Prévoyance santé'} },
  { path: 'retraite-complementaire-component', component: TableauDeBordComponent, data : {code : 'RCAS', titre : 'Retraite complémentaire & action social'} },
  { path: 'saisie-manuelle-component', component: SaisieManuelleComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
