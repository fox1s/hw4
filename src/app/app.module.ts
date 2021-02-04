import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {UserResolveService} from './services/user-resolve.service';
import {HomeComponent} from './components/home/home.component';
import {FullUserComponent} from './components/full-user/full-user.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'posts', component: PostsComponent},
  {
    path: 'users', component: UsersComponent, resolve: {usersData: UserResolveService}, children: [
      {path: ':id', component: FullUserComponent}
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    UserComponent,
    UsersComponent,
    HomeComponent,
    FullUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
