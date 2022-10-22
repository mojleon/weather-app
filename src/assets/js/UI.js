export default class UI {
  constructor(location) {
    this.location = location;
  }

  main(weather) {
    const temp = weather.main.temp;
    console.log(weather);
  }

  clouds(weather) {}

  wind(weather) {}

  timezones(weather) {}

  visibility(weather) {}

  sys(weather) {}

  coord(weather) {}

  weather(weather) {}

  timezone(weather) {}
}
