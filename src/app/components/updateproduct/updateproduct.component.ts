import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent{
  
  productCode: string = "";
  productDescription: string = "";
  productMrp: string = "";
  productPrice: number = 0;
  
  
  updateProductsForm = new FormGroup({
    productCode: new FormControl(),
    productDescription : new FormControl(),
    productMrp : new FormControl(),
    productPrice : new FormControl()
  })

  constructor(private productService: ProductService){

  }
  // onSearch(event: Event) {
  //   const input = event.target as HTMLInputElement;
  //   if(input.value.length > 7) {
  //     this.productService.getSearchedProducts(this.productCode).subscribe((data: product)=>{
  //       this.productDescription=data.productDescription;
  //       this.productMrp=data.productMrp;
  //       this.productPrice=data.productPrice;
  //     })
  //   }
  // }
  updateProduct(formdata: FormGroup){
    this.productService.updateProductDetails(formdata).subscribe((data:any)=>{
      
    });
    console.log("Details updated");
  }
  
}
