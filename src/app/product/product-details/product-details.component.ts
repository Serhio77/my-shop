import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Product } from '../product.model';
import { ProductCommunicatorService } from '../product-communicator.service';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  currentProduct : Product;
  currentProductAmount : number;
  totalProductAmount : number;

  private subscription : Subscription

  constructor(private communicatorService: ProductCommunicatorService) { }

  AddProductToCart() : void{

  }

  ngOnInit() {
    this.subscription = this.communicatorService.channel$.subscribe(
      data => this.currentProduct = data);    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
