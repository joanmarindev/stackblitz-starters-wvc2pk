import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsersModule } from './users/users.module';

@NgModule({
  imports: [BrowserModule, UsersModule],
  providers: [],
})
export class AppModule {}
