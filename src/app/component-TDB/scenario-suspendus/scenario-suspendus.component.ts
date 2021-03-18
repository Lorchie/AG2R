import { Component, OnInit, Input } from '@angular/core';
import * as Donnee from '../../donnee';

@Component({
  selector: 'app-scenario-suspendus',
  templateUrl: './scenario-suspendus.component.html',
  styleUrls: ['../TDB-component.scss']
})
export class ScenarioSuspendusComponent implements OnInit {

  @Input() metier?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
