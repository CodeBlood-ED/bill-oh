import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { product } from 'src/app/models/product';
import { COMMON_CONSTANTS } from 'src/app/constants/common-constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  headers: string[] = [];
  products: product[] = [];
  total: number;
  COMMON_CONSTANTS = COMMON_CONSTANTS;

  currentComponent: string = COMMON_CONSTANTS.VARIABLE_CONSTANTS.ADD_PRODUCTS;

  constructor(private productService: ProductService, private router: Router) {
    this.headers = ['Product', 'MRP', 'Qty', 'Price'];
    this.total = 0;
  }
  //  Search event triggered
  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    const inputLength = input.value.length;
    if (inputLength > 7) {
      this.searchProduct(input.value);
    }
  }
  //  For product search
  searchProduct(productCode: string) {
    this.productService
      .getSearchedProducts(productCode)
      .subscribe((data: product) => {
        this.products.push(data);
        this.total += data.productPrice;
      });
  }

  navigateTo(componentName: string) {
    this.currentComponent = componentName;
  }

  
}
