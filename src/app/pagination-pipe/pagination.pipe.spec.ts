import { singleEmployeeMock } from 'src/mock/employee.mock';
import { PaginationPipe } from './pagination.pipe';

describe('PaginationPipe', () => {
  let pipe: PaginationPipe;

  beforeEach(() => {
    pipe = new PaginationPipe();
  })

  it('should return paginated array', () => {
    const result = pipe.transform([singleEmployeeMock], 0, 5);
    expect(result).toEqual([singleEmployeeMock])
  })
})
