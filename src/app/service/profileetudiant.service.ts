import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileetudiantService {
  updateUser(use:any,service:any){
    return this.http.put(`${environment.baseurl}/user`, use,service);
  }

  constructor(private http:HttpClient ) { }
  getuser(id:string){
    return this.http.get (`http://localhost:3000/user/${id}`)
   }
}
