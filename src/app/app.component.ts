import { Component } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  
  name = 'Get Current Url Route Demo';
  currentRoute: string ="";
  public tabTitre:Array<{route: string, titre: string}> = [
    {route:"/",titre:"INFORMATION PRODUCTION"},
    {route:"/accueil-component",titre:"INFORMATION PRODUCTION"},
    {route:"/client-distribution-component",titre:"Clients, distribution & digital"},
    {route:"/epargne-retraite-component",titre:"Epargne et retraite supplémentaire"},
    {route:"/prevoyance-sante-component",titre:"Prévoyance santé"},
    {route:"/retraite-complementaire-component",titre:"Retraite complémentaire & action social"},
    {route:"/finance-rh-component",titre:"Finance, rh & autres </n> Fonction supports"},
    {route:"/saisie-manuelle-component",titre:"Gestion message"}
  ];
  titre: string="";

  constructor(private router: Router){

    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
    .subscribe((event) => {
      this.titre = this.gestionTitre(event.url);
    });
  }

  gestionTitre(titre:string) : string{
    for (let object of this.tabTitre) {
      if(object.route === titre){
        return object.titre;
      }
    }
    return "";
  }

}