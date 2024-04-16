import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {
  form: FormGroup;
  submitted=false

  constructor(
    private ajoutuser:UserService,
    private formBuilder :FormBuilder,
  

    

  ) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required,Validators.email],
      password:['',Validators.required],
      username:['',Validators.required]
     
    }

    )
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.ajoutuser.createUser(this.form.value).subscribe((res:any)=>{
      Swal.fire("user registred");
      console.log("user",res);
    })

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}

  



