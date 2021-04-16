import { Component, OnInit, Input } from '@angular/core';
import { ApiDonneService } from '../../API/api-donne.service';
import { Metier } from '../../interfaces/metier';

@Component({
  selector: 'app-scenario-suspendus',
  templateUrl: './scenario-suspendus.component.html',
  styleUrls: ['../TDB-component.scss']
})
export class ScenarioSuspendusComponent implements OnInit {

  nb: any;
  @Input() metier?: Metier;

  constructor(private api: ApiDonneService) { }

  ngOnInit(): void {
    if (this.metier){
      this.api.getDonneeSuspendedScenarios(this.metier.code).toPromise()
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
