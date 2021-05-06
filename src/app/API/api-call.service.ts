import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';
import { Role } from '../dialog-password/dialog-password.component';
import { Message } from '../interfaces/message';
import { environment } from '../../environments/environment';
import { BusinessLastDate } from '../interfaces/businessLastDate';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  startUrl = environment.url;
  startUrlUpdate = this.startUrl + 'upload/';
  endUrlMetier = '?businessId=';

  messagesUrl = this.startUrl + 'messages?businessId=';

  checkPasswordUrl = this.startUrl + 'users/role?password=';

  supprimerMessageUrl = this.startUrl + 'messages?param=';
  ajouterMessageUrl = this.startUrl + 'messages';

  uploadSuspendedUrl = this.startUrl + 'upload/suspended';

  lastUpdateUrl = this.startUrl + 'businessUpdateDate?businessCode=';

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


  getMessages(metier: string): Observable<Message> {
    return this.http.get<Message>(this.messagesUrl + metier, this.httpOptions).pipe(
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

  getLastUpdate(metier: string): Observable<BusinessLastDate> {
    return this.http.get<BusinessLastDate>(this.lastUpdateUrl + metier, this.httpOptions).pipe(
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
    console.log(this.uploadSuspendedUrl);
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
