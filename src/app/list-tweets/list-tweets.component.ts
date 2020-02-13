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
   this.tweets  = [
     {id : "121212", text : "jhjx sdggdshsgd gsdhgsqhdg"},
   {id:"1212121",text : "121212121 qsqqs qsqsq"}
   ] ;  
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
    this.router.navigateByUrl('/tweet/'+id);
  }

}