export default class data {
  constructor() {
    this.data = {
      // ...
    };
  }

  get(location) {
    const img = document.querySelector("img");
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=36c5d62b2c9b37a5af2910b3cca8f0a8`,
      { mode: "cors" }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response);
      });
  }
}
