import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {

  totalSum: number;

  constructor(private route: ActivatedRoute) { 
    this.totalSum = + this.route.snapshot.params["id"];
  }

  ngOnInit() {
  }

}
