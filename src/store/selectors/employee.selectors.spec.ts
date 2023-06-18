import { EmployeesState } from '../employees.state';
import { selectDepartments, selectEmployees, selectLoading } from './employee.selectors';
import { departmentsMock, employeesMock } from 'src/mock/employee.mock';

describe('Employees Selectors', () => {
  let mockAppState: EmployeesState;

  beforeEach(() => {
    mockAppState = {
      departments: departmentsMock,
      employees: employeesMock,
      departmentFilter: '',
      loading: false,
      error: null
    };
  });

  it('should select the departments', () => {
    const result = selectDepartments.projector(mockAppState);
    expect(result).toEqual(departmentsMock);
  });

  it('should select all employees', () => {
    const result = selectEmployees.projector(mockAppState);
    const sortedEmployees = employeesMock.sort((a, b) => new Date(b.dateOfHire).getTime() - new Date(a.dateOfHire).getTime())
    expect(result).toEqual(sortedEmployees);
  });

  it('should select the employees based on the department filter', () => {
    const result = selectEmployees.projector({
      ...mockAppState,
      departmentFilter: 'Executives'
    });
    const executiveEmployees = employeesMock.filter(emp => emp.department === 'Executives')
    expect(result).toEqual(executiveEmployees);
  });

  it('should select loading status', () => {
    const result = selectLoading.projector(mockAppState);
    expect(result).toEqual(false);
  });
});
