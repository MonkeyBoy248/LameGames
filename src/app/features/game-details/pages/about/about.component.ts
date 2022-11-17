import { Component, OnInit } from '@angular/core';
import {Game} from "../../../../shared/interfaces/game"
import { Observable } from "rxjs";
import { Select } from "@ngxs/store";
import {GameSelectors} from "../../../../../shared/state/game/game.selectors";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Select (GameSelectors.getGameDetails)
  gameDetails$: Observable<Game>;

  constructor() { }

  ngOnInit (): void {
  }

  isEmptyArray <T>(array: T[]): boolean {
    if (!array) {
      return false;
    }
    return array.length > 0
  }

  setRatingColor (value: number): string {
    switch (true) {
      case value > 69:
        return '#49ab56';
      case value > 50:
        return '#f1cf45';
      case value > 30:
        return '#de8928';
      default:
        return '#E04040FF';
    }
  }
}
