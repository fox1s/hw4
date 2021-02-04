import {Injectable} from '@angular/core';
import {IPosts} from '../models/Posts';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {PostsService} from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostsResolveService implements Resolve<IPosts[]> {

  constructor(private postsService: PostsService) {
  }

  resolve(): Observable<IPosts[]> | Promise<IPosts[]> | IPosts[] {
    return this.postsService.getUsersPostsFromAPI();
  }
}
