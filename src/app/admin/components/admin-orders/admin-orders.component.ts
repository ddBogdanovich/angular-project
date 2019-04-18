import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent  {

// contactMethods = [
//   {id:1, name: 'Email'},
//   {id:2, name: 'Phone'}
// ]

// log(x) {
//   console.log(x);
// }

form = new FormGroup({
  username: new FormControl('', Validators.required ),
  password: new FormControl()
});

get username() {
  return this.form.get('username');
}

}
