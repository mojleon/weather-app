export default class Url {
  getLocation() {
    const url = new URL(window.location.href);
    const urlLocation =
      url.searchParams.get("location") !== null
        ? url.searchParams.get("location")
        : this.location;
    return urlLocation;
  }
}
