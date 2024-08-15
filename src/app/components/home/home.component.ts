import { Component } from '@angular/core';

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
      comments: [
        { text: 'Gran noticia para Sainz!', liked: false, likesCount: 0 },
        { text: 'Interesante perspectiva', liked: false, likesCount: 0 },
      ],
      newComment: '',
      showComments: false,
    },
    {
      id: 2,
      title: 'Russell espera equidad en Mercedes con su nuevo compañero en el 2025',
      content: `George Russell ha expresado su esperanza de que Mercedes mantenga una política de igualdad entre él y su futuro compañero de equipo en 2025. Con la salida de Lewis Hamilton al final de la temporada 2024, Russell busca asegurar que tendrá las mismas oportunidades para luchar por el campeonato.`,
      img: 'https://cdn-3.motorsport.com/images/amp/0rG3zoW2/s1200/george-russell-equipe-de-f1-da.webp',
      comments: [
        { text: 'Gran noticia para Sainz!', liked: false, likesCount: 0 },
        { text: 'Interesante perspectiva', liked: false, likesCount: 0 }
      ],
      newComment: '',
      showComments: false,
    },
    {
      id: 3,
      title: 'Norris: "Es una tontería" que la gente siga infravalorando a Sainz en la F1',
      content: `Lando Norris ha salido en defensa de su ex compañero de equipo Carlos Sainz, calificando de "tontería" que la gente siga infravalorando el talento y las habilidades del piloto español. Norris destacó las constantes actuaciones sólidas de Sainz y su capacidad para competir al más alto nivel.`,
      img: 'https://cdn-6.motorsport.com/images/amp/6AEjayo6/s1200/lando-norris-mclaren-f1-team-3-2.webp',
      comments: [
        { text: 'Gran noticia para Sainz!', liked: false, likesCount: 0 },
        { text: 'Interesante perspectiva', liked: false, likesCount: 0 }
      ],
      newComment: '',
      showComments: false,
    },
    {
      id: 4,
      title: 'Mercedes descubre la mayor pista sobre sus problemas en el W15 2024',
      content: `El equipo Mercedes ha identificado una pista clave sobre los problemas de rendimiento de su monoplaza W15 de 2024. Según los ingenieros del equipo, los problemas se deben a una correlación incorrecta entre los datos de simulación y el comportamiento en la pista, lo que ha llevado a ajustes importantes en su enfoque de desarrollo.`,
      img: 'https://cdn-4.motorsport.com/images/amp/YP3wXP42/s1200/lewis-hamilton-mercedes-f1-w15.webp',
      comments: [
        { text: 'Gran noticia para Sainz!', liked: false, likesCount: 0 },
        { text: 'Interesante perspectiva', liked: false, likesCount: 0 }
      ],
      newComment: '',
      showComments: false,
    },
    {
      id: 5,
      title: 'Cómo el objetivo de Ricciardo de quitarle su asiento a Checo Pérez se está complicando',
      content: `Daniel Ricciardo enfrenta mayores dificultades en su intento por recuperar un asiento de piloto titular en Red Bull, actualmente ocupado por Sergio "Checo" Pérez. Las recientes actuaciones sólidas de Pérez y los cambios en las dinámicas del equipo han complicado las aspiraciones de Ricciardo.`,
      img: 'https://cdn-8.motorsport.com/images/amp/6b7BgvE0/s1200/daniel-ricciardo-rb-f1-team.webp',
      comments: [
        { text: 'Gran noticia para Sainz!', liked: false, likesCount: 0 },
        { text: 'Interesante perspectiva', liked: false, likesCount: 0 }
      ],
      newComment: '',
      showComments: false,
    }
  ];
  
  displayedNewsItems = this.newsItems.slice(0, 3);

  ngOnInit() {
    this.loadCommentsAndLikesFromLocalStorage();
  }

  loadCommentsAndLikesFromLocalStorage() {
    const savedNewsData = localStorage.getItem('newsCommentsAndLikes');
    if (savedNewsData) {
      this.newsItems = JSON.parse(savedNewsData);
      this.displayedNewsItems = this.newsItems.slice(0, 3);
    }
  }

  saveCommentsAndLikesToLocalStorage() {
    localStorage.setItem('newsCommentsAndLikes', JSON.stringify(this.newsItems));
  }

  toggleComments(newsItem: any) {
    newsItem.showComments = !newsItem.showComments;
  }

  addComment(newsItem: any) {
    if (newsItem.newComment.trim()) {
      newsItem.comments.push({ text: newsItem.newComment, liked: false, likesCount: 0 });
      newsItem.newComment = '';
      this.saveCommentsAndLikesToLocalStorage();
    }
  }

  editComment(newsItem: any, index: number) {
    const editedComment = prompt('Editar comentario', newsItem.comments[index].text);
    if (editedComment !== null) {
      newsItem.comments[index].text = editedComment;
      this.saveCommentsAndLikesToLocalStorage();
    }
  }

  deleteComment(newsItem: any, index: number) {
    if (confirm('¿Estás seguro de que quieres eliminar este comentario?')) {
      newsItem.comments.splice(index, 1);
      this.saveCommentsAndLikesToLocalStorage();
    }
  }

  likeComment(newsItem: any, index: number) {
    const comment = newsItem.comments[index];
    if (comment.liked) {
      comment.likesCount--;
    } else {
      comment.likesCount++;
    }
    comment.liked = !comment.liked;
    this.saveCommentsAndLikesToLocalStorage();
  }

  showMoreNews() {
    this.displayedNewsItems = this.newsItems;
  }
}