import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Metier } from '../interfaces/metier';

@Component({
  selector: 'app-tableau-de-bord',
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.scss']
})

export class TableauDeBordComponent implements OnInit, OnDestroy {

  @HostBinding('class') classes  = 'col container' ;
  metier?: Metier;
  sub: any;
  zoom = '';
  zoomBool = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route
    .data
    .subscribe(v => this.metier = v as Metier);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  funcZoom(t: any): void{
    this.zoomBool = t.bool;
    this.zoom = t.type;
  }
}
