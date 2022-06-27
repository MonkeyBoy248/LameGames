import {Component, Input, OnInit} from '@angular/core';
import {Ratings} from "../../../../shared/interfaces/game";

export interface Colors {
  [title: string]: string;
}

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @Input() ratings: Ratings[];
  sectionColors: Colors = {
    'exceptional': '#39c039',
    'recommended': '#ded32c',
    'meh': '#dc9527',
    'skip': '#c54028'
  }

  setSectionColor (name: string) {
    return this.sectionColors[name];
  }

  setSectionLength (share: number) {
    return `${share} 100`;
  }

  private getOffset (slice: number[]) {
    return slice.reduce((acc, item) => acc += item, 0)
  }

  private getPercents (ratings: Ratings[]) {
    return ratings.map(rating => {
      return rating.percent;
    })
  }

  setSectionOffset (index: number, ratings: Ratings[]) {
    const percents = this.getPercents(ratings);
    const offset = this.getOffset(percents.slice(0, index));

    if (index === 0) {
      return `0`
    }

    return `${-offset}`;
  }

  constructor() { }

  ngOnInit(): void {
  }


}
