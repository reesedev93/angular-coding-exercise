import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";

import * as EmployeeActions from '../actions/employee.actions';
import { selectDepartments, selectEmployees } from "../selectors/employee.selectors";

@Injectable({
  providedIn: 'root',
})
export class EmployeeFacade {

  departments$ = this.store.pipe(select(selectDepartments));
  employees$ = this.store.pipe(select(selectEmployees));

  constructor(private store: Store) { }

  loadEmployees() {
    this.store.dispatch(EmployeeActions.LoadEmployees());
  }

  loadDepartments() {
    this.store.dispatch(EmployeeActions.LoadDepartments());
  }

  setDepartmentFilter(filter: string) {
    this.store.dispatch(EmployeeActions.SetDepartmentFilter({ department: filter }));
  }
}
