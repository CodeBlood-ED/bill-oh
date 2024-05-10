import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  loggedIn = false;

  public setFlagForLogin(flag:boolean) {
    this.loggedIn = flag;
  }

  public getFlagForLogin() :boolean {
    return this.loggedIn;
  }
}
