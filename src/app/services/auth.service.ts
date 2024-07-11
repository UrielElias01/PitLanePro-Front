// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { catchError } from 'rxjs/operators';
// import { throwError } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   constructor(private http: HttpClient, private router: Router) {}

//   login(username: string, password: string) {
//     return this.http.post<any>('http://localhost:3001/api/login', { username, password })
//       .pipe(
//         catchError(error => {
//           // Manejo de errores de inicio de sesión
//           console.error('Error al iniciar sesión:', error);
//           return throwError(error);
//         })
//       );
//   }

//   logout() {
//     localStorage.removeItem('token');
//     localStorage.removeItem('tokenExpiration');
//     this.router.navigate(['/login']);
//   }

//   isAuthenticated(): boolean {
//     const token = this.getToken();
//     return !!token; // Devuelve true si el token existe
//   }

//   isTokenExpired(): boolean {
//     const tokenExpirationStr = localStorage.getItem('tokenExpiration');
//     if (tokenExpirationStr) {
//       const tokenExpirationDate = new Date(tokenExpirationStr);
//       return tokenExpirationDate < new Date(); // Devuelve true si el token ha expirado
//     }
//     return true; // Devuelve true si no se encuentra una fecha de expiración del token
//   }

//   getToken(): string | null {
//     const token = localStorage.getItem('token');
//     const expiration = localStorage.getItem('tokenExpiration');
//     if (!token || !expiration) {
//       return null;
//     }
//     const expirationDate = new Date(expiration);
//     if (expirationDate <= new Date()) {
//       // El token ha expirado, cerrar sesión automáticamente
//       this.logout();
//       return null;
//     }
//     return token;
//   }
// }
