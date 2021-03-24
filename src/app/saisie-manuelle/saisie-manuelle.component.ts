import { Component, OnInit } from '@angular/core';
import * as Donnee from '../donnee';

@Component({
  selector: 'app-saisie-manuelle',
  host: {
    class:'col container'
  },
  templateUrl: './saisie-manuelle.component.html',
  styleUrls: ['./saisie-manuelle.component.scss']
})
export class SaisieManuelleComponent implements OnInit {

  metierSelected:any;

  myGroup:any;
  faitsMarquants:any;

  public metierArray:Array<{id: number, titre: string}> = [
    {id:0,titre:"INFORMATION PRODUCTION"},
    {id:1,titre:"Clients, distribution & digital"},
    {id:2,titre:"Epargne et retraite supplémentaire"},
    {id:3,titre:"Prévoyance santé"},
    {id:4,titre:"Retraite complémentaire & action social"},
    {id:5,titre:"Finance, rh & autres Fonction supports"},
  ];

  constructor() { }

  ngOnInit(): void {
    this.faitsMarquants = Donnee.faitsMarquants;
  }
  changeMetier(e:any) {
    this.metierSelected = e.target.value
  }
}
