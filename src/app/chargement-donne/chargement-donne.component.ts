import { Component, OnInit, HostBinding, ElementRef, ViewChild } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-chargement-donne',
  templateUrl: './chargement-donne.component.html',
  styleUrls: ['./chargement-donne.component.scss']
})

export class ChargementDonneComponent implements OnInit {

  @HostBinding('class') classes  = 'col container' ;

  @ViewChild('myInput')
  myInputVariable: any;

  fileToUploadPlanBatch: Array<any> = new Array;
  fileToUploadIncident: Array<any> = new Array;
  fileToUploadScenario: Array<any> = new Array;
  filesToUploadIntervention: Array<any> = new Array;
  metierSelected: any;
  nbrSuspendu: any;

  public metierArray: Array<{id: number, titre: string, code: string, typeMessage: string}> = [
    {id: 0, titre: 'Clients, distribution & digital', code: 'CDD', typeMessage: 'Faits Marquants'},
    {id: 1, titre: 'Epargne et retraite supplémentaire', code: 'ERS', typeMessage: 'Faits Marquants'},
    {id: 2, titre: 'Prévoyance santé', code: 'PS', typeMessage: 'Faits Marquants'},
    {id: 3, titre: 'Retraite complémentaire & action social', code: 'RCAS', typeMessage: 'Faits Marquants'},
    {id: 4, titre: 'Finance, rh & autres Fonction supports', code: 'FRFS', typeMessage: 'Faits Marquants'},
  ];

  constructor(private api: ApiCallService) { }

  ngOnInit(): void {
  }

  changeMetier(e: any): void {
    this.metierSelected = this.metierArray[e.target.value];
  }

  uploadFileToActivity(fileToUpload: any,type: string): void {
    this.api.postUpload(fileToUpload,this.metierSelected.code,type).subscribe(data => {
        console.log('ok');
      }, error => {
        console.log(error);
      });
  }

  uploadFiles(): void{
    if(this.filesToUploadIntervention){
      this.filesToUploadIntervention.forEach(element => {
        this.uploadFileToActivity(element,"interventions");
      });
    }

    if(this.fileToUploadIncident){
      this.uploadFileToActivity(this.fileToUploadIncident[0],"incidents");
    }
    if(this.fileToUploadPlanBatch){
      this.uploadFileToActivity(this.fileToUploadPlanBatch[0],"batchPlans");
    }
    if(this.fileToUploadScenario){
      this.uploadFileToActivity(this.fileToUploadScenario[0],"statesScenarios")
    }
    if(this.nbrSuspendu){
      this.api.postSuspended(this.metierSelected,this.nbrSuspendu).subscribe(data => {
        console.log('ok');
      }, error => {
        console.log(error);
      });
    }
  }

  uploadFile(event:any,bool: boolean,name :string) {
    let file;
    if(!bool){
      file = event.files;
    }else{
      file = event
    }
    for (let index = 0; index < file.length; index++) {
      const element = file[index];
      if(element.type.indexOf('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') !== 0) {
        console.log("invalid");
      }else{
        switch (name) {
          case 'intervention':
            this.filesToUploadIntervention.push(element);
            break;
          case 'incident':
            this.fileToUploadIncident[0] = element;
            break;
          case 'planBatch':
            this.fileToUploadPlanBatch[0] = element;
            break;
          case 'scenario':
            this.fileToUploadScenario[0] = element;
            break;
         
          default:
            break;
        }
      }
    } 
  }

  deleteAttachment(index:number,name: string) {
    switch (name) {
      case 'intervention':
        this.filesToUploadIntervention.splice(index, 1);
        break;
      case 'incident':
        this.fileToUploadIncident.splice(index, 1);
        break;
      case 'planBatch':
        this.fileToUploadPlanBatch.splice(index, 1);
        break;
      case 'scenario':
        this.fileToUploadScenario.splice(index, 1);
        break;
    }
  }
}
