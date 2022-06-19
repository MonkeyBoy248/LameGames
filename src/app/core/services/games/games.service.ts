import { Injectable } from '@angular/core';
import {RawgApiService} from "../rawgAPI/rawg-api.service";
import {forkJoin, map, Observable, tap} from "rxjs";
import {SortService} from "../sort/sort.service";
import {Game} from "../../../shared/interfaces/game";

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private gamesRequest = 'games';

  constructor(private rawgService: RawgApiService, private filterService: SortService) { }

  getAllGames (ordering?: string, query?: string): Observable<Game[]> {
    return this.rawgService.get<any>(this.gamesRequest, query).pipe(
      tap(game => console.log('game', game)),
      map(game => {
        if (!ordering) {
          return this.filterService.sortByOption('name', game.results);
        }

        return this.filterService.sortByOption(ordering as keyof Game, game.results);
      }),
    )
  }

  getGameDetail (id: string): Observable<Game> {
    const detailsUrl = `${this.gamesRequest}/${id}`;
    const details = this.rawgService.get<any>(detailsUrl);
    const trailers = this.rawgService.get<any>(`${detailsUrl}/movies`);
    const screenshots = this.rawgService.get<any>(`${detailsUrl}/screenshots`);

    return forkJoin({
      details, trailers, screenshots
    }).pipe(
      map((response) => {
        return {
          ...response['details'],
          screenshots: response['screenshots']?.results,
          trailers: response['trailers']?.results
        }
      }),
      tap(response => console.log('res', response))
    )
  }
}
