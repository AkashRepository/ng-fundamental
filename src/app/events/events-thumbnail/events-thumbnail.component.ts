import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'events-thumbnail',
  templateUrl: './events-thumbnail.component.html',
  styleUrls: ['./events-thumbnail.component.css']
})
export class EventsThumbnailComponent implements OnInit {

  @Input("eventVar") event:any;

  constructor() {}

  ngOnInit() {
  }
  colorTime (){
    if(this.event && this.event.time === '8:00 am'){
      return 'green bold' 
    } else if(this.event && this.event.time === '10:00 am') {
      return 'red bold';
    }
    return '';
    }
};