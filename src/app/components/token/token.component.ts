import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
  enteredCode: string = ''; // Variable para almacenar el código ingresado por el usuario

  constructor( 
    private _userService: UserService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void { 
    // No necesitas capturar ningún parámetro de la URL en ngOnInit
  }

  onSubmit() {
    // Verifica si el código ingresado por el usuario está definido antes de enviar la solicitud al servidor
    if (this.enteredCode) {
      console.log('Código ingresado por el usuario:', this.enteredCode); // Agrega un console.log para verificar el código ingresado
      

       // Guarda el código en el localStorage
       localStorage.setItem('token', this.enteredCode)
      // Envía el código de verificación ingresado por el usuario al servidor para su verificación
      this._userService.verifyVerificationCode(this.enteredCode).subscribe({
        next: () => {
          console.log('Solicitud de verificación enviada correctamente'); // Agrega un console.log para verificar si la solicitud se envió correctamente
          
          // Si el código es válido, redirige al usuario a la página principal
          this.toastr.success('Código de verificación válido', 'Éxito');
          // Aquí puedes redirigir al usuario a la página deseada, por ejemplo:
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Error al enviar la solicitud de verificación:', error); // Agrega un console.error para verificar cualquier error en la solicitud
          
          // Si el código no es válido, muestra un mensaje de error al usuario
          this.toastr.error('Código de verificación incorrecto', 'Error');
        }
      });
    } else {
      // Maneja el caso en que el código no esté definido
      this.toastr.error('Falta el código de verificación', 'Error');
    }
  }
  

}
