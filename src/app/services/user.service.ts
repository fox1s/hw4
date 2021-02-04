import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IUser} from '../models/User';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {
  }

  getUsersFromAPI(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.url);
  }

}
