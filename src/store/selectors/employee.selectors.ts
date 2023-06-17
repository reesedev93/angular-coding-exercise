import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeesState } from '../employees.state';

const selectAppState =
  createFeatureSelector<EmployeesState>('appState');

export const selectDepartments = createSelector(
  selectAppState,
  (state: EmployeesState) => state.departments
);

export const selectEmployees = createSelector(
  selectAppState,
  (state: EmployeesState) => state.employees.filter((employee) => {
    if (state.departmentFilter === '') {
      return true;
    } else {
      return employee.department === state.departmentFilter
    }
  })
);
