import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ApiCallService } from '../../api-call.service';

@Component({
  selector: 'app-faits-marquants',
  templateUrl: './faits-marquants.component.html',
  styleUrls: ['../TDB-component.scss']
})
export class FaitsMarquantsComponent implements OnInit {

  @Input() metier?: any;
  index = 0;
  faitsMarquants: any;
  radioOptions = 0;
  longer = 0;

  constructor(private api: ApiCallService) { }

  @HostBinding('class') classes  = 'divFaitsMarquand' ;

  ngOnInit(): void {
    if (this.metier){
      this.api.getMessages(this.metier.code).toPromise()
      .then((res) => {
          if (res instanceof Array){
            this.longer = res.length;
          }
          this.faitsMarquants = res;
        })
      .catch();
    }
  }
  clickRadio(index: number): void{
    this.index = index;
  }

  clickMessage(index: number): void {
    if (index === this.longer - 1){
      this.index = 0;
    }else{
      this.index = index + 1;
    }
    this.radioOptions = this.index;
  }

}
