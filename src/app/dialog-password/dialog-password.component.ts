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

  roleToCheck: string = "";
  messageToCheck: string = "";

  passwordForm: FormGroup = this.fb.group({});

  falsePaswordMessage = 'Le mot de passe est incorrecte';

  passwordNotOk = false;

  constructor(private router: Router, private fb: FormBuilder, public dialogRef: MatDialogRef<DialogPasswordComponent>, 
    private api: ApiCallService) { }

  ngOnInit(): void {
    this.initiateForm();
  }

  initiateForm(): void{
   this.passwordForm = this.fb.group({
      password: ['', [Validators.required]]
    },
    {validator: this.validate});
  }

  validate(ac: AbstractControl): {[key: string]: any} | null {
    const password: string = ac.value.password;
    if (password.length < 5){
      return{invalid: true};
    }
    return null;
  }

  checkPassword(): void {

   // this.api.checkpassword2(this.passwordForm.value).subscribe((role:Role)=>{
   //   this.roleToCheck = role.role;
   //   this.messageToCheck = role.message;

   //   if(this.roleToCheck != 'error'){
   //     this.router.navigate(['/saisie-manuelle-component']);
   //   }else{

    //  }
    //}
     
   // );
  
    this.router.navigate(['/saisie-manuelle-component']);
      
  }

  closeDialog(): void {
    this.dialogRef.close();
    this.router.navigate(['/accueil-component']);
  }

}
