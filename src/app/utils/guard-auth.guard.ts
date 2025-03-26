import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Alert } from './alerts/alertas';


export const guardAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // Inyectamos el servicio Router
  const token = localStorage.getItem('token');
  if (token) {
    return true; // Permitir acceso si el token existe
  }

  router.navigate(['/login']); // Redirigir al login si no hay token
  Alert.errorAlert("You must log in to access to this site")
  return false;
};
