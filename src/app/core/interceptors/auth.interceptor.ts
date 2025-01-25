import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../services/tokenService';
//import { Itoken } from '../interfaces/itoken.interface';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenservice: TokenService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.tokenservice.getToken();

    const headers = new HttpHeaders().append(
      'Authorization',
      `Bearer ${token}`
    );
    const modifiedReq = req.clone({ headers });
    return next.handle(modifiedReq);
  }
}
