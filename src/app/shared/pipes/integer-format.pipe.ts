import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'integerFormat'
})
export class IntegerFormatPipe implements PipeTransform {

  transform(gamesCount: number): string | number {
    if (gamesCount < 1000) {
      return gamesCount;
    }

    const rawHundreds = `${gamesCount % 1000}`;
    const gamesCountLength = rawHundreds.length;
    const formattedHundreds = `${'0'.repeat(3 - gamesCountLength)}${rawHundreds}`;
    const hundreds = gamesCountLength < 3 ? formattedHundreds : rawHundreds;

    return `${Math.trunc(gamesCount / 1000)},${hundreds}`;
  }

}
