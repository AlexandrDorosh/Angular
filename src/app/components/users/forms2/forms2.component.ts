import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from "../../../models";
import {UserService} from "../../../services";

@Component({
  selector: 'app-forms2',
  templateUrl: './forms2.component.html',
  styleUrls: ['./forms2.component.scss']
})
export class Forms2Component implements OnInit {

  users: IUser[];

  userDef: IUser;


constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value);
  }

  compareFn(u1: IUser, u2: IUser): boolean {
    return u1 && u2 ? u1.id === u2.id : u1 === u2;
  }
}
