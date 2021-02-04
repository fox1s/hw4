import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IPosts} from '../models/Posts';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {
  }

  getUsersPostsFromAPI(): Observable<IPosts[]> {
    return this.httpClient.get<IPosts[]>(this.url);
  }
}
