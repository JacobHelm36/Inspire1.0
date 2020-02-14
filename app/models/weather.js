export default class Weather {
  constructor(data) {
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
  }
  get weatherTemplate(){
    return `<div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Weather</h5>
                <p class="card-text">${this.city}</p>
                <p class="card-text">${this.kelvin}</p>
              </div>
            </div>
  `
  }
}