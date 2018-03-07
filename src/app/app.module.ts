import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 路由和服务端
import { AppRoutingModule } from './app-routing.moudle';

import { HttpModule } from '@angular/http';

import { BlogsService } from './service/blogs.service';
import { MusicService } from './service/music.service';

// 组件
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component';
import { MusicComponent } from './music/music.component';

// 数据端
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './data/in-memory-data.service';

// 表单相关
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';


@NgModule({
  // 基础组件
  declarations: [
    AppComponent,
    BlogsComponent,
    DetailsComponent,
    AddComponent,
    HomeComponent,
    MusicComponent
  ],
  // 模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  // 注册服务
  providers: [
    BlogsService,
    MusicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}