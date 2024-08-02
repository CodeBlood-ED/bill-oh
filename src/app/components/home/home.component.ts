import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { product } from 'src/app/models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  headers: string[] = [];
  products: product[] = [];
  total: string = '0.0';

  constructor(private productService: ProductService) {
    this.headers = ['Product', 'MRP', 'Qty', 'Price'];
  }
  //  Search event triggered
  onSearch(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    if(event.key === "Enter") {
      this.searchProduct(input.value);
    }
  }
  //  For product search
  searchProduct(productCode: string) {
    this.productService.getSearchedProducts(productCode).subscribe((data:product)=>{
      return this.products.push(data);
    }) 
  }
}
