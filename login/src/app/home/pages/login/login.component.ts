import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', 
      [Validators.required, Validators.email]),
    password: new FormControl('', 
      [Validators.required])
  })

  constructor(private userService: UserService, private router: Router){}

  loginError: boolean = false;
  public onLogin() {

    console.log(this.loginForm.value)

    this.userService.userLogin(this.loginForm.value).subscribe({
      next: (data) => {
        if (data?.user) {
          this.router.navigate(['/home/dashboard']);
        }
      },
      error: () => {
        this.loginError = true;
      }
    });

    // const { email, password } = this.loginForm.value;
    // if(this.userService.login(email, password)){
    //   this.loginError = false;
    //   this.router.navigate(['/home/detail']);
    // } else {
    //   this.loginError = true;
    //   console.log('error');
    // }
  }

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
}
