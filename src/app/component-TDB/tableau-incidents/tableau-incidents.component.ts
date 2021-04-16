import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as IncidentConstants from '../../const-tdb';
import { ApiDonneService } from '../../API/api-donne.service';
import { Metier } from '../../interfaces/metier';

@Component({
  selector: 'app-tableau-incidents',
  templateUrl: './tableau-incidents.component.html',
  styleUrls: ['../TDB-component.scss']
})
export class TableauIncidentsComponent implements OnInit {
  @Input() type?: string;
  @Input() metier?: Metier;
  @Input() zoom?: boolean;

  @Output() zoomTableau = new EventEmitter<{bool: boolean, type: string}>();

  incidents: any;
  headers: any;
  textes: any;
  incidentsVide: any;
  texteNb = '';
  nombre = '0';
  texteTitre = '';

  constructor(private api: ApiDonneService) { }

  ngOnInit(): void {
    this.headers = IncidentConstants.headers.find(e => e.type === this.type)?.array;
    this.textes = IncidentConstants.textes.find(e => e.type === this.type)?.array;
    this.texteTitre = this.textes.find((user: any) => user.id === 'titre').libelle;
    switch (this.type) {
      case 'batch':
        if (this.metier){
          this.api.getDonneeIncidents(this.metier.code).toPromise()
          .then((res) => {
              if (res instanceof Array){
                const numberInt = res.length;
                if (numberInt < 3){
                  this.createColEmpty(numberInt);
                }
                this.nombre = numberInt.toString();
              }else{
                this.incidentsVide = new Array(3);
              }
              this.incidents = res;
              this.setTextNb();
          })
          .catch();
        }
        break;
      case 'scenario':
      if (this.metier){
        this.api.getDonneeStatesScenarios(this.metier.code).toPromise()
        .then((res) => {
            if (res instanceof Array){
              const numberInt = res.length;
              if (numberInt < 3){
                this.createColEmpty(numberInt);
              }
              this.nombre = numberInt.toString();
            }else{
              this.incidentsVide = new Array(3);
            }
            this.incidents = res;
            this.setTextNb();
        })
        .catch();
      }
      break;
      case 'intervention':
        if (this.metier){
          this.api.getDonneeInterventions(this.metier.code).toPromise()
          .then((res) => {
              if (res instanceof Array){
                const numberInt = res.length;
                if (numberInt < 3){
                  this.createColEmpty(numberInt);
                }
                this.nombre = numberInt.toString();
              }else{
                this.incidentsVide = new Array(3);
              }
              this.incidents = res;
              this.setTextNb();
          })
          .catch();
        }
        break;
      default:
        break;
    }


  }

  setTextNb(): void{
    if (parseInt(this.nombre, 10) < 2){
      this.texteNb = this.textes.find((user: any) => user.id === 'num').libelle;
    }else{
      this.texteNb = this.textes.find((user: any) => user.id === 'numPluriel').libelle;
    }
  }

  zoomCompnent(bool: boolean): void {
    if (this.type){
      this.zoomTableau.emit({bool, type: this.type});
    }
  }

  createColEmpty(numberInt: number): void{
    const i = 3 - numberInt;
    this.incidentsVide = new Array(i);
  }
}
