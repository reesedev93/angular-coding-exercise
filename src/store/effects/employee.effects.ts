import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { EmployeeService } from 'src/services/employee.service';
import * as EmployeeActions from '../actions/employee.actions';
import { Employee } from 'src/interfaces/employee.model';

@Injectable()
export class EmployeeEffects {
	constructor(
		private readonly emplyeeService: EmployeeService,
    private actions$: Actions
	) {}

  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeActions.LoadEmployees),
      switchMap(() =>
        this.emplyeeService.getEmployees().pipe(
          map((employees: Employee[]) =>
            EmployeeActions.LoadEmployeesSuccess({ employees})
          ),
          catchError(() =>
            of(EmployeeActions.LoadEmployeesFailure({ error: 'Unable to load employees data' }))
          )
        )
      )
    )
  );

  loadDepartments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeActions.LoadDepartments),
      switchMap(() =>
        this.emplyeeService.getDepartments().pipe(
          map((departments: string[]) =>
            EmployeeActions.LoadDepartmentsSuccess({ departments})
          ),
          catchError(() =>
            of(EmployeeActions.LoadDepartmentsFailure({ error: 'Unable to load departments data' }))
          )
        )
      )
    )
  );

}
