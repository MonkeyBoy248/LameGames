import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  private API_KEY = '409284823b01455aa460aa64783a101a';
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqParam = request.clone(
      {
        setParams: {
          key: this.API_KEY
        }
      }
    )
    return next.handle(reqParam);
  }
}
