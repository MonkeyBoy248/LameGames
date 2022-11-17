import {Component, OnInit} from '@angular/core';
import {GamesService} from "../../../../core/services/games/games.service";
import {CardTypeEnum, Game} from "../../../../shared/interfaces/game";
import {Card} from "../../../../core/interfaces/card";
import {ActivatedRoute} from "@angular/router";
import { Observable, Subject, Subscription, takeUntil } from "rxjs";
import { Select, Store } from '@ngxs/store';
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
  @Select(GameSelectors.getAllGames)
  games$: Observable<Game[]>;

  @Select(GameSelectors.getLoadingStatus)
  isLoading$: Observable<boolean>;

  card: GameCard = {cardType: CardTypeEnum.game, results: []};
  title = 'Games';
  destroy$ = new Subject<void>();
  cache: Game[];
  routerSub: Subscription;

  constructor(private gamesService: GamesService,
              private route: ActivatedRoute,
              private store: Store) { }

  getAllGames () {
    this.routerSub = this.route.queryParams.pipe(
    ).subscribe(params => {
      console.log('params', params)
      this.store.dispatch(new Games.getAll(params['query']))
    })

    this.games$.pipe(
      takeUntil(this.destroy$)
    ).subscribe
    (games => {
      console.log('games', games);
      this.card = {
        cardType: CardTypeEnum.game,
        results: games
      };
    })
  }

  ngOnInit(): void {
    this.getAllGames();
  }

  ngOnDestroy () {
    this.destroy$.next();
    this.destroy$.complete();
    this.routerSub.unsubscribe();
  }
}
