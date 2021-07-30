import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/IPost';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: IPost[];

  constructor(private postsService: PostsService) {
    this.postsService.getPosts().subscribe(value => {
      this.posts = value;
    })
  }

  ngOnInit(): void {
  }

}
