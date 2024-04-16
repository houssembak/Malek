import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/service/profile.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  newUser: any;
  form: FormGroup;
  userconnect = JSON.parse(localStorage.getItem('userconnect'));

  constructor(
    private service: ProfileService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.userbyid();

    this.form = this.formBuilder.group({
      _id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  userbyid() {
    this.service.getuser(this.userconnect.id).subscribe((res: any) => {
      this.newUser = res['data'];

      // Mettez à jour les champs du formulaire avec les valeurs récupérées
      this.form.patchValue({
        _id: this.newUser._id,
        name: this.newUser.name,
        email: this.newUser.email,
        username: this.newUser.username,
        password: this.newUser.password,
      });
    });
  }

  updateUser() {
    // Vérifiez si le formulaire est valide avant de procéder à la mise à jour
    if (this.form.valid) {
      // Appelez le service pour mettre à jour l'utilisateur
      this.service.updateUser(this.form.value._id, this.form.value).subscribe(
        (res: any) => {
          this.newUser = res['data'];

          // Affichez une notification de succès
          Swal.fire('Profile updated');

          // Affichez les informations de mise à jour dans la console pour le débogage
          console.log('Update profile:', res);
        },
        (error) => {
          // En cas d'erreur, affichez-la dans la console pour le débogage
          Swal.fire('Error', 'Failed to update profile', 'error');
          console.error('Update profile error:', error);
        }
      );
    } else {
      // Le formulaire n'est pas valide, affichez un message d'erreur ou effectuez une action appropriée
      console.log('Form is not valid. Cannot update profile.');
    }
  }
}
