import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPasswordComponent } from '../dialog-password/dialog-password.component';

@Component({
  selector: 'app-saisie-manuelle',
  templateUrl: './saisie-manuelle.component.html',
  styleUrls: ['./saisie-manuelle.component.scss']
})
export class SaisieManuelleComponent implements OnInit {

  @HostBinding('class') classes  = 'col' ;

  chargementDonnee = true;

  passWord: any ;

  constructor(private dialog: MatDialog) {
    this.passWord = localStorage.getItem('passwordAG2R');
    if (this.passWord == null){
        this.dialog.open(DialogPasswordComponent, {
        width: '300px', disableClose: true,
        });
    }
  }

  ngOnInit(): void {
  }
}
