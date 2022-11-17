import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../core/services/games/games.service";
import {Game} from "../../shared/interfaces/game";
import { Observable, Subject } from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Games} from "../../../shared/state/game/game.actions";
import {GameSelectors} from "../../../shared/state/game/game.selectors";
import { Select, Store } from "@ngxs/store";

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  destroy$ = new Subject<void>();
  gameDetails: Game;
  gameId: string;
  isLoading = true;

  @Select(GameSelectors.getGameDetails)
  gameDetails$: Observable<Game>

  constructor(
    private gamesService: GamesService,
    private route: ActivatedRoute,
    private store: Store,
  ) { }

  getGameDetails () {
    const gameId = this.route.snapshot.paramMap.get('id')!;
    this.store.dispatch(new Games.getDetailById(gameId!));
    this.gameDetails$.subscribe(details => {
      this.gameDetails = details

      if (details.id === Number(gameId)) {
        this.isLoading = false;
      }
    });
  }

  ngOnInit(): void {
    this.getGameDetails();
  }

  ngOnDestroy () {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
