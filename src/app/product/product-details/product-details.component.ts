import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Product } from '../product.model';
import { ProductCommunicatorService } from '../product-communicator.service';
import { UnitPipe } from '../../pipes/unit.pipe';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [UnitPipe]
})
export class ProductDetailsComponent implements OnInit {

  currentProduct : Product;
  currentProductAmount : string;
  totalProductAmount : number;

  private subscription : Subscription

  constructor(private communicatorService: ProductCommunicatorService, private unitPipe : UnitPipe)
  {    
  }

  AddProductToCart() : void{

  }

  ngOnInit() {
    this.subscription = this.communicatorService.channel$.subscribe(
      data => this.Bind(data));    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  Bind(currProd: Product) : void
  {
    this.currentProduct = currProd;
    this.currentProductAmount = this.unitPipe.transform(this.currentProduct.Count);
  }
}
