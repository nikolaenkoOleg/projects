$(document).ready(function(){ // при ширине >1200px подключаем плагин relevator
	if ($(window).width() > 1200) {
		var scriptRelevator = document.createElement('script');
		scriptRelevator.src = 'js/fm.revealator.jquery.min.js';
		document.head.appendChild(scriptRelevator);

		var styleRelevator = document.createElement('link');
		styleRelevator.rel = 'stylesheet';
		styleRelevator.href = 'css/fm.revealator.jquery.min.css';
		document.head.appendChild(styleRelevator);
	}
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
		loop: true,
    margin: 10,
		nav: true,
		items: 1
	});
});

$(function() {
	$('.button').click(function(){
		$('.button').toggleClass('active');
		$('.navigation__list').toggleClass('dropdown');
	});
});

function countdown(dateEnd) {
  var timer, days, hours, minutes, seconds;
 
  dateEnd = new Date(dateEnd);
  dateEnd = dateEnd.getTime();
 
  if ( isNaN(dateEnd) ) {
    return;
  }
 
  timer = setInterval(calculate, 1000);
 
  function calculate() {
    var dateStart = new Date();
    var dateStart = new Date(dateStart.getUTCFullYear(),
                             dateStart.getUTCMonth(),
                             dateStart.getUTCDate(),
                             dateStart.getUTCHours(),
                             dateStart.getUTCMinutes(),
                             dateStart.getUTCSeconds());
    var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)
 
    if ( timeRemaining >= 0 ) {
      days    = parseInt(timeRemaining / 86400);
      timeRemaining   = (timeRemaining % 86400);
      hours   = parseInt(timeRemaining / 3600);
      timeRemaining   = (timeRemaining % 3600);
      minutes = parseInt(timeRemaining / 60);
      timeRemaining   = (timeRemaining % 60);
      seconds = parseInt(timeRemaining);
 
      document.getElementById("timer__days").innerHTML    = parseInt(days, 10);
      document.getElementById("timer__hours").innerHTML   = ("0" + hours).slice(-2);
      document.getElementById("timer__minutes").innerHTML = ("0" + minutes).slice(-2);
      document.getElementById("timer__seconds").innerHTML = ("0" + seconds).slice(-2);
    } else {
      return;
    }
  }
 
  function display(days, hours, minutes, seconds) {}
}
 
 
 
countdown('05/05/2019 03:14:07 AM');