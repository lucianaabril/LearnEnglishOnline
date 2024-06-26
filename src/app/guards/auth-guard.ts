import { inject } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { User } from '../interfaces/user';

function checkAuthStatus(): boolean | Observable<boolean> {

  const authService = inject(UsersService);
  const router = inject(Router);
  const user: User | undefined = authService.currentUser();

  return authService.checkStatusAutentication()
    .pipe(
      tap(estaAutenticado => {
        if (!estaAutenticado){
          router.navigate(['/home-general'])
        }
      })
    )
}

export const AuthGuard = () => {
  return checkAuthStatus()
}
