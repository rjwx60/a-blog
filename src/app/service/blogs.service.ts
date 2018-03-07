import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

// 引入 blog 类
import { Blogs } from '../blogs';
// 引入 blog mock 数据源
import { BLOGS } from '../data/mock-blogs';


// 声明服务
@Injectable()

export class BlogsService{

	// without InMemoryWebApi

	getBlogs(): Promise<Blogs[]>{
		return Promise.resolve(BLOGS);
	}

	getBlog(id:number):Promise<Blogs>{
		let array = BLOGS.filter((item) => {
			return item.id == id
		})
		return Promise.resolve(array[0]);
	}

	delete(id: number): Promise<any>{
		return Promise.resolve(BLOGS.map((item,index) => {
			if(item.id == id){
				BLOGS.splice(index,1) // 对原数组进行删除操作
			}
		}));
		
	}
	create(title: string,text: string): Promise<any>{

		let timer = new Date();
		let time1 = timer.getFullYear()+'-'+timer.getMonth()+'-'+timer.getDate()+' ';
		let time2 = timer.getHours()+':'+timer.getMinutes();
		let time  = time1 + time2;

		return Promise.resolve(BLOGS.push({
			"id":BLOGS.length+1,
			"title":title,
			"text":text,
			"postTime":time
		}))
	}
/*
	// with InMemoryWebApi

	private headers = new Headers({'Content-Type':'application/json'});
	private blogsUrl = 'api/blogs';

	constructor(private http:Http){}

	// 获取全部的blog
	getBlogs(): Promise<Blogs[]>{
		return this.http.get(this.blogsUrl)
					.toPromise()
					.then(response => response.json() as Blogs[])
					.catch(this.handleError);
	}
	// 获取特定的blog
	getBlog(id:number):Promise<Blogs>{
		const url = `${this.blogsUrl}/${id}`;
		return this.http.get(url)
					.toPromise()
					.then(response => response.json() as Blogs)
					.catch(this.handleError);
	}

	// 删除
	delete(id: number): Promise<void>{
		const url = `${this.blogsUrl}/${id}`;
		return this.http.delete(url, {headers: this.headers})
					.toPromise()
					.then(() => null)
					.catch(this.handleError);
	}
	// 接收title,和text,增加blog
	create(title: string,text: string): Promise<Blogs>{
		let timer = new Date();
		let time1 = timer.getFullYear()+'-'+timer.getMonth()+'-'+timer.getDate()+' ';
		let time2 = timer.getHours()+':'+timer.getMinutes();
		let time  = time1 + time2;
		return this.http
					.post(this.blogsUrl,JSON.stringify({title:title,text:text,postTime:time}),{headers:this.headers})
					.toPromise()
					.then(res => res.json() as Blogs)
					.catch(this.handleError);
	}

	private handleError(error: any): Promise<any>{
		console.log("An error occured",error);
		return Promise.reject(error.message||error);
	}
*/
}