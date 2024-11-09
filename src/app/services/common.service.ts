import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Supplier } from '../models/Supplier';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  basepath: string = "http://localhost:8080/supplier";

  constructor(private http : HttpClient) { }

  getSuppliers():Observable<any> {
    return this.retriveSuppliersFromDBHttpInfo();
  }
  retriveSuppliersFromDBHttpInfo(): Observable<Array<Supplier>> {
    const url = this.basepath + '/retrivesuppliersfromdatabase';
    let params = new HttpParams();
    const requestOptions = {
      params
    }
    return this.http.request<Array<Supplier>>('GET', url, requestOptions);
  }
  
}
