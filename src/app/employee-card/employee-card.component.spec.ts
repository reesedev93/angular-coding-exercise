import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';

import { MoreEmployeeInfoPipe } from './more-employee-pipe/more-employee-info.pipe';
import { EmployeeCardComponent } from './employee-card.component';
import { Employee } from 'src/interfaces/employee.model';

describe('EmployeeCardComponent', () => {
  let component: EmployeeCardComponent;
  let fixture: ComponentFixture<EmployeeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        EmployeeCardComponent,
        MoreEmployeeInfoPipe
      ],
      imports: [MatCardModule]
    });
    fixture = TestBed.createComponent(EmployeeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the employee info', () => {
    const employee: Employee = {
      firstName: 'John',
      lastName: 'Doe',
      position: 'Manager',
      avatar: 'avatar-url',
      dateOfBirth: '',
      dateOfHire: '',
      department: '',
      id: 0,
      married: false
    };

    component.employee = employee;
    fixture.detectChanges();

    const nameElement = fixture.nativeElement.querySelector('.name');
    const positionElement = fixture.nativeElement.querySelector('.position');
    const avatarElement = fixture.nativeElement.querySelector('.employee-avatar');

    expect(avatarElement).not.toBeUndefined();
    expect(nameElement.textContent).toContain('John Doe');
    expect(positionElement.textContent).toContain('Manager');
  });
});
