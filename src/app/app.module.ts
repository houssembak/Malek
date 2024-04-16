import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { RegisteruserComponent } from './component/registeruser/registeruser.component';
import { FormateurComponent } from './component/formateur/formateur.component';
import { EtudiantComponent } from './component/etudiant/etudiant.component';
import { LayoutComponent } from './component/layout/layout.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { LoginComponent } from './component/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListetudiantComponent } from './component/listetudiant/listetudiant.component';
import { ListformationsComponent } from './component/listformations/listformations.component';
import { ListformateurComponent } from './component/listformateur/listformateur.component';

import { ProfileetudiantComponent } from './component/profileetudiant/profileetudiant.component';
import { ProfileformateurComponent } from './component/profileformateur/profileformateur.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoursComponent } from './component/cours/cours.component';
import { ScheduleComponent } from './component/schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    RegisteruserComponent,
    FormateurComponent,
    EtudiantComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    ListetudiantComponent,
    ListformationsComponent,
    ListformateurComponent,

    ProfileetudiantComponent,
    ProfileformateurComponent,
    CoursComponent,
    ScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
