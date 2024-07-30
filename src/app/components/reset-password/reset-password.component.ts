import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  recoveryCode: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  message: string = '';

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Obtener el código de recuperación del local storage
    this.recoveryCode = localStorage.getItem('token') || '';
  }

  resetPassword() {
    if (this.newPassword !== this.confirmPassword) {
      this.message = 'Las contraseñas no coinciden.';
      return;
    }

    // Realizar solicitud HTTP al backend para restablecer la contraseña
    this.http.post<any>('http://localhost:3001/api/reset-password', {
      username: '', // Si no tienes el id del usuario, puedes dejar este campo vacío o manejarlo de otra manera en el backend
      recoveryCode: this.recoveryCode,
      newPassword: this.newPassword
    }).subscribe(
      () => {
        this.message = 'Contraseña restablecida exitosamente.';
        // Redirigir al usuario a la página de inicio de sesión
        this.router.navigate(['/login']);
        console.log('Recovery Code:', this.recoveryCode);
      },
      error => {
        console.log('Recovery Code:', this.recoveryCode);
        console.error('Error al restablecer la contraseña:', error);
        this.message = 'Ocurrió un error al restablecer la contraseña.';
      }
    );
  }
}
