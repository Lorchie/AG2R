import { Component, OnInit, Input } from '@angular/core';
import * as Donnee from '../../donnee';

@Component({
  selector: 'app-faits-marquants',
  templateUrl: './faits-marquants.component.html',
  styleUrls: ['../TDB-component.scss']
})
export class FaitsMarquantsComponent implements OnInit {

  @Input() metier?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
