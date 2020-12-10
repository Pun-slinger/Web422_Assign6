import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private post: PostService) { }

  categories: Array<any>;

  ngOnInit(): void {
    this.post.getCategories().subscribe(data => 
    {
      console.log(data);
      this.categories = data;
      console.log(this.categories);
    });
  }

}
