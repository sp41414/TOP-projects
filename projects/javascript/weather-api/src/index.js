import "./style.css";
import getWeather from "./getWeather";
import getLocation from "./getLocation";
import loadFrontend from "./frontend";

(async () => {
  const submitButton = document.getElementById("submit-button");
  const locationInput = document.getElementById("location");
  submitButton.addEventListener("click", async () => {
    let locationValue = locationInput.value.trim();
    let weatherValue = await getWeather(locationValue, "");
    if (weatherValue.address || weatherValue.description || weatherValue.days) {
      loadFrontend(
        weatherValue.address,
        weatherValue.description,
        weatherValue.days,
      );
      locationInput.setCustomValidity("");
    } else {
      locationInput.setCustomValidity("Invalid location, please try again");
      locationInput.reportValidity();
    }
  });
  let location = await getLocation();
  let weather = await getWeather(location.city, location.country);
  loadFrontend(weather.address, weather.description, weather.days);
})();
