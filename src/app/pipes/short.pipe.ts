import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short',
})
export class ShortPipe implements PipeTransform {
  transform(value: string, nbMax: string): string {
    if (value.length < Number(nbMax)) return value;
    else return value.substring(0, Number(nbMax)) + '...';
  }
}
