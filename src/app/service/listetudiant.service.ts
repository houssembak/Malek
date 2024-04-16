import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListetudiantService {
  getEtudiants() {
    return this.http.get(`${environment.baseurl}/etudiant/`)
  }

  constructor(private http:HttpClient) { }
  
  deleteEtudiant(id:any){
    return this.http.delete(`${environment.baseurl}/etudiant/${id}`)
  }
  getEtudiant(id:any){
    return this.http.get(`${environment.baseurl}/etudiant/${id}`)
  }
  confirm(id:any , etat:any){
    return this.http.get(`${environment.baseurl}/etudiant/confirm/${id}` ,etat)
  }
  updateEtudiant(id:any,etud:any){
    return this.http.put(`${environment.baseurl}/etudiant/${id}`,etud)
  }
  createEtudiant(etud:any){
    return this.http.post(`${environment.baseurl}/etudiant/`,etud)
  }
}
