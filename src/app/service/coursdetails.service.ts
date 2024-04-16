import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursDetailService {
  private baseUrl = '/api'; // Remplacez par votre URL d'API

  constructor(private http: HttpClient) {}

  getCoursDetail(fichier: string): Observable<any> {
    const url = `${this.baseUrl}/cours/${fichier}`; // Remplacez avec votre URL d'API pour récupérer les détails du cours
    return this.http.get(url);
  }
}
