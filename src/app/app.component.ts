import { Component } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Metier } from './interfaces/metier';
import * as MetierConstants from './const-tdb';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

  title = 'FRONTTableauDeBord';
  metierCurrent: Metier = MetierConstants.metiers[0];

  constructor(private router: Router){

    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
    .subscribe((event) => {
      this.metierCurrent = this.getCurrentMetier(event.url);
    });
  }
  getCurrentMetier(url: string): Metier{
    for (const object of MetierConstants.metiers) {
      if (object.route === url){
        return object;
      }
    }
    return MetierConstants.metiers[0];
  }
}
