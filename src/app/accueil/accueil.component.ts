import { Component, OnInit, HostBinding } from '@angular/core';
import { ApiCallService } from '../API/api-call.service';
import { Metier } from '../interfaces/metier';
import * as MetierConstants from '../const-tdb';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  public metierArray: Array<Metier> = MetierConstants.metiers.map(obj => ({...obj}));

  @HostBinding('class') classes  = 'col' ;

  index = 0;
  messages: any;
  longer = 0;
  radioOptions = 0;

  constructor(private api: ApiCallService) { }

  ngOnInit(): void {
    this.metierArray.splice(7, 1);
    this.metierArray.splice(0, 1);
    this.api.getMessages('accueil').toPromise()
      .then((res) => {
          if (res instanceof Array){
            this.longer = res.length;
          }
          this.messages = res;
        })
      .catch();
  }
  displaydata(data: any): void {this.messages = data; }

  clickMessage(index: number): void {
    if (index === this.longer - 1){
      this.index = 0;
    }else{
      this.index = index + 1;
    }
    this.radioOptions = this.index;
  }
  clickRadio(index: number): void{
    this.index = index;
  }
}
