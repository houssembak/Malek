import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListformateurService {
  [x: string]: any;
  
  constructor(private http:HttpClient) { }
  getFormateurs(){
    return this.http.get(`${environment.baseurl}/formateur/`)
  }
  deleteformateur(id:any){
    return this.http.delete(`${environment.baseurl}/formateur/${id}`)
  }
  getFormateur(id:any){
    return this.http.get(`${environment.baseurl}/formateur/${id}`)
  }
  updateFormateur(id:any,form:any){
    return this.http.put(`${environment.baseurl}/formateur/${id}`,form)
  }
  createFormateur(form:any){
    return this.http.post(`${environment.baseurl}/formateur/`,form)
  }
  confirm(id:any , etat:any){
    return this.http.get(`${environment.baseurl}/formateur/confirm/${id}` ,etat)
  }
}
