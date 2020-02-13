import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tweet } from '../models/tweet';
@Component({
  selector: 'app-tweet-detail',
  templateUrl: './tweet-detail.component.html',
  styleUrls: ['./tweet-detail.component.css']
})
export class TweetDetailComponent implements OnInit {
id: number;
  data: Tweet;
  constructor( public activatedRoute: ActivatedRoute,
    public router: Router) {
          this.data = new Tweet();
     }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    console.log(this.id);
  }
}