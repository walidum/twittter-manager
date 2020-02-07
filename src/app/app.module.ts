import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListTweetsComponent } from './list-tweets/list-tweets.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ListTweetsComponent, SearchBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
