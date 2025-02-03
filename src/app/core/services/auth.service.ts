import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Message } from '../interfaces/message.interface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(user: User): Observable<Message>{
   return this.http.post<Message>('http://localhost:3000/api/auth/signup', user)
  }
}
