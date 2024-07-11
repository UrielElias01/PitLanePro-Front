import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../interfaces/user';
import { ErrorService } from '../../services/error.service';
import { UserService } from '../../services/user.service';

//import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  loading: boolean = false;
  captcha: string;
  captchaResolved: boolean = false;


  constructor(private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService,
     ) { this.captcha = ''; //Esto si lo agregas
  }

  ngOnInit(): void {

    // this.checkSessionExpiration();
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.captchaResolved = true;
    this.captcha = captchaResponse;
  }

  
  login() {
    // Validamos que el usuario ingrese datos
    if (this.username == '' || this.password == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    }

    // Creamos el body
    const user: User = {
      username: this.username,
      password: this.password,
      role: 'user' // Asignamos un valor predeterminado para el rol
    }

    this.loading = true;
    this._userService.login(user).subscribe({
      next: (token) => {
        localStorage.setItem('token', JSON.stringify(token));
        this.router.navigate(['/token']);
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
        this.loading = false;
      }
    });
    // Llamamos al servicio para iniciar sesión
    // this._userService.login(user).subscribe({
    //   next: () => {
    //     // Redirigimos directamente a la página de token
    //     this.router.navigate(['/token']);
    //   },
    //   error: (error: HttpErrorResponse) => {
    //     // Manejamos el error
    //     console.error('Error al iniciar sesión:', error);
    //     this.toastr.error('Error al iniciar sesión', 'Error');
    //     this.loading = false;
    //   }
    // });
  }

  // checkSessionExpiration() {
  //   // Verificamos la expiración de sesión
  //   this._userService.checkSessionExpiration().subscribe({
  //     next: (expired) => {
  //       if (expired) {
  //         // La sesión ha expirado, mostramos un mensaje y redirigimos al usuario al inicio de sesión
  //         this.toastr.warning('Tu sesión ha expirado, por favor inicia sesión nuevamente', 'Sesión expirada');
  //         this.router.navigate(['/login']);
  //       } else {
  //         // La sesión aún es válida, no hacemos nada
  //       }
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       // Manejamos el error de verificación de expiración de sesión
  //       console.error('Error al verificar la expiración de sesión:', error);
  //     }
  //   });
  // }
  
}
