import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  constructor(private post: PostService) { }

  tags: Array<string>;

  ngOnInit(): void {
    this.post.getTags().subscribe(data => this.tags = data);
  }

}
