import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  createUser(use: any) {
    return this.http.post(`${environment.baseurl}/user`, use);
  }
  updateUser(use:any){
    return this.http.put(`${environment.baseurl}/user`, use);
  }
  getusers(){
    return this.http.get(`${environment.baseurl}/user`)
  }
}
