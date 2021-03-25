import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { SaisieManuelleComponent } from './saisie-manuelle/saisie-manuelle.component';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'accueil-component', component: AccueilComponent },
  { path: 'client-distribution-component', component: TableauDeBordComponent,data : {metier : 'CDD'} },
  { path: 'epargne-retraite-component', component: TableauDeBordComponent,data : {metier : 'ERS'} },
  { path: 'finance-rh-component', component: TableauDeBordComponent,data : {metier : 'FRFS'} },
  { path: 'prevoyance-sante-component', component: TableauDeBordComponent,data : {metier : 'PS'} },
  { path: 'retraite-complementaire-component', component: TableauDeBordComponent,data : {metier : 'RCAS'} },
  { path: 'saisie-manuelle-component', component: SaisieManuelleComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
