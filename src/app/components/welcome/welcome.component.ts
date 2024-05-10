import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent{

  disablebuttons = false;
  showlogin = false;
  loginFlag = new Boolean();
  constructor(private route: Router, private commonService: CommonService) {}
  

  showLogin() {
    this.disablebuttons = true;
    this.showlogin = true;
    this.route.navigate([{ outlets: { LoginPage: ['login'] } }]);
  }

  showSignup() {
    this.disablebuttons = true;
    this.route.navigate([{ outlets: { SignupPage: ['signup'] } }]);
  }
}
