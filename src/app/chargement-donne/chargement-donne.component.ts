import { Component, OnInit, HostBinding } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-chargement-donne',
  templateUrl: './chargement-donne.component.html',
  styleUrls: ['./chargement-donne.component.scss']
})

export class ChargementDonneComponent implements OnInit {

  @HostBinding('class') classes  = 'col container' ;

  fileToUploadPlanBatch: any;
  fileToUploadIncident: any;
  fileToUploadScenario: any;
  arrayFileToUploadIntervention: any;
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

  handleFileInput(target: any, name: string): void {
    switch (name) {
      case 'intervention':
        this.arrayFileToUploadIntervention.push(target.files.item(0));
        break;
      case 'incident':
        this.fileToUploadIncident = target.files.item(0);
        break;
      case 'planBatch':
        this.fileToUploadPlanBatch = target.files.item(0);
        break;
      case 'scenario':
        this.fileToUploadScenario = target.files.item(0);
        break;
     
      default:
        break;
    }
  }

  uploadFileToActivity(fileToUpload: any,type: string): void {
    this.api.postUpload(fileToUpload,this.metierSelected.code,type).subscribe(data => {
        console.log('ok');
      }, error => {
        console.log(error);
      });
  }

  uploadFiles(): void{
    if(this.arrayFileToUploadIntervention){
      this.arrayFileToUploadIntervention.forEach((element:string) => {
        this.uploadFileToActivity(element,"interventions");
      });
    }

    if(this.fileToUploadIncident){
      console.log("oui");
      this.uploadFileToActivity(this.fileToUploadIncident,"incidents");
    }
    if(this.fileToUploadPlanBatch){
      this.uploadFileToActivity(this.fileToUploadPlanBatch,"batchPlans");
    }
    if(this.fileToUploadScenario){
      this.uploadFileToActivity(this.fileToUploadScenario,"statesScenarios");
    }
    if(this.nbrSuspendu){
      this.api.postSuspended(this.metierSelected,this.nbrSuspendu);
    }
  }
}
