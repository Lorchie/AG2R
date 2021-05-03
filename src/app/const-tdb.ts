import { Metier } from './interfaces/metier';

export const   metiers: Array<Metier> = [

  {id: 1, route: '/accueil-component', titre: 'Résultats d’exploitation',
   menu: 'Home', code: 'accueil', typeMessage: 'Accueil'},

  {id: 2, route: '/retraite-complementaire-component', titre: 'Retraite Complémentaire & Action Sociale',
   menu: 'Retraite', code: 'RCAS', typeMessage: 'Faits Marquants'},

  {id: 3, route: '/client-distribution-component', titre: 'Clients, Distribution & Digital',
   menu: 'Digital', code: 'CDD', typeMessage: 'Faits Marquants'},

  {id: 4, route: '/prevoyance-sante-component', titre: 'Prévoyance Santé',
   menu: 'Prevoyance_sante', code: 'PS', typeMessage: 'Faits Marquants'},

  {id: 5, route: '/epargne-retraite-component', titre: 'Épargne et Retraite Supplémentaire',
   menu: 'Epargne', code: 'ERS', typeMessage: 'Faits Marquants'},

  {id: 6, route: '/finance-rh-component', titre: 'Finance, RH et autres\nFonctions support',
   menu: 'Fonctions_supports', code: 'FRFS', typeMessage: 'Faits Marquants'},

  {id: 7, route: '/saisie-manuelle-component', titre: 'Saisie données',
   menu: 'Reglages', code: '', typeMessage: ''}
];

export const headers = [
  {
    type:  'batch',
    array: [
      {id: 'numInc', libelle: 'référence'},
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
      {id: 'numIntervention', libelle: 'référence'},
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
      {id: 'num', libelle: 'Intervention'},
      {id: 'numPluriel', libelle: 'Interventions'},
      {id: 'titre', libelle: 'Interventions : 7h00'}
    ]
  }
];
