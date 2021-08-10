import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { FormsComponent } from './components/users/forms/forms.component';
import {UsersComponent} from "./components/users/users.component";
import {UserComponent} from "./components/users/user/user.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Forms2Component } from './components/users/forms2/forms2.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'users2', component: Forms2Component}
]


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    UsersComponent,
    UserComponent,
    Forms2Component
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
