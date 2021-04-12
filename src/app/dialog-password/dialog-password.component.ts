import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-password',
  templateUrl: './dialog-password.component.html',
  styleUrls: ['./dialog-password.component.scss']
})
export class DialogPasswordComponent implements OnInit {


  passwordForm: FormGroup = this.fb.group({});

  falsePaswordMessage: string = 'Le mot de passe est incorrecte';
  
  passwordNotOk: boolean = false;

  constructor(private router: Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initiateForm();
  }
  
  initiateForm(){
   this.passwordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(4)]]
    },
    {validator: Validators.compose([this.validate])});
  }

  validate(ac:AbstractControl): {[key: string]: any} | null {
    const password: string = ac.value.password;
    if(password.length < 5){
      return{invalid:true}
    }
    return null
  }

  checkPassword(): void {
   
      this.router.navigate(['/saisie-manuelle-component'])
  }

}
