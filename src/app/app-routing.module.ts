import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Metier } from './interfaces/metier';
import * as MetierConstants from './const-tdb';

import { AccueilComponent } from './accueil/accueil.component';
import { SaisieManuelleComponent } from './saisie-manuelle/saisie-manuelle.component';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';


const metierArray: Array<Metier> = MetierConstants.metiers.map(obj => ({...obj}));

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'accueil-component', component: AccueilComponent },
  { path: 'retraite-complementaire-component', component: TableauDeBordComponent, data : metierArray[1]},
  { path: 'client-distribution-component', component: TableauDeBordComponent, data : metierArray[2]},
  { path: 'prevoyance-sante-component', component: TableauDeBordComponent, data : metierArray[3]},
  { path: 'epargne-retraite-component', component: TableauDeBordComponent, data : metierArray[4]},
  { path: 'finance-rh-component', component: TableauDeBordComponent, data : metierArray[5]},
  { path: 'saisie-manuelle-component', component: SaisieManuelleComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
