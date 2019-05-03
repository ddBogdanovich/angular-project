// import { AngularFireObject } from 'angularfire2/database';
// import { ShoppingCart } from 'shared/models/shopping-cart';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/observable/from';
// import { of } from 'rxjs';
// import 'rxjs/add/observable/of'
// import { async, fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';
// import { ShoppingCartComponent } from './shopping-cart.component';
// import {} from 'jasmine';
// import { ShoppingCartService } from 'shared/services/shopping-cart.service';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { ShoppingCartItem } from 'shared/models/shopping-cart-item';


// class ShoppingCartServiceStub {
//   getCart() {}
// }


// describe('ShoppingCartComponent', () => {
//   let component: ShoppingCartComponent;
//   let fixture: ComponentFixture<ShoppingCartComponent>;


//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ ShoppingCartComponent ],
//       providers: [
//         {provide: ShoppingCartService, useClass: ShoppingCartServiceStub}
//       ],
//       schemas: [NO_ERRORS_SCHEMA]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {

//     fixture = TestBed.createComponent(ShoppingCartComponent);
//     component = fixture.componentInstance;
  
//   });


//   it('should load cart from the server', fakeAsync(() => {
//     //let clearButton = fixture.debugElement.query(By.css('btn btn-light btn-sm'));
//     //clearButton.triggerEventHandler('click', null);

//     let service = TestBed.get(ShoppingCartService);

//     let shoppingCartItem = new ShoppingCartItem();
//     var array:ShoppingCartItem[] = new Array(1);
//     array.push(shoppingCartItem);
//     var shoppingCart = new ShoppingCart(array);
//   //  var fire: AngularFireObject<ShoppingCart> = new 

//     spyOn(service, 'getCart').and.returnValue(Observable.of(shoppingCart));
//     fixture.detectChanges();

//       tick();
//       console.log(component.cart$);
//       let count: number;
//       component.cart$.subscribe(x => count = x.items.length);
//       expect(count).toBe(1);

//   }));

// });
