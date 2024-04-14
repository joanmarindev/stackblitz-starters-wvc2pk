import { TestBed } from '@angular/core/testing';
import { UsersApi, GetStatementsRequest, Statement } from './statement.api';

describe('UsersApi', () => {
  let service: UsersApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersApi]
    });
    service = TestBed.inject(UsersApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUsers', () => {
    it('should return all statements when no search term is provided', () => {
      const request: GetStatementsRequest = {};
      service.getUsers(request).subscribe((statements: Statement[]) => {
        expect(statements.length).toBe(4); // Assuming there are 4 statements in the data
      });
    });

    it('should return statements matching the search term', () => {
      const request: GetStatementsRequest = { search: 'visa' };
      service.getUsers(request).subscribe((statements: Statement[]) => {
        expect(statements.length).toBe(2); // Assuming there are 2 statements with 'visa' in the account name
      });
    });

    it('should return an empty array if no statements match the search term', () => {
      const request: GetStatementsRequest = { search: 'nonexistent' };
      service.getUsers(request).subscribe((statements: Statement[]) => {
        expect(statements.length).toBe(0);
      });
    });
  });
});
