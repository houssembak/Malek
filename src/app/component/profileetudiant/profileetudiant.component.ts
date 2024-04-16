import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProfileService } from 'src/app/service/profile.service';
import { ProfileetudiantService } from 'src/app/service/profileetudiant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profileetudiant',
  templateUrl: './profileetudiant.component.html',
  styleUrls: ['./profileetudiant.component.css']
})
export class ProfileetudiantComponent implements OnInit {
  newUser:any;
  form: FormGroup;
  _id: any;
  name: any;
  email: any;
  password: any;
  username: any;
  closeResult = '';
  
  userconnect= JSON.parse(localStorage.getItem('userconnect'));
  constructor(private service:ProfileetudiantService) { }

  ngOnInit(): void {
    this.userbyid()
    this.updateUser();
   
  }
  userbyid(){
  this.service.getuser(this.userconnect.id).subscribe((res:any)=>{
    this.newUser=res["data"]
  

  })
  }
  updateUser() {
    this.service.updateUser(this.form.value._id,this.form.value).subscribe((res: any) => {
      this.newUser = res['data'];
      Swal.fire('profile updated');
      this.service
      console.log('update profile ', res);
    });
  }


  

}
