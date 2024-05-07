import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginObject } from '../models/LoginObject';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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
    debugger;
    const url = this.basepath+"/company/login";
    const headers = new HttpHeaders();
    let params = new HttpParams();

    const requestOptions = {
      body : loginDetails,
      headers,
      params
    }
    return this.http.request('POST',url,requestOptions);
  } 
}
