import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProfileformateurService } from 'src/app/service/profileformateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profileformateur',
  templateUrl: './profileformateur.component.html',
  styleUrls: ['./profileformateur.component.css']
})
export class ProfileformateurComponent implements OnInit {
  newUser:any;
  form: FormGroup;
  _id: any;
  name: any;
  email: any;
  password: any;
  username: any;
  closeResult = '';
  userconnect = JSON.parse(localStorage.getItem('userconnect'));
  constructor(private service:ProfileformateurService) { }

  ngOnInit(): void {
    this.userbyid
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
