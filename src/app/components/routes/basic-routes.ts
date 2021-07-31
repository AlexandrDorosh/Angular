import {UsersComponent} from "../users/users.component";
import {PostsComponent} from "../posts/posts.component";
import {UserDetailsComponent} from "../user-details/user-details.component";
import {Routes} from "@angular/router";
import {PostDetailsComponent} from "../post-details/post-details.component";
import {UsersWithoutPostsComponent} from "../users-without-posts/users-without-posts.component";
import {UserWithPostDetailsComponent} from "../user-with-post-details/user-with-post-details.component";

export const routes : Routes = [
  {path: 'users', component: UsersComponent, children: [{path: ':id', component: UserDetailsComponent}]},
  // {path: 'users/:id', component: UserDetailsComponent},
  {path: 'posts', component: PostsComponent, children: [{path: ':id', component: PostDetailsComponent}]},
  {path: 'users-with-posts', component: UsersWithoutPostsComponent, children: [{path: ':id', component: UserWithPostDetailsComponent}]}
]
