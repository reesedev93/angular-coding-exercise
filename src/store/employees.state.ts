import { Employee } from "src/interfaces/employee.model";

export interface EmployeesState {
	departments: string[],
	employees: Employee[],
  departmentFilter: string,
  error: any,
}

export const initialState: EmployeesState = {
	departments: [],
	employees: [],
  departmentFilter: '',
  error: null
}
