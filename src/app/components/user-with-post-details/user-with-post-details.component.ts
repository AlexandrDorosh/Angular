import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IUserWithPost} from "../../models/IUserWithPost";
import {UserWithPostService} from "../../services/user-with-post.service";

@Component({
  selector: 'app-user-with-post-details',
  templateUrl: './user-with-post-details.component.html',
  styleUrls: ['./user-with-post-details.component.scss']
})
export class UserWithPostDetailsComponent implements OnInit {
  userWithPost: IUserWithPost;

  constructor(private activatedRoute: ActivatedRoute, private userWithPostService: UserWithPostService) {
    this.activatedRoute.params.subscribe(({id}) => {
      console.log(id);
        this.userWithPostService.getUserWithPostById(id).subscribe(value => this.userWithPost = value);
      }
    )
  }


  ngOnInit() {
  }



}
