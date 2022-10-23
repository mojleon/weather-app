export default class UI {
  constructor(location) {
    this.location = location;
  }

  main(weather) {
    const div = document.createElement("div");
    const temp = weather.main.temp;
    this.appendToDom(div, temp, "temp");
  }

  clouds(weather) {}

  wind(weather) {}

  timezones(weather) {}

  visibility(weather) {}

  sys(weather) {}

  coord(weather) {}

  weather(weather) {}

  timezone(weather) {}

  appendToDom(parent, child, className) {
    parent.classList.add(className);
    parent.append(child);
    document.body.append(parent);
  }
}
