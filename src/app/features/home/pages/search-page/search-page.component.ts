import {Component, OnInit} from '@angular/core';
import {CardTypeEnum} from "../../../../shared/interfaces/game";
import {GamesService} from "../../../../core/services/games/games.service";
import {mergeMap, Subject, Subscription, switchMap, takeUntil, tap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Games} from "../../../../../shared/state/game/game.actions";
import {GameCard} from "../games-page/games-page.component";
import {Store} from "@ngxs/store";
import {GameSelectors} from "../../../../../shared/state/game/game.selectors";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  games: GameCard = {cardType: CardTypeEnum.game, results: []};
  isEmpty: boolean;
  query: string;
  routeSub: Subscription;
  destroy$ = new Subject<void>();

  constructor(
    private gamesService: GamesService,
    private route: ActivatedRoute,
    private store: Store
  ) { }

  getQueryGames () {
    this.routeSub = this.route.queryParams.pipe(
      switchMap(params =>
        this.store.dispatch(new Games.getQueried(params['query']))
          .pipe(mergeMap(() => this.store.select(GameSelectors.getQueriedGames)))
      ),
      takeUntil(this.destroy$)
    ).subscribe(games => {
      this.games.results = games

      console.log('games', games);

      if (games.length === 0) {
        this.isEmpty = true;

        return;
      }

      this.isEmpty = false;
    })
  }

  ngOnDestroy () {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.getQueryGames();

    console.log(this.query);
  }

}
