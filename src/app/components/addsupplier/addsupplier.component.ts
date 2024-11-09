import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { COMMON_CONSTANTS } from 'src/app/constants/common-constants';
import { Supplier } from 'src/app/models/Supplier';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addsupplier',
  templateUrl: './addsupplier.component.html',
  styleUrls: ['./addsupplier.component.css'],
})
export class AddsupplierComponent {
  supplierGST = '';
  globalMessage = '';
  supplierDetails = new Supplier();

  supplierForm = new FormGroup({
    supplierName: new FormControl(),
    supplierAddress: new FormControl(),
    supplierContact: new FormControl(),
    supplierGST: new FormControl('', [
      Validators.required,
      Validators.minLength(15),
    ]),
  });

  constructor(private productService: ProductService) {}

  addSupplier() {
    this.supplierDetails = this.supplierForm.value as Supplier;
    this.productService
      .addSupplierInDb(this.supplierDetails)
      .subscribe((data: Supplier) => {
        if (data) {
          this.globalMessage = COMMON_CONSTANTS.MESSAGES.PRODUCT_ADDED;
        }
      });
  }
}
