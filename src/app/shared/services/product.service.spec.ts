import { ShoppingCartItem } from './../models/shopping-cart-item';
import { PathReference, AngularFireDatabase } from "angularfire2/database";
import { TestBed } from '@angular/core/testing';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import {Observable} from 'rxjs/Observable';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { ProductService } from './product.service';


class AngularFireDatabaseStub {
    app: AngularFireAppStub = new AngularFireAppStub;
    angularFireObject: AngularFireObjectStub;


    constructor(angularFireObject: AngularFireObjectStub) {
        this.angularFireObject = angularFireObject;
     }

     object(pathOrRef: PathReference): AngularFireObjectStub {
         return this.angularFireObject;
     }
}

class AngularFireAppStub {
    storage() {}
}

class AngularFireObjectStub {
    set() {}
    valueChanges() {}
    update() {}
    remove() {}
}


describe('ProductService', () => {

    const angularFireObject: AngularFireObjectStub = new AngularFireObjectStub();
    const mockAngularFireDatabase: AngularFireDatabaseStub = new AngularFireDatabaseStub(angularFireObject);
    let productService: ProductService;


    beforeEach(() => {
        TestBed.configureTestingModule({
        providers: [
            {provide: AngularFireDatabase, useValue: mockAngularFireDatabase},
            {provide: ProductService, useClass: ProductService}
        ]
    });
    productService = TestBed.get(ProductService);
});

  
    it('should update the product', () => {
        spyOn(angularFireObject, 'update');
        let product = {};
        productService.update(1, product);
        expect(angularFireObject.update).toHaveBeenCalled();
                      // let shoppingCartItem = new ShoppingCartItem();
        // var array:ShoppingCartItem[] = new Array(1);
        // array.push(shoppingCartItem);
        // var shoppingCart = new ShoppingCart(array);

        // spyOn(angularFireObject, 'valueChanges').and.returnValue(Observable.of(shoppingCart));
        // shoppingCartService.getCart();
        // expect(angularFireObject.valueChanges).toHaveBeenCalled();
    });

    it('should delete the product', () => {
        spyOn(angularFireObject, 'remove');
        productService.delete(1);
        expect(angularFireObject.remove).toHaveBeenCalled();
    })
  });
