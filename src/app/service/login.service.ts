import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  token1 = localStorage.getItem('token');
  headroption1 = new HttpHeaders({
    Authorization: 'bearer ' + this.token1, // Ajoutez un espace après 'bearer'
  });

  getRoleFromAccessToken(accessToken: string): string {
    const decodedToken: any = jwt_decode(accessToken);
    return decodedToken.role;
  }

  signin(log: any) {
    return this.http.post(`${environment.baseurl}/auth/signin`, log);
  }

  logout() {
    return this.http.get(`${environment.baseurl}/logout`, {
      headers: this.headroption1,
    });
  }
}
