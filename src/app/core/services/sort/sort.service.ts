import { Injectable } from '@angular/core';
import {Game} from "../../../shared/interfaces/game";

@Injectable({
  providedIn: 'root'
})
export class SortService {
  constructor() { }

  sortByOption (option: keyof Game, games: Game[]): Game[]{
    return games.sort((first: Game, second: Game) => {
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
