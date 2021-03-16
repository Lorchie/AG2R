import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saisie-manuelle',
  templateUrl: './saisie-manuelle.component.html',
  styleUrls: ['./saisie-manuelle.component.scss']
})
export class SaisieManuelleComponent implements OnInit {

  metierSelected:any;

  myGroup:any;

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
  }
  changeCity(e:any) {
    this.metierSelected = e.target.value
  }
}
