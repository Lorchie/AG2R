import { Component, OnInit } from '@angular/core';
import * as Donnee from '../donnee';
import { ApiCallService } from '../api-call.service'
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-accueil',
  host: {
    class:'col'
  },
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  index: number = 0;

  messages: any;
  
  longer:any;
  radioOptions: number = 0;
  constructor(private api : ApiCallService) { }

  ngOnInit(): void {
    this.messages = this.api.getMessagesAccueil();
    this.longer = Object.keys(this.messages).length;
  }
  displaydata(data: any) {this.messages = data;}

  clickMessage (index:number) {
    if(index == this.longer -1){
      this.index = 0;
    }else{
      this.index = index + 1;
    }
    this.radioOptions = this.messages[this.index].id;
  }
  clickRadio (index:number){
    this.index = index;
  }
}
