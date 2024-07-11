// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// //import { AuthService } from '../services/auth.service';
// import { Router } from '@angular/router';

// @Injectable()
// export class TokenExpirationInterceptor implements HttpInterceptor {
//   constructor(private authService: AuthService, private router: Router) {}

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // Verificar la expiración del token antes de enviar la solicitud
//     if (this.authService.isTokenExpired()) {
//       this.authService.logout(); // Cerrar sesión si el token ha expirado
//       this.router.navigate(['/login']); // Redirigir al usuario a la página de inicio de sesión
//       return throwError('Token expired'); // Detener la solicitud actual
//     }
    
//     return next.handle(request);
//   }
// }
