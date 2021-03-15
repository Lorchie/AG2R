import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { SaisieManuelleComponent } from './saisie-manuelle/saisie-manuelle.component';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'accueil-component', component: TableauDeBordComponent },
  { path: 'client-distribution-component', component: TableauDeBordComponent },
  { path: 'epargne-retraite-component', component: TableauDeBordComponent },
  { path: 'finance-rh-component', component: TableauDeBordComponent },
  { path: 'prevoyance-sante-component', component: TableauDeBordComponent },
  { path: 'retraite-complementaire-component', component: TableauDeBordComponent },
  { path: 'saisie-manuelle-component', component: SaisieManuelleComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
