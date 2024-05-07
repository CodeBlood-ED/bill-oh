import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

constructor(private route:Router){}

  showLoginComponent: boolean = false;
  showSignupComponent: boolean = false;

  showLogin() {
    this.showLoginComponent = true;
    this.showSignupComponent = false;
  }

  showSignup() {
    this.showSignupComponent = true;
    this.showLoginComponent = false;
  }
}
