import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IPosts} from '../../models/Posts';

@Component({
  selector: 'app-post-of-user',
  templateUrl: './post-of-user.component.html',
  styleUrls: ['./post-of-user.component.css']
})
export class PostOfUserComponent implements OnInit {

  posts: IPosts[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.posts = value.postsData.filter(post => post.userId === 1));

  }

  ngOnInit(): void {
    console.log(this.posts);
  }

}
