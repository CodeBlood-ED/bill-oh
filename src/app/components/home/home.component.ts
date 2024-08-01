import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  headers: string[] = [];
  constructor(){
    this.headers=['Product','MRP','Qty','Price']
  }
}
