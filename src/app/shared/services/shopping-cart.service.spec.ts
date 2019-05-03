// import { ShoppingCartItem } from './../models/shopping-cart-item';
// import { PathReference, AngularFireDatabase } from "angularfire2/database";
// import { TestBed } from '@angular/core/testing';
// import { ShoppingCartService } from 'shared/services/shopping-cart.service';
// import {Observable} from 'rxjs/Observable';
// import { ShoppingCart } from 'shared/models/shopping-cart';


// class AngularFireDatabaseStub {
//     app: AngularFireAppStub = new AngularFireAppStub;
//     angularFireObject: AngularFireObjectStub;


//     constructor(angularFireObject: AngularFireObjectStub) {
//         this.angularFireObject = angularFireObject;
//      }

//      object(pathOrRef: PathReference): AngularFireObjectStub {
//          return this.angularFireObject;
//      }
// }

// class AngularFireAppStub {
//     storage() {}
// }

// class AngularFireObjectStub {
//     set() {}
//     valueChanges() {}
//     update() {}
// }


// describe('ShoppingCartService', () => {

//     const angularFireObject: AngularFireObjectStub = new AngularFireObjectStub();
//     const mockAngularFireDatabase: AngularFireDatabaseStub = new AngularFireDatabaseStub(angularFireObject);
//     let shoppingCartService: ShoppingCartService;


//     beforeEach(() => {
//         TestBed.configureTestingModule({
//         providers: [
//             {provide: AngularFireDatabase, useValue: mockAngularFireDatabase},
//             {provide: ShoppingCartService, useClass: ShoppingCartService}
//         ]
//     });
//     shoppingCartService = TestBed.get(ShoppingCartService);
// });

  
//     it('should get shopping cart', () => {
//         let shoppingCartItem = new ShoppingCartItem();
//         var array:ShoppingCartItem[] = new Array(1);
//         array.push(shoppingCartItem);
//         var shoppingCart = new ShoppingCart(array);

//         spyOn(angularFireObject, 'valueChanges').and.returnValue(Observable.of(shoppingCart));
//         shoppingCartService.getCart();
//         expect(angularFireObject.valueChanges).toHaveBeenCalled();
//     });
//   });
