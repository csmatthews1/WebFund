function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

function updateClock() {
    var time = getSecondsSinceStartOfDay();

    //find Hours, Minutes and Seconds from time integer
    var hour = time/3600.;
    var minutes = time % 3600 / 60;
    var seconds = time % 3600 % 60;
    
    //If hour is higher than 12, subract 12 since this is a 12-hour clock
    if (hour >= 12.0) {
        hour = hour - 12.0;
    }
    
    //Update rotation of hour, minutes and seconds  <div>
    document.getElementById("hour").style.transform = "rotate(" + (hour*30.0-180) + "deg)";
    document.getElementById("minutes").style.transform = "rotate(" + (minutes*6.0-180) + "deg)";
    document.getElementById("seconds").style.transform = "rotate(" + (seconds*6.0-180) + "deg)";
}
updateClock();
setInterval(updateClock, 1000);