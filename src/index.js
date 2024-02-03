function updateTime() {
	//london
	let londonElement = document.querySelector("#london");
	let londonTimeElement = document.querySelector("#london-time");
	let londonTime = moment().tz("Europe/London");
	
	londonTimeElement.innerHTML = `${londonTime.format(
		"h:mm:ss"
	)} <small>${londonTime.format("A")}<small>`;
	
	//Sydney
	let sydneyElement = document.querySelector("#sydney");
	let sydneyTimeElement = document.querySelector("#sydney-time");
	let sydneyTime = moment().tz("Australia/Sydney");
	
	sydneyTimeElement.innerHTML = `${sydneyTime.format(
		"h:mm:ss"
	)} <small>${sydneyTime.format("A")}<small>`;
	
	//istanbul
	let istanbulElement = document.querySelector("#istanbul");
	let istanbulTimeElement = document.querySelector("#istanbul-time");
	let istanbulTime = moment().tz("Asia/Istanbul");
	
	istanbulTimeElement.innerHTML = `${istanbulTime.format(
		"h:mm:ss"
	)} <small>${istanbulTime.format("A")}<small>`;
}

updateTime();
setInterval(updateTime, 1000);



