import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../core/services/games/games.service";
import {Game} from "../../shared/interfaces/game";
import {mergeMap, Subject, Subscription, switchMap, takeUntil} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Games} from "../../../shared/state/game/game.actions";
import {GameSelectors} from "../../../shared/state/game/game.selectors";
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  gameSub: Subscription;
  routerSub: Subscription;
  destroy$ = new Subject<void>();
  gameDetails: Game;
  gameId: string;

  constructor(
    private gamesService: GamesService,
    private route: ActivatedRoute,
    private store: Store,
  ) { }

  getGameDetails () {
    this.routerSub = this.route.params.pipe(
      switchMap(params =>
        this.store.dispatch(new Games.getDetailById(params['id']))
          .pipe(mergeMap(() => this.store.select(GameSelectors.getGameDetails)))
      ),
      takeUntil(this.destroy$)
    ).subscribe(game => {
      console.log('game', game)
      this.gameDetails = game;
    })
  }

  ngOnInit(): void {
    this.getGameDetails();
  }

  ngOnDestroy () {
    this.destroy$.next();
    this.destroy$.complete();
    this.routerSub.unsubscribe();
  }
}
