import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

export const adminGuard: CanActivateFn = () => {
const auth = inject(Auth);
const router = inject(Router);

// sin sesión al login
if (!auth.isAuthenticated()) {
return router.createUrlTree(['/login']);

}

// con sesión admin puede pasar
if (auth.isAdmin()) {
return true;

}

// con sesión pero sin permiso a vista de usuario
return router.createUrlTree(['/usuario']);

};