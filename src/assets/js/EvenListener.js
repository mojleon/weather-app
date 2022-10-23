export default class EventListener {
  submit() {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const location = document.querySelector("input").value;
      const data = new Data(location);
      const ui = new UI(location);
      data.get(location).then((data) => {
        ui.main(data);
      });
    });
  }
}
