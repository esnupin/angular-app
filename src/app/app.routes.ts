import { Routes } from '@angular/router';
import { Productos } from './pages/productos/productos';
import { LoginPage } from './login/login';
import { Usuario } from './usuario/usuario';
import { Admin } from './admin/admin';
import { authGuard } from './guards/auth-guard';
import { adminGuard } from './guards/admin-guard';
import { Panel } from './pages/panel/panel';


export const routes: Routes = [
  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'productos', component: Productos, canActivate: [authGuard] },
  { path: 'usuario', component: Usuario, canActivate: [authGuard] },

  { path: 'admin', component: Admin, canActivate: [adminGuard] },

  { path: 'panel', component: Panel},
];