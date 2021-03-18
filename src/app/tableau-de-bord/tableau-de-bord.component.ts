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
  //metier: Metier;
  sub: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route
    .data
    .subscribe(v => console.log(v));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
