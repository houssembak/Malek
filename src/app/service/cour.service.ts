import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourService {
  private baseUrl = 'http://localhost:3000/cours'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}
  createCour(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}`, formData);
  }

  deleteCour(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateCour(id: string, updateData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, updateData);
  }
}
