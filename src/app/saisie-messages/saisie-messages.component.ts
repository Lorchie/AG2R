import { Component, OnInit, HostBinding } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-saisie-messages',
  templateUrl: './saisie-messages.component.html',
  styleUrls: ['./saisie-messages.component.scss']
})
export class SaisieMessagesComponent implements OnInit {

  @HostBinding('class') classes  = 'col container' ;

  metierSelected: any;
  myGroup: any;
  faitsMarquants: any;
  message = '';

  public metierArray: Array<{id: number, titre: string, code: string, typeMessage: string}> = [
    {id: 0, titre: 'Accueil', code: 'accueil', typeMessage: 'Accueil'},
    {id: 1, titre: 'Retraite complémentaire & Action Sociale', code: 'RCAS', typeMessage: 'Faits Marquants'},
    {id: 2, titre: 'Clients, Distribution & Digital', code: 'CDD', typeMessage: 'Faits Marquants'},
    {id: 3, titre: 'Prévoyance Santé', code: 'PS', typeMessage: 'Faits Marquants'},
    {id: 4, titre: 'Epargne et Retraite Supplémentaire', code: 'ERS', typeMessage: 'Faits Marquants'},
    {id: 5, titre: 'Finance, rh & autres Fonction Supports', code: 'FRFS', typeMessage: 'Faits Marquants'},
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
      () => {
        this.callApi();
      });
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
      () => {
        this.callApi();
      });

  }
  ajouter(): void{
    if (this.message){
      this.api.ajouterMessage(this.metierSelected, this.message).subscribe(
        () => {
          this.callApi();
        });

      this.message = '';
    }
  }
}
