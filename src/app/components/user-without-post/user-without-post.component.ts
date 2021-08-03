import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../models/IUser";
import {ActivatedRoute, Router} from "@angular/router";
import {IUserWithPost} from "../../models/IUserWithPost";

@Component({
  selector: 'app-user-without-post',
  templateUrl: './user-without-post.component.html',
  styleUrls: ['./user-without-post.component.scss']
})
export class UserWithoutPostComponent implements OnInit {

  @Input()
  user: IUser;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateToUserWithPostDetails(): void{
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute})
  }

}
