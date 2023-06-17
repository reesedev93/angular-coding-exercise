import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EmployeeService } from './employee.service';
import { departmentsMock, employeesMock } from 'src/mock/employee.mock';

describe('Service: Employee', () => {
  let service: EmployeeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService],
    });

    service = TestBed.inject(EmployeeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve employees from the API', () => {
    service.getEmployees().subscribe((employees) => {
      expect(employees).toEqual(employeesMock);
    });

    const req = httpMock.expectOne('/api/v2/employees');
    expect(req.request.method).toBe('GET');
    req.flush(employeesMock);
  });

  it('should retrieve departments from the API', () => {
    service.getDepartments().subscribe((departments) => {
      expect(departments).toEqual(departmentsMock);
    });

    const req = httpMock.expectOne('/api/v2/departments');
    expect(req.request.method).toBe('GET');
    req.flush(departmentsMock);
  });

});
