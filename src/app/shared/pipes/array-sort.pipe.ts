import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySort'
})
export class ArraySortPipe implements PipeTransform {

  transform(array: any[], option: string, defaultOption: string): any[] {
    if (!Array.isArray(array) && !array) {
      return array;
    }

    if (!option) {
      return  this.sortByOption(array, defaultOption);
    }

    return this.sortByOption(array, option);
  }

  private sortByOption (array: any[], option: string): any[] {
    return array.sort((first, second) => {
      if (first[option] < second[option]) {
        return -1;
      }

      if (first[option] > second[option]) {
        return 1;
      }

      return 0;
    })
  }

}
