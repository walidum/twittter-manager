import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { RouterModule } from '@angular/router';
import { AppRoutingModule, routingCompnents } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
 import { SearchBarComponent } from './search-bar/search-bar.component';
  
@NgModule({
  imports:      [BrowserModule, RouterModule,FormsModule, AppRoutingModule],
  declarations: [ AppComponent, HelloComponent,  SearchBarComponent ,routingCompnents],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
