import WeatherService from "../services/weather-service.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.
function drawWeather() {
  document.getElementById("weather").innerHTML = store.State.weather.weatherTemplate;
}
//TODO Complete rendering data to the screen
export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
  }
}
