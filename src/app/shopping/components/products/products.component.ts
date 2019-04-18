import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCartItem } from 'shared/models/shopping-cart-item';
import { ProductService } from 'shared/services/product.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit  {

  products: any[] = [];
  filteredProducts: any[] = [];
  category: string;
  cart$: Observable<ShoppingCart>;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService, 
    private shoppingCartService: ShoppingCartService) {}

  async ngOnInit () {
    let cart = await this.shoppingCartService.getCart();
    this.cart$ = cart.valueChanges().map(x => new ShoppingCart(x.items as {[key: number]: ShoppingCartItem}));  
    this.populateProducts();         
  }

  private populateProducts() {
    this.productService
     .getAll()
     .switchMap(products => {    
      this.products = products;
      return this.route.queryParamMap;
    })
      .subscribe(params => {
        this.category = params.get('category'); 
        this.applyFilter();       
     })   
  }

  private applyFilter() {
    this.filteredProducts = (this.category) ?
    this.products.filter(p => p.category === this.category) :
    this.products;
  }

}



