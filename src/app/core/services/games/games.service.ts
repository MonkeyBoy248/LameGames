import { Injectable } from '@angular/core';
import {RawgApiService} from "../rawgAPI/rawg-api.service";
import { map, Observable, zip } from "rxjs";
import {Game} from "../../../shared/interfaces/game";

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private gamesRequest = 'games';

  constructor(private rawgService: RawgApiService) { }

  getAllGames (query?: string): Observable<Game[]> {
    return this.rawgService.get<any>(this.gamesRequest, query).pipe(
      map(game => game.results))
  }

  getGameDetail (id: string): Observable<Game> {
    const detailsUrl = `${this.gamesRequest}/${id}`;
    const details$ = this.rawgService.get<any>(detailsUrl);
    const trailers$ = this.rawgService.get<any>(`${detailsUrl}/movies`);
    const screenshots$ = this.rawgService.get<any>(`${detailsUrl}/screenshots`);

    return zip(
      details$, trailers$, screenshots$,
    ).pipe(
      map(([details, trailers, screenshots]) => {
        return {
          ...details,
          trailers: trailers.results,
          screenshots: screenshots.results,
        }
      }),
    )
  }
}
