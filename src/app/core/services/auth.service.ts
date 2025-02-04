import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Message } from '../interfaces/message.interface';
import { Itoken } from '../interfaces/itoken.interface';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router : Router
  ) { }

  signup(user: User): Observable<Message>{

   return this.http.post<Message>('http://localhost:3000/api/auth/signup', user)
  }

  login(user: User): Observable<Itoken>{
   return this.http.post<Itoken>('http://localhost:3000/api/auth/login', user)

  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigateByUrl('/auth/login')

  }
}
