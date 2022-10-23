export default class UI {
  constructor(location) {
    this.location = location;
  }

  main(weather) {
    console.log(weather);
    const container = document.createElement("div");
    container.classList.add("container");
    const temp = weather.main.temp;
    const feelsLike = weather.main.feels_like;

    container.append(
      this.appendToDom(this.location, "location"),
      this.appendToDom(temp, "temp"),
      this.appendToDom(feelsLike, "feels-like")
    );

    document.body.append(container);
  }

  clouds(weather) {}

  wind(weather) {}

  timezones(weather) {}

  visibility(weather) {}

  sys(weather) {}

  coord(weather) {}

  weather(weather) {}

  timezone(weather) {}

  appendToDom(child, className) {
    const parent = document.createElement("div");
    parent.classList.add(className);
    parent.append(child);
    return parent;
  }
}
