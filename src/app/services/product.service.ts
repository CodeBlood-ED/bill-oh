import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  basepath: string = 'http://localhost:8080';

  constructor(protected http : HttpClient) {

  }

  public fetchProductDetails(productCode : string) : Observable<Product> {
    return this.fetchProductDetailsHttpInfo(productCode);
  }

  public fetchProductDetailsHttpInfo(productCode : string) : Observable<any> {

    const url = this.basepath + '/productdetails';
    let params = new HttpParams();
    params = params.append("productCode", productCode);

    const requestOptions = {
      params,
    }

    return this.http.request('POST', url, requestOptions);
  }
  
}
