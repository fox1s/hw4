import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import { Observable } from 'rxjs';
import {IUser} from '../models/User';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<IUser[]> {

  constructor(private userService: UserService) {
  }

  resolve(): Observable<IUser[]> | Promise<IUser[]> | IUser[] {
    return this.userService.getUsersFromAPI();
  }
}
