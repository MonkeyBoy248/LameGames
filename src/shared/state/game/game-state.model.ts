import {Game} from "../../../app/shared/interfaces/game";

export interface SortedGames {
  ordering: string;
  result: Game[];
}

export interface Queried {
  query: string;
  result: Game[];
}

export interface Details {
  id: number | null;
  result: Game
}

export interface GameStateModel {
  games: SortedGames;
  queried: Queried;
  details: Details;
}
