import { createAction, props } from "@ngrx/store";
import { Employee } from "src/interfaces/employee.model";


export const LoadEmployees = createAction(
	'[Employee] Load Employees'
)

export const LoadEmployeesSuccess = createAction(
	'[Employee] Load Employees Success',
	props<{ employees: Employee[] }>()
)

export const LoadEmployeesFailure = createAction(
	'[Employee] Load Employees Failure',
	props<{ error: any }>()
)

export const LoadDepartments = createAction(
	'[Employee] Load Departments'
)

export const LoadDepartmentsSuccess = createAction(
	'[Employee] Load Departments Success',
	props<{ departments: string[] }>()
)

export const SetDepartmentFilter = createAction(
	'[Employee] Set Department Filter',
	props<{ department: string }>()
)

export const LoadDepartmentsFailure = createAction(
	'[Employee] Load Departments Failure',
	props<{ error: any }>()
)
