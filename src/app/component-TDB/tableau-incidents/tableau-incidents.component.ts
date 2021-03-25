import { Component, OnInit, Input } from '@angular/core';
import * as IncidentConstants from '../../const-tdb';
import { ApiCallService } from '../../api-call.service'

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
  nombre:any;
  texteTitre:string= "";
  constructor(private api : ApiCallService) { }

  async ngOnInit() {
    console.log(this.metier);
    this.headers = IncidentConstants.headers.find(e => e.type === this.type)?.array;
    this.textes = IncidentConstants.textes.find(e => e.type === this.type)?.array;
    this.texteNb = this.textes.find((user: any) => user.id === "num").libelle;
    this.texteTitre = this.textes.find((user: any) => user.id === "titre").libelle
    switch (this.type) {
      case "batch":
        if(this.metier){
          this.api.getIncident(this.metier).toPromise()
          .then((res)=> {
            console.log("sdf");
              if(res instanceof Array){
                var numberInt = res.length;
                if(numberInt < 3){
                  var i = 3 - numberInt
                  this.incidentsVide = new Array(i);
                }
                this.nombre= numberInt.toString();
              }
             this.incidents = res
          })
          .catch()
        }
        break; 
      case "scenario":
      if(this.metier){
        this.api.getScenarioStatSuspendu(this.metier).toPromise()
        .then((res)=> {
          console.log("sdf");
            if(res instanceof Array){
              var numberInt = res.length;
              if(numberInt < 3){
                var i = 3 - numberInt
                this.incidentsVide = new Array(i);
              }
              this.nombre= numberInt.toString();
            }
           this.incidents = res
        })
        .catch()
      }
        break;
      case "intervention":
        if(this.metier){
          this.api.getIntervention(this.metier).toPromise()
          .then((res)=> {
            console.log("sdf");
              if(res instanceof Array){
                var numberInt = res.length;
                if(numberInt < 3){
                  var i = 3 - numberInt
                  this.incidentsVide = new Array(i);
                }
                this.nombre= numberInt.toString();
              }
             this.incidents = res
          })
          .catch()
        }
        break;     
      default:
        break;
    }
  }
}
