import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';


// 声明服务
@Injectable()

export class MusicService{

	// private headers = new Headers({'Content-Type':'application/json'})

	constructor(private http:Http){
	}

	// test
	getTest():void{
		this.http.post(
		'http://jsonplaceholder.typicode.com/post',
		JSON.stringify({
			body:'bar',
			title:'foo',
			userId:1
		}))
		.subscribe((res:Response) => {
			console.log(res.json())
		})
	}
	/*
	getTest():void{
		let headers: Headers = new Headers({'Content-Type':'application/json'});
		let opts: RequestOptions = new RequestOptions();
		opts.headers = headers;

		let url:string = 'http://s.music.163.com/search/get/?s=北京你好&limit=10&type=1';

		this.http.get(url,opts)
				.subscribe((res:Response) => {
					console.log("done");
				})
	}

	getTest():void{
		let url:string = 'http://s.music.163.com/search/get/?s=北京你好&limit=10&type=1';
		this.http.get(url)
				.toPromise()
				.then((response:Response) => {
					console.log("done")
				})
				.catch(this.handleError);
	}
	private handleError(error: any): Promise<any>{
		console.log("An error occured",error);
		return Promise.reject(error.message||error);
	}


	getTest():void{
		let url:string = 'http://s.music.163.com/search/get/?s=北京你好&limit=10&type=1';
		this.http.get(url)
				.subscribe((res:Response) => {
					console.log("done")
				})
	}


	getTest():void{
		console.log("start");
		// let url:string = 'http://s.music.163.com/search/get/?s=北京你好&limit=10&type=1';
		console.log("end");
		this.http.post('http://s.music.163.com/search/get/?',JSON.stringify({s:'北京你好',limit:'10',type:'1'}),{headers:this.headers})
				.subscribe((res:Response) => {
					console.log("done");
					//console.log(res.json());
				})
	}
	*/

}





