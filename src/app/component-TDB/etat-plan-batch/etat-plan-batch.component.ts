import { Component, OnInit, Input } from '@angular/core';
import * as Donnee from '../../donnee';

@Component({
  selector: 'app-etat-plan-batch',
  templateUrl: './etat-plan-batch.component.html',
  styleUrls: ['../TDB-component.scss']
})
export class EtatPlanBatchComponent implements OnInit {

  @Input() metier?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
