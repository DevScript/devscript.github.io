//YT video id
var vid_id = 'gj20ydwmxa0';

// Set the date we're counting down to
var countDownDate = new Date("Sept 18, 2020 17:20:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
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
		var timer = document.querySelector(".event_timer");
		var cover = document.querySelector(".event-cover");
		var timer_child = timer.lastElementChild;
		var cover_child = cover.lastElementChild;

		cover.removeChild(cover_child);
		timer.remove(); 

		var iframe = document.createElement("iframe");
		iframe.src = "https://www.youtube.com/embed/"+vid_id;
		iframe.height = "315";
		iframe.frameBorder = 0;
		iframe.setAttribute('allowFullScreen', '')

		cover.appendChild(iframe);
		document.getElementsByClassName("link")[0].href =
			'https://www.youtube.com/watch?v='+vid_id;
		document.getElementsByClassName("btn-register")[0].innerHTML =
			"Watch Live on YT";[0].remove();
	}
}, 1000);
