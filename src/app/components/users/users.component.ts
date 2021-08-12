import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services";
import {IUser} from "../../models";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent{

  user: IUser;

  constructor(private userService : UserService) { }

  getId(id: number) {
    this.userService.getUserById(id).subscribe(value => this.user = value)
  }
}
