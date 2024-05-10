import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  
  private loggedIn = new BehaviorSubject<Boolean>(false);
  
  flag = this.loggedIn.asObservable();


  public setFlagForLogin(value:boolean) {
    this.loggedIn.next(value);
  }

}
