import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  incidentUrl :string = "http://localhost:8081/api/incidents?businessId=";
  interventionUrl :string = "http://localhost:8081/api/interventions?businessId=";
  batchPlansUrl :string = "http://localhost:8081/api/batchPlans?businessId=";
  suspendedScenariosUrl :string = "http://localhost:8081/api/suspendedScenarios?businessId=";
  messagesAccueilUrl :string = "http://localhost:8081/api/messages?businessId=accueil";
  messagesUrl :string = " http://localhost:8081/api/messages?businessId=";
  scenarioStatSuspenduUrl :string = "http://localhost:8081/api/statesScenarios?businessId=";
  supprimerMessageUrl: string = "http://localhost:8081/api/messages?param="
  ajouterMessageUrl: string = "http://localhost:8081/api/messages"

  constructor(private http: HttpClient) { }

  getIncident(metier:string) {
    return this.http.get(this.incidentUrl + metier);

  }
  getIntervention(metier:string) {
    return this.http.get(this.interventionUrl + metier);
  }
  getBatchPlans(metier:string) {
    return this.http.get(this.batchPlansUrl + metier);
  }
  getSuspendedScenarios(metier:string) {
    return this.http.get(this.suspendedScenariosUrl + metier);
  }
  getScenarioStatSuspendu(metier:string) {
    return this.http.get(this.scenarioStatSuspenduUrl + metier);
  }
  getMessagesAccueil() {
    return this.http.get(this.messagesAccueilUrl);
  }
  getMessages(metier:string) {
    return this.http.get(this.messagesUrl + metier);
  }
  deleteMessage(messageId:string){
    return this.http.delete(this.supprimerMessageUrl+messageId);
  }
  
  ajouterMessage(metier: any,message: string){
    let messageObject = {
      codeMetier: metier.code,
      libMetier: metier.titre,
      libMessage: message,
       typeMessage: metier.typeMessage
      };
    return this.http.post(this.ajouterMessageUrl,messageObject);
  }
}
