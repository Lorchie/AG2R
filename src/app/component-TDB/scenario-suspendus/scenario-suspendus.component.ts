import { Component, OnInit, Input } from '@angular/core';
import * as Donnee from '../../donnee';

@Component({
  selector: 'app-scenario-suspendus',
  templateUrl: './scenario-suspendus.component.html',
  styleUrls: ['../TDB-component.scss']
})
export class ScenarioSuspendusComponent implements OnInit {

  nb: any;
  @Input() metier?: string;

  constructor() { }

  ngOnInit(): void {
    let nombre = Donnee.scenarioSuspendus.find(e => e.codeMetier === this.metier)?.nbrScenario?.toString();
    if(nombre){
      this.nb = nombre
    }else{
      this.nb ="0"
    }
  }

}
