import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartItem } from 'shared/models/shopping-cart-item';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart$;

  constructor(private shoppingCartService: ShoppingCartService) {}

  async ngOnInit() {
    let cart = await this.shoppingCartService.getCart();
    this.cart$ = cart.valueChanges().map(x => new ShoppingCart(x.items as {[key: number]: ShoppingCartItem}));
  }

  clearCart() {
    this.shoppingCartService.clearCart();
  }

}
