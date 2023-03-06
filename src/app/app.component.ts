import { Component, OnInit } from '@angular/core';
import { Account } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [Account]
})
export class AppComponent implements OnInit {
  users:{name: string}[] = [];
  constructor(private accounts: Account){}
  ngOnInit(): void {
    this.users = this.accounts.user;
  }
}
