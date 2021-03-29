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
  zoom: string = "";
  zoomBool: boolean = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route
    .data
    .subscribe(v => this.metier = v.metier);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  funcZoom(t:any){
    this.zoomBool = t.bool;
    this.zoom = t.type;
  }

}
