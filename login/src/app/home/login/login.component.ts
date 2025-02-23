import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['',
        [Validators.required,
          Validators.email]],
      password: ['',
        [Validators.required,
          Validators.minLength(8)]]
    });
  }

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Login Successful', this.loginForm.value);
      alert('Login Successful');
    } else {
      console.log('Invalid login Form');
    }
  }

  }
