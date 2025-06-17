export function newSchedule() {
  const yourSchedule = document.querySelector(".your-schedule");
  const newSchedule = document.querySelector(".new-schedule");
  const button = document.querySelector(".button");
  if (!button) return;

  button.addEventListener("click", (event) => {
    yourSchedule.classList.add("blur-overlay");
    button.classList.remove("flex", "center");
    button.classList.add("disabled");
    newSchedule.classList.remove("disabled");
    newSchedule.classList.add("enabled");
  });
}
