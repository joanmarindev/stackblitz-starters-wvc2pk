import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Statement } from '../../../generated/statement.api';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  standalone: true
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
  }
}
