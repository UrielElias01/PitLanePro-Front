import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../interfaces/user';
import { ErrorService } from '../../services/error.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  role: string = '';
  loading: boolean = false;

  constructor(private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    @Inject(ErrorService) private _errorService: ErrorService) { }

  ngOnInit(): void {
  }

  addUser() {
    // Validamos que el usuario ingrese valores
    if (this.username == '' || this.password == '' || this.confirmPassword == '' || this.role == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    } 
 
    // Validamos que las passwords sean iguales
    if (this.password != this.confirmPassword) {
      this.toastr.error('Las contraseñas ingresadas son distintas', 'Error');
      return;
    }

    // Validamos la contraseña con expresiones regulares
    if (!this.isValidPassword()) {
      this.toastr.error('La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra mayúscula, un número y un símbolo', 'Error');
      return;
    }

    // Validamos que el username tenga formato de correo electrónico
  if (!this.isValidEmail()) {
    this.toastr.error('El username debe ser una dirección de correo electrónico válida', 'Error');
    return;
  }

    const user: User = {
      username: this.username,
      password: this.password,
      role: this.role
    }

    this.loading = true;
    this._userService.signIn(user).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success(`El usuario ${this.username} fue registrado con éxito`, 'Usuario registrado');
        this.router.navigate(['/login']);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      }
    })
  }

  isValidEmail(): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(this.username);
  }

  isValidPassword(): boolean {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return passwordRegex.test(this.password);
  }
}
