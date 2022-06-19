import {GameState} from "./game.state";
import {Selector} from '@ngxs/store'
import {Details, GameStateModel, Queried} from "./game-state.model";
import {Game, Screenshot, Trailer} from "../../../app/shared/interfaces/game";

export class GameSelectors {
  @Selector([GameState])
  static getAllGames (state: GameStateModel): Game[] {
    return state.games.result;
  }

  @Selector([GameState])
  static getGameDetails (state: GameStateModel): Game {
    return state.details.result;
  }

  @Selector([GameState])
  static getGameScreenshots (state: GameStateModel): Screenshot[] {
    return state.details.result.screenshots
  }

  @Selector([GameState])
  static getGameTrailers (state: GameStateModel): Trailer[] {
    return state.details.result.trailers
  }

  @Selector([GameState])
  static getQueriedGames (state: GameStateModel): Game[] {
    return state.queried.result;
  }
}
