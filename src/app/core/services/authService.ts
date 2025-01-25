import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Itoken } from '../interfaces/itoken.interface';
import { Message } from '../interfaces/message.interface';
@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  login(user: User): Observable<Itoken> {
    return this.http.post<Itoken>('http://localhost:3000/api/auth/login', user);
  }

  signUp(user: User): Observable<Message> {
    return this.http.post<Message>(
      'http://localhost:3000/api/auth/signup',
      user
    );
  }
}
