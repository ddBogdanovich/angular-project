import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) {}

  create(product) {
    this.db.list('/products').push(product); 
  }

  getAll() {
    return this.db.list('/products').snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() 
      }));
    });
   } 

   get(productId){ 
    return this.db.object('/products/' + productId).snapshotChanges().map(res => {
      return { key: res.payload.key, ...res.payload.val() };
    });;
   }

   update(productId, product){
     return this.db.object('/products/' + productId).update(product);
   }

   delete(productId){
     return this.db.object('/products/' + productId).remove();
   }

}
