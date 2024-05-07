import { Component } from '@angular/core';
import { LoginObject } from 'src/app/models/LoginObject';
import { UserloginService } from 'src/app/services/userlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  showSignupComponent:boolean=false;
  user = [];
  loginDetails :any;

  public constructor(private userLoginService: UserloginService){}

  routeToSignupComponent(){
    this.showSignupComponent = true;
  }

  userSignIn(loginDetails : LoginObject){
    this.userLoginService.fetchUserProfile(loginDetails).subscribe((data:any)=>{
      console.log("Submit working");
    })
  }
}
