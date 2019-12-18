import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { ProjectComponent } from './project/project.component';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component'

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AdminService } from './admin.service';

@NgModule({
  declarations: [ProjectListComponent, ProjectCreateComponent, ProjectUpdateComponent, ProjectComponent, LoginComponent, RegisterComponent, ForgotPasswordComponent, VerifyEmailComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
