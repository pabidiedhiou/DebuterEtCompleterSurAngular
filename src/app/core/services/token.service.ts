import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router : Router) { }

  saveToken(token: string){
    localStorage.setItem('token', token)
  }

  getToken(): string | null{
    return localStorage.getItem("token")
  }

  isLogged() : boolean{
    const token = this.getToken()
    if (token) {
      return true
    } else {
      this.router.navigateByUrl("auth/login")
      return false
      
    }
  }
}
