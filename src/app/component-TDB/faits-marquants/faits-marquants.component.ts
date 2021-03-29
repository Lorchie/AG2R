import { Component, OnInit, Input } from '@angular/core';
import { ApiCallService } from '../../api-call.service'

@Component({
  selector: 'app-faits-marquants',
  host:{
    class: "divFaitsMarquand"
  },
  templateUrl: './faits-marquants.component.html',
  styleUrls: ['../TDB-component.scss']
})
export class FaitsMarquantsComponent implements OnInit {

  @Input() metier?: string;
  indexG: number = 0;
  faitsMarquants: any;
  radioOptions: number = 0;
  longer:number = 0;
  
  constructor(private api : ApiCallService) { }


  ngOnInit(): void {
    if (this.metier){
      this.api.getMessages(this.metier).toPromise()
      .then((res)=> {
          if(res instanceof Array){
            this.longer = res.length;
          }
          this.faitsMarquants = res;
        })
      .catch()
    }
  }
  clickRadio (index:number){
    this.indexG = index;
  }

}
