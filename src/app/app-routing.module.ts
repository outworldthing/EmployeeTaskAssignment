import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
{
  path: '',
  component: AppComponent,
  children: [
    { path:'', redirectTo:'active-projects', pathMatch:'full'},
    { path:'active-projects', loadChildren: () => import('./active-projects/active-projects.module').then(m => m.ActiveProjectsModule) }
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
