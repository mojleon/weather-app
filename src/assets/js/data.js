export default class Data {
  constructor(location) {
    this.location = location;
  }

  async get() {
    // const location = this.url.getLocation();
    const location = this.location;

    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=36c5d62b2c9b37a5af2910b3cca8f0a8`,
      { mode: "cors" }
    );
    const returnValue = await response.json();
    return returnValue;
  }
}
