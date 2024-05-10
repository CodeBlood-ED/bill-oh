import { Component, EventEmitter, Output } from '@angular/core';
import { LoginObject } from 'src/app/models/LoginObject';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //  variables
  showSignupComponent:boolean=false;
  user = [];
  email = "";
  password = "";
  loginDetails = new LoginObject();
  
  //  FormGroup Declaration
  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),
  })
  
  public constructor(
    private UserService: UserService,
    public route: Router,
    public commonService:CommonService
  ){

  }
  
  routeToSignupComponent(){
    this.showSignupComponent=true;
    this.route.navigate([{ outlets: { SignupPage: ['signup'] } }]);
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.loginDetails = this.loginForm.value as LoginObject;
    //this.userSignIn(this.loginDetails);
    this.commonService.setFlagForLogin(true);
    this.route.navigate([{ outlets: { HomePage: ['home'] } }]);
  }

  userSignIn(loginDetails : LoginObject){
    this.UserService.fetchUserProfile(loginDetails).subscribe((data:any)=>{
      console.log("Submit working");
    })
  }
}
