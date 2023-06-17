import { Component, OnInit } from '@angular/core';

import { EmployeeFacade } from 'src/store/facades/employee.facade';
import { DEFAULT_PAGE_SIZE, PAGE_SIZE_OPTIONS } from './constants/pagination.constant';

@Component({
  selector: 'reese-dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  selectedDepartment = 'All Departments';
  pageSize = DEFAULT_PAGE_SIZE;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  pageIndex = 0;
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
    this.employeeFacade.setDepartmentFilter(event.value);
    this.pageIndex = 0;
  }

  handlePageEvent(e: any) {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
}
