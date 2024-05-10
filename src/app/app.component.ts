import { Component , OnInit , AfterViewInit} from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'bill-oh';
  flag = false;
  constructor(public commonService: CommonService){

  }
  ngAfterViewInit(): void {
    this.flag = this.commonService.getFlagForLogin();
  }
  ngOnInit(): void {
  }

}
