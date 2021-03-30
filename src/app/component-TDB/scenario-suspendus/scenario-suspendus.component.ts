import { Component, OnInit, Input } from '@angular/core';
import { ApiCallService } from '../../api-call.service';

@Component({
  selector: 'app-scenario-suspendus',
  templateUrl: './scenario-suspendus.component.html',
  styleUrls: ['../TDB-component.scss']
})
export class ScenarioSuspendusComponent implements OnInit {

  nb: any;
  @Input() metier?: string;

  constructor(private api: ApiCallService) { }

  ngOnInit(): void {
    if (this.metier){
      this.api.getSuspendedScenarios(this.metier).toPromise()
      .then((res) => {
        if (res instanceof Array){
          this.nb = res[0].nbrScenario;
        }
      })
      .catch();
    }
    if (!this.nb){
      this.nb = '0';
    }
  }

}
