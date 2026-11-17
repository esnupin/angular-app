import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

export const authGuard: CanActivateFn = () => {
const auth = inject(Auth);
const router = inject(Router);

if (auth.isAuthenticated()) {
return true; // si hay sesion puede pasar

}

// si no hay sesion se manda al login
return router.createUrlTree(['/login']);
};