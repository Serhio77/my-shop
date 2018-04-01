import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Product } from './product.model';

@Injectable()
export class ProductCommunicatorService {

  // Observable string sources
  private channel = new Subject<Product>();

  // Observable string streams $ means observe
  public channel$ = this.channel.asObservable();

  // Service message commands
  publishData(data: Product) {
    this.channel.next(data);
  }
}
