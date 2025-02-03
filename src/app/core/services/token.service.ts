import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string){
    localStorage.setItem('token', token)
  }

  getToken(): string | null{
    const token = localStorage.getItem("token")
    console.log(`Le token est : ${token}`)
    return token
  }
}
