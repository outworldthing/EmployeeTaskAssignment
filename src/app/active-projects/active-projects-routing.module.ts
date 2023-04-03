import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveProjectsComponent } from './active-projects.component';

const routes: Routes = [
  { path:'', component: ActiveProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActiveProjectsRoutingModule { }
