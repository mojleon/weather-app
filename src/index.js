import _ from "lodash";
import Data from "./assets/js/Data";
import UI from "./assets/js/UI";
import "./style.css";

async function loadJS() {
  const data = new Data();
  let weather = await data.get("Amsterdam");
  console.log(weather, "test");

  let ui = new UI();
  ui.displayWeather("Amsterdam");
}

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
loadJS();
