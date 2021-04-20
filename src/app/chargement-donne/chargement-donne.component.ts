import { Component, OnInit, HostBinding, ElementRef, ViewChild } from '@angular/core';
import { ApiCallService } from '../API/api-call.service';
import { Metier } from '../interfaces/metier';
import * as MetierConstants from '../const-tdb';

@Component({
  selector: 'app-chargement-donne',
  templateUrl: './chargement-donne.component.html',
  styleUrls: ['./chargement-donne.component.scss']
})

export class ChargementDonneComponent implements OnInit {

  @HostBinding('class') classes  = 'col container-fluid' ;

  @ViewChild('myInput')
  myInputVariable: any;

  fileToUploadPlanBatch: Array<File> = new Array();
  fileToUploadIncident: Array<File> = new Array();
  fileToUploadScenario: Array<File> = new Array();
  filesToUploadIntervention: Array<File> = new Array();

  filesChamps: any = [];
  metierSelected: any;
  nbrSuspendu: any;

  public metierArray: Array<Metier> = MetierConstants.metiers.map(obj => ({...obj}));

  constructor(private api: ApiCallService) { }

  ngOnInit(): void {
    this.metierArray.splice(6, 1);
    this.metierArray.splice(0, 1);
  }

  changeMetier(e: any): void {
    this.metierSelected = this.metierArray[e.target.value];
  }

  uploadFileToActivity(fileToUpload: any, type: string): void {
    this.api.postUpload(fileToUpload, this.metierSelected.code, type).subscribe((data: any) => {

        if (data.status === 202) {
          window.alert(data.message);
        }

        if (data.status === 201) {
          window.alert(data.message);
        }

      }, error => {
        console.log(error);
      }
    );
  }

  uploadFilesToActivity(fileToUpload: any, type: string): void {
    this.api.postUploadList(fileToUpload, this.metierSelected.code, type).subscribe((data: any) => {

        if (data.status === 202) {
          window.alert(data.message);
        }

        if (data.status === 201) {
          window.alert(data.message);
        }

      }, error => {
        console.log(error);
      }
    );
  }

  uploadFiles(): void{

    if (this.filesToUploadIntervention.length !== 0){
      this.uploadFilesToActivity(this.filesToUploadIntervention, 'interventions');

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
    if (!this.isEmpty(this.nbrSuspendu)){
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

  isEmpty(str: any): boolean {
    return ( !(str >= 0)  || typeof(str) !== 'number' );
  }
}
