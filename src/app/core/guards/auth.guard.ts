import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = (route, state) => {

  const auth = inject(TokenService)
  return auth.isLogged();
};
