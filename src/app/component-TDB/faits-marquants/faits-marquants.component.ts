import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ApiCallService } from '../../API/api-call.service';
import { Metier } from '../../interfaces/metier';

@Component({
  selector: 'app-faits-marquants',
  templateUrl: './faits-marquants.component.html',
  styleUrls: ['../TDB-component.scss']
})
export class FaitsMarquantsComponent implements OnInit {

  @Input() metier?: Metier;
  index = 0;
  faitsMarquants: any;
  radioOptions = 0;
  longer = 0;

  constructor(private api: ApiCallService) { }

  @HostBinding('class') classes  = 'divFaitsMarquand' ;

  ngOnInit(): void {
    if (this.metier){
      this.api.getMessages(this.metier.code).toPromise()
      .then((res: any) => {
          if (res instanceof Array){
            this.longer = res.length;
            res = res.map((element: any) => {
              element.libMessage = element.libMessage.replaceAll("\n", "<br/>");
              return element
            });
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
