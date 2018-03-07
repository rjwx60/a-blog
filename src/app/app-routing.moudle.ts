import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'; 
import { BlogsComponent } from './blogs/blogs.component';
import { DetailsComponent } from './details/details.component';
import { AddComponent} from './add/add.component';
import { MusicComponent } from './music/music.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/blogs',
		pathMatch: 'full'
	},
	{
		path:'home',
		component:HomeComponent
	},
	{
		path: 'blogs',
		component: BlogsComponent
	},
	{
		path: 'details/:id',
		component: DetailsComponent
	},
	{
		path: 'add',
		component: AddComponent
	},
	{
		path: 'music',
		component: MusicComponent
	}
];

@NgModule({
	imports:[ RouterModule.forRoot(routes) ],
	exports:[ RouterModule ]
})
export class AppRoutingModule { }







