import { Component, EventEmitter, Output } from '@angular/core';
import { LoginObject } from 'src/app/models/LoginObject';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  //  variables
  showSignupComponent: boolean = false;
  user = [];
  email = '';
  password = '';

  showlogin = false;
  showsignup = false;

  //  FormGroup Declaration
  loginForm = new FormGroup({
    customerEmail: new FormControl('', Validators.required),
    customerPwd: new FormControl('', Validators.required),
  });

  public constructor(
    private UserService: UserService,
    public route: Router,
    public commonService: CommonService
  ) {}

  onSubmit() {
    console.log(this.loginForm.value);
    const userEmail : string = this.loginForm.get('customerEmail')?.value ?? '';
    const userPwd : string = this.loginForm.get('customerPwd')?.value ?? '';
    this.UserService.fetchUserProfile(userEmail,userPwd).subscribe((data) => {
      this.route.navigate(['/home']);
    });
  }

  userSignIn() {}
}
