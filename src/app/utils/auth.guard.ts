import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    return this._userService.getUserRole().pipe(
      map((response: any) => {
        const role = response.role; // Asegúrate de que `response.role` contiene el rol

        if (role === 'admin') {
          return true;
        } else {
          this.router.navigate(['/access-denied']);
          return false;
        }
      }),
      catchError((error) => {
        console.error('Error fetching user role:', error);
        this.router.navigate(['/login']);
        return of(false); // Cambiado de `[false]` a `of(false)`
      })
    );
  }
}
