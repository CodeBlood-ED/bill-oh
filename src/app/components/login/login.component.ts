import { Component } from '@angular/core';
import { LoginObject } from 'src/app/models/LoginObject';
import { UserloginService } from 'src/app/services/userlogin.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  showSignupComponent:boolean=false;
  user = [];
  email = "";
  password = "";
  loginDetails = new LoginObject();

  public constructor(private userLoginService: UserloginService){}

  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),
  })

  routeToSignupComponent(){
    this.showSignupComponent = true;
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.loginDetails = this.loginForm.value as LoginObject;
    this.userSignIn(this.loginDetails);
  }

  userSignIn(loginDetails : LoginObject){
    this.userLoginService.fetchUserProfile(loginDetails).subscribe((data:any)=>{
      console.log("Submit working");
    })
  }
}
