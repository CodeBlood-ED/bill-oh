import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  disablebuttons = false;
  showlogin = false;
  loginFlag = new Boolean();
  constructor(private route: Router, private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.flag.subscribe((data) => {
      this.loginFlag = data;
      if (this.loginFlag) {
        this.route.navigate([{ outlets: { HomePage: ['home'] } }]);
      }
    });
  }

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
