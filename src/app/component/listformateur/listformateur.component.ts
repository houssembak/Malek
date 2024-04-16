import { Component, OnInit } from '@angular/core';
import { ListformateurService } from 'src/app/service/listformateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listformateur',
  templateUrl: './listformateur.component.html',
  styleUrls: ['./listformateur.component.css']
})
export class ListformateurComponent implements OnInit {

  listformateur: any;
  p: number=1
  term:any

  constructor(private listformateurservice:ListformateurService) { }

  ngOnInit(): void {
    this.allform()
  }
  allform(){
    this.listformateurservice.getFormateurs().subscribe((res:any)=>{
      this.listformateur=res["data"]
            console.log("list formateur",this.listformateur)
            
      
          }
        )}
        deleteforma(id:any){
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
          this.listformateurservice.deleteformateur(id).subscribe((res:any)=>{
              console.log(res)
          })    
              Swal.fire(
                'Deleted!',
                'Formateur has been deleted.',
                'success'
              )
              this.allform()
            }
          })
        }
        conffirm(id:any,etat:any){
          this.listformateurservice.confirm(id,etat).subscribe((res:any)=>{
            console.log("resultat est:",res)

        Swal.fire('Formateur has been confirmed' )
    
                  
            
                }
              )}

}
