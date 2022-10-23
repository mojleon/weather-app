export default class UI {
  constructor(location) {
    this.location = location;
  }

  main(weather) {
    console.log(weather);

    const container = document.createElement("div");
    container.classList.add("container");
    const temp = weather.main.temp;
    const weatherDescription = weather.weather[0].description;

    container.append(
      this.appendToDom(weatherDescription, "weather-description"),
      this.appendToDom(this.location, "location"),
      this.appendDate(),
      parseInt(temp - 273.15) + " °C",
      this.lineBreak(),
      this.appendIcon(weather.weather[0].icon),
      this.lineBreak(),
      this.appendInput()
    );
    document.body.append(container);
    document.body.append(this.appendBackground());
  }

  lineBreak() {
    return document.createElement("br");
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

  appendDate() {
    const date = new Date();
    const time =
      date.toLocaleTimeString().match(/(\d{1,2}:\d{2})/)[0] +
      date.toLocaleTimeString().match(/([A-Z])\w+/)[0];
    const datum = date.toDateString();
    const dateContainer = document.createElement("div");
    const lineBreak = document.createElement("br");

    dateContainer.classList.add("date");
    dateContainer.append(datum, lineBreak, time);
    return dateContainer;
  }

  appendIcon(icon) {
    const img = document.createElement("img");
    img.classList.add("icon");
    img.src = `http://openweathermap.org/img/w/${icon}.png`;
    return img;
  }

  appendInput() {
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.placeholder = "Enter a location";
    input.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        this.location = e.target.value;
      }
    });
    form.append(input);
    return form;
  }

  appendBackground() {
    const background = document.createElement("div");
    const clouds = [
      document.createElement("div"),
      document.createElement("div"),
      document.createElement("div"),
    ];
    background.classList.add("background");
    clouds.forEach((cloud) => {
      cloud.classList.add("cloud");
      background.append(cloud);
    });
    return background;
  }
}
