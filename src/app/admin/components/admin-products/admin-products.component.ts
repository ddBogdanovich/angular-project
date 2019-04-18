import { Product } from 'shared/models/product';
import { ProductService } from 'shared/services/product.service';
import { RouterModule } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataTableResource } from 'angular5-data-table';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy  {
  products;
  subscription: Subscription;
  tableResocurce: DataTableResource<any>;
  items: any[] = [];
  itemsCount: number;

  constructor(private productService: ProductService) { 
    this.subscription = productService.getAll().subscribe(products => {
        this.products = products
        this.initializeTable(products);
      });
  }

  private initializeTable(products){
    this.tableResocurce = new DataTableResource(products);
    this.tableResocurce.query({offset: 0}).then(items => this.items = items);
    this.tableResocurce.count().then(count => this.itemsCount = count);
  }

  reloadItems(params){
    if(!this.tableResocurce) return;
    this.tableResocurce.query(params).then(items => this.items = items);
  }


  filter(query: string){
    let filteredProducts = (query) ? this.products.filter(p => p.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) : this.products;
    this.initializeTable(filteredProducts);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
