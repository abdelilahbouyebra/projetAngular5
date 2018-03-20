import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { ListUsersComponent } from './users/list-users/list-users.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListUsersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
