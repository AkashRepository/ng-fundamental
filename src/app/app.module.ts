import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail/events-thumbnail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ EventsAppComponent, EventsListComponent, EventsThumbnailComponent, NavBarComponent],
  bootstrap:    [ EventsAppComponent ]
})
export class AppModule { }
