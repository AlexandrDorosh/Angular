import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IUserWithPost} from "../../models/IUserWithPost";
import {UserWithPostService} from "../../services/user-with-post.service";
import {UserService} from "../../services/user.service";
import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-user-with-post-details',
  templateUrl: './user-with-post-details.component.html',
  styleUrls: ['./user-with-post-details.component.scss']
})
export class UserWithPostDetailsComponent implements OnInit {
  userWithPost: IUserWithPost[];
  user: IUser;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private userWithPostService: UserWithPostService) {
    this.activatedRoute.params.subscribe(({id}) => {
        console.log(this.user);
        this.userService.getUserById(id).subscribe(value => this.user = value);
        this.userWithPostService.getUserWithPostById(id).subscribe(value => this.userWithPost = value);
        console.log(this.userWithPost);
      }
    )
  }


  ngOnInit() {
  }


}
