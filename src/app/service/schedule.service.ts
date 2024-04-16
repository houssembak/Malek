import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private baseUrl = 'http://localhost:3000/schedules'; // Mettez votre URL de l'API ici

  constructor(private http: HttpClient) { }

  getAllSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/schedules`);
  }
}
