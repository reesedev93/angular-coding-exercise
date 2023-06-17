import * as EmployeeActions from '../actions/employee.actions';
import { initialState } from '../employees.state';
import { employeeReducers } from './employee.reducers';
import { departmentsMock, employeesMock } from 'src/mock/employee.mock';

describe('employeeReducers', () => {
  it('should set employees to an empty array on LoadEmployees action', () => {
    const action = EmployeeActions.LoadEmployees();
    const result = employeeReducers(initialState, action);
    expect(result.employees).toEqual([]);
  });

  it('should update employees on LoadEmployeesSuccess action', () => {
    const action = EmployeeActions.LoadEmployeesSuccess({ employees: employeesMock });
    const result = employeeReducers(initialState, action);
    expect(result.employees).toEqual(employeesMock);
  });

  it('should update error on LoadEmployeesFailure action', () => {
    const mockError = 'Failed to load employees';
    const action = EmployeeActions.LoadEmployeesFailure({ error: mockError });
    const result = employeeReducers(initialState, action);
    expect(result.error).toEqual(mockError);
  });

  it('should set departments to an empty array on LoadDepartments action', () => {
    const action = EmployeeActions.LoadDepartments();
    const result = employeeReducers(initialState, action);
    expect(result.departments).toEqual([]);
  });

  it('should update departments on LoadDepartmentsSuccess action', () => {
    const action = EmployeeActions.LoadDepartmentsSuccess({ departments: departmentsMock });
    const result = employeeReducers(initialState, action);
    expect(result.departments).toEqual(departmentsMock);
  });

  it('should update error on LoadDepartmentsFailure action', () => {
    const mockError = 'Failed to load departments';
    const action = EmployeeActions.LoadDepartmentsFailure({ error: mockError });
    const result = employeeReducers(initialState, action);
    expect(result.error).toEqual(mockError);
  });

  it('should update departmentFilter based on SetDepartmentFilter action', () => {
    const mockDepartment = departmentsMock[0];
    const action = EmployeeActions.SetDepartmentFilter({ department: mockDepartment });
    const result = employeeReducers(initialState, action);
    expect(result.departmentFilter).toEqual(mockDepartment);
  });

  it('should update departmentFilter to an empty string when department is "All Departments"', () => {
    const mockDepartment = 'All Departments';
    const action = EmployeeActions.SetDepartmentFilter({ department: mockDepartment });
    const result = employeeReducers(initialState, action);
    expect(result.departmentFilter).toEqual('');
  });

});
