import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  addProductsForm = new FormGroup({
    productCode: new FormControl(),
    productDescription : new FormControl(),
    productMrp : new FormControl(),
    productPrice : new FormControl()
  })

  constructor(private productService: ProductService){}

  addProduct(formData: FormGroup){
    this.productService.addProductInDb(formData).subscribe((data: product)=>{
      
    });
  }

}
