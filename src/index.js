import _ from "lodash";
import Data from "./assets/js/Data";
import UI from "./assets/js/UI";
import "./style.scss";

let location = "Amsterdam";
const data = new Data(location);
const ui = new UI(location);

async function setup() {
  let weather = await data.get();
  ui.main(weather);
}

setup();
