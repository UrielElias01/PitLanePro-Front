import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserService } from '../services/user.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private _userService: UserService, private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this._userService.getUserRole().pipe(
      map(role => role === 'admin'),
      tap(isAdmin => {
        if (!isAdmin) {
          this.router.navigate(['/login']); // Redirige si no es admin
        }
      })
    );
  }
}
