import { Component, OnInit, HostBinding } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef} from '@angular/material/dialog';
import { ApiCallService } from '../api-call.service';

export class Role{
  role:string ="";
  message:string="";
}

@Component({
  selector: 'app-dialog-password',
  templateUrl: './dialog-password.component.html',
  styleUrls: ['./dialog-password.component.scss']
})
export class DialogPasswordComponent implements OnInit {

  role:Role ={
    role:"",
    message:""
  };

  passWordVal: any ="";

  roleToCheck: string = "";
  messageToCheck: string = "";



  falsePaswordMessage = 'Le mot de passe est incorrecte';

  setMessageError = false;

  passwordOk = false;

  constructor(private router: Router, private fb: FormBuilder, public dialogRef: MatDialogRef<DialogPasswordComponent>, 
    private api: ApiCallService) { }

  ngOnInit(): void {
  
  }

 

  validate(ac: AbstractControl): {[key: string]: any} | null {
    const password: string = ac.value.password;
    if (this.passwordOk){
      return{invalid: true};
    }
    return null;
  }

  checkPassword(): void {
    
      this.api.checkpassword(this.passWordVal).toPromise()
      .then((res) => {
          this.role = res as Role;
   
            this.roleToCheck = this.role.role;
            this.messageToCheck = this.role.message;

            if(this.roleToCheck != 'error'){
              this.passwordOk = true;
              localStorage.setItem('passwordAG2R',this.passWordVal )
              this.dialogRef.close();
            }else{
              this.passwordOk = false;
              this.setMessageError = true
            }
          

        })
      .catch();

  
    this.router.navigate(['/saisie-manuelle-component']);
      
  }

  closeDialog(): void {
    this.dialogRef.close();
    this.router.navigate(['/accueil-component']);
  }

  validateLength() { return this.passWordVal.length < 1; }



}
