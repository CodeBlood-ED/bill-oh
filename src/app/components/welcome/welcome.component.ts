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
  showsignup = false;
  loginFlag = new Boolean();
  sFlag = new Boolean();

  constructor(private route: Router) {}

  ngOnInit(): void {
    
  }

  showLogin() {
    this.disablebuttons = true;
    this.showlogin = true;
    this.route.navigate(["/login"]);
  }

  showSignup() {
    this.disablebuttons = true;
    this.showsignup=true;
    this.route.navigate(["/signup"]);
  }
}
