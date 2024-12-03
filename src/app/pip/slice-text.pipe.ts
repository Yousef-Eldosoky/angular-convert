import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceText',
  standalone: true
})
export class SliceTextPipe implements PipeTransform {

  transform(value: string, args: number): string {
    return value.slice(0, args) + '...';
  }

}
