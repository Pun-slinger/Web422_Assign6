import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css']
})
export class PostsTableComponent implements OnInit {

  constructor(private post: PostService, private router: Router) { }

  blogPosts: Array<BlogPost> = [];

  rowClicked(event,id){
    this.router.navigate([`/admin/post`,id]);
  }

  ngOnInit(): void {
    this.post.getAllPosts().subscribe(data => this.blogPosts = data);
  }

}
