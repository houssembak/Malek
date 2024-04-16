import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http:HttpClient) { }

 
signup(etud:any){
    return this.http.post(`${environment.baseurl}/auth/signup`,etud)
    
    }
 
}
