import { Component, OnInit } from '@angular/core';
import { ListetudiantService } from 'src/app/service/listetudiant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listetudiant',
  templateUrl: './listetudiant.component.html',
  styleUrls: ['./listetudiant.component.css'],
})
export class ListetudiantComponent implements OnInit {
  listetudiant: any;
  p: number = 1;
  term: any;
  

  constructor(private listetudiantservice: ListetudiantService) {}

  ngOnInit(): void {
    this.alletud();
  }
  alletud() {
    this.listetudiantservice.getEtudiants().subscribe((res: any) => {
      this.listetudiant = res['data'];
      console.log('list etudiant', this.listetudiant);
    });
  }
  deleteetud(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.listetudiantservice.deleteEtudiant(id).subscribe((res: any) => {
          console.log(res);
        });
        Swal.fire('Deleted!', 'Etudiant has been deleted.', 'success');
        this.alletud();
      }
    });
  }
  conffirm(id: any, etat: any) {
    this.listetudiantservice.confirm(id, etat).subscribe((res: any) => {
      console.log('resultat est:', res);

      Swal.fire('Etudiant has been confirmed');
    });
  }
}
