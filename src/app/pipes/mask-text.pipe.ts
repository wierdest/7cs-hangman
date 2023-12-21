import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskText',
  standalone: true
})
export class MaskTextPipe implements PipeTransform {

  transform(value: string, hide: boolean): string {
   
    return hide ? value.replace(/./g, '*') : value;
  }

}
