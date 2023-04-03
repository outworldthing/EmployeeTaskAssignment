import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from '../_shared/models/employee';
import { Project } from '../_shared/models/project';
import { ProjectService } from '../_shared/services/project.service';

@Component({
  selector: 'app-active-projects',
  templateUrl: './active-projects.component.html',
  styleUrls: ['./active-projects.component.scss']
})
export class ActiveProjectsComponent implements OnInit {
  projectForm = new FormGroup({
    projectName: new FormControl(""),
    projectDescription: new FormControl(""),
    estimatedTime: new FormControl({value: 0, disabled: true})
  })
  projects: Project[] = []
  employees: Employee[] = []
  activeProject: number = 0;
  estimatedTime: number = 0;

  getProject(){
    this.projectService.getProjects().subscribe((results:any) => {
      this.projects = results;
    })
  }

  addEmployeeToProject(){
    this.projectService.addEmployeeToProject().subscribe((results:Project[]) => {
      this.projects = results;
    })
  }

  removeEmployeeFromProject(employeeId){
    this.projectService.removeEmployeeFromProject(employeeId).subscribe((results:Project[]) => {
      this.projects = results;
    })
  }

  selectEvent(value:Project){
    this.projectForm.get("projectDescription").setValue(value[0]);
    this.projectForm.get("estimatedTime").setValue(value[1]);
    this.employees = value[2]
    this.activeProject = value[3]
  }

  constructor(private projectService:ProjectService){}

  ngOnInit(): void {
      this.getProject();
  }
}
