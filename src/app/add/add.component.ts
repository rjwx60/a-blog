import { Component, OnInit } from '@angular/core';

import { BlogsService } from '../service/blogs.service';
import { Location } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from '@angular/forms';

// 自定义验证器
function IndividualValidator(control:FormControl):{[s:string]:boolean}{
  // title 由数字或小写字母或大写字母组成,至少有两个字母数字...
  if(!control.value.match(/^[0-9a-z-A-Z]{2,}$/)){
    return {invalidValue:true}
  }
}


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formTitleValid:boolean;
  formTextValid:boolean;
  formValid:boolean;
  // 表单
  myForm: FormGroup;
  // 奇怪了，真的需要的吗？
  title: AbstractControl;
  text: AbstractControl;


  constructor(
  	private blogsService: BlogsService,
  	private location: Location,
    private fb: FormBuilder
  ) {
    this.myForm = fb.group({
      //'title':'',
      //'text':''

      //'title':['',Validators.required],
      //'text':['',Validators.required]

      'title':['',Validators.compose([Validators.required, IndividualValidator])],
      'text':['',Validators.compose([Validators.required, IndividualValidator])]
    })
    this.title = this.myForm.controls["title"];
    this.text = this.myForm.controls["text"];

    // 监听事件，我将其用作验证功能，否则表单页面一显示便显示提示，体验不好
    this.title.valueChanges.subscribe((value:string)=>{
      // 输入的时候不显示表单异常
      this.formValid = false;
      // console.log('title change to: ',value);
      if(value.trim() && !this.title.hasError('invalidValue')){
        this.formTitleValid = false;
      }else{
        this.formTitleValid = true;
      }
    });

    this.text.valueChanges.subscribe((value:any)=>{
      // 输入的时候不显示表单异常
      this.formValid = false;
      // console.log('form changed to: ',form);
      if(value.trim() && !this.title.hasError('required')){
        this.formTextValid = false;
      }else{
        this.formTextValid = true;
      }
    });
  }




  ngOnInit() {
    this.formTitleValid = false;
    this.formTextValid = false;
    this.formValid = false;
  }


  onSubmit(form:any): void{
    if(!this.formTitleValid && !this.formTextValid && form.title && form.text){
      this.blogsService.create(form.title,form.text)
        .then(()=>{
          this.location.back();
      }) 
    }else{
      this.formTitleValid = true;
      this.formTextValid = true;
      this.formValid = true;
    }
  }
  /*
  addBlog(title: string, text: string): void {
    title = title.trim();
    text = text.trim();
    if (!title) { return; }
    if (!text) { return; }
    this.blogsService.create(title,text)
      .then(() =>{
        console.log("Done");
        this.location.back();
      })
  }
  */
}
