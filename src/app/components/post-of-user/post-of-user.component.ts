import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IPosts} from '../../models/Posts';

@Component({
  selector: 'app-post-of-user',
  templateUrl: './post-of-user.component.html',
  styleUrls: ['./post-of-user.component.css']
})
export class PostOfUserComponent implements OnInit {

  posts: IPosts[];
  idOfUser;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(value => {
      this.idOfUser = this.router.getCurrentNavigation().extras.state.id;
    });
    this.activatedRoute.data.subscribe(value => this.posts = value.postsData.filter(post => post.userId === this.idOfUser));

  }

  ngOnInit(): void {
  }

}
