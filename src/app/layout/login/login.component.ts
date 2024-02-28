import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;

  constructor(private fb: FormBuilder,) { 

    this.LoginForm = this.fb.group({
      email: ['',[ Validators.required,Validators.email]],
      password: ['', Validators.required],
    });
  
  }

  ngOnInit(): void {
  }

  ValidationCorreo() {
    return this.LoginForm.controls['email'].hasError('email')
      ? 'No es un correo electrónico válido'
      : '';
  }

  Login(){
    console.log(this.LoginForm);
    
  }

}
