import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  incidentUrl :string = "http://localhost:8081/api/incidents?businessId=";
  interventionUrl :string = "http://localhost:8081/api/interventions?businessId=";
  batchPlansUrl :string = "http://localhost:8081/api/batchPlans?businessId=";
  suspendedScenariosUrl :string = "http://localhost:8081/api/suspendedScenarios?businessId=";
  messagesAccueilUrl :string = "http://localhost:8081/api/messages?businessId=accueil";
  messagesUrl :string = "http://localhost:8081/api/messages?businessId=";

  constructor(private http: HttpClient) { }

  getIncident(metier:string) {
    this.http.get(this.incidentUrl + metier).subscribe(data => {
      return data;
    });
  }
  getIntervention(metier:string) {
    this.http.get(this.interventionUrl + metier).subscribe(data => {
      return data;
    });
  }
  getBatchPlans(metier:string) {
    this.http.get(this.batchPlansUrl + metier).subscribe(data => {
      return data;
    });
  }
  getSuspendedScenarios(metier:string) {
    this.http.get(this.suspendedScenariosUrl + metier).subscribe(data => {
      return data;
    });
  }
  getMessagesAccueil() {
    this.http.get(this.messagesAccueilUrl).subscribe(data => {
      return data;
    });
  }
  getMessages(metier:string) {
    this.http.get(this.messagesUrl + metier).subscribe(data => {
      return data;
    });
  }
}
