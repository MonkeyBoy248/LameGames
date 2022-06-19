import {Component, OnInit} from '@angular/core';
import {GamesService} from "../../../../core/services/games/games.service";
import {CardTypeEnum, Game} from "../../../../shared/interfaces/game";
import {Card} from "../../../../core/interfaces/card";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, Subject, Subscription, switchMap, takeUntil} from "rxjs";
import {Store} from '@ngxs/store';
import {Games} from "../../../../../shared/state/game/game.actions";
import {GameSelectors} from "../../../../../shared/state/game/game.selectors";

export interface GameCard extends Card {
  results: Game[];
}

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss']
})
export class GamesPageComponent implements OnInit {
  card: GameCard = {cardType: CardTypeEnum.game, results: []};
  title = 'Games';
  destroy$ = new Subject<void>();
  routerSub: Subscription;
  cache: Game[];
  constructor(private gamesService: GamesService, private route: ActivatedRoute, private store: Store) { }

  getSortedGames () {
    this.routerSub = this.route.queryParams.pipe(
      switchMap(params =>
        this.store.dispatch(new Games.getAll(params['order']))
          .pipe(mergeMap(() => this.store.select(GameSelectors.getAllGames)))
      ),
      takeUntil(this.destroy$)
    ).subscribe(games => {
      this.card = {
        cardType: CardTypeEnum.game,
        results: games
      };
    })
  }

  ngOnInit(): void {
    this.getSortedGames();
  }

  ngOnDestroy () {
    this.destroy$.next();
    this.destroy$.complete();
    this.routerSub.unsubscribe();
  }
}
