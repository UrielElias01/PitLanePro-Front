import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const token = localStorage.getItem('token');
    const tokenExpiration = localStorage.getItem('tokenExpiration');
    const userRole = localStorage.getItem('role'); // Obtener el rol del usuario desde el almacenamiento local o desde tu servicio de autenticación

    if (!token || !userRole) {
      // No hay token o rol, redirigir al usuario a la página de inicio de sesión
      this.router.navigate(['/login']);
      return false;
    }

     // Verificar si el token ha expirado
     const currentTime = new Date().getTime();
     if (tokenExpiration && currentTime > parseInt(tokenExpiration)) {
       // El token ha expirado, eliminarlo del almacenamiento local y redirigir al usuario a la página de inicio de sesión
       localStorage.removeItem('token');
       localStorage.removeItem('tokenExpiration');
       this.router.navigate(['/login']);
       return false;
     }

    // Aquí puedes verificar el rol del usuario y permitir o denegar el acceso según el rol
    // Por ejemplo, si solo los usuarios con el rol 'admin' pueden acceder a ciertas rutas:
    if (userRole !== 'admin') {
      // El usuario no tiene el rol adecuado, denegar el acceso y redirigir a una página de acceso denegado
      this.router.navigate(['/access-denied']);
      return false;
    }
    
    // Si el usuario tiene el rol adecuado, permitir el acceso
    return true;
  }
}
