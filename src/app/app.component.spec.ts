import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { EmployeeFacade } from 'src/store/facades/employee.facade';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let employeeFacadeMock: jasmine.SpyObj<EmployeeFacade>;

  beforeEach(() => {
    const employeeFacadeSpy = jasmine.createSpyObj('EmployeeFacade', [
      'loadDepartments',
      'loadEmployees',
      'setDepartmentFilter',
    ]);
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatPaginatorModule
      ],
      providers: [
        {
          provide: EmployeeFacade,
          useValue: employeeFacadeSpy
        }
      ],
      declarations: [AppComponent]
    })
    employeeFacadeMock = TestBed.inject(EmployeeFacade) as jasmine.SpyObj<EmployeeFacade>;
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the component', () => {
    component.ngOnInit();
    expect(employeeFacadeMock.loadDepartments).toHaveBeenCalled();
    expect(employeeFacadeMock.loadEmployees).toHaveBeenCalled();
  });

  it('should filter employees by department', () => {
    const event = { value: 'IT' };
    component.filterByDepartment(event);
    expect(employeeFacadeMock.setDepartmentFilter).toHaveBeenCalledWith('IT');
    expect(component.pageIndex).toBe(0);
  });

  it('should handle page events', () => {
    const event = { pageSize: 10, pageIndex: 1 };
    component.handlePageEvent(event);
    expect(component.pageSize).toBe(10);
    expect(component.pageIndex).toBe(1);
  });

});
