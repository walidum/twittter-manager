import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onFocus(){ 
      
      $(".search-icon").addClass("si-rotate");
    

  }
  
}

//https://codepen.io/dharan1999/pen/zYxegze