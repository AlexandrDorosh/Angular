import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(value => {
      this.users = value;
    });
  }

  ngOnInit(): void {
  }

}
