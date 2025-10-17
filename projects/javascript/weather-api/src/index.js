import "./style.css";
import getWeather from "./getWeather";
import getLocation from "./getLocation";
import loadFrontend from "./frontend";

(async () => {
  let location = await getLocation();
  let weather = await getWeather(location.city, location.country);
  console.log(weather);
  loadFrontend(weather.address, weather.description, weather.days);
})();
