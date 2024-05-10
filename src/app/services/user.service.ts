import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginObject } from '../models/LoginObject';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  basepath: string = 'http://localhost:8080';

  constructor(protected http : HttpClient) {

  }

  public fetchUserProfile(loginDetails : LoginObject) : Observable<LoginObject> {
    return this.fetchUserProfileHttpInfo(loginDetails);
  }

  private fetchUserProfileHttpInfo(loginDetails: LoginObject): Observable<any> {
    const url = this.basepath +"/company/login";
    const headers = new HttpHeaders();
    let params = new HttpParams();

    const requestOptions = {
      body : loginDetails,
      headers,
      params
    }
    return this.http.request('POST',url,requestOptions);
  } 
  public userRegistration(userObject : User): Observable<User> {
    return this.userRegistrationHttpInfo(userObject);
  }

  private userRegistrationHttpInfo(userObject : User) : Observable<any> {
    const url = this.basepath + "/company/add";
    const headers = new HttpHeaders();
    let params = new HttpParams();

    const requestOptions = {
      body : userObject,
      headers,
      params
    }
    return this.http.request('POST', url, requestOptions);
  }
}
