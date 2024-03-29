import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MaterialModule } from 'src/app/components/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatSlideToggleModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule { }
