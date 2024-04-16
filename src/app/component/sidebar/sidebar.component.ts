import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  role: string;


  constructor(private authService: LoginService) {}

  ngOnInit(): void {
  console.log('ngOnInit du composant SidebarComponent appelé.');
  const accessToken = localStorage.getItem('accessToken');
  console.log('accessToken:', accessToken);
  // Le reste du code pour récupérer le rôle à partir du jeton d'accès...
}

}
