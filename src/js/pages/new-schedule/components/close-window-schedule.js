export function closeWindowSchedule() {
  const buttonClose = document.querySelector(".close img");
  const pageNewSchedule = document.querySelector(".new-schedule");
  const pageYourSchedule = document.querySelector(".your-schedule");
  const buttonSchedule = document.querySelector(".button");

  buttonClose.addEventListener("click", () => {
    pageNewSchedule.classList.remove("enabled");
    pageNewSchedule.classList.add("disabled");
    pageYourSchedule.classList.remove("disabled", "blur-overlay");
    pageYourSchedule.classList.add("enabled");
    buttonSchedule.classList.remove("disabled");
    buttonSchedule.classList.add("flex", "center");
  });
}
