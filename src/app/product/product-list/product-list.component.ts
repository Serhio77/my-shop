import { Component, OnInit } from '@angular/core';

import { Product } from '../product.model';
import { ProductListService } from '../product-list.service';
import { ProductCommunicatorService } from '../product-communicator.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductsComponent implements OnInit {
    products: Array<Product>;
    public selectedProduct : Product;
    
   constructor(private productsService: ProductListService, private communicatorService: ProductCommunicatorService) { }

   onSelect(product : Product) : void
   {
      this.selectedProduct = product;
      this.communicatorService.publishData(this.selectedProduct);
   }

  ngOnInit() {
     this.products = this.productsService.getProducts();
  }

}
