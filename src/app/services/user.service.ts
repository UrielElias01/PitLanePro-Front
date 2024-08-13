      import { HttpClient, HttpErrorResponse } from '@angular/common/http';
      import { Injectable } from '@angular/core';
      import { Observable, catchError, throwError } from 'rxjs';
      import { environment } from '../../environments/environment';
      import { User } from '../interfaces/user';

      @Injectable({
        providedIn: 'root'
      })
      export class UserService {
        private myAppUrl: string;
        private myApiUrl: string;
        private myApiUrl2: string;

        constructor(private http: HttpClient) {
          this.myAppUrl = environment.endpoint;
          this.myApiUrl = 'api/users';
          this.myApiUrl2 = 'api'
        }

        verifyVerificationCode(enteredCode: string): Observable<any> {
          return this.http.post<string>(
            `${this.myAppUrl}${this.myApiUrl2}/verify-code`,
            { enteredCode: enteredCode }
          ).pipe(
            catchError((error: HttpErrorResponse) => {
              console.error('Error en la solicitud de verificación:', error);
              return throwError(error); // Propaga el error para que el componente pueda manejarlo
            })
          );
        }

        signIn(user: User): Observable<any> {
          return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, user);
        }

        login(user: User): Observable<string> {
          return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/login`, user);
        }

        logout(): Observable<any> {
          // Agrega un método para cerrar sesión en el servidor
          return this.http.post(`${this.myAppUrl}${this.myApiUrl}/logout`, {});
        }

        getRole(): Observable<string> {
          // Realiza una solicitud HTTP para obtener el rol del usuario del servidor
          // Por ejemplo:
          return this.http.get<string>(`${this.myAppUrl}${this.myApiUrl}/role`);
        }

        // Método para obtener el rol del usuario desde el servidor
      getUserRole(): Observable<any> {
        return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl2}/user-role`); // Ajusta la ruta según la configuración de tu backend
      }

        checkSessionExpiration(): Observable<boolean> {
          // Agrega un método para verificar la expiración de la sesión en el servidor
          // Este método puede devolver un booleano indicando si la sesión del usuario ha expirado o no
          return this.http.get<boolean>(`${this.myAppUrl}${this.myApiUrl}/check-session-expiration`);
        }

        resetPassword(code: string, newPassword: string): Observable<any> {
          return this.http.post<any>(`${this.myAppUrl}${this.myApiUrl2}/reset-password`, { code, newPassword });
        }
      }
