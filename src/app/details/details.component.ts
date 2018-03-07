import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';

import { Blogs } from '../blogs';
import { BlogsService } from '../service/blogs.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
	blog: Blogs;

  constructor(
  	private blogsService: BlogsService,
  	private route: ActivatedRoute,
  	private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.blogsService.getBlog(+params.get("id")))
      .subscribe(blog => this.blog = blog);
  }
  goBack(): void{
  	this.location.back();
  }
  // 什么情况！自己写的函数不行，然后排查，复制上面的goBack函数改名后运行却可以
  goDelete(blog: Blogs): void{
    this.blogsService
        .delete(blog.id)
        .then(()=>{
          this.blog = null;
          this.location.back();
        })
  }
}
