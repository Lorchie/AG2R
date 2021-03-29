import { Component, OnInit, Input } from '@angular/core';
import { Metier } from '../interfaces/metier';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menu?: string;
  

  constructor() { }

  ngOnInit(): void {
  }

}
