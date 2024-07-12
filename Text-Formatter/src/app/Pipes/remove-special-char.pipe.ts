import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpecialChar',
  pure : false
})
export class RemoveSpecialCharPipe implements PipeTransform {

  transform(value: string): string {
    if(!value){
      return value
    }
    return value.replace(/[^a-zA-Z0-9 ]/g, '');
  }

}
