import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  basepath: string = 'http://localhost:8080';

  constructor(private http : HttpClient) {
  }

  public getSearchedProducts(productCode: string) : Observable<any>{
    return this.getSearchedProductsHttpInfo(productCode);
    // return this.http.get("assets/mocks/products.ts");
  }
  getSearchedProductsHttpInfo(productCode: string): Observable<any> {
    const url = this.basepath + '/getSearchedProduct';
    let params = new HttpParams();
    params = params.append("productCode", productCode);
    const requestOptions = {
      params
    }
    return this.http.request('POST', url, requestOptions);
  }
  
}
