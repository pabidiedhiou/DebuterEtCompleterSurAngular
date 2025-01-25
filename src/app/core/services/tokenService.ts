import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  isLoged(): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      return true;
    } else {
      return false;
    }
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
