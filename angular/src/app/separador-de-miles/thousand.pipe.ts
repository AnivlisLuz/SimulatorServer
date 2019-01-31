import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
    name: 'thousandPipe'
})

export class ThousandsPipe implements PipeTransform {

    public transform(value: any) {
        // console.log(value)
        let res=value;
        try {
            res = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        } catch (e) {
            console.log(e)
        }
        return res
    }
}
