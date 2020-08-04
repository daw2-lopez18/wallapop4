import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wishlist'
})
export class WishlistPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg == '' || arg.length < 2 ) return value;
    const resultItems = [];
    for( const item of value){
      if(item.title.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultItems.push(item);
      };
    };
    return resultItems;
  }

}
