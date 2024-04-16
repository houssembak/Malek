import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EtudiantService } from 'src/app/service/etudiant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css'],
})
export class EtudiantComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  matieres = [
    { name: 'Français', value: 'Français' },
    { name: 'Anglais', value: 'Anglais' },
    { name: 'Mathématique', value: 'Mathématique' },
    { name: 'Arabe', value: 'Arabe' },
    { name: 'Science', value: 'Science' },
    // Ajoutez autant d'options que nécessaire
  ];
  selectedOptions: string[] = [];

  constructor(
    private ajoutetudiant: EtudiantService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      username: ['', Validators.required],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required],
      role: ['', Validators.required],
      niveauscolire: ['', Validators.required],
      matiere: ['', Validators.required], // Add a form control for "matiere"
    });
  }

  toggleOption(option: string) {
    if (this.selectedOptions.includes(option)) {
      this.selectedOptions = this.selectedOptions.filter(item => item !== option);
    } else {
      this.selectedOptions.push(option);
    }
    this.form.patchValue({
      matiere: this.selectedOptions, // Update the "matiere" form control value
    });
  }

  onSubmit() {
    this.form.patchValue({
      role: 'etudiants',
      matiere: this.selectedOptions,
    });

    this.ajoutetudiant.signup(this.form.value).subscribe(
      (res: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Etudiant registered successfully',
        });
        console.log('Etudiant', res);
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to register Etudiant',
        });
        console.error('Registration Error:', error);
      }
    );
  }
}
