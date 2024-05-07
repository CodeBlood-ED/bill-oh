import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';
import { COMMON_CONSTANTS } from '../../constants/common-constants'
import { Product } from '../../models/product'

@Component({
  selector: 'app-bill-template',
  templateUrl: './bill-template.component.html',
  styleUrls: ['./bill-template.component.css']
})
export class BillTemplateComponent {

  productCode: any;
  productDetails = new Product();

  productDetailsSubscription: Subscription = new Subscription;

  constructor(private productService: ProductService){

  }

  fetchProductDetails() {
    this.productDetailsSubscription = this.productService.fetchProductDetails(this.productCode).subscribe((data : Product)=>{
        this.productDetails = data;
    })
  }
}
