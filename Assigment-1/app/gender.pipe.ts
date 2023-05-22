import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grade'
})
export class GradePipe implements PipeTransform {

  transform(input:number): string {
    let output:string  = "";
    // add logic to transform input data into output
    if(input == 1)  output = "Outstanding";
    else if(input == 2)  output = "Excellent";
    else if(input == 3)  output = "Good";
    else if(input == 4)  output = "Average";
    else output = "";
    
    return output;
  }

}
