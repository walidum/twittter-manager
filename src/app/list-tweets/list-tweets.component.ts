import { Component, OnInit } from '@angular/core';
import { Tweet } from '../models/tweet';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-tweets',
  templateUrl: './list-tweets.component.html',
  styleUrls: ['./list-tweets.component.css']
})
export class ListTweetsComponent implements OnInit {
tweets : any; 
  constructor( public  api: ApiService,public router: Router) { 
    this.tweets  = [] ;
  }

  ngOnInit() {
   this.tweets  = [] ;
   let t = new Tweet("122121","fgfg fgfg fgfg fgfg"); 
   this.tweets.push(t);
    this.tweets.push(new Tweet("14545","fgfg fgfg fgfg sdsfg"));
    this.tweets.push(new Tweet("98978847","fgfg fgfg jlkjh sdsfg"));
   // this.getAllPosts(); 
  }
  getAllPosts() {
    //Get saved list of students
    this.api.listTweets().subscribe(response => {
      console.log(response); 
    })
  }
  navigate ( id){
    console.log(id);
    this.router.navigateByUrl('/tweet/12112');
  }

}