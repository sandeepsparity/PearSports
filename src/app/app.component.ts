import { Component } from '@angular/core';


declare let $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app works!';
  /*events: any[];

   header: any;

   event: MyEvent;

   dialogVisible: boolean = false;
   private correctImg : any;
   idGen: number = 100;
   aspectRatio:number = 3 ;

   constructor(private eventService: EventService) {
   }

   ngOnInit() {
   this.eventService.getEvents().subscribe((events) =>
   {
   this.events = events.data;
   console.log(this.events);
   });

   this.header = {
   left: 'prev,next today',
   center: 'title',
   right: 'month,agendaWeek,agendaDay'
   };

   }

   handleDayClick(event) {
   this.event = new MyEvent();
   this.event.start = event.date.format();
   this.dialogVisible = true;
   }

   handleEventClick(e) {
   this.event = new MyEvent();
   console.log(this.event);
   this.event.title = e.calEvent.title;

   let start = e.calEvent.start;
   let end = e.calEvent.end;
   if (e.view.name === 'month') {
   start.stripTime();
   }

   if (end) {
   end.stripTime();
   this.event.end = end.format();
   }
   /!*this.correctImg = '<div><img src="http://www.planwallpaper.com/images#static/images/desktop-year-of-the-tiger-images-wallpaper.jpg" ' +
   'alt="Ad" width="100" class="img-thumbnail"></div>';*!/

   this.event.id = e.calEvent.id;
   this.event.start = start.format();
   this.event.allDay = e.calEvent.allDay;
   console.log(this.correctImg);
   this.dialogVisible = true;
   console.log(e.calEvent.id);


   }

   saveEvent() {
   //update
   if (this.event.id) {
   let index: number = this.findEventIndexById(this.event.id);
   if (index >= 0) {
   this.events[index] = this.event;
   }
   }
   //new
   else {
   this.event.id = this.idGen;
   this.events.push(this.event);
   this.event = null;
   }

   this.dialogVisible = false;
   }

   deleteEvent() {
   let index: number = this.findEventIndexById(this.event.id);
   if (index >= 0) {
   this.events.splice(index, 1);
   }
   this.dialogVisible = false;
   }

   findEventIndexById(id: number) {
   let index = -1;
   for (let i = 0; i < this.events.length; i++) {
   if (id == this.events[i].id) {
   index = i;
   break;
   }
   }

   return index;
   }
   }

   export class MyEvent {
   id: number;
   title: string;
   start: string;
   end: string;
   allDay: boolean = true;
   }*/
}
