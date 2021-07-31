import { Component, OnInit } from '@angular/core';
import {UserWithPostService} from "../../services/user-with-post.service";
import {IUser} from "../../models/IUser";
import {IUserWithPost} from "../../models/IUserWithPost";

@Component({
  selector: 'app-users-without-posts',
  templateUrl: './users-without-posts.component.html',
  styleUrls: ['./users-without-posts.component.scss']
})
export class UsersWithoutPostsComponent implements OnInit {

  users: IUser[];

  constructor(private userWithPostService: UserWithPostService) { }

  ngOnInit(): void {
    this.userWithPostService.getAllUsersWithPosts().subscribe(value => this.users = value);
  }

}
