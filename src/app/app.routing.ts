import {Routes,RouterModule} from '@angular/router';
import {PlansComponent} from './plans/plans.component';
import {ClientsComponent} from './clients/clients.component';
import {GroupsComponent} from './groups/groups.component';
import {MyAccountsComponent } from './my-accounts/my-accounts.component';
import {HomeComponent } from './home/home.component';
import {CalenderDataComponent} from './calender-data/calender-data.component'
const APP_ROUTES : Routes =  [
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: HomeComponent
  },{
    path:'account',
    component: MyAccountsComponent
  },{
    path:'clients',
    component: ClientsComponent
  },{
    path:'groups',
    component: GroupsComponent
  },{
    path:'plans',
    component: PlansComponent
  },
  {
    path:'AddToCart',
    component: CalenderDataComponent
  }
];

export const RoutingDashboard =  RouterModule.forRoot(APP_ROUTES);


