import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(input:any[], prop:string,value:any): any[] {
    let output:any[] = [];

    if(value == "-1")
       output = input;
    else
      output  = input.filter( item => item[prop] == value);

    return output;
  }

}
