import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  // variable Declaration
  signUpSuccess=false;
  showLoginPage=false;
  userDetails = new User();

  // subscriptions
  userRegistrationSubscription = new Subscription();

  // sign-up FormGroup declaration
  signupForm = new FormGroup({
    firstname : new FormControl(),
    email : new FormControl(),
    password : new FormControl(),
    mobile : new FormControl()
  });

  public constructor(
      public route:Router,
      public userService : UserService
  ){}

  // methods
  routeToLogin(){
    this.showLoginPage=true;
    this.route.navigate([{ outlets: { LoginPage: ['login'] } }]);
  }

  formSubmit() {
    console.log(this.signupForm.value);
    this.userDetails = this.signupForm.value as User;
    this.newUserRegistration(this.userDetails);
  }

  newUserRegistration(userObject : User) {
    this.userRegistrationSubscription = this.userService.userRegistration(userObject).subscribe((data : any)=>{
      console.log("Submit working"); 
      this.signUpSuccess = true;
    });
    this.route.navigate(['/login']);
  }
}
