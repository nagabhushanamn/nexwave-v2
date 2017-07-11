import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopIT';
  cart: Array<any> = [];

  addToCart(event) {
    this.cart.push(event.item)
  }

  products: Array<any> = [
    {
      id: 1,
      name: 'Laptop',
      price: 192000,
      discount: 1000,
      description: 'New Mac pro',
      canBuy: true,
      image: 'images/Laptop.png',
      makeDate: Date.now(),
      reviews:[
        {stars:5,author:'nag@gmail.com',body:'Good product'},
        {stars:3,author:'indu@gmail.com',body:'costly product'}
      ]
    },
    {
      id: 2,
      name: 'Mobile',
      price: 19000,
      description: 'New mobile',
      canBuy: true,
      image: 'images/Mobile.png',
      makeDate: Date.now(),
       reviews:[
        {stars:5,author:'nag@gmail.com',body:'Good product'},
        {stars:3,author:'indu@gmail.com',body:'costly product'}
      ]
    }
  ]




}
