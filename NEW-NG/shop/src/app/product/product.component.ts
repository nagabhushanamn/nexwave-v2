import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  @Input()
  idx: any;

  @Input()
  product: any;

  @Output()
  buy=new EventEmitter();

  tab: number = 1;

  constructor() { }

  ngOnInit() {
  }


  onTabChange(idx: number, event: any) {
    event.preventDefault();
    this.tab = idx;
  }

  isTabSelected(idx: number) {
    return this.tab === idx;
  }

  onBuyClick() {
    this.buy.emit({item:this.product});
  }

}
