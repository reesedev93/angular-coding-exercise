import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employee } from 'src/interfaces/employee.model';

@Injectable()
export class EmployeeService {

	constructor(
		private readonly http: HttpClient
	) { }

	getEmployees(): Observable<Employee[]> {
		return this.http.get<Employee[]>('/api/v2/employees')
	}

	getDepartments(): Observable<string[]> {
		return this.http.get<string[]>('/api/v2/departments')
	}

}
