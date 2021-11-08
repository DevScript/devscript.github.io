event_month = document.querySelector('.event_month')
event_day = document.querySelector('.event_day')
event_time = document.querySelector('.event_time')
bannerImg = document.querySelector('.banner-img')

//YT video id
var vid_id = 'gj20ydwmxa0';
var date = "Mar 25, 2021 12:00:00"
var dayBanner = './img/day1.jpeg'

event_month.innerHTML = date.slice(0, 3)
event_day.innerHTML = date.slice(4, 6)
event_time.innerHTML = date.slice(13, 18)
bannerImg.src = dayBanner

// Set the date we're counting down to
var countDownDate = new Date(date).getTime();

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


previousDayData = [
	// {
	// 	day: "Day 1",
	// 	yt: "https://www.youtube.com/watch?v=1",
	// 	resources: "https://github.com/DevScript/Python-Bootcamp/tree/master/1"
	// },
]
previousEvent = ''
previousDayData.forEach(data => {
	resource = ''
	if(data.resources) {
		previousEvent = `
						<div class="event-prev-container">
							<a href=${data.yt} target='_blank' class='text-muted'>
								<div class="event-prev-title day">
									<h4>${data.day}</h4>
									<i class="fab fa-youtube social-icon"></i>
								</div>
							</a>
							<a href=${data.resources} class='text-muted'>
								<div class="event-prev-title">
									<h4>Resources</h4>
									<i class="fab fa-github social-icon"></i>
								</div>
							</a>
						</div>` + previousEvent
	} else {
		previousEvent = `
						<div class="event-prev-container">
							<a href=${data.yt} target='_blank' class='text-muted'>
								<div class="event-prev-title">
									<h4>${data.day}</h4>
									<i class="fab fa-youtube social-icon"></i>
								</div>
							</a>
						</div>` + previousEvent
	}
})

previousEventContainer = document.querySelector('.event-previous')
previousEventContainer.innerHTML = previousEvent
