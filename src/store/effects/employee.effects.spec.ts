import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { EmployeeService } from 'src/services/employee.service';
import { EmployeeEffects } from './employee.effects';
import * as EmployeeActions from '../actions/employee.actions';
import { departmentsMock, employeesMock } from 'src/mock/employee.mock';

describe('EmployeeEffects', () => {
  let actions$: Observable<any>;
  let effects: EmployeeEffects;
  let employeeService: any;
  let snackbar: any;

  beforeEach(() => {
    employeeService = jasmine.createSpyObj(
      'EmployeeService',
      [
        'getEmployees',
        'getDepartments'
      ]
    );
    snackbar = jasmine.createSpyObj('MatSnackBar', ['open']);

    TestBed.configureTestingModule({
      providers: [
        EmployeeEffects,
        provideMockActions(() => actions$),
        {
          provide: MatSnackBar,
          useValue: snackbar
        },
        {
          provide: EmployeeService,
          useValue: employeeService
        },
      ],
    });

    effects = TestBed.inject(EmployeeEffects);
  });

  it('should dispatch LoadEmployeesSuccess action on successful load', () => {
    const action = EmployeeActions.LoadEmployees();

    employeeService.getEmployees.and.returnValue(of(employeesMock));

    actions$ = of(action);
    effects.loadEmployees$.subscribe((resultAction) => {
      expect(resultAction).toEqual(
        EmployeeActions.LoadEmployeesSuccess({
          employees: employeesMock
        })
      );
    });
  });

  it('should dispatch LoadEmployeesFailure action on load error', () => {
    const action = EmployeeActions.LoadEmployees();

    employeeService.getEmployees.and.returnValue(throwError('Unable to load employees data'));

    actions$ = of(action);
    effects.loadEmployees$.subscribe((resultAction) => {
      expect(resultAction).toEqual(
        EmployeeActions.LoadEmployeesFailure({
          error: 'Unable to load employees data'
        })
      );
    });
  });

  it('should dispatch LoadDepartmentsSuccess action on successful load', () => {
    const action = EmployeeActions.LoadDepartments();

    employeeService.getDepartments.and.returnValue(of(departmentsMock));

    actions$ = of(action);
    effects.loadDepartments$.subscribe((resultAction) => {
      expect(resultAction).toEqual(
        EmployeeActions.LoadDepartmentsSuccess({
          departments: departmentsMock
        })
      );
    });
  });

  it('should dispatch LoadDepartmentsFailure action on load error', () => {
    const action = EmployeeActions.LoadDepartments();

    employeeService.getDepartments.and.returnValue(throwError('Unable to load departments data'));

    actions$ = of(action);
    effects.loadDepartments$.subscribe((resultAction) => {
      expect(resultAction).toEqual(
        EmployeeActions.LoadDepartmentsFailure({
          error: 'Unable to load departments data'
        })
      );
    });
  });

  it('should call snackbar.open with the error message', () => {
    const mockError = 'Unable to load departments data';
    const action = EmployeeActions.LoadDepartmentsFailure({ error: mockError });

    actions$ = of(action);
    effects.failure$.subscribe(() => {
      expect(snackbar.open).toHaveBeenCalledWith(
        mockError,
        '',
        jasmine.objectContaining({
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 2000,
        })
      );
    });
  });
});
