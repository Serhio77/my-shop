import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  //pure: false
})
export class SortPipe implements PipeTransform {

  transform(items: any, field: string, order: string): any {
    return items.sort((a, b) => {
      if(order === "desc")
        return b[field] - a[field];
      else
        return a[field] - b[field];        
    });
  }
}
