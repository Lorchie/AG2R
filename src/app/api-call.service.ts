import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';


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
    return this.http.get(this.incidentUrl + metier).pipe(
      retry(1),
      catchError(this.handleError));

  }
  getIntervention(metier:string) {
    return this.http.get(this.interventionUrl + metier).pipe(
      retry(1),
      catchError(this.handleError));
  }
  getBatchPlans(metier:string) {
    return this.http.get(this.batchPlansUrl + metier).pipe(
      retry(1),
      catchError(this.handleError));
  }
  getSuspendedScenarios(metier:string) {
    return this.http.get(this.suspendedScenariosUrl + metier).pipe(
      retry(1),
      catchError(this.handleError));
  }
  getScenarioStatSuspendu(metier:string) {
    return this.http.get(this.scenarioStatSuspenduUrl + metier).pipe(
      retry(1),
      catchError(this.handleError));
  }
  getMessagesAccueil() {
    return this.http.get(this.messagesAccueilUrl).pipe(
      retry(1),
      catchError(this.handleError));
  }
  getMessages(metier:string) {
    return this.http.get(this.messagesUrl + metier).pipe(
      retry(1),
      catchError(this.handleError));
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

  handleError(error:any) {

    let errorMessage = '';
 
    if (error.error instanceof ErrorEvent) {
 
      errorMessage = `Error: ${error.error.message}`;
 
    } else {
 
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
 
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
