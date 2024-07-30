import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Importa el Router para la redirección

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  username: string = '';
  message: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  recoverPassword() {
    // Realiza una solicitud HTTP al backend para recuperar la contraseña
    this.http.post<any>('http://localhost:3001/api/users/forgot-password', { username: this.username })
      .subscribe(
        () => {
          this.message = 'Correo electrónico enviado para recuperación de contraseña.';
          // Redirige al usuario a la página de restablecimiento de contraseña
          this.router.navigate(['/token2']);
        },
        error => {
          console.error('Error al enviar el correo electrónico:', error);
          this.message = 'Ocurrió un error al enviar el correo electrónico.';
        }
      );
  }
  
  ngOnInit(): void {
  }

}
