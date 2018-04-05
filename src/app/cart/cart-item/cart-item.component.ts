import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../order.model';
import { UnitPipe } from '../../pipes/unit.pipe';

import localeUk from '@angular/common/locales/uk';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeUk);

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() order : Order;

  constructor() { }

  ngOnInit() {
  }

}
