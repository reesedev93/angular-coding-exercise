import { Component, Input } from '@angular/core';
import { Employee } from 'src/interfaces/employee.model';

@Component({
  selector: 'reese-dev-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent {
  @Input() employee!: Employee;

}
