import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* COMPONENTS */
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyAccountsComponent } from './my-accounts/my-accounts.component';
import { ClientsComponent } from './clients/clients.component';
import { GroupsComponent } from './groups/groups.component';
import { PlansComponent } from './plans/plans.component';




// THIRD PARTY DEPENDENCIES
import {ScheduleModule,CheckboxModule,DialogModule,CalendarModule} from 'primeng/primeng';

/* SERVICES   */
import {EventService} from './EventService';

/* Routing */
import  {RoutingDashboard} from './app.routing';
import { HomeComponent } from './home/home.component';
import { CalenderDataComponent } from './calender-data/calender-data.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MyAccountsComponent,
    ClientsComponent,
    GroupsComponent,
    PlansComponent,
    HomeComponent,
    CalenderDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingDashboard,
    ScheduleModule,
    CheckboxModule,
    DialogModule,
    CalendarModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
