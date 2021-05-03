import { Component, OnInit, HostBinding } from '@angular/core';
import { ApiCallService } from '../API/api-call.service';
import { Metier } from '../interfaces/metier';
import * as MetierConstants from '../const-tdb';

@Component({
  selector: 'app-saisie-messages',
  templateUrl: './saisie-messages.component.html',
  styleUrls: ['./saisie-messages.component.scss']
})
export class SaisieMessagesComponent implements OnInit {

  @HostBinding('class') classes  = 'col container-fluid' ;

  metierSelected: any;
  myGroup: any;
  faitsMarquants: any = [];
  message = '';

  public metierArrayMessage: Array<Metier> = MetierConstants.metiers.map(obj => ({...obj}));

  constructor(private api: ApiCallService) { }

  ngOnInit(): void {
    this.metierArrayMessage.splice(6, 1);
  }

  changeMetier(e: any): void {
    this.metierSelected = this.metierArrayMessage[e.target.value];
    this.callApi();
  }

  callApi(): void{
    if (this.metierSelected){
      this.api.getMessages(this.metierSelected.code).toPromise()
      .then((res: any) => {
        if (res){
          res = res.map((element: any) => {
            element.libMessage = element.libMessage.replaceAll("\n", "<br/>");
            return element
          });
          this.faitsMarquants = res;
        }else{
          this.faitsMarquants = [];
        }

        })
      .catch();
    }
  }

  supprimerMessage(event: any, id: number): void{
    event.target.disabled = true;
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
