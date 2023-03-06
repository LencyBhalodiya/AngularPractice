import { Component } from '@angular/core';
import { Account } from '../account.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  constructor(private accounts: Account){}
  AddUser(input){
    this.accounts.addUsers(input.value)
  }
}
