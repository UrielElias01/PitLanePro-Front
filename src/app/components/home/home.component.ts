import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { SearchService } from '../../services/find.service';
import { News } from '../../interfaces/news';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  role: string | undefined;
  showUserMenu: boolean = false;
  userData: any;
  searchQuery: string = '';
  searchResults: News[] = [];
  private inactivityTimer: any;
  private subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private _userService: UserService,
    private http: HttpClient,
    private searchService: SearchService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // Verifica si estamos en un entorno de navegador antes de acceder a localStorage
    if (this.isLocalStorageAvailable()) {
      const token = localStorage.getItem('token');
      if (token) {
        const decodedToken: any = this.jwtDecode(token);
        this.role = decodedToken.role;
        this._userService.getUserRole().subscribe(
          (data) => {
            this.role = data.role;
          },
          (error) => {
            console.error('Error al obtener el rol del usuario:', error);
          }
        );
      }
    } else {
      console.warn('localStorage is not available.');
    }

    this.subscription.add(
      this.searchService.searchResults$.subscribe(
        (results: News[]) => {
          this.searchResults = results.map(news => ({
            title: news.title.toString(),  // Aquí transformas SafeHtml a string
            content: news.content.toString(),
            imageUrl: news.imageUrl
          }));
        }
      )
    );

    // Inicialmente carga las noticias
    this.searchService.updateNews(this.getMockNews());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  isLoggedIn(): boolean {
    return this.isLocalStorageAvailable() && !!localStorage.getItem('token');
  }

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }

  logOut() {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('token');
      this.router.navigate(['/home']);
    }
  }

  resetInactivityTimer() {
    if (this.inactivityTimer) {
      clearTimeout(this.inactivityTimer);
    }
    this.inactivityTimer = setTimeout(() => {
      this.logOut();
    }, 30 * 60 * 1000);
  }

  handleActivity() {
    this.resetInactivityTimer();
  }

  search() {
    this.searchService.filterNews(this.sanitizeInput(this.searchQuery));
  }

  private sanitizeInput(input: string): string {
    const tempDiv = document.createElement('div');
    tempDiv.textContent = input;
    return tempDiv.innerHTML;
  }

  private sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  private getMockNews(): News[] {
    return [
      {
        title: 'Lewis Hamilton ganó en Silverstone y agranda su leyenda en F1',
        content: 'SILVERSTONE, Inglaterra -- Lewis Hamilton ganó un espectacular Gran Premio de Gran Bretaña en condiciones mixtas, poniendo fin a una sequía de victorias que se remontaba al Gran Premio de Arabia Saudita de 2021. Superó a su viejo enemigo Max Verstappen por 1.4 segundos y, al hacerlo, consiguió su novena victoria en su tierra natal en Silverstone, la mayor cantidad para cualquier piloto en un solo circuito en la historia de la Fórmula 1. Hamilton, emocionado, dijo después',
        imageUrl: 'https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0707%2Fr1355733_1296x729_16%2D9.jpg&w=1140&cquality=40&format=jpg'
      },
      {
        title: 'CHECO PÉREZ EXPLICA SU ACCIDENTE EN SILVERSTONE',
        content: 'Checo Pérez arrancará el Gran Premio de la Gran Bretaña desde la posición 19, apenas por delante del Alpine del francés Pierre Gasly, esto luego de que un trompo dejó al mexicano fuera de contienda en la Q1 cuando había montado el neumático blando. La clasificación en Silverstone inició con una pista húmeda luego de una intensa lluvia en la Fórmula 2 apenas una hora antes. Sergio Pérez inició con gomas intermedias y llegó a estar dentro de los 10 primeros antes de cambiar a gomas slicks blandas',
        imageUrl: 'https://images.reporteindigo.com/wp-content/uploads/2022/06/sergio-perez-checo-gran-premio-gran-bretana-formula-1-f1-red-bull-scaled.jpg'
      },
      {
        title: 'RESUMEN Y RESULTADOS DE LA CARRERA DE F1 EN SILVERSTONE 2024',
        content: 'Lewis Hamilton se impuso a Max Verstappen y a Lando Norris tras una emocionante carrera afectada por la lluvia en el Gran Premio de Gran Bretaña 2024 de Fórmula 1, su novena victoria en casa.',
        imageUrl: 'https://th.bing.com/th?id=OVFT.jVugg_3eWu4TcvUh7Kl2Hy&pid=News&w=300&h=186&c=14&rs=2&qlt=90&dpr=1.5'
      },
      {
        title: '‘No me siento bien’: Charles Leclerc asegura estar destrozado tras malos resultados en F1',
        content: 'Charles Leclerc, piloto de Ferrari, volvió a quedarse fuera de los puntos en el Gran Premio de Gran Bretaña 2024. El monegasco finalizó decimocuarto en el Circuito de Silverstone y cuando habló con los medios de comunicación expresó sentirse desesperado por los malos resultados obtenidos en las últimas carreras de F1 que ha disputado.',
        imageUrl: 'https://www.elfinanciero.com.mx/resizer/iCRl0JoK3V9jIBlT1d4OfZOb0WQ=/1440x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/II53KYOYI5BGXNX3D57JN4B6FE.jpg'
      } 
      // Add more news items as needed
    ];
  }

  private jwtDecode(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      console.error('Error decoding token:', e);
      return null;
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const test = '__localStorageTest__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }
}
