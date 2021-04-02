import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-saisie-manuelle',
  templateUrl: './saisie-manuelle.component.html',
  styleUrls: ['./saisie-manuelle.component.scss']
})
export class SaisieManuelleComponent implements OnInit {

  public metierArray: Array<{id: number, titre: string, code: string, typeMessage: string}> = [
    {id: 0, titre: 'Accueil', code: 'accueil', typeMessage: 'Accueil'},
    {id: 1, titre: 'Clients, distribution & digital', code: 'CDD', typeMessage: 'Faits Marquants'},
    {id: 2, titre: 'Epargne et retraite supplémentaire', code: 'ERS', typeMessage: 'Faits Marquants'},
    {id: 3, titre: 'Prévoyance santé', code: 'PS', typeMessage: 'Faits Marquants'},
    {id: 4, titre: 'Retraite complémentaire & action social', code: 'RCAS', typeMessage: 'Faits Marquants'},
    {id: 5, titre: 'Finance, rh & autres Fonction supports', code: 'FRFS', typeMessage: 'Faits Marquants'},
  ];

  @HostBinding('class') classes  = 'col' ;

  chargementDonnee = true;

  constructor() { }

  ngOnInit(): void {
  }
}
