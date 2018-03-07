import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

import { BlogsService } from '../service/blogs.service';
import { Blogs } from '../blogs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
	blogs : Blogs[];
	// 注意下面是冒号，而上面是等号，下面是声明，上面是赋值？
	selectorblog:Blogs;

  constructor(
  	private router: Router,
  	private blogsService:BlogsService
  ) {}

  ngOnInit(): void{
  	this.getBlogs();
  }
  getBlogs(): void{
  	this.blogsService.getBlogs().then(blogs => this.blogs = blogs);
  }
  // 变量在前，冒号声明，声明体在后
  onSelected(blog: Blogs): void{
  	// 声明才是用冒号，赋值操作用等号，如果用错，便会报“';' expected.”错
  	this.selectorblog = blog;
  }
  gotoDetail():void {
  	if(this.selectorblog){
 		 	this.router.navigate(['/details',this.selectorblog.id]);
  	}
  }
}
