"use strict"

var thisTime = new Date();
var thisDay = thisTime.getDay();
var weekDay;
switch (thisDay) {
  case 0:
    weekDay = "sunday";
    break;
  case 1:
    weekDay = "monday";
    break;
  case 2:
    weekDay = "tuesday";
    break;
  case 3:
    weekDay = "wednesday";
    break;
  case 4:
    weekDay = "thursday";
    break;
  case 5:
    weekDay = "friday";
    break;
  case 6:
    weekDay = "saturday";
    break;
}

var imgStr = "<img src='pgc_" + weekDay + ".png' />";
document.getElementById("map_right").insertAdjacentHTML('afterBegin', imgStr);
