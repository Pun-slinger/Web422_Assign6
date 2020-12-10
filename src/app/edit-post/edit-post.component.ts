import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(private post: PostService, private router: Router, private route: ActivatedRoute) { }

  blogPost: BlogPost
  tags: String

  formSubmit(submitForm:NgForm){
    this.blogPost.tags = this.tags.split(",").map(tag => tag.trim()); // convert the string to an array and remove whitespace
    console.log(this.blogPost.tags);
    console.log(this.blogPost);
    this.post.updatePostById(this.blogPost._id,this.blogPost).subscribe(()=>this.router.navigate(['/admin']));
  }

  deletePost(){
    this.post.deletePostById(this.blogPost._id).subscribe(()=>this.router.navigate(['/admin']));
  }

  ngOnInit(): void {
    this.post.getPostbyId(this.route.snapshot.params['id']).subscribe(data => {
      this.blogPost = data;
      this.tags = data.tags.toString();
    });
  }

}
