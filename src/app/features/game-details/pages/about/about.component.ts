import { Component, OnInit } from '@angular/core';
import {Game} from "../../../../shared/interfaces/game"
import {Subscription} from "rxjs";
import {Store} from "@ngxs/store";
import {GameSelectors} from "../../../../../shared/state/game/game.selectors";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  gameMetadata: Game;
  gameSub: Subscription;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.gameSub = this.store.select(GameSelectors.getGameDetails)
        .subscribe(game => this.gameMetadata = game)
  }

  isEmptyArray <T>(array: T[]): boolean {
    return array.length > 0
  }

  ngOnDestroy (){
    this.gameSub.unsubscribe();
  }

  setRatingColor (value: number) {
    if (value > 69) {
      return '#49ab56';
    } else if (value > 50) {
      return '#f1cf45';
    } else if (value > 30) {
      return '#de8928';
    } else {
      return '#E04040FF';
    }
  }
}
