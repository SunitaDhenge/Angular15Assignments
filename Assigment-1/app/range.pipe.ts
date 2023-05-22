import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(input:any[], start:number, end:number): any[] {
    let output:any[] = [];

    if(start == -1 || end ==-1)
       output = input;
    else
      output  = input.slice(start,end)

    return output;
  }

}
