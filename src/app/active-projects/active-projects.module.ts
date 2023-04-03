import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActiveProjectsRoutingModule } from './active-projects-routing.module';
import { ActiveProjectsComponent } from './active-projects.component';


@NgModule({
  declarations: [
    ActiveProjectsComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatButtonModule,
    MatIconModule,
    ActiveProjectsRoutingModule
  ]
})
export class ActiveProjectsModule { }
