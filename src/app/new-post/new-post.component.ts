import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private post: PostService, private router: Router) { }

  blogPost: BlogPost = new BlogPost();
  tags: String;

  formSubmit(submitForm:NgForm){
    this.blogPost.tags = this.tags.split(",").map(tag => tag.trim()); // convert the string to an array and remove whitespace
    this.blogPost.isPrivate = false;
    this.blogPost.postDate = new Date().toLocaleDateString();
    this.blogPost.postedBy = "WEB422 Student";
    this.blogPost.views = 0;
    console.log(this.blogPost);
    this.post.newPost(this.blogPost).subscribe(() => this.router.navigate(['/admin']));
  }

  ngOnInit(): void {
  }

}
