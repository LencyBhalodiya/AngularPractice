import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { RouterModule, Routes } from '@angular/router';
import { ParamsComponent } from './params/params.component';
import { UsersComponent } from './users/users.component';
import { AuthService } from './service/account.service';
import { AuthGuardService } from './service/auth-guard.service';
// import {}

const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'users', component: UsersComponent, canActivateChild:[AuthGuardService],
  children : [{path: ':id/:name', component: ParamsComponent}], },

];

@NgModule({
  declarations: [AppComponent, FirstComponent, SecondComponent, ParamsComponent, UsersComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule],
  providers: [AuthService,AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
