import { Metier } from './metier';

export class TDBConst {

}
export const   metiers:Array<Metier> = [
    {route:"/",titre:"INFORMATION PRODUCTION",menu:"Home"},
    {route:"/accueil-component",titre:"INFORMATION PRODUCTION",menu:"Home"},
    {route:"/client-distribution-component",titre:"Clients, distribution & digital",menu:"Digital"},
    {route:"/epargne-retraite-component",titre:"Epargne et retraite supplémentaire",menu:"Epargne"},
    {route:"/prevoyance-sante-component",titre:"Prévoyance santé",menu:"Prevoyance_sante"},
    {route:"/retraite-complementaire-component",titre:"Retraite complémentaire & action social",menu:"Retraite"},
    {route:"/finance-rh-component",titre:"Finance, rh & autres\nFonction supports",menu:"Fonctions_supports"},
    {route:"/saisie-manuelle-component",titre:"Gestion message",menu:"Reglages"}
  ];
