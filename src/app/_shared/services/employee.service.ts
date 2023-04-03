import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  api = "employee"

  getEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${environment.apiUrl}/${this.api}`);
  }

  constructor(private http:HttpClient) { }
}
