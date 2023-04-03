import { Employee } from "./employee"

export interface Project{
  projectId?: number,
  projectName: string,
  projectDescription: string,
  estimateTime: number
  employees: Employee[]
}