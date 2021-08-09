import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { FormsComponent } from './components/users/forms/forms.component';
import {UsersComponent} from "./components/users/users.component";
import {UserComponent} from "./components/users/user/user.component";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: 'users', component: UsersComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    UsersComponent,
    UserComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
