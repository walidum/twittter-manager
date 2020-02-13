import { Component, OnInit } from '@angular/core';
import { Tweet } from '../models/tweet';

@Component({
  selector: 'app-list-tweets',
  templateUrl: './list-tweets.component.html',
  styleUrls: ['./list-tweets.component.css']
})
export class ListTweetsComponent implements OnInit {
tweets : any; 
  constructor() { }

  ngOnInit() {
   this.tweets  = [] ;
   let t = new Tweet("122121","fgfg fgfg fgfg fgfg"); 
   this.tweets.push(t)
  }

}