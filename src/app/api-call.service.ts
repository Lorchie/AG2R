import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  startUrl = 'http://localhost:8081/api/';
  startUrlUpdate = 'http://localhost:8081/api/upload/';
  endurlMetier = '?businessId=';

  messagesUrl = 'http://localhost:8081/api/messages?businessId=';

  supprimerMessageUrl = this.startUrl + 'messages?param=';
  ajouterMessageUrl = this.startUrl + 'messages';

  uploadInterventionUrl = this.startUrlUpdate + 'interventions=' + this.endurlMetier;
  uploadIncidentsUrl = 'http://localhost:8081/api/upload/incidents?businessId=';
  uploadBatchPlansUrl = 'http://localhost:8081/api/upload/batchPlans?businessId=';
  uploadStatesScenariosUrl = 'http://localhost:8081/api/upload/statesScenarios?businessId=';
  uploadSuspendedUrl = 'http://localhost:8081/api/upload/suspended';

  httpOptions = {
    headers: new HttpHeaders(
      {
        // 'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('test:123'),
      }
    )
  };
  httpOptionsPost = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('test:123'),
      }
    )
  };

  constructor(private http: HttpClient) { }

  getDonnee(metier: string, type: string): Observable<object>  {
    return this.http.get(this.startUrl + type + this.endurlMetier + metier, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError));
  }

  getMessages(metier: string): Observable<object> {
    return this.http.get(this.messagesUrl + metier, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError));
  }

  deleteMessage(messageId: string): Observable<object> {
    return this.http.delete(this.supprimerMessageUrl + messageId, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError));
  }

  ajouterMessage(metierObject: any, message: string): Observable<object> {
    const messageObject = {
      codeMetier: metierObject.code,
      libMetier: metierObject.titre,
      libMessage: message,
      typeMessage: metierObject.typeMessage
      };
    return this.http.post(this.ajouterMessageUrl, JSON.stringify(messageObject), this.httpOptionsPost).pipe(
      retry(1),
      catchError(this.handleError));
  }

  postUpload(fileToUpload: File, metier: string, type: string): Observable<object>{
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    return this.http.post(this.startUrlUpdate + type + this.endurlMetier + metier, formData, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError));
  }

  postSuspended(metier: any, nbrScenario: string): Observable<object>{
    const messageObject = {
      codeMetier: metier.code,
      libMetier: metier.titre,
      nbrScenario: nbrScenario.toString()
      };
    return this.http.post(this.uploadSuspendedUrl, JSON.stringify(messageObject), this.httpOptionsPost).pipe(
      retry(2),
      catchError(this.handleError));
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
