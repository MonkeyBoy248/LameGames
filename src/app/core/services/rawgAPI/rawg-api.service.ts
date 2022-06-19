import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {HttpOptions} from "../../interfaces/httpOptions";

@Injectable({
  providedIn: 'root'
})
export class RawgApiService {
  private urlBase = 'https://api.rawg.io/api/';
  httpOptions: HttpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  get <T>(request: string, query?: string):Observable<T> {
    const url = `${this.urlBase}${request}`;

    if (query) {
      this.httpOptions.params = new HttpParams().set('search', query);
    } else {
      delete this.httpOptions.params;
    }

    return this.http.get<T>(url, this.httpOptions)
  }
}
