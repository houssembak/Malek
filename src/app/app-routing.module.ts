import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './component/etudiant/etudiant.component';
import { FormateurComponent } from './component/formateur/formateur.component';
import { HomeComponent } from './component/home/home.component';
import { LayoutComponent } from './component/layout/layout.component';
import { ListetudiantComponent } from './component/listetudiant/listetudiant.component';
import { ListformateurComponent } from './component/listformateur/listformateur.component';
import { LoginComponent } from './component/login/login.component';
import { RegisteruserComponent } from './component/registeruser/registeruser.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ProfileetudiantComponent } from './component/profileetudiant/profileetudiant.component';
import { ProfileformateurComponent } from './component/profileformateur/profileformateur.component';
import { CoursComponent } from './component/cours/cours.component';
import { ScheduleComponent } from './component/schedule/schedule.component';








const routes: Routes = [

  {path:"",component:LoginComponent},
  {path:"signin",component:LoginComponent},
  {path:"user",component:RegisteruserComponent},
  {path:"formateur",component:FormateurComponent},
    {path:"etudiant",component:EtudiantComponent},


  {path:"home",component:HomeComponent,children:[
    {path:"",component:LayoutComponent},
    {path:"listetudiant",component:ListetudiantComponent},
    {path:"listformateur",component:ListformateurComponent},
    {path:"profile",component:ProfileComponent},
    {path:"profileetudiant",component:ProfileetudiantComponent},
    {path:"profileformateur",component:ProfileformateurComponent},
    {path:"liste-cours",component:CoursComponent},
    {path:"schedule",component:ScheduleComponent}


  ]},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
