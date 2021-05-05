import { Component } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Metier } from './interfaces/metier';
import * as MetierConstants from './const-tdb';
import { ApiCallService } from './API/api-call.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

  title = 'FRONTTableauDeBord';
  metierCurrent: Metier = MetierConstants.metiers[0];
  day: string = "";
  month: string = "";
  date: any;

  displayDate : boolean = true;


  constructor(private router: Router, private api: ApiCallService){

    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
    .subscribe((event) => {
      this.metierCurrent = this.getCurrentMetier(event.url);
      this.getLastDate();
    });
  }

  getLastDate(): void {
   if(this.metierCurrent.code != ''){
    this.displayDate = true;
      this.api.getLastUpdate(this.metierCurrent.code).toPromise()
      .then((res: any) => {
        this.date = new Date(res.updateDate);
        this.updateDate();
        })
      .catch();
    }else{
      this.displayDate = false;
    }
    
  }
  getCurrentMetier(url: string): Metier{
    for (const object of MetierConstants.metiers) {
      if (object.route === url){
        return object;
      }
    }
    return MetierConstants.metiers[0];
  }

  

  updateDate(): void{

   // alert(this.date+ "est"+new Date())
    if(this.date == undefined){
      this.date = new Date();
    }

    switch (this.date.getDay()) {
      case 0:
        this.day = "Dimanche";
        break;
      case 1:
        this.day = "Lundi";
        break;
      case 2:
        this.day = "Mardi";
        break;
      case 3:
        this.day = "Mercredi";
        break;
      case 4:
        this.day = "Jeudi";
        break;
      case 5:
        this.day = "Vendredi";
        break;
      case 6:
        this.day = "Samedi";
    }
    switch (this.date.getMonth()) {
      case 0:
        this.month = "Janvier";
        break;
      case 1:
        this.month = "Février";
        break;
      case 2:
        this.month = "Mars";
        break;
      case 3:
        this.month = "Avril";
        break;
      case 4:
        this.month = "Mai";
        break;
      case 5:
        this.month = "Juin";
        break;
      case 6:
        this.month = "Juillet";
    }
  }
}
