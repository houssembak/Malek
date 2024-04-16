import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListformationsService {
  constructor(private http:HttpClient) { }
  deleteformation(id:any) {
    return this.http.delete(`${environment.baseurl}/formation/${id}`)
  }
  getFormation() {
    return this.http.get(`${environment.baseurl}/formation/`)
  }
  updateFormation(id:any,forma:any){
    return this.http.put(`${environment.baseurl}/formation/${id}`,forma)
  }

}
