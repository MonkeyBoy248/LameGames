import {GameState} from "./game.state";
import {Selector} from '@ngxs/store'
import {GameStateModel} from "./game-state.model";
import {Game, Screenshot, Trailer} from "../../../app/shared/interfaces/game";

export class GameSelectors {
  @Selector([GameState])
  static getAllGames (state: GameStateModel): Game[] {
    return [...state.games];
  }

  @Selector([GameState])
  static getGameDetails (state: GameStateModel): Game {
    return {...state.details.data};
  }

  @Selector([GameState])
  static getGameScreenshots (state: GameStateModel): Screenshot[] {
    return [...state.details.data.screenshots]
  }

  @Selector([GameState])
  static getGameTrailers (state: GameStateModel): Trailer[] {
    return [...state.details.data.trailers]
  }
}
