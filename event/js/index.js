// Set the date we're counting down to
var countDownDate = new Date("Sept 19, 2020 20:00:00").getTime();
console.log(countDownDate)

// Update the count down every 1 second
var x = setInterval(function() {

	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	document.getElementById("days").innerHTML = days;
	document.getElementById("hrs").innerHTML = hours;
	document.getElementById("mins").innerHTML = minutes;
	document.getElementById("sec").innerHTML = seconds;

	// If the count down is over, write some text 
	if (distance < 0) {
		clearInterval(x);
		var timer = document.querySelector('.event_timer'); 
		var cover = document.querySelector('.event-cover'); 
		var timer_child = timer.lastElementChild; 
		var cover_child = cover.lastElementChild;

		cover.removeChild(cover_child);

		while (timer_child) { 
			timer.removeChild(timer_child); 
			timer_child = timer.lastElementChild;
		}

		var iframe = document.createElement('iframe');
		iframe.src='https://www.youtube.com/embed/wQ3bfnD5PB4';
		iframe.width='560';
		iframe.height='315';
		iframe.frameborder="0";

		cover.appendChild(iframe);
		document.getElementsByClassName('btn-register')[0].innerHTML = 'Watch Live on YT';
	}
}, 1000);
