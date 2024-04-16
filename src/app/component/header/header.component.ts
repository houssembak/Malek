import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  

  constructor(private log: LoginService, private router: Router) {}
  logoutt() {
    localStorage.clear();

    this.router.navigateByUrl('/');
  }
}
