import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { EventsAppComponent } from './events-app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ EventsAppComponent],
  bootstrap:    [ EventsAppComponent ]
})
export class AppModule { }
