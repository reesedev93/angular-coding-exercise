import { createReducer, on } from '@ngrx/store';

import { initialState } from '../employees.state';
import * as EmployeeActions from '../actions/employee.actions';

export const employeeReducers = createReducer(
	initialState,
  on(EmployeeActions.LoadEmployees, (state) => {
    return {
      ...state,
      employees: []
    }
  }),
  on(EmployeeActions.LoadEmployeesSuccess, (state, { employees }) => {
    return {
      ...state,
      employees
    }
  }),
  on(EmployeeActions.LoadEmployeesFailure, (state, { error }) => {
    return {
      ...state,
      error
    }
  }),
  on(EmployeeActions.LoadDepartments, (state) => {
    return {
      ...state,
      departments: []
    }
  }),
  on(EmployeeActions.LoadDepartmentsSuccess, (state, { departments }) => {
    return {
      ...state,
      departments
    }
  }),
  on(EmployeeActions.LoadDepartmentsFailure, (state, { error }) => {
    return {
      ...state,
      error
    }
  }),
  on(EmployeeActions.SetDepartmentFilter, (state, { department }) => {
    return {
      ...state,
      departmentFilter: department === 'All Departments' ? '' : department
    }
  })
)
