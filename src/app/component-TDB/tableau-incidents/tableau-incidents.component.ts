import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as IncidentConstants from '../../const-tdb';
import { ApiCallService } from '../../api-call.service';

@Component({
  selector: 'app-tableau-incidents',
  templateUrl: './tableau-incidents.component.html',
  styleUrls: ['../TDB-component.scss']
})
export class TableauIncidentsComponent implements OnInit {
  @Input() type?: string;
  @Input() metier?: any;
  @Input() zoom?: boolean;

  @Output() zoomTableau = new EventEmitter<{bool: boolean, type: string}>();

  incidents: any;
  headers: any;
  textes: any;
  incidentsVide: any;
  texteNb = '';
  nombre = '0';
  texteTitre = '';

  constructor(private api: ApiCallService) { }

  ngOnInit(): void {
    this.headers = IncidentConstants.headers.find(e => e.type === this.type)?.array;
    this.textes = IncidentConstants.textes.find(e => e.type === this.type)?.array;
    this.texteTitre = this.textes.find((user: any) => user.id === 'titre').libelle;
    switch (this.type) {
      case 'batch':
        if (this.metier){
          this.api.getDonnee(this.metier.code, 'incidents').toPromise()
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
        this.api.getDonnee(this.metier.code, 'statesScenarios').toPromise()
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
          this.api.getDonnee(this.metier.code, 'interventions').toPromise()
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
