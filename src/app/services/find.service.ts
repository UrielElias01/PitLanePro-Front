import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private indexedContent: any[] = [
    { keyword: 'principal', url: '/principal' },
    { keyword: 'resumen de proyectos', url: '/dashboard' },
    { keyword: 'login', url: '/login' },
  ];

  constructor() { }

  search(query: string): any {
    const keyword = query.toLowerCase().trim();
    return this.indexedContent.find(item => item.keyword === keyword);
  }
}
