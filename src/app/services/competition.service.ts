import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private apiUrl = `${environment.endpoint}/api/competitions`;

  constructor(private http: HttpClient) {}

  createCompetition(competition: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, competition);
  }

  getCompetitions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/list`);
  }

  getCompetition(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateCompetition(id: number, competition: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, competition);
  }

  deleteCompetition(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
