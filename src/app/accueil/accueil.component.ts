import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';

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
  longer:number = 0;
  radioOptions: number = 0;
  
  constructor(private api : ApiCallService) { }

  ngOnInit(): void {
      this.api.getMessagesAccueil().toPromise()
      .then((res)=> {
          if(res instanceof Array){
            this.longer = res.length;
          }
          this.messages = res;
        })
      .catch()
  }
  displaydata(data: any) {this.messages = data;}

  clickMessage (index:number) {
    if(index == this.longer -1){
      this.index = 0;
    }else{
      this.index = index + 1;
    }
    this.radioOptions = this.index;
  }
  clickRadio (index:number){
    this.index = index;
  }
}
