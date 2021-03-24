import { Component, OnInit, Input } from '@angular/core';
import * as Donnee from '../../donnee';

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
  index: number = 0;
  faitsMarquants: any;
  radioOptions: number = 0;
  longer:number =0
  constructor() { }

  ngOnInit(): void {
    this.faitsMarquants = Donnee.faitsMarquants;
    this.longer = Object.keys(this.faitsMarquants).length;
  }

  clickMessage (index:number) {
    if(index == this.longer -1){
      this.index = 0;
    }else{
      this.index = index + 1;
    }
    this.radioOptions = this.faitsMarquants[this.index].id;
  }
  clickRadio (index:number){
    this.index = index;
  }

}
