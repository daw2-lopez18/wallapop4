import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg == '' || arg.length < 2 ) return value;
    const resultItems = [];
    for( const item of value){
      if(  (item.title.toLowerCase().indexOf(arg.toLowerCase()) > -1) ||  (item.description.toLowerCase().indexOf(arg.toLowerCase()) > -1)  
      ||  (item.price.toLowerCase().indexOf(arg.toLowerCase()) > -1)  ||  (item.email.toLowerCase().indexOf(arg.toLowerCase()) > -1) 
      ){
        resultItems.push(item);
      };
    };
    return resultItems;
  }

}
