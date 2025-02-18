import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  loginSuccess = false;

  constructor(
    private fb: FormBuilder
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

  onSubmit() {
    this.loginSuccess = true;
    }
  }
