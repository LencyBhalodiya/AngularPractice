import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { RouterModule, Routes } from '@angular/router';
import { ParamsComponent } from './params/params.component';
// import {}

const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'users/:id/:name', component: ParamsComponent },

];

@NgModule({
  declarations: [AppComponent, FirstComponent, SecondComponent, ParamsComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
