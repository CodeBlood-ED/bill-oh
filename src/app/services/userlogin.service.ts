import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginObject } from '../models/LoginObject';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  
  basepath: string = 'http://localhost:8080';

  constructor(protected http : HttpClient) {

  }

  public fetchUserProfile(loginDetails : LoginObject) : Observable<LoginObject> {
    return this.fetchUserProfileHttpInfo(loginDetails);
  }
  fetchUserProfileHttpInfo(loginDetails: LoginObject): Observable<any> {
    const url = this.basepath+"/company/login";
    return this.http.post(url,loginDetails);
  } 
}
