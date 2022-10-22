export default class UI {
  constructor() {}

  setup() {}

  async displayWeather(location) {
    const weather = await data.get(location);
    console.log(weather);
  }
}
