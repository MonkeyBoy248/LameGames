import {Game} from "../../../app/shared/interfaces/game";

export interface Details {
  id: number | null;
  data: Game
}

export interface GameStateModel {
  games: Game[];
  details: Details;
  isLoading: boolean;
}
