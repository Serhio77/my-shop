import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './product-list/product-list.component';
import { ProductListService } from './product-list.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCommunicatorService } from './product-communicator.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductsComponent, ProductDetailsComponent],
  providers: [ProductListService, ProductCommunicatorService],
  exports: [ProductsComponent, ProductDetailsComponent]
})
export class ProductsModule { }
