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

  fileToUploadPlanBatch: Array<any> = new Array();
  fileToUploadIncident: Array<any> = new Array();
  fileToUploadScenario: Array<any> = new Array();
  filesToUploadIntervention: Array<any> = new Array();

  filesChamps: any = [];
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

  uploadFileToActivity(fileToUpload: any, type: string): void {
    console.log(fileToUpload);
    this.api.postUpload(fileToUpload, this.metierSelected.code, type).subscribe(data => {
        console.log('ok');
      }, error => {
        console.log(error);
      });
  }

  uploadFiles(): void{
    if (this.filesToUploadIntervention.length !== 0){
      this.filesToUploadIntervention.forEach(element => {
        this.uploadFileToActivity(element, 'interventions');
      });
    }

    if (this.fileToUploadIncident.length !== 0){
      this.uploadFileToActivity(this.fileToUploadIncident[0], 'incidents');
    }
    if (this.fileToUploadPlanBatch.length !== 0){
      this.uploadFileToActivity(this.fileToUploadPlanBatch[0], 'batchPlans');
    }
    if (this.fileToUploadScenario.length !== 0){
      this.uploadFileToActivity(this.fileToUploadScenario[0], 'statesScenarios');
    }
    if (this.nbrSuspendu){
      this.api.postSuspended(this.metierSelected, this.nbrSuspendu).subscribe();
    }
    this.removeAllChamps();
  }

  uploadFile(event: any, bool: boolean, name: string): void {
    let files: FileList;
    if (!bool){
      files = event.files;
    }else{
      files = event;
    }
    Array.from(files).forEach(file => {
      if (file.type.indexOf('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') !== 0) {
        window.alert('Le fichier que vous avez voulu upload n\'a pas le bon format ');
      }else{
        switch (name) {
          case 'intervention':
            this.filesToUploadIntervention.push(file);
            break;
          case 'incident':
            this.fileToUploadIncident[0] = file;
            break;
          case 'planBatch':
            this.fileToUploadPlanBatch[0] = file;
            break;
          case 'scenario':
            this.fileToUploadScenario[0] = file;
            break;

          default:
            break;
        }
      }
    });
  }

  deleteAttachment(index: number, name: string): void {
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

  removeAllChamps(): void{
    this.nbrSuspendu = '';
    this.filesChamps.forEach((element: any) => {
      element = '';
    });
    this.filesToUploadIntervention = [];
    this.fileToUploadIncident = [];
    this.fileToUploadPlanBatch = [];
    this.fileToUploadScenario = [];
  }
}
