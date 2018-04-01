import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model';

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  orders : Array<Order> = [new Order('HUMMER', 10, 20),  new Order('NAILS', 10, 20),  new Order('PLANK', 10, 20)];

  constructor() { 
  }

  ngOnInit() {
  }

  GetSummary() : number{
    let summary : number = 0;

    for(let i = 0; i < this.orders.length; i++)
    {
      let order = this.orders[i];
      summary += order.GetTotal(); 
    }

    return summary;
  }
}
