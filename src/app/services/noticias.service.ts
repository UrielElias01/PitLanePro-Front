import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { News } from '../interfaces/news';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {


  private searchResultsSubject = new BehaviorSubject<News[]>([]);
  searchResults$: Observable<News[]> = this.searchResultsSubject.asObservable();
  private allNews: News[] = [];

  constructor() {}

  updateNews(news: News[]) {
    this.allNews = news;
    this.searchResultsSubject.next(this.allNews);
  }

  filterNews(query: string) {
    const filtered = this.allNews.filter(item => item.title.includes(query) || item.content.includes(query));
    this.searchResultsSubject.next(filtered);
  }
}
