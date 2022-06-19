import { Injectable } from '@angular/core';
import {map, Observable, tap} from "rxjs";
import {Platform} from "../../../shared/interfaces/game";
import {RawgApiService} from "../rawgAPI/rawg-api.service";

@Injectable({
  providedIn: 'root'
})
export class GamePlatformsService {
  constructor(private rawgService: RawgApiService) { }

  getAllPlatforms (request: string): Observable<Platform[]> {
    return this.rawgService.get<any>(request).pipe(
      tap(_ => console.log('fetched')),
      map(platform => platform.results)
    )
  }
}
