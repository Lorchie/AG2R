import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPasswordComponent } from '../dialog-password/dialog-password.component';
import { Metier } from '../interfaces/metier';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menu?: string;


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openPasswordDialog(){
    this.dialog.open(DialogPasswordComponent, {
      height:'250px',
      width: '300px'
    });

  }

}
