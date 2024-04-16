import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    private log: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      password: ['', Validators.required],
      username: ['', Validators.required],
    });
  }

  signin() {
    this.log.signin(this.form.value).subscribe(
      (res: any) => {
        Swal.fire('Login succeeded', '', 'success'); // Message de succès
        console.log('login', res);

        localStorage.setItem('userconnect', JSON.stringify(res));
        localStorage.setItem('token', res.tokens.accessToken);
        localStorage.setItem('refreshtoken', res.tokens.refreshToken);
        localStorage.setItem('state', '0');

        console.log(res);

        // Redirection vers la page /home avec un délai de 1000 ms (1 seconde)
        setTimeout(() => {
          this.router.navigateByUrl('/home');
        }, 1000);
      },
      (error) => {
        Swal.fire('Login failed', 'Invalid email or password', 'error'); // Message d'erreur
        console.error('login error', error);
      }
    );
  }
}
