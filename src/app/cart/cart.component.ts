import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems = [
    // Sample cart items
    { name: 'Product 1', price: 100 },
    { name: 'Product 2', price: 200 }
  ];
}
