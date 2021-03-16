import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  host: {
    class:'col'
  },
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  index: number = 0;
  

  messages: {messages:string,id:number}[] = [
    {"messages":"il est une fois ??.?.......","id":0},
    {"messages":"oui oefjihbfdhssdgudygstyfsfdghsghdsfsghdjdgfjhdgjhfvg gdh hdjhdsbjhds fugf fdsghfs gdsg fyugs gydsf ysgdsfg sdfd fsfd fssdfdcdsffc dsg dscfhdj hjf dhfj fh jhdfvhjfdhdjfb hjd bfhjd fvhjdfhjghdbd hbfddsbvgfvgdsvh v h sh vs hvf vhds b hfsbhdfvhsesdv hf sdbfdbhjdvsh h dh fshhjdsfvhdsfvvdfghdvghdsvsvgdsv s vg sdgd svgs dfgdsdsgdsvdsvghdsgdsv ghsdvghdsvghsvghsvghdsfvgefvg sdvgsdv ghsvghs vfghvhvdhsfdg sfvg vgdsv dsvgh fvghsdghdsvdshdhfvdfvdf hdvfscbdscvghfvdgvfdghvdgdbfhd vdfs vdsv fhvdf d vfghdvdg vd v dsvd  dsghjdsfgj dsfv dsd vghsf dvgfdv ghdsvhfj fdv sfvhgdsvgh dsfv ghdsv gh vghds vg dvdsvsvfdghsdsv gfhv gh svfgv gdsv fgh vdss vhddsfvsfhghj fhjshhjfsdb hfbhjsdbjhfvshdvhdfhdfbhshfj shfvshjvhjg dhj fhb hjdbhj dg jhfb dhjbdjhdjhvfjh vfhdghsvcghdvchgdvshjdsvhjvghdsvfghvds sghdgv hfggsdhfdsghvfsh hfsdvh vhsdv hfhf shdvfhshfsghfvghsghvdgdfguazertyuiopqsdfghjklmwxcvbnazertyuiopqsdfghjklmwxcvbnazertyuiopqsdfghjklmw","id":1},
    {"messages":"tttt","id":2}
  ];
  longer:any = Object.keys(this.messages).length;
  radioOptions: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  clickMessage (index:number) {
    if(index == this.longer -1){
      this.index = 0;
    }else{
      this.index = index + 1;
    }
    this.radioOptions = this.messages[this.index].id;
  }
  clickRadio (index:number){
    this.index = index;
  }
}
