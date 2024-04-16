import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { FormateurService } from 'src/app/service/formateur.service';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css'],
})
export class FormateurComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  niveauscolire = [
    { name: '5éme Année', value: '5éme Année' },
    { name: '6éme Année', value: '6éme Année' },
    { name: '7éme Année', value: '7éme Année' },
    { name: '8éme Année', value: '8éme Année' },
    { name: '9éme Année', value: '9éme Année' },
    // Ajoutez autant d'options que nécessaire.
  ];
  selectedOptions: string[] = [];

  constructor(
    private ajoutformateur: FormateurService,
    private formBuilder: FormBuilder
   
    
  ) {}

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', [Validators.required, Validators.minLength(8)]],
      username: ['', Validators.required],
      role: ['', Validators.required],
      niveauscolire: ['', Validators.required],
      matiere:['',Validators.required],
    
    });
  }
  toggleOption(option: string) {
    if (this.selectedOptions.includes(option)) {
      this.selectedOptions = this.selectedOptions.filter(item => item !== option);
    } else {
      this.selectedOptions.push(option);
    }
    this.form.patchValue({
      niveauscolire: this.selectedOptions, // Update the "niveau scolaire" form control value.
    });
  }

  onSubmit() {
    this.form.patchValue({
      role: "formateurs",
      niveauscolire: this.selectedOptions,
    });
  
    this.ajoutformateur.signup(this.form.value).subscribe(
      (res: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Formateur registered successfully',
        });
        console.log('Formateur', res);
      }
    );
      
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to register Formateur',
        });
        console.error('Registration Error:', error);
      }
    
  }
}  