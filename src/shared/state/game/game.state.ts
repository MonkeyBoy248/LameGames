import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { Games } from './game.actions';
import {GameStateModel} from "./game-state.model";
import {GamesService} from "../../../app/core/services/games/games.service";
import {Game} from "../../../app/shared/interfaces/game";
import { lastValueFrom } from 'rxjs';

const defaults = {
  games: [],
  details: {
    id: null,
    data: {} as Game
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
  async getAll ({ patchState }: StateContext<GameStateModel>, { query }: Games.getAll) {
    const games = await lastValueFrom(this.gameService.getAllGames(query));

    patchState({games})
  }

  @Action(Games.getDetailById)
  async getGameDetail ({ patchState, getState }: StateContext<GameStateModel>, { id }: Games.getDetailById) {
    const state = getState();

    if (state.details.id === Number(id)) {
      return;
    }

    const gameDetails = await lastValueFrom(this.gameService.getGameDetail(id));

    patchState({
        details: {
          id: gameDetails.id,
          data: gameDetails
        }
      })
  }
}
