import { Employee } from "src/interfaces/employee.model";

export interface EmployeesState {
	departments: string[],
	employees: Employee[],
  departmentFilter: string,
  loading: Boolean,
  error: any,
}

export const initialState: EmployeesState = {
	departments: [],
	employees: [],
  departmentFilter: '',
  loading: false,
  error: null
}
