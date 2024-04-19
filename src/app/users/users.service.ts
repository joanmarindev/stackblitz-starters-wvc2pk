import { Injectable } from '@angular/core';
import {
  GetStatementsRequest,
  Statement,
  UsersApi,
} from '../../generated/statement.api';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private usersApi: UsersApi) {}

  getFilteredStatements(searchInput: string): Observable<Statement[]> {
    console.log("searchInput-> ",searchInput)
    const request: GetStatementsRequest = { search: searchInput.toLowerCase() };
    return this.usersApi.getUsers(request).pipe();
  }
}
