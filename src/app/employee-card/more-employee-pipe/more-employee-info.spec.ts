import { MoreEmployeeInfoPipe } from './more-employee-info.pipe';
import { singleEmployeeMock } from 'src/mock/employee.mock';

describe('MoreEmployeeInfoPipe', () => {
  let pipe: MoreEmployeeInfoPipe;

  beforeEach(() => {
    pipe = new MoreEmployeeInfoPipe();
  })

  it('should return department info', () => {
    const moreInfo = pipe.transform(singleEmployeeMock);
    expect(moreInfo).toEqual(
      `<span class="more-info">${singleEmployeeMock.department}</span>`
    )
  })

  it('should return department and married info', () => {
    const moreInfo = pipe.transform({
      ...singleEmployeeMock,
      married: true
    });
    expect(moreInfo).toEqual(
      `<span class="more-info">${singleEmployeeMock.department}</span><span class="more-info">Married</span>`
    )
  })

  it('should return vip info', () => {
    const moreInfo = pipe.transform({
      ...singleEmployeeMock,
      dateOfHire: '2017-01-01'
    });
    expect(moreInfo).toEqual(
      `<span class="more-info">${singleEmployeeMock.department}</span><span class="more-info vip">VIP</span>`
    )
  })
})
