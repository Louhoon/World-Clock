function updateTime() {
  //local time
  let currentLocalTimeElement = document.querySelector("#current-local-time");
  let currentLocalpositionElement = document.querySelector(
    "#current-local-position"
  );
  let currentTime = moment.tz.guess();
  let localTime = moment().tz(currentTime);

  currentLocalTimeElement.innerHTML = `${localTime.format("HH:mm:ss")}`;
  currentLocalpositionElement.innerHTML = currentTime.replace("/", ", ");

  //london
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonTimeElement = londonElement.querySelector("#london-time");
    let londonTime = moment().tz("Europe/London");

    londonTimeElement.innerHTML = `${londonTime.format(
      "hh:mm:ss"
    )} <small>${londonTime.format("A")}<small>`;
  }

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyTimeElement = sydneyElement.querySelector("#sydney-time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyTimeElement.innerHTML = `${sydneyTime.format(
      "hh:mm:ss"
    )} <small>${sydneyTime.format("A")}<small>`;
  }

  //istanbul
  let istanbulElement = document.querySelector("#istanbul");
  if (istanbulElement) {
    let istanbulTimeElement = istanbulElement.querySelector("#istanbul-time");
    let istanbulTime = moment().tz("Asia/Istanbul");

    istanbulTimeElement.innerHTML = `${istanbulTime.format(
      "hh:mm:ss"
    )} <small>${istanbulTime.format("A")}<small>`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#update-cities");

  citiesElement.innerHTML = `
						<ul class="cities">
							<li class="city">${cityName}<span class="hour">${cityTime.format(
    "hh:mm:ss"
  )} <small>${cityTime.format("A")}</small></span></li>
						</ul>`;
}

function displayHomeCities() {
  let homecitiesElement = document.querySelector("#update-cities");
  homecitiesElement.innerHTML = `<div class="displayed-cities" id="update-cities">
				<ul class="cities">
					<li class="city" id="london">London<span class="hour" id="london-time"></span></li>
					<li class="city" id="sydney">Sydney<span class="hour" id="sydney-time"></span></li>
					<li class="city" id="istanbul">Istanbul<span class="hour" id="istanbul-time"></span></li>
				</ul>
			</div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#cities");
citiesSelectElement.addEventListener("change", updateCity);

let homeMenuCityBtn = document.querySelector("#update-timezone-cities-btn");
homeMenuCityBtn.addEventListener("click", displayHomeCities);
