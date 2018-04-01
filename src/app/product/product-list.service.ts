import { Injectable } from '@angular/core';

import { Product } from './product.model';

@Injectable()
export class ProductListService {

  constructor() { }

  getProducts(): Array<Product> {
    return [
      new Product(1, 'Hummer', 1000, 0, 'Hummmer Description',),
      new Product(2, 'Nails', 10, 41, 'Nails Description'),
      new Product(3, 'Plank', 3000, 0, 'Plank Description'),
      new Product(4, 'Jointer', 5000, 49, 'Jointer Description'),
      new Product(5, 'Circular Saw', 8000, 0, 'Circular Saw Description'),
      new Product(6, 'Drill', 6000, 400, 'Drill Description'),
      new Product(7, 'Fretsaw', 3000, 0, 'Fretsaw Description')
    ];
  }
}
