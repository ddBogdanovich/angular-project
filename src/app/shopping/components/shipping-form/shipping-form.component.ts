import { Order } from 'shared/models/order';
import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { OrderService } from 'shared/services/order.service';


@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  
  @Input('cart') cart: ShoppingCart;
  shipping = {} as Shipping; 
  userSubscription: Subscription;
  userId: string;
  
  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService) {}

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() { 
    this.userSubscription.unsubscribe();
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.palceOrder(order);
    this.router.navigate(['/order-success', result.key]);
  }    
}


export interface Shipping{
  addressLine2: string;
  addressLine1: string;
  city: string;
  name: string;
}
