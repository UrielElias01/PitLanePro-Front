import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { SearchService } from '../../services/find.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  role: string | undefined;
  showUserMenu: boolean = false;
  userData: any; // Aquí debes llenar los datos del usuario cuando esté autenticado

  // Define una variable para almacenar el temporizador
  private inactivityTimer: any;

  constructor(
    private router: Router,
    private _userService: UserService,
    private http: HttpClient,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    // Verifica si estamos en un entorno de navegador antes de acceder a localStorage
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token');
      console.log('Token:', token);

      if (token) {
        const decodedToken: any = jwtDecode(token);
        console.log('Decoded Token:', decodedToken);
        
        this.role = decodedToken.role;

        this._userService.getUserRole().subscribe(
          (data) => {
            this.role = data.role;
            console.log(this.role);
          },
          (error) => {
            console.error('Error al obtener el rol del usuario:', error);
            // Manejar el error según sea necesario
          }
        );

        const storedTokenString = localStorage.getItem('token');
        if (storedTokenString) {
          const storedToken = JSON.parse(storedTokenString);
          console.log('Stored Token:', storedToken);
        }
      }
    } else {
      console.warn('localStorage is not available. This environment may not support full browser features.');
    }
  }

  isLoggedIn(): boolean {
    // Verifica si estamos en un entorno de navegador antes de acceder a localStorage
    if (typeof localStorage !== 'undefined') {
      return !!localStorage.getItem('token');
    }
    return false;
  }

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }

  logOut() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('token');
      this.router.navigate(['/home']); // Asegúrate de que 'this.router' esté correctamente definido
    }
  }

  resetInactivityTimer() {
    if (this.inactivityTimer) {
      clearTimeout(this.inactivityTimer);
    }
    this.inactivityTimer = setTimeout(() => {
      this.logOut();
    }, 30 * 60 * 1000); // 30 minutos en milisegundos
  }

  handleActivity() {
    this.resetInactivityTimer();
  }
}

function jwtDecode(token: string): any {
  throw new Error('Function not implemented.');
}

