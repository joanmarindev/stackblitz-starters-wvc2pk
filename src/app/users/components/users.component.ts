import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Statement } from '../../../generated/statement.api';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  template: `
    <div>
      <h2>Statements</h2>
      <!-- filters -->
      <input placeholder="Quick search" (input)="onSearchInputChange($event)" />
      <!-- render some data here -->
      <table>
        <caption>
          Statement Summary
        </caption>
        <thead>
          <tr>
            <th scope="col">Account</th>
            <th scope="col">Due Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Period</th>
          </tr>
        </thead>
        <tbody *ngIf="filteredStatements.length > 0">
          <tr *ngFor="let statement of filteredStatements">
            <td>{{ statement?.account }}</td>
            <td>{{ statement?.dueDate }}</td>
            <td>{{ statement?.amount }}</td>
            <td>{{ statement?.period?.from }} - {{ statement?.period?.to }}</td>
          </tr>
        </tbody>
      </table>
    </div>`,
  standalone: true,
})
export class UsersComponent {
  filteredStatements: Statement[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.fetchFilteredStatements('');
  }

  onSearchInputChange(event: any): void {
    this.fetchFilteredStatements(event.target.value);
  }

  private fetchFilteredStatements(inputValue: string): void {
    this.usersService
      .getFilteredStatements(inputValue)
      .subscribe((statements) => {
        this.filteredStatements = statements;
      });
    console.log(this.filteredStatements);
  }
}
