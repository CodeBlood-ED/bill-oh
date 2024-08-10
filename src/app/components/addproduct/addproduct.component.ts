import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

}
