import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
    name: 'thousandPipe'
})

export class ThousandsPipe implements PipeTransform {

    public transform(value: any) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
}
