/**
 * This file is auto generated
 * PLEASE DON'T EDIT
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Statement {
  id: string;
  account: string;
  dueDate: string;
  amount: number;
  period: {
    from: string;
    to: string;
  };
}

export interface GetStatementsRequest {
  search?: string;
}

const statements: Statement[] = [
  {
    id: 'statement-4',
    account: 'Visa - 3412',
    dueDate: '2016-03-31T22:00:00.000Z',
    amount: 1190,
    period: {
      from: '2016-02-29T23:00:00.000Z',
      to: '2016-03-30T22:00:00.000Z',
    },
  },
  {
    id: 'statement-3',
    account: 'Visa - 6076',
    dueDate: '2016-02-29T23:00:00.000Z',
    amount: 2443,
    period: {
      from: '2016-01-31T23:00:00.000Z',
      to: '2016-02-28T23:00:00.000Z',
    },
  },
  {
    id: 'statement-2',
    account: 'Corporate AMEX',
    dueDate: '2016-02-29T23:00:00.000Z',
    amount: 7681230,
    period: {
      from: '2016-01-31T23:00:00.000Z',
      to: '2016-02-28T23:00:00.000Z',
    },
  },
  {
    id: 'statement-1',
    account: 'Visa - 3412',
    dueDate: '2016-01-31T23:00:00.000Z',
    amount: 842,
    period: {
      from: '2015-12-31T23:00:00.000Z',
      to: '2016-01-30T23:00:00.000Z',
    },
  },
];

const quickSearch = (search?: string) => {
  return <T extends Record<string, any>>(item: T) => {
    if (!search) {
      return true;
    }
    return Object.keys(item).some((key) => {
      const value = item[key];
      if (typeof value === 'object') {
        // If it's an object, search recursively inside the object
        return Object.keys(value).some(subKey => {
          return value[subKey].toString().toLowerCase().includes(search);
        });
      } else {
        // Otherwise, do the search straigh
        return value.toString().toLowerCase().includes(search);
      }
    });
  };
};

@Injectable({
  providedIn: 'root',
})
export class UsersApi {
  getUsers(request: GetStatementsRequest) {
    return of(statements.filter(quickSearch(request.search))).pipe();
  }
}
