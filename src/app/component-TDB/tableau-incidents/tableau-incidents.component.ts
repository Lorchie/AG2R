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
  @Input() metier?: string;
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
    this.texteNb = this.textes.find((user: any) => user.id === 'num').libelle;
    this.texteTitre = this.textes.find((user: any) => user.id === 'titre').libelle;
    switch (this.type) {
      case 'batch':
        if (this.metier){
          console.log(typeof this.api.getIncident(this.metier));
          this.api.getIncident(this.metier).toPromise()
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
          })
          .catch();
        }
        break;
      case 'scenario':
      if (this.metier){
        this.api.getScenarioStatSuspendu(this.metier).toPromise()
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
        })
        .catch();
      }
      break;
      case 'intervention':
        if (this.metier){
          this.api.getIntervention(this.metier).toPromise()
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
          })
          .catch();
        }
        break;
      default:
        break;
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
