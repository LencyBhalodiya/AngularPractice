import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ad';
  constructor(private authService: AuthService){}
  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.login();
  }
  onSubmitOut(){
    this.authService.logout();
  }
}
