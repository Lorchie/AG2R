import { Metier } from './interfaces/metier';

export class TDBConst {

}
export const   metiers: Array<Metier> = [
  {route: '/', titre: 'RESULTATS D’EXPLOITATIONS', menu: 'Home'},
  {route: '/accueil-component', titre: 'RESULTATS D’EXPLOITATIONS', menu: 'Home'},
  {route: '/client-distribution-component', titre: 'Clients, Distribution & Digital', menu: 'Digital'},
  {route: '/epargne-retraite-component', titre: 'Epargne et Retraite Supplémentaire', menu: 'Epargne'},
  {route: '/prevoyance-sante-component', titre: 'Prévoyance Santé', menu: 'Prevoyance_sante'},
  {route: '/retraite-complementaire-component', titre: 'Retraite complémentaire & Action Sociale', menu: 'Retraite'},
  {route: '/finance-rh-component', titre: 'Finance, RH & autres\nFonction supports', menu: 'Fonctions_supports'},
  {route: '/saisie-manuelle-component', titre: 'Saisie données', menu: 'Reglages'}
];

export const headers = [
  {
    type:  'batch',
    array: [
      {id: 'numInc', libelle: 'n° incident'},
      {id: 'eltConfInc', libelle: 'élément de configuration'},
      {id: 'libInc', libelle: 'libellé'},
      {id: 'prioriteInc', libelle: 'priorité'}
      ]
  },
  {
    type:  'scenario',
    array: [
      {id: 'libScenario', libelle: 'scénario en erreur'},
      {id: 'appAssScenario', libelle: 'application associée'},
      {id: 'refScenario', libelle: 'référence'}
    ]
  },
  {
    type:  'intervention',
    array: [
      {id: 'numIntervention', libelle: 'numéro'},
      {id: 'eltConfIntervention', libelle: 'élément de configuration'},
      {id: 'libIntervention', libelle: 'libellé'}
    ]
  }
];

export const textes = [
  {
    type:  'batch',
    array: [
      {id: 'num', libelle: 'Incident batch en cours'},
      {id: 'numPluriel', libelle: 'Incidents batch en cours'},
      {id: 'titre', libelle: 'Incidents batch en cours : 19h00 - 7h30'}
    ]
  },
  {
    type:  'scenario',
    array: [
      {id: 'num', libelle: 'Scénario en erreur à 7h30'},
      {id: 'numPluriel', libelle: 'Scénarios en erreur à 7h30'},
      {id: 'titre', libelle: 'Etat des scénarios NewTest à l\'ouverture du service : 7h30'}
    ]
  },
  {
    type:  'intervention',
    array: [
      {id: 'num', libelle: 'Intervention en cours'},
      {id: 'numPluriel', libelle: 'Interventions en cours'},
      {id: 'titre', libelle: 'Etat des interventions : 19h00 - 7h30'}
    ]
  }
];
