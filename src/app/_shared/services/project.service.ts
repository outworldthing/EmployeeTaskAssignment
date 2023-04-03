import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmployeeProject } from '../models/employeeProject';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  api = "project"

  getProjects():Observable<Project[]>{
    return this.http.get<Project[]>(`${environment.apiUrl}/${this.api}`);
  }

  addEmployeeToProject():Observable<Project[]>{
    return this.http.put<Project[]>(`${environment.apiUrl}/${this.api}`,'');
  }

  removeEmployeeFromProject(ep:EmployeeProject):Observable<Project[]>{
    return this.http.delete<Project[]>(`${environment.apiUrl}/${this.api}?employeeId=${ep}`);
  }


  constructor(private http:HttpClient) { }
}
