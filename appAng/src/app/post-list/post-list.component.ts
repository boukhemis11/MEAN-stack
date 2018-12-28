import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
 /* posts = [
    {title: 'First Post', content: 'this is the first content'},
    {title: 'Second Post', content: 'this is the second content'},
    {title: 'Third Post', content: 'this is the third content'}
  ]; */
  posts: Post[] = [];

  constructor(public postsService: PostsService) {

   }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
  }

}
