export function openNewSchedule() {
  const yourSchedule = document.querySelector(".your-schedule");
  const newSchedule = document.querySelector(".new-schedule");
  const wrapper = document.querySelector("#button-id");

  if (!yourSchedule || !newSchedule || !wrapper) {
    console.warn("Um ou mais elementos não encontrados:", {
      yourSchedule,
      newSchedule,
      wrapper,
    });
    return;
  }

  wrapper.addEventListener("click", () => {
    yourSchedule.classList.add("blur-overlay");
    wrapper.classList.remove("flex", "center");
    wrapper.classList.add("disabled");
    newSchedule.classList.remove("disabled");
    newSchedule.classList.add("enabled");
  });
}
