import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Metier } from '../interfaces/metier';

@Component({
  selector: 'app-tableau-de-bord',
  host: {
    class:'col container'
  },
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.scss']
})
export class TableauDeBordComponent implements OnInit {
  metier: string ="";
  sub: any;
  zoomBatch: boolean =false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route
    .data
    .subscribe(v => this.metier = v.metier);

    console.log(this.metier);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  countChangedHandler(t:boolean){
    this.zoomBatch = t;
  }

}
