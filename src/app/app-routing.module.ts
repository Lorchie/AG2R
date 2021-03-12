import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { SaisieManuelleComponent } from './saisie-manuelle/saisie-manuelle.component';
import { ClientDistributionComponent } from './tableau_de_bord_metier/client-distribution/client-distribution.component';
import { EpargneRetraiteComponent } from './tableau_de_bord_metier/epargne-retraite/epargne-retraite.component';
import { FinanceRhComponent } from './tableau_de_bord_metier/finance-rh/finance-rh.component';
import { PrevoyanceSanteComponent } from './tableau_de_bord_metier/prevoyance-sante/prevoyance-sante.component';
import { RetraiteComplementaireComponent } from './tableau_de_bord_metier/retraite-complementaire/retraite-complementaire.component';


const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'accueil-component', component: AccueilComponent },
  { path: 'client-distribution-component', component: ClientDistributionComponent },
  { path: 'epargne-retraite-component', component: EpargneRetraiteComponent },
  { path: 'finance-rh-component', component: FinanceRhComponent },
  { path: 'prevoyance-sante-component', component: PrevoyanceSanteComponent },
  { path: 'retraite-complementaire-component', component: RetraiteComplementaireComponent },
  { path: 'saisie-manuelle-component', component: SaisieManuelleComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
