import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Supplier } from '../models/Supplier';
import { product } from '../models/product';

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

  public addSupplierInDb(supplierDetails: Supplier) : Observable<any>{
    return this.addSupplierInDbHttpInfo(supplierDetails);
  }
  addSupplierInDbHttpInfo(supplierDetails: Supplier) {
    const url = this.basepath + '/supplier/registersupplier';

    let params = new HttpParams();
    params = params.append("supplierName", supplierDetails.supplierName);
    params = params.append("supplierAddress", supplierDetails.supplierAddress);
    params = params.append("supplierContact", supplierDetails.supplierContact);
    params = params.append("supplierGST", supplierDetails.supplierGST );

    console.log(params);

    const requestOptions = {
      params
    }

    return this.http.request('POST', url, requestOptions);
  }
  public addProductInDb(productDetails: product) : Observable<any>{
    return this.addProductInDbHttpInfo(productDetails);
  }
  addProductInDbHttpInfo(productDetails: product) {
    const url = this.basepath + '/addProduct';

    let params = new HttpParams();
    params = params.append("productCode", productDetails.productCode);
    params = params.append("productDescription", productDetails.productDescription);
    params = params.append("productMrp", productDetails.productMrp);
    params = params.append("productPrice", productDetails.productPrice);

    console.log(params);

    const requestOptions = {
      params
    }

    return this.http.request('POST', url, requestOptions);
  }
}
