import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {Creator} from "../../../shared/interfaces/creator";
import {RawgApiService} from "../rawgAPI/rawg-api.service";

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {
  constructor(private rawgService: RawgApiService) { }

  getAllDevelopers (request: string): Observable<Creator[]> {
    return this.rawgService.get<any>(request).pipe(
      map(dev => dev.results)
    )
  }
}
