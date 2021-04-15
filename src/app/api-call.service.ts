import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';
import { Role } from './dialog-password/dialog-password.component';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  startUrl = 'http://localhost:8081/api/';
  startUrlUpdate = 'http://localhost:8081/api/upload/';
  endUrlMetier = '?businessId=';

  messagesUrl = 'http://localhost:8081/api/messages?businessId=';

  checkPasswordUrl = 'http://localhost:8081/api/users/role?password=';

  supprimerMessageUrl = this.startUrl + 'messages?param=';
  ajouterMessageUrl = this.startUrl + 'messages';

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

  getDonnee(metier: string, type: string): Observable<object> {
    return this.http.get(this.startUrl + type + this.endUrlMetier + metier, this.httpOptions).pipe(
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

  postUpload(fileToUpload: File, metier: string, type: string): Observable<object> {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    return this.http.post(this.startUrlUpdate + type + this.endUrlMetier + metier, formData, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError));
  }

  postUploadList(fileToUpload: File[], metier: string, type: string): Observable<object> {
    const formData: FormData = new FormData();
    for (const val of fileToUpload){
      formData.append('file', val);
    }
    return this.http.post(this.startUrlUpdate + type + this.endUrlMetier + metier, formData, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError));
  }

  postSuspended(metier: any, nbrScenario: string): Observable<object> {
    const messageObject = {
      codeMetier: metier.code,
      libMetier: metier.titre,
      nbrScenario: nbrScenario.toString()
    };
    console.log(messageObject);
    return this.http.post(this.uploadSuspendedUrl, JSON.stringify(messageObject), this.httpOptionsPost).pipe(
      retry(2),
      catchError(this.handleError));
  }

  checkpassword(password: string): Observable<object> {
    return this.http.get(this.checkPasswordUrl + password, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError));
  }

  checkpassword2(password: string): Observable<Role> {
    return this.http.get<Role>(this.checkPasswordUrl + password, this.httpOptionsPost
    );
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
