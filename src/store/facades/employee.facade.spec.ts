import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { EmployeeFacade } from './employee.facade';
import * as EmployeeActions from '../actions/employee.actions';
import { selectDepartments, selectEmployees } from '../selectors/employee.selectors';

describe('EmployeeFacade', () => {
  let facade: EmployeeFacade;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EmployeeFacade,
        provideMockStore(),
      ],
    });

    facade = TestBed.inject(EmployeeFacade);
    store = TestBed.inject(MockStore);
  });

  it('should dispatch LoadEmployees action', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    facade.loadEmployees();
    expect(dispatchSpy).toHaveBeenCalledWith(
      EmployeeActions.LoadEmployees()
    );
  });

  it('should dispatch LoadDepartments action', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    facade.loadDepartments();
    expect(dispatchSpy).toHaveBeenCalledWith(
      EmployeeActions.LoadDepartments()
    );
  });

  it('should dispatch SetDepartmentFilter action', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    const mockFilter = 'IT';
    facade.setDepartmentFilter(mockFilter);
    expect(dispatchSpy).toHaveBeenCalledWith(
      EmployeeActions.SetDepartmentFilter({
        department: mockFilter
      })
    );
  });

});
