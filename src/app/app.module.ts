import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail/events-thumbnail.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ EventsAppComponent, EventsListComponent, EventsThumbnailComponent, NavBarComponent],
  bootstrap:    [ EventsAppComponent ],
  providers: [EventService, ToastrService]
})
export class AppModule { }
