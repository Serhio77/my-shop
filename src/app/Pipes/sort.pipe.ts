import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  //pure: false
})
export class SortPipe implements PipeTransform {

  transform(items: any, field: string, order: string): any {
    return items.sort((a, b) => {
      if(order === "asc")
        return a[field] - b[field];
      else
        return b[field] - a[field];
    });
  }
}
