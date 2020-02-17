import WeatherController from "./controllers/weather-controller.js";
import TodoController from "./controllers/todo-controller.js";
import QuoteController from "./controllers/quote-controller.js";
import ImageController from "./controllers/image-controller.js"

//TODO Dont forget to register all your controllers
class App {
  constructor() {
    this.weatherController = new WeatherController();
    this.quoteController = new QuoteController();
    this.imageController = new ImageController()
    this.todoController = new TodoController();
  }
}

window["app"] = new App();
