import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remvepipe',
  pure: false
})
export class RemvepipePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/[^a-zA-Z0-9 ]/g, '');
  }

}
