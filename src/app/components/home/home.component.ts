
import { Component } from '@angular/core';

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

export class HomeComponent {
  // Estructura para almacenar los comentarios para cada noticia
  newsItems = [
    {
      id: 1,
      title: 'Hill: Sainz se liberó luego de que le anunciaron no seguiría con Ferrari',
      content: `Carlos Sainz ha mostrado una notable mejoría en su rendimiento después de que Ferrari le comunicara que no continuará en el equipo en 2025. Damon Hill, ex campeón mundial de F1, comentó que esta noticia parece haber liberado a Sainz, permitiéndole competir con menos presión y con más confianza.`,
      img: 'https://cdn-4.motorsport.com/images/amp/68yZne40/s1200/carlos-sainz-ferrari.webp',
      comments: [] as string[],
      newComment: ''
    },
    {
      id: 2,
      title: 'Russell espera equidad en Mercedes con su nuevo compañero en el 2025',
      content: `George Russell ha expresado su esperanza de que Mercedes mantenga una política de igualdad entre él y su futuro compañero de equipo en 2025. Con la salida de Lewis Hamilton al final de la temporada 2024, Russell busca asegurar que tendrá las mismas oportunidades para luchar por el campeonato.`,
      img: 'https://cdn-3.motorsport.com/images/amp/0rG3zoW2/s1200/george-russell-equipe-de-f1-da.webp',
      comments: [] as string[],
      newComment: ''
    },
    {
      id: 3,
      title: 'Norris: "Es una tontería" que la gente siga infravalorando a Sainz en la F1',
      content: `Lando Norris ha salido en defensa de su ex compañero de equipo Carlos Sainz, calificando de "tontería" que la gente siga infravalorando el talento y las habilidades del piloto español. Norris destacó las constantes actuaciones sólidas de Sainz y su capacidad para competir al más alto nivel.`,
      img: 'https://cdn-6.motorsport.com/images/amp/6AEjayo6/s1200/lando-norris-mclaren-f1-team-3-2.webp',
      comments: [] as string[],
      newComment: ''
    },
    {
      id: 4,
      title: 'Mercedes descubre la mayor pista sobre sus problemas en el W15 2024',
      content: `El equipo Mercedes ha identificado una pista clave sobre los problemas de rendimiento de su monoplaza W15 de 2024. Según los ingenieros del equipo, los problemas se deben a una correlación incorrecta entre los datos de simulación y el comportamiento en la pista, lo que ha llevado a ajustes importantes en su enfoque de desarrollo.`,
      img: 'https://cdn-4.motorsport.com/images/amp/YP3wXP42/s1200/lewis-hamilton-mercedes-f1-w15.webp',
      comments: [] as string[],
      newComment: ''
    },
    {
      id: 5,
      title: 'Cómo el objetivo de Ricciardo de quitarle su asiento a Checo Pérez se está complicando',
      content: `Daniel Ricciardo enfrenta mayores dificultades en su intento por recuperar un asiento de piloto titular en Red Bull, actualmente ocupado por Sergio "Checo" Pérez. Las recientes actuaciones sólidas de Pérez y los cambios en las dinámicas del equipo han complicado las aspiraciones de Ricciardo.`,
      img: 'https://cdn-8.motorsport.com/images/amp/6b7BgvE0/s1200/daniel-ricciardo-rb-f1-team.webp',
      comments: [] as string[],
      newComment: ''
    }
  ];
  
  displayedNewsItems = this.newsItems.slice(0, 3); // Mostrar solo las primeras 3 noticias inicialmente

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


  showMoreNews() {
    const currentLength = this.displayedNewsItems.length;
    const nextLength = currentLength + 3;
    this.displayedNewsItems = this.newsItems.slice(0, nextLength);
  }


  addComment(newsItem: any) {
    if (newsItem.newComment.trim() !== '') {
      newsItem.comments.push(newsItem.newComment);
      newsItem.newComment = ''; // Limpiar el input después de agregar el comentario

  logOut() {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('token');
      this.router.navigate(['/home']);

    }
  }

  editComment(newsItem: any, index: number) {
    const newComment = prompt('Edita tu comentario:', newsItem.comments[index]);
    if (newComment !== null && newComment.trim() !== '') {
      newsItem.comments[index] = newComment;
    }

    this.inactivityTimer = setTimeout(() => {
      this.logOut();
    }, 30 * 60 * 1000);

  }

  deleteComment(newsItem: any, index: number) {
    newsItem.comments.splice(index, 1);
  }

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

