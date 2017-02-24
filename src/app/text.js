/*
<!--
<div id=""DashboardScreen>
<div id="NavigationLeftSideItems">
  <ul>
  <li><a routerLink="account"> My Account</a></li>
<li><a routerLink="clients">Clients</a></li>
  <li><a routerLink="groups">Groups</a></li>
  <li><a routerLink="plans">Plans</a></li>
  </ul>
  </div>
  <div id="PearSportsModulesContent">
  <router-outlet></router-outlet>

  </div>

  </div>
  -->
*/

/*
$(document).ready(function() {


  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  var events_array = [
    {
      title: 'All Day Event',
      start: new Date(y, m, d)},
    {
      title: 'Long Event',
      start: new Date(y, m, d+5)}
  ];
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    editable: true,
    events: events_array,
    eventRender: function(event, element, calEvent) {
      element.find(".fc-event-title").after($("<span class=\"fc-event-icons\"></span>").html("<img src=\"/images/pass.png\" /><img src=\"/images/pass.png\" /><img src=\"/images/pass.png\" /><img src=\"/images/pass.png\" />"));
    }
  });

  $('.fc-event').on('click','img',function(event) {
    alert($(this).attr('src'));
  });
});*/
