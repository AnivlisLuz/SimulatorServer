import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
    name: 'thousandPipe'
})

export class ThousandsPipe implements PipeTransform {
  public transform(value: any) {
        // console.log(value)
       let res = value;
        if(value){
            res = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        }
        else
        {
          if(value==0)
            res=0
          else
            res=''
        }
        return res
    }


}
