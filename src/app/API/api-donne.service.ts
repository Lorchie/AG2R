import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BatchPlans } from '../interfaces/batch-plans';
import { Incidents } from '../interfaces/incidents';
import { Interventions } from '../interfaces/interventions';
import { SuspendedScenarios } from '../interfaces/suspended-scenarios';
import { StatesScenarios } from '../interfaces/states-scenarios';
import { environment } from '../../environments/environment';

import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiDonneService {
  startUrl = environment.url;
  startUrlUpdate = this.startUrl + '/upload/';
  endUrlMetier = '?businessId=';

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

  getDonneeBatchPlans(metier: string): Observable<BatchPlans> {
    return this.http.get<BatchPlans>(this.startUrl + 'batchPlans' + this.endUrlMetier + metier, this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError));
  }

  getDonneeSuspendedScenarios(metier: string): Observable<SuspendedScenarios> {
    return this.http.get<SuspendedScenarios>(this.startUrl + 'suspendedScenarios' + this.endUrlMetier + metier, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError));
  }

  getDonneeIncidents(metier: string): Observable<Incidents> {
    return this.http.get<Incidents>(this.startUrl + 'incidents' + this.endUrlMetier + metier, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError));
  }

  getDonneeStatesScenarios(metier: string): Observable<StatesScenarios> {
    return this.http.get<StatesScenarios>(this.startUrl + 'statesScenarios' + this.endUrlMetier + metier, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError));
  }

  getDonneeInterventions(metier: string): Observable<Interventions> {
    return this.http.get<Interventions>(this.startUrl + 'interventions' + this.endUrlMetier + metier, this.httpOptions).pipe(
      retry(1),
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
