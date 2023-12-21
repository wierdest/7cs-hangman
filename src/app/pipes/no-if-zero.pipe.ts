import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noIfZero',
  standalone: true
})
export class NoIfZeroPipe implements PipeTransform {

  transform(value: number | undefined): string {
    return (value === 0 || value === undefined) ? 'no' : value.toString();
  }

}
