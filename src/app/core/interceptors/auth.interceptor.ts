import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenservice : TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler ): Observable<HttpEvent<unknown>> 
    {
      const headers = new HttpHeaders().append('Authorization', `Bearer ${this.tokenservice.getToken()}`)
      const modifiedRequest = request.clone({headers})
    return next.handle(modifiedRequest);
  }
}
