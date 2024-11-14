import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { COMMON_CONSTANTS } from 'src/app/constants/common-constants';
import { product } from 'src/app/models/product';
import { Supplier } from 'src/app/models/Supplier';
import { CommonService } from 'src/app/services/common.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AddproductComponent implements OnInit {
  globalMessage = '';

  addProductsForm = new FormGroup({
    supplierGST: new FormControl(),
    productCode: new FormControl(),
    productName: new FormControl(),
    productMrp: new FormControl(),
    productPrice: new FormControl(),
  });
  suppliers: Supplier[] = [];

  constructor(
    private productService: ProductService,
    private commonService: CommonService
  ) {}
  ngOnInit() {
    if (this.commonService.getSuppliersFromCache == null) {
      this.commonService.getSuppliers().subscribe((data: Array<Supplier>) => {
        this.commonService.setSuppliersForCache(data);
      });
    } else {
      this.suppliers = this.commonService.getSuppliersFromCache();
    }
  }

  addProduct() {
    this.productService
      .addProductInDb(this.addProductsForm.value as product)
      .subscribe((data: product) => {
        if (data) {
          this.globalMessage = COMMON_CONSTANTS.MESSAGES.PRODUCT_ADDED;
        }
      });
  }
}
