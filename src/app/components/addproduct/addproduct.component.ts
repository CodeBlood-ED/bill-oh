import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { COMMON_CONSTANTS } from 'src/app/constants/common-constants';
import { product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddproductComponent {
  globalMessage='';

  addProductsForm = new FormGroup({
    productCode: new FormControl(),
    productDescription : new FormControl(),
    productMrp : new FormControl(),
    productPrice : new FormControl()
  })

  constructor(private productService: ProductService){}

  addProduct(formData: FormGroup){
    this.productService.addProductInDb(formData).subscribe((data: product)=>{
      if(data){
        this.globalMessage = COMMON_CONSTANTS.MESSAGES.PRODUCT_ADDED;
      }
    });
  }

}
