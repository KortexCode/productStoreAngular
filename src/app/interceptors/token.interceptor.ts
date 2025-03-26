import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Alert } from '../utils/alerts/alertas';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  const router = inject(Router);

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req).pipe(
    catchError((error) => {
      console.error('Reuqest Error:', error);

      if (error.status === 401 || error.status === 403) {
        console.warn('Token invalid or expired. Redirect to login...');
        Alert.errorAlert('Login no authorizated')
        localStorage.removeItem('token'); // Eliminar token inválido
        router.navigate(['/login']); // Redirigir al login
      }

      return throwError(() => error); // Retornar el error para que otros lo manejen si es necesario
    })
  ); // Asegurar que la petición modificada continúe el flujo
};
