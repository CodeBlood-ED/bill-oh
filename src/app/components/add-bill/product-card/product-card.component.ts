import { Component } from '@angular/core';
import { Supplier } from 'src/app/models/Supplier';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  suppliers = new Array<Supplier>();
  product_code: any;

  constructor(private productService: ProductService) {}

  //Method declarations
  onProductCodeInput() {
    if (this.product_code) {
      this.suppliers = this.retrieveSuppliersForProductCode(this.product_code);
    }
  }
  retrieveSuppliersForProductCode(product_code: string): any {
    this.productService
      .retrieveSuppliersForProductCode(product_code)
      .subscribe((data: Supplier[]) => {
        return data;
      });
  }
}
