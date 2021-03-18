import { Component, OnInit, Input } from '@angular/core';
import * as IncidentConstants from '../../const-tdb';
import * as Donnee from '../../donnee';

@Component({
  selector: 'app-tableau-incidents',
  templateUrl: './tableau-incidents.component.html',
  styleUrls: ['../TDB-component.scss']
})
export class TableauIncidentsComponent implements OnInit {
  @Input() type?: string;
  @Input() metier?: string;

  incidents:any;
  headers:any;
  textes:any;
  incidentsVide:any;
  texteNb:string= "";
  texteTitre:string= "";
  nombre:string = "0";
  constructor() { }

  ngOnInit(): void {
    this.headers = IncidentConstants.headers.find(e => e.type === this.type)?.array;
    this.textes = IncidentConstants.textes.find(e => e.type === this.type)?.array;
    this.texteNb = this.textes.find((user: any) => user.id === "num").libelle;
    this.texteTitre = this.textes.find((user: any) => user.id === "titre").libelle
    switch (this.type) {
      case "batch":
        this.incidents = Donnee.incidentsBatch;
        this.nombre = this.incidents.length.toString();
        break; 
      case "scenario":
        this.incidents = Donnee.etatScenario;
        this.nombre = this.incidents.length.toString();
        break;
      case "intervention":
        this.incidents = Donnee.etatIntervention;
        this.nombre = this.incidents.length.toString();
        break;     
      default:
        break;
    }
    var numberInt =Number(this.nombre)
    if(numberInt < 3){
      var i = 3 - numberInt
      this.incidentsVide = new Array(i);
    }
  }
}
