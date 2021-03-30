import { Component, OnInit, HostBinding } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-saisie-manuelle',
  templateUrl: './saisie-manuelle.component.html',
  styleUrls: ['./saisie-manuelle.component.scss']
})
export class SaisieManuelleComponent implements OnInit {

  @HostBinding('class') classes  = 'col container' ;

  metierSelected: any;

  myGroup: any;
  faitsMarquants: any;
  oui = '';

  public metierArray: Array<{id: number, titre: string, code: string, typeMessage: string}> = [
    {id: 0, titre: 'Accueil', code: 'accueil', typeMessage: 'Accueil'},
    {id: 1, titre: 'Clients, distribution & digital', code: 'CDD', typeMessage: 'Faits Marquants'},
    {id: 2, titre: 'Epargne et retraite supplémentaire', code: 'ERS', typeMessage: 'Faits Marquants'},
    {id: 3, titre: 'Prévoyance santé', code: 'PS', typeMessage: 'Faits Marquants'},
    {id: 4, titre: 'Retraite complémentaire & action social', code: 'RCAS', typeMessage: 'Faits Marquants'},
    {id: 5, titre: 'Finance, rh & autres Fonction supports', code: 'FRFS', typeMessage: 'Faits Marquants'},
  ];

  constructor(private api: ApiCallService) { }

  ngOnInit(): void {
  }
  changeMetier(e: any): void {
    this.metierSelected = this.metierArray[e.target.value];
    this.callApi();
  }

  callApi(): void{
    if (this.metierSelected){
      this.api.getMessages(this.metierSelected.code).toPromise()
      .then((res) => {
          this.faitsMarquants = res;
        })
      .catch();
    }
  }

  supprimerMessage(id: number): void{
    this.api.deleteMessage(id.toString()).subscribe(
      x => console.log('Observer got a next value: ' + x),
      () =>     this.callApi());
  }

  supprimerAllMessage(): void{
    let id = '';
    const longeur = this.faitsMarquants.length;
    this.faitsMarquants.forEach((element: any, i: number) => {
      if (i !== longeur - 1){
        id = id + element.idMessage + ',';
      }else{
        id = id + element.idMessage;
      }
    });
    this.api.deleteMessage(id).subscribe(
      x => console.log('Observer got a next value: ' + x),
      () =>     this.callApi());

  }
  ajouter(): void{
    if (this.oui){
      this.api.ajouterMessage(this.metierSelected, this.oui).subscribe(
        x => console.log('Observer got a next value: ' + x),
        () =>     this.callApi());
    }
    this.oui = '';
  }
}
