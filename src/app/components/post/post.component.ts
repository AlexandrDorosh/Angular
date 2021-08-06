import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../models/IPost";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent{

  @Input()
  post: IPost;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  toDoDetails(): void {
    this.router.navigate(['posts', this.post.id], {state: this.post});
  }
}
