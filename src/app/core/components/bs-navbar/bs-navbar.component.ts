import { ShoppingCartItem } from 'shared/models/shopping-cart-item';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { AppUser } from 'shared/models/app-user';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;
  

  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) {}

  logout(){
    this.auth.logout();
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appuser => this.appUser = appuser);

    let cart = await this.shoppingCartService.getCart();  
    this.cart$ = cart.valueChanges().map(x => new ShoppingCart(x.items as {[key: number]: ShoppingCartItem}));   
  }

}
