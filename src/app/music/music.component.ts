import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { MusicService } from '../service/music.service';
import { Http } from '@angular/http';

import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  hasSource:boolean;

	// 音乐表单
	musicForm: FormGroup;
	musicSearch: AbstractControl;

	source:any;
	musicClass:any;

  constructor(
  	private musicService: MusicService,
  	private location: Location,
  	private http: Http,
  	private fb: FormBuilder,
  ){

  this.musicForm = fb.group({
  	'musicSearch': ['',Validators.required]
  })
  this.musicSearch = this.musicForm.controls['musicSearch'];

  }

  ngOnInit(){
    this.hasSource = true;
  }

  onSubmit(form:any):void{
  	// console.log(form.musicSearch);

  	// 下面无效，实际是 Enter键 输出的时候发现下面那句并没有执行
  	// this.http.post('/api/music',{search:"Despacitooo"})
  }
  makeRequest(searchValue:string): void {
    this.hasSource = true;
    if(searchValue.trim()){
      this.http.post('/api/music',{search:searchValue})
        .toPromise()
        .then((res) => {
          this.source = res.json();
          this.handle(this.source);
        })
        .catch(this.handleError)
    }else{
      console.log(this.hasSource);
    }
  }

  private handleError(error: any): Promise<any>{
		console.log("An error occured",error);
		return Promise.reject(error.message||error);
	}

	/*
	musicClass:{
		id:number,
		name:string,
		artist:any,
		album:{
			id:number,
			name:string
		},
		picUrl:string,
		page:string
	}
	*/
  handle(musicClass:any):void{
    if(musicClass){
      let songs = musicClass.songs;
      if(songs){
        this.source = songs;
        // console.log(this.musicClass);
      }else{
        this.hasSource = false;
      }
    }else{
      this.hasSource = false;
    }
  }
 




/*
/////////////////////// Promise test ///////////////////////

  makeRequest(searchValue:string): void {
  	// this.http.get("https://suggest.taobao.com/sug?code=utf-8&q=%E5%8D%AB%E8%A1%A3&callback=cb").subscribe(res => console.log(res));

    this.http.post('/api/music',{search:searchValue})
    	.toPromise()
    	.then(res => this.source = res.json())
  }

  makeAnotherRequest(): void {
    this.http.get('/apii')
      .subscribe(res => console.log(res))
  }
/////////////////////// Promise test ///////////////////////
*/

}
