import { ShoppingCart } from 'shared/models/shopping-cart';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCartItem } from 'shared/models/shopping-cart-item';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  cart$: Observable<ShoppingCart>;
  carr: ShoppingCart;
  constructor(private shoppingCartService: ShoppingCartService) { }

  async ngOnInit() {
    let cart = await this.shoppingCartService.getCart();
    this.cart$ = cart.valueChanges().map(x => new ShoppingCart(x.items as {[key: number]: ShoppingCartItem}));  
  }

}
