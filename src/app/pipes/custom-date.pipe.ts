import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  transform(value: any, format: string = 'dd/MM/yyyy'): any {
    return new DatePipe('en-US').transform(value, format);
  }
}
