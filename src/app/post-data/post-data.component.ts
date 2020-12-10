import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { Comment } from '../Comment';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {

  constructor(private data: PostService, private route: ActivatedRoute) { }

  querySub: any;
  post: BlogPost
  comment: Comment = new Comment()

  commentName: string;
  commentText: string;

  submitComment(submitForm:NgForm){
    console.log(this.commentName);
    console.log(this.commentText);
    this.comment.author = this.commentName;
    this.comment.comment = this.commentText;
    this.comment.date = new Date().toLocaleDateString();
    console.log(this.comment);
    this.post.comments.push(this.comment);
    this.data.updatePostById(this.post._id, this.post).subscribe(() => {
      this.commentName = "";
      this.commentText = "";
      console.log(`CommentName: ${this.commentName} /nCommentText: ${this.commentText}`)
    })
  }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params => {
      //TODO: Get post by Id params['id'] and store the result in this.post})
      this.data.getPostbyId(params['id']).subscribe(postdata => {
        this.post = postdata
        console.log(this.post.views);
        this.post.views = this.post.views + 1;
        console.log(this.post.views);
        this.data.updatePostById(this.post._id, this.post).subscribe();
      });
    });
  }

  ngOnDestroy() {
    if (this.querySub)
      this.querySub.unsubscribe();
  }
}
