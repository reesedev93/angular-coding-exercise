import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from 'src/interfaces/employee.model';

@Pipe({
  name: 'EmployeeMoreInfoPipe'
})
export class EmployeeMoreInfoPipe implements PipeTransform {
  transform(employee: Employee): string {
    const departmentElement = `<span class="more-info">${employee.department}</span>`;

    let marriedStatusElement = '';
    if (employee.married) {
      marriedStatusElement = '<span class="more-info">Married</span>';
    }

    let vipStatusElement = '';
    const hiredDate = new Date(employee.dateOfHire);
    const vipCheckDate = new Date('2020-01-01');
    if (hiredDate < vipCheckDate) {
      vipStatusElement = '<span class="more-info vip">VIP</span>';
    }

    return `${departmentElement}${marriedStatusElement}${vipStatusElement}`
  }
}
