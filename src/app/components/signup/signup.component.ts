import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  showLoginComponent : boolean = false;

  public constructor(public route:Router){

  }

  routeToLogin(){
    this.showLoginComponent = true;
  }
}
