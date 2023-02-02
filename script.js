let hoursHtml = document.getElementById("hours").querySelector(".remaining");
let minutesHtml = document
	.getElementById("minutes")
	.querySelector(".remaining");
let secondsHtml = document
	.getElementById("seconds")
	.querySelector(".remaining");

let hours = 60;
let minutes = 0;
let seconds = 0;
hoursHtml.textContent = "00";
minutesHtml.textContent = "00";
secondsHtml.textContent = "00";

let timer = setInterval(() => {
	if (hours == 0 && minutes == 0 && seconds == 0) {
		clearInterval(timer);
		document.getElementById("timer").innerHTML = "<h2>Timout</h2>";
	}

	if (minutes == 0 && seconds == 0) {
		minutes = 60;
		hoursHtml.textContent = doubleDigit(--hours);
	}

	if (seconds == 0) {
		seconds = 60;
		minutesHtml.textContent = doubleDigit(--minutes);
	}

	secondsHtml.textContent = doubleDigit(--seconds);
}, 1000);

function doubleDigit(digit) {
	if (String(digit).length <= 1) digit = "0" + digit;
	return digit;
}
