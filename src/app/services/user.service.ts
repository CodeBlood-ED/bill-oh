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

  public fetchUserProfile(userEmail:string,userPwd:string) {
    return this.fetchUserProfileHttpInfo(userEmail,userPwd);
  }

  private fetchUserProfileHttpInfo(userEmail:string,userPwd:string) {
    const url = this.basepath +"/login";
    let headers = new HttpHeaders();
    let params = new HttpParams();

    const credentials = btoa(`$(userEmail):$(userPwd)`);

    headers= headers.append("Authorization",`Basic ${credentials}`)

    const requestOptions = {
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
