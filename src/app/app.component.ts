import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { EmployeeFacade } from 'src/store/facades/employee.facade';

@Component({
  selector: 'reese-dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  selectedDepartment = 'All Departments';
  departments$ = this.employeeFacade.departments$;
  employees$ = this.employeeFacade.employees$;

  constructor(
    private readonly employeeFacade: EmployeeFacade
  ) { }

  ngOnInit(): void {
    this.employeeFacade.loadDepartments();
    this.employeeFacade.loadEmployees();
  }

  filterByDepartment(event: any) {
    this.employeeFacade.setDepartmentFilter(event.value)
  }
}
