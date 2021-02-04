import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path: 'posts', component: PostsComponent},
  {path: 'users', component: UsersComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
