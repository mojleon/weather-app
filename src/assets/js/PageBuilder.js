import Data from "./Data";
import UI from "./UI";

const location = getLocation();
const data = new Data(location);
const ui = new UI(location);

async function setup() {
  let weather = await data.get();
  ui.main(weather);
}

function getLocation() {
  const url = new URL(window.location.href);
  const urlLocation =
    url.searchParams.get("location") !== null
      ? url.searchParams.get("location")
      : "Amsterdam";

  return urlLocation;
}

setup();
