import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { product } from 'src/app/models/product';
import { COMMON_CONSTANTS } from 'src/app/constants/common-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  headers: string[] = [];
  products = new Array<product>();
  total: number;
  COMMON_CONSTANTS = COMMON_CONSTANTS;

  currentComponent: string = COMMON_CONSTANTS.VARIABLE_CONSTANTS.ADD_PRODUCTS;
  @ViewChild('search') search!: ElementRef;

  constructor(private productService: ProductService) {
    this.headers = ['Product', 'MRP', 'Qty', 'Price'];
    this.total = 0;
  }

  // onSearch(event: Event) {
  //   const input = event.target as HTMLInputElement;
  //   const inputLength = input.value.length;
  //   if (
  //     inputLength > 7 &&
  //     !this.products.find(
  //       (eachProduct) => eachProduct.productCode === input.value
  //     )
  //   ) {
  //     this.searchProduct(input.value);
  //   } else {
  //     // If the product exists, increment the quantity
  //     this.products = this.products.map((eachProduct) => {
  //       if (eachProduct.productCode === input.value) {
  //         return {
  //           ...eachProduct,
  //           productQuantity: eachProduct.productQuantity + 1,
  //         }; 
  //       } else {
  //         return eachProduct;
  //       }
  //     });
  //     this.search.nativeElement.value = '';
  //   }
  // }
  //  For product search
  searchProduct(productCode: string) {
    this.productService
      .getSearchedProducts(productCode)
      .subscribe((data: product) => {
        this.products.push(data);
        this.total += data.productPrice;
        this.search.nativeElement.value = '';
      });
  }

  navigateTo(componentName: string) {
    this.currentComponent = componentName;
  }
  getTableHeader(index: number): string {
    if (index === 0) {
      return 'description-header';
    } else {
      return '';
    }
  }

  incQty() {}
  decQty() {}
}
