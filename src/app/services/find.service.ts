import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DomSanitizer, SecurityContext } from '@angular/platform-browser';
import { News } from '../interfaces/news';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private allNews: News[] = [];
  private searchResultsSubject = new BehaviorSubject<News[]>([]);
  searchResults$ = this.searchResultsSubject.asObservable();

  constructor(private sanitizer: DomSanitizer) {}

  updateNews(news: News[]) {
    this.allNews = news;
    this.searchResultsSubject.next(this.allNews);
  }

  filterNews(query: string) {
    const sanitizedQuery = query.toLowerCase();
    
    const filteredNews = this.allNews.filter(news => {
      const titleString = this.sanitizeHtml(news.title);
      const contentString = this.sanitizeHtml(news.content);
      
      return titleString.includes(sanitizedQuery) || contentString.includes(sanitizedQuery);
    });

    this.searchResultsSubject.next(filteredNews);
  }

  private sanitizeHtml(safeHtml: any): string {
    return this.sanitizer.sanitize(SecurityContext.HTML, safeHtml) || '';
  }
}
