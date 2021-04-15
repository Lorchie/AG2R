import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPasswordComponent } from '../dialog-password/dialog-password.component';

@Component({
  selector: 'app-saisie-manuelle',
  templateUrl: './saisie-manuelle.component.html',
  styleUrls: ['./saisie-manuelle.component.scss']
})
export class SaisieManuelleComponent implements OnInit {

  public metierArray: Array<{id: number, titre: string, code: string, typeMessage: string}> = [
    {id: 0, titre: 'Accueil', code: 'accueil', typeMessage: 'Accueil'},
    {id: 1, titre: 'Clients, Distribution & Digital', code: 'CDD', typeMessage: 'Faits Marquants'},
    {id: 2, titre: 'Epargne et Retraite Supplémentaire', code: 'ERS', typeMessage: 'Faits Marquants'},
    {id: 3, titre: 'Prévoyance Santé', code: 'PS', typeMessage: 'Faits Marquants'},
    {id: 4, titre: 'Retraite Complémentaire & Action Sociale', code: 'RCAS', typeMessage: 'Faits Marquants'},
    {id: 5, titre: 'Finance, RH & autres Fonction Support', code: 'FRFS', typeMessage: 'Faits Marquants'},
  ];

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
