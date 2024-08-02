import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { News } from '../interfaces/news';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private allNews: News[] = [];
  private searchResultsSubject = new BehaviorSubject<News[]>([]);
  searchResults$ = this.searchResultsSubject.asObservable();

  constructor() {}

  updateNews(news: News[]) {
    this.allNews = news;
    this.searchResultsSubject.next(this.allNews);
  }

  filterNews(query: string) {
    const filteredNews = this.allNews.filter(news =>
      news.title.toLowerCase().includes(query.toLowerCase()) ||
      news.content.toLowerCase().includes(query.toLowerCase())
    );
    this.searchResultsSubject.next(filteredNews);
  }
}
