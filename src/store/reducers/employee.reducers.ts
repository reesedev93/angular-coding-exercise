import { createReducer, on } from '@ngrx/store';

import { initialState } from '../employees.state';
import * as EmployeeActions from '../actions/employee.actions';

export const employeeReducers = createReducer(
	initialState,
  on(EmployeeActions.LoadEmployees, (state) => {
    return {
      ...state,
      employees: [],
      loading: true,
      error: null
    }
  }),
  on(EmployeeActions.LoadEmployeesSuccess, (state, { employees }) => {
    return {
      ...state,
      employees,
      loading: false,
    }
  }),
  on(EmployeeActions.LoadEmployeesFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error
    }
  }),
  on(EmployeeActions.LoadDepartments, (state) => {
    return {
      ...state,
      departments: [],
      loading: true,
      error: null
    }
  }),
  on(EmployeeActions.LoadDepartmentsSuccess, (state, { departments }) => {
    return {
      ...state,
      departments,
      loading: false,
    }
  }),
  on(EmployeeActions.LoadDepartmentsFailure, (state, { error }) => {
    return {
      ...state,
      error,
      loading: false,
    }
  }),
  on(EmployeeActions.SetDepartmentFilter, (state, { department }) => {
    return {
      ...state,
      departmentFilter: department === 'All Departments' ? '' : department
    }
  })
)
