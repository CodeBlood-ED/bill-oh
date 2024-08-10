import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

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
  private getSearchedProductsHttpInfo(productCode: string): Observable<any> {
    const url = this.basepath + '/getSearchedProduct';
    let params = new HttpParams();
    params = params.append("productCode", productCode);
    const requestOptions = {
      params
    }
    return this.http.request('POST', url, requestOptions);
  }
  public updateProductDetails(productDetails: FormGroup) : Observable<any> {
    return this.updateProductDetailsHttpInfo(productDetails);
  }
  private updateProductDetailsHttpInfo(productDetails: FormGroup){
    const url = this.basepath + '/updateProduct';

    let params = new HttpParams();
    params = params.append("productCode", productDetails.value.productCode);
    params = params.append("productDescription", productDetails.value.productDescription);
    params = params.append("productMrp", productDetails.value.productMrp);
    params = params.append("productPrice", productDetails.value.productPrice);

    console.log(params);

    const requestOptions = {
      params
    }

    return this.http.request('PUT', url, requestOptions);
  }

  public addProductInDb(productDetails: FormGroup) : Observable<any>{
    return this.addProductInDbHttpInfo(productDetails);
  }
  addProductInDbHttpInfo(productDetails: FormGroup<any>) {
    const url = this.basepath + '/addProduct';

    let params = new HttpParams();
    params = params.append("productCode", productDetails.value.productCode);
    params = params.append("productDescription", productDetails.value.productDescription);
    params = params.append("productMrp", productDetails.value.productMrp);
    params = params.append("productPrice", productDetails.value.productPrice);

    console.log(params);

    const requestOptions = {
      params
    }

    return this.http.request('POST', url, requestOptions);
  }
}
