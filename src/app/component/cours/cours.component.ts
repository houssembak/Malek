import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent {
  courForm: FormGroup;
  niveauscolire = [
    { name: '5éme Année', value: '5éme Année' },
    { name: '6éme Année', value: '6éme Année' },
    { name: '7éme Année', value: '7éme Année' },
    { name: '8éme Année', value: '8éme Année' },
    { name: '9éme Année', value: '9éme Année' }
  ];
  matieres = [
    { name: 'Français', value: 'Français' },
    { name: 'Anglais', value: 'Anglais' },
    { name: 'Mathématique', value: 'Mathématique' },
    { name: 'Arabe', value: 'Arabe' },
    { name: 'Science', value: 'Science' }
  ];
  coursDeposes: any = {}; // Stockage des cours déposés
  addingCours: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    
    this.courForm = this.formBuilder.group({
      niveauscolaire: '',
      matiere: '',
      fichier: ''
    });
  }

  openFile(filename: string) {
    window.open('/assets/pdf/' + filename, '_blank');
  }

  deleteCours(niveau: string, matiere: string, index: number) {
    if (this.coursDeposes[niveau] && this.coursDeposes[niveau][matiere]) {
      this.coursDeposes[niveau][matiere].splice(index, 1);
    }
  }

  createCour(niveau: string, matiere: string) {
    this.addingCours = true;
    // Créez un objet représentant le nouveau cours
    const nouveauCours = {
      nom: 'Nouveau Cours',
      fichier: 'nouveau-cours.pdf' // Remplacez par le nom de fichier réel
    };
  
    // Assurez-vous que le niveau et la matière existent dans coursDeposes
    if (!this.coursDeposes[niveau]) {
      this.coursDeposes[niveau] = {};
    }
  
    if (!this.coursDeposes[niveau][matiere]) {
      this.coursDeposes[niveau][matiere] = [];
    }
  
    // Ajoutez le nouveau cours à la liste des cours pour le niveau et la matière donnés
    this.coursDeposes[niveau][matiere].push(nouveauCours);
  
    // Réinitialisez le formulaire et l'état d'ajout
    this.courForm.reset();
    this.addingCours = false;
  }
  

  onSubmit() {
    // Récupérer les données du formulaire et stocker le cours déposé
    const niveau = this.courForm.value.niveauscolaire;
    const matiere = this.courForm.value.matiere;
    const fichier = this.courForm.value.fichier;

    if (!this.coursDeposes[niveau]) {
      this.coursDeposes[niveau] = {};
    }

    if (!this.coursDeposes[niveau][matiere]) {
      this.coursDeposes[niveau][matiere] = [];
    }

    this.coursDeposes[niveau][matiere].push(fichier);

    // Réinitialiser le formulaire
    this.courForm.reset();
    this.addingCours = false;
  }

  onFileChange(event: any) {
    // Gérer le changement de fichier
  }
}
