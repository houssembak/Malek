import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  constructor(private http:HttpClient) { }
 signup(form:any){
    return this.http.post(`${environment.baseurl}/auth/signup`,form)
    
    }
 
}
