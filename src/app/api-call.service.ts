import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  incidentUrl = 'http://localhost:8081/api/incidents?businessId=';
  interventionUrl = 'http://localhost:8081/api/interventions?businessId=';
  batchPlansUrl = 'http://localhost:8081/api/batchPlans?businessId=';
  suspendedScenariosUrl = 'http://localhost:8081/api/suspendedScenarios?businessId=';
  messagesAccueilUrl = 'http://localhost:8081/api/messages?businessId=accueil';
  messagesUrl = ' http://localhost:8081/api/messages?businessId=';
  scenarioStatSuspenduUrl = 'http://localhost:8081/api/statesScenarios?businessId=';
  supprimerMessageUrl = 'http://localhost:8081/api/messages?param=';
  ajouterMessageUrl = 'http://localhost:8081/api/messages';
  ajouterFichierUrl = 'http://localhost:8081/api/uploadIntervention';

  constructor(private http: HttpClient) { }

  getIncident(metier: string): Observable<object>  {
    return this.http.get(this.incidentUrl + metier).pipe(
      retry(1),
      catchError(this.handleError));

  }
  getIntervention(metier: string): Observable<object> {
    return this.http.get(this.interventionUrl + metier).pipe(
      retry(1),
      catchError(this.handleError));
  }
  getBatchPlans(metier: string): Observable<object> {
    return this.http.get(this.batchPlansUrl + metier).pipe(
      retry(1),
      catchError(this.handleError));
  }
  getSuspendedScenarios(metier: string): Observable<object> {
    return this.http.get(this.suspendedScenariosUrl + metier).pipe(
      retry(1),
      catchError(this.handleError));
  }
  getScenarioStatSuspendu(metier: string): Observable<object> {
    return this.http.get(this.scenarioStatSuspenduUrl + metier).pipe(
      retry(1),
      catchError(this.handleError));
  }
  getMessagesAccueil(): Observable<object> {
    return this.http.get(this.messagesAccueilUrl).pipe(
      retry(1),
      catchError(this.handleError));
  }
  getMessages(metier: string): Observable<object> {
    return this.http.get(this.messagesUrl + metier).pipe(
      retry(1),
      catchError(this.handleError));
  }
  deleteMessage(messageId: string): Observable<object> {
    return this.http.delete(this.supprimerMessageUrl + messageId);
  }

  ajouterMessage(metier: any, message: string): Observable<object> {
    const messageObject = {
      codeMetier: metier.code,
      libMetier: metier.titre,
      libMessage: message,
       typeMessage: metier.typeMessage
      };
    return this.http.post(this.ajouterMessageUrl, messageObject);
  }

  postFile(fileToUpload: File){
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    return this.http.post(this.ajouterFichierUrl, formData);
  }

  handleError(error: any): Observable<never> {

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
