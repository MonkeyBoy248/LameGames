import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { Games } from './game.actions';
import {GameStateModel} from "./game-state.model";
import {GamesService} from "../../../app/core/services/games/games.service";
import {tap} from "rxjs";
import {Game} from "../../../app/shared/interfaces/game";

const defaults = {
  games: {
    ordering: '',
    result: [],
  },
  queried: {
    query: '',
    result: [],
  },
  details: {
    id: null,
    result: {} as Game
  }
};

@State<GameStateModel>({
  name: 'game',
  defaults
})
@Injectable()
export class GameState {
  constructor(private gameService: GamesService) {
  }
  @Action(Games.getAll)
  getAll ({patchState, getState}: StateContext<GameStateModel>, {ordering}: Games.getAll) {
    const state = getState();
    if (state.games.result.length > 0 && state.games.ordering === ordering) {
      console.log('all cached')
      return;
    }

    return this.gameService.getAllGames(ordering).pipe(
      tap(games => patchState({
        games: {
          ordering,
          result: games
        }
      }))
    )
  }

  @Action(Games.getDetailById)
  getGameDetail ({patchState, getState}: StateContext<GameStateModel>, {id}: Games.getDetailById) {
    const state = getState();
    console.log('here');

    if (state.details.id === Number(id)) {
      console.log('details cached')
      return;
    }

    return this.gameService.getGameDetail(id).pipe(
      tap(detail => patchState({
        details: {
          id: detail.id,
          result: detail
        }
      }))
    )
  }

  @Action(Games.getQueried)
  getQueriedGame ({patchState, getState}: StateContext<GameStateModel>, {query}: Games.getQueried) {
    const state = getState();

    if (state.queried.query === query) {
      console.log('query cached');
      return;
    }

    return this.gameService.getAllGames('name', query).pipe(
      tap(games =>  patchState({
        queried: {
          query,
          result: games
        }
      }))
    )
  }
}
