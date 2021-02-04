import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {IUser} from '../../models/User';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.data.subscribe(value => this.users = value.usersData));
  }

  ngOnInit(): void {

  }

}
